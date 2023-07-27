import './App.css';

const Button = ({ type, children, ...buttonProps }) => { 
  // the button component takes a type prop that determines its style
  // children prop is used to specify the text content of the button
  // buttonProps is used to pass any other props to the button
  const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
  return (
    <button className={`Button ${className}`} {...buttonProps}>
      {children}
    </button>
  );
};

const LoginButton = ({ type, children, ...buttonProps }) => {
  return (
    <Button
      type="secondary"
      {...buttonProps}
      onClick={() => {
        alert("Logging in!");
      }}
      // {...buttonProps}   => depending on the order of the spread, the behavior may differ 
    >
      {children}
    </Button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <Button type="primary" onClick={() => alert("Signing up!")}>
        Sign up
      </Button>
      <LoginButton type="secondary" onClick={() => alert("Signing up!")}>
        Login
      </LoginButton>
    </div>
  );
}

export default App;
