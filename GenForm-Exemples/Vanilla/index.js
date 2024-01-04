import GenForm from 'https://unpkg.com/@genform/core@0.1.5/index.min.js'
// Because of this js file is called from index.html using a script tag with type="module", the function changeForm is not accessible from the global scope
// To allow the function to be called whenever the button is clicked, we need to add an event listener to the button
const submitButton = document.getElementById('submit')
submitButton.addEventListener('click', changeForm)

function changeForm() {
  const json = document.getElementById('changeform').value
  const obj = JSON.parse(json)
  const formInHtml = document.getElementById('genform')
  const form = GenForm.toForm(document, obj)

  formInHtml.innerHTML = ''
  formInHtml.appendChild(form)
}