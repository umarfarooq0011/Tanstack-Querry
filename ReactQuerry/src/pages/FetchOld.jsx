import { useState, useEffect } from "react";
import { fetchProducts } from "../API/api";
import Loader from "../components/Ui/Loading";

export const FetchOld = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  const getProductsData = async () => {
    try {
      setLoading(true); // Start loading
      const products = await fetchProducts();
      setData(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold text-center mb-8">Traditional Fetch</h1>

      {/* Show loader while data is loading */}
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((product) => {
            const { id, title, description, price, image } = product;
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
                <p className="text-sm text-gray-600 mt-2">
                  {description.slice(0, 100)}...
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-gray-800">
                    ${price}
                  </span>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
