import Training from "./Training";

function Trainings(props) {
  const {trainings, onTrainingDelete} = props;

  return (
    <div>
      <label>Дата (ДД.ММ.ГГ)</label>
      <label>Пройдено км</label>
      <label>Действия</label>
      <ul>
        {trainings.map((training) => {
          return <li key={training.date}>
                    <Training 
                      date={training.date} 
                      distance={training.distance}
                      onTrainingDelete={onTrainingDelete}>
                    </Training>
                </li>
        })}
      </ul>
    </div>
  )
}

export default Trainings;
