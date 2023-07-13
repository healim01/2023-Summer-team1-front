import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoImg from '../imgs/logo.png';

import MenuIcon from '@mui/icons-material/Menu';
import GiteIcon from '@mui/icons-material/Gite';
import CelebrationIcon from '@mui/icons-material/Celebration';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import SearchIcon from '@mui/icons-material/Search';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
`;

const FirstRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: white;
  padding: 20px;
  border-bottom: 3px solid #f6b590;
`;

const Logo = styled.img`
  width: 60px;
  margin: 0px 20px;
`;

const ButtonDefault = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Nav = styled.div`
  display: flex;
  margin: 0px 20px;
`;

const NavButton = styled(ButtonDefault)`
  background-color: #e4d5ff;
  margin-right: 10px;

  &:hover {
    background-color: #6314e7;
    color: white;
  }
`;

const SearchInput = styled.input`
  padding: 8px 16px;
  font-size: 18px;
  background-color: #ffffff;
  border: 1px solid #f6b590;
  border-radius: 15px;
  width: 350px;
`;

const OrangeButton = styled(ButtonDefault)`
  background-color: #f6b590;
  margin-right: 10px;
  &:hover {
    background-color: #ee7f41;
    color: white;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <FirstRow>
        <Link to="/">
          <Logo src={LogoImg} />
        </Link>
        <Nav>
          <NavButton>
            <MenuIcon fontSize="small" /> 카테고리
          </NavButton>
          <NavButton>
            <GiteIcon />방
          </NavButton>
          <NavButton>
            <CelebrationIcon />
            프로젝트
          </NavButton>
        </Nav>
        <SearchInput type="text" placeholder="검색어를 입력하세요" />
        <Nav>
          <OrangeButton>
            <FavoriteBorderIcon />찜
          </OrangeButton>
          <OrangeButton>
            <NotificationsIcon />
            알림
          </OrangeButton>
          <OrangeButton>
            <PersonOutlineIcon />
            마이페이지
          </OrangeButton>
        </Nav>
      </FirstRow>
    </HeaderContainer>
  );
};

export default Header;
