import icon1 from '/img/knowledge/financialTrendsIcon1.png'
import icon2 from '/img/knowledge/financialTrendsIcon2.png'
import icon3 from '/img/knowledge/financialTrendsIcon3.png'
import icon4 from '/img/knowledge/financialTrendsIcon4.png'
import icon5 from '/img/knowledge/financialTrendsIcon5.png'
import icon6 from '/img/knowledge/EducationalResouraces3.png'
import LatestCardUi from '../ui/LatestCardUi'
import { BreadcrumbsDefault } from '../ui/BreadcrumbsDefault'

const beradcrumbs = [
  {
    title: "HOME",
    link: "/",
  },
  {
    title: "SUPPORT",
    link: "#",
  },
  {
    title: "FAQS ",
    link: "/KNOWLEDGE BASE",
  }
];
const data = [
    {
        icon:icon1,
        title:"Overview of Financial Markets",
        desc:"Lorem ipsum dolor sit amet consectetur. Commodo aliquet nunc elementum pharetra at risus amet vitae. Ultrices id amet in convallis gravida ligula vitae ut fermentum. Proin massa."
    },
    {
        icon:icon2,
        title:"Personalized Financial Insights",
        desc:"Lorem ipsum dolor sit amet consectetur. Commodo aliquet nunc elementum pharetra at risus amet vitae. Ultrices id amet in convallis gravida ligula vitae ut fermentum. Proin massa."
    },
    {
        icon:icon3,
        title:"Educational Resources",
        desc:"Lorem ipsum dolor sit amet consectetur. Commodo aliquet nunc elementum pharetra at risus amet vitae. Ultrices id amet in convallis gravida ligula vitae ut fermentum. Proin massa."
    },
    {
        icon:icon4,
        title:"News and Analysis",
        desc:"Lorem ipsum dolor sit amet consectetur. Commodo aliquet nunc elementum pharetra at risus amet vitae. Ultrices id amet in convallis gravida ligula vitae ut fermentum. Proin massa."
    },
    {
        icon:icon5,
        title:"Financial Planning Tools",
        desc:"Lorem ipsum dolor sit amet consectetur. Commodo aliquet nunc elementum pharetra at risus amet vitae. Ultrices id amet in convallis gravida ligula vitae ut fermentum. Proin massa."
    },
    {
        icon:icon6,
        title:"Financial Planning Tools",
        desc:"Lorem ipsum dolor sit amet consectetur. Commodo aliquet nunc elementum pharetra at risus amet vitae. Ultrices id amet in convallis gravida ligula vitae ut fermentum. Proin massa."
    },
]

const KnowledgeBase = () => {
  return (
    <>
    <BreadcrumbsDefault data={beradcrumbs} />
    <p className='text-primary font-inria text-lg md:text-3xl mt-5'>Knowledge Base</p>
    <div className="grid grid-cols-1 justify-items-center md:grid-cols-3">
   {data.map((data, index) => {
             return (
               <div key={index}>
                 <LatestCardUi data={data} />
               </div>
             );
           })}  
           </div>
       </>
  )
}

export default KnowledgeBase