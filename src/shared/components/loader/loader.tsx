export const Loader = () => {
  
  return (
    <div className="animate-pulse flex flex-col md:flex-row gap-6 p-6">
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <div className="h-64 bg-gray-100 rounded-lg"></div>
        <div className="flex gap-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-2 w-16 bg-gray-200 rounded-md"></div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2 space-y-4">
        <div className="h-8 w-3/4 bg-gray-200 rounded-md"></div>
        <div className="h-4 w-5/6 bg-gray-100 rounded-md"></div>
        <div className="h-4 w-2/3 bg-gray-100 rounded-md"></div>
        <div className="h-4 w-3/4 bg-gray-100 rounded-md"></div>

        <div className="h-10 w-1/3 bg-gray-100rounded-md mt-4"></div>
      </div>
    </div>
  );
}