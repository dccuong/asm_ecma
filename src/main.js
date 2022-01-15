import Navigo from "navigo";
import Footer_Ad from "./view/admin/footer/footer";
import Header_Ad from "./view/admin/header/header_AD";
import add_News from "./view/admin/main/news/add_news/add_news";
import edit_Detail from "./view/admin/main/news/edit_news/edit_News";
import danhSachBaiViet from "./view/admin/main/news/danhSachBaiViet/danhSachBaiViet";



import Footer from "./view/footer/footer";
import Header from "./view/header/a_header";
import chap2page from "./view/main/chap2/layout_Chap2";
import Chap3 from "./view/main/chap3/items_chap3";
import Post_page from "./view/main/detailpost/Post_page";
import Homepage from "./view/main/home/home";
import Sign_in_up from "./view/main/signinup/sign_in_up";



document.getElementById("foot").innerHTML = Footer.print();
document.getElementById("header").innerHTML = Header.print();

//router
const router = new Navigo("/", { linksSelector: "a" });
const render = (content) => {
    document.getElementById("app").innerHTML = content.print();
};
const layout_ad = () => {
    document.getElementById("foot").innerHTML = Footer_Ad.print();
    document.getElementById("header").innerHTML = Header_Ad.print();
};
router.on({
    "/": () => {
        render(Homepage);
    },
    "/chap2": () => {
        render(chap2page);
    },
    "/chap3": () => {
        render(Chap3)
    },
    "/chap3/:id": ({ data }) => {
        const { id } = data;// tạo biến id destructuring từ data 
        document.getElementById("app").innerHTML = Post_page.print(id);

    },
    "/admin": () => {
        layout_ad();


    },
    "/admin/news/": () => {
        layout_ad();
        render(danhSachBaiViet);

    },
    "/admin/news/add": () => {
        layout_ad();
        render(add_News);

    },
    "/admin/news/:id/edit": ({ data }) => {
        layout_ad();
        const { id } = data;// tạo biến id destructuring từ data 
        document.getElementById("app").innerHTML = edit_Detail.print(id);

    },



    "/signin": () => {
        document.getElementById("app").innerHTML = Sign_in_up.print_in();
    },
    "/signup": () => {
        document.getElementById("app").innerHTML = Sign_in_up.print_up();
    },

});
router.resolve();



