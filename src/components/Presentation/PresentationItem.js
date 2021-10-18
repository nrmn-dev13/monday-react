const PresentationItem = (props) => {
  const { title, age} = props;  
  return (
    <li>      
      <h2>{title}</h2>     
      <h2>{age}</h2>     
    </li>
  )
}

export default PresentationItem;