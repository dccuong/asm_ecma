import data from "../../../data2";

const items_Chap3 = {
  print() {
    return /*html*/`
            <div>
             <div class="grid grid-cols-2 gap-4"> 
             ${data.map((post) => /*html*/`
            <div class="border-[1px] border-slate-900 py-2 px-3"> 
            <a href="/chap3/${post.id}" class="hover:text-stone-500" >
             <div>
                   <img src="${post.img}" alt="" class="mx-auto"><br>
                   <p class="text-red-600 font-bold">${post.title} </p>
                   <p >${post.desc}</p>
              </div>
             </a>
               </div>
             `).join("")}
             </div>
            `
  }
}
export default items_Chap3