import { useState } from "react"

const PresentationForm = () => {
  const [inputLists, setInputList] = useState([{ achievement: "" }]);

  const submitHandle = (e) => {
    e.preventDefault()
    console.log(inputLists)
  }

  // handle input change
  const handleInputChange = (e, index) => {    
    const values = [...inputLists]
    values[index][e.target.name] = e.target.value
    setInputList(values);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputLists];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputLists, { achievement: "" }]);
  };
  return (
    <div>
      <h1>test</h1>
      <form onSubmit={submitHandle}>
        {inputLists.map((inputList, i) => {
          return (
            <div key={i} className="box">
              <input
                name="achievement"
                placeholder="Add achievement"
                value={inputList.achievement}
                onChange={e => handleInputChange(e, i)}
              />
              <div className="btn-box">
                {inputLists.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                {inputLists.length !== 1 && 
                <button onClick={() => handleRemoveClick(i)}>Remove</button>}                
              </div>
            </div>
          );
        })}
        <button>submit</button>
      </form>
    </div>
  )
}
export default PresentationForm