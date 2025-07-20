import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gradient-to-b from-blue-500 to-blue-600 flex justify-between items-center p-4 text-white">
    <div className="font-bold text-xl">DEMO Streaming</div>
    <div className="flex gap-4 items-center">
      <Link to="/login" className="hover:underline">Log in</Link>
      <button className="bg-black text-white py-1 px-3 rounded hover:opacity-90">Start your free trial</button>
    </div>
  </header>
);

export default Header;