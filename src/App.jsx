import "./App.css";

function App() {
  return (
    <>
      <h1>Under Construction</h1>
      <span
        className="material-icons"
        style={{ fontSize: 100, color: "#4AE4FF" }}
      >
        build
      </span>
      <p>
        Welcome to my portfolio.
        <br />
        This site is currently under construction.
        <br />
        Please check back soon for updates.
      </p>
      <button>
        <a
          href="https://kentmcamp.github.io/webAudio/"
          target="_blank"
          rel="noreferrer"
        >
          Play A Song
        </a>
      </button>
      <div className="contact-info">

        <a href="https://github.com/kentmcamp" className="icon-link">
          <button className="small-button">
            <img src="./public/assets/icons/github.webp" alt="GitHub" />
          </button>
        </a>

        <a href="mailto:kentmcamp87@gmail.com" className="icon-link">
          <button className="small-button">
            <img src="./public/assets/icons/email.webp" alt="Email" />
          </button>
        </a>

        <a href="https://www.linkedin.com/in/kentmcampbell" className="icon-link">
          <button className="small-button">
            <img src="./public/assets/icons/linkedIn.webp" alt="LinkedIn" />
          </button>
        </a>
      </div>
    </>
  );
}

export default App;
