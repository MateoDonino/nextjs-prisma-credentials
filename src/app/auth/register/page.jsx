"use client";
import { useForm } from "react-hook-form";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSumbit = handleSubmit(async (data) => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resJSON = await res.json();

    console.log(resJSON);
  });

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={onSumbit} className="w-1/4">
        <h1 className="text-white font-semibold text-4xl mb-4 text-center">
          Registe
        </h1>
        <label htmlFor="username" className="text-gray-500 mb-2 block text-sm">
          Username
        </label>
        <input
          type="text"
          {...register("username", {
            required: { value: true, message: "Usernameis Required" },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-500 w-full"
          placeholder="Your Username"
        />
        {errors.username && (
          <span className="text-red-500 text-sm">
            {errors.username.message}
          </span>
        )}
        <label htmlFor="email" className="text-gray-500  mb-2 block text-sm">
          Email
        </label>
        <input
          type="email"
          {...register("email", {
            required: { value: true, message: "Email is Required" },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-500 w-full"
          placeholder="Your Email"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
        <label
          htmlFor="password"
          className=" text-gray-500  mb-2 block text-sm"
        >
          Password
        </label>
        <input
          type="password"
          {...register("password", {
            required: { value: true, message: "Password is Required" },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-500 w-full"
          placeholder="********"
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
        <label
          htmlFor="confirmPassword"
          className="text-gray-500  mb-2 block text-sm"
        >
          Confirm Password
        </label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: { value: true, message: "Confirm Password is Required" },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-500 w-full"
          placeholder="********"
        />

        {errors.confirmPassword && (
          <span className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </span>
        )}
        <button className="mt-2 w-full bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-lg">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
