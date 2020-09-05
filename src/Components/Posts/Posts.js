import React, { useState, useEffect } from 'react';
import SinglePost from '../SinglePost/SinglePost';

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data));
    }, []);

    const first10 = posts.slice(0, 10);
    
    return (
        <div>
            {
                first10.map(post => <SinglePost post={post} key={post.id} showSeeMore={true} />)
            }
        </div>
    );
};

export default Posts;