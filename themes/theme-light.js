import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: grey[300],
        },
        primary: {
            main: "#4a148c",
        },
        secondary: {
            main: "#19857d",
        },
        error: {
            main: red.A400,
        },
    },
    components: {
        MuiAppBar: {
            defaultProps: {},
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff',
                }
            }
        }
    },
});
