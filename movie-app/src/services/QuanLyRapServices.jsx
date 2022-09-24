import { GROUPID } from "../util/setting/config";
import { baseServices } from "./baseServices";

export class QuanLyRapServices extends baseServices {
  constructor() {
    super();
  }

  layDanhSachHeThongRap = () => {
    return this.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`
    );
  };

  layThongTinLichChieuPhim = (maPhim) => {
    return this.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
  };
}

export const quanLyRapService = new QuanLyRapServices();
