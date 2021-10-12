import { useState } from "react";

export const useDynamicInput = (initialValues) => {
  const [multipleValues, setMultipleValues] = useState(initialValues);

  const handleAddClicks = () => {
    setMultipleValues([...multipleValues, { initialValues }]);
  };
  const handleRemoveClicks = index => {
    const curField = [...multipleValues];
    curField.splice(index, 1);
    setMultipleValues(curField);
  };  

  return [
    multipleValues,
    (e, index) => {
      const curValues = [...multipleValues]
      curValues[index][e.target.name] = e.target.value
      setMultipleValues(curValues);
    },
    handleAddClicks,
    handleRemoveClicks    
  ]
}
