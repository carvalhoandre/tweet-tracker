import React from 'react';
import PropTypes from 'prop-types';
import { FaXTwitter } from 'react-icons/fa6';

function TweetsCard({ tweet, index }) {
  return (
    <div key={index} className="bg-white rounded-2xl p-6 border-2 border-black card-hover">
      <div className="flex items-center space-x-2 mb-4">
        <FaXTwitter className="text-lg" />
        <span className="font-bold">@{tweet.username}</span>
      </div>
      <p className="text-lg mb-4">{tweet.text}</p>
      <div className="text-sm text-gray-500">
        {new Date(tweet.created_at).toLocaleDateString('pt-BR', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })}
      </div>
    </div>
  );
}

TweetsCard.propTypes = {
  tweet: PropTypes.shape({
    text: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.string,
};

export default TweetsCard;
