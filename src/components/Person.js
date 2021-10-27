import React from "react";
import PersonDate from "./PersonDate";
import './Person.css'
import Card from "./Card";

const Person = (props) => {

  return (
    <>
    <button onClick={props.onClick('ss')}>Click Me</button>

    <Card>
      <PersonDate hello={props.hello}></PersonDate>
      <p className="person">This a Persion</p>
      <p className="abc">
        This name : {props.name} - This age : {props.age} {props.children}
      </p>
    </Card>
    </>
  );
};

export default Person;
