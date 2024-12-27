import { QueryResult, gql, useQuery } from "@apollo/client";

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

type Location = {
  id: string;
  name: string;
  description: string;
  photo: string;
};

type LocationsData = {
  locations: Location[];
};

function useLocations() {
  const { loading, error, data }: QueryResult<LocationsData> =
    useQuery(GET_LOCATIONS);
  return { loading, error, data };
}
export default useLocations;
