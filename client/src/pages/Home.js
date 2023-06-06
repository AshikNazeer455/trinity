import React from 'react';
import HeroSlider from '../components/sliders/HeroSlider';
import FeaturedSlider from '../components/sliders/FeaturedSlider';
import Pdoor from '../components/sliders/Pdoor';
import SectionsHead from '../components/common/SectionsHead';
import TopProducts from '../components/product/TopProducts';
import TopProducts1 from '../components/product/TopProducts1';
import Services from '../components/common/Services';
import { Link } from 'react-router-dom';
import { IoMdStar } from 'react-icons/io';
import { useContext } from 'react';
import { displayMoney } from '../helpers/utils';
import cartContext from '../contexts/cart/cartContext';
import useActive from '../hooks/useActive';
import Header from '../components/common/Header';

const Home = (props) => {

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
      
        <main>
            
        <Header />
           <div class="banner">
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    </ol>
    <div class="carousel-inner" role="listbox ">
        <div class="carousel-item active">
            
        </div>
        <div class="carousel-item item2">
           
        </div>
        <div class="carousel-item item3">
           
        </div>
        <div class="carousel-item item4">
            
        </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>

</div>

<br></br><br></br><br></br><div class="a21" style={{fontSize:"4rem"}}><center>Your  Home  Our  Design</center></div><br></br><br></br><br></br><br></br>

<div  class="row">
    <div class="col-sm-4">
    <div class="content1">
  
    <div class="content-overlay"></div>
    <img src="../ass/images/y1.jpg" class='h' alt=""/>
    <div class="content-details fadeIn-bottom">
        <h3 class="content-title">This is a title</h3>
        <p class="content-text">This is a short description</p>
      </div> </div> </div>
      

<div class="col-sm-4">
<div class="content1">
  
  <div class="content-overlay"></div>
    <img src="../ass/images/y3.jpg" class='w' alt=""/>
    <div class="content-details fadeIn-bottom">
        <h3 class="content-title">This is a title</h3>
        <p class="content-text">This is a short description</p>
   </div></div>
   <br></br> 
   <div class="content1">
  
  <div class="content-overlay"></div>
    <img src="../ass/images/y4.jpg" class='w' alt=""/>
    <div class="content-details fadeIn-bottom">
        <h3 class="content-title">This is a title</h3>
        <p class="content-text">This is a short description</p>
   </div></div>
</div>
<div class="col-sm-4">
<div class="content1">
<div class="content-overlay"></div>
    <img src="../ass/images/y2.jpg" class='h' alt=""/>
    <div class="content-details fadeIn-bottom">
        <h3 class="content-title">This is a title</h3>
        <p class="content-text">This is a short description</p>
      </div> </div> </div>

  {/* <div class="card-columns">


    <div class="card">
      <img src="http://placehold.it/1920x1080" alt=""/>
    </div>
    </div>
 
    <div class="card">
      <img src="http://placehold.it/1920x1080" alt=""/>
    
    </div>

 
    <div class="card">
      <img src="http://placehold.it/1920x1080" alt=""/>
    </div>

  
    <div class="card">
      <img src="http://placehold.it/1920x1080" alt=""/>
    </div>

  
    <div class="card">
      <img src="http://placehold.it/1920x1080" alt=""/>
    </div>

  
    <div class="card">
      <img src="http://placehold.it/1920x1080" alt=""/>
    </div> */}

    



</div>

<section class="banner-bottom-wthreelayouts py-lg-5 py-3">
		<div class="container-fluid">
			<div class="inner-sec-shop px-lg-4 px-3">
			<br></br><br></br><br></br><br></br><div class="a21" style={{fontSize:"4rem"}}><center>Our Product</center></div><br></br><br></br><br></br>
				<div class="row">
				
					<div class="col-md-3 product-men women_two">
						<div class="product-googles-info1 googles">
							<div class="men-pro-item">
								<div class="men-thumb-item">
                                <div class="">
                              
									<img src="../ass/images/dr1.jpg" class="img-fluid5 gallery-image" alt=""/><br></br><br></br>
                                    <h3>Door</h3>
									</div></div></div></div>
									</div>
                                
								
											
										
									
									
						
                                    <div class="col-md-3 product-men women_two">
						<div class="product-googles-info1 googles">
							<div class="men-pro-item">
								<div class="men-thumb-item">
									<img src="../ass/images/so1.jpg" class="img-fluid5 gallery-image" alt=""/><br></br><br></br>
                                    <h3>Sofa</h3>
									</div></div></div></div>
                                    <div class="col-md-3 product-men women_two">
						<div class="product-googles-info1 googles">
							<div class="men-pro-item">
								<div class="men-thumb-item">
									<img src="../ass/images/di1.jpg" class="img-fluid5 gallery-image" alt=""/><br></br><br></br>
                                    <h3>Dining Tables</h3>
									</div></div></div></div>
                                    <div class="col-md-3 product-men women_two">
						<div class="product-googles-info1 googles">
							<div class="men-pro-item">
								<div class="men-thumb-item">
									<img src="../ass/images/ta1.jpg" class="img-fluid5 gallery-image" alt=""/><br></br><br></br>
                                    <h3>Tables</h3>
									</div></div></div></div>
				<div class="row mt-lg-3 mt-0">
		
                <div class="col-md-3 product-men women_two">
						<div class="product-googles-info1 googles">
							<div class="men-pro-item">
								<div class="men-thumb-item">
									<img src="../ass/images/ch1.jpg" class="img-fluid5 gallery-image" alt=""/><br></br><br></br>
                                    <h3>Chairs</h3>
									</div></div></div></div>
                                    
                <div class="col-md-3 product-men women_two">
						<div class="product-googles-info1 googles">
							<div class="men-pro-item">
								<div class="men-thumb-item">
									<img src="../ass/images/be1.jpg" class="img-fluid5 gallery-image" alt=""/><br></br><br></br>
                                    <h3>Beds</h3>
									</div></div></div></div>
                                    
                <div class="col-md-3 product-men women_two">
						<div class="product-googles-info1 googles">
							<div class="men-pro-item">
								<div class="men-thumb-item">
									<img src="../ass/images/st1.jpg" class="img-fluid5 gallery-image" alt=""/><br></br><br></br>
                                    <h3>Study Tables</h3>
									</div></div></div></div>
                                    <div class="col-md-3 product-men women_two">
						<div class="product-googles-info1 googles">
							<div class="men-pro-item">
								<div class="men-thumb-item">
									<img src="../ass/images/al1.jpg" class="img-fluid5 gallery-image" alt=""/><br></br><br></br>
                                    <h3>Swings</h3>
									</div></div></div></div></div>
				
				</div>
				</div></div>





			<br></br><br></br><br></br>
			<div class="">
					<div class="  ">
						<div class="middle-text-info ">
							</div></div></div>
							<section class="w3l-text-6">
        <div class="text-6-mian bottom-space py-5">
            <div class="container py-lg-5 py-md-4 py-3">
                <div class="row top-cont-grid align-items-center">
                    <div class="col-lg-5 right-img sec-img-ab">
                        <img src="../ass/images/bes1.jpg" alt="" class="img-responsive img-fluid" />
                    </div>
                    <div class="col-lg-1">

                    </div>
                    <div class="col-lg-6 left-cont mb-lg-0 mb-5">
                        
                        <h2 style={{fontSize:"4rem"}}><font color="#855205">Best Design and Decorations</font></h2><br></br>
                        <p style={{fontSize:"1.3rem"}}>Sed luctus orci sit amet tempor luctus. Nullam non felis massa. Phasellus vitae fringilla
                            sapien,
                            quis dictum mi. Quisque consectetur egestas.</p>
                        <p style={{fontSize:"1.3rem"}}>Sed luctus orci sit amet tempor luctus. Nullam non felis massa. Phasellus vitae fringilla
                            sapien,
                            quis dictum mi. Quisque consectetur egestas.Lorem ipsum dolor sit amet, consectetur
                            adipiscing
                            elit, sed do eiusmod tempor incididunt ut.</p>
                      
                    </div>
                </div>
               
            </div>
        </div>
    </section>
	<br></br>

			<div class="">
					<div class="  ">
						<div class="middle-text-info1 ">
							</div></div></div>

							<section class="team py-4 py-5">
        <div class="container-fluid py-lg-5 py-md-4 py-3">
        <div class="a21" style={{fontSize:"4rem"}}><center>New Arrivals</center></div><br></br><br></br>
            <div class="row">
             
            <TopProducts1 />
            </div>
        </div>
    </section>
   
	<br></br>

<div class="">
		<div class="  ">
			<div class="middle-text-info2 ">
				</div></div></div>


				<section class="w3l-text-6">
        <div class="text-6-mian bottom-space py-5">
            <div class="container py-lg-5 py-md-4 py-3">
								<div class="row top-cont-grid top-space align-items-center">
                    <div class="col-lg-6 left-cont mb-lg-0 mb-5">
                    <div class="a21" style={{fontSize:"4rem"}}><center>Perfect Finish, Best
Materials</center></div>
                        <p style={{fontSize:"1.3rem"}}>Sed luctus orci sit amet tempor luctus. Nullam non felis massa. Phasellus vitae fringilla
                            sapien,
                            quis dictum mi. Quisque consectetur egestas.</p>
                        <p style={{fontSize:"1.3rem"}}>Sed luctus orci sit amet tempor luctus. Nullam non felis massa. Phasellus vitae fringilla
                            sapien,
                            quis dictum mi. Quisque consectetur egestas.Lorem ipsum dolor sit amet, consectetur
                            adipiscing
                            elit, sed do eiusmod tempor incididunt ut.</p>
                        
                    </div>
                    <div class="col-lg-1">

                    </div>
                    <div class="col-lg-5 right-img">
                        <img src="../ass/images/g1.jpg" alt="" class="img-responsive img-fluid" />
                    </div>
                </div></div></div></section></section>

                {/* <section id="products" className="card">
                <div className="container">
                  
                
                    <Pdoor/>
                    </div>
            </section> */}

            {/* <section id="products" className="section">
                <div className="container">
                    <SectionsHead heading="Top Products" />
                   
                    <TopProducts /> 
                   
                </div>
            </section> */}

            {/* <Services /> */}
        </main>
    );
};

export default Home;;