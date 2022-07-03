import { useState } from "react";
import Trainings from "./Trainings";

function StepsTracker(props) {
  const [date, setDate] = useState({value: '',});
  const [distance, setDistance] = useState({value: '',});
  const [trainings, setTrainings] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    setTrainings(trainings => {
      const index = trainings.findIndex(elem => elem.date === date.value);

      if (index !== -1) {
        trainings[index].distance = +trainings[index].distance + +distance.value;
        return [...trainings];
      }

      return [...trainings, {
        date: date.value,
        distance: distance.value,
      }];
    })
  };

  const handleDateChanged = (event) => {
    setDate(date => ({...date, value: event.target.value}));
  };

  const handleDistanceChanged = (event) => {
    setDistance(distance => ({...distance, value: event.target.value}));
  };

  const onTrainingDelete = (date) => {
    setTrainings(trainings => {
      const index = trainings.findIndex(elem => elem.date === date);
      return [...trainings.slice(0, index), ...trainings.slice(index + 1)]
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
        <input type="text" name="date" onChange={handleDateChanged}></input>
        <label htmlFor="distance">Пройдено км</label>
        <input type="text" name="distance" onChange={handleDistanceChanged}></input>
        <button>OK</button>
      </form>
      <Trainings trainings={trainings} onTrainingDelete={onTrainingDelete}></Trainings>
    </div>
  )
}

export default StepsTracker;
