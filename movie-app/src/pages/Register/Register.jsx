import React from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { dangKyAction } from "../../redux/actions/QuanLyNguoiDungAction";

export default function Register() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(dangKyAction(data));
    console.log(data);
  };

  return (
    <div className="w-1/2 bg-white flex items-center">
      <div className="md:w-1/2 lg:w-2/3 m-auto my-12">
        <h1 className="text-lg font-bold text-center">Cyber Learn</h1>
        <form className="flex flex-col mt-4" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("taiKhoan", { required: true, minLength: 6 })}
            className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            placeholder="Tài khoản"
          />
          {errors.taiKhoan?.type && <p>Please check the First Name</p>}
          <input
            type="password"
            {...register("matKhau", { required: true, maxLength: 20 })}
            className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            placeholder="Mật khẩu"
          />
          {errors.matKhau && <p>Please check the First Name</p>}
          <input
            type="text"
            {...register("hoTen", { required: true, maxLength: 20 })}
            className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            placeholder="Họ và tên"
          />
          {errors.firstName && <p>Please check the First Name</p>}
          <input
            type="email"
            {...register("email", { required: true, maxLength: 30 })}
            className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            placeholder="Email"
          />
          {errors.firstName && <p>Please check the First Name</p>}
          <input
            type="text"
            {...register("soDT", { required: true, maxLength: 10 })}
            className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            placeholder="Số điện thoại"
          />
          {errors.firstName && <p>Please check the First Name</p>}
          <button
            type="submit"
            className="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-blue-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none"
          >
            Register
          </button>
          <div className="flex flex-col items-center mt-5">
            <p className="mt-1 text-xs font-light text-gray-500">
              Register already?
              <NavLink to="/login" className="ml-1 font-medium text-blue-400">
                Sign in now
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
