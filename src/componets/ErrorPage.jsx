const ErrorPage = () => {
  return (
    <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl">
        404
      </h1>
      <h1 className="block text-2xl font-bold text-white"></h1>
      <p className="mt-3 text-gray-600 dark:text-gray-400">
        Oops, something went wrong.
      </p>
      <p className="text-gray-600 dark:text-gray-400 mb-16">
        Sorry, we couldn't find your page.
      </p>
      <a href="/" className="text-indigo-600 hover:text-indigo-500">
        <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Go back home
        </button>
      </a>
    </div>
  );
};

export default ErrorPage;
