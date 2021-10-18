import {Box, Container, Grid, Typography} from "@mui/material";
import LoginButton from "./auth/LoginButton";
import {useAuth0} from "@auth0/auth0-react";
import {useCallback, useEffect, useState} from "react";
import Poems from "./poetry/Poems";


const Body = () => {
    const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
    const [poems, setPoems] = useState({});

    const fetchPoemsApi = useCallback(async () =>
        {
            if (isAuthenticated) {
                const accessToken = await getAccessTokenSilently();
                const res = await fetch('/poem/all', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                })
                return await res.json()
            }
        }, [isAuthenticated, getAccessTokenSilently],
    );
    
    
    useEffect( () => {
        fetchPoemsApi()
            .then(poetry => setPoems(poetry))
    }, [fetchPoemsApi]);


    if (isLoading) {
        return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >

                <Grid item xs={3}>
                    <Typography>
                        Loading...
                    </Typography>
                </Grid>

            </Grid>
        )
    }
    else if (isAuthenticated){
        return (
            <Box py={5}>
                <Container
                    maxWidth='xs'
                >
                    <Grid
                        container
                        direction='column'
                        spacing={5}
                    >
                        <Grid item>
                            <Poems poems={poems}/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        )
    }
    else {
        return null
    }
};

export default Body;
