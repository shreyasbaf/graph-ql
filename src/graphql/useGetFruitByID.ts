import { gql, useLazyQuery, useQuery } from "@apollo/client";

export const GET_FRUITS_BY_ID_QUERY = gql`
  query fruit($id: ID!) {
    fruit(id: $id){
      id
      fruit_name
      scientific_name
      tree_name
      family
      origin
    }
  }
`;

export const useGetFruitByID = () => {
  const [getFruitByID, { data, loading, error }] = useLazyQuery(
    GET_FRUITS_BY_ID_QUERY
  );

    return { getFruitByID, loading, data, error };
  };