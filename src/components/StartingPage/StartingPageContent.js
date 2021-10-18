import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import PresentationList from '../Presentation/PresentationList';
import classes from './StartingPageContent.module.css';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore'

const StartingPageContent = () => {
  const usersCollectionRef = collection(db, "presentations");
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPresentations, setloadedPresentations] = useState([])

  const history = useHistory();
  const toCreatePresentation = () => {
    history.push('/create-presentation')
  }  

  useEffect(() => {
    const getUsers = async () => {      
      setIsLoading(true);
      const data  = await getDocs(usersCollectionRef);
      const presentations = data.docs.map((doc) => ({...doc.data(), id: doc.id}))      
      setIsLoading(false)
      setloadedPresentations(presentations)
    }
    getUsers();
  }, [])

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }
  return (
    <section className={classes.starting}>
      <h1>Welcome on Board!</h1>
      <button onClick={toCreatePresentation}>Create New</button>
      <PresentationList presentations={loadedPresentations} />
    </section>
  );
};

export default StartingPageContent;
