var s = Object.defineProperty;
var n = (t, a) => s(t, "name", { value: a, configurable: !0 });
import { a7 as f, a8 as g, a9 as m } from "./iframe.126683fc.js";
var u = f, C = g, x = m, h = RangeError, i = String.fromCharCode, v = String.fromCodePoint, l = C([].join), c = !!v && v.length !== 1;
u({ target: "String", stat: !0, arity: 1, forced: c }, {
  fromCodePoint: /* @__PURE__ */ n(function(a) {
    for (var e = [], d = arguments.length, o = 0, r; d > o; ) {
      if (r = +arguments[o++], x(r, 1114111) !== r)
        throw new h(r + " is not a valid code point");
      e[o] = r < 65536 ? i(r) : i(((r -= 65536) >> 10) + 55296, r % 1024 + 56320);
    }
    return l(e, "");
  }, "fromCodePoint")
});
//# sourceMappingURL=es.string.from-code-point.e004b6a7.js.map
