import requestApi from "./requestAPI"

const bannerAPI = {
  layDanhSachBanner : () => requestApi.get("/QuanLyBanner/LayDanhSachBanner")

}
export default bannerAPI;