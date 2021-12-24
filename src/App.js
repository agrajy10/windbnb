import { useContext } from 'react';
import './css/main.css';
import Header from './components/Header';
import Footer from './components/Footer';
import StaysGrid from './components/StaysGrid';
import SearchModal from './components/SearchModal';
import SearchForm from './components/SearchForm';
import AppContext from './context/context';

function App() {
  const { isModalOpen, dispatch, filteredStays } = useContext(AppContext);

  return (
    <div className="max-w-7xl mx-auto px-3">
      <Header />

      <main className="py-4 md:py-14">
        <div className="flex items-center justify-between gap-4 mb-9">
          <h1 className="text-lg md:text-2xl font-bold text-zinc-800">Stays in Finland</h1>
          <span className="text-sm font-medium text-zinc-600">{filteredStays.length} stays</span>
        </div>

        {filteredStays.length > 0 ? (
          <StaysGrid stays={filteredStays} />
        ) : (
          <p className="px-4 py-2 text-xl bg-blue-100 border border-blue-600 text-blue-600 rounded-2xl font-medium text-center">
            No stays available
          </p>
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
