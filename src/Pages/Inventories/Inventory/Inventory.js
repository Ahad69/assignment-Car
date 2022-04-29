import React from 'react';
import { Link } from 'react-router-dom';

const Inventory = ({item}) => {
    const {img , name , description , price ,quantity, supplier , _id} = item
    return (
        <div className="card border-0 mb-5">
        <div className="card-front">
          <img
            width="300px"
            style={{ borderRadius: "20px" }}
            height="460px"
            src={img}
            alt=""
          />
        </div>

        <div className="card-back">
          <img
            src={img}
            alt=""
            className="profil-picture"
          />
          <div className="bio">
            <h1 className="name">{name}</h1>
            <p className="text">
              {`${description.slice(0,100)}...`}
            </p>
          </div>
          <p>Quantity : {quantity}</p>
          <p>Supplier : {supplier}</p>
          <h4>$ {price}</h4>
          <button className="show">
            <Link to={`/inventory/${_id}`} > Update</Link>
          </button>
        </div>
      </div>
    );
};

export default Inventory;