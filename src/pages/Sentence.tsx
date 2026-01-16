import { useState, useEffect } from 'react'
import { sentences } from '../data/japaneseData'
import './Sentence.css'

// 로마자를 한글 발음으로 변환하는 함수 (장음 처리 포함)
const romajiToKoreanPronunciation = (romaji: string): string => {
  const mapping: Record<string, string> = {
    // 촉음이 포함된 음절 (먼저 처리)
    'kka': '까', 'kki': '끼', 'kku': '꾸', 'kke': '께', 'kko': '꼬',
    'ssa': '싸', 'sshi': '씨', 'ssu': '쓰', 'sse': '쎄', 'sso': '쏘',
    'tta': '따', 'cchi': '찌', 'ttsu': '쯔', 'tte': '떼', 'tto': '또',
    'ppa': '빠', 'ppi': '삐', 'ppu': '뿌', 'ppe': '뻬', 'ppo': '뽀',
    // 요음
    'kya': '캬', 'kyu': '큐', 'kyo': '쿄',
    'sha': '샤', 'shu': '슈', 'sho': '쇼',
    'cha': '차', 'chu': '추', 'cho': '초',
    'nya': '냐', 'nyu': '뉴', 'nyo': '뇨',
    'hya': '햐', 'hyu': '휴', 'hyo': '효',
    'mya': '먀', 'myu': '뮤', 'myo': '묘',
    'rya': '랴', 'ryu': '류', 'ryo': '료',
    'gya': '갸', 'gyu': '규', 'gyo': '교',
    'ja': '자', 'ju': '주', 'jo': '조',
    'bya': '뱌', 'byu': '뷰', 'byo': '뵤',
    'pya': '퍄', 'pyu': '퓨', 'pyo': '표',
    // 기본 음절
    'ka': '가', 'ki': '기', 'ku': '구', 'ke': '게', 'ko': '고',
    'sa': '사', 'shi': '시', 'su': '스', 'se': '세', 'so': '소',
    'ta': '타', 'chi': '치', 'tsu': '츠', 'te': '테', 'to': '토',
    'na': '나', 'ni': '니', 'nu': '누', 'ne': '네', 'no': '노',
    'ha': '하', 'hi': '히', 'fu': '후', 'he': '헤', 'ho': '호',
    'ma': '마', 'mi': '미', 'mu': '무', 'me': '메', 'mo': '모',
    'ya': '야', 'yu': '유', 'yo': '요',
    'ra': '라', 'ri': '리', 'ru': '루', 're': '레', 'ro': '로',
    'wa': '와', 'wo': '오',
    'ga': '가', 'gi': '기', 'gu': '구', 'ge': '게', 'go': '고',
    'za': '자', 'ji': '지', 'zu': '즈', 'ze': '제', 'zo': '조',
    'da': '다', 'di': '디', 'du': '두', 'de': '데', 'do': '도',
    'ba': '바', 'bi': '비', 'bu': '부', 'be': '베', 'bo': '보',
    'pa': '파', 'pi': '피', 'pu': '푸', 'pe': '페', 'po': '포',
    // 단음
    'a': '아', 'i': '이', 'u': '우', 'e': '에', 'o': '오',
    'n': '응'
  }
  
  // 문장을 단어 단위로 분리하여 변환
  const words = romaji.split(/\s+/)
  const convertedWords = words.map(word => {
    // 구두점 저장
    const punctuation = word.match(/[.,!?。、]/g)?.join('') || ''
    let cleanWord = word.replace(/[.,!?。、]/g, '').toLowerCase()
    
    // 모음 위에 막대 표기 처리 (ā → aa 등)
    cleanWord = cleanWord.replace(/ā/g, 'aa')
    cleanWord = cleanWord.replace(/ī/g, 'ii')
    cleanWord = cleanWord.replace(/ū/g, 'uu')
    cleanWord = cleanWord.replace(/ē/g, 'ee')
    cleanWord = cleanWord.replace(/ō/g, 'oo')
    
    // 장음 처리 (aa → 아아, ii → 이이 등) - 먼저 처리
    cleanWord = cleanWord.replace(/aa/g, '아아')
    cleanWord = cleanWord.replace(/ii/g, '이이')
    cleanWord = cleanWord.replace(/uu/g, '우우')
    cleanWord = cleanWord.replace(/ee/g, '에에')
    cleanWord = cleanWord.replace(/oo/g, '오오')
    
    // 촉음 처리 (nn → n응 등)
    cleanWord = cleanWord.replace(/nn(?![a-z])/g, 'n응')
    cleanWord = cleanWord.replace(/tt(?![a-z])/g, 'tㅅ')
    cleanWord = cleanWord.replace(/ss(?![a-z])/g, 'sㅅ')
    cleanWord = cleanWord.replace(/kk(?![a-z])/g, 'kㅋ')
    cleanWord = cleanWord.replace(/pp(?![a-z])/g, 'pㅍ')
    
    // 긴 음절부터 매칭
    const sortedKeys = Object.keys(mapping).sort((a, b) => b.length - a.length)
    let result = cleanWord
    
    for (const key of sortedKeys) {
      // 알파벳만 매칭
      const regex = new RegExp(`\\b${key}\\b|(?<=[^\\uAC00-\\uD7A3])${key}(?=[^\\uAC00-\\uD7A3])`, 'gi')
      result = result.replace(regex, (match) => {
        if (/[\uAC00-\uD7A3]/.test(match)) return match
        return mapping[key]
      })
    }
    
    // 남은 알파벳 처리
    const singleCharMap: Record<string, string> = {
      'a': '아', 'i': '이', 'u': '우', 'e': '에', 'o': '오',
      'n': '응', 'w': '와', 'y': '이', 'r': '르', 'l': '르',
      'm': '음', 'h': '흐', 'f': '후', 's': '스', 't': '트',
      'd': '드', 'k': '크', 'g': '그', 'z': '즈', 'j': '지',
      'b': '브', 'p': '프', 'c': '크', 'v': '브', 'x': '크스'
    }
    
    // 남은 알파벳을 한글로 변환
    result = result.replace(/[a-z]/g, (char) => {
      return singleCharMap[char] || char
    })
    
    return result + punctuation
  })
  
  return convertedWords.join(' ') || romaji
}

