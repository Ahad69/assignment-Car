import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Update.css";

const Update = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [loading , setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    const url = `http://localhost:5000/items/${id}`;

    axios
      .get(url)
      .then(function (response) {
        const myData = response.data;
        setItem(myData);
        setLoading(false)
      })
      .catch(function (error) {
        console.log(error);
      });
  },[])
  
if(loading){
    <h1>Loading</h1>
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
            <button className="show">
            Delivered
            </button>
            <br />
                <form>
                <input type="number" placeholder="Input Quantity" className="border-0 input" />
                <input className="show input" type="submit" value="Update Quantity" />
                </form>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default Update;
