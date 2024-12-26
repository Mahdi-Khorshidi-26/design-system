import { memo } from "react";
import classes from "./styles.module.scss";
import { ReactNodeType } from "../../types/globalTypes";
import clsx from "clsx";

type SplitScreenProps = {
  Left: ReactNodeType;
  Right: ReactNodeType;
  className?: string;
  [key: string]: any; // for any other props
};

function SplitScreen({ Left, Right, className, ...props }: SplitScreenProps) {
  return (
    <div className={clsx(className || classes.splitScreenContainer)} {...props}>
      <div className={classes.left}>{Left}</div>
      <div className={classes.right}>{Right}</div>
    </div>
  );
}

export default memo(SplitScreen);
