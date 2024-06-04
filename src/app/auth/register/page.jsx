"use client";
import { useForm } from "react-hook-form";

function RegisterPage() {
  const { register, handleSubmit } = useForm();

  const onSumbit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={onSumbit} className="w-1/4">
        <h1 className="text-white font-bold text-2xl mb-4 text-center">
          Register
        </h1>
        <label htmlFor="username" className="text-gray-500 mb-2 block text-sm">
          Username
        </label>
        <input
          type="text"
          {...register("username", { required: true })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-500 w-full"
        />
        <label htmlFor="email" className="text-gray-500  mb-2 block text-sm">
          Email
        </label>
        <input
          type="email"
          {...register("email", { required: true })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-500 w-full"
        />
        <label
          htmlFor="password"
          className=" text-gray-500  mb-2 block text-sm"
        >
          Password
        </label>
        <input
          type="password"
          {...register("password", { required: true })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-500 w-full"
        />
        <label
          htmlFor="confirmPassword"
          className="text-gray-500  mb-2 block text-sm"
        >
          Confirm Password
        </label>
        <input
          type="confirmPassword"
          {...register("confirmPassword", { required: true })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-500 w-full"
        />

        <button className="mt-2 w-full bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-lg">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
