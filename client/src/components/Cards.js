import React from 'react';

import { Grid, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LinkIcon from '@material-ui/icons/Link';
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
  },
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
        width: '70px',
        height: '70px'
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
      backgroundColor: '#37474f',
      justifyContent: 'center'
    }
});


const Cards = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const launchesList = [
      {
        id: 1,
        patch: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
        title: 'FalconSat',
        date: '2006-03-24T22:30:00.000Z',
        img: 'https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg',
        details: 'Engine failure at 33 seconds and loss of vehicle',
        wiki: 'https://en.wikipedia.org/wiki/SpaceX_CRS-20'
      },
      {
        id: 2,
        patch: 'https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png',
        title: 'DemoSat',
        date: '2006-03-24T22:30:00.000Z',
        img: 'https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg',
        details: 'Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage',
        wiki: 'https://en.wikipedia.org/wiki/SpaceX_CRS-20'
      },
      {
        id: 3,
        patch: 'https://images2.imgbox.com/e9/c9/T8CfiSYb_o.png',
        title: 'RatSat',
        date: '2006-03-24T22:30:00.000Z',
        img: 'https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg',
        details: 'Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage',
        wiki: 'https://en.wikipedia.org/wiki/SpaceX_CRS-20'
      },
      {
        id: 4,
        patch: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
        title: 'FalconSat',
        date: '2006-03-24T22:30:00.000Z',
        img: 'https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg',
        details: 'Engine failure at 33 seconds and loss of vehicle',
        wiki: 'https://en.wikipedia.org/wiki/SpaceX_CRS-20'
      },
      {
        id: 5,
        patch: 'https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png',
        title: 'DemoSat',
        date: '2006-03-24T22:30:00.000Z',
        img: 'https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg',
        details: 'Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage. Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage',
        wiki: 'https://en.wikipedia.org/wiki/SpaceX_CRS-20'
      },
      {
        id: 6,
        patch: 'https://images2.imgbox.com/e9/c9/T8CfiSYb_o.png',
        title: 'RatSat',
        date: '2006-03-24T22:30:00.000Z',
        img: 'https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg',
        details: 'Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage',
        wiki: 'https://en.wikipedia.org/wiki/SpaceX_CRS-20'
      }
    ]

    return (
      
        <Grid item xs={12} className={classes.content} spacing={3} container>

            { launchesList.map((item, id) => (
              <ThemeProvider theme={theme} id={id}>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.root}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar} >
                        <img src={item.patch} alt="foto" width="70px" />
                      </Avatar>
                    }
                    title={item.title}
                    subheader={item.date}
                  />
                  <CardMedia
                    className={classes.media}
                    image={item.img}
                    title="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="#eceff1" component="p" style={{ height: '60px' }}>
                      {item.details}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing={true} style={{ justifyContent: 'center' }}>
                    <Button children={'Read more'} href={'https://google.pl'} className={classes.readMoreBtn} />
                  </CardActions>
                </Card>
              </Grid>
              </ThemeProvider>
              )) }
        </Grid>
    )
}

export default Cards;