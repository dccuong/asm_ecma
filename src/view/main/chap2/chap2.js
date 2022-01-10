import data from "../../../data";
const items_chap2 = {
    print() {
        return /*html*/` 
        <div>
         <div class="inline-block font-bold my-3">
           <h3>TIN TỨC HỌC TẬP</h3>
         </div>
         <div class="grid grid-cols-2 gap-8"> 
         ${data.map((post) => /*html*/`
           <div class="border-[1px] border-slate-900 py-2 px-3">
             <div>
               <img src="${post.image}" alt="" class="mx-auto"><br>
               <p class="text-red-600 font-bold">${post.title} </p>
               <p>${post.desc}</p>
             </div>
           </div>
         `).join("")}
         </div>
         </div> `
    }
}
export default items_chap2