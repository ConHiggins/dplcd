import "./Info.scss";

const Info = () => {
  const desc1 =
    "DSPLACED IS A CREATIVE COMPANY FOCUSED ON THE DEVELOPMENT & DELIVERY OF IDEAS";
  const desc2 =
    "WE ARE FOUNDED WITH A COMMITMENT TO CREATIVE EXPRESSION AND COLLABORATION. THROUGH CREATIVE DIRECTION, VISUAL PRODUCTION, DESIGN AND SOUND, WE WORK TO REALISE CONCEPTS";
  //   const desc = `dsplaced is a creative company focused on the development & delivery of ideas. Founded with a commitment to strategic thinking and creative expression, we offer a purpose-driven approach to all collaborations.`;
  //   const desc2 = ` Through creative direction, visual production, design and sound, we work across boundaries to facilitate ideas.`;

  return (
    <>
      <div className="info">
        <p className="info__descr">{desc1.toUpperCase()}</p>
        <p className="info__descr">{desc2.toUpperCase()}</p>
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
      </div>
    </>
  );
};

export default Info;
