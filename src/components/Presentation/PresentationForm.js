import { useState } from "react"
import { useForm } from "./useForm";
import classes from './PresentationForm.module.css';

const PresentationForm = (props) => {
  const [achievementLists, setAchievementLists] = useState([{ achievement: "" }]);
  const [divisionLists, setDivisionLists] = useState([{ role: "", finished: "", wip: "", goals: "" }]);
  const [values, handleChange] = useForm({ title: '' })

  const submitHandle = (e) => {
    e.preventDefault()    
    const presentationData = {
      title: values.title,
      achievements: achievementLists,
      divisions: divisionLists
    }
    console.log(presentationData);
    //props.onAddPresentation(presentationData);
  }

  // handle input change
  const handleInputChange = (e, index) => {
    const achievementValues = [...achievementLists]
    achievementValues[index][e.target.name] = e.target.value
    setAchievementLists(achievementValues);
  };
  const handleDivisionInputChange = (e, index) => {
    const divisiontValues = [...divisionLists]
    divisiontValues[index][e.target.name] = e.target.value
    setDivisionLists(divisiontValues);
  };

  // // handle click event of the Remove button
  const handleRemoveClick = index => {
    const currentAchievement = [...achievementLists];
    currentAchievement.splice(index, 1);
    setAchievementLists(currentAchievement);
  };
  const handleRemoveDivision = index => {
    const currentDivision = [...divisionLists];
    currentDivision.splice(index, 1);
    setDivisionLists(currentDivision);
  };

  // // handle click event of the Add button
  const handleAddClick = () => {
    setAchievementLists([...achievementLists, { achievement: "" }]);
  };
  const handleAddDivision = () => {
    setDivisionLists([...divisionLists, { role: "", finished: "", wip: "", goals: "" }]);
  };
  return (
    <div>
      <h1>test</h1>
      <form className={classes.form} onSubmit={submitHandle}>
        <div className={classes.formGroup}>
          <div className={classes.formField}>
            <label htmlFor="title" className="label">Title</label>
            <input
              id="title"
              name="title"
              placeholder="Title"
              value={values.title}
              onChange={handleChange}
            />
          </div>
        </div>
        {achievementLists.map((achievementList, i) => {
          return (
            <div key={i} className={classes.formGroup}>
              <div className={classes.formField}>
                <label htmlFor="achievement" className="label">Achievement</label>
                <input
                  name="achievement"
                  placeholder="Add achievement"
                  value={achievementList.achievement}
                  onChange={e => handleInputChange(e, i)}
                />
              </div>
              <div className="btn-formGroup">
                {achievementLists.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                {achievementLists.length !== 1 &&
                  <button onClick={() => handleRemoveClick(i)}>Remove</button>}
              </div>
            </div>
          );
        })}
        {divisionLists.map((divisionList, i) => {
          return (
            <div key={i} className="formGroup formGroup--multiple">
              <div className={classes.formField}>
                <label htmlFor="role" className="label">Role</label>
                <input
                  name="role"
                  placeholder="Role"
                  value={divisionList.role}
                  onChange={e => handleDivisionInputChange(e, i)}
                />
              </div>
              <div className={classes.formField}>
                <label htmlFor="finished" className="label">Finished</label>
                <input
                  name="finished"
                  placeholder="Finished"
                  value={divisionList.finished}
                  onChange={e => handleDivisionInputChange(e, i)}
                />
              </div>
              <div className={classes.formField}>
                <label htmlFor="wip" className="label">WIP</label>
                <input
                  name="wip"
                  placeholder="WIP"
                  value={divisionList.wip}
                  onChange={e => handleDivisionInputChange(e, i)}
                />
              </div>
              <div className={classes.formField}>
                <label htmlFor="goals">Goals</label>
                <input
                  name="goals"
                  placeholder="Goals"
                  value={divisionList.goals}
                  onChange={e => handleDivisionInputChange(e, i)}
                />
              </div>
              <div className="btn-formGroup">
                {divisionLists.length - 1 === i && <button onClick={handleAddDivision}>Add</button>}
                {divisionLists.length !== 1 &&
                  <button onClick={() => handleRemoveDivision(i)}>Remove</button>}
              </div>
            </div>
          );
        })}
        <button>submit</button>
      </form>
    </div>
  )
}
export default PresentationForm