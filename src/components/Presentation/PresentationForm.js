import { useForm } from "./useForm";
import classes from './PresentationForm.module.css';
import { useHistory } from "react-router-dom";

const initialValues = {
  title: '',
  uiFinished: '',
  uiWip: '',
  uiGoals: '',
}

const PresentationForm = (props) => {
  const history = useHistory();
  const [values, handleChange] = useForm(initialValues)
  const { title, uiFinished, uiWip, uiGoals } = values

  const submitHandle = (e) => {
    e.preventDefault()
    const presentationData = {
      title: title,
      uFinished: uiFinished,
      uWip: uiWip,
      uGoals: uiGoals,
    }
    props.onAddPresentation(presentationData);
    history.replace('/');
  }
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
              value={title}
              onChange={handleChange}
            />
          </div>
          <div className={classes.formField}>
            <label htmlFor="title" className="label">UI Finished</label>
            <textarea 
              name="uiFinished" 
              id="uiFinished" 
              cols="30" 
              rows="3"
              placeholder="Finished"
              value={uiFinished}
              onChange={handleChange}></textarea>
          </div>
          <div className={classes.formField}>
            <label htmlFor="title" className="label">UI Wip</label>
            <textarea 
              name="uiWip" 
              id="uiWip" 
              cols="30" 
              rows="3"
              placeholder="Work In Progress"
              value={uiWip}
              onChange={handleChange}></textarea>
          </div>
          <div className={classes.formField}>
            <label htmlFor="title" className="label">UI Goals</label>
            <textarea 
              name="uiGoals" 
              id="uiGoals" 
              cols="30" 
              rows="3"
              placeholder="Goals"
              value={uiGoals}
              onChange={handleChange}></textarea>
          </div>
        </div>
        <button>submit</button>
      </form>
    </div>
  )
}
export default PresentationForm