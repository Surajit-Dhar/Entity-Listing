import React from 'react'
// import { useState,useEffect } from 'react';
// import axios from 'axios';
import './Product.css';

const Product = ({data , loading}) => {

    if(loading){
        return <h3>Loading....</h3>
    }
    // const [data , setData ] = useState([]);

    // useEffect(()=> {
    //    axios.get('http://localhost:5000/product').then(res => {
    //        console.log("product",res.data.Produts);
    //        setData(res.data.Produts);
    //    });

    // },[])
 
// const indexLastPost = currentPage * perPagePost;
// const indexFirstPost =  indexLastPost-perPagePost;
// const currentPost = data.slice(indexFirstPost , indexLastPost);

  return (
    <div className='main'>
        {data && data.map((elem) => (

            <div className="d1" key={elem.id}>
                <img id="d2" style={{marginLeft:"80px"}} src={elem.image}/>
                <h3 style={{textAlign:"center"}}>{elem.title}</h3>
                <p style={{textAlign:"center"}}>{elem.details}</p>
                <div className='d3'>
                ⭐⭐⭐⭐⭐
                {elem.rating}

                </div>
                <div style={{textAlign:"center", color:"#b12704", fontSize:"23px",marginTop:"17px"}}>$ {elem.prize}</div>
                <div style={{marginBottom:"18px", textAlign:'center',color:"#9b9797"}}>{elem.deliver}</div>
            </div>

        )

            
        )}
        
    </div>
  )
}

export default Product