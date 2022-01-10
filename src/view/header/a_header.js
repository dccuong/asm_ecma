import Form from "./form"
import Logo from "./logo"
import Menu from "./menu"

const Header = {
  print() {
    return /*html*/`
        <div class="bg-blue-900 py-[16px]">
      ${Logo.print()}
      </div>
      <div class="bg-orange-600 flex text-white">
        ${Menu.print()}
        ${Form.print()}
      </div>
    `
  }
}
export default Header