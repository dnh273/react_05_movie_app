import React, { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { layDanhSachNguoiDungAction } from "../../../redux/actions/QuanLyNguoiDungAction";

import {
  AudioOutlined,
  EditOutlined,
  SearchOutlined,
  DeleteOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

import { Button, Table } from "antd";
import { history } from "../../../App";
import Search from "antd/lib/input/Search";

export default function Dashboard(props) {
  const { danhSachNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );

  const dispatch = useDispatch();

  console.log("danhSach", danhSachNguoiDung);
  useEffect(() => {
    dispatch(layDanhSachNguoiDungAction());
  }, []);

  const columns = [
    {
      title: "STT",
      dataIndex: "taiKhoan",
      key: "STT",
      render: (text, user, index) => {
        return <Fragment>{index + 1}</Fragment>;
      },
    },

    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      sorter: (a, b) => {
        let taiKhoanA = a.taiKhoan.toLowerCase().trim();
        let taiKhoanB = b.taiKhoan.toLowerCase().trim();
        if (taiKhoanA > taiKhoanB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Mật khẩu",
      dataIndex: "matKhau",
      key: "matKhau",
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      key: "hoTen",
      sorter: (a, b) => {
        let hoTenA = a.hoTen.toLowerCase().trim();
        let hoTenB = b.hoTen.toLowerCase().trim();
        if (hoTenA > hoTenB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => {
        let emailA = a.email.toLowerCase().trim();
        let emailB = b.email.toLowerCase().trim();
        if (emailA > emailB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
    },

    {
      title: "Số điện thoại",
      dataIndex: "soDt",
      key: "soDt",
    },

    {
      title: "Address",
      dataIndex: "address",
    },
  ];
  const data = danhSachNguoiDung;

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const onSearch = (value) => {
    console.log(value);
    //Gọi api layDanhSachPhim
    // dispatch(layDanhSachPhimAction(value));
  };

  return (
    <div>
      <h3 className="text-4xl">Quản lý người dùng</h3>
      <Button
        className="mb-5"
        onClick={() => {
          // history.push("/admin/films/addnew");
        }}
      >
        Thêm phim
      </Button>
      {/* <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} /> */}
      <Search
        className="mb-5"
        placeholder="input search text"
        enterButton={<SearchOutlined />}
        size="large"
        onSearch={onSearch}
      />

      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}
