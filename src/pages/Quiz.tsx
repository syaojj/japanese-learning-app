import { useState, useEffect } from 'react'
import { hiragana, katakana, vocabulary } from '../data/japaneseData'
import './Quiz.css'

type QuizType = 'hiragana' | 'katakana' | 'vocabulary'
type QuizQuestion = {
  question: string
  options: string[]
  correctAnswer: string
  correctRomaji?: string
  type: QuizType
}

// 로마자를 한글로 변환하는 함수
const romajiToKorean: Record<string, string> = {
  'a': '아', 'i': '이', 'u': '우', 'e': '에', 'o': '오',
  'ka': '가', 'ki': '기', 'ku': '구', 'ke': '게', 'ko': '고',
  'sa': '사', 'shi': '시', 'su': '스', 'se': '세', 'so': '소',
  'ta': '타', 'chi': '치', 'tsu': '츠', 'te': '테', 'to': '토',
  'na': '나', 'ni': '니', 'nu': '누', 'ne': '네', 'no': '노',
  'ha': '하', 'hi': '히', 'fu': '후', 'he': '헤', 'ho': '호',
  'ma': '마', 'mi': '미', 'mu': '무', 'me': '메', 'mo': '모',
  'ya': '야', 'yu': '유', 'yo': '요',
  'ra': '라', 'ri': '리', 'ru': '루', 're': '레', 'ro': '로',
  'wa': '와', 'wo': '오', 'n': '응'
}

function Quiz() {
  const [quizType, setQuizType] = useState<QuizType>('hiragana')
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [isQuizStarted, setIsQuizStarted] = useState(false)

  const generateQuestions = (type: QuizType): QuizQuestion[] => {
    const questions: QuizQuestion[] = []
    
    if (type === 'hiragana') {
      const shuffled = [...hiragana].sort(() => Math.random() - 0.5).slice(0, 10)
      shuffled.forEach(char => {
        const correctKorean = romajiToKorean[char.romaji] || char.romaji
        const wrongOptions = hiragana
          .filter(c => c.romaji !== char.romaji)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
          .map(c => romajiToKorean[c.romaji] || c.romaji)
        questions.push({
          question: `"${char.character}"의 한글 발음은?`,
          options: [correctKorean, ...wrongOptions].sort(() => Math.random() - 0.5),
          correctAnswer: correctKorean,
          correctRomaji: char.romaji,
          type: 'hiragana'
        })
      })
    } else if (type === 'katakana') {
      const shuffled = [...katakana].sort(() => Math.random() - 0.5).slice(0, 10)
      shuffled.forEach(char => {
        const correctKorean = romajiToKorean[char.romaji] || char.romaji
        const wrongOptions = katakana
          .filter(c => c.romaji !== char.romaji)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
          .map(c => romajiToKorean[c.romaji] || c.romaji)
        questions.push({
          question: `"${char.character}"의 한글 발음은?`,
          options: [correctKorean, ...wrongOptions].sort(() => Math.random() - 0.5),
          correctAnswer: correctKorean,
          correctRomaji: char.romaji,
          type: 'katakana'
        })
      })
    } else {
      const shuffled = [...vocabulary].sort(() => Math.random() - 0.5).slice(0, 10)
      shuffled.forEach(word => {
        const wrongOptions = vocabulary
          .filter(v => v.korean !== word.korean)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
          .map(v => v.korean)
        questions.push({
          question: `"${word.japanese}"의 의미는?`,
          options: [word.korean, ...wrongOptions].sort(() => Math.random() - 0.5),
          correctAnswer: word.korean,
          correctRomaji: word.romaji,
          type: 'vocabulary'
        })
      })
    }
    
    return questions
  }

  const startQuiz = (type: QuizType) => {
    setQuizType(type)
    setQuestions(generateQuestions(type))
    setCurrentQuestionIndex(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setIsQuizStarted(true)
  }

  const handleAnswerSelect = (answer: string) => {
    if (selectedAnswer) return
    setSelectedAnswer(answer)
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(prev => prev + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
      setSelectedAnswer(null)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setIsQuizStarted(false)
    setShowResult(false)
    setCurrentQuestionIndex(0)
    setScore(0)
    setSelectedAnswer(null)
  }

  const currentQuestion = questions[currentQuestionIndex]

  if (!isQuizStarted || questions.length === 0) {
    return (
      <div className="quiz-page">
        <div className="quiz-selection">
          <h1>퀴즈 선택</h1>
          <p>학습한 내용을 확인해보세요!</p>
          <div className="quiz-types">
            <button onClick={() => startQuiz('hiragana')} className="quiz-type-btn">
              <div className="quiz-icon">あ</div>
              <h2>히라가나 퀴즈</h2>
              <p>히라가나 문자를 맞춰보세요</p>
            </button>
            <button onClick={() => startQuiz('katakana')} className="quiz-type-btn">
              <div className="quiz-icon">ア</div>
              <h2>가타카나 퀴즈</h2>
              <p>가타카나 문자를 맞춰보세요</p>
            </button>
            <button onClick={() => startQuiz('vocabulary')} className="quiz-type-btn">
              <div className="quiz-icon">📚</div>
              <h2>단어 퀴즈</h2>
              <p>일본어 단어의 의미를 맞춰보세요</p>
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100)
    return (
      <div className="quiz-page">
        <div className="quiz-result">
          <h1>퀴즈 완료!</h1>
          <div className="result-score">
            <div className="score-circle">
              <div className="score-number">{score}</div>
              <div className="score-total">/ {questions.length}</div>
            </div>
            <div className="score-percentage">{percentage}%</div>
          </div>
          <div className="result-message">
            {percentage >= 80 ? '🎉 훌륭합니다!' : percentage >= 60 ? '👍 잘했어요!' : '💪 더 공부해봐요!'}
          </div>
          <button onClick={resetQuiz} className="btn-restart">다시 시작</button>
        </div>
      </div>
    )
  }

  if (!currentQuestion) {
    return (
      <div className="quiz-page">
        <div className="quiz-selection">
          <h1>퀴즈를 시작해주세요</h1>
          <button onClick={resetQuiz} className="btn-restart">돌아가기</button>
        </div>
      </div>
    )
  }

  return (
    <div className="quiz-page">
      <div className="quiz-container">
        <div className="quiz-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
          <div className="progress-text">
            문제 {currentQuestionIndex + 1} / {questions.length}
          </div>
        </div>

        <div className="question-card">
          <div className="question">{currentQuestion.question}</div>
          <div className="options">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === option
              const isCorrect = option === currentQuestion.correctAnswer
              const showCorrect = selectedAnswer !== null
              
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  className={`option-btn ${
                    isSelected 
                      ? isCorrect ? 'correct' : 'incorrect'
                      : showCorrect && isCorrect ? 'correct-answer' : ''
                  }`}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                </button>
              )
            })}
          </div>

          {selectedAnswer && (
            <div className="answer-feedback">
              {selectedAnswer === currentQuestion.correctAnswer ? (
                <div className="feedback correct-feedback">
                  ✓ 정답입니다! {currentQuestion.correctRomaji && `(${currentQuestion.correctRomaji})`}
                </div>
              ) : (
                <div className="feedback incorrect-feedback">
                  ✗ 틀렸습니다. 정답은 "{currentQuestion.correctAnswer}"{currentQuestion.correctRomaji && ` (${currentQuestion.correctRomaji})`}입니다.
                </div>
              )}
              <button onClick={nextQuestion} className="btn-next">
                {currentQuestionIndex < questions.length - 1 ? '다음 문제' : '결과 보기'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Quiz
