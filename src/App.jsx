import './App.css'

function App() {
  return (
    <>
      <h1>Under Construction</h1>
      <span className="material-icons" style={{ fontSize: 100, color: '#4AE4FF' }}>build</span>
      <p>Welcome to my portfolio. This site is currently under construction. Please check back soon for updates.</p>
      <button>
        <a href="https://kentmcamp.github.io/webAudio/" target="_blank" rel="noreferrer">Play A Song</a>
      </button>
      <div className="contact-info">
        <a href="mailto:kentmcamp87@gmail.com" className="icon-link">
          <span className="material-icons">email</span>
        </a>
        <a href="https://github.com/kentmcamp" target="_blank" rel="noreferrer" className="icon-link">
          <span className="material-icons">code</span>
        </a>
        <a href="https://www.linkedin.com/in/kentmcampbell" target="_blank" rel="noreferrer" className="icon-link">
          <span className="material-icons">business_center</span>
        </a>
      </div>
    </>
  )
}

export default App
