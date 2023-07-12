import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FundingDetail from './FundingDetail';
import PopUp from '../components/PopUp';
import Header from '../components/Header';
import { useEffect } from 'react';
import { getTwoFunding } from '../apis/funding';

const fund = {
  funding_id: 1,
  host_id: 'danaka',
  seller_id: 'healim01',
  category_id: '굿즈',
  goal_amount: 1000000,
  is_active: 3,
  created_date: '2023-06-23',
  title: '보송보송 여우 보송이 키링 인형',
  image:
    'https://tumblbug-pci.imgix.net/da55d49c72146cd5042c3c71153d4c0712ef9277/29b42ad5398ae28327d1e996a009f0e58464a1b4/f8fb2e4966d583fc2bc0c490ae456479e1d0083a/75b84011-2d99-4db5-9c4e-afab213e4e98.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=b571cc96917ee605da1e11b26bacc131',
  price: 10000,
  start_date: Date.now(),
  end_date: '2023.07.30.',
  biling_date: '2023.08.01.',
  likes: 40,
};

const fund_amounts = {
  funding_id: 1,
  current_amount: 3000000,
  backers_count: 300,
};

const Fund = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 980px;
  padding: 50px 0px;
`;

const Category = styled.div`
  font-size: 13px;
  width: 100px;
  height: 30px;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const ProTitle = styled.div`
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 50px;
`;

const Grids = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: 25px 0px;
  gap: 50px;
`;

const Grid = styled.div``;

const ProImg = styled.img`
  width: 600px;
  height: 450px;
`;

const CurrContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CurrContentTitle = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;

const ItemDetail = styled.div`
  display: flex;
  align-items: flex-end;
`;

const CurrContentItem = styled.div`
  font-weight: 400;
  font-size: 40px;
  margin-bottom: 10px;
`;

const Detail = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
  margin-left: 5px;
  margin-right: 10px;
`;

const Percentage = styled(Detail)`
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
  font-size: 12px;
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
  }
`;

const ratio = (fund_amounts.current_amount / fund.goal_amount) * 100;

const formatDate = timestamp => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}/${month}/${day}`;
};

function Funding() {
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getTwoFunding(1, 1);
      console.log(data);
    };
    fetchApi();
  }, []);

  fund_amounts.current_amount = fund_amounts.current_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  fund.goal_amount = fund.goal_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  fund.price = fund.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <>
      <Header />
      <Fund>
        <Category> {fund.category_id} </Category>
        <ProTitle> {fund.title} </ProTitle>
        <Grids>
          <Grid>
            <ProImg src={fund.image} />
          </Grid>
          <Grid>
            <CurrContent>
              <CurrContentTitle> 모인 금액 </CurrContentTitle>
              <ItemDetail>
                <CurrContentItem> {fund_amounts.current_amount} </CurrContentItem>
                <Detail>원</Detail>
                <Percentage> {ratio}%</Percentage>
              </ItemDetail>
              <CurrContentTitle> 후원자 </CurrContentTitle>
              <ItemDetail>
                <CurrContentItem> {fund_amounts.backers_count} </CurrContentItem>
                <Detail>명</Detail>
              </ItemDetail>
              <CurrContentTitle> 후원 금액 </CurrContentTitle>
              <ItemDetail>
                <CurrContentItem> {fund.price} </CurrContentItem>
                <Detail> 원 + </Detail>
              </ItemDetail>
              <Detail> 배송비 포함(제주도/도서산간:3,000원 추가 후원) </Detail>
            </CurrContent>
            <Hr />
            <GoalContent>
              <GoalContentTitle> 목표 금액 </GoalContentTitle>
              <GoalContentItem> {fund.goal_amount}원 </GoalContentItem>
            </GoalContent>
            <GoalContent>
              <GoalContentTitle> 펀딩 기간 </GoalContentTitle>
              <GoalContentItem>
                {' '}
                {formatDate(fund.start_date)} ~ {formatDate(fund.end_date)}{' '}
              </GoalContentItem>
              {/* TODO :: 며칠 남았는지 작업 안함 */}
            </GoalContent>
            <GoalContent>
              <GoalContentTitle> 결제 </GoalContentTitle>
              <GoalContentItem> 목표금액 달성시 {formatDate(fund.biling_date)}에 결제 진행 </GoalContentItem>
            </GoalContent>
            <GridsButtons>
              <Likes>
                <FavoriteBorderIcon fontSize="small" />
                {fund.likes}
              </Likes>
              <PopUp />
            </GridsButtons>
          </Grid>
        </Grids>
        <FundingDetail />
      </Fund>
      ;
    </>
  );
}
export default Funding;
