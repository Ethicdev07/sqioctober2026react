import React, {useState, useEffect} from 'react';

import '../index.css'

const Fetch = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("")

     useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((response)=> {
            if(!response.ok){
                throw new Error("Failed to fetch products....")
            }

            return response.json()

            .then((products)=>{
                console.log(products);
                
                setProducts(products);
                setLoading(false)
                
            });
            
        })
        .catch((error)=>{
            setError(error.message);
            setLoading(false)
        })
    }, []);

    if(loading){
        return <h2>Loading products....</h2>
    }
    if(error){
        return <h1 style={{color: 'red'}}>Error: {error}</h1>
    }

  return (

    <div>
        <h1 style={{textAlign:'center', padding: '20px'}}>All Products</h1>

        <div >
            <div style={{display:'flex', gap:"2em", flexWrap: 'wrap', justifyContent: 'center'}}>
                {products.map((product)=> (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt="" style={{width: '300px'}}/>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <h4>{product.price}</h4>
                </div>
            ))}
            </div>
        </div>
    </div>

   
    


  )
}

export default Fetch