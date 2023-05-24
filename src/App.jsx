import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <ul>
          <li>
            <a href="Home">Home</a>
          </li>
          <li>
            <a href="Blog">Blog</a>
          </li>
          <li>
            <a href="Contact Us">Contact Us</a>
          </li>
        </ul>
      </header>
      <main>
        <div className="image-box"></div>
      </main>
      <footer>this is footer</footer>
    </>
  );
}

export default App;
