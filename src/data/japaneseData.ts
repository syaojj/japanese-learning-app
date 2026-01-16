export interface HiraganaChar {
  character: string
  romaji: string
  row: string
}

export interface KatakanaChar {
  character: string
  romaji: string
  row: string
}

export interface Vocabulary {
  japanese: string
  korean: string
  romaji: string
  category: string
}

export const hiragana: HiraganaChar[] = [
  { character: 'あ', romaji: 'a', row: 'a' },
  { character: 'い', romaji: 'i', row: 'a' },
  { character: 'う', romaji: 'u', row: 'a' },
  { character: 'え', romaji: 'e', row: 'a' },
  { character: 'お', romaji: 'o', row: 'a' },
  { character: 'か', romaji: 'ka', row: 'ka' },
  { character: 'き', romaji: 'ki', row: 'ka' },
  { character: 'く', romaji: 'ku', row: 'ka' },
  { character: 'け', romaji: 'ke', row: 'ka' },
  { character: 'こ', romaji: 'ko', row: 'ka' },
  { character: 'さ', romaji: 'sa', row: 'sa' },
  { character: 'し', romaji: 'shi', row: 'sa' },
  { character: 'す', romaji: 'su', row: 'sa' },
  { character: 'せ', romaji: 'se', row: 'sa' },
  { character: 'そ', romaji: 'so', row: 'sa' },
  { character: 'た', romaji: 'ta', row: 'ta' },
  { character: 'ち', romaji: 'chi', row: 'ta' },
  { character: 'つ', romaji: 'tsu', row: 'ta' },
  { character: 'て', romaji: 'te', row: 'ta' },
  { character: 'と', romaji: 'to', row: 'ta' },
  { character: 'な', romaji: 'na', row: 'na' },
  { character: 'に', romaji: 'ni', row: 'na' },
  { character: 'ぬ', romaji: 'nu', row: 'na' },
  { character: 'ね', romaji: 'ne', row: 'na' },
  { character: 'の', romaji: 'no', row: 'na' },
  { character: 'は', romaji: 'ha', row: 'ha' },
  { character: 'ひ', romaji: 'hi', row: 'ha' },
  { character: 'ふ', romaji: 'fu', row: 'ha' },
  { character: 'へ', romaji: 'he', row: 'ha' },
  { character: 'ほ', romaji: 'ho', row: 'ha' },
  { character: 'ま', romaji: 'ma', row: 'ma' },
  { character: 'み', romaji: 'mi', row: 'ma' },
  { character: 'む', romaji: 'mu', row: 'ma' },
  { character: 'め', romaji: 'me', row: 'ma' },
  { character: 'も', romaji: 'mo', row: 'ma' },
  { character: 'や', romaji: 'ya', row: 'ya' },
  { character: 'ゆ', romaji: 'yu', row: 'ya' },
  { character: 'よ', romaji: 'yo', row: 'ya' },
  { character: 'ら', romaji: 'ra', row: 'ra' },
  { character: 'り', romaji: 'ri', row: 'ra' },
  { character: 'る', romaji: 'ru', row: 'ra' },
  { character: 'れ', romaji: 're', row: 'ra' },
  { character: 'ろ', romaji: 'ro', row: 'ra' },
  { character: 'わ', romaji: 'wa', row: 'wa' },
  { character: 'を', romaji: 'wo', row: 'wa' },
  { character: 'ん', romaji: 'n', row: 'n' },
]

