import { Link } from "react-router-dom";
import "./SinglePost.scss";

const SinglePost = ({ post, parentClass }) => {
    /*const postBody =
        post.body &&
        post.body[0].children.map((item) => {
            ///URL's are stored in .markDefs
            ///If a markDef._key exists that matches the item's key
            const markDefMatchingIndex = post.body[0].markDefs.findIndex((x) => x._key);

            return markDefMatchingIndex !== "undefined" && post.body[0].markDefs[markDefMatchingIndex]._key === item.marks[0] ? ( ///Match the URL to the text
                <a href={post.body[0].markDefs[markDefMatchingIndex].href}>{Object.values(item.text)}</a>
            ) : (
                Object.values(item.text)
            );
        });*/

    return (
        <div>
            <div className={`post ${parentClass}`}>
                <Link className="post__link" to="#" /*" + post.slug.current}*/ key={post.slug.current}></Link>

                {post.video && (
                    <iframe
                        className="post__vid"
                        src={post.video}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                )}
                {post.mainImage && <img className="post__image" src={post.mainImage} alt="" />}
                {post.client && <h1 className="post__client">{post.client}</h1>}
                {post.subtext && (
                    <h2 className="post__subtext">
                        <em>{post.subtext}</em>
                    </h2>
                )}

                {post.title && <h2 className="post__title">{post.title}</h2>}
                {post.body && <div className="post__body">{post.body}</div>}
            </div>
        </div>
    );
};

export default SinglePost;
