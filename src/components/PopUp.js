import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';

const Buy = styled.button`
  font-size: 16px;
  width: 250px;
  height: 50px;
  background-color: red;
  color: white;
  font-weight: bold;
  border: 0;
  border-radius: 5px;
`;

export default function PopUp() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Buy onClick={handleClickOpen}> 이 프로젝트 후원하기</Buy>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'프로젝트에 후원해주셔서 감사합니다'}</DialogTitle>
        <DialogContent>
          {/* <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>나의 펀딩 내역 확인하기 </Button>
          <Button onClick={handleClose} autoFocus>
            펀딩 계속하기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
