import parse from 'html-react-parser';
const PresentationItem = (props) => {
  const { title, uFinished, uWip, uGoals} = props;  
  return (
    <li className="custom-list-item">      
      <h2>Title : {title}</h2>
      <div>{parse(uFinished)}</div>
      <h2>Wip : {uWip}</h2>
      <h2>Goals : {uGoals}</h2>
    </li>
  )
}

export default PresentationItem;