import handwithbulb from '/img/investorRelation/handwithbulbicon.png'
import profilecheckicon from '/img/investorRelation/profilecheckicon.png'
import profileicon from '/img/investorRelation/profileicon.png'
import WhyChooseCard from '../../ui/WhyChooseCard'
import DarkBgSecond from '../../ui/DarkBgSecond'
const DarkBgSecondData = {
  title: "Encourage investors to log in for personalized insights",
  subTitle:
    "Lorem ipsum dolor sit amet consectetur. Egestas sit id varius tellus commodo congue ut. Maecenas nec facilisis massa diam.",
  buttonText: "Log In to Your Investor Dashboard",
};
const whyChooseData = {
    title:"Why Choose Epiidosis for Your Investment",
    desc:"At Epiidosis Investments LLC, we offer a compelling investment proposition driven by our strengths and unique selling points. Here's why investors choose to partner with us:",
    cardData:[
      {
        icon:profilecheckicon,
        subtitle:"Expertise and Track Record",
        subdesc:"At Epiidosis, we bring a wealth of expertise and a proven track record to the table. With years of experience in the investment industry, our team possesses deep insights and a keen understanding of market dynamics. We specialize in identifying high-potential opportunities across diversified asset classes, leveraging our strategic insights to deliver superior returns for our investors. Our track record speaks for itself, with a history of successful investments and value creation in sectors ranging from commercial enterprises to healthcare."
      },
      {
        icon:handwithbulb,
        subtitle:"Team Credentials",
        subdesc:"Our team comprises seasoned professionals with diverse backgrounds and skill sets, united by a common goal of driving excellence and innovation in investment management. From financial analysts and portfolio managers to legal experts and industry specialists, each member of our team brings a unique perspective and expertise to the table. With a commitment to continuous learning and professional development, we ensure that our team remains at the forefront of industry trends and best practices, delivering unparalleled value to our investors. "
      },
      {
        icon:profileicon,
        subtitle:"Client Testimonials and Success Stories",
        subdesc:"Don't just take our word for it – hear what our clients have to say about their experience with Epiidosis. Our client testimonials and success stories are a testament to the quality of our services and the impact of our investments. From satisfied investors who have seen their portfolios grow to thriving businesses that have benefited from our strategic partnerships, our clients' success stories speak volumes about the value we bring to the table. At Epiidosis, we measure our success by the success of our clients, and we are proud to have played a role in helping them achieve their financial goals."
      },
      {
        icon:handwithbulb,
        subtitle:"Commitment to Excellence",
        subdesc:"Excellence is not just a goal – it's a way of life at Epiidosis. From the quality of our investment opportunities to the level of service we provide, we strive for excellence in everything we do. We are committed to upholding the highest standards of professionalism, integrity, and transparency, ensuring that our investors can trust us to always act in their best interests. With Epiidosis, you can invest with confidence, knowing that you are partnering with a company that is dedicated to delivering excellence in every aspect of investment management.Choose Epiidosis for your investment and experience the difference that expertise, integrity, and commitment to excellence can make in achieving your financial goals. Join our growing community of satisfied investors and embark on a journey towards financial success with Epiidosis Investments LLC."
      },
      {
        icon:profileicon,
        subtitle:"Professional and Dedicated Team",
        subdesc:"Our professional team comprises individuals from diverse backgrounds and countries, united by a common goal of driving sustainable growth and delivering exceptional value to our investors. With deep industry knowledge and a passion for innovation, we are committed to achieving superior results."
      },
    ]
  }

const WhyChooseInvestorRelation = () => {
  return (
    <>
      <WhyChooseCard data={whyChooseData} />
      <DarkBgSecond data={DarkBgSecondData} />
    </>
  )
}

export default WhyChooseInvestorRelation
