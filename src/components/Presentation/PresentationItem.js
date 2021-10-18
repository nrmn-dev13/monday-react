const PresentationItem = (props) => {
  const { title} = props;  
  return (
    <li>      
      <h2>{title}</h2>     
    </li>
  )
}

export default PresentationItem;