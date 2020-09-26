import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#4cd4a2"
        },
        secondary: {
            main: "#8C7682"
        },
        info: {
            main: "#24426f"
        },
        success: {
            main: "#4cba69"
        },
        error: {
            main: "#f44336"
        },
        warning: {
            main: "#c9aa31"
        },
        text: {
            primary: "#000",
            secondary: "#fff"
        }
    }
});

export default theme;