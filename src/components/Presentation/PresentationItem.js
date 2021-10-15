const PresentationItem = (props) => {
  const { title, achievements, divisions, roles, wips, finisheds, goals } = props;
  const roleValues = roles.map((role, index) => {return (<h4 key={index} ><p>Role: {role}</p></h4>)})
  const goalsValue = goals.map((goal, index) => {return (<h4 key={index} ><p>Goals: {goal}</p></h4>)})
  const finishedValue = finisheds.map((finished, index) => {return (<h4 key={index} ><p>Finished: {finished}</p></h4>)})
  const wipValues = wips.map((wip, index) => {return (<h4 key={index} ><p>Work In Progress: {wip}</p></h4>)})
  return (
    <li>
      {/* <p>{props.title}</p>
      <p>{props.address}</p> */}
      <h2>{title}</h2>
      <h4>Achievement</h4>
      {achievements.map((achievement, index) =>{
        return (
          <div key={index}>            
            <p>{achievement}</p>
          </div>
        )
      })}
      <div>
        {roleValues}
        {wipValues}
        {finishedValue}
        {goalsValue}
      </div>
      {/* <p>{divisions}</p> */}
      
      {/* {roles.map((role, index) =>{
        return (
          <p key={index} >{role}</p>
        )
      })} */}      
      {/* <p>{divisions}</p> */}
      {/* {props.divisions.map((item, index) =>{
        return (
          <p key={index} >{item}</p>
        )
      })} */}

    </li>
  )
}

export default PresentationItem;