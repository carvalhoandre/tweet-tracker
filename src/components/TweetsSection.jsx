import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Loading from './Loading';
import TweetsCard from './TweetsCard';

function TweetsSection({ tweets, loading }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTweets = tweets.filter((tweet) =>
    tweet.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <Loading />;

  return (
    <section id="posts" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-black tracking-tighter mb-8">Posts</h2>

        <div className="mb-12 relative max-w-2xl">
          <input
            type="text"
            placeholder="Pesquisar posts..."
            className="w-full px-12 py-4 rounded-full border-2 border-black focus:outline-none focus:border-orange-400 transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredTweets.map((tweet, index) => (
            <TweetsCard key={index} tweet={tweet} />
          ))}
        </div>
      </div>
    </section>
  );
}

TweetsSection.propTypes = {
  tweets: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      author_name: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default TweetsSection;
