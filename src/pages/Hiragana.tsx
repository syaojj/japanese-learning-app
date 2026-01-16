import { useState } from 'react'
import { hiragana } from '../data/japaneseData'
import './Alphabet.css'

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

function Hiragana() {
  const [selectedChar, setSelectedChar] = useState<string | null>(null)
  const [showRomaji, setShowRomaji] = useState(true)

  const groupedChars = hiragana.reduce((acc, char) => {
    if (!acc[char.row]) {
      acc[char.row] = []
    }
    acc[char.row].push(char)
    return acc
  }, {} as Record<string, typeof hiragana>)

  return (
    <div className="alphabet-page">
      <div className="page-header">
        <h1>히라가나 학습</h1>
        <label className="toggle">
          <input
            type="checkbox"
            checked={showRomaji}
            onChange={(e) => setShowRomaji(e.target.checked)}
          />
          <span>로마자 표시</span>
        </label>
      </div>

      {Object.entries(groupedChars).map(([row, chars]) => (
        <div key={row} className="alphabet-row">
          <h2 className="row-title">{row.toUpperCase()}행</h2>
          <div className="characters-grid">
            {chars.map((char) => (
              <div
                key={char.character}
                className={`character-card ${selectedChar === char.character ? 'selected' : ''}`}
                onClick={() => setSelectedChar(char.character === selectedChar ? null : char.character)}
              >
                <div className="character">{char.character}</div>
                {showRomaji && (
                  <div className="romaji">
                    <div>{char.romaji}</div>
                    <div className="korean-pronunciation">({romajiToKorean[char.romaji] || char.romaji})</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedChar && (
        <div className="character-detail">
          <div className="detail-content">
            <div className="detail-character">
              {hiragana.find(c => c.character === selectedChar)?.character}
            </div>
            <div className="detail-info">
              <div className="detail-label">로마자</div>
              <div className="detail-value">
                {hiragana.find(c => c.character === selectedChar)?.romaji}
              </div>
              <div className="detail-label">한글 발음</div>
              <div className="detail-value">
                {(() => {
                  const char = hiragana.find(c => c.character === selectedChar)
                  return char ? romajiToKorean[char.romaji] || char.romaji : ''
                })()}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Hiragana
