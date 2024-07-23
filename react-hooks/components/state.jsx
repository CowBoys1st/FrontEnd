import {useEffect, useState} from 'react'

const State = () => {
    const [count, setCount] = useState(0)

    const increment = (num) => {
        setCount(count + num)
        console.log(count);
    };

    useEffect(() => {
        document.title = `Dosa kamu sebanyak ${count}`
    }, [count])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => increment(5)}>Tambah pahala</button>
    </div>
  )
}

export default State