// const clockHeader = document.querySelector(".status-bar__clock");
const clockHeader = document.getElementsByClassName("status-bar__clock")[0];
// getElementByClassName  엘리먼트를 이용할 경우  클래스 이름에 해당하는 모든 엘리먼트를 가져와 배열 형식으로 저장하기 때문에 필요한 부분을 불러와야 한다

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  clockHeader.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
