import React from 'react';
import './SinglePost.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginBottom: '20px',
        backgroundColor: '#fbffff',
        boxShadow: '3px 3px 10px lightGray'
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const SinglePost = (props) => {

    const classes = useStyles();

    const {title, body, id} = props.post;

    let gender = "women";
    if (id % 2 == 0) {
        gender = "men";
    };
    const userImg = `https://randomuser.me/api/portraits/${gender}/${id}.jpg`;

    return (
        <Card className={classes.root}>
            <CardContent className="card-header">
                <img className="rounded-img" src={userImg} alt=""/>
                <h2>Lorem ipsum</h2>
            </CardContent>
            <CardContent>
                <Typography>
                    <h4>{title}</h4>
                </Typography>
                <Typography>
                    <p>{body}</p>
                </Typography>
            </CardContent>
            <CardActions>
                {
                    props.showSeeMore &&   
                        <Link to={`/post/${id}`}>
                            <Button variant="contained" color="primary">SEE MORE</Button>
                        </Link>
                }
            </CardActions>
        </Card>
    );
};

export default SinglePost;