import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import PresentationList from '../Presentation/PresentationList';
import classes from './StartingPageContent.module.css';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore'

const StartingPageContent = () => {
  const usersCollectionRef = collection(db, "users");
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPresentations, setloadedPresentations] = useState([])

  const history = useHistory();
  const toCreatePresentation = () => {
    history.push('/create-presentation')
  }

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch(
  //     'https://monday-dev-10345-default-rtdb.firebaseio.com/presentations.json'
  //   ).then((response) => {
  //     return response.json();
  //   }).then((data) => {
  //     const presentations = [];
      
  //     for (const key in data) {
  //       const presentation = {
  //         id: key,
  //         ...data[key]
  //       }
  //       presentations.push(presentation);        
  //     }

  //     setIsLoading(false)
  //     setloadedPresentations(presentations)      
  //   });    
  // }, []);

  useEffect(() => {
    setIsLoading(true);
    const getUsers = async () => {      
      const data  = await getDocs(usersCollectionRef);
      const presentations = data.docs.map((doc) => ({...doc.data(), id: doc.id}))      
      setloadedPresentations(presentations)
    }
    getUsers();
    setIsLoading(false)
  }, [usersCollectionRef])

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
