import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        minWidth: '20rem',
        height: '20rem',
        backgroundColor: 'var(--color-primary)'
    },
    img: {
        height: '3rem',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: '1.4rem',
        marginTop: 10,
    },
    content: {
        fontSize: '1.2rem',
        marginTop: 10,
    }
});


function CardBox({ icon, header, content }) {
    const classes = useStyles();
    return (
        <CardContainer >
            <Card className={classes.root}>
                <CardContent>
                    <img src={icon} className={classes.img} alt="" />

                    <h4 className={classes.title}> {header} </h4>

                    <Typography className={classes.content} variant="body2" component="p">{content}</Typography>
                </CardContent>
            </Card>
        </CardContainer >
    )
}

export default CardBox;

const CardContainer = styled.div`
 
`;


