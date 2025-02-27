const ErrorMessage = ({ message }) => {
    return (
      <div className="flex flex-col items-center justify-center w-full p-6 bg-red-100 border border-red-400 text-red-700 rounded-lg shadow-lg max-w-lg mx-auto">
        <svg
          className="w-12 h-12 text-red-600 mb-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01m6.938-6.938a8 8 0 11-11.313 0 8 8 0 0111.313 0z"
          ></path>
        </svg>
        <h2 className="text-lg font-semibold">Oops! Something went wrong</h2>
        <p className="text-sm text-center mt-1">{message || "An unexpected error occurred. Please try again later."}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
        >
          Refresh Page
        </button>
      </div>
    );
  };
  
  export default ErrorMessage;
  