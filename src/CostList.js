import React from 'react';
import Cost from './Cost';

export default function CostList({ costs }) {
  return (
    <div>
      {
        costs.map((cost, i) => <Cost key={cost.City + i + cost.id} {...cost} />)
      }
    </div>
  );
}
