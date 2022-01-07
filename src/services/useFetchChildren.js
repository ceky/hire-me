import { useState, useEffect } from 'react';
import axios from 'axios';

import { FETCH_CHILDREN_URL } from './urls';

export default function useFetchChildren() {
  const [children, setChildren] = useState([]);

  async function fetchChildren() {
    const response = await axios.get(FETCH_CHILDREN_URL);
    setChildren(response.data.children);
  }

  useEffect(() => {
    fetchChildren();
  }, []);

  return children;
}