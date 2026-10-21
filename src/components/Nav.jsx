import  React from 'react';
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <>
    
         <header style={style.header}>
            <nav style={style.nav}>

                <div style={{display: "flex", gap: '4em'}}>
                    <Link to={'/'}>
                        <img src="/bmw-m8-gran-coupe-3840x2160-18374.jpg" alt="logo"  style={{width: "100px"}}/>
                    </Link>

                    <ul style={{display: 'flex', alignItems:"center", gap: '2em', listStyle: "none"}}>
                        <li>
                           <Link to={'/product'} style={{textDecoration: "none", color: 'black'}}>Products</Link>
                        </li>
                        <li>Create Product</li>
                        <li>Category</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div style={{display: "flex", gap: "1em"}}>
                    <button style={style.button}>Sign Up</button>
                    <button style={{padding: '12px 18px', backgroundColor: 'aliceblue', border: "thin solid black", borderRadius: "5px", fontSize: "1.1em"}}>Login</button>
                </div>
            </nav>
        </header>
    
    
    
    </>
  )
}

const style = {
    header: {
        backgroundColor: "aliceblue",
        boxShadow: "0px 3px 8px 0px grey"
    },
    nav: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "20px"
    },

    button: {
        padding: "12px 18px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "blue",
        color: "white",
        fontSize: "1.1em"

    }
}

export default Nav