import React from 'react';
import {Grid, Typography} from "@mui/material";

const Limerick = ({limerick}) => {
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
                            {limerick.title}
                        </Typography >
                    </Grid>
                    <Grid item>
                        <Typography
                            variant='caption'
                            align='center'
                        >
                            by {limerick.author?.name}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Typography
                    variant='body2'
                    align='center'
                >
                    {limerick.firstLine}
                </Typography>
            </Grid>
            <Grid item>
                <Typography
                    variant='body2'
                    align='center'
                >
                    {limerick.secondLine}
                </Typography>
            </Grid>
            <Grid item>
                <Typography
                    variant='body2'
                    align='center'
                >
                    {limerick.thirdLine}
                </Typography>
            </Grid>
            <Grid item>
                <Typography
                    variant='body2'
                    align='center'
                >
                    {limerick.fourthLine}
                </Typography>
            </Grid>
            <Grid item>
                <Typography
                    variant='body2'
                    align='center'
                >
                    {limerick.fifthLine}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Limerick;
