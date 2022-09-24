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
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
