import "./ShopProduct.scss";

const ShopProduct = ({img, name, link, vid}) => {
    return(
        <div className="product">
            <div className="product__main">
                <a className="product__wrapper-link" href={link}>
                    <img className="product__img" src={img} />
                </a>
                    <div className="product__text">
                        {name}
                        <a className="product__wrapper-link" href={link}>
                            <p className="product__buy">buy</p>
                        </a>
                    </div>
            </div>
            {vid && <video className= "product__video" type="video/mp4" controls allow="autoplay" autoPlay={true}>
                        <source src={vid} />
                    </video> }
        </div>
    )
}

export default ShopProduct;