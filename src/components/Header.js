import styled from 'styled-components';

const HeaderContainer = styled.header`
  margin-top: 10px;
  position: relative;
  display: flex;
  width: 100%;
  height: auto;
  min-height: 130px;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  background-color: lightyellow;
`;

function Header() {
  return <HeaderContainer />;
}
export default Header;
