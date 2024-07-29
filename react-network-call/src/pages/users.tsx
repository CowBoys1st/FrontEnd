import axios from "axios";
import { useEffect, useState } from "react";
import { IUser } from "../type";

const Users = () => {
  const [users, setUSers] = useState<IUser[]>([])

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:2000/users")
      // console.log(res.data);
      setUSers(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect (() => {
    getData()
  }, []);

  return (
    <div className="flex justify-center mt-2 rounded">
      <table className="table-auto w-6/12 border-2 border-teal-700 shadow-2xl">
        <thead className="bg-teal-400 text-center border-2 border-teal-700">
          <tr>
            <th className="py-2 border-2 border-teal-500">id</th>
            <th className="py-2 border-2 border-teal-500">name</th>
            <th className="py-2 border-2 border-teal-500">email</th>
            <th className="py-2 border-2 border-teal-500">age</th>
          </tr>
        </thead>
        <tbody className="">
          {users.map((item) => {
            return (
              <tr key={item.id} className="bg-teal-200 cursor-pointer duration-300 hover:bg-teal-100 hover:scale-95">
                <td className="py-2 px-2 border-2 border-teal-500">{item.id}</td>
                <td className="py-2 px-2 border-2 border-teal-500">{item.name}</td>
                <td className="py-2 px-2 border-2 border-teal-500">{item.email}</td>
                <td className="py-2 px-2 border-2 border-teal-500">{item.age}</td>
              </tr>
            )
          })}
        </tbody>

      </table>
    </div>
  )
}

export default Users