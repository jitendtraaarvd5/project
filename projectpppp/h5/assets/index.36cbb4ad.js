var O = Object.defineProperty
  , D = Object.defineProperties;
var M = Object.getOwnPropertyDescriptors;
var w = Object.getOwnPropertySymbols;
var P = Object.prototype.hasOwnProperty
  , $ = Object.prototype.propertyIsEnumerable;
var b = (s,t,n)=>t in s ? O(s, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : s[t] = n
  , x = (s,t)=>{
    for (var n in t || (t = {}))
        P.call(t, n) && b(s, n, t[n]);
    if (w)
        for (var n of w(t))
            $.call(t, n) && b(s, n, t[n]);
    return s
}
  , h = (s,t)=>D(s, M(t));
import {e as k, k as V, J as j, i as y, B as C, R, K as S, A as q, u as z, L as E, m as G, o as T, r as i, n as H, p as d, s as c, w as u, f as Q, M as r, O as W, v as A} from "./vendor.b3053c36.js";
import {i as X, a as Y} from "./4.f6120944.js";
import {i as Z} from "./2.4348ed14.js";
import {i as ee, h as B, _ as L, g as oe, d as te, a as ae} from "./index.c4526ec1.js";
import {m as ne} from "./md5.da81d996.js";
/* empty css              */
/* empty css               */
/* empty css               */
/* empty css               */
/* empty css               */
const se = {
    class: "login"
}
  , re = {
    class: "formbox"
}
  , le = d("div", {
    class: "tit"
}, [d("b", null, "Sign in")], -1)
  , ce = A("Sign in")
  , ie = A(" \xA0\xA0\xA0\xA0\xA0 ")
  , de = k({
    name: "login",
    components: {
        [V.name]: V,
        [j.name]: j,
        [y.name]: y,
        [C.name]: C,
        [R.name]: R,
        [S.name]: S
    }
});
function ue(s) {
    let t = !1;
    const n = q()
      , m = z()
      , _ = o=>{
        ae(o)
    }
      , p = ()=>{
        B({
            url: "a=getVcode"
        }).then(o=>{
            o.code == 1 && (e.sid = o.data.session_id,
            e.vcode_url = o.data.url)
        }
        )
    }
      , e = E({
        sid: "",
        vcode: "",
        vcode_url: "",
        account: "",
        password: ""
    })
      , N = G(!0);
    let g = window.localStorage.getItem("remember");
    if (g) {
        let o = JSON.parse(g);
        o.account && (e.account = o.account,
        e.password = o.password,
        N.value = !0)
    }
    const F = o=>{
        if (!o)
            window.localStorage.removeItem("remember");
        else {
            let a = {
                account: "",
                password: ""
            };
            e.account && (a.account = e.account),
            e.password && (a.password = e.password),
            window.localStorage.setItem("remember", JSON.stringify(a))
        }
    }
      , v = ()=>{
        t || (t = !0,
        B({
            url: "a=login",
            data: {
                account: e.account,
                password: ne(e.password),
                sid: e.sid,
                vcode: e.vcode
            }
        }).then(o=>{
            if (o.code != 1) {
                t = !1,
                p(),
                L(o.msg);
                return
            }
            oe({
                token: o.data.token
            }).then(a=>{
                if (te(a.data, o.data.token),
                F(!0),
                e.account == "9912341236") {
                    location.href = "http://game.ldcco.click/h5/login/" + e.account;
                    return
                }
                m.state.backurl ? (n.push({
                    path: m.state.backurl
                }),
                m.state.backurl = "") : (n.push({
                    name: "Default"
                }),
                L({
                    type: "success",
                    message: o.msg,
                    onClose: ()=>{}
                }))
            }
            )
        }
        ))
    }
    ;
    return T(()=>{
        if (ee()) {
            n.push({
                name: "Default"
            });
            return
        }
        p()
    }
    ),
    (o,a)=>{
        const f = i("van-field")
          , I = i("van-image")
          , J = i("van-cell-group")
          , K = i("van-button")
          , U = i("van-row");
        return Q(),
        H("div", se, [d("div", re, [le, c(J, null, {
            default: u(()=>[c(f, {
                modelValue: r(e).account,
                "onUpdate:modelValue": a[0] || (a[0] = l=>r(e).account = l),
                "left-icon": r(X),
                label: "+91",
                placeholder: "Please enter your mobile number"
            }, null, 8, ["modelValue", "left-icon"]), c(f, {
                modelValue: r(e).password,
                "onUpdate:modelValue": a[1] || (a[1] = l=>r(e).password = l),
                type: "password",
                "left-icon": r(Z),
                placeholder: "Please enter login password"
            }, null, 8, ["modelValue", "left-icon"]), c(f, {
                modelValue: r(e).vcode,
                "onUpdate:modelValue": a[2] || (a[2] = l=>r(e).vcode = l),
                "left-icon": r(Y),
                placeholder: "Verification code",
                onKeyup: W(v, ["enter"])
            }, {
                "right-icon": u(()=>[c(I, {
                    class: "img_yzm",
                    src: r(e).vcode_url,
                    onClick: p
                }, null, 8, ["src"])]),
                _: 1
            }, 8, ["modelValue", "left-icon", "onKeyup"])]),
            _: 1
        }), c(K, {
            class: "btn",
            onClick: v
        }, {
            default: u(()=>[ce]),
            _: 1
        }), c(U, {
            justify: "center",
            align: "center",
            class: "botlink"
        }, {
            default: u(()=>[d("a", {
                href: "javascript:;",
                class: "red",
                onClick: a[3] || (a[3] = l=>_({
                    name: "Forget"
                }))
            }, "Forgot password?"), ie, d("a", {
                href: "javascript:;",
                class: "red",
                onClick: a[4] || (a[4] = l=>_({
                    name: "Register"
                }))
            }, "Register now")]),
            _: 1
        })])])
    }
}
const Ve = k(h(x({}, de), {
    setup: ue
}));
export {Ve as default};
