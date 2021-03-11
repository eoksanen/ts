import React from 'react';
/*
interface HeaderProps {
  courseName: string
}
interface ContentProps {
  name: string,
  exerciseCount: number
}
interface TotalProps {
  exerciseCount: number
}
*/
const Header = ({courseName}: {courseName: string}) => {

  return <h1>{courseName}</h1>

}
const Content = ({name, exerciseCount}: {name: string, exerciseCount: number}) => {

  return <p>{name} {exerciseCount}</p>

}
const Total = ({exerciseCount}: {exerciseCount: number}) => {

  return <p>Number of exercises{" "} {exerciseCount}</p>
}


const App = () => {
  const courseName = "Half Stack application development";
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  return (
    <div>

      <Header courseName = {courseName} />
      <Content name = {courseParts[0].name} exerciseCount = {courseParts[0].exerciseCount} />
      <Content name = {courseParts[1].name} exerciseCount = {courseParts[1].exerciseCount} />
      <Content name = {courseParts[2].name} exerciseCount = {courseParts[2].exerciseCount} />
      <Total exerciseCount = {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)} />

      <h1>{courseName}</h1>
      <p>
        {courseParts[0].name} {courseParts[0].exerciseCount}
      </p>
      <p>
        {courseParts[1].name} {courseParts[1].exerciseCount}
      </p>
      <p>
        {courseParts[2].name} {courseParts[2].exerciseCount}
      </p>
      <p>
        Number of exercises{" "}
        {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
      </p>
    </div>
  );
};

export default App;