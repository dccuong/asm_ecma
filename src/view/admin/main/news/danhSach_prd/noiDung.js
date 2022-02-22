import { getAll, remove } from "../../../../../api/posts";
import { reRender } from "../../../../../../utils";

const noiDung = {
  async print() {
    const { data } = await getAll();
    console.log(data)
    return /*html*/`
    <div class="item_home" id="item_admin">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden shadow-md ">
    <table class="min-w-full">
        <thead class="bg-gray-50 dark:bg-gray-700">
            <tr>
            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
            <a href="/admin/prds/add"> <button class="bg-blue-500 text-white mr-3 px-2">Thêm Mới</button></a>
            </th>
                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                titler
                </th>
                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                Price
                </th>
                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
               Image
                </th>
                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                categoryId
                </th>
           
                <th scope="col"class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                 xóa
                </th>
            </tr>
        </thead>
        <tbody class="">
            ${data.map(prd => /*html*/`
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"></td>
            


               <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">${prd.title}</td>
                <td class=" py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"  id="gia_sp">${prd.price}.000</td>
                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"> <img  src="${prd.images1}" width="50px">
                   
                  
                </td>
                <td class=" py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">${prd.categoryId}</td>
                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <button data-id="${prd.id}" class="bg-red-500 text-white btn btn-remove mr-2 px-2">Xóa</button>
                    <a href="/admin/prds/${prd.id}/edit"> <button class="bg-blue-500 text-white mr-2 px-2">Sủa</button></a>
                </td>
            </tr>`).join("")}
        </tbody>
       
    </table>
                </div>
            </div>
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
            document.location.href = "/admin/prds")
        }
      })
    })
  }
}
export default noiDung