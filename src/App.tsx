import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Hiragana from './pages/Hiragana'
import Katakana from './pages/Katakana'
import Vocabulary from './pages/Vocabulary'
import Sentence from './pages/Sentence'
import Quiz from './pages/Quiz'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo">
              🇯🇵 일본어 학습
            </Link>
            <div className="nav-menu">
              <Link to="/" className="nav-link">홈</Link>
              <Link to="/hiragana" className="nav-link">히라가나</Link>
              <Link to="/katakana" className="nav-link">가타카나</Link>
              <Link to="/vocabulary" className="nav-link">단어</Link>
              <Link to="/sentence" className="nav-link">문장</Link>
              <Link to="/quiz" className="nav-link">퀴즈</Link>
            </div>
          </div>
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hiragana" element={<Hiragana />} />
            <Route path="/katakana" element={<Katakana />} />
            <Route path="/vocabulary" element={<Vocabulary />} />
            <Route path="/sentence" element={<Sentence />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
