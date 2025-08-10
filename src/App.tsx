import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
// import ContactSection from './components/ContactSection';
// import Footer from './components/Footer';

function Hero() {
  return (
    <section
      id="hero"
      className="bg-slate-50 dark:bg-slate-900 py-20 px-4 text-center"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-slate-100">
          Hi, I’m Lara 👋
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-slate-600 dark:text-slate-300">
          Front-End Developer specializing in{' '}
          <span className="font-semibold text-teal-600 dark:text-teal-400">
            React
          </span>
          , building clean, user-friendly, and accessible web experiences.
        </p>
        <a
          href="#projects"
          className="mt-8 inline-block bg-teal-600 text-white px-6 py-3 rounded-lg shadow transition hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Hero />
      <Header />
      <main id="main">
        <AboutSection />
        <ProjectsSection />
        {/* <ContactSection /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
