import { useForm } from "react-hook-form";
import { UserLoginForm } from "@/types/index";

import { Link } from "react-router-dom";

export default function LoginView() {

  const initialValues: UserLoginForm = {
    email: '',
    password: '',
  }
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })

  const handleLogin = (formData: UserLoginForm) => { }

  return (
    <>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="space-y-8 p-10 bg-white"
        noValidate
      >
        <div className="flex flex-col gap-5">
          <label
            className="font-normal text-2xl"
          >Email</label>

          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            className="w-full p-3  border-gray-300 border"
            {...register("email", {
              required: "El Email es obligatorio",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "E-mail no válido",
              },
            })}
          />
         
        </div>

        <div className="flex flex-col gap-5">
          <label
            className="font-normal text-2xl"
          >Password</label>

          <input
            type="password"
            placeholder="Password de Registro"
            className="w-full p-3  border-gray-300 border"
            {...register("password", {
              required: "El Password eAs obligatorio",
            })}
          />
          
        </div>

        <input
          type="submit"
          value='Iniciar Sesión'
          className="bg-cyan-600 hover:bg-cyan-700 w-full p-3  text-white font-black  text-xl cursor-pointer"
        />

        <nav>
          <p className="text-center my-5">
            ¿No tienes cuenta?
            <Link
              to="/auth/register"
              className="text-cyan-600 font-bold hover:text-cyan-700"
            >
              Regístrate
            </Link>
          </p>
        </nav>
      </form>
    </>
  )
}