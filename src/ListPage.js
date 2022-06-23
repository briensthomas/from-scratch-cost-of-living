import { useState, useEffect } from 'react';
import { getCostOfLiving } from './services/fetch-utils.js';
import CostList from './CostList.js';

export default function ListPage() {
  const [costs, setCosts] = useState([]);

  useEffect(() => {
    
  });

  return (
    <div>
      <button>Previous</button>
      <button>Next</button>

      <CostList costs={costs} />
    </div>
  );
}