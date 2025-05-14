import { useEffect, useState } from 'react';

const ITEMS_PER_PAGE = 5;

export const useTable = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const filteredData = data.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const json = await res.json();
      setData(json);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setCurrentPage(1);
  };

  return {
    filter,
    handleFilterChange,
    currentItems,
    currentPage,
    totalPages,
    setCurrentPage,
    loading,
  };
};
