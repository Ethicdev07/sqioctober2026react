

import React from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <>
    
       <Nav/>


       <section style={{display: "flex", justifyContent: "space-evenly", alignItems: "center", padding: '20px'}}>
            <div>
                <h1 style={{color: 'blue', fontSize: "3em", paddingBottom: '20px'}}>Welcome to Shopify</h1>
                <p style={{textAlign: 'right', paddingBottom: '20px'}}>Where products are affordable...</p>
                <button style={{cursor: 'pointer', padding: "10px 20px", backgroundColor: "orangered", border: "none", borderRadius: '5px', color: 'white', fontSize: '1.2em'}}>Buy Now!</button>
            </div>

            <div>
                <img src="/heroimages/hero-image.jpeg" alt="hero-image" style={{width: "500px"}}/>
            </div>
       </section>

        



       <Footer/>
    
    </>
  )
}




export default LandingPage