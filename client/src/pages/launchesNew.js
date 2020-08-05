import React from 'react';

import { Grid, makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
    box: {
        justifyContent: 'center'
    },
    nav: {
        height: '80px'
    },
    logo: {
        backgroundColor: 'blue',
        spacing: '3'
    },
    main: {
        justifyContent: 'center',
        backgroundColor: 'green'
    },
    content: {
        backgroundColor: 'red'
    }
}) 

const LaunchesNew = ()  =>  {

        const classes = useStyles();
        return (
            <Grid container xs={12} spacing={3} className={classes.box} >
                <Grid item xs={12} className={classes.nav} container >
                    <Grid item xs={3} className={classes.logo}>Logo</Grid>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={3}>Search</Grid>
                </Grid>
                <Grid item xs={10} className={classes.main} container>
                    <Grid item xs={12} className={classes.content} spacing={3} container>
                        <Grid item xs={4}>
                            <Card className={classes.root} >
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Word of the Day
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                    be-nev-o-lent
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                    adjective
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        
                        <Grid item xs={4}>
                            <Card className={classes.root} >
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Word of the Day
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                    be-nev-o-lent
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                    adjective
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item xs={4}>
                            <Card className={classes.root} >
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Word of the Day
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                    be-nev-o-lent
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                    adjective
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

export default LaunchesNew;