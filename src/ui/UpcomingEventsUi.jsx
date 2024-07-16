import upcoming from "/img/industryInsights/upcoming.png";
import ButtonPrimaryUi from "../ui/ButtonPrimaryUi";

const UpcomingEventsUi = () => {
  return (
    <section className="container mx-auto mt-12 mb-12">
      <div className="grid gap-5 items-start">
        <div className="relative flex items-start">
          <div className="absolute left-10 top-0 h-full w-1 bg-blue-500"></div>
          <div className="pl-20">
            <p className="text-2xl md:text-4xl font-semibold font-inria">Upcoming Events</p>
            <p className="w-full md:w-[60%] mt-2 text-justify">
              Lorem ipsum dolor sit amet consectetur. Praesent nec non fringilla
              tincidunt non. Id nunc lectus quam diam egestas cursus varius
              pretium.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 items-center justify-items-center p-0">
        <img alt="upcoming" src={upcoming} className="w-full md:w-auto h-auto md:h-[25rem]" />
        <div className="p-5">
          <p className="text-2xl font-inria font-semibold mt-5 md:mt-0 text-justify">Financial Leadership Summit 2024</p>
          <p className="mt-3 mb-3 text-lg font-inter text-justify">New York City, April 10-12, 2024</p>
          <p className="text-inter text-balance mb-3 text-justify">
            Lorem ipsum dolor sit amet consectetur. Fermentum amet nunc tortor
            augue bibendum auctor in fermentum sed. Pellentesque sit nunc cursus
            tincidunt vel non tellus aliquet. Amet convallis vel ante tortor.
            Malesuada congue tellus volutpat proin maecenas mattis fringilla
            habitant fermentum. Purus vitae risus amet blandit amet sed nisl
            ornare. Metus mauris id nisl quis tempus eros elementum. Amet ipsum
            turpis
          </p>
          <ButtonPrimaryUi>
            <span className="flex items-center gap-4">
              Register Now{" "}
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
            </span>
          </ButtonPrimaryUi>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsUi;
