import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FundingDetail from './FundingDetail';
import PopUp from '../components/PopUp';
import Header from '../components/Header';
import { getFunding } from '../apis/fundingApi';
import Footer from '../components/Footer';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const Fund = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 1000px;
  padding: 50px 0px;
`;

const Category = styled.div`
  font-size: 18px;
  width: 100px;
  height: 40px;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const ProTitle = styled.div`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 50px;
`;

const Grids = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: 25px 0px;
  gap: 50px;
`;

const Container = styled.div``;

const ProImg = styled.img`
  width: 650px;
  height: 500px;
`;

const CurrContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CurrContentTitle = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
`;

const ItemDetail = styled.div`
  display: flex;
  align-items: flex-end;
`;

const CurrContentItem = styled.div`
  font-weight: 400;
  font-size: 45px;
  margin-bottom: 10px;
`;

const Detail = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
  margin-left: 5px;
  margin-right: 10px;
`;

const Percentage = styled(Detail)`
  font-size: 21px;
  font-weight: 400;
`;

const Hr = styled.hr`
  border: 0;
  height: 1px;
  background: lightgray;
  margin-bottom: 20px;
`;

const GoalContent = styled.div`
  display: flex;
  margin-top: 10px;
`;

const GoalContentItem = styled.span`
  font-size: 16px;
`;

const GoalContentTitle = styled(GoalContentItem)`
  font-weight: bold;
  margin-right: 30px;
`;

const GridsButtons = styled(Grids)`
  grid-template-columns: 1fr 5fr;
  gap: 10px;
`;

const Likes = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
  border-radius: 5px;
  width: 50px;
  height: 50px;
  font-size: 13px;
  background-color: white;
  &:active {
    color: red;
  }
`;

const formatDate = timestamp => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}/${month}/${day}`;
};

const converter = num => {
  if (typeof num === 'undefined') {
    return '';
  }
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

function Funding() {
  const { roomId, fundingId } = useParams();

  const { isLoading, data: fund } = useQuery(['fund', roomId], () => getFunding(fundingId), {
    onSuccess: data => {
      console.log('Funding data:', data);
    },
  });

  console.log(fund);

  return (
    <>
      <Header />
      <Fund>
        <Category> {fund?.category_name} </Category>
        <ProTitle> {fund?.funding_title} </ProTitle>
        <Grids>
          <Container>
            <ProImg src={fund?.funding_image} />
          </Container>
          <Container>
            <CurrContent>
              <CurrContentTitle> 모인 금액 </CurrContentTitle>
              <ItemDetail>
                <CurrContentItem> {converter(fund?.current_amount)} </CurrContentItem>
                <Detail>원</Detail>
                <Percentage> {fund?.progress}%</Percentage>
              </ItemDetail>
              <CurrContentTitle> 후원자 </CurrContentTitle>
              <ItemDetail>
                <CurrContentItem> {converter(fund?.backers_count)} </CurrContentItem>
                <Detail>명</Detail>
              </ItemDetail>
              <CurrContentTitle> 후원 금액 </CurrContentTitle>
              <ItemDetail>
                <CurrContentItem> {converter(fund?.price)} </CurrContentItem>
                <Detail> 원 + </Detail>
              </ItemDetail>
              <Detail> 배송비 포함(제주도/도서산간:3,000원 추가 후원) </Detail>
            </CurrContent>
            <Hr />
            <GoalContent>
              <GoalContentTitle> 목표 금액 </GoalContentTitle>
              <GoalContentItem> {converter(fund?.goal_amount)}원 </GoalContentItem>
            </GoalContent>
            <GoalContent>
              <GoalContentTitle> 펀딩 기간 </GoalContentTitle>
              <GoalContentItem>
                {formatDate(fund?.start_date)} ~ {formatDate(fund?.end_date)}
              </GoalContentItem>
            </GoalContent>
            <GoalContent>
              <GoalContentTitle> 결제 </GoalContentTitle>
              <GoalContentItem> 목표금액 달성시 {formatDate(fund?.budget_date)}에 결제 진행 </GoalContentItem>
            </GoalContent>
            <GridsButtons>
              <Likes>
                <FavoriteBorderIcon fontSize="small" />
                {fund?.like_num}
              </Likes>
              <PopUp />
            </GridsButtons>
          </Container>
        </Grids>
        <FundingDetail fundDetail={fund} />
      </Fund>
      <Footer />
    </>
  );
}
export default Funding;
