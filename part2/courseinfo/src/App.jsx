const Header = ({courseName}) => {
  return <h1>{courseName}</h1>
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => <Part key={part.id} part={part} />)}
    </div>
  )
}

const Total = ({parts}) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <strong>Total of {total} exercises</strong>
  )
}

const Course = ({course}) => {
  return (
    <div>
     <Header courseName={course.name} />
     <Content parts={course.parts} />
     <Total parts={course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half stack application development',
    parts: [
      { name: 'Fundamentals of react', exercises: 10, id: 1 },
      { name: 'Using props to pass data', exercises: 7, id: 2 },
      { name: 'State of a component', exercises: 14, id: 3 }
    ]
  }

  return <Course course={course} />
}

export default App
