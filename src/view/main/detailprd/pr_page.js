import { addToCart1 } from "../../../../utils/cart";
import { get, getCate } from "../../../api/posts"
import toastr from 'toastr';
import "toastr/build/toastr.min.css";
const Prd_page = {
    async print(id) {
        const { data } = await get(id);
        const sptt = await getCate(data.categoryId)

        return /*html*/`
        <div className="w-[1024px] m-auto">
                <div  className="h-[460px] text-left flex mt-[100px]" >
               
                    <div id="divimg" className="w-[50%] h-[460px]  py-2 px-3 " >
                        <img id="img1" className="w-[454px] h-[450px]" src="${data.images1}"/>
                        <img id="img2" className="w-0 h-0" src="${data.images2}"/>
                    </div>
                    <div className="w-[50%] px-[15px]">
                        <div>
                            <h1 className="font-bold uppercase text-red-500  ">${data.title}</h1>
                            <p>${data.desc}</p></div>
                            <div> 
                                <a href="/buy">
                                    <button id="addToCart1" type="submit" className="bg-green-500 w-[45%]  font-mono p-[10px] m-[10px] rounded-[15px] text-white  font-bold" >Mua ngay ${data.price}.000 VND</button>
                                </a>
                                <button id="addToCart2" type="submit" className="bg-blue-500 w-[45%] rounded-[15px] text-white  font-mono p-[10px] m-[10px] font-bold" >Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div className="mt-[20px]">
                        <p className="text-[15px] font-bold"> Sản Phẩm Tương Tự</p>
                        <div className="grid grid-cols-6 gap-2"> 
                            ${sptt.data.posts.map((post) => /*html*/`
                                 <div className=" border-[1px] rounded-[15px] shadow-sm border-slate-900 py-2 px-3 hover:border-red-500 hover:shadow-xl"> 
                                     <a href="/#/tai_nghe/${post.id}" className="hover:text-stone-500" >
                                     <div>
                                        <img src="${post.images1}" alt="" className="mx-auto"><br>
                                         <p className="text-red-600 text-[13px] font-bold">${post.title} </p>
                                          <p >${post.price}.000 VNĐ</p>
                                    </div>
                                     </a>
                                </div>`).join("")}
                         </div>
                     </div>
                <style>
                #divimg:hover #img1 {
                    width:0%;
                    height:0%;
                }
                
                #divimg:hover #img2 {
                    width:454px;
                    height:450px;
                }
                </style>
        `
    },
    afterRender(id) {
        const addToCart_1 = document.querySelector("#addToCart1");

        addToCart_1.addEventListener("click", async () => {
            const { data } = await get(id);
            addToCart1({ ...data, quantity: 1 }, () => {
                toastr.success("thêm thành công")
            });

        });
        const addToCart_2 = document.querySelector("#addToCart2");
        addToCart_2.addEventListener("click", async () => {
            const { data } = await get(id);
            addToCart1({ ...data, quantity: 1 }, () => {
                toastr.success("thêm thành công")
            });
        })
    }



}
export default Prd_page;