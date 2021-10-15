const PresentationItem = (props) => {
  const { title, achievements, divisions, roles, wips, finisheds, goals } = props;
  const roleValues = roles.map((role, index) => {return (<p key={index} >Role: {role}</p>)})
  const goalsValue = goals.map((goal, index) => {return (<p key={index} >Goals: {goal}</p>)})
  const finishedValue = finisheds.map((finished, index) => {return (<p key={index} >finished: {finished}</p>)})
  const wipValues = wips.map((wip, index) => {return (<p key={index} >Work In Progress: {wip}</p>)})
  return (
    <li>
      {/* <p>{props.title}</p>
      <p>{props.address}</p> */}
      <p>{title}</p>
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