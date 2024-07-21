import { useState } from "react";
import SinglePost from "../SinglePost/SinglePost.jsx";

import "./ProjectDropper.scss";

const ProjectDropper = ({ post }) => {
    const [showPost, setShowPost] = useState(false);
    const parentClass = "dropper-project";

    const toggleShowPost = () => {
        setShowPost(!showPost);
    };

    return (
        <div className="project-dropper" >
             <div className="project-dropper__wrapper">
                <h2 className="project-dropper__title" onClick={toggleShowPost}>
                    {post.client.toUpperCase()} // {post.subtext.toUpperCase()} - {post.title.toUpperCase()}
                </h2>
            </div> 
            {showPost && <SinglePost parentClass={parentClass} post={post} />}
        </div>
    );
};

export default ProjectDropper;
