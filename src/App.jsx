import React from 'react';
import { Header, Hero } from './components';
import { useFetch } from './hooks/UseFetch';
import TweetsSection from './components/TweetsSection';

function App() {
  const { fetchData, tweets, loading } = useFetch();

  React.useEffect(() => {
    fetchData();
    const interval = setInterval(() => fetchData(), 300000); // Refresh every 5 minutes
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        <Hero />
        <TweetsSection tweets={tweets} loading={loading} />
      </main>
    </div>
  );
}

export default App;
