import { useEffect, useState } from "react";
import divMobile from "./assets/images/pattern-divider-mobile.svg";
import divDesktop from "./assets/images/pattern-divider-desktop.svg";
import dice from "./assets/images/icon-dice.svg";
import "./App.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [data, setData] = useState({});

  const fetchData = () => {
    setIsLoaded(true)
    setTimeout(() => {
      fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setIsLoaded(false);
        })
        .catch((error) => {
          console.error("error:", error);
        });
    }, 2000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <main>
        {isLoaded ? <div className="custom-loader"></div> : false}

        {!isLoaded ? <h2>Advice # {data.slip?.id}</h2> : true}

        {!isLoaded ? <h1>"{data.slip?.advice}"</h1> : true}

        <div className="line">
          <picture>
            <source media="(min-width: 500px )" srcSet={divDesktop} />
            <img src={divMobile} alt="divider" />
          </picture>
        </div>

        <button>
          <div onClick={fetchData} className="circle">
            <img src={dice} alt="dice icon" />
          </div>
        </button>
      </main>

      <section>
        <div className="attribution">
          Challenge by
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            rel="noreferrer"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="http://github.com/uepzues">uepzues</a>.
        </div>
      </section>
    </>
  );
}

export default App;
