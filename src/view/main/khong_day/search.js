
const sPage = {
  async print() {
    let search = [];
    if (localStorage.getItem('search')) {
      search = JSON.parse(localStorage.getItem('search'));
    }
    return /*html*/` 
    <div class="w-[1024px] mx-auto mt-[110px]">
    <p id="td">BẠN ĐANG TÌM?</p>
      <div class="grid grid-cols-4 gap-2"> 
        ${await search.map((post) => /*html*/`
          <div class=" border-[1px] rounded-[15px] shadow-sm border-slate-900 py-2 px-3 hover:border-red-500 hover:shadow-xl"> 
           <a href="#/tai_nghe/${post.id}" class="hover:text-stone-500" >
            <div>
                  <img src="${post.images1}" alt="" class="mx-auto w-[286px] h-[270px]" ><br>
                  <p class="text-red-600 font-bold">${post.title}</p>
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
export default sPage;