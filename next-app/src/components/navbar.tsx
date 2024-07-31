import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex h-10 bg-teal-500 justify-center items-center gap-5">
        <Link href={'/'}>Home</Link>
        <Link href={'/users'}>Users</Link>
        <Link href={'/users/create'}>Create</Link>
        <Link href={'/about-us'}>About Us</Link>
    </div>
  )
}

export default Navbar