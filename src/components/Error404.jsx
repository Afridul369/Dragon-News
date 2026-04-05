import { Link } from "react-router";

const Error404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-5">
      
      {/* GIF */}
      <img
        src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
        alt="404 Not Found"
        className="w-72 md:w-96 mb-6"
      />

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
        404 - Page Not Found
      </h1>

      {/* Message */}
      <p className="text-gray-500 mb-6 max-w-md">
        Oops! Looks like there is no data available right now or the page you’re
        looking for doesn’t exist.
      </p>

      {/* Button */}
      <Link to="/">
        <button className="px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/80 transition">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default Error404;