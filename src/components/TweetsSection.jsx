import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TweetsCard from './TweetsCard';

const TWEETS_PER_PAGE = 6;

function TweetsSection({ tweets }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [displayCount, setDisplayCount] = useState(TWEETS_PER_PAGE);

  const filteredTweets = tweets
    .filter((tweet) => tweet.text.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice(0, displayCount);

  const hasMoreTweets = displayCount < tweets.length;

  const handleLoadMore = () => {
    setDisplayCount((prevCount) => prevCount + TWEETS_PER_PAGE);
  };

  return (
    <section id="posts" className="py-12 sm:py-16 lg:py-24">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-6 sm:mb-8">Posts</h2>

        <div className="mb-8 sm:mb-12 relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Pesquisar posts..."
            className="w-full px-8 sm:px-12 py-3 sm:py-4 rounded-full border-2 border-black focus:outline-none focus:border-orange-400 transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute inset-y-0 left-3 sm:left-4 flex items-center">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {filteredTweets.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Nenhum tweet encontrado</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
            {filteredTweets.map((tweet) => (
              <TweetsCard key={tweet.id || tweet.created_at} tweet={tweet} />
            ))}
          </div>
        )}

        {hasMoreTweets && (
          <div className="flex justify-center mt-8 sm:mt-12">
            <button
              onClick={handleLoadMore}
              className="flex items-center space-x-2 bg-white text-black px-6 py-2 rounded-full border-2 border-black hover:bg-orange-400 hover:text-white hover:border-orange-400 transition-all duration-300 font-medium"
            >
              <span>Carregar mais Tweets</span>
            </button>
          </div>
        )}
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
};

export default TweetsSection;
