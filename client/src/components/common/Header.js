import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { dropdownMenu } from '../../data/headerData';
import commonContext from '../../contexts/common/commonContext';
import cartContext from '../../contexts/cart/cartContext';
import AccountForm from '../form/AccountForm';
import SearchBar from './SearchBar';
import $ from 'jquery';

   


const Header = () => {

    const { formUserInfo, toggleForm, toggleSearch } = useContext(commonContext);
    const { cartItems } = useContext(cartContext);
    const [isSticky, setIsSticky] = useState(false);
	
	


    // handle the sticky-header
    useEffect(() => {
        const handleIsSticky = () => window.scrollY >= 50 ? setIsSticky(true) : setIsSticky(false);

        window.addEventListener('scroll', handleIsSticky);

        return () => {
            window.removeEventListener('scroll', handleIsSticky);
        };
    }, [isSticky]);


    const cartQuantity = cartItems.length;


    return (
        <>
            <header id="header" className={isSticky ? 'sticky' : ''}>
                <div className="container">
                    <div className="navbar">
					
					<a href='/'><img src="../ass/images/logo.png" class="logo"  alt=""/></a> 
					
                        <h2 className="nav_logo">
                  
                        </h2>
                        <nav className="nav_actions d-flex justify-content-end d-flex align-items-start">
                            <div className="search_action">
                            <span onClick={() => toggleSearch(true)}>
                                    <AiOutlineSearch />
                                </span>
                                <div className="tooltip">Search</div>
                            </div>

                            <div className="cart_action">
                                <Link to="/cart">
                                    <AiOutlineShoppingCart />
                                    {
                                        cartQuantity > 0 && (
                                            <span className="badge">{cartQuantity}</span>
                                        )
                                    }
                                </Link>
                                <div className="tooltip">Cart</div>
                            </div>

                            <div className="user_action">
                                <span>
                                    <AiOutlineUser />
                                </span>
                                <div className="dropdown_menu">
                                    <h4>Hello! {formUserInfo && <Link to="*">&nbsp;{formUserInfo}</Link>}</h4>
                                    <p>Access account and manage orders</p>
                                    {
                                        !formUserInfo && (
                                            <button
                                                type="button"
                                                onClick={() => toggleForm(true)}
                                            >
                                                Login / Signup
                                            </button>
                                        )
                                    }
                                    <div className="separator"></div>
                                    <ul>
                                        {
                                            dropdownMenu.map(item => {
                                                const { id, link, path } = item;
                                                return (
                                                    <li key={id}>
                                                        <Link to={path}>{link}</Link>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header><br/><br/><br/>
            {/* <label class="top-log mx-auto"></label> */}
			
			<nav class="navbar navbar-expand-lg navbar-light  top-header mt-2 d-flex align-items-end">
			
			
		     <button class="navbar-toggler mb" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
				    aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon">
						
					</span>
				</button>  
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
			
					<ul class="navbar-nav nav-mega ml-auto " >
          

             
	<li class="nav-item dropdown ">

							<a class="nav-link dropdown-toggle" href="/Service" id="navbarDropdown1"  data-toggle="dropdown" aria-haspopup="true"
							    aria-expanded="false" >
							<font color="black">Doors</font>	
							</a>
							<ul class="dropdown-menu mega-menu ">
								<li>
									<div class="row">
										<div class="col-md-4 media-list span4 ">
										
											
											<ul>
									
								<li class="media-mini mt-3">
								<a href='/Doors'><h5 class="tittle-w3layouts-sub">Doors </h5></a>
								
													<a href="/Cdoors"><font color="black">Classic Doors</font></a>
												</li>
												<li class="">
													<a href="/Pdoors"><font color="black">Pooja Doors</font></a>
												</li>
												<li>
													<a href="/Edoors"><font color="black">Entrance Doors</font></a>
												</li>
												<li>
													<a href="/Cadoors"><font color="black">Cravings Doors</font>	</a>
												</li>
												
											</ul>
										</div>
									
										<div class="col-md-4 media-list span4 text-left">

											{/* <h5 class="tittle-w3layouts-sub-nav">Doors 
											</h5> */}
											{/* <div class="media-mini mt-3">
												<a href="shop.html">
													<img src="../ass/images/g2.jpg" class="img-fluid" alt=""/>
												</a>
											</div> */}

  
										</div>
									</div>
								
								</li>
							</ul>
						</li>	<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true"
							    aria-expanded="false">
								<font color="black">Bedrooms</font>
							</a>
							<ul class="dropdown-menu mega-menu ">
								<li>
									<div class="row">
										<div class="col-md-4 media-list span4 text-left">
									
											<ul>
										
												<li class="media-mini mt-3">
												<a href='/Beds'><h5 class="tittle-w3layouts-sub">Bed </h5></a>
													<a href="shop.html"><font color="black">Single Bed</font>





</a>
												</li>
												<li class="">
													<a href="shop.html"><font color="black">Double Bed</font></a>
												</li>
												<li>
													<a href="shop.html"><font color="black">Kids Bed</font></a>
												</li>
												<li>
													<a href="shop.html"><font color="black">Bed With Storage</font></a>
												</li>
											
											</ul>
										</div>
										<div class="col-md-4 media-list span4 text-left">
									
											<ul>
												<li class="media-mini mt-3">
												<a href='/Bedroom'><h5 class="tittle-w3layouts-sub">Cupboards </h5></a>
													<a href="shop.html"><font color="black">Single Door Cupboards</font></a>
												</li>
												<li class="">
													<a href="shop.html"><font color="black">Double Door cupboards</font></a>
												</li>
												
											
											</ul>
										</div>
										<div class="col-md-4 media-list span4 text-left">
										
											<ul>
												<li class="media-mini mt-3">
												<a href='/Bedroom'><h5 class="tittle-w3layouts-sub">Tables </h5></a>
													<a href="shop.html"><font color="black">Side Tables</font></a>
												</li>
												<li class="">
													<a href="shop.html"><font color="black">Dressing Tables</font></a>
												</li>
												
											
											</ul>
										</div>
										
									</div>
								
								</li>
							</ul>
						</li>	<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true"
							    aria-expanded="false">
								<font color="black">Living</font>
							</a>
							<ul class="dropdown-menu mega-menu ">
								<li>
									<div class="row">
										<div class="col-md-3 media-list span4 text-left">
										
											<ul>
											
												<li class="media-mini mt-3">
												<h5 class="tittle-w3layouts-sub"> Sofa </h5>
													<a href="shop.html">	<font color="black">Whood Sofa</font></a>
												</li>
												<li class="">
													<a href="shop.html">	<font color="black">fabaric sufa</font></a>
												</li>
												<li>
													<a href="shop.html">	<font color="black">Sofa cum Ced</font></a>
												</li>
												<li>
													<a href="shop.html">	<font color="black">Premium Sofa</font></a>
												</li>
												
												
											</ul>
										</div>
										<div class="col-md-3 media-list span4 text-left">
										
											<ul>
												<li class="media-mini mt-3">
												<h5 class="tittle-w3layouts-sub">Recliners</h5>
													<a href="shop.html">	<font color="black">Home Teatre Recliner</font></a>
												</li>
												<li>
													<a href="shop.html">	<font color="black">Fabric Recliner</font></a>
												</li>
												<li>
													<a href="shop.html">	<font color="black">Recliner set</font></a>
												</li>
												
											</ul>

										</div>
										<div class="col-md-3 media-list span4 text-left">

											
											<div class="media-mini mt-3">
											<ul>
										
												<li class="media-mini mt-3">
												<h5 class="tittle-w3layouts-sub-nav">Chair 
											</h5>
													<a href="shop.html">	<font color="black">Wooden Chair</font></a>
												</li>
												<li>
													<a href="shop.html">	<font color="black">Wing Chair</font></a>
												</li>
												<li>
													<a href="shop.html">	<font color="black"> Accet Chair</font></a>
												</li>
												<li>
													<a href="shop.html">	<font color="black"> Balcong Chair Set</font></a>
												</li>
												<li>
													<a href="shop.html"><font color="black">Rattle Chair</font></a>
												</li>
											</ul>
											</div></div>
											<div class="col-md-3 media-list span text-left">
										
											<ul>
	<li class="media-mini mt-3">
	<h5 class="tittle-w3layouts-sub">Tables</h5>
		<a href="shop.html"><font color="black">Wooden Center Table</font></a>
	</li>
	<li>
		<a href="shop.html"><font color="black">Glass Center Table</font></a>
	</li>
	<li>
		<a href="shop.html"><font color="black">Side & End Table</font></a>
	</li>
	<li>
		<a href="shop.html"><font color="black"> Consile Table</font></a>
	</li>
	<li>
		<a href="shop.html"> <font color="black">Rattle Chair</font></a>
	</li>
</ul>

										</div>
										</div>
									
								
								</li>
							</ul>
						</li>	<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true"
							    aria-expanded="false">
								<font color="black">Dining</font>
							</a>
							<ul class="dropdown-menu mega-menu ">
								<li>
									<div class="row">
										<div class="col-md-4 media-list span4 text-left">
											
											<ul>
												<li class="media-mini mt-3">
												<h5 class="tittle-w3layouts-sub"> Dining </h5>
													<a href="shop.html"><font color="black">Four Seater Dining Set</font></a>
												</li>
												<li class="">
													<a href="shop.html"><font color="black">Six Seater Dining Set</font></a>
												</li>
												<li>
													<a href="shop.html"><font color="black"> Eight Seater</font></a>
												</li>
												<li>
													<a href="shop.html"><font color="black">Table</font></a>
												</li>
												<li>
													<a href="shop.html"><font color="black">Chair</font></a>
												</li>
												
											</ul>
										</div>
									</div></li></ul>
						</li>	<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true"
							    aria-expanded="false">
								<font color="black">Office</font>
							</a>
							<ul class="dropdown-menu mega-menu ">
								<li>
									<div class="row">
										<div class="col-md-4 media-list span4 text-left">
											
											<ul>
												<li class="media-mini mt-3">
												<h5 class="tittle-w3layouts-sub"> Table  </h5>
													<a href="shop.html"><font color="black">Computer Table</font></a>
												</li>
												<li class="">
													<a href="shop.html"><font color="black">Office Table</font></a>
												</li>
												<li>
													<a href="shop.html"><font color="black">Conference Table</font></a>
												</li>
												
											</ul>
										</div>
										<div class="col-md-4 media-list span4 text-left">
											
											<ul>
												<li class="media-mini mt-3">
												<h5 class="tittle-w3layouts-sub">Chair</h5>
													<a href="shop.html"><font color="black">Office Chair</font></a>
												</li>
												<li>
													<a href="shop.html"><font color="black">Computer Chair</font></a>
												</li>
												<li>
													<a href="shop.html"><font color="black">Visitor Chair</font></a>
												</li>
												
												
												
											</ul>
											

										</div>
										<div class="col-md-4 media-list span4 text-left">

										
											<ul>
												<li class="media-mini mt-3">

												<h5 class="tittle-w3layouts-sub-nav">Book Shelves 
											</h5>
													<a href="shop.html"><font color="black">Enginered Wood</font></a>
												</li>
												<li>
													<a href="shop.html"><font color="black">Silid Wood</font></a>
												</li>
												
												
												
												
											</ul>

										</div>
									</div>
								
								</li>
							</ul>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true"
							    aria-expanded="false">
								<font color="black">Out Doors</font>
							</a>
							<ul class="dropdown-menu mega-menu ">
								<li>
									<div class="row">
										<div class="col-md-4 media-list span4 text-left">
											<h5 class="tittle-w3layouts-sub"> Furniture Product </h5>
											<ul>
												<li class="media-mini  mt-3">
													<a href="shop.html">null</a>
												</li>
												<li class="">
													<a href="shop.html">null</a>
												</li>
												<li>
													<a href="shop.html">null</a>
												</li>
												<li>
													<a href="shop.html">null</a>
												</li>
												<li>
													<a href="shop.html">null</a>
												</li>
												<li>
													<a href="shop.html">null</a>
												</li>
												<li>
													<a href="shop.html">null</a>
												</li>
												<li>
													<a href="shop.html">null</a>
												</li>
												<li>
													<a href="shop.html">null</a>
												</li>
											</ul>
										</div>
										<div class="col-md-4 media-list span4 text-left">
											<h5 class="tittle-w3layouts-sub">Furniture Product</h5>
											<ul>
												<li class="media-mini mt-3">

													<a href="shop.html">null</a>
												</li>
												<li>
													<a href="shop.html">null</a>
												</li>
												<li>
													<a href="shop.html">null</a>
												</li>
												<li>
													<a href="shop.html">null</a>
												</li>
												<li>
													<a href="shop.html">null</a>
												</li>
												<li>
													<a href="shop.html">null</a>
												</li>
											</ul>
											<ul class="sub-in text-left">

												<li>
													<a href="shop.html">null</a>
												</li>
												<li>
													<a href="shop.html">null</a>
												</li>
												<li>
													<a href="shop.html">null</a>
												</li>
											</ul>

										</div>
										<div class="col-md-4 media-list span4 text-left">

											<h5 class="tittle-w3layouts-sub-nav">Furniture 
											</h5>
											<div class="media-mini mt-3">
												<a href="shop.html">
													<img src="../ass/images/g2.jpg" class="img-fluid" alt=""/>
												</a>
											</div>

										</div>
									</div>
								
								</li>
							</ul>
						</li>
						
						<li class="nav-item ">
							<a class="nav-link " href="/all-products"  role="button"  aria-haspopup="true"
							    aria-expanded="false">
								<font color='black'>All Product</font>
							</a>
						
									
							
								</li>
						
					




						{/* <li class="nav-item">
							<a class="nav-link" href="contact.html">Contact</a>
						</li> */}
					</ul>

				</div>
			</nav>
            <SearchBar />
            <AccountForm />
        </>
    );
};

export default Header;