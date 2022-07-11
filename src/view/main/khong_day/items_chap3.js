
import { getCate } from "../../../api/posts"


const items_Chap3 = {
  async print(categoryId) {
    const prd_cate = await getCate(categoryId);

    return /*html*/` 
    <div class="w-[1024px] mx-auto mt-[110px]">
            <p class=" text-black-700 text-[22px] mb-2">Tai Nghe ${prd_cate.data.name}</p>
             <div class="grid grid-cols-4 gap-2"> 
             ${prd_cate.data.posts.map((post) => /*html*/`
            <div class="border-[1px] border-slate-900 py-2 px-3 hover:border-red-500"> 
            <a href="/chap3/${post.id}" class="hover:text-stone-500" >
             <div>
                   <img src="${post.images1}" alt="" class="mx-auto"><br>
                   <p class="text-red-600 font-bold">${post.title} </p>
                   <p >${post.price}.000 VNĐ</p>
              </div>
             </a>
               </div>
             `).join("")}
             </div>
             </div>
            `
  }
}
export default items_Chap3