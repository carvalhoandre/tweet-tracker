import React from 'react';
import { Header, Hero } from './components';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