export const katakana: KatakanaChar[] = [
  { character: 'ア', romaji: 'a', row: 'a' },
  { character: 'イ', romaji: 'i', row: 'a' },
  { character: 'ウ', romaji: 'u', row: 'a' },
  { character: 'エ', romaji: 'e', row: 'a' },
  { character: 'オ', romaji: 'o', row: 'a' },
  { character: 'カ', romaji: 'ka', row: 'ka' },
  { character: 'キ', romaji: 'ki', row: 'ka' },
  { character: 'ク', romaji: 'ku', row: 'ka' },
  { character: 'ケ', romaji: 'ke', row: 'ka' },
  { character: 'コ', romaji: 'ko', row: 'ka' },
  { character: 'サ', romaji: 'sa', row: 'sa' },
  { character: 'シ', romaji: 'shi', row: 'sa' },
  { character: 'ス', romaji: 'su', row: 'sa' },
  { character: 'セ', romaji: 'se', row: 'sa' },
  { character: 'ソ', romaji: 'so', row: 'sa' },
  { character: 'タ', romaji: 'ta', row: 'ta' },
  { character: 'チ', romaji: 'chi', row: 'ta' },
  { character: 'ツ', romaji: 'tsu', row: 'ta' },
  { character: 'テ', romaji: 'te', row: 'ta' },
  { character: 'ト', romaji: 'to', row: 'ta' },
  { character: 'ナ', romaji: 'na', row: 'na' },
  { character: 'ニ', romaji: 'ni', row: 'na' },
  { character: 'ヌ', romaji: 'nu', row: 'na' },
  { character: 'ネ', romaji: 'ne', row: 'na' },
  { character: 'ノ', romaji: 'no', row: 'na' },
  { character: 'ハ', romaji: 'ha', row: 'ha' },
  { character: 'ヒ', romaji: 'hi', row: 'ha' },
  { character: 'フ', romaji: 'fu', row: 'ha' },
  { character: 'ヘ', romaji: 'he', row: 'ha' },
  { character: 'ホ', romaji: 'ho', row: 'ha' },
  { character: 'マ', romaji: 'ma', row: 'ma' },
  { character: 'ミ', romaji: 'mi', row: 'ma' },
  { character: 'ム', romaji: 'mu', row: 'ma' },
  { character: 'メ', romaji: 'me', row: 'ma' },
  { character: 'モ', romaji: 'mo', row: 'ma' },
  { character: 'ヤ', romaji: 'ya', row: 'ya' },
  { character: 'ユ', romaji: 'yu', row: 'ya' },
  { character: 'ヨ', romaji: 'yo', row: 'ya' },
  { character: 'ラ', romaji: 'ra', row: 'ra' },
  { character: 'リ', romaji: 'ri', row: 'ra' },
  { character: 'ル', romaji: 'ru', row: 'ra' },
  { character: 'レ', romaji: 're', row: 'ra' },
  { character: 'ロ', romaji: 'ro', row: 'ra' },
  { character: 'ワ', romaji: 'wa', row: 'wa' },
  { character: 'ヲ', romaji: 'wo', row: 'wa' },
  { character: 'ン', romaji: 'n', row: 'n' },
]

export const vocabulary: Vocabulary[] = [
  { japanese: 'こんにちは', korean: '안녕하세요', romaji: 'konnichiwa', category: '인사' },
  { japanese: 'ありがとう', korean: '감사합니다', romaji: 'arigatou', category: '인사' },
  { japanese: 'すみません', korean: '죄송합니다', romaji: 'sumimasen', category: '인사' },
  { japanese: 'おはよう', korean: '좋은 아침', romaji: 'ohayou', category: '인사' },
  { japanese: 'こんばんは', korean: '안녕하세요 (저녁)', romaji: 'konbanwa', category: '인사' },
  { japanese: 'さようなら', korean: '안녕히 가세요', romaji: 'sayounara', category: '인사' },
  { japanese: 'はい', korean: '네', romaji: 'hai', category: '기본' },
  { japanese: 'いいえ', korean: '아니요', romaji: 'iie', category: '기본' },
  { japanese: '水', korean: '물', romaji: 'mizu', category: '음식' },
  { japanese: 'ご飯', korean: '밥', romaji: 'gohan', category: '음식' },
  { japanese: 'りんご', korean: '사과', romaji: 'ringo', category: '음식' },
  { japanese: '本', korean: '책', romaji: 'hon', category: '물건' },
  { japanese: '車', korean: '자동차', romaji: 'kuruma', category: '물건' },
  { japanese: '家', korean: '집', romaji: 'ie', category: '물건' },
  { japanese: '学校', korean: '학교', romaji: 'gakkou', category: '장소' },
  { japanese: '病院', korean: '병원', romaji: 'byouin', category: '장소' },
  { japanese: '駅', korean: '역', romaji: 'eki', category: '장소' },
  { japanese: '大きい', korean: '큰', romaji: 'ookii', category: '형용사' },
  { japanese: '小さい', korean: '작은', romaji: 'chiisai', category: '형용사' },
  { japanese: '新しい', korean: '새로운', romaji: 'atarashii', category: '형용사' },
  { japanese: '古い', korean: '오래된', romaji: 'furui', category: '형용사' },
  { japanese: '行く', korean: '가다', romaji: 'iku', category: '동사' },
  { japanese: '来る', korean: '오다', romaji: 'kuru', category: '동사' },
  { japanese: '食べる', korean: '먹다', romaji: 'taberu', category: '동사' },
  { japanese: '見る', korean: '보다', romaji: 'miru', category: '동사' },
]

