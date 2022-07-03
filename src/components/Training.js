function Training(props) {
  const {date, distance, onTrainingDelete} = props;

  return (
    <div>
      <div>{date}</div>
      <div>{distance}</div>
      <button>Modify</button>
      <button onClick={() => onTrainingDelete(date)}>Delete</button>
    </div>
  )
}

export default Training;
