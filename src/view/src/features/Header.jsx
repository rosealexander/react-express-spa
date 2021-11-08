import {AppBar, Grid, Typography} from "@mui/material";
import {useAuth0} from "@auth0/auth0-react";
import LogoutButton from "./auth/LogoutButton";
import LoginButton from "./auth/LoginButton";
import {memo} from "react";

const Header = memo(() => {
    const { user, isLoading, isAuthenticated } = useAuth0();

    if (isAuthenticated)
        return (
            <AppBar
                position='relative'
                color='transparent'
                elevation={0}
            >
                <Grid
                    container
                    spacing={1}
                    wrap='nowrap'
                    justifyContent="space-between"
                >
                    <Grid item>
                        <Typography
                            variant="caption"
                            color="textSecondary"
                        >
                            Signed in as: {user?.name}
                        </Typography>
                        <br/>
                        <Typography
                            variant="caption"
                            color="textSecondary"
                        >
                            {user?.sub}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <LogoutButton disabled={isLoading}/>
                    </Grid>
                </Grid>
            </AppBar>
        )
    else {
        return (
            <AppBar
                position='relative'
                color='transparent'
                elevation={0}
            >
                <Grid
                    container
                    spacing={1}
                    wrap='nowrap'
                    justifyContent="space-between"
                >
                    <Grid item>
                    </Grid>
                    <Grid item>
                        <LoginButton/>
                    </Grid>
                </Grid>
            </AppBar>
        )
    }
})

export default Header;
