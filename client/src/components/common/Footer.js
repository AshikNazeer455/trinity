import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { footMenu, footSocial } from '../../data/footerData';


const Footer = () => {

   


    return (
        <>
        <footer class="w3l-footer-29-main">
                <div class="footer-29 py-5">
                    <div class="container py-lg-4">
                        <div class="row footer-top-29">
                            <div class="col-lg-9">
                                <div class="row">
                                  
                                    <div class="col-md-3 col-3 footer-list-29">
                                        
                                            <h4><font color="white">Link</font></h4><br></br>
                                            <a href="/About"><font color="white">About</font></a><br></br><br></br>
                                       
                                            <a href="/About"><font color="white">Service</font></a><br></br><br></br>
                                            <a href="/About"><font color="white">Products</font></a><br></br><br></br>
                                            <a href="/About"><font color="white">Contact US</font></a><br></br><br></br>
                                        
                                    </div>
                                    <div class="col-md-3 col-3 footer-list-29 mt-md-0 mt-4">
                                      
                                        <h4><font color="white">Services</font></h4><br></br>
                                        <a href="/About"><font color="white">Architecture</font></a><br></br><br></br>
                                       <a href="/About"><font color="white">Interior Design</font></a><br></br><br></br>
                                       <a href="/About"><font color="white">Lighting Decoration</font></a><br></br><br></br>
                                       <a href="/About"><font color="white">All Services</font></a><br></br><br></br>
                                   
                                    
                                    </div>
                                    <div class="col-md-3 col-3 footer-list-29 mt-md-0 mt-4">
                                      
                                    <h4><font color="white">Delivery</font></h4><br></br>
                                    <a href="/About"><font color="white">How to work</font></a><br></br><br></br>
                                       <a href="/About"><font color="white">Free Delivery </font></a><br></br><br></br>
                                       <a href="/About"><font color="white">FAQ's </font></a><br></br><br></br>
                                       
                                  
                                  </div>
                                    <div class="col-md-3 col-3 footer-list-29 mt-md-0 mt-4">
                                    <h4><font color="white">Support</font></h4><br></br>
                                    <a href="/About"><font color="white">Privacy Policy</font></a><br></br><br></br>
                                       <a href="/About"><font color="white">Terms Of Servies</font></a><br></br><br></br>
                                       <a href="/About"><font color="white">Contact US </font></a><br></br><br></br>
                                       <a href="/About"><font color="white">Support </font></a><br></br><br></br>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="col-lg-2  footer-contact-list mt-lg-0 mt-md-5 mt-4">
                            <h4><font color="white">Address
                            </font></h4><br></br>
                              
                               
                                <p class="copy-footer-29 mt-4">Trinity
      <a
                                        href="https://https://www.infosiltechnolabs.com/" target="_blank">
                                         </a></p>   
                                            
                            </div>
                        </div>    
                       <center>
                                <p class="copy-footer-29 mt-4">© 2023 Trinity All Rights Reserved Design by <a
                                        href="https://https://www.infosiltechnolabs.com/" target="_blank">
                                        Infosiltechonolabs</a></p> <div class="main-social-footer-29">
                                    <a href="#facebook" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#twitter" class="twitter"><i class="fab fa-twitter"></i></a>
                                    <a href="#google"><i class="fab fa-google-plus-g"></i></a>
                                    <a href="#instagram" class="instagram"><i class="fab fa-instagram"></i></a>
                                </div></center> 
                    </div>
                </div>
            </footer>
            </>
    );
};

export default Footer;