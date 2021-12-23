import { useState, useEffect } from 'react';
import './css/main.css';
import Header from './components/Header';
import Footer from './components/Footer';
import StaysGrid from './components/StaysGrid';
import SearchModal from './components/SearchModal';
import SearchForm from './components/SearchForm';

function App() {
  const [stays, setStays] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchStays = async () => {
      try {
        const response = await fetch('http://localhost:5000/stays');
        const data = await response.json();
        setStays(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStays();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-3">
      <Header openModal={() => setIsOpen(true)} />

      <main className="py-4 md:py-14">
        <div className="flex items-center justify-between gap-4 mb-9">
          <h1 className="text-lg md:text-2xl font-bold text-zinc-800">Stays in Finland</h1>
          <span className="text-sm font-medium text-zinc-600">+12 stays</span>
        </div>

        {!isLoading ? (
          !error ? (
            <StaysGrid stays={stays} />
          ) : (
            <p className="bg-red-100 border border-red-600 text-red-600 rounded px-4 py-2 font-medium">
              {error}
            </p>
          )
        ) : (
          <p className="text-xl text-center">Loading....</p>
        )}
      </main>

      <Footer />
      <SearchModal open={isOpen} onClose={() => setIsOpen(false)}>
        <SearchForm />
      </SearchModal>
    </div>
  );
}

export default App;
