import React from 'react';
import { Header, Hero, TweetsSection, SentimentSection, MetricsSection } from './components';
import { useFetch } from './hooks/UseFetch';

function App() {
  const { fetchData, tweets, sentiments, metrics, loading } = useFetch();

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        <Hero />
        <TweetsSection tweets={tweets} loading={loading} />
        <SentimentSection sentiments={sentiments} loading={loading} />
        <MetricsSection metrics={metrics} loading={loading} />
      </main>
    </div>
  );
}

export default App;
