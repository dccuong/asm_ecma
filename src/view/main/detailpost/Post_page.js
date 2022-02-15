import { get } from "../../../api/posts"

const Post_page = {
    async print(id) {
        const { data } = await get(id);

        return /*html*/`
                <div  class="mt-[20px] text-center flex" >
               
                <div id="divimg" class="w-[50%]  border-[1px] border-slate-900 py-2 px-3 " >
                <img id="img1" class="w-[454px] h-[454px]" src="${data.images1}"/>
                <img id="img2" class="w-0 h-0" src="${data.images2}"/>
               </div>
                <div class="w-[50%] ">
                <h1 class="font-bold uppercase text-red-500  ">${data.title}</h1>
                <p>${data.desc}</p>
                <button >${data.price}</button>
                </div>
                <hr>
                </div>
                
                <style>
                #divimg:hover #img1 {
                    width:0%;
                    height:0%;
                }
                
                #divimg:hover #img2 {
                    width:454px;
                    height:454px;
                }
                </style>
        `
    },


}
export default Post_page;