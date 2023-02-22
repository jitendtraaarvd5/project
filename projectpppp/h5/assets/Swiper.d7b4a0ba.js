var w = Object.defineProperty
  , k = Object.defineProperties;
var C = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty
  , x = Object.prototype.propertyIsEnumerable;
var c = (t,e,a)=>e in t ? w(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: a
}) : t[e] = a
  , l = (t,e)=>{
    for (var a in e || (e = {}))
        S.call(e, a) && c(t, a, e[a]);
    if (s)
        for (var a of s(e))
            x.call(e, a) && c(t, a, e[a]);
    return t
}
  , i = (t,e)=>k(t, C(e));
import {b as B} from "./index.c4526ec1.js";
import {e as u, k as p, a0 as m, a1 as h, A as b, r as _, g as d, w as f, E as F, f as o, n as I, q as j, p as q, F as A} from "./vendor.b3053c36.js";
const E = ["src"]
  , N = u({
    components: {
        [p.name]: p,
        [m.name]: m,
        [h.name]: h
    }
});
function z(t) {
    const e = b()
      , a = n=>{
        n.path ? e.push({
            path: n.path
        }) : n.url && (location.href = n.url)
    }
      , g = n=>B(n);
    return (n,L)=>{
        const y = _("van-swipe-item")
          , v = _("van-swipe");
        return o(),
        d(v, {
            autoplay: t.autoplay,
            "indicator-color": "white",
            style: F({
                height: t.height
            })
        }, {
            default: f(()=>[(o(!0),
            I(A, null, j(t.kv, r=>(o(),
            d(y, {
                onClick: R=>a(r)
            }, {
                default: f(()=>[q("img", {
                    src: g(r.cover),
                    style: {
                        width: "100%",
                        height: "100%"
                    }
                }, null, 8, E)]),
                _: 2
            }, 1032, ["onClick"]))), 256))]),
            _: 1
        }, 8, ["autoplay", "style"])
    }
}
const D = u(i(l({}, N), {
    props: {
        kv: {
            type: Array,
            required: !0
        },
        height: {
            type: String,
            default: "15rem"
        },
        autoplay: {
            type: Number,
            default: 3e3
        }
    },
    setup: z
}));
export {D as _};
