//npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
//npm install formik yup
//npm install @fortawesome/fontawesome-free
/*
npm install @fortawesome/react-fontawesome
npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/free-brands-svg-icons
*/
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";

function App() {
  // //ChakraProvider is a component that provides the Chakra UI theme to all components in the app. https://chakra-ui.com/docs/components
  // //AlertProvider is a component that provides the alert context to all components in the app.
  return (
    <ChakraProvider> 
      <AlertProvider>
        <main>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
