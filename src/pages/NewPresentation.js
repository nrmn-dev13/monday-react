import PresentationForm from "../components/Presentation/PresentationForm";
const NewPresentationPage = () => {
  const addPresentationHandler = (presentationData) => {
    fetch(
      'https://monday-dev-10345-default-rtdb.firebaseio.coms/presentations.json',
      {
        method: 'POST',
        body: JSON.stringify(presentationData),
        header: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      // 
    });
  }
  return (
    <div>
      <h1>Presentation Page</h1>
      <PresentationForm onAddPresentation={addPresentationHandler}/>
    </div>
  )
}

export default NewPresentationPage;