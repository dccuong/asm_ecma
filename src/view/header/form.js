import { getSearch } from "../../api/posts";

const Form = {
  print() {
    return    /*html*/`
    <div class="flex-1">
        <div class=" text-right">
          <form action="" method="get"  id="go_search">
            <ul class="flex items-center justify-end mt-[16px]">
              <li class="">
              <input type="text" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4  p-[2px] bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="tk" >
              <!-- Heroicon name: solid/chevron-down -->
              </li>
              <li class="mx-[10px]">
                <button type="submit" class="bg-stone-800 text-[14px] p-[2px] w-[100px]">TÌM KIẾM</button>
              </li>
            </ul>
          </form>
        </div>
      
      </div>
        `
  },
  afterRender() {

    const go_search = document.querySelector("#go_search");

    go_search.addEventListener("submit", (e) => {
      e.preventDefault();
      const valueSearch = document.querySelector("#tk").value;
      console.log(valueSearch)
      document.location.href("/search/post=?${valueSearch}")
    })

  }
};
export default Form; 