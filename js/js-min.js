!function(t) {
    function e() {}
    function i(t) {
        function i(e) {
            e.prototype.option || (e.prototype.option = function(e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            })
        }
        function o(e, i) {
            t.fn[e] = function(o) {
                if ("string" == typeof o) {
                    for (var r = n.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
                        var d = this[a],
                            u = t.data(d, e);
                        if (u)
                            if (t.isFunction(u[o]) && "_" !== o.charAt(0)) {
                                var c = u[o].apply(u, r);
                                if (void 0 !== c)
                                    return c
                            } else
                                s("no such method '" + o + "' for " + e + " instance");
                        else
                            s("cannot call methods on " + e + " prior to initialization; attempted to call '" + o + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var n = t.data(this, e);
                    n ? (n.option(o), n._init()) : (n = new i(this, o), t.data(this, e, n))
                })
            }
        }
        if (t) {
            var s = "undefined" == typeof console ? e : function(t) {
                console.error(t)
            };
            return t.bridget = function(t, e) {
                i(e), o(t, e)
            }, t.bridget
        }
    }
    var n = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i("object" == typeof exports ? require("jquery") : t.jQuery)
}(window), function(t) {
    function e(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e, i
    }
    var i = document.documentElement,
        n = function() {};
    i.addEventListener ? n = function(t, e, i) {
        t.addEventListener(e, i, !1)
    } : i.attachEvent && (n = function(t, i, n) {
        t[i + n] = n.handleEvent ? function() {
            var i = e(t);
            n.handleEvent.call(n, i)
        } : function() {
            var i = e(t);
            n.call(t, i)
        }, t.attachEvent("on" + i, t[i + n])
    });
    var o = function() {};
    i.removeEventListener ? o = function(t, e, i) {
        t.removeEventListener(e, i, !1)
    } : i.detachEvent && (o = function(t, e, i) {
        t.detachEvent("on" + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (n) {
            t[e + i] = void 0
        }
    });
    var s = {
        bind: n,
        unbind: o
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", s) : "object" == typeof exports ? module.exports = s : t.eventie = s
}(window), function() {
    function t() {}
    function e(t, e) {
        for (var i = t.length; i--;)
            if (t[i].listener === e)
                return i;
        return -1
    }
    function i(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }
    var n = t.prototype,
        o = this,
        s = o.EventEmitter;
    n.getListeners = function(t) {
        var e,
            i,
            n = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (i in n)
                n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
        } else
            e = n[t] || (n[t] = []);
        return e
    }, n.flattenListeners = function(t) {
        var e,
            i = [];
        for (e = 0; t.length > e; e += 1)
            i.push(t[e].listener);
        return i
    }, n.getListenersAsObject = function(t) {
        var e,
            i = this.getListeners(t);
        return i instanceof Array && (e = {}, e[t] = i), e || i
    }, n.addListener = function(t, i) {
        var n,
            o = this.getListenersAsObject(t),
            s = "object" == typeof i;
        for (n in o)
            o.hasOwnProperty(n) && -1 === e(o[n], i) && o[n].push(s ? i : {
                listener: i,
                once: !1
            });
        return this
    }, n.on = i("addListener"), n.addOnceListener = function(t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        })
    }, n.once = i("addOnceListener"), n.defineEvent = function(t) {
        return this.getListeners(t), this
    }, n.defineEvents = function(t) {
        for (var e = 0; t.length > e; e += 1)
            this.defineEvent(t[e]);
        return this
    }, n.removeListener = function(t, i) {
        var n,
            o,
            s = this.getListenersAsObject(t);
        for (o in s)
            s.hasOwnProperty(o) && (n = e(s[o], i), -1 !== n && s[o].splice(n, 1));
        return this
    }, n.off = i("removeListener"), n.addListeners = function(t, e) {
        return this.manipulateListeners(!1, t, e)
    }, n.removeListeners = function(t, e) {
        return this.manipulateListeners(!0, t, e)
    }, n.manipulateListeners = function(t, e, i) {
        var n,
            o,
            s = t ? this.removeListener : this.addListener,
            r = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (n = i.length; n--;)
                s.call(this, e, i[n]);
        else
            for (n in e)
                e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? s.call(this, n, o) : r.call(this, n, o));
        return this
    }, n.removeEvent = function(t) {
        var e,
            i = typeof t,
            n = this._getEvents();
        if ("string" === i)
            delete n[t];
        else if (t instanceof RegExp)
            for (e in n)
                n.hasOwnProperty(e) && t.test(e) && delete n[e];
        else
            delete this._events;
        return this
    }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
        var i,
            n,
            o,
            s,
            r = this.getListenersAsObject(t);
        for (o in r)
            if (r.hasOwnProperty(o))
                for (n = r[o].length; n--;)
                    i = r[o][n], i.once === !0 && this.removeListener(t, i.listener), s = i.listener.apply(this, e || []), s === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, n.trigger = i("emitEvent"), n.emit = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, n.setOnceReturnValue = function(t) {
        return this._onceReturnValue = t, this
    }, n._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, n._getEvents = function() {
        return this._events || (this._events = {})
    }, t.noConflict = function() {
        return o.EventEmitter = s, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : o.EventEmitter = t
}.call(this), function(t) {
    function e(t) {
        if (t) {
            if ("string" == typeof n[t])
                return t;
            t = t.charAt(0).toUpperCase() + t.slice(1);
            for (var e, o = 0, s = i.length; s > o; o++)
                if (e = i[o] + t, "string" == typeof n[e])
                    return e
        }
    }
    var i = "Webkit Moz ms Ms O".split(" "),
        n = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
        return e
    }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window), function(t) {
    function e(t) {
        var e = parseFloat(t),
            i = -1 === t.indexOf("%") && !isNaN(e);
        return i && e
    }
    function i() {}
    function n() {
        for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0, i = r.length; i > e; e++) {
            var n = r[e];
            t[n] = 0
        }
        return t
    }
    function o(i) {
        function o() {
            if (!h) {
                h = !0;
                var n = t.getComputedStyle;
                if (d = function() {
                    var t = n ? function(t) {
                        return n(t, null)
                    } : function(t) {
                        return t.currentStyle
                    };
                    return function(e) {
                        var i = t(e);
                        return i || s("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
                    }
                }(), u = i("boxSizing")) {
                    var o = document.createElement("div");
                    o.style.width = "200px", o.style.padding = "1px 2px 3px 4px", o.style.borderStyle = "solid", o.style.borderWidth = "1px 2px 3px 4px", o.style[u] = "border-box";
                    var r = document.body || document.documentElement;
                    r.appendChild(o);
                    var a = d(o);
                    c = 200 === e(a.width), r.removeChild(o)
                }
            }
        }
        function a(t) {
            if (o(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                var i = d(t);
                if ("none" === i.display)
                    return n();
                var s = {};
                s.width = t.offsetWidth, s.height = t.offsetHeight;
                for (var a = s.isBorderBox = !(!u || !i[u] || "border-box" !== i[u]), h = 0, f = r.length; f > h; h++) {
                    var p = r[h],
                        m = i[p];
                    m = l(t, m);
                    var _ = parseFloat(m);
                    s[p] = isNaN(_) ? 0 : _
                }
                var g = s.paddingLeft + s.paddingRight,
                    v = s.paddingTop + s.paddingBottom,
                    y = s.marginLeft + s.marginRight,
                    b = s.marginTop + s.marginBottom,
                    S = s.borderLeftWidth + s.borderRightWidth,
                    w = s.borderTopWidth + s.borderBottomWidth,
                    I = a && c,
                    T = e(i.width);
                T !== !1 && (s.width = T + (I ? 0 : g + S));
                var C = e(i.height);
                return C !== !1 && (s.height = C + (I ? 0 : v + w)), s.innerWidth = s.width - (g + S), s.innerHeight = s.height - (v + w), s.outerWidth = s.width + y, s.outerHeight = s.height + b, s
            }
        }
        function l(e, i) {
            if (t.getComputedStyle || -1 === i.indexOf("%"))
                return i;
            var n = e.style,
                o = n.left,
                s = e.runtimeStyle,
                r = s && s.left;
            return r && (s.left = e.currentStyle.left), n.left = i, i = n.pixelLeft, n.left = o, r && (s.left = r), i
        }
        var d,
            u,
            c,
            h = !1;
        return a
    }
    var s = "undefined" == typeof console ? i : function(t) {
            console.error(t)
        },
        r = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("desandro-get-style-property")) : t.getSize = o(t.getStyleProperty)
}(window), function(t) {
    function e(t) {
        "function" == typeof t && (e.isReady ? t() : r.push(t))
    }
    function i(t) {
        var i = "readystatechange" === t.type && "complete" !== s.readyState;
        e.isReady || i || n()
    }
    function n() {
        e.isReady = !0;
        for (var t = 0, i = r.length; i > t; t++) {
            var n = r[t];
            n()
        }
    }
    function o(o) {
        return "complete" === s.readyState ? n() : (o.bind(s, "DOMContentLoaded", i), o.bind(s, "readystatechange", i), o.bind(t, "load", i)), e
    }
    var s = t.document,
        r = [];
    e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], o) : "object" == typeof exports ? module.exports = o(require("eventie")) : t.docReady = o(t.eventie)
}(window), function(t) {
    function e(t, e) {
        return t[r](e)
    }
    function i(t) {
        if (!t.parentNode) {
            var e = document.createDocumentFragment();
            e.appendChild(t)
        }
    }
    function n(t, e) {
        i(t);
        for (var n = t.parentNode.querySelectorAll(e), o = 0, s = n.length; s > o; o++)
            if (n[o] === t)
                return !0;
        return !1
    }
    function o(t, n) {
        return i(t), e(t, n)
    }
    var s,
        r = function() {
            if (t.matches)
                return "matches";
            if (t.matchesSelector)
                return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length; n > i; i++) {
                var o = e[i],
                    s = o + "MatchesSelector";
                if (t[s])
                    return s
            }
        }();
    if (r) {
        var a = document.createElement("div"),
            l = e(a, "div");
        s = l ? e : o
    } else
        s = n;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
        return s
    }) : "object" == typeof exports ? module.exports = s : window.matchesSelector = s
}(Element.prototype), function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(i, n) {
        return e(t, i, n)
    }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
}(window, function(t, e, i) {
    var n = {};
    n.extend = function(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }, n.modulo = function(t, e) {
        return (t % e + e) % e
    };
    var o = Object.prototype.toString;
    n.isArray = function(t) {
        return "[object Array]" == o.call(t)
    }, n.makeArray = function(t) {
        var e = [];
        if (n.isArray(t))
            e = t;
        else if (t && "number" == typeof t.length)
            for (var i = 0, o = t.length; o > i; i++)
                e.push(t[i]);
        else
            e.push(t);
        return e
    }, n.indexOf = Array.prototype.indexOf ? function(t, e) {
        return t.indexOf(e)
    } : function(t, e) {
        for (var i = 0, n = t.length; n > i; i++)
            if (t[i] === e)
                return i;
        return -1
    }, n.removeFrom = function(t, e) {
        var i = n.indexOf(t, e);
        -1 != i && t.splice(i, 1)
    }, n.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(t) {
        return t instanceof HTMLElement
    } : function(t) {
        return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName
    }, n.setText = function() {
        function t(t, i) {
            e = e || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), t[e] = i
        }
        var e;
        return t
    }(), n.getParent = function(t, e) {
        for (; t != document.body;)
            if (t = t.parentNode, i(t, e))
                return t
    }, n.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, n.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, n.filterFindElements = function(t, e) {
        t = n.makeArray(t);
        for (var o = [], s = 0, r = t.length; r > s; s++) {
            var a = t[s];
            if (n.isElement(a))
                if (e) {
                    i(a, e) && o.push(a);
                    for (var l = a.querySelectorAll(e), d = 0, u = l.length; u > d; d++)
                        o.push(l[d])
                } else
                    o.push(a)
        }
        return o
    }, n.debounceMethod = function(t, e, i) {
        var n = t.prototype[e],
            o = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[o];
            t && clearTimeout(t);
            var e = arguments,
                s = this;
            this[o] = setTimeout(function() {
                n.apply(s, e), delete s[o]
            }, i || 100)
        }
    }, n.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var s = t.console;
    return n.htmlInit = function(i, o) {
        e(function() {
            for (var e = n.toDashed(o), r = document.querySelectorAll(".js-" + e), a = "data-" + e + "-options", l = 0, d = r.length; d > l; l++) {
                var u,
                    c = r[l],
                    h = c.getAttribute(a);
                try {
                    u = h && JSON.parse(h)
                } catch (f) {
                    s && s.error("Error parsing " + a + " on " + c.nodeName.toLowerCase() + (c.id ? "#" + c.id : "") + ": " + f);
                    continue
                }
                var p = new i(c, u),
                    m = t.jQuery;
                m && m.data(c, o, p)
            }
        })
    }, n
}), function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(i, n, o, s) {
        return e(t, i, n, o, s)
    }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Outlayer = {}, t.Outlayer.Item = e(t, t.EventEmitter, t.getSize, t.getStyleProperty, t.fizzyUIUtils))
}(window, function(t, e, i, n, o) {
    function s(t) {
        for (var e in t)
            return !1;
        return e = null, !0
    }
    function r(t, e) {
        t && (this.element = t, this.layout = e, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }
    var a = t.getComputedStyle,
        l = a ? function(t) {
            return a(t, null)
        } : function(t) {
            return t.currentStyle
        },
        d = n("transition"),
        u = n("transform"),
        c = d && u,
        h = !!n("perspective"),
        f = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "otransitionend",
            transition: "transitionend"
        }[d],
        p = ["transform", "transition", "transitionDuration", "transitionProperty"],
        m = function() {
            for (var t = {}, e = 0, i = p.length; i > e; e++) {
                var o = p[e],
                    s = n(o);
                s && s !== o && (t[o] = s)
            }
            return t
        }();
    o.extend(r.prototype, e.prototype), r.prototype._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, r.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, r.prototype.getSize = function() {
        this.size = i(this.element)
    }, r.prototype.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            var n = m[i] || i;
            e[n] = t[i]
        }
    }, r.prototype.getPosition = function() {
        var t = l(this.element),
            e = this.layout.options,
            i = e.isOriginLeft,
            n = e.isOriginTop,
            o = parseInt(t[i ? "left" : "right"], 10),
            s = parseInt(t[n ? "top" : "bottom"], 10);
        o = isNaN(o) ? 0 : o, s = isNaN(s) ? 0 : s;
        var r = this.layout.size;
        o -= i ? r.paddingLeft : r.paddingRight, s -= n ? r.paddingTop : r.paddingBottom, this.position.x = o, this.position.y = s
    }, r.prototype.layoutPosition = function() {
        var t = this.layout.size,
            e = this.layout.options,
            i = {},
            n = e.isOriginLeft ? "paddingLeft" : "paddingRight",
            o = e.isOriginLeft ? "left" : "right",
            s = e.isOriginLeft ? "right" : "left",
            r = this.position.x + t[n];
        r = e.percentPosition && !e.isHorizontal ? 100 * (r / t.width) + "%" : r + "px", i[o] = r, i[s] = "";
        var a = e.isOriginTop ? "paddingTop" : "paddingBottom",
            l = e.isOriginTop ? "top" : "bottom",
            d = e.isOriginTop ? "bottom" : "top",
            u = this.position.y + t[a];
        u = e.percentPosition && e.isHorizontal ? 100 * (u / t.height) + "%" : u + "px", i[l] = u, i[d] = "", this.css(i), this.emitEvent("layout", [this])
    };
    var _ = h ? function(t, e) {
        return "translate3d(" + t + "px, " + e + "px, 0)"
    } : function(t, e) {
        return "translate(" + t + "px, " + e + "px)"
    };
    r.prototype._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x,
            n = this.position.y,
            o = parseInt(t, 10),
            s = parseInt(e, 10),
            r = o === this.position.x && s === this.position.y;
        if (this.setPosition(t, e), r && !this.isTransitioning)
            return void this.layoutPosition();
        var a = t - i,
            l = e - n,
            d = {},
            u = this.layout.options;
        a = u.isOriginLeft ? a : -a, l = u.isOriginTop ? l : -l, d.transform = _(a, l), this.transition({
            to: d,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }, r.prototype.goTo = function(t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, r.prototype.moveTo = c ? r.prototype._transitionTo : r.prototype.goTo, r.prototype.setPosition = function(t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
    }, r.prototype._nonTransition = function(t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd)
            t.onTransitionEnd[e].call(this)
    }, r.prototype._transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration))
            return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd)
            e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
            e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var n = this.element.offsetHeight;
            n = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var g = u && o.toDashed(u) + ",opacity";
    r.prototype.enableTransition = function() {
        this.isTransitioning || (this.css({
            transitionProperty: g,
            transitionDuration: this.layout.options.transitionDuration
        }), this.element.addEventListener(f, this, !1))
    }, r.prototype.transition = r.prototype[d ? "_transition" : "_nonTransition"], r.prototype.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }, r.prototype.onotransitionend = function(t) {
        this.ontransitionend(t)
    };
    var v = {
        "-webkit-transform": "transform",
        "-moz-transform": "transform",
        "-o-transform": "transform"
    };
    r.prototype.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn,
                i = v[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[i], s(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) {
                var n = e.onEnd[i];
                n.call(this), delete e.onEnd[i]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, r.prototype.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(f, this, !1), this.isTransitioning = !1
    }, r.prototype._removeStyles = function(t) {
        var e = {};
        for (var i in t)
            e[i] = "";
        this.css(e)
    };
    var y = {
        transitionProperty: "",
        transitionDuration: ""
    };
    return r.prototype.removeTransitionStyles = function() {
        this.css(y)
    }, r.prototype.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, r.prototype.remove = function() {
        if (!d || !parseFloat(this.layout.options.transitionDuration))
            return void this.removeElem();
        var t = this;
        this.once("transitionEnd", function() {
            t.removeElem()
        }), this.hide()
    }, r.prototype.reveal = function() {
        delete this.isHidden, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, r.prototype.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }, r.prototype.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity)
            return "opacity";
        for (var i in e)
            return i
    }, r.prototype.hide = function() {
        this.isHidden = !0, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, r.prototype.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, r.prototype.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, r
}), function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, s, r) {
        return e(t, i, n, o, s, r)
    }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.eventie, t.EventEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, n, o, s) {
    function r(t, e) {
        var i = o.getQueryElement(t);
        if (!i)
            return void (a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, l && (this.$element = l(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
        var n = ++u;
        this.element.outlayerGUID = n, c[n] = this, this._create(), this.options.isInitLayout && this.layout()
    }
    var a = t.console,
        l = t.jQuery,
        d = function() {},
        u = 0,
        c = {};
    return r.namespace = "outlayer", r.Item = s, r.defaults = {
        containerStyle: {
            position: "relative"
        },
        isInitLayout: !0,
        isOriginLeft: !0,
        isOriginTop: !0,
        isResizeBound: !0,
        isResizingContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    }, o.extend(r.prototype, i.prototype), r.prototype.option = function(t) {
        o.extend(this.options, t)
    }, r.prototype._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
    }, r.prototype.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }, r.prototype._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0, s = e.length; s > o; o++) {
            var r = e[o],
                a = new i(r, this);
            n.push(a)
        }
        return n
    }, r.prototype._filterFindItemElements = function(t) {
        return o.filterFindElements(t, this.options.itemSelector)
    }, r.prototype.getItemElements = function() {
        for (var t = [], e = 0, i = this.items.length; i > e; e++)
            t.push(this.items[e].element);
        return t
    }, r.prototype.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, t), this._isLayoutInited = !0
    }, r.prototype._init = r.prototype.layout, r.prototype._resetLayout = function() {
        this.getSize()
    }, r.prototype.getSize = function() {
        this.size = n(this.element)
    }, r.prototype._getMeasurement = function(t, e) {
        var i,
            s = this.options[t];
        s ? ("string" == typeof s ? i = this.element.querySelector(s) : o.isElement(s) && (i = s), this[t] = i ? n(i)[e] : s) : this[t] = 0
    }, r.prototype.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, r.prototype._getItemsForLayout = function(t) {
        for (var e = [], i = 0, n = t.length; n > i; i++) {
            var o = t[i];
            o.isIgnored || e.push(o)
        }
        return e
    }, r.prototype._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            for (var i = [], n = 0, o = t.length; o > n; n++) {
                var s = t[n],
                    r = this._getItemLayoutPosition(s);
                r.item = s, r.isInstant = e || s.isLayoutInstant, i.push(r)
            }
            this._processLayoutQueue(i)
        }
    }, r.prototype._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }, r.prototype._processLayoutQueue = function(t) {
        for (var e = 0, i = t.length; i > e; e++) {
            var n = t[e];
            this._positionItem(n.item, n.x, n.y, n.isInstant)
        }
    }, r.prototype._positionItem = function(t, e, i, n) {
        n ? t.goTo(e, i) : t.moveTo(e, i)
    }, r.prototype._postLayout = function() {
        this.resizeContainer()
    }, r.prototype.resizeContainer = function() {
        if (this.options.isResizingContainer) {
            var t = this._getContainerSize();
            t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
        }
    }, r.prototype._getContainerSize = d, r.prototype._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, r.prototype._emitCompleteOnItems = function(t, e) {
        function i() {
            o.emitEvent(t + "Complete", [e])
        }
        function n() {
            r++, r === s && i()
        }
        var o = this,
            s = e.length;
        if (!e || !s)
            return void i();
        for (var r = 0, a = 0, l = e.length; l > a; a++) {
            var d = e[a];
            d.once(t, n)
        }
    }, r.prototype.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, r.prototype.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, r.prototype.stamp = function(t) {
        if (t = this._find(t)) {
            this.stamps = this.stamps.concat(t);
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                this.ignore(n)
            }
        }
    }, r.prototype.unstamp = function(t) {
        if (t = this._find(t))
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                o.removeFrom(this.stamps, n), this.unignore(n)
            }
    }, r.prototype._find = function(t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)) : void 0
    }, r.prototype._manageStamps = function() {
        if (this.stamps && this.stamps.length) {
            this._getBoundingRect();
            for (var t = 0, e = this.stamps.length; e > t; t++) {
                var i = this.stamps[t];
                this._manageStamp(i)
            }
        }
    }, r.prototype._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(),
            e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, r.prototype._manageStamp = d, r.prototype._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(),
            i = this._boundingRect,
            o = n(t),
            s = {
                left: e.left - i.left - o.marginLeft,
                top: e.top - i.top - o.marginTop,
                right: i.right - e.right - o.marginRight,
                bottom: i.bottom - e.bottom - o.marginBottom
            };
        return s
    }, r.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, r.prototype.bindResize = function() {
        this.isResizeBound || (e.bind(t, "resize", this), this.isResizeBound = !0)
    }, r.prototype.unbindResize = function() {
        this.isResizeBound && e.unbind(t, "resize", this), this.isResizeBound = !1
    }, r.prototype.onresize = function() {
        function t() {
            e.resize(), delete e.resizeTimeout
        }
        this.resizeTimeout && clearTimeout(this.resizeTimeout);
        var e = this;
        this.resizeTimeout = setTimeout(t, 100)
    }, r.prototype.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, r.prototype.needsResizeLayout = function() {
        var t = n(this.element),
            e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }, r.prototype.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, r.prototype.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, r.prototype.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, r.prototype.reveal = function(t) {
        this._emitCompleteOnItems("reveal", t);
        for (var e = t && t.length, i = 0; e && e > i; i++) {
            var n = t[i];
            n.reveal()
        }
    }, r.prototype.hide = function(t) {
        this._emitCompleteOnItems("hide", t);
        for (var e = t && t.length, i = 0; e && e > i; i++) {
            var n = t[i];
            n.hide()
        }
    }, r.prototype.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, r.prototype.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }, r.prototype.getItem = function(t) {
        for (var e = 0, i = this.items.length; i > e; e++) {
            var n = this.items[e];
            if (n.element === t)
                return n
        }
    }, r.prototype.getItems = function(t) {
        t = o.makeArray(t);
        for (var e = [], i = 0, n = t.length; n > i; i++) {
            var s = t[i],
                r = this.getItem(s);
            r && e.push(r)
        }
        return e
    }, r.prototype.remove = function(t) {
        var e = this.getItems(t);
        if (this._emitCompleteOnItems("remove", e), e && e.length)
            for (var i = 0, n = e.length; n > i; i++) {
                var s = e[i];
                s.remove(), o.removeFrom(this.items, s)
            }
    }, r.prototype.destroy = function() {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "";
        for (var e = 0, i = this.items.length; i > e; e++) {
            var n = this.items[e];
            n.destroy()
        }
        this.unbindResize();
        var o = this.element.outlayerGUID;
        delete c[o], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
    }, r.data = function(t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && c[e]
    }, r.create = function(t, e) {
        function i() {
            r.apply(this, arguments)
        }
        return Object.create ? i.prototype = Object.create(r.prototype) : o.extend(i.prototype, r.prototype), i.prototype.constructor = i, i.defaults = o.extend({}, r.defaults), o.extend(i.defaults, e), i.prototype.settings = {}, i.namespace = t, i.data = r.data, i.Item = function() {
            s.apply(this, arguments)
        }, i.Item.prototype = new s, o.htmlInit(i, t), l && l.bridget && l.bridget(t, i), i
    }, r.Item = s, r
}), function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
    function e() {
        t.Item.apply(this, arguments)
    }
    e.prototype = new t.Item, e.prototype._create = function() {
        this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
    }, e.prototype.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData,
                e = this.layout._sorters;
            for (var i in t) {
                var n = e[i];
                this.sortData[i] = n(this.element, this)
            }
        }
    };
    var i = e.prototype.destroy;
    return e.prototype.destroy = function() {
        i.apply(this, arguments), this.css({
            display: ""
        })
    }, e
}), function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(t, e) {
    function i(t) {
        this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }
    return function() {
        function t(t) {
            return function() {
                return e.prototype[t].apply(this.isotope, arguments)
            }
        }
        for (var n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], o = 0, s = n.length; s > o; o++) {
            var r = n[o];
            i.prototype[r] = t(r)
        }
    }(), i.prototype.needsVerticalResizeLayout = function() {
        var e = t(this.isotope.element),
            i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight
    }, i.prototype._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }, i.prototype.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }, i.prototype.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }, i.prototype.getSegmentSize = function(t, e) {
        var i = t + e,
            n = "outer" + e;
        if (this._getMeasurement(i, n), !this[i]) {
            var o = this.getFirstItemSize();
            this[i] = o && o[n] || this.isotope.size["inner" + e]
        }
    }, i.prototype.getFirstItemSize = function() {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }, i.prototype.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }, i.prototype.getSize = function() {
        this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function(t, e) {
        function n() {
            i.apply(this, arguments)
        }
        return n.prototype = new i, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
    }, i
}), function(t, e) {
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : t.Masonry = e(t.Outlayer, t.getSize, t.fizzyUIUtils)
}(window, function(t, e, i) {
    var n = t.create("masonry");
    return n.prototype._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
        var t = this.cols;
        for (this.colYs = []; t--;)
            this.colYs.push(0);
        this.maxY = 0
    }, n.prototype.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0],
                i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter,
            o = this.containerWidth + this.gutter,
            s = o / n,
            r = n - o % n,
            a = r && 1 > r ? "round" : "floor";
        s = Math[a](s), this.cols = Math.max(s, 1)
    }, n.prototype.getContainerWidth = function() {
        var t = this.options.isFitWidth ? this.element.parentNode : this.element,
            i = e(t);
        this.containerWidth = i && i.innerWidth
    }, n.prototype._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
            n = e && 1 > e ? "round" : "ceil",
            o = Math[n](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (var s = this._getColGroup(o), r = Math.min.apply(Math, s), a = i.indexOf(s, r), l = {
                x: this.columnWidth * a,
                y: r
            }, d = r + t.size.outerHeight, u = this.cols + 1 - s.length, c = 0; u > c; c++)
            this.colYs[a + c] = d;
        return l
    }, n.prototype._getColGroup = function(t) {
        if (2 > t)
            return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
            var o = this.colYs.slice(n, n + t);
            e[n] = Math.max.apply(Math, o)
        }
        return e
    }, n.prototype._manageStamp = function(t) {
        var i = e(t),
            n = this._getElementOffset(t),
            o = this.options.isOriginLeft ? n.left : n.right,
            s = o + i.outerWidth,
            r = Math.floor(o / this.columnWidth);
        r = Math.max(0, r);
        var a = Math.floor(s / this.columnWidth);
        a -= s % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
        for (var l = (this.options.isOriginTop ? n.top : n.bottom) + i.outerHeight, d = r; a >= d; d++)
            this.colYs[d] = Math.max(l, this.colYs[d])
    }, n.prototype._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
    }, n.prototype._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];)
            t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, n.prototype.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(), t !== this.containerWidth
    }, n
}), function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
    function i(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    var n = t.create("masonry"),
        o = n.prototype._getElementOffset,
        s = n.prototype.layout,
        r = n.prototype._getMeasurement;
    i(n.prototype, e.prototype), n.prototype._getElementOffset = o, n.prototype.layout = s, n.prototype._getMeasurement = r;
    var a = n.prototype.measureColumns;
    n.prototype.measureColumns = function() {
        this.items = this.isotope.filteredItems, a.call(this)
    };
    var l = n.prototype._manageStamp;
    return n.prototype._manageStamp = function() {
        this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, l.apply(this, arguments)
    }, n
}), function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    var e = t.create("fitRows");
    return e.prototype._resetLayout = function() {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth");
    }, e.prototype._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
            i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var n = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
    }, e.prototype._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }, e
}), function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    var e = t.create("vertical", {
        horizontalAlignment: 0
    });
    return e.prototype._resetLayout = function() {
        this.y = 0
    }, e.prototype._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
            i = this.y;
        return this.y += t.size.outerHeight, {
            x: e,
            y: i
        }
    }, e.prototype._getContainerSize = function() {
        return {
            height: this.y
        }
    }, e
}), function(t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, n, o, s, r, a) {
        return e(t, i, n, o, s, r, a)
    }) : "object" == typeof exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function(t, e, i, n, o, s, r) {
    function a(t, e) {
        return function(i, n) {
            for (var o = 0, s = t.length; s > o; o++) {
                var r = t[o],
                    a = i.sortData[r],
                    l = n.sortData[r];
                if (a > l || l > a) {
                    var d = void 0 !== e[r] ? e[r] : e,
                        u = d ? 1 : -1;
                    return (a > l ? 1 : -1) * u
                }
            }
            return 0
        }
    }
    var l = t.jQuery,
        d = String.prototype.trim ? function(t) {
            return t.trim()
        } : function(t) {
            return t.replace(/^\s+|\s+$/g, "")
        },
        u = document.documentElement,
        c = u.textContent ? function(t) {
            return t.textContent
        } : function(t) {
            return t.innerText
        },
        h = e.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
    h.Item = s, h.LayoutMode = r, h.prototype._create = function() {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
        for (var t in r.modes)
            this._initLayoutMode(t)
    }, h.prototype.reloadItems = function() {
        this.itemGUID = 0, e.prototype.reloadItems.call(this)
    }, h.prototype._itemize = function() {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0, n = t.length; n > i; i++) {
            var o = t[i];
            o.id = this.itemGUID++
        }
        return this._updateItemsSortData(t), t
    }, h.prototype._initLayoutMode = function(t) {
        var e = r.modes[t],
            i = this.options[t] || {};
        this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, h.prototype.layout = function() {
        return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
    }, h.prototype._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, h.prototype.arrange = function(t) {
        function e() {
            n.reveal(i.needReveal), n.hide(i.needHide)
        }
        this.option(t), this._getIsInstant();
        var i = this._filter(this.items);
        this.filteredItems = i.matches;
        var n = this;
        this._bindArrangeComplete(), this._isInstant ? this._noTransition(e) : e(), this._sort(), this._layout()
    }, h.prototype._init = h.prototype.arrange, h.prototype._getIsInstant = function() {
        var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        return this._isInstant = t, t
    }, h.prototype._bindArrangeComplete = function() {
        function t() {
            e && i && n && o.emitEvent("arrangeComplete", [o.filteredItems])
        }
        var e,
            i,
            n,
            o = this;
        this.once("layoutComplete", function() {
            e = !0, t()
        }), this.once("hideComplete", function() {
            i = !0, t()
        }), this.once("revealComplete", function() {
            n = !0, t()
        })
    }, h.prototype._filter = function(t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], n = [], o = [], s = this._getFilterTest(e), r = 0, a = t.length; a > r; r++) {
            var l = t[r];
            if (!l.isIgnored) {
                var d = s(l);
                d && i.push(l), d && l.isHidden ? n.push(l) : d || l.isHidden || o.push(l)
            }
        }
        return {
            matches: i,
            needReveal: n,
            needHide: o
        }
    }, h.prototype._getFilterTest = function(t) {
        return l && this.options.isJQueryFiltering ? function(e) {
            return l(e.element).is(t)
        } : "function" == typeof t ? function(e) {
            return t(e.element)
        } : function(e) {
            return n(e.element, t)
        }
    }, h.prototype.updateSortData = function(t) {
        var e;
        t ? (t = o.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
    }, h.prototype._getSorters = function() {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = f(i)
        }
    }, h.prototype._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && e > i; i++) {
            var n = t[i];
            n.updateSortData()
        }
    };
    var f = function() {
        function t(t) {
            if ("string" != typeof t)
                return t;
            var i = d(t).split(" "),
                n = i[0],
                o = n.match(/^\[(.+)\]$/),
                s = o && o[1],
                r = e(s, n),
                a = h.sortDataParsers[i[1]];
            return t = a ? function(t) {
                return t && a(r(t))
            } : function(t) {
                return t && r(t)
            }
        }
        function e(t, e) {
            var i;
            return i = t ? function(e) {
                return e.getAttribute(t)
            } : function(t) {
                var i = t.querySelector(e);
                return i && c(i)
            }
        }
        return t
    }();
    h.sortDataParsers = {
        parseInt: function(t) {
            return parseInt(t, 10)
        },
        parseFloat: function(t) {
            return parseFloat(t)
        }
    }, h.prototype._sort = function() {
        var t = this.options.sortBy;
        if (t) {
            var e = [].concat.apply(t, this.sortHistory),
                i = a(e, this.options.sortAscending);
            this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t)
        }
    }, h.prototype._mode = function() {
        var t = this.options.layoutMode,
            e = this.modes[t];
        if (!e)
            throw Error("No layout mode: " + t);
        return e.options = this.options[t], e
    }, h.prototype._resetLayout = function() {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, h.prototype._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t)
    }, h.prototype._manageStamp = function(t) {
        this._mode()._manageStamp(t)
    }, h.prototype._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }, h.prototype.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }, h.prototype.appended = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, h.prototype.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
        }
    }, h.prototype._filterRevealAdded = function(t) {
        var e = this._filter(t);
        return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
    }, h.prototype.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i,
                n,
                o = e.length;
            for (i = 0; o > i; i++)
                n = e[i], this.element.appendChild(n.element);
            var s = this._filter(e).matches;
            for (i = 0; o > i; i++)
                e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; o > i; i++)
                delete e[i].isLayoutInstant;
            this.reveal(s)
        }
    };
    var p = h.prototype.remove;
    return h.prototype.remove = function(t) {
        t = o.makeArray(t);
        var e = this.getItems(t);
        p.call(this, t);
        var i = e && e.length;
        if (i)
            for (var n = 0; i > n; n++) {
                var s = e[n];
                o.removeFrom(this.filteredItems, s)
            }
    }, h.prototype.shuffle = function() {
        for (var t = 0, e = this.items.length; e > t; t++) {
            var i = this.items[t];
            i.sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, h.prototype._noTransition = function(t) {
        var e = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var i = t.call(this);
        return this.options.transitionDuration = e, i
    }, h.prototype.getFilteredItemElements = function() {
        for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++)
            t.push(this.filteredItems[e].element);
        return t
    }, h
}), function(t) {
    function e(e, i) {
        var n,
            o = this,
            s = window.navigator,
            r = s.userAgent.toLowerCase();
        o.uid = t.rsModules.uid++, o.ns = ".rs" + o.uid;
        var a = document.createElement("div").style,
            l = ["webkit", "Moz", "ms", "O"],
            d = "",
            u = 0,
            c;
        for (n = 0; n < l.length; n++)
            c = l[n], !d && c + "Transform" in a && (d = c), c = c.toLowerCase(), window.requestAnimationFrame || (window.requestAnimationFrame = window[c + "RequestAnimationFrame"], window.cancelAnimationFrame = window[c + "CancelAnimationFrame"] || window[c + "CancelRequestAnimationFrame"]);
        window.requestAnimationFrame || (window.requestAnimationFrame = function(t, e) {
            var i = (new Date).getTime(),
                n = Math.max(0, 16 - (i - u)),
                o = window.setTimeout(function() {
                    t(i + n)
                }, n);
            return u = i + n, o
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
            clearTimeout(t)
        }), o.isIPAD = r.match(/(ipad)/), o.isIOS = o.isIPAD || r.match(/(iphone|ipod)/), n = function(t) {
            return t = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || 0 > t.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [], {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        }(r), l = {}, n.browser && (l[n.browser] = !0, l.version = n.version), l.chrome && (l.webkit = !0), o._a = l, o.isAndroid = -1 < r.indexOf("android"), o.slider = t(e), o.ev = t(o), o._b = t(document), o.st = t.extend({}, t.fn.royalSlider.defaults, i), o._c = o.st.transitionSpeed, o._d = 0, !o.st.allowCSS3 || l.webkit && !o.st.allowCSS3OnWebkit || (n = d + (d ? "T" : "t"), o._e = n + "ransform" in a && n + "ransition" in a, o._e && (o._f = d + (d ? "P" : "p") + "erspective" in a)), d = d.toLowerCase(), o._g = "-" + d + "-", o._h = "vertical" === o.st.slidesOrientation ? !1 : !0, o._i = o._h ? "left" : "top", o._j = o._h ? "width" : "height", o._k = -1, o._l = "fade" === o.st.transitionType ? !1 : !0, o._l || (o.st.sliderDrag = !1, o._m = 10), o._n = "z-index:0; display:none; opacity:0;", o._o = 0, o._p = 0, o._q = 0, t.each(t.rsModules, function(t, e) {
            "uid" !== t && e.call(o)
        }), o.slides = [], o._r = 0, (o.st.slides ? t(o.st.slides) : o.slider.children().detach()).each(function() {
            o._s(this, !0)
        }), o.st.randomizeSlides && o.slides.sort(function() {
            return .5 - Math.random()
        }), o.numSlides = o.slides.length, o._t(), o.st.startSlideId ? o.st.startSlideId > o.numSlides - 1 && (o.st.startSlideId = o.numSlides - 1) : o.st.startSlideId = 0, o._o = o.staticSlideId = o.currSlideId = o._u = o.st.startSlideId, o.currSlide = o.slides[o.currSlideId], o._v = 0, o.pointerMultitouch = !1, o.slider.addClass((o._h ? "rsHor" : "rsVer") + (o._l ? "" : " rsFade")), a = '<div class="rsOverflow"><div class="rsContainer">', o.slidesSpacing = o.st.slidesSpacing, o._w = (o._h ? o.slider.width() : o.slider.height()) + o.st.slidesSpacing, o._x = Boolean(0 < o._y), 1 >= o.numSlides && (o._z = !1), o._a1 = o._z && o._l ? 2 === o.numSlides ? 1 : 2 : 0, o._b1 = 6 > o.numSlides ? o.numSlides : 6, o._c1 = 0, o._d1 = 0, o.slidesJQ = [];
        for (n = 0; n < o.numSlides; n++)
            o.slidesJQ.push(t('<div style="' + (o._l ? "" : n !== o.currSlideId ? o._n : "z-index:0;") + '" class="rsSlide "></div>'));
        o._e1 = a = t(a + "</div></div>");
        var h = o.ns,
            d = function(t, e, i, n, s) {
                o._j1 = t + e + h, o._k1 = t + i + h, o._l1 = t + n + h, s && (o._m1 = t + s + h)
            };
        n = s.pointerEnabled, o.pointerEnabled = n || s.msPointerEnabled, o.pointerEnabled ? (o.hasTouch = !1, o._n1 = .2, o.pointerMultitouch = Boolean(1 < s[(n ? "m" : "msM") + "axTouchPoints"]), n ? d("pointer", "down", "move", "up", "cancel") : d("MSPointer", "Down", "Move", "Up", "Cancel")) : (o.isIOS ? o._j1 = o._k1 = o._l1 = o._m1 = "" : d("mouse", "down", "move", "up"), "ontouchstart" in window || "createTouch" in document ? (o.hasTouch = !0, o._j1 += " touchstart" + h, o._k1 += " touchmove" + h, o._l1 += " touchend" + h, o._m1 += " touchcancel" + h, o._n1 = .5, o.st.sliderTouch && (o._f1 = !0)) : (o.hasTouch = !1, o._n1 = .2)), o.st.sliderDrag && (o._f1 = !0, l.msie || l.opera ? o._g1 = o._h1 = "move" : l.mozilla ? (o._g1 = "-moz-grab", o._h1 = "-moz-grabbing") : l.webkit && -1 != s.platform.indexOf("Mac") && (o._g1 = "-webkit-grab", o._h1 = "-webkit-grabbing"), o._i1()), o.slider.html(a), o._o1 = o.st.controlsInside ? o._e1 : o.slider, o._p1 = o._e1.children(".rsContainer"), o.pointerEnabled && o._p1.css((n ? "" : "-ms-") + "touch-action", o._h ? "pan-y" : "pan-x"), o._q1 = t('<div class="rsPreloader"></div>'), s = o._p1.children(".rsSlide"), o._r1 = o.slidesJQ[o.currSlideId], o._s1 = 0, o._e ? (o._t1 = "transition-property", o._u1 = "transition-duration", o._v1 = "transition-timing-function", o._w1 = o._x1 = o._g + "transform", o._f ? (l.webkit && !l.chrome && o.slider.addClass("rsWebkit3d"), o._y1 = "translate3d(", o._z1 = "px, ", o._a2 = "px, 0px)") : (o._y1 = "translate(", o._z1 = "px, ", o._a2 = "px)"), o._l ? o._p1[o._g + o._t1] = o._g + "transform" : (l = {}, l[o._g + o._t1] = "opacity", l[o._g + o._u1] = o.st.transitionSpeed + "ms", l[o._g + o._v1] = o.st.css3easeInOut, s.css(l))) : (o._x1 = "left", o._w1 = "top");
        var f;
        t(window).on("resize" + o.ns, function() {
            f && clearTimeout(f), f = setTimeout(function() {
                o.updateSliderSize()
            }, 50)
        }), o.ev.trigger("rsAfterPropsSetup"), o.updateSliderSize(), o.st.keyboardNavEnabled && o._b2(), o.st.arrowsNavHideOnTouch && (o.hasTouch || o.pointerMultitouch) && (o.st.arrowsNav = !1), o.st.arrowsNav && (s = o._o1, t('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"></div></div>').appendTo(s), o._c2 = s.children(".rsArrowLeft").click(function(t) {
            t.preventDefault(), o.prev()
        }), o._d2 = s.children(".rsArrowRight").click(function(t) {
            t.preventDefault(), o.next()
        }), o.st.arrowsNavAutoHide && !o.hasTouch && (o._c2.addClass("rsHidden"), o._d2.addClass("rsHidden"), s.one("mousemove.arrowshover", function() {
            o._c2.removeClass("rsHidden"), o._d2.removeClass("rsHidden")
        }), s.hover(function() {
            o._e2 || (o._c2.removeClass("rsHidden"), o._d2.removeClass("rsHidden"))
        }, function() {
            o._e2 || (o._c2.addClass("rsHidden"), o._d2.addClass("rsHidden"))
        })), o.ev.on("rsOnUpdateNav", function() {
            o._f2()
        }), o._f2()), o.hasTouch && o.st.sliderTouch || !o.hasTouch && o.st.sliderDrag ? o._p1.on(o._j1, function(t) {
            o._g2(t)
        }) : o.dragSuccess = !1;
        var p = ["rsPlayBtnIcon", "rsPlayBtn", "rsCloseVideoBtn", "rsCloseVideoIcn"];
        o._p1.click(function(e) {
            if (!o.dragSuccess) {
                var i = t(e.target).attr("class");
                if (-1 !== t.inArray(i, p) && o.toggleVideo())
                    return !1;
                if (o.st.navigateByClick && !o._h2) {
                    if (t(e.target).closest(".rsNoDrag", o._r1).length)
                        return !0;
                    o._i2(e)
                }
                o.ev.trigger("rsSlideClick", e)
            }
        }).on("click.rs", "a", function(t) {
            return o.dragSuccess ? !1 : (o._h2 = !0, void setTimeout(function() {
                o._h2 = !1
            }, 3))
        }), o.ev.trigger("rsAfterInit")
    }
    t.rsModules || (t.rsModules = {
        uid: 0
    }), e.prototype = {
        constructor: e,
        _i2: function(t) {
            t = t[this._h ? "pageX" : "pageY"] - this._j2, t >= this._q ? this.next() : 0 > t && this.prev()
        },
        _t: function() {
            var t;
            t = this.st.numImagesToPreload, (this._z = this.st.loop) && (2 === this.numSlides ? (this._z = !1, this.st.loopRewind = !0) : 2 > this.numSlides && (this.st.loopRewind = this._z = !1)), this._z && t > 0 && (4 >= this.numSlides ? t = 1 : this.st.numImagesToPreload > (this.numSlides - 1) / 2 && (t = Math.floor((this.numSlides - 1) / 2))), this._y = t
        },
        _s: function(e, i) {
            function n(t, e) {
                if (e ? r.images.push(t.attr(e)) : r.images.push(t.text()), l) {
                    l = !1, r.caption = "src" === e ? t.attr("alt") : t.contents(), r.image = r.images[0], r.videoURL = t.attr("data-rsVideo");
                    var i = t.attr("data-rsw"),
                        n = t.attr("data-rsh");
                    "undefined" != typeof i && !1 !== i && "undefined" != typeof n && !1 !== n ? (r.iW = parseInt(i, 10), r.iH = parseInt(n, 10)) : o.st.imgWidth && o.st.imgHeight && (r.iW = o.st.imgWidth, r.iH = o.st.imgHeight)
                }
            }
            var o = this,
                s,
                r = {},
                a,
                l = !0;
            return e = t(e), o._k2 = e, o.ev.trigger("rsBeforeParseNode", [e, r]), r.stopParsing ? void 0 : (e = o._k2, r.id = o._r, r.contentAdded = !1, o._r++, r.images = [], r.isBig = !1, r.hasCover || (e.hasClass("rsImg") ? (a = e, s = !0) : (a = e.find(".rsImg"), a.length && (s = !0)), s ? (r.bigImage = a.eq(0).attr("data-rsBigImg"), a.each(function() {
                var e = t(this);
                e.is("a") ? n(e, "href") : e.is("img") ? n(e, "src") : n(e)
            })) : e.is("img") && (e.addClass("rsImg rsMainSlideImage"), n(e, "src"))), a = e.find(".rsCaption"), a.length && (r.caption = a.remove()), r.content = e, o.ev.trigger("rsAfterParseNode", [e, r]), i && o.slides.push(r), 0 === r.images.length && (r.isLoaded = !0, r.isRendered = !1, r.isLoading = !1, r.images = null), r)
        },
        _b2: function() {
            var t = this,
                e,
                i,
                n = function(e) {
                    37 === e ? t.prev() : 39 === e && t.next()
                };
            t._b.on("keydown" + t.ns, function(o) {
                if (!t.st.keyboardNavEnabled)
                    return !0;
                if (!(t._l2 || (i = o.keyCode, 37 !== i && 39 !== i || e))) {
                    if (document.activeElement && /(INPUT|SELECT|TEXTAREA)/i.test(document.activeElement.tagName))
                        return !0;
                    t.isFullscreen && o.preventDefault(), n(i), e = setInterval(function() {
                        n(i)
                    }, 700)
                }
            }).on("keyup" + t.ns, function(t) {
                e && (clearInterval(e), e = null)
            })
        },
        goTo: function(t, e) {
            t !== this.currSlideId && this._m2(t, this.st.transitionSpeed, !0, !e)
        },
        destroy: function(e) {
            this.ev.trigger("rsBeforeDestroy"), this._b.off("keydown" + this.ns + " keyup" + this.ns + " " + this._k1 + " " + this._l1), this._p1.off(this._j1 + " click"), this.slider.data("royalSlider", null), t.removeData(this.slider, "royalSlider"), t(window).off("resize" + this.ns), this.loadingTimeout && clearTimeout(this.loadingTimeout), e && this.slider.remove(), this.ev = this.slider = this.slides = null
        },
        _n2: function(e, i) {
            function n(i, n, r) {
                i.isAdded ? (o(n, i), s(n, i)) : (r || (r = a.slidesJQ[n]), i.holder ? r = i.holder : (r = a.slidesJQ[n] = t(r), i.holder = r), i.appendOnLoaded = !1, s(n, i, r), o(n, i), a._p2(i, r, e), i.isAdded = !0)
            }
            function o(t, i) {
                i.contentAdded || (a.setItemHtml(i, e), e || (i.contentAdded = !0))
            }
            function s(t, e, i) {
                a._l && (i || (i = a.slidesJQ[t]), i.css(a._i, (t + a._d1 + f) * a._w))
            }
            function r(t) {
                if (u) {
                    if (t > c - 1)
                        return r(t - c);
                    if (0 > t)
                        return r(c + t)
                }
                return t
            }
            var a = this,
                l,
                d,
                u = a._z,
                c = a.numSlides;
            if (!isNaN(i))
                return r(i);
            var h = a.currSlideId,
                f,
                p = e ? Math.abs(a._o2 - a.currSlideId) >= a.numSlides - 1 ? 0 : 1 : a._y,
                m = Math.min(2, p),
                _ = !1,
                g = !1,
                v;
            for (d = h; h + 1 + m > d; d++)
                if (v = r(d), (l = a.slides[v]) && (!l.isAdded || !l.positionSet)) {
                    _ = !0;
                    break
                }
            for (d = h - 1; d > h - 1 - m; d--)
                if (v = r(d), (l = a.slides[v]) && (!l.isAdded || !l.positionSet)) {
                    g = !0;
                    break
                }
            if (_)
                for (d = h; h + p + 1 > d; d++)
                    v = r(d), f = Math.floor((a._u - (h - d)) / a.numSlides) * a.numSlides, (l = a.slides[v]) && n(l, v);
            if (g)
                for (d = h - 1; d > h - 1 - p; d--)
                    v = r(d), f = Math.floor((a._u - (h - d)) / c) * c, (l = a.slides[v]) && n(l, v);
            if (!e)
                for (m = r(h - p), h = r(h + p), p = m > h ? 0 : m, d = 0; c > d; d++)
                    m > h && d > m - 1 || !(p > d || d > h) || (l = a.slides[d]) && l.holder && (l.holder.detach(), l.isAdded = !1)
        },
        setItemHtml: function(e, i) {
            var n = this,
                o = function() {
                    if (e.images) {
                        if (!e.isLoading) {
                            var i,
                                o;
                            if (e.content.hasClass("rsImg") ? (i = e.content, o = !0) : i = e.content.find(".rsImg:not(img)"), i && !i.is("img") && i.each(function() {
                                var i = t(this),
                                    n = '<img class="rsImg" src="' + (i.is("a") ? i.attr("href") : i.text()) + '" />';
                                o ? e.content = t(n) : i.replaceWith(n)
                            }), i = o ? e.content : e.content.find("img.rsImg"), d(), i.eq(0).addClass("rsMainSlideImage"), e.iW && e.iH && (e.isLoaded || n._q2(e), a()), e.isLoading = !0, e.isBig)
                                t("<img />").on("load.rs error.rs", function(e) {
                                    t(this).off("load.rs error.rs"), s([this], !0)
                                }).attr("src", e.image);
                            else {
                                e.loaded = [], e.numStartedLoad = 0, i = function(i) {
                                    t(this).off("load.rs error.rs"), e.loaded.push(this), e.loaded.length === e.numStartedLoad && s(e.loaded, !1)
                                };
                                for (var r = 0; r < e.images.length; r++) {
                                    var l = t("<img />");
                                    e.numStartedLoad++, l.on("load.rs error.rs", i).attr("src", e.images[r])
                                }
                            }
                        }
                    } else
                        e.isRendered = !0, e.isLoaded = !0, e.isLoading = !1, a(!0)
                },
                s = function(t, i) {
                    if (t.length) {
                        var n = t[0];
                        if (i !== e.isBig)
                            (n = e.holder.children()) && 1 < n.length && u();
                        else if (e.iW && e.iH)
                            r();
                        else if (e.iW = n.width, e.iH = n.height, e.iW && e.iH)
                            r();
                        else {
                            var o = new Image;
                            o.onload = function() {
                                o.width ? (e.iW = o.width, e.iH = o.height, r()) : setTimeout(function() {
                                    o.width && (e.iW = o.width, e.iH = o.height), r()
                                }, 1e3)
                            }, o.src = n.src
                        }
                    } else
                        r()
                },
                r = function() {
                    e.isLoaded = !0, e.isLoading = !1, a(), u(), l()
                },
                a = function() {
                    if (!e.isAppended && n.ev) {
                        var t = n.st.visibleNearby,
                            o = e.id - n._o;
                        i || e.appendOnLoaded || !n.st.fadeinLoadedSlide || 0 !== o && (!(t || n._r2 || n._l2) || -1 !== o && 1 !== o) || (t = {
                            visibility: "visible",
                            opacity: 0
                        }, t[n._g + "transition"] = "opacity 400ms ease-in-out", e.content.css(t), setTimeout(function() {
                            e.content.css("opacity", 1)
                        }, 16)), e.holder.find(".rsPreloader").length ? e.holder.append(e.content) : e.holder.html(e.content), e.isAppended = !0, e.isLoaded && (n._q2(e), l()), e.sizeReady || (e.sizeReady = !0, setTimeout(function() {
                            n.ev.trigger("rsMaybeSizeReady", e)
                        }, 100))
                    }
                },
                l = function() {
                    !e.loadedTriggered && n.ev && (e.isLoaded = e.loadedTriggered = !0, e.holder.trigger("rsAfterContentSet"), n.ev.trigger("rsAfterContentSet", e))
                },
                d = function() {
                    n.st.usePreloader && e.holder.html(n._q1.clone())
                },
                u = function(t) {
                    n.st.usePreloader && (t = e.holder.find(".rsPreloader"), t.length && t.remove())
                };
            e.isLoaded ? a() : i ? !n._l && e.images && e.iW && e.iH ? o() : (e.holder.isWaiting = !0, d(), e.holder.slideId = -99) : o()
        },
        _p2: function(t, e, i) {
            this._p1.append(t.holder), t.appendOnLoaded = !1
        },
        _g2: function(e, i) {
            var n = this,
                o,
                s = "touchstart" === e.type;
            if (n._s2 = s, n.ev.trigger("rsDragStart"), t(e.target).closest(".rsNoDrag", n._r1).length)
                return n.dragSuccess = !1, !0;
            if (!i && n._r2 && (n._t2 = !0, n._u2()), n.dragSuccess = !1, n._l2)
                s && (n._v2 = !0);
            else {
                if (s && (n._v2 = !1), n._w2(), s) {
                    var r = e.originalEvent.touches;
                    if (!(r && 0 < r.length))
                        return;
                    o = r[0], 1 < r.length && (n._v2 = !0)
                } else
                    e.preventDefault(), o = e, n.pointerEnabled && (o = o.originalEvent);
                n._l2 = !0, n._b.on(n._k1, function(t) {
                    n._x2(t, i)
                }).on(n._l1, function(t) {
                    n._y2(t, i)
                }), n._z2 = "", n._a3 = !1, n._b3 = o.pageX, n._c3 = o.pageY, n._d3 = n._v = (i ? n._e3 : n._h) ? o.pageX : o.pageY, n._f3 = 0, n._g3 = 0, n._h3 = i ? n._i3 : n._p, n._j3 = (new Date).getTime(), s && n._e1.on(n._m1, function(t) {
                    n._y2(t, i)
                })
            }
        },
        _k3: function(t, e) {
            if (this._l3) {
                var i = this._m3,
                    n = t.pageX - this._b3,
                    o = t.pageY - this._c3,
                    s = this._h3 + n,
                    r = this._h3 + o,
                    a = e ? this._e3 : this._h,
                    s = a ? s : r,
                    r = this._z2;
                this._a3 = !0, this._b3 = t.pageX, this._c3 = t.pageY, "x" === r && 0 !== n ? this._f3 = n > 0 ? 1 : -1 : "y" === r && 0 !== o && (this._g3 = o > 0 ? 1 : -1), r = a ? this._b3 : this._c3, n = a ? n : o, e ? s > this._n3 ? s = this._h3 + n * this._n1 : s < this._o3 && (s = this._h3 + n * this._n1) : this._z || (0 >= this.currSlideId && 0 < r - this._d3 && (s = this._h3 + n * this._n1), this.currSlideId >= this.numSlides - 1 && 0 > r - this._d3 && (s = this._h3 + n * this._n1)), this._h3 = s, 200 < i - this._j3 && (this._j3 = i, this._v = r), e ? this._q3(this._h3) : this._l && this._p3(this._h3)
            }
        },
        _x2: function(t, e) {
            var i = this,
                n,
                o = "touchmove" === t.type;
            if (!i._s2 || o) {
                if (o) {
                    if (i._r3)
                        return;
                    var s = t.originalEvent.touches;
                    if (!s)
                        return;
                    if (1 < s.length)
                        return;
                    n = s[0]
                } else
                    n = t, i.pointerEnabled && (n = n.originalEvent);
                if (i._a3 || (i._e && (e ? i._s3 : i._p1).css(i._g + i._u1, "0s"), function r() {
                    i._l2 && (i._t3 = requestAnimationFrame(r), i._u3 && i._k3(i._u3, e))
                }()), i._l3)
                    t.preventDefault(), i._m3 = (new Date).getTime(), i._u3 = n;
                else if (s = e ? i._e3 : i._h, n = Math.abs(n.pageX - i._b3) - Math.abs(n.pageY - i._c3) - (s ? -7 : 7), n > 7) {
                    if (s)
                        t.preventDefault(), i._z2 = "x";
                    else if (o)
                        return void i._v3(t);
                    i._l3 = !0
                } else if (-7 > n) {
                    if (s) {
                        if (o)
                            return void i._v3(t)
                    } else
                        t.preventDefault(), i._z2 = "y";
                    i._l3 = !0
                }
            }
        },
        _v3: function(t, e) {
            this._r3 = !0, this._a3 = this._l2 = !1, this._y2(t)
        },
        _y2: function(e, i) {
            function n(t) {
                return 100 > t ? 100 : t > 500 ? 500 : t
            }
            function o(t, e) {
                (s._l || i) && (l = (-s._u - s._d1) * s._w, d = Math.abs(s._p - l), s._c = d / e, t && (s._c += 250), s._c = n(s._c), s._x3(l, !1))
            }
            var s = this,
                r,
                a,
                l,
                d;
            if (r = -1 < e.type.indexOf("touch"), !s._s2 || r)
                if (s._s2 = !1, s.ev.trigger("rsDragRelease"), s._u3 = null, s._l2 = !1, s._r3 = !1, s._l3 = !1, s._m3 = 0, cancelAnimationFrame(s._t3), s._a3 && (i ? s._q3(s._h3) : s._l && s._p3(s._h3)), s._b.off(s._k1).off(s._l1), r && s._e1.off(s._m1), s._i1(), !s._a3 && !s._v2 && i && s._w3) {
                    var u = t(e.target).closest(".rsNavItem");
                    u.length && s.goTo(u.index())
                } else {
                    if (a = i ? s._e3 : s._h, !s._a3 || "y" === s._z2 && a || "x" === s._z2 && !a) {
                        if (i || !s._t2)
                            return s._t2 = !1, void (s.dragSuccess = !1);
                        if (s._t2 = !1, s.st.navigateByClick)
                            return s._i2(s.pointerEnabled ? e.originalEvent : e), void (s.dragSuccess = !0);
                        s.dragSuccess = !0
                    } else
                        s.dragSuccess = !0;
                    s._t2 = !1, s._z2 = "";
                    var c = s.st.minSlideOffset;
                    r = r ? e.originalEvent.changedTouches[0] : s.pointerEnabled ? e.originalEvent : e;
                    var h = a ? r.pageX : r.pageY,
                        f = s._d3;
                    r = s._v;
                    var p = s.currSlideId,
                        m = s.numSlides,
                        _ = a ? s._f3 : s._g3,
                        g = s._z;
                    if (Math.abs(h - f), r = h - r, a = (new Date).getTime() - s._j3, a = Math.abs(r) / a, 0 === _ || 1 >= m)
                        o(!0, a);
                    else {
                        if (!g && !i)
                            if (0 >= p) {
                                if (_ > 0)
                                    return void o(!0, a)
                            } else if (p >= m - 1 && 0 > _)
                                return void o(!0, a);
                        if (i) {
                            if (l = s._i3, l > s._n3)
                                l = s._n3;
                            else if (l < s._o3)
                                l = s._o3;
                            else {
                                if (h = a * a / .006, u = -s._i3, f = s._y3 - s._z3 + s._i3, r > 0 && h > u ? (u += s._z3 / (15 / (h / a * .003)), a = a * u / h, h = u) : 0 > r && h > f && (f += s._z3 / (15 / (h / a * .003)), a = a * f / h, h = f), u = Math.max(Math.round(a / .003), 50), l += h * (0 > r ? -1 : 1), l > s._n3)
                                    return void s._a4(l, u, !0, s._n3, 200);
                                if (l < s._o3)
                                    return void s._a4(l, u, !0, s._o3, 200)
                            }
                            s._a4(l, u, !0)
                        } else
                            u = function(t) {
                                var e = Math.floor(t / s._w);
                                return t - e * s._w > c && e++, e
                            }, h > f + c ? 0 > _ ? o(!1, a) : (u = u(h - f), s._m2(s.currSlideId - u, n(Math.abs(s._p - (-s._u - s._d1 + u) * s._w) / a), !1, !0, !0)) : f - c > h ? _ > 0 ? o(!1, a) : (u = u(f - h), s._m2(s.currSlideId + u, n(Math.abs(s._p - (-s._u - s._d1 - u) * s._w) / a), !1, !0, !0)) : o(!1, a)
                    }
                }
        },
        _p3: function(t) {
            t = this._p = t, this._e ? this._p1.css(this._x1, this._y1 + (this._h ? t + this._z1 + 0 : 0 + this._z1 + t) + this._a2) : this._p1.css(this._h ? this._x1 : this._w1, t)
        },
        updateSliderSize: function(t) {
            var e,
                i;
            if (this.slider) {
                if (this.st.autoScaleSlider) {
                    var n = this.st.autoScaleSliderWidth,
                        o = this.st.autoScaleSliderHeight;
                    this.st.autoScaleHeight ? (e = this.slider.width(), e != this.width && (this.slider.css("height", o / n * e), e = this.slider.width()), i = this.slider.height()) : (i = this.slider.height(), i != this.height && (this.slider.css("width", n / o * i), i = this.slider.height()), e = this.slider.width())
                } else
                    e = this.slider.width(), i = this.slider.height();
                if (t || e != this.width || i != this.height) {
                    for (this.width = e, this.height = i, this._b4 = e, this._c4 = i, this.ev.trigger("rsBeforeSizeSet"), this.ev.trigger("rsAfterSizePropSet"), this._e1.css({
                        width: this._b4,
                        height: this._c4
                    }), this._w = (this._h ? this._b4 : this._c4) + this.st.slidesSpacing, this._d4 = this.st.imageScalePadding, e = 0; e < this.slides.length; e++)
                        t = this.slides[e], t.positionSet = !1, t && t.images && t.isLoaded && (t.isRendered = !1, this._q2(t));
                    if (this._e4)
                        for (e = 0; e < this._e4.length; e++)
                            t = this._e4[e], t.holder.css(this._i, (t.id + this._d1) * this._w);
                    this._n2(), this._l && (this._e && this._p1.css(this._g + "transition-duration", "0s"), this._p3((-this._u - this._d1) * this._w)), this.ev.trigger("rsOnUpdateNav")
                }
                this._j2 = this._e1.offset(), this._j2 = this._j2[this._i]
            }
        },
        appendSlide: function(e, i) {
            var n = this._s(e);
            (isNaN(i) || i > this.numSlides) && (i = this.numSlides), this.slides.splice(i, 0, n), this.slidesJQ.splice(i, 0, t('<div style="' + (this._l ? "position:absolute;" : this._n) + '" class="rsSlide"></div>')), i <= this.currSlideId && this.currSlideId++, this.ev.trigger("rsOnAppendSlide", [n, i]), this._f4(i), i === this.currSlideId && this.ev.trigger("rsAfterSlideChange")
        },
        removeSlide: function(t) {
            var e = this.slides[t];
            e && (e.holder && e.holder.remove(), t < this.currSlideId && this.currSlideId--, this.slides.splice(t, 1), this.slidesJQ.splice(t, 1), this.ev.trigger("rsOnRemoveSlide", [t]), this._f4(t), t === this.currSlideId && this.ev.trigger("rsAfterSlideChange"))
        },
        _f4: function(t) {
            var e = this;
            for (t = e.numSlides, t = 0 >= e._u ? 0 : Math.floor(e._u / t), e.numSlides = e.slides.length, 0 === e.numSlides ? (e.currSlideId = e._d1 = e._u = 0, e.currSlide = e._g4 = null) : e._u = t * e.numSlides + e.currSlideId, t = 0; t < e.numSlides; t++)
                e.slides[t].id = t;
            e.currSlide = e.slides[e.currSlideId], e._r1 = e.slidesJQ[e.currSlideId], e.currSlideId >= e.numSlides ? e.goTo(e.numSlides - 1) : 0 > e.currSlideId && e.goTo(0), e._t(), e._l && e._p1.css(e._g + e._u1, "0ms"), e._h4 && clearTimeout(e._h4), e._h4 = setTimeout(function() {
                e._l && e._p3((-e._u - e._d1) * e._w), e._n2(), e._l || e._r1.css({
                    display: "block",
                    opacity: 1
                })
            }, 14), e.ev.trigger("rsOnUpdateNav")
        },
        _i1: function() {
            this._f1 && this._l && (this._g1 ? this._e1.css("cursor", this._g1) : (this._e1.removeClass("grabbing-cursor"), this._e1.addClass("grab-cursor")))
        },
        _w2: function() {
            this._f1 && this._l && (this._h1 ? this._e1.css("cursor", this._h1) : (this._e1.removeClass("grab-cursor"), this._e1.addClass("grabbing-cursor")))
        },
        next: function(t) {
            this._m2("next", this.st.transitionSpeed, !0, !t)
        },
        prev: function(t) {
            this._m2("prev", this.st.transitionSpeed, !0, !t)
        },
        _m2: function(t, e, i, n, o) {
            var s = this,
                r,
                a,
                l;
            if (s.ev.trigger("rsBeforeMove", [t, n]), l = "next" === t ? s.currSlideId + 1 : "prev" === t ? s.currSlideId - 1 : t = parseInt(t, 10), !s._z) {
                if (0 > l)
                    return void s._i4("left", !n);
                if (l >= s.numSlides)
                    return void s._i4("right", !n)
            }
            s._r2 && (s._u2(!0), i = !1), a = l - s.currSlideId, l = s._o2 = s.currSlideId;
            var d = s.currSlideId + a;
            n = s._u;
            var u;
            s._z ? (d = s._n2(!1, d), n += a) : n = d, s._o = d, s._g4 = s.slidesJQ[s.currSlideId], s._u = n, s.currSlideId = s._o, s.currSlide = s.slides[s.currSlideId], s._r1 = s.slidesJQ[s.currSlideId];
            var d = s.st.slidesDiff,
                c = Boolean(a > 0);
            a = Math.abs(a);
            var h = Math.floor(l / s._y),
                f = Math.floor((l + (c ? d : -d)) / s._y),
                h = (c ? Math.max(h, f) : Math.min(h, f)) * s._y + (c ? s._y - 1 : 0);
            if (h > s.numSlides - 1 ? h = s.numSlides - 1 : 0 > h && (h = 0), l = c ? h - l : l - h, l > s._y && (l = s._y), a > l + d)
                for (s._d1 += (a - (l + d)) * (c ? -1 : 1), e *= 1.4, l = 0; l < s.numSlides; l++)
                    s.slides[l].positionSet = !1;
            s._c = e, s._n2(!0), o || (u = !0), r = (-n - s._d1) * s._w, u ? setTimeout(function() {
                s._j4 = !1, s._x3(r, t, !1, i), s.ev.trigger("rsOnUpdateNav")
            }, 0) : (s._x3(r, t, !1, i), s.ev.trigger("rsOnUpdateNav"))
        },
        _f2: function() {
            this.st.arrowsNav && (1 >= this.numSlides ? (this._c2.css("display", "none"), this._d2.css("display", "none")) : (this._c2.css("display", "block"), this._d2.css("display", "block"), this._z || this.st.loopRewind || (0 === this.currSlideId ? this._c2.addClass("rsArrowDisabled") : this._c2.removeClass("rsArrowDisabled"), this.currSlideId === this.numSlides - 1 ? this._d2.addClass("rsArrowDisabled") : this._d2.removeClass("rsArrowDisabled"))))
        },
        _x3: function(e, i, n, o, s) {
            function r() {
                var t;
                l && (t = l.data("rsTimeout")) && (l !== d && l.css({
                    opacity: 0,
                    display: "none",
                    zIndex: 0
                }), clearTimeout(t), l.data("rsTimeout", "")), (t = d.data("rsTimeout")) && (clearTimeout(t), d.data("rsTimeout", ""))
            }
            var a = this,
                l,
                d,
                u = {};
            isNaN(a._c) && (a._c = 400), a._p = a._h3 = e, a.ev.trigger("rsBeforeAnimStart"), a._e ? a._l ? (a._c = parseInt(a._c, 10), n = a._g + a._v1, u[a._g + a._u1] = a._c + "ms", u[n] = o ? t.rsCSS3Easing[a.st.easeInOut] : t.rsCSS3Easing[a.st.easeOut], a._p1.css(u), o || !a.hasTouch ? setTimeout(function() {
                a._p3(e)
            }, 5) : a._p3(e)) : (a._c = a.st.transitionSpeed, l = a._g4, d = a._r1, d.data("rsTimeout") && d.css("opacity", 0), r(), l && l.data("rsTimeout", setTimeout(function() {
                u[a._g + a._u1] = "0ms", u.zIndex = 0, u.display = "none", l.data("rsTimeout", ""), l.css(u), setTimeout(function() {
                    l.css("opacity", 0)
                }, 16)
            }, a._c + 60)), u.display = "block", u.zIndex = a._m, u.opacity = 0, u[a._g + a._u1] = "0ms", u[a._g + a._v1] = t.rsCSS3Easing[a.st.easeInOut], d.css(u), d.data("rsTimeout", setTimeout(function() {
                d.css(a._g + a._u1, a._c + "ms"), d.data("rsTimeout", setTimeout(function() {
                    d.css("opacity", 1), d.data("rsTimeout", "")
                }, 20))
            }, 20))) : a._l ? (u[a._h ? a._x1 : a._w1] = e + "px", a._p1.animate(u, a._c, o ? a.st.easeInOut : a.st.easeOut)) : (l = a._g4, d = a._r1, d.stop(!0, !0).css({
                opacity: 0,
                display: "block",
                zIndex: a._m
            }), a._c = a.st.transitionSpeed, d.animate({
                opacity: 1
            }, a._c, a.st.easeInOut), r(), l && l.data("rsTimeout", setTimeout(function() {
                l.stop(!0, !0).css({
                    opacity: 0,
                    display: "none",
                    zIndex: 0
                })
            }, a._c + 60))), a._r2 = !0, a.loadingTimeout && clearTimeout(a.loadingTimeout), a.loadingTimeout = s ? setTimeout(function() {
                a.loadingTimeout = null, s.call()
            }, a._c + 60) : setTimeout(function() {
                a.loadingTimeout = null, a._k4(i)
            }, a._c + 60)
        },
        _u2: function(t) {
            if (this._r2 = !1, clearTimeout(this.loadingTimeout), this._l)
                if (this._e) {
                    if (!t) {
                        t = this._p;
                        var e = this._h3 = this._l4();
                        this._p1.css(this._g + this._u1, "0ms"), t !== e && this._p3(e)
                    }
                } else
                    this._p1.stop(!0), this._p = parseInt(this._p1.css(this._h ? this._x1 : this._w1), 10);
            else
                20 < this._m ? this._m = 10 : this._m++
        },
        _l4: function() {
            var t = window.getComputedStyle(this._p1.get(0), null).getPropertyValue(this._g + "transform").replace(/^matrix\(/i, "").split(/, |\)$/g),
                e = 0 === t[0].indexOf("matrix3d");
            return parseInt(t[this._h ? e ? 12 : 4 : e ? 13 : 5], 10)
        },
        _m4: function(t, e) {
            return this._e ? this._y1 + (e ? t + this._z1 + 0 : 0 + this._z1 + t) + this._a2 : t
        },
        _k4: function(t) {
            this._l || (this._r1.css("z-index", 0), this._m = 10), this._r2 = !1, this.staticSlideId = this.currSlideId, this._n2(), this._n4 = !1, this.ev.trigger("rsAfterSlideChange")
        },
        _i4: function(t, e) {
            var i = this,
                n = (-i._u - i._d1) * i._w;
            if (0 !== i.numSlides && !i._r2)
                if (i.st.loopRewind)
                    i.goTo("left" === t ? i.numSlides - 1 : 0, e);
                else if (i._l) {
                    i._c = 200;
                    var o = function() {
                        i._r2 = !1
                    };
                    i._x3(n + ("left" === t ? 30 : -30), "", !1, !0, function() {
                        i._r2 = !1, i._x3(n, "", !1, !0, o)
                    })
                }
        },
        _q2: function(e, i) {
            if (!e.isRendered) {
                var n = e.content,
                    o = "rsMainSlideImage",
                    s,
                    r = t.isFunction(this.st.imageAlignCenter) ? this.st.imageAlignCenter(e) : this.st.imageAlignCenter,
                    a = t.isFunction(this.st.imageScaleMode) ? this.st.imageScaleMode(e) : this.st.imageScaleMode,
                    l;
                if (e.videoURL && (o = "rsVideoContainer", "fill" !== a ? s = !0 : (l = n, l.hasClass(o) || (l = l.find("." + o)), l.css({
                    width: "100%",
                    height: "100%"
                }), o = "rsMainSlideImage")), n.hasClass(o) || (n = n.find("." + o)), n) {
                    var d = e.iW,
                        u = e.iH;
                    if (e.isRendered = !0, "none" !== a || r) {
                        o = "fill" !== a ? this._d4 : 0, l = this._b4 - 2 * o;
                        var c = this._c4 - 2 * o,
                            h,
                            f,
                            p = {};
                        "fit-if-smaller" === a && (d > l || u > c) && (a = "fit"), ("fill" === a || "fit" === a) && (h = l / d, f = c / u, h = "fill" == a ? h > f ? h : f : "fit" == a ? f > h ? h : f : 1, d = Math.ceil(d * h, 10), u = Math.ceil(u * h, 10)), "none" !== a && (p.width = d, p.height = u, s && n.find(".rsImg").css({
                            width: "100%",
                            height: "100%"
                        })), r && (p.marginLeft = Math.floor((l - d) / 2) + o, p.marginTop = Math.floor((c - u) / 2) + o), n.css(p)
                    }
                }
            }
        }
    }, t.rsProto = e.prototype, t.fn.royalSlider = function(i) {
        var n = arguments;
        return this.each(function() {
            var o = t(this);
            if ("object" != typeof i && i) {
                if ((o = o.data("royalSlider")) && o[i])
                    return o[i].apply(o, Array.prototype.slice.call(n, 1))
            } else
                o.data("royalSlider") || o.data("royalSlider", new e(o, i))
        })
    }, t.fn.royalSlider.defaults = {
        slidesSpacing: 8,
        startSlideId: 0,
        loop: !1,
        loopRewind: !1,
        numImagesToPreload: 4,
        fadeinLoadedSlide: !0,
        slidesOrientation: "horizontal",
        transitionType: "move",
        transitionSpeed: 600,
        controlNavigation: "bullets",
        controlsInside: !0,
        arrowsNav: !0,
        arrowsNavAutoHide: !0,
        navigateByClick: !0,
        randomizeSlides: !1,
        sliderDrag: !0,
        sliderTouch: !0,
        keyboardNavEnabled: !1,
        fadeInAfterLoaded: !0,
        allowCSS3: !0,
        allowCSS3OnWebkit: !0,
        addActiveClass: !1,
        autoHeight: !1,
        easeOut: "easeOutSine",
        easeInOut: "easeInOutSine",
        minSlideOffset: 10,
        imageScaleMode: "fit-if-smaller",
        imageAlignCenter: !0,
        imageScalePadding: 4,
        usePreloader: !0,
        autoScaleSlider: !1,
        autoScaleSliderWidth: 800,
        autoScaleSliderHeight: 400,
        autoScaleHeight: !0,
        arrowsNavHideOnTouch: !1,
        globalCaption: !1,
        slidesDiff: 2
    }, t.rsCSS3Easing = {
        easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
        easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)"
    }, t.extend(jQuery.easing, {
        easeInOutSine: function(t, e, i, n, o) {
            return -n / 2 * (Math.cos(Math.PI * e / o) - 1) + i
        },
        easeOutSine: function(t, e, i, n, o) {
            return n * Math.sin(e / o * (Math.PI / 2)) + i
        },
        easeOutCubic: function(t, e, i, n, o) {
            return n * ((e = e / o - 1) * e * e + 1) + i
        }
    })
}(jQuery, window), function(t) {
    t.rsProto._o4 = function() {
        var t,
            e = this;
        e.st.addActiveClass && e.ev.on("rsOnUpdateNav", function() {
            t && clearTimeout(t), t = setTimeout(function() {
                e._g4 && e._g4.removeClass("rsActiveSlide"), e._r1 && e._r1.addClass("rsActiveSlide"), t = null
            }, 50)
        })
    }, t.rsModules.activeClass = t.rsProto._o4
}(jQuery), function(t) {
    t.extend(t.rsProto, {
        _p4: function() {
            function e() {
                var t = i.currSlide;
                if (i.currSlide && i.currSlide.isLoaded && i._t4 !== t) {
                    if (0 < i._s4.length) {
                        for (n = 0; n < i._s4.length; n++)
                            clearTimeout(i._s4[n]);
                        i._s4 = []
                    }
                    if (0 < i._r4.length) {
                        var e;
                        for (n = 0; n < i._r4.length; n++)
                            (e = i._r4[n]) && (i._e ? (e.block.css(i._g + i._u1, "0s"), e.block.css(e.css)) : e.block.stop(!0).css(e.css), i._t4 = null, t.animBlocksDisplayed = !1);
                        i._r4 = []
                    }
                    t.animBlocks && (t.animBlocksDisplayed = !0, i._t4 = t, i._u4(t.animBlocks))
                }
            }
            var i = this,
                n;
            i._q4 = {
                fadeEffect: !0,
                moveEffect: "top",
                moveOffset: 20,
                speed: 400,
                easing: "easeOutSine",
                delay: 200
            }, i.st.block = t.extend({}, i._q4, i.st.block), i._r4 = [], i._s4 = [], i.ev.on("rsAfterInit", function() {
                e()
            }), i.ev.on("rsBeforeParseNode", function(e, i, n) {
                i = t(i), n.animBlocks = i.find(".rsABlock").css("display", "none"), n.animBlocks.length || (i.hasClass("rsABlock") ? n.animBlocks = i.css("display", "none") : n.animBlocks = !1)
            }), i.ev.on("rsAfterContentSet", function(t, n) {
                n.id === i.slides[i.currSlideId].id && setTimeout(function() {
                    e()
                }, i.st.fadeinLoadedSlide ? 300 : 0)
            }), i.ev.on("rsAfterSlideChange", function() {
                e()
            })
        },
        _v4: function(t, e) {
            setTimeout(function() {
                t.css(e)
            }, 6)
        },
        _u4: function(e) {
            var i = this,
                n,
                o,
                s,
                r,
                a,
                l,
                d;
            i._s4 = [], e.each(function(e) {
                n = t(this), o = {}, s = {}, r = null;
                var u = n.attr("data-move-offset"),
                    u = u ? parseInt(u, 10) : i.st.block.moveOffset;
                if (u > 0 && ((l = n.data("move-effect")) ? (l = l.toLowerCase(), "none" === l ? l = !1 : "left" !== l && "top" !== l && "bottom" !== l && "right" !== l && (l = i.st.block.moveEffect, "none" === l && (l = !1))) : l = i.st.block.moveEffect, l && "none" !== l)) {
                    var c;
                    c = "right" === l || "left" === l ? !0 : !1;
                    var h;
                    d = !1, i._e ? (h = 0, a = i._x1) : (c ? isNaN(parseInt(n.css("right"), 10)) ? a = "left" : (a = "right", d = !0) : isNaN(parseInt(n.css("bottom"), 10)) ? a = "top" : (a = "bottom", d = !0), a = "margin-" + a, d && (u = -u), i._e ? h = parseInt(n.css(a), 10) : (h = n.data("rs-start-move-prop"), void 0 === h && (h = parseInt(n.css(a), 10), isNaN(h) && (h = 0), n.data("rs-start-move-prop", h)))), s[a] = i._m4("top" === l || "left" === l ? h - u : h + u, c), o[a] = i._m4(h, c)
                }
                u = n.attr("data-fade-effect"), u ? ("none" === u.toLowerCase() || "false" === u.toLowerCase()) && (u = !1) : u = i.st.block.fadeEffect, u && (s.opacity = 0, o.opacity = 1), (u || l) && (r = {}, r.hasFade = Boolean(u), Boolean(l) && (r.moveProp = a, r.hasMove = !0), r.speed = n.data("speed"), isNaN(r.speed) && (r.speed = i.st.block.speed), r.easing = n.data("easing"), r.easing || (r.easing = i.st.block.easing), r.css3Easing = t.rsCSS3Easing[r.easing], r.delay = n.data("delay"), isNaN(r.delay) && (r.delay = i.st.block.delay * e)), u = {}, i._e && (u[i._g + i._u1] = "0ms"), u.moveProp = o.moveProp, u.opacity = o.opacity, u.display = "none", i._r4.push({
                    block: n,
                    css: u
                }), i._v4(n, s), i._s4.push(setTimeout(function(t, e, n, o) {
                    return function() {
                        if (t.css("display", "block"), n) {
                            var s = {};
                            if (i._e) {
                                var r = "";
                                n.hasMove && (r += n.moveProp), n.hasFade && (n.hasMove && (r += ", "), r += "opacity"), s[i._g + i._t1] = r, s[i._g + i._u1] = n.speed + "ms", s[i._g + i._v1] = n.css3Easing, t.css(s), setTimeout(function() {
                                    t.css(e)
                                }, 24)
                            } else
                                setTimeout(function() {
                                    t.animate(e, n.speed, n.easing)
                                }, 16)
                        }
                        delete i._s4[o]
                    }
                }(n, o, r, e), 6 >= r.delay ? 12 : r.delay))
            })
        }
    }), t.rsModules.animatedBlocks = t.rsProto._p4
}(jQuery), function(t) {
    t.extend(t.rsProto, {
        _w4: function() {
            var t = this;
            if (t.st.autoHeight) {
                var e,
                    i,
                    n,
                    o = !0,
                    s = function(s) {
                        n = t.slides[t.currSlideId], (e = n.holder) && (i = e.height()) && void 0 !== i && i > (t.st.minAutoHeight || 30) && (t._c4 = i, t._e || !s ? t._e1.css("height", i) : t._e1.stop(!0, !0).animate({
                            height: i
                        }, t.st.transitionSpeed), t.ev.trigger("rsAutoHeightChange", i), o && (t._e && setTimeout(function() {
                            t._e1.css(t._g + "transition", "height " + t.st.transitionSpeed + "ms ease-in-out")
                        }, 16), o = !1))
                    };
                t.ev.on("rsMaybeSizeReady.rsAutoHeight", function(t, e) {
                    n === e && s()
                }), t.ev.on("rsAfterContentSet.rsAutoHeight", function(t, e) {
                    n === e && s()
                }), t.slider.addClass("rsAutoHeight"), t.ev.one("rsAfterInit", function() {
                    setTimeout(function() {
                        s(!1), setTimeout(function() {
                            t.slider.append('<div style="clear:both; float: none;"></div>')
                        }, 16)
                    }, 16)
                }), t.ev.on("rsBeforeAnimStart", function() {
                    s(!0)
                }), t.ev.on("rsBeforeSizeSet", function() {
                    setTimeout(function() {
                        s(!1)
                    }, 16)
                })
            }
        }
    }), t.rsModules.autoHeight = t.rsProto._w4
}(jQuery), function(t) {
    t.extend(t.rsProto, {
        _x4: function() {
            var e = this,
                i;
            e._y4 = {
                enabled: !1,
                stopAtAction: !0,
                pauseOnHover: !0,
                delay: 2e3
            }, !e.st.autoPlay && e.st.autoplay && (e.st.autoPlay = e.st.autoplay), e.st.autoPlay = t.extend({}, e._y4, e.st.autoPlay), e.st.autoPlay.enabled && (e.ev.on("rsBeforeParseNode", function(e, n, o) {
                n = t(n), (i = n.attr("data-rsDelay")) && (o.customDelay = parseInt(i, 10))
            }), e.ev.one("rsAfterInit", function() {
                e._z4()
            }), e.ev.on("rsBeforeDestroy", function() {
                e.stopAutoPlay(), e.slider.off("mouseenter mouseleave"), t(window).off("blur" + e.ns + " focus" + e.ns)
            }))
        },
        _z4: function() {
            var e = this;
            e.startAutoPlay(), e.ev.on("rsAfterContentSet", function(t, i) {
                e._l2 || e._r2 || !e._a5 || i !== e.currSlide || e._b5()
            }), e.ev.on("rsDragRelease", function() {
                e._a5 && e._c5 && (e._c5 = !1, e._b5())
            }), e.ev.on("rsAfterSlideChange", function() {
                e._a5 && e._c5 && (e._c5 = !1, e.currSlide.isLoaded && e._b5())
            }), e.ev.on("rsDragStart", function() {
                e._a5 && (e.st.autoPlay.stopAtAction ? e.stopAutoPlay() : (e._c5 = !0, e._d5()))
            }), e.ev.on("rsBeforeMove", function(t, i, n) {
                e._a5 && (n && e.st.autoPlay.stopAtAction ? e.stopAutoPlay() : (e._c5 = !0, e._d5()))
            }), e._e5 = !1, e.ev.on("rsVideoStop", function() {
                e._a5 && (e._e5 = !1, e._b5())
            }), e.ev.on("rsVideoPlay", function() {
                e._a5 && (e._c5 = !1, e._d5(), e._e5 = !0)
            }), t(window).on("blur" + e.ns, function() {
                e._a5 && (e._c5 = !0, e._d5())
            }).on("focus" + e.ns, function() {
                e._a5 && e._c5 && (e._c5 = !1, e._b5())
            }), e.st.autoPlay.pauseOnHover && (e._f5 = !1, e.slider.hover(function() {
                e._a5 && (e._c5 = !1, e._d5(), e._f5 = !0)
            }, function() {
                e._a5 && (e._f5 = !1, e._b5())
            }))
        },
        toggleAutoPlay: function() {
            this._a5 ? this.stopAutoPlay() : this.startAutoPlay()
        },
        startAutoPlay: function() {
            this._a5 = !0, this.currSlide.isLoaded && this._b5()
        },
        stopAutoPlay: function() {
            this._e5 = this._f5 = this._c5 = this._a5 = !1, this._d5()
        },
        _b5: function() {
            var t = this;
            t._f5 || t._e5 || (t._g5 = !0, t._h5 && clearTimeout(t._h5), t._h5 = setTimeout(function() {
                var e;
                t._z || t.st.loopRewind || (e = !0, t.st.loopRewind = !0), t.next(!0), e && (t.st.loopRewind = !1)
            }, t.currSlide.customDelay ? t.currSlide.customDelay : t.st.autoPlay.delay))
        },
        _d5: function() {
            this._f5 || this._e5 || (this._g5 = !1, this._h5 && (clearTimeout(this._h5), this._h5 = null))
        }
    }), t.rsModules.autoplay = t.rsProto._x4
}(jQuery), function(t) {
    t.extend(t.rsProto, {
        _i5: function() {
            var e = this;
            "bullets" === e.st.controlNavigation && (e.ev.one("rsAfterPropsSetup", function() {
                e._j5 = !0, e.slider.addClass("rsWithBullets");
                for (var i = '<div class="rsNav rsBullets">', n = 0; n < e.numSlides; n++)
                    i += '<div class="rsNavItem rsBullet"><span></span></div>';
                e._k5 = i = t(i + "</div>"), e._l5 = i.appendTo(e.slider).children(), e._k5.on("click.rs", ".rsNavItem", function(i) {
                    e._m5 || e.goTo(t(this).index())
                })
            }), e.ev.on("rsOnAppendSlide", function(t, i, n) {
                n >= e.numSlides ? e._k5.append('<div class="rsNavItem rsBullet"><span></span></div>') : e._l5.eq(n).before('<div class="rsNavItem rsBullet"><span></span></div>'), e._l5 = e._k5.children()
            }), e.ev.on("rsOnRemoveSlide", function(t, i) {
                var n = e._l5.eq(i);
                n && n.length && (n.remove(), e._l5 = e._k5.children())
            }), e.ev.on("rsOnUpdateNav", function() {
                var t = e.currSlideId;
                e._n5 && e._n5.removeClass("rsNavSelected"), t = e._l5.eq(t), t.addClass("rsNavSelected"), e._n5 = t
            }))
        }
    }), t.rsModules.bullets = t.rsProto._i5
}(jQuery), function(t) {
    t.extend(t.rsProto, {
        _o5: function() {
            var e = this,
                i,
                n,
                o;
            if (e._p5 = {
                enabled: !1,
                change: !1,
                prefix: ""
            }, e.st.deeplinking = t.extend({}, e._p5, e.st.deeplinking), e.st.deeplinking.enabled) {
                var s = e.st.deeplinking.change,
                    r = e.st.deeplinking.prefix,
                    a = "#" + r,
                    l = function() {
                        var t = window.location.hash;
                        return t && 0 < t.indexOf(r) && (t = parseInt(t.substring(a.length), 10), t >= 0) ? t - 1 : -1
                    },
                    d = l();
                -1 !== d && (e.st.startSlideId = d), s && (t(window).on("hashchange" + e.ns, function(t) {
                    i || (t = l(), 0 > t || (t > e.numSlides - 1 && (t = e.numSlides - 1), e.goTo(t)))
                }), e.ev.on("rsBeforeAnimStart", function() {
                    n && clearTimeout(n), o && clearTimeout(o)
                }), e.ev.on("rsAfterSlideChange", function() {
                    n && clearTimeout(n), o && clearTimeout(o), o = setTimeout(function() {
                        i = !0, window.location.replace(("" + window.location).split("#")[0] + a + (e.currSlideId + 1)), n = setTimeout(function() {
                            i = !1, n = null
                        }, 60)
                    }, 400)
                })), e.ev.on("rsBeforeDestroy", function() {
                    n = o = null, s && t(window).off("hashchange" + e.ns)
                })
            }
        }
    }), t.rsModules.deeplinking = t.rsProto._o5
}(jQuery), function(t, e, i) {
    function n(t) {
        return t = t || location.href, "#" + t.replace(/^[^#]*#?(.*)$/, "$1")
    }
    var o = document,
        s,
        r = t.event.special,
        a = o.documentMode,
        l = "onhashchange" in e && (a === i || a > 7);
    t.fn.hashchange = function(t) {
        return t ? this.bind("hashchange", t) : this.trigger("hashchange")
    }, t.fn.hashchange.delay = 50, r.hashchange = t.extend(r.hashchange, {
        setup: function() {
            return l ? !1 : void t(s.start)
        },
        teardown: function() {
            return l ? !1 : void t(s.stop)
        }
    }), s = function() {
        function s() {
            var i = n(),
                o = h(d);
            i !== d ? (c(d = i, o), t(e).trigger("hashchange")) : o !== d && (location.href = location.href.replace(/#.*/, "") + o), a = setTimeout(s, t.fn.hashchange.delay)
        }
        var r = {},
            a,
            d = n(),
            u = function(t) {
                return t
            },
            c = u,
            h = u;
        return r.start = function() {
            a || s()
        }, r.stop = function() {
            a && clearTimeout(a), a = i
        }, e.attachEvent && !e.addEventListener && !l && function() {
            var e,
                i;
            r.start = function() {
                e || (i = (i = t.fn.hashchange.src) && i + n(), e = t('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                    i || c(n()), s()
                }).attr("src", i || "javascript:0").insertAfter("body")[0].contentWindow, o.onpropertychange = function() {
                    try {
                        "title" === event.propertyName && (e.document.title = o.title)
                    } catch (t) {}
                })
            }, r.stop = u, h = function() {
                return n(e.location.href)
            }, c = function(i, n) {
                var s = e.document,
                    r = t.fn.hashchange.domain;
                i !== n && (s.title = o.title, s.open(), r && s.write('<script>document.domain="' + r + '"</script>'), s.close(), e.location.hash = i)
            }
        }(), r
    }()
}(jQuery, this), function(t) {
    t.extend(t.rsProto, {
        _q5: function() {
            var e = this;
            e._r5 = {
                enabled: !1,
                keyboardNav: !0,
                buttonFS: !0,
                nativeFS: !1,
                doubleTap: !0
            }, e.st.fullscreen = t.extend({}, e._r5, e.st.fullscreen), e.st.fullscreen.enabled && e.ev.one("rsBeforeSizeSet", function() {
                e._s5()
            })
        },
        _s5: function() {
            var e = this;
            if (e._t5 = !e.st.keyboardNavEnabled && e.st.fullscreen.keyboardNav, e.st.fullscreen.nativeFS) {
                var i = {
                        supportsFullScreen: !1,
                        isFullScreen: function() {
                            return !1
                        },
                        requestFullScreen: function() {},
                        cancelFullScreen: function() {},
                        fullScreenEventName: "",
                        prefix: ""
                    },
                    n = ["webkit", "moz", "o", "ms", "khtml"];
                if ("undefined" != typeof document.cancelFullScreen)
                    i.supportsFullScreen = !0;
                else
                    for (var o = 0, s = n.length; s > o; o++)
                        if (i.prefix = n[o], "undefined" != typeof document[i.prefix + "CancelFullScreen"]) {
                            i.supportsFullScreen = !0;
                            break
                        }
                i.supportsFullScreen ? (e.nativeFS = !0, i.fullScreenEventName = i.prefix + "fullscreenchange" + e.ns, i.isFullScreen = function() {
                    switch (this.prefix) {
                    case "":
                        return document.fullScreen;
                    case "webkit":
                        return document.webkitIsFullScreen;
                    default:
                        return document[this.prefix + "FullScreen"]
                    }
                }, i.requestFullScreen = function(t) {
                    return "" === this.prefix ? t.requestFullScreen() : t[this.prefix + "RequestFullScreen"]()
                }, i.cancelFullScreen = function(t) {
                    return "" === this.prefix ? document.cancelFullScreen() : document[this.prefix + "CancelFullScreen"]()
                }, e._u5 = i) : e._u5 = !1
            }
            e.st.fullscreen.buttonFS && (e._v5 = t('<div class="rsFullscreenBtn"><div class="rsFullscreenIcn"></div></div>').appendTo(e._o1).on("click.rs", function() {
                e.isFullscreen ? e.exitFullscreen() : e.enterFullscreen()
            }))
        },
        enterFullscreen: function(e) {
            var i = this;
            if (i._u5) {
                if (!e)
                    return i._b.on(i._u5.fullScreenEventName, function(t) {
                        i._u5.isFullScreen() ? i.enterFullscreen(!0) : i.exitFullscreen(!0)
                    }), void i._u5.requestFullScreen(t("html")[0]);
                i._u5.requestFullScreen(t("html")[0])
            }
            if (!i._w5) {
                i._w5 = !0, i._b.on("keyup" + i.ns + "fullscreen", function(t) {
                    27 === t.keyCode && i.exitFullscreen()
                }), i._t5 && i._b2(), e = t(window), i._x5 = e.scrollTop(), i._y5 = e.scrollLeft(), i._z5 = t("html").attr("style"), i._a6 = t("body").attr("style"), i._b6 = i.slider.attr("style"), t("body, html").css({
                    overflow: "hidden",
                    height: "100%",
                    width: "100%",
                    margin: "0",
                    padding: "0"
                }), i.slider.addClass("rsFullscreen");
                var n;
                for (n = 0; n < i.numSlides; n++)
                    e = i.slides[n], e.isRendered = !1, e.bigImage && (e.isBig = !0, e.isMedLoaded = e.isLoaded, e.isMedLoading = e.isLoading, e.medImage = e.image, e.medIW = e.iW, e.medIH = e.iH, e.slideId = -99, e.bigImage !== e.medImage && (e.sizeType = "big"), e.isLoaded = e.isBigLoaded, e.isLoading = !1, e.image = e.bigImage, e.images[0] = e.bigImage, e.iW = e.bigIW, e.iH = e.bigIH, e.isAppended = e.contentAdded = !1, i._c6(e));
                i.isFullscreen = !0, i._w5 = !1, i.updateSliderSize(), i.ev.trigger("rsEnterFullscreen")
            }
        },
        exitFullscreen: function(e) {
            var i = this;
            if (i._u5) {
                if (!e)
                    return void i._u5.cancelFullScreen(t("html")[0]);
                i._b.off(i._u5.fullScreenEventName)
            }
            if (!i._w5) {
                i._w5 = !0, i._b.off("keyup" + i.ns + "fullscreen"), i._t5 && i._b.off("keydown" + i.ns), t("html").attr("style", i._z5 || ""), t("body").attr("style", i._a6 || "");
                var n;
                for (n = 0; n < i.numSlides; n++)
                    e = i.slides[n], e.isRendered = !1, e.bigImage && (e.isBig = !1, e.slideId = -99, e.isBigLoaded = e.isLoaded, e.isBigLoading = e.isLoading, e.bigImage = e.image, e.bigIW = e.iW, e.bigIH = e.iH, e.isLoaded = e.isMedLoaded, e.isLoading = !1, e.image = e.medImage, e.images[0] = e.medImage, e.iW = e.medIW, e.iH = e.medIH, e.isAppended = e.contentAdded = !1, i._c6(e, !0), e.bigImage !== e.medImage && (e.sizeType = "med"));
                i.isFullscreen = !1, e = t(window), e.scrollTop(i._x5), e.scrollLeft(i._y5), i._w5 = !1, i.slider.removeClass("rsFullscreen"), i.updateSliderSize(), setTimeout(function() {
                    i.updateSliderSize()
                }, 1), i.ev.trigger("rsExitFullscreen")
            }
        },
        _c6: function(e, i) {
            var n = e.isLoaded || e.isLoading ? '<img class="rsImg rsMainSlideImage" src="' + e.image + '"/>' : '<a class="rsImg rsMainSlideImage" href="' + e.image + '"></a>';
            e.content.hasClass("rsImg") ? e.content = t(n) : e.content.find(".rsImg").eq(0).replaceWith(n), e.isLoaded || e.isLoading || !e.holder || e.holder.html(e.content)
        }
    }), t.rsModules.fullscreen = t.rsProto._q5
}(jQuery), function(t) {
    t.extend(t.rsProto, {
        _d6: function() {
            var e = this;
            e.st.globalCaption && (e.ev.on("rsAfterInit", function() {
                e.globalCaption = t('<div class="rsGCaption"></div>').appendTo(e.st.globalCaptionInside ? e._e1 : e.slider), e.globalCaption.html(e.currSlide.caption)
            }), e.ev.on("rsBeforeAnimStart", function() {
                e.globalCaption.html(e.currSlide.caption)
            }))
        }
    }), t.rsModules.globalCaption = t.rsProto._d6
}(jQuery), function(t) {
    t.extend(t.rsProto, {
        _e6: function() {
            var t = this;
            t.st.navAutoHide && !t.hasTouch && t.ev.one("rsAfterInit", function() {
                if (t._k5) {
                    t._k5.addClass("rsHidden");
                    var e = t.slider;
                    e.one("mousemove.controlnav", function() {
                        t._k5.removeClass("rsHidden")
                    }), e.hover(function() {
                        t._k5.removeClass("rsHidden")
                    }, function() {
                        t._k5.addClass("rsHidden")
                    })
                }
            })
        }
    }), t.rsModules.autoHideNav = t.rsProto._e6
}(jQuery), function(t) {
    t.extend(t.rsProto, {
        _f6: function() {
            var e = this;
            "tabs" === e.st.controlNavigation && (e.ev.on("rsBeforeParseNode", function(e, i, n) {
                i = t(i), n.thumbnail = i.find(".rsTmb").remove(), n.thumbnail.length ? n.thumbnail = t(document.createElement("div")).append(n.thumbnail).html() : (n.thumbnail = i.attr("data-rsTmb"), n.thumbnail || (n.thumbnail = i.find(".rsImg").attr("data-rsTmb")), n.thumbnail = n.thumbnail ? '<img src="' + n.thumbnail + '"/>' : "")
            }), e.ev.one("rsAfterPropsSetup", function() {
                e._g6()
            }), e.ev.on("rsOnAppendSlide", function(t, i, n) {
                n >= e.numSlides ? e._k5.append('<div class="rsNavItem rsTab">' + i.thumbnail + "</div>") : e._l5.eq(n).before('<div class="rsNavItem rsTab">' + item.thumbnail + "</div>"), e._l5 = e._k5.children()
            }), e.ev.on("rsOnRemoveSlide", function(t, i) {
                var n = e._l5.eq(i);
                n && (n.remove(), e._l5 = e._k5.children())
            }), e.ev.on("rsOnUpdateNav", function() {
                var t = e.currSlideId;
                e._n5 && e._n5.removeClass("rsNavSelected"), t = e._l5.eq(t), t.addClass("rsNavSelected"), e._n5 = t
            }))
        },
        _g6: function() {
            var e = this,
                i;
            e._j5 = !0, i = '<div class="rsNav rsTabs">';
            for (var n = 0; n < e.numSlides; n++)
                i += '<div class="rsNavItem rsTab">' + e.slides[n].thumbnail + "</div>";
            i = t(i + "</div>"), e._k5 = i, e._l5 = i.children(".rsNavItem"), e.slider.append(i), e._k5.click(function(i) {
                i = t(i.target).closest(".rsNavItem"), i.length && e.goTo(i.index())
            })
        }
    }), t.rsModules.tabs = t.rsProto._f6
}(jQuery), function(t) {
    t.extend(t.rsProto, {
        _h6: function() {
            var e = this;
            "thumbnails" === e.st.controlNavigation && (e._i6 = {
                drag: !0,
                touch: !0,
                orientation: "horizontal",
                navigation: !0,
                arrows: !0,
                arrowLeft: null,
                arrowRight: null,
                spacing: 4,
                arrowsAutoHide: !1,
                appendSpan: !1,
                transitionSpeed: 600,
                autoCenter: !0,
                fitInViewport: !0,
                firstMargin: !0,
                paddingTop: 0,
                paddingBottom: 0
            }, e.st.thumbs = t.extend({}, e._i6, e.st.thumbs), e._j6 = !0, !1 === e.st.thumbs.firstMargin ? e.st.thumbs.firstMargin = 0 : !0 === e.st.thumbs.firstMargin && (e.st.thumbs.firstMargin = e.st.thumbs.spacing), e.ev.on("rsBeforeParseNode", function(e, i, n) {
                i = t(i), n.thumbnail = i.find(".rsTmb").remove(), n.thumbnail.length ? n.thumbnail = t(document.createElement("div")).append(n.thumbnail).html() : (n.thumbnail = i.attr("data-rsTmb"), n.thumbnail || (n.thumbnail = i.find(".rsImg").attr("data-rsTmb")), n.thumbnail = n.thumbnail ? '<img src="' + n.thumbnail + '"/>' : "")
            }), e.ev.one("rsAfterPropsSetup", function() {
                e._k6()
            }), e._n5 = null, e.ev.on("rsOnUpdateNav", function() {
                var i = t(e._l5[e.currSlideId]);
                i !== e._n5 && (e._n5 && (e._n5.removeClass("rsNavSelected"), e._n5 = null), e._l6 && e._m6(e.currSlideId), e._n5 = i.addClass("rsNavSelected"))
            }), e.ev.on("rsOnAppendSlide", function(t, i, n) {
                t = "<div" + e._n6 + ' class="rsNavItem rsThumb">' + e._o6 + i.thumbnail + "</div>", e._e && e._s3.css(e._g + "transition-duration", "0ms"), n >= e.numSlides ? e._s3.append(t) : e._l5.eq(n).before(t), e._l5 = e._s3.children(), e.updateThumbsSize(!0)
            }), e.ev.on("rsOnRemoveSlide", function(t, i) {
                var n = e._l5.eq(i);
                n && (e._e && e._s3.css(e._g + "transition-duration", "0ms"), n.remove(), e._l5 = e._s3.children(), e.updateThumbsSize(!0))
            }))
        },
        _k6: function() {
            var e = this,
                i = "rsThumbs",
                n = e.st.thumbs,
                o = "",
                s,
                r,
                a = n.spacing;
            e._j5 = !0, e._e3 = "vertical" === n.orientation ? !1 : !0, e._n6 = s = a ? ' style="margin-' + (e._e3 ? "right" : "bottom") + ":" + a + 'px;"' : "", e._i3 = 0, e._p6 = !1, e._m5 = !1, e._l6 = !1, e._q6 = n.arrows && n.navigation, r = e._e3 ? "Hor" : "Ver", e.slider.addClass("rsWithThumbs rsWithThumbs" + r), o += '<div class="rsNav rsThumbs rsThumbs' + r + '"><div class="' + i + 'Container">', e._o6 = n.appendSpan ? '<span class="thumbIco"></span>' : "";
            for (var l = 0; l < e.numSlides; l++)
                r = e.slides[l], o += "<div" + s + ' class="rsNavItem rsThumb">' + r.thumbnail + e._o6 + "</div>";
            o = t(o + "</div></div>"), s = {}, n.paddingTop && (s[e._e3 ? "paddingTop" : "paddingLeft"] = n.paddingTop), n.paddingBottom && (s[e._e3 ? "paddingBottom" : "paddingRight"] = n.paddingBottom), o.css(s), e._s3 = t(o).find("." + i + "Container"), e._q6 && (i += "Arrow", n.arrowLeft ? e._r6 = n.arrowLeft : (e._r6 = t('<div class="' + i + " " + i + 'Left"><div class="' + i + 'Icn"></div></div>'), o.append(e._r6)), n.arrowRight ? e._s6 = n.arrowRight : (e._s6 = t('<div class="' + i + " " + i + 'Right"><div class="' + i + 'Icn"></div></div>'), o.append(e._s6)), e._r6.click(function() {
                var t = (Math.floor(e._i3 / e._t6) + e._u6) * e._t6 + e.st.thumbs.firstMargin;
                e._a4(t > e._n3 ? e._n3 : t)
            }), e._s6.click(function() {
                var t = (Math.floor(e._i3 / e._t6) - e._u6) * e._t6 + e.st.thumbs.firstMargin;
                e._a4(t < e._o3 ? e._o3 : t)
            }), n.arrowsAutoHide && !e.hasTouch && (e._r6.css("opacity", 0), e._s6.css("opacity", 0), o.one("mousemove.rsarrowshover", function() {
                e._l6 && (e._r6.css("opacity", 1), e._s6.css("opacity", 1))
            }), o.hover(function() {
                e._l6 && (e._r6.css("opacity", 1), e._s6.css("opacity", 1))
            }, function() {
                e._l6 && (e._r6.css("opacity", 0), e._s6.css("opacity", 0))
            }))), e._k5 = o, e._l5 = e._s3.children(), e.msEnabled && e.st.thumbs.navigation && e._s3.css("-ms-touch-action", e._e3 ? "pan-y" : "pan-x"), e.slider.append(o), e._w3 = !0, e._v6 = a, n.navigation && e._e && e._s3.css(e._g + "transition-property", e._g + "transform"), e._k5.on("click.rs", ".rsNavItem", function(i) {
                e._m5 || e.goTo(t(this).index())
            }), e.ev.off("rsBeforeSizeSet.thumbs").on("rsBeforeSizeSet.thumbs", function() {
                e._w6 = e._e3 ? e._c4 : e._b4, e.updateThumbsSize(!0)
            }), e.ev.off("rsAutoHeightChange.thumbs").on("rsAutoHeightChange.thumbs", function(t, i) {
                e.updateThumbsSize(!0, i)
            })
        },
        updateThumbsSize: function(t, e) {
            var i = this,
                n = i._l5.first(),
                o = {},
                s = i._l5.length;
            i._t6 = (i._e3 ? n.outerWidth() : n.outerHeight()) + i._v6, i._y3 = s * i._t6 - i._v6, o[i._e3 ? "width" : "height"] = i._y3 + i._v6, i._z3 = i._e3 ? i._k5.width() : void 0 !== e ? e : i._k5.height(), i._w3 && (i.isFullscreen || i.st.thumbs.fitInViewport) && (i._e3 ? i._c4 = i._w6 - i._k5.outerHeight() : i._b4 = i._w6 - i._k5.outerWidth()), i._z3 && (i._o3 = -(i._y3 - i._z3) - i.st.thumbs.firstMargin, i._n3 = i.st.thumbs.firstMargin, i._u6 = Math.floor(i._z3 / i._t6), i._y3 < i._z3 ? (i.st.thumbs.autoCenter ? i._q3((i._z3 - i._y3) / 2) : i._q3(i._n3), i.st.thumbs.arrows && i._r6 && (i._r6.addClass("rsThumbsArrowDisabled"), i._s6.addClass("rsThumbsArrowDisabled")), i._l6 = !1, i._m5 = !1, i._k5.off(i._j1)) : i.st.thumbs.navigation && !i._l6 && (i._l6 = !0, !i.hasTouch && i.st.thumbs.drag || i.hasTouch && i.st.thumbs.touch) && (i._m5 = !0, i._k5.on(i._j1, function(t) {
                i._g2(t, !0)
            })), i._s3.css(o), t && e && i._m6(i.currSlideId, !0))
        },
        setThumbsOrientation: function(t, e) {
            this._w3 && (this.st.thumbs.orientation = t, this._k5.remove(), this.slider.removeClass("rsWithThumbsHor rsWithThumbsVer"), this._k6(), this._k5.off(this._j1), e || this.updateSliderSize(!0))
        },
        _q3: function(t) {
            this._i3 = t, this._e ? this._s3.css(this._x1, this._y1 + (this._e3 ? t + this._z1 + 0 : 0 + this._z1 + t) + this._a2) : this._s3.css(this._e3 ? this._x1 : this._w1, t)
        },
        _a4: function(e, i, n, o, s) {
            var r = this;
            if (r._l6) {
                i || (i = r.st.thumbs.transitionSpeed), r._i3 = e, r._x6 && clearTimeout(r._x6), r._p6 && (r._e || r._s3.stop(), n = !0);
                var a = {};
                r._p6 = !0, r._e ? (a[r._g + "transition-duration"] = i + "ms", a[r._g + "transition-timing-function"] = n ? t.rsCSS3Easing[r.st.easeOut] : t.rsCSS3Easing[r.st.easeInOut], r._s3.css(a), r._q3(e)) : (a[r._e3 ? r._x1 : r._w1] = e + "px", r._s3.animate(a, i, n ? "easeOutCubic" : r.st.easeInOut)), o && (r._i3 = o), r._y6(), r._x6 = setTimeout(function() {
                    r._p6 = !1, s && (r._a4(o, s, !0), s = null)
                }, i)
            }
        },
        _y6: function() {
            this._q6 && (this._i3 === this._n3 ? this._r6.addClass("rsThumbsArrowDisabled") : this._r6.removeClass("rsThumbsArrowDisabled"), this._i3 === this._o3 ? this._s6.addClass("rsThumbsArrowDisabled") : this._s6.removeClass("rsThumbsArrowDisabled"))
        },
        _m6: function(t, e) {
            var i = 0,
                n,
                o = t * this._t6 + 2 * this._t6 - this._v6 + this._n3,
                s = Math.floor(this._i3 / this._t6);
            this._l6 && (this._j6 && (e = !0, this._j6 = !1), o + this._i3 > this._z3 ? (t === this.numSlides - 1 && (i = 1), s = -t + this._u6 - 2 + i, n = s * this._t6 + this._z3 % this._t6 + this._v6 - this._n3) : 0 !== t ? (t - 1) * this._t6 <= -this._i3 + this._n3 && t - 1 <= this.numSlides - this._u6 && (n = (-t + 1) * this._t6 + this._n3) : n = this._n3, n !== this._i3 && (i = void 0 === n ? this._i3 : n, i > this._n3 ? this._q3(this._n3) : i < this._o3 ? this._q3(this._o3) : void 0 !== n && (e ? this._q3(n) : this._a4(n))), this._y6())
        }
    }), t.rsModules.thumbnails = t.rsProto._h6
}(jQuery), function(t) {
    t.extend(t.rsProto, {
        _z6: function() {
            var e = this;
            e._a7 = {
                autoHideArrows: !0,
                autoHideControlNav: !1,
                autoHideBlocks: !1,
                autoHideCaption: !1,
                disableCSS3inFF: !0,
                youTubeCode: '<iframe src="http://www.youtube.com/embed/%id%?rel=1&showinfo=0&autoplay=1&wmode=transparent" frameborder="no"></iframe>',
                vimeoCode: '<iframe src="http://player.vimeo.com/video/%id%?byline=0&portrait=0&autoplay=1" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
            }, e.st.video = t.extend({}, e._a7, e.st.video), e.ev.on("rsBeforeSizeSet", function() {
                e._b7 && setTimeout(function() {
                    var t = e._r1,
                        t = t.hasClass("rsVideoContainer") ? t : t.find(".rsVideoContainer");
                    e._c7 && e._c7.css({
                        width: t.width(),
                        height: t.height()
                    })
                }, 32)
            });
            var i = e._a.mozilla;
            e.ev.on("rsAfterParseNode", function(n, o, s) {
                if (n = t(o), s.videoURL) {
                    e.st.video.disableCSS3inFF && i && (e._e = e._f = !1), o = t('<div class="rsVideoContainer"></div>');
                    var r = t('<div class="rsBtnCenterer"><div class="rsPlayBtn"><div class="rsPlayBtnIcon"></div></div></div>');
                    n.hasClass("rsImg") ? s.content = o.append(n).append(r) : s.content.find(".rsImg").wrap(o).after(r)
                }
            }), e.ev.on("rsAfterSlideChange", function() {
                e.stopVideo()
            })
        },
        toggleVideo: function() {
            return this._b7 ? this.stopVideo() : this.playVideo()
        },
        playVideo: function() {
            var e = this;
            if (!e._b7) {
                var i = e.currSlide;
                if (!i.videoURL)
                    return !1;
                e._d7 = i;
                var n = e._e7 = i.content,
                    i = i.videoURL,
                    o,
                    s;
                return i.match(/youtu\.be/i) || i.match(/youtube\.com/i) ? (s = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/, (s = i.match(s)) && 11 == s[7].length && (o = s[7]), void 0 !== o && (e._c7 = e.st.video.youTubeCode.replace("%id%", o))) : i.match(/vimeo\.com/i) && (s = /(www\.)?vimeo.com\/(\d+)($|\/)/, (s = i.match(s)) && (o = s[2]), void 0 !== o && (e._c7 = e.st.video.vimeoCode.replace("%id%", o))), e.videoObj = t(e._c7), e.ev.trigger("rsOnCreateVideoElement", [i]), e.videoObj.length && (e._c7 = t('<div class="rsVideoFrameHolder"><div class="rsPreloader"></div><div class="rsCloseVideoBtn"><div class="rsCloseVideoIcn"></div></div></div>'), e._c7.find(".rsPreloader").after(e.videoObj), n = n.hasClass("rsVideoContainer") ? n : n.find(".rsVideoContainer"), e._c7.css({
                    width: n.width(),
                    height: n.height()
                }).find(".rsCloseVideoBtn").off("click.rsv").on("click.rsv", function(t) {
                    return e.stopVideo(), t.preventDefault(), t.stopPropagation(), !1
                }), n.append(e._c7), e.isIPAD && n.addClass("rsIOSVideo"), e._f7(!1), setTimeout(function() {
                    e._c7.addClass("rsVideoActive")
                }, 10), e.ev.trigger("rsVideoPlay"), e._b7 = !0), !0
            }
            return !1
        },
        stopVideo: function() {
            var t = this;
            return t._b7 ? (t.isIPAD && t.slider.find(".rsCloseVideoBtn").remove(), t._f7(!0), setTimeout(function() {
                t.ev.trigger("rsOnDestroyVideoElement", [t.videoObj]);
                var e = t._c7.find("iframe");
                if (e.length)
                    try {
                        e.attr("src", "")
                    } catch (i) {}
                t._c7.remove(), t._c7 = null
            }, 16), t.ev.trigger("rsVideoStop"), t._b7 = !1, !0) : !1
        },
        _f7: function(t, e) {
            var i = [],
                n = this.st.video;
            if (n.autoHideArrows && (this._c2 && (i.push(this._c2, this._d2), this._e2 = !t), this._v5 && i.push(this._v5)), n.autoHideControlNav && this._k5 && i.push(this._k5), n.autoHideBlocks && this._d7.animBlocks && i.push(this._d7.animBlocks), n.autoHideCaption && this.globalCaption && i.push(this.globalCaption), this.slider[t ? "removeClass" : "addClass"]("rsVideoPlaying"), i.length)
                for (n = 0; n < i.length; n++)
                    t ? i[n].removeClass("rsHidden") : i[n].addClass("rsHidden")
        }
    }), t.rsModules.video = t.rsProto._z6
}(jQuery), function(t) {
    t.rsProto._g7 = function() {
        var e = this;
        e.st.visibleNearby && e.st.visibleNearby.enabled && (e._h7 = {
            enabled: !0,
            centerArea: .6,
            center: !0,
            breakpoint: 0,
            breakpointCenterArea: .8,
            hiddenOverflow: !0,
            navigateByCenterClick: !1
        }, e.st.visibleNearby = t.extend({}, e._h7, e.st.visibleNearby), e.ev.one("rsAfterPropsSetup", function() {
            e._i7 = e._e1.css("overflow", "visible").wrap('<div class="rsVisibleNearbyWrap"></div>').parent(), e.st.visibleNearby.hiddenOverflow || e._i7.css("overflow", "visible"), e._o1 = e.st.controlsInside ? e._i7 : e.slider
        }), e.ev.on("rsAfterSizePropSet", function() {
            var t,
                i = e.st.visibleNearby;
            t = i.breakpoint && e.width < i.breakpoint ? i.breakpointCenterArea : i.centerArea, e._h ? (e._b4 *= t, e._i7.css({
                height: e._c4,
                width: e._b4 / t
            }), e._d = e._b4 * (1 - t) / 2 / t) : (e._c4 *= t, e._i7.css({
                height: e._c4 / t,
                width: e._b4
            }), e._d = e._c4 * (1 - t) / 2 / t), i.navigateByCenterClick || (e._q = e._h ? e._b4 : e._c4), i.center && e._e1.css("margin-" + (e._h ? "left" : "top"), e._d)
        }))
    }, t.rsModules.visibleNearby = t.rsProto._g7
}(jQuery), function($) {
    jQuery.fn.extend({
        slimScroll: function(e) {
            var i = {
                    width: "auto",
                    height: "250px",
                    size: "7px",
                    color: "#000",
                    position: "right",
                    distance: "1px",
                    start: "top",
                    opacity: .4,
                    alwaysVisible: !1,
                    disableFadeOut: !1,
                    railVisible: !1,
                    railColor: "#333",
                    railOpacity: .2,
                    railDraggable: !0,
                    railClass: "slimScrollRail",
                    barClass: "slimScrollBar",
                    wrapperClass: "slimScrollDiv",
                    allowPageScroll: !1,
                    wheelStep: 20,
                    touchScrollStep: 200,
                    borderRadius: "7px",
                    railBorderRadius: "7px"
                },
                n = $.extend(i, e);
            return this.each(function() {
                function i(t) {
                    if (d) {
                        var t = t || window.event,
                            e = 0;
                        t.wheelDelta && (e = -t.wheelDelta / 120), t.detail && (e = t.detail / 3);
                        var i = t.target || t.srcTarget || t.srcElement;
                        $(i).closest("." + n.wrapperClass).is(b.parent()) && o(e, !0), t.preventDefault && !y && t.preventDefault(), y || (t.returnValue = !1)
                    }
                }
                function o(t, e, i) {
                    y = !1;
                    var o = t,
                        s = b.outerHeight() - x.outerHeight();
                    if (e && (o = parseInt(x.css("top")) + t * parseInt(n.wheelStep) / 100 * x.outerHeight(), o = Math.min(Math.max(o, 0), s), o = t > 0 ? Math.ceil(o) : Math.floor(o), x.css({
                        top: o + "px"
                    })), m = parseInt(x.css("top")) / (b.outerHeight() - x.outerHeight()), o = m * (b[0].scrollHeight - b.outerHeight()), i) {
                        o = t;
                        var r = o / b[0].scrollHeight * b.outerHeight();
                        r = Math.min(Math.max(r, 0), s), x.css({
                            top: r + "px"
                        })
                    }
                    b.scrollTop(o), b.trigger("slimscrolling", ~~o), a(), l()
                }
                function s() {
                    window.addEventListener ? (this.addEventListener("DOMMouseScroll", i, !1), this.addEventListener("mousewheel", i, !1), this.addEventListener("MozMousePixelScroll", i, !1)) : document.attachEvent("onmousewheel", i)
                }
                function r() {
                    p = Math.max(b.outerHeight() / b[0].scrollHeight * b.outerHeight(), v), x.css({
                        height: p + "px"
                    });
                    var t = p == b.outerHeight() ? "none" : "block";
                    x.css({
                        display: t
                    })
                }
                function a() {
                    if (r(), clearTimeout(h), m == ~~m) {
                        if (y = n.allowPageScroll, _ != m) {
                            var t = 0 == ~~m ? "top" : "bottom";
                            b.trigger("slimscroll", t)
                        }
                    } else
                        y = !1;
                    return _ = m, p >= b.outerHeight() ? void (y = !0) : (x.stop(!0, !0).fadeIn("fast"), void (n.railVisible && C.stop(!0, !0).fadeIn("fast")))
                }
                function l() {
                    n.alwaysVisible || (h = setTimeout(function() {
                        n.disableFadeOut && d || u || c || (x.fadeOut("slow"), C.fadeOut("slow"))
                    }, 1e3))
                }
                var d,
                    u,
                    c,
                    h,
                    f,
                    p,
                    m,
                    _,
                    g = "<div></div>",
                    v = 30,
                    y = !1,
                    b = $(this);
                if (b.parent().hasClass(n.wrapperClass)) {
                    var S = b.scrollTop();
                    if (x = b.parent().find("." + n.barClass), C = b.parent().find("." + n.railClass), r(), $.isPlainObject(e)) {
                        if ("height" in e && "auto" == e.height) {
                            b.parent().css("height", "auto"), b.css("height", "auto");
                            var w = b.parent().parent().height();
                            b.parent().css("height", w), b.css("height", w)
                        } else if ("height" in e) {
                            var I = e.height;
                            b.parent().css("height", I), b.css("height", I)
                        }
                        if ("scrollTo" in e)
                            S = parseInt(n.scrollTo);
                        else if ("scrollBy" in e)
                            S += parseInt(n.scrollBy);
                        else if ("destroy" in e)
                            return x.remove(), C.remove(), void b.unwrap();
                        o(S, !1, !0)
                    }
                } else {
                    n.height = "auto" == n.height ? b.parent().height() : n.height;
                    var T = $(g).addClass(n.wrapperClass).css({
                        position: "relative",
                        overflow: "hidden",
                        width: n.width,
                        height: n.height
                    });
                    b.css({
                        overflow: "hidden",
                        width: n.width,
                        height: n.height
                    });
                    var C = $(g).addClass(n.railClass).css({
                            width: n.size,
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            display: n.alwaysVisible && n.railVisible ? "block" : "none",
                            "border-radius": n.railBorderRadius,
                            background: n.railColor,
                            opacity: n.railOpacity,
                            zIndex: 90
                        }),
                        x = $(g).addClass(n.barClass).css({
                            background: n.color,
                            width: n.size,
                            position: "absolute",
                            top: 0,
                            opacity: n.opacity,
                            display: n.alwaysVisible ? "block" : "none",
                            "border-radius": n.borderRadius,
                            BorderRadius: n.borderRadius,
                            MozBorderRadius: n.borderRadius,
                            WebkitBorderRadius: n.borderRadius,
                            zIndex: 99
                        }),
                        z = "right" == n.position ? {
                            right: n.distance
                        } : {
                            left: n.distance
                        };
                    C.css(z), x.css(z), b.wrap(T), b.parent().append(x), b.parent().append(C), n.railDraggable && x.bind("mousedown", function(e) {
                        var i = $(document);
                        return c = !0, t = parseFloat(x.css("top")), pageY = e.pageY, i.bind("mousemove.slimscroll", function(e) {
                            currTop = t + e.pageY - pageY, x.css("top", currTop), o(0, x.position().top, !1)
                        }), i.bind("mouseup.slimscroll", function(t) {
                            c = !1, l(), i.unbind(".slimscroll")
                        }), !1
                    }).bind("selectstart.slimscroll", function(t) {
                        return t.stopPropagation(), t.preventDefault(), !1
                    }), C.hover(function() {
                        a()
                    }, function() {
                        l()
                    }), x.hover(function() {
                        u = !0
                    }, function() {
                        u = !1
                    }), b.hover(function() {
                        d = !0, a(), l()
                    }, function() {
                        d = !1, l()
                    }), b.bind("touchstart", function(t, e) {
                        t.originalEvent.touches.length && (f = t.originalEvent.touches[0].pageY)
                    }), b.bind("touchmove", function(t) {
                        if (y || t.originalEvent.preventDefault(), t.originalEvent.touches.length) {
                            var e = (f - t.originalEvent.touches[0].pageY) / n.touchScrollStep;
                            o(e, !0), f = t.originalEvent.touches[0].pageY
                        }
                    }), r(), "bottom" === n.start ? (x.css({
                        top: b.outerHeight() - x.outerHeight()
                    }), o(0, !0)) : "top" !== n.start && (o($(n.start).position().top, null, !0), n.alwaysVisible || x.hide()), s()
                }
            }), this
        }
    }), jQuery.fn.extend({
        slimscroll: jQuery.fn.slimScroll
    })
}(jQuery), function(t) {
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], t) : t(jQuery)
}(function(t) {
    function e(e) {
        return !e || void 0 !== e.allowPageScroll || void 0 === e.swipe && void 0 === e.swipeStatus || (e.allowPageScroll = u), void 0 !== e.click && void 0 === e.tap && (e.tap = e.click),
        e || (e = {}), e = t.extend({}, t.fn.swipe.defaults, e), this.each(function() {
            var n = t(this),
                o = n.data(A);
            o || (o = new i(this, e), n.data(A, o))
        })
    }
    function i(e, i) {
        function n(e) {
            if (!(ut() || t(e.target).closest(i.excludedElements, Qt).length > 0)) {
                var n = e.originalEvent ? e.originalEvent : e,
                    o,
                    s = n.touches,
                    r = s ? s[0] : n;
                return Ut = w, s ? Yt = s.length : e.preventDefault(), Ht = 0, Rt = null, qt = null, jt = 0, Dt = 0, Bt = 0, Wt = 1, Ft = 0, Jt = mt(), Vt = vt(), lt(), !s || Yt === i.fingers || i.fingers === b || q() ? (ht(0, r), Gt = zt(), 2 == Yt && (ht(1, s[1]), Dt = Bt = St(Jt[0].start, Jt[1].start)), (i.swipeStatus || i.pinchStatus) && (o = N(n, Ut))) : o = !1, o === !1 ? (Ut = C, N(n, Ut), o) : (i.hold && (ee = setTimeout(t.proxy(function() {
                    Qt.trigger("hold", [n.target]), i.hold && (o = i.hold.call(Qt, n, n.target))
                }, this), i.longTapThreshold)), ct(!0), null)
            }
        }
        function g(t) {
            var e = t.originalEvent ? t.originalEvent : t;
            if (Ut !== T && Ut !== C && !dt()) {
                var n,
                    o = e.touches,
                    s = o ? o[0] : e,
                    r = ft(s);
                if (Xt = zt(), o && (Yt = o.length), i.hold && clearTimeout(ee), Ut = I, 2 == Yt && (0 == Dt ? (ht(1, o[1]), Dt = Bt = St(Jt[0].start, Jt[1].start)) : (ft(o[1]), Bt = St(Jt[0].end, Jt[1].end), qt = It(Jt[0].end, Jt[1].end)), Wt = wt(Dt, Bt), Ft = Math.abs(Dt - Bt)), Yt === i.fingers || i.fingers === b || !o || q()) {
                    if (Rt = xt(r.start, r.end), W(t, Rt), Ht = Tt(r.start, r.end), jt = bt(), _t(Rt, Ht), (i.swipeStatus || i.pinchStatus) && (n = N(e, Ut)), !i.triggerOnTouchEnd || i.triggerOnTouchLeave) {
                        var a = !0;
                        if (i.triggerOnTouchLeave) {
                            var l = Et(this);
                            a = At(r.end, l)
                        }
                        !i.triggerOnTouchEnd && a ? Ut = P(I) : i.triggerOnTouchLeave && !a && (Ut = P(T)), (Ut == C || Ut == T) && N(e, Ut)
                    }
                } else
                    Ut = C, N(e, Ut);
                n === !1 && (Ut = C, N(e, Ut))
            }
        }
        function L(t) {
            var e = t.originalEvent ? t.originalEvent : t,
                n = e.touches;
            return n && n.length ? (at(), !0) : (dt() && (Yt = Zt), Xt = zt(), jt = bt(), j() || !R() ? (Ut = C, N(e, Ut)) : i.triggerOnTouchEnd || 0 == i.triggerOnTouchEnd && Ut === I ? (t.preventDefault(), Ut = T, N(e, Ut)) : !i.triggerOnTouchEnd && X() ? (Ut = T, H(e, Ut, p)) : Ut === I && (Ut = C, N(e, Ut)), ct(!1), null)
        }
        function k() {
            Yt = 0, Xt = 0, Gt = 0, Dt = 0, Bt = 0, Wt = 1, lt(), ct(!1)
        }
        function M(t) {
            var e = t.originalEvent ? t.originalEvent : t;
            i.triggerOnTouchLeave && (Ut = P(T), N(e, Ut))
        }
        function O() {
            Qt.unbind(kt, n), Qt.unbind(Nt, k), Qt.unbind(Mt, g), Qt.unbind(Ot, L), Pt && Qt.unbind(Pt, M), ct(!1)
        }
        function P(t) {
            var e = t,
                n = B(),
                o = R(),
                s = j();
            return !n || s ? e = C : !o || t != I || i.triggerOnTouchEnd && !i.triggerOnTouchLeave ? !o && t == T && i.triggerOnTouchLeave && (e = C) : e = T, e
        }
        function N(t, e) {
            var i,
                n = t.touches;
            return Y() || U() || V() || q() ? ((Y() || U()) && (i = H(t, e, h)), (V() || q()) && i !== !1 && (i = H(t, e, f))) : st() && i !== !1 ? i = H(t, e, m) : rt() && i !== !1 ? i = H(t, e, _) : ot() && i !== !1 && (i = H(t, e, p)), e === C && k(t), e === T && (n ? n.length || k(t) : k(t)), i
        }
        function H(e, n, u) {
            var c;
            if (u == h) {
                if (Qt.trigger("swipeStatus", [n, Rt || null, Ht || 0, jt || 0, Yt, Jt]), i.swipeStatus && (c = i.swipeStatus.call(Qt, e, n, Rt || null, Ht || 0, jt || 0, Yt, Jt), c === !1))
                    return !1;
                if (n == T && Q()) {
                    if (Qt.trigger("swipe", [Rt, Ht, jt, Yt, Jt]), i.swipe && (c = i.swipe.call(Qt, e, Rt, Ht, jt, Yt, Jt), c === !1))
                        return !1;
                    switch (Rt) {
                    case o:
                        Qt.trigger("swipeLeft", [Rt, Ht, jt, Yt, Jt]), i.swipeLeft && (c = i.swipeLeft.call(Qt, e, Rt, Ht, jt, Yt, Jt));
                        break;
                    case s:
                        Qt.trigger("swipeRight", [Rt, Ht, jt, Yt, Jt]), i.swipeRight && (c = i.swipeRight.call(Qt, e, Rt, Ht, jt, Yt, Jt));
                        break;
                    case r:
                        Qt.trigger("swipeUp", [Rt, Ht, jt, Yt, Jt]), i.swipeUp && (c = i.swipeUp.call(Qt, e, Rt, Ht, jt, Yt, Jt));
                        break;
                    case a:
                        Qt.trigger("swipeDown", [Rt, Ht, jt, Yt, Jt]), i.swipeDown && (c = i.swipeDown.call(Qt, e, Rt, Ht, jt, Yt, Jt))
                    }
                }
            }
            if (u == f) {
                if (Qt.trigger("pinchStatus", [n, qt || null, Ft || 0, jt || 0, Yt, Wt, Jt]), i.pinchStatus && (c = i.pinchStatus.call(Qt, e, n, qt || null, Ft || 0, jt || 0, Yt, Wt, Jt), c === !1))
                    return !1;
                if (n == T && F())
                    switch (qt) {
                    case l:
                        Qt.trigger("pinchIn", [qt || null, Ft || 0, jt || 0, Yt, Wt, Jt]), i.pinchIn && (c = i.pinchIn.call(Qt, e, qt || null, Ft || 0, jt || 0, Yt, Wt, Jt));
                        break;
                    case d:
                        Qt.trigger("pinchOut", [qt || null, Ft || 0, jt || 0, Yt, Wt, Jt]), i.pinchOut && (c = i.pinchOut.call(Qt, e, qt || null, Ft || 0, jt || 0, Yt, Wt, Jt))
                    }
            }
            return u == p ? (n === C || n === T) && (clearTimeout(te), clearTimeout(ee), Z() && !et() ? (Kt = zt(), te = setTimeout(t.proxy(function() {
                Kt = null, Qt.trigger("tap", [e.target]), i.tap && (c = i.tap.call(Qt, e, e.target))
            }, this), i.doubleTapThreshold)) : (Kt = null, Qt.trigger("tap", [e.target]), i.tap && (c = i.tap.call(Qt, e, e.target)))) : u == m ? (n === C || n === T) && (clearTimeout(te), Kt = null, Qt.trigger("doubletap", [e.target]), i.doubleTap && (c = i.doubleTap.call(Qt, e, e.target))) : u == _ && (n === C || n === T) && (clearTimeout(te), Kt = null, Qt.trigger("longtap", [e.target]), i.longTap && (c = i.longTap.call(Qt, e, e.target))), c
        }
        function R() {
            var t = !0;
            return null !== i.threshold && (t = Ht >= i.threshold), t
        }
        function j() {
            var t = !1;
            return null !== i.cancelThreshold && null !== Rt && (t = gt(Rt) - Ht >= i.cancelThreshold), t
        }
        function D() {
            return null !== i.pinchThreshold ? Ft >= i.pinchThreshold : !0
        }
        function B() {
            var t;
            return t = i.maxTimeThreshold && jt >= i.maxTimeThreshold ? !1 : !0
        }
        function W(t, e) {
            if (i.preventDefaultEvents !== !1)
                if (i.allowPageScroll === u)
                    t.preventDefault();
                else {
                    var n = i.allowPageScroll === c;
                    switch (e) {
                    case o:
                        (i.swipeLeft && n || !n && i.allowPageScroll != v) && t.preventDefault();
                        break;
                    case s:
                        (i.swipeRight && n || !n && i.allowPageScroll != v) && t.preventDefault();
                        break;
                    case r:
                        (i.swipeUp && n || !n && i.allowPageScroll != y) && t.preventDefault();
                        break;
                    case a:
                        (i.swipeDown && n || !n && i.allowPageScroll != y) && t.preventDefault()
                    }
                }
        }
        function F() {
            var t = J(),
                e = G(),
                i = D();
            return t && e && i
        }
        function q() {
            return !!(i.pinchStatus || i.pinchIn || i.pinchOut)
        }
        function V() {
            return !(!F() || !q())
        }
        function Q() {
            var t = B(),
                e = R(),
                i = J(),
                n = G(),
                o = j(),
                s = !o && n && i && e && t;
            return s
        }
        function U() {
            return !!(i.swipe || i.swipeStatus || i.swipeLeft || i.swipeRight || i.swipeUp || i.swipeDown)
        }
        function Y() {
            return !(!Q() || !U())
        }
        function J() {
            return Yt === i.fingers || i.fingers === b || !x
        }
        function G() {
            return 0 !== Jt[0].end.x
        }
        function X() {
            return !!i.tap
        }
        function Z() {
            return !!i.doubleTap
        }
        function K() {
            return !!i.longTap
        }
        function tt() {
            if (null == Kt)
                return !1;
            var t = zt();
            return Z() && t - Kt <= i.doubleTapThreshold
        }
        function et() {
            return tt()
        }
        function it() {
            return (1 === Yt || !x) && (isNaN(Ht) || Ht < i.threshold)
        }
        function nt() {
            return jt > i.longTapThreshold && S > Ht
        }
        function ot() {
            return !(!it() || !X())
        }
        function st() {
            return !(!tt() || !Z())
        }
        function rt() {
            return !(!nt() || !K())
        }
        function at() {
            $t = zt(), Zt = event.touches.length + 1
        }
        function lt() {
            $t = 0, Zt = 0
        }
        function dt() {
            var t = !1;
            if ($t) {
                var e = zt() - $t;
                e <= i.fingerReleaseThreshold && (t = !0)
            }
            return t
        }
        function ut() {
            return !(Qt.data(A + "_intouch") !== !0)
        }
        function ct(t) {
            t === !0 ? (Qt.bind(Mt, g), Qt.bind(Ot, L), Pt && Qt.bind(Pt, M)) : (Qt.unbind(Mt, g, !1), Qt.unbind(Ot, L, !1), Pt && Qt.unbind(Pt, M, !1)), Qt.data(A + "_intouch", t === !0)
        }
        function ht(t, e) {
            var i = void 0 !== e.identifier ? e.identifier : 0;
            return Jt[t].identifier = i, Jt[t].start.x = Jt[t].end.x = e.pageX || e.clientX, Jt[t].start.y = Jt[t].end.y = e.pageY || e.clientY, Jt[t]
        }
        function ft(t) {
            var e = void 0 !== t.identifier ? t.identifier : 0,
                i = pt(e);
            return i.end.x = t.pageX || t.clientX, i.end.y = t.pageY || t.clientY, i
        }
        function pt(t) {
            for (var e = 0; e < Jt.length; e++)
                if (Jt[e].identifier == t)
                    return Jt[e]
        }
        function mt() {
            for (var t = [], e = 0; 5 >= e; e++)
                t.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                });
            return t
        }
        function _t(t, e) {
            e = Math.max(e, gt(t)), Vt[t].distance = e
        }
        function gt(t) {
            return Vt[t] ? Vt[t].distance : void 0
        }
        function vt() {
            var t = {};
            return t[o] = yt(o), t[s] = yt(s), t[r] = yt(r), t[a] = yt(a), t
        }
        function yt(t) {
            return {
                direction: t,
                distance: 0
            }
        }
        function bt() {
            return Xt - Gt
        }
        function St(t, e) {
            var i = Math.abs(t.x - e.x),
                n = Math.abs(t.y - e.y);
            return Math.round(Math.sqrt(i * i + n * n))
        }
        function wt(t, e) {
            var i = e / t * 1;
            return i.toFixed(2)
        }
        function It() {
            return 1 > Wt ? d : l
        }
        function Tt(t, e) {
            return Math.round(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)))
        }
        function Ct(t, e) {
            var i = t.x - e.x,
                n = e.y - t.y,
                o = Math.atan2(n, i),
                s = Math.round(180 * o / Math.PI);
            return 0 > s && (s = 360 - Math.abs(s)), s
        }
        function xt(t, e) {
            var i = Ct(t, e);
            return 45 >= i && i >= 0 ? o : 360 >= i && i >= 315 ? o : i >= 135 && 225 >= i ? s : i > 45 && 135 > i ? a : r
        }
        function zt() {
            var t = new Date;
            return t.getTime()
        }
        function Et(e) {
            e = t(e);
            var i = e.offset(),
                n = {
                    left: i.left,
                    right: i.left + e.outerWidth(),
                    top: i.top,
                    bottom: i.top + e.outerHeight()
                };
            return n
        }
        function At(t, e) {
            return t.x > e.left && t.x < e.right && t.y > e.top && t.y < e.bottom
        }
        var Lt = x || E || !i.fallbackToMouseEvents,
            kt = Lt ? E ? z ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
            Mt = Lt ? E ? z ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
            Ot = Lt ? E ? z ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
            Pt = Lt ? null : "mouseleave",
            Nt = E ? z ? "MSPointerCancel" : "pointercancel" : "touchcancel",
            Ht = 0,
            Rt = null,
            jt = 0,
            Dt = 0,
            Bt = 0,
            Wt = 1,
            Ft = 0,
            qt = 0,
            Vt = null,
            Qt = t(e),
            Ut = "start",
            Yt = 0,
            Jt = null,
            Gt = 0,
            Xt = 0,
            $t = 0,
            Zt = 0,
            Kt = 0,
            te = null,
            ee = null;
        try {
            Qt.bind(kt, n), Qt.bind(Nt, k)
        } catch (ie) {
            t.error("events not supported " + kt + "," + Nt + " on jQuery.swipe")
        }
        this.enable = function() {
            return Qt.bind(kt, n), Qt.bind(Nt, k), Qt
        }, this.disable = function() {
            return O(), Qt
        }, this.destroy = function() {
            O(), Qt.data(A, null), Qt = null
        }, this.option = function(e, n) {
            if (void 0 !== i[e]) {
                if (void 0 === n)
                    return i[e];
                i[e] = n
            } else
                t.error("Option " + e + " does not exist on jQuery.swipe.options");
            return null
        }
    }
    var n = "1.6.9",
        o = "left",
        s = "right",
        r = "up",
        a = "down",
        l = "in",
        d = "out",
        u = "none",
        c = "auto",
        h = "swipe",
        f = "pinch",
        p = "tap",
        m = "doubletap",
        _ = "longtap",
        g = "hold",
        v = "horizontal",
        y = "vertical",
        b = "all",
        S = 10,
        w = "start",
        I = "move",
        T = "end",
        C = "cancel",
        x = "ontouchstart" in window,
        z = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
        E = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
        A = "TouchSwipe",
        L = {
            fingers: 1,
            threshold: 75,
            cancelThreshold: null,
            pinchThreshold: 20,
            maxTimeThreshold: null,
            fingerReleaseThreshold: 250,
            longTapThreshold: 500,
            doubleTapThreshold: 200,
            swipe: null,
            swipeLeft: null,
            swipeRight: null,
            swipeUp: null,
            swipeDown: null,
            swipeStatus: null,
            pinchIn: null,
            pinchOut: null,
            pinchStatus: null,
            click: null,
            tap: null,
            doubleTap: null,
            longTap: null,
            hold: null,
            triggerOnTouchEnd: !0,
            triggerOnTouchLeave: !1,
            allowPageScroll: "auto",
            fallbackToMouseEvents: !0,
            excludedElements: "label, button, input, select, textarea, a, .noSwipe",
            preventDefaultEvents: !0
        };
    t.fn.swipe = function(i) {
        var n = t(this),
            o = n.data(A);
        if (o && "string" == typeof i) {
            if (o[i])
                return o[i].apply(this, Array.prototype.slice.call(arguments, 1));
            t.error("Method " + i + " does not exist on jQuery.swipe")
        } else if (!(o || "object" != typeof i && i))
            return e.apply(this, arguments);
        return n
    }, t.fn.swipe.version = n, t.fn.swipe.defaults = L, t.fn.swipe.phases = {
        PHASE_START: w,
        PHASE_MOVE: I,
        PHASE_END: T,
        PHASE_CANCEL: C
    }, t.fn.swipe.directions = {
        LEFT: o,
        RIGHT: s,
        UP: r,
        DOWN: a,
        IN: l,
        OUT: d
    }, t.fn.swipe.pageScroll = {
        NONE: u,
        HORIZONTAL: v,
        VERTICAL: y,
        AUTO: c
    }, t.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: b
    }
}), !function(t, e) {
    var i = e(t, t.document);
    t.lazySizes = i, "object" == typeof module && module.exports ? module.exports = i : "function" == typeof define && define.amd && define(i)
}(window, function(t, e) {
    "use strict";
    if (e.getElementsByClassName) {
        var i,
            n = e.documentElement,
            o = t.addEventListener,
            s = t.setTimeout,
            r = t.requestAnimationFrame || s,
            a = /^picture$/i,
            l = ["load", "error", "lazyincluded", "_lazyloaded"],
            d = function(t, e) {
                var i = new RegExp("(\\s|^)" + e + "(\\s|$)");
                return t.className.match(i) && i
            },
            u = function(t, e) {
                d(t, e) || (t.className += " " + e)
            },
            c = function(t, e) {
                var i;
                (i = d(t, e)) && (t.className = t.className.replace(i, " "))
            },
            h = function(t, e, i) {
                var n = i ? "addEventListener" : "removeEventListener";
                i && h(t, e), l.forEach(function(i) {
                    t[n](i, e)
                })
            },
            f = function(t, i, n, o, s) {
                var r = e.createEvent("CustomEvent");
                return r.initCustomEvent(i, !o, !s, n || {}), r.details = r.detail, t.dispatchEvent(r), r
            },
            p = function(e, n) {
                var o;
                t.HTMLPictureElement || ((o = t.picturefill || t.respimage || i.pf) ? o({
                    reevaluate: !0,
                    elements: [e]
                }) : n && n.src && (e.src = n.src))
            },
            m = function(t, e) {
                return getComputedStyle(t, null)[e]
            },
            _ = function(t, e, n) {
                for (n = n || t.offsetWidth; n < i.minSize && e && !t._lazysizesWidth;)
                    n = e.offsetWidth, e = e.parentNode;
                return n
            },
            g = function(e) {
                var n,
                    o = 0,
                    a = t.Date,
                    l = function() {
                        n = !1, o = a.now(), e()
                    },
                    d = function() {
                        s(l)
                    },
                    u = function() {
                        r(d)
                    };
                return function() {
                    if (!n) {
                        var t = i.throttle - (a.now() - o);
                        n = !0, 9 > t && (t = 9), s(u, t)
                    }
                }
            },
            v = function() {
                var l,
                    _,
                    v,
                    b,
                    S,
                    w,
                    I,
                    T,
                    C,
                    x,
                    z,
                    E,
                    A,
                    L = /^img$/i,
                    k = /^iframe$/i,
                    M = "onscroll" in t && !/glebot/.test(navigator.userAgent),
                    O = 0,
                    P = 0,
                    N = 0,
                    H = 1,
                    R = function(t) {
                        N--, t && t.target && h(t.target, R), (!t || 0 > N || !t.target) && (N = 0)
                    },
                    j = function(t, e) {
                        var i,
                            n = t,
                            o = "hidden" != m(t, "visibility");
                        for (T -= e, z += e, C -= e, x += e; o && (n = n.offsetParent);)
                            o = (m(n, "opacity") || 1) > 0, o && "visible" != m(n, "overflow") && (i = n.getBoundingClientRect(), o = x > i.left && C < i.right && z > i.top - 1 && T < i.bottom + 1);
                        return o
                    },
                    D = function() {
                        var t,
                            e,
                            n,
                            o,
                            s,
                            r,
                            a,
                            d,
                            u;
                        if ((S = i.loadMode) && 8 > N && (t = l.length)) {
                            for (e = 0, H++, A > P && 1 > N && H > 3 && S > 2 ? (P = A, H = 0) : P = P != E && S > 1 && H > 2 && 6 > N ? E : O; t > e; e++)
                                l[e] && !l[e]._lazyRace && (M ? ((d = l[e].getAttribute("data-expand")) && (r = 1 * d) || (r = P), u !== r && (w = innerWidth + r, I = innerHeight + r, a = -1 * r, u = r), n = l[e].getBoundingClientRect(), (z = n.bottom) >= a && (T = n.top) <= I && (x = n.right) >= a && (C = n.left) <= w && (z || x || C || T) && (v && 3 > N && !d && (3 > S || 4 > H) || j(l[e], r)) ? (V(l[e], n.width), s = !0) : !s && v && !o && 3 > N && 4 > H && S > 2 && (_[0] || i.preloadAfterLoad) && (_[0] || !d && (z || x || C || T || "auto" != l[e].getAttribute(i.sizesAttr))) && (o = _[0] || l[e])) : V(l[e]));
                            o && !s && V(o)
                        }
                    },
                    B = g(D),
                    W = function(t) {
                        u(t.target, i.loadedClass), c(t.target, i.loadingClass), h(t.target, W)
                    },
                    F = function(t, e) {
                        try {
                            t.contentWindow.location.replace(e)
                        } catch (i) {
                            t.setAttribute("src", e)
                        }
                    },
                    q = function() {
                        var t,
                            e = [],
                            i = function() {
                                for (; e.length;)
                                    e.shift()();
                                t = !1
                            };
                        return function(n) {
                            e.push(n), t || (t = !0, r(i))
                        }
                    }(),
                    V = function(t, e) {
                        var n,
                            o,
                            r,
                            l,
                            m,
                            _,
                            g,
                            S,
                            w,
                            I,
                            T,
                            C = L.test(t.nodeName),
                            x = t.getAttribute(i.sizesAttr) || t.getAttribute("sizes"),
                            z = "auto" == x;
                        (!z && v || !C || !t.src && !t.srcset || t.complete || d(t, i.errorClass)) && (t._lazyRace = !0, N++, q(function() {
                            if (t._lazyRace && delete t._lazyRace, c(t, i.lazyClass), !(w = f(t, "lazybeforeunveil")).defaultPrevented) {
                                if (x && (z ? (y.updateElem(t, !0, e), u(t, i.autosizesClass)) : t.setAttribute("sizes", x)), _ = t.getAttribute(i.srcsetAttr), m = t.getAttribute(i.srcAttr), C && (g = t.parentNode, S = g && a.test(g.nodeName || "")), I = w.detail.firesLoad || "src" in t && (_ || m || S), w = {
                                    target: t
                                }, I && (h(t, R, !0), clearTimeout(b), b = s(R, 2500), u(t, i.loadingClass), h(t, W, !0)), S)
                                    for (n = g.getElementsByTagName("source"), o = 0, r = n.length; r > o; o++)
                                        (T = i.customMedia[n[o].getAttribute("data-media") || n[o].getAttribute("media")]) && n[o].setAttribute("media", T), l = n[o].getAttribute(i.srcsetAttr), l && n[o].setAttribute("srcset", l);
                                _ ? t.setAttribute("srcset", _) : m && (k.test(t.nodeName) ? F(t, m) : t.setAttribute("src", m)), (_ || S) && p(t, {
                                    src: m
                                })
                            }
                            (!I || t.complete) && (I ? R(w) : N--, W(w))
                        }))
                    },
                    Q = function() {
                        var t,
                            e = function() {
                                i.loadMode = 3, B()
                            };
                        v = !0, H += 8, i.loadMode = 3, o("scroll", function() {
                            3 == i.loadMode && (i.loadMode = 2), clearTimeout(t), t = s(e, 99)
                        }, !0)
                    };
                return {
                    _: function() {
                        l = e.getElementsByClassName(i.lazyClass), _ = e.getElementsByClassName(i.lazyClass + " " + i.preloadClass), E = i.expand, A = Math.round(E * i.expFactor), o("scroll", B, !0), o("resize", B, !0), t.MutationObserver ? new MutationObserver(B).observe(n, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0
                        }) : (n.addEventListener("DOMNodeInserted", B, !0), n.addEventListener("DOMAttrModified", B, !0), setInterval(B, 999)), o("hashchange", B, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(t) {
                            e.addEventListener(t, B, !0)
                        }), (v = /d$|^c/.test(e.readyState)) ? Q() : (o("load", Q), e.addEventListener("DOMContentLoaded", B)), B()
                    },
                    checkElems: B,
                    unveil: V
                }
            }(),
            y = function() {
                var t,
                    n = function(t, e, i) {
                        var n,
                            o,
                            s,
                            r,
                            l = t.parentNode;
                        if (l && (i = _(t, l, i), r = f(t, "lazybeforesizes", {
                            width: i,
                            dataAttr: !!e
                        }), !r.defaultPrevented && (i = r.detail.width, i && i !== t._lazysizesWidth))) {
                            if (t._lazysizesWidth = i, i += "px", t.setAttribute("sizes", i), a.test(l.nodeName || ""))
                                for (n = l.getElementsByTagName("source"), o = 0, s = n.length; s > o; o++)
                                    n[o].setAttribute("sizes", i);
                            r.detail.dataAttr || p(t, r.detail)
                        }
                    },
                    s = function() {
                        var e,
                            i = t.length;
                        if (i)
                            for (e = 0; i > e; e++)
                                n(t[e])
                    },
                    r = g(s);
                return {
                    _: function() {
                        t = e.getElementsByClassName(i.autosizesClass), o("resize", r)
                    },
                    checkElems: r,
                    updateElem: n
                }
            }(),
            b = function() {
                b.i || (b.i = !0, y._(), v._())
            };
        return function() {
            var e,
                n = {
                    lazyClass: "lazyload",
                    loadedClass: "lazyloaded",
                    loadingClass: "lazyloading",
                    preloadClass: "lazypreload",
                    errorClass: "lazyerror",
                    autosizesClass: "lazyautosizes",
                    srcAttr: "data-src",
                    srcsetAttr: "data-srcset",
                    sizesAttr: "data-sizes",
                    minSize: 40,
                    customMedia: {},
                    init: !0,
                    expFactor: 2,
                    expand: 359,
                    loadMode: 2,
                    throttle: 125
                };
            i = t.lazySizesConfig || t.lazysizesConfig || {};
            for (e in n)
                e in i || (i[e] = n[e]);
            t.lazySizesConfig = i, s(function() {
                i.init && b()
            })
        }(), {
            cfg: i,
            autoSizer: y,
            loader: v,
            init: b,
            uP: p,
            aC: u,
            rC: c,
            hC: d,
            fire: f,
            gW: _
        }
    }
}), jQuery(document).ready(function($) {
    function t() {
        if ($(".slider").length && $(window).width() > 480) {
            var t = $(".slider").css("display", "block").royalSlider({
                    addActiveClass: !0,
                    arrowsNav: !1,
                    controlNavigation: "none",
                    imageScalePadding: 0,
                    slidesSpacing: 30,
                    imageAlignCenter: !0,
                    loop: !1,
                    fadeinLoadedSlide: !0,
                    keyboardNavEnabled: !0,
                    visibleNearby: {
                        enabled: !0,
                        centerArea: .5,
                        center: !0,
                        breakpoint: 1e3,
                        breakpointCenterArea: .9,
                        navigateByCenterClick: !0
                    }
                }),
                e = t.data("royalSlider"),
                i = $('<div class="rsSlideCount"></div>').appendTo(t);
            e.ev.on("rsAfterSlideChange", function() {
                i.html(e.currSlideId + 1 + " / " + e.numSlides), e.currSlideId + 1 === e.numSlides && $(".next_project").fadeIn(), e.currSlideId + 1 >= 2 && $(".project").addClass("infohidden")
            }), e.ev.on("rsBeforeAnimStart", function() {
                e.currSlideId + 1 !== e.numSlides && $(".next_project").fadeOut(150)
            }), i.html(e.currSlideId + 1 + " / " + e.numSlides), e.currSlideId + 1 === e.numSlides ? $(".next_project").fadeIn() : $(".next_project").fadeOut()
        }
    }
    function e() {
        ($(".scroller").length && $(window).width() > 480 || $(window).width() > 1e3 && !$("body").hasClass("single-project")) && $(".scroller").each(function() {
            var t = $(this).closest(".scroller_size").height();
            $(this).slimScroll({
                height: t + "px",
                color: "#000",
                size: "1px",
                railOpacity: 1,
                position: "left"
            }), ($(window).width() < 480 || $(window).width() < 1e3 && $("body").hasClass("single-project")) && $(this).slimScroll({
                destroy: !0
            }).attr("style", "")
        })
    }
    function i(t, e, i, r) {
        if ("move" !== e || "left" !== i && "right" !== i)
            "cancel" === e ? s(c * h, p) : "end" === e && ("right" === i ? n() : "left" === i && o());
        else {
            var a = 0;
            "left" === i ? s(c * h + r, a) : "right" === i && s(c * h - r, a)
        }
    }
    function n() {
        h = Math.max(h - 1, 0), s(c * h, p);
        var t = $(".personwrap").eq(h),
            e = t.data("url");
        window.history.pushState({
            path: e
        }, "", e)
    }
    function o() {
        h = Math.min(h + 1, f - 1), s(c * h, p);
        var t = $(".personwrap").eq(h),
            e = t.data("url");
        window.history.pushState({
            path: e
        }, "", e)
    }
    function s(t, e) {
        m.css("transition-duration", (e / 1e3).toFixed(1) + "s");
        var i = (0 > t ? "" : "-") + Math.abs(t).toString();
        m.css("transform", "translate(" + i + "px,0)")
    }
    if ($(".homeslider").length) {
        var r = $(".homeslider").css("display", "block").royalSlider({
                addActiveClass: !0,
                arrowsNavAutoHide: !1,
                arrowsNavHideOnTouch: !0,
                arrowsNav: !0,
                controlNavigation: "none",
                imageScalePadding: 20,
                imageAlignCenter: !0,
                loop: !1,
                fadeinLoadedSlide: !0,
                keyboardNavEnabled: !0,
                globalCaption: !0
            }),
            a = r.data("royalSlider"),
            l = $('<div class="rsSlideCount lrgtxt"></div>').appendTo(r);
        a.ev.on("rsAfterSlideChange", function() {
            l.html(a.currSlideId + 1 + "/" + a.numSlides)
        }), l.html(a.currSlideId + 1 + "/" + a.numSlides)
    }
    var d = $(".grid").isotope({
        itemSelector: ".grid_item",
        stamp: ".stamp",
        layoutMode: "masonry",
        isInitLayout: !1
    });
    d.isotope("on", "layoutComplete", function() {
        d.addClass("ready")
    }), d.isotope("layout"), $(".filter_projects").on("click", ".filter", function() {
        var t = $(this).attr("data-filter");
        $(".filter.active").removeClass("active"), d.isotope({
            filter: t
        }), $(this).addClass("active"), $("#filters").fadeOut()
    }), t(), $("#togglemenu").click(function() {
        $("body").toggleClass("main_menu_open")
    }), $("#open-filters").click(function() {
        $("#filters").fadeToggle()
    }), $("#backtotop").click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    }), $(document).on("click", ".share .fb", function() {
        var t = 500,
            e = 300,
            i = ($(window).width() - t) / 2,
            n = ($(window).height() - e) / 2,
            o = $(this).attr("href"),
            s = "status=1,width=" + t + ",height=" + e + ",top=" + n + ",left=" + i;
        return window.open(o, "facebook", s), !1
    }), $(document).on("click", ".share .twitter", function() {
        var t = 500,
            e = 300,
            i = ($(window).width() - t) / 2,
            n = ($(window).height() - e) / 2,
            o = $(this).data("url"),
            s = $(this).data("text"),
            r = "https://twitter.com/intent/tweet?text=" + s + "&url=" + o,
            a = "status=1,width=" + t + ",height=" + e + ",top=" + n + ",left=" + i;
        return window.open(r, "twitter", a), !1
    }), $(window).width() > 480 && $("body").hasClass("not-mobile") && $(".project_link").hover(function() {
        var t = $(this).parent(".project_block"),
            e = $(this).width(),
            i = (e + 80) / e,
            n,
            o,
            s,
            r;
        t.hasClass("person") ? n = t.find(".name").text() : (o = t.find(".project_title").text(), s = t.find(".year").text(), r = t.data("location")), $(".project_block").not(t).find("img").css({
            "-webkit-transform": "scale(1)",
            "-moz-transform": "scale(1)",
            "-ms-transform": "scale(1)",
            "-o-transform": "scale(1)",
            transform: "scale(1)"
        }), $(this).find("img").css({
            "-webkit-transform": "scale(" + i + ")",
            "-moz-transform": "scale(" + i + ")",
            "-ms-transform": "scale(" + i + ")",
            "-o-transform": "scale(" + i + ")",
            transform: "scale(" + i + ")"
        }), $(".project_block").not(t).addClass("inactive"), $(this).parent(".project_block").addClass("active"), t.hasClass("person") ? $(".gridwrap").prepend('<div id="temp-heading" class="lrgtxt">' + n + "</div>") : $(".gridwrap").prepend('<div id="temp-heading" class="lrgtxt"><h1>' + o + "</h1>" + r + ",<br>" + s + "</div>")
    }, function() {
        $(this).find("img").css({
            "-webkit-transform": "scale(1)",
            "-moz-transform": "scale(1)",
            "-ms-transform": "scale(1)",
            "-o-transform": "scale(1)",
            transform: "scale(1)"
        }), $(".project_block").removeClass("inactive"), $(this).parent(".project_block").removeClass("active"), $("#temp-heading").remove()
    }), $(window).width() < 480 && $("body").hasClass("is-mobile") && $(".slider img").each(function() {
        this.complete ? $(this).addClass("loaded") : $(this).load(function() {
            $(this).addClass("loaded")
        })
    }), $(".toggleinfo").click(function() {
        $(".project").toggleClass("infohidden")
    }), e();
    var u = $(".personwrap"),
        c = u.width(),
        h = 0,
        f = u.length,
        p = 500,
        m = $("#people-wrap"),
        _ = {
            triggerOnTouchEnd: !0,
            swipeStatus: i,
            allowPageScroll: "vertical",
            threshold: 75,
            excludedElements: ""
        };
    if (m.swipe(_), $("#people").length)
        if ($(window).width() > 480) {
            h = $(".personwrap.current").index();
            var g = $(".personwrap").width(),
                v = g * h;
            m.css("transform", "translate(-" + v + "px,0)")
        } else {
            var y = $("#people .current").offset().top;
            $(window).scrollTop(y)
        }
    $(window).resize(function() {
        c = u.width(), e(), t()
    });
    var b = $("#people-wrap .portrait");
    b.on("mousedown", function() {
        b.on("mouseup mousemove", function t(e) {
            if ("mouseup" === e.type) {
                h = $(this).closest(".personwrap").index() + 1;
                var i = $(".personwrap").eq(h),
                    n = i.data("url");
                window.history.pushState({
                    path: n
                }, "", n)
            }
            b.off("mouseup mousemove", t)
        })
    })
});
