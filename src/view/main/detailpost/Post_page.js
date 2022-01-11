import data2 from "../../../data2";



const Post_page = {
    print(id) {
        const result = data2.find((post) => post.id === id);
        return /*html*/`
        <div  class="mt-[20px] text-center" >
            <h1 class="font-bold">${result.title}</h1>
            <img src="${result.img}" class="mx-auto" />
            <p>${result.desc}</p>
        `;
    }
}
export default Post_page;