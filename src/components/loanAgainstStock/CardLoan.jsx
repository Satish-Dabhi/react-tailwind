import CardReuse from "../../ui/CardReuse";


const cards = [
  {
    title: 'Expertise and Tailored Solutions',
    content: 'Benefit from our deep expertise in financial services and Fin-tech, offering customized solutions that meet your specific financial needs.',
  },
  {
    title: 'Global Presence and Professional Team',
    content: 'With a diverse team spanning multiple countries, we provide global reach and expertise, catering to clients worldwide and attracting global investors across diverse sectors.',
  },
  {
    title: 'Proven Track Record and Transparent Terms',
    content: 'Trust our strong track record in private investments and management of global portfolios, offering transparent terms, competitive rates, and responsive customer support for a seamless loan experience.',
  },
  
];

const CardLoan = () => {
  return (
    <div className="container mx-auto my-8">
      <CardReuse cards={cards} />
    </div>
  );
};

export default CardLoan;
