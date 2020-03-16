import * as React from "react";

export const withMargin = (storyFn: any) => (
  <div style={{ margin: "2rem", padding: "2rem" }}>{storyFn()}</div>
);
