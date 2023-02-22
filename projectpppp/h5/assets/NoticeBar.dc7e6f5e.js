var D = Object.defineProperty
  , L = Object.defineProperties;
var T = Object.getOwnPropertyDescriptors;
var b = Object.getOwnPropertySymbols;
var F = Object.prototype.hasOwnProperty
  , J = Object.prototype.propertyIsEnumerable;
var f = (o,i,e)=>i in o ? D(o, i, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : o[i] = e
  , I = (o,i)=>{
    for (var e in i || (i = {}))
        F.call(i, e) && f(o, e, i[e]);
    if (b)
        for (var e of b(i))
            J.call(i, e) && f(o, e, i[e]);
    return o
}
  , E = (o,i)=>L(o, T(i));
import {e as R, $as j, a0 as N, a1 as v, Y as B, a2 as O, A as x, m as u, o as P, r as p, n as M, s as m, a3 as V, M as k, w as a, F as Y, f as g, D as W, E as X, q as H, g as _, v as q, t as h, p as l} from "./vendor.b3053c36.js";
/* empty css               */
/* empty css               */
import {M as Z} from "./Pop.760da640.js";
var K = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAgCAYAAAB+ZAqzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVEOTM5NENDRkY0RDExRUM4RkIyOTZEMDdEQTBERjI0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVEOTM5NENERkY0RDExRUM4RkIyOTZEMDdEQTBERjI0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUQ5Mzk0Q0FGRjREMTFFQzhGQjI5NkQwN0RBMERGMjQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUQ5Mzk0Q0JGRjREMTFFQzhGQjI5NkQwN0RBMERGMjQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5zQ57DAAACIElEQVR42uyYSyhEURjHZ8ZjIdGIQll4LQhFYSMiCwsiEovxymOBYsFOFjYSCpk8FzQLkZKNhRVKKaVEFjaTEtl4hEgY/1PfrdPtztxz7xzPfPWruefcr/u/53z3+8431jObzSLRAkAXCAJDgj65oBYMgwtlMFCiqESwCRLo+gE4dXyYoCX6nQUKlAlZy9UCTjhRzIp1fPo5Uczy+Ul/VywTjIAijbk3H34LoEE11iFDGIulQdDr455XjbEIsEFxxVs1WPVXWBkYB/EG/dIpBqO5sUtQCg7UNxsRZgcTwGHiZdhztmjFFNsHJeBay0E0+JuB26Qo5Tl27toFcryJ4oWFgFANUsAsmAfhfnwkL6CJXq4P1IsssYviJkBjPlRinlskhPfeYfmBZrP8UPsXZia/fLW1gUYQDN5Vc1bgYXX3q4WxajEjcF/2Z26l9TdtpZu20aEj/PQ7Ykwo0f6niz8ljBXxO2oe1HyrMHYEiQUxGqSCaUnPUo493UK5RrCvrAGTINKAkBXys1CWf+JCZ44qgN8xtkytmcvkarHSc8Ndt4JtECYj+O9p2yvBlUFhrGMqpOaD7yOPQYasr3INJBk5jZIdUczucmNx4BBUyUoXD1RaKsC5gXJ3C/IoxnhjPWW7zDy2DpLBlMacR+fo06Mac8pOsM/0tqxxfeTG93T8RkE5dybbMZMuRC0KdNLJYcDL3wRqSwN1YIz/OD4EGABAKF9ZGU9apAAAAABJRU5ErkJggg==";
const $ = {
    style: {
        padding: "0.3rem 0",
        "padding-bottom": "1rem"
    }
}
  , ee = {
    style: {
        "vertical-align": "middle",
        color: "#969799"
    }
}
  , te = ["innerHTML"]
  , oe = R({
    components: {
        MyPop: Z,
        [j.name]: j,
        [N.name]: N,
        [v.name]: v,
        [B.name]: B
    }
});
function ie(o, {emit: i}) {
    const e = o
      , y = O()
      , s = x()
      , A = u(0)
      , c = u({})
      , w = ()=>{
        let t;
        for (let n = 0; n < e.noticeList.length; n++)
            if (n == A.value) {
                t = e.noticeList[n],
                i("update:currentNotice", t);
                break
            }
        return t
    }
      , C = ()=>{
        if (e.url) {
            location.href = e.url;
            return
        }
        if (e.to) {
            typeof e.to == "string" ? s.push({
                path: e.to
            }) : typeof e.to == "object" && s.push(e.to);
            return
        }
        e.mode == "link" && !y["right-icon"] && S()
    }
      , G = t=>{
        A.value = t
    }
      , r = u(!1)
      , S = ()=>{
        let t = w();
        if (!!t)
            if (t.url)
                location.href = t.url;
            else if (t.to)
                typeof t.to == "string" ? s.push({
                    path: t.to
                }) : typeof t.to == "object" && s.push(t.to);
            else {
                if (i("noticeClick", t),
                !e.needPop)
                    return;
                t.title && (c.value = t,
                r.value = !0)
            }
    }
    ;
    return P(()=>{}
    ),
    (t,n)=>{
        const U = p("van-swipe-item")
          , Q = p("van-swipe")
          , z = p("van-notice-bar");
        return g(),
        M(Y, null, [m(z, {
            scrollable: o.scrollable,
            "left-icon": k(K),
            style: {
                background: "transparent"
            },
            color: o.color,
            mode: o.mode,
            onClick: C
        }, V({
            default: a(()=>[m(Q, {
                vertical: "",
                style: X({
                    height: o.height,
                    lineHeight: o.height
                }),
                autoplay: o.autoplay,
                "show-indicators": !1,
                onChange: G
            }, {
                default: a(()=>[(g(!0),
                M(Y, null, H(o.noticeList, d=>(g(),
                _(U, null, {
                    default: a(()=>[q(h(d.title), 1)]),
                    _: 2
                }, 1024))), 256))]),
                _: 1
            }, 8, ["style", "autoplay"])]),
            _: 2
        }, [k(y)["right-icon"] ? {
            name: "right-icon",
            fn: a(()=>[W(t.$slots, "right-icon")])
        } : void 0]), 1032, ["scrollable", "left-icon", "color", "mode"]), m(Z, {
            show: r.value,
            "onUpdate:show": n[0] || (n[0] = d=>r.value = d),
            title: "Notice",
            style: {
                color: "#cbac8c"
            },
            "close-type": 2,
            "wrapper-style": {
                marginTop: "5rem",
                height: "60%",
                width: "80%",
                borderRadius: "10px"
            },
            "content-style": {
                padding: "4%",
                paddingBottom: "6%"
            }
        }, {
            default: a(()=>[l("div", null, [l("b", null, h(c.value.title), 1)]), l("div", $, [l("span", ee, h(c.value.time), 1)]), l("div", null, [l("div", {
                innerHTML: c.value.content
            }, null, 8, te)])]),
            _: 1
        }, 8, ["show"])], 64)
    }
}
const re = R(E(I({}, oe), {
    props: {
        noticeList: {
            type: Array,
            required: !0
        },
        height: {
            type: String,
            default: "2rem"
        },
        color: String,
        autoplay: {
            type: Number,
            default: 3e3
        },
        mode: {
            type: String,
            default: "link"
        },
        to: {
            type: [String, Object]
        },
        url: {
            type: String
        },
        currentNotice: {
            type: Object
        },
        scrollable: {
            type: Boolean,
            default: !1
        },
        needPop: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["update:currentNotice", "noticeClick"],
    setup: ie
}));
export {re as _, K as i};
