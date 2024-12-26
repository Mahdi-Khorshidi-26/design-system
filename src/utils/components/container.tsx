import { memo, ReactNode } from "react";
import classes from "./styles.module.scss";

type ContainerProps = {
  children: ReactNode;
};

function Container({ children }: ContainerProps) {
  return <div className={classes.container}>{children}</div>;
}

export default memo(Container);
