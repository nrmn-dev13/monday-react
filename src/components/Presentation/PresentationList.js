import PresentationItem from "./PresentationItem";
const PresentationList = (props) => {
  return (
    <ul>
      {props.presentations.map((presentation) => {
        return (
          <PresentationItem
            key={presentation.id}
            title={presentation.title}
            achievements={presentation.achievements}
            divisions={presentation.divisions}
          />
        )
      })}
    </ul>
  )
}

export default PresentationList;