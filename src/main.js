import Navigo from "navigo";
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

    },
    "/signin": () => {
        document.getElementById("app").innerHTML = Sign_in_up.print_in();
    },
    "/signup": () => {
        document.getElementById("app").innerHTML = Sign_in_up.print_up();
    },

});
router.resolve();











// router.on("/", function () {
//     console.log('Home Page')
// });
// router.on("/about", function () {
//     console.log('About Page')
// });

// class TuongPhep {
//     constructor(name, congVatLy, congPhep) {
//         this.tenTuong = name;
//         this.congVatLyTuong = congVatLy;
//         this.congPhepTuong = congPhep;
//     }
//     showInfo() {
//         console.log(`
//             ${this.tenTuong}
//             ${this.congVatLyTuong}
//             ${this.congVatLyTuong}
//         `)
//     }
// }

// const tuong1 = new TuongPhep("Natalya", 150, 0);
// console.log(tuong1.tenTuong);

// const person = { // object litteral
//     name: 'Dat',
//     showInfo: () => {
//         console.log(this.name);
//     }
// };

// person.showInfo();