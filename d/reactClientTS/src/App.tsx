import React from 'react';
import {CoursePartBase, CourseBackendDevelopment, CourseNewNormalPart, CourseNormalPart, CourseProjectPart, CourseSubmissionPart, CoursePart} from './types'


const courseParts: CoursePart[] = [
  {
    name: "Fundamentals",
    exerciseCount: 10,
    description: "This is the leisured course part",
    type: "normal"
  },
  {
    name: "Advanced",
    exerciseCount: 7,
    description: "This is the harded course part",
    type: "described"
  },
  {
    name: "Using props to pass data",
    exerciseCount: 7,
    groupProjectCount: 3,
    type: "groupProject"
  },
  {
    name: "Deeper type usage",
    exerciseCount: 14,
    description: "Confusing description",
    exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev",
    type: "submission"
  },
  {
    name: "Backend development",
    exerciseCount: 21,
    description: "Typing the backend",
    requirements: ["nodejs", "jest"],
    type: "special"
  },

]


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

/**
 * Helper function for exhaustive type checking
 */
 const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const partCourses = (courseParts: CoursePart[]): JSX.Element[] => {

  const part: JSX.Element[] = courseParts.map(cp => {
    switch (cp.type) {
      case "submission":
       return (
          <Part type = {cp.type} name = {cp.name} exerciseCount = {cp.exerciseCount} description = {cp.description} exerciseSubmissionLink = {cp.exerciseSubmissionLink} />
         )
       break;
     case "normal":
       return (
          <Part type = {cp.type} name = {cp.name} exerciseCount = {cp.exerciseCount} description = {cp.description}  />
         )
       break;
     case "described":
       return (
          <Part type = {cp.type} name = {cp.name} exerciseCount = {cp.exerciseCount} description = {cp.description} />
         )
       break;
     case "groupProject":
       return (
          <Part type = {cp.type} name = {cp.name} exerciseCount = {cp.exerciseCount} groupProjectCount = {cp.groupProjectCount}  />
         )
       break;
     case "special":
       return (
          <Part type = {cp.type} name = {cp.name} exerciseCount = {cp.exerciseCount} description = {cp.description} requirements = {cp.requirements} />
         )
       break;
     default:
               return assertNever(cp)
    }
  })
    return part
};

const Header = ({courseName}: {courseName: string}) => {

  return <h1>{courseName}</h1>

}
const Content = ({courseParts}: {courseParts: CoursePart[]}) => {


  return <div> {partCourses(courseParts)} </div>
  

  }
/*
  interface Props {
    name: string, 
    exerciseCount: number, 
    description?: string, 
    type: string, 
    requirements?: string[]
  }
  */
const Total = ({exerciseCount}: {exerciseCount: number}) => {

  return <p>Number of exercises{" "} {exerciseCount}</p>
}
const Part = ({name, exerciseCount, type, description, exerciseSubmissionLink, groupProjectCount, requirements}: {name: string, exerciseCount: number, description?: string, exerciseSubmissionLink?: string, groupProjectCount?: number, type: string, requirements?: string[]}) => {

  return ( 
    <div>
  
    <h3>{name} {exerciseCount}</h3>
    <p>{groupProjectCount}</p>
    <p>{description}</p>
    <p>{requirements}</p>
    <p>{exerciseSubmissionLink}</p>
  </div>
  );
};


const App = () => {

const courseName = "Half Stack application development";

  return (
    <div>

      <Header courseName = {courseName} />
      <Content courseParts = {courseParts}/>
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