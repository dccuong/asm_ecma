import data2 from "../../../../../data2";



const edit_Detail = {
    print(id) {
        const result = data2.find((post) => post.id === id);
        return /*html*/`
        <div  class="mt-[20px] text-center" >
        <form class="w-[100%]  ">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block  text-gray-700 text-xs font-bold mb-2" >
             Enter titler
            </label>
            <input class=" block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" value="${result.title}" >
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block  text-gray-700 text-xs font-bold mb-2">
           Enter Decs
            </label>
            <input class="block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" value="${result.desc}">
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block  text-gray-700 text-xs font-bold mb-2" >
          Up File
          </label>
          <img src="${result.img}">
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="file" }>
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
         id
        </label>
        <input value="${result.id}" class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="number">
      </div>
        </div>
        <button typu="submit" class="appearance-none block w-[25%] mx-auto bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">Edit_News</button>
       
      </form>
            </div>
        `;
    }
}
export default edit_Detail;