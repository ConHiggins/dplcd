import "./Home.scss";

const HomeImage = ({ image, imageClass }) => {
  //   const mediaType = post.mainImage ? "post__image" : "post__vid";
  //   const mediaDimensions = post.isPortrait ? `-portrait` : `-landscape`;

  return (
    <div className="folio-post">
      {image && <img className={imageClass} src={image} alt="" />}
    </div>
  );
};

export default HomeImage;
