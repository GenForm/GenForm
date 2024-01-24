import { ref as o, onMounted as a, openBlock as l, createElementBlock as i } from "vue";
import m from "@genform/complete";
const p = {
  __name: "GenFormComponent",
  props: {
    isFromFile: {
      type: Boolean,
      default: !1
    },
    file: {
      type: String,
      validator: (r, e) => e.isFromFile ? r !== void 0 : !0
    },
    elems: {
      type: Array,
      validator: (r, e) => e.isFromFile ? !0 : r !== void 0
    },
    params: {
      type: Object,
      validator: (r, e) => e.isFromFile ? !0 : r !== void 0
    },
    features: {
      type: Object,
      default: () => ({})
    }
  },
  setup(r) {
    const e = r, t = o(null);
    return a(() => {
      const n = m.toForm(document, e.isFromFile ? e.file : {
        elems: e.elems,
        params: e.params,
        features: e.features
      });
      t.value instanceof HTMLElement && (t.value.innerHTML = "", t.value.appendChild(n));
    }), (n, s) => (l(), i("div", {
      ref_key: "formRef",
      ref: t
    }, null, 512));
  }
};
export {
  p as default
};
