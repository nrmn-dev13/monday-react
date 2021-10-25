import PresentationItem from "./PresentationItem";
import classes from './PresentationList.module.css';
const PresentationList = (props) => { 

  return (
    <ul className={classes.customList}>
      {props.presentations.map((presentation) => {
        return (
          <PresentationItem
            key={presentation.id}
            id={presentation.id}
            title={presentation.title}
            uFinished={presentation.uFinished}
            uWip={presentation.uWip}
            uGoals={presentation.uGoals}
          />
        )
      })}      
    </ul>
  )
}

export default PresentationList;