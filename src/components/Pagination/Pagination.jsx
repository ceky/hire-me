import { useState, useEffect } from 'react';
import './Pagination.css';

export const ITEMS_PER_PAGE = 5;

export default function Pagination({ totalItems, onChangePagination }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPageNumber, setTotalPageNumber] = useState();

  useEffect(() => {
    if (totalItems % ITEMS_PER_PAGE === 0) {
      setTotalPageNumber(parseInt(totalItems / ITEMS_PER_PAGE));
    } else {
      setTotalPageNumber(parseInt(totalItems / ITEMS_PER_PAGE) + 1);
    }
  }, [totalItems]);

  function onClickPage(index) {
    setCurrentPage(index);

    const startIndex = index * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    onChangePagination(startIndex, endIndex);
  }

  return (
    <ul className="pagination-container">
      {[...Array(totalPageNumber)].map((e, i) => (
        <li
          key={i}
          className={`${currentPage === i ? 'active' : ''}`}
          onClick={() => onClickPage(i)}
        >
          {i + 1}
        </li>
      ))}
    </ul>
  );
}
