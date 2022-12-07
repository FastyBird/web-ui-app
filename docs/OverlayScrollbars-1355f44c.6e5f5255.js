var zo = Object.defineProperty;
var e = (ka, er) => zo(ka, "name", { value: er, configurable: !0 });
import { Z as Mo, a3 as Ro, r as ln, b as Wo, j as wa } from "./iframe.f8011b09.js";
import "vue";
function Ra(ka) {
  return Ra = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(er) {
    return typeof er;
  } : function(er) {
    return er && typeof Symbol == "function" && er.constructor === Symbol && er !== Symbol.prototype ? "symbol" : typeof er;
  }, Ra(ka);
}
e(Ra, "_typeof");
var Xs = {
  exports: {}
};
/*!
 * OverlayScrollbars
 * https://github.com/KingSora/OverlayScrollbars
 *
 * Version: 1.13.0
 *
 * Copyright KingSora | Rene Haas.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 * Date: 02.08.2020
 */
(function(ka) {
  (function(er, Hr) {
    ka.exports = Hr(er, er.document, void 0);
  })(typeof window < "u" ? window : Mo, function(er, Hr, M) {
    var Mt = "OverlayScrollbars", b = {
      o: "object",
      f: "function",
      a: "array",
      s: "string",
      b: "boolean",
      n: "number",
      u: "undefined",
      z: "null"
    }, s = {
      c: "class",
      s: "style",
      i: "id",
      l: "length",
      p: "prototype",
      ti: "tabindex",
      oH: "offsetHeight",
      cH: "clientHeight",
      sH: "scrollHeight",
      oW: "offsetWidth",
      cW: "clientWidth",
      sW: "scrollWidth",
      hOP: "hasOwnProperty",
      bCR: "getBoundingClientRect"
    }, Se = function() {
      var O = {}, w = {}, g = ["-webkit-", "-moz-", "-o-", "-ms-"], a = ["WebKit", "Moz", "O", "MS"];
      function f(h) {
        return h.charAt(0).toUpperCase() + h.slice(1);
      }
      return e(f, "firstLetterToUpper"), {
        _cssPrefixes: g,
        _jsPrefixes: a,
        _cssProperty: /* @__PURE__ */ e(function(p) {
          var F = w[p];
          if (w[s.hOP](p))
            return F;
          for (var or = f(p), k = Hr.createElement("div")[s.s], R, ur = 0, W, Sr; ur < g.length; ur++)
            for (Sr = g[ur].replace(/-/g, ""), R = [
              p,
              g[ur] + p,
              Sr + or,
              f(Sr) + or
            ], W = 0; W < R[s.l]; W++)
              if (k[R[W]] !== M) {
                F = R[W];
                break;
              }
          return w[p] = F, F;
        }, "_cssProperty"),
        _cssPropertyValue: /* @__PURE__ */ e(function(p, F, or) {
          var k = p + " " + F, R = w[k];
          if (w[s.hOP](k))
            return R;
          for (var ur = Hr.createElement("div")[s.s], W = F.split(" "), Sr = or || "", I = 0, J = -1, G; I < W[s.l]; I++)
            for (; J < Se._cssPrefixes[s.l]; J++)
              if (G = J < 0 ? W[I] : Se._cssPrefixes[J] + W[I], ur.cssText = p + ":" + G + Sr, ur[s.l]) {
                R = G;
                break;
              }
          return w[k] = R, R;
        }, "_cssPropertyValue"),
        _jsAPI: /* @__PURE__ */ e(function(p, F, or) {
          var k = 0, R = O[p];
          if (!O[s.hOP](p)) {
            for (R = er[p]; k < a[s.l]; k++)
              R = R || er[(F ? a[k] : a[k].toLowerCase()) + f(p)];
            O[p] = R;
          }
          return R || or;
        }, "_jsAPI")
      };
    }(), T = function() {
      function O(g) {
        return g ? er.innerWidth || Hr.documentElement[s.cW] || Hr.body[s.cW] : er.innerHeight || Hr.documentElement[s.cH] || Hr.body[s.cH];
      }
      e(O, "windowSize");
      function w(g, a) {
        if (Ra(g) != b.f)
          throw "Can't bind function!";
        var f = s.p, h = Array[f].slice.call(arguments, 2), p = /* @__PURE__ */ e(function() {
        }, "fNOP"), F = /* @__PURE__ */ e(function() {
          return g.apply(this instanceof p ? this : a, h.concat(Array[f].slice.call(arguments)));
        }, "fBound");
        return g[f] && (p[f] = g[f]), F[f] = new p(), F;
      }
      return e(w, "bind"), {
        wW: w(O, 0, !0),
        wH: w(O, 0),
        mO: w(Se._jsAPI, 0, "MutationObserver", !0),
        rO: w(Se._jsAPI, 0, "ResizeObserver", !0),
        rAF: w(Se._jsAPI, 0, "requestAnimationFrame", !1, function(g) {
          return er.setTimeout(g, 1e3 / 60);
        }),
        cAF: w(Se._jsAPI, 0, "cancelAnimationFrame", !1, function(g) {
          return er.clearTimeout(g);
        }),
        now: /* @__PURE__ */ e(function() {
          return Date.now && Date.now() || new Date().getTime();
        }, "now"),
        stpP: /* @__PURE__ */ e(function(a) {
          a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
        }, "stpP"),
        prvD: /* @__PURE__ */ e(function(a) {
          a.preventDefault && a.cancelable ? a.preventDefault() : a.returnValue = !1;
        }, "prvD"),
        page: /* @__PURE__ */ e(function(a) {
          a = a.originalEvent || a;
          var f = "page", h = "client", p = "X", F = "Y", or = a.target || a.srcElement || Hr, k = or.ownerDocument || Hr, R = k.documentElement, ur = k.body;
          if (a.touches !== M) {
            var W = a.touches[0];
            return {
              x: W[f + p],
              y: W[f + F]
            };
          }
          return !a[f + p] && a[h + p] && a[h + p] != null ? {
            x: a[h + p] + (R && R.scrollLeft || ur && ur.scrollLeft || 0) - (R && R.clientLeft || ur && ur.clientLeft || 0),
            y: a[h + F] + (R && R.scrollTop || ur && ur.scrollTop || 0) - (R && R.clientTop || ur && ur.clientTop || 0)
          } : {
            x: a[f + p],
            y: a[f + F]
          };
        }, "page"),
        mBtn: /* @__PURE__ */ e(function(a) {
          var f = a.button;
          return !a.which && f !== M ? f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0 : a.which;
        }, "mBtn"),
        inA: /* @__PURE__ */ e(function(a, f) {
          for (var h = 0; h < f[s.l]; h++)
            try {
              if (f[h] === a)
                return h;
            } catch {
            }
          return -1;
        }, "inA"),
        isA: /* @__PURE__ */ e(function(a) {
          var f = Array.isArray;
          return f ? f(a) : this.type(a) == b.a;
        }, "isA"),
        type: /* @__PURE__ */ e(function(a) {
          return a === M || a === null ? a + "" : Object[s.p].toString.call(a).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
        }, "type"),
        bind: w
      };
    }(), N = Math, ut = er.jQuery, $s = function() {
      var O = {
        p: N.PI,
        c: N.cos,
        s: N.sin,
        w: N.pow,
        t: N.sqrt,
        n: N.asin,
        a: N.abs,
        o: 1.70158
      };
      return {
        swing: /* @__PURE__ */ e(function(g, a, f, h, p) {
          return 0.5 - O.c(g * O.p) / 2;
        }, "swing"),
        linear: /* @__PURE__ */ e(function(g, a, f, h, p) {
          return g;
        }, "linear"),
        easeInQuad: /* @__PURE__ */ e(function(g, a, f, h, p) {
          return h * (a /= p) * a + f;
        }, "easeInQuad"),
        easeOutQuad: /* @__PURE__ */ e(function(g, a, f, h, p) {
          return -h * (a /= p) * (a - 2) + f;
        }, "easeOutQuad"),
        easeInOutQuad: /* @__PURE__ */ e(function(g, a, f, h, p) {
          return (a /= p / 2) < 1 ? h / 2 * a * a + f : -h / 2 * (--a * (a - 2) - 1) + f;
        }, "easeInOutQuad"),
        easeInCubic: /* @__PURE__ */ e(function(g, a, f, h, p) {
          return h * (a /= p) * a * a + f;
        }, "easeInCubic"),
        easeOutCubic: /* @__PURE__ */ e(function(g, a, f, h, p) {
          return h * ((a = a / p - 1) * a * a + 1) + f;
        }, "easeOutCubic"),
        easeInOutCubic: /* @__PURE__ */ e(function(g, a, f, h, p) {
          return (a /= p / 2) < 1 ? h / 2 * a * a * a + f : h / 2 * ((a -= 2) * a * a + 2) + f;
        }, "easeInOutCubic"),
        easeInQuart: /* @__PURE__ */ e(function(g, a, f, h, p) {
          return h * (a /= p) * a * a * a + f;
        }, "easeInQuart"),
        easeOutQuart: /* @__PURE__ */ e(function(g, a, f, h, p) {
          return -h * ((a = a / p - 1) * a * a * a - 1) + f;
        }, "easeOutQuart"),
        easeInOutQuart: /* @__PURE__ */ e(function(g, a, f, h, p) {
          return (a /= p / 2) < 1 ? h / 2 * a * a * a * a + f : -h / 2 * ((a -= 2) * a * a * a - 2) + f;
        }, "easeInOutQuart"),
        easeInQuint: /* @__PURE__ */ e(function(g, a, f, h, p) {
          return h * (a /= p) * a * a * a * a + f;
        }, "easeInQuint"),
        easeOutQuint: /* @__PURE__ */ e(function(g, a, f, h, p) {
          return h * ((a = a / p - 1) * a * a * a * a + 1) + f;
        }, "easeOutQuint"),
        easeInOutQuint: /* @__PURE__ */ e(function(g, a, f, h, p) {
          return (a /= p / 2) < 1 ? h / 2 * a * a * a * a * a + f : h / 2 * ((a -= 2) * a * a * a * a + 2) + f;
        }, "easeInOutQuint"),
        easeInSine: /* @__PURE__ */ e(function(g, a, f, h, p) {
          return -h * O.c(a / p * (O.p / 2)) + h + f;
        }, "easeInSine"),
        easeOutSine: /* @__PURE__ */ e(function(g, a, f, h, p) {
          return h * O.s(a / p * (O.p / 2)) + f;
        }, "easeOutSine"),
        easeInOutSine: /* @__PURE__ */ e(function(g, a, f, h, p) {
          return -h / 2 * (O.c(O.p * a / p) - 1) + f;
        }, "easeInOutSine"),
        easeInExpo: /* @__PURE__ */ e(function(g, a, f, h, p) {
          return a == 0 ? f : h * O.w(2, 10 * (a / p - 1)) + f;
        }, "easeInExpo"),
        easeOutExpo: /* @__PURE__ */ e(function(g, a, f, h, p) {
          return a == p ? f + h : h * (-O.w(2, -10 * a / p) + 1) + f;
        }, "easeOutExpo"),
        easeInOutExpo: /* @__PURE__ */ e(function(g, a, f, h, p) {
          return a == 0 ? f : a == p ? f + h : (a /= p / 2) < 1 ? h / 2 * O.w(2, 10 * (a - 1)) + f : h / 2 * (-O.w(2, -10 * --a) + 2) + f;
        }, "easeInOutExpo"),
        easeInCirc: /* @__PURE__ */ e(function(g, a, f, h, p) {
          return -h * (O.t(1 - (a /= p) * a) - 1) + f;
        }, "easeInCirc"),
        easeOutCirc: /* @__PURE__ */ e(function(g, a, f, h, p) {
          return h * O.t(1 - (a = a / p - 1) * a) + f;
        }, "easeOutCirc"),
        easeInOutCirc: /* @__PURE__ */ e(function(g, a, f, h, p) {
          return (a /= p / 2) < 1 ? -h / 2 * (O.t(1 - a * a) - 1) + f : h / 2 * (O.t(1 - (a -= 2) * a) + 1) + f;
        }, "easeInOutCirc"),
        easeInElastic: /* @__PURE__ */ e(function(g, a, f, h, p) {
          var F = O.o, or = 0, k = h;
          return a == 0 ? f : (a /= p) == 1 ? f + h : (or || (or = p * 0.3), k < O.a(h) ? (k = h, F = or / 4) : F = or / (2 * O.p) * O.n(h / k), -(k * O.w(2, 10 * (a -= 1)) * O.s((a * p - F) * (2 * O.p) / or)) + f);
        }, "easeInElastic"),
        easeOutElastic: /* @__PURE__ */ e(function(g, a, f, h, p) {
          var F = O.o, or = 0, k = h;
          return a == 0 ? f : (a /= p) == 1 ? f + h : (or || (or = p * 0.3), k < O.a(h) ? (k = h, F = or / 4) : F = or / (2 * O.p) * O.n(h / k), k * O.w(2, -10 * a) * O.s((a * p - F) * (2 * O.p) / or) + h + f);
        }, "easeOutElastic"),
        easeInOutElastic: /* @__PURE__ */ e(function(g, a, f, h, p) {
          var F = O.o, or = 0, k = h;
          return a == 0 ? f : (a /= p / 2) == 2 ? f + h : (or || (or = p * (0.3 * 1.5)), k < O.a(h) ? (k = h, F = or / 4) : F = or / (2 * O.p) * O.n(h / k), a < 1 ? -0.5 * (k * O.w(2, 10 * (a -= 1)) * O.s((a * p - F) * (2 * O.p) / or)) + f : k * O.w(2, -10 * (a -= 1)) * O.s((a * p - F) * (2 * O.p) / or) * 0.5 + h + f);
        }, "easeInOutElastic"),
        easeInBack: /* @__PURE__ */ e(function(g, a, f, h, p, F) {
          return F = F || O.o, h * (a /= p) * a * ((F + 1) * a - F) + f;
        }, "easeInBack"),
        easeOutBack: /* @__PURE__ */ e(function(g, a, f, h, p, F) {
          return F = F || O.o, h * ((a = a / p - 1) * a * ((F + 1) * a + F) + 1) + f;
        }, "easeOutBack"),
        easeInOutBack: /* @__PURE__ */ e(function(g, a, f, h, p, F) {
          return F = F || O.o, (a /= p / 2) < 1 ? h / 2 * (a * a * (((F *= 1.525) + 1) * a - F)) + f : h / 2 * ((a -= 2) * a * (((F *= 1.525) + 1) * a + F) + 2) + f;
        }, "easeInOutBack"),
        easeInBounce: /* @__PURE__ */ e(function(g, a, f, h, p) {
          return h - this.easeOutBounce(g, p - a, 0, h, p) + f;
        }, "easeInBounce"),
        easeOutBounce: /* @__PURE__ */ e(function(g, a, f, h, p) {
          var F = 7.5625;
          return (a /= p) < 1 / 2.75 ? h * (F * a * a) + f : a < 2 / 2.75 ? h * (F * (a -= 1.5 / 2.75) * a + 0.75) + f : a < 2.5 / 2.75 ? h * (F * (a -= 2.25 / 2.75) * a + 0.9375) + f : h * (F * (a -= 2.625 / 2.75) * a + 0.984375) + f;
        }, "easeOutBounce"),
        easeInOutBounce: /* @__PURE__ */ e(function(g, a, f, h, p) {
          return a < p / 2 ? this.easeInBounce(g, a * 2, 0, h, p) * 0.5 + f : this.easeOutBounce(g, a * 2 - p, 0, h, p) * 0.5 + h * 0.5 + f;
        }, "easeInOutBounce")
      };
    }(), q = function() {
      var O = /[^\x20\t\r\n\f]+/g, w = " ", g = "", a = "scrollLeft", f = "scrollTop", h = [], p = T.type, F = {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      };
      function or() {
        var u, i, o, l, _, m, L = arguments[0] || {}, z = 1, K = arguments[s.l], P = !1;
        for (p(L) == b.b && (P = L, L = arguments[1] || {}, z = 2), p(L) != b.o && !p(L) == b.f && (L = {}), K === z && (L = rr, --z); z < K; z++)
          if ((_ = arguments[z]) != null)
            for (l in _)
              u = L[l], o = _[l], L !== o && (P && o && (W(o) || (i = T.isA(o))) ? (i ? (i = !1, m = u && T.isA(u) ? u : []) : m = u && W(u) ? u : {}, L[l] = or(P, m, o)) : o !== M && (L[l] = o));
        return L;
      }
      e(or, "extend");
      function k(u, i, o) {
        for (var l = o || 0; l < i[s.l]; l++)
          if (i[l] === u)
            return l;
        return -1;
      }
      e(k, "inArray");
      function R(u) {
        return p(u) == b.f;
      }
      e(R, "isFunction");
      function ur(u) {
        for (var i in u)
          return !1;
        return !0;
      }
      e(ur, "isEmptyObject");
      function W(u) {
        if (!u || p(u) != b.o)
          return !1;
        var i, o = s.p, l = Object[o].hasOwnProperty, _ = l.call(u, "constructor"), m = u.constructor && u.constructor[o] && l.call(u.constructor[o], "isPrototypeOf");
        if (u.constructor && !_ && !m)
          return !1;
        for (i in u)
          ;
        return p(i) == b.u || l.call(u, i);
      }
      e(W, "isPlainObject");
      function Sr(u, i) {
        var o = 0;
        if (I(u))
          for (; o < u[s.l] && i.call(u[o], o, u[o]) !== !1; o++)
            ;
        else
          for (o in u)
            if (i.call(u[o], o, u[o]) === !1)
              break;
        return u;
      }
      e(Sr, "_each");
      function I(u) {
        var i = !!u && [s.l] in u && u[s.l], o = p(u);
        return R(o) ? !1 : o == b.a || i === 0 || p(i) == b.n && i > 0 && i - 1 in u;
      }
      e(I, "isArrayLike");
      function J(u) {
        var i = u.match(O) || [];
        return i.join(w);
      }
      e(J, "stripAndCollapse");
      function G(u, i) {
        for (var o = (u.parentNode || Hr).querySelectorAll(i) || [], l = o[s.l]; l--; )
          if (o[l] == u)
            return !0;
        return !1;
      }
      e(G, "matches");
      function H(u, i, o) {
        if (T.isA(o))
          for (var l = 0; l < o[s.l]; l++)
            H(u, i, o[l]);
        else
          p(o) == b.s ? u.insertAdjacentHTML(i, o) : u.insertAdjacentElement(i, o.nodeType ? o : o[0]);
      }
      e(H, "insertAdjacentElement");
      function fr(u, i, o) {
        try {
          u[s.s][i] !== M && (u[s.s][i] = ze(i, o));
        } catch {
        }
      }
      e(fr, "setCSSVal");
      function ze(u, i) {
        return !F[u.toLowerCase()] && p(i) == b.n && (i += "px"), i;
      }
      e(ze, "parseCSSVal");
      function $(u, i) {
        var o, l;
        i !== !1 && u.q.splice(0, 1), u.q[s.l] > 0 ? (l = u.q[0], E(u.el, l.props, l.duration, l.easing, l.complete, !0)) : (o = k(u, h), o > -1 && h.splice(o, 1));
      }
      e($, "startNextAnimationInQ");
      function Jr(u, i, o) {
        i === a || i === f ? u[i] = o : fr(u, i, o);
      }
      e(Jr, "setAnimationValue");
      function E(u, i, o, l, _, m) {
        var L = W(o), z = {}, K = {}, P = 0, ar, Ir, Dr, Tr, qr, zr;
        for (L ? (l = o.easing, Dr = o.progress, Tr = o.step, qr = o.specialEasing, _ = o.complete, zr = o.duration) : zr = o, qr = qr || {}, zr = zr || 400, l = l || "swing", m = m || !1; P < h[s.l]; P++)
          if (h[P].el === u) {
            Ir = h[P];
            break;
          }
        Ir || (Ir = {
          el: u,
          q: []
        }, h.push(Ir));
        for (ar in i)
          ar === a || ar === f ? z[ar] = u[ar] : z[ar] = rr(u).css(ar);
        for (ar in z)
          z[ar] !== i[ar] && i[ar] !== M && (K[ar] = i[ar]);
        if (ur(K))
          m && $(Ir);
        else {
          var Te, Fe, Me, xr, me, hr, Cr, fa, Je, ha = m ? 0 : k(pr, Ir.q), pr = {
            props: K,
            duration: L ? o : zr,
            easing: l,
            complete: _
          };
          if (ha === -1 && (ha = Ir.q[s.l], Ir.q.push(pr)), ha === 0)
            if (zr > 0)
              Cr = T.now(), fa = /* @__PURE__ */ e(function() {
                Te = T.now(), Je = Te - Cr, Fe = pr.stop || Je >= zr, Me = 1 - (N.max(0, Cr + zr - Te) / zr || 0);
                for (ar in K)
                  xr = parseFloat(z[ar]), me = parseFloat(K[ar]), hr = (me - xr) * $s[qr[ar] || l](Me, Me * zr, 0, 1, zr) + xr, Jr(u, ar, hr), R(Tr) && Tr(hr, {
                    elem: u,
                    prop: ar,
                    start: xr,
                    now: hr,
                    end: me,
                    pos: Me,
                    options: {
                      easing: l,
                      speacialEasing: qr,
                      duration: zr,
                      complete: _,
                      step: Tr
                    },
                    startTime: Cr
                  });
                R(Dr) && Dr({}, Me, N.max(0, zr - Je)), Fe ? ($(Ir), R(_) && _()) : pr.frame = T.rAF()(fa);
              }, "frame"), pr.frame = T.rAF()(fa);
            else {
              for (ar in K)
                Jr(u, ar, K[ar]);
              $(Ir);
            }
        }
      }
      e(E, "_animate");
      function dr(u, i, o) {
        for (var l, _, m, L = 0; L < h[s.l]; L++)
          if (l = h[L], l.el === u) {
            if (l.q[s.l] > 0) {
              if (_ = l.q[0], _.stop = !0, T.cAF()(_.frame), l.q.splice(0, 1), o)
                for (m in _.props)
                  Jr(u, m, _.props[m]);
              i ? l.q = [] : $(l, !1);
            }
            break;
          }
      }
      e(dr, "_stop");
      function yr(u) {
        return !!(u[s.oW] || u[s.oH] || u.getClientRects()[s.l]);
      }
      e(yr, "elementIsVisible");
      function rr(u) {
        if (arguments[s.l] === 0)
          return this;
        var i = new rr(), o = u, l = 0, _, m;
        if (p(u) == b.s)
          for (o = [], u.charAt(0) === "<" ? (m = Hr.createElement("div"), m.innerHTML = u, _ = m.children) : _ = Hr.querySelectorAll(u); l < _[s.l]; l++)
            o.push(_[l]);
        if (o) {
          for (p(o) != b.s && (!I(o) || o === er || o === o.self) && (o = [o]), l = 0; l < o[s.l]; l++)
            i[l] = o[l];
          i[s.l] = o[s.l];
        }
        return i;
      }
      return e(rr, "FakejQuery"), rr[s.p] = {
        on: /* @__PURE__ */ e(function(i, o) {
          i = (i || g).match(O) || [g];
          var l = i[s.l], _ = 0, m;
          return this.each(function() {
            m = this;
            try {
              if (m.addEventListener)
                for (; _ < l; _++)
                  m.addEventListener(i[_], o);
              else if (m.detachEvent)
                for (; _ < l; _++)
                  m.attachEvent("on" + i[_], o);
            } catch {
            }
          });
        }, "on"),
        off: /* @__PURE__ */ e(function(i, o) {
          i = (i || g).match(O) || [g];
          var l = i[s.l], _ = 0, m;
          return this.each(function() {
            m = this;
            try {
              if (m.removeEventListener)
                for (; _ < l; _++)
                  m.removeEventListener(i[_], o);
              else if (m.detachEvent)
                for (; _ < l; _++)
                  m.detachEvent("on" + i[_], o);
            } catch {
            }
          });
        }, "off"),
        one: /* @__PURE__ */ e(function(i, o) {
          return i = (i || g).match(O) || [g], this.each(function() {
            var l = rr(this);
            rr.each(i, function(_, m) {
              var L = /* @__PURE__ */ e(function z(K) {
                o.call(this, K), l.off(m, z);
              }, "oneHandler");
              l.on(m, L);
            });
          });
        }, "one"),
        trigger: /* @__PURE__ */ e(function(i) {
          var o, l;
          return this.each(function() {
            o = this, Hr.createEvent ? (l = Hr.createEvent("HTMLEvents"), l.initEvent(i, !0, !1), o.dispatchEvent(l)) : o.fireEvent("on" + i);
          });
        }, "trigger"),
        append: /* @__PURE__ */ e(function(i) {
          return this.each(function() {
            H(this, "beforeend", i);
          });
        }, "append"),
        prepend: /* @__PURE__ */ e(function(i) {
          return this.each(function() {
            H(this, "afterbegin", i);
          });
        }, "prepend"),
        before: /* @__PURE__ */ e(function(i) {
          return this.each(function() {
            H(this, "beforebegin", i);
          });
        }, "before"),
        after: /* @__PURE__ */ e(function(i) {
          return this.each(function() {
            H(this, "afterend", i);
          });
        }, "after"),
        remove: /* @__PURE__ */ e(function() {
          return this.each(function() {
            var i = this, o = i.parentNode;
            o?.removeChild(i);
          });
        }, "remove"),
        unwrap: /* @__PURE__ */ e(function() {
          var i = [], o, l, _;
          for (this.each(function() {
            _ = this.parentNode, k(_, i) === -1 && i.push(_);
          }), o = 0; o < i[s.l]; o++) {
            for (l = i[o], _ = l.parentNode; l.firstChild; )
              _.insertBefore(l.firstChild, l);
            _.removeChild(l);
          }
          return this;
        }, "unwrap"),
        wrapAll: /* @__PURE__ */ e(function(i) {
          for (var o, l = this, _ = rr(i)[0], m = _, L = l[0].parentNode, z = l[0].previousSibling; m.childNodes[s.l] > 0; )
            m = m.childNodes[0];
          for (o = 0; l[s.l] - o; m.firstChild === l[0] && o++)
            m.appendChild(l[o]);
          var K = z ? z.nextSibling : L.firstChild;
          return L.insertBefore(_, K), this;
        }, "wrapAll"),
        wrapInner: /* @__PURE__ */ e(function(i) {
          return this.each(function() {
            var o = rr(this), l = o.contents();
            l[s.l] ? l.wrapAll(i) : o.append(i);
          });
        }, "wrapInner"),
        wrap: /* @__PURE__ */ e(function(i) {
          return this.each(function() {
            rr(this).wrapAll(i);
          });
        }, "wrap"),
        css: /* @__PURE__ */ e(function(i, o) {
          var l, _, m, L = er.getComputedStyle;
          return p(i) == b.s ? o === M ? (l = this[0], m = L ? L(l, null) : l.currentStyle[i], L ? m != null ? m.getPropertyValue(i) : l[s.s][i] : m) : this.each(function() {
            fr(this, i, o);
          }) : this.each(function() {
            for (_ in i)
              fr(this, _, i[_]);
          });
        }, "css"),
        hasClass: /* @__PURE__ */ e(function(i) {
          for (var o, l = 0, _ = w + i + w, m; o = this[l++]; ) {
            if (m = o.classList, m && m.contains(i))
              return !0;
            if (o.nodeType === 1 && (w + J(o.className + g) + w).indexOf(_) > -1)
              return !0;
          }
          return !1;
        }, "hasClass"),
        addClass: /* @__PURE__ */ e(function(i) {
          var o, l, _, m, L, z, K, P, ar = 0, Ir = 0;
          if (i) {
            for (o = i.match(O) || []; l = this[ar++]; )
              if (P = l.classList, K === M && (K = P !== M), K)
                for (; L = o[Ir++]; )
                  P.add(L);
              else if (m = l.className + g, _ = l.nodeType === 1 && w + J(m) + w, _) {
                for (; L = o[Ir++]; )
                  _.indexOf(w + L + w) < 0 && (_ += L + w);
                z = J(_), m !== z && (l.className = z);
              }
          }
          return this;
        }, "addClass"),
        removeClass: /* @__PURE__ */ e(function(i) {
          var o, l, _, m, L, z, K, P, ar = 0, Ir = 0;
          if (i) {
            for (o = i.match(O) || []; l = this[ar++]; )
              if (P = l.classList, K === M && (K = P !== M), K)
                for (; L = o[Ir++]; )
                  P.remove(L);
              else if (m = l.className + g, _ = l.nodeType === 1 && w + J(m) + w, _) {
                for (; L = o[Ir++]; )
                  for (; _.indexOf(w + L + w) > -1; )
                    _ = _.replace(w + L + w, w);
                z = J(_), m !== z && (l.className = z);
              }
          }
          return this;
        }, "removeClass"),
        hide: /* @__PURE__ */ e(function() {
          return this.each(function() {
            this[s.s].display = "none";
          });
        }, "hide"),
        show: /* @__PURE__ */ e(function() {
          return this.each(function() {
            this[s.s].display = "block";
          });
        }, "show"),
        attr: /* @__PURE__ */ e(function(i, o) {
          for (var l = 0, _; _ = this[l++]; ) {
            if (o === M)
              return _.getAttribute(i);
            _.setAttribute(i, o);
          }
          return this;
        }, "attr"),
        removeAttr: /* @__PURE__ */ e(function(i) {
          return this.each(function() {
            this.removeAttribute(i);
          });
        }, "removeAttr"),
        offset: /* @__PURE__ */ e(function() {
          var i = this[0], o = i[s.bCR](), l = er.pageXOffset || Hr.documentElement[a], _ = er.pageYOffset || Hr.documentElement[f];
          return {
            top: o.top + _,
            left: o.left + l
          };
        }, "offset"),
        position: /* @__PURE__ */ e(function() {
          var i = this[0];
          return {
            top: i.offsetTop,
            left: i.offsetLeft
          };
        }, "position"),
        scrollLeft: /* @__PURE__ */ e(function(i) {
          for (var o = 0, l; l = this[o++]; ) {
            if (i === M)
              return l[a];
            l[a] = i;
          }
          return this;
        }, "scrollLeft"),
        scrollTop: /* @__PURE__ */ e(function(i) {
          for (var o = 0, l; l = this[o++]; ) {
            if (i === M)
              return l[f];
            l[f] = i;
          }
          return this;
        }, "scrollTop"),
        val: /* @__PURE__ */ e(function(i) {
          var o = this[0];
          return i ? (o.value = i, this) : o.value;
        }, "val"),
        first: /* @__PURE__ */ e(function() {
          return this.eq(0);
        }, "first"),
        last: /* @__PURE__ */ e(function() {
          return this.eq(-1);
        }, "last"),
        eq: /* @__PURE__ */ e(function(i) {
          return rr(this[i >= 0 ? i : this[s.l] + i]);
        }, "eq"),
        find: /* @__PURE__ */ e(function(i) {
          var o = [], l;
          return this.each(function() {
            var _ = this, m = _.querySelectorAll(i);
            for (l = 0; l < m[s.l]; l++)
              o.push(m[l]);
          }), rr(o);
        }, "find"),
        children: /* @__PURE__ */ e(function(i) {
          var o = [], l, _, m;
          return this.each(function() {
            for (_ = this.children, m = 0; m < _[s.l]; m++)
              l = _[m], i ? (l.matches && l.matches(i) || G(l, i)) && o.push(l) : o.push(l);
          }), rr(o);
        }, "children"),
        parent: /* @__PURE__ */ e(function(i) {
          var o = [], l;
          return this.each(function() {
            l = this.parentNode, (!i || rr(l).is(i)) && o.push(l);
          }), rr(o);
        }, "parent"),
        is: /* @__PURE__ */ e(function(i) {
          var o, l;
          for (l = 0; l < this[s.l]; l++) {
            if (o = this[l], i === ":visible")
              return yr(o);
            if (i === ":hidden")
              return !yr(o);
            if (o.matches && o.matches(i) || G(o, i))
              return !0;
          }
          return !1;
        }, "is"),
        contents: /* @__PURE__ */ e(function() {
          var i = [], o, l;
          return this.each(function() {
            for (o = this.childNodes, l = 0; l < o[s.l]; l++)
              i.push(o[l]);
          }), rr(i);
        }, "contents"),
        each: /* @__PURE__ */ e(function(i) {
          return Sr(this, i);
        }, "each"),
        animate: /* @__PURE__ */ e(function(i, o, l, _) {
          return this.each(function() {
            E(this, i, o, l, _);
          });
        }, "animate"),
        stop: /* @__PURE__ */ e(function(i, o) {
          return this.each(function() {
            dr(this, i, o);
          });
        }, "stop")
      }, or(rr, {
        extend: or,
        inArray: k,
        isEmptyObject: ur,
        isPlainObject: W,
        each: Sr
      }), rr;
    }(), Wa = function() {
      var O = [], w = "__overlayScrollbars__";
      return function(g, a) {
        var f = arguments[s.l];
        if (f < 1)
          return O;
        if (a)
          g[w] = a, O.push(g);
        else {
          var h = T.inA(g, O);
          if (h > -1)
            if (f > 1)
              delete g[w], O.splice(h, 1);
            else
              return O[h][w];
        }
      };
    }(), Mn = function() {
      var O, w, g, a = [], f = function() {
        var k = T.type, R = [
          b.b,
          b.n,
          b.s,
          b.a,
          b.o,
          b.f,
          b.z
        ], ur = " ", W = ":", Sr = [b.z, b.s], I = b.n, J = [b.z, b.b], G = [!0, b.b], H = [!1, b.b], fr = [null, [b.z, b.f]], ze = [["img"], [b.s, b.a, b.z]], $ = [["style", "class"], [b.s, b.a, b.z]], Jr = "n:none b:both h:horizontal v:vertical", E = "v-h:visible-hidden v-s:visible-scroll s:scroll h:hidden", dr = "v:visible h:hidden a:auto", yr = "n:never s:scroll l:leave m:move", rr = {
          className: ["os-theme-dark", Sr],
          resize: ["none", Jr],
          sizeAutoCapable: G,
          clipAlways: G,
          normalizeRTL: G,
          paddingAbsolute: H,
          autoUpdate: [null, J],
          autoUpdateInterval: [33, I],
          updateOnLoad: ze,
          nativeScrollbarsOverlaid: {
            showNativeScrollbars: H,
            initialize: G
          },
          overflowBehavior: {
            x: ["scroll", E],
            y: ["scroll", E]
          },
          scrollbars: {
            visibility: ["auto", dr],
            autoHide: ["never", yr],
            autoHideDelay: [800, I],
            dragScrolling: G,
            clickScrolling: H,
            touchSupport: G,
            snapHandle: H
          },
          textarea: {
            dynWidth: H,
            dynHeight: H,
            inheritedAttrs: $
          },
          callbacks: {
            onInitialized: fr,
            onInitializationWithdrawn: fr,
            onDestroyed: fr,
            onScrollStart: fr,
            onScroll: fr,
            onScrollStop: fr,
            onOverflowChanged: fr,
            onOverflowAmountChanged: fr,
            onDirectionChanged: fr,
            onContentSizeChanged: fr,
            onHostSizeChanged: fr,
            onUpdated: fr
          }
        }, u = /* @__PURE__ */ e(function(o) {
          var l = /* @__PURE__ */ e(function _(m) {
            var L, z, K;
            for (L in m)
              !m[s.hOP](L) || (z = m[L], K = k(z), K == b.a ? m[L] = z[o ? 1 : 0] : K == b.o && (m[L] = _(z)));
            return m;
          }, "recursive");
          return l(q.extend(!0, {}, rr));
        }, "convert");
        return {
          _defaults: u(),
          _template: u(!0),
          _validate: /* @__PURE__ */ e(function(o, l, _, m) {
            var L = {}, z = {}, K = q.extend(!0, {}, o), P = q.inArray, ar = q.isEmptyObject, Ir = /* @__PURE__ */ e(function Dr(Tr, qr, zr, Te, Fe, Me) {
              for (var xr in qr)
                if (qr[s.hOP](xr) && Tr[s.hOP](xr)) {
                  var me = !1, hr = !1, Cr = qr[xr], fa = k(Cr), Je = fa == b.o, ha = T.isA(Cr) ? Cr : [Cr], pr = zr[xr], xe = Tr[xr], ft = k(xe), ve = Me ? Me + "." : "", Re = 'The option "' + ve + xr + `" wasn't set, because`, Ze = [], Kr = [], ue, fe, br, We, da, Z, gr, ge;
                  if (pr = pr === M ? {} : pr, Je && ft == b.o)
                    Te[xr] = {}, Fe[xr] = {}, Dr(xe, Cr, pr, Te[xr], Fe[xr], ve + xr), q.each([Tr, Te, Fe], function(Y, Mr) {
                      ar(Mr[xr]) && delete Mr[xr];
                    });
                  else if (!Je) {
                    for (Z = 0; Z < ha[s.l]; Z++)
                      if (da = ha[Z], fa = k(da), br = fa == b.s && P(da, R) === -1, br)
                        for (Ze.push(b.s), ue = da.split(ur), Kr = Kr.concat(ue), gr = 0; gr < ue[s.l]; gr++) {
                          for (fe = ue[gr].split(W), We = fe[0], ge = 0; ge < fe[s.l]; ge++)
                            if (xe === fe[ge]) {
                              me = !0;
                              break;
                            }
                          if (me)
                            break;
                        }
                      else if (Ze.push(da), ft === da) {
                        me = !0;
                        break;
                      }
                    me ? (hr = xe !== pr, hr && (Te[xr] = xe), (br ? P(pr, fe) < 0 : hr) && (Fe[xr] = br ? We : xe)) : _ && console.warn(Re + " it doesn't accept the type [ " + ft.toUpperCase() + ' ] with the value of "' + xe + `".\r
Accepted types are: [ ` + Ze.join(", ").toUpperCase() + " ]." + (Kr[length] > 0 ? `\r
Valid strings are: [ ` + Kr.join(", ").split(W).join(", ") + " ]." : "")), delete Tr[xr];
                  }
                }
            }, "checkObjectProps");
            return Ir(K, l, m || {}, L, z), !ar(K) && _ && console.warn(`The following options are discarded due to invalidity:\r
` + er.JSON.stringify(K, null, 2)), {
              _default: L,
              _prepared: z
            };
          }, "_validate")
        };
      }();
      function h() {
        w || (w = new p(f._defaults)), g || (g = new F(w));
      }
      e(h, "initOverlayScrollbarsStatics");
      function p(k) {
        var R = this, ur = "overflow", W = "hidden", Sr = "scroll", I = q("body"), J = q('<div id="os-dummy-scrollbar-size"><div></div></div>'), G = J[0], H = q(J.children("div").eq(0));
        I.append(J), J.hide().show();
        var fr = Jr(G), ze = {
          x: fr.x === 0,
          y: fr.y === 0
        }, $ = function() {
          var E = er.navigator.userAgent, dr = "indexOf", yr = "substring", rr = E[dr]("MSIE "), u = E[dr]("Trident/"), i = E[dr]("Edge/"), o = E[dr]("rv:"), l, _ = parseInt;
          return rr > 0 ? l = _(E[yr](rr + 5, E[dr](".", rr)), 10) : u > 0 ? l = _(E[yr](o + 3, E[dr](".", o)), 10) : i > 0 && (l = _(E[yr](i + 5, E[dr](".", i)), 10)), l;
        }();
        q.extend(R, {
          defaultOptions: k,
          msie: $,
          autoUpdateLoop: !1,
          autoUpdateRecommended: !T.mO(),
          nativeScrollbarSize: fr,
          nativeScrollbarIsOverlaid: ze,
          nativeScrollbarStyling: function() {
            var E = !1;
            J.addClass("os-viewport-native-scrollbars-invisible");
            try {
              E = J.css("scrollbar-width") === "none" && ($ > 9 || !$) || er.getComputedStyle(G, "::-webkit-scrollbar").getPropertyValue("display") === "none";
            } catch {
            }
            return E;
          }(),
          overlayScrollbarDummySize: {
            x: 30,
            y: 30
          },
          cssCalc: Se._cssPropertyValue("width", "calc", "(1px)") || null,
          restrictedMeasuring: function() {
            J.css(ur, W);
            var E = {
              w: G[s.sW],
              h: G[s.sH]
            };
            J.css(ur, "visible");
            var dr = {
              w: G[s.sW],
              h: G[s.sH]
            };
            return E.w - dr.w !== 0 || E.h - dr.h !== 0;
          }(),
          rtlScrollBehavior: function() {
            J.css({
              "overflow-y": W,
              "overflow-x": Sr,
              direction: "rtl"
            }).scrollLeft(0);
            var E = J.offset(), dr = H.offset();
            J.scrollLeft(-999);
            var yr = H.offset();
            return {
              i: E.left === dr.left,
              n: dr.left !== yr.left
            };
          }(),
          supportTransform: !!Se._cssProperty("transform"),
          supportTransition: !!Se._cssProperty("transition"),
          supportPassiveEvents: function() {
            var E = !1;
            try {
              er.addEventListener("test", null, Object.defineProperty({}, "passive", {
                get: /* @__PURE__ */ e(function() {
                  E = !0;
                }, "get")
              }));
            } catch {
            }
            return E;
          }(),
          supportResizeObserver: !!T.rO(),
          supportMutationObserver: !!T.mO()
        }), J.removeAttr(s.s).remove(), function() {
          if (ze.x && ze.y)
            return;
          var E = N.abs, dr = T.wW(), yr = T.wH(), rr = o(), u = /* @__PURE__ */ e(function() {
            if (Wa().length > 0) {
              var _ = T.wW(), m = T.wH(), L = _ - dr, z = m - yr;
              if (L === 0 && z === 0)
                return;
              var K = N.round(_ / (dr / 100)), P = N.round(m / (yr / 100)), ar = E(L), Ir = E(z), Dr = E(K), Tr = E(P), qr = o(), zr = ar > 2 && Ir > 2, Te = !i(Dr, Tr), Fe = qr !== rr && rr > 0, Me = zr && Te && Fe, xr = R.nativeScrollbarSize, me;
              Me && (I.append(J), me = R.nativeScrollbarSize = Jr(J[0]), J.remove(), (xr.x !== me.x || xr.y !== me.y) && q.each(Wa(), function() {
                Wa(this) && Wa(this).update("zoom");
              })), dr = _, yr = m, rr = qr;
            }
          }, "onResize");
          function i(l, _) {
            var m = E(l), L = E(_);
            return !(m === L || m + 1 === L || m - 1 === L);
          }
          e(i, "differenceIsBiggerThanOne");
          function o() {
            var l = er.screen.deviceXDPI || 0, _ = er.screen.logicalXDPI || 1;
            return er.devicePixelRatio || l / _;
          }
          e(o, "getWindowDPR"), q(er).on("resize", u);
        }();
        function Jr(E) {
          return {
            x: E[s.oH] - E[s.cH],
            y: E[s.oW] - E[s.cW]
          };
        }
        e(Jr, "calcNativeScrollbarSize");
      }
      e(p, "OverlayScrollbarsGlobals");
      function F(k) {
        var R = this, ur = q.inArray, W = T.now, Sr = "autoUpdate", I = Sr + "Interval", J = s.l, G = [], H = [], fr = !1, ze = 33, $ = ze, Jr = W(), E, dr = /* @__PURE__ */ e(function yr() {
          if (G[J] > 0 && fr) {
            E = T.rAF()(function() {
              yr();
            });
            var rr = W(), u = rr - Jr, i, o, l, _, m, L;
            if (u > $) {
              Jr = rr - u % $, i = ze;
              for (var z = 0; z < G[J]; z++)
                o = G[z], o !== M && (l = o.options(), _ = l[Sr], m = N.max(1, l[I]), L = W(), (_ === !0 || _ === null) && L - H[z] > m && (o.update("auto"), H[z] = new Date(L += m)), i = N.max(1, N.min(i, m)));
              $ = i;
            }
          } else
            $ = ze;
        }, "loop");
        R.add = function(yr) {
          ur(yr, G) === -1 && (G.push(yr), H.push(W()), G[J] > 0 && !fr && (fr = !0, k.autoUpdateLoop = fr, dr()));
        }, R.remove = function(yr) {
          var rr = ur(yr, G);
          rr > -1 && (H.splice(rr, 1), G.splice(rr, 1), G[J] === 0 && fr && (fr = !1, k.autoUpdateLoop = fr, E !== M && (T.cAF()(E), E = -1)));
        };
      }
      e(F, "OverlayScrollbarsAutoUpdateLoop");
      function or(k, R, ur, W, Sr) {
        var I = T.type, J = q.inArray, G = q.each, H = new O(), fr = q[s.p];
        if (!Rs(k))
          return;
        if (Wa(k)) {
          var ze = Wa(k);
          return ze.options(R), ze;
        }
        var $, Jr, E, dr, yr, rr, u, i, o, l, _, m, L, z, K, P, ar, Ir, Dr, Tr, qr, zr, Te, Fe, Me, xr, me, hr, Cr, fa = {}, Je = {}, ha = {}, pr = {}, xe = {}, ft = "-hidden", ve = "margin-", Re = "padding-", Ze = "border-", Kr = "top", ue = "right", fe = "bottom", br = "left", We = "min-", da = "max-", Z = "width", gr = "height", ge = "float", Y = "", Mr = "auto", Rn = "sync", Ue = "scroll", Ba = "100%", Rt = "x", Wt = "y", Qe = ".", he = " ", Wn = "scrollbar", Bn = "-horizontal", Fn = "-vertical", de = Ue + "Left", pe = Ue + "Top", St = "mousedown touchstart", Bt = "mouseup touchend touchcancel", Ft = "mousemove touchmove", zi = "mouseenter", Mi = "mouseleave", Un = "keydown", Qn = "keyup", Ut = "selectstart", Vn = "transitionend webkitTransitionEnd oTransitionEnd", qn = "__overlayScrollbarsRO__", Le = "os-", Ri = Le + "html", Ce = Le + "host", un = Ce + "-foreign", Kn = Ce + "-textarea", Wi = Ce + "-" + Wn + Bn + ft, Bi = Ce + "-" + Wn + Fn + ft, Fi = Ce + "-transition", Ui = Ce + "-rtl", Yn = Ce + "-resize-disabled", fn = Ce + "-scrolling", Qt = Ce + "-overflow", Qt = Ce + "-overflow", Qi = Qt + "-x", Vi = Qt + "-y", hn = Le + "textarea", ro = hn + "-cover", jn = Le + "padding", dn = Le + "viewport", Gn = dn + "-native-scrollbars-invisible", qi = dn + "-native-scrollbars-overlaid", Jn = Le + "content", eo = Le + "content-arrange", ao = Le + "content-glue", to = Le + "size-auto-observer", ht = Le + "resize-observer", pn = Le + "resize-observer-item", Ki = pn + "-final", _n = Le + "text-inherit", Fa = Le + Wn, Yi = Fa + "-track", ji = Yi + "-off", Gi = Fa + "-handle", Ji = Gi + "-off", Zi = Fa + "-unusable", Vt = Fa + "-" + Mr + ft, Zn = Fa + "-corner", qt = Zn + "-resize", Xi = qt + "-both", $i = qt + Bn, rs = qt + Fn, no = Fa + Bn, io = Fa + Fn, dt = Le + "dragging", bn = Le + "theme-none", Xn = [Gn, qi, ji, Ji, Zi, Vt, qt, Xi, $i, rs, dt].join(he), $n = [], ri = [s.ti], es, Kt, te, Ua = {}, so = "added removed on contract", as, pt = {}, ts, ns = 42, ei = "load", Yt = [], yn, Ea, Tt, _t, cr, j, pa, _a, Xe, nr, Rr, Qa, Ae, Va, He, bt, mn, jt, yt, xn, Gt, Jt, Lt, et, Ve, gn, Cn, at, mt, ba, Zt, xt, is, Sa, Xt, $e, tt, ss, ai, os, cs, ls, vs, us, fs, hs, Ht, It, ti, ni, ds, ps, _s, bs, ys, ms, ii, xs, qa, $t, si, An, oi, gs, Cs, As, nt, Os = {}, On, wn, ci, li, Ta, ws = ["wrap", "cols", "rows"], vi = [s.i, s.c, s.s, "open"].concat(ri), ui = [], fi, ks, Es, hi, di, it, ra, gt, pi, st, kn, En, _i, bi;
        function Be(r, t, n, c, v) {
          var d = T.isA(t) && T.isA(n), y = c ? "removeEventListener" : "addEventListener", C = c ? "off" : "on", x = d ? !1 : t.split(he), A = 0, V = q.isPlainObject(v), D = _ && (V ? v._passive : v) || !1, tr = V && (v._capture || !1), ir = _ ? {
            passive: D,
            capture: tr
          } : tr;
          if (d)
            for (; A < t[s.l]; A++)
              Be(r, t[A], n[A], c, v);
          else
            for (; A < x[s.l]; A++)
              _ ? r[0][y](x[A], n, ir) : r[C](x[A], n);
        }
        e(Be, "setupResponsiveEventListener");
        function ya(r, t, n, c) {
          Be(r, t, n, !1, c), ui.push(T.bind(Be, 0, r, t, n, !0, c));
        }
        e(ya, "addDestroyEventListener");
        function Sn(r, t) {
          if (r) {
            var n = T.rO(), c = "animationstart mozAnimationStart webkitAnimationStart MSAnimationStart", v = "childNodes", d = 3333333, y = /* @__PURE__ */ e(function() {
              r[pe](d)[de](hr ? E.n ? -d : E.i ? 0 : d : d), t();
            }, "callback");
            if (t) {
              if (m) {
                var C = r.addClass("observed").append(Ke(ht)).contents()[0], x = C[qn] = new n(y);
                x.observe(C);
              } else if (yr > 9 || !dr) {
                r.prepend(Ke(ht, Ke({
                  c: pn,
                  dir: "ltr"
                }, Ke(pn, Ke(Ki)) + Ke(pn, Ke({
                  c: Ki,
                  style: "width: 200%; height: 200%"
                })))));
                var A = r[0][v][0][v][0], V = q(A[v][1]), D = q(A[v][0]), tr = q(D[0][v][0]), ir = A[s.oW], _r = A[s.oH], Q, lr, X, kr, se = 2, Yr = W.nativeScrollbarSize, Ne = /* @__PURE__ */ e(function() {
                  D[de](d)[pe](d), V[de](d)[pe](d);
                }, "reset"), oe = /* @__PURE__ */ e(function() {
                  lr = 0, Q && (ir = X, _r = kr, y());
                }, "onResized"), Xr = /* @__PURE__ */ e(function(S) {
                  return X = A[s.oW], kr = A[s.oH], Q = X != ir || kr != _r, S && Q && !lr ? (T.cAF()(lr), lr = T.rAF()(oe)) : S || oe(), Ne(), S && (T.prvD(S), T.stpP(S)), !1;
                }, "onScroll"), $r = {}, ne = {};
                Ct(ne, Y, [-((Yr.y + 1) * se), Yr.x * -se, Yr.y * -se, -((Yr.x + 1) * se)]), q(A).css(ne), D.on(Ue, Xr), V.on(Ue, Xr), r.on(c, function() {
                  Xr(!1);
                }), $r[Z] = d, $r[gr] = d, tr.css($r), Ne();
              } else {
                var Pe = Lt.attachEvent, re = yr !== M;
                if (Pe)
                  r.prepend(Ke(ht)), Nt(r, Qe + ht)[0].attachEvent("onresize", y);
                else {
                  var Wr = Lt.createElement(b.o);
                  Wr.setAttribute(s.ti, "-1"), Wr.setAttribute(s.c, ht), Wr.onload = function() {
                    var Nr = this.contentDocument.defaultView;
                    Nr.addEventListener("resize", y), Nr.document.documentElement.style.display = "none";
                  }, Wr.type = "text/html", re && r.prepend(Wr), Wr.data = "about:blank", re || r.prepend(Wr), r.on(c, y);
                }
              }
              if (r[0] === Cn) {
                var ta = /* @__PURE__ */ e(function() {
                  var S = j.css("direction"), Or = {}, Er = 0, Oe = !1;
                  return S !== vs && (S === "ltr" ? (Or[br] = 0, Or[ue] = Mr, Er = d) : (Or[br] = Mr, Or[ue] = 0, Er = E.n ? -d : E.i ? 0 : d), _a.children().eq(0).css(Or), _a[de](Er)[pe](d), vs = S, Oe = !0), Oe;
                }, "directionChanged");
                ta(), ya(r, Ue, function(Nr) {
                  return ta() && ma(), T.prvD(Nr), T.stpP(Nr), !1;
                });
              }
            } else if (m) {
              var C = r.contents()[0], Ar = C[qn];
              Ar && (Ar.disconnect(), delete C[qn]);
            } else
              Ya(r.children(Qe + ht).eq(0));
          }
        }
        e(Sn, "setupResizeObserver");
        function oo() {
          if (L) {
            var r = 11, t = T.mO(), n = T.now(), c, v, d, y, C, x, A, V, D, tr;
            ci = /* @__PURE__ */ e(function(_r) {
              var Q = !1, lr = !1, X, kr = [];
              return z && !Cr && (G(_r, function() {
                X = this, c = X.target, v = X.attributeName, d = v === s.c, y = X.oldValue, C = c.className, Dr && d && !lr && y.indexOf(un) > -1 && C.indexOf(un) < 0 && (x = Ms(!0), Ve.className = C.split(he).concat(y.split(he).filter(function(se) {
                  return se.match(x);
                })).join(he), Q = lr = !0), Q || (Q = d ? Is(y, C) : v === s.s ? y !== c[s.s].cssText : !0), kr.push(v);
              }), gi(kr), Q && H.update(lr || Mr)), Q;
            }, "_mutationObserverHostCallback"), li = /* @__PURE__ */ e(function(_r) {
              var Q = !1, lr;
              return z && !Cr && (G(_r, function() {
                return lr = this, Q = vo(lr), !Q;
              }), Q && (V = T.now(), D = tt || $e, tr = /* @__PURE__ */ e(function() {
                K || (n = V, P && Ci(), D ? ma() : H.update(Mr));
              }, "action"), clearTimeout(A), r <= 0 || V - n > r || !D ? tr() : A = setTimeout(tr, r))), Q;
            }, "_mutationObserverContentCallback"), On = new t(ci), wn = new t(li);
          }
        }
        e(oo, "createMutationObservers");
        function Ss() {
          L && !Ta && (On.observe(Ve, {
            attributes: !0,
            attributeOldValue: !0,
            attributeFilter: vi
          }), wn.observe(P ? et : ba, {
            attributes: !0,
            attributeOldValue: !0,
            subtree: !P,
            childList: !P,
            characterData: !P,
            attributeFilter: P ? ws : vi
          }), Ta = !0);
        }
        e(Ss, "connectMutationObservers");
        function yi() {
          L && Ta && (On.disconnect(), wn.disconnect(), Ta = !1);
        }
        e(yi, "disconnectMutationObservers");
        function co() {
          if (!Cr) {
            var r, t = {
              w: Cn[s.sW],
              h: Cn[s.sH]
            };
            r = At(t, _s), _s = t, r && ma({
              _hostSizeChanged: !0
            });
          }
        }
        e(co, "hostOnResized");
        function Ts() {
          gt && La(!0);
        }
        e(Ts, "hostOnMouseEnter");
        function Ls() {
          gt && !_t.hasClass(dt) && La(!1);
        }
        e(Ls, "hostOnMouseLeave");
        function lo() {
          ra && (La(!0), clearTimeout(Es), Es = setTimeout(function() {
            ra && !K && La(!1);
          }, 100));
        }
        e(lo, "hostOnMouseMove");
        function rn(r) {
          return T.prvD(r), !1;
        }
        e(rn, "documentOnSelectStart");
        function mi(r) {
          var t = q(r.target);
          Bs(function(n, c) {
            t.is(c) && ma({
              _contentSizeChanged: !0
            });
          });
        }
        e(mi, "updateOnLoadCallback");
        function xi(r) {
          r || xi(!0), Be(j, Ft.split(he)[0], lo, !ra || r, !0), Be(j, [zi, Mi], [Ts, Ls], !gt || r, !0), !z && !r && j.one("mouseover", Ts);
        }
        e(xi, "setupHostMouseTouchEvents");
        function Hs() {
          var r = {};
          return ar && Qa && (r.w = Ha(Qa.css(We + Z)), r.h = Ha(Qa.css(We + gr)), r.c = At(r, nt), r.f = !0), nt = r, !!r.c;
        }
        e(Hs, "bodyMinSizeChanged");
        function Is(r, t) {
          var n = Ra(t) == b.s ? t.split(he) : [], c = Ra(r) == b.s ? r.split(he) : [], v = yo(c, n), d = J(bn, v), y, C;
          if (d > -1 && v.splice(d, 1), v[s.l] > 0) {
            for (C = Ms(!0, !0), y = 0; y < v.length; y++)
              if (!v[y].match(C))
                return !0;
          }
          return !1;
        }
        e(Is, "hostClassNamesChanged");
        function vo(r) {
          var t = r.attributeName, n = r.target, c = r.type, v = "closest";
          if (n === ba)
            return t === null;
          if (c === "attributes" && (t === s.c || t === s.s) && !P) {
            if (t === s.c && q(n).hasClass(Ce))
              return Is(r.oldValue, n.className);
            if (Ra(n[v]) != b.f)
              return !0;
            if (n[v](Qe + ht) !== null || n[v](Qe + Fa) !== null || n[v](Qe + Zn) !== null)
              return !1;
          }
          return !0;
        }
        e(vo, "isUnknownMutation");
        function uo() {
          if (Cr)
            return !1;
          var r = Ws(), t = P && $e && !An ? cr.val().length : 0, n = !Ta && $e && !P, c = {}, v, d, y, C;
          return n && (v = Rr.css(ge), c[ge] = hr ? ue : br, c[Z] = Mr, Rr.css(c)), C = {
            w: r[s.sW] + t,
            h: r[s.sH] + t
          }, n && (c[ge] = v, c[Z] = Ba, Rr.css(c)), d = Hs(), y = At(C, ps), ps = C, y || d;
        }
        e(uo, "updateAutoContentSizeChanged");
        function fo() {
          if (!(Cr || Ta)) {
            var r, t, n, c = [], v = [{
              _elem: j,
              _attrs: vi.concat(":visible")
            }, {
              _elem: P ? cr : M,
              _attrs: ws
            }];
            return G(v, function(d, y) {
              r = y._elem, r && G(y._attrs, function(C, x) {
                t = x.charAt(0) === ":" ? r.is(x) : r.attr(x), n = Os[x], At(t, n) && c.push(x), Os[x] = t;
              });
            }), gi(c), c[s.l] > 0;
          }
        }
        e(fo, "meaningfulAttrsChanged");
        function ho(r) {
          if (!z)
            return !0;
          var t = "flex-grow", n = "flex-shrink", c = "flex-basis", v = [Z, We + Z, da + Z, ve + br, ve + ue, br, ue, "font-weight", "word-spacing", t, n, c], d = [Re + br, Re + ue, Ze + br + Z, Ze + ue + Z], y = [gr, We + gr, da + gr, ve + Kr, ve + fe, Kr, fe, "line-height", t, n, c], C = [Re + Kr, Re + fe, Ze + Kr + Z, Ze + fe + Z], x = "s", A = "v-s", V = Ht.x === x || Ht.x === A, D = Ht.y === x || Ht.y === A, tr = !1, ir = /* @__PURE__ */ e(function(Q, lr) {
            for (var X = 0; X < Q[s.l]; X++)
              if (Q[X] === lr)
                return !0;
            return !1;
          }, "checkPropertyName");
          return D && (tr = ir(y, r), !tr && !Tr && (tr = ir(C, r))), V && !tr && (tr = ir(v, r), !tr && !Tr && (tr = ir(d, r))), tr;
        }
        e(ho, "isSizeAffectingCSSProperty");
        function gi(r) {
          r = r || ri, G(r, function(t, n) {
            if (T.inA(n, ri) > -1) {
              var c = cr.attr(n);
              I(c) == b.s ? nr.attr(n, c) : nr.removeAttr(n);
            }
          });
        }
        e(gi, "updateViewportAttrsFromTarget");
        function Ci() {
          if (!Cr) {
            var r = !An, t = pr.w, n = pr.h, c = {}, v = $e || r, d, y, C, x;
            return c[We + Z] = Y, c[We + gr] = Y, c[Z] = Mr, cr.css(c), d = et[s.oW], y = v ? N.max(d, et[s.sW] - 1) : 1, c[Z] = $e ? Mr : Ba, c[We + Z] = Ba, c[gr] = Mr, cr.css(c), C = et[s.oH], x = N.max(C, et[s.sH] - 1), c[Z] = y, c[gr] = x, Va.css(c), c[We + Z] = t, c[We + gr] = n, cr.css(c), {
              _originalWidth: d,
              _originalHeight: C,
              _dynamicWidth: y,
              _dynamicHeight: x
            };
          }
        }
        e(Ci, "textareaUpdate");
        function ma(r) {
          clearTimeout(ts), r = r || {}, pt._hostSizeChanged |= r._hostSizeChanged, pt._contentSizeChanged |= r._contentSizeChanged, pt._force |= r._force;
          var t = T.now(), n = !!pt._hostSizeChanged, c = !!pt._contentSizeChanged, v = !!pt._force, d = r._changedOptions, y = z && !K && !v && !d && t - as < ns && !tt && !$e, C;
          if (y && (ts = setTimeout(ma, ns)), !(K || y || Cr && !d || z && !v && (C = j.is(":hidden")) || j.css("display") === "inline")) {
            as = t, pt = {}, rr && !($.x && $.y) ? (i.x = 0, i.y = 0) : i = Ie({}, W.nativeScrollbarSize), xe = {
              x: (i.x + ($.x ? 0 : 3)) * 3,
              y: (i.y + ($.y ? 0 : 3)) * 3
            }, d = d || {};
            var x = /* @__PURE__ */ e(function() {
              return At.apply(this, [].slice.call(arguments).concat([v]));
            }, "checkCacheAutoForce"), A = {
              x: nr[de](),
              y: nr[pe]()
            }, V = te.scrollbars, D = te.textarea, tr = V.visibility, ir = x(tr, bs), _r = V.autoHide, Q = x(_r, ys), lr = V.clickScrolling, X = x(lr, ms), kr = V.dragScrolling, se = x(kr, ii), Yr = te.className, Ne = x(Yr, $t), oe = te.resize, Xr = x(oe, xs) && !ar, $r = te.paddingAbsolute, ne = x($r, us), Pe = te.clipAlways, re = x(Pe, fs), Wr = te.sizeAutoCapable && !ar, ta = x(Wr, ds), Ar = te.nativeScrollbarsOverlaid.showNativeScrollbars, Nr = x(Ar, ti), S = te.autoUpdate, Or = x(S, ni), Er = te.overflowBehavior, Oe = x(Er, Ht, v), ja = D.dynWidth, Ot = x(As, ja), De = D.dynHeight, Ia = x(Cs, De);
            if (di = _r === "n", it = _r === "s", ra = _r === "m", gt = _r === "l", hi = V.autoHideDelay, si = $t, kn = oe === "n", En = oe === "b", _i = oe === "h", bi = oe === "v", qa = te.normalizeRTL, Ar = Ar && $.x && $.y, bs = tr, ys = _r, ms = lr, ii = kr, $t = Yr, xs = oe, us = $r, fs = Pe, ds = Wr, ti = Ar, ni = S, Ht = Ie({}, Er), As = ja, Cs = De, Sa = Sa || {
              x: !1,
              y: !1
            }, Ne && (_e(j, si + he + bn), Zr(j, Yr !== M && Yr !== null && Yr.length > 0 ? Yr : bn)), Or && (S === !0 || S === null && dr ? (yi(), Sr.add(H)) : (Sr.remove(H), Ss())), ta)
              if (Wr)
                if (Ae ? Ae.show() : (Ae = q(Ke(ao)), Xe.before(Ae)), qr)
                  pa.show();
                else {
                  pa = q(Ke(to)), gn = pa[0], Ae.before(pa);
                  var Na = {
                    w: -1,
                    h: -1
                  };
                  Sn(pa, function() {
                    var Ma = {
                      w: gn[s.oW],
                      h: gn[s.oH]
                    };
                    At(Ma, Na) && (z && tt && Ma.h > 0 || $e && Ma.w > 0 || z && !tt && Ma.h === 0 || !$e && Ma.w === 0) && ma(), Na = Ma;
                  }), qr = !0, u !== null && pa.css(gr, u + "(100% + 1px)");
                }
              else
                qr && pa.hide(), Ae && Ae.hide();
            v && (_a.find("*").trigger(Ue), qr && pa.find("*").trigger(Ue)), C = C === M ? j.is(":hidden") : C;
            var Ye = P ? cr.attr("wrap") !== "off" : !1, an = x(Ye, An), je = j.css("direction"), we = x(je, ls), Ga = j.css("box-sizing"), Ge = x(Ga, ss), Br = Si(Re), na;
            try {
              na = qr ? gn[s.bCR]() : null;
            } catch {
              return;
            }
            hr = je === "rtl", Tr = Ga === "border-box";
            var ee = hr ? br : ue, sr = hr ? ue : br, Ja = !1, Za = qr && j.css(ge) !== "none" ? N.round(na.right - na.left) === 0 && ($r ? !0 : Ve[s.cW] - zr > 0) : !1;
            if (Wr && !Za) {
              var Xa = Ve[s.oW], wt = Ae.css(Z);
              Ae.css(Z, Mr);
              var ia = Ve[s.oW];
              Ae.css(Z, wt), Ja = Xa !== ia, Ja || (Ae.css(Z, Xa + 1), ia = Ve[s.oW], Ae.css(Z, wt), Ja = Xa !== ia);
            }
            var jr = (Za || Ja) && Wr && !C, mr = x(jr, $e), sa = !jr && $e, Fr = qr && Wr && !C ? N.round(na.bottom - na.top) === 0 : !1, ie = x(Fr, tt), oa = !Fr && tt, Pt = jr && Tr || !Tr, kt = Fr && Tr || !Tr, ca = Si(Ze, "-" + Z, !Pt, !kt), Pa = Si(ve), U = {}, B = {}, Ur = /* @__PURE__ */ e(function() {
              return {
                w: Ve[s.cW],
                h: Ve[s.cH]
              };
            }, "getHostSize"), ke = /* @__PURE__ */ e(function() {
              return {
                w: at[s.oW] + N.max(0, ba[s.cW] - ba[s.sW]),
                h: at[s.oH] + N.max(0, ba[s.cH] - ba[s.sH])
              };
            }, "getViewportSize"), Qr = zr = Br.l + Br.r, ce = Te = Br.t + Br.b;
            if (Qr *= $r ? 1 : 0, ce *= $r ? 1 : 0, Br.c = x(Br, ai), Fe = ca.l + ca.r, Me = ca.t + ca.b, ca.c = x(ca, os), xr = Pa.l + Pa.r, me = Pa.t + Pa.b, Pa.c = x(Pa, cs), An = Ye, ls = je, ss = Ga, $e = jr, tt = Fr, ai = Br, os = ca, cs = Pa, we && qr && pa.css(ge, sr), Br.c || we || ne || mr || ie || Ge || ta) {
              var ae = {}, Ee = {}, ot = [Br.t, Br.r, Br.b, Br.l];
              Ct(B, ve, [-Br.t, -Br.r, -Br.b, -Br.l]), $r ? (Ct(ae, Y, ot), Ct(P ? Ee : U, Re)) : (Ct(ae, Y), Ct(P ? Ee : U, Re, ot)), Xe.css(ae), cr.css(Ee);
            }
            pr = ke();
            var Pr = P ? Ci() : !1, $a = P && x(Pr, gs), la = P && Pr ? {
              w: ja ? Pr._dynamicWidth : Pr._originalWidth,
              h: De ? Pr._dynamicHeight : Pr._originalHeight
            } : {};
            if (gs = Pr, Fr && (ie || ne || Ge || Br.c || ca.c) ? U[gr] = Mr : (ie || ne) && (U[gr] = Ba), jr && (mr || ne || Ge || Br.c || ca.c || we) ? (U[Z] = Mr, B[da + Z] = Ba) : (mr || ne) && (U[Z] = Ba, U[ge] = Y, B[da + Z] = Y), jr ? (B[Z] = Mr, U[Z] = Se._cssPropertyValue(Z, "max-content intrinsic") || Mr, U[ge] = sr) : B[Z] = Y, Fr ? B[gr] = la.h || ba[s.cH] : B[gr] = Y, Wr && Ae.css(B), Rr.css(U), U = {}, B = {}, n || c || $a || we || Ge || ne || mr || jr || ie || Fr || Nr || Oe || re || Xr || ir || Q || se || X || Ot || Ia || an) {
              var be = "overflow", ga = be + "-x", Ca = be + "-y", ct = "hidden", va = "visible";
              if (!rr) {
                var Aa = {}, tn = Sa.y && Xt.ys && !Ar ? $.y ? nr.css(ee) : -i.y : 0, Co = Sa.x && Xt.xs && !Ar ? $.x ? nr.css(fe) : -i.x : 0;
                Ct(Aa, Y), nr.css(Aa);
              }
              var lt = Ws(), nn = {
                w: la.w || lt[s.cW],
                h: la.h || lt[s.cH]
              }, Fs = {
                w: lt[s.sW],
                h: lt[s.sH]
              };
              rr || (Aa[fe] = oa ? Y : Co, Aa[ee] = sa ? Y : tn, nr.css(Aa)), pr = ke();
              var sn = Ur(), Hi = {
                w: sn.w - xr - Fe - (Tr ? 0 : zr),
                h: sn.h - me - Me - (Tr ? 0 : Te)
              }, Dt = {
                w: N.max((jr ? nn.w : Fs.w) + Qr, Hi.w),
                h: N.max((Fr ? nn.h : Fs.h) + ce, Hi.h)
              };
              if (Dt.c = x(Dt, hs), hs = Dt, Wr) {
                (Dt.c || Fr || jr) && (B[Z] = Dt.w, B[gr] = Dt.h, P || (nn = {
                  w: lt[s.cW],
                  h: lt[s.cH]
                }));
                var Us = {}, Qs = /* @__PURE__ */ e(function(Gr) {
                  var ye = ea(Gr), ua = ye._w_h, Vr = ye._width_height, vr = Gr ? jr : Fr, Oa = Gr ? Fe : Me, Et = Gr ? zr : Te, Dn = Gr ? xr : me, zn = pr[ua] - Oa - Dn - (Tr ? 0 : Et);
                  (!vr || !vr && ca.c) && (B[Vr] = Hi[ua] - 1), vr && nn[ua] < zn && (Gr && P ? !Ye : !0) && (P && (Us[Vr] = Ha(Va.css(Vr)) - 1), B[Vr] -= 1), nn[ua] > 0 && (B[Vr] = N.max(1, B[Vr]));
                }, "setContentGlueElementCSSfunction");
                Qs(!0), Qs(!1), P && Va.css(Us), Ae.css(B);
              }
              jr && (U[Z] = Ba), jr && !Tr && !Ta && (U[ge] = "none"), Rr.css(U), U = {};
              var vt = {
                w: lt[s.sW],
                h: lt[s.sH]
              };
              vt.c = c = x(vt, xt), xt = vt, pr = ke(), sn = Ur(), n = x(sn, Zt), Zt = sn;
              var Ii = P && (pr.w === 0 || pr.h === 0), Tn = It, zt = {}, on = {}, Vs = {}, Da = {}, Lr = {}, wr = {}, cn = {}, qs = at[s.bCR](), Ks = /* @__PURE__ */ e(function(Gr) {
                var ye = ea(Gr), ua = ea(!Gr), Vr = ua._x_y, vr = ye._x_y, Oa = ye._w_h, Et = ye._width_height, Dn = Ue + ye._Left_Top + "Max", zn = qs[Et] ? N.abs(qs[Et] - pr[Oa]) : 0, Do = Tn && Tn[vr] > 0 && mt[Dn] === 0;
                zt[vr] = Er[vr] === "v-s", on[vr] = Er[vr] === "v-h", Vs[vr] = Er[vr] === "s", Da[vr] = N.max(0, N.round((vt[Oa] - pr[Oa]) * 100) / 100), Da[vr] *= Ii || Do && zn > 0 && zn < 1 ? 0 : 1, Lr[vr] = Da[vr] > 0, wr[vr] = zt[vr] || on[vr] ? Lr[Vr] && !zt[Vr] && !on[Vr] : Lr[vr], wr[vr + "s"] = wr[vr] ? Vs[vr] || zt[vr] : !1, cn[vr] = Lr[vr] && wr[vr + "s"];
              }, "setOverflowVariables");
              if (Ks(!0), Ks(!1), Da.c = x(Da, It), It = Da, Lr.c = x(Lr, Sa), Sa = Lr, wr.c = x(wr, Xt), Xt = wr, $.x || $.y) {
                var Ao = "px solid transparent", Ni = {}, rt = {}, Ln = v, Pi;
                (Lr.x || Lr.y) && (rt.w = $.y && Lr.y ? vt.w + Jr.y : Y, rt.h = $.x && Lr.x ? vt.h + Jr.x : Y, Ln = x(rt, is), is = rt), (Lr.c || wr.c || vt.c || we || mr || ie || jr || Fr || Nr) && (U[ve + sr] = U[Ze + sr] = Y, Pi = /* @__PURE__ */ e(function(Gr) {
                  var ye = ea(Gr), ua = ea(!Gr), Vr = ye._x_y, vr = Gr ? fe : ee, Oa = Gr ? Fr : jr;
                  $[Vr] && Lr[Vr] && wr[Vr + "s"] ? (U[ve + vr] = Oa ? Ar ? Y : Jr[Vr] : Y, U[Ze + vr] = (Gr ? !Oa : !0) && !Ar ? Jr[Vr] + Ao : Y) : (rt[ua._w_h] = U[ve + vr] = U[Ze + vr] = Y, Ln = !0);
                }, "setContentElementCSS"), rr ? aa(nr, Gn, !Ar) : (Pi(!0), Pi(!1))), Ar && (rt.w = rt.h = Y, Ln = !0), Ln && !rr && (Ni[Z] = wr.y ? rt.w : Y, Ni[gr] = wr.x ? rt.h : Y, Qa || (Qa = q(Ke(eo)), nr.prepend(Qa)), Qa.css(Ni)), Rr.css(U);
              }
              var le = {}, ae = {}, Di;
              if ((n || Lr.c || wr.c || vt.c || Oe || Ge || Nr || we || re || ie) && (le[sr] = Y, Di = /* @__PURE__ */ e(function(Gr) {
                var ye = ea(Gr), ua = ea(!Gr), Vr = ye._x_y, vr = ye._X_Y, Oa = Gr ? fe : ee, Et = /* @__PURE__ */ e(function() {
                  le[Oa] = Y, fa[ua._w_h] = 0;
                }, "reset");
                Lr[Vr] && wr[Vr + "s"] ? (le[be + vr] = Ue, Ar || rr ? Et() : (le[Oa] = -($[Vr] ? Jr[Vr] : i[Vr]), fa[ua._w_h] = $[Vr] ? Jr[ua._x_y] : 0)) : (le[be + vr] = Y, Et());
              }, "setViewportCSS"), Di(!0), Di(!1), !rr && (pr.h < xe.x || pr.w < xe.y) && (Lr.x && wr.x && !$.x || Lr.y && wr.y && !$.y) ? (le[Re + Kr] = xe.x, le[ve + Kr] = -xe.x, le[Re + sr] = xe.y, le[ve + sr] = -xe.y) : le[Re + Kr] = le[ve + Kr] = le[Re + sr] = le[ve + sr] = Y, le[Re + ee] = le[ve + ee] = Y, Lr.x && wr.x || Lr.y && wr.y || Ii ? P && Ii && (ae[ga] = ae[Ca] = ct) : (!Pe || on.x || zt.x || on.y || zt.y) && (P && (ae[ga] = ae[Ca] = Y), le[ga] = le[Ca] = va), Xe.css(ae), nr.css(le), le = {}, (Lr.c || Ge || mr || ie) && !($.x && $.y))) {
                var Hn = ba[s.s];
                Hn.webkitTransform = "scale(1)", Hn.display = "run-in", Hn.display = Y, Hn.webkitTransform = Y;
              }
              if (U = {}, we || mr || ie)
                if (hr && jr) {
                  var Oo = Rr.css(ge), Ys = N.round(Rr.css(ge, Y).css(br, Y).position().left);
                  Rr.css(ge, Oo);
                  var wo = N.round(Rr.position().left);
                  Ys !== wo && (U[br] = Ys);
                } else
                  U[br] = Y;
              if (Rr.css(U), P && c) {
                var za = mo();
                if (za) {
                  var js = oi === M ? !0 : za._rows !== oi._rows, Gs = za._cursorRow, ko = za._cursorColumn, Eo = za._widestRow, So = za._rows, To = za._columns, Lo = za._cursorPosition, Ho = za._cursorMax, Js = Lo >= Ho && fi, In = {
                    x: !Ye && ko === To && Gs === Eo ? It.x : -1,
                    y: (Ye ? Js || js && (Tn ? A.y === Tn.y : !1) : (Js || js) && Gs === So) ? It.y : -1
                  };
                  A.x = In.x > -1 ? hr && qa && E.i ? 0 : In.x : A.x, A.y = In.y > -1 ? In.y : A.y;
                }
                oi = za;
              }
              hr && E.i && $.y && Lr.x && qa && (A.x += fa.w || 0), jr && j[de](0), Fr && j[pe](0), nr[de](A.x)[pe](A.y);
              var Io = tr === "v", No = tr === "h", Po = tr === "a", Nn = /* @__PURE__ */ e(function(Gr, ye) {
                ye = ye === M ? Gr : ye, Ds(!0, Gr, cn.x), Ds(!1, ye, cn.y);
              }, "refreshScrollbarsVisibility");
              aa(j, Qt, wr.x || wr.y), aa(j, Qi, wr.x), aa(j, Vi, wr.y), we && !ar && aa(j, Ui, hr), ar && Zr(j, Yn), Xr && (aa(j, Yn, kn), aa(He, qt, !kn), aa(He, Xi, En), aa(He, $i, _i), aa(He, rs, bi)), (ir || Oe || wr.c || Lr.c || Nr) && (Ar ? Nr && (_e(j, fn), Ar && Nn(!1)) : Po ? Nn(cn.x, cn.y) : Io ? Nn(!0) : No && Nn(!1)), (Q || Nr) && (xi(!gt && !ra), La(di, !di)), (n || Da.c || ie || mr || Xr || Ge || ne || Nr || we) && (ki(!0), xa(!0), ki(!1), xa(!1)), X && zs(!0, lr), se && zs(!1, kr), qe("onDirectionChanged", {
                isRTL: hr,
                dir: je
              }, we), qe("onHostSizeChanged", {
                width: Zt.w,
                height: Zt.h
              }, n), qe("onContentSizeChanged", {
                width: xt.w,
                height: xt.h
              }, c), qe("onOverflowChanged", {
                x: Lr.x,
                y: Lr.y,
                xScrollable: wr.xs,
                yScrollable: wr.ys,
                clipped: wr.x || wr.y
              }, Lr.c || wr.c), qe("onOverflowAmountChanged", {
                x: Da.x,
                y: Da.y
              }, Da.c);
            }
            ar && nt && (Sa.c || nt.c) && (nt.f || Hs(), $.y && Sa.x && Rr.css(We + Z, nt.w + Jr.y), $.x && Sa.y && Rr.css(We + gr, nt.h + Jr.x), nt.c = !1), z && d.updateOnLoad && Ns(), qe("onUpdated", {
              forced: v
            });
          }
        }
        e(ma, "update");
        function Ns() {
          P || Bs(function(r, t) {
            Rr.find(t).each(function(n, c) {
              T.inA(c, Yt) < 0 && (Yt.push(c), q(c).off(ei, mi).on(ei, mi));
            });
          });
        }
        e(Ns, "updateElementsOnLoad");
        function Ai(r) {
          var t = f._validate(r, f._template, !0, Kt);
          return Kt = Ie({}, Kt, t._default), te = Ie({}, te, t._prepared), t._prepared;
        }
        e(Ai, "setOptions");
        function Oi(r) {
          var t = "parent", n = "os-resize-observer-host", c = hn + he + _n, v = P ? he + _n : Y, d = te.textarea.inheritedAttrs, y = {}, C = /* @__PURE__ */ e(function() {
            var D = r ? cr : j;
            G(y, function(tr, ir) {
              I(ir) == b.s && (tr == s.c ? D.addClass(ir) : D.attr(tr, ir));
            });
          }, "applyAdoptedAttrs"), x = [Ce, un, Kn, Yn, Ui, Wi, Bi, Fi, fn, Qt, Qi, Vi, bn, hn, _n, $t].join(he), A = {};
          j = j || (P ? Dr ? cr[t]()[t]()[t]()[t]() : q(Ke(Kn)) : cr), Rr = Rr || Ka(Jn + v), nr = nr || Ka(dn + v), Xe = Xe || Ka(jn + v), _a = _a || Ka(n), Va = Va || (P ? Ka(ro) : M), Dr && Zr(j, un), r && _e(j, x), d = I(d) == b.s ? d.split(he) : d, T.isA(d) && P && G(d, function(V, D) {
            I(D) == b.s && (y[D] = r ? j.attr(D) : cr.attr(D));
          }), r ? (Dr && z ? (_a.children().remove(), G([Xe, nr, Rr, Va], function(V, D) {
            D && _e(D.removeAttr(s.s), Xn);
          }), Zr(j, P ? Kn : Ce)) : (Ya(_a), Rr.contents().unwrap().unwrap().unwrap(), P && (cr.unwrap(), Ya(j), Ya(Va), C())), P && cr.removeAttr(s.s), ar && _e(Tt, Ri)) : (P && (te.sizeAutoCapable || (A[Z] = cr.css(Z), A[gr] = cr.css(gr)), Dr || cr.addClass(_n).wrap(j), j = cr[t]().css(A)), Dr || (Zr(cr, P ? c : Ce), j.wrapInner(Rr).wrapInner(nr).wrapInner(Xe).prepend(_a), Rr = Nt(j, Qe + Jn), nr = Nt(j, Qe + dn), Xe = Nt(j, Qe + jn), P && (Rr.prepend(Va), C())), rr && Zr(nr, Gn), $.x && $.y && Zr(nr, qi), ar && Zr(Tt, Ri), Cn = _a[0], Ve = j[0], at = Xe[0], mt = nr[0], ba = Rr[0], gi());
        }
        e(Oi, "setupStructureDOM");
        function po() {
          var r = [
            112,
            113,
            114,
            115,
            116,
            117,
            118,
            119,
            120,
            121,
            123,
            33,
            34,
            37,
            38,
            39,
            40,
            16,
            17,
            18,
            19,
            20,
            144
          ], t = [], n, c, v = 175, d = "focus";
          function y(Q) {
            Ci(), H.update(Mr), Q && dr && clearInterval(n);
          }
          e(y, "updateTextarea");
          function C(Q) {
            return cr[de](E.i && qa ? 9999999 : 0), cr[pe](0), T.prvD(Q), T.stpP(Q), !1;
          }
          e(C, "textareaOnScroll");
          function x(Q) {
            setTimeout(function() {
              K || y();
            }, 50);
          }
          e(x, "textareaOnDrop");
          function A() {
            fi = !0, Zr(j, d);
          }
          e(A, "textareaOnFocus");
          function V() {
            fi = !1, t = [], _e(j, d), y(!0);
          }
          e(V, "textareaOnFocusout");
          function D(Q) {
            var lr = Q.keyCode;
            J(lr, r) < 0 && (t[s.l] || (y(), n = setInterval(y, 1e3 / 60)), J(lr, t) < 0 && t.push(lr));
          }
          e(D, "textareaOnKeyDown");
          function tr(Q) {
            var lr = Q.keyCode, X = J(lr, t);
            J(lr, r) < 0 && (X > -1 && t.splice(X, 1), t[s.l] || y(!0));
          }
          e(tr, "textareaOnKeyUp");
          function ir(Q) {
            ni !== !0 && (Q = Q.originalEvent || Q, ho(Q.propertyName) && H.update(Mr));
          }
          e(ir, "contentOnTransitionEnd");
          function _r(Q) {
            Cr || (c !== M ? clearTimeout(c) : ((it || ra) && La(!0), en() || Zr(j, fn), qe("onScrollStart", Q)), st || (xa(!0), xa(!1)), qe("onScroll", Q), c = setTimeout(function() {
              K || (clearTimeout(c), c = M, (it || ra) && La(!1), en() || _e(j, fn), qe("onScrollStop", Q));
            }, v));
          }
          e(_r, "viewportOnScroll"), P ? (yr > 9 || !dr ? ya(cr, "input", y) : ya(cr, [Un, Qn], [D, tr]), ya(cr, [Ue, "drop", d, d + "out"], [C, x, A, V])) : ya(Rr, Vn, ir), ya(nr, Ue, _r, !0);
        }
        e(po, "setupStructureEvents");
        function wi(r) {
          var t = /* @__PURE__ */ e(function(y) {
            var C = y ? no : io, x = Ka(Fa + he + C, !0), A = Ka(Yi, x), V = Ka(Gi, x);
            return !Dr && !r && (x.append(A), A.append(V)), {
              _scrollbar: x,
              _track: A,
              _handle: V
            };
          }, "selectOrGenerateScrollbarDOM");
          function n(d) {
            var y = ea(d), C = y._scrollbar, x = y._track, A = y._handle;
            Dr && z ? G([C, x, A], function(V, D) {
              _e(D.removeAttr(s.s), Xn);
            }) : Ya(C || t(d)._scrollbar);
          }
          e(n, "resetScrollbarDOM");
          var c, v;
          r ? (n(!0), n()) : (c = t(!0), v = t(), bt = c._scrollbar, mn = c._track, jt = c._handle, yt = v._scrollbar, xn = v._track, Gt = v._handle, Dr || (Xe.after(yt), Xe.after(bt)));
        }
        e(wi, "setupScrollbarsDOM");
        function Ps(r) {
          var t = ea(r), n = t._info, c = Jt.top !== Jt, v = t._x_y, d = t._X_Y, y = Ue + t._Left_Top, C = "active", x = "snapHandle", A = "click", V = 1, D = [16, 17], tr, ir, _r, Q;
          function lr(S) {
            return yr && c ? S["screen" + d] : T.page(S)[v];
          }
          e(lr, "getPointerPosition");
          function X(S) {
            return te.scrollbars[S];
          }
          e(X, "getPreparedScrollbarsOption");
          function kr() {
            V = 0.5;
          }
          e(kr, "increaseTrackScrollAmount");
          function se() {
            V = 1;
          }
          e(se, "decreaseTrackScrollAmount");
          function Yr(S) {
            T.stpP(S);
          }
          e(Yr, "stopClickEventPropagation");
          function Ne(S) {
            J(S.keyCode, D) > -1 && kr();
          }
          e(Ne, "documentKeyDown");
          function oe(S) {
            J(S.keyCode, D) > -1 && se();
          }
          e(oe, "documentKeyUp");
          function Xr(S) {
            var Or = S.originalEvent || S, Er = Or.touches !== M;
            return Cr || K || en() || !ii || Er && !X("touchSupport") ? !1 : T.mBtn(S) === 1 || Er;
          }
          e(Xr, "onMouseTouchDownContinue");
          function $r(S) {
            if (Xr(S)) {
              var Or = n._trackLength, Er = n._handleLength, Oe = n._maxScroll, ja = (lr(S) - _r) * Q, Ot = ja / (Or - Er), De = Oe * Ot;
              De = isFinite(De) ? De : 0, hr && r && !E.i && (De *= -1), nr[y](N.round(ir + De)), st && xa(r, ir + De), _ || T.prvD(S);
            } else
              ne(S);
          }
          e($r, "documentDragMove");
          function ne(S) {
            if (S = S || S.originalEvent, Be(Ea, [Ft, Bt, Un, Qn, Ut], [$r, ne, Ne, oe, rn], !0), T.rAF()(function() {
              Be(Ea, A, Yr, !0, {
                _capture: !0
              });
            }), st && xa(r, !0), st = !1, _e(_t, dt), _e(t._handle, C), _e(t._track, C), _e(t._scrollbar, C), ir = M, _r = M, Q = 1, se(), tr !== M && (H.scrollStop(), clearTimeout(tr), tr = M), S) {
              var Or = Ve[s.bCR](), Er = S.clientX >= Or.left && S.clientX <= Or.right && S.clientY >= Or.top && S.clientY <= Or.bottom;
              Er || Ls(), (it || ra) && La(!1);
            }
          }
          e(ne, "documentMouseTouchUp");
          function Pe(S) {
            Xr(S) && re(S);
          }
          e(Pe, "onHandleMouseTouchDown");
          function re(S) {
            ir = nr[y](), ir = isNaN(ir) ? 0 : ir, (hr && r && !E.n || !hr) && (ir = ir < 0 ? 0 : ir), Q = Ti()[v], _r = lr(S), st = !X(x), Zr(_t, dt), Zr(t._handle, C), Zr(t._scrollbar, C), Be(Ea, [Ft, Bt, Ut], [$r, ne, rn]), T.rAF()(function() {
              Be(Ea, A, Yr, !1, {
                _capture: !0
              });
            }), (yr || !Ir) && T.prvD(S), T.stpP(S);
          }
          e(re, "onHandleMouseTouchDownAction");
          function Wr(S) {
            if (Xr(S)) {
              var Or = t._info._handleLength / Math.round(N.min(1, pr[t._w_h] / xt[t._w_h]) * t._info._trackLength), Er = N.round(pr[t._w_h] * Or), Oe = 270 * Or, ja = 400 * Or, Ot = t._track.offset()[t._left_top], De = S.ctrlKey, Ia = S.shiftKey, Na = Ia && De, Ye = !0, an = "linear", je, we, Ga = /* @__PURE__ */ e(function(ee) {
                st && xa(r, ee);
              }, "scrollActionFinsished"), Ge = /* @__PURE__ */ e(function() {
                Ga(), re(S);
              }, "scrollActionInstantFinished"), Br = /* @__PURE__ */ e(function na() {
                if (!K) {
                  var ee = (_r - Ot) * Q, sr = n._handleOffset, Ja = n._trackLength, Za = n._handleLength, Xa = n._maxScroll, wt = n._currentScroll, ia = Oe * V, jr = Ye ? N.max(ja, ia) : ia, mr = Xa * ((ee - Za / 2) / (Ja - Za)), sa = hr && r && (!E.i && !E.n || qa), Fr = sa ? sr < ee : sr > ee, ie = {}, oa = {
                    easing: an,
                    step: /* @__PURE__ */ e(function(kt) {
                      st && (nr[y](kt), xa(r, kt));
                    }, "step")
                  };
                  mr = isFinite(mr) ? mr : 0, mr = hr && r && !E.i ? Xa - mr : mr, Ia ? (nr[y](mr), Na ? (mr = nr[y](), nr[y](wt), mr = sa && E.i ? Xa - mr : mr, mr = sa && E.n ? -mr : mr, ie[v] = mr, H.scroll(ie, Ie(oa, {
                    duration: 130,
                    complete: Ge
                  }))) : Ge()) : (je = Ye ? Fr : je, we = sa ? je ? sr + Za >= ee : sr <= ee : je ? sr <= ee : sr + Za >= ee, we ? (clearTimeout(tr), H.scrollStop(), tr = M, Ga(!0)) : (tr = setTimeout(na, jr), ie[v] = (je ? "-=" : "+=") + Er, H.scroll(ie, Ie(oa, {
                    duration: ia
                  }))), Ye = !1);
                }
              }, "scrollAction");
              De && kr(), Q = Ti()[v], _r = T.page(S)[v], st = !X(x), Zr(_t, dt), Zr(t._track, C), Zr(t._scrollbar, C), Be(Ea, [Bt, Un, Qn, Ut], [ne, Ne, oe, rn]), Br(), T.prvD(S), T.stpP(S);
            }
          }
          e(Wr, "onTrackMouseTouchDown");
          function ta(S) {
            pi = !0, (it || ra) && La(!0);
          }
          e(ta, "onTrackMouseTouchEnter");
          function Ar(S) {
            pi = !1, (it || ra) && La(!1);
          }
          e(Ar, "onTrackMouseTouchLeave");
          function Nr(S) {
            T.stpP(S);
          }
          e(Nr, "onScrollbarMouseTouchDown"), ya(t._handle, St, Pe), ya(t._track, [St, zi, Mi], [Wr, ta, Ar]), ya(t._scrollbar, St, Nr), o && ya(t._scrollbar, Vn, function(S) {
            S.target === t._scrollbar[0] && (ki(r), xa(r));
          });
        }
        e(Ps, "setupScrollbarEvents");
        function Ds(r, t, n) {
          var c = r ? Wi : Bi, v = r ? bt : yt;
          aa(j, c, !t), aa(v, Zi, !n);
        }
        e(Ds, "refreshScrollbarAppearance");
        function La(r, t) {
          if (clearTimeout(ks), r)
            _e(bt, Vt), _e(yt, Vt);
          else {
            var n, c = "active", v = /* @__PURE__ */ e(function() {
              !pi && !K && (n = jt.hasClass(c) || Gt.hasClass(c), !n && (it || ra || gt) && Zr(bt, Vt), !n && (it || ra || gt) && Zr(yt, Vt));
            }, "hide");
            hi > 0 && t !== !0 ? ks = setTimeout(v, hi) : v();
          }
        }
        e(La, "refreshScrollbarsAutoHide");
        function ki(r) {
          var t = {}, n = ea(r), c = n._info, v = 1e6, d = N.min(1, pr[n._w_h] / xt[n._w_h]);
          t[n._width_height] = N.floor(d * 100 * v) / v + "%", en() || n._handle.css(t), c._handleLength = n._handle[0]["offset" + n._Width_Height], c._handleLengthRatio = d;
        }
        e(ki, "refreshScrollbarHandleLength");
        function xa(r, t) {
          var n = I(t) == b.b, c = 250, v = hr && r, d = ea(r), y = d._info, C = "translate(", x = Se._cssProperty("transform"), A = Se._cssProperty("transition"), V = r ? nr[de]() : nr[pe](), D = t === M || n ? V : t, tr = y._handleLength, ir = d._track[0]["offset" + d._Width_Height], _r = ir - tr, Q = {}, lr, X, kr = (mt[Ue + d._Width_Height] - mt["client" + d._Width_Height]) * (E.n && v ? -1 : 1), se = /* @__PURE__ */ e(function(Pe) {
            return isNaN(Pe / kr) ? 0 : N.max(0, N.min(1, Pe / kr));
          }, "getScrollRatio"), Yr = /* @__PURE__ */ e(function(Pe) {
            var re = _r * Pe;
            return re = isNaN(re) ? 0 : re, re = v && !E.i ? ir - tr - re : re, re = N.max(0, re), re;
          }, "getHandleOffset"), Ne = se(V), oe = se(D), Xr = Yr(oe), $r = Yr(Ne);
          y._maxScroll = kr, y._currentScroll = V, y._currentScrollRatio = Ne, l ? (lr = v ? -(ir - tr - Xr) : Xr, X = r ? C + lr + "px, 0)" : C + "0, " + lr + "px)", Q[x] = X, o && (Q[A] = n && N.abs(Xr - y._handleOffset) > 1 ? bo(d._handle) + ", " + (x + he + c + "ms") : Y)) : Q[d._left_top] = Xr, en() || (d._handle.css(Q), l && o && n && d._handle.one(Vn, function() {
            K || d._handle.css(A, Y);
          })), y._handleOffset = Xr, y._snappedHandleOffset = $r, y._trackLength = ir;
        }
        e(xa, "refreshScrollbarHandleOffset");
        function zs(r, t) {
          var n = t ? "removeClass" : "addClass", c = r ? mn : jt, v = r ? xn : Gt, d = r ? ji : Ji;
          c[n](d), v[n](d);
        }
        e(zs, "refreshScrollbarsInteractive");
        function ea(r) {
          return {
            _width_height: r ? Z : gr,
            _Width_Height: r ? "Width" : "Height",
            _left_top: r ? br : Kr,
            _Left_Top: r ? "Left" : "Top",
            _x_y: r ? Rt : Wt,
            _X_Y: r ? "X" : "Y",
            _w_h: r ? "w" : "h",
            _l_t: r ? "l" : "t",
            _track: r ? mn : xn,
            _handle: r ? jt : Gt,
            _scrollbar: r ? bt : yt,
            _info: r ? Je : ha
          };
        }
        e(ea, "getScrollbarVars");
        function Ei(r) {
          He = He || Ka(Zn, !0), r ? Dr && z ? _e(He.removeAttr(s.s), Xn) : Ya(He) : Dr || j.append(He);
        }
        e(Ei, "setupScrollbarCornerDOM");
        function _o() {
          var r = Jt.top !== Jt, t = {}, n = {}, c = {}, v;
          function d(A) {
            if (C(A)) {
              var V = x(A), D = {};
              (_i || En) && (D[Z] = n.w + (V.x - t.x) * c.x), (bi || En) && (D[gr] = n.h + (V.y - t.y) * c.y), j.css(D), T.stpP(A);
            } else
              y(A);
          }
          e(d, "documentDragMove");
          function y(A) {
            var V = A !== M;
            Be(Ea, [Ut, Ft, Bt], [rn, d, y], !0), _e(_t, dt), He.releaseCapture && He.releaseCapture(), V && (v && Ss(), H.update(Mr)), v = !1;
          }
          e(y, "documentMouseTouchUp");
          function C(A) {
            var V = A.originalEvent || A, D = V.touches !== M;
            return Cr || K ? !1 : T.mBtn(A) === 1 || D;
          }
          e(C, "onMouseTouchDownContinue");
          function x(A) {
            return yr && r ? {
              x: A.screenX,
              y: A.screenY
            } : T.page(A);
          }
          e(x, "getCoordinates"), ya(He, St, function(A) {
            C(A) && !kn && (Ta && (v = !0, yi()), t = x(A), n.w = Ve[s.oW] - (Tr ? 0 : zr), n.h = Ve[s.oH] - (Tr ? 0 : Te), c = Ti(), Be(Ea, [Ut, Ft, Bt], [rn, d, y]), Zr(_t, dt), He.setCapture && He.setCapture(), T.prvD(A), T.stpP(A));
          });
        }
        e(_o, "setupScrollbarCornerEvents");
        function qe(r, t, n) {
          if (n !== !1)
            if (z) {
              var c = te.callbacks[r], v = r, d;
              v.substr(0, 2) === "on" && (v = v.substr(2, 1).toLowerCase() + v.substr(3)), I(c) == b.f && c.call(H, t), G(Ua, function() {
                d = this, I(d.on) == b.f && d.on(v, t);
              });
            } else
              K || $n.push({
                n: r,
                a: t
              });
        }
        e(qe, "dispatchCallback");
        function Ct(r, t, n) {
          t = t || Y, n = n || [Y, Y, Y, Y], r[t + Kr] = n[0], r[t + ue] = n[1], r[t + fe] = n[2], r[t + br] = n[3];
        }
        e(Ct, "setTopRightBottomLeft");
        function Si(r, t, n, c) {
          return t = t || Y, r = r || Y, {
            t: c ? 0 : Ha(j.css(r + Kr + t)),
            r: n ? 0 : Ha(j.css(r + ue + t)),
            b: c ? 0 : Ha(j.css(r + fe + t)),
            l: n ? 0 : Ha(j.css(r + br + t))
          };
        }
        e(Si, "getTopRightBottomLeftHost");
        function bo(r) {
          var t = Se._cssProperty("transition"), n = r.css(t);
          if (n)
            return n;
          for (var c = "\\s*(([^,(]+(\\(.+?\\))?)+)[\\s,]*", v = new RegExp(c), d = new RegExp("^(" + c + ")+$"), y = "property duration timing-function delay".split(" "), C = [], x, A, V = 0, D, tr = /* @__PURE__ */ e(function(_r) {
            if (x = [], !_r.match(d))
              return _r;
            for (; _r.match(v); )
              x.push(RegExp.$1), _r = _r.replace(v, Y);
            return x;
          }, "splitCssStyleByComma"); V < y[s.l]; V++)
            for (A = tr(r.css(t + "-" + y[V])), D = 0; D < A[s.l]; D++)
              C[D] = (C[D] ? C[D] + he : Y) + A[D];
          return C.join(", ");
        }
        e(bo, "getCSSTransitionString");
        function Ms(r, t) {
          var n, c, v, d = /* @__PURE__ */ e(function(C, x) {
            if (v = "", x && Ra(C) == b.s)
              for (c = C.split(he), n = 0; n < c[s.l]; n++)
                v += "|" + c[n] + "$";
            return v;
          }, "appendClasses");
          return new RegExp("(^" + Ce + "([-_].+|)$)" + d($t, r) + d(si, t), "g");
        }
        e(Ms, "createHostClassNameRegExp");
        function Ti() {
          var r = at[s.bCR]();
          return {
            x: l && 1 / (N.round(r.width) / at[s.oW]) || 1,
            y: l && 1 / (N.round(r.height) / at[s.oH]) || 1
          };
        }
        e(Ti, "getHostElementInvertedScale");
        function Rs(r) {
          var t = "ownerDocument", n = "HTMLElement", c = r && r[t] && r[t].parentWindow || er;
          return Ra(c[n]) == b.o ? r instanceof c[n] : r && Ra(r) == b.o && r !== null && r.nodeType === 1 && Ra(r.nodeName) == b.s;
        }
        e(Rs, "isHTMLElement");
        function yo(r, t) {
          var n = [], c = [], v, d;
          for (v = 0; v < r.length; v++)
            n[r[v]] = !0;
          for (v = 0; v < t.length; v++)
            n[t[v]] ? delete n[t[v]] : n[t[v]] = !0;
          for (d in n)
            c.push(d);
          return c;
        }
        e(yo, "getArrayDifferences");
        function Ha(r, t) {
          var n = t ? parseFloat(r) : parseInt(r, 10);
          return isNaN(n) ? 0 : n;
        }
        e(Ha, "parseToZeroOrNumber");
        function mo() {
          var r = et.selectionStart;
          if (r !== M) {
            var t = cr.val(), n = t[s.l], c = t.split(`
`), v = c[s.l], d = t.substr(0, r).split(`
`), y = 0, C = 0, x = d[s.l], A = d[d[s.l] - 1][s.l], V, D;
            for (D = 0; D < c[s.l]; D++)
              V = c[D][s.l], V > C && (y = D + 1, C = V);
            return {
              _cursorRow: x,
              _cursorColumn: A,
              _rows: v,
              _columns: C,
              _widestRow: y,
              _cursorPosition: r,
              _cursorMax: n
            };
          }
        }
        e(mo, "getTextareaInfo");
        function en() {
          return ti && $.x && $.y;
        }
        e(en, "nativeOverlayScrollbarsAreActive");
        function Ws() {
          return P ? Va[0] : ba;
        }
        e(Ws, "getContentMeasureElement");
        function Ke(r, t) {
          return "<div " + (r ? I(r) == b.s ? 'class="' + r + '"' : function() {
            var n, c = Y;
            if (q.isPlainObject(r))
              for (n in r)
                c += (n === "c" ? "class" : n) + '="' + r[n] + '" ';
            return c;
          }() : Y) + ">" + (t || Y) + "</div>";
        }
        e(Ke, "generateDiv");
        function Ka(r, t) {
          var n = I(t) == b.b, c = n ? j : t || j;
          return Dr && !c[s.l] ? null : Dr ? c[n ? "children" : "find"](Qe + r.replace(/\s/g, Qe)).eq(0) : q(Ke(r));
        }
        e(Ka, "selectOrGenerateDivByClass");
        function Li(r, t) {
          for (var n = t.split(Qe), c = 0, v; c < n.length; c++) {
            if (!r[s.hOP](n[c]))
              return;
            v = r[n[c]], c < n.length && I(v) == b.o && (r = v);
          }
          return v;
        }
        e(Li, "getObjectPropVal");
        function xo(r, t, n) {
          for (var c = t.split(Qe), v = c.length, d = 0, y = {}, C = y; d < v; d++)
            y = y[c[d]] = d + 1 < v ? {} : n;
          q.extend(r, C, !0);
        }
        e(xo, "setObjectPropVal");
        function Bs(r) {
          var t = te.updateOnLoad;
          t = I(t) == b.s ? t.split(he) : t, T.isA(t) && !K && G(t, r);
        }
        e(Bs, "eachUpdateOnLoad");
        function At(r, t, n) {
          if (n)
            return n;
          if (I(r) == b.o && I(t) == b.o) {
            for (var c in r)
              if (c !== "c")
                if (r[s.hOP](c) && t[s.hOP](c)) {
                  if (At(r[c], t[c]))
                    return !0;
                } else
                  return !0;
          } else
            return r !== t;
          return !1;
        }
        e(At, "checkCache");
        function Ie() {
          return q.extend.apply(this, [!0].concat([].slice.call(arguments)));
        }
        e(Ie, "extendDeep");
        function Zr(r, t) {
          return fr.addClass.call(r, t);
        }
        e(Zr, "addClass");
        function _e(r, t) {
          return fr.removeClass.call(r, t);
        }
        e(_e, "removeClass");
        function aa(r, t, n) {
          return n ? Zr(r, t) : _e(r, t);
        }
        e(aa, "addRemoveClass");
        function Ya(r) {
          return fr.remove.call(r);
        }
        e(Ya, "remove");
        function Nt(r, t) {
          return fr.find.call(r, t).eq(0);
        }
        e(Nt, "findFirst"), H.sleep = function() {
          Cr = !0;
        }, H.update = function(r) {
          if (!K) {
            var t, n, c = I(r) == b.s, v, d, y;
            return c ? r === Mr ? (t = fo(), n = uo(), v = t || n, v && ma({
              _contentSizeChanged: n,
              _changedOptions: z ? M : te
            })) : r === Rn ? Ta ? (d = ci(On.takeRecords()), y = li(wn.takeRecords())) : d = H.update(Mr) : r === "zoom" && ma({
              _hostSizeChanged: !0,
              _contentSizeChanged: !0
            }) : (r = Cr || r, Cr = !1, (!H.update(Rn) || r) && ma({
              _force: r
            })), Ns(), v || d || y;
          }
        }, H.options = function(r, t) {
          var n = {}, c;
          if (q.isEmptyObject(r) || !q.isPlainObject(r))
            if (I(r) == b.s)
              if (arguments.length > 1)
                xo(n, r, t), c = Ai(n);
              else
                return Li(Kt, r);
            else
              return Kt;
          else
            c = Ai(r);
          q.isEmptyObject(c) || ma({
            _changedOptions: c
          });
        }, H.destroy = function() {
          if (!K) {
            Sr.remove(H), yi(), Sn(_a), Sn(pa);
            for (var r in Ua)
              H.removeExt(r);
            for (; ui[s.l] > 0; )
              ui.pop()();
            xi(!0), Ae && Ya(Ae), Qa && Ya(Qa), qr && Ya(pa), wi(!0), Ei(!0), Oi(!0);
            for (var t = 0; t < Yt[s.l]; t++)
              q(Yt[t]).off(ei, mi);
            Yt = M, K = !0, Cr = !0, Wa(k, 0), qe("onDestroyed");
          }
        }, H.scroll = function(r, t, n, c) {
          if (arguments.length === 0 || r === M) {
            var v = Je, d = ha, y = qa && hr && E.i, C = qa && hr && E.n, x = v._currentScroll, A = v._currentScrollRatio, V = v._maxScroll;
            return A = y ? 1 - A : A, x = y ? V - x : x, x *= C ? -1 : 1, V *= C ? -1 : 1, {
              position: {
                x,
                y: d._currentScroll
              },
              ratio: {
                x: A,
                y: d._currentScrollRatio
              },
              max: {
                x: V,
                y: d._maxScroll
              },
              handleOffset: {
                x: v._handleOffset,
                y: d._handleOffset
              },
              handleLength: {
                x: v._handleLength,
                y: d._handleLength
              },
              handleLengthRatio: {
                x: v._handleLengthRatio,
                y: d._handleLengthRatio
              },
              trackLength: {
                x: v._trackLength,
                y: d._trackLength
              },
              snappedHandleOffset: {
                x: v._snappedHandleOffset,
                y: d._snappedHandleOffset
              },
              isRTL: hr,
              isRTLNormalized: qa
            };
          }
          H.update(Rn);
          var D = qa, tr = [Rt, br, "l"], ir = [Wt, Kr, "t"], _r = ["+=", "-=", "*=", "/="], Q = I(t) == b.o, lr = Q ? t.complete : c, X, kr = {}, se = {}, Yr, Ne, oe, Xr = "end", $r = "begin", ne = "center", Pe = "nearest", re = "always", Wr = "never", ta = "ifneeded", Ar = s.l, Nr, S, Or, Er, Oe, ja = [Rt, Wt, "xy", "yx"], Ot = [$r, Xr, ne, Pe], De = [re, Wr, ta], Ia = r[s.hOP]("el"), Na = Ia ? r.el : r, Ye = Na instanceof q || ut ? Na instanceof ut : !1, an = Ye ? !1 : Rs(Na), je = /* @__PURE__ */ e(function() {
            Yr && xa(!0), Ne && xa(!1);
          }, "updateScrollbarInfos"), we = I(lr) != b.f ? M : function() {
            je(), lr();
          };
          function Ga(U, B) {
            for (X = 0; X < B[Ar]; X++)
              if (U === B[X])
                return !0;
            return !1;
          }
          e(Ga, "checkSettingsStringValue");
          function Ge(U, B) {
            var Ur = U ? tr : ir;
            if (B = I(B) == b.s || I(B) == b.n ? [B, B] : B, T.isA(B))
              return U ? B[0] : B[1];
            if (I(B) == b.o) {
              for (X = 0; X < Ur[Ar]; X++)
                if (Ur[X] in B)
                  return B[Ur[X]];
            }
          }
          e(Ge, "getRawScroll");
          function Br(U, B) {
            var Ur = I(B) == b.s, ke, Qr, ce = U ? Je : ha, ae = ce._currentScroll, Ee = ce._maxScroll, ot = " * ", Pr, $a = hr && U, la = $a && E.n && !D, be = "replace", ga = eval, Ca;
            if (Ur ? (B[Ar] > 2 && (Ca = B.substr(0, 2), J(Ca, _r) > -1 && (ke = Ca)), B = ke ? B.substr(2) : B, B = B[be](/min/g, 0)[be](/</g, 0)[be](/max/g, (la ? "-" : Y) + Ba)[be](/>/g, (la ? "-" : Y) + Ba)[be](/px/g, Y)[be](/%/g, ot + Ee * ($a && E.n ? -1 : 1) / 100)[be](/vw/g, ot + pr.w)[be](/vh/g, ot + pr.h), Qr = Ha(isNaN(B) ? Ha(ga(B), !0).toFixed() : B)) : Qr = B, Qr !== M && !isNaN(Qr) && I(Qr) == b.n) {
              var ct = D && $a, va = ae * (ct && E.n ? -1 : 1), Aa = ct && E.i, tn = ct && E.n;
              switch (va = Aa ? Ee - va : va, ke) {
                case "+=":
                  Pr = va + Qr;
                  break;
                case "-=":
                  Pr = va - Qr;
                  break;
                case "*=":
                  Pr = va * Qr;
                  break;
                case "/=":
                  Pr = va / Qr;
                  break;
                default:
                  Pr = Qr;
                  break;
              }
              Pr = Aa ? Ee - Pr : Pr, Pr *= tn ? -1 : 1, Pr = $a && E.n ? N.min(0, N.max(Ee, Pr)) : N.max(0, N.min(Ee, Pr));
            }
            return Pr === ae ? M : Pr;
          }
          e(Br, "getFinalScroll");
          function na(U, B, Ur, ke) {
            var Qr = [Ur, Ur], ce = I(U), ae, Ee;
            if (ce == B)
              U = [U, U];
            else if (ce == b.a) {
              if (ae = U[Ar], ae > 2 || ae < 1)
                U = Qr;
              else
                for (ae === 1 && (U[1] = Ur), X = 0; X < ae; X++)
                  if (Ee = U[X], I(Ee) != B || !Ga(Ee, ke)) {
                    U = Qr;
                    break;
                  }
            } else
              ce == b.o ? U = [U[Rt] || Ur, U[Wt] || Ur] : U = Qr;
            return {
              x: U[0],
              y: U[1]
            };
          }
          e(na, "getPerAxisValue");
          function ee(U) {
            var B = [], Ur, ke, Qr = [Kr, ue, fe, br];
            for (X = 0; X < U[Ar] && X !== Qr[Ar]; X++)
              Ur = U[X], ke = I(Ur), ke == b.b ? B.push(Ur ? Ha(Oe.css(ve + Qr[X])) : 0) : B.push(ke == b.n ? Ur : 0);
            return B;
          }
          if (e(ee, "generateMargin"), Ye || an) {
            var sr = Ia ? r.margin : 0, Ja = Ia ? r.axis : 0, Za = Ia ? r.scroll : 0, Xa = Ia ? r.block : 0, wt = [0, 0, 0, 0], ia = I(sr), jr;
            if (Oe = Ye ? Na : q(Na), Oe[Ar] > 0) {
              ia == b.n || ia == b.b ? sr = ee([sr, sr, sr, sr]) : ia == b.a ? (jr = sr[Ar], jr === 2 ? sr = ee([sr[0], sr[1], sr[0], sr[1]]) : jr >= 4 ? sr = ee(sr) : sr = wt) : ia == b.o ? sr = ee([sr[Kr], sr[ue], sr[fe], sr[br]]) : sr = wt, Nr = Ga(Ja, ja) ? Ja : "xy", S = na(Za, b.s, re, De), Or = na(Xa, b.s, $r, Ot), Er = sr;
              var mr = {
                l: Je._currentScroll,
                t: ha._currentScroll
              }, sa = Xe.offset(), Fr = Oe.offset(), ie = {
                x: S.x == Wr || Nr == Wt,
                y: S.y == Wr || Nr == Rt
              };
              Fr[Kr] -= Er[0], Fr[br] -= Er[3];
              var oa = {
                x: N.round(Fr[br] - sa[br] + mr.l),
                y: N.round(Fr[Kr] - sa[Kr] + mr.t)
              };
              if (hr && (!E.n && !E.i && (oa.x = N.round(sa[br] - Fr[br] + mr.l)), E.n && D && (oa.x *= -1), E.i && D && (oa.x = N.round(sa[br] - Fr[br] + (Je._maxScroll - mr.l)))), Or.x != $r || Or.y != $r || S.x == ta || S.y == ta || hr) {
                var Pt = Oe[0], kt = l ? Pt[s.bCR]() : {
                  width: Pt[s.oW],
                  height: Pt[s.oH]
                }, ca = {
                  w: kt[Z] + Er[3] + Er[1],
                  h: kt[gr] + Er[0] + Er[2]
                }, Pa = /* @__PURE__ */ e(function(B) {
                  var Ur = ea(B), ke = Ur._w_h, Qr = Ur._left_top, ce = Ur._x_y, ae = Or[ce] == (B && hr ? $r : Xr), Ee = Or[ce] == ne, ot = Or[ce] == Pe, Pr = S[ce] == Wr, $a = S[ce] == ta, la = pr[ke], be = sa[Qr], ga = ca[ke], Ca = Fr[Qr], ct = Ee ? 2 : 1, va = Ca + ga / 2, Aa = be + la / 2, tn = ga <= la && Ca >= be && Ca + ga <= be + la;
                  Pr ? ie[ce] = !0 : ie[ce] || ((ot || $a) && (ie[ce] = $a ? tn : !1, ae = ga < la ? va > Aa : va < Aa), oa[ce] -= ae || Ee ? (la / ct - ga / ct) * (B && hr && D ? -1 : 1) : 0);
                }, "finalizeBlock");
                Pa(!0), Pa(!1);
              }
              ie.y && delete oa.y, ie.x && delete oa.x, r = oa;
            }
          }
          kr[de] = Br(!0, Ge(!0, r)), kr[pe] = Br(!1, Ge(!1, r)), Yr = kr[de] !== M, Ne = kr[pe] !== M, (Yr || Ne) && (t > 0 || Q) ? Q ? (t.complete = we, nr.animate(kr, t)) : (oe = {
            duration: t,
            complete: we
          }, T.isA(n) || q.isPlainObject(n) ? (se[de] = n[0] || n.x, se[pe] = n[1] || n.y, oe.specialEasing = se) : oe.easing = n, nr.animate(kr, oe)) : (Yr && nr[de](kr[de]), Ne && nr[pe](kr[pe]), je());
        }, H.scrollStop = function(r, t, n) {
          return nr.stop(r, t, n), H;
        }, H.getElements = function(r) {
          var t = {
            target: et,
            host: Ve,
            padding: at,
            viewport: mt,
            content: ba,
            scrollbarHorizontal: {
              scrollbar: bt[0],
              track: mn[0],
              handle: jt[0]
            },
            scrollbarVertical: {
              scrollbar: yt[0],
              track: xn[0],
              handle: Gt[0]
            },
            scrollbarCorner: He[0]
          };
          return I(r) == b.s ? Li(t, r) : t;
        }, H.getState = function(r) {
          function t(c) {
            if (!q.isPlainObject(c))
              return c;
            var v = Ie({}, c), d = /* @__PURE__ */ e(function(C, x) {
              v[s.hOP](C) && (v[x] = v[C], delete v[C]);
            }, "changePropertyName");
            return d("w", Z), d("h", gr), delete v.c, v;
          }
          e(t, "prepare");
          var n = {
            destroyed: !!t(K),
            sleeping: !!t(Cr),
            autoUpdate: t(!Ta),
            widthAuto: t($e),
            heightAuto: t(tt),
            padding: t(ai),
            overflowAmount: t(It),
            hideOverflow: t(Xt),
            hasOverflow: t(Sa),
            contentScrollSize: t(xt),
            viewportSize: t(pr),
            hostSize: t(Zt),
            documentMixed: t(Ir)
          };
          return I(r) == b.s ? Li(n, r) : n;
        }, H.ext = function(r) {
          var t, n = so.split(" "), c = 0;
          if (I(r) == b.s) {
            if (Ua[s.hOP](r))
              for (t = Ie({}, Ua[r]); c < n.length; c++)
                delete t[n[c]];
          } else {
            t = {};
            for (c in Ua)
              t[c] = Ie({}, H.ext(c));
          }
          return t;
        }, H.addExt = function(r, t) {
          var n = O.extension(r), c, v, d, y, C = !0;
          if (n) {
            if (Ua[s.hOP](r))
              return H.ext(r);
            if (c = n.extensionFactory.call(H, Ie({}, n.defaultOptions), q, T), c && (d = c.contract, I(d) == b.f && (y = d(er), C = I(y) == b.b ? y : C), C))
              return Ua[r] = c, v = c.added, I(v) == b.f && v(t), H.ext(r);
          } else
            console.warn('A extension with the name "' + r + `" isn't registered.`);
        }, H.removeExt = function(r) {
          var t = Ua[r], n;
          return t ? (delete Ua[r], n = t.removed, I(n) == b.f && n(), !0) : !1;
        };
        function go(r, t, n) {
          es = W.defaultOptions, rr = W.nativeScrollbarStyling, i = Ie({}, W.nativeScrollbarSize), $ = Ie({}, W.nativeScrollbarIsOverlaid), Jr = Ie({}, W.overlayScrollbarDummySize), E = Ie({}, W.rtlScrollBehavior), Ai(Ie({}, es, t)), u = W.cssCalc, yr = W.msie, dr = W.autoUpdateRecommended, o = W.supportTransition, l = W.supportTransform, _ = W.supportPassiveEvents, m = W.supportResizeObserver, L = W.supportMutationObserver, Ea = q(r.ownerDocument), Lt = Ea[0], yn = q(Lt.defaultView || Lt.parentWindow), Jt = yn[0], Tt = Nt(Ea, "html"), _t = Nt(Tt, "body"), cr = q(r), et = cr[0], P = cr.is("textarea"), ar = cr.is("body"), Ir = Lt !== Hr, Dr = P ? cr.hasClass(hn) && cr.parent().hasClass(Jn) : cr.hasClass(Ce) && cr.children(Qe + jn)[s.l];
          var c, v;
          return $.x && $.y && !te.nativeScrollbarsOverlaid.initialize ? (qe("onInitializationWithdrawn"), Dr && (Oi(!0), wi(!0), Ei(!0)), K = !0, Cr = !0, H) : (ar && (c = {}, c.l = N.max(cr[de](), Tt[de](), yn[de]()), c.t = N.max(cr[pe](), Tt[pe](), yn[pe]()), v = /* @__PURE__ */ e(function() {
            nr.removeAttr(s.ti), Be(nr, St, v, !0, !0);
          }, "bodyMouseTouchDownListener")), Oi(), wi(), Ei(), po(), Ps(!0), Ps(!1), _o(), oo(), Sn(_a, co), ar && (nr[de](c.l)[pe](c.t), Hr.activeElement == r && mt.focus && (nr.attr(s.ti, "-1"), mt.focus(), Be(nr, St, v, !1, !0))), H.update(Mr), z = !0, qe("onInitialized"), G($n, function(d, y) {
            qe(y.n, y.a);
          }), $n = [], I(n) == b.s && (n = [n]), T.isA(n) ? G(n, function(d, y) {
            H.addExt(y);
          }) : q.isPlainObject(n) && G(n, function(d, y) {
            H.addExt(d, y);
          }), setTimeout(function() {
            o && !K && Zr(j, Fi);
          }, 333), H);
        }
        return e(go, "construct"), O.valid(go(k, R, ur)) && Wa(k, H), H;
      }
      return e(or, "OverlayScrollbarsInstance"), O = er[Mt] = function(k, R, ur) {
        if (arguments[s.l] === 0)
          return this;
        var W = [], Sr = q.isPlainObject(R), I, J;
        return k ? (k = k[s.l] != M ? k : [k[0] || k], h(), k[s.l] > 0 && (Sr ? q.each(k, function(G, H) {
          I = H, I !== M && W.push(or(I, R, ur, w, g));
        }) : q.each(k, function(G, H) {
          I = Wa(H), (R === "!" && O.valid(I) || T.type(R) == b.f && R(H, I) || R === M) && W.push(I);
        }), J = W[s.l] === 1 ? W[0] : W), J) : Sr || !R ? J : W;
      }, O.globals = function() {
        h();
        var k = q.extend(!0, {}, w);
        return delete k.msie, k;
      }, O.defaultOptions = function(k) {
        h();
        var R = w.defaultOptions;
        if (k === M)
          return q.extend(!0, {}, R);
        w.defaultOptions = q.extend(!0, {}, R, f._validate(k, f._template, !0, R)._default);
      }, O.valid = function(k) {
        return k instanceof O && !k.getState().destroyed;
      }, O.extension = function(k, R, ur) {
        var W = T.type(k) == b.s, Sr = arguments[s.l], I = 0;
        if (Sr < 1 || !W)
          return q.extend(!0, {
            length: a[s.l]
          }, a);
        if (W) {
          if (T.type(R) == b.f)
            a.push({
              name: k,
              extensionFactory: R,
              defaultOptions: ur
            });
          else
            for (; I < a[s.l]; I++)
              if (a[I].name === k)
                if (Sr > 1)
                  a.splice(I, 1);
                else
                  return q.extend(!0, {}, a[I]);
        }
      }, O;
    }();
    return ut && ut.fn && (ut.fn.overlayScrollbars = function(O, w) {
      var g = this;
      return ut.isPlainObject(O) ? (ut.each(g, function() {
        Mn(this, O, w);
      }), g) : Mn(g, O);
    }), Mn;
  });
})(Xs);
var vn = Xs.exports, Qo = /* @__PURE__ */ e(function(er) {
  var Hr = er.options, M = Hr === void 0 ? {} : Hr, Mt = er.extensions, b = er.className, s = er.children, Se = Ro(er, ["options", "extensions", "className", "children"]), T = ln.exports.useRef(), N = ln.exports.useRef();
  return ln.exports.useEffect(function() {
    return N.current = vn(T.current, M, Mt), Zs(N.current, b), function() {
      vn.valid(N.current) && (N.current.destroy(), N.current = null);
    };
  }, []), ln.exports.useEffect(function() {
    vn.valid(N.current) && N.current.options(M);
  }, [M]), ln.exports.useEffect(function() {
    vn.valid(N.current) && Zs(N.current, b);
  }, [b]), /* @__PURE__ */ Wo("div", {
    ...Object.assign({
      className: "os-host"
    }, Se, {
      ref: T
    }),
    children: [/* @__PURE__ */ wa("div", {
      className: "os-resize-observer-host"
    }), /* @__PURE__ */ wa("div", {
      className: "os-padding",
      children: /* @__PURE__ */ wa("div", {
        className: "os-viewport",
        children: /* @__PURE__ */ wa("div", {
          className: "os-content",
          children: s
        })
      })
    }), /* @__PURE__ */ wa("div", {
      className: "os-scrollbar os-scrollbar-horizontal ",
      children: /* @__PURE__ */ wa("div", {
        className: "os-scrollbar-track",
        children: /* @__PURE__ */ wa("div", {
          className: "os-scrollbar-handle"
        })
      })
    }), /* @__PURE__ */ wa("div", {
      className: "os-scrollbar os-scrollbar-vertical",
      children: /* @__PURE__ */ wa("div", {
        className: "os-scrollbar-track",
        children: /* @__PURE__ */ wa("div", {
          className: "os-scrollbar-handle"
        })
      })
    }), /* @__PURE__ */ wa("div", {
      className: "os-scrollbar-corner"
    })]
  });
}, "OverlayScrollbarsComponent");
function Zs(ka, er) {
  if (vn.valid(ka)) {
    var Hr = ka.getElements(), M = Hr.host, Mt = new RegExp("(^os-host([-_].+|)$)|".concat(ka.options().className.replace(/\s/g, "$|"), "$"), "g"), b = M.className.split(" ").filter(function(s) {
      return s.match(Mt);
    }).join(" ");
    M.className = "".concat(b, " ").concat(er || "");
  }
}
e(Zs, "mergeHostClassNames");
export {
  Qo as OverlayScrollbarsComponent,
  Qo as default
};
//# sourceMappingURL=OverlayScrollbars-1355f44c.6e5f5255.js.map
