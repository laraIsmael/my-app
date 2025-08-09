import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
// import ContactSection from './components/ContactSection';
// import Footer from './components/Footer';

function App() {
  return (
    <>
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
