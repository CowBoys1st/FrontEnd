import FormCreate from "@/components/createForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "My app | Create User",
    description: "Create a new user",  
}
export default function CreateUser () {
    return (
        <div>
            <FormCreate />
        </div>
    )
}