import React, { useEffect, useState } from "react";
import { debounce } from "../../utils";

const breakpoints = {
  sm: 480,
  md: 768,
  lg: 1000,
  //   xl: 1200,
  //   xxl: 1370,
};
type ResponsiveProps = {
  minWidth?: number;
  maxWidth?: number;
  children: React.ReactNode;
};
const Responsive = ({
  minWidth,
  maxWidth,
  children,
}: ResponsiveProps): JSX.Element | null => {
  const [_, setDate] = useState(Date.now());

  const onResize = debounce(() => {
    setDate(Date.now());
  }, 100);

  useEffect(() => {
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, [onResize]);

  const checkMediaQuery = (): boolean => {
    return !!window.matchMedia(getQuery()).matches;
  };

  const getQuery = (): string => {
    const conditions = [
      minWidth && `(min-width: ${minWidth}px)`,
      maxWidth && `(max-width: ${maxWidth}px)`,
    ].filter((value) => !!value);

    return conditions.join(" and ");
  };

  const chk = checkMediaQuery();

  if (chk) {
    return children as JSX.Element;
  }

  return null;
};

export const DesktopQuery = (props: any) => (
  <Responsive {...props} minWidth={breakpoints.md} />
);

export const TabletQuery = (props: any) => (
  <Responsive
    {...props}
    minWidth={breakpoints.sm}
    maxWidth={breakpoints.md - 1}
  />
);

export const MobileQuery = (props: any) => (
  <Responsive {...props} maxWidth={breakpoints.sm - 1} />
);

export const TabletAndDesktopQuery = (props: any) => (
  <Responsive {...props} minWidth={breakpoints.sm} />
);

export const MobileAndTabletQuery = (props: any) => (
  <Responsive {...props} maxWidth={breakpoints.md - 1} />
);

// export const BelowXLQuery = (props: any) => (
//   <Responsive {...props} maxWidth={breakpoints.xl - 1} />
// );

// export const AboveXLQuery = (props: any) => (
//   <Responsive {...props} minWidth={breakpoints.xl} />
// );

// export const BelowXXLQuery = (props: any) => (
//   <Responsive {...props} maxWidth={breakpoints.xxl - 1} />
// );

// export const AboveXXLQuery = (props: any) => (
//   <Responsive {...props} minWidth={breakpoints.xxl} />
// );
