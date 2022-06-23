import React from 'react';
import { Link } from 'react-router-dom';


export default function Cost({ id, City, 
  COL_Index }) {
  return (
    <div>
      <Link key={City + id} to={`/COL-details/${id}`}>
        <h2>{City}</h2>
        <h3>{COL_Index}</h3>
      </Link>
    </div>
  );
}
