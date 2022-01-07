import { useState, useEffect } from 'react';

import useFetchChildren from '../../services/useFetchChildren';
import Child from '../Child/Child';
import Pagination from '../Pagination/Pagination';
import './Children.css';

function Children() {
  const children = useFetchChildren();

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);

  useEffect(() => {
    setEndIndex(children.length);
  }, [children]);

  function onChangePagination(startIndex, endIndex) {
    setStartIndex(startIndex);
    setEndIndex(endIndex);
  }

  return (
    <main>
      <h1>Children</h1>

      <Pagination
        totalItems={children.length}
        onChangePagination={(start, end) => onChangePagination(start, end)}
      />

      <ul>
        {!!children.length &&
          children.slice(startIndex, endIndex).map((child, key) => (
            <li key={key}>
              <Child child={child} />
            </li>
          ))}
      </ul>
    </main>
  );
}

export default Children;
