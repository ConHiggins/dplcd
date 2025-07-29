import "./Info.scss";

const Info = () => {
  const info = {
    title: "RAINYDAY",
    blurb:
      "RAINYDAY IS A CREATIVE COMPANY FOCUSED ON THE DEVELOPMENT & DELIVERY OF IDEAS. WE ARE FOUNDED WITH A COMMITMENT TO CREATIVE EXPRESSION AND COLLABORATION. THROUGH CREATIVE DIRECTION, VISUAL PRODUCTION, DESIGN AND SOUND, WE WORK TO REALISE CONCEPTS",
    services: [
      "FILM & PHOTOGRAPHY",
      "CREATIVE DIRECTION",
      "BRAND",
      "PRODUCTION",
      "EXPERIENCES",
      "DESIGN",
      "2D/3D MOTION",
      "WEB DEVELOPMENT",
      "SOUND",
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
            <p className="info-title">{info.title}</p>
            <p className="info-blurb">{info.blurb}</p>
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
              <a href={info.instagramTo}>{info.instagram}</a>
            </p>
          </div>
        </div>
        <div className="info-right"></div>
      </div>

      {/* <div className="info">
        <p className="info__descr">{info.title.toUpperCase()}</p>
        <p className="info__descr">{info.blurb.toUpperCase()}</p>
        <p className="info__serv-title">SERVICES</p>
        <p className="info__serv">CREATIVE DIRECTION</p>
        <p className="info__serv">BRAND</p>
        <p className="info__serv">FILM & PHOTOGRAPHY</p>
        <p className="info__serv">PRODUCTION</p>
        <p className="info__serv">EXPERIENCES</p>
        <p className="info__serv">DESIGN</p>
        <p className="info__serv">2D/3D MOTION</p>
        <p className="info__serv">WEB DEVELOPMENT</p>
        <p className="info__serv">SOUND</p>
        <div className="info-links">
          <a className="info__link" href="mailto:contact@dsplaced.co.uk">
            contact@dsplaced.co.uk
          </a>
          <a className="info__link" href="https://www.instagram.com/dsplaced/">
            @dsplaced
          </a>
        </div>
      </div> */}
    </>
  );
};

export default Info;
