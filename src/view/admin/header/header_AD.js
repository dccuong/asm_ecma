const Header_Ad = {
  print() {
    return /*html*/`
       
        <div class="bg-gray-500 h-[80px] fixed top-0 w-[100%]" >
        <ul class="flex pt-[25px] justify-around">
        
        <li class="mr-6">
          <a class="text-white hover:text-blue-800" href="/admin">DashBoard</a>
        </li>
        <li class="mr-6">
          <a class="text-white hover:text-blue-800" href="/admin/news">News</a>
        </li>
        <li class="mr-6">
          <a class="text-white hover:text-blue-800" href="/acc">Acc</a>
        </li>
        <li class="mr-6">
          <a class="text-white hover:text-blue-800" href="">back to home</a>
        </li>
      </ul>
      </div>
        `
  }
}
export default Header_Ad