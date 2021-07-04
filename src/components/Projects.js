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
import LinkIcon from '@material-ui/icons/Link';


import GitHubIcon from '@material-ui/icons/GitHub';
import CenterFocusWeakIcon from '@material-ui/icons/CenterFocusWeak';

const useStyles = makeStyles({
    root: {
        maxWidth: '34.5rem',
        backgroundColor: 'var(--color-primary)',
        height: '40rem',

    },
    media: {
        height: 140,
    },
    link: {
        textDecoration: 'none',
        color: 'black',
        fontSize: '1rem'
    }
});

function Projects({ github, liveLink, img, header, content, fullStack }) {

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
                            <a target="_blank" rel="noreferrer" href={github} className={classes.link}><GitHubIcon /></a>
                        </IconButton>
                    }

                    title={<Button size="small" color="primary">
                        <a target="_blank" rel="noreferrer" href={liveLink} className={classes.link}>Live Link</a>
                    </Button>}



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
                    {content ? (<Typography variant="body3" color="textSecondary" component="p">
                        {content}
                    </Typography>) : (<Typography variant="body3" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>)}

                </CardContent>
            </CardActionArea>
            <CardActions>
                {fullStack ? (fullStack.map((stack) => <Button size="small" color="primary"> {stack}
                </Button>)) : (<Button size="small" color="primary"> React
                </Button>)}

            </CardActions>
        </Card>
    );
}


export default Projects;
