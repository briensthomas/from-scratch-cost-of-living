import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCostById } from './services/fetch-utils';


export default function DetailsPage() {
  const params = useParams();
  const [cityCost, setCityCost] = useState({});

  useEffect(() => {
    async function fetchCity() {
      const cityData = await getCostById(params.id);

      setCityCost(cityData);
    }
    fetchCity();
  }, [params.id]);

  return (
    <div className='detail-page'>
      <div className='cost-detail'>

        <h2>{cityCost.City}</h2>
        <h3>Cost of Living: {cityCost.COL_Index}</h3>
        <h4>Cost of Living Plus Rent: {cityCost.COLPlusRent_Index}</h4>
        <h4>Rent: {cityCost.Rent_Index}</h4>
        <h4>Groceries: {cityCost.Groceries_Index}</h4>
        <h4>Restaurant Price: {cityCost.Restaurant_Price_Index}</h4>
        <h4>Local Purchasing Power: {cityCost.Local_Purchasing_Power_Index}</h4>
      </div>
    </div>
  );
}