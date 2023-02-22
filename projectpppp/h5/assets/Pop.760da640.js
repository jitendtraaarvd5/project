var b = Object.defineProperty
  , k = Object.defineProperties;
var x = Object.getOwnPropertyDescriptors;
var y = Object.getOwnPropertySymbols;
var C = Object.prototype.hasOwnProperty
  , j = Object.prototype.propertyIsEnumerable;
var u = (e,t,a)=>t in e ? b(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: a
}) : e[t] = a
  , m = (e,t)=>{
    for (var a in t || (t = {}))
        C.call(t, a) && u(e, a, t[a]);
    if (y)
        for (var a of y(t))
            j.call(t, a) && u(e, a, t[a]);
    return e
}
  , v = (e,t)=>k(e, x(t));
import {e as f, a6 as _, x as g, m as B, r as h, g as s, w as O, f as o, p as n, n as T, t as z, S as l, E as i, D as I, a7 as D} from "./vendor.b3053c36.js";
import {_ as M} from "./plugin-vue_export-helper.5a098b48.js";
const N = {
    class: "content"
}
  , E = f({
    components: {
        [_.name]: _,
        [g.name]: g
    }
});
function P(e, {emit: t}) {
    const a = e
      , c = B({
        position: "relative",
        lineHeight: "3rem",
        textAlign: "center",
        borderBottom: "1px solid #383a3a"
    });
    a.titleStyle && Object.assign(c.value, a.titleStyle);
    const r = ()=>{
        t("update:show", !1)
    }
    ;
    return (w,d)=>{
        const p = h("van-icon")
          , S = h("van-overlay");
        return o(),
        s(S, {
            show: e.show,
            style: {
                "z-index": "1999",
                "background-color": "rgba(53, 51, 51, 0.7)"
            }
        }, {
            default: O(()=>[n("div", {
                class: "wrapper animate__animated animate__slideInDown animate__faster",
                style: i(e.wrapperStyle),
                onClick: d[0] || (d[0] = D(()=>{}
                , ["stop"]))
            }, [e.title.length > 0 ? (o(),
            T("div", {
                key: 0,
                style: i(c.value)
            }, [n("span", null, z(e.title), 1), e.closeType == 1 ? (o(),
            s(p, {
                key: 0,
                name: "close",
                class: "close1",
                size: "28",
                onClick: r
            })) : l("", !0)], 4)) : l("", !0), n("div", N, [n("div", {
                class: "contentInner",
                style: i(e.contentStyle)
            }, [I(w.$slots, "default", {}, void 0, !0)], 4)]), e.closeType == 2 ? (o(),
            s(p, {
                key: 1,
                name: "close",
                class: "close2",
                size: "40",
                onClick: r
            })) : l("", !0)], 4)]),
            _: 3
        }, 8, ["show"])
    }
}
const V = f(v(m({}, E), {
    props: {
        show: {
            type: Boolean,
            default: !1
        },
        wrapperStyle: {
            type: Object,
            default: {
                width: "80%",
                height: "70%",
                marginTop: "10%"
            }
        },
        titleStyle: {
            type: Object,
            default: null
        },
        contentStyle: {
            type: Object,
            default: {
                padding: "5%"
            }
        },
        title: {
            type: String,
            default: ""
        },
        closeType: {
            type: Number,
            default: 2
        }
    },
    emits: ["update:show"],
    setup: P
}));
var q = M(V, [["__scopeId", "data-v-55185bd0"]]);
export {q as M};
