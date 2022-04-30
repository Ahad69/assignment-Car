import React from "react";
import { useForm } from "react-hook-form";

const AddItems = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  };

  return (
    <div className="addItems">
      <div className="AddItems-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue="test" {...register("example")} />
          <input {...register("exampleRequired", { required: true })} />
          <input {...register("exampleRequired", { required: true })} />
          <input {...register("exampleRequired", { required: true })} />
          <input {...register("exampleRequired", { required: true })} />
         
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
