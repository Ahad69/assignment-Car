import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import './MyItems.css'
import { ScaleLoader } from "react-spinners";
import axios from "axios";

const MyItems = () => {
  const [user, loadingAuth, error] = useAuthState(auth);
  const [myItem, setMyItem] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);


  useEffect(() => {

    // const url = `https://mighty-bastion-19330.herokuapp.com/my-items?email=${user?.email}`;
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setMyItem(data));

    const getUserByEmail = async() =>{
      const email = user?.email ;
      const url = `https://mighty-bastion-19330.herokuapp.com/my-items?email=${email}`;
     
      const {data} = await axios.get(url , {
        headers :{
          authorization : `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      setMyItem(data)
    }
    getUserByEmail()

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
    <>
     {loading ? (
        <div className="loader">
          <ScaleLoader color="red" size={150} />
        </div>
      ) : (
        <div className="mt-5 myItem container">
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
         <tbody key={item._id}>
            <tr>
              <td>{item.name}</td>
              <td className="image"> <img className="rounded-circle" width={80}  height={80} src={item.img} alt="" /> </td>
              <td>{item.price}</td>
              <td>{`${item.description.slice(0,50)} ....`}</td>
              <td>{item.quantity}</td>
              <td><button className="border-0 bg-danger p-2 text-white fw-bold" onClick={()=>handleDelete(item._id)}>Delete</button></td>
            </tr>
          </tbody>)
    }
        
      </Table>
    </div> )}
    </>
  
  );
};

export default MyItems;
