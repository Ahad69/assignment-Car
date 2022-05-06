import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({item}) => {
    const {img , name , description , price ,quantity, supplier , _id} = item

    return (
        <div className="card border-0 mb-5">
        <div className="card-front">
          <img
            width="300px"
            style={{ borderRadius: "20px" }}
            height="400px"
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
            <p className="text mb-0">
              {`${description.slice(0,100)}...`}
            </p>
          </div>
          <p className='mb-0 fw-bold'>Quantity : <span className='text-danger'>{quantity}</span></p>
          <p>Supplier : {supplier}</p>
          <h4>$ {price}</h4>
          <button className="show-btn ps-3 pe-3">
            <Link to={`/inventory/${_id}`} > Update</Link>
          </button>
        </div>
      </div>
    );
};

export default Item;