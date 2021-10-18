import PresentationForm from "../components/Presentation/PresentationForm";
import { db } from "../firebase";
import { collection, addDoc } from 'firebase/firestore'
const NewPresentationPage = () => {
  const usersCollectionRef = collection(db, "presentations");
  const addPresentationHandler = async (presentationData) => {    
    await addDoc(usersCollectionRef, presentationData);
  }
  return (
    <div>      
      <PresentationForm onAddPresentation={addPresentationHandler}/>
    </div>
  )
}

export default NewPresentationPage;