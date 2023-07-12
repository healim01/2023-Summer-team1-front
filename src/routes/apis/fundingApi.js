import axios from 'axios';

export const getTwoFunding = async (room_id, funding_id) => {
  const response = await axios.get(`https://localhost:8080/room/${room_id}/funding/${funding_id}`);
  return response.data;
};
