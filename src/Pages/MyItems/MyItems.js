import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import './MyItems.css'

const MyItems = () => {
  const [user, loading, error] = useAuthState(auth);
  const [myItem, setMyItem] = useState([]);

  useEffect(() => {
    const url = `https://mighty-bastion-19330.herokuapp.com/my-items?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyItem(data));
  }, [myItem]);

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
        const url = `https://mighty-bastion-19330.herokuapp.com/inventory/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              const remaining = myItem.filter((item) => item._id !== id);
              setMyItem(remaining);
            }
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div className="mt-5 myItem">
        <h1 className="text-center mb-4">My Items</h1>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
           
            <th>Name</th>
            <th className="image">Image</th>
            <th>Price</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Delete</th>
          </tr>
        </thead>
    {
        myItem.map(item =>
         <tbody>
            <tr>
              <td>{item.name}</td>
              <td className="image"> <img width={80} src={item.img} alt="" /> </td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td><button className="border-0 bg-danger p-2 text-white fw-bold" onClick={()=>handleDelete(item._id)}>Delete</button></td>
            </tr>
          </tbody>)
    }
        
      </Table>
    </div>
  );
};

export default MyItems;
