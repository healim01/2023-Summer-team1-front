import styled from 'styled-components';
import Header from '../components/Header';
import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const room = {
  category: '굿즈', //카테고리 이름..? 카테고리 아이디..?
  host_name: '차은우',
  host_emai: '뮤',
  host_follower: 150,
  room_name: '차은우',
  description: '아스트로 차은우 얼굴 천재 ',
  room_img:
    'https://mblogthumb-phinf.pstatic.net/MjAyMjA3MzBfMTU0/MDAxNjU5MTA3Njg2Mzc0.T3Y82sd_4U2eeJw0iZSa3S7HILayEwDgmvAyhltqcf4g.AjZmbxkD5y3MopA7sr8_-wUODwMb9iNRUv_fTFAmvoAg.JPEG.niceguy00/Seul%EC%BB%B4_W%EC%BD%94%EB%A6%AC%EC%95%84BH_%EC%9D%80%EC%9A%B009.jpg?type=w800',
};
const funds = [
  {
    funding_id: 1,
    host_id: 'danaka',
    seller_id: 'healim01',
    category_id: '굿즈',
    goal_amount: 1000000,
    is_active: 3,
    created_date: '2023-06-23',
    title: '보송보송 여우 보송이 키링 인형',
    image:
      'https://tumblbug-pci.imgix.net/da55d49c72146cd5042c3c71153d4c0712ef9277/29b42ad5398ae28327d1e996a009f0e58464a1b4/f8fb2e4966d583fc2bc0c490ae456479e1d0083a/75b84011-2d99-4db5-9c4e-afab213e4e98.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=b571cc96917ee605da1e11b26bacc131',
    price: 10000,
    start_date: Date.now(),
    end_date: '2023.07.30.',
    biling_date: '2023.08.01.',
    likes: 40,
  },
  {
    funding_id: 2,
    host_id: 'danaka',
    seller_id: 'healim01',
    category_id: '굿즈',
    goal_amount: 1000000,
    is_active: 3,
    created_date: '2023-06-23',
    title: '보송보송 여우 보송이 키링 인형',
    image:
      'https://tumblbug-pci.imgix.net/da55d49c72146cd5042c3c71153d4c0712ef9277/29b42ad5398ae28327d1e996a009f0e58464a1b4/f8fb2e4966d583fc2bc0c490ae456479e1d0083a/75b84011-2d99-4db5-9c4e-afab213e4e98.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=b571cc96917ee605da1e11b26bacc131',
    price: 10000,
    start_date: Date.now(),
    end_date: '2023.07.30.',
    biling_date: '2023.08.01.',
    likes: 40,
  },
  {
    funding_id: 3,
    host_id: 'danaka',
    seller_id: 'healim01',
    category_id: '굿즈',
    goal_amount: 1000000,
    is_active: 3,
    created_date: '2023-06-23',
    title: '보송보송 여우 보송이 키링 인형',
    image:
      'https://tumblbug-pci.imgix.net/da55d49c72146cd5042c3c71153d4c0712ef9277/29b42ad5398ae28327d1e996a009f0e58464a1b4/f8fb2e4966d583fc2bc0c490ae456479e1d0083a/75b84011-2d99-4db5-9c4e-afab213e4e98.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=b571cc96917ee605da1e11b26bacc131',
    price: 10000,
    start_date: Date.now(),
    end_date: '2023.07.30.',
    biling_date: '2023.08.01.',
    likes: 40,
  },
  {
    funding_id: 4,
    host_id: 'danaka',
    seller_id: 'healim01',
    category_id: '굿즈',
    goal_amount: 1000000,
    is_active: 3,
    created_date: '2023-06-23',
    title: '보송보송 여우 보송이 키링 인형',
    image:
      'https://tumblbug-pci.imgix.net/da55d49c72146cd5042c3c71153d4c0712ef9277/29b42ad5398ae28327d1e996a009f0e58464a1b4/f8fb2e4966d583fc2bc0c490ae456479e1d0083a/75b84011-2d99-4db5-9c4e-afab213e4e98.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=b571cc96917ee605da1e11b26bacc131',
    price: 10000,
    start_date: Date.now(),
    end_date: '2023.07.30.',
    biling_date: '2023.08.01.',
    likes: 40,
  },
];

const Host = styled.div``;

const HostImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  background-size: cover;
  position: relative;
`;

const HostDetail = styled.div`
  position: absolute;
  top: 30%;
  left: 10%;
  font-size: 30px;
`;

const HostName = styled(HostDetail)`
  top: 25%;
  font-weight: bold;
`;

const Funds = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px 0px;
`;

const Grids = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 50px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
`;

const FundImg = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
`;

const Title = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: bold;
  margin: 5px;
  margin-left: 10px;
`;

function Room() {
  const ChartComponent = () => {
    const chartRef = useRef(null);

    useEffect(() => {
      var options = {
        series: [
          {
            data: [90],
          },
          {
            data: [10],
          },
        ],
        chart: {
          type: 'bar',
          height: 50,
          width: 340,
          stacked: true,
          stackType: '100%',
          background: 'transparent',
          toolbar: {
            show: false,
          },
          animations: {
            enabled: false, // Disable animations
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
          grid: {
            show: false, // Hide horizontal and vertical lines
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
          },
        },
        yaxis: {
          max: 100,
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
          },
        },
        tooltip: {
          enabled: false,
        },
        fill: {
          opacity: 1,
          colors: ['#FF0000', '#E2E2E2'],
        },
        legend: {
          show: false,
        },
      };

      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      return () => {
        chart.destroy();
      };
    }, []);

    return <div ref={chartRef} id="chart" />;
  };

  return (
    <>
      <Header />
      <Host>
        <HostImg src={room.room_img} />
        <HostName> {room.room_name} </HostName>
        <HostDetail> {room.description} </HostDetail>
      </Host>
      <Funds>
        <Grids>
          {funds.map(fund => (
            <Card key={fund.funding_id}>
              <FundImg src={fund.image} />
              <Title> {fund.title} </Title>
              {/* <Box sx={{ width: '100%' }}>
                <LinearProgressWithLabel value={progress} />
              </Box> */}
            </Card>
          ))}
        </Grids>
      </Funds>
    </>
  );
}
export default Room;
