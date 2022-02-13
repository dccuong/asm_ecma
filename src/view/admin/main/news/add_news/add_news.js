import axios from "axios";
import { add } from "../../../../../api/posts";

const add_News = {
  print() {
    return/*html*/`
        <form class="w-[100%]" id="add_news">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
       Enter titler
      </label>
      <input id="title" class="block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
     Enter Decs
      </label>
      <input id="desc" class=" block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" >
    </div>
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
    Up File
    </label>
    <input id="images" class=" block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="file">
  </div>
 
  
  <button type="submit" class="appearance-none block w-[25%] mx-auto bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">add_News</button>
 
</form>`
  },
  afterRender() {

    const formAdd = document.querySelector('#add_news');
    const imgPost = document.querySelector('#images');

    const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dcjtdlsw7/image/upload"
    const CLOUDINARY_PRESET = "uiqccvxh";
    formAdd.addEventListener('submit', async (e) => {
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

      add({
        "title": document.querySelector('#title').value,
        "images": response.data.url,
        "desc": document.querySelector('#desc').value
      });
      document.location.href = "/admin/news";
      // await reRender(AdminPost, "#app");
    })
  },
}
export default add_News