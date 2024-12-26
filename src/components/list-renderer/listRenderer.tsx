import { memo } from "react";
import { ReactElementType } from "../../types/globalTypes";

type ListRendererProps<T> = {
  items: T[];
  sourceName: string;
  ItemComponent: ReactElementType;
};

function ListRenderer<T>({
  items,
  sourceName,
  ItemComponent,
}: ListRendererProps<T>) {
  return (
    <div>
      {items.map((item, index) => (
        <ItemComponent key={index} {...{ [sourceName]: item }} />
      ))}
    </div>
  );
}
export default memo(ListRenderer);
