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
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
     Enter Price
      </label>
      <input id="price" class=" block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" >
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
     Enter Option
      </label>
      <select id="category" class="block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        <option value="1">Có dây</option>
      <option value="2">Không dây</option>
      </select>

    </div>
    
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
    Up File1
    </label>
    <input id="images1" class=" block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="file">
  </div>
  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
  Up File2
  </label>
  <input id="images2" class=" block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="file">
</div>
 
  
  <button type="submit" class="appearance-none block w-[25%] mx-auto bg-gray-200 text-gray-700 border  rounded py-3 px-4 mt-4 leading-tight focus:outline-none focus:bg-white">add_News</button>
 
</form>`
  },
  afterRender() {

    const formAdd = document.querySelector('#add_news');
    const imgPost1 = document.querySelector('#images1');
    const imgPost2 = document.querySelector('#images2');

    const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dcjtdlsw7/image/upload"
    const CLOUDINARY_PRESET = "uiqccvxh";
    formAdd.addEventListener('submit', async (e) => {
      e.preventDefault();


      // Lấy giá trị input file
      const file1 = imgPost1.files[0];
      const file2 = imgPost2.files[0];



      const formData1 = new FormData();
      formData1.append('file', file1);
      formData1.append('upload_preset', CLOUDINARY_PRESET)

      const formData2 = new FormData();
      formData2.append('file', file2);
      formData2.append('upload_preset', CLOUDINARY_PRESET)

      // call
      const response1 = await axios.post(CLOUDINARY_API, formData1, {
        headers: {
          "Content-Type": "application/form-data"
        }

      })
      const response2 = await axios.post(CLOUDINARY_API, formData2, {
        headers: {
          "Content-Type": "application/form-data"
        }
      })

      add({
        title: document.querySelector('#title').value,
        images1: response1.data.url,
        images2: response2.data.url,
        desc: document.querySelector('#desc').value,
        price: document.querySelector('#price').value,
        categoryId: document.querySelector('#category').value,
      });
      document.location.href = "/admin/news";
      // await reRender(AdminPost, "#app");
    })
  },
}
export default add_News