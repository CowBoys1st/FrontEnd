
'use client'
import { tagRevalidate } from '@/app/action';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';

const createSchema = yup.object().shape({
    name: yup.string().required("name is required"),
    email: yup.string().email("invalid email format").required("email is required"),
    age: yup.number().required("age is required").min(1, "minimal age is 1")
})

interface FormValue {
    name: string;
    email: string;
    age: number;
}

export default function CreateUser() {
    const initialValues: FormValue = {name: "", email: "", age: 0}
    const handleCreate = async (data: FormValue) => {
        try {
            const res = await fetch("http://localhost:2000/users", {
                method: "POST",
                body: JSON.stringify(data)
            })
            if(!res.ok) throw "Create user failed"
            tagRevalidate("users")
            alert("User created successfully")
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={createSchema}
            onSubmit={(values) => {
                // console.log(values);
                handleCreate(values);
            }}
        >
            {
                () => {
                    return (
                        <Form className='flex flex-col justify-center items-end w-6/12 border-2 pr-2'>
                            <div className='mt-[10px] pl-2'>
                                <label htmlFor="name" className='p-2'>Name</label>
                                <Field type="text" name="name" className="border border-1 rounded" />
                                <ErrorMessage
                                name='name'
                                component="div"
                                className="text-[12px] text-red-500"
                                />
                            </div>
                            <div className='mt-[10px] pl-2'>
                                <label htmlFor="email" className='p-2'>Email</label>
                                <Field type="email" name="email" className="border border-1 rounded" />
                                <ErrorMessage
                                name='email'
                                component="div"
                                className="text-[12px] text-red-500"
                                />
                            </div>
                            <div className='mt-[10px] pl-2'>
                                <label htmlFor="age" className='p-2'>Age</label>
                                <Field type="number" name="age" className="border border-1 rounded" />
                                <ErrorMessage
                                name='age'
                                component="div"
                                className="text-[12px] text-red-500"
                                />
                            </div>
                            <button type="submit" className="bg-teal-400 p-1 mt-2 rounded text-center ">Create</button>
                        </Form>
                    )
                    
                }
            }
        </Formik>
    )
}