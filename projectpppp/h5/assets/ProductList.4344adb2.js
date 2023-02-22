var E = Object.defineProperty
  , J = Object.defineProperties;
var O = Object.getOwnPropertyDescriptors;
var b = Object.getOwnPropertySymbols;
var U = Object.prototype.hasOwnProperty
  , z = Object.prototype.propertyIsEnumerable;
var B = (a,s,o)=>s in a ? E(a, s, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: o
}) : a[s] = o
  , S = (a,s)=>{
    for (var o in s || (s = {}))
        U.call(s, o) && B(a, o, s[o]);
    if (b)
        for (var o of b(s))
            z.call(s, o) && B(a, o, s[o]);
    return a
}
  , j = (a,s)=>J(a, O(s));
import {a as A} from "./index.c4526ec1.js";
import {_ as w} from "./ListBase.dedbac09.js";
import {_ as C} from "./Swiper.d7b4a0ba.js";
import {e as x, a4 as D, a5 as L, k as N, B as F, P, m as h, L as K, o as Q, r as H, n as u, s as y, w as _, M as W, F as g, p as n, f as c, q as X, t as r, S as Y, g as v, v as l} from "./vendor.b3053c36.js";
/* empty css              */
/* empty css               */
const Z = {
    class: "ProList"
}
  , ee = ["onClick"]
  , se = {
    class: "name"
}
  , te = {
    class: "items"
}
  , ne = l("Price:")
  , oe = {
    key: 0
}
  , ae = l("Remaining:")
  , ce = l("Term:")
  , re = l("Daily income:")
  , le = l("Total revenue:")
  , ie = l("Join project")
  , ue = n("div", {
    style: {
        height: "1rem"
    }
}, null, -1)
  , de = x({
    components: {
        MyListBase: w,
        MySwiper: C,
        [D.name]: D,
        [L.name]: L,
        [N.name]: N,
        [F.name]: F,
        [P.name]: P
    }
});
function _e(a, {expose: s, emit: o}) {
    const k = a
      , I = t=>{
        A(t)
    }
      , p = h();
    let M = h("c=Product&a=list");
    const R = h({})
      , m = K({
        cid: k.categoryId,
        is_hot: k.isHot
    })
      , T = t=>{
        R.value = t.data,
        o("success", t.data)
    }
      , V = t=>{
        let f = [];
        for (let i in t)
            f.push({
                cover: t[i]
            });
        return f
    }
      , $ = t=>{
        t.t = 0
    }
    ;
    return s({
        doSearch: t=>{
            typeof t == "object" && Object.assign(m, t),
            p.value.doSearch(m)
        }
    }),
    Q(()=>{
        p.value.doSearch(m)
    }
    ),
    (t,f)=>{
        const i = H("van-button")
          , q = H("van-count-down");
        return c(),
        u(g, null, [y(w, {
            url: W(M),
            ref: (d,e)=>{
                e.pageRef = d,
                p.value = d
            }
            ,
            onSuccess: T,
            "auto-load": !1
        }, {
            default: _(({list: d})=>[n("ul", Z, [(c(!0),
            u(g, null, X(d, e=>(c(),
            u("li", {
                onClick: G=>I({
                    name: "Product_goods",
                    query: {
                        gsn: e.gsn
                    }
                })
            }, [y(C, {
                kv: V(e.icon),
                class: "pic",
                style: {
                    "border-radius": "0.6rem",
                    height: "12.5rem"
                }
            }, null, 8, ["kv"]), n("p", se, r(e.name), 1), n("div", te, [n("p", null, [ne, n("span", null, "\u20B9" + r(e.price), 1)]), e.is_remaining == 1 ? (c(),
            u("p", oe, [ae, n("span", null, "(" + r(e.v_stock_num) + ") pieces", 1)])) : Y("", !0), n("p", null, [ce, n("span", null, r(e.days) + "days", 1)]), n("p", null, [re, n("span", null, "\u20B9" + r(e.day_profit), 1)]), n("p", null, [le, n("span", null, "\u20B9" + r(e.profit), 1)])]), e.status != 3 ? (c(),
            v(i, {
                key: 0,
                class: "buyBtn",
                style: {
                    "background-color": "#999999"
                }
            }, {
                default: _(()=>[l(r(e.status_flag), 1)]),
                _: 2
            }, 1024)) : (c(),
            u(g, {
                key: 1
            }, [!e.t || e.t <= 0 ? (c(),
            v(i, {
                key: 0,
                class: "buyBtn"
            }, {
                default: _(()=>[ie]),
                _: 1
            })) : (c(),
            v(i, {
                key: 1,
                class: "buyBtn"
            }, {
                default: _(()=>[y(q, {
                    style: {
                        color: "white",
                        "line-height": "1.4rem"
                    },
                    time: e.t * 1e3,
                    "auto-start": !0,
                    format: "DD Days HH:mm:ss",
                    onFinish: G=>$(e)
                }, null, 8, ["time", "onFinish"])]),
                _: 2
            }, 1024))], 64))], 8, ee))), 256))])]),
            _: 1
        }, 8, ["url"]), ue], 64)
    }
}
const be = x(j(S({}, de), {
    props: {
        categoryId: {
            type: Number,
            default: 0
        },
        isHot: {
            type: Number,
            default: -1
        }
    },
    emits: ["success"],
    setup: _e
}));
export {be as _};
