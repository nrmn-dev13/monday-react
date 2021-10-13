import PresentationItem from "./PresentationItem";
const PresentationList = (props) => {
  return (
    <ul>
      {props.presentations.map((presentation) => {
        return (
          <PresentationItem
            key={presentation.id}
            title={presentation.title}
            achievements={presentation.achievements.map((sub) => {
              return sub.achievement
            })}
            divisions={presentation.divisions.map((sub) => {
              return sub
            })}
          />
        )
      })}
      {/* {props.data.map((item) => {
        return (
          <PresentationItem
            key={item.id}
            title={item.title}            
            address={item.address}
            vehicle={item.vehicle.map((sub) => {
              return sub.car
            })}
          />
        )
      })} */}
    </ul>
  )
}

export default PresentationList;