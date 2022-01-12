const Menu = {
  print() {
    return/*html*/`
        <ul class="flex flex-3">
          <li><a href="" class="block py-[16px] px-[20px] font-bold hover:bg-stone-500">Home</a>
          </li>
          <li><a href="/chap2" class="block py-[16px] px-[20px] font-bold hover:bg-stone-500">chap2_navigo</a>
          </li>
          <li><a href="/chap3" class="block py-[16px] px-[20px] font-bold hover:bg-stone-500">chap3_find()</a>
          </li>
          <li><a href="/signin" class="block py-[16px] px-[20px] font-bold hover:bg-stone-500">sign in</a>
          </li>
          <li><a href="/signup" class="block py-[16px] px-[20px] font-bold hover:bg-stone-500">sign up</a>
          </li>

        </ul>
        `
  }
}
export default Menu;