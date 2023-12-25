import genform from 'https://unpkg.com/@genform/core@0.0.4/index.min.js'

const submitButton = document.getElementById('submit')
submitButton.addEventListener('click', changeForm)

function changeForm() {
    const json = document.getElementById('changeform').value
    const obj = JSON.parse(json)
    const formInHtml = document.getElementById('genform')
    const form = genform.toForm(document, obj)
    formInHtml.innerHTML = ''
    formInHtml.appendChild(form)
}
