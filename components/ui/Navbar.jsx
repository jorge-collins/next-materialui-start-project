import { AppBar, IconButton, Toolbar } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";

export const Navbar = () => {
    return (
        <AppBar position='sticky' elevation={ 0 } >
            <Toolbar>
                <IconButton>
                    <MenuOutlined />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
};
