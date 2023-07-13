import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import styled from 'styled-components';
import LogoImg from '../imgs/logo.png';

const FooterContainer = styled.footer`
  height: 300px;
  border-top: 1px solid black;
  padding: 30px;
  margin-top: 100px;
`;

const Grids = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 20px;
`;

const SectionDetail = styled.div`
  font-size: 14px;
  margin: 10px;
  /* font-weight: 400; */
`;

const SectionTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin: 10px;
`;

const FooterLogoSection = styled.div`
  margin: 30px 20px;
  display: flex;
  align-items: center;
`;

const FooterLogo = styled.img`
  width: 60px;
  margin-right: 20px;
`;

function Footer() {
  return (
    <FooterContainer>
      <Grids>
        <FooterSection>
          <SectionTitle>이용안내</SectionTitle>
          <ul>
            <SectionDetail>서비스 소개</SectionDetail>
            <SectionDetail>개인정보 처리방침</SectionDetail>
            <SectionDetail>이용 약관</SectionDetail>
          </ul>
        </FooterSection>
        <FooterSection>
          <SectionTitle>이용안내</SectionTitle>
          <ul>
            <SectionDetail>서비스 소개</SectionDetail>
            <SectionDetail>개인정보 처리방침</SectionDetail>
            <SectionDetail>이용 약관</SectionDetail>
          </ul>
        </FooterSection>
        <FooterSection>
          <SectionTitle>정책</SectionTitle>
          <ul>
            <SectionDetail>첫 후원 가이드</SectionDetail>
            <SectionDetail>프로젝트 심사 기준</SectionDetail>
            <SectionDetail>수수료 안내</SectionDetail>
          </ul>
        </FooterSection>
        <FooterSection>
          <SectionTitle>고객지원</SectionTitle>
          <ul>
            <SectionDetail>헬프 센터</SectionDetail>
            <SectionDetail>공지사항</SectionDetail>
          </ul>
        </FooterSection>
      </Grids>

      <FooterLogoSection>
        <FooterLogo src={LogoImg} />
        <div>
          <SectionTitle>Fun Digging (주) 펀디깅 </SectionTitle>
          <SectionTitle> 이호리 박정민 최혜림 이수민 양세혁 </SectionTitle>
        </div>
      </FooterLogoSection>
    </FooterContainer>
  );
}

export default Footer;
