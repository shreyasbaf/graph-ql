import { gql, useQuery } from "@apollo/client";

const GET_ALL_FRUITS_QUERY = gql`
  query {
    fruits {
      id
      fruit_name
      scientific_name
      tree_name
      family
      origin
    }
  }
`;

export const useGetAllFruits = () => {
  const { loading, data, error } = useQuery(GET_ALL_FRUITS_QUERY);
  return { loading, data, error };
};
