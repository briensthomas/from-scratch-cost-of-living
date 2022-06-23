import { client } from './client';

export async function getCostOfLiving(from, to) {
  const response = await client.from('Cost_Of_Living')
    .select('*', { count: 'exact' })
    .order('COL_Index')
    .range(from, to);

  return response.data;
}

export async function getCostById(id) {
  const response = await client.from('Cost_Of_Living')
    .select('*')
    .match({ id })
    .single();

  return response.data;
}