import parse from 'html-react-parser';
import { db } from '../../firebase';
import { deleteDoc, doc } from 'firebase/firestore'
import classes from './PresentationItem.module.css';

const PresentationItem = (props) => {
  const { id, title, uFinished, uWip, uGoals} = props;

  const deletePresentation = async (id) => {
    const userDoc = doc(db, "presentations", id)    
    await deleteDoc(userDoc)
    window.location.reload();
  }

  return (
    <li id={id} className={classes.customListItem}>
      <h2>Title : {title}</h2>
      <div>{parse(uFinished)}</div>
      <h2>Wip : {uWip}</h2>
      <h2>Goals : {uGoals}</h2>
      <div className="action">
        <button>Edit</button>
        <button onClick={() => {deletePresentation(id)}}>Delete</button>
      </div>
    </li>
  )
}

export default PresentationItem;