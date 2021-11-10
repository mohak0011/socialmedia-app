import React from 'react';
import Share from '../Share/Share';
import './Feed.css';
import Post from "../post/Post";
import { Posts } from "../../dummyData";

function Feed() {
    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share/>
                {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
            </div>
        </div>
    )
}

export default Feed;
