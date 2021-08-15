import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/core/styles";

const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 10,
    position: "relative",
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 10,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      backgroundColor: "#fff",
    },
    backgroundColor: "#fff",
  },
}))(InputBase);

export default BootstrapInput;
