var Jt = Object.defineProperty;
var s = (t, e) => Jt(t, "name", { value: e, configurable: !0 });
import { r as P, $ as Kt, a1 as Ae, bi as de, bj as ve, _ as Qt, a3 as Ve, bk as I, a6 as Zt, bl as X, j as ot, bm as Fe, bn as He, bo as Pe, bp as xt, bq as B, br as L, bs as $, bt as V, bu as Ne, bv as fe, bw as it, bx as Ue, by as _t, bz as Et, bA as er } from "./iframe.ddb174ff.js";
import "./es.regexp.flags.2d1728d8.js";
import { r as tr } from "./index.45aef0cd.js";
import "vue";
var at, st;
function rr(t, e) {
  return ar(t) || ir(t, e) || or(t, e) || nr();
}
s(rr, "_slicedToArray");
function nr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
s(nr, "_nonIterableRest");
function or(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return lt(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return lt(t, e);
  }
}
s(or, "_unsupportedIterableToArray");
function lt(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
s(lt, "_arrayLikeToArray");
function ir(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r = [], o = !0, i = !1, l, a;
    try {
      for (n = n.call(t); !(o = (l = n.next()).done) && (r.push(l.value), !(e && r.length === e)); o = !0)
        ;
    } catch (c) {
      i = !0, a = c;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i)
          throw a;
      }
    }
    return r;
  }
}
s(ir, "_iterableToArrayLimit");
function ar(t) {
  if (Array.isArray(t))
    return t;
}
s(ar, "_arrayWithHoles");
function Tt(t, e) {
  return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, {
    raw: {
      value: Object.freeze(e)
    }
  }));
}
s(Tt, "_taggedTemplateLiteral");
function Se(t) {
  return Se = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Se(t);
}
s(Se, "_typeof");
function Y(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
s(Y, "getNodeName");
function U(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
s(U, "getWindow");
function ae(t) {
  var e = U(t).Element;
  return t instanceof e || t instanceof Element;
}
s(ae, "isElement");
function H(t) {
  var e = U(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
s(H, "isHTMLElement");
function Rt(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = U(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
s(Rt, "isShadowRoot");
function sr(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(n) {
    var r = e.styles[n] || {}, o = e.attributes[n] || {}, i = e.elements[n];
    !H(i) || !Y(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(l) {
      var a = o[l];
      a === !1 ? i.removeAttribute(l) : i.setAttribute(l, a === !0 ? "" : a);
    }));
  });
}
s(sr, "applyStyles");
function lr(t) {
  var e = t.state, n = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow), function() {
    Object.keys(e.elements).forEach(function(r) {
      var o = e.elements[r], i = e.attributes[r] || {}, l = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : n[r]), a = l.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !H(o) || !Y(o) || (Object.assign(o.style, a), Object.keys(i).forEach(function(c) {
        o.removeAttribute(c);
      }));
    });
  };
}
s(lr, "effect$2");
var cr = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: sr,
  effect: lr,
  requires: ["computeStyles"]
};
function W(t) {
  return t.split("-")[0];
}
s(W, "getBasePlacement");
var ne = Math.max, Ce = Math.min, se = Math.round;
function le(t, e) {
  e === void 0 && (e = !1);
  var n = t.getBoundingClientRect(), r = 1, o = 1;
  if (H(t) && e) {
    var i = t.offsetHeight, l = t.offsetWidth;
    l > 0 && (r = se(n.width) / l || 1), i > 0 && (o = se(n.height) / i || 1);
  }
  return {
    width: n.width / r,
    height: n.height / o,
    top: n.top / o,
    right: n.right / r,
    bottom: n.bottom / o,
    left: n.left / r,
    x: n.left / r,
    y: n.top / o
  };
}
s(le, "getBoundingClientRect");
function qe(t) {
  var e = le(t), n = t.offsetWidth, r = t.offsetHeight;
  return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), {
    x: t.offsetLeft,
    y: t.offsetTop,
    width: n,
    height: r
  };
}
s(qe, "getLayoutRect");
function Pt(t, e) {
  var n = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return !0;
  if (n && Rt(n)) {
    var r = e;
    do {
      if (r && t.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
s(Pt, "contains");
function F(t) {
  return U(t).getComputedStyle(t);
}
s(F, "getComputedStyle");
function pr(t) {
  return ["table", "td", "th"].indexOf(Y(t)) >= 0;
}
s(pr, "isTableElement");
function Z(t) {
  return ((ae(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
s(Z, "getDocumentElement");
function ke(t) {
  return Y(t) === "html" ? t : t.assignedSlot || t.parentNode || (Rt(t) ? t.host : null) || Z(t);
}
s(ke, "getParentNode");
function ct(t) {
  return !H(t) || F(t).position === "fixed" ? null : t.offsetParent;
}
s(ct, "getTrueOffsetParent");
function ur(t) {
  var e = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && H(t)) {
    var r = F(t);
    if (r.position === "fixed")
      return null;
  }
  for (var o = ke(t); H(o) && ["html", "body"].indexOf(Y(o)) < 0; ) {
    var i = F(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || e && i.willChange === "filter" || e && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
s(ur, "getContainingBlock");
function ye(t) {
  for (var e = U(t), n = ct(t); n && pr(n) && F(n).position === "static"; )
    n = ct(n);
  return n && (Y(n) === "html" || Y(n) === "body" && F(n).position === "static") ? e : n || ur(t) || e;
}
s(ye, "getOffsetParent");
function Ye(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
s(Ye, "getMainAxisFromPlacement");
function he(t, e, n) {
  return ne(t, Ce(e, n));
}
s(he, "within");
function fr(t, e, n) {
  var r = he(t, e, n);
  return r > n ? n : r;
}
s(fr, "withinMaxClamp");
function St() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
s(St, "getFreshSideObject");
function Ct(t) {
  return Object.assign({}, St(), t);
}
s(Ct, "mergePaddingObject");
function At(t, e) {
  return e.reduce(function(n, r) {
    return n[r] = t, n;
  }, {});
}
s(At, "expandToHashMap");
var dr = /* @__PURE__ */ s(function(e, n) {
  return e = typeof e == "function" ? e(Object.assign({}, n.rects, {
    placement: n.placement
  })) : e, Ct(typeof e != "number" ? e : At(e, Ue));
}, "toPaddingObject");
function vr(t) {
  var e, n = t.state, r = t.name, o = t.options, i = n.elements.arrow, l = n.modifiersData.popperOffsets, a = W(n.placement), c = Ye(a), u = [L, V].indexOf(a) >= 0, p = u ? "height" : "width";
  if (!(!i || !l)) {
    var v = dr(o.padding, n), y = qe(i), f = c === "y" ? B : L, h = c === "y" ? $ : V, m = n.rects.reference[p] + n.rects.reference[c] - l[c] - n.rects.popper[p], g = l[c] - n.rects.reference[c], T = ye(i), R = T ? c === "y" ? T.clientHeight || 0 : T.clientWidth || 0 : 0, O = m / 2 - g / 2, d = v[f], w = R - y[p] - v[h], b = R / 2 - y[p] / 2 + O, x = he(d, b, w), S = c;
    n.modifiersData[r] = (e = {}, e[S] = x, e.centerOffset = x - b, e);
  }
}
s(vr, "arrow");
function hr(t) {
  var e = t.state, n = t.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  if (o != null && !(typeof o == "string" && (o = e.elements.popper.querySelector(o), !o))) {
    if (process.env.NODE_ENV !== "production" && (H(o) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !Pt(e.elements.popper, o)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    e.elements.arrow = o;
  }
}
s(hr, "effect$1");
var mr = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: vr,
  effect: hr,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ce(t) {
  return t.split("-")[1];
}
s(ce, "getVariation");
var gr = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function yr(t) {
  var e = t.x, n = t.y, r = window, o = r.devicePixelRatio || 1;
  return {
    x: se(e * o) / o || 0,
    y: se(n * o) / o || 0
  };
}
s(yr, "roundOffsetsByDPR");
function pt(t) {
  var e, n = t.popper, r = t.popperRect, o = t.placement, i = t.variation, l = t.offsets, a = t.position, c = t.gpuAcceleration, u = t.adaptive, p = t.roundOffsets, v = t.isFixed, y = l.x, f = y === void 0 ? 0 : y, h = l.y, m = h === void 0 ? 0 : h, g = typeof p == "function" ? p({
    x: f,
    y: m
  }) : {
    x: f,
    y: m
  };
  f = g.x, m = g.y;
  var T = l.hasOwnProperty("x"), R = l.hasOwnProperty("y"), O = L, d = B, w = window;
  if (u) {
    var b = ye(n), x = "clientHeight", S = "clientWidth";
    if (b === U(n) && (b = Z(n), F(b).position !== "static" && a === "absolute" && (x = "scrollHeight", S = "scrollWidth")), b = b, o === B || (o === L || o === V) && i === Ne) {
      d = $;
      var C = v && w.visualViewport ? w.visualViewport.height : b[x];
      m -= C - r.height, m *= c ? 1 : -1;
    }
    if (o === L || (o === B || o === $) && i === Ne) {
      O = V;
      var A = v && w.visualViewport ? w.visualViewport.width : b[S];
      f -= A - r.width, f *= c ? 1 : -1;
    }
  }
  var E = Object.assign({
    position: a
  }, u && gr), k = p === !0 ? yr({
    x: f,
    y: m
  }) : {
    x: f,
    y: m
  };
  if (f = k.x, m = k.y, c) {
    var D;
    return Object.assign({}, E, (D = {}, D[d] = R ? "0" : "", D[O] = T ? "0" : "", D.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", D));
  }
  return Object.assign({}, E, (e = {}, e[d] = R ? m + "px" : "", e[O] = T ? f + "px" : "", e.transform = "", e));
}
s(pt, "mapToStyles");
function br(t) {
  var e = t.state, n = t.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, l = i === void 0 ? !0 : i, a = n.roundOffsets, c = a === void 0 ? !0 : a;
  if (process.env.NODE_ENV !== "production") {
    var u = F(e.elements.popper).transitionProperty || "";
    l && ["transform", "top", "right", "bottom", "left"].some(function(v) {
      return u.indexOf(v) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var p = {
    placement: W(e.placement),
    variation: ce(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: o,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, pt(Object.assign({}, p, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: l,
    roundOffsets: c
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, pt(Object.assign({}, p, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
s(br, "computeStyles");
var wr = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: br,
  data: {}
}, Ee = {
  passive: !0
};
function Or(t) {
  var e = t.state, n = t.instance, r = t.options, o = r.scroll, i = o === void 0 ? !0 : o, l = r.resize, a = l === void 0 ? !0 : l, c = U(e.elements.popper), u = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return i && u.forEach(function(p) {
    p.addEventListener("scroll", n.update, Ee);
  }), a && c.addEventListener("resize", n.update, Ee), function() {
    i && u.forEach(function(p) {
      p.removeEventListener("scroll", n.update, Ee);
    }), a && c.removeEventListener("resize", n.update, Ee);
  };
}
s(Or, "effect");
var xr = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: /* @__PURE__ */ s(function() {
  }, "fn"),
  effect: Or,
  data: {}
}, Er = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Te(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return Er[e];
  });
}
s(Te, "getOppositePlacement");
var Tr = {
  start: "end",
  end: "start"
};
function ut(t) {
  return t.replace(/start|end/g, function(e) {
    return Tr[e];
  });
}
s(ut, "getOppositeVariationPlacement");
function Xe(t) {
  var e = U(t), n = e.pageXOffset, r = e.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
s(Xe, "getWindowScroll");
function ze(t) {
  return le(Z(t)).left + Xe(t).scrollLeft;
}
s(ze, "getWindowScrollBarX");
function Rr(t) {
  var e = U(t), n = Z(t), r = e.visualViewport, o = n.clientWidth, i = n.clientHeight, l = 0, a = 0;
  return r && (o = r.width, i = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (l = r.offsetLeft, a = r.offsetTop)), {
    width: o,
    height: i,
    x: l + ze(t),
    y: a
  };
}
s(Rr, "getViewportRect");
function Pr(t) {
  var e, n = Z(t), r = Xe(t), o = (e = t.ownerDocument) == null ? void 0 : e.body, i = ne(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), l = ne(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), a = -r.scrollLeft + ze(t), c = -r.scrollTop;
  return F(o || n).direction === "rtl" && (a += ne(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: l,
    x: a,
    y: c
  };
}
s(Pr, "getDocumentRect");
function Ge(t) {
  var e = F(t), n = e.overflow, r = e.overflowX, o = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
s(Ge, "isScrollParent");
function kt(t) {
  return ["html", "body", "#document"].indexOf(Y(t)) >= 0 ? t.ownerDocument.body : H(t) && Ge(t) ? t : kt(ke(t));
}
s(kt, "getScrollParent");
function me(t, e) {
  var n;
  e === void 0 && (e = []);
  var r = kt(t), o = r === ((n = t.ownerDocument) == null ? void 0 : n.body), i = U(r), l = o ? [i].concat(i.visualViewport || [], Ge(r) ? r : []) : r, a = e.concat(l);
  return o ? a : a.concat(me(ke(l)));
}
s(me, "listScrollParents");
function Ie(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height
  });
}
s(Ie, "rectToClientRect");
function Sr(t) {
  var e = le(t);
  return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e;
}
s(Sr, "getInnerBoundingClientRect");
function ft(t, e) {
  return e === Et ? Ie(Rr(t)) : ae(e) ? Sr(e) : Ie(Pr(Z(t)));
}
s(ft, "getClientRectFromMixedType");
function Cr(t) {
  var e = me(ke(t)), n = ["absolute", "fixed"].indexOf(F(t).position) >= 0, r = n && H(t) ? ye(t) : t;
  return ae(r) ? e.filter(function(o) {
    return ae(o) && Pt(o, r) && Y(o) !== "body";
  }) : [];
}
s(Cr, "getClippingParents");
function Ar(t, e, n) {
  var r = e === "clippingParents" ? Cr(t) : [].concat(e), o = [].concat(r, [n]), i = o[0], l = o.reduce(function(a, c) {
    var u = ft(t, c);
    return a.top = ne(u.top, a.top), a.right = Ce(u.right, a.right), a.bottom = Ce(u.bottom, a.bottom), a.left = ne(u.left, a.left), a;
  }, ft(t, i));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
s(Ar, "getClippingRect");
function Dt(t) {
  var e = t.reference, n = t.element, r = t.placement, o = r ? W(r) : null, i = r ? ce(r) : null, l = e.x + e.width / 2 - n.width / 2, a = e.y + e.height / 2 - n.height / 2, c;
  switch (o) {
    case B:
      c = {
        x: l,
        y: e.y - n.height
      };
      break;
    case $:
      c = {
        x: l,
        y: e.y + e.height
      };
      break;
    case V:
      c = {
        x: e.x + e.width,
        y: a
      };
      break;
    case L:
      c = {
        x: e.x - n.width,
        y: a
      };
      break;
    default:
      c = {
        x: e.x,
        y: e.y
      };
  }
  var u = o ? Ye(o) : null;
  if (u != null) {
    var p = u === "y" ? "height" : "width";
    switch (i) {
      case Pe:
        c[u] = c[u] - (e[p] / 2 - n[p] / 2);
        break;
      case Ne:
        c[u] = c[u] + (e[p] / 2 - n[p] / 2);
        break;
    }
  }
  return c;
}
s(Dt, "computeOffsets");
function ge(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, o = r === void 0 ? t.placement : r, i = n.boundary, l = i === void 0 ? er : i, a = n.rootBoundary, c = a === void 0 ? Et : a, u = n.elementContext, p = u === void 0 ? fe : u, v = n.altBoundary, y = v === void 0 ? !1 : v, f = n.padding, h = f === void 0 ? 0 : f, m = Ct(typeof h != "number" ? h : At(h, Ue)), g = p === fe ? _t : fe, T = t.rects.popper, R = t.elements[y ? g : p], O = Ar(ae(R) ? R : R.contextElement || Z(t.elements.popper), l, c), d = le(t.elements.reference), w = Dt({
    reference: d,
    element: T,
    strategy: "absolute",
    placement: o
  }), b = Ie(Object.assign({}, T, w)), x = p === fe ? b : d, S = {
    top: O.top - x.top + m.top,
    bottom: x.bottom - O.bottom + m.bottom,
    left: O.left - x.left + m.left,
    right: x.right - O.right + m.right
  }, C = t.modifiersData.offset;
  if (p === fe && C) {
    var A = C[o];
    Object.keys(S).forEach(function(E) {
      var k = [V, $].indexOf(E) >= 0 ? 1 : -1, D = [B, $].indexOf(E) >= 0 ? "y" : "x";
      S[E] += A[D] * k;
    });
  }
  return S;
}
s(ge, "detectOverflow");
function kr(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, o = n.boundary, i = n.rootBoundary, l = n.padding, a = n.flipVariations, c = n.allowedAutoPlacements, u = c === void 0 ? xt : c, p = ce(r), v = p ? a ? it : it.filter(function(h) {
    return ce(h) === p;
  }) : Ue, y = v.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  y.length === 0 && (y = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var f = y.reduce(function(h, m) {
    return h[m] = ge(t, {
      placement: m,
      boundary: o,
      rootBoundary: i,
      padding: l
    })[W(m)], h;
  }, {});
  return Object.keys(f).sort(function(h, m) {
    return f[h] - f[m];
  });
}
s(kr, "computeAutoPlacement");
function Dr(t) {
  if (W(t) === Fe)
    return [];
  var e = Te(t);
  return [ut(t), e, ut(e)];
}
s(Dr, "getExpandedFallbackPlacements");
function Mr(t) {
  var e = t.state, n = t.options, r = t.name;
  if (!e.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, l = n.altAxis, a = l === void 0 ? !0 : l, c = n.fallbackPlacements, u = n.padding, p = n.boundary, v = n.rootBoundary, y = n.altBoundary, f = n.flipVariations, h = f === void 0 ? !0 : f, m = n.allowedAutoPlacements, g = e.options.placement, T = W(g), R = T === g, O = c || (R || !h ? [Te(g)] : Dr(g)), d = [g].concat(O).reduce(function(ie, J) {
      return ie.concat(W(J) === Fe ? kr(e, {
        placement: J,
        boundary: p,
        rootBoundary: v,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: m
      }) : J);
    }, []), w = e.rects.reference, b = e.rects.popper, x = /* @__PURE__ */ new Map(), S = !0, C = d[0], A = 0; A < d.length; A++) {
      var E = d[A], k = W(E), D = ce(E) === Pe, z = [B, $].indexOf(k) >= 0, G = z ? "width" : "height", M = ge(e, {
        placement: E,
        boundary: p,
        rootBoundary: v,
        altBoundary: y,
        padding: u
      }), j = z ? D ? V : L : D ? $ : B;
      w[G] > b[G] && (j = Te(j));
      var oe = Te(j), _ = [];
      if (i && _.push(M[k] <= 0), a && _.push(M[j] <= 0, M[oe] <= 0), _.every(function(ie) {
        return ie;
      })) {
        C = E, S = !1;
        break;
      }
      x.set(E, _);
    }
    if (S)
      for (var be = h ? 3 : 1, De = /* @__PURE__ */ s(function(J) {
        var ue = d.find(function(Oe) {
          var ee = x.get(Oe);
          if (ee)
            return ee.slice(0, J).every(function(Me) {
              return Me;
            });
        });
        if (ue)
          return C = ue, "break";
      }, "_loop"), pe = be; pe > 0; pe--) {
        var we = De(pe);
        if (we === "break")
          break;
      }
    e.placement !== C && (e.modifiersData[r]._skip = !0, e.placement = C, e.reset = !0);
  }
}
s(Mr, "flip");
var jr = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Mr,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function dt(t, e, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: t.top - e.height - n.y,
    right: t.right - e.width + n.x,
    bottom: t.bottom - e.height + n.y,
    left: t.left - e.width - n.x
  };
}
s(dt, "getSideOffsets");
function vt(t) {
  return [B, V, $, L].some(function(e) {
    return t[e] >= 0;
  });
}
s(vt, "isAnySideFullyClipped");
function Br(t) {
  var e = t.state, n = t.name, r = e.rects.reference, o = e.rects.popper, i = e.modifiersData.preventOverflow, l = ge(e, {
    elementContext: "reference"
  }), a = ge(e, {
    altBoundary: !0
  }), c = dt(l, r), u = dt(a, o, i), p = vt(c), v = vt(u);
  e.modifiersData[n] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: u,
    isReferenceHidden: p,
    hasPopperEscaped: v
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": p,
    "data-popper-escaped": v
  });
}
s(Br, "hide");
var Lr = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Br
};
function Hr(t, e, n) {
  var r = W(t), o = [L, B].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, e, {
    placement: t
  })) : n, l = i[0], a = i[1];
  return l = l || 0, a = (a || 0) * o, [L, V].indexOf(r) >= 0 ? {
    x: a,
    y: l
  } : {
    x: l,
    y: a
  };
}
s(Hr, "distanceAndSkiddingToXY");
function Nr(t) {
  var e = t.state, n = t.options, r = t.name, o = n.offset, i = o === void 0 ? [0, 0] : o, l = xt.reduce(function(p, v) {
    return p[v] = Hr(v, e.rects, i), p;
  }, {}), a = l[e.placement], c = a.x, u = a.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += c, e.modifiersData.popperOffsets.y += u), e.modifiersData[r] = l;
}
s(Nr, "offset");
var Ir = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Nr
};
function Wr(t) {
  var e = t.state, n = t.name;
  e.modifiersData[n] = Dt({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
s(Wr, "popperOffsets");
var $r = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Wr,
  data: {}
};
function Vr(t) {
  return t === "x" ? "y" : "x";
}
s(Vr, "getAltAxis");
function Fr(t) {
  var e = t.state, n = t.options, r = t.name, o = n.mainAxis, i = o === void 0 ? !0 : o, l = n.altAxis, a = l === void 0 ? !1 : l, c = n.boundary, u = n.rootBoundary, p = n.altBoundary, v = n.padding, y = n.tether, f = y === void 0 ? !0 : y, h = n.tetherOffset, m = h === void 0 ? 0 : h, g = ge(e, {
    boundary: c,
    rootBoundary: u,
    padding: v,
    altBoundary: p
  }), T = W(e.placement), R = ce(e.placement), O = !R, d = Ye(T), w = Vr(d), b = e.modifiersData.popperOffsets, x = e.rects.reference, S = e.rects.popper, C = typeof m == "function" ? m(Object.assign({}, e.rects, {
    placement: e.placement
  })) : m, A = typeof C == "number" ? {
    mainAxis: C,
    altAxis: C
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, C), E = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, k = {
    x: 0,
    y: 0
  };
  if (!!b) {
    if (i) {
      var D, z = d === "y" ? B : L, G = d === "y" ? $ : V, M = d === "y" ? "height" : "width", j = b[d], oe = j + g[z], _ = j - g[G], be = f ? -S[M] / 2 : 0, De = R === Pe ? x[M] : S[M], pe = R === Pe ? -S[M] : -x[M], we = e.elements.arrow, ie = f && we ? qe(we) : {
        width: 0,
        height: 0
      }, J = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : St(), ue = J[z], Oe = J[G], ee = he(0, x[M], ie[M]), Me = O ? x[M] / 2 - be - ee - ue - A.mainAxis : De - ee - ue - A.mainAxis, Ut = O ? -x[M] / 2 + be + ee + Oe + A.mainAxis : pe + ee + Oe + A.mainAxis, je = e.elements.arrow && ye(e.elements.arrow), qt = je ? d === "y" ? je.clientTop || 0 : je.clientLeft || 0 : 0, Je = (D = E?.[d]) != null ? D : 0, Yt = j + Me - Je - qt, Xt = j + Ut - Je, Ke = he(f ? Ce(oe, Yt) : oe, j, f ? ne(_, Xt) : _);
      b[d] = Ke, k[d] = Ke - j;
    }
    if (a) {
      var Qe, zt = d === "x" ? B : L, Gt = d === "x" ? $ : V, te = b[w], xe = w === "y" ? "height" : "width", Ze = te + g[zt], _e = te - g[Gt], Be = [B, L].indexOf(T) !== -1, et = (Qe = E?.[w]) != null ? Qe : 0, tt = Be ? Ze : te - x[xe] - S[xe] - et + A.altAxis, rt = Be ? te + x[xe] + S[xe] - et - A.altAxis : _e, nt = f && Be ? fr(tt, te, rt) : he(f ? tt : Ze, te, f ? rt : _e);
      b[w] = nt, k[w] = nt - te;
    }
    e.modifiersData[r] = k;
  }
}
s(Fr, "preventOverflow");
var Ur = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Fr,
  requiresIfExists: ["offset"]
};
function qr(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  };
}
s(qr, "getHTMLElementScroll");
function Yr(t) {
  return t === U(t) || !H(t) ? Xe(t) : qr(t);
}
s(Yr, "getNodeScroll");
function Xr(t) {
  var e = t.getBoundingClientRect(), n = se(e.width) / t.offsetWidth || 1, r = se(e.height) / t.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
s(Xr, "isElementScaled");
function zr(t, e, n) {
  n === void 0 && (n = !1);
  var r = H(e), o = H(e) && Xr(e), i = Z(e), l = le(t, o), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Y(e) !== "body" || Ge(i)) && (a = Yr(e)), H(e) ? (c = le(e, !0), c.x += e.clientLeft, c.y += e.clientTop) : i && (c.x = ze(i))), {
    x: l.left + a.scrollLeft - c.x,
    y: l.top + a.scrollTop - c.y,
    width: l.width,
    height: l.height
  };
}
s(zr, "getCompositeRect");
function Gr(t) {
  var e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  t.forEach(function(i) {
    e.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var l = [].concat(i.requires || [], i.requiresIfExists || []);
    l.forEach(function(a) {
      if (!n.has(a)) {
        var c = e.get(a);
        c && o(c);
      }
    }), r.push(i);
  }
  return s(o, "sort"), t.forEach(function(i) {
    n.has(i.name) || o(i);
  }), r;
}
s(Gr, "order");
function Jr(t) {
  var e = Gr(t);
  return He.reduce(function(n, r) {
    return n.concat(e.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
s(Jr, "orderModifiers");
function Kr(t) {
  var e;
  return function() {
    return e || (e = new Promise(function(n) {
      Promise.resolve().then(function() {
        e = void 0, n(t());
      });
    })), e;
  };
}
s(Kr, "debounce");
function K(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  return [].concat(n).reduce(function(o, i) {
    return o.replace(/%s/, i);
  }, t);
}
s(K, "format");
var re = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Qr = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', ht = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Zr(t) {
  t.forEach(function(e) {
    [].concat(Object.keys(e), ht).filter(function(n, r, o) {
      return o.indexOf(n) === r;
    }).forEach(function(n) {
      switch (n) {
        case "name":
          typeof e.name != "string" && console.error(K(re, String(e.name), '"name"', '"string"', '"' + String(e.name) + '"'));
          break;
        case "enabled":
          typeof e.enabled != "boolean" && console.error(K(re, e.name, '"enabled"', '"boolean"', '"' + String(e.enabled) + '"'));
          break;
        case "phase":
          He.indexOf(e.phase) < 0 && console.error(K(re, e.name, '"phase"', "either " + He.join(", "), '"' + String(e.phase) + '"'));
          break;
        case "fn":
          typeof e.fn != "function" && console.error(K(re, e.name, '"fn"', '"function"', '"' + String(e.fn) + '"'));
          break;
        case "effect":
          e.effect != null && typeof e.effect != "function" && console.error(K(re, e.name, '"effect"', '"function"', '"' + String(e.fn) + '"'));
          break;
        case "requires":
          e.requires != null && !Array.isArray(e.requires) && console.error(K(re, e.name, '"requires"', '"array"', '"' + String(e.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(e.requiresIfExists) || console.error(K(re, e.name, '"requiresIfExists"', '"array"', '"' + String(e.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + e.name + '" modifier, valid properties are ' + ht.map(function(r) {
            return '"' + r + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      e.requires && e.requires.forEach(function(r) {
        t.find(function(o) {
          return o.name === r;
        }) == null && console.error(K(Qr, String(e.name), r, r));
      });
    });
  });
}
s(Zr, "validateModifiers");
function _r(t, e) {
  var n = /* @__PURE__ */ new Set();
  return t.filter(function(r) {
    var o = e(r);
    if (!n.has(o))
      return n.add(o), !0;
  });
}
s(_r, "uniqueBy");
function en(t) {
  var e = t.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, {
      options: Object.assign({}, o.options, r.options),
      data: Object.assign({}, o.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(e).map(function(n) {
    return e[n];
  });
}
s(en, "mergeByName");
var mt = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", tn = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", gt = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function yt() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return !e.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
s(yt, "areValidElements");
function rn(t) {
  t === void 0 && (t = {});
  var e = t, n = e.defaultModifiers, r = n === void 0 ? [] : n, o = e.defaultOptions, i = o === void 0 ? gt : o;
  return /* @__PURE__ */ s(function(a, c, u) {
    u === void 0 && (u = i);
    var p = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, gt, i),
      modifiersData: {},
      elements: {
        reference: a,
        popper: c
      },
      attributes: {},
      styles: {}
    }, v = [], y = !1, f = {
      state: p,
      setOptions: /* @__PURE__ */ s(function(T) {
        var R = typeof T == "function" ? T(p.options) : T;
        m(), p.options = Object.assign({}, i, p.options, R), p.scrollParents = {
          reference: ae(a) ? me(a) : a.contextElement ? me(a.contextElement) : [],
          popper: me(c)
        };
        var O = Jr(en([].concat(r, p.options.modifiers)));
        if (p.orderedModifiers = O.filter(function(E) {
          return E.enabled;
        }), process.env.NODE_ENV !== "production") {
          var d = _r([].concat(O, p.options.modifiers), function(E) {
            var k = E.name;
            return k;
          });
          if (Zr(d), W(p.options.placement) === Fe) {
            var w = p.orderedModifiers.find(function(E) {
              var k = E.name;
              return k === "flip";
            });
            w || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var b = F(c), x = b.marginTop, S = b.marginRight, C = b.marginBottom, A = b.marginLeft;
          [x, S, C, A].some(function(E) {
            return parseFloat(E);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return h(), f.update();
      }, "setOptions"),
      forceUpdate: /* @__PURE__ */ s(function() {
        if (!y) {
          var T = p.elements, R = T.reference, O = T.popper;
          if (!yt(R, O)) {
            process.env.NODE_ENV !== "production" && console.error(mt);
            return;
          }
          p.rects = {
            reference: zr(R, ye(O), p.options.strategy === "fixed"),
            popper: qe(O)
          }, p.reset = !1, p.placement = p.options.placement, p.orderedModifiers.forEach(function(E) {
            return p.modifiersData[E.name] = Object.assign({}, E.data);
          });
          for (var d = 0, w = 0; w < p.orderedModifiers.length; w++) {
            if (process.env.NODE_ENV !== "production" && (d += 1, d > 100)) {
              console.error(tn);
              break;
            }
            if (p.reset === !0) {
              p.reset = !1, w = -1;
              continue;
            }
            var b = p.orderedModifiers[w], x = b.fn, S = b.options, C = S === void 0 ? {} : S, A = b.name;
            typeof x == "function" && (p = x({
              state: p,
              options: C,
              name: A,
              instance: f
            }) || p);
          }
        }
      }, "forceUpdate"),
      update: Kr(function() {
        return new Promise(function(g) {
          f.forceUpdate(), g(p);
        });
      }),
      destroy: /* @__PURE__ */ s(function() {
        m(), y = !0;
      }, "destroy")
    };
    if (!yt(a, c))
      return process.env.NODE_ENV !== "production" && console.error(mt), f;
    f.setOptions(u).then(function(g) {
      !y && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function h() {
      p.orderedModifiers.forEach(function(g) {
        var T = g.name, R = g.options, O = R === void 0 ? {} : R, d = g.effect;
        if (typeof d == "function") {
          var w = d({
            state: p,
            name: T,
            instance: f,
            options: O
          }), b = /* @__PURE__ */ s(function() {
          }, "noopFn");
          v.push(w || b);
        }
      });
    }
    s(h, "runModifierEffects");
    function m() {
      v.forEach(function(g) {
        return g();
      }), v = [];
    }
    return s(m, "cleanupModifierEffects"), f;
  }, "createPopper");
}
s(rn, "popperGenerator");
var nn = [xr, $r, wr, cr, Ir, jr, Ur, mr, Lr], on = /* @__PURE__ */ rn({
  defaultModifiers: nn
});
function We(t, e) {
  return We = Object.setPrototypeOf || /* @__PURE__ */ s(function(r, o) {
    return r.__proto__ = o, r;
  }, "_setPrototypeOf"), We(t, e);
}
s(We, "_setPrototypeOf");
function Mt(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, We(t, e);
}
s(Mt, "_inheritsLoose");
var jt = P.exports.createContext(), Bt = P.exports.createContext();
function an(t) {
  var e = t.children, n = P.exports.useState(null), r = n[0], o = n[1], i = P.exports.useRef(!1);
  P.exports.useEffect(function() {
    return function() {
      i.current = !0;
    };
  }, []);
  var l = P.exports.useCallback(function(a) {
    i.current || o(a);
  }, []);
  return /* @__PURE__ */ ot(jt.Provider, {
    value: r,
    children: /* @__PURE__ */ ot(Bt.Provider, {
      value: l,
      children: e
    })
  });
}
s(an, "Manager");
var Lt = /* @__PURE__ */ s(function(e) {
  return Array.isArray(e) ? e[0] : e;
}, "unwrapArray"), Ht = /* @__PURE__ */ s(function(e) {
  if (typeof e == "function") {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return e.apply(void 0, r);
  }
}, "safeInvoke"), $e = /* @__PURE__ */ s(function(e, n) {
  if (typeof e == "function")
    return Ht(e, n);
  e != null && (e.current = n);
}, "setRef"), bt = /* @__PURE__ */ s(function(e) {
  return e.reduce(function(n, r) {
    var o = r[0], i = r[1];
    return n[o] = i, n;
  }, {});
}, "fromEntries"), wt = typeof window < "u" && window.document && window.document.createElement ? P.exports.useLayoutEffect : P.exports.useEffect, sn = typeof Element < "u", ln = typeof Map == "function", cn = typeof Set == "function", pn = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Re(t, e) {
  if (t === e)
    return !0;
  if (t && e && Se(t) == "object" && Se(e) == "object") {
    if (t.constructor !== e.constructor)
      return !1;
    var n, r, o;
    if (Array.isArray(t)) {
      if (n = t.length, n != e.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!Re(t[r], e[r]))
          return !1;
      return !0;
    }
    var i;
    if (ln && t instanceof Map && e instanceof Map) {
      if (t.size !== e.size)
        return !1;
      for (i = t.entries(); !(r = i.next()).done; )
        if (!e.has(r.value[0]))
          return !1;
      for (i = t.entries(); !(r = i.next()).done; )
        if (!Re(r.value[1], e.get(r.value[0])))
          return !1;
      return !0;
    }
    if (cn && t instanceof Set && e instanceof Set) {
      if (t.size !== e.size)
        return !1;
      for (i = t.entries(); !(r = i.next()).done; )
        if (!e.has(r.value[0]))
          return !1;
      return !0;
    }
    if (pn && ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) {
      if (n = t.length, n != e.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (t[r] !== e[r])
          return !1;
      return !0;
    }
    if (t.constructor === RegExp)
      return t.source === e.source && t.flags === e.flags;
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === e.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === e.toString();
    if (o = Object.keys(t), n = o.length, n !== Object.keys(e).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(e, o[r]))
        return !1;
    if (sn && t instanceof Element)
      return !1;
    for (r = n; r-- !== 0; )
      if (!((o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") && t.$$typeof) && !Re(t[o[r]], e[o[r]]))
        return !1;
    return !0;
  }
  return t !== t && e !== e;
}
s(Re, "equal");
var un = /* @__PURE__ */ s(function(e, n) {
  try {
    return Re(e, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
}, "isEqual"), fn = [], dn = /* @__PURE__ */ s(function(e, n, r) {
  r === void 0 && (r = {});
  var o = P.exports.useRef(null), i = {
    onFirstUpdate: r.onFirstUpdate,
    placement: r.placement || "bottom",
    strategy: r.strategy || "absolute",
    modifiers: r.modifiers || fn
  }, l = P.exports.useState({
    styles: {
      popper: {
        position: i.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), a = l[0], c = l[1], u = P.exports.useMemo(function() {
    return {
      name: "updateState",
      enabled: !0,
      phase: "write",
      fn: /* @__PURE__ */ s(function(f) {
        var h = f.state, m = Object.keys(h.elements);
        c({
          styles: bt(m.map(function(g) {
            return [g, h.styles[g] || {}];
          })),
          attributes: bt(m.map(function(g) {
            return [g, h.attributes[g]];
          }))
        });
      }, "fn"),
      requires: ["computeStyles"]
    };
  }, []), p = P.exports.useMemo(function() {
    var y = {
      onFirstUpdate: i.onFirstUpdate,
      placement: i.placement,
      strategy: i.strategy,
      modifiers: [].concat(i.modifiers, [u, {
        name: "applyStyles",
        enabled: !1
      }])
    };
    return un(o.current, y) ? o.current || y : (o.current = y, y);
  }, [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, u]), v = P.exports.useRef();
  return wt(function() {
    v.current && v.current.setOptions(p);
  }, [p]), wt(function() {
    if (!(e == null || n == null)) {
      var y = r.createPopper || on, f = y(e, n, p);
      return v.current = f, function() {
        f.destroy(), v.current = null;
      };
    }
  }, [e, n, r.createPopper]), {
    state: v.current ? v.current.state : null,
    styles: a.styles,
    attributes: a.attributes,
    update: v.current ? v.current.update : null,
    forceUpdate: v.current ? v.current.forceUpdate : null
  };
}, "usePopper"), vn = /* @__PURE__ */ s(function() {
}, "NOOP"), hn = /* @__PURE__ */ s(function() {
  return Promise.resolve(null);
}, "NOOP_PROMISE"), mn = [];
function gn(t) {
  var e = t.placement, n = e === void 0 ? "bottom" : e, r = t.strategy, o = r === void 0 ? "absolute" : r, i = t.modifiers, l = i === void 0 ? mn : i, a = t.referenceElement, c = t.onFirstUpdate, u = t.innerRef, p = t.children, v = P.exports.useContext(jt), y = P.exports.useState(null), f = y[0], h = y[1], m = P.exports.useState(null), g = m[0], T = m[1];
  P.exports.useEffect(function() {
    $e(u, f);
  }, [u, f]);
  var R = P.exports.useMemo(function() {
    return {
      placement: n,
      strategy: o,
      onFirstUpdate: c,
      modifiers: [].concat(l, [{
        name: "arrow",
        enabled: g != null,
        options: {
          element: g
        }
      }])
    };
  }, [n, o, c, l, g]), O = dn(a || v, f, R), d = O.state, w = O.styles, b = O.forceUpdate, x = O.update, S = P.exports.useMemo(function() {
    return {
      ref: h,
      style: w.popper,
      placement: d ? d.placement : n,
      hasPopperEscaped: d && d.modifiersData.hide ? d.modifiersData.hide.hasPopperEscaped : null,
      isReferenceHidden: d && d.modifiersData.hide ? d.modifiersData.hide.isReferenceHidden : null,
      arrowProps: {
        style: w.arrow,
        ref: T
      },
      forceUpdate: b || vn,
      update: x || hn
    };
  }, [h, T, n, d, w, x, b]);
  return Lt(p)(S);
}
s(gn, "Popper");
var yn = process.env.NODE_ENV !== "production", Nt = /* @__PURE__ */ s(function() {
}, "warning");
if (yn) {
  var bn = /* @__PURE__ */ s(function(e, n) {
    var r = arguments.length;
    n = new Array(r > 1 ? r - 1 : 0);
    for (var o = 1; o < r; o++)
      n[o - 1] = arguments[o];
    var i = 0, l = "Warning: " + e.replace(/%s/g, function() {
      return n[i++];
    });
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  }, "printWarning");
  Nt = /* @__PURE__ */ s(function(e, n, r) {
    var o = arguments.length;
    r = new Array(o > 2 ? o - 2 : 0);
    for (var i = 2; i < o; i++)
      r[i - 2] = arguments[i];
    if (n === void 0)
      throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
    e || bn.apply(null, [n].concat(r));
  }, "warning");
}
var wn = Nt;
function On(t) {
  var e = t.children, n = t.innerRef, r = P.exports.useContext(Bt), o = P.exports.useCallback(function(i) {
    $e(n, i), Ht(r, i);
  }, [n, r]);
  return P.exports.useEffect(function() {
    return function() {
      return $e(n, null);
    };
  }), P.exports.useEffect(function() {
    wn(Boolean(r), "`Reference` should not be used outside of a `Manager` component.");
  }, [r]), Lt(e)({
    ref: o
  });
}
s(On, "Reference");
var It = /* @__PURE__ */ I.createContext({}), q = /* @__PURE__ */ s(function() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return function() {
    for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++)
      i[l] = arguments[l];
    return n.forEach(function(a) {
      return a && a.apply(void 0, i);
    });
  };
}, "callAll"), xn = /* @__PURE__ */ s(function() {
}, "noop"), Ot = /* @__PURE__ */ s(function() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}, "canUseDOM"), En = /* @__PURE__ */ s(function(e, n) {
  if (typeof e == "function")
    return e(n);
  e != null && (e.current = n);
}, "setRef"), Wt = /* @__PURE__ */ function(t) {
  Mt(e, t);
  function e() {
    for (var r, o = arguments.length, i = new Array(o), l = 0; l < o; l++)
      i[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(i)) || this, r.observer = void 0, r.tooltipRef = void 0, r.handleOutsideClick = function(a) {
      if (r.tooltipRef && !r.tooltipRef.contains(a.target)) {
        var c = r.context.parentOutsideClickHandler, u = r.props, p = u.hideTooltip, v = u.clearScheduled;
        v(), p(), c && c(a);
      }
    }, r.handleOutsideRightClick = function(a) {
      if (r.tooltipRef && !r.tooltipRef.contains(a.target)) {
        var c = r.context.parentOutsideRightClickHandler, u = r.props, p = u.hideTooltip, v = u.clearScheduled;
        v(), p(), c && c(a);
      }
    }, r.addOutsideClickHandler = function() {
      document.body.addEventListener("touchend", r.handleOutsideClick), document.body.addEventListener("click", r.handleOutsideClick);
    }, r.removeOutsideClickHandler = function() {
      document.body.removeEventListener("touchend", r.handleOutsideClick), document.body.removeEventListener("click", r.handleOutsideClick);
    }, r.addOutsideRightClickHandler = function() {
      return document.body.addEventListener("contextmenu", r.handleOutsideRightClick);
    }, r.removeOutsideRightClickHandler = function() {
      return document.body.removeEventListener("contextmenu", r.handleOutsideRightClick);
    }, r.getTooltipRef = function(a) {
      r.tooltipRef = a, En(r.props.innerRef, a);
    }, r.getArrowProps = function(a) {
      return a === void 0 && (a = {}), X({}, a, {
        style: X({}, a.style, r.props.arrowProps.style)
      });
    }, r.getTooltipProps = function(a) {
      return a === void 0 && (a = {}), X({}, a, r.isTriggeredBy("hover") && {
        onMouseEnter: q(r.props.clearScheduled, a.onMouseEnter),
        onMouseLeave: q(r.props.hideTooltip, a.onMouseLeave)
      }, {
        style: X({}, a.style, r.props.style)
      });
    }, r.contextValue = {
      isParentNoneTriggered: r.props.trigger === "none",
      addParentOutsideClickHandler: r.addOutsideClickHandler,
      addParentOutsideRightClickHandler: r.addOutsideRightClickHandler,
      parentOutsideClickHandler: r.handleOutsideClick,
      parentOutsideRightClickHandler: r.handleOutsideRightClick,
      removeParentOutsideClickHandler: r.removeOutsideClickHandler,
      removeParentOutsideRightClickHandler: r.removeOutsideRightClickHandler
    }, r;
  }
  s(e, "Tooltip");
  var n = e.prototype;
  return n.componentDidMount = /* @__PURE__ */ s(function() {
    var o = this, i = this.observer = new MutationObserver(function() {
      o.props.update();
    });
    if (i.observe(this.tooltipRef, this.props.mutationObserverOptions), this.isTriggeredBy("hover") || this.isTriggeredBy("click") || this.isTriggeredBy("right-click")) {
      var l = this.context, a = l.removeParentOutsideClickHandler, c = l.removeParentOutsideRightClickHandler;
      this.addOutsideClickHandler(), this.addOutsideRightClickHandler(), a && a(), c && c();
    }
  }, "componentDidMount"), n.componentDidUpdate = /* @__PURE__ */ s(function() {
    this.props.closeOnReferenceHidden && this.props.isReferenceHidden && this.props.hideTooltip();
  }, "componentDidUpdate"), n.componentWillUnmount = /* @__PURE__ */ s(function() {
    if (this.observer && this.observer.disconnect(), this.isTriggeredBy("hover") || this.isTriggeredBy("click") || this.isTriggeredBy("right-click")) {
      var o = this.context, i = o.isParentNoneTriggered, l = o.addParentOutsideClickHandler, a = o.addParentOutsideRightClickHandler;
      this.removeOutsideClickHandler(), this.removeOutsideRightClickHandler(), this.handleOutsideClick = void 0, this.handleOutsideRightClick = void 0, !i && l && l(), !i && a && a();
    }
  }, "componentWillUnmount"), n.render = /* @__PURE__ */ s(function() {
    var o = this.props, i = o.arrowProps, l = o.placement, a = o.tooltip;
    return /* @__PURE__ */ I.createElement(It.Provider, {
      value: this.contextValue
    }, a({
      arrowRef: i.ref,
      getArrowProps: this.getArrowProps,
      getTooltipProps: this.getTooltipProps,
      placement: l,
      tooltipRef: this.getTooltipRef
    }));
  }, "render"), n.isTriggeredBy = /* @__PURE__ */ s(function(o) {
    var i = this.props.trigger;
    return i === o || Array.isArray(i) && i.includes(o);
  }, "isTriggeredBy"), e;
}(P.exports.Component);
Wt.contextType = It;
var Tn = {
  childList: !0,
  subtree: !0
}, $t = /* @__PURE__ */ function(t) {
  Mt(e, t);
  function e() {
    for (var r, o = arguments.length, i = new Array(o), l = 0; l < o; l++)
      i[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(i)) || this, r.state = {
      tooltipShown: r.props.defaultTooltipShown
    }, r.hideTimeout = void 0, r.showTimeout = void 0, r.popperOffset = void 0, r.setTooltipState = function(a) {
      var c = /* @__PURE__ */ s(function() {
        return r.props.onVisibilityChange(a.tooltipShown);
      }, "cb");
      r.isControlled() ? c() : r.setState(a, c);
    }, r.clearScheduled = function() {
      clearTimeout(r.hideTimeout), clearTimeout(r.showTimeout);
    }, r.showTooltip = function(a) {
      var c = a.pageX, u = a.pageY;
      r.clearScheduled();
      var p = {
        tooltipShown: !0
      };
      r.props.followCursor && (p = X({}, p, {
        pageX: c,
        pageY: u
      })), r.showTimeout = window.setTimeout(function() {
        return r.setTooltipState(p);
      }, r.props.delayShow);
    }, r.hideTooltip = function() {
      r.clearScheduled(), r.hideTimeout = window.setTimeout(function() {
        return r.setTooltipState({
          tooltipShown: !1
        });
      }, r.props.delayHide);
    }, r.toggleTooltip = function(a) {
      var c = a.pageX, u = a.pageY, p = r.getState() ? "hideTooltip" : "showTooltip";
      r[p]({
        pageX: c,
        pageY: u
      });
    }, r.clickToggle = function(a) {
      a.preventDefault();
      var c = a.pageX, u = a.pageY, p = r.props.followCursor ? "showTooltip" : "toggleTooltip";
      r[p]({
        pageX: c,
        pageY: u
      });
    }, r.contextMenuToggle = function(a) {
      a.preventDefault();
      var c = a.pageX, u = a.pageY, p = r.props.followCursor ? "showTooltip" : "toggleTooltip";
      r[p]({
        pageX: c,
        pageY: u
      });
    }, r.getTriggerProps = function(a) {
      return a === void 0 && (a = {}), X({}, a, r.isTriggeredBy("click") && {
        onClick: q(r.clickToggle, a.onClick),
        onTouchEnd: q(r.clickToggle, a.onTouchEnd)
      }, r.isTriggeredBy("right-click") && {
        onContextMenu: q(r.contextMenuToggle, a.onContextMenu)
      }, r.isTriggeredBy("hover") && X({
        onMouseEnter: q(r.showTooltip, a.onMouseEnter),
        onMouseLeave: q(r.hideTooltip, a.onMouseLeave)
      }, r.props.followCursor && {
        onMouseMove: q(r.showTooltip, a.onMouseMove)
      }), r.isTriggeredBy("focus") && {
        onFocus: q(r.showTooltip, a.onFocus),
        onBlur: q(r.hideTooltip, a.onBlur)
      });
    }, r;
  }
  s(e, "TooltipTrigger");
  var n = e.prototype;
  return n.componentWillUnmount = /* @__PURE__ */ s(function() {
    this.clearScheduled();
  }, "componentWillUnmount"), n.render = /* @__PURE__ */ s(function() {
    var o = this, i = this.props, l = i.children, a = i.tooltip, c = i.placement, u = i.trigger, p = i.getTriggerRef, v = i.modifiers, y = i.closeOnReferenceHidden, f = i.usePortal, h = i.portalContainer, m = i.followCursor, g = i.getTooltipRef, T = i.mutationObserverOptions, R = Zt(i, ["children", "tooltip", "placement", "trigger", "getTriggerRef", "modifiers", "closeOnReferenceHidden", "usePortal", "portalContainer", "followCursor", "getTooltipRef", "mutationObserverOptions"]), O = /* @__PURE__ */ I.createElement(gn, X({
      innerRef: g,
      placement: c,
      modifiers: [{
        name: "followCursor",
        enabled: m,
        phase: "main",
        fn: /* @__PURE__ */ s(function(w) {
          o.popperOffset = w.state.rects.popper;
        }, "fn")
      }].concat(v)
    }, R), function(d) {
      var w = d.ref, b = d.style, x = d.placement, S = d.arrowProps, C = d.isReferenceHidden, A = d.update;
      if (m && o.popperOffset) {
        var E = o.state, k = E.pageX, D = E.pageY, z = o.popperOffset, G = z.width, M = z.height, j = k + G > window.pageXOffset + document.body.offsetWidth ? k - G : k, oe = D + M > window.pageYOffset + document.body.offsetHeight ? D - M : D;
        b.transform = "translate3d(" + j + "px, " + oe + "px, 0";
      }
      return /* @__PURE__ */ I.createElement(Wt, X({
        arrowProps: S,
        closeOnReferenceHidden: y,
        isReferenceHidden: C,
        placement: x,
        update: A,
        style: b,
        tooltip: a,
        trigger: u,
        mutationObserverOptions: T
      }, {
        clearScheduled: o.clearScheduled,
        hideTooltip: o.hideTooltip,
        innerRef: w
      }));
    });
    return /* @__PURE__ */ I.createElement(an, null, /* @__PURE__ */ I.createElement(On, {
      innerRef: p
    }, function(d) {
      var w = d.ref;
      return l({
        getTriggerProps: o.getTriggerProps,
        triggerRef: w
      });
    }), this.getState() && (f ? /* @__PURE__ */ tr.exports.createPortal(O, h) : O));
  }, "render"), n.isControlled = /* @__PURE__ */ s(function() {
    return this.props.tooltipShown !== void 0;
  }, "isControlled"), n.getState = /* @__PURE__ */ s(function() {
    return this.isControlled() ? this.props.tooltipShown : this.state.tooltipShown;
  }, "getState"), n.isTriggeredBy = /* @__PURE__ */ s(function(o) {
    var i = this.props.trigger;
    return i === o || Array.isArray(i) && i.includes(o);
  }, "isTriggeredBy"), e;
}(P.exports.Component);
$t.defaultProps = {
  closeOnReferenceHidden: !0,
  defaultTooltipShown: !1,
  delayHide: 0,
  delayShow: 0,
  followCursor: !1,
  onVisibilityChange: xn,
  placement: "right",
  portalContainer: Ot() ? document.body : null,
  trigger: "hover",
  usePortal: Ot(),
  mutationObserverOptions: Tn,
  modifiers: []
};
var Rn = $t, N = Kt(1e3)(function(t, e, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  return e.split("-")[0] === t ? n : r;
}), Q = 8, Pn = Ae.div({
  position: "absolute",
  borderStyle: "solid"
}, function(t) {
  var e = t.placement, n = 0, r = 0;
  switch (!0) {
    case (e.startsWith("left") || e.startsWith("right")): {
      r = 8;
      break;
    }
    case (e.startsWith("top") || e.startsWith("bottom")): {
      n = 8;
      break;
    }
  }
  var o = "translate3d(".concat(n, "px, ").concat(r, "px, 0px)");
  return {
    transform: o
  };
}, function(t) {
  var e = t.theme, n = t.color, r = t.placement;
  return {
    bottom: "".concat(N("top", r, Q * -1, "auto"), "px"),
    top: "".concat(N("bottom", r, Q * -1, "auto"), "px"),
    right: "".concat(N("left", r, Q * -1, "auto"), "px"),
    left: "".concat(N("right", r, Q * -1, "auto"), "px"),
    borderBottomWidth: "".concat(N("top", r, "0", Q), "px"),
    borderTopWidth: "".concat(N("bottom", r, "0", Q), "px"),
    borderRightWidth: "".concat(N("left", r, "0", Q), "px"),
    borderLeftWidth: "".concat(N("right", r, "0", Q), "px"),
    borderTopColor: N("top", r, e.color[n] || n || e.base === "light" ? de(e.background.app) : ve(e.background.app), "transparent"),
    borderBottomColor: N("bottom", r, e.color[n] || n || e.base === "light" ? de(e.background.app) : ve(e.background.app), "transparent"),
    borderLeftColor: N("left", r, e.color[n] || n || e.base === "light" ? de(e.background.app) : ve(e.background.app), "transparent"),
    borderRightColor: N("right", r, e.color[n] || n || e.base === "light" ? de(e.background.app) : ve(e.background.app), "transparent")
  };
}), Sn = Ae.div(function(t) {
  var e = t.hidden;
  return {
    display: e ? "none" : "inline-block",
    zIndex: 2147483647
  };
}, function(t) {
  var e = t.theme, n = t.color, r = t.hasChrome;
  return r ? {
    background: e.color[n] || n || e.base === "light" ? de(e.background.app) : ve(e.background.app),
    filter: `
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,
    borderRadius: e.appBorderRadius * 2,
    fontSize: e.typography.size.s1
  } : {};
}), Vt = /* @__PURE__ */ s(function(e) {
  var n = e.placement, r = e.hasChrome, o = e.children, i = e.arrowProps, l = e.tooltipRef, a = e.arrowRef, c = e.color, u = Ve(e, ["placement", "hasChrome", "children", "arrowProps", "tooltipRef", "arrowRef", "color"]);
  return I.createElement(Sn, Object.assign({
    hasChrome: r,
    placement: n,
    ref: l
  }, u, {
    color: c
  }), r && I.createElement(Pn, Object.assign({
    placement: n,
    ref: a
  }, i, {
    color: c
  })), o);
}, "Tooltip");
Vt.defaultProps = {
  color: void 0,
  arrowRef: void 0,
  tooltipRef: void 0,
  hasChrome: !0,
  placement: "top",
  arrowProps: {}
};
var Le = Qt.document, Cn = Ae.div(at || (at = Tt([`
  display: inline-block;
  cursor: `, `;
`])), function(t) {
  return t.mode === "hover" ? "default" : "pointer";
}), An = Ae.g(st || (st = Tt([`
  cursor: `, `;
`])), function(t) {
  return t.mode === "hover" ? "default" : "pointer";
}), Ft = /* @__PURE__ */ s(function(e) {
  var n = e.svg, r = e.trigger;
  e.closeOnClick;
  var o = e.placement, i = e.modifiers, l = e.hasChrome, a = e.tooltip, c = e.children, u = e.tooltipShown, p = e.onVisibilityChange, v = Ve(e, ["svg", "trigger", "closeOnClick", "placement", "modifiers", "hasChrome", "tooltip", "children", "tooltipShown", "onVisibilityChange"]), y = n ? An : Cn;
  return I.createElement(Rn, {
    placement: o,
    trigger: r,
    modifiers: i,
    tooltipShown: u,
    onVisibilityChange: p,
    tooltip: /* @__PURE__ */ s(function(h) {
      var m = h.getTooltipProps, g = h.getArrowProps, T = h.tooltipRef, R = h.arrowRef, O = h.placement;
      return I.createElement(Vt, Object.assign({
        hasChrome: l,
        placement: O,
        tooltipRef: T,
        arrowRef: R,
        arrowProps: g()
      }, m()), typeof a == "function" ? a({
        onHide: /* @__PURE__ */ s(function() {
          return p(!1);
        }, "onHide")
      }) : a);
    }, "tooltip")
  }, function(f) {
    var h = f.getTriggerProps, m = f.triggerRef;
    return I.createElement(y, Object.assign({
      ref: m
    }, h(), v), c);
  });
}, "WithTooltipPure");
Ft.defaultProps = {
  svg: !1,
  trigger: "hover",
  closeOnClick: !1,
  placement: "top",
  modifiers: [{
    name: "preventOverflow",
    options: {
      padding: 8
    }
  }, {
    name: "offset",
    options: {
      offset: [8, 8]
    }
  }, {
    name: "arrow",
    options: {
      padding: 8
    }
  }],
  hasChrome: !0,
  tooltipShown: !1
};
var Ln = /* @__PURE__ */ s(function(e) {
  var n = e.startOpen, r = e.onVisibilityChange, o = Ve(e, ["startOpen", "onVisibilityChange"]), i = P.exports.useState(n || !1), l = rr(i, 2), a = l[0], c = l[1], u = P.exports.useCallback(function(p) {
    r && r(p) === !1 || c(p);
  }, [r]);
  return P.exports.useEffect(function() {
    var p = /* @__PURE__ */ s(function() {
      return u(!1);
    }, "hide");
    Le.addEventListener("keydown", p, !1);
    var v = Array.from(Le.getElementsByTagName("iframe")), y = [];
    return v.forEach(function(f) {
      var h = /* @__PURE__ */ s(function() {
        try {
          f.contentWindow.document && (f.contentWindow.document.addEventListener("click", p), y.push(function() {
            try {
              f.contentWindow.document.removeEventListener("click", p);
            } catch {
            }
          }));
        } catch {
        }
      }, "bind");
      h(), f.addEventListener("load", h), y.push(function() {
        f.removeEventListener("load", h);
      });
    }), function() {
      Le.removeEventListener("keydown", p), y.forEach(function(f) {
        f();
      });
    };
  }), I.createElement(Ft, Object.assign({}, o, {
    tooltipShown: a,
    onVisibilityChange: u
  }));
}, "WithToolTipState");
export {
  Ln as WithToolTipState,
  Ln as WithTooltip,
  Ft as WithTooltipPure
};
//# sourceMappingURL=WithTooltip-167e9982.74421295.js.map
