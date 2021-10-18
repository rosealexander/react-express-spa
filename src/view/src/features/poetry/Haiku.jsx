import React from 'react';
import {Grid, Typography} from "@mui/material";

const Haiku = ({haiku}) => {
    return (
        <Grid
            container
            direction='column'
            spacing={3}
            alignItems='center'
        >
            <Grid item>
                <Grid
                    container
                    direction='column'
                    alignItems='center'
                >
                    <Grid item>
                        <Typography
                            variant='h5'
                            align='center'
                        >
                            {haiku.title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant='caption'
                            align='center'
                        >
                            by {haiku.author?.name}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Typography
                    variant='body2'
                    align='center'
                >
                    {haiku.firstLine}
                </Typography>
            </Grid>
            <Grid item>
                <Typography
                    variant='body2'
                    align='center'
                >
                    {haiku.secondLine}
                </Typography>
            </Grid>
            <Grid item>
                <Typography
                    variant='body2'
                    align='center'
                >
                    {haiku.thirdLine}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Haiku;
