import React from "react";
import { Link } from "react-router-dom";
import useItems from "../../../Hooks/useItems";
import Item from "../Item/Item";
import "./Items.css";

const Items = () => {
  const [items] = useItems();
  const homeItems = items.slice(0, 6);
  return (
    <div className="container">
      <h1 className="fs-1 text-dark fw-bold text-center mt-5 mb-5">Our Inventory</h1>
     <div className="homeItems container">
     {
          homeItems.map(item => <Item key={item._id} item={item}></Item>)
      }
     </div>
     <Link className="ms-auto text-decoration-none p-2 " to='/manage-items'>Manage Inventory → </Link>
    </div>
  );
};

export default Items;
