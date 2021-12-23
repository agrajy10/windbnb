import './css/main.css'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-3'>
      <Header />

        <main className='py-4 md:py-14'>

          <div className='flex items-center justify-between gap-4 mb-9'>
            <h1 className='text-lg md:text-2xl font-bold text-zinc-800'>Stays in Finland</h1>
            <span className='text-sm font-medium text-zinc-600'>+12 stays</span>
          </div>

        </main>

      <Footer />
    </div>
  );
}

export default App;
