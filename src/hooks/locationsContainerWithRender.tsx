import { memo } from "react";
import { QueryResult, useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "./locationsContainer";

type LocationsContainerWithRenderProps = {
  render: (props: {
    data: any;
    error: any;
    loading: boolean;
  }) => React.ReactElement;
};

type Location = {
  id: string;
  name: string;
  description: string;
  photo: string;
};

type LocationsData = {
  locations: Location[];
};

function LocationsContainerWithRender({
  render,
}: LocationsContainerWithRenderProps) {
  const { data, error, loading }: QueryResult<LocationsData> =
    useQuery(GET_LOCATIONS);
  return render({ data, error, loading });
}

export default memo(LocationsContainerWithRender);
