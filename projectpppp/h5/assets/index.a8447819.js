var Z = Object.defineProperty
  , P = Object.defineProperties;
var L = Object.getOwnPropertyDescriptors;
var D = Object.getOwnPropertySymbols;
var J = Object.prototype.hasOwnProperty
  , q = Object.prototype.propertyIsEnumerable;
var j = (r,i,a)=>i in r ? Z(r, i, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: a
}) : r[i] = a
  , R = (r,i)=>{
    for (var a in i || (i = {}))
        J.call(i, a) && j(r, a, i[a]);
    if (D)
        for (var a of D(i))
            q.call(i, a) && j(r, a, i[a]);
    return r
}
  , G = (r,i)=>P(r, L(i));
import {_ as w, i as X} from "./NoticeBar.dc7e6f5e.js";
import {i as K} from "./i1.8146726f.js";
import {i as _} from "./pop_bg.1b1f371b.js";
import {i as$} from "./telegram.179d1238.js";
import {i as tt} from "./index.184f612a.js";
import {c as et, h as st, b as nt, a as ot} from "./index.c4526ec1.js";
import {e as Y, x as T, k as C, Y as B, Z as Q, B as W, X as y, _ as S, u as it, m as g, o as at, r as u, n as b, p as t, s as o, g as k, M as l, F as h, q as x, S as lt, w as N, f as A, t as I, v as ct} from "./vendor.b3053c36.js";
import {_ as O} from "./Tab.3f82afdc.js";
import {_ as rt} from "./Swiper.d7b4a0ba.js";
/* empty css               */
import {_ as V} from "./ProductList.4344adb2.js";
/* empty css               */
import "./Pop.760da640.js";
import "./plugin-vue_export-helper.5a098b48.js";
import "./ListBase.dedbac09.js";
/* empty css              */
/* empty css               */
var dt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZENTJBRTY2MDhBNTExRUQ5MzdDRkY4NDQ4ODU4RDI3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZENTJBRTY3MDhBNTExRUQ5MzdDRkY4NDQ4ODU4RDI3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkQ1MkFFNjQwOEE1MTFFRDkzN0NGRjg0NDg4NThEMjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkQ1MkFFNjUwOEE1MTFFRDkzN0NGRjg0NDg4NThEMjciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7Jt3sWAAAIWElEQVR42uyb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"
  , mt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZBQzAwNjY5MTdCODExRURCRTAyODk4MzU1MjM2NUYzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZBQzAwNjZBMTdCODExRURCRTAyODk4MzU1MjM2NUYzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkFDMDA2NjcxN0I4MTFFREJFMDI4OTgzNTUyMzY1RjMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkFDMDA2NjgxN0I4MTFFREJFMDI4OTgzNTUyMzY1RjMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5hRyDTAAAKXklEQVR42uyd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"
  , At = "/h5/assets/i3.9b083077.png"
  , pt = "/h5/assets/i4.3bf1a5d1.png"
  , bt = "/h5/assets/i6.6e133b2e.png"
  , ut = "/h5/assets/i7.f7a0b2a0.png"
  , vt = "data:image/png;base64,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";
