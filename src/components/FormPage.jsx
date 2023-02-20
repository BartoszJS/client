import React, { useEffect, useState } from "react";
import { initialState, useAppContext } from "../context/appContext";

const FormPage = () => {
  const { createProduct, handleChange, uploadImage } = useAppContext();
  const [values, setValues] = useState(initialState);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

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
    const product = { name, price, image };
    console.log(product);
    createProduct(product);
  };

  // const handleChange = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  const handleInputName = (e) => {
    const name = e.target.name;

    const value = e.target.value;
    setName(e.target.value);
    handleChange({ name, value });
  };
  const handleInputPrice = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPrice(e.target.value);
    handleChange({ name, value });
    console.log(name + " " + price + " " + image);
  };

  const handlePhoto = (e) => {
    setImage(e.target.files[0].name);
    const imageFile = e.target.files[0];
    const formData = new FormData();
    formData.append("image", imageFile);
    console.log(formData);
    uploadImage(formData);
  };

  return (
    <div>
      <form
        className='flex flex-col max-w-xl mx-auto space-y-2 pt-24'
        onSubmit={onSubmit}
      >
        <input
          className='border'
          onChange={handleInputName}
          type='text'
          value={name}
          name='name'
        />
        <input
          className='border'
          onChange={handleInputPrice}
          type='text'
          value={price}
          name='price'
        />
        <input onChange={handlePhoto} type='file' />

        <button className='bg-red-300' type='submit'>
          YAS
        </button>
      </form>
    </div>
  );
};

export default FormPage;
