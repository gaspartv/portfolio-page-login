export class Login {
    static recoverPass() {
        const modalRecoverPassword = document.querySelector(".main__restore")
        const recoverPassword = document.getElementById("recoverPassword")
        recoverPassword.addEventListener("click", (event) => {
            event.preventDefault()
            modalRecoverPassword.classList.remove("hidden")
        })
    }

    static closedModal() {
        const modalRecoverPassword = document.querySelector(".main__restore")
        const closedBtn = document.querySelector(".main__closed")
        closedBtn.addEventListener("click", (event) => {
            event.preventDefault()
            modalRecoverPassword.classList.add("hidden")
        })
    }
}