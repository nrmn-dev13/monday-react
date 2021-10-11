import { useState } from "react"
import { useForm } from "./useForm";

const PresentationForm = () => {
  const [achievementLists, setAchievementLists] = useState([{ achievement: "" }]);
  const [divisionLists, setDivisionLists] = useState([{ role: "", finished: "", wip: "", goals: "" }]);
  const [values, handleChange] = useForm({ title: '' })  

  const submitHandle = (e) => {
    e.preventDefault()    
    const data = {
      title: values.title,      
      achievements: achievementLists,
      division: divisionLists
    }
    console.log(data);
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
      <form onSubmit={submitHandle}>
        <div className="box">
          <input
            name="title"
            placeholder="Title"
            value={values.title}
            onChange={handleChange}
          />
        </div>              
        {achievementLists.map((achievementList, i) => {
          return (
            <div key={i} className="box">
              <input
                name="achievement"
                placeholder="Add achievement"
                value={achievementList.achievement}
                onChange={e => handleInputChange(e, i)}
              />
              <div className="btn-box">
                {achievementLists.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                {achievementLists.length !== 1 &&
                  <button onClick={() => handleRemoveClick(i)}>Remove</button>}
              </div>
            </div>
          );
        })}
        {divisionLists.map((divisionList, i) => {
          return (
            <div key={i} className="box">
              <input
                name="role"
                placeholder="Role"
                value={divisionList.role}
                onChange={e => handleDivisionInputChange(e, i)}
              />
              <input
                name="finished"
                placeholder="Finished"
                value={divisionList.finished}
                onChange={e => handleDivisionInputChange(e, i)}
              />
              <input
                name="wip"
                placeholder="WIP"
                value={divisionList.wip}
                onChange={e => handleDivisionInputChange(e, i)}
              />
              <input
                name="goals"
                placeholder="Goals"
                value={divisionList.goals}
                onChange={e => handleDivisionInputChange(e, i)}
              />
              <div className="btn-box">
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