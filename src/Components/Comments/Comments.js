import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SingleComment from '../SingleComment/SingleComment';
import SinglePost from '../SinglePost/SinglePost';


const Comments = () => {

    const { postId } = useParams();

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(res => res.json())
            .then(data => setComments(data));
    }, []);

    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data));
    }, []);

    return (
        <div>
            {
                <SinglePost post={post} showSeeMore={false} />
            }
            <h5>Comments</h5>
            {
                comments.map(comment => <SingleComment key={comment.id} comment={comment} />)
            }
        </div>
    );
};

export default Comments;