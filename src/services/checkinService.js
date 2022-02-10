import axios from 'axios';

import { getCheckInUrl, getCheckOutUrl, TOKEN } from './urls';

export function checkIn(childId) {
  const data = {
    accessToken: TOKEN,
    pickupTime: '16:00',
  };

  return axios.post(getCheckInUrl(childId), data);
}

export function checkOut(childId) {
  const data = {
    accessToken: TOKEN,
  };

  return axios.post(getCheckOutUrl(childId), data);
}
