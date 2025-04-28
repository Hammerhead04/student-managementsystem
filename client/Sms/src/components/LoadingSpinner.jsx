function LoadingSpinner({ message = 'Loading...' }) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="text-center text-gray-500">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500 mx-auto mb-2"></div>
          <p>{message}</p>
        </div>
      </div>
    );
  }
  
  export default LoadingSpinner;