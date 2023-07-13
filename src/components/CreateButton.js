import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

const Container = styled.div`
  position: absolute;
  top: 80%;
  right: 5%;
  width: 150px;
  height: 50px;
  background-color: #ee7f41;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export default function CreateButton(props) {
  console.log('button', props);

  return (
    <Link to={`/room/${props.roomId}/make`}>
      <Container>
        <Text>+ 펀딩 신청하기</Text>
      </Container>
    </Link>
  );
}
