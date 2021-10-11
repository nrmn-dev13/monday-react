import { useHistory } from 'react-router';
import classes from './StartingPageContent.module.css';

const StartingPageContent = () => {
  const history = useHistory();  
  const toCreatePresentation = () => {
    history.push('/create-presentation')
  }
  return (
    <section className={classes.starting}>
      <h1>Welcome on Board!</h1>
      <button onClick={toCreatePresentation}>Create New</button>
    </section>
  );
};

export default StartingPageContent;
