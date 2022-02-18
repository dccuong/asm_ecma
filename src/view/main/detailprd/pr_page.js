import { addToCart1 } from "../../../../utils/cart";
import { get } from "../../../api/posts"
import toastr from 'toastr';
import "toastr/build/toastr.min.css";
const Prd_page = {
    async print(id) {
        const { data } = await get(id);

        return /*html*/`
                <div  class="mt-[20px] h-[460px] text-left flex" >
               
                <div id="divimg" class="w-[50%] h-[460px]  border-[1px] border-slate-900 py-2 px-3 " >
                <img id="img1" class="w-[454px] h-[450px]" src="${data.images1}"/>
                <img id="img2" class="w-0 h-0" src="${data.images2}"/>
               </div>
                <div class="w-[50%] px-[15px]">
                <div>
                <h1 class="font-bold uppercase text-red-500  ">${data.title}</h1>
                <p>${data.desc}</p></div>
                <div> <a href="/#/buy"><button id="addToCart" type="submit" class="bg-red-500 w-[45%]  font-mono p-[10px] m-[10px] font-bold" >Mua ngay ${data.price}.VND</button></a>
                 <button id="addToCart" type="submit" class="bg-red-500 w-[45%]  font-mono p-[10px] m-[10px] font-bold" >Thêm vào giỏ hàng</button></div>
                </div>
                <hr>
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
        const addToCart = document.querySelector("#addToCart");
        addToCart.addEventListener("click", async () => {
            const { data } = await get(id);
            addToCart1({ ...data, quantity: 1 });

        })
    }



}
export default Prd_page;