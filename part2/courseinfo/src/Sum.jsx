const Sum = ({ exercises }) => {
  const total = exercises.reduce(
    (acc, exercisesItems) => acc + exercisesItems.exercises,
    0,
  );

  return <p>total of {total} exercises</p>;
};

export default Sum;
