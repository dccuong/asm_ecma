import Navigo from "navigo";
import Footer from "./view/footer/footer";
import Header from "./view/header/a_header";
import Homepage from "./view/main/home/home";



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
    "/about": () => {
        render();
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