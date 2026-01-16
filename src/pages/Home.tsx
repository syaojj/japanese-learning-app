import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>일본어 학습 앱에 오신 것을 환영합니다!</h1>
        <p>히라가나, 가타카나, 단어, 문장, 퀴즈를 통해 일본어를 배워보세요.</p>
      </div>
      
      <div className="features">
        <Link to="/hiragana" className="feature-card">
          <div className="feature-icon">あ</div>
          <h2>히라가나</h2>
          <p>일본어 기본 문자인 히라가나를 학습하세요</p>
        </Link>
        
        <Link to="/katakana" className="feature-card">
          <div className="feature-icon">ア</div>
          <h2>가타카나</h2>
          <p>외래어 표기에 사용되는 가타카나를 학습하세요</p>
        </Link>
        
        <Link to="/vocabulary" className="feature-card">
          <div className="feature-icon">📚</div>
          <h2>단어 학습</h2>
          <p>일본어 단어를 플래시카드로 학습하세요</p>
        </Link>
        
        <Link to="/sentence" className="feature-card">
          <div className="feature-icon">💬</div>
          <h2>문장</h2>
          <p>실용적인 일본어 문장을 학습하세요</p>
        </Link>
        
        <Link to="/quiz" className="feature-card">
          <div className="feature-icon">✏️</div>
          <h2>퀴즈</h2>
          <p>학습한 내용을 퀴즈로 확인하세요</p>
        </Link>
      </div>
    </div>
  )
}

export default Home
