const PresentationItem = (props) => {  
  return (
    <li>      
      <p>{props.title}</p>
      {props.achievements.map((item, index) =>{
        return (
          <p key={index} >{item}</p>
        )
      })}
      {Object.keys(props.divisions).map((item, index) =>{
        return (
          <p key={index} >{item}</p>
        )
      })}
      
    </li>
  )
}

export default PresentationItem;