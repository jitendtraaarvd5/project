var y = Object.defineProperty
  , L = Object.defineProperties;
var b = Object.getOwnPropertyDescriptors;
var f = Object.getOwnPropertySymbols;
var B = Object.prototype.hasOwnProperty
  , C = Object.prototype.propertyIsEnumerable;
var c = (s,t,a)=>t in s ? y(s, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: a
}) : s[t] = a
  , v = (s,t)=>{
    for (var a in t || (t = {}))
        B.call(t, a) && c(s, a, t[a]);
    if (f)
        for (var a of f(t))
            C.call(t, a) && c(s, a, t[a]);
    return s
}
  , p = (s,t)=>L(s, b(t));
import {l as S, h as j, _ as k} from "./index.c4526ec1.js";
import {e as g, a8 as _, m, r as w, g as T, w as A, f as D, D as F} from "./vendor.b3053c36.js";
const I = g({
    components: {
        [_.name]: _
    }
});
function q(s, {expose: t, emit: a}) {
    const d = s;
    let i = !1;
    const l = m({
        count: 0,
        limit: 15,
        loading: !1,
        finished: !1,
        list: []
    })
      , n = m({
        page: 1,
        s_keyword: ""
    })
      , r = ()=>{
        i || (i = !0,
        a("before", n.value),
        j({
            url: d.url,
            data: n.value
        }).then(e=>{
            if (setTimeout(()=>{
                l.value.loading = !1
            }
            , 100),
            i = !1,
            e.code != 1) {
                l.value.finished = !0,
                a("error", e),
                k({
                    type: "error",
                    message: e.msg,
                    onClose: ()=>{}
                });
                return
            }
            n.value.page = e.data.page;
            for (let o in e.data) {
                if (o == "list") {
                    for (let u in e.data.list)
                        l.value.list.push(e.data.list[u]);
                    continue
                }
                l.value[o] = e.data[o]
            }
            a("success", {
                data: l.value,
                params: n.value
            })
        }
        ))
    }
      , h = ()=>{
        (d.autoLoad || n.value.page > 1) && r()
    }
    ;
    return t({
        tableData: l,
        delItem: e=>{
            l.value.list.splice(e, 1),
            l.value.count -= 1
        }
        ,
        doSearch: e=>{
            if (l.value.list = [],
            n.value.page = 1,
            typeof e == "object")
                for (let o in e)
                    n.value[o] = e[o];
            r()
        }
    }),
    (e,o)=>{
        const u = w("van-list");
        return D(),
        T(u, {
            "loading-text": "Loading",
            class: "myListBox",
            loading: l.value.loading,
            "onUpdate:loading": o[0] || (o[0] = x=>l.value.loading = x),
            finished: l.value.finished,
            "finished-text": s.finishText,
            onLoad: h
        }, {
            default: A(()=>[F(e.$slots, "default", {
                list: l.value.list
            })]),
            _: 3
        }, 8, ["loading", "finished", "finished-text"])
    }
}
const z = g(p(v({}, I), {
    props: {
        url: {
            type: String,
            default: ""
        },
        autoLoad: {
            type: Boolean,
            default: !0
        },
        finishText: {
            type: String,
            default: S("\u6CA1\u6709\u66F4\u591A\u4E86")
        }
    },
    emits: ["success", "error", "before"],
    setup: q
}));
export {z as _};
