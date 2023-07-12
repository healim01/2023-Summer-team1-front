import { useState } from 'react';
import styled from 'styled-components';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import DatePickerValue from '../components/DatePickeValue';

const AddFund = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 980px;
  padding: 50px 0px;
`;

const Title = styled.div`
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const FormContainer = styled.form``;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 800px;
  height: '100%';
  min-height: 50px;
  /* border: 1px solid lightgray; */
  margin: 30px;
`;

const Label = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;
`;

const Input = styled.input`
  height: 50px;
  width: 400px;
  border: 1px solid lightgray;
  border-radius: 10px;
`;

const InputImg = styled.input``;
const TextArea = styled.textarea`
  height: 100px;
  width: 400px;
  border: 1px solid lightgray;
  border-radius: 10px;
`;

const Hr = styled.hr`
  border: 0;
  height: 1px;
  background: lightgray;
  margin-bottom: 20px;
`;

const CheckForm = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormButtons = styled.div`
  display: flex;
  justify-content: space-around;
`;

const FormButton = styled.button`
  width: 250px;
  height: 50px;
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
`;

function MakeFund() {
  const [titleImg, setTitleImg] = useState(null);
  const [detailImg, setDetailImg] = useState(null);

  const onUpload = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setTitleImg(reader.result || null);
    };
  };

  const onDetailUpload = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setDetailImg(reader.result || null);
    };
  };

  return (
    <AddFund>
      <Title> 다나카와 관련된 프로젝트를 계획 중이시군요 </Title>
      <Title> 프로젝트를 소개해주세요. </Title>
      <FormContainer onSubmit={0}>
        <Container>
          <Label> 프로젝트 제품 이름 </Label>
          <Input type="text" name="name" placeholder="프로젝트 이름을 입력해주세요" required />
        </Container>
        <Hr />
        <Container>
          <Label>프로젝트 대표 이미지 </Label>
          <div>
            <InputImg accept="image/*" multiple type="file" onChange={onUpload} />
            {titleImg == null ? null : titleImg && <img width={'100%'} src={titleImg} alt="Title" />}
          </div>
        </Container>
        <Hr />
        <Container>
          <Label>프로젝트 상세 이미지</Label>
          <div>
            <InputImg accept="image/*" multiple type="file" onChange={onDetailUpload} />
            {detailImg == null ? null : detailImg && <img width={'100%'} src={detailImg} alt="Detail" />}
          </div>
        </Container>
        <Hr />
        <Container>
          <Label> 프로젝트 예산 </Label>
          <TextArea
            type="text"
            name="budget"
            placeholder="펀딩 목표 금액을 제작에 어떻게 사용할 것인지 구체적으로 알려주세요."
            required
          />
        </Container>
        <Hr />
        <Container>
          <Label> 프로젝트 일정 </Label>
          <TextArea type="text" name="schuedule" placeholder="작업 일정을 구체적인 날짜와 함께 작성하세요." required />
        </Container>
        <Hr />
        <Container>
          <Label> 프로젝트 팀 소개 </Label>
          <TextArea type="text" name="team" placeholder="프로젝트를 진행하는 팀(혹은 개인)을 알려주세요. " required />
        </Container>
        <Hr />
        <Container>
          <Label> 펀딩 제품 금액 </Label>
          <Input type="text" name="price" placeholder="프로젝트 제품 가격을 입력해주세요." required />
        </Container>
        <Hr />
        <Container>
          <Label> 목표 금액 </Label>
          <Input type="text" name="goalPrice" placeholder="프로젝트 목표 금액을 입력해주세요." required />
        </Container>
        <Hr />
        <Container>
          <Label> 펀딩 일정 </Label>
          <DatePickerValue />
        </Container>
        <Label>마지막으로, 이런 준비가 필요해요.</Label>
        <CheckForm>
          <FormControlLabel required control={<Checkbox />} label="대표 창작자는 만 19세 이상의 성인이어야 합니다." />
          <FormControlLabel
            required
            control={<Checkbox />}
            label="펀디깅에서 필요 시 연락 드릴 수 있도록 본인 명의의 휴대폰 번호와 이메일 주소가 필요합니다."
          />
          <FormControlLabel
            required
            control={<Checkbox />}
            label="펀딩 성공 후의 정산을 위해 신분증 또는 사업자 등록증, 국내 은행 계좌를 준비해주세요."
          />
        </CheckForm>
        <FormButtons>
          <FormButton bgColor="lightgray" color="black" type="cancel">
            {' '}
            이전으로{' '}
          </FormButton>
          <FormButton bgColor="#78C1F3" color="white" type="submit">
            {' '}
            등록하기{' '}
          </FormButton>
        </FormButtons>
      </FormContainer>
    </AddFund>
  );
}
export default MakeFund;
