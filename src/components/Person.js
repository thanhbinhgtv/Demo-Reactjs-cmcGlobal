import React, { useState } from "react";
import PersonDate from "./PersonDate";
import "./Person.css";
import Card from "./Card";

const Person = ({ hello, changeCount, age, children, name }) => {
  const [toggle, setToggle] = useState(true);
  const [text, setText] = useState(hello);

  const changeToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  const changeText = (e) => {
    e.preventDefault();
    if (text === "Hello After") {
      setText("Hello Before");
      console.log(text);
    } else {
      setText("Hello After");
      console.log(text);
    }
  };

  return (
    <>
      <form onSubmit={changeText}>
        <button onClick={() => changeToggle()}>Toggle</button>
        <button onClick={() => changeText()}>Change Text</button>
        <button type='submit'>Submit</button>
        <input type="number" onChange={changeCount} value={age}></input>
      </form>
      {toggle === true ? (
        <Card>
          <PersonDate hello={text}></PersonDate>
          <p className="person">This a Persion</p>
          <p className="abc">
            This name : {name} - This age : {age} {children}
          </p>
        </Card>
      ) : null}
    </>
  );
};

export default Person;
