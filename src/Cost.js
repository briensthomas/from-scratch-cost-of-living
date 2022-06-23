import React from 'react';
import { Link } from 'react-router-dom';


export default function Cost({ id, City, 
  COL_Index }) {
  return (
    <div className='cost'>
      <Link key={City + id} to={`/COL-details/${id}`}>
        <h3>{City}</h3>
      </Link>
      <h4>Cost of Living Index: {COL_Index}</h4>
    </div>
  );
}
