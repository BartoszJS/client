import React, { useEffect } from "react";

const FormPage = () => {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5001/");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <div>FormPage</div>;
};

export default FormPage;
