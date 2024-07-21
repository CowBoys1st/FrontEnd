import Hello from "../components/hello"
import Welcome from "../components/welcome"

export default function HomePage() {
    const data = "Pak Yanto"
    return (
        <>
            <h1>{data}</h1>
            <Hello name={data}/>
            <Welcome />
            <Link to="/about">About</Link>

        </>
  )
}