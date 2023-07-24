import "./App.css";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Switch from "./Switch";

// create a Title component that accepts children as a prop, 
//children is a special prop that is used to display whatever you include between the opening and closing tags when invoking a component
const Title = ({ children }) => {
  const { theme } = useTheme(); // theme is a variable that is destructured from the object returned by useTheme()
  return (
    <h2
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children} 
    </h2>
  );
};

const Paragraph = ({ children }) => {
  const { theme } = useTheme();
  return (
    <p
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </p>
  );
};

const Content = () => {
  return (
    <div>
      <Paragraph> 
        We are a pizza loving family. And for years, I searched and searched and
        searched for the perfect pizza dough recipe. I tried dozens, or more.
        And while some were good, none of them were that recipe that would
        make me stop trying all of the others.
      </Paragraph>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <Title>Little Lemon 🍕</Title>
      <Switch />
    </header>
  );
};

const Page = () => {
  return (
    <div className="Page">
      <Title>When it comes to dough</Title>
      <Content />
    </div>
  );
};

function App() {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <Header />
      <Page />
    </div>
  );
}

function Root() {
  return (
    
    <ThemeProvider>  {/*// ThemeProvider is a component that wraps the entire application*/}
      <App />
    </ThemeProvider> // /*this make theme become global state? 
  );
}

export default Root;
