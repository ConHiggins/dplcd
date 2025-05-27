import "./Home.scss";

const HomeImage = ({ image, forwardId }) => {
  //   const mediaType = post.mainImage ? "post__image" : "post__vid";
  //   const mediaDimensions = post.isPortrait ? `-portrait` : `-landscape`;

  return (
    <div className="folio-post">
      {image && <img className="folio-img" src={image} alt="" />}
    </div>
  );
};

export default HomeImage;
