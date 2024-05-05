import './App.css';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

import AppRoutes from './routes';

function App() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
