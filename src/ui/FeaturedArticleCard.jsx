/* eslint-disable react/prop-types */
import ButtonPrimaryUi from "./ButtonPrimaryUi";

const FeaturedArticleCard = ({ data }) => {
  return (
    <section className="flex justify-center">
      <div className="bg-white w-[20rem] h-auto p-5 flex justify-center flex-col mt-12">
        <img alt="img" src={data?.img} />
        <p className=" text-xl mt-4 font-inria mb-4 text-center">
          {data?.title}
        </p>
        <p className="mt-2 mb-4 text-center font-inter">{data?.desc}</p>
        <ButtonPrimaryUi>Read more</ButtonPrimaryUi>
      </div>
    </section>
  );
};

export default FeaturedArticleCard;
