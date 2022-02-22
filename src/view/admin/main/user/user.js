import { getAllUser } from "../../../../api/user";

const userAcc = {
    async print() {
        const { data } = await getAllUser()
        console.log(data)

        return /*html*/`
   
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden shadow-md sm:rounded-lg">
        <table class="min-w-full">
            <thead class="bg-gray-50 dark:bg-gray-700">
                <tr>
                    <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                    Name
                    </th>
                    <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                    Email
                    </th>
                    <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                    password
                    </th>
                    <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                    
                    </th>
        
                </tr>
            </thead>
            <tbody class="">
                ${data.map(kq => /*html*/`
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">${kq.username}</td>
                    <td class=" py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"  id="gia_sp">${kq.email}</td>
        
                    <td class=" py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">${kq.password}</td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <button data-id="${kq.id}" class="bg-red-500 text-white btn btn-remove mr-2 px-2">Xóa</button>
                        <a href="/admin/prds/${kq.id}/edit"> <button class="bg-blue-500 text-white mr-2 px-2">Sủa</button></a>
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

    },


}
export default userAcc
