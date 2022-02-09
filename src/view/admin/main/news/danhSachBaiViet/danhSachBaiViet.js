import items_News from "./noiDung"
const danhSachBaiViet = {
  async print() {
    return /*html*/`
        <div class="item_home">
        ${await items_News.print()}
      </div>
        `
  }
}
export default danhSachBaiViet