import BlogImages from "../../public/img/blogs/BlogImages";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div>
      <div
        className="text-white font-inria"
        style={{ background: "#339FDE", padding: "4.7rem" }}
      >
        <div className="container">
          <h1 className="text-white text-3xl mb-6">
            Welcome to Financial Blogs: Insights,
            <br /> Tips, and Strategies
          </h1>
          <p className="text-white font-inter">
            Lorem ipsum dolor sit amet consectetur. Sagittis cras augue
            malesuada pretium. Pellentesque ridiculus volutpat amet accumsan
            eleifend aliquam amet. Risus suspendisse eu vitae mattis netus morbi
            feugiat sed. Nulla in tellus viverra tellus. Volutpat erat auctor
            fringilla vestibulum orci velit mattis interdum tempor. Lacus felis
            nisl curabitur velit sed rutrum nisl odio eu. Posuere cras volutpat
            libero lacus at imperdiet. Nec et nisl cursus in vel.
          </p>
        </div>
      </div>

      <div>
        <p className="font-inria text-3xl my-8  inline-block px-14">
          <span className="border-b-4 border-blue-500">Featured</span> Articles
          <hr />
        </p>
      </div>
      <div className="flex flex-col lg:flex-row p-6 lg:p-12">
        <div className="lg:w-1/2 p-4 flex flex-col items-center lg:items-start">
          <img
            src={BlogImages.LaptopBoy}
            alt="Main Blog"
            className="w-4/5 h-auto mb-4"
          />
          <div className="flex">
            <p className="mr-4"> May 20 </p>
            <p> 5 min read </p>
          </div>
          <div className="w-4/5">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-4 text-center lg:text-left">
              Investing 101: A Beginner Guide to Building Wealth
            </h2>
            <p className="text-base mb-6 text-center lg:text-left">
              This is a brief summary of the main blog post. It provides an
              insight into the content and engages the reader to continue
              reading.
            </p>
          </div>

          <Link to="/blogsDetails">
            <button className="text-blue-500 ">Read More</button>
          </Link>
        </div>

        <div className="lg:w-1/2 p-4">
          <div className="flex flex-col space-y-8">
            <div className="flex items-start mb-2">
              <img
                src={BlogImages.Img1}
                alt="Blog 1"
                className="w-1/4 h-auto mr-14"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Navigating Market Volatility: Strategies for Uncertain Times
                </h3>
                <p className="text-sm mb-6">
                  Explore proven tactics for managing risk and seizing
                  opportunities amidst market fluctuations.
                </p>
                <div className="flex">
                  <p className="mr-4"> May 20 </p>
                  <p> 5 min read </p>
                </div>
              </div>
            </div>
            <div className="flex items-start mb-2">
              <img
                src={BlogImages.Img2}
                alt="Blog 1"
                className="w-1/4 h-auto mr-14"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Navigating Market Volatility: Strategies for Uncertain Times
                </h3>
                <p className="text-sm mb-6">
                  Explore proven tactics for managing risk and seizing
                  opportunities amidst market fluctuations.
                </p>
                <div className="flex">
                  <p className="mr-4"> May 20 </p>
                  <p> 5 min read </p>
                </div>
              </div>
            </div>
            <div className="flex items-start">
              <img
                src={BlogImages.Img3}
                alt="Blog 1"
                className="w-1/4 h-auto mr-14"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Navigating Market Volatility: Strategies for Uncertain Times
                </h3>
                <p className="text-sm mb-6">
                  Explore proven tactics for managing risk and seizing
                  opportunities amidst market fluctuations.
                </p>
                <div className="flex">
                  <p className="mr-4"> May 20 </p>
                  <p> 5 min read </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row   lg:p-6">
        <div className="lg:w-3/4 px-12 ">
          <p className="font-inria text-3xl my-14  inline-block">
            <span className="border-b-4 border-blue-500">Latest</span> Post
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col mb-8">
              <img
                src={BlogImages.Img4}
                alt="Image 1"
                className="w-4/5 h-auto mb-4"
              />
              <div className="flex mb-4">
                <p className="mr-4"> May 20 </p>
                <p> 5 min read </p>
              </div>
              <div className="w-4/5">
                <h3 className="text-xl font-semibold mb-2 ">
                  Tech and Finance: Exploring the Intersection of Innovation
                </h3>
                <p className="text-sm max-w-full">
                  Lorem ipsum dolor sit amet consectetur. Risus ipsum cras
                  faucibus lacus ipsum blandit euismod. In metus.
                </p>
              </div>
              <div>
                <button className=" text-blue-500 mt-4 ">Read More</button>
              </div>
            </div>
            <div className="flex flex-col">
              <img
                src={BlogImages.Img5}
                alt="Image 1"
                className="w-4/5 h-auto mb-4"
              />
              <div className="flex mb-4">
                <p className="mr-4"> May 20 </p>
                <p> 5 min read </p>
              </div>
              <div className="w-4/5">
                <h3 className="text-xl font-semibold mb-2">
                  Sustainable Finance: Investing in a Better Future
                </h3>
                <p className="text-sm max-w-full">
                  Lorem ipsum dolor sit amet consectetur. Risus ipsum cras
                  faucibus lacus ipsum blandit euismod. In metus.
                </p>
              </div>
              <div>
                <button className=" text-blue-500 mt-4 ">Read More</button>
              </div>
            </div>
            <div className="flex flex-col">
              <img
                src={BlogImages.Img4}
                alt="Image 1"
                className="w-4/5 h-auto mb-4"
              />
              <div className="flex mb-4">
                <p className="mr-4"> May 20 </p>
                <p> 5 min read </p>
              </div>
              <div className="w-4/5">
                <h3 className="text-xl font-semibold mb-2 ">
                  Tech and Finance: Exploring the Intersection of Innovation
                </h3>
                <p className="text-sm max-w-full">
                  Lorem ipsum dolor sit amet consectetur. Risus ipsum cras
                  faucibus lacus ipsum blandit euismod. In metus.
                </p>
              </div>
              <div>
                <button className=" text-blue-500 mt-4 ">Read More</button>
              </div>
            </div>
            <div className="flex flex-col">
              <img
                src={BlogImages.Img5}
                alt="Image 1"
                className="w-4/5 h-auto mb-4"
              />
              <div className="flex mb-4">
                <p className="mr-4"> May 20 </p>
                <p> 5 min read </p>
              </div>
              <div className="w-4/5">
                <h3 className="text-xl font-semibold mb-2">
                  Sustainable Finance: Investing in a Better Future
                </h3>
                <p className="text-sm max-w-full">
                  Lorem ipsum dolor sit amet consectetur. Risus ipsum cras
                  faucibus lacus ipsum blandit euismod. In metus.
                </p>
              </div>
              <div>
                <button className=" text-blue-500 mt-4 ">Read More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-2/5 p-4">
          <p className="font-inria text-3xl my-12  inline-block">
            <span className="border-b-4 border-blue-500">Popular</span> Post
          </p>
          <div className="flex flex-col space-y-10">
            <div className="flex items-start mb-4">
              <img
                src={BlogImages.Count1}
                alt="Blog 5"
                className="w-1/12 h-auto mr-10"
              />
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Women and Money: Closing the Gender Wealth Gap
                </h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur. Viverra aliquet tempus
                  id at quis malesuada lorem morbi. Purus morbi elit porttitor
                  sed feugiat convallis.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-4">
              <img
                src={BlogImages.Count2}
                alt="Blog 6"
                className="w-1/12 h-auto mr-10"
              />
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  The Impact of Economic Policy on Financial Markets: Insights
                  and Analysis
                </h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur. Viverra aliquet tempus
                  id at quis malesuada lorem morbi. Purus morbi elit porttitor
                  sed feugiat convallis.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-4">
              <img
                src={BlogImages.Count3}
                alt="Blog 7"
                className="w-1/12 h-auto mr-10"
              />
              <div>
                <h3 className="text-xl font-semibold">
                  Financial Independence, Retire Early (FIRE): A Path to
                  Financial Freedom
                </h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur. Risus ipsum cras
                  faucibus lacus ipsum blandit euismod. In metus porttitor
                  pellentesque tristique.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-4">
              <img
                src={BlogImages.Count4}
                alt="Blog 8"
                className="w-1/12 h-auto mr-10"
              />
              <div>
                <h3 className="text-xl font-semibold">
                  The Art of Investing: Strategies for Building Wealth
                </h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur. Risus ipsum cras
                  faucibus lacus ipsum blandit euismod. In metus porttitor
                  pellentesque tristique.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-4">
              <img
                src={BlogImages.Count5}
                alt="Blog 9"
                className="w-1/12 h-auto mr-10"
              />
              <div>
                <h3 className="text-xl font-semibold">
                  Mastering Personal Finance: Tips for Financial Well-being
                </h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur. Risus ipsum cras
                  faucibus lacus ipsum blandit euismod. In metus porttitor
                  pellentesque tristique.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-4">
              <img
                src={BlogImages.Count6}
                alt="Blog 10"
                className="w-1/12 h-auto mr-10"
              />
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Entrepreneurship Insights: Building and Scaling Your Business
                </h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur. Risus ipsum cras
                  faucibus lacus ipsum blandit euismod. In metus porttitor
                  pellentesque tristique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-12 mx-auto mb-8">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-12">
          <button className="text-gray-500 flex items-center py-2 px-4 mb-4 sm:mb-0">
            <img src={BlogImages.LeftArrow} className="mr-2" alt="Left Arrow" />
            Previous
          </button>
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <button className="text-gray-500 py-2 px-4">1</button>
            <button className="text-blue-500 py-2 px-4">2</button>
            <button className="text-gray-500 py-2 px-4">3</button>
          </div>
          <button className="text-gray-500 flex items-center py-2 px-4">
            Next
            <img
              src={BlogImages.RightArrow}
              className="ml-2"
              alt="Right Arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
