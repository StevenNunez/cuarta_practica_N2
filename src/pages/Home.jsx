import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div >
      <h2 className="text-lg font-medium bg-gray-800 text-white px-6 py-3">
        Popular Titles
      </h2>

      <div className="flex justify-center gap-10 py-10">
        <Link
          to="/series"
          className="bg-black w-36 h-48 flex flex-col items-center justify-center text-white transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <div className="text-xl font-semibold">SERIES</div>
        </Link>
        <Link
          to="/movies"
          className="bg-black w-36 h-48 flex flex-col items-center justify-center text-white transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <div className="text-xl font-semibold">MOVIES</div>
        </Link>
      </div>

      <div className="flex justify-center gap-24 text-sm text-gray-700">
        <p>Popular Series</p>
        <p>Popular Movies</p>
      </div>
    </div>
  );
};

export default Home;