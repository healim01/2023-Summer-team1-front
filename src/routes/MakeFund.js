// import { useState } from 'react';
// import styled from 'styled-components';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import DatePickerValue from '../components/DatePickeValue';
// import axios from 'axios';

// const AddFund = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   min-width: 980px;
//   padding: 50px 0px;
// `;

// const Title = styled.div`
//   font-size: 45px;
//   font-weight: bold;
//   margin-bottom: 10px;
// `;

// const FormContainer = styled.form``;

// const Container = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   width: 800px;
//   height: '100%';
//   min-height: 50px;
//   /* border: 1px solid lightgray; */
//   margin: 30px;
// `;

// const Label = styled.div`
//   display: flex;
//   font-size: 20px;
//   font-weight: bold;
// `;

// const Input = styled.input`
//   height: 50px;
//   width: 400px;
//   border: 1px solid lightgray;
//   border-radius: 10px;
// `;

// const InputImg = styled.input``;
// const TextArea = styled.textarea`
//   height: 100px;
//   width: 400px;
//   border: 1px solid lightgray;
//   border-radius: 10px;
// `;

// const Hr = styled.hr`
//   border: 0;
//   height: 1px;
//   background: lightgray;
//   margin-bottom: 20px;
// `;

// const CheckForm = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const FormButtons = styled.div`
//   display: flex;
//   justify-content: space-around;
// `;

// const FormButton = styled.button`
//   width: 250px;
//   height: 50px;
//   border: 1px solid lightgray;
//   border-radius: 10px;
//   background-color: ${props => props.bgColor};
//   color: ${props => props.color};
// `;

// function MakeFund() {
//   const [titleImg, setTitleImg] = useState(null);
//   const [detailImg, setDetailImg] = useState(null);

//   const onUpload = e => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.readAsDataURL(file);

//     reader.onload = () => {
//       setTitleImg(reader.result || null);
//     };
//   };

//   const onDetailUpload = e => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.readAsDataURL(file);

//     reader.onload = () => {
//       setDetailImg(reader.result || null);
//     };
//   };

//   // const [titleImg, setTitleImg] = useState(null);
//   // const [detailImg, setDetailImg] = useState(null);

//   const onSubmit = async values => {
//     console.log(values);
//     values.preventDefault(); // P

//     try {
//       const formData = new FormData();
//       formData.append('name', values.name);
//       formData.append('budget', values.budget);
//       formData.append('schedule', values.schedule);
//       formData.append('team', values.team);
//       formData.append('price', values.price);
//       formData.append('goalPrice', values.goalPrice);

//       console.log(formData);
//       // Append other form values as needed

//       // Make the POST request
//       const response = await axios.post('http://localhost:8080/funding/1/2', formData);
//       console.log(response.data);
//       // Perform any necessary actions after successful submission
//     } catch (error) {
//       console.error(error);
//       // Handle errors or display an error message to the user
//     }
//   };

//   return (
//     <AddFund>
//       <Title> 다나카와 관련된 프로젝트를 계획 중이시군요 </Title>
//       <Title> 프로젝트를 소개해주세요. </Title>
//       <FormContainer onSubmit={onSubmit}>
//         <Container>
//           <Label> 프로젝트 제품 이름 </Label>
//           <Input type="text" name="name" placeholder="프로젝트 이름을 입력해주세요" required />
//         </Container>
//         <Hr />
//         <Container>
//           <Label>프로젝트 대표 이미지 </Label>
//           <div>
//             <InputImg accept="image/*" multiple type="file" onChange={onUpload} />
//             {titleImg == null ? null : titleImg && <img width={'100%'} src={titleImg} alt="Title" />}
//           </div>
//         </Container>
//         <Hr />
//         <Container>
//           <Label>프로젝트 상세 이미지</Label>
//           <div>
//             <InputImg accept="image/*" multiple type="file" onChange={onDetailUpload} />
//             {detailImg == null ? null : detailImg && <img width={'100%'} src={detailImg} alt="Detail" />}
//           </div>
//         </Container>
//         <Hr />
//         <Container>
//           <Label> 프로젝트 예산 </Label>
//           <TextArea
//             type="text"
//             name="budget"
//             placeholder="펀딩 목표 금액을 제작에 어떻게 사용할 것인지 구체적으로 알려주세요."
//             required
//           />
//         </Container>
//         <Hr />
//         <Container>
//           <Label> 프로젝트 일정 </Label>
//           <TextArea type="text" name="schuedule" placeholder="작업 일정을 구체적인 날짜와 함께 작성하세요." required />
//         </Container>
//         <Hr />
//         <Container>
//           <Label> 프로젝트 팀 소개 </Label>
//           <TextArea type="text" name="team" placeholder="프로젝트를 진행하는 팀(혹은 개인)을 알려주세요. " required />
//         </Container>
//         <Hr />
//         <Container>
//           <Label> 펀딩 제품 금액 </Label>
//           <Input type="text" name="price" placeholder="프로젝트 제품 가격을 입력해주세요." required />
//         </Container>
//         <Hr />
//         <Container>
//           <Label> 목표 금액 </Label>
//           <Input type="text" name="goalPrice" placeholder="프로젝트 목표 금액을 입력해주세요." required />
//         </Container>
//         <Hr />
//         <Container>
//           <Label> 펀딩 일정 </Label>
//           <DatePickerValue />
//         </Container>
//         <Label>마지막으로, 이런 준비가 필요해요.</Label>
//         <CheckForm>
//           <FormControlLabel required control={<Checkbox />} label="대표 창작자는 만 19세 이상의 성인이어야 합니다." />
//           <FormControlLabel
//             required
//             control={<Checkbox />}
//             label="펀디깅에서 필요 시 연락 드릴 수 있도록 본인 명의의 휴대폰 번호와 이메일 주소가 필요합니다."
//           />
//           <FormControlLabel
//             required
//             control={<Checkbox />}
//             label="펀딩 성공 후의 정산을 위해 신분증 또는 사업자 등록증, 국내 은행 계좌를 준비해주세요."
//           />
//         </CheckForm>
//         <FormButtons>
//           <FormButton bgColor="lightgray" color="black" type="cancel">
//             이전으로
//           </FormButton>
//           <FormButton bgColor="#78C1F3" color="white" type="submit">
//             등록하기
//           </FormButton>
//         </FormButtons>
//       </FormContainer>
//     </AddFund>
//   );
// }
// export default MakeFund;

