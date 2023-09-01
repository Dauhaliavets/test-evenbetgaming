import React, { forwardRef } from "react";

import "./styles.css";

export const Box = forwardRef(({ children, className }, ref) => {
  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
});
