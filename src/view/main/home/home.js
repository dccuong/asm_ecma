import items_home from "./item_home";
const Homepage = {

  print() {
    return (/*html*/`
    <div class="w-[960px] my-2">
        <img src="https://picsum.photos/960/240" alt="" class="mx-auto">
      </div>
      <div class="item_home">
        ${items_home.print()}
      </div>`)
  }
}
export default Homepage
