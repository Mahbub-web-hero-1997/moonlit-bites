import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-100 px-4 text-center">
            <h1 className="text-9xl font-extrabold text-orange-600 drop-shadow-lg">404</h1>
            <p className="mt-4 text-2xl md:text-3xl font-semibold text-gray-700">
                Oops! Page Not Found
            </p>
            <p className="mt-2 max-w-md text-gray-500">
                Sorry, the page you are looking for does not exist or has been moved.
            </p>
            <Link
                to="/"
                className="mt-6 inline-block px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-700 transition-colors duration-300"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;
