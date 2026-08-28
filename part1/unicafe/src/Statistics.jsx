const Statistics = (props) => {
  return (
  <>
    <p>good {props.good}</p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
    <p>all {props.good + props.neutral + props.bad}</p>
    <p>average {(props.good - props.bad) / (props.good + props.neutral + props.bad)}</p>
    <p>positive {(props.good / (props.good + props.neutral + props.bad)) * 100} %</p>
  </>)
};

export default Statistics;
