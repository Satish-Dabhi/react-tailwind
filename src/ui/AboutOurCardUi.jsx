
import LatestCardUi from "./LatestCardUi";

/* eslint-disable react/prop-types */
const AboutOurCardUi = ({ data }) => {
  console.log(data);

  
  const subData = data?.iconPlusData?.map((item, index) => {
    console.log(item);
    return (
      <div key={index}>
    
         
          {/* <div>
            <p className="text-lg font-semibold font-inria">{item?.subtitle}</p>
            <p className="font-inter">
              <span className={`${textHide ? "" : "line-clamp-2"}`}>
                {item?.subDesc}
              </span>
              <span
                className="text-primary cursor-pointer"
                onClick={toggleText}
              >
                more
              </span>
            </p>
            {item?.list1 && item.list2 ? (
              <>
                <ul className="list-disc">
                  {textHide ? (
                    <>
                      <li> {item?.list1}</li>
                      <li> {item?.list2}</li>
                    </>
                  ) : null}
                </ul>
                <p
                  onClick={toggleText}
                  className="text-primary font-semibold cursor-pointer font-inter"
                >
                  view more
                </p>
              </>
            ) : null}
          </div> */}
          <LatestCardUi data={item} />
          
       
      </div>
    );
  });
  return (
    <section className="container mx-auto mt-12">
      <div className="text-xl md:text-4xl font-semibold font-inria grid justify-items-center">
        <div className="w-fit">
          <span>{data?.title}</span>
          <div className="bg-primary h-1 ml-2 mt-2  w-[8rem] "></div>
        </div>
      </div>
      <p className="mt-6 font-inter ">{data?.desc}</p>

      <div className="grid grid-cols-1  mb-12 md:grid-cols-3 md:gap-2  ">
      
          {subData}

          {/* <div className="flex mt-5 items-center gap-5">
              <div className="bg-bgprimary p-5">
                <img alt="callgirl" src={callgirl} />
              </div>
              <div>
                <p className="text-lg font-semibold">Core Services</p>
                <p>
                  Finance companies typically offer a range of financial
                  services such as lending.
                </p>
              </div>
            </div>
            <div className="flex mt-5 items-center gap-5">
              <div className="bg-bgprimary p-5">
                <img alt="callgirl" src={hand} />
              </div>
              <div>
                <p className="text-lg font-semibold">Core Services</p>
                <p>
                  Finance companies typically offer a range of financial
                  services such as lending.
                </p>
              </div>
            </div>
            <div className="flex mt-5 items-center gap-5">
              <div className="bg-bgprimary p-5">
                <img alt="callgirl" src={paper} />
              </div>
              <div>
                <p className="text-lg font-semibold">Core Services</p>
                <p>
                  Finance companies typically offer a range of financial
                  services such as lending.
                </p>
              </div>
            </div> */}
   
        {/* <div className="mt-[5rem]">
          <img alt="investment" src={data?.mainImg} className="w-[50rem]" />
        </div> */}
      </div>
    </section>
  );
};

export default AboutOurCardUi;