import React, { useState } from 'react';
// import './upload.scss';
// import 'antd/dist/antd.css';
import { Form, Divider, Input, InputNumber, Button, Upload, Grid } from 'antd';
// import useAsync from '../customHook/useAsync'
import axios from 'axios';
import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';

// async function postProduct(values){
//     const response = await axios.post(`http://localhost:3000/products`, {
//         name: values.name,
//         seller: values.seller,
//         price: values.price,
//         imageUrl: imageUrl // 상태관리 되고 있는 imageurl
//     });
//     return response.data;
// }

const AddFund = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 980px;
  padding: 50px 300px;
`;

const Grids = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: 30px;
`;

const Title = styled.div`
  font-size: 21px;
  text-align: start;
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
  margin-bottom: 30px;
`;

const TextButton = styled.div`
  height: 30px;
  border: 1px solid #ee7f41;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextGrids = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 30px;
`;

const Texts = styled.div`
  /* font-size: 16px;
  font-weight: bold; */
  margin-bottom: 10px;
`;

const TextDetail = styled.div`
  font-size: 16px;
  display: flex;
  text-align: start;
`;

const TextTitle = styled(TextDetail)`
  font-weight: bold;
`;

const TextSub = styled.div`
  font-size: 14px;
  font-weight: bold;
  display: flex;
  text-align: start;
`;

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

// const Input = styled.input`
//   height: 50px;
//   width: 400px;
//   border: 1px solid lightgray;
//   border-radius: 10px;
// `;

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

