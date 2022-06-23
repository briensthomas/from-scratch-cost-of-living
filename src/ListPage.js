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
  });

  return (
    <div>
      <button>Previous</button>
      <button>Next</button>

      <CostList costs={costs} />
    </div>
  );
}