<template>
    <div class="pageContainer">
        <header>
            <p class="pageHeader">Welcome Back!</p>
        </header>
        <form>
            <input type="text" class="nameInput" placeholder="Name" id="name" value="">
            <input type="email" class="emailInput" placeholder="Email" id="email" value="">
            <div class="passwordInputDiv">
                <input type="password" class="passwordInput" placeholder="Password" id="password" value="">
                <img src="/static/media/visibilityIcon.d42e2dff.svg" alt="show password" class="showPassword">
            </div>
            <a class="forgotPasswordLink" href="/forgot-password">Forgot Password</a>
            <div class="signUpBar">
                <p class="signUpText">Sign Up</p>
                <button class="signUpButton">
                    <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#ffffff"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
                </button>
            </div>
        </form>
        <div class="socialLogin">
            <p>Sign up with </p>
            <button class="socialIconDiv">
                <img class="socialIconImg" src="/static/media/googleIcon.a2a9c863.svg" alt="google">
            </button>
        </div>
        <a class="registerLink" href="/sign-in">Sign In Instead</a>
    </div>
</template>

<script>
</script>