import { reRender } from "../../../utils";

const Logo = {
  print() {
    return/*html*/`
    <div class="flex items-center bg-orange-200 justify-between" id="he">
      <div class=" font-mono font-bold text-[20px] items-center">DCPAGE</div>
      <div class="my-[5px]" >
        <a href="/signin" id="sign_in" class=" text-[12px] font-bold hover:text-stone-100 mx-[10px]">sign in</a>
        <a href="/signup" id="sign_up" class="  text-[12px] font-bold hover:text-stone-100">sign up</a>  
        <span id="user" class=" text-[12px] font-bold hover:text-stone-100 mx-[10px]"></span>
        <a href="/admin/prds"><span id="admin" class=" text-[12px] font-bold hover:text-stone-100"></span></a>        
        <button id="logout" class=" text-[12px] font-bold hover:text-stone-100"></button>
      </div>
    </div>
        `
  }, afterRender() {
    const sign_in = document.querySelector('#sign_in');
    const sign_up = document.querySelector('#sign_up');
    const user = document.querySelector('#user');
    const admin = document.querySelector('#admin');
    const logout = document.querySelector('#logout');

    if (JSON.parse(localStorage.getItem('user'))) {
      user.innerHTML = JSON.parse(localStorage.getItem("user")).username;
      admin.innerHTML = "Go Admin=>";
      logout.innerHTML = "Logout...";
      sign_in.setAttribute("class", "hidden");
      sign_up.setAttribute("class", "hidden");

      logout.addEventListener('click', function () {
        localStorage.removeItem('user');
        reRender(Logo, "#he")
      })
    }
  }
}
export default Logo;