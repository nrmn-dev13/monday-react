const PresentationItem = (props) => {
  const { title, uFinished, uWip, uGoals} = props;  
  return (
    <li>      
      <h2>Title : {title}</h2>
      <h2>Finished : {uFinished}</h2>
      <h2>Wip : {uWip}</h2>
      <h2>Goals : {uGoals}</h2>
    </li>
  )
}

export default PresentationItem;