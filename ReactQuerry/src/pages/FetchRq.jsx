import { useQuery } from "@tanstack/react-query";
import Loader from "../components/Ui/Loading";
import { fetchProducts } from "../API/api";
import ErrorMessage from "../components/Ui/ErrorMessage";
import { useState, useEffect } from "react";

export const FetchRq = () => {
  const [selectedCategory, setSelectedCategory] = useState("all"); // "all" will show all products
  const { data, isPending, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
   
    staleTime: 1000 * 60 * 5,   // Data will be fresh for 5 minutes
  });

  // Categories (you can dynamically fetch these if needed or keep static)
  const categories = [
    "all",
    "men's clothing",
    "women's clothing",
    "electronics",
    "jewelery",
  ];

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === "all"
    ? data // Show all products
    : data.filter((product) => product.category === selectedCategory); // Filter by selected category

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-32">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <ErrorMessage type="api" message="Error fetching products. Please try again." />;
  }

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold text-center mb-8">React Query Fetch</h1>

      {/* Category Filter (Dropdown or Buttons) */}
      <div className="mb-6 text-center">
        <label htmlFor="category-select" className="mr-4">Select Category:</label>
        <select
          id="category-select"
          className="p-2 rounded border"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category === "all" ? "All Products" : category}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => {
          const { id, title, description, price, image, category, rating } = product;
          return (
            <div
              key={id}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
              <p className="text-sm text-gray-600 mt-2">{description.slice(0, 100)}...</p>
              <p className="text-sm text-gray-500 mt-2 italic">Category: {category}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-600">
                  Rating: {rating?.rate} ({rating?.count} reviews)
                </span>
                <span className="text-lg font-bold text-gray-800">${price}</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