const MakeFund = props => {
  // const navigate = useNavigate();

  // 이미지 경로 상태관리 추가
  // const [imageUrl, setImageUrl] = useState(null);
  const [titleImg, setTitleImg] = useState(null);
  // 이미지 처리함수
  const onChangeImage = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setTitleImg(reader.result || null);
    };

    // // 파일이 업로드 중일 때
    // console.log(info.file);
    // if (info.file.status === 'uploading') {
    //   return;
    // }
    // // 파일이 업로드 완료 되었을 때
    // if (info.file.status === 'done') {
    //   const response = info.file.response;
    //   const imageUrl = response.titleImg;
    //   // 받은 이미지경로를 imageUrl에 넣어줌
    //   setImageUrl(imageUrl);
    // }
  };

  const onSubmit = values => {
    console.log(values);

    //   // const [detailImg, setDetailImg] = useState(null);

    // 서버로 데이터 전송하기
    // axios
    //   .post('http://localhost:8080/1/3', {
    //     name: values.name,
    //     seller: values.seller,
    //     price: values.price,
    //     imageUrl: imageUrl,
    //   })
    //   .then(result => {
    //     console.log(result);
    //     // navigate('/');
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });
  };
  return (
    <AddFund>
      <Grids>
        <Title>프로젝트 기획</Title>
        <Title>
          다나카와 관련된 프로젝트를 계획 중이시군요 ! <br /> 프로젝트에 대해 소개해주세요.
        </Title>
      </Grids>
      <>
        <Form name="productUpload" onFinish={onSubmit}>
          {/* 소개 */}
          <Grids>
            <TextGrids>
              <TextButton> 제품 </TextButton>
              <Texts>
                <TextTitle>프로젝트 제품</TextTitle>
                <TextDetail> 프로젝트의 주제, 창작물의 특징이 드러나는 멋진 제목을 붙여주세요.</TextDetail>
              </Texts>
            </TextGrids>
            <Form.Item name="seller">
              <TextSub>프로젝트 이름</TextSub>
              <Input className="nameUpload" size="large" placeholder="판매자 이름을 입력하세요" />
            </Form.Item>
          </Grids>
          <Grids>
            <TextGrids>
              <div />
              <Texts>
                <TextTitle>프로젝트 이름</TextTitle>
                <TextDetail> 프로젝트의 주제, 창작물의 특징이 드러나는 멋진 제목을 붙여주세요.</TextDetail>
              </Texts>
            </TextGrids>
            <Form.Item name="description">
              <TextSub>프로젝트 이름</TextSub>
              <Input className="nameUpload" size="large" placeholder="판매자 이름을 입력하세요" />
            </Form.Item>
          </Grids>
          <Grids>
            <TextGrids>
              <div />
              <Texts>
                <TextTitle>프로젝트 이름</TextTitle>
                <TextDetail> 프로젝트의 주제, 창작물의 특징이 드러나는 멋진 제목을 붙여주세요.</TextDetail>
              </Texts>
            </TextGrids>
            <Form.Item name="seller">
              <TextSub>프로젝트 이름</TextSub>
              <Input className="nameUpload" size="large" placeholder="판매자 이름을 입력하세요" />
            </Form.Item>
          </Grids>

          {/* <Form.Item name="imageUrl">
            <TextSub>프로젝트 이름</TextSub>
            <Upload
              name="image"
              action="http://localhost:3000/image"
              listType="picture"
              showUploadList={false}
              onChange={onChangeImage}
            >
              업로드 이미지가 있으면 이미지를 나타내고 업로드 이미지가 없으면 회색배경에 업로드 아이콘이 나타나도록 ...
              {imageUrl ? (
                <img src={imageUrl} alt="" width="200px" height="200px" />
              ) : (
                <div id="upload-img-placeholder">
                  <img src="images/icons/camera.png" alt="" />
                  <span>이미지를 업로드 해주세요.</span>
                </div>
              )}
            </Upload>
          </Form.Item> */}
          {/* 예산 */}

          {/* 일정 */}

          {/* 팀소개 */}
          <Form.Item name="imgUpload" label={<div className="upload-label">!!!상품사진!!!</div>}>
            {/* <Upload
              name="image"
              action="http://localhost:3000/image"
              listType="picture"
              showUploadList={false}
              onChange={onChangeImage}
            > */}
            <InputImg accept="image/*" multiple type="file" onChange={onChangeImage} />
            업로드 이미지가 있으면 이미지를 나타내고 업로드 이미지가 없으면 회색배경에 업로드 아이콘이 나타나도록 ...
            {/* {imageUrl ? (
                <img src={imageUrl} alt="" width="200px" height="200px" />
              ) : (
                <div id="upload-img-placeholder">
                  <img src="images/icons/camera.png" alt="" />
                  <span>이미지를 업로드 해주세요.</span>
                </div>
              )} */}
            {titleImg == null ? null : titleImg && <img width={'100%'} src={titleImg} alt="Title" />}
            {/* </InputImg> */}
          </Form.Item>

          {/* <Form.Item name="imgUpload" label={<div className="upload-label">상품사진</div>}>
            <Upload
              name="image"
              action="http://localhost:3000/image"
              listType="picture"
              showUploadList={false}
              onChange={onChangeImage}
            >
              업로드 이미지가 있으면 이미지를 나타내고 업로드 이미지가 없으면 회색배경에 업로드 아이콘이 나타나도록 ...
              {imageUrl ? (
                <img src={imageUrl} alt="" width="200px" height="200px" />
              ) : (
                <div id="upload-img-placeholder">
                  <img src="images/icons/camera.png" alt="" />
                  <span>이미지를 업로드 해주세요.</span>
                </div>
              )}
            </Upload>
          </Form.Item> */}
          <Divider />
          <Form.Item name="seller" label={<div className="upload-label">판매자명</div>}>
            <Input className="nameUpload" size="large" placeholder="판매자 이름을 입력하세요" />
          </Form.Item>
          <Divider />
          <Form.Item name="name" label={<div className="upload-label">상품이름</div>}>
            <Input className="upload-name" size="large" placeholder="상품 이름을 입력해주세요" />
          </Form.Item>
          <Divider />
          <Form.Item name="price" label={<div className="upload-label">상품가격</div>}>
            <InputNumber defaultValue={0} size="large" />
          </Form.Item>
          <Divider />
          <Form.Item name="description" label={<div className="upload-label">상품소개</div>}>
            <Input.TextArea
              size="large"
              id="product-description"
              maxLength={300}
              placeholder="상품 소개를 적어주세요"
            />
          </Form.Item>
          <Form.Item>
            <Button id="submit-button" size="large" htmlType="submit">
              상품등록하기
            </Button>
          </Form.Item>
        </Form>
      </>
    </AddFund>
  );
};

export default MakeFund;
