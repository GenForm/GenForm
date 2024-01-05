import { onMounted as m, openBlock as a, createElementBlock as s, ref as u } from "vue";
import i from "@genform/core";
const f = { ref: "formRef" }, p = {
  __name: "GenFormComponent",
  props: {
    elems: Array,
    params: Object
  },
  setup(n) {
    const l = n, o = u < HTMLElement | null > null;
    return m(() => {
      const r = i.toForm(document, {
        elems: l.elems,
        params: l.params
      });
      o.value instanceof HTMLElement && (o.value.innerHTML = "", o.value.appendChild(r));
    }), (r, d) => (a(), s("div", f, null, 512));
  }
};
function t(n) {
  t.installed || (t.installed = !0, n.component("GenFormComponent", p));
}
const c = { install: t };
let e = null;
typeof window < "u" ? e = window.Vue : typeof global < "u" && (e = global.Vue);
e && e.use(c);
export {
  p as default,
  t as install
};
