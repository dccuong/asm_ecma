import Navigo from "navigo";

import Header_Ad from "./view/admin/header/header_AD";
import add_News from "./view/admin/main/news/add_news/add_news";
import Footer from "./view/footer/footer";
import Header from "./view/header/a_header";

import Chap3 from "./view/main/khong_day/items_chap3";
import Homepage from "./view/main/home/home";
import dashb from "./view/admin/main/dashboard/dashb";
import Sign_in from "./view/main/signinup/signin";
import Sign_up from "./view/main/signinup/signup";
import noiDung from "./view/admin/main/news/danhSach_prd/noiDung";
import Prd_page from "./view/main/detailprd/pr_page";
import prd_Detail from "./view/admin/main/news/detail_prd/Prd_Deatil";
import by_Prd from "./view/main/detailprd/by_Prd";
import Form from "./view/header/form";
import userAcc from "./view/admin/main/user/user";
import sPage from "./view/main/khong_day/search";
import blog from "./view/main/blog/blog";


const layout_client = () => {
    document.getElementById("foot").innerHTML = Footer.print();
    document.getElementById("header").innerHTML = Header.print();
    Header.afterRender();
    Form.afterRender()

}
const layout_ad = () => {
    document.getElementById("header").innerHTML = Header_Ad.print();
    // document.getElementById("foot").innerHTML = footer_Ad.print();
};
//router
const router = new Navigo("/", { linksSelector: "a", hash: true });
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
    "/khong_day/:categoryId": ({ data }) => {

        const { categoryId } = data;
        console.log(categoryId)
        render(Chap3, categoryId);
        layout_client();
    },
    "/co_day/:categoryId": ({ data }) => {
        const { categoryId } = data;
        console.log(categoryId)
        render(Chap3, categoryId);
        layout_client();
    },
    "/tai_nghe/:id": ({ data }) => {
        const { id } = data;// t???o bi???n id destructuring t??? data 
        render(Prd_page, id);
        layout_client();
    },
    "/search": () => {
        render(sPage);
        layout_client();
    },
    "/signin": () => { render(Sign_in); layout_client(); },
    "/signup": () => { render(Sign_up); layout_client(); },
    "/buy": () => { render(by_Prd); layout_client(); },
    "/blog": () => { render(blog); layout_client(); },

    "/admin": () => {
        layout_ad();
        render(dashb)
    },
    "/admin/prds/": () => {
        layout_ad();
        render(noiDung);

    },
    "/admin/acc/": () => {
        layout_ad();
        render(userAcc);
    },
    "admin/prds/add": () => {
        layout_ad();
        render(add_News);

    },
    "/admin/prds/:id/edit": ({ data }) => {
        layout_ad();
        const { id } = data;// t???o bi???n id destructuring t??? data 
        render(prd_Detail, id)

    },





});
router.resolve();



