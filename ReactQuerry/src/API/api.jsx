import axios from "axios";

// Api data from axios 

    const api = axios.create({
      baseURL: "https://fakestoreapi.com",
    });

// Fetching data using the api

export const fetchProducts  = async() => {
   
   const res = await api.get('/products');
   if (res.status === 200) {
    return res.data;
  } else {
    throw new Error('Error fetching products');
  }

};
