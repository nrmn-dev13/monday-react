import { useState } from "react"
import { useForm } from "./useForm";
import classes from './PresentationForm.module.css';

const PresentationForm = (props) => {
  const [achievementLists, setAchievementLists] = useState([{ achievement: "" }]);  
  const [values, handleChange] = useForm({ title: '' })  

  const submitHandle = (e) => {
    e.preventDefault()    
    const presentationData = {
      title: values.title,
      achievements: achievementLists,      
    }    
    props.onAddPresentation(presentationData);    
  }

  // handle input change
  const handleInputChange = (e, index) => {
    const achievementValues = [...achievementLists]
    achievementValues[index][e.target.name] = e.target.value
    setAchievementLists(achievementValues);
  };  

  // // handle click event of the Remove button
  const handleRemoveClick = index => {
    const currentAchievement = [...achievementLists];
    currentAchievement.splice(index, 1);
    setAchievementLists(currentAchievement);
  };  

  // // handle click event of the Add button
  const handleAddClick = () => {
    setAchievementLists([...achievementLists, { achievement: "" }]);
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
        <button>submit</button>
      </form>
    </div>
  )
}
export default PresentationForm