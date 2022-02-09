import { get } from "../../../api/posts"

const Post_page = {
    async print(id) {
        const { data } = await get(id);

        return /*html*/`
                <div  class="mt-[20px] text-center" >
                <h1 class="font-bold">${data.title}</h1>
                <img src="${data.images}" class="mx-auto" />
                <p>${data.desc}</p>
        `
    }
}
export default Post_page;