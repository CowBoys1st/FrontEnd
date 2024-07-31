import Link from "next/link"
import { IUser } from "../type"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Users",
    description: "List of users",
}

async function getData() {
    const res = await fetch('http://localhost:2000/users', {
        next: { tags: ["users"]}
    })
        

    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }
    return res.json()
}

export default async function UsersPage() {
    const data: IUser[] = await getData()
    return (
        <div className="p-4 flex flex-col">
    {
        data.map((item) => {
            return (
                <Link href={`/users/${item.id}`} key={item.id}>{item.name}</Link>
            )
            }  
        )
    }
   </div>
    )
}