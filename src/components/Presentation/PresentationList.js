import PresentationItem from "./PresentationItem";
const PresentationList = (props) => { 

  return (
    <ul className="custom-list">
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