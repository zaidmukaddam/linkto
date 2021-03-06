import React, { forwardRef } from "react";
import { ctl } from "@linkto/core";
import type {
  PolymorphicPropsWithoutRef,
  PolymorphicPropsWithRef,
  PolymorphicRef,
} from "@/types";
import type CSS from "csstype";

import Styles from "./Flex.module.css";

export interface FlexOwnProps {
  justify?: CSS.Properties["justifyContent"];
  align?: CSS.Properties["alignItems"];
  grow?: boolean;
  shrink?: boolean;
  center?: boolean;
  layout?: "horizontal" | "vertical";
}

export type FlexProps<C extends React.ElementType> = PolymorphicPropsWithRef<
  FlexOwnProps,
  C
>;

const DEFAULT_TAG = "div";

const Flex = forwardRef(
  <C extends React.ElementType = typeof DEFAULT_TAG>(
    {
      as,
      justify,
      align,
      grow,
      shrink,
      center,
      layout,
      className,
      ...otherProps
    }: PolymorphicPropsWithoutRef<FlexOwnProps, C>,
    ref: PolymorphicRef<C>
  ) => {
    const rootClass = ctl(`
      ${Styles["blui-root"]}
      ${layout && Styles[`blui-layout--${layout}`]}
      ${justify && Styles[`blui-justify--${justify}`]}
      ${align && Styles[`blui-align--${align}`]}
      ${grow && Styles[`blui-grow`]}
      ${shrink && Styles[`blui-shrink`]}
      ${center && Styles[`blui-center`]}
      ${className}
    `);

    const Element = as ?? DEFAULT_TAG;

    return <Element ref={ref} className={rootClass} {...otherProps} />;
  }
);

export { Flex };
