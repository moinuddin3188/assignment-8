import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const SingleComment = (props) => {

    const {body} = props.comment;

    const imgId = Math.floor(Math.random() * 99);
    let gender = "women";

    if (imgId % 2 == 0) {
        gender = "men";
    };
    const img = `https://randomuser.me/api/portraits/${gender}/${imgId}.jpg`;

    return (
        <Card className="comment" style={{display: "flex", marginBottom: "20px", boxShadow: "3px 3px 10px lightgray"}}>
            <CardContent>
                <img className="rounded-img" style={{width: '70px'}} src={img} alt=""/>
            </CardContent>
            <CardContent>
                <Typography variant="body2" component="p">
                    {body}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default SingleComment;