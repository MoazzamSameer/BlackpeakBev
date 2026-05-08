import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Story from './pages/Story';
import FindUs from './pages/FindUs';

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col selection:bg-primary selection:text-on-primary overflow-x-hidden">
        <Navbar />
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/find" element={<FindUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
