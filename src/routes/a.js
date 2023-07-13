import React, { useState } from 'react';

import { Form, Divider, Input, InputNumber, Button, Upload } from 'antd';

const MakeFund1 = props => {
  // const navigate = useNavigate();

  // 이미지 경로 상태관리 추가
  const [imageUrl, setImageUrl] = useState(null);
  // 이미지 처리함수
  const onChangeImage = info => {
    // 파일이 업로드 중일 때
    console.log(info.file);
    if (info.file.status === 'uploading') {
      return;
    }
    // 파일이 업로드 완료 되었을 때
    if (info.file.status === 'done') {
      const response = info.file.response;
      const imageUrl = response.imageUrl;
      // 받은 이미지경로를 imageUrl에 넣어줌
      setImageUrl(imageUrl);
    }
  };
  const onSubmit = values => {
    console.log(values);
    // 서버로 데이터 전송하기
    // axios
    //   .post('http://localhost:3000/products', {
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
    <div id="upload-container" className="inner">
      <Form name="productUpload" onFinish={onSubmit}>
        <div>
          <Form.Item name="imgUpload" label={<div className="upload-label">상품사진</div>}>
            <Upload
              name="image"
              action="http://localhost:3000/image"
              listType="picture"
              showUploadList={false}
              onChange={onChangeImage}
            >
              {/* 업로드 이미지가 있으면 이미지를 나타내고 업로드 이미지가 없으면
                        회색배경에 업로드 아이콘이 나타나도록 ... */}
              {imageUrl ? (
                <img src={imageUrl} alt="" width="200px" height="200px" />
              ) : (
                <div id="upload-img-placeholder">
                  <img src="images/icons/camera.png" alt="" />
                  <span>이미지를 업로드 해주세요.</span>
                </div>
              )}
            </Upload>
          </Form.Item>
        </div>

        {/* <Grids>
          <TextGrids>
            <TextButton> 제품 </TextButton>
            <Texts>
              <TextTitle>프로젝트 제품</TextTitle>
              <TextDetail> 프로젝트의 주제, 창작물의 특징이 드러나는 멋진 제목을 붙여주세요.</TextDetail>
            </Texts>
          </TextGrids>
          <Form.Item name="one">
            <TextSub>프로젝트 이름</TextSub>
            <Input className="oneUpload" size="large" placeholder="판매자 이름을 입력하세요" />
          </Form.Item>
        </Grids> */}
        {/* <TextSub>프로젝트 이름</TextSub> */}
        <Form.Item name="one">
          <Input size="large" placeholder="판매자 이름을 입력하세요" />
        </Form.Item>

        <Divider />
        <div>
          <Form.Item name="seller" label={<div className="upload-label">판매자명</div>}>
            <Input size="large" placeholder="판매자 이름을 입력하세요" />
          </Form.Item>
        </div>

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
          <Input.TextArea size="large" id="product-description" maxLength={300} placeholder="상품 소개를 적어주세요" />
        </Form.Item>
        <Form.Item>
          <Button id="submit-button" size="large" htmlType="submit">
            상품등록하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default MakeFund1;
