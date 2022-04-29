import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Update.css";

const Update = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);


  useEffect(()=>{
   
    const url = `http://localhost:5000/inventory/${id}`;

    axios
      .get(url)
      .then(function (response) {
        const myData = response.data;
        setItem(myData);
       
      })
      .catch(function (error) {
        console.log(error);
      });

      
  },[item])


  const handleDeleveredDelete = async (event) =>{
    
    const newQu = item.quantity;
    const qunt = ( newQu - 1)
    
    const newQuantity = {quantity:qunt}

    const url2 = `http://localhost:5000/inventory/${id}`
    await fetch( url2, {
        method : 'PUT',
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(newQuantity)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        
    })
  }

  const handleSubmit = (event) =>{
    const quantity = parseInt(event.target.qtn.value);
    const newQu = item.quantity;
    const qunt = (quantity + newQu);
    const newQuantity = {quantity:qunt};
    // console.log(newQuantity)
    const url = `http://localhost:5000/inventory/${id}`
    fetch(url, {
        method : 'PUT',
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(newQuantity)
    })
    .then(res => res.json())
    .then(data => {
        alert('user added successfully')
        if(data.modifiedCount == 1){
            setItem(newQuantity)
        }
        event.target.reset()
    })
  }

  return (
    <div className="update-Details">
      <div className="update-container">
        <img src={item.img} alt="" />
        <div className="update-bio">
          <h1 className="update-name">{item.name}</h1>
          <p className="update-text">{item.description}</p>
          <p>Quantity : {item.quantity}</p>
            <p>Supplier : {item.supplier}</p>
            <h4 className="text-danger">${item.price}</h4>
            <div className="update-buttons">
            <button onClick={handleDeleveredDelete} className="show">
            Delivered
            </button>
            <br />
                <form onSubmit={handleSubmit}>
                <input type="number" name="qtn" placeholder="Input Quantity" className="border-0 input" />
                <input className="show input" type="submit" value="Update Quantity" />
                </form>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default Update;
