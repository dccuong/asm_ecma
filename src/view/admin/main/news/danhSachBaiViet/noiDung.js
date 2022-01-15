import data from "../../../../../data2";

const noiDung = {
  print() {
    return /*html*/`
            <div class="pt-[20px]">
            
             <div class="grid grid-cols-5 gap-2"> 
             <a href="/admin/news/add"><button type="button" class="w-[186px] h-[252px] bg-gray-500">+ <br> add news</button></a>
             ${data.map((post) => /*html*/`
            <div class="border-[1px] border-slate-900 py-2 px-3"> 
            <a href="admin/news/${post.id}/edit" class="hover:text-stone-500" >
             <div>
                   <img src="${post.img}" alt="" class="mx-auto"><br>
                   <p class="text-red-600 font-bold text-[10px]">${post.title} </p>
                   <p class=" text-[10px]">${post.desc}</p>
              </div>
             </a>
               </div>
              
             `).join("")}
          
             </div>
            `
  }
}
export default noiDung