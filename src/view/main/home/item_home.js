import { getAll } from "../../../api/posts";

const items_home = {
  async print() {
    const { data } = await getAll();
    return /*html*/` 
    <div>
     <div class="inline-block font-bold my-3">
       <h3>CÁC SẢN PHẨM</h3>
     </div>
     <div class="grid grid-cols-3 gap-3"> 
     ${data.map((post) => /*html*/`
            <div class="border-[1px] border-slate-900 py-2 px-3 hover:border-red-500"> 
            <a href="/chap3/${post.id}" class="hover:text-stone-500" >
             <div>
                   <img src="${post.images1}" alt="" class="mx-auto w-[286px] h-[286px]" ><br>
                   <p class="text-red-600 font-bold">${post.title} </p>
                   <p >${post.price}</p>
              </div>
             </a>
               </div>
             `).join("")}
     </div>
     </div> `;

  }
}
export default items_home