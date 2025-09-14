import React, { useState, useEffect } from "react";

function Timer() {
  const [inputValue, setInputValue] = useState(""); // поле ввода
  const [timeLeft, setTimeLeft] = useState(0); // текущее значение таймера
  const [isActive, setIsActive] = useState(false); // запущен ли таймер

  useEffect(() => {
    let timerId;

    if (isActive && timeLeft > 0) {
      timerId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      setIsActive(false);
      alert("Время вышло!");
    }

    return () => clearInterval(timerId);
  }, [isActive, timeLeft]);

  const handleStart = () => {
    const seconds = parseInt(inputValue, 10);
    if (!isNaN(seconds) && seconds > 0) {
      setTimeLeft(seconds);
      setIsActive(true);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>⏳ Таймер обратного отсчета</h1>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите секунды"
      />
      <button onClick={handleStart}>Старт</button>
      <h2>{timeLeft > 0 ? timeLeft : 0}</h2>
    </div>
  );
}

export default Timer;
