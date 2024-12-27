import { gql, useQuery, QueryResult } from "@apollo/client";
import React, { memo, ReactElement } from "react";
import { ReactNodeType } from "../types/globalTypes";

export const GET_LOCATIONS = gql`
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

type LocationsProps = {
  children: ReactNodeType;
};

function LocationsContainer({ children }: LocationsProps): JSX.Element {
  const { loading, error, data }: QueryResult<LocationsData> =
    useQuery(GET_LOCATIONS);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as ReactElement, {
            loading,
            error,
            data,
          });
        }
        return child;
      })}
    </>
  );
}

export default memo(LocationsContainer);
