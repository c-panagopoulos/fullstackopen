const Part = (props) => {

  console.log(props)
  return (
    <p>
      {props.parts} {props.exercises}
    </p>
  );
};

export default Part;
