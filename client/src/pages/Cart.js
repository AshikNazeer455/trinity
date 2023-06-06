import React, { useContext, useState } from 'react';
// import { BsCartX } from 'react-icons/bs';
import { calculateTotal, displayMoney } from '../helpers/utils';
import useDocTitle from '../hooks/useDocTitle';
import cartContext from '../contexts/cart/cartContext';
import CartItem from '../components/cart/CartItem';
import EmptyView from '../components/common/EmptyView';
import Header from '../components/common/Header';


import Modal from 'react-bootstrap/Modal';
const Cart = () => {
 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useDocTitle('Cart');

    const { cartItems } = useContext(cartContext);

    const cartQuantity = cartItems.length;

    // total original price
    const cartTotal = cartItems.map(item => {
        return item.originalPrice * item.quantity;
    });

    const calculateCartTotal = calculateTotal(cartTotal);
    const displayCartTotal = displayMoney(calculateCartTotal);


    // total discount
    const cartDiscount = cartItems.map(item => {
        return (item.originalPrice - item.finalPrice) * item.quantity;
    });

    const calculateCartDiscount = calculateTotal(cartDiscount);
    const displayCartDiscount = displayMoney(calculateCartDiscount);


    // final total amount
    const totalAmount = calculateCartTotal - calculateCartDiscount;
    const displayTotalAmount = displayMoney(totalAmount);


    return (
        <>
         <Header />
            <section id="cart" className="section">
                <div className="container">
                    {
                        cartQuantity === 0 ? (
                            <EmptyView
                                icon={<img src="../ass/images/the.gif" alt="" class="img-responsive img-fluid mjy" />}
                                msg="Your Cart is Empty"
                                link="/all-products"
                                btnText="Start Shopping"
                            />
                        ) : (
                            <div className="wrapper cart_wrapper">
                                <div className="cart_left_col">
                                    {
                                        cartItems.map(item => (
                                            <CartItem
                                                key={item.id}
                                                {...item}
                                            />
                                        ))
                                    }
                                </div>

                                <div className="cart_right_col">
                                    <div className="order_summary">
                                        <h3>
                                            Order Summary &nbsp;
                                            ( {cartQuantity} {cartQuantity > 1 ? 'items' : 'item'} )
                                        </h3>
                                        <div className="order_summary_details">
                                            <div className="price">
                                                <span>Original Price</span>
                                                <b>{displayCartTotal}</b>
                                            </div>
                                            <div className="discount">
                                                <span>Discount</span>
                                                <b>- {displayCartDiscount}</b>
                                            </div>
                                            <div className="delivery">
                                                <span>Delivery</span>
                                                <b>Free</b>
                                            </div>
                                            <div className="separator"></div>
                                            <div className="total_price">
                                                <b><small>Total Price</small></b>
                                                <b>{displayTotalAmount}</b>
                                            </div>
                                        </div>
                                   <a href='https://buy.stripe.com/test_4gw00D3Hr5PF5fabII' > <button type="button" className="btn checkout_btn">Checkout</button></a>  <br></br> <br></br> 
                                   <button type="button" onClick={handleShow}className="btn-ammu"><i class="fa-brands fa-google"></i>&nbsp;Gpay</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>


            <>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
         
        </Modal.Header>
        <center><h2> <img src="../ass/images/gi.png" class='pay' alt=""/>&nbsp;Pay</h2></center>
        <center><h7><font color="#737475">acceped here</font></h7></center>
         <label class="top-log mx-auto"></label>
        <Modal.Body>
<center><h2><img src="../ass/images/logo.png" class="logo1"  alt=""/>&nbsp; Trinity</h2></center><br></br>
<center>

<img src="../ass/images/gpay.jpg" class="gh"  alt=""/>


</center>
<br></br>
<center>
<h2> Pay now :&nbsp;{displayTotalAmount} </h2>
</center><br>
</br>
<div class="container">
<div class="row">
    <div class="col-3">

    <img src="../ass/images/bob.png" class="logo1"  alt=""/>
    </div>
    <div class="col-3">

<img src="../ass/images/py1.png" class="logo1"  alt=""/>
</div>
<div class="col-3">

<img src="../ass/images/am1.png" class="logo1"  alt=""/>
</div>
<div class="col-3">

<img src="../ass/images/ph1.png" class="logo1"  alt=""/>
</div>
</div>
</div><br></br><br></br>

        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal></>
        </>
    );
};

export default Cart;