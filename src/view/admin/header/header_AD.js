const Header_Ad = {
    print() {
        return /*html*/`
       
        <div class="bg-gray-500 h-[80px]" >
        <ul class="flex pt-[25px] justify-around">
        <li class="mr-6">
          <a class="text-white hover:text-blue-800" href="#">DashBoard</a>
        </li>
        <li class="mr-6">
          <a class="text-white hover:text-blue-800" href="admin/news">News</a>
        </li>
        <li class="mr-6">
          <a class="text-white hover:text-blue-800" href="#">Link</a>
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