<template>
    <section class="login">
            <form class="inicioSesionForm">
                <fieldset>
                    <legend>Inicia sesión</legend>
                    <div>
                        <label for="usernameLogin">Nombre de usuario:</label>
                        <input type="text" id="usernameLogin" name="usernameLogin" required>
                    </div>
                    <div>
                        <label for="passwordLogin">Contraseña:</label>
                        <input type="password" id="passwordLogin" name="passwordLogin" required>
                    </div>
                </fieldset>          
                <input type="submit" value="Iniciar Sesión">      
                <p>El usuario o contraseña no son correctos </p>
            </form>
        </section>
</template>

<script>

</script>