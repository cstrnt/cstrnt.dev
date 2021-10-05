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
        height: "20vh",
        width: "20vh",
        objectFit: "cover"
      }}
      src="/tim.jpeg"
    ></img>
  </div>
);
