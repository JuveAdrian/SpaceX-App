import React from 'react';

import { Grid, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
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
    }
});


const Cards = () => {
      const classes = useStyles();
      const [expanded, setExpanded] = React.useState(false);

            const handleExpandClick = () => {
                setExpanded(!expanded);
            };

    return (
      
        <Grid item xs={12} className={classes.content} spacing={3} container>

            { [1,2,3,4,5,6,7,8,9].map((id) => (
              <ThemeProvider theme={theme} id={id}>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.root}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar} >
                        <img src="https://images2.imgbox.com/53/22/dh0XSLXO_o.png" alt="foto" width="70px" />
                      </Avatar>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                  />
                  <CardMedia
                    className={classes.media}
                    image="https://live.staticflickr.com/65535/49635401403_96f9c322dc_o.jpg"
                    title="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="#eceff1" component="p">
                      This impressive paella is a perfect party dish and a fun meal to cook together with your
                      guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="wikipedia">
                      <LinkIcon />
                    </IconButton>
                    
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                      })}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>Method:</Typography>
                      <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                        minutes.
                      </Typography>
                      <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                      </Typography>
                      <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)
                      </Typography>
                      <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
              </ThemeProvider>
              )) }
        </Grid>
    )
}

export default Cards;