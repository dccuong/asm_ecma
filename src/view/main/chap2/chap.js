import items_chap2 from "./chap2";
const chap2page = {

    print() {
        return (/*html*/`
    <div class="w-[960px] my-2">
        <img src="https://picsum.photos/960/240" alt="" class="mx-auto">
      </div>
      <div class="item_home">
        ${items_chap2.print()}
      </div>`)
    }
}
export default chap2page
