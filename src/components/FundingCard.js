import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  overflow: hidden;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.05);
  }
`;

const FundImg = styled.img`
  width: 250px;
  height: 150px;
  object-fit: cover;
`;

const Title = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: bold;
  margin: 5px;
`;

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(props.num)}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function FundingCard(props) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    setProgress(props.fund.progress);
  }, []);

  if (progress > 100) {
    setProgress(100);
  }

  return (
    <Link to={`/room/${props.fund.room_id}/funding/${props.fund.funding_id}`}>
      <Card key={props.fund.funding_id}>
        <FundImg src={props.fund.title_image} />
        <Title> {props.fund.funding_title} </Title>
        <Box sx={{ width: '100%' }}>
          <LinearProgressWithLabel
            value={progress}
            color={'red'}
            sx={{ backgroundColor: 'rgb(210, 210, 210, 0.4)' }}
            num={props.fund.progress}
          />
        </Box>
      </Card>
    </Link>
  );
}
