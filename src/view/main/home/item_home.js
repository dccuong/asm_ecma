import { getAll } from "../../../api/posts";

const items_home = {
  async print() {
    const { data } = await getAll();
    return /*html*/` 
    <div>
     <div class="inline-block font-bold my-3">
       <h3>TIN TỨC HỌC TẬP</h3>
     </div>
     <div class="grid grid-cols-3 gap-3"> 
     ${data.map((post) => /*html*/`
       <div class="border-[1px] border-slate-900 py-2 px-3">
         <div>
           <img src="${post.images}" alt="" class="mx-auto"><br>
           <p class="text-red-600 font-bold">${post.title} </p>
           <p>${post.desc}</p>
         </div>
       </div>
     `).join("")}
     </div>
     </div> `;

  }
}
export default items_home