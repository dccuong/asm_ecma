import toastr from 'toastr';
import "toastr/build/toastr.min.css";

import { reRender } from "../../../../utils";
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../../../../utils/cart";

const by_Prd = {
    print() {
        let cart = [];
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
        }
        return /*html*/`
        <div class="flex flex-col mt-[100px]">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden shadow-md sm:rounded-lg">
        <table class="min-w-full">
            <thead class="bg-gray-50 dark:bg-gray-700">
                <tr>
                    <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                    Name
                    </th>
                    <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                    Price
                    </th>
                    <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                    số lượng
                    </th>
                    <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                    
                    </th>
               
                    <th scope="col"class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                     xóa
                    </th>
                </tr>
            </thead>
            <tbody class="">
                ${cart.map(prd => /*html*/`
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">${prd.title}</td>
                    <td class=" py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"  id="gia_sp">${prd.price}.000 VNĐ</td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <button data-id="${prd.id}" class="bg-green-500 text-white btn btn-increase mr-2 px-2">Tăng</button>
                        <input class="text-black" type="text" value="${prd.quantity}" class="border border-gray-500 " id="sl_sp"/>
                        <button data-id="${prd.id}" class="bg-orange-500 text-white btn btn-decrease mr-2 px-2">Giảm</button>
                    </td>
                    <td class=" py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"></td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <button data-id="${prd.id}" class="bg-red-500 text-white btn btn-remove mr-2 px-2">Xóa</button>
                    </td>
                </tr>`).join("")}
            </tbody>
            <thead class="bg-gray-50 dark:bg-gray-700">
            <tr>
                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                
                </th>
                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                sum Price
                </th>
                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400" id="tong_gia">
            
                </th>
           
                <th scope="col"class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400" >
                </th>
                <th scope="col"class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"> <button class=" text-white btn btn-remove mr-2 px-2">Thanh Toán</button>
                </td>
                </th>
            </tr>
        </thead>
        </table>
                    </div>
                </div>
            </div>
        </div>
     
        `
    },
    afterRender() {
        const cart = JSON.parse(localStorage.getItem('cart'));
        const tong_gia = document.querySelector("#tong_gia")
        const btns = document.querySelectorAll('.btn');
        btns.forEach(btn => {
            const id = btn.dataset.id;


            btn.addEventListener('click', () => {
                if (btn.classList.contains('btn-increase')) {
                    increaseQuantity(id, () => reRender(by_Prd, "#app"))
                } else if (btn.classList.contains('btn-decrease')) {
                    decreaseQuantity(id, () => reRender(by_Prd, "#app"))
                } else {
                    removeItemInCart(id, () => {
                        reRender(by_Prd, "#app");
                        toastr.success("Bạn đã xóa sản phẩm thành công");
                    })
                }
            })
            const cart = JSON.parse(localStorage.getItem('cart'));
            let sum_elm = 0
            cart.forEach(prd => {
                sum_elm += (prd.price) * prd.quantity;
            })
            console.log(sum_elm);
            tong_gia.innerHTML = sum_elm + ",000 VNĐ"



        })
    },


}
export default by_Prd