export interface Sentence {
  japanese: string
  korean: string
  romaji: string
  category: string
  situation?: string
}

export const sentences: Sentence[] = [
  // 인사
  { japanese: 'こんにちは。お元気ですか？', korean: '안녕하세요. 잘 지내세요?', romaji: 'Konnichiwa. Ogenki desu ka?', category: '인사', situation: '일반적인 인사' },
  { japanese: 'おはようございます。', korean: '좋은 아침입니다.', romaji: 'Ohayou gozaimasu.', category: '인사', situation: '아침 인사' },
  { japanese: 'こんばんは。', korean: '안녕하세요 (저녁).', romaji: 'Konbanwa.', category: '인사', situation: '저녁 인사' },
  { japanese: 'さようなら。また後で。', korean: '안녕히 가세요. 나중에 봐요.', romaji: 'Sayounara. Mata ato de.', category: '인사', situation: '작별 인사' },
  
  // 자기소개
  { japanese: '初めまして。私は田中です。', korean: '처음 뵙겠습니다. 저는 다나카입니다.', romaji: 'Hajimemashite. Watashi wa Tanaka desu.', category: '자기소개', situation: '이름 소개' },
  { japanese: 'よろしくお願いします。', korean: '잘 부탁드립니다.', romaji: 'Yoroshiku onegaishimasu.', category: '자기소개', situation: '인사말' },
  { japanese: '私は韓国から来ました。', korean: '저는 한국에서 왔습니다.', romaji: 'Watashi wa Kankoku kara kimashita.', category: '자기소개', situation: '출신지 소개' },
  
  // 식당
  { japanese: 'すみません、メニューを見せてください。', korean: '죄송합니다, 메뉴를 보여주세요.', romaji: 'Sumimasen, menyuu o misete kudasai.', category: '식당', situation: '메뉴 요청' },
  { japanese: 'これをください。', korean: '이것 주세요.', romaji: 'Kore o kudasai.', category: '식당', situation: '주문' },
  { japanese: 'お会計お願いします。', korean: '계산해주세요.', romaji: 'Okaikei onegaishimasu.', category: '식당', situation: '계산 요청' },
  { japanese: 'おいしいです！', korean: '맛있어요!', romaji: 'Oishii desu!', category: '식당', situation: '맛 표현' },
  
  // 쇼핑
  { japanese: 'これはいくらですか？', korean: '이것은 얼마입니까?', romaji: 'Kore wa ikura desu ka?', category: '쇼핑', situation: '가격 물어보기' },
  { japanese: '試着してもいいですか？', korean: '입어봐도 될까요?', romaji: 'Shichaku shite mo ii desu ka?', category: '쇼핑', situation: '입어보기 요청' },
  { japanese: 'これを買います。', korean: '이것을 사겠습니다.', romaji: 'Kore o kaimasu.', category: '쇼핑', situation: '구매 결정' },
  { japanese: 'もう少し安いのはありますか？', korean: '조금 더 싼 것이 있나요?', romaji: 'Mou sukoshi yasui no wa arimasu ka?', category: '쇼핑', situation: '가격 협상' },
  
  // 길 묻기
  { japanese: 'すみません、駅はどこですか？', korean: '죄송합니다, 역은 어디입니까?', romaji: 'Sumimasen, eki wa doko desu ka?', category: '길 묻기', situation: '역 찾기' },
  { japanese: 'まっすぐ行ってください。', korean: '곧장 가세요.', romaji: 'Massugu itte kudasai.', category: '길 묻기', situation: '길 안내' },
  { japanese: '右に曲がってください。', korean: '오른쪽으로 돌아가세요.', romaji: 'Migi ni magatte kudasai.', category: '길 묻기', situation: '방향 안내' },
  
  // 일상 대화
  { japanese: '今日はいい天気ですね。', korean: '오늘은 좋은 날씨네요.', romaji: 'Kyou wa ii tenki desu ne.', category: '일상', situation: '날씨 이야기' },
  { japanese: '何時ですか？', korean: '몇 시입니까?', romaji: 'Nanji desu ka?', category: '일상', situation: '시간 물어보기' },
  { japanese: 'ありがとうございます。', korean: '감사합니다.', romaji: 'Arigatou gozaimasu.', category: '일상', situation: '감사 표현' },
  { japanese: '大丈夫です。', korean: '괜찮습니다.', romaji: 'Daijoubu desu.', category: '일상', situation: '괜찮다고 말하기' },
]
