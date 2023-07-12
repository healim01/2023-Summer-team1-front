import styled from 'styled-components';

const fundDetail = {
  host_img: 'https://cdn.mhns.co.kr/news/photo/201911/328663_435478_2711.jpg',
  host_name: 'TXT 연준',
  team_img: 'https://img.animalplanet.co.kr/news/2020/09/26/700/9x0li40mv95jp9or6cg0.jpg',
  team_name: '여우인간',
  intro_img:
    'https://tumblbug-psi.imgix.net/da55d49c72146cd5042c3c71153d4c0712ef9277/29b42ad5398ae28327d1e996a009f0e58464a1b4/f8fb2e4966d583fc2bc0c490ae456479e1d0083a/35e523f1-cc33-4d44-bca1-e373b9a52712.jpg?ixlib=rb-1.1.0&w=1240&auto=format%2C%20compress&lossless=true&ch=save-data&s=9cd89c312330de60b70afe19b41c4329',
  budget:
    '현재 상품의 리워드 품목중 봉제 리워드는 일부는 최종 샘플 완료된 단계이며, 목표 금액 2,000,000원은 최소 제작수량에 따른 금액으로 후원금은 리워드 제작과 포장 및 배송을 위한 예산으로 활용될 예정입니다.' +
    '\n\n제작 비용\n\n인건비\n\n원재료 구입비\n\n인쇄비\n\n제품 발주비(생산비)\n\n배송 비용\n\n배송비\n\n포장재 구매비',
  schedule:
    '06월 23일: 펀딩 시작일\n \n 07월 13일: 펀딩 종료일\n\n07월 14일~07월 20일 : 후원자 결제 기간(제품 생산 시작)\n\n07월 21일~09월 21일 : 제품 생산 기간\n\n09월 26일 : 선물 예상 전달일',
  team: '안녕하세요. 저희는 봉제 인형의 의상 및 소품을 만드는 아이돌룩입니다.\n\n서울 홍대 1호점과 부산 서면 2호점에서 봉제인형이 입을 수 있는 의상으로 찾아뵙고 있습니다.',
};

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 980px;
`;

const DetailButtons = styled.div`
  display: flex;
`;

const DetailButton = styled.button`
  width: 60px;
  height: 30px;
  border: 1px solid lightgray;
  border-radius: 20px;
  background-color: white;
  margin-right: 10px;
`;

const BodyGrids = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: 25px 0px;
  gap: 50px;
`;

const DetailBody = styled.div`
  border: 1px solid lightgray;
  border-radius: 5px;
`;

const DetailTitle = styled.div`
  display: flex;
  font-weight: bold;
  margin: 30px;
  font-size: 25px;
`;

const Intro = styled.img`
  width: 500px;
`;

const DetailText = styled.div`
  display: flex;
  text-align: start;
  font-size: 18px;
  margin: 30px;
`;

const TeamInfos = styled.div`
  border: 1px solid lightgray;
  border-radius: 5px;
  height: 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TeamInfo = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  margin-bottom: 10px;
`;

const TeamImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 5px;
`;

const TeamButton = styled.button`
  width: 150px;
  height: 40px;
  border: 1px solid lightgray;
  margin-left: 10px;
  background-color: white;
`;

const AdImg = styled.img`
  width: 300px;
  margin-bottom: 30px;
`;

const DetailDummy = styled.div``;

function FundingDetail() {
  return (
    <>
      <Detail>
        <DetailButtons>
          <DetailButton>소개</DetailButton>
          <DetailButton>예산</DetailButton>
          <DetailButton>일정</DetailButton>
          <DetailButton>팀 소개</DetailButton>
        </DetailButtons>
        <BodyGrids>
          <DetailBody>
            <DetailTitle> 소개 </DetailTitle>
            <Intro src={fundDetail.intro_img} />
            <DetailTitle> 예산 </DetailTitle>
            <DetailText> {fundDetail.budget} </DetailText>
            <DetailTitle> 일정 </DetailTitle>
            <DetailText> {fundDetail.schedule} </DetailText>
            <DetailTitle> 팀 소개 </DetailTitle>
            <DetailText> {fundDetail.team} </DetailText>
          </DetailBody>
          <DetailDummy>
            <AdImg src="https://www.interview365.com/news/photo/202108/98992_125828_4958.png" />
            <TeamInfos>
              <TeamInfo> 호스트 </TeamInfo>
              <TeamInfo>
                <TeamImg src={fundDetail.host_img} />
                {fundDetail.host_name}
                <TeamButton> 팔로우 하기 </TeamButton>
              </TeamInfo>
              <TeamInfo> 팀 </TeamInfo>
              <TeamInfo>
                <TeamImg src={fundDetail.team_img} />
                {fundDetail.team_name}
                <TeamButton> 문의하기 </TeamButton>
              </TeamInfo>
            </TeamInfos>
          </DetailDummy>
        </BodyGrids>
      </Detail>
    </>
  );
}
export default FundingDetail;
