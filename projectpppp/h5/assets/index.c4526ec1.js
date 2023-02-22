import {c as w, T as d, C as O, I as T, a as I, b as P, d as R, l as k, e as y, u as D, o as j, r as A, f as V, g as S, V as C, h as x} from "./vendor.b3053c36.js";
function oe() {
    import("data:text/javascript,")
}
const F = function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        n(r);
    new MutationObserver(r=>{
        for (const i of r)
            if (i.type === "childList")
                for (const s of i.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && n(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function a(r) {
        const i = {};
        return r.integrity && (i.integrity = r.integrity),
        r.referrerpolicy && (i.referrerPolicy = r.referrerpolicy),
        r.crossorigin === "use-credentials" ? i.credentials = "include" : r.crossorigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function n(r) {
        if (r.ep)
            return;
        r.ep = !0;
        const i = a(r);
        fetch(r.href, i)
    }
};
F();
let N = {}
  , U = {};
var c = w({
    state: {
        debug: !0,
        config: N,
        token: "",
        user: U,
        backurl: "",
        showView: !0,
        showLanguage: !1,
        wsOk: !1
    },
    mutations: {
        setConfig(e, t) {
            e.config = t
        },
        setToken(e, t) {
            e.token = t
        },
        setUser(e, t) {
            e.user = t
        },
        setWsOk(e, t) {
            e.wsOk = t
        }
    },
    actions: {
        init(e, t) {
            e.commit("setToken", t.token),
            e.commit("setUser", t.user)
        }
    },
    modules: {}
});
const G = "modulepreload"
  , p = {}
  , B = "/h5/"
  , o = function(t, a) {
    return !a || a.length === 0 ? t() : Promise.all(a.map(n=>{
        if (n = `${B}${n}`,
        n in p)
            return;
        p[n] = !0;
        const r = n.endsWith(".css")
          , i = r ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${n}"]${i}`))
            return;
        const s = document.createElement("link");
        if (s.rel = r ? "stylesheet" : G,
        r || (s.as = "script",
        s.crossOrigin = ""),
        s.href = n,
        document.head.appendChild(s),
        r)
            return new Promise((L,b)=>{
                s.addEventListener("load", L),
                s.addEventListener("error", b)
            }
            )
    }
    )).then(()=>t())
}
  , f = e=>{
    if (typeof e == "string")
        e = _(e),
        d({
            message: e,
            className: "toastBox"
        });
    else {
        let a = Object.assign({
            message: "System notice",
            overlay: !0,
            overlayStyle: {
                background: "rgba(0,0,0,0.4)"
            },
            className: "toastBox",
            duration: 2e3,
            closeOnClick: !0,
            closeOnClickOverlay: !0,
            transition: "slide-enter",
            onOpened: ()=>{}
            ,
            onClose: ()=>{}
        }, e);
        a.message = _(a.message),
        d(a)
    }
}
  , ae = (e,t)=>{
    let a = [];
    if (typeof e == "string")
        e = g(e),
        a.push(e),
        t = 0;
    else
        for (let n in e)
            a.push(g(e[n]));
    T(a, t)
}
  , g = e=>e ? (e = e.replace(/^\/|\/$/g, ""),
c.state.config.img_url + "/" + e) : ""
  , re = e=>{
    typeof e == "string" ? m.push({
        name: e
    }) : m.push(e)
}
  , ie = (e,t)=>{
    new O(e,t).on("success", function(n) {
        f(_("\u590D\u5236\u6210\u529F")),
        n.clearSelection()
    })
}
  , q = ()=>{
    let e = {}
      , t = window.localStorage.getItem("config");
    try {
        t && (e = JSON.parse(t),
        (!e || !e.img_url) && (e = null))
    } catch (a) {}
    return e && !e.tab && (e.tab = "first"),
    e
}
  , J = e=>{
    let t = q();
    t ? Object.assign(t, e) : t = e,
    window.localStorage.setItem("config", JSON.stringify(t)),
    c.commit("setConfig", t)
}
  , _ = e=>{
    if (!c.state.config.language || !e)
        return e;
    let t = c.state.config.language[e];
    return t || e
}
  , M = [{
    path: "/station",
    name: "Station",
    meta: {
        title: "Station"
    },
    component: ()=>o(()=>import("./index.a6f41da5.js"), ["assets/index.a6f41da5.js", "assets/index.2f81d527.css", "assets/index.7ee8efbc.css", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css", "assets/Tab.3f82afdc.js", "assets/Tab.aa5ca8b7.css"])
}, {
    path: "/login",
    name: "Login",
    meta: {
        title: _("\u767B\u5F55")
    },
    component: ()=>o(()=>import("./index.36cbb4ad.js"), ["assets/index.36cbb4ad.js", "assets/forget.041afb81.css", "assets/index.2f81d527.css", "assets/index.7642bd6e.css", "assets/index.7ee8efbc.css", "assets/index.453b1397.css", "assets/index.5e5ae183.css", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/4.f6120944.js", "assets/2.4348ed14.js", "assets/md5.da81d996.js"])
}, {
    path: "/forget",
    name: "Forget",
    meta: {
        title: _("\u627E\u56DE\u5BC6\u7801")
    },
    component: ()=>o(()=>import("./forget.ffb1cc3d.js"), ["assets/forget.ffb1cc3d.js", "assets/forget.041afb81.css", "assets/index.7ee8efbc.css", "assets/index.453b1397.css", "assets/index.2f81d527.css", "assets/index.7642bd6e.css", "assets/index.790dec85.css", "assets/4.f6120944.js", "assets/2.4348ed14.js", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/md5.da81d996.js"])
}, {
    path: "/demo",
    name: "Demo",
    meta: {
        title: _("\u627E\u56DE\u5BC6\u7801")
    },
    component: ()=>o(()=>import("./index.25e5d4e2.js"), ["assets/index.25e5d4e2.js", "assets/index.5d45cf97.css", "assets/plugin-vue_export-helper.5a098b48.js", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css"])
}, {
    path: "/register",
    name: "Register",
    meta: {
        title: _("\u6CE8\u518C")
    },
    component: ()=>o(()=>import("./register.c90abf91.js"), ["assets/register.c90abf91.js", "assets/register.6b54b2da.css", "assets/index.7ee8efbc.css", "assets/index.453b1397.css", "assets/index.5e5ae183.css", "assets/index.2f81d527.css", "assets/index.7642bd6e.css", "assets/index.790dec85.css", "assets/4.f6120944.js", "assets/2.4348ed14.js", "assets/telegram.179d1238.js", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/md5.da81d996.js", "assets/plugin-vue_export-helper.5a098b48.js"])
}, {
    path: "/",
    name: "Default",
    meta: {
        title: "Home"
    },
    component: ()=>o(()=>import("./index.a8447819.js"), ["assets/index.a8447819.js", "assets/index.ae751846.css", "assets/index.6502498e.css", "assets/index.50f389b1.css", "assets/index.790dec85.css", "assets/NoticeBar.dc7e6f5e.js", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/Pop.760da640.js", "assets/Pop.2ccc0a6f.css", "assets/plugin-vue_export-helper.5a098b48.js", "assets/i1.8146726f.js", "assets/pop_bg.1b1f371b.js", "assets/telegram.179d1238.js", "assets/index.184f612a.js", "assets/index.8bc9015d.css", "assets/Tab.3f82afdc.js", "assets/Tab.aa5ca8b7.css", "assets/Swiper.d7b4a0ba.js", "assets/ProductList.4344adb2.js", "assets/ListBase.dedbac09.js", "assets/ListBase.fde8d08e.css"])
}, {
    path: "/product",
    name: "Product",
    meta: {
        title: "Product"
    },
    component: ()=>o(()=>import("./index.17344f3a.js"), ["assets/index.17344f3a.js", "assets/index.50f389b1.css", "assets/index.6cd9c4e9.css", "assets/index.790dec85.css", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/Tab.3f82afdc.js", "assets/Tab.aa5ca8b7.css", "assets/ProductList.4344adb2.js", "assets/ListBase.dedbac09.js", "assets/ListBase.fde8d08e.css", "assets/Swiper.d7b4a0ba.js", "assets/Loading.c0179293.js", "assets/Loading.d2085d3d.css", "assets/plugin-vue_export-helper.5a098b48.js"])
}, {
    path: "/product/goods",
    name: "Product_goods",
    meta: {
        title: "Project"
    },
    component: ()=>o(()=>import("./goods.83c28084.js"), ["assets/goods.83c28084.js", "assets/index.50f389b1.css", "assets/index.2f81d527.css", "assets/index.7ee8efbc.css", "assets/index.ea4f829a.css", "assets/index.7642bd6e.css", "assets/index.790dec85.css", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/md5.da81d996.js", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css", "assets/Swiper.d7b4a0ba.js", "assets/Loading.c0179293.js", "assets/Loading.d2085d3d.css", "assets/plugin-vue_export-helper.5a098b48.js"])
}, {
    path: "/product/order",
    name: "Product_order",
    meta: {
        title: "My product"
    },
    component: ()=>o(()=>import("./order.befbb70f.js"), ["assets/order.befbb70f.js", "assets/order.1d563191.css", "assets/index.6502498e.css", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css", "assets/ListBase.dedbac09.js", "assets/ListBase.fde8d08e.css", "assets/Loading.c0179293.js", "assets/Loading.d2085d3d.css", "assets/plugin-vue_export-helper.5a098b48.js"])
}, {
    path: "/news",
    name: "News",
    meta: {
        title: "News"
    },
    component: ()=>o(()=>import("./index.ef4ed3be.js"), ["assets/index.ef4ed3be.js", "assets/index.6cd9c4e9.css", "assets/index.50f389b1.css", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/Tab.3f82afdc.js", "assets/Tab.aa5ca8b7.css", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css", "assets/Swiper.d7b4a0ba.js", "assets/ListBase.dedbac09.js", "assets/ListBase.fde8d08e.css", "assets/Loading.c0179293.js", "assets/Loading.d2085d3d.css", "assets/plugin-vue_export-helper.5a098b48.js"])
}, {
    path: "/news/info/:id",
    name: "News_info",
    meta: {
        title: "Detail"
    },
    component: ()=>o(()=>import("./info.8cdc03c5.js"), ["assets/info.8cdc03c5.js", "assets/info.f801a7d3.css", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css"])
}, {
    path: "/user",
    name: "User",
    meta: {
        title: "Me"
    },
    component: ()=>o(()=>import("./index.743ddae3.js"), ["assets/index.743ddae3.js", "assets/index.7ee8efbc.css", "assets/index.2f81d527.css", "assets/index.50f389b1.css", "assets/telegram.179d1238.js", "assets/index.184f612a.js", "assets/index.8bc9015d.css", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/Tab.3f82afdc.js", "assets/Tab.aa5ca8b7.css", "assets/Avatar.d5638111.js", "assets/Avatar.15761c8d.css", "assets/compressor.esm.c4e5fc50.js", "assets/Loading.c0179293.js", "assets/Loading.d2085d3d.css", "assets/plugin-vue_export-helper.5a098b48.js"])
}, {
    path: "/user/team",
    name: "User_team",
    meta: {
        title: "My teams"
    },
    component: ()=>o(()=>import("./team.bcdfa23b.js"), ["assets/team.bcdfa23b.js", "assets/index.6cd9c4e9.css", "assets/index.7ee8efbc.css", "assets/index.2f81d527.css", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css", "assets/ListBase.dedbac09.js", "assets/ListBase.fde8d08e.css", "assets/Loading.c0179293.js", "assets/Loading.d2085d3d.css", "assets/plugin-vue_export-helper.5a098b48.js"])
}, {
    path: "/setting",
    name: "Setting",
    meta: {
        title: "Setting"
    },
    component: ()=>o(()=>import("./index.31d78c51.js"), ["assets/index.31d78c51.js", "assets/index.7ee8efbc.css", "assets/index.2f81d527.css", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css"])
}, {
    path: "/setting/uinfo",
    name: "Setting_uinfo",
    meta: {
        title: "Personal information"
    },
    component: ()=>o(()=>import("./uinfo.16c0b744.js"), ["assets/uinfo.16c0b744.js", "assets/index.2f81d527.css", "assets/index.7642bd6e.css", "assets/index.2fa8bfb6.css", "assets/index.7ee8efbc.css", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/md5.da81d996.js", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css", "assets/Avatar.d5638111.js", "assets/Avatar.15761c8d.css", "assets/compressor.esm.c4e5fc50.js", "assets/Loading.c0179293.js", "assets/Loading.d2085d3d.css", "assets/plugin-vue_export-helper.5a098b48.js"])
}, {
    path: "/setting/google",
    name: "Setting_google",
    meta: {
        title: "Google Authenticator"
    },
    component: ()=>o(()=>import("./google.da0a5a4a.js"), ["assets/google.da0a5a4a.js", "assets/index.2f81d527.css", "assets/index.7642bd6e.css", "assets/index.7ee8efbc.css", "assets/index.aa12eee1.css", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/md5.da81d996.js", "assets/2.4348ed14.js", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css"])
}, {
    path: "/setting/auth",
    name: "Setting_auth",
    meta: {
        title: "Real-name authentication"
    },
    component: ()=>o(()=>import("./auth.3b01bc0f.js"), ["assets/auth.3b01bc0f.js", "assets/auth.7412b08a.css", "assets/index.7ee8efbc.css", "assets/index.2f81d527.css", "assets/index.7642bd6e.css", "assets/index.2fa8bfb6.css", "assets/index.790dec85.css", "assets/md5.da81d996.js", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css", "assets/Upload.4cb49087.js", "assets/Upload.b047ebcb.css", "assets/compressor.esm.c4e5fc50.js", "assets/plugin-vue_export-helper.5a098b48.js"])
}, {
    path: "/setting/password",
    name: "Setting_password",
    meta: {
        title: "Retrieve password"
    },
    component: ()=>o(()=>import("./password.148134a6.js"), ["assets/password.148134a6.js", "assets/index.2f81d527.css", "assets/index.7642bd6e.css", "assets/index.7ee8efbc.css", "assets/index.790dec85.css", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/md5.da81d996.js", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css"])
}, {
    path: "/setting/password2",
    name: "Setting_password2",
    meta: {
        title: "Payment password"
    },
    component: ()=>o(()=>import("./password.148134a6.js"), ["assets/password.148134a6.js", "assets/index.2f81d527.css", "assets/index.7642bd6e.css", "assets/index.7ee8efbc.css", "assets/index.790dec85.css", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/md5.da81d996.js", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css"])
}, {
    path: "/setting/bank",
    name: "Setting_bank",
    meta: {
        title: "Bind bank card"
    },
    component: ()=>o(()=>import("./bank.9e78dd05.js"), ["assets/bank.9e78dd05.js", "assets/bank.9f632bb2.css", "assets/index.2f81d527.css", "assets/index.7642bd6e.css", "assets/index.7ee8efbc.css", "assets/index.790dec85.css", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/md5.da81d996.js", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css"])
}, {
    path: "/share",
    name: "Share",
    meta: {
        title: "Invitation"
    },
    component: ()=>o(()=>import("./index.5a32d052.js"), ["assets/index.5a32d052.js", "assets/index.50f389b1.css", "assets/index.ea4f829a.css", "assets/index.2f81d527.css", "assets/index.7ee8efbc.css", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css"])
}, {
    path: "/service/online",
    name: "Service_online",
    meta: {
        title: "Service"
    },
    component: ()=>o(()=>import("./online.965817b0.js"), ["assets/online.965817b0.js", "assets/index.7ee8efbc.css", "assets/index.2f81d527.css", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css"])
}, {
    path: "/recharge",
    name: "Finance_recharge",
    meta: {
        title: "Recharge"
    },
    component: ()=>o(()=>import("./recharge.e2198ade.js"), ["assets/recharge.e2198ade.js", "assets/index.2f81d527.css", "assets/index.7642bd6e.css", "assets/index.7ee8efbc.css", "assets/index.aa12eee1.css", "assets/i1.8146726f.js", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css", "assets/Loading.c0179293.js", "assets/Loading.d2085d3d.css", "assets/plugin-vue_export-helper.5a098b48.js"])
}, {
    path: "/payinfo",
    name: "Finance_payinfo",
    meta: {
        title: "Order details"
    },
    component: ()=>o(()=>import("./payInfo.4b775193.js"), ["assets/payInfo.4b775193.js", "assets/payInfo.d557b78a.css", "assets/index.2f81d527.css", "assets/index.7642bd6e.css", "assets/index.7ee8efbc.css", "assets/index.aa12eee1.css", "assets/index.2fa8bfb6.css", "assets/index.6502498e.css", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css", "assets/Upload.4cb49087.js", "assets/Upload.b047ebcb.css", "assets/compressor.esm.c4e5fc50.js", "assets/plugin-vue_export-helper.5a098b48.js"])
}, {
    path: "/paylog",
    name: "Finance_paylog",
    meta: {
        title: "Recharge"
    },
    component: ()=>o(()=>import("./paylog.a2cfdd18.js"), ["assets/paylog.a2cfdd18.js", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css", "assets/ListBase.dedbac09.js", "assets/ListBase.fde8d08e.css", "assets/Loading.c0179293.js", "assets/Loading.d2085d3d.css", "assets/plugin-vue_export-helper.5a098b48.js"])
}, {
    path: "/withdraw",
    name: "Finance_withdraw",
    meta: {
        title: "Withdraw"
    },
    component: ()=>o(()=>import("./withdraw.facd0e08.js"), ["assets/withdraw.facd0e08.js", "assets/withdraw.c1311b08.css", "assets/index.2f81d527.css", "assets/index.7642bd6e.css", "assets/index.7ee8efbc.css", "assets/index.aa12eee1.css", "assets/index.6502498e.css", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/md5.da81d996.js", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css"])
}, {
    path: "/cashlog",
    name: "Finance_cashlog",
    meta: {
        title: "Withdraw"
    },
    component: ()=>o(()=>import("./cashlog.547a7449.js"), ["assets/cashlog.547a7449.js", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/ListBase.dedbac09.js", "assets/ListBase.fde8d08e.css", "assets/Loading.c0179293.js", "assets/Loading.d2085d3d.css", "assets/plugin-vue_export-helper.5a098b48.js"])
}, {
    path: "/funding",
    name: "Finance_funding",
    meta: {
        title: "Funding details"
    },
    component: ()=>o(()=>import("./funding.dc82709a.js"), ["assets/funding.dc82709a.js", "assets/index.6cd9c4e9.css", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/ListBase.dedbac09.js", "assets/ListBase.fde8d08e.css", "assets/Loading.c0179293.js", "assets/Loading.d2085d3d.css", "assets/plugin-vue_export-helper.5a098b48.js"])
}, {
    path: "/balancelog",
    name: "Finance_balancelog",
    meta: {
        title: "Financial records"
    },
    component: ()=>o(()=>import("./balancelog.5d0464f4.js"), ["assets/balancelog.5d0464f4.js", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css", "assets/ListBase.dedbac09.js", "assets/ListBase.fde8d08e.css", "assets/Loading.c0179293.js", "assets/Loading.d2085d3d.css", "assets/plugin-vue_export-helper.5a098b48.js"])
}, {
    path: "/reward",
    name: "Finance_reward",
    meta: {
        title: "Reward"
    },
    component: ()=>o(()=>import("./reward.b1c70fbf.js"), ["assets/reward.b1c70fbf.js", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css", "assets/ListBase.dedbac09.js", "assets/ListBase.fde8d08e.css", "assets/Loading.c0179293.js", "assets/Loading.d2085d3d.css", "assets/plugin-vue_export-helper.5a098b48.js"])
}, {
    path: "/rebate",
    name: "Finance_rebate",
    meta: {
        title: "Rebate"
    },
    component: ()=>o(()=>import("./rebate.7321cfbf.js"), ["assets/rebate.7321cfbf.js", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css", "assets/ListBase.dedbac09.js", "assets/ListBase.fde8d08e.css", "assets/Loading.c0179293.js", "assets/Loading.d2085d3d.css", "assets/plugin-vue_export-helper.5a098b48.js"])
}, {
    path: "/gift/lottery",
    name: "Gift_lottery",
    meta: {
        title: "Lottery"
    },
    component: ()=>o(()=>import("./lottery.dc01bfab.js"), ["assets/lottery.dc01bfab.js", "assets/lottery.d0bec9f6.css", "assets/index.50f389b1.css", "assets/index.ae751846.css", "assets/index.6502498e.css", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/Tab.3f82afdc.js", "assets/Tab.aa5ca8b7.css", "assets/NoticeBar.dc7e6f5e.js", "assets/Pop.760da640.js", "assets/Pop.2ccc0a6f.css", "assets/plugin-vue_export-helper.5a098b48.js"])
}, {
    path: "/gift/turntable",
    name: "Gift_turntable",
    meta: {
        title: "Draw"
    },
    component: ()=>o(()=>import("./turntable.ce442e25.js"), ["assets/turntable.ce442e25.js", "assets/grid.1d40b0b3.css", "assets/index.esm.b214af1c.js", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css", "assets/Tab.3f82afdc.js", "assets/Tab.aa5ca8b7.css"])
}, {
    path: "/gift/grid",
    name: "Gift_grid",
    meta: {
        title: "Game"
    },
    component: ()=>o(()=>import("./grid.9c35eff2.js"), ["assets/grid.9c35eff2.js", "assets/grid.1d40b0b3.css", "assets/index.ae751846.css", "assets/index.esm.b214af1c.js", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/pop_bg.1b1f371b.js", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css", "assets/Tab.3f82afdc.js", "assets/Tab.aa5ca8b7.css"])
}, {
    path: "/gift/redpack",
    name: "Gift_redpack",
    meta: {
        title: "Gift redemption"
    },
    component: ()=>o(()=>import("./redpack.9d9ffc7c.js"), ["assets/redpack.9d9ffc7c.js", "assets/index.2f81d527.css", "assets/index.7642bd6e.css", "assets/index.7ee8efbc.css", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css"])
}, {
    path: "/gift/redpackLog",
    name: "Gift_redpackLog",
    meta: {
        title: "Gift Records"
    },
    component: ()=>o(()=>import("./redpackLog.4a5db669.js"), ["assets/redpackLog.4a5db669.js", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css", "assets/ListBase.dedbac09.js", "assets/ListBase.fde8d08e.css", "assets/Loading.c0179293.js", "assets/Loading.d2085d3d.css", "assets/plugin-vue_export-helper.5a098b48.js"])
}, {
    path: "/gift/reg",
    name: "Gift_reg",
    meta: {
        title: "Bonus"
    },
    component: ()=>o(()=>import("./reg.c1a6b7dc.js"), ["assets/reg.c1a6b7dc.js", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css", "assets/Tab.3f82afdc.js", "assets/Tab.aa5ca8b7.css"])
}, {
    path: "/ext/task",
    name: "Ext_task",
    meta: {
        title: "Task"
    },
    component: ()=>o(()=>import("./task.195f9ed5.js"), ["assets/task.195f9ed5.js", "assets/task.0b7989f9.css", "assets/index.2f81d527.css", "assets/index.7642bd6e.css", "assets/index.2fa8bfb6.css", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css", "assets/Pop.760da640.js", "assets/Pop.2ccc0a6f.css", "assets/plugin-vue_export-helper.5a098b48.js", "assets/Upload.4cb49087.js", "assets/Upload.b047ebcb.css", "assets/compressor.esm.c4e5fc50.js", "assets/Loading.c0179293.js", "assets/Loading.d2085d3d.css", "assets/ListBase.dedbac09.js", "assets/ListBase.fde8d08e.css"])
}, {
    path: "/task/info/:id",
    name: "Task_info",
    meta: {
        title: "Task info"
    },
    component: ()=>o(()=>import("./info.37f52e1b.js"), ["assets/info.37f52e1b.js", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css", "assets/Tab.3f82afdc.js", "assets/Tab.aa5ca8b7.css"])
}, {
    path: "/task/order",
    name: "Task_order",
    meta: {
        title: "My task"
    },
    component: ()=>o(()=>import("./order.7e1fd998.js"), ["assets/order.7e1fd998.js", "assets/index.2f81d527.css", "assets/index.7642bd6e.css", "assets/index.453b1397.css", "assets/index.5e5ae183.css", "assets/index.2fa8bfb6.css", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/Tab.3f82afdc.js", "assets/Tab.aa5ca8b7.css", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css", "assets/Upload.4cb49087.js", "assets/Upload.b047ebcb.css", "assets/compressor.esm.c4e5fc50.js", "assets/plugin-vue_export-helper.5a098b48.js", "assets/ListBase.dedbac09.js", "assets/ListBase.fde8d08e.css"])
}, {
    path: "/coupon/:type",
    name: "Coupon",
    meta: {
        title: "Coupon"
    },
    component: ()=>o(()=>import("./index.ab3e911f.js"), ["assets/index.ab3e911f.js", "assets/index.ccd7a524.css", "assets/index.6cd9c4e9.css", "assets/vendor.b3053c36.js", "assets/vendor.a314556c.css", "assets/Nav.ba1dfa64.js", "assets/Nav.69e2d943.css", "assets/ListBase.dedbac09.js", "assets/ListBase.fde8d08e.css", "assets/Loading.c0179293.js", "assets/Loading.d2085d3d.css", "assets/plugin-vue_export-helper.5a098b48.js"])
}]
  , m = I({
    history: P("/h5/"),
    routes: M
});
const h = e=>{
    let t = "/api/?";
    e.url = t + e.url;
    const a = R.create({
        timeout: 1e4,
        method: "POST",
        transformRequest: [function(n) {
            return k.stringify(n)
        }
        ]
    });
    return a.interceptors.request.use(n=>{
        const r = u();
        return n.headers && (n.headers.Token = r || "",
        n.headers["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8",
        n.headers["X-Requested-With"] = "XMLHttpRequest"),
        n
    }
    , n=>{
        console.log(n)
    }
    ),
    a.interceptors.response.use(n=>(n.data.code == -98 && $(),
    n.data), n=>{
        console.log(n)
    }
    ),
    a(e)
}
  , W = async e=>{
    let t = null;
    return await h({
        url: "a=userinfo",
        data: e
    }).then(a=>{
        t = a
    }
    ),
    t
}
  , se = (e,t)=>{
    W({
        token: e
    }).then(a=>{
        v(a.data),
        t && t(a)
    }
    )
}
  , ce = ()=>{
    let e = E();
    return e || (m.push({
        name: "Login"
    }),
    !1)
}
  , E = ()=>{
    if (!u())
        return !1;
    let t = l();
    return t || !1
}
  , _e = (e,t)=>{
    X(t),
    v(e)
}
  , $ = ()=>{
    Q(),
    m.push({
        name: "Login"
    })
}
  , v = e=>{
    let t = l();
    return t ? Object.assign(t, e) : t = e,
    window.localStorage.setItem("user", JSON.stringify(t)),
    c.commit("setUser", t),
    t
}
  , l = ()=>{
    let e = null
      , t = window.localStorage.getItem("user");
    try {
        t && (e = JSON.parse(t),
        (!e || !e.account) && (e = null))
    } catch (a) {}
    return e
}
  , H = ()=>{
    window.localStorage.removeItem("user"),
    c.commit("setUser", {})
}
  , X = e=>(window.localStorage.setItem("token", e),
c.commit("setToken", e),
e)
  , u = ()=>{
    let e = window.localStorage.getItem("token");
    return e || (e = null),
    e
}
  , K = ()=>{
    window.localStorage.removeItem("token"),
    c.commit("setToken", "")
}
  , Q = ()=>{
    K(),
    H()
}
;
const z = y({
    setup(e) {
        const t = D();
        return j(()=>{
            t.state.config.ws_home && E()
        }
        ),
        (a,n)=>{
            const r = A("router-view");
            return V(),
            S(r)
        }
    }
});
function Y(e) {
    for (var t = window.location.search.substring(1), a = t.split("&"), n = 0; n < a.length; n++) {
        var r = a[n].split("=");
        if (r[0] == e)
            return r[1]
    }
    return !1
}
let Z = Y("debug");
Z && new C;
const ee = ()=>{
    m.beforeEach(function(e, t, a) {
        e.meta && e.meta.title && e.meta.title,
        a()
    }),
    x(z).use(c).use(m).mount("#app")
}
  , te = e=>{
    h({
        url: "a=getConfig"
    }).then(t=>{
        if (t.code != 1) {
            f(t.msg);
            return
        }
        J(t.data),
        document.title = _(t.data.name),
        c.dispatch("init", {
            token: u(),
            user: l()
        }),
        e()
    }
    )
}
;
te(()=>{
    ee()
}
);
export {f as _, oe as __vite_legacy_guard, re as a, g as b, ce as c, _e as d, ae as e, se as f, W as g, h, E as i, $as j, ie as k, _ as l};
