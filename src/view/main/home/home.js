import Banner from "./banner";
import items_home from "./item_home";
const Homepage = {
  async print() {
    return (/*html*/`
    ${Banner.print()}
      <div class="item_home w-[1024px] mx-auto">
        ${await items_home.print()}
      </div>`)
  }

}
export default Homepage
