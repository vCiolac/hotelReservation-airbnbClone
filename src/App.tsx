import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './Components/Header';

function App() {
  return (
    <main>
      <Header />
      <section className="pt-64">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="*" element={ <h1>Not Found</h1> } />
        </Routes>
      </section>
    </main>
  );
}

export default App;
