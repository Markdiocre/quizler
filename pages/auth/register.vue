<script setup lang="ts">
import requestHandler from '~/utils/requestHandler';

definePageMeta({
    layout: 'auth'
})

const router = useRouter()
const email = ref('')
const password = ref('')
const confirm_password = ref('')

function navigateToLogin(){
    router.push({path:'/auth/login/'})
}

async function register(){
    const res = await requestHandler({
        url: '/api/auth/register',
        method: 'POST',
        body:{
            email: email.value,
            password: password.value,
            confirm_password : confirm_password.value
        }
    })

}
</script>

<template>
    <div class="bg-white rounded-lg w-[768px] flex shadow-lg lg:m-0 mx-8">
        <div class="rounded-s-lg overflow-hidden md:w-1/2 w-0">
            <img src="/img/whut.jpg" alt="Quizler" class="object-cover h-full">
        </div>
        <div class="md:w-1/2 w-full p-8">
            <h1 class="text-2xl font-bold">Register</h1>
            <form @submit.prevent="register">
            <label class="block mt-4">
                <span class="block text-sm font-medium text-slate-700">Email</span>
                <input v-model="email" required type="email"
                    class="border-2 border-gray-400 hover:border-primary focus:border-primary focus:outline-none p-2 w-full rounded">
            </label>
            <label class="block md:mt-1">
                <span class="block text-sm font-medium text-slate-700">Password</span>
                <input v-model="password" required type="password"
                    class="border-2 border-gray-400 hover:border-primary focus:border-primary focus:outline-none p-2 w-full rounded">
            </label>
            <label class="block md:mt-1">
                <span class="block text-sm font-medium text-slate-700">Confirm Password</span>
                <input v-model="confirm_password" required type="password"
                    class="border-2 border-gray-400 hover:border-primary focus:border-primary focus:outline-none p-2 w-full rounded">
            </label>

            <button type="submit" class="bg-primary hover:bg-primaryHover rounded w-full p-2 text-white mt-4">Register</button>
        </form>

            <p class="text-gray-400 md:mt-8 mt-2">Already have an account? <span class="text-primary cursor-pointer" @click="navigateToLogin">Log in</span></p>
        </div>
    </div>
</template>