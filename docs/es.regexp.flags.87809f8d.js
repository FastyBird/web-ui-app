var p = Object.defineProperty;
var o = (r, a) => p(r, "name", { value: a, configurable: !0 });
import { aa as d, ab as u, ac as y, ad as b, ae as E } from "./iframe.5f446e29.js";
var O = d, R = u, m = y, x = E, I = b, g = O.RegExp, c = g.prototype, P = R && I(function() {
  var r = !0;
  try {
    g(".", "d");
  } catch {
    r = !1;
  }
  var a = {}, t = "", s = r ? "dgimsy" : "gimsy", n = /* @__PURE__ */ o(function(l, v) {
    Object.defineProperty(a, l, { get: function() {
      return t += v, !0;
    } });
  }, "addGetter"), e = {
    dotAll: "s",
    global: "g",
    ignoreCase: "i",
    multiline: "m",
    sticky: "y"
  };
  r && (e.hasIndices = "d");
  for (var i in e)
    n(i, e[i]);
  var f = Object.getOwnPropertyDescriptor(c, "flags").get.call(a);
  return f !== s || t !== s;
});
P && m(c, "flags", {
  configurable: !0,
  get: x
});
//# sourceMappingURL=es.regexp.flags.87809f8d.js.map
