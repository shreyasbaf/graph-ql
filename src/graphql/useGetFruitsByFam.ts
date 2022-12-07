import { gql, useLazyQuery } from "@apollo/client";

export const GET_FRUITS_QUERY = gql`
  query filterFruitsFam($family: String!) {
    filterFruitsFam(family: $family) {
      id
      fruit_name
      scientific_name
      tree_name
      family
      origin
    }
  }
`;

export const useGetFruitsByFam = () => {
  const [getFruit, { data, error, loading }] = useLazyQuery(GET_FRUITS_QUERY);
  return { getFruit, loading, data, error };
};
