import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './Components/Header';
import { useContext } from 'react';
import { Context } from './Context/Context';

function App() {
  const { headerVisible } = useContext(Context);
  return (
    <main>
      <Header />
      <section className={`${headerVisible ? 'pt-64' : 'pt-36'}`}>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="*" element={ <h1>Not Found</h1> } />
        </Routes>
      </section>
    </main>
  );
}

export default App;
