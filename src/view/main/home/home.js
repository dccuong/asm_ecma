import Banner from "./banner";
import items_home from "./item_home";
const Homepage = {
  async print() {
    return (/*html*/`
    <div class="w-[960px] my-2">
       ${Banner.print()}
      </div>
      <div class="item_home">
        ${await items_home.print()}
      </div>`)
  }
}
export default Homepage
