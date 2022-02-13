const Logo = {
  print() {
    return/*html*/`
    <div class="px-[5px] my-[10px]"><img src="https://picsum.photos/70/30"></div>
        <div>
        <a href="/signin" id="sign_in" class=" text-[12px] font-bold hover:text-stone-100 mx-[10px]">sign in</a>
        <a href="/signup" id="sign_up" class="  text-[12px] font-bold hover:text-stone-100">sign up</a>  
        <span id="user" class=" text-[12px] font-bold hover:text-stone-100 mx-[10px]"></span>
        <a href="/admin/news"><span id="admin" class=" text-[12px] font-bold hover:text-stone-100"></span></a>        
        <button id="logout" class=" text-[12px] font-bold hover:text-stone-100"></button>
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
      admin.innerHTML = "Go Admin";
      logout.innerHTML = "Logout";
      sign_in.setAttribute("class", "hidden");
      sign_up.setAttribute("class", "hidden");

      logout.addEventListener('click', function () {
        localStorage.removeItem('user');
        document.location.href = "/"
      })
    }
  }
}
export default Logo;