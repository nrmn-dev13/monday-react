import { useState } from "react";

export const useDynamicInput = (initialValues) => {
  const [multipleValues, setMultipleValues] = useState(initialValues)
  const handleRemoveClick = index => {
    const list = [...multipleValues];
    list.splice(index, 1);
    setMultipleValues(list);
  };
  // handle click event of the Add button
  const handleAddClick = () => {
    setMultipleValues([...multipleValues, { initialValues }]);
  };

  return [
    multipleValues,
    (e, index) => {
      setMultipleValues({
        ...multipleValues[index],
        [e.target.name]: e.target.value
      })
    },
    handleRemoveClick,
    handleAddClick
  ]
}

