import React from 'react';
import PropTypes from 'prop-types';
import { FaXTwitter, FaHeart, FaRetweet, FaRegComment } from 'react-icons/fa6';

import formatDate from '../utils/dates';
import getSentimentColor from '../utils/colors';
import getAuthor from '../utils/texts';

function TweetsCard({ tweet }) {
  return (
    <article
      className={`${getSentimentColor(tweet.sentiment)} rounded-2xl p-6 sm:p-8 border hover:transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
            <FaXTwitter className="text-white text-lg" />
          </div>
          <div>
            <h3 className="font-bold text-lg">@{getAuthor(tweet.author_name)}</h3>
            <time className="text-sm text-gray-500">{formatDate(tweet.created_at)}</time>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-lg leading-relaxed">{tweet.text}</p>
      </div>

      <div className="flex items-center space-x-6 pt-4 border-t border-gray-200">
        <div className="flex items-center space-x-2 text-gray-500 group">
          <FaHeart className="group-hover:text-red-500 transition-colors" />
          <span className="text-sm">{tweet.likes || 0}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-500 group">
          <FaRetweet className="group-hover:text-green-500 transition-colors" />
          <span className="text-sm">{tweet.retweets || 0}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-500 group">
          <FaRegComment className="group-hover:text-blue-500 transition-colors" />
          <span className="text-sm">{tweet.replies || 0}</span>
        </div>
      </div>
    </article>
  );
}

TweetsCard.propTypes = {
  tweet: PropTypes.shape({
    text: PropTypes.string.isRequired,
    author_name: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    sentiment: PropTypes.number,
    likes: PropTypes.number,
    retweets: PropTypes.number,
    replies: PropTypes.number,
  }).isRequired,
};

export default TweetsCard;
