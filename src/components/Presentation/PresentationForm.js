import { useForm } from "./useForm";
import classes from './PresentationForm.module.css';
import { useHistory } from "react-router-dom";

const initialValues = {
  title: "",
  age: 0
}

const PresentationForm = (props) => {
  const history = useHistory();
  const [values, handleChange] = useForm(initialValues)
  const {title, age} = values

  const submitHandle = (e) => {
    e.preventDefault()    
    const presentationData = {
      name: title,      
      age: Number(age),      
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
            <label htmlFor="title" className="label">Title</label>
            <input
              id="age"
              name="age"
              placeholder="age"
              value={age}
              onChange={handleChange}
            />
          </div>
        </div>        
        <button>submit</button>
      </form>
    </div>
  )
}
export default PresentationForm