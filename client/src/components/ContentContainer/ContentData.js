import React from 'react';

import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';

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


import { Link } from 'react-router-dom';

import ContentHeader from '../ContentContainer/ContentHeader';


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
  
  const useStyles = theme => ({
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

class ContentData extends React.Component {
    
    
    render () {
        const { classes } = this.props;
        return (
            <main>
            <Grid item xs={12} className={classes.content} spacing={3} container>
                <ContentHeader state={{ pageName: this.props.state.pageName }} />
                    {this.props.state.launches.map(el => (
                    <div className="item-container" key="el.id">
                        <div className="image">
                        <Link to={{ 
                                pathname: `/launche/${el.id}`, 
                                state: { 
                                    name: el.name,
                                    img: el.links.patch.small,
                                    gallery: el.links.flickr.original,
                                    success: el.success,
                                    details: el.details,
                                    date: el.date_utc,
                                    launchpad: el.launchpad,
                                    rocket: el.rocket }
                            }}>
                                <img src={el.links.patch.small} alt="" />
                            </Link>
                        </div>
                        <div className="describe">
                            <Link to={{ 
                                    pathname: `/launche/${el.id}`, 
                                    state: { 
                                        name: el.name,
                                        img: el.links.patch.small,
                                        gallery: el.links.flickr.original,
                                        success: el.success,
                                        details: el.details,
                                        date: el.date_utc,
                                        launchpad: el.launchpad,
                                        rocket: el.rocket }
                                }}><h1 className="name">{el.name}</h1>
                            </Link>
                            <Link to={{ 
                                pathname: `/launche/${el.id}`, 
                                state: { 
                                    name: el.name,
                                    img: el.links.patch.small,
                                    gallery: el.links.flickr.original,
                                    success: el.success,
                                    details: el.details,
                                    date: el.date_utc,
                                    launchpad: el.launchpad,
                                    rocket: el.rocket }
                            }}>
                                <button>Read More</button>
                            </Link>
                        <span>{el.date}</span>
                    </div>
                </div>
                ))}
            </Grid>
                
            </main>
        )
    }
}
export default withStyles(useStyles)(ContentData)