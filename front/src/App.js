import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';

import Header from './components/layout/Header';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';
import Services from './pages/Services';
import Team from './pages/Team';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>The Ark</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/News" element={<News/>} />
          <Route path="/Services" element={<Services/>} />
          <Route path="/Team" element={<Team/>} />
      </Routes>

    </div>
  );
}

export default App;
