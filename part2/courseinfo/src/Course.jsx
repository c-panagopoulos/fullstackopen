import Header from "./Header";
import Content from "./Content";
import Sum from "./Sum";

const Course = ({course})  => {
return(
    <>
    <Header name = {course.name}/>
    <Content parts ={course.parts}/>
    <Sum exercises ={course.parts} />
    </>
    )
}

export default Course;