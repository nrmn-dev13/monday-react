const PresentationItem = (props) => {
  const { title, achievements, divisions } = props;
  return (
    <li>
      {/* <p>{props.title}</p>
      <p>{props.address}</p> */}
      <p>{title}</p>
      <p>{divisions}</p>
      
      {achievements.map((achievement, index) =>{
        return (
          <p key={index} >{achievement}</p>
        )
      })}
      {/* <p>{props.divisions}</p> */}
      {/* {props.divisions.map((item, index) =>{
        return (
          <p key={index} >{item}</p>
        )
      })} */}

    </li>
  )
}

export default PresentationItem;