import React, { useContext } from 'react';
import { IoMdStar } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { displayMoney } from '../../helpers/utils';
import cartContext from '../../contexts/cart/cartContext';
import useActive from '../../hooks/useActive';


const ProductCard = (props) => {

    const { id, images, title, info, finalPrice, originalPrice, rateCount, path } = props;

    const { addItem } = useContext(cartContext);
    const { active, handleActive, activeClass } = useActive(false);


    // handling Add-to-cart
    const handleAddItem = () => {
        const item = { ...props };
        addItem(item);

        handleActive(id);

        setTimeout(() => {
            handleActive(false);
        }, 3000);
    };

    const newPrice = displayMoney(finalPrice);
    const oldPrice = displayMoney(originalPrice);


    return (
        <>
        
             
            {/* <div className="product-men">
                <figure className="img-fluid5">
                    <Link to={`${path}${id}`}>
                        <img src={images[0]} alt="product-img" />
                    </Link>
                </figure>
                
                   
                    <h3 className="link-product-add-cart">
                        <Link to={`${path}${id}`}>{title}</Link>
                    </h3>
                    <h5 className="product-new-top">{info}</h5>
                    <div className="separator"></div>
                    <h2 className="products_price">
                        {newPrice} &nbsp;
                        <small><del>{oldPrice}</del></small>
                    </h2>
                    <button
                        type="button"
                        className={`btn products_btn ${activeClass(id)}`}
                        onClick={handleAddItem}
                    >
                        {active ? 'Added' : 'Add to cart'}
                    </button>
                </div> */}
         



          <div class="">
						<div class="product-googles-info googles">
							<div class="men-pro-item">
								<div class="men-thumb-item">
                                <figure className="img-fluid5">
                    <Link to={`${path}${id}`}>
                        <img src={images[0]} alt="product-img" />
                    </Link>
                </figure>
                                
									<div class="men-cart-pro">
										<div class="inner-men-cart-pro">
										<div  class="link-product-add-cart" > <Link to={`${path}${id}`}>Add To Cart</Link></div>
										</div>
									</div>
									<span class="product-new-top">New</span>
								</div>
								<div class="item-info-product">

									<div class="info-product-price">
										<div class="grid_meta">
											<div class="product_price">
                                            <h3 className="">
                        <Link to={`${path}${id}`}>{title}</Link>
                    </h3>
                    <h5 className="product-new-top">{info}</h5>	
                    <div className="separator"></div>	
                   		
												<div class="grid-price mt-2">
													<span class="money ">{newPrice} &nbsp;
                        <small><del>{oldPrice}</del></small></span>
												</div>
											</div>
</div>
										
									</div> </div> </div> </div> </div>
        </>
    );
};

export default ProductCard;