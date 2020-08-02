import React from 'react';

import { Grid, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    box: {
        backgroundColor: 'blue'
    }
}) 

const LaunchesNew = ()  =>  {

        const classes = useStyles();
        return (
            <Grid container xs={9} spacing={3} >
                <Grid item xs={3} className={classes.box} spacing={2} style={{ gridColumnEnd: 'span 3' }} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget justo sed sapien cursus commodo. Suspendisse potenti. Nam tincidunt nibh nunc, sed tristique arcu lobortis tempor. Nam eleifend neque et ex mattis, ac pulvinar nisi vestibulum. Praesent vitae malesuada dolor. Praesent malesuada nunc vitae egestas molestie. Vivamus sit amet eros in felis consequat tristique eu fermentum lectus. Proin vehicula diam eget ipsum condimentum, ac ultricies mi aliquam. Mauris sem dui, posuere sed pharetra porttitor, lobortis sed ex. Nam mauris dui, rhoncus sit amet commodo vitae, hendrerit eu turpis. Nunc quis tortor ligula. In id risus nec turpis congue ornare ac nec metus. Nam posuere, lorem eu aliquam vestibulum, enim erat ultricies risus, placerat consequat neque ligula at dui. Morbi ut leo odio. Duis tincidunt cursus auctor.
                </Grid>
                <Grid item xs={4} className={classes.box} spacing={3} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget justo sed sapien cursus commodo. Suspendisse potenti. Nam tincidunt nibh nunc, sed tristique arcu lobortis tempor. Nam eleifend neque et ex mattis, ac pulvinar nisi vestibulum. Praesent vitae malesuada dolor. Praesent malesuada nunc vitae egestas molestie. Vivamus sit amet eros in felis consequat tristique eu fermentum lectus. Proin vehicula diam eget ipsum condimentum, ac ultricies mi aliquam. Mauris sem dui, posuere sed pharetra porttitor, lobortis sed ex. Nam mauris dui, rhoncus sit amet commodo vitae, hendrerit eu turpis. Nunc quis tortor ligula. In id risus nec turpis congue ornare ac nec metus. Nam posuere, lorem eu aliquam vestibulum, enim erat ultricies risus, placerat consequat neque ligula at dui. Morbi ut leo odio. Duis tincidunt cursus auctor.
                </Grid>
                <Grid item xs={4} className={classes.box} spacing={3} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget justo sed sapien cursus commodo. Suspendisse potenti. Nam tincidunt nibh nunc, sed tristique arcu lobortis tempor. Nam eleifend neque et ex mattis, ac pulvinar nisi vestibulum. Praesent vitae malesuada dolor. Praesent malesuada nunc vitae egestas molestie. Vivamus sit amet eros in felis consequat tristique eu fermentum lectus. Proin vehicula diam eget ipsum condimentum, ac ultricies mi aliquam. Mauris sem dui, posuere sed pharetra porttitor, lobortis sed ex. Nam mauris dui, rhoncus sit amet commodo vitae, hendrerit eu turpis. Nunc quis tortor ligula. In id risus nec turpis congue ornare ac nec metus. Nam posuere, lorem eu aliquam vestibulum, enim erat ultricies risus, placerat consequat neque ligula at dui. Morbi ut leo odio. Duis tincidunt cursus auctor.
                </Grid>
            </Grid>
        )
    }

export default LaunchesNew;