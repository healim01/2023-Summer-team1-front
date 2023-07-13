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
  height: 280px;
  background-color: #e4d5ff;
  border-radius: 10px;

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
  top: 0;
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const Text = styled.span`
  position: absolute;
  left: 15px;
  top: 85%;
  font-size: 20px;
  font-weight: bold;
  color: black;
  letter-spacing: -1px;
`;

const HostDetail = styled.span`
  word-break: keep-all;
  position: absolute;
  background-color: rgb(255, 255, 255, 0.5);
  left: 15px;
  bottom: 50px;
  right: 15px;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -1px;
`;

export default function RoomCard(props) {
  const description =
    props.room.description.length > 12 ? props.room.description.substring(0, 12) + '..' : props.room.description;
  return (
    <Link to={`/room/${props.room.room_id}`}>
      <Container>
        <ul>
          <Li>
            <Img src={props.room.title_image} />
            <HostDetail> "{description}" </HostDetail>
            <Text> {props.room.room_name} </Text>
          </Li>
        </ul>
      </Container>
    </Link>
  );
}
