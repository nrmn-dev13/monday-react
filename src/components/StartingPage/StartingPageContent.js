import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import PresentationList from '../Presentation/PresentationList';
import classes from './StartingPageContent.module.css';

const StartingPageContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPresentations, setloadedPresentations] = useState([])

  const history = useHistory();
  const toCreatePresentation = () => {
    history.push('/create-presentation')
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://monday-dev-10345-default-rtdb.firebaseio.com/presentations.json'
    ).then((response) => {
      return response.json();
    }).then((data) => {
      const presentations = [];
      
      for (const key in data) {
        const presentation = {
          id: key,
          ...data[key]
        }
        presentations.push(presentation);
        console.log(presentation);
      }

      setIsLoading(false)
      setloadedPresentations(presentations)      
    });
  }, []);
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
