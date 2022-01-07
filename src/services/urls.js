const BASE_URL = 'https://app.famly.co/api';

export const TOKEN = import.meta.env.VITE_TOKEN;
const GROUP_ID = '86413ecf-01a1-44da-ba73-1aeda212a196';
const INSTITUTION_ID = 'dc4bd858-9e9c-4df7-9386-0d91e42280eb';

export const FETCH_CHILDREN_URL = `${BASE_URL}/daycare/tablet/group?accessToken=${TOKEN}&groupId=${GROUP_ID}&institutionId=${INSTITUTION_ID}`;
export const CHECKIN_URL = `${BASE_URL}/v2/children/{childId}/checkins`;
export const CHECKOUT_URL = `${BASE_URL}/v2/children/{childId}/checkout`;

export const getCheckInUrl = (childId) => CHECKIN_URL.replace('{childId}', childId);
export const getCheckOutUrl = (childId) => CHECKOUT_URL.replace('{childId}', childId);