import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import './AddItems.css'

const AddItems = () => {
    const [user, loading, error] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch('https://mighty-bastion-19330.herokuapp.com/add-items' , {
        method: 'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(result => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'You Added an Item Successfully',
            showConfirmButton: false,
            timer: 1500
          })
          reset()
    })
  };

  return (
    <div className="addItems">
          <h1 className="text-center fw-bold ">Add Item</h1>
      <div className="addItems-container pt-5">
    
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Name" {...register("name" , { required: true })} />
          <br /><br />
          <input defaultValue={user?.email} {...register("email" , { required: true })} readOnly/>
          <br /><br />
          <input type='number' className="w-100" placeholder="Quantity" {...register("quantity", { required: true })} />
          <br /><br />
          <input placeholder="Supplier" {...register("supplier", { required: true })} />
          <br /><br />
          <input placeholder="Image" {...register("img", { required: true })} />
          <br /><br />
          <input type='number' placeholder="Price" {...register("price", { required: true })} />
          <br /><br />
          <textarea placeholder="Description" {...register("description", { required: true })} />
          <br /><br />
          {errors.exampleRequired && <span>This field is required</span>}

          <input className="border-0" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
