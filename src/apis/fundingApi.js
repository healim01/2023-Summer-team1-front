import axios from 'axios';

// GET
export const getFunding = async funding_id => {
  const response = await axios.get(`http://localhost:8080/funding/${funding_id}`);
  return response.data;
};

export const getRoom = async room_id => {
  const response = await axios.get(`http://localhost:8080/room/${room_id}`);
  return response.data;
};

export const getTop4Room = async () => {
  const response = await axios.get(`http://localhost:8080/main/room-top4`);
  return response.data;
};

export const getAllFunding = async () => {
  const response = await axios.get(`http://localhost:8080/main/funding-allList`);
  return response.data;
};
