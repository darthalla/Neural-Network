import React from "react";
import { Link } from "react-router-dom";
import "./idea.css";

const Idea = () => {
  return (
    <section className="idea">
      <div className="idea-content">
        <h1 className="idea-header">Нейросеть рисует … </h1>
        <p className="idea-paragraph">
          Идея нашего проекта – подружить вас с нейронными сетями.
        </p>
        <p className="idea-paragraph">
          Нейронные сети – это не страшно. Они могут обрабатывать огромные
          массивы данных и выполнять такую работу, на которую не способен
          человек. А еще, также как мы, обученные нейронные сети могут создавать
          картины, писать музыку, придумывать сочинения.
        </p>
        <p className="idea-paragraph">
          Нам стало особенно интересно, как нейросети умеют визуализировать
          текст. Чтобы сделать проект интереснее, мы решили загадать нейросети
          некоторые метафоричные цитаты из литературы, а вам предлагаем посетить
          нашу выставку картин, авторства нейросети.
        </p>
        <Link to={"/exhibition"} className="idea-link">
          Перейти на выставку
        </Link>
      </div>
    </section>
  );
};

export default Idea;
