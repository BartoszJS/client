import React, { useEffect, useState } from "react";
import { initialState, useAppContext } from "../context/appContext";

const FormPage = () => {
  const { name, price, image, createProduct } = useAppContext();
  const [values, setValues] = useState(initialState);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("/api/v1");
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setValues({ ...values, image: e.target.files[0].name });
    console.log(values);
  };

  return (
    <div>
      <form
        className='flex flex-col max-w-xl mx-auto space-y-2 pt-24'
        onSubmit={onSubmit}
      >
        <input
          className='border'
          onChange={handleChange}
          type='text'
          value={name}
          name='name'
        />
        <input
          className='border border-black'
          onChange={handleChange}
          type='text'
          value={price}
          name='price'
        />
        <input onChange={handlePhoto} type='file' value={image} name='image' />
        <button className='bg-red-300' type='submit'>
          YAS
        </button>
      </form>
    </div>
  );
};

export default FormPage;
