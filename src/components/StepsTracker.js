import { useState } from "react";
import Trainings from "./Trainings";

function StepsTracker(props) {
  const [date, setDate] = useState({value: '',});
  const [distance, setDistance] = useState({value: '',});
  const [trainings, setTrainings] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setTrainings(trainings => {
      setDate(date => ({...date, value: ''}));
      setDistance(distance => ({...distance, value: ''}));
      if (!date.value || !distance.value) {
        return [...trainings];
      }

      const index = trainings.findIndex(elem => elem.date === date.value);

      if (index !== -1) {
        trainings[index].distance = +trainings[index].distance + +distance.value;
        return [...trainings];
      }

      if (!/\d\d.\d\d.\d\d\d\d/.test(date.value)) {
        return [...trainings];
      } else {
        const splittedDate = date.value.split('.');
        const day = splittedDate[0];
        const month = splittedDate[1];
        const year = splittedDate[2]; 
        
        if (day > 31 || day <= 0 || month > 12 || month <= 0 || year <= 0) {
          return [...trainings];
        }
      }

      return [...trainings, {
        date: date.value,
        distance: distance.value,
      }].sort(function(a,b) {
        const dateA = (a.date).split('.').reverse().join('');
        const dateB  = (b.date).split('.').reverse().join('');
        return dateA > dateB ? 1 : dateA < dateB ? -1 : 0;
      });
    });
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
      <form className="training-list" onSubmit={handleSubmit}>
        <div className="labeled-input">
          <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
          <input type="text" name="date" onChange={handleDateChanged} value={date.value}></input>
        </div>
        <div className="labeled-input">
          <label htmlFor="distance">Пройдено км</label>
          <input type="text" name="distance" onChange={handleDistanceChanged} value={distance.value}></input>
        </div>
        <input className="submit-button" type="submit" value="OK"></input>
      </form>
      <Trainings trainings={trainings} onTrainingDelete={onTrainingDelete}></Trainings>
    </div>
  )
}

export default StepsTracker;
