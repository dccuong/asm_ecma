import { values } from "json-server-auth";

const sPage = {
  print() {
    // const getSearch()
    return /*html*/` 
    <div>
    <p class="font-mono text-red-400 text-[20px]">Tai Nghe ${prd_cate.data.name}</p>
     <div class="grid grid-cols-4 gap-2"> 
     ${prd_cate.data.posts.map((post) => /*html*/`
    <div class="border-[1px] border-slate-900 py-2 px-3 hover:border-red-500"> 
    <a href="/chap3/${post.id}" class="hover:text-stone-500" >
     <div>
           <img src="${post.images1}" alt="" class="mx-auto"><br>
           <p class="text-red-600 font-bold">${post.title} </p>
           <p >${post.price}</p>
      </div>
     </a>
       </div>
     `).join("")}
     </div>
     </div>

    
    `
  }
}
export default sPage;