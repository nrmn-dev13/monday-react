import { useState } from "react";

export const useTextarea = (initialValues) => {
  const [textarea, setTextarea] = useState(initialValues)

  return [
    textarea,
    e, editor => {
      setTextarea({
        ...textarea,
        [e.target.name]: e.target.value
      })
    }
  ]
}
