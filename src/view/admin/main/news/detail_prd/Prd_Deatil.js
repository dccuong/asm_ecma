import axios from "axios";
import { get, update } from "../../../../../api/posts";

const prd_Detail = {
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
          Up File1
          </label>
          <img  src="${data.images1}"id="previewImage1">
          <input id="images1" value="${data.images2}" class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="file" }>
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Up File2
        </label>
        <img  src="${data.images2}" id="previewImage2">
        <input id="images2" value="${data.images2}" class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="file" }>
      </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
         id
        </label>
        <input value="${data.id}" class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="number">
      </div>
      <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
     Enter Option
      </label>
      
    <select id="category" class="block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
    <option value="${data.categoryId}">${data.categoryId.name}</option>
    <option value="1">Có dây</option>
      <option value="2">Không dây</option>
      </select>
    </div>
    <div class="w-full md:w-1/2 px-3">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
   Enter Price
    </label>
    <input id="price" value="${data.price}" class=" block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" >
  </div>
    
        </div>
        <button type="submit" class="appearance-none block w-[25%] mt-[10px] mx-auto bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">Edit_News</button>
       
      </form>
            </div>
        `;
  },
  afterRender(id) {
    const formEdit = document.querySelector('#formEdit');
    const imgPost1 = document.querySelector('#images1');
    const imgPost2 = document.querySelector('#images2');
    const imgPreview1 = document.querySelector('#previewImage1');
    const imgPreview2 = document.querySelector('#previewImage2');
    let imgUploadedLink1 = "";
    let imgUploadedLink2 = "";
    imgPost1.addEventListener("change", (e) => {
      imgPreview1.src = URL.createObjectURL(imgPost1.files[0])
    });
    imgPost2.addEventListener("change", (e) => {
      imgPreview2.src = URL.createObjectURL(imgPost2.files[0])
    });


    const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dcjtdlsw7/image/upload"
    const CLOUDINARY_PRESET = "uiqccvxh";
    formEdit.addEventListener('submit', async (e) => {
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
      update({
        id,
        title: document.querySelector("#title").value,
        desc: document.querySelector('#desc').value,
        images1: response1.data.url,
        images2: response2.data.url,
        price: document.querySelector('#price').value,
        categoryId: document.querySelector('#category').value,
      })
        .then(() => document.location.href = "/#/admin/news")
        .catch((error) => console.log(error))
    });
  }
}
export default prd_Detail;