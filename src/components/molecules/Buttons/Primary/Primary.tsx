import { Button } from "@mui/material";
import React from "react";
interface ButtonProps {
  label: string;
  onClickHandler: (arg1: any) => void;
}
function Secondary(props: ButtonProps) {
  return (
    <Button
      variant="outlined"
      sx={{
        color: "#2CE080",
        border: "1px solid #DCE0DF",
        ":hover": {
          backgroundColor: "#2CE080",
          color: "black",
          border: "1px solid #2CE080",
        },
        textTransform: "capitalize",
      }}
      onClick={props.onClickHandler}
    >
      {props.label}
    </Button>
  );
}

export default Secondary;
