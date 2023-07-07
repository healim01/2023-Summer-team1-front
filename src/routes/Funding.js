import styled from "styled-components";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const fund = {
    "funding_id": 1,
    "host_id": "danaka",
    "seller_id": "healim01", 
    "category_id": "굿즈",
    "goal_amount": 5000000,
    "is_active": 3,
    "created_date": "2023-06-23",
    "title": "열대의 여왕! 보랏빛 뽀얀달달 속살, 망고스틴이 최고야!",
    "name": "리얼 망고스틴 (한병)",
    "image": "https://tumblbug-pci.imgix.net/da55d49c72146cd5042c3c71153d4c0712ef9277/f730bd12dcaa374a19d198bfb8dc1ddbed5db820/91d99951e17b746ba57acf0af371a2f01a9bfa2c/8ee7bf23-cda9-49e9-bd4b-46cedbd12210.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=3e62ecf992a4257e3f5b2187c6f1cf8c",
    "description": "토종 영광 고추가루",
    "price": 1000000,
    "start_date": "2023-07-01",
    "end_date": "2023-07-30",	
    "likes" : 40,
};

const fund_amounts = {
    "funding_id": 1,
    "current_amount": 30000000,
    "backers_count": 30,
};

const Fund = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px 100px; 
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

const Product = styled.button`
    margin: 20px 0px;
    font-size: 13px;
    width: 300px;
    height: 50px;
    border: 1px solid lightgray;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    font-size: 15px;
    background-color: white;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

    &:hover {
    border: 1px solid black;
  }
`;

const Name = styled.div`
    margin-right: 10px;
    font-weight: 400;
`;

const Price = styled.div` 
    font-weight: bold;
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

const Buy = styled.button` 
    width: 250px;
    height: 50px;
    background-color: red;
    color: white;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
`;


function Funding() {
    fund_amounts.current_amount = fund_amounts.current_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    fund.goal_amount = fund.goal_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    fund.price = fund.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return <Fund>
        <Category> { fund.category_id } </Category> 
        <ProTitle> { fund.title } </ProTitle>
         <Grids>
            <Grid>
                <ProImg src={fund.image}/>
            </Grid>
            <Grid>
                <CurrContent>
                    <CurrContentTitle> 모인 금액 </CurrContentTitle>
                    <ItemDetail>
                        <CurrContentItem> { fund_amounts.current_amount } </CurrContentItem>   
                        <Detail>원</Detail> 
                        <Percentage>200%</Percentage>
                    </ItemDetail>
                    {/* <CurrContentItem> fund_amounts. </CurrContentItem> */}
                    <CurrContentTitle> 남은 시간 </CurrContentTitle>
                    <ItemDetail>
                        <CurrContentItem> { fund_amounts.backers_count-25 } </CurrContentItem>
                        <Detail>일</Detail> 
                    </ItemDetail>
                    <CurrContentTitle> 후원자 </CurrContentTitle>
                    <ItemDetail>
                        <CurrContentItem> { fund_amounts.backers_count } </CurrContentItem>
                        <Detail>명</Detail> 
                    </ItemDetail>
                </CurrContent>
                <Hr />
                <GoalContent>
                    <GoalContentTitle> 목표 금액 </GoalContentTitle>
                    <GoalContentItem> { fund.goal_amount }원 </GoalContentItem>
                </GoalContent>
                <GoalContent>   
                    <GoalContentTitle> 펀딩 기간 </GoalContentTitle>
                    <GoalContentItem> { fund.start_date } ~ { fund.end_date } </GoalContentItem>
                </GoalContent>
                <Product>
                    <Name> { fund.name } </Name>
                    <Price> { fund.price }원</Price>
                </Product>
                <GridsButtons>
                    <Likes>
                        <FavoriteBorderIcon fontSize="small"/>
                        { fund.likes }
                    </Likes>
                    <Buy>이 프로젝트 후원하기</Buy>
                </GridsButtons>
            </Grid>
         </Grids>
    </Fund>;
}
export default Funding;