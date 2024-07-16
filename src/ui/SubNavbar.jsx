import PropTypes from 'prop-types';

const tabs = [
  'Renewable Energy',
  'Tourism & Hospitality',
  'Commercial',
  'Agriculture',
  'Industry',
  'Education',
  'Healthcare'
];

const SubNavbar = ({ selectedTab, setSelectedTab }) => {
  return (
<div className="flex flex-wrap justify-center border-b mb-4 w-full">
  {tabs.map((tab) => (
    <button
      key={tab}
      className={`px-4 py-2 font-medium ${selectedTab === tab ? 'text-blue-700 border-b-2 border-blue-500' : 'text-gray-700'} mb-2 mx-2 sm:mx-0 sm:mb-0 sm:mr-2`}
      onClick={() => setSelectedTab(tab)}
    >
      {tab}
    </button>
  ))}
</div>

  );
};

SubNavbar.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  setSelectedTab: PropTypes.func.isRequired,
};

export default SubNavbar;
