import PresentationItem from "./PresentationItem";
const PresentationList = (props) => { 

  return (
    <ul>
      {props.presentations.map((presentation) => {
        return (
          <PresentationItem
            key={presentation.id}
            title={presentation.name}            
            age={presentation.age}            
          />
        )
      })}      
    </ul>
  )
}

export default PresentationList;