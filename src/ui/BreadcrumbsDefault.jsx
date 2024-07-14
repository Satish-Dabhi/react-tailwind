/* eslint-disable react/prop-types */
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
export function BreadcrumbsDefault({ data, colorBlack }) {
 
  return (
    <>
      <Breadcrumbs
        className="bg-transparent "
        separator={<span className={`text-lg text-${colorBlack}`}>/</span>}
      >
        {data.map((item, index) => {
          return (
            <div key={index}>
              <Link to={`${item?.link}`}>
                <span
                  className={`text-${colorBlack} font-semibold font-inria text-md  hover:text-primary   text-wrap`}
                >
                  {item?.title}
                </span>
              </Link>
            </div>
          );
        })}
      </Breadcrumbs>
    </>
  );
}
