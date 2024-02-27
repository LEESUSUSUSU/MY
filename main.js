document.addEventListener('DOMContentLoaded', function() {
    // 프로젝트 수행 배경 섹션
    const backgroundSection = document.createElement('section');
    const backgroundTitle = document.createElement('h2');
    backgroundTitle.textContent = '프로젝트 수행 배경';
    const backgroundContent = document.createElement('p');
    backgroundContent.textContent = '[프로젝트 수행 배경 요약 내용]';
    backgroundSection.appendChild(backgroundTitle);
    backgroundSection.appendChild(backgroundContent);

    // 문제 개요 섹션
    const issueSection = document.createElement('section');
    const issueTitle = document.createElement('h2');
    issueTitle.textContent = '문제 개요';
    const issueContent = document.createElement('p');
    issueContent.textContent = '[문제 정의 및 목적 요약 내용]';
    issueSection.appendChild(issueTitle);
    issueSection.appendChild(issueContent);

    // 데이터 셋 출처 및 설명 섹션
    const datasetSection = document.createElement('section');
    const datasetTitle = document.createElement('h2');
    datasetTitle.textContent = '데이터 셋 출처 및 설명';
    const datasetContent = document.createElement('p');
    datasetContent.textContent = '[데이터 셋 설명 요약 내용]';
    datasetSection.appendChild(datasetTitle);
    datasetSection.appendChild(datasetContent);

    // 이상 감지 모델 구축 섹션
    const modelSection = document.createElement('section');
    const modelTitle = document.createElement('h2');
    modelTitle.textContent = '이상 감지 모델 구축';
    const modelContent = document.createElement('p');
    modelContent.textContent = '[모델 구축 과정 요약 내용]';
    modelSection.appendChild(modelTitle);
    modelSection.appendChild(modelContent);

    // 최종 결론 섹션
    const conclusionSection = document.createElement('section');
    const conclusionTitle = document.createElement('h2');
    conclusionTitle.textContent = '최종 결론';
    const conclusionContent = document.createElement('p');
    conclusionContent.textContent = '[결론 요약 내용]';
    conclusionSection.appendChild(conclusionTitle);
    conclusionSection.appendChild(conclusionContent);

    // 모든 섹션을 main 요소에 추가
    const mainElement = document.querySelector('main');
    mainElement.appendChild(backgroundSection);
    mainElement.appendChild(issueSection);
    mainElement.appendChild(datasetSection);
    mainElement.appendChild(modelSection);
    mainElement.appendChild(conclusionSection);
});
