// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
function App() {//APP.js is the root component
  const title="My first React-app";
  const likes=50
  return (//JSX-Syntax
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
        <h1>
          {title}
        </h1>
        <p>
          Liked {likes} times.
        </p>
      </div>
    </div>
  );
}

export default App;
