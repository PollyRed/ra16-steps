function Training(props) {
  const {date, distance, onTrainingDelete} = props;

  return (
    <div className="list-item">
      <div className="training-field">{date}</div>
      <div className="training-field">{distance}</div>
      <button className="training-field" onClick={() => onTrainingDelete(date)}>Delete</button>
    </div>
  )
}

export default Training;
