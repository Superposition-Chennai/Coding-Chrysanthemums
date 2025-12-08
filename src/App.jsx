import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Resources from './pages/Resources'; // We will create this next
import About from './pages/About';
import Mentorship from './pages/Mentorship';
import Inspiration from './pages/Inspiration';
import Jobs from './pages/Jobs';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </Layout>
  )
}

export default App
