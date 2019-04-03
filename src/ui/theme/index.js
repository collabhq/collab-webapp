import { createMuiTheme } from "@material-ui/core/styles";

const palette = {
  primary: { main: "#3c3c3c", contrastText: "#ffffff" },
  secondary: { main: "#cc461f" }
};
const themeName = "Mine Shaft Orange Roughy Monarch Butterfly";
const typography = { useNextVariants: true }; // switch to typography v2
// ColorTool - https://material.io/tools/color/#!/?view.left=0&view.right=0&primary.color=3c3c3c&secondary.color=cc461f

export default createMuiTheme({ palette, themeName, typography });
