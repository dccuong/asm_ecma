import items_News from "./items_news"


const list_News = {
  print() {
    return /*html*/`
        <div class="item_home">
        ${items_News.print()}
      </div>
        `
  }
}
export default list_News