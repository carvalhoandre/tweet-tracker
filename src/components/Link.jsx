import React from 'react';
import PropTypes from 'prop-types';

function Link({ href, title, className = '' }) {
  const baseClasses =
    'font-medium transition-colors duration-200 hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black rounded';

  return (
    <a
      href={`#${href}`}
      className={`${baseClasses} ${className}`}
      onClick={(e) => {
        e.preventDefault();
        const element = document.getElementById(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      {title}
    </a>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Link;
