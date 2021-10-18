import PresentationItem from "./PresentationItem";
const PresentationList = (props) => { 

  return (
    <ul>
      {props.presentations.map((presentation) => {
        return (
          <PresentationItem
            key={presentation.id}
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