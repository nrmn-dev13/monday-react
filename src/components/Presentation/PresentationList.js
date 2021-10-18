import PresentationItem from "./PresentationItem";
const PresentationList = (props) => { 

  return (
    <ul>
      {props.presentations.map((presentation) => {
        return (
          <PresentationItem
            key={presentation.id}
            title={presentation.title}
            achievements={presentation.achievements.map((sub) => sub.achievement)}
          />
        )
      })}      
    </ul>
  )
}

export default PresentationList;