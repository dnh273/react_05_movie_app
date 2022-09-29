import { Tabs } from "antd";
import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  capNhatThongTinAction,
  layThongTinNguoiDungAction,
} from "../../redux/actions/QuanLyNguoiDungAction";

export default function Profile(props) {
  return (
    <div style={{ paddingTop: "100px" }}>
      <div className="border-solid border-2 border-sky-500 p-12 m-12  rounded">
        <Tabs defaultActiveKey="1" className="p-10">
          <Tabs.TabPane tab="Thông tin tài khoản" key="1">
            <ThongTinTaiKhoan {...props} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Đổi mật khẩu" key="2">
            <DoiMatKhau {...props} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Lịch sử đặt vé" key="3">
            <LichSuDatVe {...props} />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
}

function ThongTinTaiKhoan(props) {
  const { thongTinNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const action = layThongTinNguoiDungAction();
    dispatch(action);
  }, []);

  useEffect(() => {
    if (thongTinNguoiDung) reset(thongTinNguoiDung);
  }, [thongTinNguoiDung]);

  // React hook form
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data gui", data);
    dispatch(capNhatThongTinAction(data));
  };

  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      <div className="col-span-1 w-full items-center flex flex-col">
        <div className="overflow-hidden relative w-60 h-60 bg-gray-100 rounded-full dark:bg-gray-600">
          <svg
            className="absolute -left-1 w-12 h-12 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h2 className="mb-1 mt-8 text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2x text-center">
          Xin chào {thongTinNguoiDung.hoTen}!
        </h2>
      </div>

      <div className="col-span-1 w-full justify-center flex ">
        <div className="p-6 rounded-lg shadow-lg bg-white  w-full">
          <h2 className="mb-1 text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2x text-center">
            Thông tin tài khoản
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap -mx-3 mb-6 mt-8">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Tài khoản
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  defaultValue={thongTinNguoiDung.taiKhoan}
                  disabled
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Mật khẩu
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="password"
                  defaultValue={thongTinNguoiDung.matKhau}
                  disabled
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Họ tên
                </label>
                <input
                  className="appearance-none block w-full text-gray-700
                  bg-white bg-clip-padding border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  {...register("hoTen", {
                    required: "Họ tên không được bỏ trống",
                    maxLength: {
                      value: 20,
                      message: "Họ tên không được quá 20 chữ",
                    },
                  })}
                />
                <p class="text-red-500 text-xs italic">
                  {errors.hoTen?.message}
                </p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="email"
                  defaultValue={thongTinNguoiDung.email}
                  disabled
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Số điện thoại
                </label>
                <input
                  className="appearance-none block w-full text-gray-700
                  bg-white bg-clip-padding border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  {...register("soDT", {
                    required: "Không được bỏ trống số điện thoại",
                    pattern: {
                      value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
                      message: "Vui lòng nhập đúng số điện thoại",
                    },
                  })}
                />
                <p class="text-red-500 text-xs italic">
                  {errors.soDT?.message}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <button
                type="submit"
                className="
            w-full
            h-full
            py-3 px-4
bg-blue-600
text-white
font-medium
text-xs
leading-tight
uppercase
rounded
shadow-md
hover:bg-blue-700 hover:shadow-lg
focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
active:bg-blue-800 active:shadow-lg
transition
duration-150
ease-in-out"
              >
                Cập nhật
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function DoiMatKhau(props) {
  const { thongTinNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const action = layThongTinNguoiDungAction();
    dispatch(action);
  }, []);

  // React hook form
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({});

  const password = useRef({});

  password.current = watch("matKhauMoi", "");

  const onSubmit = async (data) => {
    // Đổi mật khẩu mới
    thongTinNguoiDung.matKhau = data.matKhauMoi;
    let newData = { ...thongTinNguoiDung };
    await dispatch(capNhatThongTinAction(newData));
    await reset();
  };

  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      <div className="col-span-1 w-full items-center flex flex-col">
        <div className="overflow-hidden relative w-60 h-60 bg-gray-100 rounded-full dark:bg-gray-600">
          <svg
            className="absolute -left-1 w-12 h-12 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h2 className="mb-1 mt-8 text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2x text-center">
          Xin chào {thongTinNguoiDung.hoTen}!
        </h2>
      </div>

      <div className="col-span-1 w-full justify-center flex ">
        <div className="p-6 rounded-lg shadow-lg bg-white  w-full">
          <h2 className="mb-1 text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2x text-center">
            Đổi mật khẩu
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full   mb-6 ">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Mật khẩu cũ
              </label>
              <input
                className="appearance-none block w-full text-gray-700
                bg-white bg-clip-padding border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="password"
                {...register("matKhauCu", {
                  required: "Mật khẩu không được bỏ trống",
                  validate: (value) =>
                    value === thongTinNguoiDung.matKhau ||
                    "Mật Khẩu cũ không chính xác",
                })}
              />
              <p className="text-red-500 text-xs italic">
                {errors.matKhauCu?.message}
              </p>
            </div>
            <div className="w-full mb-6 ">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Mật khẩu mới
              </label>
              <input
                className="appearance-none block w-full text-gray-700
                bg-white bg-clip-padding border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="password"
                name="matKhauMoi"
                {...register("matKhauMoi", {
                  required: "Họ tên không được bỏ trống",
                  minLength: {
                    value: 6,
                    message: "Mật khẩu mới phải có ít nhất 6 ký tự",
                  },
                })}
              />
              <p className="text-red-500 text-xs italic">
                {errors.matKhauMoi?.message}
              </p>
            </div>

            <div className="w-full  mb-6 ">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Nhập lại mật khẩu mới
              </label>
              <input
                className="appearance-none block w-full text-gray-700
                bg-white bg-clip-padding border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="password"
                {...register("matKhauMoi_repeat", {
                  required: "Vui lòng xác nhận mật khẩu mới",
                  validate: (value) =>
                    value === password.current ||
                    "Mật khẩu mới không trùng khớp",
                })}
              />
              <p className="text-red-500 text-xs italic">
                {errors.matKhauMoi_repeat?.message}
              </p>
            </div>

            <button
              type="submit"
              className="
          w-full
          h-full
          py-3 px-4
