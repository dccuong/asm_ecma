import { signin } from "../../../api/user";
import toastr from "toastr";

const Sign_in = {
  async print() {
    return /*html*/`
         <form id="signin" class="mt-8 space-y-6" action="#" method="POST">
         <input type="hidden" name="remember" value="true">
         <div class="rounded-md shadow-sm -space-y-px">
           <div>
             <label for="email-address" class="sr-only">Email address</label>
             <input id="email" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
           </div>
           <div>
             <label for="password" class="sr-only">Password</label>
             <input id="pass" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
           </div>
         </div>
   
         <div class="flex items-center justify-between">
           <div class="flex items-center">
             <input id="remember" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
             <label for="remember-me" class="ml-2 block text-sm text-gray-900">
               Remember me
             </label>
           </div>
   
           <div class="text-sm">
             <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
               Forgot your password?
             </a>
           </div>
         </div>
   
         <div>
         <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-900 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
         <span class="absolute left-0 inset-y-0 flex items-center pl-3">
           <!-- Heroicon name: solid/lock-closed -->
           <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
             <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
           </svg>
         </span>
         Sign in
       </button>
         </div>
       </form>`
  },
  afterRender() {
    const formSignin = document.querySelector("#signin");
    formSignin.addEventListener("submit", async (e) => {
      e.preventDefault();
      try {
        // call api
        const { data } = await signin({
          email: document.querySelector("#email").value,
          password: document.querySelector("#pass").value,
        });
        localStorage.setItem('user', JSON.stringify(data.user))
        if (data.user.id == 1) {
          document.location.href = "/admin/news"
        } else {
          document.location.href = "/"
        }
      } catch (error) {
        toastr.errors(error.response.data)
      }

    });
  },
};
export default Sign_in