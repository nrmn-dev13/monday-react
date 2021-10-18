const PresentationItem = (props) => {
  const { title, achievements} = props;  
  return (
    <li>      
      <h2>{title}</h2>
      <h4>Achievement</h4>
      {achievements.map((achievement, index) =>{
        return (
          <div key={index}>            
            <p>{achievement}</p>
          </div>
        )
      })}
    </li>
  )
}

export default PresentationItem;