import React from 'react';
import PropTypes from 'prop-types';

function Loading({ title }) {
  return (
    <section id="posts" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-black tracking-tighter mb-8">{title}...</h2>
      </div>
    </section>
  );
}

Loading.propTypes = {
  title: PropTypes.string,
};

export default Loading;
