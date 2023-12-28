const genform = (module.exports = {})

// PARTIE ESTHETIQUE
const addChar = function (textarea, text) {
    let i = 0
    const interval = setInterval(function () {
        textarea.value += text[i]
        i++
        if (i == text.length) {
            clearInterval(interval)
        }
    }, 1)
}

addChar(
    document.getElementById('changeform'),
    `{
    "elems": [
        {
            "type": "text",
            "name": "username",
            "placeholder": "Enter your username",
            "required": "true"
        },
        {
            "type": "password",
            "name": "password",
            "placeholder": "Enter your password",
            "required": "true"
        },

        {
            "type": "reset",
            "value": "Reset"
        },
        {
            "type": "submit",
            "value": "Login"
        }
    ],
    "params": {
        "action": "/login",
        "method": "POST"
    }
}`
)

// PARTIE AUTO GEN
genform.toForm(document, {
    elems: [
        {
            type: 'text',
            name: 'name',
            placeholder: 'Name'
        },
        {
            type: 'email',
            name: 'email',
            placeholder: 'Email'
        },
        {
            type: 'password',
            name: 'password',
            placeholder: 'Password'
        },
        {
            type: 'submit',
            value: 'Submit'
        }
    ],
    params: {
        action: '/register',
        method: 'POST'
    }
})

/* Code pour inclure dès le chargement de la page
formInHtml = document.getElementById("genform");
formInHtml.appendChild(form);*/
