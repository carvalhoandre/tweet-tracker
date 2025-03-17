import React from 'react';
import PropTypes from 'prop-types';

function SocialLink({ children, link, name, className = '' }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`
       hover:text-orange-400 transition-colors p-2 hover:animate-scale
        ${className}
      `}
      aria-label={name}
    >
      {children}
    </a>
  );
}

SocialLink.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default SocialLink;
