import React from 'react'
import Part from './Part'

const Content = ({ course }) => {
    return (
      <div>
        {/* <Part part={course.parts[0]} />
        <Part part={course.parts[1]} />
        <Part part={course.parts[2]} />
        <Part part={course.parts[3]} /> */}
        {course.parts.map(part => 
            <Part key={part.id} part={part}/>
        )}
      </div>
    )
  }

export default Content