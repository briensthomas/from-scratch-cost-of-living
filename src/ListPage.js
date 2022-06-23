import { useState, useEffect } from 'react';
import { getCostOfLiving } from './services/fetch-utils.js';
import CostList from './CostList.js';

const PER_PAGE = 20;

export default function ListPage() {
  const [costs, setCosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    async function fetchCostList() {
      const from = ((currentPage - 1) * PER_PAGE);
      const to = ((currentPage * PER_PAGE) - 1);
      const costListData = await getCostOfLiving(from, to);
      setCosts(costListData);
    }
    fetchCostList();
  }, [currentPage]);

  return (
    <div>
      <span>Page {currentPage}</span>
      <div className='pagination'>
        <button disabled={currentPage <= 1} onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
        <button disabled={currentPage >= 29} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      </div>

      <CostList costs={costs} />
    </div>
  );
}