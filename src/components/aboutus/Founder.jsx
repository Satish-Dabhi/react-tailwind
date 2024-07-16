// AboutUs.jsx
import FounderCard from './FounderCard';
import ProcessFlowImage from "../../../public/img/aboutus/Shashwath Tomar 1.png";

// Sample data
const founderData = {
  image: '/path/to/image.jpg',  // Ensure the image path is correct
  name: 'Shashwath Tomar',
  title: 'Founder & Director',
  description: [
    `He has founded and directed several international companies, constantly achieving the highest levels of business development, strategic planning & implementation, market exploration and sourcing. As a means of capturing the potential of the available markets, he established EPIIDOSIS INVESTMENTS based in UAE.`,
    `This organization provides investment management facilitation by consulting, advising & partnering with new companies and businesses from scratch through the investor-line in UAE and worldwide.`,
  ],
};
const Founder = () => {
  return (
    <div>
      <FounderCard
        image={ProcessFlowImage}
        name={founderData.name}
        title={founderData.title}
        description={founderData.description}
      />
    </div>
  );
};

export default Founder;
