import "./GridPosts.scss";
import GridItem from "../GridItem/GridItem.jsx";

export default function GridPosts ({ postsData }) {

    return (
        <div className="grid-posts-container">
            {postsData && (
                <div className="grid-post-wrapper">
                    {postsData.map((post, index) => (
                        <GridItem post={post} />
                    ))}
                </div>
            )}
        </div>
    );
}

