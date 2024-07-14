
  
  
const OurBlogs = () => {
  return (
    <div className="container mx-auto mt-12">
      <div className="flex ">
        <div className="flex-1 text-center text-4xl  ">
          <span className=" border-b-4 border-primary border-spacing-y-3 font-inria font-semibold">
            Our Blogs
          </span>
        </div>

        <p className="text-right flex gap-2 text-md items-center mr-5 font-normal">
          View all{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </p>
      </div>

      
    </div>
  );
};

export default OurBlogs;
