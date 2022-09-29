import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import {
  CAP_NHAT_THONG_TIN_ACTION,
  DANG_KY_ACTION,
  DANG_NHAP_ACTION,
  SET_THONG_TIN_NGUOI_DUNG,
} from "./types/QuanLyNguoiDungType";
import { history } from "../../App";
import Swal from "sweetalert2";

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
      console.log(result);
      if (result.data.statusCode === 200) {
        dispatch({
          type: DANG_NHAP_ACTION,
          thongTinDangNhap: result.data.content,
        });
        // Chuyen ve trang truoc do
        history.goBack('./home');
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const layThongTinNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layThongTinNguoiDung();
      if (result.data.statusCode === 200) {
        dispatch({
          type: SET_THONG_TIN_NGUOI_DUNG,
          thongTinNguoiDung: result.data.content,
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const dangKyAction = (thongTinDangKy) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangKy(thongTinDangKy);
      console.log(result);
      if (result.data.statusCode === 200) {
        await dispatch({
          type: DANG_KY_ACTION,
        });
        // Chuyen ve trang truoc do
        await Swal.fire({
          title: "Đăng ký thành công!",
          icon: "success", //success, error, warning, question
          confirmButtonText: "OK",
        });

        history.goBack("./");
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response.data.content);
      Swal.fire({
        title: "Đăng ký thất bại!",
        html: `${error.response.data.content}`,
        icon: "error", //success, error, warning, question
        confirmButtonText: "OK",
      });
    }
  };
};

export const capNhatThongTinAction = (thongTinCapNhat) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.capNhatThongTinNguoiDung(
        thongTinCapNhat
      );
      console.log(result);
      if (result.data.statusCode === 200) {
        Swal.fire({
          title: "Cập nhật thành công!",
          icon: "success", //success, error, warning, question
          confirmButtonText: "OK",
        });
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
