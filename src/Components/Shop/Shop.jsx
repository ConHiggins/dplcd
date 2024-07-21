import ShopProduct from "./ShopProduct.jsx";
import IDtShirt from "../../Assets/IDTSHIRT.png";
import IDVid from "../../Assets/ID_VID.mp4";
import "./Shop.scss"

const Shop = () => {
    return(
        <>
            <div className="shop shop__wrapper">
                    <ShopProduct link={"https://dsplaced.myshopify.com/"} img={IDtShirt} name={<p className="product__name"><i>dsplaced</i> ID t-shirt</p>} vid={IDVid} />
                
            </div>
            <div>
                <p className="shop__footer">© dsplaced. 2024</p>
            </div>
        </>
    )
}

export default Shop;