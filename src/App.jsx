import React from 'react';

import { useFetch } from './hooks/useFetch';

import {
  Hero,
  Header,
  Footer,
  TweetsSection,
  MetricsSection,
  SentimentSection,
  DashboardSection,
  ScrollToTopButton,
} from './components';

function App() {
  const { fetchData, tweets, sentiments, metrics, loading } = useFetch();
  const [isPageLoaded, setIsPageLoaded] = React.useState(false);

  React.useEffect(() => {
    fetchData();

    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [fetchData]);

  return (
    <div
      className={`min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white transition-opacity duration-500 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}
    >
      <Header />

      <main className="flex-grow">
        <div className="relative">
          <Hero />
        </div>

        <div className="space-y-12 sm:space-y-16 lg:space-y-24">
          <section className="animate-fade-in">
            <TweetsSection tweets={tweets} loading={loading} />
          </section>

          <section className="animate-fade-in [animation-delay:200ms]">
            <SentimentSection sentiments={sentiments} loading={loading} />
          </section>

          <section className="animate-fade-in [animation-delay:400ms]">
            <MetricsSection metrics={metrics} loading={loading} totalTweets={tweets.length} />
          </section>

          <section className="animate-fade-in [animation-delay:600ms]">
            <DashboardSection metrics={metrics} loading={loading} totalTweets={tweets.length} />
          </section>
        </div>
      </main>

      <Footer />

      <ScrollToTopButton />
    </div>
  );
}

export default App;
