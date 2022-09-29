import { GROUPID } from "../util/setting/config";
import { baseServices } from "./baseServices";

export class QuanLyNguoiDungService extends baseServices {
  constructor() {
    super();
  }

  dangNhap = (thongTinDangNhap) => { // {taiKhoan: '', matKhau: ''}
    return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
  };

  layThongTinNguoiDung = () => {
    return this.post(`api/QuanLyNguoiDung/ThongTinTaiKhoan`)
  }

  dangKy = (thongTinDangKy) => {
    return this.post(`/api/QuanLyNguoiDung/DangKy`,thongTinDangKy)
  }

  capNhatThongTinNguoiDung = (thongTinCapNhat) => {
    return this.put(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,thongTinCapNhat)
  }
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
