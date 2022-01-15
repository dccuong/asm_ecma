import items_News from "./noiDung"
const danhSachBaiViet = {
  print() {
    return /*html*/`
        <div class="item_home">
        ${items_News.print()}
      </div>
        `
  }
}
export default danhSachBaiViet