!function(e) {
    function t(r) {
        if (n[r])
            return n[r].exports;
        var i = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "/assets/", t(0)
}([function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = n(5),
        o = r(i);
    n(26), window.onload = function() {
        new o.default
    }
}, function(e, t, n) {
    var r,
        i;
    (function() {
        function n(e) {
            function t(t, n, r, i, o, a) {
                for (; o >= 0 && o < a; o += e) {
                    var l = i ? i[o] : o;
                    r = n(r, t[l], l, t)
                }
                return r
            }
            return function(n, r, i, o) {
                r = m(r, o, 4);
                var a = !I(n) && v.keys(n),
                    l = (a || n).length,
                    u = e > 0 ? 0 : l - 1;
                return arguments.length < 3 && (i = n[a ? a[u] : u], u += e), t(n, r, i, a, u, l)
            }
        }
        function o(e) {
            return function(t, n, r) {
                n = H(n, r);
                for (var i = C(t), o = e > 0 ? 0 : i - 1; o >= 0 && o < i; o += e)
                    if (n(t[o], o, t))
                        return o;
                return -1
            }
        }
        function a(e, t, n) {
            return function(r, i, o) {
                var a = 0,
                    l = C(r);
                if ("number" == typeof o)
                    e > 0 ? a = o >= 0 ? o : Math.max(o + l, a) : l = o >= 0 ? Math.min(o + 1, l) : o + l + 1;
                else if (n && o && l)
                    return o = n(r, i), r[o] === i ? o : -1;
                if (i !== i)
                    return o = t(b.call(r, a, l), v.isNaN), o >= 0 ? o + a : -1;
                for (o = e > 0 ? a : l - 1; o >= 0 && o < l; o += e)
                    if (r[o] === i)
                        return o;
                return -1
            }
        }
        function l(e, t) {
            var n = V.length,
                r = e.constructor,
                i = v.isFunction(r) && r.prototype || T,
                o = "constructor";
            for (v.has(e, o) && !v.contains(t, o) && t.push(o); n--;)
                o = V[n], o in e && e[o] !== i[o] && !v.contains(t, o) && t.push(o)
        }
        var u = this,
            s = u._,
            c = Array.prototype,
            T = Object.prototype,
            S = Function.prototype,
            f = c.push,
            b = c.slice,
            d = T.toString,
            P = T.hasOwnProperty,
            A = Array.isArray,
            p = Object.keys,
            h = S.bind,
            M = Object.create,
            G = function() {},
            v = function(e) {
                return e instanceof v ? e : this instanceof v ? void (this._wrapped = e) : new v(e)
            };
        "undefined" != typeof e && e.exports && (t = e.exports = v), t._ = v, v.VERSION = "1.8.3";
        var m = function(e, t, n) {
                if (void 0 === t)
                    return e;
                switch (null == n ? 3 : n) {
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function(n, r) {
                        return e.call(t, n, r)
                    };
                case 3:
                    return function(n, r, i) {
                        return e.call(t, n, r, i)
                    };
                case 4:
                    return function(n, r, i, o) {
                        return e.call(t, n, r, i, o)
                    }
                }
                return function() {
                    return e.apply(t, arguments)
                }
            },
            H = function(e, t, n) {
                return null == e ? v.identity : v.isFunction(e) ? m(e, t, n) : v.isObject(e) ? v.matcher(e) : v.property(e)
            };
        v.iteratee = function(e, t) {
            return H(e, t, 1 / 0)
        };
        var y = function(e, t) {
                return function(n) {
                    var r = arguments.length;
                    if (r < 2 || null == n)
                        return n;
                    for (var i = 1; i < r; i++)
                        for (var o = arguments[i], a = e(o), l = a.length, u = 0; u < l; u++) {
                            var s = a[u];
                            t && void 0 !== n[s] || (n[s] = o[s])
                        }
                    return n
                }
            },
            B = function(e) {
                if (!v.isObject(e))
                    return {};
                if (M)
                    return M(e);
                G.prototype = e;
                var t = new G;
                return G.prototype = null, t
            },
            g = function(e) {
                return function(t) {
                    return null == t ? void 0 : t[e]
                }
            },
            E = Math.pow(2, 53) - 1,
            C = g("length"),
            I = function(e) {
                var t = C(e);
                return "number" == typeof t && t >= 0 && t <= E
            };
        v.each = v.forEach = function(e, t, n) {
            t = m(t, n);
            var r,
                i;
            if (I(e))
                for (r = 0, i = e.length; r < i; r++)
                    t(e[r], r, e);
            else {
                var o = v.keys(e);
                for (r = 0, i = o.length; r < i; r++)
                    t(e[o[r]], o[r], e)
            }
            return e
        }, v.map = v.collect = function(e, t, n) {
            t = H(t, n);
            for (var r = !I(e) && v.keys(e), i = (r || e).length, o = Array(i), a = 0; a < i; a++) {
                var l = r ? r[a] : a;
                o[a] = t(e[l], l, e)
            }
            return o
        }, v.reduce = v.foldl = v.inject = n(1), v.reduceRight = v.foldr = n(-1), v.find = v.detect = function(e, t, n) {
            var r;
            if (r = I(e) ? v.findIndex(e, t, n) : v.findKey(e, t, n), void 0 !== r && r !== -1)
                return e[r]
        }, v.filter = v.select = function(e, t, n) {
            var r = [];
            return t = H(t, n), v.each(e, function(e, n, i) {
                t(e, n, i) && r.push(e)
            }), r
        }, v.reject = function(e, t, n) {
            return v.filter(e, v.negate(H(t)), n)
        }, v.every = v.all = function(e, t, n) {
            t = H(t, n);
            for (var r = !I(e) && v.keys(e), i = (r || e).length, o = 0; o < i; o++) {
                var a = r ? r[o] : o;
                if (!t(e[a], a, e))
                    return !1
            }
            return !0
        }, v.some = v.any = function(e, t, n) {
            t = H(t, n);
            for (var r = !I(e) && v.keys(e), i = (r || e).length, o = 0; o < i; o++) {
                var a = r ? r[o] : o;
                if (t(e[a], a, e))
                    return !0
            }
            return !1
        }, v.contains = v.includes = v.include = function(e, t, n, r) {
            return I(e) || (e = v.values(e)), ("number" != typeof n || r) && (n = 0), v.indexOf(e, t, n) >= 0
        }, v.invoke = function(e, t) {
            var n = b.call(arguments, 2),
                r = v.isFunction(t);
            return v.map(e, function(e) {
                var i = r ? t : e[t];
                return null == i ? i : i.apply(e, n)
            })
        }, v.pluck = function(e, t) {
            return v.map(e, v.property(t))
        }, v.where = function(e, t) {
            return v.filter(e, v.matcher(t))
        }, v.findWhere = function(e, t) {
            return v.find(e, v.matcher(t))
        }, v.max = function(e, t, n) {
            var r,
                i,
                o = -(1 / 0),
                a = -(1 / 0);
            if (null == t && null != e) {
                e = I(e) ? e : v.values(e);
                for (var l = 0, u = e.length; l < u; l++)
                    r = e[l], r > o && (o = r)
            } else
                t = H(t, n), v.each(e, function(e, n, r) {
                    i = t(e, n, r), (i > a || i === -(1 / 0) && o === -(1 / 0)) && (o = e, a = i)
                });
            return o
        }, v.min = function(e, t, n) {
            var r,
                i,
                o = 1 / 0,
                a = 1 / 0;
            if (null == t && null != e) {
                e = I(e) ? e : v.values(e);
                for (var l = 0, u = e.length; l < u; l++)
                    r = e[l], r < o && (o = r)
            } else
                t = H(t, n), v.each(e, function(e, n, r) {
                    i = t(e, n, r), (i < a || i === 1 / 0 && o === 1 / 0) && (o = e, a = i)
                });
            return o
        }, v.shuffle = function(e) {
            for (var t, n = I(e) ? e : v.values(e), r = n.length, i = Array(r), o = 0; o < r; o++)
                t = v.random(0, o), t !== o && (i[o] = i[t]), i[t] = n[o];
            return i
        }, v.sample = function(e, t, n) {
            return null == t || n ? (I(e) || (e = v.values(e)), e[v.random(e.length - 1)]) : v.shuffle(e).slice(0, Math.max(0, t))
        }, v.sortBy = function(e, t, n) {
            return t = H(t, n), v.pluck(v.map(e, function(e, n, r) {
                return {
                    value: e,
                    index: n,
                    criteria: t(e, n, r)
                }
            }).sort(function(e, t) {
                var n = e.criteria,
                    r = t.criteria;
                if (n !== r) {
                    if (n > r || void 0 === n)
                        return 1;
                    if (n < r || void 0 === r)
                        return -1
                }
                return e.index - t.index
            }), "value")
        };
        var w = function(e) {
            return function(t, n, r) {
                var i = {};
                return n = H(n, r), v.each(t, function(r, o) {
                    var a = n(r, o, t);
                    e(i, r, a)
                }), i
            }
        };
        v.groupBy = w(function(e, t, n) {
            v.has(e, n) ? e[n].push(t) : e[n] = [t]
        }), v.indexBy = w(function(e, t, n) {
            e[n] = t
        }), v.countBy = w(function(e, t, n) {
            v.has(e, n) ? e[n]++ : e[n] = 1
        }), v.toArray = function(e) {
            return e ? v.isArray(e) ? b.call(e) : I(e) ? v.map(e, v.identity) : v.values(e) : []
        }, v.size = function(e) {
            return null == e ? 0 : I(e) ? e.length : v.keys(e).length
        }, v.partition = function(e, t, n) {
            t = H(t, n);
            var r = [],
                i = [];
            return v.each(e, function(e, n, o) {
                (t(e, n, o) ? r : i).push(e)
            }), [r, i]
        }, v.first = v.head = v.take = function(e, t, n) {
            if (null != e)
                return null == t || n ? e[0] : v.initial(e, e.length - t)
        }, v.initial = function(e, t, n) {
            return b.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
        }, v.last = function(e, t, n) {
            if (null != e)
                return null == t || n ? e[e.length - 1] : v.rest(e, Math.max(0, e.length - t))
        }, v.rest = v.tail = v.drop = function(e, t, n) {
            return b.call(e, null == t || n ? 1 : t)
        }, v.compact = function(e) {
            return v.filter(e, v.identity)
        };
        var D = function(e, t, n, r) {
            for (var i = [], o = 0, a = r || 0, l = C(e); a < l; a++) {
                var u = e[a];
                if (I(u) && (v.isArray(u) || v.isArguments(u))) {
                    t || (u = D(u, t, n));
                    var s = 0,
                        c = u.length;
                    for (i.length += c; s < c;)
                        i[o++] = u[s++]
                } else
                    n || (i[o++] = u)
            }
            return i
        };
        v.flatten = function(e, t) {
            return D(e, t, !1)
        }, v.without = function(e) {
            return v.difference(e, b.call(arguments, 1))
        }, v.uniq = v.unique = function(e, t, n, r) {
            v.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = H(n, r));
            for (var i = [], o = [], a = 0, l = C(e); a < l; a++) {
                var u = e[a],
                    s = n ? n(u, a, e) : u;
                t ? (a && o === s || i.push(u), o = s) : n ? v.contains(o, s) || (o.push(s), i.push(u)) : v.contains(i, u) || i.push(u)
            }
            return i
        }, v.union = function() {
            return v.uniq(D(arguments, !0, !0))
        }, v.intersection = function(e) {
            for (var t = [], n = arguments.length, r = 0, i = C(e); r < i; r++) {
                var o = e[r];
                if (!v.contains(t, o)) {
                    for (var a = 1; a < n && v.contains(arguments[a], o); a++)
                        ;
                    a === n && t.push(o)
                }
            }
            return t
        }, v.difference = function(e) {
            var t = D(arguments, !0, !0, 1);
            return v.filter(e, function(e) {
                return !v.contains(t, e)
            })
        }, v.zip = function() {
            return v.unzip(arguments)
        }, v.unzip = function(e) {
            for (var t = e && v.max(e, C).length || 0, n = Array(t), r = 0; r < t; r++)
                n[r] = v.pluck(e, r);
            return n
        }, v.object = function(e, t) {
            for (var n = {}, r = 0, i = C(e); r < i; r++)
                t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
            return n
        }, v.findIndex = o(1), v.findLastIndex = o(-1), v.sortedIndex = function(e, t, n, r) {
            n = H(n, r, 1);
            for (var i = n(t), o = 0, a = C(e); o < a;) {
                var l = Math.floor((o + a) / 2);
                n(e[l]) < i ? o = l + 1 : a = l
            }
            return o
        }, v.indexOf = a(1, v.findIndex, v.sortedIndex), v.lastIndexOf = a(-1, v.findLastIndex), v.range = function(e, t, n) {
            null == t && (t = e || 0, e = 0), n = n || 1;
            for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; o < r; o++, e += n)
                i[o] = e;
            return i
        };
        var O = function(e, t, n, r, i) {
            if (!(r instanceof t))
                return e.apply(n, i);
            var o = B(e.prototype),
                a = e.apply(o, i);
            return v.isObject(a) ? a : o
        };
        v.bind = function(e, t) {
            if (h && e.bind === h)
                return h.apply(e, b.call(arguments, 1));
            if (!v.isFunction(e))
                throw new TypeError("Bind must be called on a function");
            var n = b.call(arguments, 2),
                r = function() {
                    return O(e, r, t, this, n.concat(b.call(arguments)))
                };
            return r
        }, v.partial = function(e) {
            var t = b.call(arguments, 1),
                n = function() {
                    for (var r = 0, i = t.length, o = Array(i), a = 0; a < i; a++)
                        o[a] = t[a] === v ? arguments[r++] : t[a];
                    for (; r < arguments.length;)
                        o.push(arguments[r++]);
                    return O(e, n, this, this, o)
                };
            return n
        }, v.bindAll = function(e) {
            var t,
                n,
                r = arguments.length;
            if (r <= 1)
                throw new Error("bindAll must be passed function names");
            for (t = 1; t < r; t++)
                n = arguments[t], e[n] = v.bind(e[n], e);
            return e
        }, v.memoize = function(e, t) {
            var n = function(r) {
                var i = n.cache,
                    o = "" + (t ? t.apply(this, arguments) : r);
                return v.has(i, o) || (i[o] = e.apply(this, arguments)), i[o]
            };
            return n.cache = {}, n
        }, v.delay = function(e, t) {
            var n = b.call(arguments, 2);
            return setTimeout(function() {
                return e.apply(null, n)
            }, t)
        }, v.defer = v.partial(v.delay, v, 1), v.throttle = function(e, t, n) {
            var r,
                i,
                o,
                a = null,
                l = 0;
            n || (n = {});
            var u = function() {
                l = n.leading === !1 ? 0 : v.now(), a = null, o = e.apply(r, i), a || (r = i = null)
            };
            return function() {
                var s = v.now();
                l || n.leading !== !1 || (l = s);
                var c = t - (s - l);
                return r = this, i = arguments, c <= 0 || c > t ? (a && (clearTimeout(a), a = null), l = s, o = e.apply(r, i), a || (r = i = null)) : a || n.trailing === !1 || (a = setTimeout(u, c)), o
            }
        }, v.debounce = function(e, t, n) {
            var r,
                i,
                o,
                a,
                l,
                u = function() {
                    var s = v.now() - a;
                    s < t && s >= 0 ? r = setTimeout(u, t - s) : (r = null, n || (l = e.apply(o, i), r || (o = i = null)))
                };
            return function() {
                o = this, i = arguments, a = v.now();
                var s = n && !r;
                return r || (r = setTimeout(u, t)), s && (l = e.apply(o, i), o = i = null), l
            }
        }, v.wrap = function(e, t) {
            return v.partial(t, e)
        }, v.negate = function(e) {
            return function() {
                return !e.apply(this, arguments)
            }
        }, v.compose = function() {
            var e = arguments,
                t = e.length - 1;
            return function() {
                for (var n = t, r = e[t].apply(this, arguments); n--;)
                    r = e[n].call(this, r);
                return r
            }
        }, v.after = function(e, t) {
            return function() {
                if (--e < 1)
                    return t.apply(this, arguments)
            }
        }, v.before = function(e, t) {
            var n;
            return function() {
                return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n
            }
        }, v.once = v.partial(v.before, 2);
        var L = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            V = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
        v.keys = function(e) {
            if (!v.isObject(e))
                return [];
            if (p)
                return p(e);
            var t = [];
            for (var n in e)
                v.has(e, n) && t.push(n);
            return L && l(e, t), t
        }, v.allKeys = function(e) {
            if (!v.isObject(e))
                return [];
            var t = [];
            for (var n in e)
                t.push(n);
            return L && l(e, t), t
        }, v.values = function(e) {
            for (var t = v.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++)
                r[i] = e[t[i]];
            return r
        }, v.mapObject = function(e, t, n) {
            t = H(t, n);
            for (var r, i = v.keys(e), o = i.length, a = {}, l = 0; l < o; l++)
                r = i[l], a[r] = t(e[r], r, e);
            return a
        }, v.pairs = function(e) {
            for (var t = v.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++)
                r[i] = [t[i], e[t[i]]];
            return r
        }, v.invert = function(e) {
            for (var t = {}, n = v.keys(e), r = 0, i = n.length; r < i; r++)
                t[e[n[r]]] = n[r];
            return t
        }, v.functions = v.methods = function(e) {
            var t = [];
            for (var n in e)
                v.isFunction(e[n]) && t.push(n);
            return t.sort()
        }, v.extend = y(v.allKeys), v.extendOwn = v.assign = y(v.keys), v.findKey = function(e, t, n) {
            t = H(t, n);
            for (var r, i = v.keys(e), o = 0, a = i.length; o < a; o++)
                if (r = i[o], t(e[r], r, e))
                    return r
        }, v.pick = function(e, t, n) {
            var r,
                i,
                o = {},
                a = e;
            if (null == a)
                return o;
            v.isFunction(t) ? (i = v.allKeys(a), r = m(t, n)) : (i = D(arguments, !1, !1, 1), r = function(e, t, n) {
                return t in n
            }, a = Object(a));
            for (var l = 0, u = i.length; l < u; l++) {
                var s = i[l],
                    c = a[s];
                r(c, s, a) && (o[s] = c)
            }
            return o
        }, v.omit = function(e, t, n) {
            if (v.isFunction(t))
                t = v.negate(t);
            else {
                var r = v.map(D(arguments, !1, !1, 1), String);
                t = function(e, t) {
                    return !v.contains(r, t)
                }
            }
            return v.pick(e, t, n)
        }, v.defaults = y(v.allKeys, !0), v.create = function(e, t) {
            var n = B(e);
            return t && v.extendOwn(n, t), n
        }, v.clone = function(e) {
            return v.isObject(e) ? v.isArray(e) ? e.slice() : v.extend({}, e) : e
        }, v.tap = function(e, t) {
            return t(e), e
        }, v.isMatch = function(e, t) {
            var n = v.keys(t),
                r = n.length;
            if (null == e)
                return !r;
            for (var i = Object(e), o = 0; o < r; o++) {
                var a = n[o];
                if (t[a] !== i[a] || !(a in i))
                    return !1
            }
            return !0
        };
        var N = function(e, t, n, r) {
            if (e === t)
                return 0 !== e || 1 / e === 1 / t;
            if (null == e || null == t)
                return e === t;
            e instanceof v && (e = e._wrapped), t instanceof v && (t = t._wrapped);
            var i = d.call(e);
            if (i !== d.call(t))
                return !1;
            switch (i) {
            case "[object RegExp]":
            case "[object String]":
                return "" + e == "" + t;
            case "[object Number]":
                return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e === +t
            }
            var o = "[object Array]" === i;
            if (!o) {
                if ("object" != typeof e || "object" != typeof t)
                    return !1;
                var a = e.constructor,
                    l = t.constructor;
                if (a !== l && !(v.isFunction(a) && a instanceof a && v.isFunction(l) && l instanceof l) && "constructor" in e && "constructor" in t)
                    return !1
            }
            n = n || [], r = r || [];
            for (var u = n.length; u--;)
                if (n[u] === e)
                    return r[u] === t;
            if (n.push(e), r.push(t), o) {
                if (u = e.length, u !== t.length)
                    return !1;
                for (; u--;)
                    if (!N(e[u], t[u], n, r))
                        return !1
            } else {
                var s,
                    c = v.keys(e);
                if (u = c.length, v.keys(t).length !== u)
                    return !1;
                for (; u--;)
                    if (s = c[u], !v.has(t, s) || !N(e[s], t[s], n, r))
                        return !1
            }
            return n.pop(), r.pop(), !0
        };
        v.isEqual = function(e, t) {
            return N(e, t)
        }, v.isEmpty = function(e) {
            return null == e || (I(e) && (v.isArray(e) || v.isString(e) || v.isArguments(e)) ? 0 === e.length : 0 === v.keys(e).length)
        }, v.isElement = function(e) {
            return !(!e || 1 !== e.nodeType)
        }, v.isArray = A || function(e) {
            return "[object Array]" === d.call(e)
        }, v.isObject = function(e) {
            var t = typeof e;
            return "function" === t || "object" === t && !!e
        }, v.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) {
            v["is" + e] = function(t) {
                return d.call(t) === "[object " + e + "]"
            }
        }), v.isArguments(arguments) || (v.isArguments = function(e) {
            return v.has(e, "callee")
        }), "function" != typeof /./ && "object" != typeof Int8Array && (v.isFunction = function(e) {
            return "function" == typeof e || !1
        }), v.isFinite = function(e) {
            return isFinite(e) && !isNaN(parseFloat(e))
        }, v.isNaN = function(e) {
            return v.isNumber(e) && e !== +e
        }, v.isBoolean = function(e) {
            return e === !0 || e === !1 || "[object Boolean]" === d.call(e)
        }, v.isNull = function(e) {
            return null === e
        }, v.isUndefined = function(e) {
            return void 0 === e
        }, v.has = function(e, t) {
            return null != e && P.call(e, t)
        }, v.noConflict = function() {
            return u._ = s, this
        }, v.identity = function(e) {
            return e
        }, v.constant = function(e) {
            return function() {
                return e
            }
        }, v.noop = function() {}, v.property = g, v.propertyOf = function(e) {
            return null == e ? function() {} : function(t) {
                return e[t]
            }
        }, v.matcher = v.matches = function(e) {
            return e = v.extendOwn({}, e), function(t) {
                return v.isMatch(t, e)
            }
        }, v.times = function(e, t, n) {
            var r = Array(Math.max(0, e));
            t = m(t, n, 1);
            for (var i = 0; i < e; i++)
                r[i] = t(i);
            return r
        }, v.random = function(e, t) {
            return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
        }, v.now = Date.now || function() {
            return (new Date).getTime()
        };
        var _ = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            R = v.invert(_),
            k = function(e) {
                var t = function(t) {
                        return e[t]
                    },
                    n = "(?:" + v.keys(e).join("|") + ")",
                    r = RegExp(n),
                    i = RegExp(n, "g");
                return function(e) {
                    return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e
                }
            };
        v.escape = k(_), v.unescape = k(R), v.result = function(e, t, n) {
            var r = null == e ? void 0 : e[t];
            return void 0 === r && (r = n), v.isFunction(r) ? r.call(e) : r
        };
        var x = 0;
        v.uniqueId = function(e) {
            var t = ++x + "";
            return e ? e + t : t
        }, v.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var F = /(.)^/,
            X = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            W = /\\|'|\r|\n|\u2028|\u2029/g,
            K = function(e) {
                return "\\" + X[e]
            };
        v.template = function(e, t, n) {
            !t && n && (t = n), t = v.defaults({}, t, v.templateSettings);
            var r = RegExp([(t.escape || F).source, (t.interpolate || F).source, (t.evaluate || F).source].join("|") + "|$", "g"),
                i = 0,
                o = "__p+='";
            e.replace(r, function(t, n, r, a, l) {
                return o += e.slice(i, l).replace(W, K), i = l + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : a && (o += "';\n" + a + "\n__p+='"), t
            }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
            try {
                var a = new Function(t.variable || "obj", "_", o)
            } catch (e) {
                throw e.source = o, e
            }
            var l = function(e) {
                    return a.call(this, e, v)
                },
                u = t.variable || "obj";
            return l.source = "function(" + u + "){\n" + o + "}", l
        }, v.chain = function(e) {
            var t = v(e);
            return t._chain = !0, t
        };
        var U = function(e, t) {
            return e._chain ? v(t).chain() : t
        };
        v.mixin = function(e) {
            v.each(v.functions(e), function(t) {
                var n = v[t] = e[t];
                v.prototype[t] = function() {
                    var e = [this._wrapped];
                    return f.apply(e, arguments), U(this, n.apply(v, e))
                }
            })
        }, v.mixin(v), v.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
            var t = c[e];
            v.prototype[e] = function() {
                var n = this._wrapped;
                return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], U(this, n)
            }
        }), v.each(["concat", "join", "slice"], function(e) {
            var t = c[e];
            v.prototype[e] = function() {
                return U(this, t.apply(this._wrapped, arguments))
            }
        }), v.prototype.value = function() {
            return this._wrapped
        }, v.prototype.valueOf = v.prototype.toJSON = v.prototype.value, v.prototype.toString = function() {
            return "" + this._wrapped
        }, r = [], i = function() {
            return v
        }.apply(t, r), !(void 0 !== i && (e.exports = i))
    }).call(this)
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        a = n(1),
        l = r(a),
        u = n(4),
        s = r(u),
        c = n(25),
        T = r(c);
    n(28);
    var S = function() {
        function e() {
            var t = this;
            i(this, e), this.animating = !1, this._dirty = !0, this.currentScroll = function() {
                return t._dirty ? (t._dirty = !1, t._scrollTop = document.scrollingElement.scrollTop) : t._scrollTop
            }, this.onScroll = function() {
                t._dirty = !0, t.emit("scroll")
            }, this.freeze = function() {
                document.scrollingElement.style.overflow = "hidden"
            }, this.unfreeze = function() {
                document.scrollingElement.style.overflow = "auto"
            }, (0, T.default)(this), this.addEvents()
        }
        return o(e, [{
            key: "addEvents",
            value: function() {
                window.addEventListener("scroll", l.default.throttle(this.onScroll, 250))
            }
        }, {
            key: "scrollTo",
            value: function(e) {
                var t = this,
                    n = e.getBoundingClientRect().top + this.currentScroll();
                this.animating = !0, (0, s.default)({
                    duration: 1200,
                    targets: document.scrollingElement,
                    scrollTop: n,
                    easing: "easeInOutQuart",
                    complete: function() {
                        return t.animating = !1
                    }
                })
            }
        }]), e
    }();
    t.default = new S
}, function(e, t, n) {
    "use strict";
    var r = n(11)();
    e.exports = function(e) {
        return e !== r && null !== e
    }
}, function(e, t, n) {
    var r,
        i,
        o;
    (function(n) {
        var a = {
            scope: {}
        };
        a.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, n) {
            if (n.get || n.set)
                throw new TypeError("ES3 does not support getters and setters.");
            e != Array.prototype && e != Object.prototype && (e[t] = n.value)
        }, a.getGlobal = function(e) {
            return "undefined" != typeof window && window === e ? e : "undefined" != typeof n && null != n ? n : e
        }, a.global = a.getGlobal(this), a.SYMBOL_PREFIX = "jscomp_symbol_", a.initSymbol = function() {
            a.initSymbol = function() {}, a.global.Symbol || (a.global.Symbol = a.Symbol)
        }, a.symbolCounter_ = 0, a.Symbol = function(e) {
            return a.SYMBOL_PREFIX + (e || "") + a.symbolCounter_++
        }, a.initSymbolIterator = function() {
            a.initSymbol();
            var e = a.global.Symbol.iterator;
            e || (e = a.global.Symbol.iterator = a.global.Symbol("iterator")), "function" != typeof Array.prototype[e] && a.defineProperty(Array.prototype, e, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return a.arrayIterator(this)
                }
            }), a.initSymbolIterator = function() {}
        }, a.arrayIterator = function(e) {
            var t = 0;
            return a.iteratorPrototype(function() {
                return t < e.length ? {
                    done: !1,
                    value: e[t++]
                } : {
                    done: !0
                }
            })
        }, a.iteratorPrototype = function(e) {
            return a.initSymbolIterator(), e = {
                next: e
            }, e[a.global.Symbol.iterator] = function() {
                return this
            }, e
        }, a.array = a.array || {}, a.iteratorFromArray = function(e, t) {
            a.initSymbolIterator(), e instanceof String && (e += "");
            var n = 0,
                r = {
                    next: function() {
                        if (n < e.length) {
                            var i = n++;
                            return {
                                value: t(i, e[i]),
                                done: !1
                            }
                        }
                        return r.next = function() {
                            return {
                                done: !0,
                                value: void 0
                            }
                        }, r.next()
                    }
                };
            return r[Symbol.iterator] = function() {
                return r
            }, r
        }, a.polyfill = function(e, t, n, r) {
            if (t) {
                for (n = a.global, e = e.split("."), r = 0; r < e.length - 1; r++) {
                    var i = e[r];
                    i in n || (n[i] = {}), n = n[i]
                }
                e = e[e.length - 1], r = n[e], t = t(r), t != r && null != t && a.defineProperty(n, e, {
                    configurable: !0,
                    writable: !0,
                    value: t
                })
            }
        }, a.polyfill("Array.prototype.keys", function(e) {
            return e ? e : function() {
                return a.iteratorFromArray(this, function(e) {
                    return e
                })
            }
        }, "es6-impl", "es3");
        var l = this;
        !function(n, a) {
            i = [], r = a, o = "function" == typeof r ? r.apply(t, i) : r, !(void 0 !== o && (e.exports = o))
        }(this, function() {
            function e(e) {
                if (!R.col(e))
                    try {
                        return document.querySelectorAll(e)
                    } catch (e) {}
            }
            function t(e, t) {
                for (var n = e.length, r = 2 <= arguments.length ? arguments[1] : void 0, i = [], o = 0; o < n; o++)
                    if (o in e) {
                        var a = e[o];
                        t.call(r, a, o, e) && i.push(a)
                    }
                return i
            }
            function n(e) {
                return e.reduce(function(e, t) {
                    return e.concat(R.arr(t) ? n(t) : t)
                }, [])
            }
            function r(t) {
                return R.arr(t) ? t : (R.str(t) && (t = e(t) || t), t instanceof NodeList || t instanceof HTMLCollection ? [].slice.call(t) : [t])
            }
            function i(e, t) {
                return e.some(function(e) {
                    return e === t
                })
            }
            function o(e) {
                var t,
                    n = {};
                for (t in e)
                    n[t] = e[t];
                return n
            }
            function a(e, t) {
                var n,
                    r = o(e);
                for (n in e)
                    r[n] = t.hasOwnProperty(n) ? t[n] : e[n];
                return r
            }
            function u(e, t) {
                var n,
                    r = o(e);
                for (n in t)
                    r[n] = R.und(e[n]) ? t[n] : e[n];
                return r
            }
            function s(e) {
                e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, r) {
                    return t + t + n + n + r + r
                });
                var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                e = parseInt(t[1], 16);
                var n = parseInt(t[2], 16),
                    t = parseInt(t[3], 16);
                return "rgba(" + e + "," + n + "," + t + ",1)"
            }
            function c(e) {
                function t(e, t, n) {
                    return 0 > n && (n += 1), 1 < n && --n, n < 1 / 6 ? e + 6 * (t - e) * n : .5 > n ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
                }
                var n = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e);
                e = parseInt(n[1]) / 360;
                var r = parseInt(n[2]) / 100,
                    i = parseInt(n[3]) / 100,
                    n = n[4] || 1;
                if (0 == r)
                    i = r = e = i;
                else {
                    var o = .5 > i ? i * (1 + r) : i + r - i * r,
                        a = 2 * i - o,
                        i = t(a, o, e + 1 / 3),
                        r = t(a, o, e);
                    e = t(a, o, e - 1 / 3)
                }
                return "rgba(" + 255 * i + "," + 255 * r + "," + 255 * e + "," + n + ")"
            }
            function T(e) {
                if (e = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e))
                    return e[2]
            }
            function S(e) {
                return -1 < e.indexOf("translate") || "perspective" === e ? "px" : -1 < e.indexOf("rotate") || -1 < e.indexOf("skew") ? "deg" : void 0
            }
            function f(e, t) {
                return R.fnc(e) ? e(t.target, t.id, t.total) : e
            }
            function b(e, t) {
                if (t in e.style)
                    return getComputedStyle(e).getPropertyValue(t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0"
            }
            function d(e, t) {
                return R.dom(e) && i(_, t) ? "transform" : R.dom(e) && (e.getAttribute(t) || R.svg(e) && e[t]) ? "attribute" : R.dom(e) && "transform" !== t && b(e, t) ? "css" : null != e[t] ? "object" : void 0
            }
            function P(e, n) {
                var r = S(n),
                    r = -1 < n.indexOf("scale") ? 1 : 0 + r;
                if (e = e.style.transform, !e)
                    return r;
                for (var i = [], o = [], a = [], l = /(\w+)\((.+?)\)/g; i = l.exec(e);)
                    o.push(i[1]), a.push(i[2]);
                return e = t(a, function(e, t) {
                    return o[t] === n
                }), e.length ? e[0] : r
            }
            function A(e, t) {
                switch (d(e, t)) {
                case "transform":
                    return P(e, t);
                case "css":
                    return b(e, t);
                case "attribute":
                    return e.getAttribute(t)
                }
                return e[t] || 0
            }
            function p(e, t) {
                var n = /^(\*=|\+=|-=)/.exec(e);
                if (!n)
                    return e;
                var r = T(e) || 0;
                switch (t = parseFloat(t), e = parseFloat(e.replace(n[0], "")), n[0][0]) {
                case "+":
                    return t + e + r;
                case "-":
                    return t - e + r;
                case "*":
                    return t * e + r
                }
            }
            function h(e, t) {
                return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
            }
            function M(e) {
                e = e.points;
                for (var t, n = 0, r = 0; r < e.numberOfItems; r++) {
                    var i = e.getItem(r);
                    0 < r && (n += h(t, i)), t = i
                }
                return n
            }
            function G(e) {
                if (e.getTotalLength)
                    return e.getTotalLength();
                switch (e.tagName.toLowerCase()) {
                case "circle":
                    return 2 * Math.PI * e.getAttribute("r");
                case "rect":
                    return 2 * e.getAttribute("width") + 2 * e.getAttribute("height");
                case "line":
                    return h({
                        x: e.getAttribute("x1"),
                        y: e.getAttribute("y1")
                    }, {
                        x: e.getAttribute("x2"),
                        y: e.getAttribute("y2")
                    });
                case "polyline":
                    return M(e);
                case "polygon":
                    var t = e.points;
                    return M(e) + h(t.getItem(t.numberOfItems - 1), t.getItem(0))
                }
            }
            function v(e, t) {
                function n(n) {
                    return n = void 0 === n ? 0 : n, e.el.getPointAtLength(1 <= t + n ? t + n : 0)
                }
                var r = n(),
                    i = n(-1),
                    o = n(1);
                switch (e.property) {
                case "x":
                    return r.x;
                case "y":
                    return r.y;
                case "angle":
                    return 180 * Math.atan2(o.y - i.y, o.x - i.x) / Math.PI
                }
            }
            function m(e, t) {
                var n,
                    r = /-?\d*\.?\d+/g;
                if (n = R.pth(e) ? e.totalLength : e, R.col(n))
                    if (R.rgb(n)) {
                        var i = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);
                        n = i ? "rgba(" + i[1] + ",1)" : n
                    } else
                        n = R.hex(n) ? s(n) : R.hsl(n) ? c(n) : void 0;
                else
                    i = (i = T(n)) ? n.substr(0, n.length - i.length) : n, n = t && !/\s/g.test(n) ? i + t : i;
                return n += "", {
                    original: n,
                    numbers: n.match(r) ? n.match(r).map(Number) : [0],
                    strings: R.str(e) || t ? n.split(r) : []
                }
            }
            function H(e) {
                return e = e ? n(R.arr(e) ? e.map(r) : r(e)) : [], t(e, function(e, t, n) {
                    return n.indexOf(e) === t
                })
            }
            function y(e) {
                var t = H(e);
                return t.map(function(e, n) {
                    return {
                        target: e,
                        id: n,
                        total: t.length
                    }
                })
            }
            function B(e, t) {
                var n = o(t);
                if (R.arr(e)) {
                    var i = e.length;
                    2 !== i || R.obj(e[0]) ? R.fnc(t.duration) || (n.duration = t.duration / i) : e = {
                        value: e
                    }
                }
                return r(e).map(function(e, n) {
                    return n = n ? 0 : t.delay, e = R.obj(e) && !R.pth(e) ? e : {
                        value: e
                    }, R.und(e.delay) && (e.delay = n), e
                }).map(function(e) {
                    return u(e, n)
                })
            }
            function g(e, t) {
                var n,
                    r = {};
                for (n in e) {
                    var i = f(e[n], t);
                    R.arr(i) && (i = i.map(function(e) {
                        return f(e, t)
                    }), 1 === i.length && (i = i[0])), r[n] = i
                }
                return r.duration = parseFloat(r.duration), r.delay = parseFloat(r.delay), r
            }
            function E(e) {
                return R.arr(e) ? k.apply(this, e) : x[e]
            }
            function C(e, t) {
                var n;
                return e.tweens.map(function(r) {
                    r = g(r, t);
                    var i = r.value,
                        o = A(t.target, e.name),
                        a = n ? n.to.original : o,
                        a = R.arr(i) ? i[0] : a,
                        l = p(R.arr(i) ? i[1] : i, a),
                        o = T(l) || T(a) || T(o);
                    return r.from = m(a, o), r.to = m(l, o), r.start = n ? n.end : e.offset, r.end = r.start + r.delay + r.duration, r.easing = E(r.easing), r.elasticity = (1e3 - Math.min(Math.max(r.elasticity, 1), 999)) / 1e3, r.isPath = R.pth(i), r.isColor = R.col(r.from.original), r.isColor && (r.round = 1), n = r
                })
            }
            function I(e, r) {
                return t(n(e.map(function(e) {
                    return r.map(function(t) {
                        var n = d(e.target, t.name);
                        if (n) {
                            var r = C(t, e);
                            t = {
                                type: n,
                                property: t.name,
                                animatable: e,
                                tweens: r,
                                duration: r[r.length - 1].end,
                                delay: r[0].delay
                            }
                        } else
                            t = void 0;
                        return t
                    })
                })), function(e) {
                    return !R.und(e)
                })
            }
            function w(e, t, n, r) {
                var i = "delay" === e;
                return t.length ? (i ? Math.min : Math.max).apply(Math, t.map(function(t) {
                    return t[e]
                })) : i ? r.delay : n.offset + r.delay + r.duration
            }
            function D(e) {
                var t,
                    n = a(V, e),
                    r = a(N, e),
                    i = y(e.targets),
                    o = [],
                    l = u(n, r);
                for (t in e)
                    l.hasOwnProperty(t) || "targets" === t || o.push({
                        name: t,
                        offset: l.offset,
                        tweens: B(e[t], r)
                    });
                return e = I(i, o), u(n, {
                    children: [],
                    animatables: i,
                    animations: e,
                    duration: w("duration", e, n, r),
                    delay: w("delay", e, n, r)
                })
            }
            function O(e) {
                function n() {
                    return window.Promise && new Promise(function(e) {
                            return T = e
                        })
                }
                function r(e) {
                    return f.reversed ? f.duration - e : e
                }
                function i(e) {
                    for (var n = 0, r = {}, i = f.animations, o = i.length; n < o;) {
                        var a = i[n],
                            l = a.animatable,
                            u = a.tweens,
                            s = u.length - 1,
                            c = u[s];
                        s && (c = t(u, function(t) {
                            return e < t.end
                        })[0] || c);
                        for (var u = Math.min(Math.max(e - c.start - c.delay, 0), c.duration) / c.duration, T = isNaN(u) ? 1 : c.easing(u, c.elasticity), u = c.to.strings, S = c.round, s = [], d = void 0, d = c.to.numbers.length, P = 0; P < d; P++) {
                            var A = void 0,
                                A = c.to.numbers[P],
                                p = c.from.numbers[P],
                                A = c.isPath ? v(c.value, T * A) : p + T * (A - p);
                            S && (c.isColor && 2 < P || (A = Math.round(A * S) / S)), s.push(A)
                        }
                        if (c = u.length)
                            for (d = u[0], T = 0; T < c; T++)
                                S = u[T + 1], P = s[T], isNaN(P) || (d = S ? d + (P + S) : d + (P + " "));
                        else
                            d = s[0];
                        F[a.type](l.target, a.property, d, r, l.id), a.currentValue = d, n++
                    }
                    if (n = Object.keys(r).length)
                        for (i = 0; i < n; i++)
                            L || (L = b(document.body, "transform") ? "transform" : "-webkit-transform"), f.animatables[i].target.style[L] = r[i].join(" ");
                    f.currentTime = e, f.progress = e / f.duration * 100
                }
                function o(e) {
                    f[e] && f[e](f)
                }
                function a() {
                    f.remaining && !0 !== f.remaining && f.remaining--
                }
                function l(e) {
                    var t = f.duration,
                        l = f.offset,
                        b = l + f.delay,
                        d = f.currentTime,
                        P = f.reversed,
                        A = r(e);
                    if (f.children.length) {
                        var p = f.children,
                            h = p.length;
                        if (A >= f.currentTime)
                            for (var M = 0; M < h; M++)
                                p[M].seek(A);
                        else
                            for (; h--;)
                                p[h].seek(A)
                    }
                    (A >= b || !t) && (f.began || (f.began = !0, o("begin")), o("run")), A > l && A < t ? i(A) : (A <= l && 0 !== d && (i(0), P && a()), (A >= t && d !== t || !t) && (i(t), P || a())), o("update"), e >= t && (f.remaining ? (s = u, "alternate" === f.direction && (f.reversed = !f.reversed)) : (f.pause(), f.completed || (f.completed = !0, o("complete"), "Promise" in window && (T(), S = n()))), c = 0)
                }
                e = void 0 === e ? {} : e;
                var u,
                    s,
                    c = 0,
                    T = null,
                    S = n(),
                    f = D(e);
                return f.reset = function() {
                    var e = f.direction,
                        t = f.loop;
                    for (f.currentTime = 0, f.progress = 0, f.paused = !0, f.began = !1, f.completed = !1, f.reversed = "reverse" === e, f.remaining = "alternate" === e && 1 === t ? 2 : t, i(0), e = f.children.length; e--;)
                        f.children[e].reset()
                }, f.tick = function(e) {
                    u = e, s || (s = u), l((c + u - s) * O.speed)
                }, f.seek = function(e) {
                    l(r(e))
                }, f.pause = function() {
                    var e = X.indexOf(f);
                    -1 < e && X.splice(e, 1), f.paused = !0
                }, f.play = function() {
                    f.paused && (f.paused = !1, s = 0, c = r(f.currentTime), X.push(f), W || K())
                }, f.reverse = function() {
                    f.reversed = !f.reversed, s = 0, c = r(f.currentTime)
                }, f.restart = function() {
                    f.pause(), f.reset(), f.play()
                }, f.finished = S, f.reset(), f.autoplay && f.play(), f
            }
            var L,
                V = {
                    update: void 0,
                    begin: void 0,
                    run: void 0,
                    complete: void 0,
                    loop: 1,
                    direction: "normal",
                    autoplay: !0,
                    offset: 0
                },
                N = {
                    duration: 1e3,
                    delay: 0,
                    easing: "easeOutElastic",
                    elasticity: 500,
                    round: 0
                },
                _ = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),
                R = {
                    arr: function(e) {
                        return Array.isArray(e)
                    },
                    obj: function(e) {
                        return -1 < Object.prototype.toString.call(e).indexOf("Object")
                    },
                    pth: function(e) {
                        return R.obj(e) && e.hasOwnProperty("totalLength")
                    },
                    svg: function(e) {
                        return e instanceof SVGElement
                    },
                    dom: function(e) {
                        return e.nodeType || R.svg(e)
                    },
                    str: function(e) {
                        return "string" == typeof e
                    },
                    fnc: function(e) {
                        return "function" == typeof e
                    },
                    und: function(e) {
                        return "undefined" == typeof e
                    },
                    hex: function(e) {
                        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)
                    },
                    rgb: function(e) {
                        return /^rgb/.test(e)
                    },
                    hsl: function(e) {
                        return /^hsl/.test(e)
                    },
                    col: function(e) {
                        return R.hex(e) || R.rgb(e) || R.hsl(e)
                    }
                },
                k = function() {
                    function e(e, t, n) {
                        return (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
                    }
                    return function(t, n, r, i) {
                        if (0 <= t && 1 >= t && 0 <= r && 1 >= r) {
                            var o = new Float32Array(11);
                            if (t !== n || r !== i)
                                for (var a = 0; 11 > a; ++a)
                                    o[a] = e(.1 * a, t, r);
                            return function(a) {
                                if (t === n && r === i)
                                    return a;
                                if (0 === a)
                                    return 0;
                                if (1 === a)
                                    return 1;
                                for (var l = 0, u = 1; 10 !== u && o[u] <= a; ++u)
                                    l += .1;
                                --u;
                                var u = l + (a - o[u]) / (o[u + 1] - o[u]) * .1,
                                    s = 3 * (1 - 3 * r + 3 * t) * u * u + 2 * (3 * r - 6 * t) * u + 3 * t;
                                if (.001 <= s) {
                                    for (l = 0; 4 > l && (s = 3 * (1 - 3 * r + 3 * t) * u * u + 2 * (3 * r - 6 * t) * u + 3 * t, 0 !== s); ++l)
                                        var c = e(u, t, r) - a,
                                            u = u - c / s;
                                    a = u
                                } else if (0 === s)
                                    a = u;
                                else {
                                    var u = l,
                                        l = l + .1,
                                        T = 0;
                                    do c = u + (l - u) / 2, s = e(c, t, r) - a, 0 < s ? l = c : u = c;
                                    while (1e-7 < Math.abs(s) && 10 > ++T);
                                    a = c
                                }
                                return e(a, n, i)
                            }
                        }
                    }
                }(),
                x = function() {
                    function e(e, t) {
                        return 0 === e || 1 === e ? e : -Math.pow(2, 10 * (e - 1)) * Math.sin(2 * (e - 1 - t / (2 * Math.PI) * Math.asin(1)) * Math.PI / t)
                    }
                    var t,
                        n = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),
                        r = {
                            In: [[.55, .085, .68, .53], [.55, .055, .675, .19], [.895, .03, .685, .22], [.755, .05, .855, .06], [.47, 0, .745, .715], [.95, .05, .795, .035], [.6, .04, .98, .335], [.6, -.28, .735, .045], e],
                            Out: [[.25, .46, .45, .94], [.215, .61, .355, 1], [.165, .84, .44, 1], [.23, 1, .32, 1], [.39, .575, .565, 1], [.19, 1, .22, 1], [.075, .82, .165, 1], [.175, .885, .32, 1.275], function(t, n) {
                                return 1 - e(1 - t, n)
                            }],
                            InOut: [[.455, .03, .515, .955], [.645, .045, .355, 1], [.77, 0, .175, 1], [.86, 0, .07, 1], [.445, .05, .55, .95], [1, 0, 0, 1], [.785, .135, .15, .86], [.68, -.55, .265, 1.55], function(t, n) {
                                return .5 > t ? e(2 * t, n) / 2 : 1 - e(-2 * t + 2, n) / 2
                            }]
                        },
                        i = {
                            linear: k(.25, .25, .75, .75)
                        },
                        o = {};
                    for (t in r)
                        o.type = t, r[o.type].forEach(function(e) {
                            return function(t, r) {
                                i["ease" + e.type + n[r]] = R.fnc(t) ? t : k.apply(l, t)
                            }
                        }(o)), o = {
                            type: o.type
                        };
                    return i
                }(),
                F = {
                    css: function(e, t, n) {
                        return e.style[t] = n
                    },
                    attribute: function(e, t, n) {
                        return e.setAttribute(t, n)
                    },
                    object: function(e, t, n) {
                        return e[t] = n
                    },
                    transform: function(e, t, n, r, i) {
                        r[i] || (r[i] = []), r[i].push(t + "(" + n + ")")
                    }
                },
                X = [],
                W = 0,
                K = function() {
                    function e() {
                        W = requestAnimationFrame(t)
                    }
                    function t(t) {
                        var n = X.length;
                        if (n) {
                            for (var r = 0; r < n;)
                                X[r] && X[r].tick(t), r++;
                            e()
                        } else
                            cancelAnimationFrame(W), W = 0
                    }
                    return e
                }();
            return O.version = "2.2.0", O.speed = 1, O.running = X, O.remove = function(e) {
                e = H(e);
                for (var t = X.length; t--;)
                    for (var n = X[t], r = n.animations, o = r.length; o--;)
                        i(e, r[o].animatable.target) && (r.splice(o, 1), r.length || n.pause())
            }, O.getValue = A, O.path = function(t, n) {
                var r = R.str(t) ? e(t)[0] : t,
                    i = n || 100;
                return function(e) {
                    return {
                        el: r,
                        property: e,
                        totalLength: G(r) * (i / 100)
                    }
                }
            }, O.setDashoffset = function(e) {
                var t = G(e);
                return e.setAttribute("stroke-dasharray", t), t
            }, O.bezier = k, O.easings = x, O.timeline = function(e) {
                var t = O(e);
                return t.pause(), t.duration = 0, t.add = function(n) {
                    return t.children.forEach(function(e) {
                        e.began = !0, e.completed = !0
                    }), r(n).forEach(function(n) {
                        var r = u(n, a(N, e || {}));
                        r.targets = r.targets || e.targets, n = t.duration;
                        var i = r.offset;
                        r.autoplay = !1, r.direction = t.direction, r.offset = R.und(i) ? n : p(i, n), t.began = !0, t.completed = !0, t.seek(r.offset), r = O(r), r.began = !0, r.completed = !0, r.duration > n && (t.duration = r.duration), t.children.push(r)
                    }), t.seek(0), t.reset(), t.autoplay && t.restart(), t
                }, t
            }, O.random = function(e, t) {
                return Math.floor(Math.random() * (t - e + 1)) + e
            }, O
        })
    }).call(t, function() {
        return this
    }())
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        a = n(1),
        l = r(a),
        u = n(2),
        s = r(u),
        c = n(6),
        T = r(c),
        S = n(7),
        f = r(S),
        b = n(9),
        d = r(b),
        P = n(27),
        A = r(P),
        p = function() {
            function e() {
                var t = this;
                i(this, e), this.scrollToSection = function(e) {
                    var n = e.currentTarget,
                        r = t.el.querySelector(n.getAttribute("href"));
                    r && (s.default.scrollTo(r), e.preventDefault())
                }, this.onResize = function() {
                    T.default.onResize(), t.header.onResize()
                }, this.el = document.querySelector("#application"), T.default.start(), this.buildSections(), this.addEvents(), this.animateCover(), this.detectDevice()
            }
            return o(e, [{
                key: "detectDevice",
                value: function() {
                    var e = new A.default(navigator.userAgent);
                    document.body.classList.add((e.mobile() ? "" : "no-") + "mobile")
                }
            }, {
                key: "animateCover",
                value: function() {
                    var e = this.el.querySelector("#cover");
                    setTimeout(function() {
                        return e.classList.add("show")
                    }, 1e3), setTimeout(function() {
                        return e.classList.add("hide")
                    }, 3e3)
                }
            }, {
                key: "buildSections",
                value: function() {
                    this.header = new f.default(this.el.querySelector("#header")), this.projectList = new d.default(this.el.querySelector("#project-list"))
                }
            }, {
                key: "addEvents",
                value: function() {
                    var e = this;
                    window.addEventListener("resize", this.onResize);
                    var t = this.el.querySelectorAll(".scrollto");
                    l.default.each(t, function(t) {
                        return t.addEventListener("click", e.scrollToSection)
                    })
                }
            }]), e
        }();
    t.default = p
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        a = n(1),
        l = r(a),
        u = n(29),
        s = r(u),
        c = n(2),
        T = r(c),
        S = 1500,
        f = function() {
            function e() {
                var t = this;
                i(this, e), this.animating = !1, this.onScroll = function() {
                    if (!T.default.animating) {
                        var e = T.default.currentScroll() - S,
                            n = window.innerHeight + e + 2 * S;
                        l.default.each(t.imageInfos, function(t) {
                            var r = t.top > n || t.bottom < e;
                            t.hidden !== r && t.el.classList[(t.hidden = r) ? "add" : "remove"]("hidden")
                        })
                    }
                }, this.onResize = function() {
                    t.storeImagePosition(), t.onScroll()
                }
            }
            return o(e, [{
                key: "start",
                value: function() {
                    this.LazyLoader = new s.default({
                        elements_selector: ".lazy",
                        threshold: S
                    }), this.images = [].slice.call(document.querySelectorAll("img.lazy")), this.onResize(), T.default.on("scroll", this.onScroll)
                }
            }, {
                key: "storeImagePosition",
                value: function() {
                    var e = T.default.currentScroll();
                    this.imageInfos = l.default.map(this.images, function(t) {
                        var n = t.parentNode.getBoundingClientRect();
                        return {
                            el: t,
                            top: n.top + e,
                            bottom: n.bottom + e,
                            height: n.top - n.bottom
                        }
                    })
                }
            }]), e
        }();
    t.default = new f
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        a = n(1),
        l = r(a),
        u = n(2),
        s = r(u),
        c = n(8),
        T = r(c),
        S = function() {
            function e(t) {
                var n = this;
                i(this, e), this.lastScrollTop = 0, this.popinOpened = !1, this.currentSectionId = null, this.togglePopin = function(e) {
                    e.preventDefault();
                    var t = !n.popinOpened;
                    t ? (n.popinAbout.show(), s.default.freeze(), n.aboutButton.classList.add("opened")) : (n.popinAbout.hide(), s.default.unfreeze(), n.aboutButton.classList.remove("opened")), n.popinOpened = t, n.updateState(!0)
                }, this.updateState = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (!s.default.animating) {
                        var t = s.default.currentScroll(),
                            r = n.popinOpened ? n.sectionInfos[0] : n.currentSectionInfo(t);
                        if (r) {
                            var i = function(e) {
                                    return e ? "add" : "remove"
                                },
                                o = "hide";
                            if (r.id != n.currentSectionId || e) {
                                var a = "header" != r.id,
                                    u = r.id.indexOf("project") > -1;
                                n.quickAccess.scrollDown.classList[i(a || n.popinOpened)](o), n.quickAccess.backToTop.classList[i(!a || n.popinOpened)](o), n.quickAccess.projects.classList[i(!u)](o || n.popinOpened), u && l.default.each(n.quickAccess.projectDots, function(e) {
                                    var t = e.classList.contains("dot-" + r.id);
                                    e.classList[i(t)]("current")
                                }), n.nav.style.color = r.color, n.quickAccess.projects.style.color = r.color, n.quickAccess.projects.style.borderColor = r.color, n.currentSectionId = r.id
                            }
                        }
                    }
                }, this.onResize = function() {
                    n.windowHeight = window.innerHeight, n.currentSectionId = null, n.storeSectionInfos(), n.updateState()
                }, this.sections = [].slice.call(t.parentNode.children), this.sections.shift(), this.aboutButton = t.querySelector(".about-button"), this.nav = t.querySelector("header"), this.el = t, this.quickAccess = {
                    backToTop: t.querySelector(".back-to-top"),
                    scrollDown: t.querySelector(".scroll-down"),
                    projects: t.querySelector(".project-dots"),
                    projectDots: [].slice.call(t.querySelectorAll(".project-dot"))
                }, this.aboutButton.addEventListener("click", this.togglePopin), this.duplicateAbout(), this.addEvents(), this.onResize()
            }
            return o(e, [{
                key: "duplicateAbout",
                value: function() {
                    var e = document.querySelector(".popin-about");
                    this.popinAbout = new T.default(e)
                }
            }, {
                key: "addEvents",
                value: function() {
                    s.default.on("scroll", this.updateState)
                }
            }, {
                key: "currentSectionInfo",
                value: function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
                    return l.default.find(this.sectionInfos, function(r) {
                        return r.bottom > e + t.windowHeight * n
                    })
                }
            }, {
                key: "storeSectionInfos",
                value: function() {
                    var e = s.default.currentScroll();
                    this.sectionInfos = l.default.map(this.sections, function(t) {
                        return {
                            id: t.getAttribute("id"),
                            bottom: t.getBoundingClientRect().bottom + e,
                            color: window.getComputedStyle(t, null).getPropertyValue("color")
                        }
                    })
                }
            }]), e
        }();
    t.default = S
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        a = n(4),
        l = r(a),
        u = "easeInOutQuart",
        s = 800,
        c = 0,
        T = function() {
            function e(t) {
                i(this, e), this.el = t, this.inner = t.querySelector(".inner-popin-about")
            }
            return o(e, [{
                key: "show",
                value: function() {
                    this.el.style.visibility = "visible", this.el.style.pointerEvents = "initial", this.inner.scrollTop = 0, (0, l.default)({
                        targets: this.el,
                        translateY: ["-100%", "0%"],
                        easing: u,
                        duration: s
                    }), (0, l.default)({
                        targets: this.inner,
                        translateY: ["100%", "0%"],
                        delay: c,
                        easing: u,
                        duration: s
                    })
                }
            }, {
                key: "hide",
                value: function() {
                    var e = this;
                    (0, l.default)({
                        targets: this.el,
                        translateY: "100%",
                        easing: u,
                        duration: s,
                        complete: function() {
                            e.el.style.pointerEvents = "none", e.el.style.visibility = "visible"
                        }
                    }), (0, l.default)({
                        targets: this.inner,
                        translateY: "-100%",
                        delay: c,
                        easing: u,
                        duration: s
                    })
                }
            }]), e
        }();
    t.default = T
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        a = n(1),
        l = r(a),
        u = function() {
            function e(t) {
                var n = this;
                i(this, e), this.onMouseEnter = function(e) {
                    var t = e.currentTarget;
                    n.el.style.color = t.getAttribute("data-color"), n.el.style.background = t.getAttribute("data-background")
                }, this.onMouseLeave = function() {
                    n.el.setAttribute("style", "")
                }, this.el = t, this.addEvents()
            }
            return o(e, [{
                key: "addEvents",
                value: function() {
                    var e = this,
                        t = this.el.querySelectorAll("ul li .scrollto");
                    l.default.each(t, function(t) {
                        t.addEventListener("mouseenter", e.onMouseEnter), t.addEventListener("mouseleave", e.onMouseLeave)
                    })
                }
            }]), e
        }();
    t.default = u
}, function(e, t, n) {
    "use strict";
    var r,
        i = n(12),
        o = n(19),
        a = n(15),
        l = n(22);
    r = e.exports = function(e, t) {
        var n,
            r,
            a,
            u,
            s;
        return arguments.length < 2 || "string" != typeof e ? (u = t, t = e, e = null) : u = arguments[2], null == e ? (n = a = !0, r = !1) : (n = l.call(e, "c"), r = l.call(e, "e"), a = l.call(e, "w")), s = {
            value: t,
            configurable: n,
            enumerable: r,
            writable: a
        }, u ? i(o(u), s) : s
    }, r.gs = function(e, t, n) {
        var r,
            u,
            s,
            c;
        return "string" != typeof e ? (s = n, n = t, t = e, e = null) : s = arguments[3], null == t ? t = void 0 : a(t) ? null == n ? n = void 0 : a(n) || (s = n, n = void 0) : (s = t, t = n = void 0), null == e ? (r = !0, u = !1) : (r = l.call(e, "c"), u = l.call(e, "e")), c = {
            get: t,
            set: n,
            configurable: r,
            enumerable: u
        }, s ? i(o(s), c) : c
    }
}, function(e, t) {
    "use strict";
    e.exports = function() {}
}, function(e, t, n) {
    "use strict";
    e.exports = n(13)() ? Object.assign : n(14)
}, function(e, t) {
    "use strict";
    e.exports = function() {
        var e,
            t = Object.assign;
        return "function" == typeof t && (e = {
                foo: "raz"
            }, t(e, {
                bar: "dwa"
            }, {
                trzy: "trzy"
            }), e.foo + e.bar + e.trzy === "razdwatrzy")
    }
}, function(e, t, n) {
    "use strict";
    var r = n(16),
        i = n(21),
        o = Math.max;
    e.exports = function(e, t) {
        var n,
            a,
            l,
            u = o(arguments.length, 2);
        for (e = Object(i(e)), l = function(r) {
            try {
                e[r] = t[r]
            } catch (e) {
                n || (n = e)
            }
        }, a = 1; a < u; ++a)
            t = arguments[a], r(t).forEach(l);
        if (void 0 !== n)
            throw n;
        return e
    }
}, function(e, t) {
    "use strict";
    e.exports = function(e) {
        return "function" == typeof e
    }
}, function(e, t, n) {
    "use strict";
    e.exports = n(17)() ? Object.keys : n(18)
}, function(e, t) {
    "use strict";
    e.exports = function() {
        try {
            return Object.keys("primitive"), !0
        } catch (e) {
            return !1
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(3),
        i = Object.keys;
    e.exports = function(e) {
        return i(r(e) ? Object(e) : e)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(3),
        i = Array.prototype.forEach,
        o = Object.create,
        a = function(e, t) {
            var n;
            for (n in e)
                t[n] = e[n]
        };
    e.exports = function(e) {
        var t = o(null);
        return i.call(arguments, function(e) {
            r(e) && a(Object(e), t)
        }), t
    }
}, function(e, t) {
    "use strict";
    e.exports = function(e) {
        if ("function" != typeof e)
            throw new TypeError(e + " is not a function");
        return e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(3);
    e.exports = function(e) {
        if (!r(e))
            throw new TypeError("Cannot use null or undefined");
        return e
    }
}, function(e, t, n) {
    "use strict";
    e.exports = n(23)() ? String.prototype.contains : n(24)
}, function(e, t) {
    "use strict";
    var n = "razdwatrzy";
    e.exports = function() {
        return "function" == typeof n.contains && (n.contains("dwa") === !0 && n.contains("foo") === !1)
    }
}, function(e, t) {
    "use strict";
    var n = String.prototype.indexOf;
    e.exports = function(e) {
        return n.call(this, e, arguments[1]) > -1
    }
}, function(e, t, n) {
    "use strict";
    var r,
        i,
        o,
        a,
        l,
        u,
        s,
        c = n(10),
        T = n(20),
        S = Function.prototype.apply,
        f = Function.prototype.call,
        b = Object.create,
        d = Object.defineProperty,
        P = Object.defineProperties,
        A = Object.prototype.hasOwnProperty,
        p = {
            configurable: !0,
            enumerable: !1,
            writable: !0
        };
    r = function(e, t) {
        var n;
        return T(t), A.call(this, "__ee__") ? n = this.__ee__ : (n = p.value = b(null), d(this, "__ee__", p), p.value = null), n[e] ? "object" == typeof n[e] ? n[e].push(t) : n[e] = [n[e], t] : n[e] = t, this
    }, i = function(e, t) {
        var n,
            i;
        return T(t), i = this, r.call(this, e, n = function() {
            o.call(i, e, n), S.call(t, this, arguments)
        }), n.__eeOnceListener__ = t, this
    }, o = function(e, t) {
        var n,
            r,
            i,
            o;
        if (T(t), !A.call(this, "__ee__"))
            return this;
        if (n = this.__ee__, !n[e])
            return this;
        if (r = n[e], "object" == typeof r)
            for (o = 0; i = r[o]; ++o)
                i !== t && i.__eeOnceListener__ !== t || (2 === r.length ? n[e] = r[o ? 0 : 1] : r.splice(o, 1));
        else
            r !== t && r.__eeOnceListener__ !== t || delete n[e];
        return this
    }, a = function(e) {
        var t,
            n,
            r,
            i,
            o;
        if (A.call(this, "__ee__") && (i = this.__ee__[e]))
            if ("object" == typeof i) {
                for (n = arguments.length, o = new Array(n - 1), t = 1; t < n; ++t)
                    o[t - 1] = arguments[t];
                for (i = i.slice(), t = 0; r = i[t]; ++t)
                    S.call(r, this, o)
            } else
                switch (arguments.length) {
                case 1:
                    f.call(i, this);
                    break;
                case 2:
                    f.call(i, this, arguments[1]);
                    break;
                case 3:
                    f.call(i, this, arguments[1], arguments[2]);
                    break;
                default:
                    for (n = arguments.length, o = new Array(n - 1), t = 1; t < n; ++t)
                        o[t - 1] = arguments[t];
                    S.call(i, this, o)
                }
    }, l = {
        on: r,
        once: i,
        off: o,
        emit: a
    }, u = {
        on: c(r),
        once: c(i),
        off: c(o),
        emit: c(a)
    }, s = P({}, u), e.exports = t = function(e) {
        return null == e ? b(s) : P(Object(e), u)
    }, t.methods = l
}, function(e, t) {}, function(e, t, n) {
    /*!mobile-detect v1.3.7 2017-09-06*/
    /*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
    !function(e, t) {
        e(function() {
            "use strict";
            function e(e, t) {
                return null != e && null != t && e.toLowerCase() === t.toLowerCase()
            }
            function n(e, t) {
                var n,
                    r,
                    i = e.length;
                if (!i || !t)
                    return !1;
                for (n = t.toLowerCase(), r = 0; r < i; ++r)
                    if (n === e[r].toLowerCase())
                        return !0;
                return !1
            }
            function r(e) {
                for (var t in e)
                    l.call(e, t) && (e[t] = new RegExp(e[t], "i"))
            }
            function i(e, t) {
                this.ua = e || "", this._cache = {}, this.maxPhoneWidth = t || 600
            }
            var o = {};
            o.mobileDetectRules = {
                phones: {
                    iPhone: "\\biPhone\\b|\\biPod\\b",
                    BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+",
                    HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m",
                    Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
                    Dell: "Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                    Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b",
                    Samsung: "\\bSamsung\\b|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C",
                    LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323)",
                    Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
                    Asus: "Asus.*Galaxy|PadFone.*Mobile",
                    NokiaLumia: "Lumia [0-9]{3,4}",
                    Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                    Palm: "PalmSource|Palm",
                    Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                    Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                    Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                    Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                    iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                    SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                    Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                    Alcatel: "Alcatel",
                    Nintendo: "Nintendo 3DS",
                    Amoi: "Amoi",
                    INQ: "INQ",
                    GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
                },
                tablets: {
                    iPad: "iPad|iPad.*Mobile",
                    NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
                    SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y",
                    Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
                    SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                    HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                    AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b",
                    BlackBerryTablet: "PlayBook|RIM Tablet",
                    HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                    MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                    NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                    AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
                    ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                    LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                    FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                    PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
                    LenovoTablet: "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)",
                    DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                    YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                    MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                    ArnovaTablet: "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                    IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                    IRUTablet: "M702pro",
                    MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                    EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                    AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                    ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                    AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                    NokiaLumiaTablet: "Lumia 2520",
                    SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|SOT31",
                    PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                    CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                    CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                    MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
                    MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                    SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                    RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                    FlyTablet: "IQ310|Fly Vision",
                    bqTablet: "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris [E|M]10)|Maxwell.*Lite|Maxwell.*Plus",
                    HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim",
                    NecTablet: "\\bN-06D|\\bN-08D",
                    PantechTablet: "Pantech.*P4100",
                    BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
                    VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                    ZyncTablet: "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
                    PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
                    NabiTablet: "Android.*\\bNabi",
                    KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                    DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                    TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                    PlaystationTablet: "Playstation.*(Portable|Vita)",
                    TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                    PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                    AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                    DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                    GalapadTablet: "Android.*\\bG1\\b",
                    MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                    KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                    AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                    PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                    YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                    ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                    GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
                    PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                    OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)",
                    HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                    DPSTablet: "DPS Dream 9|DPS Dual 7",
                    VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                    CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                    MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
                    ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
                    GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                    ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                    VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                    ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
                    StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                    VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497",
                    EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                    RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                    iMobileTablet: "i-mobile i-note",
                    TolinoTablet: "tolino tab [0-9.]+|tolino shine",
                    AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                    AMPETablet: "Android.* A78 ",
                    SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                    TecnoTablet: "TECNO P9",
                    JXDTablet: "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                    iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                    FX2Tablet: "FX2 PAD7|FX2 PAD10",
                    XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                    ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                    OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                    CaptivaTablet: "CAPTIVA PAD",
                    IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                    TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                    OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+",
                    JaytechTablet: "TPC-PA762",
                    BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
                    DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                    EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                    LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                    AocTablet: "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
                    MpmanTablet: "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
                    CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                    WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                    MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                    NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
                    NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                    LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
                    UbislateTablet: "UbiSlate[\\s]?7C",
                    PocketBookTablet: "Pocketbook",
                    KocasoTablet: "\\b(TB-1207)\\b",
                    HisenseTablet: "\\b(F5281|E2371)\\b",
                    Hudl: "Hudl HT7S3|Hudl 2",
                    TelstraTablet: "T-Hub2",
                    GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b"
                },
                oss: {
                    AndroidOS: "Android",
                    BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
                    PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                    SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                    WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
                    WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                    iOS: "\\biPhone.*Mobile|\\biPod|\\biPad",
                    MeeGoOS: "MeeGo",
                    MaemoOS: "Maemo",
                    JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
                    webOS: "webOS|hpwOS",
                    badaOS: "\\bBada\\b",
                    BREWOS: "BREW"
                },
                uas: {
                    Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
                    Dolfin: "\\bDolfin\\b",
                    Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+|Coast/[0-9.]+",
                    Skyfire: "Skyfire",
                    Edge: "Mobile Safari/[.0-9]* Edge",
                    IE: "IEMobile|MSIEMobile",
                    Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
                    Bolt: "bolt",
                    TeaShark: "teashark",
                    Blazer: "Blazer",
                    Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                    UCBrowser: "UC.*Browser|UCWEB",
                    baiduboxapp: "baiduboxapp",
                    baidubrowser: "baidubrowser",
                    DiigoBrowser: "DiigoBrowser",
                    Puffin: "Puffin",
                    Mercury: "\\bMercury\\b",
                    ObigoBrowser: "Obigo",
                    NetFront: "NF-Browser",
                    GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
                    PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon"
                },
                props: {
                    Mobile: "Mobile/[VER]",
                    Build: "Build/[VER]",
                    Version: "Version/[VER]",
                    VendorID: "VendorID/[VER]",
                    iPad: "iPad.*CPU[a-z ]+[VER]",
                    iPhone: "iPhone.*CPU[a-z ]+[VER]",
                    iPod: "iPod.*CPU[a-z ]+[VER]",
                    Kindle: "Kindle/[VER]",
                    Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
                    Coast: ["Coast/[VER]"],
                    Dolfin: "Dolfin/[VER]",
                    Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
                    Fennec: "Fennec/[VER]",
                    Edge: "Edge/[VER]",
                    IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
                    NetFront: "NetFront/[VER]",
                    NokiaBrowser: "NokiaBrowser/[VER]",
                    Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
                    "Opera Mini": "Opera Mini/[VER]",
                    "Opera Mobi": "Version/[VER]",
                    "UC Browser": "UC Browser[VER]",
                    MQQBrowser: "MQQBrowser/[VER]",
                    MicroMessenger: "MicroMessenger/[VER]",
                    baiduboxapp: "baiduboxapp/[VER]",
                    baidubrowser: "baidubrowser/[VER]",
                    SamsungBrowser: "SamsungBrowser/[VER]",
                    Iron: "Iron/[VER]",
                    Safari: ["Version/[VER]", "Safari/[VER]"],
                    Skyfire: "Skyfire/[VER]",
                    Tizen: "Tizen/[VER]",
                    Webkit: "webkit[ /][VER]",
                    PaleMoon: "PaleMoon/[VER]",
                    Gecko: "Gecko/[VER]",
                    Trident: "Trident/[VER]",
                    Presto: "Presto/[VER]",
                    Goanna: "Goanna/[VER]",
                    iOS: " \\bi?OS\\b [VER][ ;]{1}",
                    Android: "Android [VER]",
                    BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
                    BREW: "BREW [VER]",
                    Java: "Java/[VER]",
                    "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                    "Windows Phone": "Windows Phone [VER]",
                    "Windows CE": "Windows CE/[VER]",
                    "Windows NT": "Windows NT [VER]",
                    Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
                    webOS: ["webOS/[VER]", "hpwOS/[VER];"]
                },
                utils: {
                    Bot: "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",
                    MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
                    DesktopMode: "WPDesktop",
                    TV: "SonyDTV|HbbTV",
                    WebKit: "(webkit)[ /]([\\w.]+)",
                    Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",
                    Watch: "SM-V700"
                }
            }, o.detectMobileBrowsers = {
                fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                tabletPattern: /android|ipad|playbook|silk/i
            };
            var a,
                l = Object.prototype.hasOwnProperty;
            return o.FALLBACK_PHONE = "UnknownPhone", o.FALLBACK_TABLET = "UnknownTablet", o.FALLBACK_MOBILE = "UnknownMobile", a = "isArray" in Array ? Array.isArray : function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }, function() {
                var e,
                    t,
                    n,
                    i,
                    u,
                    s,
                    c = o.mobileDetectRules;
                for (e in c.props)
                    if (l.call(c.props, e)) {
                        for (t = c.props[e], a(t) || (t = [t]), u = t.length, i = 0; i < u; ++i)
                            n = t[i], s = n.indexOf("[VER]"), s >= 0 && (n = n.substring(0, s) + "([\\w._\\+]+)" + n.substring(s + 5)), t[i] = new RegExp(n, "i");
                        c.props[e] = t
                    }
                r(c.oss), r(c.phones), r(c.tablets), r(c.uas), r(c.utils), c.oss0 = {
                    WindowsPhoneOS: c.oss.WindowsPhoneOS,
                    WindowsMobileOS: c.oss.WindowsMobileOS
                }
            }(), o.findMatch = function(e, t) {
                for (var n in e)
                    if (l.call(e, n) && e[n].test(t))
                        return n;
                return null
            }, o.findMatches = function(e, t) {
                var n = [];
                for (var r in e)
                    l.call(e, r) && e[r].test(t) && n.push(r);
                return n
            }, o.getVersionStr = function(e, t) {
                var n,
                    r,
                    i,
                    a,
                    u = o.mobileDetectRules.props;
                if (l.call(u, e))
                    for (n = u[e], i = n.length, r = 0; r < i; ++r)
                        if (a = n[r].exec(t), null !== a)
                            return a[1];
                return null
            }, o.getVersion = function(e, t) {
                var n = o.getVersionStr(e, t);
                return n ? o.prepareVersionNo(n) : NaN
            }, o.prepareVersionNo = function(e) {
                var t;
                return t = e.split(/[a-z._ \/\-]/i), 1 === t.length && (e = t[0]), t.length > 1 && (e = t[0] + ".", t.shift(), e += t.join("")), Number(e)
            }, o.isMobileFallback = function(e) {
                return o.detectMobileBrowsers.fullPattern.test(e) || o.detectMobileBrowsers.shortPattern.test(e.substr(0, 4))
            }, o.isTabletFallback = function(e) {
                return o.detectMobileBrowsers.tabletPattern.test(e)
            }, o.prepareDetectionCache = function(e, n, r) {
                if (e.mobile === t) {
                    var a,
                        l,
                        u;
                    return (l = o.findMatch(o.mobileDetectRules.tablets, n)) ? (e.mobile = e.tablet = l, void (e.phone = null)) : (a = o.findMatch(o.mobileDetectRules.phones, n)) ? (e.mobile = e.phone = a, void (e.tablet = null)) : void (o.isMobileFallback(n) ? (u = i.isPhoneSized(r), u === t ? (e.mobile = o.FALLBACK_MOBILE, e.tablet = e.phone = null) : u ? (e.mobile = e.phone = o.FALLBACK_PHONE, e.tablet = null) : (e.mobile = e.tablet = o.FALLBACK_TABLET, e.phone = null)) : o.isTabletFallback(n) ? (e.mobile = e.tablet = o.FALLBACK_TABLET, e.phone = null) : e.mobile = e.tablet = e.phone = null)
                }
            }, o.mobileGrade = function(e) {
                var t = null !== e.mobile();
                return e.os("iOS") && e.version("iPad") >= 4.3 || e.os("iOS") && e.version("iPhone") >= 3.1 || e.os("iOS") && e.version("iPod") >= 3.1 || e.version("Android") > 2.1 && e.is("Webkit") || e.version("Windows Phone OS") >= 7 || e.is("BlackBerry") && e.version("BlackBerry") >= 6 || e.match("Playbook.*Tablet") || e.version("webOS") >= 1.4 && e.match("Palm|Pre|Pixi") || e.match("hp.*TouchPad") || e.is("Firefox") && e.version("Firefox") >= 12 || e.is("Chrome") && e.is("AndroidOS") && e.version("Android") >= 4 || e.is("Skyfire") && e.version("Skyfire") >= 4.1 && e.is("AndroidOS") && e.version("Android") >= 2.3 || e.is("Opera") && e.version("Opera Mobi") > 11 && e.is("AndroidOS") || e.is("MeeGoOS") || e.is("Tizen") || e.is("Dolfin") && e.version("Bada") >= 2 || (e.is("UC Browser") || e.is("Dolfin")) && e.version("Android") >= 2.3 || e.match("Kindle Fire") || e.is("Kindle") && e.version("Kindle") >= 3 || e.is("AndroidOS") && e.is("NookTablet") || e.version("Chrome") >= 11 && !t || e.version("Safari") >= 5 && !t || e.version("Firefox") >= 4 && !t || e.version("MSIE") >= 7 && !t || e.version("Opera") >= 10 && !t ? "A" : e.os("iOS") && e.version("iPad") < 4.3 || e.os("iOS") && e.version("iPhone") < 3.1 || e.os("iOS") && e.version("iPod") < 3.1 || e.is("Blackberry") && e.version("BlackBerry") >= 5 && e.version("BlackBerry") < 6 || e.version("Opera Mini") >= 5 && e.version("Opera Mini") <= 6.5 && (e.version("Android") >= 2.3 || e.is("iOS")) || e.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || e.version("Opera Mobi") >= 11 && e.is("SymbianOS") ? "B" : (e.version("BlackBerry") < 5 || e.match("MSIEMobile|Windows CE.*Mobile") || e.version("Windows Mobile") <= 5.2, "C")
            }, o.detectOS = function(e) {
                return o.findMatch(o.mobileDetectRules.oss0, e) || o.findMatch(o.mobileDetectRules.oss, e)
            }, o.getDeviceSmallerSide = function() {
                return window.screen.width < window.screen.height ? window.screen.width : window.screen.height
            }, i.prototype = {
                constructor: i,
                mobile: function() {
                    return o.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile
                },
                phone: function() {
                    return o.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone
                },
                tablet: function() {
                    return o.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet
                },
                userAgent: function() {
                    return this._cache.userAgent === t && (this._cache.userAgent = o.findMatch(o.mobileDetectRules.uas, this.ua)), this._cache.userAgent
                },
                userAgents: function() {
                    return this._cache.userAgents === t && (this._cache.userAgents = o.findMatches(o.mobileDetectRules.uas, this.ua)), this._cache.userAgents
                },
                os: function() {
                    return this._cache.os === t && (this._cache.os = o.detectOS(this.ua)), this._cache.os
                },
                version: function(e) {
                    return o.getVersion(e, this.ua)
                },
                versionStr: function(e) {
                    return o.getVersionStr(e, this.ua)
                },
                is: function(t) {
                    return n(this.userAgents(), t) || e(t, this.os()) || e(t, this.phone()) || e(t, this.tablet()) || n(o.findMatches(o.mobileDetectRules.utils, this.ua), t)
                },
                match: function(e) {
                    return e instanceof RegExp || (e = new RegExp(e, "i")), e.test(this.ua)
                },
                isPhoneSized: function(e) {
                    return i.isPhoneSized(e || this.maxPhoneWidth)
                },
                mobileGrade: function() {
                    return this._cache.grade === t && (this._cache.grade = o.mobileGrade(this)), this._cache.grade
                }
            }, "undefined" != typeof window && window.screen ? i.isPhoneSized = function(e) {
                return e < 0 ? t : o.getDeviceSmallerSide() <= e
            } : i.isPhoneSized = function() {}, i._impl = o, i.version = "1.3.7 2017-09-06", i
        })
    }(function(t) {
        return "undefined" != typeof e && e.exports ? function(t) {
            e.exports = t()
        } : n(30)
    }())
}, function(e, t) {
    !function() {
        function e() {
            if (t)
                return t;
            if (document.body.scrollTop)
                return t = document.body;
            var e = document.createElement("iframe");
            e.style.height = "1px", document.documentElement.appendChild(e);
            var n = e.contentWindow.document;
            n.write('<!DOCTYPE html><div style="height:9999em">x</div>'), n.close();
            var r = n.documentElement.scrollHeight > n.body.scrollHeight;
            return e.parentNode.removeChild(e), t = r ? document.documentElement : document.body
        }
        if (!document.scrollingElement) {
            var t = null;
            Object.defineProperty(document, "scrollingElement", {
                get: e
            })
        }
    }()
}, function(e, t, n) {
    var r,
        i,
        o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
    !function(o, l) {
        "object" === a(t) && "undefined" != typeof e ? e.exports = l() : (r = l, i = "function" == typeof r ? r.call(t, n, t, e) : r, !(void 0 !== i && (e.exports = i)))
    }(this, function() {
        "use strict";
        var e = {
                elements_selector: "img",
                container: window,
                threshold: 300,
                throttle: 150,
                data_src: "original",
                data_srcset: "originalSet",
                class_loading: "loading",
                class_loaded: "loaded",
                class_error: "error",
                class_initial: "initial",
                skip_invisible: !0,
                callback_load: null,
                callback_error: null,
                callback_set: null,
                callback_processed: null
            },
            t = !("onscroll" in window) || /glebot/.test(navigator.userAgent),
            n = function(e, t) {
                e && e(t)
            },
            r = function(e) {
                return e.getBoundingClientRect().top + window.pageYOffset - e.ownerDocument.documentElement.clientTop
            },
            i = function(e, t, n) {
                return (t === window ? window.innerHeight + window.pageYOffset : r(t) + t.offsetHeight) <= r(e) - n
            },
            a = function(e) {
                return e.getBoundingClientRect().left + window.pageXOffset - e.ownerDocument.documentElement.clientLeft
            },
            l = function(e, t, n) {
                var r = window.innerWidth;
                return (t === window ? r + window.pageXOffset : a(t) + r) <= a(e) - n
            },
            u = function(e, t, n) {
                return (t === window ? window.pageYOffset : r(t)) >= r(e) + n + e.offsetHeight
            },
            s = function(e, t, n) {
                return (t === window ? window.pageXOffset : a(t)) >= a(e) + n + e.offsetWidth
            },
            c = function(e, t, n) {
                return !(i(e, t, n) || u(e, t, n) || l(e, t, n) || s(e, t, n))
            },
            T = function(e, t) {
                var n = new e(t),
                    r = new CustomEvent("LazyLoad::Initialized", {
                        detail: {
                            instance: n
                        }
                    });
                window.dispatchEvent(r)
            },
            S = function(e, t) {
                var n = e.parentElement;
                if ("PICTURE" === n.tagName)
                    for (var r = 0; r < n.children.length; r++) {
                        var i = n.children[r];
                        if ("SOURCE" === i.tagName) {
                            var o = i.dataset[t];
                            o && i.setAttribute("srcset", o)
                        }
                    }
            },
            f = function(e, t, n) {
                var r = e.tagName,
                    i = e.dataset[n];
                if ("IMG" === r) {
                    S(e, t);
                    var o = e.dataset[t];
                    return o && e.setAttribute("srcset", o), void (i && e.setAttribute("src", i))
                }
                return "IFRAME" === r ? void (i && e.setAttribute("src", i)) : void (i && (e.style.backgroundImage = 'url("' + i + '")'))
            },
            b = function(t) {
                this._settings = o({}, e, t), this._queryOriginNode = this._settings.container === window ? document : this._settings.container, this._previousLoopTime = 0, this._loopTimeout = null, this._boundHandleScroll = this.handleScroll.bind(this), this._isFirstLoop = !0, window.addEventListener("resize", this._boundHandleScroll), this.update()
            };
        b.prototype = {
            _reveal: function(e) {
                var t = this._settings,
                    r = function r() {
                        t && (e.removeEventListener("load", i), e.removeEventListener("error", r), e.classList.remove(t.class_loading), e.classList.add(t.class_error), n(t.callback_error, e))
                    },
                    i = function i() {
                        t && (e.classList.remove(t.class_loading), e.classList.add(t.class_loaded), e.removeEventListener("load", i), e.removeEventListener("error", r), n(t.callback_load, e))
                    };
                "IMG" !== e.tagName && "IFRAME" !== e.tagName || (e.addEventListener("load", i), e.addEventListener("error", r), e.classList.add(t.class_loading)), f(e, t.data_srcset, t.data_src), n(t.callback_set, e)
            },
            _loopThroughElements: function() {
                var e = this._settings,
                    r = this._elements,
                    i = r ? r.length : 0,
                    o = void 0,
                    a = [],
                    l = this._isFirstLoop;
                for (o = 0; o < i; o++) {
                    var u = r[o];
                    e.skip_invisible && null === u.offsetParent || (t || c(u, e.container, e.threshold)) && (l && u.classList.add(e.class_initial), this._reveal(u), a.push(o), u.dataset.wasProcessed = !0)
                }
                for (; a.length;)
                    r.splice(a.pop(), 1), n(e.callback_processed, r.length);
                0 === i && this._stopScrollHandler(), l && (this._isFirstLoop = !1)
            },
            _purgeElements: function() {
                var e = this._elements,
                    t = e.length,
                    n = void 0,
                    r = [];
                for (n = 0; n < t; n++)
                    e[n].dataset.wasProcessed && r.push(n);
                for (; r.length > 0;)
                    e.splice(r.pop(), 1)
            },
            _startScrollHandler: function() {
                this._isHandlingScroll || (this._isHandlingScroll = !0, this._settings.container.addEventListener("scroll", this._boundHandleScroll))
            },
            _stopScrollHandler: function() {
                this._isHandlingScroll && (this._isHandlingScroll = !1, this._settings.container.removeEventListener("scroll", this._boundHandleScroll))
            },
            handleScroll: function() {
                var e = this._settings.throttle;
                if (0 !== e) {
                    var t = Date.now(),
                        n = e - (t - this._previousLoopTime);
                    n <= 0 || n > e ? (this._loopTimeout && (clearTimeout(this._loopTimeout), this._loopTimeout = null), this._previousLoopTime = t, this._loopThroughElements()) : this._loopTimeout || (this._loopTimeout = setTimeout(function() {
                        this._previousLoopTime = Date.now(), this._loopTimeout = null, this._loopThroughElements()
                    }.bind(this), n))
                } else
                    this._loopThroughElements()
            },
            update: function() {
                this._elements = Array.prototype.slice.call(this._queryOriginNode.querySelectorAll(this._settings.elements_selector)), this._purgeElements(), this._loopThroughElements(), this._startScrollHandler()
            },
            destroy: function() {
                window.removeEventListener("resize", this._boundHandleScroll), this._loopTimeout && (clearTimeout(this._loopTimeout), this._loopTimeout = null), this._stopScrollHandler(), this._elements = null, this._queryOriginNode = null, this._settings = null
            }
        };
        var d = window.lazyLoadOptions;
        return d && function(e, t) {
            var n = t.length;
            if (n)
                for (var r = 0; r < n; r++)
                    T(e, t[r]);
            else
                T(e, t)
        }(b, d), b
    })
}, function(e, t) {
    e.exports = function() {
        throw new Error("define cannot be used indirect")
    }
}]);
