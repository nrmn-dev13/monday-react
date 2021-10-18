import { useState } from "react";

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues)
  const changeHandler = (event, editor) => {
    const data = editor.getData()
    setValues(data)
  }

  return [
    values,
    e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      })
    },
    changeHandler
  ]
}
