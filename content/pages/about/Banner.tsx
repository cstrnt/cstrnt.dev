/** @jsx jsx */
import { jsx } from "theme-ui";

export default () => (
  <div
    // @ts-ignore
    sx={{
      display: "flex",
      justifyContent: "center"
    }}
  >
    <img
      // @ts-ignore
      sx={{
        borderRadius: "50%",
        border: "2px solid white",
        height: "20vh"
      }}
      src="/tim.jpeg"
    ></img>
  </div>
);
