<script setup lang="ts">
definePageMeta({
    layout: 'auth'
})

const router = useRouter()

function navigateToLogin(){
    router.push({path:'/auth/login/'})
}
</script>

<template>
    <div class="bg-white rounded-lg w-[768px] flex shadow-lg lg:m-0 mx-8">
        <div class="rounded-s-lg overflow-hidden md:w-1/2 w-0">
            <img src="/img/whut.jpg" alt="Quizler" class="object-cover h-full">
        </div>
        <div class="md:w-1/2 w-full p-8">
            <h1 class="text-2xl font-bold">Register</h1>
            <p class="text-gray-400 mt-2">Before you can use our app. Please register first</p>
            <label class="block mt-4">
                <span class="block text-sm font-medium text-slate-700">Email</span>
                <input type="email"
                    class="border-2 border-gray-400 hover:border-primary focus:border-primary invalid:border-pink-500 focus:outline-none p-2 w-full rounded">
            </label>
            <label class="block mt-4">
                <span class="block text-sm font-medium text-slate-700">Password</span>
                <input type="password"
                    class="border-2 border-gray-400 hover:border-primary focus:border-primary invalid:border-pink-500 focus:outline-none p-2 w-full rounded">
            </label>

            <button class="bg-primary hover:bg-primaryHover rounded w-full p-2 text-white mt-8">Register</button>

            <p class="text-gray-400 mt-8">Already have an account? <span class="text-primary cursor-pointer" @click="navigateToLogin">Log in</span></p>
        </div>
    </div>
</template>