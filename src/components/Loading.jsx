const Loading = () => (
  <div className="flex flex-col items-center justify-center min-h-[300px] py-8">
    <div className="animate-spin duration-[2000ms] rounded-full h-12 w-12 border-t-4 border-blue-500 mb-4"></div>
    <p className="text-sm text-gray-600">Loading...</p>
  </div>
);

export default Loading;