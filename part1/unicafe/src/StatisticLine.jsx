const StatisticLine = (props) => {
  return (
    <>
      <table>
        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </tr>
      </table>
    </>
  );
};

export default StatisticLine;
