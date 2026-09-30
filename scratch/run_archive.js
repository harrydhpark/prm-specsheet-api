const { archiveTask } = require('D:/TV 유럽영업/15. AX Task/2026 AX 실행과제/99. Master Agent/scripts/archive_task.js');

archiveTask({
  dateStr: '20260930',
  shortTitle: '거래선상담자료영문설명창',
  query: '2026 유럽 거래선 상담 자료_v9 PPT 영문 스크립트를 활용한 2025 거래선 상담 대시보드 우측 슬라이드 설명창 구축',
  summary: '2025 유럽 거래선 PRM 상담 자료 대시보드(48 슬라이드)의 PPT OpenXML 영문 발표 스크립트 추출 및 3단 반응형 슬라이드 설명창(TTS 음성 듣기, 영/한 듀얼 텍스트, 핵심 전달 포인트, 원클릭 복사, 슬라이드쇼 발표자 노트 연동) 구축 완료',
  dispatchedAgents: ['07. 제품 소개 사이트 자동 제작 에이전트'],
  artifactPaths: [
    'D:/TV 유럽영업/15. AX Task/2026 AX 실행과제/07. 제품 소개 사이트 자동 제작 에이전트/published/2025-prm-consulting/index.html',
    'D:/TV 유럽영업/15. AX Task/2026 AX 실행과제/07. 제품 소개 사이트 자동 제작 에이전트/published/2025-prm-consulting/style.css',
    'D:/TV 유럽영업/15. AX Task/2026 AX 실행과제/07. 제품 소개 사이트 자동 제작 에이전트/published/2025-prm-consulting/app.js',
    'D:/TV 유럽영업/15. AX Task/2026 AX 실행과제/07. 제품 소개 사이트 자동 제작 에이전트/published/2025-prm-consulting/slidesData.js'
  ],
  answerMarkdown: `
# 2025 유럽 거래선 PRM 상담 자료 대시보드 우측 발표 설명창 구축 완료 보고

## 1. 개요 및 요구사항
- 원천 자료: \`uploads/2026 유럽 거래선 상담 자료_v9.pptx\` (총 48 슬라이드)
- 대상 사이트: \`published/2025-prm-consulting\` 및 \`public_firebase/docs/2025-prm-consulting\`
- 핵심 목표: PPTX 내 영문 스피치 스크립트를 활용하여 대시보드 우측에 실시간 동기화되는 발표 설명창 구축

## 2. 주요 구현 결과
1. **3단 반응형 워크스페이스**: 좌측 목차(280px) - 중앙 슬라이드 뷰어(유동폭) - 우측 발표 설명창(400px, 접기/펼침 지원)
2. **영/한 듀얼 및 핵심 포인트**: 원본 영문 스피치 스크립트 + 국문 번역 및 상담 가이드 + Key Talking Points(3개 핵심 메시지)
3. **Web Speech API TTS 음성 듣기**: 브라우저 내장 음성 합성 엔진으로 영문 스피치 재생/일시정지/정지 지원
4. **원클릭 복사 & 폰트 크기 조절**: 영문 스크립트 클립보드 원클릭 복사 및 \`A-\` / \`A+\` 가독성 조절
5. **슬라이드쇼 발표자 노트 연동**: 전체화면 프레젠테이션 모드(📽️)에서도 \`N\` 키 또는 토글 버튼으로 반투명 발표자 노트 오버레이 제공
6. **AI 어시스턴트 일원화**: 기존 우측 플로팅 AI를 우측 사이드바의 \`[🤖 AI 질의응답]\` 탭으로 매끄럽게 통합
  `
});
