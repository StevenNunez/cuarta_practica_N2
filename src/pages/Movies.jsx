import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useMediaData from '../hooks/useMediaData';
import Popup from '../components/Popup';
import Loading from '../components/Loading';
import Error from '../components/Error';

const Movies = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1');
  const limit = 20;
  const { data, loading, error } = useMediaData('movie', '', page, limit);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-800 text-white text-lg px-6 py-3 font-medium">Popular Movies</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6 p-6 place-items-center">
        {data.map((item) => (
          <div key={item.title} className="flex flex-col items-center w-[150px]">
            <img src={item.images['Poster Art'].url} alt={item.title} className="w-[150px] h-[225px] object-cover shadow-md hover:scale-105 transition-transform cursor-pointer" onClick={() => setSelectedItem(item)} />
            <p className="text-xs mt-1 text-center">Program Title</p>
          </div>
        ))}
      </div>
      {selectedItem && <Popup item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  );
};

export default Movies;
