import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useState, useEffect } from 'react';
import Header  from './components/Header';
import Footer from './components/Footer';

function App() {
  const [repos, setRepos] = useState([]);
  const Home = lazy(() => import('./pages/Home'));
  const Projects = lazy(() => import('./pages/Projects'));
  const Skills = lazy(() => import('./pages/Skills'));
  const Contact = lazy(() => import('./pages/Contact'));
  const NotFound= lazy(() => import('./pages/NotFound'));

  useEffect(() =>{
    fetch('https://api.github.com/users/SeanBarr/repos')
    .then(results=>results.json())
    .then(data=>setRepos(data))  
  },[])
    console.log(repos);

  return (
    <div className="min-vh-100 d-flex flex-column">
  <Router>
  <Header />
  <main className="flex-grow-1 my-5">
  <Routes>
  <Route exact path="/" element={ <Suspense fallback={<div><p>Gone Fishing...</p></div>}>< Home/></Suspense> }/>
  <Route path="/projects" element={ <Suspense fallback={<div><p>Gone Fishing...</p></div>}>< Projects repos={repos}/></Suspense> }/>
  <Route path="/skills" element={ <Suspense fallback={<div><p>Gone Fishing...</p></div>}>< Skills/></Suspense> }/>
  <Route path="/contact" element={ <Suspense fallback={<div><p>Gone Fishing...</p></div>}>< Contact/></Suspense> }/>
  <Route path="/*" element={ <Suspense fallback={<div><p>Gone Fishing...</p></div>}>< NotFound/></Suspense> }/>
  </Routes>
  </main>
  <Footer />
  </Router>
    </div>
  )};

export default App;
