import Form from "./form"
import Logo from "./logo"
import Menu from "./menu"

const Header = {
  print() {
    return /*html*/`
    <div class="fixed top-0 w-[100%]">
        <div class="flex items-center bg-orange-200 justify-between">
      ${Logo.print()}
      </div>
      <div class="bg-slate-800 flex text-white ">
        ${Menu.print()}
        ${Form.print()}
      </div>
      </div>
    `
  },
  afterRender() {
    Logo.afterRender()
  }
}
export default Header