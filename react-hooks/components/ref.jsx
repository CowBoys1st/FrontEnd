import {useRef, useState} from "react"

const Ref = () => {
    const inputRef = useRef()
    const [elementRef, setElementRef] = useState("");

    const handleSubmit = () => {
        console.log(inputRef.current.value)
        setElementRef(inputRef.current.value)
    }
  return (
    <div>
        <h2>Dosa kamu adalah: {elementRef}</h2>
        <input type="text" ref={inputRef} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Ref