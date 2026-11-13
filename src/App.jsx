
import { lazy, Suspense } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Suspense fallback={<div>Chargement...</div>}>
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </Suspense>
      </main>
    </>
  );
}

export default App;
