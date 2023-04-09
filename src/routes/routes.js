import NewsPage from "pages/NewsPage";
import BookingPage from "pages/BookingPage";
import DetailsPage from "pages/DetailsPage";
import HomePage from "pages/HomePage";
import SignInPage from "pages/SignInPage";
import SignUpPage from "pages/SignUpPage";
import CinemaPage from "pages/CinemaPage";

const routes = [
  { path: "/", component: HomePage },
  { path: "/thong-tin", component: DetailsPage },
  { path: "/dang-ky", component: SignUpPage },
  { path: "/dang-nhap", component: SignInPage },
  { path: "/dat-ve", component: BookingPage },
  { path: "/tin-tuc", component: NewsPage },
  { path: "/danh-sach-phim", component: CinemaPage },
];
export default routes;