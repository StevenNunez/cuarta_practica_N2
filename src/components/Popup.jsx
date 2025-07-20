const Popup = ({ item, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-4 rounded shadow-lg w-[90%] max-w-md">
      <h2 className="text-xl font-bold mb-2">{item.title}</h2>
      <img src={item.images['Poster Art'].url} alt={item.title} className="mb-2" />
      <p className="text-sm text-gray-700">{item.description}</p>
      <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Close</button>
    </div>
  </div>
);

export default Popup;