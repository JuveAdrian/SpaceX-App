import React from 'react';
import moment from 'moment';


import { Grid, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  }
});

const useStyles = makeStyles({
    box: {
        justifyContent: 'center'
    },
    nav: {
        height: '80px',
        backgroundColor: '#37474f'
    },
    logo: {
        backgroundColor: 'blue',
        spacing: '3'
    },
    main: {
        justifyContent: 'center'
    },
    content: {
    },
    avatar: {
        width: '80px',
        height: '80px',
        backgroundColor: 'rgba(0,0,0,0.0)'
    },
    media: {
      height: '210px'
    },
    root: {
      backgroundColor: '#455a64',
      color: '#eceff1'
    },
    secondHeader: {
      color: '#eceff1'
    },
    readMoreBtn: {
      color: '#fff',
      backgroundColor: '#2196f3',
      padding: '10px 14px',
      marginBottom: '14px',
      justifyContent: 'center',
      "&:hover" : {
        backgroundColor: '#1769aa'
      }
    }
});

const Cards = (props) => {
    const classes = useStyles();

    console.log(props);
    return (
      
        <Grid item xs={12} className={classes.content} spacing={3} container>

            { props.state.launches.map((item, id) => (
              <ThemeProvider theme={theme} id={id}>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.root}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar} >
                        <img src={item.patch} alt="foto" width="70px" />
                      </Avatar>
                    }
                    style={{ fontSize: '40px' }}
                    title={item.title}
                    subheader={moment(item.date).format('MMMM D, YYYY')}
                  />
                  <CardMedia
                    className={classes.media}
                    image={item.img}
                    title={item.title}
                  />
                  <CardContent>
                    <Typography variant="body2" color="#eceff1" component="p" style={{ minHeight: '60px' }}>
                      {item.details.slice(0, 170) + '...'}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing={true} style={{ justifyContent: 'center' }}>
                    <Button children={'Read more'} href={'/launche/5eb87d42ffd86e000604b384'} className={classes.readMoreBtn} />
                  </CardActions>
                </Card>
              </Grid>
              </ThemeProvider>
              )) }
        </Grid>
    )
}

export default Cards;