import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ClipLoader, ScaleLoader } from "react-spinners";
import Swal from "sweetalert2";
import useItems from "../../../Hooks/useItems";
import Inventory from "../Inventory/Inventory";
import "./Inventories.css";

const Inventories = () => {
  const [items, setItems] = useItems();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              const remaining = items.filter((item) => item._id !== id);
              setItems(remaining);
            }
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
         {
        loading ? 
        <div className="loader">
        <ScaleLoader  
        color= 'red' 
        size={150}
        
         />
        
        </div>
        :
       <div>
           
           <h1 className="text-center ">Our Inventory Items</h1>
           <div className="update-top container">
        <Link className="text-decoration-none" to="/">
        ←  Back to Home
          </Link>
          
        <Link className="text-decoration-none" to="/add-items">
                Add New Item →
          </Link>
          
        </div>
            <div className="homeItems  pt-5 container">
              
            {items.map((item) => (
            <Inventory
              key={item._id}
              item={item}
              handleDelete={handleDelete}
            ></Inventory>
          ))}
          </div> 
       </div>
        

    }
      
    </> 
  );
};

export default Inventories;
