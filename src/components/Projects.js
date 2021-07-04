import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';


import GitHubIcon from '@material-ui/icons/GitHub';
import CenterFocusWeakIcon from '@material-ui/icons/CenterFocusWeak';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        backgroundColor: 'var(--color-primary)'

    },
    media: {
        height: 140,
    },
});

function Projects({ github, liveLink, img, header, content, stack }) {
    console.log(stack)
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardHeader
                    avatar={
                        <Avatar >
                            <CenterFocusWeakIcon />
                        </Avatar>
                    }
                    action={
                        <IconButton >
                            <a target="_blank" rel="noreferrer" href={github}><GitHubIcon /></a>
                        </IconButton>
                    }

                    subheader={<Button size="small" color="primary">
                        LIVE LINK
                    </Button>}

                    title={header}



                />
                <CardMedia
                    className={classes.media}
                    image={img}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {header}
                    </Typography>
                    <Typography variant="body3" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    React
                </Button>
                <Button size="small" color="primary">
                    firebae
                </Button>
                <Button size="small" color="primary">
                    Node
                </Button>

            </CardActions>
        </Card>
    );
}


export default Projects;
