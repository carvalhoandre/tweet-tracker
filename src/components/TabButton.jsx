import React from 'react';
import PropTypes from 'prop-types';

function TabButton({ active, icon: Icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        flex-none px-3 py-2 rounded-md text-sm font-medium transition-all duration-normal
        focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
        ${active ? 'bg-accent text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
            `}
    >
      <span className="flex items-center gap-1.5">
        <Icon className={`text-2xl sm:text-3xl  ${active ? 'text-white' : 'text-orange-400'}`} />
        <span>{label}</span>
      </span>
    </button>
  );
}

TabButton.propTypes = {
  active: PropTypes.bool.isRequired,
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TabButton;
