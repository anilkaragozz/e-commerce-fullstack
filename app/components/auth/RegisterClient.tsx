"use client"

import AuthContainer from "../containers/AuthContainer"
import Heading from "../general/Heading"
import Input from "../general/Input"
import Button from "../general/Button"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { FaGoogle } from "react-icons/fa6";
import Link from "next/link"

const RegisterClient = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FieldValues>()

    const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data)

  return (
    <AuthContainer>
        <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md">
            <Heading text="Register" center /> 
            <Input 
                placeholder="Name" 
                type="text" 
                id="name"
                register={register}
                errors={errors} 
                required
            />
              <Input 
                placeholder="E-mail" 
                type="text" 
                id="email"
                register={register}
                errors={errors} 
                required
            />
              <Input 
                placeholder="Password" 
                type="password" 
                id="password"
                register={register}
                errors={errors} 
                required
            />
            <Button text="Sign Up" onClick={handleSubmit(onSubmit)} />
            <div className="text-center my-2 text-sm text-red-500" > <Link href="/login"> already have account click here </Link> </div>
            <div className="text-center my-2 font-bold text-lg">OR</div>
            <Button text="Sign in with  Google account" outline icon={FaGoogle} onClick={() => {}} />
        </div>
    </AuthContainer>
  )
}

export default RegisterClient
