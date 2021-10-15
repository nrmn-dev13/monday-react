import PresentationItem from "./PresentationItem";
const PresentationList = (props) => {
  // const {data} = props;
  // const output = data.map((item)=>{
  //   return item.vehicles.map((vh)=>Object.values(vh)).join(', ')
  // })  

  return (
    <ul>
      {props.presentations.map((presentation) => {
        return (
          <PresentationItem
            key={presentation.id}
            title={presentation.title}
            achievements={presentation.achievements.map((sub) => sub.achievement)}
            roles={presentation.divisions.map((role) => role.role)}
            wips={presentation.divisions.map((wip) => wip.wip)}
            finisheds={presentation.divisions.map((finished) => finished.finished)}
            goals={presentation.divisions.map((goal) => goal.goals)}
            divisions={presentation.divisions.map((division)=>Object.values(division)).join(' , ')}
          />
        )
      })}
      {/* {props.data.map((item) => {
        return (
          <PresentationItem
            key={item.id}
            title={item.title}            
            address={item.address}            
            vehicles={item.vehicles}
          />
        )
      })} */}
    </ul>
  )
}

export default PresentationList;