function Sentence() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showTranslation, setShowTranslation] = useState(false)
  const [showRomaji, setShowRomaji] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('전체')

  const categories = ['전체', ...Array.from(new Set(sentences.map(s => s.category)))]
  const filteredSentences = selectedCategory === '전체' 
    ? sentences 
    : sentences.filter(s => s.category === selectedCategory)

  const currentSentence = filteredSentences[currentIndex]

  useEffect(() => {
    setShowTranslation(false)
    setCurrentIndex(0)
  }, [selectedCategory])

  useEffect(() => {
    setShowTranslation(false)
  }, [currentIndex])

  const nextSentence = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredSentences.length)
  }

  const prevSentence = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredSentences.length) % filteredSentences.length)
  }

  return (
    <div className="sentence-page">
      <div className="sentence-header">
        <h1>문장 학습</h1>
        <div className="sentence-controls">
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <label className="toggle">
            <input
              type="checkbox"
              checked={showRomaji}
              onChange={(e) => setShowRomaji(e.target.checked)}
            />
            <span>로마자 표시</span>
          </label>
        </div>
      </div>

      {filteredSentences.length > 0 && currentSentence ? (
        <>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentIndex + 1) / filteredSentences.length) * 100}%` }}
            />
          </div>
          <div className="progress-text">
            {currentIndex + 1} / {filteredSentences.length}
          </div>

          <div className="sentence-card">
            {currentSentence.situation && (
              <div className="situation-badge">
                {currentSentence.situation}
              </div>
            )}
            <div className="category-badge">
              {currentSentence.category}
            </div>
            
            <div className="sentence-content">
              <div className="japanese-text">
                {currentSentence.japanese}
              </div>
              
              {showRomaji && (
                <div className="romaji-text">
                  <div>{currentSentence.romaji}</div>
                  <div className="korean-pronunciation">({romajiToKoreanPronunciation(currentSentence.romaji)})</div>
                </div>
              )}

              <button 
                onClick={() => setShowTranslation(!showTranslation)}
                className="toggle-translation-btn"
              >
                {showTranslation ? '번역 숨기기' : '번역 보기'}
              </button>

              {showTranslation && (
                <div className="korean-text">
                  {currentSentence.korean}
                </div>
              )}
            </div>
          </div>

          <div className="sentence-controls">
            <button onClick={prevSentence} className="btn-nav">◀ 이전</button>
            <button onClick={nextSentence} className="btn-nav">다음 ▶</button>
          </div>
        </>
      ) : (
        <div className="no-sentence">선택한 카테고리에 문장이 없습니다.</div>
      )}
    </div>
  )
}

export default Sentence