const gt = {
    class: "index"
}
  , ht = {
    class: "index_wrap"
}
  , Nt = {
    class: "index_top"
}
  , It = {
    class: "index_video"
}
  , ft = ["src"]
  , Mt = {
    class: "index_notice"
}
  , Dt = {
    class: "index_menu",
    style: {
        paddingBottom: "0rem"
    }
}
  , jt = t("p", null, "Recharge", -1)
  , Rt = t("p", null, "Withdrawal", -1)
  , Gt = t("p", null, "Teams", -1)
  , wt = t("p", null, "Invitation", -1)
  , Yt = t("p", null, "Redeem bonus", -1)
  , Tt = t("p", null, "Bonus", -1)
  , Ct = t("p", null, "My projects", -1)
  , Bt = ["href"]
  , Qt = t("p", null, "Download APP", -1)
  , Wt = {
    key: 0,
    class: "index_task"
}
  , yt = t("div", {
    class: "titbox"
}, [t("p", {
    class: "tit"
}, "Task")], -1)
  , St = {
    class: "list"
}
  , kt = ["onClick"]
  , xt = {
    class: "txt"
}
  , Ot = {
    class: "index_pro"
}
  , Vt = t("div", {
    class: "titbox"
}, [t("p", {
    class: "tit"
}, "Product")], -1)
  , zt = ["onClick"]
  , Ut = {
    style: {
        float: "right",
        "text-align": "right"
    }
}
  , Et = {
    style: {
        "font-size": "0.9rem",
        color: "#666666"
    }
}
  , Ft = {
    class: "wrap"
}
  , Ht = {
    class: "edition"
}
  , Zt = t("div", {
    class: "txt"
}, [t("span", null, "Platform announcement")], -1)
  , Pt = ["innerHTML"]
  , Lt = ct("close")
  , Jt = Y({
    name: "index",
    components: {
        MyTab: O,
        MySwiper: rt,
        MyNoticeBar: w,
        ProductList: V,
        [T.name]: T,
        [C.name]: C,
        [B.name]: B,
        [Q.name]: Q,
        [W.name]: W,
        [y.Component.name]: y.Component,
        [S.name]: S
    }
});
function qt(r) {
    et();
    const i = it()
      , a = n=>nt(n)
      , m = n=>{
        ot(n)
    }
      , d = g({
        user: {},
        kv: [],
        notice: [],
        news: [],
        task_arr: [],
        about: {},
        tip: {},
        marquee: "",
        download: ""
    })
      , f = g(!1)
      , M = g([])
      , z = n=>{
        console.log(n);
        let e = "";
        if (n.type == 1)
            e = "https://t.me/" + n.account;
        else if (n.type == 2)
            e = "https://wa.me/" + n.account;
        else
            return;
        window.open(e, "blank")
    }
      , v = g(!1);
    return at(()=>{
        st({
            url: "a=index"
        }).then(n=>{
            if (n.code == 1 && (d.value = n.data,
            d.value.tip.title && !i.state.config.firstLoad && (v.value = !0,
            i.state.config.firstLoad = !0),
            n.data.service_arr && n.data.service_arr.length > 0))
                for (let e in n.data.service_arr) {
                    let p = n.data.service_arr[e];
                    M.value.push({
                        name: p.name,
                        subname: p.type_flag + ": " + p.account,
                        account: p.account,
                        type: p.type
                    })
                }
        }
        )
    }
    ),
    (n,e)=>{
        const p = u("van-notice-bar")
          , c = u("van-image")
          , U = u("van-action-sheet")
          , E = u("van-button")
          , F = u("van-popup");
        return A(),
        b(h, null, [t("div", gt, [o(O), t("div", ht, [t("div", Nt, [t("div", It, [t("video", {
            controls: "",
            src: a("public/video/3.mp4"),
            autoplay: ""
        }, null, 8, ft)]), t("div", Mt, [d.value.marquee.length > 0 ? (A(),
        k(p, {
            key: 0,
            "left-icon": l(X),
            style: {
                background: "transparent"
            },
            text: d.value.marquee
        }, null, 8, ["left-icon", "text"])) : (A(),
        k(w, {
            key: 1,
            "notice-list": d.value.notice,
            "need-pop": !1
        }, null, 8, ["notice-list"]))])]), t("div", Dt, [t("a", {
            href: "javascript:;",
            onClick: e[0] || (e[0] = s=>m({
                name: "Finance_recharge"
            }))
        }, [o(c, {
            src: l(K)
        }, null, 8, ["src"]), jt]), t("a", {
            href: "javascript:;",
            onClick: e[1] || (e[1] = s=>m({
                name: "Finance_withdraw"
            }))
        }, [o(c, {
            src: l(mt)
        }, null, 8, ["src"]), Rt]), t("a", {
            href: "javascript:;",
            onClick: e[2] || (e[2] = s=>m({
                name: "User_team"
            }))
        }, [o(c, {
            src: l(At)
        }, null, 8, ["src"]), Gt]), t("a", {
            href: "javascript:;",
            onClick: e[3] || (e[3] = s=>m({
                name: "Share"
            }))
        }, [o(c, {
            src: l(pt)
        }, null, 8, ["src"]), wt]), t("a", {
            href: "javascript:;",
            onClick: e[4] || (e[4] = s=>m({
                name: "Gift_redpack"
            }))
        }, [o(c, {
            src: l(vt)
        }, null, 8, ["src"]), Yt]), t("a", {
            href: "javascript:;",
            onClick: e[5] || (e[5] = s=>m({
                name: "Gift_reg"
            }))
        }, [o(c, {
            src: l(bt)
        }, null, 8, ["src"]), Tt]), t("a", {
            href: "javascript:;",
            onClick: e[6] || (e[6] = s=>m({
                name: "Product_order"
            }))
        }, [o(c, {
            src: l(ut)
        }, null, 8, ["src"]), Ct]), t("a", {
            href: d.value.download
        }, [o(c, {
            src: l(dt)
        }, null, 8, ["src"]), Qt], 8, Bt)]), d.value.task_arr.length > 0 ? (A(),
        b("div", Wt, [yt, t("ul", St, [(A(!0),
        b(h, null, x(d.value.task_arr, s=>(A(),
        b("li", {
            onClick: H=>m({
                name: "Task_info",
                params: {
                    id: s.id
                }
            })
        }, [o(c, {
            src: a(s.cover),
            class: "pic"
        }, null, 8, ["src"]), t("p", xt, I(s.name), 1)], 8, kt))), 256))])])) : lt("", !0), t("div", Ot, [Vt, o(V, {
            "is-hot": 1
        })])])]), o(U, {
            show: f.value,
            "onUpdate:show": e[7] || (e[7] = s=>f.value = s),
            class: "myPopup",
            "cancel-text": "Close",
            description: "Customer service",
            "close-on-click-action": ""
        }, {
            default: N(()=>[(A(!0),
            b(h, null, x(M.value, s=>(A(),
            b("div", {
                onClick: H=>z(s),
                style: {
                    overflow: "hidden",
                    padding: "1rem 5%",
                    "border-bottom": "1px solid #efefef"
                }
            }, [o(c, {
                src: s.type == 1 ? l($) : l(tt),
                style: {
                    float: "left"
                },
                width: "2.5rem",
                height: "2.5rem"
            }, null, 8, ["src"]), t("div", Ut, [t("div", null, I(s.name), 1), t("div", Et, I(s.account), 1)])], 8, zt))), 256))]),
            _: 1
        }, 8, ["show"]), o(F, {
            show: v.value,
            "onUpdate:show": e[9] || (e[9] = s=>v.value = s),
            round: "",
            closeable: "",
            "close-icon": "close",
            "close-icon-position": "bottom-left",
            class: "updatePopup"
        }, {
            default: N(()=>[t("div", Ft, [t("div", Ht, [o(c, {
                src: l(_),
                class: "bg"
            }, null, 8, ["src"]), Zt]), t("div", {
                innerHTML: d.value.tip.content,
                style: {
                    padding: "0 1rem",
                    "padding-bottom": "1rem",
                    "max-height": "24rem",
                    "overflow-y": "auto"
                }
            }, null, 8, Pt), o(E, {
                class: "btn_update",
                onClick: e[8] || (e[8] = s=>v.value = !1)
            }, {
                default: N(()=>[Lt]),
                _: 1
            })])]),
            _: 1
        }, 8, ["show"])], 64)
    }
}
const be = Y(G(R({}, Jt), {
    setup: qt
}));
export {be as default};
