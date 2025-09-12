import "./Info.scss";

const Info = ({ scPostsData }) => {
  const services = scPostsData.find((p) => {
    return p.slug === "services";
  });
  const info = {
    title: "RAINYDAY",
    blurb1:
      "RAINYDAY is a UK based creative studio & production house working globally across creative direction, film & still image. ",
    blurb2:
      "RAINYDAY works from concept development and ideation through to production and execution of creative campaigns.",
    blurb3:
      "We believe in a relationship first approach, creating work with meaning. RAINYDAY exists to create work that connects with people; creativity with soul.",
    services: [
      "CREATIVE DIRECTION",
      "BRAND",
      "FILM & PHOTOGRAPHY",
      "PRODUCTION",
      "DESIGN",
      "2D / 3D MOTION",
    ],
    emailTo: "mailto:contact@raindaystudio.co.uk",
    email: "contact@raindaystudio.co.uk",
    instagramTo: "https://www.instagram.com/rainydaystudio__",
    instagram: "@raindaystudio__",
  };
  return (
    <>
      <div className="info">
        <div className="info-left">
          <div className="info-text-container">
            {/* <h1 className="info-title">{info.title}</h1> */}
            <p className="info-blurb">{info.blurb1}</p>
            <p className="info-blurb">{info.blurb2}</p>
            <p className="info-blurb">{info.blurb3}</p>
            <div className="info-services">
              <p className="info-services-title">SERVICES</p>
              <>
                {info.services.map((service) => (
                  <p className="info-services-item">{service}</p>
                ))}
              </>
            </div>
            <p className="info-email">
              <a href={info.emailTo}>{info.email}</a>
            </p>
            <p className="info-instagram">
              <a href={info.instagramTo}>Instagram</a>
            </p>
          </div>
        </div>
        <div className="info-right">
          {" "}
          <img src={services.imageStack[0]} />
        </div>
      </div>
    </>
  );
};

export default Info;
