import { getDesc, getLimit } from "../../../api/posts";

const items_home = {
  async print() {
    const { data } = await getLimit();
    const price_Desc = await (await getDesc()).data;

    return /*html*/` 
    <div class="">
     <div class="inline-block font-bold my-3">
       <h3>CÁC SẢN PHẨM NỔI BẬT</h3>
     </div>
     <div class="grid grid-cols-4 gap-2"> 
     ${data.map((post) => /*html*/`
            <div class=" border-[1px] rounded-[15px] shadow-sm border-slate-900 py-2 px-3 hover:border-red-500 hover:shadow-xl"> 
            <a href="/#/tai_nghe/${post.id}" class="hover:text-stone-500" >
             <div>
                   <img src="${post.images1}" alt="" class="mx-auto w-[286px] h-[270px]" ><br>
                   <p class="text-red-600 font-bold">${post.title}</p>
                   <p >${post.price} VNĐ</p>
              </div>
             </a>
               </div>
             `).join("")}
     </div>
     <div class="inline-block font-bold my-3">
     <h3>CÁC SẢN PHẨM GIÁ GIẢM DẦN </h3>
   </div>
   <div class="grid grid-cols-4 gap-2"> 
   ${price_Desc.map((price_D) => /*html*/`
          <div class=" border-[1px] rounded-[15px] shadow-sm border-slate-900 py-2 px-3 hover:border-red-500 hover:shadow-xl"> 
          <a href="/#/tai_nghe/${price_D.id}" class="hover:text-stone-500" >
           <div>
                 <img src="${price_D.images1}" alt="" class="mx-auto w-[286px] h-[270px]" ><br>
                 <p class="text-red-600 font-bold">${price_D.title}</p>
                 <p >${price_D.price} VNĐ</p>
            </div>
           </a>
             </div>
           `).join("")}
   </div>
  
     </div> `;

  }
}
export default items_home