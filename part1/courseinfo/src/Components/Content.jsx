import Part from "./Part";

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.part} exercises={props.exercises} />
    </div>
  );
};

export default Content;
