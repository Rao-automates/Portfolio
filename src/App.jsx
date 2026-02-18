import { ToastProvider } from './components/Toast';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { Skills, Contact } from './components/Footer';
import Cursor from './components/Cursor';
import Terminal from './components/Terminal';
import './App.css'

function App() {
  return (
    <ToastProvider>
      <div className="app-container">
        <Cursor />
        <Terminal />
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </ToastProvider>
  )
}

export default App
