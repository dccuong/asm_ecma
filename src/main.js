import Navigo from "navigo";
import Footer_Ad from "./view/admin/footer/footer";
import Header_Ad from "./view/admin/header/header_AD";
import add_News from "./view/admin/main/news/add_news/add_news";
import Footer from "./view/footer/footer";
import Header from "./view/header/a_header";

import Chap3 from "./view/main/chap3/items_chap3";
import Post_page from "./view/main/detailpost/Post_page";
import Homepage from "./view/main/home/home";
import dashb from "./view/admin/main/dashboard/dashb";
import new_Detail from "./view/admin/main/news/detail_news/news_Deatil";
import Sign_in from "./view/main/signinup/signin";
import Sign_up from "./view/main/signinup/signup";
import noiDung from "./view/admin/main/news/danhSachBaiViet/noiDung";

const layout_client = () => {
    document.getElementById("foot").innerHTML = Footer.print();
    document.getElementById("header").innerHTML = Header.print();
    Header.afterRender();
}
const layout_ad = () => {
    document.getElementById("foot").innerHTML = Footer_Ad.print();
    document.getElementById("header").innerHTML = Header_Ad.print();
};
//router
const router = new Navigo("/", { linksSelector: "a" });
const render = async (content, id) => {
    document.getElementById("app").innerHTML = await content.print(id);
    if (content.afterRender) content.afterRender(id);
};

router.on("/admin/*", () => { }, {
    before(done, match) {
        if (JSON.parse(localStorage.getItem("user"))) {
            const id = JSON.parse(localStorage.getItem("user")).id;
            if (id <= 10) {
                done()
            } else {
                document.location.href = "/"
            }
        }
    }
})
router.on({
    "/": () => {
        render(Homepage);
        layout_client();
    },
    "/chap3": () => { render(Chap3); layout_client(); },
    "/chap3/:id": ({ data }) => {
        const { id } = data;// tạo biến id destructuring từ data 
        render(Post_page, id);
        layout_client();
    },
    "/signin": () => { render(Sign_in); layout_client(); },
    "/signup": () => { render(Sign_up); layout_client(); },

    "/admin": () => {
        layout_ad();
        render(dashb)
    },
    "/admin/news/": () => {
        layout_ad();
        render(noiDung);

    },
    "/admin/acc/": () => {
        layout_ad();
        render();
    },
    "admin/news/add": () => {
        layout_ad();
        render(add_News);

    },
    "/admin/news/:id/edit": ({ data }) => {
        layout_ad();
        const { id } = data;// tạo biến id destructuring từ data 
        render(new_Detail, id)

    },





});
router.resolve();



