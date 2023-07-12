import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  float: left;
  margin-right: 20px;
`;

const Li = styled.li`
  float: left;
  position: relative;
  margin: 0 0 25px 15px;
  width: 200px;
  height: 200px;

  &:hover {
    box-shadow: 1px 1px 20px #ddd;
    transform: scale(1.02);
  }
  &:active {
    box-shadow: 1px 1px 20px #fff;
  }
`;

const Img = styled.img`
  position: absolute;
  bottom: 0;
  width: 200px;
  height: 200px;
  object-fit: cover;
  /* border-radius: 10px; */
`;

const Text = styled.span`
  position: absolute;
  left: 15px;
  top: 70%;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  letter-spacing: -1px;
`;

const HostDetail = styled.span`
  width: 50px;
  word-break: keep-all;
  position: absolute;
  color: gray;
  left: 15px;
  top: 12px;
  right: 15px;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  letter-spacing: -1px;
`;

export default function RoomCard(props) {
  return (
    <Link to={`/room/${props.room.room_id}`}>
      <Container>
        <ul>
          <Li>
            <Img src={props.room.room_img} />
            <HostDetail> " {props.room.description} " </HostDetail>
            <Text> {props.room.room_name} </Text>
          </Li>
        </ul>
      </Container>
    </Link>
  );
}
