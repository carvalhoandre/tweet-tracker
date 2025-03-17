import React from 'react';
import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from 'recharts';

function ChartDisplay({ type, data, title }) {
  const chartHeight = {
    xs: 250,
    sm: 300,
    md: 350,
  };

  const getResponsiveHeight = () => {
    if (window.innerWidth < 640) return chartHeight.xs;
    if (window.innerWidth < 768) return chartHeight.sm;
    return chartHeight.md;
  };

  const tooltipStyle = {
    backgroundColor: 'white',
    border: 'none',
    borderRadius: 'var(--radius-md)',
    boxShadow: 'var(--shadow-md)',
  };

  const renderChartContent = () => {
    switch (type) {
      case 'sentiment':
        return (
          <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
            <XAxis dataKey="hour" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend wrapperStyle={{ paddingTop: 10 }} />
            <Line
              type="monotone"
              dataKey="sentiment"
              stroke="var(--color-accent)"
              strokeWidth={2}
              activeDot={{ r: 6, fill: 'var(--color-accent)', stroke: 'white', strokeWidth: 2 }}
              name="Sentimento Médio"
            />
          </LineChart>
        );
      case 'engagement':
        return (
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
            <XAxis dataKey="hour" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend wrapperStyle={{ paddingTop: 10 }} />
            <Bar dataKey="likes" fill="#82ca9d" radius={[4, 4, 0, 0]} name="Likes Médios" />
            <Bar dataKey="retweets" fill="#8884d8" radius={[4, 4, 0, 0]} name="Retweets Médios" />
            <Bar
              dataKey="replies"
              fill="var(--color-accent)"
              radius={[4, 4, 0, 0]}
              name="Respostas Médias"
            />
          </BarChart>
        );
      case 'volume':
        return (
          <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
            <XAxis dataKey="hour" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend wrapperStyle={{ paddingTop: 10 }} />
            <Line
              type="monotone"
              dataKey="tweets"
              stroke="#FF5733"
              strokeWidth={2}
              activeDot={{ r: 6, fill: '#FF5733', stroke: 'white', strokeWidth: 2 }}
              name="Número de Tweets"
            />
          </LineChart>
        );
      case 'hype':
        return (
          <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
            <XAxis dataKey="hour" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend wrapperStyle={{ paddingTop: 10 }} />
            <Line
              type="monotone"
              dataKey="hype_score"
              stroke="#FF5733"
              strokeWidth={2}
              activeDot={{ r: 6, fill: '#FF5733', stroke: 'white', strokeWidth: 2 }}
              name="Hype Score"
            />
          </LineChart>
        );
      default:
        return null;
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h3 className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">{title}</h3>
      </div>

      <div className="bg-white p-4 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300">
        <ResponsiveContainer width="100%" height={getResponsiveHeight()}>
          {renderChartContent()}
        </ResponsiveContainer>
      </div>
    </div>
  );
}

ChartDisplay.propTypes = {
  type: PropTypes.oneOf(['sentiment', 'engagement', 'volume']).isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default ChartDisplay;
