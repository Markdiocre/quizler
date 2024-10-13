<script setup lang="ts">
definePageMeta({
    layout: 'auth'
})
const router = useRouter()

const email = ref('')
const first_name = ref('')
const last_name = ref('')
const username = ref('')
const password = ref('')

function navigateToLogin(){
    router.push({path:'/auth/login/'})
}

function register(){

}
</script>

<template>
    <div class="bg-white rounded-lg w-[768px] flex shadow-lg lg:m-0 mx-8">
        <div class="rounded-s-lg overflow-hidden md:w-1/2 w-0">
            <img src="/img/whut.jpg" alt="Quizler" class="object-cover h-full">
        </div>
        <div class="md:w-1/2 w-full p-8">
            <h1 class="text-2xl font-bold">Register</h1>
            <label class="block mt-4">
                <span class="block text-sm font-medium text-slate-700">Email</span>
                <input type="email"
                    class="border-2 border-gray-400 hover:border-primary focus:border-primary invalid:border-pink-500 focus:outline-none p-2 w-full rounded">
            </label>
            <label class="block md:mt-1">
                <span class="block text-sm font-medium text-slate-700">First Name</span>
                <input type="text"
                    class="border-2 border-gray-400 hover:border-primary focus:border-primary invalid:border-pink-500 focus:outline-none p-2 w-full rounded">
            </label>
            <label class="block md:mt-1">
                <span class="block text-sm font-medium text-slate-700">Last Name</span>
                <input type="text"
                    class="border-2 border-gray-400 hover:border-primary focus:border-primary invalid:border-pink-500 focus:outline-none p-2 w-full rounded">
            </label>
            <label class="block md:mt-1">
                <span class="block text-sm font-medium text-slate-700">Username</span>
                <input type="username"
                    class="border-2 border-gray-400 hover:border-primary focus:border-primary invalid:border-pink-500 focus:outline-none p-2 w-full rounded">
            </label>
            <label class="block md:mt-1">
                <span class="block text-sm font-medium text-slate-700">Password</span>
                <input type="password"
                    class="border-2 border-gray-400 hover:border-primary focus:border-primary invalid:border-pink-500 focus:outline-none p-2 w-full rounded">
            </label>

            <button class="bg-primary hover:bg-primaryHover rounded w-full p-2 text-white mt-4">Register</button>

            <p class="text-gray-400 md:mt-8 mt-2">Already have an account? <span class="text-primary cursor-pointer" @click="navigateToLogin">Log in</span></p>
        </div>
    </div>
</template>