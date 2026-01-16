import { useState, useEffect } from 'react'
import { vocabulary, Vocabulary as VocabType } from '../data/japaneseData'
import './Vocabulary.css'

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
  
  let result = romaji.toLowerCase()
  
  // 모음 위에 막대 표기 처리 (ā → aa 등)
  result = result.replace(/ā/g, 'aa')
  result = result.replace(/ī/g, 'ii')
  result = result.replace(/ū/g, 'uu')
  result = result.replace(/ē/g, 'ee')
  result = result.replace(/ō/g, 'oo')
  
  // 장음 처리 (aa → 아아, ii → 이이 등) - 먼저 처리
  result = result.replace(/aa/g, '아아')
  result = result.replace(/ii/g, '이이')
  result = result.replace(/uu/g, '우우')
  result = result.replace(/ee/g, '에에')
  result = result.replace(/oo/g, '오오')
  
  // 촉음 처리 (nn → n응, tt → tㅅ 등)
  result = result.replace(/nn(?![a-z])/g, 'n응')
  result = result.replace(/tt(?![a-z])/g, 'tㅅ')
  result = result.replace(/ss(?![a-z])/g, 'sㅅ')
  result = result.replace(/kk(?![a-z])/g, 'kㅋ')
  result = result.replace(/pp(?![a-z])/g, 'pㅍ')
  
  // 긴 음절부터 매칭
  const sortedKeys = Object.keys(mapping).sort((a, b) => b.length - a.length)
  
  for (const key of sortedKeys) {
    // 알파벳만 매칭 (한글은 건너뛰기)
    const regex = new RegExp(`\\b${key}\\b|(?<=[^\\uAC00-\\uD7A3])${key}(?=[^\\uAC00-\\uD7A3])`, 'gi')
    result = result.replace(regex, (match) => {
      // 이미 한글이 포함된 부분은 건너뛰기
      if (/[\uAC00-\uD7A3]/.test(match)) return match
      return mapping[key]
    })
  }
  
  // 남은 알파벳 처리 (단일 문자)
  const singleCharMap: Record<string, string> = {
    'a': '아', 'i': '이', 'u': '우', 'e': '에', 'o': '오',
    'n': '응', 'w': '와', 'y': '이', 'r': '르', 'l': '르',
    'm': '음', 'h': '흐', 'f': '후', 's': '스', 't': '트',
    'd': '드', 'k': '크', 'g': '그', 'z': '즈', 'j': '지',
    'b': '브', 'p': '프', 'c': '크', 'v': '브', 'x': '크스'
  }
  
  // 남은 알파벳을 한글로 변환 (한글이 아닌 알파벳만)
  result = result.replace(/[a-z]/g, (char) => {
    return singleCharMap[char] || char
  })
  
  return result || romaji
}

function Vocabulary() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('전체')
  const [shuffledVocab, setShuffledVocab] = useState<VocabType[]>([])

  const categories = ['전체', ...Array.from(new Set(vocabulary.map(v => v.category)))]
  const filteredVocab = selectedCategory === '전체' 
    ? vocabulary 
    : vocabulary.filter(v => v.category === selectedCategory)

  const displayVocab = shuffledVocab.length > 0 ? shuffledVocab : filteredVocab
  const currentWord = displayVocab[currentIndex]

  useEffect(() => {
    setIsFlipped(false)
    setShuffledVocab([])
    setCurrentIndex(0)
  }, [selectedCategory])

  useEffect(() => {
    setIsFlipped(false)
  }, [currentIndex])

  const nextWord = () => {
    setCurrentIndex((prev) => (prev + 1) % displayVocab.length)
  }

  const prevWord = () => {
    setCurrentIndex((prev) => (prev - 1 + displayVocab.length) % displayVocab.length)
  }

  const shuffle = () => {
    const shuffled = [...filteredVocab].sort(() => Math.random() - 0.5)
    setShuffledVocab(shuffled)
    setCurrentIndex(0)
  }

  return (
    <div className="vocabulary-page">
      <div className="vocab-header">
        <h1>단어 학습</h1>
        <div className="vocab-controls">
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <button onClick={shuffle} className="btn-secondary">섞기</button>
        </div>
      </div>

      {displayVocab.length > 0 && currentWord ? (
        <>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentIndex + 1) / displayVocab.length) * 100}%` }}
            />
          </div>
          <div className="progress-text">
            {currentIndex + 1} / {displayVocab.length}
          </div>

          <div className="flashcard-container">
            <div 
              className={`flashcard ${isFlipped ? 'flipped' : ''}`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div className="flashcard-front">
                <div className="word-japanese">{currentWord.japanese}</div>
                <div className="word-romaji">
                  <div>{currentWord.romaji}</div>
                  <div className="korean-pronunciation">({romajiToKoreanPronunciation(currentWord.romaji)})</div>
                </div>
                <div className="flip-hint">클릭하여 뒤집기</div>
              </div>
              <div className="flashcard-back">
                <div className="word-korean">{currentWord.korean}</div>
                <div className="word-romaji">{currentWord.romaji}</div>
                <div className="word-category">{currentWord.category}</div>
                <div className="flip-hint">클릭하여 뒤집기</div>
              </div>
            </div>
          </div>

          <div className="flashcard-controls">
            <button onClick={prevWord} className="btn-nav">◀ 이전</button>
            <button onClick={() => setIsFlipped(!isFlipped)} className="btn-flip">
              {isFlipped ? '앞면 보기' : '뒷면 보기'}
            </button>
            <button onClick={nextWord} className="btn-nav">다음 ▶</button>
          </div>
        </>
      ) : (
        <div className="no-vocab">선택한 카테고리에 단어가 없습니다.</div>
      )}
    </div>
  )
}

export default Vocabulary
