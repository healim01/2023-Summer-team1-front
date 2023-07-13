import { useRef } from 'react';
import styled from 'styled-components';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import EmailIcon from '@mui/icons-material/Email';

const Detail = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailButtons = styled.div`
  display: flex;
`;

const DetailButton = styled.button`
  font-size: 16px;
  width: 75px;
  height: 30px;
  border: 2px solid #ee7f41;
  border-radius: 20px;
  background-color: white;
  margin-right: 15px;

  &:hover {
    background-color: #ee7f41;
    color: white;
  }

  &:active {
    /* border: 1px solid black; */
    font-weight: bold;
  }
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
  width: 650px;
`;

const DetailTitle = styled.div`
  display: flex;
  font-weight: bold;
  margin: 30px;
  font-size: 30px;
`;

const Intro = styled.img`
  width: 550px;
`;

const DetailText = styled.div`
  display: flex;
  text-align: start;
  margin: 30px;
  margin-bottom: 50px;
  font-size: 20px;
  word-break: keep-all;
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
  font-size: 16px;
  align-items: center;
  margin-bottom: 10px;
`;

const TeamImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
`;

const TeamButton = styled.button`
  width: 150px;
  height: 40px;
  border: 1px solid lightgray;
  margin-left: 15px;
  font-size: 16px;
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  &:active {
    border: 1px solid black;
  }
`;

const AdImg = styled.img`
  width: 320px;
  margin-bottom: 30px;
`;

const DetailDummy = styled.div``;

function FundingDetail(props) {
  const sectionOne = useRef(null);
  const sectionTwo = useRef(null);
  const sectionThree = useRef(null);
  const sectionFour = useRef(null);
  const scrollToSection = elementRef => {
    if (elementRef.current !== null) {
      const offset = elementRef.current.offsetTop;
      window.scrollTo({
        top: offset - 100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <Detail>
        <DetailButtons>
          <DetailButton onClick={() => scrollToSection(sectionOne)}>소개</DetailButton>
          <DetailButton onClick={() => scrollToSection(sectionTwo)}>예산</DetailButton>
          <DetailButton onClick={() => scrollToSection(sectionThree)}>일정</DetailButton>
          <DetailButton onClick={() => scrollToSection(sectionFour)}>팀 소개</DetailButton>
        </DetailButtons>
        <BodyGrids>
          <DetailBody>
            <DetailTitle ref={sectionOne}> 소개 </DetailTitle>
            <Intro src={props.fundDetail?.funding_image} />
            <DetailText> {props.fundDetail?.description} </DetailText>
            <DetailTitle ref={sectionTwo}> 예산 </DetailTitle>
            <DetailText> {props.fundDetail?.funding_budget} </DetailText>
            <DetailTitle ref={sectionThree}> 일정 </DetailTitle>
            <DetailText ref={sectionFour}> {props.fundDetail?.funding_schedule} </DetailText>
            <DetailTitle> 팀 소개 </DetailTitle>
            <DetailText> {props.fundDetail?.team_introduction} </DetailText>
          </DetailBody>
          <DetailDummy>
            <AdImg src="https://www.interview365.com/news/photo/202108/98992_125828_4958.png" />
            <TeamInfos>
              <TeamInfo> 호스트 </TeamInfo>
              <TeamInfo>
                <TeamImg src={props.fundDetail?.host_title_image} />
                {props.fundDetail?.host_name}
                <TeamButton>
                  <BookmarkIcon /> 팔로우 하기
                </TeamButton>
              </TeamInfo>
              <TeamInfo> 팀 </TeamInfo>
              <TeamInfo>
                <TeamImg src={props.fundDetail?.seller_image} />
                {props.fundDetail?.seller_name}
                <TeamButton>
                  <EmailIcon />
                  문의하기
                </TeamButton>
              </TeamInfo>
            </TeamInfos>
          </DetailDummy>
        </BodyGrids>
      </Detail>
    </>
  );
}
export default FundingDetail;
