var q = Object.defineProperty
  , $ = Object.defineProperties;
var ee = Object.getOwnPropertyDescriptors;
var k = Object.getOwnPropertySymbols;
var oe = Object.prototype.hasOwnProperty
  , ne = Object.prototype.propertyIsEnumerable;
var E = (a,t,s)=>t in a ? q(a, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : a[t] = s
  , M = (a,t)=>{
    for (var s in t || (t = {}))
        oe.call(t, s) && E(a, s, t[s]);
    if (k)
        for (var s of k(t))
            ne.call(t, s) && E(a, s, t[s]);
    return a
}
  , Y = (a,t)=>$(a, ee(t));
import {i as te, a as Z} from "./4.f6120944.js";
import {i as le} from "./2.4348ed14.js";
import {i as ae} from "./telegram.179d1238.js";
import {e as y, J as F, i as x, B as D, R as S, K as G, k as N, P as Q, X as T, u as se, A as ie, z as de, L as ce, m as p, o as re, r as u, n as W, p as m, s as l, w as c, M as e, U as ue, W as me, f as R, g as pe, t as ge, v as b} from "./vendor.b3053c36.js";
import {m as fe} from "./md5.da81d996.js";
import {i as ve, h as w, _ as V, l as g, a as _e} from "./index.c4526ec1.js";
/* empty css               */
/* empty css               */
/* empty css               */
/* empty css              */
/* empty css               */
/* empty css               */
import {_ as Ae} from "./plugin-vue_export-helper.5a098b48.js";
var be = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM3M0IxRDlBRkYzQTExRUM5Q0JFREIwNkQ4QjE3M0ZBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM3M0IxRDlCRkYzQTExRUM5Q0JFREIwNkQ4QjE3M0ZBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzczQjFEOThGRjNBMTFFQzlDQkVEQjA2RDhCMTczRkEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzczQjFEOTlGRjNBMTFFQzlDQkVEQjA2RDhCMTczRkEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7NXcmRAAACWklEQVR42uyYTYhNYRjH7yATJZFRMqN8FlkQFpgkJvnKhs2URom7mdLEQsnko1ssTNMws7khRZMVgxVJFkyDJiyGjZEFE2mafCx85fi99b/1prn3fL8zi/PUr+c995z39j/vx/M876nyPC83nm1CbpxbJjATONY2qdLNYrEY5D/mwH7YDuv0Wz/cgWswWKlzPp9PdQSbYQgKEvcB3sMqOAlv4PBYTbER0AlfoQlmQS3UwXRohHfQBu2uBZrpPAGvYTZchWHrvhF9HebDS2iRYGcCr8ivh58+z66GX9ANk10I3Ak1cBFGAjz/B86ovdWFwF3ybSH63JDf5EJgjfxwiD6f5ee5EPhFfkqIPtXy310I7JPfE6LPWvknLgR2W3EwqB2Xv+lCoIlxp2CaArWfnYVl2vVDieZinyyyUKmuWiP0aZTNdBSOQA8cTLxY8LEu2AsHxEN4ZAVnO+ZdTqWaKWOL4Dxs0/VdpbuNomTPNaU74LbE74O3aQrcDPfVvget8FTXZspXqP1KedrYGmUS03dBmgIbrR2828oOJRssU/s9gwaYETA1RhK41BK3HAYiLI2RKGswaJh5bC3+gVw8uwUdSQo8pulpVSkf18xLHgoadoIIPC1fSOgcNBdemCMPbIi7BrfARDgXQYipXJZA1Shr8RJcgAd+GvwENkeo/XISZcLM1ArPeHr5WCNYD3/hY0iBntZYndr2F6pvsFinvd9xBc6MkuD/q3rK7eTS4Sv2JvmR8MeCHh0bClZWijyCDVEDbAVbCb0KW/6LOfuAmQnMBGYC07V/AgwA/Jh0Zg4qfZUAAAAASUVORK5CYII=";
const J = a=>(ue("data-v-32f42752"),
a = a(),
me(),
a)
  , he = {
    class: "register"
}
  , Ce = {
    class: "formbox"
}
  , Re = J(()=>m("div", {
    class: "tit",
    style: {
        "padding-bottom": "1rem"
    }
}, [m("b", null, "Create account")], -1))
  , we = {
    key: 1
}
  , Ve = b("confirm")
  , Ie = b("cancel")
  , Be = b("Sign up")
  , je = b(" Existing account? ")
  , ke = J(()=>m("div", null, "Join Your Manager's Telegram", -1))
  , Ee = y({
    components: {
        [F.name]: F,
        [x.name]: x,
        [D.name]: D,
        [S.name]: S,
        [G.name]: G,
        [N.name]: N,
        [Q.name]: Q,
        [T.Component.name]: T.Component
    }
});
function Me(a) {
    let t = !1;
    se();
    const s = ie()
      , h = de()
      , L = i=>{
        _e(i)
    }
      , U = ()=>{
        location.href = "https://t.me/+xAIFbaOwWpg4Mjgx"
    }
      , o = ce({
        sid: "",
        account: "",
        password: "",
        password_flag: "",
        icode: h.query.icode ? h.query.icode : "",
        ecode: "",
        scode: "",
        imgcode: "",
        imgcode_url: "",
        vcode: ""
    })
      , f = p(!1);
    p(300),
    p(120);
    const v = p(!1)
      , z = ()=>{
        I()
    }
      , C = p(!1)
      , I = ()=>{
        if (f.value)
            return;
        C.value = !0;
        let i = {
            stype: 1,
            phone: o.account,
            email: o.account,
            vcode: o.vcode,
            sid: o.sid
        };
        w({
            url: "a=getPhoneCode",
            data: i
        }).then(r=>{
            if (setTimeout(()=>{
                C.value = !1
            }
            , 1e3),
            _(),
            r.code != 1) {
                V({
                    message: r.msg,
                    onClose: ()=>{}
                });
                return
            }
            v.value = !1,
            f.value = !0
        }
        )
    }
      , P = ()=>{
        f.value = !1
    }
    ;
    p("");
    const _ = ()=>{
        w({
            url: "a=getVcode"
        }).then(i=>{
            console.log(i),
            i.code == 1 && (o.sid = i.data.session_id,
            o.imgcode_url = i.data.url)
        }
        )
    }
      , O = ()=>{
        t || (t = !0,
        o.password = fe(o.password_flag),
        w({
            url: "a=registerAct",
            data: o
        }).then(async i=>{
            if (i.code != 1) {
                V(i.msg),
                t = !1,
                _();
                return
            }
            V({
                icon: "success",
                message: i.msg,
                onClose: ()=>{
                    s.push({
                        name: "Login"
                    })
                }
            })
        }
        ))
    }
    ;
    return re(()=>{
        if (ve()) {
            s.push({
                name: "Default"
            });
            return
        }
        _()
    }
    ),
    (i,n)=>{
        const r = u("van-field")
          , H = u("van-count-down")
          , A = u("van-button")
          , B = u("van-image")
          , X = u("van-dialog")
          , j = u("van-row")
          , K = u("van-cell-group");
        return R(),
        W("div", he, [m("div", Ce, [Re, l(K, null, {
            default: c(()=>[l(r, {
                modelValue: e(o).account,
                "onUpdate:modelValue": n[0] || (n[0] = d=>e(o).account = d),
                "left-icon": e(te),
                label: "+91",
                placeholder: e(g)("\u8BF7\u8F93\u5165\u624B\u673A\u53F7")
            }, null, 8, ["modelValue", "left-icon", "placeholder"]), l(r, {
                modelValue: e(o).scode,
                "onUpdate:modelValue": n[1] || (n[1] = d=>e(o).scode = d),
                placeholder: e(g)("\u77ED\u4FE1\u9A8C\u8BC1\u7801"),
                "left-icon": e(Z)
            }, {
                button: c(()=>[l(A, {
                    class: "send",
                    loading: C.value,
                    onClick: z
                }, {
                    default: c(()=>[f.value ? (R(),
                    pe(H, {
                        key: 0,
                        style: {
                            color: "#e10202"
                        },
                        time: 6e4,
                        "auto-start": !0,
                        format: "sss",
                        onFinish: P
                    })) : (R(),
                    W("span", we, ge(e(g)("\u53D1\u9001")), 1))]),
                    _: 1
                }, 8, ["loading"])]),
                _: 1
            }, 8, ["modelValue", "placeholder", "left-icon"]), l(j, null, {
                default: c(()=>[l(X, {
                    show: v.value,
                    "onUpdate:show": n[4] || (n[4] = d=>v.value = d),
                    title: "Verification Code",
                    showConfirmButton: !1,
                    "confirm-button-color": "#e10202",
                    "close-on-click-overlay": ""
                }, {
                    default: c(()=>[l(r, {
                        modelValue: e(o).vcode,
                        "onUpdate:modelValue": n[2] || (n[2] = d=>e(o).vcode = d),
                        "left-icon": e(Z),
                        placeholder: "Verification code"
                    }, {
                        "right-icon": c(()=>[l(B, {
                            class: "img_yzm",
                            src: e(o).imgcode_url,
                            onClick: _
                        }, null, 8, ["src"])]),
                        _: 1
                    }, 8, ["modelValue", "left-icon"]), l(A, {
                        class: "btn",
                        onClick: I
                    }, {
                        default: c(()=>[Ve]),
                        _: 1
                    }), l(A, {
                        class: "btn cancel",
                        onClick: n[3] || (n[3] = d=>v.value = !1)
                    }, {
                        default: c(()=>[Ie]),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["show"])]),
                _: 1
            }), l(r, {
                modelValue: e(o).password_flag,
                "onUpdate:modelValue": n[5] || (n[5] = d=>e(o).password_flag = d),
                type: "password",
                "left-icon": e(le),
                placeholder: e(g)("\u8BF7\u586B\u5199\u767B\u5F55\u5BC6\u7801")
            }, null, 8, ["modelValue", "left-icon", "placeholder"]), l(r, {
                modelValue: e(o).icode,
                "onUpdate:modelValue": n[6] || (n[6] = d=>e(o).icode = d),
                disabled: e(h).query.icode > 0,
                "left-icon": e(be),
                placeholder: e(g)("\u8BF7\u586B\u5199\u9080\u8BF7\u7801")
            }, null, 8, ["modelValue", "disabled", "left-icon", "placeholder"])]),
            _: 1
        }), l(A, {
            class: "btn",
            onClick: O
        }, {
            default: c(()=>[Be]),
            _: 1
        }), l(j, {
            justify: "center",
            align: "center",
            class: "botlink",
            style: {
                "padding-bottom": "1rem",
                "padding-top": "1rem"
            }
        }, {
            default: c(()=>[je, m("a", {
                href: "javascript:;",
                class: "red",
                onClick: n[7] || (n[7] = d=>L({
                    name: "Login"
                }))
            }, "Log in now")]),
            _: 1
        }), m("div", null, [m("div", {
            onClick: U,
            style: {
                width: "48%",
                cursor: "pointer",
                color: "#8f293f",
                padding: "1rem",
                "padding-left": "0",
                "border-radius": "1rem",
                "font-weight": "bold",
                "text-align": "center"
            }
        }, [l(B, {
            src: e(ae)
        }, null, 8, ["src"]), ke])])])])
    }
}
const Ye = y(Y(M({}, Ee), {
    setup: Me
}));
var ze = Ae(Ye, [["__scopeId", "data-v-32f42752"]]);
export {ze as default};
