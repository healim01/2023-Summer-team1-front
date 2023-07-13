import styled from 'styled-components';
import Header from '../components/Header';
import FundingCard from '../components/FundingCard';
import { useQuery } from 'react-query';
import { getRoom } from '../apis/fundingApi';
import { useParams } from 'react-router-dom';
import CreateButton from '../components/CreateButton';
import Footer from '../components/Footer';

const Host = styled.div`
  background-color: black;
  height: 250px;
`;

const HostImg = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  background-size: cover;
  position: relative;
  opacity: 0.5;
`;

const HostDetail = styled.div`
  position: absolute;
  top: 30%;
  padding: 0px 200px;
  font-size: 30px;
  color: white;
`;

const HostName = styled(HostDetail)`
  top: 25%;
  font-weight: bold;
`;

const PageContainer = styled.div`
  padding: 30px 200px;
`;

const Title = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;
`;

const Detail = styled.div`
  font-size: 18px;
  display: flex;
`;
const Num = styled(Detail)`
  color: red;
`;

const Funds = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-width: 980px;
  padding: 0px 200px;
`;

const Grids = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
`;

function Room() {
  const { roomId } = useParams();

  const { isLoading, data: room } = useQuery(['room', roomId], () => getRoom(roomId), {
    onSuccess: room => {
      console.log('Room data:', room);
    },
  });

  return (
    <>
      <Header />
      <Host>
        <HostImg src={room?.room_image} />
        <HostName> {room?.room_name} </HostName>
        <HostDetail> {room?.description} </HostDetail>
      </Host>
      <PageContainer>
        <Title> 현재 진행 중인 펀딩 </Title>
        <Detail>
          <Num>{room?.fundingList?.length}</Num> 개의 프로젝트가 있습니다.
        </Detail>
      </PageContainer>
      <Funds>
        <Grids>
          {room?.fundingList?.map(fund => (
            <FundingCard key={fund.funding_id} fund={fund} />
          ))}
        </Grids>
      </Funds>
      <CreateButton roomId={roomId} />
      <Footer />
    </>
  );
}
export default Room;
