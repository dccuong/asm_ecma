import items_Chap3 from "./items_chap3"

const chap3 = {
  async print() {
    return /*html*/`
        <div class="item_home">
        ${await items_Chap3.print()}
      </div>
        `
  }
}
export default chap3