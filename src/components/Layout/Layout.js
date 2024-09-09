import { AppBar, Box, CssBaseline, Toolbar } from "@mui/material"
import { Outlet } from "react-router-dom";

const Layout = (props) => {
    return <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" color="info">
            <Toolbar>
                Styli
            </Toolbar>
        </AppBar>

        <div className="px-4 pt-16 w-full">
            {/* {props.children} */}
            <Outlet/>
        </div>
    </Box>
}

export default Layout;
