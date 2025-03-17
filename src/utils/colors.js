export default function getSentimentColor(sentiment) {
  return sentiment > 0
    ? 'bg-green-50 border-green-200'
    : sentiment < 0
      ? 'bg-red-50 border-red-200'
      : 'bg-gray-50 border-gray-200';
}
