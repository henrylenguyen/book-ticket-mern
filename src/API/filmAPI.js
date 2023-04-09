import requestApi from "./requestAPI"

const phimAPI = {
  layDanhSachPhimSapChieu : () => requestApi.get("/QuanLyPhim/LayDanhSachPhimSapChieu"),
  layDanhSachPhimDangChieu : () => requestApi.get("/QuanLyPhim/layDanhSachPhimDangChieu")
}

export default phimAPI;