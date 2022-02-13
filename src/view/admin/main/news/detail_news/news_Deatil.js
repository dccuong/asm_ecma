import axios from "axios";
import { get, update } from "../../../../../api/posts";

const new_Detail = {
  async print(id) {
    const { data } = await get(id);

    return /*html*/` 
        <div  class="mt-[20px] text-center" >
        <form class="w-[100%] " id="formEdit">
        <div class="flex flex-wrap -mx-3 formEditmb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
             Enter titler
            </label>
            <input id="title" class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" value="${data.title}" >
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
           Enter Decs
            </label>
            <input id="desc" class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" value="${data.desc}">
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
          Up File
          </label>
          <img  src="${data.images}" id="img">
          <input id="images" class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="file" }>
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
         id
        </label>
        <input value="${data.id}" class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="number">
      </div>
        </div>
        <button type="submit" class="appearance-none block w-[25%] mx-auto bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">Edit_News</button>
       
      </form>
            </div>
        `;
  },
  afterRender(id) {
    const formEdit = document.querySelector('#formEdit');
    const imgPost = document.querySelector('#images');
    const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dcjtdlsw7/image/upload"
    const CLOUDINARY_PRESET = "uiqccvxh";
    formEdit.addEventListener('submit', async (e) => {
      e.preventDefault();
      // Lấy giá trị input file
      const file = imgPost.files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', CLOUDINARY_PRESET)
      // call
      const response = await axios.post(CLOUDINARY_API, formData, {
        headers: {
          "Content-Type": "application/form-data"
        }
      })
      update({
        id,
        title: document.querySelector("#title").value,
        desc: document.querySelector('#desc').value,
        images: response.data.url,
      })
        .then((result) => console.log(result.data))
        .catch((error) => console.log(error))
    });
  }
}
export default new_Detail;