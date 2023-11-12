import "./Info.scss";

const Info = () => {

    return (
        <>
                <div className="info__desc">
                    <p className="info__desc_p">"Creative practice, delivering ideas."</p>
                </div>
                <div className="info">
                    <a className="info__link" href="mailto:contact@dsplaced.co.uk">
                    contact@dsplaced.co.uk
                    </a>
                    <a className="info__link" href="https://www.instagram.com/dsplaced/">
                        @dsplaced
                    </a>
                </div>       
        </>
    )
}

export default Info;