import React from "react";
import { Link } from "react-router-dom";
import "./exhibition.css";
import wordImg from "./images/empty-words.jpg";
import mother from "./images/mother.jpg";

const Exhibition = () => {
  return (
    <section className="exhibition">
      <div className="exhibition-content">
        <h1 className="exhibition-header">Выставка</h1>
        <ul className="exhibition-list">
          <li className="exhibition-item">
            <h2 className="exhibition-item-header">«Пустые слова»</h2>
            <div className="exhibition-item-content">
              <img src={wordImg} alt="" className="exhibition-item-img" />
              <p className="exhibition-item-description">
                «Наевшийся пустых слов человек начинает верить, будто постиг
                что-то важное. А ему просто добавили мусора в голову.» “Тайные
                виды на гору Фудзи”, Виктор Пелевин, 2018
              </p>
            </div>
          </li>
          <li className="exhibition-item">
            <h2 className="exhibition-item-header">«Жидкая мать»</h2>
            <div className="exhibition-item-content">
              <img src={mother} alt="" className="exhibition-item-img" />
              <p className="exhibition-item-description">
                «— Поздравляю, друзья, — устало улыбнулся Ребров, — теперь у нас
                есть жидкая мать.» «Граненые стержни вошли в их головы, плечи,
                животы и ноги. Завращались резцы, опустились пневмобатареи,
                потек жидкий фреон, головки прессов накрыли станины. Через 28
                минут спрессованные в кубики и замороженные сердца четырех
                провалились в роллер, где были маркированы по принципу игральных
                костей. Через 3 минуты роллер выбросил их на ледяное поле,
                залитое жидкой матерью. Сердца четырех остановились:6, 2, 5, 5.»
                “Голубое Сало”, Владимир Сорокин, 1999
              </p>
            </div>
          </li>
        </ul>
      </div>
      <Link to={'/'} className="exhibition-back-button">Вернуться</Link>
    </section>
  );
};

export default Exhibition;
