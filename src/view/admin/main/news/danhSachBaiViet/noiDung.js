import { getAll, remove } from "../../../../../api/posts";
import { reRender } from "../../../../../../utils";

const noiDung = {
  async print() {
    const { data } = await getAll();
    return /*html*/`
    <div class="item_home" id="item_admin">
            <div class="pt-[20px]">
            
             <div class="grid grid-cols-5 gap-2"> 
             <a href="/admin/news/add"><button type="button" class="w-[186px] h-[252px] bg-gray-500">+ <br> add news</button></a>
             ${data.map((post) => /*html*/`
            <div class="border-[1px] border-slate-900 py-2 px-3"> 
            <a href="/admin/news/${post.id}/edit" class="hover:text-stone-500" >
             <div>
                   <img src="${post.images1}" alt="" class="mx-auto"><br>
                   <p class="text-red-600 font-bold text-[10px]">${post.title} </p>
                   <p class=" text-[10px]">${post.price}</p>
              </div>
             </a>
             <button class="btn bg-red-500 m-[10px] p-[5px] text-[10px] " data-id=${post.id}>delete</button>
               </div>
             `).join("")}
          </div>
             </div>
            `
  },
  afterRender() {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(buttons => {
      console.log(buttons.dataset.id)
      const id = buttons.dataset.id;
      buttons.addEventListener('click', () => {
        console.log(id);
        const confirm = window.confirm("delete?");
        if (confirm) {
          remove(id).then(() =>
            document.location.href = "/admin/news")
        }
      })
    })
  }
}
export default noiDung