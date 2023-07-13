import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoImg from '../imgs/logo.png';

const Buy = styled.button`
  font-size: 16px;
  width: 350px;
  height: 50px;
  background-color: #6314e7;
  color: white;
  font-weight: bold;
  border: 0;
  border-radius: 5px;
`;

const PopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 250px;
  width: 500px;
`;

const PopLogo = styled.img`
  width: 50px;
`;

const PopText = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export default function AddPopUp(props) {
  const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  const handleClose = () => {
    setOpen(false);
  };

  const button = document.querySelector('#your-button-id');
  const Popup = async () => {
    setOpen(true);
  };

  return (
    <div>
      <Button
        onClick={Popup}
        id="submit-button"
        size="large"
        htmlType="submit"
        style={{
          backgroundColor: '#ee7f41',
          color: 'white',
          fontWeight: 'bold',
          width: '150px',
          borderRadius: '20px',
        }}
      >
        상품 등록하기
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
      >
        <DialogTitle id="alert-dialog-title">
          <PopUpContainer>
            <PopLogo src={LogoImg} />
            <PopText>
              펀딩 신청이 완료되었습니다
              <br />
              프로젝트는 펀디깅 그리고 아티스트의 승인 후 등록됩니다
            </PopText>
          </PopUpContainer>
        </DialogTitle>
        <DialogActions sx={{ display: 'flex', justifyItems: 'center' }}>
          <Link to={`/room/${props.roomId}`}>
            <Button onClick={handleClose} autoFocus sx={{ backgroundColor: 'red' }}>
              확인
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
