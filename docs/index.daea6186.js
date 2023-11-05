var S = Object.defineProperty;
var n = (o, e) => S(o, "name", { value: e, configurable: !0 });
import { r as u, D as p, j as a, T as m, S as x, a as v, b as y, F as C, c as T, A as I, P as f, d as g } from "./iframe.c597f8cd.js";
import { Q as E, i as H, U as Y, A as k, N as j, p as w, R as W, e as G, C as K, n as L, c as U, q as $, t as q, D as z, a as J, V as Q, W as V, H as X, I as Z, f as ee, M as te, P as re, u as ae, v as se, x as oe, z as ne, y as ie, o as ce, d as le, K as de, m as ue, L as pe, g as Se, h as me, O as xe, k as ve, l as ye, s as Ce, w as Te, G as Ie, J as fe, E as ge, B as he } from "./iframe.c597f8cd.js";
import "vue";
var h = /\s*\/\s*/, P = /* @__PURE__ */ n(function(e) {
  var t = e.title, r = t.trim().split(h);
  return r && r[r.length - 1] || t;
}, "extractTitle"), b = /* @__PURE__ */ n(function(e) {
  var t = e.children, r = u.exports.useContext(p), s = t;
  return s || (s = P(r)), s ? /* @__PURE__ */ a(m, {
    className: "sbdocs-title",
    children: s
  }) : null;
}, "Title"), D = /* @__PURE__ */ n(function(e) {
  var t = e.children, r = u.exports.useContext(p), s = r.id, i = r.storyById, c = i(s), l = c.parameters, d = t;
  return d || (d = l?.componentSubtitle), d ? /* @__PURE__ */ a(x, {
    className: "sbdocs-subtitle",
    children: d
  }) : null;
}, "Subtitle"), A = /* @__PURE__ */ n(function(e) {
  var t = e.name, r = u.exports.useContext(p), s = r.componentStories, i = s(), c;
  return i && (c = t ? i.find(function(l) {
    return l.name === t;
  }) : i[0]), c ? /* @__PURE__ */ a(v, {
    ...c,
    expanded: !1,
    withToolbar: !0
  }) : null;
}, "Primary"), O = /* @__PURE__ */ n(function() {
  return /* @__PURE__ */ y(C, {
    children: [/* @__PURE__ */ a(b, {}), /* @__PURE__ */ a(D, {}), /* @__PURE__ */ a(T, {}), /* @__PURE__ */ a(A, {}), /* @__PURE__ */ a(I, {
      story: f
    }), /* @__PURE__ */ a(g, {})]
  });
}, "DocsPage"), B = /* @__PURE__ */ n(function(e) {
  var t = e.children;
  return /* @__PURE__ */ a("div", {
    style: {
      fontFamily: "sans-serif"
    },
    children: t
  });
}, "Wrapper");
export {
  E as AddContext,
  H as Anchor,
  Y as AnchorMdx,
  k as ArgsTable,
  j as CURRENT_SELECTION,
  w as Canvas,
  W as CodeOrSourceMdx,
  G as ColorItem,
  K as ColorPalette,
  L as ComponentsTable,
  U as Description,
  $ as DescriptionType,
  q as DocsContainer,
  z as DocsContext,
  O as DocsPage,
  J as DocsStory,
  Q as HeaderMdx,
  V as HeadersMdx,
  X as Heading,
  Z as IconGallery,
  ee as IconItem,
  te as Meta,
  re as PRIMARY_STORY,
  ae as Preview,
  A as Primary,
  se as Props,
  oe as Source,
  ne as SourceContainer,
  ie as SourceContext,
  ce as SourceState,
  le as Stories,
  de as Story,
  ue as StoryTable,
  pe as Subheading,
  D as Subtitle,
  b as Title,
  Se as Typeset,
  B as Wrapper,
  me as anchorBlockIdFromId,
  xe as assertIsFn,
  ve as extractComponentArgTypes,
  P as extractTitle,
  ye as getComponent,
  Ce as getDescriptionProps,
  Te as getSourceProps,
  Ie as getStoryId,
  fe as getStoryProps,
  ge as lookupStoryId,
  he as storyBlockIdFromId
};
//# sourceMappingURL=index.daea6186.js.map
