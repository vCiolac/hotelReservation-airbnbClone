import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './Components/Header';
import { useContext } from 'react';
import { Context } from './Context/Context';
import { motion } from 'framer-motion';
import Footer from './Components/Footer';

function App() {
  const { headerVisible } = useContext(Context);
  return (
    <main>
      <Header />
      <motion.div className={`${headerVisible ? 'pt-64' : 'pt-44'}`}>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="*" element={ <h1>Not Found</h1> } />
        </Routes>
      </motion.div>
      <Footer />
    </main>
  );
}

export default App;
