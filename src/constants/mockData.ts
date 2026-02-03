export const USER_PROFILE = {
  name: "김서연",
  role: "고3 수험생",
  dDay: 230,
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
};

export const DEFAULT_CATEGORIES = [
  { id: "korean", name: "국어", color: "bg-red-200", textColor: "text-red-700" },
  { id: "english", name: "영어", color: "bg-blue-200", textColor: "text-blue-700" },
  { id: "math", name: "수학", color: "bg-green-200", textColor: "text-green-700" },
  { id: "explore", name: "탐구", color: "bg-purple-200", textColor: "text-purple-700" },
];

export const MENTOR_TASKS = [
  {
    id: 1,
    subject: "수학",
    title: "미적분 킬러문항 3개년 기출 분석",
    status: "pending",
    badgeColor: "bg-green-100 text-green-700",
    description: "2022~2024학년도 수능 미적분 30번 문제 풀이 및 오답노트 작성. 공통 패턴 정리 필수.",
    categoryId: "math",
    mentorFeedback: "아직 피드백이 등록되지 않았습니다.",
    deadline: new Date(2026, 1, 2), // Feb 2, 2026
    attachments: [
      { name: "미적분_킬러_패턴분석.pdf", type: "pdf", url: "#", previewUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80" }
    ],
    submissions: [],
    mentorComment: "",
    feedbackFiles: []
  },
  {
    id: 2,
    subject: "영어",
    title: "EBS 연계 지문 빈칸추론 20문항",
    status: "submitted",
    badgeColor: "bg-blue-100 text-blue-700",
    description: "수능특강 영어독해 3과~5과 빈칸추론 유형 집중 학습. 근거 문장 표시하며 풀이.",
    categoryId: "english",
    mentorFeedback: "과제 제출 확인했습니다. 피드백 대기 중입니다.",
    deadline: new Date(2026, 1, 2), // Feb 2, 2026
    attachments: [
      { name: "영어_빈칸추론_모음집.pdf", type: "pdf", url: "#", previewUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&q=80" }
    ],
    submissions: [
      { name: "영어과제_제출_서연.pdf", type: "pdf", url: "#", previewUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80" },
      { name: "문제풀이_사진.jpg", type: "image", url: "#", previewUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&q=80" }
    ],
    mentorComment: "",
    feedbackFiles: []
  },
  {
    id: 3,
    subject: "국어",
    title: "국어 문학 3지문",
    status: "feedback_completed",
    badgeColor: "bg-red-100 text-red-700",
    description: "EBS 연계 문학 작품 3지문 분석 및 문제 풀이",
    categoryId: "korean",
    mentorFeedback: "시어 분석이 매우 정확합니다! 특히 현대시의 상징적 의미 파악 능력이 크게 향상되었네요.",
    deadline: new Date(2026, 0, 29), // Jan 29, 2026
    attachments: [
      { name: "문학3지문_분석자료.pdf", type: "pdf", url: "#", previewUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80" }
    ],
    submissions: [
      { name: "국어숙제_제출.pdf", type: "pdf", url: "#", previewUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&q=80" }
    ],
    mentorComment: "시어 분석이 매우 정확합니다! 특히 현대시의 상징적 의미 파악 능력이 크게 향상되었네요. 다음엔 시상 전개 방식도 함께 정리해보세요.",
    feedbackFiles: []
  }
];

export const SUBJECT_TIPS = [
  {
    id: 1,
    subject: "국어",
    title: "비문학 독해, 선지부터 읽어야 하는 이유",
    desc: "시간 단축과 정확도를 동시에 잡는 독해 전략",
    color: "bg-red-100 text-red-600",
  },
  {
    id: 2,
    subject: "수학",
    title: "킬러문항 접근법: 조건 해석이 80%",
    desc: "고난도 문제를 푸는 체계적 사고 프로세스",
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    subject: "영어",
    title: "빈칸추론, 앞뒤 문장만 봐도 답 나온다",
    desc: "논리 흐름 파악으로 정답률 90% 달성하기",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 4,
    subject: "수학",
    title: "기하 벡터 문제 5분 컷 비법",
    desc: "내적과 외적 활용 패턴 완벽 정리",
    color: "bg-green-100 text-green-600",
  },
];

export const MENTOR_MESSAGES = {
  today: "성공은 매일 반복되는 작은 노력들의 합이다. - 로버트 콜리어",
  consultation: "오늘 19:00에 멘토링 상담이 예정되어 있습니다.",
  plannerComment: "오늘 하루 학습 내용과 느낀 점을 간단히 기록해주세요",
};

export const SCHEDULE_HOURS = Array.from({ length: 19 }, (_, i) => {
  const hour = i + 6;
  return hour < 10 ? `0${hour}` : `${hour}`;
});

// Weekly schedule with learning plans
export const WEEKLY_SCHEDULE = [
  {
    date: new Date(2026, 1, 2), // Feb 2, 2026
    events: [
      { id: 201, title: "국어 비문학 3지문", categoryId: "korean" },
      { id: 202, title: "수학 수1 등차수열", categoryId: "math" },
    ],
  },
  {
    date: new Date(2026, 1, 3), // Feb 3, 2026
    events: [
      { id: 203, title: "문법 강의 1강", categoryId: "korean" },
      { id: 204, title: "영어 빈칸추론 5문제", categoryId: "english" },
    ],
  },
  {
    date: new Date(2026, 0, 31), // Jan 31, 2026
    events: [
      { id: 205, title: "수학 나형 기출", categoryId: "math" },
      { id: 206, title: "국어 독서 풀이", categoryId: "korean" },
    ],
  },
  {
    date: new Date(2026, 0, 29), // Jan 29, 2026
    events: [
      { id: 207, title: "영어 단어 50개", categoryId: "english" },
      { id: 208, title: "국어 현대시 복습", categoryId: "korean" },
    ],
  }
];

// Mock Data for Calendar Heatmap & Mood
export const DAILY_RECORDS = [
  { date: new Date(2026, 0, 28), studyTime: 120, mood: "good" },
  { date: new Date(2026, 0, 29), studyTime: 240, mood: "best" },
  { date: new Date(2026, 0, 30), studyTime: 45, mood: "bad" },
  { date: new Date(2026, 0, 31), studyTime: 180, mood: "normal" },
  { date: new Date(2026, 1, 1), studyTime: 320, mood: "best" },
  { date: new Date(2026, 1, 2), studyTime: 0, mood: "worst" },
  { date: new Date(2026, 1, 3), studyTime: 150, mood: "good" },
];

export const MOOD_EMOJIS: { [key: string]: string } = {
  best: "🤩",
  good: "😊",
  normal: "😐",
  bad: "😞",
  worst: "😫"
};
