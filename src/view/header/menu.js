const Menu = {
  print() {
    return/*html*/`
        <ul class="flex flex-3  ">
          <li><a href="" class="block py-[16px] px-[20px] font-bold hover:bg-red-500">Home</a>
          </li>
          <li><a href="/khong_day/1" class="block py-[16px] px-[20px] font-bold hover:bg-red-500">Không Dây</a>
          </li>
          <li><a href="/co_day/2" class="block py-[16px] px-[20px] font-bold hover:bg-red-500">Có Dây</a>
          </li>
          <li><a href="/buy" class="block py-[16px] px-[20px] font-bold hover:bg-red-500">Giỏ Hàng</a>
          </li>
        
        </ul>
        
        `
  }

}
export default Menu;