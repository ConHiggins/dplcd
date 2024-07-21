import "./Info.scss";

const Info = () => {

    const desc = "A creative company focussed on the development & delivery of ideas. Founded with a commitment to strategic thinking and creative expression, we work across film, still image, sound and design to offer alternative thinking to the projects we create."

    return (
        <>

                <div className="info">
                    <p className="info__descr">{desc.toUpperCase()}</p>
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