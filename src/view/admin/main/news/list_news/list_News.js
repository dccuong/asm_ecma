import items_News from "./items_news"
const List_News = {
  print() {
    return /*html*/`
        <div class="item_home">
        ${items_News.print()}
      </div>
        `
  }
}
export default List_News