/*TODO: We can't use require because node modules are not supported natively in the browser. 
We need to pass by webpack or browserify or adjust our node modules to be directly compatible with the browser.
const genform = require("@jathoosh/genform"); */
const genform = module.exports = {};

genform.toForm = function(document, obj) {
    const form = document.createElement("form");
    form.setAttribute("action", obj.params.action);
    form.setAttribute("method", obj.params.method);
    obj.elems.forEach(elem => {
        const element = document.createElement("input");
        const keys = Object.keys(elem);
        for (const key in keys) {
            element.setAttribute(keys[key], elem[keys[key]]);
        }
        form.appendChild(element);
    });
    return form;
}

// eslint-disable-next-line no-unused-vars
function changeForm() {
    const json = document.getElementById("changeform").value;
    const obj = JSON.parse(json);
    const formInHtml = document.getElementById("genform");
    const form = genform.toForm(document, obj);
    formInHtml.innerHTML = "";
    formInHtml.appendChild(form);
}