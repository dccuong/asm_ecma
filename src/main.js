import Navigo from "navigo";
import Footer_Ad from "./view/admin/footer/footer";
import Header_Ad from "./view/admin/header/header_AD";
import add_News from "./view/admin/main/news/add_news/add_news";
import danhSachBaiViet from "./view/admin/main/news/danhSachBaiViet/danhSachBaiViet";



import Footer from "./view/footer/footer";
import Header from "./view/header/a_header";

import Chap3 from "./view/main/chap3/items_chap3";
import Post_page from "./view/main/detailpost/Post_page";
import Homepage from "./view/main/home/home";
import Sign_in_up from "./view/main/signinup/sign_in_up";
import dashb from "./view/admin/main/dashboard/dashb";
import new_Detail from "./view/admin/main/news/detail_news/news_Deatil";



document.getElementById("foot").innerHTML = Footer.print();
document.getElementById("header").innerHTML = Header.print();

//router
const router = new Navigo("/", { linksSelector: "a" });
const render = async (content, id) => {
    document.getElementById("app").innerHTML = await content.print(id);
    if (content.afterRender) content.afterRender();
};
const layout_ad = () => {
    document.getElementById("foot").innerHTML = Footer_Ad.print();
    document.getElementById("header").innerHTML = Header_Ad.print();
};
router.on({
    "/": () => { render(Homepage); },
    "/chap3": () => { render(Chap3) },
    "/chap3/:id": ({ data }) => {
        const { id } = data;// tạo biến id destructuring từ data 
        render(Post_page, id)
    },
    "/admin": () => {
        layout_ad();
        render(dashb)
    },
    "/admin/news/": () => {
        layout_ad();
        render(danhSachBaiViet);

    },
    "/admin/news/add": () => {
        layout_ad();
        render(add_News);

    },
    "/admin/admin/news/:id/edit": ({ data }) => {
        layout_ad();
        const { id } = data;// tạo biến id destructuring từ data 
        render(new_Detail, id)

    },



    "/signin": () => {
        document.getElementById("app").innerHTML = Sign_in_up.print_in();
    },
    "/signup": () => {
        document.getElementById("app").innerHTML = Sign_in_up.print_up();
    },

});
router.resolve();



