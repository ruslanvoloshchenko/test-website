(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6744], {
    64281: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/batch-processing/upload", function() {
            return n(74432)
        }
        ])
    },
    27421: function(e, t, n) {
        "use strict";
        var i = n(85893)
          , r = n(66492)
          , a = n(98673)
          , s = n(9008)
          , o = n.n(s)
          , l = n(11163)
          , c = (n(67294),
        n(34155));
        t.Z = function(e) {
            var t = e.children
              , n = e.customMeta
              , s = e.meta
              , u = e.noindex
              , d = void 0 !== u && u
              , m = (0,
            l.useRouter)();
            return (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsxs)(o(), {
                    children: [(0,
                    i.jsx)("meta", {
                        name: "robots",
                        content: d ? "noindex, nofollow" : c.env.NEXT_PUBLIC_URL_INDEX
                    }), (0,
                    i.jsx)("meta", {
                        name: "google",
                        content: "notranslate"
                    }), (0,
                    i.jsx)("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "IE=edge"
                    }), (0,
                    i.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                    }), (0,
                    i.jsx)("title", {
                        children: null === s || void 0 === s ? void 0 : s.title
                    }), (0,
                    i.jsx)("meta", {
                        name: "description",
                        content: null === s || void 0 === s ? void 0 : s.description
                    }), (0,
                    i.jsx)("meta", {
                        name: "revisit-after",
                        content: "1 days"
                    }), (0,
                    i.jsx)("meta", {
                        itemProp: "name",
                        content: null === s || void 0 === s ? void 0 : s.title
                    }), (0,
                    i.jsx)("meta", {
                        name: "author",
                        content: "XTeam"
                    }), (0,
                    i.jsx)("meta", {
                        itemProp: "image",
                        content: "/preview.webp"
                    }), (0,
                    i.jsx)("meta", {
                        name: "twitter:card",
                        content: "summary"
                    }), (0,
                    i.jsx)("meta", {
                        name: "twitter:title",
                        content: null === s || void 0 === s ? void 0 : s.title
                    }), (0,
                    i.jsx)("meta", {
                        name: "twitter:description",
                        content: null === s || void 0 === s ? void 0 : s.description
                    }), (0,
                    i.jsx)("meta", {
                        name: "twitter:image:src",
                        content: "/preview.webp"
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:title",
                        content: null === s || void 0 === s ? void 0 : s.title
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:type",
                        content: "article"
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:description",
                        content: null === s || void 0 === s ? void 0 : s.description
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:site_name",
                        content: null === s || void 0 === s ? void 0 : s.title
                    }), (0,
                    i.jsx)("link", {
                        rel: "shortcut icon",
                        href: "/favicon/favicon.ico"
                    }), (0,
                    i.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/favicon/apple-touch-icon.png"
                    }), (0,
                    i.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/favicon/favicon-32x32.png"
                    }), (0,
                    i.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/favicon/favicon-16x16.png"
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:image",
                        content: "/preview.webp"
                    }), (0,
                    i.jsx)("link", {
                        rel: "alternate",
                        href: "https://dewatermark.ai".concat(m.route),
                        hreflang: "x-default"
                    }), (0,
                    i.jsx)("link", {
                        rel: "alternate",
                        href: "https://dewatermark.ai".concat(m.route),
                        hreflang: "en"
                    }), a.Mj.slice(1).map((function(e) {
                        return (0,
                        i.jsx)("link", {
                            rel: "alternate",
                            href: "https://dewatermark.ai/".concat(e.key).concat(m.route),
                            hreflang: e.key
                        }, "".concat(e.key, "_alternate"))
                    }
                    )), (0,
                    i.jsx)("link", {
                        rel: "canonical",
                        href: "https://dewatermark.ai".concat("en" === m.locale ? "" : "/".concat(m.locale)).concat(m.route)
                    }), n]
                }), (0,
                i.jsx)("div", {
                    children: t
                }), (0,
                i.jsx)(r.Z, {}), (0,
                i.jsx)("div", {
                    id: "modal"
                })]
            })
        }
    },
    69777: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return b
            }
        });
        var i = n(26042)
          , r = n(69396)
          , a = n(85893)
          , s = n(94184)
          , o = n.n(s)
          , l = n(73337)
          , c = n(98673)
          , u = n(1852)
          , d = "640px"
          , m = "768px"
          , v = "1024px"
          , p = "1280px"
          , x = "1536px"
          , f = !1
          , h = function() {
            var e = (0,
            u.useMediaQuery)({
                query: "(min-width: ".concat(x, ")")
            })
              , t = (0,
            u.useMediaQuery)({
                query: "(min-width: ".concat(p, ")")
            })
              , n = (0,
            u.useMediaQuery)({
                query: "(min-width: ".concat(v, ")")
            })
              , i = (0,
            u.useMediaQuery)({
                query: "(min-width: ".concat(m, ")")
            })
              , r = (0,
            u.useMediaQuery)({
                query: "(max-width: ".concat(d, ")")
            });
            return {
                is2Xl: e || f,
                isXl: t || f,
                isLg: n || f,
                isMd: i || f,
                isSm: r
            }
        }
          , j = n(47892)
          , g = n(67294)
          , w = n(32512)
          , b = function(e) {
            var t = e.children
              , n = e.onDrop
              , s = e.oneJobLimit
              , u = e.acceptType
              , d = void 0 === u ? c.Gs : u
              , m = e.disabled
              , v = (0,
            g.useState)(!1)
              , p = v[0]
              , x = v[1]
              , f = h().isMd
              , b = (0,
            j.Z)("home").t
              , N = (0,
            g.useCallback)((function(e) {
                null === n || void 0 === n || n(e),
                x(!1)
            }
            ), [n]);
            return (0,
            g.useEffect)((function() {
                var e = function(e) {
                    var t = e.clipboardData.items
                      , i = [].slice.call(t).filter((function(e) {
                        return -1 !== e.type.indexOf("image")
                    }
                    ));
                    if (0 !== i.length) {
                        var r = i.map((function(e) {
                            return e.getAsFile()
                        }
                        ));
                        null === n || void 0 === n || n(r),
                        x(!1)
                    }
                };
                return document.addEventListener("paste", e),
                function() {
                    document.removeEventListener("paste", e)
                }
            }
            ), [n, s]),
            (0,
            a.jsx)(w.ZP, {
                disabled: !f || m,
                noClick: !0,
                multiple: !0,
                accept: d,
                onDrop: N,
                onDragEnter: function() {
                    return x(!0)
                },
                onDragLeave: function() {
                    return x(!1)
                },
                children: function(e) {
                    var n = e.getRootProps
                      , s = e.getInputProps;
                    return (0,
                    a.jsxs)("div", (0,
                    r.Z)((0,
                    i.Z)({}, n()), {
                        children: [(0,
                        a.jsxs)("div", {
                            className: o()("fixed inset-0 z-50 bg-black bg-opacity-40 transition", "flex flex-col justify-center items-center", p ? "visible opacity-100" : "invisible opacity-0"),
                            children: [(0,
                            a.jsx)(l.d, {
                                type: "icon_gallery",
                                size: 120,
                                className: "mx-auto",
                                color: "white"
                            }), (0,
                            a.jsx)("p", {
                                className: "text-3xl text-white font-medium",
                                children: b("landing.dropzone")
                            })]
                        }), (0,
                        a.jsx)("input", (0,
                        r.Z)((0,
                        i.Z)({}, s()), {
                            hidden: !0
                        })), t]
                    }))
                }
            })
        }
    },
    74432: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            __N_SSG: function() {
                return ee
            },
            default: function() {
                return te
            }
        });
        var i = n(85893)
          , r = n(69777)
          , a = n(27421)
          , s = n(47568)
          , o = n(26042)
          , l = n(99534)
          , c = n(828)
          , u = n(70655)
          , d = n(31788)
          , m = n(73337)
          , v = n(44188)
          , p = n(81041)
          , x = n(47892)
          , f = n(67294)
          , h = n(14984)
          , j = n(94184)
          , g = n.n(j)
          , w = n(11261)
          , b = n(20868)
          , N = function() {
            var e = (0,
            x.Z)(p.t.BatchProcessingEditor).t
              , t = (0,
            f.useState)(".")
              , n = t[0]
              , r = t[1];
            return (0,
            f.useEffect)((function() {
                var e = setInterval((function() {
                    r((function(e) {
                        return "..." === e ? "." : e + "."
                    }
                    ))
                }
                ), 500);
                return function() {
                    return clearInterval(e)
                }
            }
            ), []),
            (0,
            i.jsxs)(i.Fragment, {
                children: [e("status.processing"), " ", n]
            })
        }
          , _ = function(e) {
            var t, n, r, a = e.status, s = e.className, o = (0,
            b.$G)(p.t.BatchProcessingEditor).t;
            return (0,
            i.jsxs)("div", {
                className: g()(a === h.zu["READY TO PROCESS"] && "bg-blue-100 !text-blue-500", a === h.zu.FAILED && "bg-red-50 !text-red-500", a === h.zu.FINISHED && "bg-green-100 !text-green-500", (null === (t = [h.zu.PROCESSING, h.zu.PENDING]) || void 0 === t ? void 0 : t.includes(a)) && "bg-orange-100 !text-orange-500", "px-1.5 py-0.5 flex justify-center items-center gap-1 text-white rounded-[10px] whitespace-nowrap", s),
                children: [(0,
                i.jsx)("div", {
                    className: g()("w-1.5 h-1.5 rounded-full", a === h.zu["READY TO PROCESS"] && "bg-blue-500", a === h.zu.FAILED && "bg-red-500", a === h.zu.FINISHED && "bg-green-500", (null === (n = [h.zu.PROCESSING, h.zu.PENDING]) || void 0 === n ? void 0 : n.includes(a)) && "bg-orange-500")
                }), (0,
                i.jsx)(v.Z, {
                    variant: "S10B",
                    className: "font-semibold uppercase",
                    children: (null === (r = [h.zu.PROCESSING, h.zu.PENDING]) || void 0 === r ? void 0 : r.includes(a)) ? (0,
                    i.jsx)(N, {}) : o("status.".concat(a.toLowerCase()))
                })]
            })
        }
          , y = n(66904)
          , E = function(e) {
            var t = e.data
              , n = e.onRemove
              , r = e.onConvert
              , a = (e.onChangeType,
            e.triggerConvert)
              , s = e.onSelect
              , o = e.isSelected
              , l = t || {}
              , c = l.name
              , u = (l.type,
            l.status)
              , j = l.id
              , b = l.image
              , N = l.result
              , E = (0,
            x.Z)(p.t.BatchProcessingEditor).t
              , k = ((0,
            x.Z)(p.t.Common).t,
            (0,
            f.useState)(null))
              , Z = k[0]
              , C = k[1]
              , S = URL.createObjectURL(N || b);
            (0,
            f.useEffect)((function() {
                if (b) {
                    var e = new Image;
                    e.onload = function() {
                        C({
                            width: e.width,
                            height: e.height
                        })
                    }
                    ,
                    e.src = URL.createObjectURL(b)
                }
            }
            ), [b]);
            var I = function() {
                return n(j)
            };
            (0,
            f.useEffect)((function() {
                u === h.zu.PROCESSING && r(j)
            }
            ), [u]);
            return (0,
            i.jsxs)("div", {
                onClick: function() {
                    return s(t)
                },
                className: g()("px-6 w-full cursor-pointer h-[104px] sm:h-fit bg-white py-2 sm:px-2 flex justify-between items-center sm:gap-6 sm:flex-wrap border-b border-neutral-ink-100", o && "!bg-neutral-ink-50"),
                children: [(0,
                i.jsx)("div", {
                    className: "w-[88px] h-[88px]",
                    children: (0,
                    i.jsx)("img", {
                        src: S,
                        className: "w-full h-full object-cover rounded-lg",
                        alt: "thumbnail"
                    })
                }), (0,
                i.jsxs)("div", {
                    className: "t2xl:w-[400px] w-[200px] flex items-center gap-2 text-neutral-ink-600 sm:w-full ml-4",
                    children: [(0,
                    i.jsxs)("div", {
                        className: "w-full pr-4",
                        title: c,
                        children: [(0,
                        i.jsx)(v.Z, {
                            variant: "H14B",
                            className: "text-ellipsis whitespace-nowrap overflow-hidden sm:flex-grow text-neutral-ink-600",
                            children: c
                        }), (0,
                        i.jsxs)(v.Z, {
                            variant: "T14R",
                            className: "mt-2 text-ellipsis whitespace-nowrap overflow-hidden sm:flex-grow text-neutral-ink-500",
                            children: [null === Z || void 0 === Z ? void 0 : Z.width, " x ", null === Z || void 0 === Z ? void 0 : Z.height, " px"]
                        })]
                    }), (0,
                    i.jsx)("div", {
                        onClick: I,
                        className: "sm+:hidden",
                        children: (0,
                        i.jsx)(m.d, {
                            type: "close",
                            className: "text-neutral-ink-400 cursor-pointer flex items-center"
                        })
                    })]
                }), (0,
                i.jsx)("div", {
                    className: "text-neutral-ink-500 w-[144px]"
                }), (0,
                i.jsx)("div", {
                    className: "flex-auto flex items-center justify-start gap-3 sm:gap-2 w-1/3 ml-3",
                    children: (0,
                    i.jsx)(_, {
                        status: u,
                        className: "sm:hidden"
                    })
                }), (0,
                i.jsxs)("div", {
                    className: "flex gap-2 items-center",
                    children: [(0,
                    i.jsx)(d.Z.Icon, {
                        className: g()(u !== h.zu.FAILED && "hidden", "!bg-neutral-ink-200 p-2 rounded-lg sm:h-[38px] h-[43px] group relative"),
                        onClick: function() {
                            a(j)
                        },
                        children: (0,
                        i.jsxs)(i.Fragment, {
                            children: [(0,
                            i.jsx)(m.d, {
                                type: "icon_refresh",
                                size: "m",
                                color: "#252638"
                            }), (0,
                            i.jsx)(y.Z, {
                                position: "left",
                                className: "normal-case",
                                children: E("preview_item.retry")
                            })]
                        })
                    }), (0,
                    i.jsxs)(d.Z.Primary, {
                        onClick: function() {
                            var e = URL.createObjectURL(N)
                              , t = document.createElement("a");
                            t.href = e,
                            t.download = "dewatermark_".concat((new Date).getTime(), ".").concat(b.type.split("/")[1]),
                            document.body.appendChild(t),
                            t.click(),
                            document.body.removeChild(t),
                            URL.revokeObjectURL(e)
                        },
                        className: g()("!py-2.5 !px-4 group relative", u !== h.zu.FINISHED && "!bg-neutral-ink-200"),
                        disabled: u !== h.zu.FINISHED,
                        tooltipPosition: "left",
                        tooltipContent: "Download",
                        children: [u !== h.zu.PROCESSING ? (0,
                        i.jsx)(m.d, {
                            type: "download",
                            size: "s",
                            className: "-mt-[1px] sm:hidden"
                        }) : (0,
                        i.jsx)(w.Z, {}), (0,
                        i.jsx)(y.Z, {
                            position: "left",
                            className: "normal-case",
                            children: E("preview_item.download")
                        })]
                    }), (0,
                    i.jsxs)("div", {
                        onClick: I,
                        className: "sm:hidden ml-3 group relative",
                        children: [(0,
                        i.jsx)(m.d, {
                            type: "close",
                            className: "text-neutral-ink-400 cursor-pointer"
                        }), (0,
                        i.jsx)(y.Z, {
                            position: "left",
                            className: "normal-case",
                            children: E("preview_item.remove")
                        })]
                    })]
                }), (0,
                i.jsx)("div", {
                    className: "sm+:hidden w-full flex -mt-4",
                    children: (0,
                    i.jsx)(_, {
                        status: u
                    })
                })]
            })
        }
          , k = n(69396)
          , Z = n(91275)
          , C = n(24916)
          , S = n(98673);
        function I(e, t, n) {
            return P.apply(this, arguments)
        }
        function P() {
            return (P = (0,
            s.Z)((function(e, t, n) {
                var i, r, a, s, l, c, d;
                return (0,
                u.__generator)(this, (function(u) {
                    switch (u.label) {
                    case 0:
                        return [4, (0,
                        Z.Qj)(e, S.Lj)];
                    case 1:
                        return a = u.sent(),
                        s = new FormData,
                        n && s.append("remove_text", "true"),
                        s.append("original_preview_image", a, "image.jpg"),
                        s.append("zoom_factor", "2"),
                        [4, (0,
                        C._$)(s, t, "BATCH_EDIT")];
                    case 2:
                        return l = u.sent(),
                        c = null === l || void 0 === l || null === (i = l.edited_image) || void 0 === i ? void 0 : i.watermark_mask,
                        [4, (0,
                        Z.Sj)(e, (0,
                        Z.rq)(null === l || void 0 === l || null === (r = l.edited_image) || void 0 === r ? void 0 : r.image, !0), (0,
                        Z.rq)(c, !0))];
                    case 3:
                        return d = u.sent(),
                        [2, (0,
                        k.Z)((0,
                        o.Z)({}, l), {
                            result: d
                        })]
                    }
                }
                ))
            }
            ))).apply(this, arguments)
        }
        var z = n(20695)
          , R = n(26010)
          , O = n(65103)
          , D = n(58903)
          , B = n(91105)
          , L = function(e) {
            var t = e.content
              , n = e.className
              , r = (0,
            x.Z)(p.t.BatchProcessingEditor).t;
            return (0,
            i.jsx)("div", {
                className: g()("bg-neutral-ink-50 rounded-lg py-[6px] px-[10px]", n),
                children: (0,
                i.jsxs)(v.Z, {
                    variant: "T12R",
                    children: ["\ud83d\udca1 ", r("tip.title"), ": ", t]
                })
            })
        }
          , T = function(e) {
            var t = e.selectedItem
              , n = e.isEmpty
              , r = (0,
            x.Z)(p.t.BatchProcessingEditor).t
              , a = (0,
            x.Z)(p.t.Editor).t
              , o = (0,
            f.useState)(null)
              , l = o[0]
              , c = o[1]
              , d = (0,
            f.useMemo)((function() {
                if (t) {
                    var e = URL.createObjectURL(null === t || void 0 === t ? void 0 : t.image)
                      , n = new Image;
                    return n.onload = function() {
                        c({
                            width: n.width,
                            height: n.height
                        })
                    }
                    ,
                    n.src = e,
                    e
                }
            }
            ), [null === t || void 0 === t ? void 0 : t.image])
              , j = (0,
            f.useMemo)((function() {
                if (t)
                    return URL.createObjectURL((null === t || void 0 === t ? void 0 : t.result) ? null === t || void 0 === t ? void 0 : t.result : null === t || void 0 === t ? void 0 : t.image)
            }
            ), [null === t || void 0 === t ? void 0 : t.image, null === t || void 0 === t ? void 0 : t.result])
              , w = function() {
                var e = (0,
                s.Z)((function() {
                    var e;
                    return (0,
                    u.__generator)(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return (null === t || void 0 === t ? void 0 : t.result) ? [4, (0,
                            B.Rg)({
                                image: j || d,
                                data: null === t || void 0 === t ? void 0 : t.data
                            })] : [2];
                        case 1:
                            return n.sent(),
                            (e = window.open("/?continueEdit=true", "_blank")) && e.focus(),
                            [2]
                        }
                    }
                    ))
                }
                ));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            return n ? (0,
            i.jsxs)("div", {
                className: "w-[480px] p-4 flex flex-col justify-center items-center relative",
                children: [(0,
                i.jsx)(L, {
                    content: a("button.text_remover_switch.tooltip"),
                    className: "absolute top-4 mx-4"
                }), (0,
                i.jsx)("img", {
                    className: "w-16 h-16 object-contain",
                    src: "/images/photo_tv.svg",
                    alt: "empty"
                }), (0,
                i.jsx)(v.Z, {
                    variant: "T14R",
                    className: "text-neutral-ink-500 mt-4",
                    children: r("preview_item.empty_image")
                })]
            }) : (0,
            i.jsxs)("div", {
                className: "w-[480px] p-4 flex flex-col justify-center items-center relative",
                children: [(0,
                i.jsx)(L, {
                    content: a("button.text_remover_switch.tooltip"),
                    className: "absolute top-4 mx-4"
                }), (0,
                i.jsx)(v.Z, {
                    variant: "H14B",
                    className: "text-neutral-ink-600",
                    children: null === t || void 0 === t ? void 0 : t.name
                }), (0,
                i.jsxs)("div", {
                    className: "mt-1 flex gap-2 items-center justify-center",
                    children: [(0,
                    i.jsxs)(v.Z, {
                        variant: "T14R",
                        className: "text-neutral-ink-400",
                        children: [null === l || void 0 === l ? void 0 : l.width, " x ", null === l || void 0 === l ? void 0 : l.height, " px"]
                    }), (0,
                    i.jsx)(_, {
                        status: null === t || void 0 === t ? void 0 : t.status
                    })]
                }), (0,
                i.jsx)("div", {
                    className: "mt-6",
                    children: (null === t || void 0 === t ? void 0 : t.status) === h.zu.FINISHED ? (0,
                    i.jsx)(D.Z, {
                        rounded: !0,
                        leftImage: d,
                        rightImage: j
                    }) : (0,
                    i.jsx)("img", {
                        src: d,
                        alt: "original",
                        className: "rounded-lg max-h-[450px] overflow-hidden"
                    })
                }), (0,
                i.jsxs)("div", {
                    className: "mt-6 py-2 flex flex-col gap-2",
                    children: [(0,
                    i.jsx)(v.Z, {
                        variant: "T14R",
                        className: "text-neutral-ink-500",
                        children: r("preview_item.result")
                    }), (0,
                    i.jsxs)("div", {
                        onClick: w,
                        className: g()("w-auto flex gap-1 items-center justify-center", (null === t || void 0 === t ? void 0 : t.result) ? "cursor-pointer text-orange-500" : "cursor-not-allowed text-neutral-ink-200"),
                        children: [(0,
                        i.jsx)(m.d, {
                            type: "icon_magic_wand"
                        }), (0,
                        i.jsx)(v.Z, {
                            variant: "H14B",
                            children: r("preview_item.try_manual")
                        })]
                    })]
                })]
            })
        }
          , F = n(76757)
          , H = n(25617)
          , G = n(23351)
          , A = n(79448)
          , U = n(93295)
          , M = function() {
            var e = (0,
            f.useState)(!1)
              , t = e[0]
              , n = e[1]
              , r = (0,
            H.v9)(G.y$).isOpenPromoteBanner
              , a = z.Z.useContainer()
              , j = a.isPremium
              , w = a.openModalPremium
              , b = A.Z.useContainer().batchProcessingContext
              , N = b.uploadFiles
              , _ = b.onUploadFiles
              , k = b.removeUploadFile
              , Z = b.batchProcessingImages
              , C = b.setBatchProcessingImages
              , S = b.clearUploadFiles
              , P = (b.removeBgConfig,
            b.onDownloadAll)
              , D = (0,
            x.Z)(p.t.BatchProcessingEditor).t
              , B = (0,
            x.Z)(p.t.Editor).t
              , L = (0,
            x.Z)(p.t.Common).t
              , M = (0,
            f.useState)(!0)
              , Y = M[0]
              , q = (M[1],
            O.Z.useContainer())
              , X = q.openOverlay
              , Q = q.closeOverlay
              , $ = (0,
            f.useRef)(!1)
              , J = (0,
            f.useState)(null)
              , V = J[0]
              , K = J[1]
              , W = !Object.values(Z).some((function(e) {
                return e.status === h.zu.FINISHED
            }
            ))
              , ee = Object.values(Z).some((function(e) {
                var t;
                return null === (t = [h.zu.PROCESSING, h.zu.PENDING]) || void 0 === t ? void 0 : t.includes(e.status)
            }
            ))
              , te = Object.values(Z).some((function(e) {
                return e.status === h.zu["READY TO PROCESS"]
            }
            ));
            (0,
            f.useEffect)((function() {
                C((function(e) {
                    var t = {};
                    return N.map((function(n) {
                        var i = n.id
                          , r = n.file;
                        e[i] ? t[i] = (0,
                        o.Z)({}, e[i]) : t[i] = {
                            id: i,
                            name: null === r || void 0 === r ? void 0 : r.name,
                            type: null === r || void 0 === r ? void 0 : r.type,
                            status: h.zu["READY TO PROCESS"],
                            image: r
                        }
                    }
                    )),
                    (0,
                    o.Z)({}, t)
                }
                ))
            }
            ), [N]);
            var ne = function(e) {
                e === (null === V || void 0 === V ? void 0 : V.id) && K(null),
                k(e)
            }
              , ie = function(e) {
                C((function(t) {
                    var n = (0,
                    o.Z)({}, t);
                    return n[e].status === h.zu.FAILED && (n[e].status = h.zu.PROCESSING),
                    n
                }
                ))
            }
              , re = function() {
                var e = (0,
                s.Z)((function(e) {
                    var n, r, a, s, c, d, m;
                    return (0,
                    u.__generator)(this, (function(u) {
                        switch (u.label) {
                        case 0:
                            C((function(t) {
                                var n = (0,
                                o.Z)({}, t);
                                return n[e].status = h.zu.PROCESSING,
                                n
                            }
                            )),
                            n = Z[e],
                            u.label = 1;
                        case 1:
                            return u.trys.push([1, 4, , 5]),
                            [4, I(n.image, j, t)];
                        case 2:
                            return r = u.sent(),
                            a = r.result,
                            s = (0,
                            l.Z)(r, ["result"]),
                            [4, (0,
                            F.Yr)(a)];
                        case 3:
                            return c = u.sent(),
                            C((function(t) {
                                var i = (0,
                                o.Z)({}, t);
                                return i[e].result = c,
                                i[e].image = n.image,
                                i[e].status = h.zu.FINISHED,
                                i[e].data = s,
                                i
                            }
                            )),
                            [3, 5];
                        case 4:
                            return d = u.sent(),
                            C((function(t) {
                                var n = (0,
                                o.Z)({}, t);
                                return n[e].status = h.zu.FAILED,
                                n
                            }
                            )),
                            429 == (null === d || void 0 === d || null === (m = d.response) || void 0 === m ? void 0 : m.status) && X({
                                type: R.j.Confirmation,
                                showBackdrop: !0,
                                title: (0,
                                i.jsx)(v.Z, {
                                    variant: "H20B",
                                    children: D("preview_item.limit_modal_title")
                                }),
                                content: (0,
                                i.jsx)(v.Z, {
                                    variant: "T14R",
                                    children: D("preview_item.limit_modal_desc")
                                }),
                                btnProps: {
                                    ok: {
                                        onOk: function() {
                                            Q()
                                        },
                                        title: L("button.ok")
                                    },
                                    cancel: {
                                        hidden: !0
                                    }
                                }
                            }),
                            [3, 5];
                        case 5:
                            return [2]
                        }
                    }
                    ))
                }
                ));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , ae = function() {
                var e = (0,
                s.Z)((function(e, t) {
                    return (0,
                    u.__generator)(this, (function(t) {
                        return C((function(t) {
                            var n = (0,
                            o.Z)({}, t);
                            return n[e].status = h.zu["READY TO PROCESS"],
                            n
                        }
                        )),
                        [2]
                    }
                    ))
                }
                ));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }()
              , se = function(e) {
                return K(e)
            };
            return (0,
            i.jsx)("div", {
                className: "overflow-x-hidden bg-white",
                children: (0,
                i.jsxs)("div", {
                    className: g()("w-screen flex border-t-[1px] border-neutral-ink-100", r ? "mt-[100px] h-[calc(100vh-100px)]" : "mt-[64px] h-[calc(100vh-64px)]"),
                    children: [(0,
                    i.jsx)("div", {
                        className: g()(!(null === N || void 0 === N ? void 0 : N.length) && "pt-2 pb-4 flex flex-col", "flex-auto overflow-y-auto border-r border-neutral-ink-100 hide-scrollbars"),
                        children: (null === N || void 0 === N ? void 0 : N.length) ? (0,
                        i.jsxs)("div", {
                            children: [(0,
                            i.jsxs)("div", {
                                className: g()(Y && !j ? "border-y" : "border-b", "h-[132px] border-neutral-ink-100 px-6"),
                                children: [(0,
                                i.jsxs)("div", {
                                    className: "flex items-center h-[72px] pt-6 pb-2",
                                    children: [(0,
                                    i.jsx)(v.Z, {
                                        variant: "H24B",
                                        children: D("preview_item.batch_processing")
                                    }), (0,
                                    i.jsxs)("div", {
                                        className: "flex flex-auto justify-end",
                                        children: [(0,
                                        i.jsxs)(d.Z.Secondary, {
                                            disabled: W,
                                            onClick: P,
                                            className: "!w-auto h-10 flex items-center !px-4 !pr-6 gap-2",
                                            children: [(0,
                                            i.jsx)(m.d, {
                                                type: "basic_download",
                                                className: "-mt-[1px]"
                                            }), (0,
                                            i.jsx)(v.Z, {
                                                variant: "H14B",
                                                children: D("preview_item.download_all")
                                            })]
                                        }), (0,
                                        i.jsx)(d.Z.Primary, {
                                            loading: ee,
                                            disabled: ee || !te,
                                            onClick: function() {
                                            	// disable modal
                                                // if (!j)
                                                //     return w();
                                                C((function(e) {
                                                    var t = (0,
                                                    o.Z)({}, e);
                                                    return Object.entries(t).forEach((function(e) {
                                                        var n = (0,
                                                        c.Z)(e, 2)
                                                          , i = n[0];
                                                        n[1].status === h.zu["READY TO PROCESS"] && (t[i].status = h.zu.PENDING)
                                                    }
                                                    )),
                                                    t
                                                }
                                                ));
                                                var e = setInterval((function() {
                                                    if (null === $ || void 0 === $ ? void 0 : $.current)
                                                        return $.current = !1,
                                                        C((function(e) {
                                                            var t = (0,
                                                            o.Z)({}, e);
                                                            return Object.entries(t).forEach((function(e) {
                                                                var n = (0,
                                                                c.Z)(e, 2)
                                                                  , i = n[0];
                                                                n[1].status === h.zu.PENDING && (t[i].status = h.zu["READY TO PROCESS"])
                                                            }
                                                            )),
                                                            t
                                                        }
                                                        )),
                                                        void clearInterval(e);
                                                    C((function(t) {
                                                        var n, i = (0,
                                                        o.Z)({}, t), r = Object.values(i).filter((function(e) {
                                                            return e.status === h.zu.PENDING
                                                        }
                                                        )), a = Object.values(i).filter((function(e) {
                                                            return e.status === h.zu.PROCESSING
                                                        }
                                                        ));
                                                        (a.length < h.iE && r.length > 0 && r.slice(0, j ? h.iE - a.length : 2).forEach((function(e) {
                                                            i[e.id].status = h.zu.PROCESSING
                                                        }
                                                        )),
                                                        Object.values(i).filter((function(e) {
                                                            var t = e.status;
                                                            return t === h.zu.FINISHED || t === h.zu.FAILED
                                                        }
                                                        )).length === Object.values(i).length && clearInterval(e),
                                                        j) || (clearInterval(e),
                                                        null === (n = Object.values(i).filter((function(e) {
                                                            return e.status === h.zu.PENDING
                                                        }
                                                        ))) || void 0 === n || n.map((function(e) {
                                                            var t = e.id;
                                                            i[t].status = h.zu["READY TO PROCESS"]
                                                        }
                                                        )));
                                                        return i
                                                    }
                                                    ))
                                                }
                                                ), 200)
                                            },
                                            icon: (0,
                                            i.jsx)(m.d, {
                                                type: "icon_play",
                                                className: g()(ee || !te ? "text-neutral-ink-300" : "text-white"),
                                                mode: "fill"
                                            }),
                                            className: "!w-auto ml-2 cursor-pointer !px-4 !pr-6 h-10",
                                            children: (0,
                                            i.jsx)(v.Z, {
                                                variant: "H14B",
                                                children: D("preview_item.start")
                                            })
                                        })]
                                    })]
                                }), (0,
                                i.jsxs)("div", {
                                    className: "flex-auto flex items-center h-[60px] py-3",
                                    children: [(0,
                                    i.jsxs)(v.Z, {
                                        variant: "H16B",
                                        className: "text-neutral-ink-600",
                                        children: [D("preview_item.total"), " ", null === N || void 0 === N ? void 0 : N.length, " ", D("preview_item.images")]
                                    }), (0,
                                    i.jsxs)("div", {
                                        className: g()((null === N || void 0 === N ? void 0 : N.length) >= 50 && "pointer-events-none cursor-not-allowed", "ml-6 w-auto cursor-pointer flex items-center text-neutral-ink-500 hover:text-neutral-ink-600 gap-1"),
                                        onClick: _,
                                        children: [(0,
                                        i.jsx)(m.d, {
                                            type: "plus",
                                            size: 14,
                                            className: "-mt-0.5"
                                        }), (0,
                                        i.jsx)(v.Z, {
                                            variant: "H14B",
                                            children: D("preview_item.add")
                                        })]
                                    }), ee ? (0,
                                    i.jsxs)("div", {
                                        className: "ml-6 w-auto cursor-pointer flex items-center text-neutral-ink-500 hover:text-neutral-ink-600 gap-1",
                                        onClick: function() {
                                            return $.current = !0
                                        },
                                        children: [(0,
                                        i.jsx)(m.d, {
                                            type: "close",
                                            className: "-mt-[1px]"
                                        }), (0,
                                        i.jsx)(v.Z, {
                                            variant: "H14B",
                                            children: D("preview_item.cancel")
                                        })]
                                    }) : (0,
                                    i.jsxs)("div", {
                                        className: "ml-6 w-auto cursor-pointer flex items-center text-neutral-ink-500 hover:text-neutral-ink-600 gap-1",
                                        onClick: function() {
                                            X({
                                                type: R.j.Confirmation,
                                                showBackdrop: !0,
                                                content: D("preview_item.clear_all_confirm"),
                                                btnProps: {
                                                    ok: {
                                                        onOk: function() {
                                                            K(null),
                                                            S(),
                                                            Q()
                                                        },
                                                        title: L("button.ok")
                                                    }
                                                }
                                            })
                                        },
                                        children: [(0,
                                        i.jsx)(m.d, {
                                            type: "trash",
                                            size: 14,
                                            className: "-mt-0.5"
                                        }), (0,
                                        i.jsx)(v.Z, {
                                            variant: "H14B",
                                            children: D("preview_item.clear_all")
                                        })]
                                    }), (0,
                                    i.jsxs)("div", {
                                        className: "ml-6 w-auto cursor-pointer flex items-center text-neutral-ink-500 hover:text-neutral-ink-600 gap-2 group relative",
                                        children: [(0,
                                        i.jsx)(y.Z, {
                                            position: "bottom",
                                            className: "z-10 normal-case !w-[360px]",
                                            children: B("button.text_remover_switch.tooltip")
                                        }), (0,
                                        i.jsx)(U.r, {
                                            bgColor: "bg-blue-500",
                                            checked: t,
                                            onClick: function() {
                                                n(!t)
                                            },
                                            disabled: ee
                                        }), (0,
                                        i.jsx)(v.Z, {
                                            variant: "H14B",
                                            children: B("button.text_remover_switch.title")
                                        })]
                                    })]
                                }), (0,
                                i.jsx)("div", {})]
                            }), (0,
                            i.jsx)("div", {
                                children: Object.values(Z).map((function(e) {
                                    return (0,
                                    i.jsx)(E, {
                                        data: e,
                                        onRemove: ne,
                                        onConvert: re,
                                        onChangeType: ae,
                                        triggerConvert: ie,
                                        onSelect: se,
                                        isSelected: (null === V || void 0 === V ? void 0 : V.id) === (null === e || void 0 === e ? void 0 : e.id)
                                    }, null === e || void 0 === e ? void 0 : e.id)
                                }
                                ))
                            })]
                        }) : (0,
                        i.jsxs)("div", {
                            className: "flex h-full justify-center items-center flex-col mx-4",
                            children: [(0,
                            i.jsx)(m.d, {
                                type: "upload_batch",
                                size: 80,
                                className: "text-neutral-ink-400"
                            }), (0,
                            i.jsx)(v.Z, {
                                variant: "H20B",
                                className: "text-neutral-ink-600 mt-4",
                                children: D("preview_item.remove_bg.upload_title")
                            }), (0,
                            i.jsx)(v.Z, {
                                variant: "T14R",
                                className: "text-neutral-ink-500 mt-2",
                                children: D("preview_item.remove_bg.drop_desc")
                            }), (0,
                            i.jsx)(d.Z.Primary, {
                                onClick: _,
                                icon: (0,
                                i.jsx)(m.d, {
                                    type: "plus"
                                }),
                                className: "!w-auto !rounded-lg mt-8 px-4 pr-6 py-3 cursor-pointer",
                                children: (0,
                                i.jsx)(v.Z, {
                                    variant: "H16B",
                                    children: D("preview_item.select_image_title")
                                })
                            })]
                        })
                    }), !!(null === N || void 0 === N ? void 0 : N.length) && (0,
                    i.jsx)(T, {
                        selectedItem: V,
                        isEmpty: !(null === Z || void 0 === Z ? void 0 : Z[null === V || void 0 === V ? void 0 : V.id])
                    })]
                })
            })
        }
          , Y = n(55971)
          , q = n(95517)
          , X = n(11163)
          , Q = n(92412)
          , $ = n(38687)
          , J = n(19)
          , V = function(e) {
            var t = e.split("/");
            return t[t.length - 1]
        }
          , K = function(e) {
            var t = (0,
            x.Z)(p.t.Common).t
              , n = (0,
            f.useRef)()
              , i = (0,
            X.useRouter)()
              , r = (0,
            f.useState)(null)
              , a = r[0]
              , s = r[1]
              , o = function(n) {
                if (e && a && V(n) !== V(a) && !window.confirm(t("modal.confirm.title")))
                    return setTimeout((function() {
                        return i.replace(a)
                    }
                    ))
            };
            (0,
            f.useEffect)((function() {
                (null === i || void 0 === i ? void 0 : i.pathname) && s(i.pathname)
            }
            ), [null === i || void 0 === i ? void 0 : i.pathname]),
            (0,
            f.useEffect)((function() {
                if (e)
                    return n.current = function(e) {
                        e.preventDefault(),
                        e.returnValue = ""
                    }
                    ,
                    window.addEventListener("beforeunload", n.current),
                    i.events.on("routeChangeStart", o),
                    function() {
                        window.removeEventListener("beforeunload", n.current),
                        i.events.off("routeChangeStart", o)
                    }
            }
            ), [e, a])
        }
          , W = function() {
            var e = O.Z.useContainer()
              , t = e.openOverlay
              , n = e.closeOverlay
              , s = (0,
            X.useRouter)()
              , o = (0,
            x.Z)(p.t.BatchProcessingEditor).t
              , l = (0,
            x.Z)(p.t.Common).t
              , c = (0,
            $.Z)().isMobile
              , u = A.Z.useContainer().batchProcessingContext
              , d = u.onDropFiles
              , m = u.uploadFiles;
            return K(!!(null === m || void 0 === m ? void 0 : m.length)),
            (0,
            f.useEffect)((function() {
                c && t({
                    type: R.j.Confirmation,
                    showBackdrop: !0,
                    disabledClickBackdrop: !0,
                    content: o("preview_item.mobile_not_support"),
                    btnProps: {
                        cancel: {
                            hidden: !0
                        },
                        ok: {
                            onOk: function() {
                                s.push(Q._.home),
                                n()
                            },
                            title: l("button.ok")
                        }
                    }
                })
            }
            ), [c]),
            c ? (0,
            i.jsx)(a.Z, {
                noindex: !0,
                meta: {
                    title: o("meta.title"),
                    description: o("meta.description")
                }
            }) : (0,
            i.jsxs)(a.Z, {
                noindex: !0,
                meta: {
                    title: o("meta.title"),
                    description: o("meta.description")
                },
                children: [(0,
                i.jsx)(J.Z, {}), (0,
                i.jsx)(r.Z, {
                    disabled: m.length === q.z,
                    onDrop: d,
                    oneJobLimit: q.z,
                    acceptType: S.Gs,
                    children: (0,
                    i.jsx)(M, {})
                })]
            })
        }
          , ee = !0
          , te = function() {
            return (0,
            i.jsx)(Y.Z.Provider, {
                children: (0,
                i.jsx)(W, {})
            })
        }
    }
}, function(e) {
    e.O(0, [9774, 2888, 179], (function() {
        return t = 64281,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);
