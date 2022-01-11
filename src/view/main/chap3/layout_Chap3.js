import items_Chap3 from "./items_chap3"

const chap3 = {
    print() {
        return /*html*/`
        <div class="item_home">
        ${items_Chap3.print()}
      </div>
        `
    }
}
export default chap3