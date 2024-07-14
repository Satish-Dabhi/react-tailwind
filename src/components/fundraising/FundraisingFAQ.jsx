
import {AccordionCustomIcon} from '../../ui/AccordionCustomIcon'
const GrowthaccordionData = [
    {
      title: "What types of projects does Epiidosis Investments fund?",
      content: "Epiidosis Investments funds projects across various sectors, including commercial enterprises, tourism, industry, agriculture, energy, education, and healthcare, both locally in the UAE and globally.",
    },
    {
      title: "How do I get started with the fundraising process?",
      content: "To initiate the fundraising process, simply register or log in to the fund seeker dashboard on our platform and follow the step-by-step instructions provided.",
    },
    {
      title: "What is the onboarding and administration fee for?",
      content: "For KYC verification, you'll need to provide identification documents such as a passport, driver's license, or national ID card, along with any additional company registration documents.",
    },
    {
      title: "What documents are required for the KYC verification process?",
      content: "For KYC verification, you'll need to provide identification documents such as a passport, driver's license, or national ID card, along with any additional company registration documents.",
    },
    {
      title: "What is the onboarding and administration fee for?",
      content: "The onboarding and administration fee covers the cost of verifying documents, processing applications, and providing support throughout the initial stages of the fundraising process.",
    },
    {
      title: "How long does it take for document verification?",
      content: "Document verification typically takes a few business days, depending on the volume of applications received.",
    },
    {
      title: "What happens after successful verification?",
      content: "After successful verification, you'll proceed to the next phase, which involves signing a service contract and MOU, followed by due diligence and investment agreement signing",
    },
    {
      title: "Can I track the progress of my fundraising application?",
      content: "Yes, you'll have access to your fundraising dashboard, where you can track the progress of your application and receive updates on each stage of the process.",
    },
    {
      title: "What are the criteria for project assessment and risk underwriting?",
      content: "Project assessment and risk underwriting involve evaluating the feasibility, viability, and potential risks associated with the proposed project, considering factors such as market demand, financial projections, and regulatory compliance.",
    },
    {
      title: "Is there financial assistance available for processing fees?",
      content: "Epiidosis Investments does not provide financial assistance for processing fees; however, we offer support and guidance throughout the fundraising process to help facilitate successful fundraising.",
    },
    {
      title: "What happens if my project does not pass the risk underwriting process?",
      content: "If your project does not pass the risk underwriting process, we will work with you to identify any areas of concern and explore potential solutions to address them.",
    },
    {
      title: "How are funds deployed to the project?",
      content: "Funds are deployed to a Special Purpose Vehicle (SPV) established for the project, ensuring proper allocation and management of funds according to the project's needs.",
    },
    {
      title: "What is the role of Epiidosis during the project deployment phase?",
      content: "During the project deployment phase, Epiidosis oversees the setup of the SPV, ensures compliance with regulatory requirements, and provides ongoing support to project stakeholders.",
    },
    {
      title: "Can I leverage assets for better fund procurement?",
      content: "Yes, Epiidosis can create structures to leverage assets and lines of credit, enabling better fund procurement and optimizing financing options for your project.",
    }
    ,
    {
      title: "What happens if the project faces challenges after fund deployment?",
      content: "In the event of challenges or unforeseen circumstances post-fund deployment, Epiidosis works closely with project stakeholders to address issues and explore solutions to mitigate risks.",
    },
    {
      title: "What support is available during the fundraising process?",
      content: "Epiidosis provides dedicated support from experienced professionals, including account managers and advisors, who are available to assist you at every stage of the fundraising process.",
    },
    {
      title: "How long does the entire fundraising process take?",
      content: "The duration of the fundraising process can vary depending on factors such as document verification, due diligence, and project complexity. Typically, it may take several weeks to months to complete.",
    },
    {
      title: "Are there any restrictions on the size of projects Epiidosis funds?",
      content: "Epiidosis funds projects ranging from USD 2 million to USD 150 million, catering to a wide range of project sizes and requirements.",
    }
    ,
    {
      title: "What happens if my project requires additional funding beyond the initial amount raised?",
      content: "If your project requires additional funding beyond the initial amount raised, we can explore options for additional financing or restructuring to meet the project's evolving needs.",
    },
    {
      title: "Can I request changes to the terms of the investment agreement?",
      content: "While changes to the terms of the investment agreement may be possible under certain circumstances, any modifications would need to be mutually agreed upon by all parties involved.",
    },
    {
      title: "Is there ongoing support available after the fundraising process is completed?",
      content: "•	Yes, Epiidosis provides ongoing support and assistance to project stakeholders even after the fundraising process is completed, ensuring continued success and growth of the funded project.",
    }

  ];
const FundraisingFAQ = () => {
  return (
    <div className='mb-12 container mx-auto'>
     <p className='md:text-center md:mt-12  md:text-3xl font-semibold'>Frequently asked questions</p>
    <AccordionCustomIcon data = {GrowthaccordionData} />
    </div>
  )
}

export default FundraisingFAQ