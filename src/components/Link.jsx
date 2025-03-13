import React from 'react';
import PropTypes from 'prop-types';

function Link({ href, title }) {
  return (
    <a href={`#${href}`} className="font-medium hover:text-orange-400 transition-colors">
      {title}
    </a>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Link;
