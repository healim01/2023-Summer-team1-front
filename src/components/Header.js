import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
`;

const FirstRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const LoginButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SecondRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const NavButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SearchInput = styled.input`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <FirstRow>
        <Link to="/">
          <Logo>로고</Logo>
        </Link>
        <LoginButton>로그인</LoginButton>
      </FirstRow>
      <SecondRow>
        <NavButton>카테고리</NavButton>
        <NavButton>방</NavButton>
        <NavButton>프로젝트</NavButton>
        <SearchInput type="text" placeholder="검색" />
      </SecondRow>
    </HeaderContainer>
  );
};

export default Header;
