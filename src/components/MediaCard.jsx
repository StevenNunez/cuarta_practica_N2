const MediaCard = ({ image, title, onClick }) => (
  <div className="flex flex-col items-center w-[150px]">
    <img
      src={image}
      alt={title}
      className="w-[150px] h-[225px] object-cover shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={onClick}
    />
    <p className="text-xs mt-1 text-center">{title}</p>
  </div>
);

export default MediaCard;