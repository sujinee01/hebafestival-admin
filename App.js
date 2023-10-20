import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 실행되도록 함

  const formattedTime = () => {
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let period = hour >= 12 ? "PM" : "AM";

    // Converting the hour in 12-hour format
    hour = hour % 12 || 12;

    // Updating hour, minute, and second if they are less than 10
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    return `${hour} : ${minute} : ${second} ${period}`;
  };

  const [notifications, setNotifications] = useState([]); // 알림을 저장할 상태

  // 새로운 알림이 도착했을 때 호출되는 함수
  const handleNewNotification = () => {
    const newNotification = {
      id: new Date().getTime(),
      message: "새로운 알림이 도착했습니다!",
    };
    setNotifications([...notifications, newNotification]);
  };

  // 알림을 닫는 함수
  const closeNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="admin_body">
      <header>
        <div class="admin_header">
          <div class="main-title">
            <span>
              바른생각
              <br />
              바른주점
            </span>
          </div>
          <div className="digital-clock">{formattedTime()}</div>
        </div>
        <div class="title-alarm">
          <p class="title-notice">
            <strong>NOTICE</strong>
            <img className="bell-image" alt="bell" src="./public/bell.png" />
          </p>
        </div>
        <div class="bottom-line"></div>
      </header>
      <nav class="admin_nav">
        <div class="info_table">
          <p class="info_title">남자 테이블 수</p>
          <div class="info_num">1</div>
        </div>
        <div class="info_table">
          <p class="info_title">여자 테이블 수</p>
          <div class="info_num">1</div>
        </div>
        <div class="info_table">
          <p class="info_title">혼성 테이블 수</p>
          <div class="info_num">1</div>
        </div>
        <div class="info_table">
          <p class="info_title">합성 테이블 수</p>
          <div class="info_num">1</div>
        </div>
        <div class="info_table">
          <p class="info_title">빈 테이블 수</p>
          <div class="info_num">1</div>
        </div>
      </nav>
      <div class="admin_container">
        <button class="table_choice">선택</button>
      </div>

      <footer>
        <div class="admin-footer">
          <div class="footer-button">
            <button class="time-plus">시간 추가</button>
            <button class="heart-plus">하트 충전</button>
            <button class="table-exit">퇴장 처리</button>
            <button class="table-mix">합석 처리</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
