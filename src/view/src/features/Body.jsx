import {Box, Container, Grid, Paper, Typography} from "@mui/material";
import LoginButton from "./auth/LoginButton";
import LogoutButton from "./auth/LogoutButton";
import {useAuth0} from "@auth0/auth0-react";
import {useCallback, useEffect, useState} from "react";

const Body = () => {
    const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
    const [users, setUsers] = useState({});

    const fetchApi = useCallback(async () =>
        {
            if (isAuthenticated) {
                const accessToken = await getAccessTokenSilently();
                const res = await fetch('/user', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                })
                return await res.json()
            }
        }, [isAuthenticated, getAccessTokenSilently],
    );
    
    
    useEffect( () => {
        fetchApi()
            .then(data => setUsers(data))
    }, [fetchApi]);


    if (isLoading) {
        return (
            <div>Loading ...</div>
        )
    }
    else if (isAuthenticated){
        return (
            <Container maxWidth='xs'>
                <Grid
                    container
                    direction='column'
                    spacing={3}
                >
                    <Grid item>
                        <Paper>
                            <Box p={3}>
                                <Typography variant='h2'>
                                    {user?.name}
                                </Typography>
                                <Typography>
                                    {user?.email}
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    {users?.map((c, i) =>
                        <Grid
                            key={i}
                            item
                        >
                            <Paper>
                                <Box p={5}>
                                    <Typography>
                                        {c.firstName}
                                    </Typography>
                                    <Typography>
                                        {c.lastName}
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    )}
                    <Grid item>
                        <LogoutButton />
                    </Grid>
                </Grid>
            </Container>
        )
    }
    else {
        return (
            <Container>
                <LoginButton />
            </Container>
        )
    }
};

export default Body;
