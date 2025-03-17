import { FaSmileBeam, FaMeh, FaFrown } from 'react-icons/fa';

const useSentimentConfig = () => {
  const SENTIMENT_CONFIG = {
    Positivo: {
      icon: FaSmileBeam,
      color: 'bg-green-500',
      textColor: 'text-green-500',
      description: 'Posts com sentimento positivo',
    },
    Neutro: {
      icon: FaMeh,
      color: 'bg-gray-500',
      textColor: 'text-gray-500',
      description: 'Posts com sentimento neutro',
    },
    Negativo: {
      icon: FaFrown,
      color: 'bg-red-500',
      textColor: 'text-red-500',
      description: 'Posts com sentimento negativo',
    },
  };

  return {
    SENTIMENT_CONFIG,
  };
};

export default useSentimentConfig;
