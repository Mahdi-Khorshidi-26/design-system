import { memo } from "react";
import classes from "./styles.module.scss";
import clsx from "clsx";
import { ReactNodeType } from "../../types/globalTypes";

type ContainerPropsType = {
  className?: string;
  children: ReactNodeType;
  [key: string]: any; // for any other props
};

function Container({ className, children, ...props }: ContainerPropsType) {
  return (
    <div className={clsx(className, classes.container)} {...props}>
      {children}
    </div>
  );
}

export default memo(Container);
