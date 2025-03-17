export default function getSentimentCategories(sentiments) {
  return (
    sentiments?.reduce((acc, tweet) => {
      let category;
      if (tweet.sentiment > 0) category = 'Positivo';
      else if (tweet.sentiment < 0) category = 'Negativo';
      else category = 'Neutro';

      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {}) || {}
  );
}
