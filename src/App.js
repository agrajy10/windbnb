import { useContext, useEffect } from 'react';
import './css/main.css';
import Header from './components/Header';
import Footer from './components/Footer';
import StaysGrid from './components/StaysGrid';
import SearchModal from './components/SearchModal';
import SearchForm from './components/SearchForm';
import AppContext from './context/context';
import { fetchStays } from './actions/actions';

function App() {
  const { isLoading, error, isModalOpen, dispatch, filteredStays } = useContext(AppContext);

  useEffect(() => {
    const getStays = async () => {
      const data = await fetchStays();
      dispatch({
        type: 'SET_STAYS',
        payload: data
      });
    };

    getStays();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-3">
      <Header />

      <main className="py-4 md:py-14">
        <div className="flex items-center justify-between gap-4 mb-9">
          <h1 className="text-lg md:text-2xl font-bold text-zinc-800">Stays in Finland</h1>
          <span className="text-sm font-medium text-zinc-600">{filteredStays.length} stays</span>
        </div>

        {!isLoading ? (
          !error ? (
            <StaysGrid stays={filteredStays} />
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
      <SearchModal open={isModalOpen} onClose={() => dispatch({ type: 'CLOSE_MODAL' })}>
        <SearchForm />
      </SearchModal>
    </div>
  );
}

export default App;