bg-blue-600
text-white
font-medium
text-xs
leading-tight
uppercase
rounded
shadow-md
hover:bg-blue-700 hover:shadow-lg
focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
active:bg-blue-800 active:shadow-lg
transition
duration-150
ease-in-out"
            >
              Cập nhật
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function LichSuDatVe(props) {
  const { thongTinNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );

  console.log("thongTInnugoi dung", thongTinNguoiDung);

  const renderLichSuDatVe = () => {
    thongTinNguoiDung.thongTinDatVe.map((item, index) => {
      return (
        <tr key={index}>
          <td className="p-2 whitespace-nowrap">
            <div className="flex items-center">
              <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                <img
                  className="rounded-full"
                  src={item.hinhAnh}
                  width={40}
                  height={40}
                  alt={item.hinhAnh}
                />
              </div>
              <div className="font-medium text-gray-800">{item.tenPhim}</div>
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">alexshatov@gmail.com</div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-lg text-center">
              {item}
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-lg text-center">
              {item}
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left font-medium text-green-500">
              {item.giaVe}
            </div>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      <div className="col-span-1 w-full items-center flex flex-col">
        <div className="overflow-hidden relative w-60 h-60 bg-gray-100 rounded-full dark:bg-gray-600">
          <svg
            className="absolute -left-1 w-12 h-12 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h2 className="mb-1 mt-8 text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2x text-center">
          Xin chào {thongTinNguoiDung.hoTen}!
        </h2>
      </div>
      <div className="col-span-1 w-full justify-center flex ">
        {/* component */}
        <section className="antialiased  text-gray-600  px-4">
          <div className="flex flex-col  h-full">
            {/* Table */}
            <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
              <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-2xl text-gray-800">
                  Lịch sử đặt vé
                </h2>
              </header>
              <div className="p-3">
                <div className="overflow-x-auto">
                  <table className="table-auto w-full">
                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">Phim</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">
                            Thời gian đặt
                          </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">Số ghế</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">Mã vé</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-center">Giá</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100">
                      <tr>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                className="rounded-full"
                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                                width={40}
                                height={40}
                                alt="Alex Shatov"
                              />
                            </div>
                            <div className="font-medium text-gray-800">
                              Alex Shatov
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">alexshatov@gmail.com</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium text-green-500">
                            $2,890.66
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-lg text-center">??</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                className="rounded-full"
                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg"
                                width={40}
                                height={40}
                                alt="Philip Harbach"
                              />
                            </div>
                            <div className="font-medium text-gray-800">
                              Philip Harbach
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">philip.h@gmail.com</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium text-green-500">
                            $2,767.04
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-lg text-center">??</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                className="rounded-full"
                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg"
                                width={40}
                                height={40}
                                alt="Mirko Fisuk"
                              />
                            </div>
                            <div className="font-medium text-gray-800">
                              Mirko Fisuk
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">mirkofisuk@gmail.com</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium text-green-500">
                            $2,996.00
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-lg text-center">??</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                className="rounded-full"
                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-08.jpg"
                                width={40}
                                height={40}
                                alt="Olga Semklo"
                              />
                            </div>
                            <div className="font-medium text-gray-800">
                              Olga Semklo
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">olga.s@cool.design</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium text-green-500">
                            $1,220.66
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-lg text-center">??</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                className="rounded-full"
                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg"
                                width={40}
                                height={40}
                                alt="Burak Long"
                              />
                            </div>
                            <div className="font-medium text-gray-800">
                              Burak Long
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">longburak@gmail.com</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium text-green-500">
                            $1,890.66
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-lg text-center">??</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
