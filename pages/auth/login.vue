<script setup lang="ts">
definePageMeta({
    layout: 'auth',

})
const router = useRouter()

const username = ref('')
const password = ref('')

function navigateToRegister() {
    router.push({ path: '/auth/register/' })
}

async function login() {
    const res = await $fetch('/api/auth/login', {
        method: 'post',
        body: {
            "username": username.value,
            "password": password.value
        }
    }).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err.data.message)
    })

        //TODO: Handle errors and use toasts

}
</script>

<template>
    <div class="bg-white rounded-lg w-[768px] flex shadow-lg lg:m-0 mx-8">
        <div class="rounded-s-lg overflow-hidden md:w-1/2 w-0">
            <img src="/img/quiz-time.jpg" alt="Quizler" class="object-cover h-full">
        </div>
        <div class="md:w-1/2 w-full p-8">
            <h1 class="text-2xl font-bold">Login</h1>
            <form @submit.prevent="login">
                <label class="block mt-4">
                    <span class="block text-sm font-medium text-slate-700">Username</span>
                    <input v-model="username" type="text"
                        class="border-2 border-gray-400 hover:border-primary focus:border-primary focus:outline-none p-2 w-full rounded"
                        required>
                </label>
                <label class="block mt-4">
                    <span class="block text-sm font-medium text-slate-700">Password</span>
                    <input v-model="password" type="password"
                        class="border-2 border-gray-400 hover:border-primary focus:border-primary focus:outline-none p-2 w-full rounded"
                        required>
                </label>

                <button class="bg-primary hover:bg-primaryHover rounded w-full p-2 text-white mt-8"
                    type="submit">Login</button>
            </form>

            <p class="text-gray-400 mt-8">New User? <span class="text-primary cursor-pointer"
                    @click="navigateToRegister">Sign Up</span></p>
        </div>
    </div>
</template>