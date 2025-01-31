import "./Info.scss";

const Info = () => {

    const desc = `dsplaced is a creative company focused on the development & delivery of ideas. Founded with a commitment to strategic thinking and creative expression, we offer a purpose-driven approach to all collaborations.`
    const desc2 = ` Through creative direction, visual production, design and sound, we work across boundaries to facilitate ideas.`

    return (
        <>

                <div className="info">
                    <p className="info__descr">{desc.toUpperCase()}</p>
                    <p className="info__descr">{desc2.toUpperCase()}</p>
                    <p className="info__descr">SERVICES</p>
                        <p className="info__serv">CREATIVE DIRECTION</p>
                        <p className="info__serv">BRAND</p>
                        <p className="info__serv">FILM & PHOTOGRAPHY</p>
                        <p className="info__serv">PRODUCTION</p>
                        <p className="info__serv">DESIGN</p>
                        <p className="info__serv">SOUND</p>
                        <p className="info__serv">EVENTS</p>
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
    )
}

export default Info;