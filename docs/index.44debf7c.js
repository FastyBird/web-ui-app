var Tx = Object.defineProperty;
var u = (M, ie) => Tx(M, "name", { value: ie, configurable: !0 });
import { bB as gS, r as TS, bC as Ex, X as Sx } from "./iframe.b3772fad.js";
var ES = { exports: {} }, xr = {}, Py = { exports: {} }, Fy = {};
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fS;
function Cx() {
  return fS || (fS = 1, function(M) {
    var ie, fe, D, at, we;
    if (typeof window > "u" || typeof MessageChannel != "function") {
      var gt = null, T = null, Jt = /* @__PURE__ */ u(function() {
        if (gt !== null)
          try {
            var z = M.unstable_now();
            gt(!0, z), gt = null;
          } catch (B) {
            throw setTimeout(Jt, 0), B;
          }
      }, "t"), _t = Date.now();
      M.unstable_now = function() {
        return Date.now() - _t;
      }, ie = /* @__PURE__ */ u(function(z) {
        gt !== null ? setTimeout(ie, 0, z) : (gt = z, setTimeout(Jt, 0));
      }, "f"), fe = /* @__PURE__ */ u(function(z, B) {
        T = setTimeout(z, B);
      }, "g"), D = /* @__PURE__ */ u(function() {
        clearTimeout(T);
      }, "h"), at = /* @__PURE__ */ u(function() {
        return !1;
      }, "k"), we = M.unstable_forceFrameRate = function() {
      };
    } else {
      var jn = window.performance, mi = window.Date, er = window.setTimeout, dn = window.clearTimeout;
      if (typeof console < "u") {
        var tr = window.cancelAnimationFrame;
        typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), typeof tr != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
      }
      if (typeof jn == "object" && typeof jn.now == "function")
        M.unstable_now = function() {
          return jn.now();
        };
      else {
        var nr = mi.now();
        M.unstable_now = function() {
          return mi.now() - nr;
        };
      }
      var en = !1, tn = null, Se = -1, _e = 5, he = 0;
      at = /* @__PURE__ */ u(function() {
        return M.unstable_now() >= he;
      }, "k"), we = /* @__PURE__ */ u(function() {
      }, "l"), M.unstable_forceFrameRate = function(z) {
        0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : _e = 0 < z ? Math.floor(1e3 / z) : 5;
      };
      var le = new MessageChannel(), ye = le.port2;
      le.port1.onmessage = function() {
        if (tn !== null) {
          var z = M.unstable_now();
          he = z + _e;
          try {
            tn(!0, z) ? ye.postMessage(null) : (en = !1, tn = null);
          } catch (B) {
            throw ye.postMessage(null), B;
          }
        } else
          en = !1;
      }, ie = /* @__PURE__ */ u(function(z) {
        tn = z, en || (en = !0, ye.postMessage(null));
      }, "f"), fe = /* @__PURE__ */ u(function(z, B) {
        Se = er(function() {
          z(M.unstable_now());
        }, B);
      }, "g"), D = /* @__PURE__ */ u(function() {
        dn(Se), Se = -1;
      }, "h");
    }
    function et(z, B) {
      var pe = z.length;
      z.push(B);
      e:
        for (; ; ) {
          var K = pe - 1 >>> 1, ke = z[K];
          if (ke !== void 0 && 0 < kt(ke, B))
            z[K] = B, z[pe] = ke, pe = K;
          else
            break e;
        }
    }
    u(et, "J");
    function We(z) {
      return z = z[0], z === void 0 ? null : z;
    }
    u(We, "L");
    function Ne(z) {
      var B = z[0];
      if (B !== void 0) {
        var pe = z.pop();
        if (pe !== B) {
          z[0] = pe;
          e:
            for (var K = 0, ke = z.length; K < ke; ) {
              var Ye = 2 * (K + 1) - 1, vn = z[Ye], Le = Ye + 1, qe = z[Le];
              if (vn !== void 0 && 0 > kt(vn, pe))
                qe !== void 0 && 0 > kt(qe, vn) ? (z[K] = qe, z[Le] = pe, K = Le) : (z[K] = vn, z[Ye] = pe, K = Ye);
              else if (qe !== void 0 && 0 > kt(qe, pe))
                z[K] = qe, z[Le] = pe, K = Le;
              else
                break e;
            }
        }
        return B;
      }
      return null;
    }
    u(Ne, "M");
    function kt(z, B) {
      var pe = z.sortIndex - B.sortIndex;
      return pe !== 0 ? pe : z.id - B.id;
    }
    u(kt, "K");
    var st = [], Be = [], $r = 1, Re = null, re = 3, At = !1, se = !1, Ce = !1;
    function ae(z) {
      for (var B = We(Be); B !== null; ) {
        if (B.callback === null)
          Ne(Be);
        else if (B.startTime <= z)
          Ne(Be), B.sortIndex = B.expirationTime, et(st, B);
        else
          break;
        B = We(Be);
      }
    }
    u(ae, "V");
    function ge(z) {
      if (Ce = !1, ae(z), !se)
        if (We(st) !== null)
          se = !0, ie(It);
        else {
          var B = We(Be);
          B !== null && fe(ge, B.startTime - z);
        }
    }
    u(ge, "W");
    function It(z, B) {
      se = !1, Ce && (Ce = !1, D()), At = !0;
      var pe = re;
      try {
        for (ae(B), Re = We(st); Re !== null && (!(Re.expirationTime > B) || z && !at()); ) {
          var K = Re.callback;
          if (K !== null) {
            Re.callback = null, re = Re.priorityLevel;
            var ke = K(Re.expirationTime <= B);
            B = M.unstable_now(), typeof ke == "function" ? Re.callback = ke : Re === We(st) && Ne(st), ae(B);
          } else
            Ne(st);
          Re = We(st);
        }
        if (Re !== null)
          var Ye = !0;
        else {
          var vn = We(Be);
          vn !== null && fe(ge, vn.startTime - B), Ye = !1;
        }
        return Ye;
      } finally {
        Re = null, re = pe, At = !1;
      }
    }
    u(It, "X");
    function pn(z) {
      switch (z) {
        case 1:
          return -1;
        case 2:
          return 250;
        case 5:
          return 1073741823;
        case 4:
          return 1e4;
        default:
          return 5e3;
      }
    }
    u(pn, "Y");
    var wn = we;
    M.unstable_IdlePriority = 5, M.unstable_ImmediatePriority = 1, M.unstable_LowPriority = 4, M.unstable_NormalPriority = 3, M.unstable_Profiling = null, M.unstable_UserBlockingPriority = 2, M.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, M.unstable_continueExecution = function() {
      se || At || (se = !0, ie(It));
    }, M.unstable_getCurrentPriorityLevel = function() {
      return re;
    }, M.unstable_getFirstCallbackNode = function() {
      return We(st);
    }, M.unstable_next = function(z) {
      switch (re) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = re;
      }
      var pe = re;
      re = B;
      try {
        return z();
      } finally {
        re = pe;
      }
    }, M.unstable_pauseExecution = function() {
    }, M.unstable_requestPaint = wn, M.unstable_runWithPriority = function(z, B) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var pe = re;
      re = z;
      try {
        return B();
      } finally {
        re = pe;
      }
    }, M.unstable_scheduleCallback = function(z, B, pe) {
      var K = M.unstable_now();
      if (typeof pe == "object" && pe !== null) {
        var ke = pe.delay;
        ke = typeof ke == "number" && 0 < ke ? K + ke : K, pe = typeof pe.timeout == "number" ? pe.timeout : pn(z);
      } else
        pe = pn(z), ke = K;
      return pe = ke + pe, z = { id: $r++, callback: B, priorityLevel: z, startTime: ke, expirationTime: pe, sortIndex: -1 }, ke > K ? (z.sortIndex = ke, et(Be, z), We(st) === null && z === We(Be) && (Ce ? D() : Ce = !0, fe(ge, ke - K))) : (z.sortIndex = pe, et(st, z), se || At || (se = !0, ie(It))), z;
    }, M.unstable_shouldYield = function() {
      var z = M.unstable_now();
      ae(z);
      var B = We(st);
      return B !== Re && Re !== null && B !== null && B.callback !== null && B.startTime <= z && B.expirationTime < Re.expirationTime || at();
    }, M.unstable_wrapCallback = function(z) {
      var B = re;
      return function() {
        var pe = re;
        re = B;
        try {
          return z.apply(this, arguments);
        } finally {
          re = pe;
        }
      };
    };
  }(Fy)), Fy;
}
u(Cx, "requireScheduler_production_min");
var Hy = {};
/** @license React v0.19.1
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cS;
function bx() {
  return cS || (cS = 1, function(M) {
    process.env.NODE_ENV !== "production" && function() {
      var ie = !1, fe = !0, D, at, we, gt, T;
      if (typeof window > "u" || typeof MessageChannel != "function") {
        var Jt = null, _t = null, jn = /* @__PURE__ */ u(function() {
          if (Jt !== null)
            try {
              var A = M.unstable_now(), F = !0;
              Jt(F, A), Jt = null;
            } catch (ce) {
              throw setTimeout(jn, 0), ce;
            }
        }, "_flushCallback"), mi = Date.now();
        M.unstable_now = function() {
          return Date.now() - mi;
        }, D = /* @__PURE__ */ u(function(A) {
          Jt !== null ? setTimeout(D, 0, A) : (Jt = A, setTimeout(jn, 0));
        }, "requestHostCallback"), at = /* @__PURE__ */ u(function(A, F) {
          _t = setTimeout(A, F);
        }, "requestHostTimeout"), we = /* @__PURE__ */ u(function() {
          clearTimeout(_t);
        }, "cancelHostTimeout"), gt = /* @__PURE__ */ u(function() {
          return !1;
        }, "shouldYieldToHost"), T = M.unstable_forceFrameRate = function() {
        };
      } else {
        var er = window.performance, dn = window.Date, tr = window.setTimeout, nr = window.clearTimeout;
        if (typeof console < "u") {
          var en = window.requestAnimationFrame, tn = window.cancelAnimationFrame;
          typeof en != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), typeof tn != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
        }
        if (typeof er == "object" && typeof er.now == "function")
          M.unstable_now = function() {
            return er.now();
          };
        else {
          var Se = dn.now();
          M.unstable_now = function() {
            return dn.now() - Se;
          };
        }
        var _e = !1, he = null, le = -1, ye = 5, et = 0;
        gt = /* @__PURE__ */ u(function() {
          return M.unstable_now() >= et;
        }, "shouldYieldToHost"), T = /* @__PURE__ */ u(function() {
        }, "requestPaint"), M.unstable_forceFrameRate = function(A) {
          if (A < 0 || A > 125) {
            console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported");
            return;
          }
          A > 0 ? ye = Math.floor(1e3 / A) : ye = 5;
        };
        var We = /* @__PURE__ */ u(function() {
          if (he !== null) {
            var A = M.unstable_now();
            et = A + ye;
            var F = !0;
            try {
              var ce = he(F, A);
              ce ? kt.postMessage(null) : (_e = !1, he = null);
            } catch (Ue) {
              throw kt.postMessage(null), Ue;
            }
          } else
            _e = !1;
        }, "performWorkUntilDeadline"), Ne = new MessageChannel(), kt = Ne.port2;
        Ne.port1.onmessage = We, D = /* @__PURE__ */ u(function(A) {
          he = A, _e || (_e = !0, kt.postMessage(null));
        }, "requestHostCallback"), at = /* @__PURE__ */ u(function(A, F) {
          le = tr(function() {
            A(M.unstable_now());
          }, F);
        }, "requestHostTimeout"), we = /* @__PURE__ */ u(function() {
          nr(le), le = -1;
        }, "cancelHostTimeout");
      }
      function st(A, F) {
        var ce = A.length;
        A.push(F), Re(A, F, ce);
      }
      u(st, "push");
      function Be(A) {
        var F = A[0];
        return F === void 0 ? null : F;
      }
      u(Be, "peek");
      function $r(A) {
        var F = A[0];
        if (F !== void 0) {
          var ce = A.pop();
          return ce !== F && (A[0] = ce, re(A, ce, 0)), F;
        } else
          return null;
      }
      u($r, "pop");
      function Re(A, F, ce) {
        for (var Ue = ce; ; ) {
          var ht = Ue - 1 >>> 1, mt = A[ht];
          if (mt !== void 0 && At(mt, F) > 0)
            A[ht] = F, A[Ue] = mt, Ue = ht;
          else
            return;
        }
      }
      u(Re, "siftUp");
      function re(A, F, ce) {
        for (var Ue = ce, ht = A.length; Ue < ht; ) {
          var mt = (Ue + 1) * 2 - 1, bt = A[mt], Qn = mt + 1, St = A[Qn];
          if (bt !== void 0 && At(bt, F) < 0)
            St !== void 0 && At(St, bt) < 0 ? (A[Ue] = St, A[Qn] = F, Ue = Qn) : (A[Ue] = bt, A[mt] = F, Ue = mt);
          else if (St !== void 0 && At(St, F) < 0)
            A[Ue] = St, A[Qn] = F, Ue = Qn;
          else
            return;
        }
      }
      u(re, "siftDown");
      function At(A, F) {
        var ce = A.sortIndex - F.sortIndex;
        return ce !== 0 ? ce : A.id - F.id;
      }
      u(At, "compare");
      var se = 0, Ce = 1, ae = 2, ge = 3, It = 4, pn = 5, wn = 0, z = 0, B = 4, pe = typeof SharedArrayBuffer == "function" ? new SharedArrayBuffer(B * Int32Array.BYTES_PER_ELEMENT) : typeof ArrayBuffer == "function" ? new ArrayBuffer(B * Int32Array.BYTES_PER_ELEMENT) : null, K = pe !== null ? new Int32Array(pe) : [], ke = 0, Ye = 1, vn = 2, Le = 3;
      K[ke] = se, K[Le] = 0, K[Ye] = 0;
      var qe = 131072, hn = 524288, mn = 0, Lt = null, rt = null, wr = 0, Tt = 1, oa = 2, yi = 3, _r = 4, sa = 5, gi = 6, kr = 7, il = 8;
      function _n(A) {
        if (rt !== null) {
          var F = wr;
          if (wr += A.length, wr + 1 > mn) {
            if (mn *= 2, mn > hn) {
              console.error("Scheduler Profiling: Event log exceeded maximum size. Don't forget to call `stopLoggingProfilingEvents()`."), Ti();
              return;
            }
            var ce = new Int32Array(mn * 4);
            ce.set(rt), Lt = ce.buffer, rt = ce;
          }
          rt.set(A, F);
        }
      }
      u(_n, "logEvent");
      function ql() {
        mn = qe, Lt = new ArrayBuffer(mn * 4), rt = new Int32Array(Lt), wr = 0;
      }
      u(ql, "startLoggingProfilingEvents");
      function Ti() {
        var A = Lt;
        return mn = 0, Lt = null, rt = null, wr = 0, A;
      }
      u(Ti, "stopLoggingProfilingEvents");
      function nn(A, F) {
        K[Le]++, rt !== null && _n([Tt, F * 1e3, A.id, A.priorityLevel]);
      }
      u(nn, "markTaskStart");
      function fa(A, F) {
        K[ke] = se, K[Ye] = 0, K[Le]--, rt !== null && _n([oa, F * 1e3, A.id]);
      }
      u(fa, "markTaskCompleted");
      function Xl(A, F) {
        K[Le]--, rt !== null && _n([_r, F * 1e3, A.id]);
      }
      u(Xl, "markTaskCanceled");
      function Kl(A, F) {
        K[ke] = se, K[Ye] = 0, K[Le]--, rt !== null && _n([yi, F * 1e3, A.id]);
      }
      u(Kl, "markTaskErrored");
      function al(A, F) {
        wn++, K[ke] = A.priorityLevel, K[Ye] = A.id, K[vn] = wn, rt !== null && _n([sa, F * 1e3, A.id, wn]);
      }
      u(al, "markTaskRun");
      function Wn(A, F) {
        K[ke] = se, K[Ye] = 0, K[vn] = 0, rt !== null && _n([gi, F * 1e3, A.id, wn]);
      }
      u(Wn, "markTaskYield");
      function Ei(A) {
        z++, rt !== null && _n([kr, A * 1e3, z]);
      }
      u(Ei, "markSchedulerSuspended");
      function Bn(A) {
        rt !== null && _n([il, A * 1e3, z]);
      }
      u(Bn, "markSchedulerUnsuspended");
      var Zl = 1073741823, rr = -1, To = 250, Eo = 5e3, ca = 1e4, ll = Zl, jt = [], ir = [], ul = 1, Xe = null, Et = ge, Gr = !1, $t = !1, ar = !1;
      function kn(A) {
        for (var F = Be(ir); F !== null; ) {
          if (F.callback === null)
            $r(ir);
          else if (F.startTime <= A)
            $r(ir), F.sortIndex = F.expirationTime, st(jt, F), nn(F, A), F.isQueued = !0;
          else
            return;
          F = Be(ir);
        }
      }
      u(kn, "advanceTimers");
      function da(A) {
        if (ar = !1, kn(A), !$t)
          if (Be(jt) !== null)
            $t = !0, D(ol);
          else {
            var F = Be(ir);
            F !== null && at(da, F.startTime - A);
          }
      }
      u(da, "handleTimeout");
      function ol(A, F) {
        Bn(F), $t = !1, ar && (ar = !1, we()), Gr = !0;
        var ce = Et;
        try {
          if (fe)
            try {
              return So(A, F);
            } catch (mt) {
              if (Xe !== null) {
                var Ue = M.unstable_now();
                Kl(Xe, Ue), Xe.isQueued = !1;
              }
              throw mt;
            }
        } finally {
          Xe = null, Et = ce, Gr = !1;
          {
            var ht = M.unstable_now();
            Ei(ht);
          }
        }
      }
      u(ol, "flushWork");
      function So(A, F) {
        var ce = F;
        for (kn(ce), Xe = Be(jt); Xe !== null && !ie && !(Xe.expirationTime > ce && (!A || gt())); ) {
          var Ue = Xe.callback;
          if (Ue !== null) {
            Xe.callback = null, Et = Xe.priorityLevel;
            var ht = Xe.expirationTime <= ce;
            al(Xe, ce);
            var mt = Ue(ht);
            ce = M.unstable_now(), typeof mt == "function" ? (Xe.callback = mt, Wn(Xe, ce)) : (fa(Xe, ce), Xe.isQueued = !1, Xe === Be(jt) && $r(jt)), kn(ce);
          } else
            $r(jt);
          Xe = Be(jt);
        }
        if (Xe !== null)
          return !0;
        var bt = Be(ir);
        return bt !== null && at(da, bt.startTime - ce), !1;
      }
      u(So, "workLoop");
      function Co(A, F) {
        switch (A) {
          case Ce:
          case ae:
          case ge:
          case It:
          case pn:
            break;
          default:
            A = ge;
        }
        var ce = Et;
        Et = A;
        try {
          return F();
        } finally {
          Et = ce;
        }
      }
      u(Co, "unstable_runWithPriority");
      function bo(A) {
        var F;
        switch (Et) {
          case Ce:
          case ae:
          case ge:
            F = ge;
            break;
          default:
            F = Et;
            break;
        }
        var ce = Et;
        Et = F;
        try {
          return A();
        } finally {
          Et = ce;
        }
      }
      u(bo, "unstable_next");
      function sl(A) {
        var F = Et;
        return function() {
          var ce = Et;
          Et = F;
          try {
            return A.apply(this, arguments);
          } finally {
            Et = ce;
          }
        };
      }
      u(sl, "unstable_wrapCallback");
      function pa(A) {
        switch (A) {
          case Ce:
            return rr;
          case ae:
            return To;
          case pn:
            return ll;
          case It:
            return ca;
          case ge:
          default:
            return Eo;
        }
      }
      u(pa, "timeoutForPriorityLevel");
      function Si(A, F, ce) {
        var Ue = M.unstable_now(), ht, mt;
        if (typeof ce == "object" && ce !== null) {
          var bt = ce.delay;
          typeof bt == "number" && bt > 0 ? ht = Ue + bt : ht = Ue, mt = typeof ce.timeout == "number" ? ce.timeout : pa(A);
        } else
          mt = pa(A), ht = Ue;
        var Qn = ht + mt, St = {
          id: ul++,
          callback: F,
          priorityLevel: A,
          startTime: ht,
          expirationTime: Qn,
          sortIndex: -1
        };
        return St.isQueued = !1, ht > Ue ? (St.sortIndex = ht, st(ir, St), Be(jt) === null && St === Be(ir) && (ar ? we() : ar = !0, at(da, ht - Ue))) : (St.sortIndex = Qn, st(jt, St), nn(St, Ue), St.isQueued = !0, !$t && !Gr && ($t = !0, D(ol))), St;
      }
      u(Si, "unstable_scheduleCallback");
      function va() {
      }
      u(va, "unstable_pauseExecution");
      function Dn() {
        !$t && !Gr && ($t = !0, D(ol));
      }
      u(Dn, "unstable_continueExecution");
      function Ci() {
        return Be(jt);
      }
      u(Ci, "unstable_getFirstCallbackNode");
      function rn(A) {
        if (A.isQueued) {
          var F = M.unstable_now();
          Xl(A, F), A.isQueued = !1;
        }
        A.callback = null;
      }
      u(rn, "unstable_cancelCallback");
      function qr() {
        return Et;
      }
      u(qr, "unstable_getCurrentPriorityLevel");
      function Jl() {
        var A = M.unstable_now();
        kn(A);
        var F = Be(jt);
        return F !== Xe && Xe !== null && F !== null && F.callback !== null && F.startTime <= A && F.expirationTime < Xe.expirationTime || gt();
      }
      u(Jl, "unstable_shouldYield");
      var ha = T, eu = {
        startLoggingProfilingEvents: ql,
        stopLoggingProfilingEvents: Ti,
        sharedProfilingBuffer: pe
      };
      M.unstable_IdlePriority = pn, M.unstable_ImmediatePriority = Ce, M.unstable_LowPriority = It, M.unstable_NormalPriority = ge, M.unstable_Profiling = eu, M.unstable_UserBlockingPriority = ae, M.unstable_cancelCallback = rn, M.unstable_continueExecution = Dn, M.unstable_getCurrentPriorityLevel = qr, M.unstable_getFirstCallbackNode = Ci, M.unstable_next = bo, M.unstable_pauseExecution = va, M.unstable_requestPaint = ha, M.unstable_runWithPriority = Co, M.unstable_scheduleCallback = Si, M.unstable_shouldYield = Jl, M.unstable_wrapCallback = sl;
    }();
  }(Hy)), Hy;
}
u(bx, "requireScheduler_development");
var dS;
function SS() {
  return dS || (dS = 1, function(M) {
    process.env.NODE_ENV === "production" ? M.exports = Cx() : M.exports = bx();
  }(Py)), Py.exports;
}
u(SS, "requireScheduler");
/** @license React v16.14.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pS;
function xx() {
  if (pS)
    return xr;
  pS = 1;
  var M = TS.exports, ie = gS(), fe = SS();
  function D(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  if (u(D, "u"), !M)
    throw Error(D(227));
  function at(n, r, l, s, c, v, h, y, w) {
    var R = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, R);
    } catch (Y) {
      this.onError(Y);
    }
  }
  u(at, "ba");
  var we = !1, gt = null, T = !1, Jt = null, _t = { onError: function(n) {
    we = !0, gt = n;
  } };
  function jn(n, r, l, s, c, v, h, y, w) {
    we = !1, gt = null, at.apply(_t, arguments);
  }
  u(jn, "ja");
  function mi(n, r, l, s, c, v, h, y, w) {
    if (jn.apply(this, arguments), we) {
      if (we) {
        var R = gt;
        we = !1, gt = null;
      } else
        throw Error(D(198));
      T || (T = !0, Jt = R);
    }
  }
  u(mi, "ka");
  var er = null, dn = null, tr = null;
  function nr(n, r, l) {
    var s = n.type || "unknown-event";
    n.currentTarget = tr(l), mi(s, r, void 0, n), n.currentTarget = null;
  }
  u(nr, "oa");
  var en = null, tn = {};
  function Se() {
    if (en)
      for (var n in tn) {
        var r = tn[n], l = en.indexOf(n);
        if (!(-1 < l))
          throw Error(D(96, n));
        if (!he[l]) {
          if (!r.extractEvents)
            throw Error(D(97, n));
          he[l] = r, l = r.eventTypes;
          for (var s in l) {
            var c = void 0, v = l[s], h = r, y = s;
            if (le.hasOwnProperty(y))
              throw Error(D(99, y));
            le[y] = v;
            var w = v.phasedRegistrationNames;
            if (w) {
              for (c in w)
                w.hasOwnProperty(c) && _e(w[c], h, y);
              c = !0;
            } else
              v.registrationName ? (_e(v.registrationName, h, y), c = !0) : c = !1;
            if (!c)
              throw Error(D(98, s, n));
          }
        }
      }
  }
  u(Se, "ra");
  function _e(n, r, l) {
    if (ye[n])
      throw Error(D(100, n));
    ye[n] = r, et[n] = r.eventTypes[l].dependencies;
  }
  u(_e, "ua");
  var he = [], le = {}, ye = {}, et = {};
  function We(n) {
    var r = !1, l;
    for (l in n)
      if (n.hasOwnProperty(l)) {
        var s = n[l];
        if (!tn.hasOwnProperty(l) || tn[l] !== s) {
          if (tn[l])
            throw Error(D(102, l));
          tn[l] = s, r = !0;
        }
      }
    r && Se();
  }
  u(We, "xa");
  var Ne = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), kt = null, st = null, Be = null;
  function $r(n) {
    if (n = dn(n)) {
      if (typeof kt != "function")
        throw Error(D(280));
      var r = n.stateNode;
      r && (r = er(r), kt(n.stateNode, n.type, r));
    }
  }
  u($r, "Ca");
  function Re(n) {
    st ? Be ? Be.push(n) : Be = [n] : st = n;
  }
  u(Re, "Da");
  function re() {
    if (st) {
      var n = st, r = Be;
      if (Be = st = null, $r(n), r)
        for (n = 0; n < r.length; n++)
          $r(r[n]);
    }
  }
  u(re, "Ea");
  function At(n, r) {
    return n(r);
  }
  u(At, "Fa");
  function se(n, r, l, s, c) {
    return n(r, l, s, c);
  }
  u(se, "Ga");
  function Ce() {
  }
  u(Ce, "Ha");
  var ae = At, ge = !1, It = !1;
  function pn() {
    (st !== null || Be !== null) && (Ce(), re());
  }
  u(pn, "La");
  function wn(n, r, l) {
    if (It)
      return n(r, l);
    It = !0;
    try {
      return ae(n, r, l);
    } finally {
      It = !1, pn();
    }
  }
  u(wn, "Ma");
  var z = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, B = Object.prototype.hasOwnProperty, pe = {}, K = {};
  function ke(n) {
    return B.call(K, n) ? !0 : B.call(pe, n) ? !1 : z.test(n) ? K[n] = !0 : (pe[n] = !0, !1);
  }
  u(ke, "Ra");
  function Ye(n, r, l, s) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  u(Ye, "Sa");
  function vn(n, r, l, s) {
    if (r === null || typeof r > "u" || Ye(n, r, l, s))
      return !0;
    if (s)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  u(vn, "Ta");
  function Le(n, r, l, s, c, v) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = s, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = v;
  }
  u(Le, "v");
  var qe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    qe[n] = new Le(n, 0, !1, n, null, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    qe[r] = new Le(r, 1, !1, n[1], null, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    qe[n] = new Le(n, 2, !1, n.toLowerCase(), null, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    qe[n] = new Le(n, 2, !1, n, null, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    qe[n] = new Le(n, 3, !1, n.toLowerCase(), null, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    qe[n] = new Le(n, 3, !0, n, null, !1);
  }), ["capture", "download"].forEach(function(n) {
    qe[n] = new Le(n, 4, !1, n, null, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    qe[n] = new Le(n, 6, !1, n, null, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    qe[n] = new Le(n, 5, !1, n.toLowerCase(), null, !1);
  });
  var hn = /[\-:]([a-z])/g;
  function mn(n) {
    return n[1].toUpperCase();
  }
  u(mn, "Va"), "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      hn,
      mn
    );
    qe[r] = new Le(r, 1, !1, n, null, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(hn, mn);
    qe[r] = new Le(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(hn, mn);
    qe[r] = new Le(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    qe[n] = new Le(n, 1, !1, n.toLowerCase(), null, !1);
  }), qe.xlinkHref = new Le("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach(function(n) {
    qe[n] = new Le(n, 1, !1, n.toLowerCase(), null, !0);
  });
  var Lt = M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Lt.hasOwnProperty("ReactCurrentDispatcher") || (Lt.ReactCurrentDispatcher = { current: null }), Lt.hasOwnProperty("ReactCurrentBatchConfig") || (Lt.ReactCurrentBatchConfig = { suspense: null });
  function rt(n, r, l, s) {
    var c = qe.hasOwnProperty(r) ? qe[r] : null, v = c !== null ? c.type === 0 : s ? !1 : !(!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N");
    v || (vn(r, l, c, s) && (l = null), s || c === null ? ke(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, s = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, s ? n.setAttributeNS(s, r, l) : n.setAttribute(r, l))));
  }
  u(rt, "Xa");
  var wr = /^(.*)[\\\/]/, Tt = typeof Symbol == "function" && Symbol.for, oa = Tt ? Symbol.for("react.element") : 60103, yi = Tt ? Symbol.for("react.portal") : 60106, _r = Tt ? Symbol.for("react.fragment") : 60107, sa = Tt ? Symbol.for("react.strict_mode") : 60108, gi = Tt ? Symbol.for("react.profiler") : 60114, kr = Tt ? Symbol.for("react.provider") : 60109, il = Tt ? Symbol.for("react.context") : 60110, _n = Tt ? Symbol.for("react.concurrent_mode") : 60111, ql = Tt ? Symbol.for("react.forward_ref") : 60112, Ti = Tt ? Symbol.for("react.suspense") : 60113, nn = Tt ? Symbol.for("react.suspense_list") : 60120, fa = Tt ? Symbol.for("react.memo") : 60115, Xl = Tt ? Symbol.for("react.lazy") : 60116, Kl = Tt ? Symbol.for("react.block") : 60121, al = typeof Symbol == "function" && Symbol.iterator;
  function Wn(n) {
    return n === null || typeof n != "object" ? null : (n = al && n[al] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  u(Wn, "nb");
  function Ei(n) {
    if (n._status === -1) {
      n._status = 0;
      var r = n._ctor;
      r = r(), n._result = r, r.then(function(l) {
        n._status === 0 && (l = l.default, n._status = 1, n._result = l);
      }, function(l) {
        n._status === 0 && (n._status = 2, n._result = l);
      });
    }
  }
  u(Ei, "ob");
  function Bn(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case _r:
        return "Fragment";
      case yi:
        return "Portal";
      case gi:
        return "Profiler";
      case sa:
        return "StrictMode";
      case Ti:
        return "Suspense";
      case nn:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case il:
          return "Context.Consumer";
        case kr:
          return "Context.Provider";
        case ql:
          var r = n.render;
          return r = r.displayName || r.name || "", n.displayName || (r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef");
        case fa:
          return Bn(n.type);
        case Kl:
          return Bn(n.render);
        case Xl:
          if (n = n._status === 1 ? n._result : null)
            return Bn(n);
      }
    return null;
  }
  u(Bn, "pb");
  function Zl(n) {
    var r = "";
    do {
      e:
        switch (n.tag) {
          case 3:
          case 4:
          case 6:
          case 7:
          case 10:
          case 9:
            var l = "";
            break e;
          default:
            var s = n._debugOwner, c = n._debugSource, v = Bn(n.type);
            l = null, s && (l = Bn(s.type)), s = v, v = "", c ? v = " (at " + c.fileName.replace(wr, "") + ":" + c.lineNumber + ")" : l && (v = " (created by " + l + ")"), l = `
    in ` + (s || "Unknown") + v;
        }
      r += l, n = n.return;
    } while (n);
    return r;
  }
  u(Zl, "qb");
  function rr(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "object":
      case "string":
      case "undefined":
        return n;
      default:
        return "";
    }
  }
  u(rr, "rb");
  function To(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  u(To, "sb");
  function Eo(n) {
    var r = To(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), s = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, v = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(h) {
        s = "" + h, v.call(this, h);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return s;
      }, setValue: function(h) {
        s = "" + h;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  u(Eo, "tb");
  function ca(n) {
    n._valueTracker || (n._valueTracker = Eo(n));
  }
  u(ca, "xb");
  function ll(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), s = "";
    return n && (s = To(n) ? n.checked ? "true" : "false" : n.value), n = s, n !== l ? (r.setValue(n), !0) : !1;
  }
  u(ll, "yb");
  function jt(n, r) {
    var l = r.checked;
    return ie({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  u(jt, "zb");
  function ir(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, s = r.checked != null ? r.checked : r.defaultChecked;
    l = rr(r.value != null ? r.value : l), n._wrapperState = { initialChecked: s, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  u(ir, "Ab");
  function ul(n, r) {
    r = r.checked, r != null && rt(n, "checked", r, !1);
  }
  u(ul, "Bb");
  function Xe(n, r) {
    ul(n, r);
    var l = rr(r.value), s = r.type;
    if (l != null)
      s === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (s === "submit" || s === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Gr(n, r.type, l) : r.hasOwnProperty("defaultValue") && Gr(n, r.type, rr(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  u(Xe, "Cb");
  function Et(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var s = r.type;
      if (!(s !== "submit" && s !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  u(Et, "Eb");
  function Gr(n, r, l) {
    (r !== "number" || n.ownerDocument.activeElement !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  u(Gr, "Db");
  function $t(n) {
    var r = "";
    return M.Children.forEach(n, function(l) {
      l != null && (r += l);
    }), r;
  }
  u($t, "Fb");
  function ar(n, r) {
    return n = ie({ children: void 0 }, r), (r = $t(r.children)) && (n.children = r), n;
  }
  u(ar, "Gb");
  function kn(n, r, l, s) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && s && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + rr(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, s && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  u(kn, "Hb");
  function da(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(D(91));
    return ie({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  u(da, "Ib");
  function ol(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(D(92));
        if (Array.isArray(l)) {
          if (!(1 >= l.length))
            throw Error(D(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: rr(l) };
  }
  u(ol, "Jb");
  function So(n, r) {
    var l = rr(r.value), s = rr(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), s != null && (n.defaultValue = "" + s);
  }
  u(So, "Kb");
  function Co(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  u(Co, "Lb");
  var bo = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
  function sl(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  u(sl, "Nb");
  function pa(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? sl(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  u(pa, "Ob");
  var Si, va = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, s, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, s, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== bo.svg || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (Si = Si || document.createElement("div"), Si.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Si.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function Dn(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  u(Dn, "Rb");
  function Ci(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  u(Ci, "Sb");
  var rn = { animationend: Ci("Animation", "AnimationEnd"), animationiteration: Ci("Animation", "AnimationIteration"), animationstart: Ci("Animation", "AnimationStart"), transitionend: Ci("Transition", "TransitionEnd") }, qr = {}, Jl = {};
  Ne && (Jl = document.createElement("div").style, "AnimationEvent" in window || (delete rn.animationend.animation, delete rn.animationiteration.animation, delete rn.animationstart.animation), "TransitionEvent" in window || delete rn.transitionend.transition);
  function ha(n) {
    if (qr[n])
      return qr[n];
    if (!rn[n])
      return n;
    var r = rn[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in Jl)
        return qr[n] = r[l];
    return n;
  }
  u(ha, "Wb");
  var eu = ha("animationend"), A = ha("animationiteration"), F = ha("animationstart"), ce = ha("transitionend"), Ue = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ht = new (typeof WeakMap == "function" ? WeakMap : Map)();
  function mt(n) {
    var r = ht.get(n);
    return r === void 0 && (r = /* @__PURE__ */ new Map(), ht.set(n, r)), r;
  }
  u(mt, "cc");
  function bt(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, (r.effectTag & 1026) !== 0 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  u(bt, "dc");
  function Qn(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  u(Qn, "ec");
  function St(n) {
    if (bt(n) !== n)
      throw Error(D(188));
  }
  u(St, "fc");
  function tu(n) {
    var r = n.alternate;
    if (!r) {
      if (r = bt(n), r === null)
        throw Error(D(188));
      return r !== n ? null : n;
    }
    for (var l = n, s = r; ; ) {
      var c = l.return;
      if (c === null)
        break;
      var v = c.alternate;
      if (v === null) {
        if (s = c.return, s !== null) {
          l = s;
          continue;
        }
        break;
      }
      if (c.child === v.child) {
        for (v = c.child; v; ) {
          if (v === l)
            return St(c), n;
          if (v === s)
            return St(c), r;
          v = v.sibling;
        }
        throw Error(D(188));
      }
      if (l.return !== s.return)
        l = c, s = v;
      else {
        for (var h = !1, y = c.child; y; ) {
          if (y === l) {
            h = !0, l = c, s = v;
            break;
          }
          if (y === s) {
            h = !0, s = c, l = v;
            break;
          }
          y = y.sibling;
        }
        if (!h) {
          for (y = v.child; y; ) {
            if (y === l) {
              h = !0, l = v, s = c;
              break;
            }
            if (y === s) {
              h = !0, s = v, l = c;
              break;
            }
            y = y.sibling;
          }
          if (!h)
            throw Error(D(189));
        }
      }
      if (l.alternate !== s)
        throw Error(D(190));
    }
    if (l.tag !== 3)
      throw Error(D(188));
    return l.stateNode.current === l ? n : r;
  }
  u(tu, "gc");
  function xo(n) {
    if (n = tu(n), !n)
      return null;
    for (var r = n; ; ) {
      if (r.tag === 5 || r.tag === 6)
        return r;
      if (r.child)
        r.child.return = r, r = r.child;
      else {
        if (r === n)
          break;
        for (; !r.sibling; ) {
          if (!r.return || r.return === n)
            return null;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return null;
  }
  u(xo, "hc");
  function xt(n, r) {
    if (r == null)
      throw Error(D(30));
    return n == null ? r : Array.isArray(n) ? Array.isArray(r) ? (n.push.apply(n, r), n) : (n.push(r), n) : Array.isArray(r) ? [n].concat(r) : [n, r];
  }
  u(xt, "ic");
  function Dt(n, r, l) {
    Array.isArray(n) ? n.forEach(r, l) : n && r.call(l, n);
  }
  u(Dt, "jc");
  var nu = null;
  function cf(n) {
    if (n) {
      var r = n._dispatchListeners, l = n._dispatchInstances;
      if (Array.isArray(r))
        for (var s = 0; s < r.length && !n.isPropagationStopped(); s++)
          nr(n, r[s], l[s]);
      else
        r && nr(n, r, l);
      n._dispatchListeners = null, n._dispatchInstances = null, n.isPersistent() || n.constructor.release(n);
    }
  }
  u(cf, "lc");
  function fl(n) {
    if (n !== null && (nu = xt(nu, n)), n = nu, nu = null, n) {
      if (Dt(n, cf), nu)
        throw Error(D(95));
      if (T)
        throw n = Jt, T = !1, Jt = null, n;
    }
  }
  u(fl, "mc");
  function df(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  u(df, "nc");
  function Cd(n) {
    if (!Ne)
      return !1;
    n = "on" + n;
    var r = n in document;
    return r || (r = document.createElement("div"), r.setAttribute(n, "return;"), r = typeof r[n] == "function"), r;
  }
  u(Cd, "oc");
  var ru = [];
  function pf(n) {
    n.topLevelType = null, n.nativeEvent = null, n.targetInst = null, n.ancestors.length = 0, 10 > ru.length && ru.push(n);
  }
  u(pf, "qc");
  function bd(n, r, l, s) {
    if (ru.length) {
      var c = ru.pop();
      return c.topLevelType = n, c.eventSystemFlags = s, c.nativeEvent = r, c.targetInst = l, c;
    }
    return { topLevelType: n, eventSystemFlags: s, nativeEvent: r, targetInst: l, ancestors: [] };
  }
  u(bd, "rc");
  function vf(n) {
    var r = n.targetInst, l = r;
    do {
      if (!l) {
        n.ancestors.push(l);
        break;
      }
      var s = l;
      if (s.tag === 3)
        s = s.stateNode.containerInfo;
      else {
        for (; s.return; )
          s = s.return;
        s = s.tag !== 3 ? null : s.stateNode.containerInfo;
      }
      if (!s)
        break;
      r = l.tag, r !== 5 && r !== 6 || n.ancestors.push(l), l = gl(s);
    } while (l);
    for (l = 0; l < n.ancestors.length; l++) {
      r = n.ancestors[l];
      var c = df(n.nativeEvent);
      s = n.topLevelType;
      var v = n.nativeEvent, h = n.eventSystemFlags;
      l === 0 && (h |= 64);
      for (var y = null, w = 0; w < he.length; w++) {
        var R = he[w];
        R && (R = R.extractEvents(s, r, v, c, h)) && (y = xt(y, R));
      }
      fl(y);
    }
  }
  u(vf, "sc");
  function iu(n, r, l) {
    if (!l.has(n)) {
      switch (n) {
        case "scroll":
          ur(r, "scroll", !0);
          break;
        case "focus":
        case "blur":
          ur(r, "focus", !0), ur(r, "blur", !0), l.set("blur", null), l.set("focus", null);
          break;
        case "cancel":
        case "close":
          Cd(n) && ur(r, n, !0);
          break;
        case "invalid":
        case "submit":
        case "reset":
          break;
        default:
          Ue.indexOf(n) === -1 && be(n, r);
      }
      l.set(n, null);
    }
  }
  u(iu, "uc");
  var Ro, hf, an, ma = !1, Gt = [], yn = null, Xr = null, lr = null, ya = /* @__PURE__ */ new Map(), ga = /* @__PURE__ */ new Map(), au = [], Ta = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "), wo = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
  function _o(n, r) {
    var l = mt(r);
    Ta.forEach(function(s) {
      iu(s, r, l);
    }), wo.forEach(function(s) {
      iu(s, r, l);
    });
  }
  u(_o, "Jc");
  function cl(n, r, l, s, c) {
    return { blockedOn: n, topLevelType: r, eventSystemFlags: l | 32, nativeEvent: c, container: s };
  }
  u(cl, "Kc");
  function bi(n, r) {
    switch (n) {
      case "focus":
      case "blur":
        yn = null;
        break;
      case "dragenter":
      case "dragleave":
        Xr = null;
        break;
      case "mouseover":
      case "mouseout":
        lr = null;
        break;
      case "pointerover":
      case "pointerout":
        ya.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ga.delete(r.pointerId);
    }
  }
  u(bi, "Lc");
  function dl(n, r, l, s, c, v) {
    return n === null || n.nativeEvent !== v ? (n = cl(r, l, s, c, v), r !== null && (r = su(r), r !== null && hf(r)), n) : (n.eventSystemFlags |= s, n);
  }
  u(dl, "Mc");
  function xd(n, r, l, s, c) {
    switch (r) {
      case "focus":
        return yn = dl(yn, n, r, l, s, c), !0;
      case "dragenter":
        return Xr = dl(Xr, n, r, l, s, c), !0;
      case "mouseover":
        return lr = dl(lr, n, r, l, s, c), !0;
      case "pointerover":
        var v = c.pointerId;
        return ya.set(v, dl(ya.get(v) || null, n, r, l, s, c)), !0;
      case "gotpointercapture":
        return v = c.pointerId, ga.set(v, dl(ga.get(v) || null, n, r, l, s, c)), !0;
    }
    return !1;
  }
  u(xd, "Oc");
  function qv(n) {
    var r = gl(n.target);
    if (r !== null) {
      var l = bt(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Qn(l), r !== null) {
            n.blockedOn = r, fe.unstable_runWithPriority(n.priority, function() {
              an(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.hydrate) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  u(qv, "Pc");
  function Dr(n) {
    if (n.blockedOn !== null)
      return !1;
    var r = Nr(n.topLevelType, n.eventSystemFlags, n.container, n.nativeEvent);
    if (r !== null) {
      var l = su(r);
      return l !== null && hf(l), n.blockedOn = r, !1;
    }
    return !0;
  }
  u(Dr, "Qc");
  function Rd(n, r, l) {
    Dr(n) && l.delete(r);
  }
  u(Rd, "Sc");
  function mf() {
    for (ma = !1; 0 < Gt.length; ) {
      var n = Gt[0];
      if (n.blockedOn !== null) {
        n = su(n.blockedOn), n !== null && Ro(n);
        break;
      }
      var r = Nr(n.topLevelType, n.eventSystemFlags, n.container, n.nativeEvent);
      r !== null ? n.blockedOn = r : Gt.shift();
    }
    yn !== null && Dr(yn) && (yn = null), Xr !== null && Dr(Xr) && (Xr = null), lr !== null && Dr(lr) && (lr = null), ya.forEach(Rd), ga.forEach(Rd);
  }
  u(mf, "Tc");
  function Ea(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ma || (ma = !0, fe.unstable_scheduleCallback(fe.unstable_NormalPriority, mf)));
  }
  u(Ea, "Uc");
  function wd(n) {
    function r(c) {
      return Ea(c, n);
    }
    if (u(r, "b"), 0 < Gt.length) {
      Ea(Gt[0], n);
      for (var l = 1; l < Gt.length; l++) {
        var s = Gt[l];
        s.blockedOn === n && (s.blockedOn = null);
      }
    }
    for (yn !== null && Ea(yn, n), Xr !== null && Ea(Xr, n), lr !== null && Ea(lr, n), ya.forEach(r), ga.forEach(r), l = 0; l < au.length; l++)
      s = au[l], s.blockedOn === n && (s.blockedOn = null);
    for (; 0 < au.length && (l = au[0], l.blockedOn === null); )
      qv(l), l.blockedOn === null && au.shift();
  }
  u(wd, "Vc");
  var yf = {}, _d = /* @__PURE__ */ new Map(), gf = /* @__PURE__ */ new Map(), Q = [
    "abort",
    "abort",
    eu,
    "animationEnd",
    A,
    "animationIteration",
    F,
    "animationStart",
    "canplay",
    "canPlay",
    "canplaythrough",
    "canPlayThrough",
    "durationchange",
    "durationChange",
    "emptied",
    "emptied",
    "encrypted",
    "encrypted",
    "ended",
    "ended",
    "error",
    "error",
    "gotpointercapture",
    "gotPointerCapture",
    "load",
    "load",
    "loadeddata",
    "loadedData",
    "loadedmetadata",
    "loadedMetadata",
    "loadstart",
    "loadStart",
    "lostpointercapture",
    "lostPointerCapture",
    "playing",
    "playing",
    "progress",
    "progress",
    "seeking",
    "seeking",
    "stalled",
    "stalled",
    "suspend",
    "suspend",
    "timeupdate",
    "timeUpdate",
    ce,
    "transitionEnd",
    "waiting",
    "waiting"
  ];
  function ko(n, r) {
    for (var l = 0; l < n.length; l += 2) {
      var s = n[l], c = n[l + 1], v = "on" + (c[0].toUpperCase() + c.slice(1));
      v = { phasedRegistrationNames: { bubbled: v, captured: v + "Capture" }, dependencies: [s], eventPriority: r }, gf.set(s, r), _d.set(s, v), yf[c] = v;
    }
  }
  u(ko, "ad"), ko("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), ko("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), ko(Q, 2);
  for (var kd = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), qt = 0; qt < kd.length; qt++)
    gf.set(kd[qt], 0);
  var Kr = fe.unstable_UserBlockingPriority, lu = fe.unstable_runWithPriority, xi = !0;
  function be(n, r) {
    ur(r, n, !1);
  }
  u(be, "F");
  function ur(n, r, l) {
    var s = gf.get(r);
    switch (s === void 0 ? 2 : s) {
      case 0:
        s = pl.bind(null, r, 1, n);
        break;
      case 1:
        s = Or.bind(null, r, 1, n);
        break;
      default:
        s = ln.bind(null, r, 1, n);
    }
    l ? n.addEventListener(r, s, !0) : n.addEventListener(r, s, !1);
  }
  u(ur, "vc");
  function pl(n, r, l, s) {
    ge || Ce();
    var c = ln, v = ge;
    ge = !0;
    try {
      se(c, n, r, l, s);
    } finally {
      (ge = v) || pn();
    }
  }
  u(pl, "gd");
  function Or(n, r, l, s) {
    lu(Kr, ln.bind(null, n, r, l, s));
  }
  u(Or, "hd");
  function ln(n, r, l, s) {
    if (xi)
      if (0 < Gt.length && -1 < Ta.indexOf(n))
        n = cl(null, n, r, l, s), Gt.push(n);
      else {
        var c = Nr(n, r, l, s);
        if (c === null)
          bi(n, s);
        else if (-1 < Ta.indexOf(n))
          n = cl(c, n, r, l, s), Gt.push(n);
        else if (!xd(c, n, r, l, s)) {
          bi(n, s), n = bd(n, s, null, r);
          try {
            wn(vf, n);
          } finally {
            pf(n);
          }
        }
      }
  }
  u(ln, "id");
  function Nr(n, r, l, s) {
    if (l = df(s), l = gl(l), l !== null) {
      var c = bt(l);
      if (c === null)
        l = null;
      else {
        var v = c.tag;
        if (v === 13) {
          if (l = Qn(c), l !== null)
            return l;
          l = null;
        } else if (v === 3) {
          if (c.stateNode.hydrate)
            return c.tag === 3 ? c.stateNode.containerInfo : null;
          l = null;
        } else
          c !== l && (l = null);
      }
    }
    n = bd(n, s, l, r);
    try {
      wn(vf, n);
    } finally {
      pf(n);
    }
    return null;
  }
  u(Nr, "Rc");
  var vl = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Do = ["Webkit", "ms", "Moz", "O"];
  Object.keys(vl).forEach(function(n) {
    Do.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), vl[r] = vl[n];
    });
  });
  function Dd(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || vl.hasOwnProperty(n) && vl[n] ? ("" + r).trim() : r + "px";
  }
  u(Dd, "ld");
  function Od(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var s = l.indexOf("--") === 0, c = Dd(l, r[l], s);
        l === "float" && (l = "cssFloat"), s ? n.setProperty(l, c) : n[l] = c;
      }
  }
  u(Od, "md");
  var Nd = ie({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Oo(n, r) {
    if (r) {
      if (Nd[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(D(137, n, ""));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(D(60));
        if (!(typeof r.dangerouslySetInnerHTML == "object" && "__html" in r.dangerouslySetInnerHTML))
          throw Error(D(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(D(62, ""));
    }
  }
  u(Oo, "od");
  function Tf(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  u(Tf, "pd");
  var Md = bo.html;
  function Zr(n, r) {
    n = n.nodeType === 9 || n.nodeType === 11 ? n : n.ownerDocument;
    var l = mt(n);
    r = et[r];
    for (var s = 0; s < r.length; s++)
      iu(r[s], n, l);
  }
  u(Zr, "rd");
  function Sa() {
  }
  u(Sa, "sd");
  function No(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  u(No, "td");
  function Ef(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  u(Ef, "ud");
  function Sf(n, r) {
    var l = Ef(n);
    n = 0;
    for (var s; l; ) {
      if (l.nodeType === 3) {
        if (s = n + l.textContent.length, n <= r && s >= r)
          return { node: l, offset: r - n };
        n = s;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Ef(l);
    }
  }
  u(Sf, "vd");
  function Cf(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Cf(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  u(Cf, "wd");
  function bf() {
    for (var n = window, r = No(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = No(n.document);
    }
    return r;
  }
  u(bf, "xd");
  function Mo(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  u(Mo, "yd");
  var Uo = "$", xf = "/$", Ao = "$?", uu = "$!", Lo = null, Rf = null;
  function Ud(n, r) {
    switch (n) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        return !!r.autoFocus;
    }
    return !1;
  }
  u(Ud, "Fd");
  function ou(n, r) {
    return n === "textarea" || n === "option" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  u(ou, "Gd");
  var zo = typeof setTimeout == "function" ? setTimeout : void 0, Ad = typeof clearTimeout == "function" ? clearTimeout : void 0;
  function hl(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
    }
    return n;
  }
  u(hl, "Jd");
  function wf(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === Uo || l === uu || l === Ao) {
          if (r === 0)
            return n;
          r--;
        } else
          l === xf && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  u(wf, "Kd");
  var _f = Math.random().toString(36).slice(2), Mr = "__reactInternalInstance$" + _f, ml = "__reactEventHandlers$" + _f, yl = "__reactContainere$" + _f;
  function gl(n) {
    var r = n[Mr];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[yl] || l[Mr]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = wf(n); n !== null; ) {
            if (l = n[Mr])
              return l;
            n = wf(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  u(gl, "tc");
  function su(n) {
    return n = n[Mr] || n[yl], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  u(su, "Nc");
  function Yn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(D(33));
  }
  u(Yn, "Pd");
  function fu(n) {
    return n[ml] || null;
  }
  u(fu, "Qd");
  function Ur(n) {
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  u(Ur, "Rd");
  function Ld(n, r) {
    var l = n.stateNode;
    if (!l)
      return null;
    var s = er(l);
    if (!s)
      return null;
    l = s[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (s = !s.disabled) || (n = n.type, s = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !s;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(D(
        231,
        r,
        typeof l
      ));
    return l;
  }
  u(Ld, "Sd");
  function zd(n, r, l) {
    (r = Ld(n, l.dispatchConfig.phasedRegistrationNames[r])) && (l._dispatchListeners = xt(l._dispatchListeners, r), l._dispatchInstances = xt(l._dispatchInstances, n));
  }
  u(zd, "Td");
  function Xv(n) {
    if (n && n.dispatchConfig.phasedRegistrationNames) {
      for (var r = n._targetInst, l = []; r; )
        l.push(r), r = Ur(r);
      for (r = l.length; 0 < r--; )
        zd(l[r], "captured", n);
      for (r = 0; r < l.length; r++)
        zd(l[r], "bubbled", n);
    }
  }
  u(Xv, "Ud");
  function Po(n, r, l) {
    n && l && l.dispatchConfig.registrationName && (r = Ld(n, l.dispatchConfig.registrationName)) && (l._dispatchListeners = xt(l._dispatchListeners, r), l._dispatchInstances = xt(l._dispatchInstances, n));
  }
  u(Po, "Vd");
  function kf(n) {
    n && n.dispatchConfig.registrationName && Po(n._targetInst, null, n);
  }
  u(kf, "Wd");
  function Ca(n) {
    Dt(n, Xv);
  }
  u(Ca, "Xd");
  var Jr = null, Fo = null, Ho = null;
  function cu() {
    if (Ho)
      return Ho;
    var n, r = Fo, l = r.length, s, c = "value" in Jr ? Jr.value : Jr.textContent, v = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var h = l - n;
    for (s = 1; s <= h && r[l - s] === c[v - s]; s++)
      ;
    return Ho = c.slice(n, 1 < s ? 1 - s : void 0);
  }
  u(cu, "ae");
  function du() {
    return !0;
  }
  u(du, "be");
  function Tl() {
    return !1;
  }
  u(Tl, "ce");
  function gn(n, r, l, s) {
    this.dispatchConfig = n, this._targetInst = r, this.nativeEvent = l, n = this.constructor.Interface;
    for (var c in n)
      n.hasOwnProperty(c) && ((r = n[c]) ? this[c] = r(l) : c === "target" ? this.target = s : this[c] = l[c]);
    return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? du : Tl, this.isPropagationStopped = Tl, this;
  }
  u(gn, "G"), ie(gn.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = du);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = du);
  }, persist: function() {
    this.isPersistent = du;
  }, isPersistent: Tl, destructor: function() {
    var n = this.constructor.Interface, r;
    for (r in n)
      this[r] = null;
    this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = Tl, this._dispatchInstances = this._dispatchListeners = null;
  } }), gn.Interface = { type: null, target: null, currentTarget: function() {
    return null;
  }, eventPhase: null, bubbles: null, cancelable: null, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: null, isTrusted: null }, gn.extend = function(n) {
    function r() {
    }
    u(r, "b");
    function l() {
      return s.apply(this, arguments);
    }
    u(l, "c");
    var s = this;
    r.prototype = s.prototype;
    var c = new r();
    return ie(c, l.prototype), l.prototype = c, l.prototype.constructor = l, l.Interface = ie({}, s.Interface, n), l.extend = s.extend, Pd(l), l;
  }, Pd(gn);
  function Df(n, r, l, s) {
    if (this.eventPool.length) {
      var c = this.eventPool.pop();
      return this.call(c, n, r, l, s), c;
    }
    return new this(n, r, l, s);
  }
  u(Df, "ee");
  function Of(n) {
    if (!(n instanceof this))
      throw Error(D(279));
    n.destructor(), 10 > this.eventPool.length && this.eventPool.push(n);
  }
  u(Of, "fe");
  function Pd(n) {
    n.eventPool = [], n.getPooled = Df, n.release = Of;
  }
  u(Pd, "de");
  var Vo = gn.extend({ data: null }), Fd = gn.extend({ data: null }), or = [9, 13, 27, 32], sr = Ne && "CompositionEvent" in window, un = null;
  Ne && "documentMode" in document && (un = document.documentMode);
  var Ri = Ne && "TextEvent" in window && !un, Io = Ne && (!sr || un && 8 < un && 11 >= un), pu = String.fromCharCode(32), wi = { beforeInput: { phasedRegistrationNames: { bubbled: "onBeforeInput", captured: "onBeforeInputCapture" }, dependencies: ["compositionend", "keypress", "textInput", "paste"] }, compositionEnd: { phasedRegistrationNames: { bubbled: "onCompositionEnd", captured: "onCompositionEndCapture" }, dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ") }, compositionStart: { phasedRegistrationNames: {
    bubbled: "onCompositionStart",
    captured: "onCompositionStartCapture"
  }, dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ") }, compositionUpdate: { phasedRegistrationNames: { bubbled: "onCompositionUpdate", captured: "onCompositionUpdateCapture" }, dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ") } }, Kv = !1;
  function vu(n, r) {
    switch (n) {
      case "keyup":
        return or.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "blur":
        return !0;
      default:
        return !1;
    }
  }
  u(vu, "qe");
  function ba(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  u(ba, "re");
  var _i = !1;
  function Hd(n, r) {
    switch (n) {
      case "compositionend":
        return ba(r);
      case "keypress":
        return r.which !== 32 ? null : (Kv = !0, pu);
      case "textInput":
        return n = r.data, n === pu && Kv ? null : n;
      default:
        return null;
    }
  }
  u(Hd, "te");
  function jo(n, r) {
    if (_i)
      return n === "compositionend" || !sr && vu(n, r) ? (n = cu(), Ho = Fo = Jr = null, _i = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Io && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  u(jo, "ue");
  var Nf = { eventTypes: wi, extractEvents: function(n, r, l, s) {
    var c;
    if (sr)
      e: {
        switch (n) {
          case "compositionstart":
            var v = wi.compositionStart;
            break e;
          case "compositionend":
            v = wi.compositionEnd;
            break e;
          case "compositionupdate":
            v = wi.compositionUpdate;
            break e;
        }
        v = void 0;
      }
    else
      _i ? vu(n, l) && (v = wi.compositionEnd) : n === "keydown" && l.keyCode === 229 && (v = wi.compositionStart);
    return v ? (Io && l.locale !== "ko" && (_i || v !== wi.compositionStart ? v === wi.compositionEnd && _i && (c = cu()) : (Jr = s, Fo = "value" in Jr ? Jr.value : Jr.textContent, _i = !0)), v = Vo.getPooled(
      v,
      r,
      l,
      s
    ), c ? v.data = c : (c = ba(l), c !== null && (v.data = c)), Ca(v), c = v) : c = null, (n = Ri ? Hd(n, l) : jo(n, l)) ? (r = Fd.getPooled(wi.beforeInput, r, l, s), r.data = n, Ca(r)) : r = null, c === null ? r : r === null ? c : [c, r];
  } }, Vd = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Mf(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Vd[n.type] : r === "textarea";
  }
  u(Mf, "xe");
  var Uf = { change: { phasedRegistrationNames: { bubbled: "onChange", captured: "onChangeCapture" }, dependencies: "blur change click focus input keydown keyup selectionchange".split(" ") } };
  function Wt(n, r, l) {
    return n = gn.getPooled(Uf.change, n, r, l), n.type = "change", Re(l), Ca(n), n;
  }
  u(Wt, "ze");
  var xa = null, Ra = null;
  function Wo(n) {
    fl(n);
  }
  u(Wo, "Ce");
  function ki(n) {
    var r = Yn(n);
    if (ll(r))
      return n;
  }
  u(ki, "De");
  function hu(n, r) {
    if (n === "change")
      return r;
  }
  u(hu, "Ee");
  var El = !1;
  Ne && (El = Cd("input") && (!document.documentMode || 9 < document.documentMode));
  function ei() {
    xa && (xa.detachEvent("onpropertychange", mu), Ra = xa = null);
  }
  u(ei, "Ge");
  function mu(n) {
    if (n.propertyName === "value" && ki(Ra))
      if (n = Wt(Ra, n, df(n)), ge)
        fl(n);
      else {
        ge = !0;
        try {
          At(Wo, n);
        } finally {
          ge = !1, pn();
        }
      }
  }
  u(mu, "He");
  function Af(n, r, l) {
    n === "focus" ? (ei(), xa = r, Ra = l, xa.attachEvent("onpropertychange", mu)) : n === "blur" && ei();
  }
  u(Af, "Ie");
  function yu(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return ki(Ra);
  }
  u(yu, "Je");
  function Lf(n, r) {
    if (n === "click")
      return ki(r);
  }
  u(Lf, "Ke");
  function zf(n, r) {
    if (n === "input" || n === "change")
      return ki(r);
  }
  u(zf, "Le");
  var Pf = { eventTypes: Uf, _isInputEventSupported: El, extractEvents: function(n, r, l, s) {
    var c = r ? Yn(r) : window, v = c.nodeName && c.nodeName.toLowerCase();
    if (v === "select" || v === "input" && c.type === "file")
      var h = hu;
    else if (Mf(c))
      if (El)
        h = zf;
      else {
        h = yu;
        var y = Af;
      }
    else
      (v = c.nodeName) && v.toLowerCase() === "input" && (c.type === "checkbox" || c.type === "radio") && (h = Lf);
    if (h && (h = h(n, r)))
      return Wt(h, l, s);
    y && y(n, c, r), n === "blur" && (n = c._wrapperState) && n.controlled && c.type === "number" && Gr(c, "number", c.value);
  } }, wa = gn.extend({ view: null, detail: null }), Id = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function gu(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Id[n]) ? !!r[n] : !1;
  }
  u(gu, "Pe");
  function _a() {
    return gu;
  }
  u(_a, "Qe");
  var Ff = 0, Tu = 0, Hf = !1, Bo = !1, ka = wa.extend({ screenX: null, screenY: null, clientX: null, clientY: null, pageX: null, pageY: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, getModifierState: _a, button: null, buttons: null, relatedTarget: function(n) {
    return n.relatedTarget || (n.fromElement === n.srcElement ? n.toElement : n.fromElement);
  }, movementX: function(n) {
    if ("movementX" in n)
      return n.movementX;
    var r = Ff;
    return Ff = n.screenX, Hf ? n.type === "mousemove" ? n.screenX - r : 0 : (Hf = !0, 0);
  }, movementY: function(n) {
    if ("movementY" in n)
      return n.movementY;
    var r = Tu;
    return Tu = n.screenY, Bo ? n.type === "mousemove" ? n.screenY - r : 0 : (Bo = !0, 0);
  } }), Qo = ka.extend({ pointerId: null, width: null, height: null, pressure: null, tangentialPressure: null, tiltX: null, tiltY: null, twist: null, pointerType: null, isPrimary: null }), Da = { mouseEnter: { registrationName: "onMouseEnter", dependencies: ["mouseout", "mouseover"] }, mouseLeave: { registrationName: "onMouseLeave", dependencies: ["mouseout", "mouseover"] }, pointerEnter: { registrationName: "onPointerEnter", dependencies: ["pointerout", "pointerover"] }, pointerLeave: {
    registrationName: "onPointerLeave",
    dependencies: ["pointerout", "pointerover"]
  } }, Vf = { eventTypes: Da, extractEvents: function(n, r, l, s, c) {
    var v = n === "mouseover" || n === "pointerover", h = n === "mouseout" || n === "pointerout";
    if (v && (c & 32) === 0 && (l.relatedTarget || l.fromElement) || !h && !v)
      return null;
    if (v = s.window === s ? s : (v = s.ownerDocument) ? v.defaultView || v.parentWindow : window, h) {
      if (h = r, r = (r = l.relatedTarget || l.toElement) ? gl(r) : null, r !== null) {
        var y = bt(r);
        (r !== y || r.tag !== 5 && r.tag !== 6) && (r = null);
      }
    } else
      h = null;
    if (h === r)
      return null;
    if (n === "mouseout" || n === "mouseover")
      var w = ka, R = Da.mouseLeave, Y = Da.mouseEnter, X = "mouse";
    else
      (n === "pointerout" || n === "pointerover") && (w = Qo, R = Da.pointerLeave, Y = Da.pointerEnter, X = "pointer");
    if (n = h == null ? v : Yn(h), v = r == null ? v : Yn(r), R = w.getPooled(R, h, l, s), R.type = X + "leave", R.target = n, R.relatedTarget = v, l = w.getPooled(Y, r, l, s), l.type = X + "enter", l.target = v, l.relatedTarget = n, s = h, X = r, s && X)
      e: {
        for (w = s, Y = X, h = 0, n = w; n; n = Ur(n))
          h++;
        for (n = 0, r = Y; r; r = Ur(r))
          n++;
        for (; 0 < h - n; )
          w = Ur(w), h--;
        for (; 0 < n - h; )
          Y = Ur(Y), n--;
        for (; h--; ) {
          if (w === Y || w === Y.alternate)
            break e;
          w = Ur(w), Y = Ur(Y);
        }
        w = null;
      }
    else
      w = null;
    for (Y = w, w = []; s && s !== Y && (h = s.alternate, !(h !== null && h === Y)); )
      w.push(s), s = Ur(s);
    for (s = []; X && X !== Y && (h = X.alternate, !(h !== null && h === Y)); )
      s.push(X), X = Ur(X);
    for (X = 0; X < w.length; X++)
      Po(w[X], "bubbled", R);
    for (X = s.length; 0 < X--; )
      Po(s[X], "captured", l);
    return (c & 64) === 0 ? [R] : [R, l];
  } };
  function If(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  u(If, "Ze");
  var On = typeof Object.is == "function" ? Object.is : If, $n = Object.prototype.hasOwnProperty;
  function ti(n, r) {
    if (On(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), s = Object.keys(r);
    if (l.length !== s.length)
      return !1;
    for (s = 0; s < l.length; s++)
      if (!$n.call(r, l[s]) || !On(n[l[s]], r[l[s]]))
        return !1;
    return !0;
  }
  u(ti, "bf");
  var Eu = Ne && "documentMode" in document && 11 >= document.documentMode, Ar = { select: { phasedRegistrationNames: { bubbled: "onSelect", captured: "onSelectCapture" }, dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ") } }, Bt = null, Gn = null, on = null, Di = !1;
  function Yo(n, r) {
    var l = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    return Di || Bt == null || Bt !== No(l) ? null : (l = Bt, "selectionStart" in l && Mo(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), on && ti(on, l) ? null : (on = l, n = gn.getPooled(Ar.select, Gn, n, r), n.type = "select", n.target = Bt, Ca(n), n));
  }
  u(Yo, "jf");
  var jf = { eventTypes: Ar, extractEvents: function(n, r, l, s, c, v) {
    if (c = v || (s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument), !(v = !c)) {
      e: {
        c = mt(c), v = et.onSelect;
        for (var h = 0; h < v.length; h++)
          if (!c.has(v[h])) {
            c = !1;
            break e;
          }
        c = !0;
      }
      v = !c;
    }
    if (v)
      return null;
    switch (c = r ? Yn(r) : window, n) {
      case "focus":
        (Mf(c) || c.contentEditable === "true") && (Bt = c, Gn = r, on = null);
        break;
      case "blur":
        on = Gn = Bt = null;
        break;
      case "mousedown":
        Di = !0;
        break;
      case "contextmenu":
      case "mouseup":
      case "dragend":
        return Di = !1, Yo(l, s);
      case "selectionchange":
        if (Eu)
          break;
      case "keydown":
      case "keyup":
        return Yo(l, s);
    }
    return null;
  } }, Wf = gn.extend({ animationName: null, elapsedTime: null, pseudoElement: null }), $o = gn.extend({ clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), ni = wa.extend({ relatedTarget: null });
  function Su(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  u(Su, "of");
  var Oi = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, ri = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Cu = wa.extend({ key: function(n) {
    if (n.key) {
      var r = Oi[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = Su(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? ri[n.keyCode] || "Unidentified" : "";
  }, location: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, repeat: null, locale: null, getModifierState: _a, charCode: function(n) {
    return n.type === "keypress" ? Su(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Su(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), bu = ka.extend({ dataTransfer: null }), Bf = wa.extend({ touches: null, targetTouches: null, changedTouches: null, altKey: null, metaKey: null, ctrlKey: null, shiftKey: null, getModifierState: _a }), Qf = gn.extend({ propertyName: null, elapsedTime: null, pseudoElement: null }), Yf = ka.extend({ deltaX: function(n) {
    return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
  }, deltaY: function(n) {
    return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
  }, deltaZ: null, deltaMode: null }), $f = { eventTypes: yf, extractEvents: function(n, r, l, s) {
    var c = _d.get(n);
    if (!c)
      return null;
    switch (n) {
      case "keypress":
        if (Su(l) === 0)
          return null;
      case "keydown":
      case "keyup":
        n = Cu;
        break;
      case "blur":
      case "focus":
        n = ni;
        break;
      case "click":
        if (l.button === 2)
          return null;
      case "auxclick":
      case "dblclick":
      case "mousedown":
      case "mousemove":
      case "mouseup":
      case "mouseout":
      case "mouseover":
      case "contextmenu":
        n = ka;
        break;
      case "drag":
      case "dragend":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "dragstart":
      case "drop":
        n = bu;
        break;
      case "touchcancel":
      case "touchend":
      case "touchmove":
      case "touchstart":
        n = Bf;
        break;
      case eu:
      case A:
      case F:
        n = Wf;
        break;
      case ce:
        n = Qf;
        break;
      case "scroll":
        n = wa;
        break;
      case "wheel":
        n = Yf;
        break;
      case "copy":
      case "cut":
      case "paste":
        n = $o;
        break;
      case "gotpointercapture":
      case "lostpointercapture":
      case "pointercancel":
      case "pointerdown":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "pointerup":
        n = Qo;
        break;
      default:
        n = gn;
    }
    return r = n.getPooled(c, r, l, s), Ca(r), r;
  } };
  if (en)
    throw Error(D(101));
  en = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), Se();
  var Gf = su;
  er = fu, dn = Gf, tr = Yn, We({ SimpleEventPlugin: $f, EnterLeaveEventPlugin: Vf, ChangeEventPlugin: Pf, SelectEventPlugin: jf, BeforeInputEventPlugin: Nf });
  var Go = [], Nn = -1;
  function ze(n) {
    0 > Nn || (n.current = Go[Nn], Go[Nn] = null, Nn--);
  }
  u(ze, "H");
  function ft(n, r) {
    Nn++, Go[Nn] = n.current, n.current = r;
  }
  u(ft, "I");
  var Lr = {}, zt = { current: Lr }, Ot = { current: !1 }, zr = Lr;
  function Ni(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return Lr;
    var s = n.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === r)
      return s.__reactInternalMemoizedMaskedChildContext;
    var c = {}, v;
    for (v in l)
      c[v] = r[v];
    return s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  u(Ni, "Cf");
  function Xt(n) {
    return n = n.childContextTypes, n != null;
  }
  u(Xt, "L");
  function Mi() {
    ze(Ot), ze(zt);
  }
  u(Mi, "Df");
  function qo(n, r, l) {
    if (zt.current !== Lr)
      throw Error(D(168));
    ft(zt, r), ft(Ot, l);
  }
  u(qo, "Ef");
  function Oa(n, r, l) {
    var s = n.stateNode;
    if (n = r.childContextTypes, typeof s.getChildContext != "function")
      return l;
    s = s.getChildContext();
    for (var c in s)
      if (!(c in n))
        throw Error(D(108, Bn(r) || "Unknown", c));
    return ie({}, l, {}, s);
  }
  u(Oa, "Ff");
  function Sl(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Lr, zr = zt.current, ft(zt, n), ft(Ot, Ot.current), !0;
  }
  u(Sl, "Gf");
  function xu(n, r, l) {
    var s = n.stateNode;
    if (!s)
      throw Error(D(169));
    l ? (n = Oa(n, r, zr), s.__reactInternalMemoizedMergedChildContext = n, ze(Ot), ze(zt), ft(zt, n)) : ze(Ot), ft(Ot, l);
  }
  u(xu, "Hf");
  var qf = fe.unstable_runWithPriority, Cl = fe.unstable_scheduleCallback, Xo = fe.unstable_cancelCallback, Ko = fe.unstable_requestPaint, Zo = fe.unstable_now, Xf = fe.unstable_getCurrentPriorityLevel, Ru = fe.unstable_ImmediatePriority, Jo = fe.unstable_UserBlockingPriority, es = fe.unstable_NormalPriority, Kf = fe.unstable_LowPriority, bl = fe.unstable_IdlePriority, Zf = {}, Zv = fe.unstable_shouldYield, jd = Ko !== void 0 ? Ko : function() {
  }, fr = null, ii = null, Jf = !1, Wd = Zo(), Qe = 1e4 > Wd ? Zo : function() {
    return Zo() - Wd;
  };
  function cr() {
    switch (Xf()) {
      case Ru:
        return 99;
      case Jo:
        return 98;
      case es:
        return 97;
      case Kf:
        return 96;
      case bl:
        return 95;
      default:
        throw Error(D(332));
    }
  }
  u(cr, "ag");
  function Rt(n) {
    switch (n) {
      case 99:
        return Ru;
      case 98:
        return Jo;
      case 97:
        return es;
      case 96:
        return Kf;
      case 95:
        return bl;
      default:
        throw Error(D(332));
    }
  }
  u(Rt, "bg");
  function Pe(n, r) {
    return n = Rt(n), qf(n, r);
  }
  u(Pe, "cg");
  function Bd(n, r, l) {
    return n = Rt(n), Cl(n, r, l);
  }
  u(Bd, "dg");
  function Na(n) {
    return fr === null ? (fr = [n], ii = Cl(Ru, ec)) : fr.push(n), Zf;
  }
  u(Na, "eg");
  function Mn() {
    if (ii !== null) {
      var n = ii;
      ii = null, Xo(n);
    }
    ec();
  }
  u(Mn, "gg");
  function ec() {
    if (!Jf && fr !== null) {
      Jf = !0;
      var n = 0;
      try {
        var r = fr;
        Pe(99, function() {
          for (; n < r.length; n++) {
            var l = r[n];
            do
              l = l(!0);
            while (l !== null);
          }
        }), fr = null;
      } catch (l) {
        throw fr !== null && (fr = fr.slice(n + 1)), Cl(Ru, Mn), l;
      } finally {
        Jf = !1;
      }
    }
  }
  u(ec, "fg");
  function Ke(n, r, l) {
    return l /= 10, 1073741821 - (((1073741821 - n + r / 10) / l | 0) + 1) * l;
  }
  u(Ke, "hg");
  function Tn(n, r) {
    if (n && n.defaultProps) {
      r = ie({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
    }
    return r;
  }
  u(Tn, "ig");
  var Ui = { current: null }, Ai = null, qn = null, ts = null;
  function tc() {
    ts = qn = Ai = null;
  }
  u(tc, "ng");
  function nc(n) {
    var r = Ui.current;
    ze(Ui), n.type._context._currentValue = r;
  }
  u(nc, "og");
  function xl(n, r) {
    for (; n !== null; ) {
      var l = n.alternate;
      if (n.childExpirationTime < r)
        n.childExpirationTime = r, l !== null && l.childExpirationTime < r && (l.childExpirationTime = r);
      else if (l !== null && l.childExpirationTime < r)
        l.childExpirationTime = r;
      else
        break;
      n = n.return;
    }
  }
  u(xl, "pg");
  function En(n, r) {
    Ai = n, ts = qn = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.expirationTime >= r && (pr = !0), n.firstContext = null);
  }
  u(En, "qg");
  function Xn(n, r) {
    if (ts !== n && r !== !1 && r !== 0)
      if ((typeof r != "number" || r === 1073741823) && (ts = n, r = 1073741823), r = { context: n, observedBits: r, next: null }, qn === null) {
        if (Ai === null)
          throw Error(D(308));
        qn = r, Ai.dependencies = { expirationTime: 0, firstContext: r, responders: null };
      } else
        qn = qn.next = r;
    return n._currentValue;
  }
  u(Xn, "sg");
  var Sn = !1;
  function ns(n) {
    n.updateQueue = { baseState: n.memoizedState, baseQueue: null, shared: { pending: null }, effects: null };
  }
  u(ns, "ug");
  function rs(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, baseQueue: n.baseQueue, shared: n.shared, effects: n.effects });
  }
  u(rs, "vg");
  function Li(n, r) {
    return n = { expirationTime: n, suspenseConfig: r, tag: 0, payload: null, callback: null, next: null }, n.next = n;
  }
  u(Li, "wg");
  function zi(n, r) {
    if (n = n.updateQueue, n !== null) {
      n = n.shared;
      var l = n.pending;
      l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
    }
  }
  u(zi, "xg");
  function rc(n, r) {
    var l = n.alternate;
    l !== null && rs(l, n), n = n.updateQueue, l = n.baseQueue, l === null ? (n.baseQueue = r.next = r, r.next = r) : (r.next = l.next, l.next = r);
  }
  u(rc, "yg");
  function Rl(n, r, l, s) {
    var c = n.updateQueue;
    Sn = !1;
    var v = c.baseQueue, h = c.shared.pending;
    if (h !== null) {
      if (v !== null) {
        var y = v.next;
        v.next = h.next, h.next = y;
      }
      v = h, c.shared.pending = null, y = n.alternate, y !== null && (y = y.updateQueue, y !== null && (y.baseQueue = h));
    }
    if (v !== null) {
      y = v.next;
      var w = c.baseState, R = 0, Y = null, X = null, De = null;
      if (y !== null) {
        var He = y;
        do {
          if (h = He.expirationTime, h < s) {
            var Pn = { expirationTime: He.expirationTime, suspenseConfig: He.suspenseConfig, tag: He.tag, payload: He.payload, callback: He.callback, next: null };
            De === null ? (X = De = Pn, Y = w) : De = De.next = Pn, h > R && (R = h);
          } else {
            De !== null && (De = De.next = { expirationTime: 1073741823, suspenseConfig: He.suspenseConfig, tag: He.tag, payload: He.payload, callback: He.callback, next: null }), Rc(h, He.suspenseConfig);
            e: {
              var Yt = n, C = He;
              switch (h = r, Pn = l, C.tag) {
                case 1:
                  if (Yt = C.payload, typeof Yt == "function") {
                    w = Yt.call(Pn, w, h);
                    break e;
                  }
                  w = Yt;
                  break e;
                case 3:
                  Yt.effectTag = Yt.effectTag & -4097 | 64;
                case 0:
                  if (Yt = C.payload, h = typeof Yt == "function" ? Yt.call(Pn, w, h) : Yt, h == null)
                    break e;
                  w = ie({}, w, h);
                  break e;
                case 2:
                  Sn = !0;
              }
            }
            He.callback !== null && (n.effectTag |= 32, h = c.effects, h === null ? c.effects = [He] : h.push(He));
          }
          if (He = He.next, He === null || He === y) {
            if (h = c.shared.pending, h === null)
              break;
            He = v.next = h.next, h.next = y, c.baseQueue = v = h, c.shared.pending = null;
          }
        } while (1);
      }
      De === null ? Y = w : De.next = X, c.baseState = Y, c.baseQueue = De, Vu(R), n.expirationTime = R, n.memoizedState = w;
    }
  }
  u(Rl, "zg");
  function ic(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var s = n[r], c = s.callback;
        if (c !== null) {
          if (s.callback = null, s = c, c = l, typeof s != "function")
            throw Error(D(191, s));
          s.call(c);
        }
      }
  }
  u(ic, "Cg");
  var wu = Lt.ReactCurrentBatchConfig, Ma = new M.Component().refs;
  function wl(n, r, l, s) {
    r = n.memoizedState, l = l(s, r), l = l == null ? r : ie({}, r, l), n.memoizedState = l, n.expirationTime === 0 && (n.updateQueue.baseState = l);
  }
  u(wl, "Fg");
  var Pi = { isMounted: function(n) {
    return (n = n._reactInternalFiber) ? bt(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternalFiber;
    var s = Ht(), c = wu.suspense;
    s = Bi(s, n, c), c = Li(s, c), c.payload = r, l != null && (c.callback = l), zi(n, c), Qi(n, s);
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternalFiber;
    var s = Ht(), c = wu.suspense;
    s = Bi(s, n, c), c = Li(s, c), c.tag = 1, c.payload = r, l != null && (c.callback = l), zi(n, c), Qi(n, s);
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternalFiber;
    var l = Ht(), s = wu.suspense;
    l = Bi(l, n, s), s = Li(l, s), s.tag = 2, r != null && (s.callback = r), zi(n, s), Qi(n, l);
  } };
  function Qd(n, r, l, s, c, v, h) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(s, v, h) : r.prototype && r.prototype.isPureReactComponent ? !ti(l, s) || !ti(c, v) : !0;
  }
  u(Qd, "Kg");
  function Yd(n, r, l) {
    var s = !1, c = Lr, v = r.contextType;
    return typeof v == "object" && v !== null ? v = Xn(v) : (c = Xt(r) ? zr : zt.current, s = r.contextTypes, v = (s = s != null) ? Ni(n, c) : Lr), r = new r(l, v), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Pi, n.stateNode = r, r._reactInternalFiber = n, s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = v), r;
  }
  u(Yd, "Lg");
  function is(n, r, l, s) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, s), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, s), r.state !== n && Pi.enqueueReplaceState(r, r.state, null);
  }
  u(is, "Mg");
  function _u(n, r, l, s) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = Ma, ns(n);
    var v = r.contextType;
    typeof v == "object" && v !== null ? c.context = Xn(v) : (v = Xt(r) ? zr : zt.current, c.context = Ni(n, v)), Rl(n, l, c, s), c.state = n.memoizedState, v = r.getDerivedStateFromProps, typeof v == "function" && (wl(n, r, v, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Pi.enqueueReplaceState(c, c.state, null), Rl(n, l, c, s), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.effectTag |= 4);
  }
  u(_u, "Ng");
  var ku = Array.isArray;
  function Du(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(D(309));
          var s = l.stateNode;
        }
        if (!s)
          throw Error(D(147, n));
        var c = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === c ? r.ref : (r = /* @__PURE__ */ u(function(v) {
          var h = s.refs;
          h === Ma && (h = s.refs = {}), v === null ? delete h[c] : h[c] = v;
        }, "b"), r._stringRef = c, r);
      }
      if (typeof n != "string")
        throw Error(D(284));
      if (!l._owner)
        throw Error(D(290, n));
    }
    return n;
  }
  u(Du, "Pg");
  function Ua(n, r) {
    if (n.type !== "textarea")
      throw Error(D(31, Object.prototype.toString.call(r) === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : r, ""));
  }
  u(Ua, "Qg");
  function $d(n) {
    function r(C, S) {
      if (n) {
        var k = C.lastEffect;
        k !== null ? (k.nextEffect = S, C.lastEffect = S) : C.firstEffect = C.lastEffect = S, S.nextEffect = null, S.effectTag = 8;
      }
    }
    u(r, "b");
    function l(C, S) {
      if (!n)
        return null;
      for (; S !== null; )
        r(C, S), S = S.sibling;
      return null;
    }
    u(l, "c");
    function s(C, S) {
      for (C = /* @__PURE__ */ new Map(); S !== null; )
        S.key !== null ? C.set(S.key, S) : C.set(S.index, S), S = S.sibling;
      return C;
    }
    u(s, "d");
    function c(C, S) {
      return C = mr(C, S), C.index = 0, C.sibling = null, C;
    }
    u(c, "e");
    function v(C, S, k) {
      return C.index = k, n ? (k = C.alternate, k !== null ? (k = k.index, k < S ? (C.effectTag = 2, S) : k) : (C.effectTag = 2, S)) : S;
    }
    u(v, "f");
    function h(C) {
      return n && C.alternate === null && (C.effectTag = 2), C;
    }
    u(h, "g");
    function y(C, S, k, P) {
      return S === null || S.tag !== 6 ? (S = kc(k, C.mode, P), S.return = C, S) : (S = c(S, k), S.return = C, S);
    }
    u(y, "h");
    function w(C, S, k, P) {
      return S !== null && S.elementType === k.type ? (P = c(S, k.props), P.ref = Du(C, S, k), P.return = C, P) : (P = Ns(k.type, k.key, k.props, null, C.mode, P), P.ref = Du(C, S, k), P.return = C, P);
    }
    u(w, "k");
    function R(C, S, k, P) {
      return S === null || S.tag !== 4 || S.stateNode.containerInfo !== k.containerInfo || S.stateNode.implementation !== k.implementation ? (S = Dc(k, C.mode, P), S.return = C, S) : (S = c(S, k.children || []), S.return = C, S);
    }
    u(R, "l");
    function Y(C, S, k, P, j) {
      return S === null || S.tag !== 7 ? (S = ui(k, C.mode, P, j), S.return = C, S) : (S = c(S, k), S.return = C, S);
    }
    u(Y, "m");
    function X(C, S, k) {
      if (typeof S == "string" || typeof S == "number")
        return S = kc("" + S, C.mode, k), S.return = C, S;
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case oa:
            return k = Ns(S.type, S.key, S.props, null, C.mode, k), k.ref = Du(C, null, S), k.return = C, k;
          case yi:
            return S = Dc(S, C.mode, k), S.return = C, S;
        }
        if (ku(S) || Wn(S))
          return S = ui(S, C.mode, k, null), S.return = C, S;
        Ua(C, S);
      }
      return null;
    }
    u(X, "p");
    function De(C, S, k, P) {
      var j = S !== null ? S.key : null;
      if (typeof k == "string" || typeof k == "number")
        return j !== null ? null : y(C, S, "" + k, P);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case oa:
            return k.key === j ? k.type === _r ? Y(C, S, k.props.children, P, j) : w(C, S, k, P) : null;
          case yi:
            return k.key === j ? R(C, S, k, P) : null;
        }
        if (ku(k) || Wn(k))
          return j !== null ? null : Y(C, S, k, P, null);
        Ua(C, k);
      }
      return null;
    }
    u(De, "x");
    function He(C, S, k, P, j) {
      if (typeof P == "string" || typeof P == "number")
        return C = C.get(k) || null, y(S, C, "" + P, j);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case oa:
            return C = C.get(P.key === null ? k : P.key) || null, P.type === _r ? Y(S, C, P.props.children, j, P.key) : w(S, C, P, j);
          case yi:
            return C = C.get(P.key === null ? k : P.key) || null, R(S, C, P, j);
        }
        if (ku(P) || Wn(P))
          return C = C.get(k) || null, Y(S, C, P, j, null);
        Ua(S, P);
      }
      return null;
    }
    u(He, "z");
    function Pn(C, S, k, P) {
      for (var j = null, Z = null, ue = S, Ae = S = 0, pt = null; ue !== null && Ae < k.length; Ae++) {
        ue.index > Ae ? (pt = ue, ue = null) : pt = ue.sibling;
        var Ee = De(C, ue, k[Ae], P);
        if (Ee === null) {
          ue === null && (ue = pt);
          break;
        }
        n && ue && Ee.alternate === null && r(C, ue), S = v(Ee, S, Ae), Z === null ? j = Ee : Z.sibling = Ee, Z = Ee, ue = pt;
      }
      if (Ae === k.length)
        return l(C, ue), j;
      if (ue === null) {
        for (; Ae < k.length; Ae++)
          ue = X(C, k[Ae], P), ue !== null && (S = v(ue, S, Ae), Z === null ? j = ue : Z.sibling = ue, Z = ue);
        return j;
      }
      for (ue = s(C, ue); Ae < k.length; Ae++)
        pt = He(ue, C, Ae, k[Ae], P), pt !== null && (n && pt.alternate !== null && ue.delete(pt.key === null ? Ae : pt.key), S = v(pt, S, Ae), Z === null ? j = pt : Z.sibling = pt, Z = pt);
      return n && ue.forEach(function(qi) {
        return r(C, qi);
      }), j;
    }
    u(Pn, "ca");
    function Yt(C, S, k, P) {
      var j = Wn(k);
      if (typeof j != "function")
        throw Error(D(150));
      if (k = j.call(k), k == null)
        throw Error(D(151));
      for (var Z = j = null, ue = S, Ae = S = 0, pt = null, Ee = k.next(); ue !== null && !Ee.done; Ae++, Ee = k.next()) {
        ue.index > Ae ? (pt = ue, ue = null) : pt = ue.sibling;
        var qi = De(C, ue, Ee.value, P);
        if (qi === null) {
          ue === null && (ue = pt);
          break;
        }
        n && ue && qi.alternate === null && r(C, ue), S = v(qi, S, Ae), Z === null ? j = qi : Z.sibling = qi, Z = qi, ue = pt;
      }
      if (Ee.done)
        return l(C, ue), j;
      if (ue === null) {
        for (; !Ee.done; Ae++, Ee = k.next())
          Ee = X(C, Ee.value, P), Ee !== null && (S = v(Ee, S, Ae), Z === null ? j = Ee : Z.sibling = Ee, Z = Ee);
        return j;
      }
      for (ue = s(C, ue); !Ee.done; Ae++, Ee = k.next())
        Ee = He(ue, C, Ae, Ee.value, P), Ee !== null && (n && Ee.alternate !== null && ue.delete(Ee.key === null ? Ae : Ee.key), S = v(Ee, S, Ae), Z === null ? j = Ee : Z.sibling = Ee, Z = Ee);
      return n && ue.forEach(function(hh) {
        return r(C, hh);
      }), j;
    }
    return u(Yt, "D"), function(C, S, k, P) {
      var j = typeof k == "object" && k !== null && k.type === _r && k.key === null;
      j && (k = k.props.children);
      var Z = typeof k == "object" && k !== null;
      if (Z)
        switch (k.$$typeof) {
          case oa:
            e: {
              for (Z = k.key, j = S; j !== null; ) {
                if (j.key === Z) {
                  switch (j.tag) {
                    case 7:
                      if (k.type === _r) {
                        l(C, j.sibling), S = c(j, k.props.children), S.return = C, C = S;
                        break e;
                      }
                      break;
                    default:
                      if (j.elementType === k.type) {
                        l(
                          C,
                          j.sibling
                        ), S = c(j, k.props), S.ref = Du(C, j, k), S.return = C, C = S;
                        break e;
                      }
                  }
                  l(C, j);
                  break;
                } else
                  r(C, j);
                j = j.sibling;
              }
              k.type === _r ? (S = ui(k.props.children, C.mode, P, k.key), S.return = C, C = S) : (P = Ns(k.type, k.key, k.props, null, C.mode, P), P.ref = Du(C, S, k), P.return = C, C = P);
            }
            return h(C);
          case yi:
            e: {
              for (j = k.key; S !== null; ) {
                if (S.key === j)
                  if (S.tag === 4 && S.stateNode.containerInfo === k.containerInfo && S.stateNode.implementation === k.implementation) {
                    l(C, S.sibling), S = c(S, k.children || []), S.return = C, C = S;
                    break e;
                  } else {
                    l(C, S);
                    break;
                  }
                else
                  r(C, S);
                S = S.sibling;
              }
              S = Dc(k, C.mode, P), S.return = C, C = S;
            }
            return h(C);
        }
      if (typeof k == "string" || typeof k == "number")
        return k = "" + k, S !== null && S.tag === 6 ? (l(C, S.sibling), S = c(S, k), S.return = C, C = S) : (l(C, S), S = kc(k, C.mode, P), S.return = C, C = S), h(C);
      if (ku(k))
        return Pn(C, S, k, P);
      if (Wn(k))
        return Yt(C, S, k, P);
      if (Z && Ua(C, k), typeof k > "u" && !j)
        switch (C.tag) {
          case 1:
          case 0:
            throw C = C.type, Error(D(152, C.displayName || C.name || "Component"));
        }
      return l(C, S);
    };
  }
  u($d, "Rg");
  var _l = $d(!0), ac = $d(!1), Ou = {}, Pr = { current: Ou }, Nu = { current: Ou }, kl = { current: Ou };
  function Aa(n) {
    if (n === Ou)
      throw Error(D(174));
    return n;
  }
  u(Aa, "ch");
  function as(n, r) {
    switch (ft(kl, r), ft(Nu, n), ft(Pr, Ou), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : pa(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = pa(r, n);
    }
    ze(Pr), ft(Pr, r);
  }
  u(as, "dh");
  function Dl() {
    ze(Pr), ze(Nu), ze(kl);
  }
  u(Dl, "eh");
  function lc(n) {
    Aa(kl.current);
    var r = Aa(Pr.current), l = pa(r, n.type);
    r !== l && (ft(Nu, n), ft(Pr, l));
  }
  u(lc, "fh");
  function uc(n) {
    Nu.current === n && (ze(Pr), ze(Nu));
  }
  u(uc, "gh");
  var lt = { current: 0 };
  function ls(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === Ao || l.data === uu))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.effectTag & 64) !== 0)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  u(ls, "hh");
  function us(n, r) {
    return { responder: n, props: r };
  }
  u(us, "ih");
  var os = Lt.ReactCurrentDispatcher, Cn = Lt.ReactCurrentBatchConfig, Kt = 0, tt = null, ct = null, dt = null, Fi = !1;
  function Qt() {
    throw Error(D(321));
  }
  u(Qt, "Q");
  function La(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!On(n[l], r[l]))
        return !1;
    return !0;
  }
  u(La, "nh");
  function oc(n, r, l, s, c, v) {
    if (Kt = v, tt = r, r.memoizedState = null, r.updateQueue = null, r.expirationTime = 0, os.current = n === null || n.memoizedState === null ? Jv : eh, n = l(s, c), r.expirationTime === Kt) {
      v = 0;
      do {
        if (r.expirationTime = 0, !(25 > v))
          throw Error(D(301));
        v += 1, dt = ct = null, r.updateQueue = null, os.current = th, n = l(s, c);
      } while (r.expirationTime === Kt);
    }
    if (os.current = ms, r = ct !== null && ct.next !== null, Kt = 0, dt = ct = tt = null, Fi = !1, r)
      throw Error(D(300));
    return n;
  }
  u(oc, "oh");
  function za() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return dt === null ? tt.memoizedState = dt = n : dt = dt.next = n, dt;
  }
  u(za, "th");
  function Ol() {
    if (ct === null) {
      var n = tt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = ct.next;
    var r = dt === null ? tt.memoizedState : dt.next;
    if (r !== null)
      dt = r, ct = n;
    else {
      if (n === null)
        throw Error(D(310));
      ct = n, n = { memoizedState: ct.memoizedState, baseState: ct.baseState, baseQueue: ct.baseQueue, queue: ct.queue, next: null }, dt === null ? tt.memoizedState = dt = n : dt = dt.next = n;
    }
    return dt;
  }
  u(Ol, "uh");
  function Hi(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  u(Hi, "vh");
  function Mu(n) {
    var r = Ol(), l = r.queue;
    if (l === null)
      throw Error(D(311));
    l.lastRenderedReducer = n;
    var s = ct, c = s.baseQueue, v = l.pending;
    if (v !== null) {
      if (c !== null) {
        var h = c.next;
        c.next = v.next, v.next = h;
      }
      s.baseQueue = c = v, l.pending = null;
    }
    if (c !== null) {
      c = c.next, s = s.baseState;
      var y = h = v = null, w = c;
      do {
        var R = w.expirationTime;
        if (R < Kt) {
          var Y = { expirationTime: w.expirationTime, suspenseConfig: w.suspenseConfig, action: w.action, eagerReducer: w.eagerReducer, eagerState: w.eagerState, next: null };
          y === null ? (h = y = Y, v = s) : y = y.next = Y, R > tt.expirationTime && (tt.expirationTime = R, Vu(R));
        } else
          y !== null && (y = y.next = { expirationTime: 1073741823, suspenseConfig: w.suspenseConfig, action: w.action, eagerReducer: w.eagerReducer, eagerState: w.eagerState, next: null }), Rc(R, w.suspenseConfig), s = w.eagerReducer === n ? w.eagerState : n(s, w.action);
        w = w.next;
      } while (w !== null && w !== c);
      y === null ? v = s : y.next = h, On(s, r.memoizedState) || (pr = !0), r.memoizedState = s, r.baseState = v, r.baseQueue = y, l.lastRenderedState = s;
    }
    return [r.memoizedState, l.dispatch];
  }
  u(Mu, "wh");
  function ss(n) {
    var r = Ol(), l = r.queue;
    if (l === null)
      throw Error(D(311));
    l.lastRenderedReducer = n;
    var s = l.dispatch, c = l.pending, v = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var h = c = c.next;
      do
        v = n(v, h.action), h = h.next;
      while (h !== c);
      On(v, r.memoizedState) || (pr = !0), r.memoizedState = v, r.baseQueue === null && (r.baseState = v), l.lastRenderedState = v;
    }
    return [v, s];
  }
  u(ss, "xh");
  function fs(n) {
    var r = za();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = r.queue = { pending: null, dispatch: null, lastRenderedReducer: Hi, lastRenderedState: n }, n = n.dispatch = hs.bind(null, tt, n), [r.memoizedState, n];
  }
  u(fs, "yh");
  function cs(n, r, l, s) {
    return n = { tag: n, create: r, destroy: l, deps: s, next: null }, r = tt.updateQueue, r === null ? (r = { lastEffect: null }, tt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (s = l.next, l.next = n, n.next = s, r.lastEffect = n)), n;
  }
  u(cs, "Ah");
  function sc() {
    return Ol().memoizedState;
  }
  u(sc, "Bh");
  function Pa(n, r, l, s) {
    var c = za();
    tt.effectTag |= n, c.memoizedState = cs(1 | r, l, void 0, s === void 0 ? null : s);
  }
  u(Pa, "Ch");
  function fc(n, r, l, s) {
    var c = Ol();
    s = s === void 0 ? null : s;
    var v = void 0;
    if (ct !== null) {
      var h = ct.memoizedState;
      if (v = h.destroy, s !== null && La(s, h.deps)) {
        cs(r, l, v, s);
        return;
      }
    }
    tt.effectTag |= n, c.memoizedState = cs(1 | r, l, v, s);
  }
  u(fc, "Dh");
  function Gd(n, r) {
    return Pa(516, 4, n, r);
  }
  u(Gd, "Eh");
  function Fa(n, r) {
    return fc(516, 4, n, r);
  }
  u(Fa, "Fh");
  function cc(n, r) {
    return fc(4, 2, n, r);
  }
  u(cc, "Gh");
  function qd(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  u(qd, "Hh");
  function Nl(n, r, l) {
    return l = l != null ? l.concat([n]) : null, fc(4, 2, qd.bind(null, r, n), l);
  }
  u(Nl, "Ih");
  function ds() {
  }
  u(ds, "Jh");
  function Xd(n, r) {
    return za().memoizedState = [n, r === void 0 ? null : r], n;
  }
  u(Xd, "Kh");
  function ps(n, r) {
    var l = Ol();
    r = r === void 0 ? null : r;
    var s = l.memoizedState;
    return s !== null && r !== null && La(r, s[1]) ? s[0] : (l.memoizedState = [n, r], n);
  }
  u(ps, "Lh");
  function dc(n, r) {
    var l = Ol();
    r = r === void 0 ? null : r;
    var s = l.memoizedState;
    return s !== null && r !== null && La(r, s[1]) ? s[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  u(dc, "Mh");
  function vs(n, r, l) {
    var s = cr();
    Pe(98 > s ? 98 : s, function() {
      n(!0);
    }), Pe(97 < s ? 97 : s, function() {
      var c = Cn.suspense;
      Cn.suspense = r === void 0 ? null : r;
      try {
        n(!1), l();
      } finally {
        Cn.suspense = c;
      }
    });
  }
  u(vs, "Nh");
  function hs(n, r, l) {
    var s = Ht(), c = wu.suspense;
    s = Bi(s, n, c), c = { expirationTime: s, suspenseConfig: c, action: l, eagerReducer: null, eagerState: null, next: null };
    var v = r.pending;
    if (v === null ? c.next = c : (c.next = v.next, v.next = c), r.pending = c, v = n.alternate, n === tt || v !== null && v === tt)
      Fi = !0, c.expirationTime = Kt, tt.expirationTime = Kt;
    else {
      if (n.expirationTime === 0 && (v === null || v.expirationTime === 0) && (v = r.lastRenderedReducer, v !== null))
        try {
          var h = r.lastRenderedState, y = v(h, l);
          if (c.eagerReducer = v, c.eagerState = y, On(y, h))
            return;
        } catch {
        } finally {
        }
      Qi(
        n,
        s
      );
    }
  }
  u(hs, "zh");
  var ms = { readContext: Xn, useCallback: Qt, useContext: Qt, useEffect: Qt, useImperativeHandle: Qt, useLayoutEffect: Qt, useMemo: Qt, useReducer: Qt, useRef: Qt, useState: Qt, useDebugValue: Qt, useResponder: Qt, useDeferredValue: Qt, useTransition: Qt }, Jv = { readContext: Xn, useCallback: Xd, useContext: Xn, useEffect: Gd, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Pa(4, 2, qd.bind(null, r, n), l);
  }, useLayoutEffect: function(n, r) {
    return Pa(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = za();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [
      n,
      r
    ], n;
  }, useReducer: function(n, r, l) {
    var s = za();
    return r = l !== void 0 ? l(r) : r, s.memoizedState = s.baseState = r, n = s.queue = { pending: null, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, n = n.dispatch = hs.bind(null, tt, n), [s.memoizedState, n];
  }, useRef: function(n) {
    var r = za();
    return n = { current: n }, r.memoizedState = n;
  }, useState: fs, useDebugValue: ds, useResponder: us, useDeferredValue: function(n, r) {
    var l = fs(n), s = l[0], c = l[1];
    return Gd(function() {
      var v = Cn.suspense;
      Cn.suspense = r === void 0 ? null : r;
      try {
        c(n);
      } finally {
        Cn.suspense = v;
      }
    }, [n, r]), s;
  }, useTransition: function(n) {
    var r = fs(!1), l = r[0];
    return r = r[1], [Xd(vs.bind(null, r, n), [r, n]), l];
  } }, eh = { readContext: Xn, useCallback: ps, useContext: Xn, useEffect: Fa, useImperativeHandle: Nl, useLayoutEffect: cc, useMemo: dc, useReducer: Mu, useRef: sc, useState: function() {
    return Mu(Hi);
  }, useDebugValue: ds, useResponder: us, useDeferredValue: function(n, r) {
    var l = Mu(Hi), s = l[0], c = l[1];
    return Fa(function() {
      var v = Cn.suspense;
      Cn.suspense = r === void 0 ? null : r;
      try {
        c(n);
      } finally {
        Cn.suspense = v;
      }
    }, [n, r]), s;
  }, useTransition: function(n) {
    var r = Mu(Hi), l = r[0];
    return r = r[1], [ps(vs.bind(null, r, n), [r, n]), l];
  } }, th = { readContext: Xn, useCallback: ps, useContext: Xn, useEffect: Fa, useImperativeHandle: Nl, useLayoutEffect: cc, useMemo: dc, useReducer: ss, useRef: sc, useState: function() {
    return ss(Hi);
  }, useDebugValue: ds, useResponder: us, useDeferredValue: function(n, r) {
    var l = ss(Hi), s = l[0], c = l[1];
    return Fa(function() {
      var v = Cn.suspense;
      Cn.suspense = r === void 0 ? null : r;
      try {
        c(n);
      } finally {
        Cn.suspense = v;
      }
    }, [n, r]), s;
  }, useTransition: function(n) {
    var r = ss(Hi), l = r[0];
    return r = r[1], [ps(vs.bind(
      null,
      r,
      n
    ), [r, n]), l];
  } }, dr = null, Vi = null, Ha = !1;
  function Kd(n, r) {
    var l = Vr(5, null, null, 0);
    l.elementType = "DELETED", l.type = "DELETED", l.stateNode = r, l.return = n, l.effectTag = 8, n.lastEffect !== null ? (n.lastEffect.nextEffect = l, n.lastEffect = l) : n.firstEffect = n.lastEffect = l;
  }
  u(Kd, "Rh");
  function Zd(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, !0) : !1;
      case 13:
        return !1;
      default:
        return !1;
    }
  }
  u(Zd, "Th");
  function Uu(n) {
    if (Ha) {
      var r = Vi;
      if (r) {
        var l = r;
        if (!Zd(n, r)) {
          if (r = hl(l.nextSibling), !r || !Zd(n, r)) {
            n.effectTag = n.effectTag & -1025 | 2, Ha = !1, dr = n;
            return;
          }
          Kd(dr, l);
        }
        dr = n, Vi = hl(r.firstChild);
      } else
        n.effectTag = n.effectTag & -1025 | 2, Ha = !1, dr = n;
    }
  }
  u(Uu, "Uh");
  function pc(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    dr = n;
  }
  u(pc, "Vh");
  function ys(n) {
    if (n !== dr)
      return !1;
    if (!Ha)
      return pc(n), Ha = !0, !1;
    var r = n.type;
    if (n.tag !== 5 || r !== "head" && r !== "body" && !ou(r, n.memoizedProps))
      for (r = Vi; r; )
        Kd(n, r), r = hl(r.nextSibling);
    if (pc(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(D(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === xf) {
              if (r === 0) {
                Vi = hl(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== Uo && l !== uu && l !== Ao || r++;
          }
          n = n.nextSibling;
        }
        Vi = null;
      }
    } else
      Vi = dr ? hl(n.stateNode.nextSibling) : null;
    return !0;
  }
  u(ys, "Wh");
  function it() {
    Vi = dr = null, Ha = !1;
  }
  u(it, "Xh");
  var gs = Lt.ReactCurrentOwner, pr = !1;
  function Un(n, r, l, s) {
    r.child = n === null ? ac(r, null, l, s) : _l(r, n.child, l, s);
  }
  u(Un, "R");
  function Jd(n, r, l, s, c) {
    l = l.render;
    var v = r.ref;
    return En(r, c), s = oc(n, r, l, s, v, c), n !== null && !pr ? (r.updateQueue = n.updateQueue, r.effectTag &= -517, n.expirationTime <= c && (n.expirationTime = 0), ai(n, r, c)) : (r.effectTag |= 1, Un(n, r, s, c), r.child);
  }
  u(Jd, "Zh");
  function Au(n, r, l, s, c, v) {
    if (n === null) {
      var h = l.type;
      return typeof h == "function" && !_c(h) && h.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = h, Ts(n, r, h, s, c, v)) : (n = Ns(l.type, null, s, null, r.mode, v), n.ref = r.ref, n.return = r, r.child = n);
    }
    return h = n.child, c < v && (c = h.memoizedProps, l = l.compare, l = l !== null ? l : ti, l(c, s) && n.ref === r.ref) ? ai(n, r, v) : (r.effectTag |= 1, n = mr(h, s), n.ref = r.ref, n.return = r, r.child = n);
  }
  u(Au, "ai");
  function Ts(n, r, l, s, c, v) {
    return n !== null && ti(n.memoizedProps, s) && n.ref === r.ref && (pr = !1, c < v) ? (r.expirationTime = n.expirationTime, ai(n, r, v)) : Va(n, r, l, s, v);
  }
  u(Ts, "ci");
  function ep(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.effectTag |= 128);
  }
  u(ep, "ei");
  function Va(n, r, l, s, c) {
    var v = Xt(l) ? zr : zt.current;
    return v = Ni(r, v), En(r, c), l = oc(n, r, l, s, v, c), n !== null && !pr ? (r.updateQueue = n.updateQueue, r.effectTag &= -517, n.expirationTime <= c && (n.expirationTime = 0), ai(n, r, c)) : (r.effectTag |= 1, Un(n, r, l, c), r.child);
  }
  u(Va, "di");
  function tp(n, r, l, s, c) {
    if (Xt(l)) {
      var v = !0;
      Sl(r);
    } else
      v = !1;
    if (En(r, c), r.stateNode === null)
      n !== null && (n.alternate = null, r.alternate = null, r.effectTag |= 2), Yd(r, l, s), _u(r, l, s, c), s = !0;
    else if (n === null) {
      var h = r.stateNode, y = r.memoizedProps;
      h.props = y;
      var w = h.context, R = l.contextType;
      typeof R == "object" && R !== null ? R = Xn(R) : (R = Xt(l) ? zr : zt.current, R = Ni(r, R));
      var Y = l.getDerivedStateFromProps, X = typeof Y == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      X || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (y !== s || w !== R) && is(r, h, s, R), Sn = !1;
      var De = r.memoizedState;
      h.state = De, Rl(r, s, h, c), w = r.memoizedState, y !== s || De !== w || Ot.current || Sn ? (typeof Y == "function" && (wl(r, l, Y, s), w = r.memoizedState), (y = Sn || Qd(r, l, y, s, De, w, R)) ? (X || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (r.effectTag |= 4)) : (typeof h.componentDidMount == "function" && (r.effectTag |= 4), r.memoizedProps = s, r.memoizedState = w), h.props = s, h.state = w, h.context = R, s = y) : (typeof h.componentDidMount == "function" && (r.effectTag |= 4), s = !1);
    } else
      h = r.stateNode, rs(n, r), y = r.memoizedProps, h.props = r.type === r.elementType ? y : Tn(r.type, y), w = h.context, R = l.contextType, typeof R == "object" && R !== null ? R = Xn(R) : (R = Xt(l) ? zr : zt.current, R = Ni(r, R)), Y = l.getDerivedStateFromProps, (X = typeof Y == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (y !== s || w !== R) && is(r, h, s, R), Sn = !1, w = r.memoizedState, h.state = w, Rl(r, s, h, c), De = r.memoizedState, y !== s || w !== De || Ot.current || Sn ? (typeof Y == "function" && (wl(r, l, Y, s), De = r.memoizedState), (Y = Sn || Qd(r, l, y, s, w, De, R)) ? (X || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(
        s,
        De,
        R
      ), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(s, De, R)), typeof h.componentDidUpdate == "function" && (r.effectTag |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (r.effectTag |= 256)) : (typeof h.componentDidUpdate != "function" || y === n.memoizedProps && w === n.memoizedState || (r.effectTag |= 4), typeof h.getSnapshotBeforeUpdate != "function" || y === n.memoizedProps && w === n.memoizedState || (r.effectTag |= 256), r.memoizedProps = s, r.memoizedState = De), h.props = s, h.state = De, h.context = R, s = Y) : (typeof h.componentDidUpdate != "function" || y === n.memoizedProps && w === n.memoizedState || (r.effectTag |= 4), typeof h.getSnapshotBeforeUpdate != "function" || y === n.memoizedProps && w === n.memoizedState || (r.effectTag |= 256), s = !1);
    return vc(n, r, l, s, v, c);
  }
  u(tp, "fi");
  function vc(n, r, l, s, c, v) {
    ep(n, r);
    var h = (r.effectTag & 64) !== 0;
    if (!s && !h)
      return c && xu(r, l, !1), ai(n, r, v);
    s = r.stateNode, gs.current = r;
    var y = h && typeof l.getDerivedStateFromError != "function" ? null : s.render();
    return r.effectTag |= 1, n !== null && h ? (r.child = _l(r, n.child, null, v), r.child = _l(r, null, y, v)) : Un(n, r, y, v), r.memoizedState = s.state, c && xu(r, l, !0), r.child;
  }
  u(vc, "gi");
  function Es(n) {
    var r = n.stateNode;
    r.pendingContext ? qo(n, r.pendingContext, r.pendingContext !== r.context) : r.context && qo(n, r.context, !1), as(n, r.containerInfo);
  }
  u(Es, "hi");
  var hc = { dehydrated: null, retryTime: 0 };
  function np(n, r, l) {
    var s = r.mode, c = r.pendingProps, v = lt.current, h = !1, y;
    if ((y = (r.effectTag & 64) !== 0) || (y = (v & 2) !== 0 && (n === null || n.memoizedState !== null)), y ? (h = !0, r.effectTag &= -65) : n !== null && n.memoizedState === null || c.fallback === void 0 || c.unstable_avoidThisFallback === !0 || (v |= 1), ft(lt, v & 1), n === null) {
      if (c.fallback !== void 0 && Uu(r), h) {
        if (h = c.fallback, c = ui(null, s, 0, null), c.return = r, (r.mode & 2) === 0)
          for (n = r.memoizedState !== null ? r.child.child : r.child, c.child = n; n !== null; )
            n.return = c, n = n.sibling;
        return l = ui(h, s, l, null), l.return = r, c.sibling = l, r.memoizedState = hc, r.child = c, l;
      }
      return s = c.children, r.memoizedState = null, r.child = ac(r, null, s, l);
    }
    if (n.memoizedState !== null) {
      if (n = n.child, s = n.sibling, h) {
        if (c = c.fallback, l = mr(n, n.pendingProps), l.return = r, (r.mode & 2) === 0 && (h = r.memoizedState !== null ? r.child.child : r.child, h !== n.child))
          for (l.child = h; h !== null; )
            h.return = l, h = h.sibling;
        return s = mr(s, c), s.return = r, l.sibling = s, l.childExpirationTime = 0, r.memoizedState = hc, r.child = l, s;
      }
      return l = _l(r, n.child, c.children, l), r.memoizedState = null, r.child = l;
    }
    if (n = n.child, h) {
      if (h = c.fallback, c = ui(null, s, 0, null), c.return = r, c.child = n, n !== null && (n.return = c), (r.mode & 2) === 0)
        for (n = r.memoizedState !== null ? r.child.child : r.child, c.child = n; n !== null; )
          n.return = c, n = n.sibling;
      return l = ui(h, s, l, null), l.return = r, c.sibling = l, l.effectTag |= 2, c.childExpirationTime = 0, r.memoizedState = hc, r.child = c, l;
    }
    return r.memoizedState = null, r.child = _l(r, n, c.children, l);
  }
  u(np, "ji");
  function rp(n, r) {
    n.expirationTime < r && (n.expirationTime = r);
    var l = n.alternate;
    l !== null && l.expirationTime < r && (l.expirationTime = r), xl(n.return, r);
  }
  u(rp, "ki");
  function Ss(n, r, l, s, c, v) {
    var h = n.memoizedState;
    h === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: s, tail: l, tailExpiration: 0, tailMode: c, lastEffect: v } : (h.isBackwards = r, h.rendering = null, h.renderingStartTime = 0, h.last = s, h.tail = l, h.tailExpiration = 0, h.tailMode = c, h.lastEffect = v);
  }
  u(Ss, "li");
  function ip(n, r, l) {
    var s = r.pendingProps, c = s.revealOrder, v = s.tail;
    if (Un(n, r, s.children, l), s = lt.current, (s & 2) !== 0)
      s = s & 1 | 2, r.effectTag |= 64;
    else {
      if (n !== null && (n.effectTag & 64) !== 0)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && rp(n, l);
            else if (n.tag === 19)
              rp(n, l);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      s &= 1;
    }
    if (ft(lt, s), (r.mode & 2) === 0)
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && ls(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Ss(r, !1, c, l, v, r.lastEffect);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && ls(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          Ss(r, !0, l, null, v, r.lastEffect);
          break;
        case "together":
          Ss(r, !1, null, null, void 0, r.lastEffect);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  u(ip, "mi");
  function ai(n, r, l) {
    n !== null && (r.dependencies = n.dependencies);
    var s = r.expirationTime;
    if (s !== 0 && Vu(s), r.childExpirationTime < l)
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(D(153));
    if (r.child !== null) {
      for (n = r.child, l = mr(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = mr(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  u(ai, "$h");
  var ap, Cs, Ia, bs;
  ap = /* @__PURE__ */ u(function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, "ni"), Cs = /* @__PURE__ */ u(function() {
  }, "oi"), Ia = /* @__PURE__ */ u(function(n, r, l, s, c) {
    var v = n.memoizedProps;
    if (v !== s) {
      var h = r.stateNode;
      switch (Aa(Pr.current), n = null, l) {
        case "input":
          v = jt(h, v), s = jt(h, s), n = [];
          break;
        case "option":
          v = ar(h, v), s = ar(h, s), n = [];
          break;
        case "select":
          v = ie({}, v, { value: void 0 }), s = ie({}, s, { value: void 0 }), n = [];
          break;
        case "textarea":
          v = da(h, v), s = da(h, s), n = [];
          break;
        default:
          typeof v.onClick != "function" && typeof s.onClick == "function" && (h.onclick = Sa);
      }
      Oo(l, s);
      var y, w;
      l = null;
      for (y in v)
        if (!s.hasOwnProperty(y) && v.hasOwnProperty(y) && v[y] != null)
          if (y === "style")
            for (w in h = v[y], h)
              h.hasOwnProperty(w) && (l || (l = {}), l[w] = "");
          else
            y !== "dangerouslySetInnerHTML" && y !== "children" && y !== "suppressContentEditableWarning" && y !== "suppressHydrationWarning" && y !== "autoFocus" && (ye.hasOwnProperty(y) ? n || (n = []) : (n = n || []).push(y, null));
      for (y in s) {
        var R = s[y];
        if (h = v?.[y], s.hasOwnProperty(y) && R !== h && (R != null || h != null))
          if (y === "style")
            if (h) {
              for (w in h)
                !h.hasOwnProperty(w) || R && R.hasOwnProperty(w) || (l || (l = {}), l[w] = "");
              for (w in R)
                R.hasOwnProperty(w) && h[w] !== R[w] && (l || (l = {}), l[w] = R[w]);
            } else
              l || (n || (n = []), n.push(y, l)), l = R;
          else
            y === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0, h = h ? h.__html : void 0, R != null && h !== R && (n = n || []).push(y, R)) : y === "children" ? h === R || typeof R != "string" && typeof R != "number" || (n = n || []).push(y, "" + R) : y !== "suppressContentEditableWarning" && y !== "suppressHydrationWarning" && (ye.hasOwnProperty(y) ? (R != null && Zr(c, y), n || h === R || (n = [])) : (n = n || []).push(y, R));
      }
      l && (n = n || []).push("style", l), c = n, (r.updateQueue = c) && (r.effectTag |= 4);
    }
  }, "pi"), bs = /* @__PURE__ */ u(function(n, r, l, s) {
    l !== s && (r.effectTag |= 4);
  }, "qi");
  function Lu(n, r) {
    switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; )
          r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var s = null; l !== null; )
          l.alternate !== null && (s = l), l = l.sibling;
        s === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : s.sibling = null;
    }
  }
  u(Lu, "ri");
  function lp(n, r, l) {
    var s = r.pendingProps;
    switch (r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return null;
      case 1:
        return Xt(r.type) && Mi(), null;
      case 3:
        return Dl(), ze(Ot), ze(zt), l = r.stateNode, l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), n !== null && n.child !== null || !ys(r) || (r.effectTag |= 4), Cs(r), null;
      case 5:
        uc(r), l = Aa(kl.current);
        var c = r.type;
        if (n !== null && r.stateNode != null)
          Ia(n, r, c, s, l), n.ref !== r.ref && (r.effectTag |= 128);
        else {
          if (!s) {
            if (r.stateNode === null)
              throw Error(D(166));
            return null;
          }
          if (n = Aa(Pr.current), ys(r)) {
            s = r.stateNode, c = r.type;
            var v = r.memoizedProps;
            switch (s[Mr] = r, s[ml] = v, c) {
              case "iframe":
              case "object":
              case "embed":
                be("load", s);
                break;
              case "video":
              case "audio":
                for (n = 0; n < Ue.length; n++)
                  be(Ue[n], s);
                break;
              case "source":
                be("error", s);
                break;
              case "img":
              case "image":
              case "link":
                be("error", s), be("load", s);
                break;
              case "form":
                be("reset", s), be("submit", s);
                break;
              case "details":
                be("toggle", s);
                break;
              case "input":
                ir(s, v), be("invalid", s), Zr(l, "onChange");
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!v.multiple }, be("invalid", s), Zr(l, "onChange");
                break;
              case "textarea":
                ol(s, v), be("invalid", s), Zr(l, "onChange");
            }
            Oo(c, v), n = null;
            for (var h in v)
              if (v.hasOwnProperty(h)) {
                var y = v[h];
                h === "children" ? typeof y == "string" ? s.textContent !== y && (n = ["children", y]) : typeof y == "number" && s.textContent !== "" + y && (n = ["children", "" + y]) : ye.hasOwnProperty(h) && y != null && Zr(l, h);
              }
            switch (c) {
              case "input":
                ca(s), Et(s, v, !0);
                break;
              case "textarea":
                ca(s), Co(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof v.onClick == "function" && (s.onclick = Sa);
            }
            l = n, r.updateQueue = l, l !== null && (r.effectTag |= 4);
          } else {
            switch (h = l.nodeType === 9 ? l : l.ownerDocument, n === Md && (n = sl(c)), n === Md ? c === "script" ? (n = h.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof s.is == "string" ? n = h.createElement(c, { is: s.is }) : (n = h.createElement(c), c === "select" && (h = n, s.multiple ? h.multiple = !0 : s.size && (h.size = s.size))) : n = h.createElementNS(n, c), n[Mr] = r, n[ml] = s, ap(n, r, !1, !1), r.stateNode = n, h = Tf(c, s), c) {
              case "iframe":
              case "object":
              case "embed":
                be(
                  "load",
                  n
                ), y = s;
                break;
              case "video":
              case "audio":
                for (y = 0; y < Ue.length; y++)
                  be(Ue[y], n);
                y = s;
                break;
              case "source":
                be("error", n), y = s;
                break;
              case "img":
              case "image":
              case "link":
                be("error", n), be("load", n), y = s;
                break;
              case "form":
                be("reset", n), be("submit", n), y = s;
                break;
              case "details":
                be("toggle", n), y = s;
                break;
              case "input":
                ir(n, s), y = jt(n, s), be("invalid", n), Zr(l, "onChange");
                break;
              case "option":
                y = ar(n, s);
                break;
              case "select":
                n._wrapperState = { wasMultiple: !!s.multiple }, y = ie({}, s, { value: void 0 }), be("invalid", n), Zr(l, "onChange");
                break;
              case "textarea":
                ol(
                  n,
                  s
                ), y = da(n, s), be("invalid", n), Zr(l, "onChange");
                break;
              default:
                y = s;
            }
            Oo(c, y);
            var w = y;
            for (v in w)
              if (w.hasOwnProperty(v)) {
                var R = w[v];
                v === "style" ? Od(n, R) : v === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0, R != null && va(n, R)) : v === "children" ? typeof R == "string" ? (c !== "textarea" || R !== "") && Dn(n, R) : typeof R == "number" && Dn(n, "" + R) : v !== "suppressContentEditableWarning" && v !== "suppressHydrationWarning" && v !== "autoFocus" && (ye.hasOwnProperty(v) ? R != null && Zr(l, v) : R != null && rt(n, v, R, h));
              }
            switch (c) {
              case "input":
                ca(n), Et(n, s, !1);
                break;
              case "textarea":
                ca(n), Co(n);
                break;
              case "option":
                s.value != null && n.setAttribute("value", "" + rr(s.value));
                break;
              case "select":
                n.multiple = !!s.multiple, l = s.value, l != null ? kn(n, !!s.multiple, l, !1) : s.defaultValue != null && kn(n, !!s.multiple, s.defaultValue, !0);
                break;
              default:
                typeof y.onClick == "function" && (n.onclick = Sa);
            }
            Ud(c, s) && (r.effectTag |= 4);
          }
          r.ref !== null && (r.effectTag |= 128);
        }
        return null;
      case 6:
        if (n && r.stateNode != null)
          bs(n, r, n.memoizedProps, s);
        else {
          if (typeof s != "string" && r.stateNode === null)
            throw Error(D(166));
          l = Aa(kl.current), Aa(Pr.current), ys(r) ? (l = r.stateNode, s = r.memoizedProps, l[Mr] = r, l.nodeValue !== s && (r.effectTag |= 4)) : (l = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(s), l[Mr] = r, r.stateNode = l);
        }
        return null;
      case 13:
        return ze(lt), s = r.memoizedState, (r.effectTag & 64) !== 0 ? (r.expirationTime = l, r) : (l = s !== null, s = !1, n === null ? r.memoizedProps.fallback !== void 0 && ys(r) : (c = n.memoizedState, s = c !== null, l || c === null || (c = n.child.sibling, c !== null && (v = r.firstEffect, v !== null ? (r.firstEffect = c, c.nextEffect = v) : (r.firstEffect = r.lastEffect = c, c.nextEffect = null), c.effectTag = 8))), l && !s && (r.mode & 2) !== 0 && (n === null && r.memoizedProps.unstable_avoidThisFallback !== !0 || (lt.current & 1) !== 0 ? yt === Ii && (yt = Fu) : ((yt === Ii || yt === Fu) && (yt = ws), vr !== 0 && An !== null && (Ga(An, Ze), Oc(An, vr)))), (l || s) && (r.effectTag |= 4), null);
      case 4:
        return Dl(), Cs(r), null;
      case 10:
        return nc(r), null;
      case 17:
        return Xt(r.type) && Mi(), null;
      case 19:
        if (ze(lt), s = r.memoizedState, s === null)
          return null;
        if (c = (r.effectTag & 64) !== 0, v = s.rendering, v === null) {
          if (c)
            Lu(s, !1);
          else if (yt !== Ii || n !== null && (n.effectTag & 64) !== 0)
            for (v = r.child; v !== null; ) {
              if (n = ls(v), n !== null) {
                for (r.effectTag |= 64, Lu(s, !1), c = n.updateQueue, c !== null && (r.updateQueue = c, r.effectTag |= 4), s.lastEffect === null && (r.firstEffect = null), r.lastEffect = s.lastEffect, s = r.child; s !== null; )
                  c = s, v = l, c.effectTag &= 2, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null, n = c.alternate, n === null ? (c.childExpirationTime = 0, c.expirationTime = v, c.child = null, c.memoizedProps = null, c.memoizedState = null, c.updateQueue = null, c.dependencies = null) : (c.childExpirationTime = n.childExpirationTime, c.expirationTime = n.expirationTime, c.child = n.child, c.memoizedProps = n.memoizedProps, c.memoizedState = n.memoizedState, c.updateQueue = n.updateQueue, v = n.dependencies, c.dependencies = v === null ? null : { expirationTime: v.expirationTime, firstContext: v.firstContext, responders: v.responders }), s = s.sibling;
                return ft(lt, lt.current & 1 | 2), r.child;
              }
              v = v.sibling;
            }
        } else {
          if (!c)
            if (n = ls(v), n !== null) {
              if (r.effectTag |= 64, c = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.effectTag |= 4), Lu(s, !0), s.tail === null && s.tailMode === "hidden" && !v.alternate)
                return r = r.lastEffect = s.lastEffect, r !== null && (r.nextEffect = null), null;
            } else
              2 * Qe() - s.renderingStartTime > s.tailExpiration && 1 < l && (r.effectTag |= 64, c = !0, Lu(s, !1), r.expirationTime = r.childExpirationTime = l - 1);
          s.isBackwards ? (v.sibling = r.child, r.child = v) : (l = s.last, l !== null ? l.sibling = v : r.child = v, s.last = v);
        }
        return s.tail !== null ? (s.tailExpiration === 0 && (s.tailExpiration = Qe() + 500), l = s.tail, s.rendering = l, s.tail = l.sibling, s.lastEffect = r.lastEffect, s.renderingStartTime = Qe(), l.sibling = null, r = lt.current, ft(lt, c ? r & 1 | 2 : r & 1), l) : null;
    }
    throw Error(D(
      156,
      r.tag
    ));
  }
  u(lp, "si");
  function nh(n) {
    switch (n.tag) {
      case 1:
        Xt(n.type) && Mi();
        var r = n.effectTag;
        return r & 4096 ? (n.effectTag = r & -4097 | 64, n) : null;
      case 3:
        if (Dl(), ze(Ot), ze(zt), r = n.effectTag, (r & 64) !== 0)
          throw Error(D(285));
        return n.effectTag = r & -4097 | 64, n;
      case 5:
        return uc(n), null;
      case 13:
        return ze(lt), r = n.effectTag, r & 4096 ? (n.effectTag = r & -4097 | 64, n) : null;
      case 19:
        return ze(lt), null;
      case 4:
        return Dl(), null;
      case 10:
        return nc(n), null;
      default:
        return null;
    }
  }
  u(nh, "zi");
  function mc(n, r) {
    return { value: n, source: r, stack: Zl(r) };
  }
  u(mc, "Ai");
  var rh = typeof WeakSet == "function" ? WeakSet : Set;
  function yc(n, r) {
    var l = r.source, s = r.stack;
    s === null && l !== null && (s = Zl(l)), l !== null && Bn(l.type), r = r.value, n !== null && n.tag === 1 && Bn(n.type);
    try {
      console.error(r);
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  u(yc, "Ci");
  function ih(n, r) {
    try {
      r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
    } catch (l) {
      $i(n, l);
    }
  }
  u(ih, "Di");
  function up(n) {
    var r = n.ref;
    if (r !== null)
      if (typeof r == "function")
        try {
          r(null);
        } catch (l) {
          $i(n, l);
        }
      else
        r.current = null;
  }
  u(up, "Fi");
  function ah(n, r) {
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        return;
      case 1:
        if (r.effectTag & 256 && n !== null) {
          var l = n.memoizedProps, s = n.memoizedState;
          n = r.stateNode, r = n.getSnapshotBeforeUpdate(r.elementType === r.type ? l : Tn(r.type, l), s), n.__reactInternalSnapshotBeforeUpdate = r;
        }
        return;
      case 3:
      case 5:
      case 6:
      case 4:
      case 17:
        return;
    }
    throw Error(D(163));
  }
  u(ah, "Gi");
  function op(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var s = l.destroy;
          l.destroy = void 0, s !== void 0 && s();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  u(op, "Hi");
  function gc(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var s = l.create;
          l.destroy = s();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  u(gc, "Ii");
  function lh(n, r, l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        gc(3, l);
        return;
      case 1:
        if (n = l.stateNode, l.effectTag & 4)
          if (r === null)
            n.componentDidMount();
          else {
            var s = l.elementType === l.type ? r.memoizedProps : Tn(l.type, r.memoizedProps);
            n.componentDidUpdate(s, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
          }
        r = l.updateQueue, r !== null && ic(l, r, n);
        return;
      case 3:
        if (r = l.updateQueue, r !== null) {
          if (n = null, l.child !== null)
            switch (l.child.tag) {
              case 5:
                n = l.child.stateNode;
                break;
              case 1:
                n = l.child.stateNode;
            }
          ic(l, r, n);
        }
        return;
      case 5:
        n = l.stateNode, r === null && l.effectTag & 4 && Ud(l.type, l.memoizedProps) && n.focus();
        return;
      case 6:
        return;
      case 4:
        return;
      case 12:
        return;
      case 13:
        l.memoizedState === null && (l = l.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null && wd(l))));
        return;
      case 19:
      case 17:
      case 20:
      case 21:
        return;
    }
    throw Error(D(163));
  }
  u(lh, "Ji");
  function Tc(n, r, l) {
    switch (typeof ju == "function" && ju(r), r.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        if (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null)) {
          var s = n.next;
          Pe(97 < l ? 97 : l, function() {
            var c = s;
            do {
              var v = c.destroy;
              if (v !== void 0) {
                var h = r;
                try {
                  v();
                } catch (y) {
                  $i(h, y);
                }
              }
              c = c.next;
            } while (c !== s);
          });
        }
        break;
      case 1:
        up(r), l = r.stateNode, typeof l.componentWillUnmount == "function" && ih(r, l);
        break;
      case 5:
        up(r);
        break;
      case 4:
        xs(n, r, l);
    }
  }
  u(Tc, "Ki");
  function sp(n) {
    var r = n.alternate;
    n.return = null, n.child = null, n.memoizedState = null, n.updateQueue = null, n.dependencies = null, n.alternate = null, n.firstEffect = null, n.lastEffect = null, n.pendingProps = null, n.memoizedProps = null, n.stateNode = null, r !== null && sp(r);
  }
  u(sp, "Ni");
  function fp(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  u(fp, "Oi");
  function cp(n) {
    e: {
      for (var r = n.return; r !== null; ) {
        if (fp(r)) {
          var l = r;
          break e;
        }
        r = r.return;
      }
      throw Error(D(160));
    }
    switch (r = l.stateNode, l.tag) {
      case 5:
        var s = !1;
        break;
      case 3:
        r = r.containerInfo, s = !0;
        break;
      case 4:
        r = r.containerInfo, s = !0;
        break;
      default:
        throw Error(D(161));
    }
    l.effectTag & 16 && (Dn(r, ""), l.effectTag &= -17);
    e:
      t:
        for (l = n; ; ) {
          for (; l.sibling === null; ) {
            if (l.return === null || fp(l.return)) {
              l = null;
              break e;
            }
            l = l.return;
          }
          for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
            if (l.effectTag & 2 || l.child === null || l.tag === 4)
              continue t;
            l.child.return = l, l = l.child;
          }
          if (!(l.effectTag & 2)) {
            l = l.stateNode;
            break e;
          }
        }
    s ? Ec(n, l, r) : zu(n, l, r);
  }
  u(cp, "Pi");
  function Ec(n, r, l) {
    var s = n.tag, c = s === 5 || s === 6;
    if (c)
      n = c ? n.stateNode : n.stateNode.instance, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Sa));
    else if (s !== 4 && (n = n.child, n !== null))
      for (Ec(n, r, l), n = n.sibling; n !== null; )
        Ec(n, r, l), n = n.sibling;
  }
  u(Ec, "Qi");
  function zu(n, r, l) {
    var s = n.tag, c = s === 5 || s === 6;
    if (c)
      n = c ? n.stateNode : n.stateNode.instance, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (s !== 4 && (n = n.child, n !== null))
      for (zu(n, r, l), n = n.sibling; n !== null; )
        zu(n, r, l), n = n.sibling;
  }
  u(zu, "Ri");
  function xs(n, r, l) {
    for (var s = r, c = !1, v, h; ; ) {
      if (!c) {
        c = s.return;
        e:
          for (; ; ) {
            if (c === null)
              throw Error(D(160));
            switch (v = c.stateNode, c.tag) {
              case 5:
                h = !1;
                break e;
              case 3:
                v = v.containerInfo, h = !0;
                break e;
              case 4:
                v = v.containerInfo, h = !0;
                break e;
            }
            c = c.return;
          }
        c = !0;
      }
      if (s.tag === 5 || s.tag === 6) {
        e:
          for (var y = n, w = s, R = l, Y = w; ; )
            if (Tc(y, Y, R), Y.child !== null && Y.tag !== 4)
              Y.child.return = Y, Y = Y.child;
            else {
              if (Y === w)
                break e;
              for (; Y.sibling === null; ) {
                if (Y.return === null || Y.return === w)
                  break e;
                Y = Y.return;
              }
              Y.sibling.return = Y.return, Y = Y.sibling;
            }
        h ? (y = v, w = s.stateNode, y.nodeType === 8 ? y.parentNode.removeChild(w) : y.removeChild(w)) : v.removeChild(s.stateNode);
      } else if (s.tag === 4) {
        if (s.child !== null) {
          v = s.stateNode.containerInfo, h = !0, s.child.return = s, s = s.child;
          continue;
        }
      } else if (Tc(n, s, l), s.child !== null) {
        s.child.return = s, s = s.child;
        continue;
      }
      if (s === r)
        break;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === r)
          return;
        s = s.return, s.tag === 4 && (c = !1);
      }
      s.sibling.return = s.return, s = s.sibling;
    }
  }
  u(xs, "Mi");
  function li(n, r) {
    switch (r.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        op(3, r);
        return;
      case 1:
        return;
      case 5:
        var l = r.stateNode;
        if (l != null) {
          var s = r.memoizedProps, c = n !== null ? n.memoizedProps : s;
          n = r.type;
          var v = r.updateQueue;
          if (r.updateQueue = null, v !== null) {
            for (l[ml] = s, n === "input" && s.type === "radio" && s.name != null && ul(l, s), Tf(n, c), r = Tf(n, s), c = 0; c < v.length; c += 2) {
              var h = v[c], y = v[c + 1];
              h === "style" ? Od(l, y) : h === "dangerouslySetInnerHTML" ? va(l, y) : h === "children" ? Dn(l, y) : rt(l, h, y, r);
            }
            switch (n) {
              case "input":
                Xe(l, s);
                break;
              case "textarea":
                So(l, s);
                break;
              case "select":
                r = l._wrapperState.wasMultiple, l._wrapperState.wasMultiple = !!s.multiple, n = s.value, n != null ? kn(l, !!s.multiple, n, !1) : r !== !!s.multiple && (s.defaultValue != null ? kn(l, !!s.multiple, s.defaultValue, !0) : kn(l, !!s.multiple, s.multiple ? [] : "", !1));
            }
          }
        }
        return;
      case 6:
        if (r.stateNode === null)
          throw Error(D(162));
        r.stateNode.nodeValue = r.memoizedProps;
        return;
      case 3:
        r = r.stateNode, r.hydrate && (r.hydrate = !1, wd(r.containerInfo));
        return;
      case 12:
        return;
      case 13:
        if (l = r, r.memoizedState === null ? s = !1 : (s = !0, l = r.child, ji = Qe()), l !== null)
          e:
            for (n = l; ; ) {
              if (n.tag === 5)
                v = n.stateNode, s ? (v = v.style, typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none") : (v = n.stateNode, c = n.memoizedProps.style, c = c != null && c.hasOwnProperty("display") ? c.display : null, v.style.display = Dd("display", c));
              else if (n.tag === 6)
                n.stateNode.nodeValue = s ? "" : n.memoizedProps;
              else if (n.tag === 13 && n.memoizedState !== null && n.memoizedState.dehydrated === null) {
                v = n.child.sibling, v.return = n, n = v;
                continue;
              } else if (n.child !== null) {
                n.child.return = n, n = n.child;
                continue;
              }
              if (n === l)
                break;
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === l)
                  break e;
                n = n.return;
              }
              n.sibling.return = n.return, n = n.sibling;
            }
        Pu(r);
        return;
      case 19:
        Pu(r);
        return;
      case 17:
        return;
    }
    throw Error(D(163));
  }
  u(li, "Si");
  function Pu(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new rh()), r.forEach(function(s) {
        var c = ch.bind(null, n, s);
        l.has(s) || (l.add(s), s.then(c, c));
      });
    }
  }
  u(Pu, "Ui");
  var dp = typeof WeakMap == "function" ? WeakMap : Map;
  function ja(n, r, l) {
    l = Li(l, null), l.tag = 3, l.payload = { element: null };
    var s = r.value;
    return l.callback = function() {
      Qa || (Qa = !0, Ul = s), yc(n, r);
    }, l;
  }
  u(ja, "Xi");
  function pp(n, r, l) {
    l = Li(l, null), l.tag = 3;
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var c = r.value;
      l.payload = function() {
        return yc(n, r), s(c);
      };
    }
    var v = n.stateNode;
    return v !== null && typeof v.componentDidCatch == "function" && (l.callback = function() {
      typeof s != "function" && (Zn === null ? Zn = /* @__PURE__ */ new Set([this]) : Zn.add(this), yc(n, r));
      var h = r.stack;
      this.componentDidCatch(r.value, { componentStack: h !== null ? h : "" });
    }), l;
  }
  u(pp, "$i");
  var uh = Math.ceil, Rs = Lt.ReactCurrentDispatcher, vp = Lt.ReactCurrentOwner, Pt = 0, Sc = 8, Kn = 16, Fr = 32, Ii = 0, Ft = 1, hp = 2, Fu = 3, ws = 4, Cc = 5, me = Pt, An = null, Te = null, Ze = 0, yt = Ii, Wa = null, Ln = 1073741823, Ml = 1073741823, Hr = null, vr = 0, Ba = !1, ji = 0, _s = 500, ee = null, Qa = !1, Ul = null, Zn = null, Hu = !1, Wi = null, Al = 90, hr = null, Ll = 0, bc = null, ks = 0;
  function Ht() {
    return (me & (Kn | Fr)) !== Pt ? 1073741821 - (Qe() / 10 | 0) : ks !== 0 ? ks : ks = 1073741821 - (Qe() / 10 | 0);
  }
  u(Ht, "Gg");
  function Bi(n, r, l) {
    if (r = r.mode, (r & 2) === 0)
      return 1073741823;
    var s = cr();
    if ((r & 4) === 0)
      return s === 99 ? 1073741823 : 1073741822;
    if ((me & Kn) !== Pt)
      return Ze;
    if (l !== null)
      n = Ke(n, l.timeoutMs | 0 || 5e3, 250);
    else
      switch (s) {
        case 99:
          n = 1073741823;
          break;
        case 98:
          n = Ke(n, 150, 100);
          break;
        case 97:
        case 96:
          n = Ke(n, 5e3, 250);
          break;
        case 95:
          n = 2;
          break;
        default:
          throw Error(D(326));
      }
    return An !== null && n === Ze && --n, n;
  }
  u(Bi, "Hg");
  function Qi(n, r) {
    if (50 < Ll)
      throw Ll = 0, bc = null, Error(D(185));
    if (n = Ya(n, r), n !== null) {
      var l = cr();
      r === 1073741823 ? (me & Sc) !== Pt && (me & (Kn | Fr)) === Pt ? xc(n) : (zn(n), me === Pt && Mn()) : zn(n), (me & 4) === Pt || l !== 98 && l !== 99 || (hr === null ? hr = /* @__PURE__ */ new Map([[n, r]]) : (l = hr.get(n), (l === void 0 || l > r) && hr.set(n, r)));
    }
  }
  u(Qi, "Ig");
  function Ya(n, r) {
    n.expirationTime < r && (n.expirationTime = r);
    var l = n.alternate;
    l !== null && l.expirationTime < r && (l.expirationTime = r);
    var s = n.return, c = null;
    if (s === null && n.tag === 3)
      c = n.stateNode;
    else
      for (; s !== null; ) {
        if (l = s.alternate, s.childExpirationTime < r && (s.childExpirationTime = r), l !== null && l.childExpirationTime < r && (l.childExpirationTime = r), s.return === null && s.tag === 3) {
          c = s.stateNode;
          break;
        }
        s = s.return;
      }
    return c !== null && (An === c && (Vu(r), yt === ws && Ga(c, Ze)), Oc(c, r)), c;
  }
  u(Ya, "xj");
  function Ds(n) {
    var r = n.lastExpiredTime;
    if (r !== 0 || (r = n.firstPendingTime, !Dp(n, r)))
      return r;
    var l = n.lastPingedTime;
    return n = n.nextKnownPendingLevel, n = l > n ? l : n, 2 >= n && r !== n ? 0 : n;
  }
  u(Ds, "zj");
  function zn(n) {
    if (n.lastExpiredTime !== 0)
      n.callbackExpirationTime = 1073741823, n.callbackPriority = 99, n.callbackNode = Na(xc.bind(null, n));
    else {
      var r = Ds(n), l = n.callbackNode;
      if (r === 0)
        l !== null && (n.callbackNode = null, n.callbackExpirationTime = 0, n.callbackPriority = 90);
      else {
        var s = Ht();
        if (r === 1073741823 ? s = 99 : r === 1 || r === 2 ? s = 95 : (s = 10 * (1073741821 - r) - 10 * (1073741821 - s), s = 0 >= s ? 99 : 250 >= s ? 98 : 5250 >= s ? 97 : 95), l !== null) {
          var c = n.callbackPriority;
          if (n.callbackExpirationTime === r && c >= s)
            return;
          l !== Zf && Xo(l);
        }
        n.callbackExpirationTime = r, n.callbackPriority = s, r = r === 1073741823 ? Na(xc.bind(null, n)) : Bd(s, mp.bind(null, n), { timeout: 10 * (1073741821 - r) - Qe() }), n.callbackNode = r;
      }
    }
  }
  u(zn, "Z");
  function mp(n, r) {
    if (ks = 0, r)
      return r = Ht(), Gi(n, r), zn(n), null;
    var l = Ds(n);
    if (l !== 0) {
      if (r = n.callbackNode, (me & (Kn | Fr)) !== Pt)
        throw Error(D(327));
      if (zl(), n === An && l === Ze || $a(n, l), Te !== null) {
        var s = me;
        me |= Kn;
        var c = Ep();
        do
          try {
            Cp();
            break;
          } catch (y) {
            Tp(n, y);
          }
        while (1);
        if (tc(), me = s, Rs.current = c, yt === Ft)
          throw r = Wa, $a(n, l), Ga(n, l), zn(n), r;
        if (Te === null)
          switch (c = n.finishedWork = n.current.alternate, n.finishedExpirationTime = l, s = yt, An = null, s) {
            case Ii:
            case Ft:
              throw Error(D(345));
            case hp:
              Gi(n, 2 < l ? 2 : l);
              break;
            case Fu:
              if (Ga(n, l), s = n.lastSuspendedTime, l === s && (n.nextKnownPendingLevel = Iu(c)), Ln === 1073741823 && (c = ji + _s - Qe(), 10 < c)) {
                if (Ba) {
                  var v = n.lastPingedTime;
                  if (v === 0 || v >= l) {
                    n.lastPingedTime = l, $a(n, l);
                    break;
                  }
                }
                if (v = Ds(n), v !== 0 && v !== l)
                  break;
                if (s !== 0 && s !== l) {
                  n.lastPingedTime = s;
                  break;
                }
                n.timeoutHandle = zo(Yi.bind(null, n), c);
                break;
              }
              Yi(n);
              break;
            case ws:
              if (Ga(n, l), s = n.lastSuspendedTime, l === s && (n.nextKnownPendingLevel = Iu(c)), Ba && (c = n.lastPingedTime, c === 0 || c >= l)) {
                n.lastPingedTime = l, $a(n, l);
                break;
              }
              if (c = Ds(n), c !== 0 && c !== l)
                break;
              if (s !== 0 && s !== l) {
                n.lastPingedTime = s;
                break;
              }
              if (Ml !== 1073741823 ? s = 10 * (1073741821 - Ml) - Qe() : Ln === 1073741823 ? s = 0 : (s = 10 * (1073741821 - Ln) - 5e3, c = Qe(), l = 10 * (1073741821 - l) - c, s = c - s, 0 > s && (s = 0), s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * uh(s / 1960)) - s, l < s && (s = l)), 10 < s) {
                n.timeoutHandle = zo(Yi.bind(null, n), s);
                break;
              }
              Yi(n);
              break;
            case Cc:
              if (Ln !== 1073741823 && Hr !== null) {
                v = Ln;
                var h = Hr;
                if (s = h.busyMinDurationMs | 0, 0 >= s ? s = 0 : (c = h.busyDelayMs | 0, v = Qe() - (10 * (1073741821 - v) - (h.timeoutMs | 0 || 5e3)), s = v <= c ? 0 : c + s - v), 10 < s) {
                  Ga(n, l), n.timeoutHandle = zo(Yi.bind(null, n), s);
                  break;
                }
              }
              Yi(n);
              break;
            default:
              throw Error(D(329));
          }
        if (zn(n), n.callbackNode === r)
          return mp.bind(null, n);
      }
    }
    return null;
  }
  u(mp, "Bj");
  function xc(n) {
    var r = n.lastExpiredTime;
    if (r = r !== 0 ? r : 1073741823, (me & (Kn | Fr)) !== Pt)
      throw Error(D(327));
    if (zl(), n === An && r === Ze || $a(n, r), Te !== null) {
      var l = me;
      me |= Kn;
      var s = Ep();
      do
        try {
          Sp();
          break;
        } catch (c) {
          Tp(n, c);
        }
      while (1);
      if (tc(), me = l, Rs.current = s, yt === Ft)
        throw l = Wa, $a(n, r), Ga(n, r), zn(n), l;
      if (Te !== null)
        throw Error(D(261));
      n.finishedWork = n.current.alternate, n.finishedExpirationTime = r, An = null, Yi(n), zn(n);
    }
    return null;
  }
  u(xc, "yj");
  function oh() {
    if (hr !== null) {
      var n = hr;
      hr = null, n.forEach(function(r, l) {
        Gi(l, r), zn(l);
      }), Mn();
    }
  }
  u(oh, "Lj");
  function yp(n, r) {
    var l = me;
    me |= 1;
    try {
      return n(r);
    } finally {
      me = l, me === Pt && Mn();
    }
  }
  u(yp, "Mj");
  function gp(n, r) {
    var l = me;
    me &= -2, me |= Sc;
    try {
      return n(r);
    } finally {
      me = l, me === Pt && Mn();
    }
  }
  u(gp, "Nj");
  function $a(n, r) {
    n.finishedWork = null, n.finishedExpirationTime = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Ad(l)), Te !== null)
      for (l = Te.return; l !== null; ) {
        var s = l;
        switch (s.tag) {
          case 1:
            s = s.type.childContextTypes, s != null && Mi();
            break;
          case 3:
            Dl(), ze(Ot), ze(zt);
            break;
          case 5:
            uc(s);
            break;
          case 4:
            Dl();
            break;
          case 13:
            ze(lt);
            break;
          case 19:
            ze(lt);
            break;
          case 10:
            nc(s);
        }
        l = l.return;
      }
    An = n, Te = mr(n.current, null), Ze = r, yt = Ii, Wa = null, Ml = Ln = 1073741823, Hr = null, vr = 0, Ba = !1;
  }
  u($a, "Ej");
  function Tp(n, r) {
    do {
      try {
        if (tc(), os.current = ms, Fi)
          for (var l = tt.memoizedState; l !== null; ) {
            var s = l.queue;
            s !== null && (s.pending = null), l = l.next;
          }
        if (Kt = 0, dt = ct = tt = null, Fi = !1, Te === null || Te.return === null)
          return yt = Ft, Wa = r, Te = null;
        e: {
          var c = n, v = Te.return, h = Te, y = r;
          if (r = Ze, h.effectTag |= 2048, h.firstEffect = h.lastEffect = null, y !== null && typeof y == "object" && typeof y.then == "function") {
            var w = y;
            if ((h.mode & 2) === 0) {
              var R = h.alternate;
              R ? (h.updateQueue = R.updateQueue, h.memoizedState = R.memoizedState, h.expirationTime = R.expirationTime) : (h.updateQueue = null, h.memoizedState = null);
            }
            var Y = (lt.current & 1) !== 0, X = v;
            do {
              var De;
              if (De = X.tag === 13) {
                var He = X.memoizedState;
                if (He !== null)
                  De = He.dehydrated !== null;
                else {
                  var Pn = X.memoizedProps;
                  De = Pn.fallback === void 0 ? !1 : Pn.unstable_avoidThisFallback !== !0 ? !0 : !Y;
                }
              }
              if (De) {
                var Yt = X.updateQueue;
                if (Yt === null) {
                  var C = /* @__PURE__ */ new Set();
                  C.add(w), X.updateQueue = C;
                } else
                  Yt.add(w);
                if ((X.mode & 2) === 0) {
                  if (X.effectTag |= 64, h.effectTag &= -2981, h.tag === 1)
                    if (h.alternate === null)
                      h.tag = 17;
                    else {
                      var S = Li(1073741823, null);
                      S.tag = 2, zi(h, S);
                    }
                  h.expirationTime = 1073741823;
                  break e;
                }
                y = void 0, h = r;
                var k = c.pingCache;
                if (k === null ? (k = c.pingCache = new dp(), y = /* @__PURE__ */ new Set(), k.set(w, y)) : (y = k.get(w), y === void 0 && (y = /* @__PURE__ */ new Set(), k.set(w, y))), !y.has(h)) {
                  y.add(h);
                  var P = wp.bind(null, c, w, h);
                  w.then(P, P);
                }
                X.effectTag |= 4096, X.expirationTime = r;
                break e;
              }
              X = X.return;
            } while (X !== null);
            y = Error((Bn(h.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.` + Zl(h));
          }
          yt !== Cc && (yt = hp), y = mc(y, h), X = v;
          do {
            switch (X.tag) {
              case 3:
                w = y, X.effectTag |= 4096, X.expirationTime = r;
                var j = ja(X, w, r);
                rc(X, j);
                break e;
              case 1:
                w = y;
                var Z = X.type, ue = X.stateNode;
                if ((X.effectTag & 64) === 0 && (typeof Z.getDerivedStateFromError == "function" || ue !== null && typeof ue.componentDidCatch == "function" && (Zn === null || !Zn.has(ue)))) {
                  X.effectTag |= 4096, X.expirationTime = r;
                  var Ae = pp(X, w, r);
                  rc(X, Ae);
                  break e;
                }
            }
            X = X.return;
          } while (X !== null);
        }
        Te = bp(Te);
      } catch (pt) {
        r = pt;
        continue;
      }
      break;
    } while (1);
  }
  u(Tp, "Hj");
  function Ep() {
    var n = Rs.current;
    return Rs.current = ms, n === null ? ms : n;
  }
  u(Ep, "Fj");
  function Rc(n, r) {
    n < Ln && 2 < n && (Ln = n), r !== null && n < Ml && 2 < n && (Ml = n, Hr = r);
  }
  u(Rc, "Ag");
  function Vu(n) {
    n > vr && (vr = n);
  }
  u(Vu, "Bg");
  function Sp() {
    for (; Te !== null; )
      Te = wc(Te);
  }
  u(Sp, "Kj");
  function Cp() {
    for (; Te !== null && !Zv(); )
      Te = wc(Te);
  }
  u(Cp, "Gj");
  function wc(n) {
    var r = _p(n.alternate, n, Ze);
    return n.memoizedProps = n.pendingProps, r === null && (r = bp(n)), vp.current = null, r;
  }
  u(wc, "Qj");
  function bp(n) {
    Te = n;
    do {
      var r = Te.alternate;
      if (n = Te.return, (Te.effectTag & 2048) === 0) {
        if (r = lp(r, Te, Ze), Ze === 1 || Te.childExpirationTime !== 1) {
          for (var l = 0, s = Te.child; s !== null; ) {
            var c = s.expirationTime, v = s.childExpirationTime;
            c > l && (l = c), v > l && (l = v), s = s.sibling;
          }
          Te.childExpirationTime = l;
        }
        if (r !== null)
          return r;
        n !== null && (n.effectTag & 2048) === 0 && (n.firstEffect === null && (n.firstEffect = Te.firstEffect), Te.lastEffect !== null && (n.lastEffect !== null && (n.lastEffect.nextEffect = Te.firstEffect), n.lastEffect = Te.lastEffect), 1 < Te.effectTag && (n.lastEffect !== null ? n.lastEffect.nextEffect = Te : n.firstEffect = Te, n.lastEffect = Te));
      } else {
        if (r = nh(Te), r !== null)
          return r.effectTag &= 2047, r;
        n !== null && (n.firstEffect = n.lastEffect = null, n.effectTag |= 2048);
      }
      if (r = Te.sibling, r !== null)
        return r;
      Te = n;
    } while (Te !== null);
    return yt === Ii && (yt = Cc), null;
  }
  u(bp, "Pj");
  function Iu(n) {
    var r = n.expirationTime;
    return n = n.childExpirationTime, r > n ? r : n;
  }
  u(Iu, "Ij");
  function Yi(n) {
    var r = cr();
    return Pe(99, sh.bind(null, n, r)), null;
  }
  u(Yi, "Jj");
  function sh(n, r) {
    do
      zl();
    while (Wi !== null);
    if ((me & (Kn | Fr)) !== Pt)
      throw Error(D(327));
    var l = n.finishedWork, s = n.finishedExpirationTime;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedExpirationTime = 0, l === n.current)
      throw Error(D(177));
    n.callbackNode = null, n.callbackExpirationTime = 0, n.callbackPriority = 90, n.nextKnownPendingLevel = 0;
    var c = Iu(l);
    if (n.firstPendingTime = c, s <= n.lastSuspendedTime ? n.firstSuspendedTime = n.lastSuspendedTime = n.nextKnownPendingLevel = 0 : s <= n.firstSuspendedTime && (n.firstSuspendedTime = s - 1), s <= n.lastPingedTime && (n.lastPingedTime = 0), s <= n.lastExpiredTime && (n.lastExpiredTime = 0), n === An && (Te = An = null, Ze = 0), 1 < l.effectTag ? l.lastEffect !== null ? (l.lastEffect.nextEffect = l, c = l.firstEffect) : c = l : c = l.firstEffect, c !== null) {
      var v = me;
      me |= Fr, vp.current = null, Lo = xi;
      var h = bf();
      if (Mo(h)) {
        if ("selectionStart" in h)
          var y = { start: h.selectionStart, end: h.selectionEnd };
        else
          e: {
            y = (y = h.ownerDocument) && y.defaultView || window;
            var w = y.getSelection && y.getSelection();
            if (w && w.rangeCount !== 0) {
              y = w.anchorNode;
              var R = w.anchorOffset, Y = w.focusNode;
              w = w.focusOffset;
              try {
                y.nodeType, Y.nodeType;
              } catch {
                y = null;
                break e;
              }
              var X = 0, De = -1, He = -1, Pn = 0, Yt = 0, C = h, S = null;
              t:
                for (; ; ) {
                  for (var k; C !== y || R !== 0 && C.nodeType !== 3 || (De = X + R), C !== Y || w !== 0 && C.nodeType !== 3 || (He = X + w), C.nodeType === 3 && (X += C.nodeValue.length), (k = C.firstChild) !== null; )
                    S = C, C = k;
                  for (; ; ) {
                    if (C === h)
                      break t;
                    if (S === y && ++Pn === R && (De = X), S === Y && ++Yt === w && (He = X), (k = C.nextSibling) !== null)
                      break;
                    C = S, S = C.parentNode;
                  }
                  C = k;
                }
              y = De === -1 || He === -1 ? null : { start: De, end: He };
            } else
              y = null;
          }
        y = y || { start: 0, end: 0 };
      } else
        y = null;
      Rf = { activeElementDetached: null, focusedElem: h, selectionRange: y }, xi = !1, ee = c;
      do
        try {
          xp();
        } catch (Ee) {
          if (ee === null)
            throw Error(D(330));
          $i(ee, Ee), ee = ee.nextEffect;
        }
      while (ee !== null);
      ee = c;
      do
        try {
          for (h = n, y = r; ee !== null; ) {
            var P = ee.effectTag;
            if (P & 16 && Dn(ee.stateNode, ""), P & 128) {
              var j = ee.alternate;
              if (j !== null) {
                var Z = j.ref;
                Z !== null && (typeof Z == "function" ? Z(null) : Z.current = null);
              }
            }
            switch (P & 1038) {
              case 2:
                cp(ee), ee.effectTag &= -3;
                break;
              case 6:
                cp(ee), ee.effectTag &= -3, li(ee.alternate, ee);
                break;
              case 1024:
                ee.effectTag &= -1025;
                break;
              case 1028:
                ee.effectTag &= -1025, li(ee.alternate, ee);
                break;
              case 4:
                li(ee.alternate, ee);
                break;
              case 8:
                R = ee, xs(h, R, y), sp(R);
            }
            ee = ee.nextEffect;
          }
        } catch (Ee) {
          if (ee === null)
            throw Error(D(330));
          $i(ee, Ee), ee = ee.nextEffect;
        }
      while (ee !== null);
      if (Z = Rf, j = bf(), P = Z.focusedElem, y = Z.selectionRange, j !== P && P && P.ownerDocument && Cf(P.ownerDocument.documentElement, P)) {
        for (y !== null && Mo(P) && (j = y.start, Z = y.end, Z === void 0 && (Z = j), "selectionStart" in P ? (P.selectionStart = j, P.selectionEnd = Math.min(Z, P.value.length)) : (Z = (j = P.ownerDocument || document) && j.defaultView || window, Z.getSelection && (Z = Z.getSelection(), R = P.textContent.length, h = Math.min(y.start, R), y = y.end === void 0 ? h : Math.min(y.end, R), !Z.extend && h > y && (R = y, y = h, h = R), R = Sf(P, h), Y = Sf(P, y), R && Y && (Z.rangeCount !== 1 || Z.anchorNode !== R.node || Z.anchorOffset !== R.offset || Z.focusNode !== Y.node || Z.focusOffset !== Y.offset) && (j = j.createRange(), j.setStart(R.node, R.offset), Z.removeAllRanges(), h > y ? (Z.addRange(j), Z.extend(Y.node, Y.offset)) : (j.setEnd(Y.node, Y.offset), Z.addRange(j)))))), j = [], Z = P; Z = Z.parentNode; )
          Z.nodeType === 1 && j.push({
            element: Z,
            left: Z.scrollLeft,
            top: Z.scrollTop
          });
        for (typeof P.focus == "function" && P.focus(), P = 0; P < j.length; P++)
          Z = j[P], Z.element.scrollLeft = Z.left, Z.element.scrollTop = Z.top;
      }
      xi = !!Lo, Rf = Lo = null, n.current = l, ee = c;
      do
        try {
          for (P = n; ee !== null; ) {
            var ue = ee.effectTag;
            if (ue & 36 && lh(P, ee.alternate, ee), ue & 128) {
              j = void 0;
              var Ae = ee.ref;
              if (Ae !== null) {
                var pt = ee.stateNode;
                switch (ee.tag) {
                  case 5:
                    j = pt;
                    break;
                  default:
                    j = pt;
                }
                typeof Ae == "function" ? Ae(j) : Ae.current = j;
              }
            }
            ee = ee.nextEffect;
          }
        } catch (Ee) {
          if (ee === null)
            throw Error(D(330));
          $i(ee, Ee), ee = ee.nextEffect;
        }
      while (ee !== null);
      ee = null, jd(), me = v;
    } else
      n.current = l;
    if (Hu)
      Hu = !1, Wi = n, Al = r;
    else
      for (ee = c; ee !== null; )
        r = ee.nextEffect, ee.nextEffect = null, ee = r;
    if (r = n.firstPendingTime, r === 0 && (Zn = null), r === 1073741823 ? n === bc ? Ll++ : (Ll = 0, bc = n) : Ll = 0, typeof Os == "function" && Os(l.stateNode, s), zn(n), Qa)
      throw Qa = !1, n = Ul, Ul = null, n;
    return (me & Sc) !== Pt || Mn(), null;
  }
  u(sh, "Sj");
  function xp() {
    for (; ee !== null; ) {
      var n = ee.effectTag;
      (n & 256) !== 0 && ah(ee.alternate, ee), (n & 512) === 0 || Hu || (Hu = !0, Bd(97, function() {
        return zl(), null;
      })), ee = ee.nextEffect;
    }
  }
  u(xp, "Tj");
  function zl() {
    if (Al !== 90) {
      var n = 97 < Al ? 97 : Al;
      return Al = 90, Pe(n, fh);
    }
  }
  u(zl, "Dj");
  function fh() {
    if (Wi === null)
      return !1;
    var n = Wi;
    if (Wi = null, (me & (Kn | Fr)) !== Pt)
      throw Error(D(331));
    var r = me;
    for (me |= Fr, n = n.current.firstEffect; n !== null; ) {
      try {
        var l = n;
        if ((l.effectTag & 512) !== 0)
          switch (l.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              op(5, l), gc(5, l);
          }
      } catch (s) {
        if (n === null)
          throw Error(D(330));
        $i(n, s);
      }
      l = n.nextEffect, n.nextEffect = null, n = l;
    }
    return me = r, Mn(), !0;
  }
  u(fh, "Vj");
  function Rp(n, r, l) {
    r = mc(l, r), r = ja(n, r, 1073741823), zi(n, r), n = Ya(n, 1073741823), n !== null && zn(n);
  }
  u(Rp, "Wj");
  function $i(n, r) {
    if (n.tag === 3)
      Rp(n, n, r);
    else
      for (var l = n.return; l !== null; ) {
        if (l.tag === 3) {
          Rp(l, n, r);
          break;
        } else if (l.tag === 1) {
          var s = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (Zn === null || !Zn.has(s))) {
            n = mc(r, n), n = pp(l, n, 1073741823), zi(l, n), l = Ya(l, 1073741823), l !== null && zn(l);
            break;
          }
        }
        l = l.return;
      }
  }
  u($i, "Ei");
  function wp(n, r, l) {
    var s = n.pingCache;
    s !== null && s.delete(r), An === n && Ze === l ? yt === ws || yt === Fu && Ln === 1073741823 && Qe() - ji < _s ? $a(n, Ze) : Ba = !0 : Dp(n, l) && (r = n.lastPingedTime, r !== 0 && r < l || (n.lastPingedTime = l, zn(n)));
  }
  u(wp, "Oj");
  function ch(n, r) {
    var l = n.stateNode;
    l !== null && l.delete(r), r = 0, r === 0 && (r = Ht(), r = Bi(r, n, null)), n = Ya(n, r), n !== null && zn(n);
  }
  u(ch, "Vi");
  var _p;
  _p = /* @__PURE__ */ u(function(n, r, l) {
    var s = r.expirationTime;
    if (n !== null) {
      var c = r.pendingProps;
      if (n.memoizedProps !== c || Ot.current)
        pr = !0;
      else {
        if (s < l) {
          switch (pr = !1, r.tag) {
            case 3:
              Es(r), it();
              break;
            case 5:
              if (lc(r), r.mode & 4 && l !== 1 && c.hidden)
                return r.expirationTime = r.childExpirationTime = 1, null;
              break;
            case 1:
              Xt(r.type) && Sl(r);
              break;
            case 4:
              as(r, r.stateNode.containerInfo);
              break;
            case 10:
              s = r.memoizedProps.value, c = r.type._context, ft(Ui, c._currentValue), c._currentValue = s;
              break;
            case 13:
              if (r.memoizedState !== null)
                return s = r.child.childExpirationTime, s !== 0 && s >= l ? np(n, r, l) : (ft(lt, lt.current & 1), r = ai(n, r, l), r !== null ? r.sibling : null);
              ft(lt, lt.current & 1);
              break;
            case 19:
              if (s = r.childExpirationTime >= l, (n.effectTag & 64) !== 0) {
                if (s)
                  return ip(n, r, l);
                r.effectTag |= 64;
              }
              if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null), ft(lt, lt.current), !s)
                return null;
          }
          return ai(n, r, l);
        }
        pr = !1;
      }
    } else
      pr = !1;
    switch (r.expirationTime = 0, r.tag) {
      case 2:
        if (s = r.type, n !== null && (n.alternate = null, r.alternate = null, r.effectTag |= 2), n = r.pendingProps, c = Ni(r, zt.current), En(r, l), c = oc(
          null,
          r,
          s,
          n,
          c,
          l
        ), r.effectTag |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0) {
          if (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Xt(s)) {
            var v = !0;
            Sl(r);
          } else
            v = !1;
          r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, ns(r);
          var h = s.getDerivedStateFromProps;
          typeof h == "function" && wl(r, s, h, n), c.updater = Pi, r.stateNode = c, c._reactInternalFiber = r, _u(r, s, n, l), r = vc(null, r, s, !0, v, l);
        } else
          r.tag = 0, Un(null, r, c, l), r = r.child;
        return r;
      case 16:
        e: {
          if (c = r.elementType, n !== null && (n.alternate = null, r.alternate = null, r.effectTag |= 2), n = r.pendingProps, Ei(c), c._status !== 1)
            throw c._result;
          switch (c = c._result, r.type = c, v = r.tag = Wu(c), n = Tn(c, n), v) {
            case 0:
              r = Va(null, r, c, n, l);
              break e;
            case 1:
              r = tp(null, r, c, n, l);
              break e;
            case 11:
              r = Jd(null, r, c, n, l);
              break e;
            case 14:
              r = Au(null, r, c, Tn(c.type, n), s, l);
              break e;
          }
          throw Error(D(306, c, ""));
        }
        return r;
      case 0:
        return s = r.type, c = r.pendingProps, c = r.elementType === s ? c : Tn(s, c), Va(n, r, s, c, l);
      case 1:
        return s = r.type, c = r.pendingProps, c = r.elementType === s ? c : Tn(s, c), tp(n, r, s, c, l);
      case 3:
        if (Es(r), s = r.updateQueue, n === null || s === null)
          throw Error(D(282));
        if (s = r.pendingProps, c = r.memoizedState, c = c !== null ? c.element : null, rs(n, r), Rl(r, s, null, l), s = r.memoizedState.element, s === c)
          it(), r = ai(n, r, l);
        else {
          if ((c = r.stateNode.hydrate) && (Vi = hl(r.stateNode.containerInfo.firstChild), dr = r, c = Ha = !0), c)
            for (l = ac(r, null, s, l), r.child = l; l; )
              l.effectTag = l.effectTag & -3 | 1024, l = l.sibling;
          else
            Un(n, r, s, l), it();
          r = r.child;
        }
        return r;
      case 5:
        return lc(r), n === null && Uu(r), s = r.type, c = r.pendingProps, v = n !== null ? n.memoizedProps : null, h = c.children, ou(s, c) ? h = null : v !== null && ou(s, v) && (r.effectTag |= 16), ep(n, r), r.mode & 4 && l !== 1 && c.hidden ? (r.expirationTime = r.childExpirationTime = 1, r = null) : (Un(n, r, h, l), r = r.child), r;
      case 6:
        return n === null && Uu(r), null;
      case 13:
        return np(n, r, l);
      case 4:
        return as(r, r.stateNode.containerInfo), s = r.pendingProps, n === null ? r.child = _l(r, null, s, l) : Un(n, r, s, l), r.child;
      case 11:
        return s = r.type, c = r.pendingProps, c = r.elementType === s ? c : Tn(s, c), Jd(n, r, s, c, l);
      case 7:
        return Un(n, r, r.pendingProps, l), r.child;
      case 8:
        return Un(
          n,
          r,
          r.pendingProps.children,
          l
        ), r.child;
      case 12:
        return Un(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          s = r.type._context, c = r.pendingProps, h = r.memoizedProps, v = c.value;
          var y = r.type._context;
          if (ft(Ui, y._currentValue), y._currentValue = v, h !== null)
            if (y = h.value, v = On(y, v) ? 0 : (typeof s._calculateChangedBits == "function" ? s._calculateChangedBits(y, v) : 1073741823) | 0, v === 0) {
              if (h.children === c.children && !Ot.current) {
                r = ai(n, r, l);
                break e;
              }
            } else
              for (y = r.child, y !== null && (y.return = r); y !== null; ) {
                var w = y.dependencies;
                if (w !== null) {
                  h = y.child;
                  for (var R = w.firstContext; R !== null; ) {
                    if (R.context === s && (R.observedBits & v) !== 0) {
                      y.tag === 1 && (R = Li(l, null), R.tag = 2, zi(y, R)), y.expirationTime < l && (y.expirationTime = l), R = y.alternate, R !== null && R.expirationTime < l && (R.expirationTime = l), xl(y.return, l), w.expirationTime < l && (w.expirationTime = l);
                      break;
                    }
                    R = R.next;
                  }
                } else
                  h = y.tag === 10 && y.type === r.type ? null : y.child;
                if (h !== null)
                  h.return = y;
                else
                  for (h = y; h !== null; ) {
                    if (h === r) {
                      h = null;
                      break;
                    }
                    if (y = h.sibling, y !== null) {
                      y.return = h.return, h = y;
                      break;
                    }
                    h = h.return;
                  }
                y = h;
              }
          Un(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, v = r.pendingProps, s = v.children, En(r, l), c = Xn(c, v.unstable_observedBits), s = s(c), r.effectTag |= 1, Un(n, r, s, l), r.child;
      case 14:
        return c = r.type, v = Tn(c, r.pendingProps), v = Tn(c.type, v), Au(n, r, c, v, s, l);
      case 15:
        return Ts(n, r, r.type, r.pendingProps, s, l);
      case 17:
        return s = r.type, c = r.pendingProps, c = r.elementType === s ? c : Tn(s, c), n !== null && (n.alternate = null, r.alternate = null, r.effectTag |= 2), r.tag = 1, Xt(s) ? (n = !0, Sl(r)) : n = !1, En(r, l), Yd(r, s, c), _u(r, s, c, l), vc(
          null,
          r,
          s,
          !0,
          n,
          l
        );
      case 19:
        return ip(n, r, l);
    }
    throw Error(D(156, r.tag));
  }, "Rj");
  var Os = null, ju = null;
  function dh(n) {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
      return !1;
    var r = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (r.isDisabled || !r.supportsFiber)
      return !0;
    try {
      var l = r.inject(n);
      Os = /* @__PURE__ */ u(function(s) {
        try {
          r.onCommitFiberRoot(l, s, void 0, (s.current.effectTag & 64) === 64);
        } catch {
        }
      }, "Uj"), ju = /* @__PURE__ */ u(function(s) {
        try {
          r.onCommitFiberUnmount(l, s);
        } catch {
        }
      }, "Li");
    } catch {
    }
    return !0;
  }
  u(dh, "Yj");
  function ph(n, r, l, s) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null;
  }
  u(ph, "Zj");
  function Vr(n, r, l, s) {
    return new ph(n, r, l, s);
  }
  u(Vr, "Sh");
  function _c(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  u(_c, "bi");
  function Wu(n) {
    if (typeof n == "function")
      return _c(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === ql)
        return 11;
      if (n === fa)
        return 14;
    }
    return 2;
  }
  u(Wu, "Xj");
  function mr(n, r) {
    var l = n.alternate;
    return l === null ? (l = Vr(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.effectTag = 0, l.nextEffect = null, l.firstEffect = null, l.lastEffect = null), l.childExpirationTime = n.childExpirationTime, l.expirationTime = n.expirationTime, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : {
      expirationTime: r.expirationTime,
      firstContext: r.firstContext,
      responders: r.responders
    }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  u(mr, "Sg");
  function Ns(n, r, l, s, c, v) {
    var h = 2;
    if (s = n, typeof n == "function")
      _c(n) && (h = 1);
    else if (typeof n == "string")
      h = 5;
    else
      e:
        switch (n) {
          case _r:
            return ui(l.children, c, v, r);
          case _n:
            h = 8, c |= 7;
            break;
          case sa:
            h = 8, c |= 1;
            break;
          case gi:
            return n = Vr(12, l, r, c | 8), n.elementType = gi, n.type = gi, n.expirationTime = v, n;
          case Ti:
            return n = Vr(13, l, r, c), n.type = Ti, n.elementType = Ti, n.expirationTime = v, n;
          case nn:
            return n = Vr(19, l, r, c), n.elementType = nn, n.expirationTime = v, n;
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case kr:
                  h = 10;
                  break e;
                case il:
                  h = 9;
                  break e;
                case ql:
                  h = 11;
                  break e;
                case fa:
                  h = 14;
                  break e;
                case Xl:
                  h = 16, s = null;
                  break e;
                case Kl:
                  h = 22;
                  break e;
              }
            throw Error(D(130, n == null ? n : typeof n, ""));
        }
    return r = Vr(h, l, r, c), r.elementType = n, r.type = s, r.expirationTime = v, r;
  }
  u(Ns, "Ug");
  function ui(n, r, l, s) {
    return n = Vr(7, n, s, r), n.expirationTime = l, n;
  }
  u(ui, "Wg");
  function kc(n, r, l) {
    return n = Vr(6, n, null, r), n.expirationTime = l, n;
  }
  u(kc, "Tg");
  function Dc(n, r, l) {
    return r = Vr(4, n.children !== null ? n.children : [], n.key, r), r.expirationTime = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  u(Dc, "Vg");
  function kp(n, r, l) {
    this.tag = r, this.current = null, this.containerInfo = n, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = l, this.callbackNode = null, this.callbackPriority = 90, this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0;
  }
  u(kp, "ak");
  function Dp(n, r) {
    var l = n.firstSuspendedTime;
    return n = n.lastSuspendedTime, l !== 0 && l >= r && n <= r;
  }
  u(Dp, "Aj");
  function Ga(n, r) {
    var l = n.firstSuspendedTime, s = n.lastSuspendedTime;
    l < r && (n.firstSuspendedTime = r), (s > r || l === 0) && (n.lastSuspendedTime = r), r <= n.lastPingedTime && (n.lastPingedTime = 0), r <= n.lastExpiredTime && (n.lastExpiredTime = 0);
  }
  u(Ga, "xi");
  function Oc(n, r) {
    r > n.firstPendingTime && (n.firstPendingTime = r);
    var l = n.firstSuspendedTime;
    l !== 0 && (r >= l ? n.firstSuspendedTime = n.lastSuspendedTime = n.nextKnownPendingLevel = 0 : r >= n.lastSuspendedTime && (n.lastSuspendedTime = r + 1), r > n.nextKnownPendingLevel && (n.nextKnownPendingLevel = r));
  }
  u(Oc, "yi");
  function Gi(n, r) {
    var l = n.lastExpiredTime;
    (l === 0 || l > r) && (n.lastExpiredTime = r);
  }
  u(Gi, "Cj");
  function Bu(n, r, l, s) {
    var c = r.current, v = Ht(), h = wu.suspense;
    v = Bi(v, c, h);
    e:
      if (l) {
        l = l._reactInternalFiber;
        t: {
          if (bt(l) !== l || l.tag !== 1)
            throw Error(D(170));
          var y = l;
          do {
            switch (y.tag) {
              case 3:
                y = y.stateNode.context;
                break t;
              case 1:
                if (Xt(y.type)) {
                  y = y.stateNode.__reactInternalMemoizedMergedChildContext;
                  break t;
                }
            }
            y = y.return;
          } while (y !== null);
          throw Error(D(171));
        }
        if (l.tag === 1) {
          var w = l.type;
          if (Xt(w)) {
            l = Oa(l, w, y);
            break e;
          }
        }
        l = y;
      } else
        l = Lr;
    return r.context === null ? r.context = l : r.pendingContext = l, r = Li(v, h), r.payload = { element: n }, s = s === void 0 ? null : s, s !== null && (r.callback = s), zi(c, r), Qi(c, v), v;
  }
  u(Bu, "bk");
  function Ms(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  u(Ms, "ck");
  function Us(n, r) {
    n = n.memoizedState, n !== null && n.dehydrated !== null && n.retryTime < r && (n.retryTime = r);
  }
  u(Us, "dk");
  function Qu(n, r) {
    Us(n, r), (n = n.alternate) && Us(n, r);
  }
  u(Qu, "ek");
  function Nc(n, r, l) {
    l = l != null && l.hydrate === !0;
    var s = new kp(n, r, l), c = Vr(3, null, null, r === 2 ? 7 : r === 1 ? 3 : 0);
    s.current = c, c.stateNode = s, ns(c), n[yl] = s.current, l && r !== 0 && _o(n, n.nodeType === 9 ? n : n.ownerDocument), this._internalRoot = s;
  }
  u(Nc, "fk"), Nc.prototype.render = function(n) {
    Bu(n, this._internalRoot, null, null);
  }, Nc.prototype.unmount = function() {
    var n = this._internalRoot, r = n.containerInfo;
    Bu(null, n, null, function() {
      r[yl] = null;
    });
  };
  function qa(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  u(qa, "gk");
  function Mc(n, r) {
    if (r || (r = n ? n.nodeType === 9 ? n.documentElement : n.firstChild : null, r = !(!r || r.nodeType !== 1 || !r.hasAttribute("data-reactroot"))), !r)
      for (var l; l = n.lastChild; )
        n.removeChild(l);
    return new Nc(n, 0, r ? { hydrate: !0 } : void 0);
  }
  u(Mc, "hk");
  function Yu(n, r, l, s, c) {
    var v = l._reactRootContainer;
    if (v) {
      var h = v._internalRoot;
      if (typeof c == "function") {
        var y = c;
        c = /* @__PURE__ */ u(function() {
          var R = Ms(h);
          y.call(R);
        }, "e");
      }
      Bu(r, h, n, c);
    } else {
      if (v = l._reactRootContainer = Mc(l, s), h = v._internalRoot, typeof c == "function") {
        var w = c;
        c = /* @__PURE__ */ u(function() {
          var R = Ms(h);
          w.call(R);
        }, "e");
      }
      gp(function() {
        Bu(r, h, n, c);
      });
    }
    return Ms(h);
  }
  u(Yu, "ik");
  function vh(n, r, l) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: yi, key: s == null ? null : "" + s, children: n, containerInfo: r, implementation: l };
  }
  u(vh, "jk"), Ro = /* @__PURE__ */ u(function(n) {
    if (n.tag === 13) {
      var r = Ke(Ht(), 150, 100);
      Qi(n, r), Qu(n, r);
    }
  }, "wc"), hf = /* @__PURE__ */ u(function(n) {
    n.tag === 13 && (Qi(n, 3), Qu(n, 3));
  }, "xc"), an = /* @__PURE__ */ u(function(n) {
    if (n.tag === 13) {
      var r = Ht();
      r = Bi(r, n, null), Qi(n, r), Qu(n, r);
    }
  }, "yc"), kt = /* @__PURE__ */ u(function(n, r, l) {
    switch (r) {
      case "input":
        if (Xe(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var s = l[r];
            if (s !== n && s.form === n.form) {
              var c = fu(s);
              if (!c)
                throw Error(D(90));
              ll(s), Xe(s, c);
            }
          }
        }
        break;
      case "textarea":
        So(n, l);
        break;
      case "select":
        r = l.value, r != null && kn(n, !!l.multiple, r, !1);
    }
  }, "za"), At = yp, se = /* @__PURE__ */ u(function(n, r, l, s, c) {
    var v = me;
    me |= 4;
    try {
      return Pe(98, n.bind(null, r, l, s, c));
    } finally {
      me = v, me === Pt && Mn();
    }
  }, "Ga"), Ce = /* @__PURE__ */ u(function() {
    (me & (1 | Kn | Fr)) === Pt && (oh(), zl());
  }, "Ha"), ae = /* @__PURE__ */ u(function(n, r) {
    var l = me;
    me |= 2;
    try {
      return n(r);
    } finally {
      me = l, me === Pt && Mn();
    }
  }, "Ia");
  function Op(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!qa(r))
      throw Error(D(200));
    return vh(n, r, null, l);
  }
  u(Op, "kk");
  var jy = { Events: [su, Yn, fu, We, le, Ca, function(n) {
    Dt(n, kf);
  }, Re, re, ln, fl, zl, { current: !1 }] };
  return function(n) {
    var r = n.findFiberByHostInstance;
    return dh(ie({}, n, { overrideHookState: null, overrideProps: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Lt.ReactCurrentDispatcher, findHostInstanceByFiber: function(l) {
      return l = xo(l), l === null ? null : l.stateNode;
    }, findFiberByHostInstance: function(l) {
      return r ? r(l) : null;
    }, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null }));
  }({
    findFiberByHostInstance: gl,
    bundleType: 0,
    version: "16.14.0",
    rendererPackageName: "react-dom"
  }), xr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jy, xr.createPortal = Op, xr.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternalFiber;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(D(188)) : Error(D(268, Object.keys(n)));
    return n = xo(r), n = n === null ? null : n.stateNode, n;
  }, xr.flushSync = function(n, r) {
    if ((me & (Kn | Fr)) !== Pt)
      throw Error(D(187));
    var l = me;
    me |= 1;
    try {
      return Pe(99, n.bind(null, r));
    } finally {
      me = l, Mn();
    }
  }, xr.hydrate = function(n, r, l) {
    if (!qa(r))
      throw Error(D(200));
    return Yu(null, n, r, !0, l);
  }, xr.render = function(n, r, l) {
    if (!qa(r))
      throw Error(D(200));
    return Yu(null, n, r, !1, l);
  }, xr.unmountComponentAtNode = function(n) {
    if (!qa(n))
      throw Error(D(40));
    return n._reactRootContainer ? (gp(function() {
      Yu(null, null, n, !1, function() {
        n._reactRootContainer = null, n[yl] = null;
      });
    }), !0) : !1;
  }, xr.unstable_batchedUpdates = yp, xr.unstable_createPortal = function(n, r) {
    return Op(n, r, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
  }, xr.unstable_renderSubtreeIntoContainer = function(n, r, l, s) {
    if (!qa(l))
      throw Error(D(200));
    if (n == null || n._reactInternalFiber === void 0)
      throw Error(D(38));
    return Yu(n, r, l, !1, s);
  }, xr.version = "16.14.0", xr;
}
u(xx, "requireReactDom_production_min");
var Rr = {}, Vy = { exports: {} }, hi = {};
/** @license React v0.19.1
 * scheduler-tracing.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vS;
function Rx() {
  if (vS)
    return hi;
  vS = 1;
  var M = 0;
  return hi.__interactionsRef = null, hi.__subscriberRef = null, hi.unstable_clear = function(ie) {
    return ie();
  }, hi.unstable_getCurrent = function() {
    return null;
  }, hi.unstable_getThreadID = function() {
    return ++M;
  }, hi.unstable_subscribe = function() {
  }, hi.unstable_trace = function(ie, fe, D) {
    return D();
  }, hi.unstable_unsubscribe = function() {
  }, hi.unstable_wrap = function(ie) {
    return ie;
  }, hi;
}
u(Rx, "requireSchedulerTracing_production_min");
var Iy = {};
/** @license React v0.19.1
 * scheduler-tracing.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hS;
function wx() {
  return hS || (hS = 1, function(M) {
    process.env.NODE_ENV !== "production" && function() {
      var ie = 0, fe = 0, D = 0;
      M.__interactionsRef = null, M.__subscriberRef = null, M.__interactionsRef = {
        current: /* @__PURE__ */ new Set()
      }, M.__subscriberRef = {
        current: null
      };
      function at(Se) {
        var _e = M.__interactionsRef.current;
        M.__interactionsRef.current = /* @__PURE__ */ new Set();
        try {
          return Se();
        } finally {
          M.__interactionsRef.current = _e;
        }
      }
      u(at, "unstable_clear");
      function we() {
        return M.__interactionsRef.current;
      }
      u(we, "unstable_getCurrent");
      function gt() {
        return ++D;
      }
      u(gt, "unstable_getThreadID");
      function T(Se, _e, he) {
        var le = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ie, ye = {
          __count: 1,
          id: fe++,
          name: Se,
          timestamp: _e
        }, et = M.__interactionsRef.current, We = new Set(et);
        We.add(ye), M.__interactionsRef.current = We;
        var Ne = M.__subscriberRef.current, kt;
        try {
          Ne !== null && Ne.onInteractionTraced(ye);
        } finally {
          try {
            Ne !== null && Ne.onWorkStarted(We, le);
          } finally {
            try {
              kt = he();
            } finally {
              M.__interactionsRef.current = et;
              try {
                Ne !== null && Ne.onWorkStopped(We, le);
              } finally {
                ye.__count--, Ne !== null && ye.__count === 0 && Ne.onInteractionScheduledWorkCompleted(ye);
              }
            }
          }
        }
        return kt;
      }
      u(T, "unstable_trace");
      function Jt(Se) {
        var _e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ie, he = M.__interactionsRef.current, le = M.__subscriberRef.current;
        le !== null && le.onWorkScheduled(he, _e), he.forEach(function(We) {
          We.__count++;
        });
        var ye = !1;
        function et() {
          var We = M.__interactionsRef.current;
          M.__interactionsRef.current = he, le = M.__subscriberRef.current;
          try {
            var Ne;
            try {
              le !== null && le.onWorkStarted(he, _e);
            } finally {
              try {
                Ne = Se.apply(void 0, arguments);
              } finally {
                M.__interactionsRef.current = We, le !== null && le.onWorkStopped(he, _e);
              }
            }
            return Ne;
          } finally {
            ye || (ye = !0, he.forEach(function(kt) {
              kt.__count--, le !== null && kt.__count === 0 && le.onInteractionScheduledWorkCompleted(kt);
            }));
          }
        }
        return u(et, "wrapped"), et.cancel = /* @__PURE__ */ u(function() {
          le = M.__subscriberRef.current;
          try {
            le !== null && le.onWorkCanceled(he, _e);
          } finally {
            he.forEach(function(Ne) {
              Ne.__count--, le && Ne.__count === 0 && le.onInteractionScheduledWorkCompleted(Ne);
            });
          }
        }, "cancel"), et;
      }
      u(Jt, "unstable_wrap");
      var _t = null;
      _t = /* @__PURE__ */ new Set();
      function jn(Se) {
        _t.add(Se), _t.size === 1 && (M.__subscriberRef.current = {
          onInteractionScheduledWorkCompleted: dn,
          onInteractionTraced: er,
          onWorkCanceled: tn,
          onWorkScheduled: tr,
          onWorkStarted: nr,
          onWorkStopped: en
        });
      }
      u(jn, "unstable_subscribe");
      function mi(Se) {
        _t.delete(Se), _t.size === 0 && (M.__subscriberRef.current = null);
      }
      u(mi, "unstable_unsubscribe");
      function er(Se) {
        var _e = !1, he = null;
        if (_t.forEach(function(le) {
          try {
            le.onInteractionTraced(Se);
          } catch (ye) {
            _e || (_e = !0, he = ye);
          }
        }), _e)
          throw he;
      }
      u(er, "onInteractionTraced");
      function dn(Se) {
        var _e = !1, he = null;
        if (_t.forEach(function(le) {
          try {
            le.onInteractionScheduledWorkCompleted(Se);
          } catch (ye) {
            _e || (_e = !0, he = ye);
          }
        }), _e)
          throw he;
      }
      u(dn, "onInteractionScheduledWorkCompleted");
      function tr(Se, _e) {
        var he = !1, le = null;
        if (_t.forEach(function(ye) {
          try {
            ye.onWorkScheduled(Se, _e);
          } catch (et) {
            he || (he = !0, le = et);
          }
        }), he)
          throw le;
      }
      u(tr, "onWorkScheduled");
      function nr(Se, _e) {
        var he = !1, le = null;
        if (_t.forEach(function(ye) {
          try {
            ye.onWorkStarted(Se, _e);
          } catch (et) {
            he || (he = !0, le = et);
          }
        }), he)
          throw le;
      }
      u(nr, "onWorkStarted");
      function en(Se, _e) {
        var he = !1, le = null;
        if (_t.forEach(function(ye) {
          try {
            ye.onWorkStopped(Se, _e);
          } catch (et) {
            he || (he = !0, le = et);
          }
        }), he)
          throw le;
      }
      u(en, "onWorkStopped");
      function tn(Se, _e) {
        var he = !1, le = null;
        if (_t.forEach(function(ye) {
          try {
            ye.onWorkCanceled(Se, _e);
          } catch (et) {
            he || (he = !0, le = et);
          }
        }), he)
          throw le;
      }
      u(tn, "onWorkCanceled"), M.unstable_clear = at, M.unstable_getCurrent = we, M.unstable_getThreadID = gt, M.unstable_subscribe = jn, M.unstable_trace = T, M.unstable_unsubscribe = mi, M.unstable_wrap = Jt;
    }();
  }(Iy)), Iy;
}
u(wx, "requireSchedulerTracing_development");
var mS;
function _x() {
  return mS || (mS = 1, function(M) {
    process.env.NODE_ENV === "production" ? M.exports = Rx() : M.exports = wx();
  }(Vy)), Vy.exports;
}
u(_x, "requireTracing");
/** @license React v16.14.0
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yS;
function kx() {
  return yS || (yS = 1, process.env.NODE_ENV !== "production" && function() {
    var M = TS.exports, ie = gS(), fe = SS(), D = Ex(), at = _x(), we = M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    we.hasOwnProperty("ReactCurrentDispatcher") || (we.ReactCurrentDispatcher = {
      current: null
    }), we.hasOwnProperty("ReactCurrentBatchConfig") || (we.ReactCurrentBatchConfig = {
      suspense: null
    });
    function gt(e) {
      {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          i[a - 1] = arguments[a];
        Jt("warn", e, i);
      }
    }
    u(gt, "warn");
    function T(e) {
      {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          i[a - 1] = arguments[a];
        Jt("error", e, i);
      }
    }
    u(T, "error");
    function Jt(e, t, i) {
      {
        var a = i.length > 0 && typeof i[i.length - 1] == "string" && i[i.length - 1].indexOf(`
    in`) === 0;
        if (!a) {
          var o = we.ReactDebugCurrentFrame, f = o.getStackAddendum();
          f !== "" && (t += "%s", i = i.concat([f]));
        }
        var d = i.map(function(g) {
          return "" + g;
        });
        d.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, d);
        try {
          var p = 0, m = "Warning: " + t.replace(/%s/g, function() {
            return i[p++];
          });
          throw new Error(m);
        } catch {
        }
      }
    }
    if (u(Jt, "printWarning"), !M)
      throw Error("ReactDOM was loaded before React. Make sure you load the React package before loading ReactDOM.");
    var _t = /* @__PURE__ */ u(function(e, t, i, a, o, f, d, p, m) {
      var g = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(i, g);
      } catch (E) {
        this.onError(E);
      }
    }, "invokeGuardedCallbackImpl");
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var jn = document.createElement("react"), mi = /* @__PURE__ */ u(function(e, t, i, a, o, f, d, p, m) {
        if (!(typeof document < "u"))
          throw Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), E = !0, O = window.event, b = Object.getOwnPropertyDescriptor(window, "event"), N = Array.prototype.slice.call(arguments, 3);
        function V() {
          jn.removeEventListener(Oe, V, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = O), t.apply(i, N), E = !1;
        }
        u(V, "callCallback");
        var W, oe = !1, de = !1;
        function $e(nt) {
          if (W = nt.error, oe = !0, W === null && nt.colno === 0 && nt.lineno === 0 && (de = !0), nt.defaultPrevented && W != null && typeof W == "object")
            try {
              W._suppressLogging = !0;
            } catch {
            }
        }
        u($e, "handleWindowError");
        var Oe = "react-" + (e || "invokeguardedcallback");
        window.addEventListener("error", $e), jn.addEventListener(Oe, V, !1), g.initEvent(Oe, !1, !1), jn.dispatchEvent(g), b && Object.defineProperty(window, "event", b), E && (oe ? de && (W = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://fb.me/react-crossorigin-error for more information.")) : W = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(W)), window.removeEventListener("error", $e);
      }, "invokeGuardedCallbackDev");
      _t = mi;
    }
    var er = _t, dn = !1, tr = null, nr = !1, en = null, tn = {
      onError: function(e) {
        dn = !0, tr = e;
      }
    };
    function Se(e, t, i, a, o, f, d, p, m) {
      dn = !1, tr = null, er.apply(tn, arguments);
    }
    u(Se, "invokeGuardedCallback");
    function _e(e, t, i, a, o, f, d, p, m) {
      if (Se.apply(this, arguments), dn) {
        var g = ye();
        nr || (nr = !0, en = g);
      }
    }
    u(_e, "invokeGuardedCallbackAndCatchFirstError");
    function he() {
      if (nr) {
        var e = en;
        throw nr = !1, en = null, e;
      }
    }
    u(he, "rethrowCaughtError");
    function le() {
      return dn;
    }
    u(le, "hasCaughtError");
    function ye() {
      if (dn) {
        var e = tr;
        return dn = !1, tr = null, e;
      } else
        throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    u(ye, "clearCaughtError");
    var et = null, We = null, Ne = null;
    function kt(e, t, i) {
      et = e, We = t, Ne = i, (!Ne || !We) && T("EventPluginUtils.setComponentTree(...): Injected module is missing getNodeFromInstance or getInstanceFromNode.");
    }
    u(kt, "setComponentTree");
    var st;
    st = /* @__PURE__ */ u(function(e) {
      var t = e._dispatchListeners, i = e._dispatchInstances, a = Array.isArray(t), o = a ? t.length : t ? 1 : 0, f = Array.isArray(i), d = f ? i.length : i ? 1 : 0;
      (f !== a || d !== o) && T("EventPluginUtils: Invalid `event`.");
    }, "validateEventDispatches");
    function Be(e, t, i) {
      var a = e.type || "unknown-event";
      e.currentTarget = Ne(i), _e(a, t, void 0, e), e.currentTarget = null;
    }
    u(Be, "executeDispatch");
    function $r(e) {
      var t = e._dispatchListeners, i = e._dispatchInstances;
      if (st(e), Array.isArray(t))
        for (var a = 0; a < t.length && !e.isPropagationStopped(); a++)
          Be(e, t[a], i[a]);
      else
        t && Be(e, t, i);
      e._dispatchListeners = null, e._dispatchInstances = null;
    }
    u($r, "executeDispatchesInOrder");
    var Re = 0, re = 1, At = 2, se = 3, Ce = 4, ae = 5, ge = 6, It = 7, pn = 8, wn = 9, z = 10, B = 11, pe = 12, K = 13, ke = 14, Ye = 15, vn = 16, Le = 17, qe = 18, hn = 19, mn = 20, Lt = 21, rt = 22, wr = null, Tt = {};
    function oa() {
      if (!!wr)
        for (var e in Tt) {
          var t = Tt[e], i = wr.indexOf(e);
          if (!(i > -1))
            throw Error("EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `" + e + "`.");
          if (!sa[i]) {
            if (!t.extractEvents)
              throw Error("EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `" + e + "` does not.");
            sa[i] = t;
            var a = t.eventTypes;
            for (var o in a)
              if (!yi(a[o], t, o))
                throw Error("EventPluginRegistry: Failed to publish event `" + o + "` for plugin `" + e + "`.");
          }
        }
    }
    u(oa, "recomputePluginOrdering");
    function yi(e, t, i) {
      if (gi.hasOwnProperty(i))
        throw Error("EventPluginRegistry: More than one plugin attempted to publish the same event name, `" + i + "`.");
      gi[i] = e;
      var a = e.phasedRegistrationNames;
      if (a) {
        for (var o in a)
          if (a.hasOwnProperty(o)) {
            var f = a[o];
            _r(f, t, i);
          }
        return !0;
      } else if (e.registrationName)
        return _r(e.registrationName, t, i), !0;
      return !1;
    }
    u(yi, "publishEventForPlugin");
    function _r(e, t, i) {
      if (kr[e])
        throw Error("EventPluginRegistry: More than one plugin attempted to publish the same registration name, `" + e + "`.");
      kr[e] = t, il[e] = t.eventTypes[i].dependencies;
      {
        var a = e.toLowerCase();
        _n[a] = e, e === "onDoubleClick" && (_n.ondblclick = e);
      }
    }
    u(_r, "publishRegistrationName");
    var sa = [], gi = {}, kr = {}, il = {}, _n = {};
    function ql(e) {
      if (wr)
        throw Error("EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.");
      wr = Array.prototype.slice.call(e), oa();
    }
    u(ql, "injectEventPluginOrder");
    function Ti(e) {
      var t = !1;
      for (var i in e)
        if (!!e.hasOwnProperty(i)) {
          var a = e[i];
          if (!Tt.hasOwnProperty(i) || Tt[i] !== a) {
            if (Tt[i])
              throw Error("EventPluginRegistry: Cannot inject two different event plugins using the same name, `" + i + "`.");
            Tt[i] = a, t = !0;
          }
        }
      t && oa();
    }
    u(Ti, "injectEventPluginsByName");
    var nn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", fa = 1, Xl = 1 << 5, Kl = 1 << 6, al = null, Wn = null, Ei = null;
    function Bn(e) {
      var t = We(e);
      if (!!t) {
        if (typeof al != "function")
          throw Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var i = t.stateNode;
        if (i) {
          var a = et(i);
          al(t.stateNode, t.type, a);
        }
      }
    }
    u(Bn, "restoreStateOfTarget");
    function Zl(e) {
      al = e;
    }
    u(Zl, "setRestoreImplementation");
    function rr(e) {
      Wn ? Ei ? Ei.push(e) : Ei = [e] : Wn = e;
    }
    u(rr, "enqueueStateRestore");
    function To() {
      return Wn !== null || Ei !== null;
    }
    u(To, "needsStateRestore");
    function Eo() {
      if (!!Wn) {
        var e = Wn, t = Ei;
        if (Wn = null, Ei = null, Bn(e), t)
          for (var i = 0; i < t.length; i++)
            Bn(t[i]);
      }
    }
    u(Eo, "restoreStateIfNeeded");
    var ca = !0, ll = !1, jt = !1, ir = !1, ul = /* @__PURE__ */ u(function(e, t) {
      return e(t);
    }, "batchedUpdatesImpl"), Xe = /* @__PURE__ */ u(function(e, t, i, a, o) {
      return e(t, i, a, o);
    }, "discreteUpdatesImpl"), Et = /* @__PURE__ */ u(function() {
    }, "flushDiscreteUpdatesImpl"), Gr = ul, $t = !1, ar = !1;
    function kn() {
      var e = To();
      e && (Et(), Eo());
    }
    u(kn, "finishEventHandler");
    function da(e, t) {
      if ($t)
        return e(t);
      $t = !0;
      try {
        return ul(e, t);
      } finally {
        $t = !1, kn();
      }
    }
    u(da, "batchedUpdates");
    function ol(e, t, i) {
      if (ar)
        return e(t, i);
      ar = !0;
      try {
        return Gr(e, t, i);
      } finally {
        ar = !1, kn();
      }
    }
    u(ol, "batchedEventUpdates");
    function So(e, t, i, a, o) {
      var f = $t;
      $t = !0;
      try {
        return Xe(e, t, i, a, o);
      } finally {
        $t = f, $t || kn();
      }
    }
    u(So, "discreteUpdates");
    function Co(e) {
      !$t && !ll && Et();
    }
    u(Co, "flushDiscreteUpdatesIfNeeded");
    function bo(e, t, i, a) {
      ul = e, Xe = t, Et = i, Gr = a;
    }
    u(bo, "setBatchingImplementation");
    var sl = 0, pa = 1, Si = 2, va = 0, Dn = 1, Ci = 2, rn = 3, qr = 4, Jl = 5, ha = 6, eu = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", A = eu + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", F = "data-reactroot", ce = new RegExp("^[" + eu + "][" + A + "]*$"), Ue = Object.prototype.hasOwnProperty, ht = {}, mt = {};
    function bt(e) {
      return Ue.call(mt, e) ? !0 : Ue.call(ht, e) ? !1 : ce.test(e) ? (mt[e] = !0, !0) : (ht[e] = !0, T("Invalid attribute name: `%s`", e), !1);
    }
    u(bt, "isAttributeNameSafe");
    function Qn(e, t, i) {
      return t !== null ? t.type === va : i ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    u(Qn, "shouldIgnoreAttribute");
    function St(e, t, i, a) {
      if (i !== null && i.type === va)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (a)
            return !1;
          if (i !== null)
            return !i.acceptsBooleans;
          var o = e.toLowerCase().slice(0, 5);
          return o !== "data-" && o !== "aria-";
        }
        default:
          return !1;
      }
    }
    u(St, "shouldRemoveAttributeWithWarning");
    function tu(e, t, i, a) {
      if (t === null || typeof t > "u" || St(e, t, i, a))
        return !0;
      if (a)
        return !1;
      if (i !== null)
        switch (i.type) {
          case rn:
            return !t;
          case qr:
            return t === !1;
          case Jl:
            return isNaN(t);
          case ha:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    u(tu, "shouldRemoveAttribute");
    function xo(e) {
      return Dt.hasOwnProperty(e) ? Dt[e] : null;
    }
    u(xo, "getPropertyInfo");
    function xt(e, t, i, a, o, f) {
      this.acceptsBooleans = t === Ci || t === rn || t === qr, this.attributeName = a, this.attributeNamespace = o, this.mustUseProperty = i, this.propertyName = e, this.type = t, this.sanitizeURL = f;
    }
    u(xt, "PropertyInfoRecord");
    var Dt = {}, nu = [
      "children",
      "dangerouslySetInnerHTML",
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    nu.forEach(function(e) {
      Dt[e] = new xt(
        e,
        va,
        !1,
        e,
        null,
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], i = e[1];
      Dt[t] = new xt(
        t,
        Dn,
        !1,
        i,
        null,
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Dt[e] = new xt(
        e,
        Ci,
        !1,
        e.toLowerCase(),
        null,
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Dt[e] = new xt(
        e,
        Ci,
        !1,
        e,
        null,
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      "itemScope"
    ].forEach(function(e) {
      Dt[e] = new xt(
        e,
        rn,
        !1,
        e.toLowerCase(),
        null,
        !1
      );
    }), [
      "checked",
      "multiple",
      "muted",
      "selected"
    ].forEach(function(e) {
      Dt[e] = new xt(
        e,
        rn,
        !0,
        e,
        null,
        !1
      );
    }), [
      "capture",
      "download"
    ].forEach(function(e) {
      Dt[e] = new xt(
        e,
        qr,
        !1,
        e,
        null,
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
    ].forEach(function(e) {
      Dt[e] = new xt(
        e,
        ha,
        !1,
        e,
        null,
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Dt[e] = new xt(
        e,
        Jl,
        !1,
        e.toLowerCase(),
        null,
        !1
      );
    });
    var cf = /[\-\:]([a-z])/g, fl = /* @__PURE__ */ u(function(e) {
      return e[1].toUpperCase();
    }, "capitalize");
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
    ].forEach(function(e) {
      var t = e.replace(cf, fl);
      Dt[t] = new xt(
        t,
        Dn,
        !1,
        e,
        null,
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
    ].forEach(function(e) {
      var t = e.replace(cf, fl);
      Dt[t] = new xt(
        t,
        Dn,
        !1,
        e,
        "http://www.w3.org/1999/xlink",
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
    ].forEach(function(e) {
      var t = e.replace(cf, fl);
      Dt[t] = new xt(
        t,
        Dn,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Dt[e] = new xt(
        e,
        Dn,
        !1,
        e.toLowerCase(),
        null,
        !1
      );
    });
    var df = "xlinkHref";
    Dt[df] = new xt(
      "xlinkHref",
      Dn,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Dt[e] = new xt(
        e,
        Dn,
        !1,
        e.toLowerCase(),
        null,
        !0
      );
    }), we.ReactDebugCurrentFrame;
    var Cd = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ru = !1;
    function pf(e) {
      !ru && Cd.test(e) && (ru = !0, T("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    u(pf, "sanitizeURL");
    function bd(e, t, i, a) {
      if (a.mustUseProperty) {
        var o = a.propertyName;
        return e[o];
      } else {
        a.sanitizeURL && pf("" + i);
        var f = a.attributeName, d = null;
        if (a.type === qr) {
          if (e.hasAttribute(f)) {
            var p = e.getAttribute(f);
            return p === "" ? !0 : tu(t, i, a, !1) ? p : p === "" + i ? i : p;
          }
        } else if (e.hasAttribute(f)) {
          if (tu(t, i, a, !1))
            return e.getAttribute(f);
          if (a.type === rn)
            return i;
          d = e.getAttribute(f);
        }
        return tu(t, i, a, !1) ? d === null ? i : d : d === "" + i ? i : d;
      }
    }
    u(bd, "getValueForProperty");
    function vf(e, t, i) {
      {
        if (!bt(t))
          return;
        if (!e.hasAttribute(t))
          return i === void 0 ? void 0 : null;
        var a = e.getAttribute(t);
        return a === "" + i ? i : a;
      }
    }
    u(vf, "getValueForAttribute");
    function iu(e, t, i, a) {
      var o = xo(t);
      if (!Qn(t, o, a)) {
        if (tu(t, i, o, a) && (i = null), a || o === null) {
          if (bt(t)) {
            var f = t;
            i === null ? e.removeAttribute(f) : e.setAttribute(f, "" + i);
          }
          return;
        }
        var d = o.mustUseProperty;
        if (d) {
          var p = o.propertyName;
          if (i === null) {
            var m = o.type;
            e[p] = m === rn ? !1 : "";
          } else
            e[p] = i;
          return;
        }
        var g = o.attributeName, E = o.attributeNamespace;
        if (i === null)
          e.removeAttribute(g);
        else {
          var O = o.type, b;
          O === rn || O === qr && i === !0 ? b = "" : (b = "" + i, o.sanitizeURL && pf(b.toString())), E ? e.setAttributeNS(E, g, b) : e.setAttribute(g, b);
        }
      }
    }
    u(iu, "setValueForProperty");
    var Ro = /^(.*)[\\\/]/;
    function hf(e, t, i) {
      var a = "";
      if (t) {
        var o = t.fileName, f = o.replace(Ro, "");
        if (/^index\./.test(f)) {
          var d = o.match(Ro);
          if (d) {
            var p = d[1];
            if (p) {
              var m = p.replace(Ro, "");
              f = m + "/" + f;
            }
          }
        }
        a = " (at " + f + ":" + t.lineNumber + ")";
      } else
        i && (a = " (created by " + i + ")");
      return `
    in ` + (e || "Unknown") + a;
    }
    u(hf, "describeComponentFrame");
    var an = typeof Symbol == "function" && Symbol.for, ma = an ? Symbol.for("react.element") : 60103, Gt = an ? Symbol.for("react.portal") : 60106, yn = an ? Symbol.for("react.fragment") : 60107, Xr = an ? Symbol.for("react.strict_mode") : 60108, lr = an ? Symbol.for("react.profiler") : 60114, ya = an ? Symbol.for("react.provider") : 60109, ga = an ? Symbol.for("react.context") : 60110, au = an ? Symbol.for("react.concurrent_mode") : 60111, Ta = an ? Symbol.for("react.forward_ref") : 60112, wo = an ? Symbol.for("react.suspense") : 60113, _o = an ? Symbol.for("react.suspense_list") : 60120, cl = an ? Symbol.for("react.memo") : 60115, bi = an ? Symbol.for("react.lazy") : 60116, dl = an ? Symbol.for("react.block") : 60121, xd = typeof Symbol == "function" && Symbol.iterator, qv = "@@iterator";
    function Dr(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = xd && e[xd] || e[qv];
      return typeof t == "function" ? t : null;
    }
    u(Dr, "getIteratorFn");
    var Rd = -1, mf = 0, Ea = 1, wd = 2;
    function yf(e) {
      return e._status === Ea ? e._result : null;
    }
    u(yf, "refineResolvedLazyComponent");
    function _d(e) {
      if (e._status === Rd) {
        e._status = mf;
        var t = e._ctor, i = t();
        e._result = i, i.then(function(a) {
          if (e._status === mf) {
            var o = a.default;
            o === void 0 && T(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, a), e._status = Ea, e._result = o;
          }
        }, function(a) {
          e._status === mf && (e._status = wd, e._result = a);
        });
      }
    }
    u(_d, "initializeLazyComponentType");
    function gf(e, t, i) {
      var a = t.displayName || t.name || "";
      return e.displayName || (a !== "" ? i + "(" + a + ")" : i);
    }
    u(gf, "getWrappedName");
    function Q(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && T("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case yn:
          return "Fragment";
        case Gt:
          return "Portal";
        case lr:
          return "Profiler";
        case Xr:
          return "StrictMode";
        case wo:
          return "Suspense";
        case _o:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ga:
            return "Context.Consumer";
          case ya:
            return "Context.Provider";
          case Ta:
            return gf(e, e.render, "ForwardRef");
          case cl:
            return Q(e.type);
          case dl:
            return Q(e.render);
          case bi: {
            var t = e, i = yf(t);
            if (i)
              return Q(i);
            break;
          }
        }
      return null;
    }
    u(Q, "getComponentName");
    var ko = we.ReactDebugCurrentFrame;
    function kd(e) {
      switch (e.tag) {
        case se:
        case Ce:
        case ge:
        case It:
        case z:
        case wn:
          return "";
        default:
          var t = e._debugOwner, i = e._debugSource, a = Q(e.type), o = null;
          return t && (o = Q(t.type)), hf(a, i, o);
      }
    }
    u(kd, "describeFiber");
    function qt(e) {
      var t = "", i = e;
      do
        t += kd(i), i = i.return;
      while (i);
      return t;
    }
    u(qt, "getStackByFiberInDevAndProd");
    var Kr = null, lu = !1;
    function xi() {
      {
        if (Kr === null)
          return null;
        var e = Kr._debugOwner;
        if (e !== null && typeof e < "u")
          return Q(e.type);
      }
      return null;
    }
    u(xi, "getCurrentFiberOwnerNameInDevOrNull");
    function be() {
      return Kr === null ? "" : qt(Kr);
    }
    u(be, "getCurrentFiberStackInDev");
    function ur() {
      ko.getCurrentStack = null, Kr = null, lu = !1;
    }
    u(ur, "resetCurrentFiber");
    function pl(e) {
      ko.getCurrentStack = be, Kr = e, lu = !1;
    }
    u(pl, "setCurrentFiber");
    function Or(e) {
      lu = e;
    }
    u(Or, "setIsRendering");
    function ln(e) {
      return "" + e;
    }
    u(ln, "toString");
    function Nr(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "object":
        case "string":
        case "undefined":
          return e;
        default:
          return "";
      }
    }
    u(Nr, "getToStringValue");
    var vl = null, Do = {
      checkPropTypes: null
    };
    {
      vl = we.ReactDebugCurrentFrame;
      var Dd = {
        button: !0,
        checkbox: !0,
        image: !0,
        hidden: !0,
        radio: !0,
        reset: !0,
        submit: !0
      }, Od = {
        value: function(e, t, i) {
          return Dd[e.type] || e.onChange || e.readOnly || e.disabled || e[t] == null || ll ? null : new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.");
        },
        checked: function(e, t, i) {
          return e.onChange || e.readOnly || e.disabled || e[t] == null || ll ? null : new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
        }
      };
      Do.checkPropTypes = function(e, t) {
        D(Od, t, "prop", e, vl.getStackAddendum);
      };
    }
    function Nd(e) {
      var t = e.type, i = e.nodeName;
      return i && i.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    u(Nd, "isCheckable");
    function Oo(e) {
      return e._valueTracker;
    }
    u(Oo, "getTracker");
    function Tf(e) {
      e._valueTracker = null;
    }
    u(Tf, "detachTracker");
    function Md(e) {
      var t = "";
      return e && (Nd(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    u(Md, "getValueFromNode");
    function Zr(e) {
      var t = Nd(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), a = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof i > "u" || typeof i.get != "function" || typeof i.set != "function")) {
        var o = i.get, f = i.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(p) {
            a = "" + p, f.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: i.enumerable
        });
        var d = {
          getValue: function() {
            return a;
          },
          setValue: function(p) {
            a = "" + p;
          },
          stopTracking: function() {
            Tf(e), delete e[t];
          }
        };
        return d;
      }
    }
    u(Zr, "trackValueOnNode");
    function Sa(e) {
      Oo(e) || (e._valueTracker = Zr(e));
    }
    u(Sa, "track");
    function No(e) {
      if (!e)
        return !1;
      var t = Oo(e);
      if (!t)
        return !0;
      var i = t.getValue(), a = Md(e);
      return a !== i ? (t.setValue(a), !0) : !1;
    }
    u(No, "updateValueIfChanged");
    var Ef = !1, Sf = !1, Cf = !1, bf = !1;
    function Mo(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    u(Mo, "isControlled");
    function Uo(e, t) {
      var i = e, a = t.checked, o = ie({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: a ?? i._wrapperState.initialChecked
      });
      return o;
    }
    u(Uo, "getHostProps");
    function xf(e, t) {
      Do.checkPropTypes("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Sf && (T("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components", xi() || "A component", t.type), Sf = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Ef && (T("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components", xi() || "A component", t.type), Ef = !0);
      var i = e, a = t.defaultValue == null ? "" : t.defaultValue;
      i._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Nr(t.value != null ? t.value : a),
        controlled: Mo(t)
      };
    }
    u(xf, "initWrapperState");
    function Ao(e, t) {
      var i = e, a = t.checked;
      a != null && iu(i, "checked", a, !1);
    }
    u(Ao, "updateChecked");
    function uu(e, t) {
      var i = e;
      {
        var a = Mo(t);
        !i._wrapperState.controlled && a && !bf && (T("A component is changing an uncontrolled input of type %s to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components", t.type), bf = !0), i._wrapperState.controlled && !a && !Cf && (T("A component is changing a controlled input of type %s to be uncontrolled. Input elements should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components", t.type), Cf = !0);
      }
      Ao(e, t);
      var o = Nr(t.value), f = t.type;
      if (o != null)
        f === "number" ? (o === 0 && i.value === "" || i.value != o) && (i.value = ln(o)) : i.value !== ln(o) && (i.value = ln(o));
      else if (f === "submit" || f === "reset") {
        i.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? ou(i, t.type, o) : t.hasOwnProperty("defaultValue") && ou(i, t.type, Nr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (i.defaultChecked = !!t.defaultChecked);
    }
    u(uu, "updateWrapper");
    function Lo(e, t, i) {
      var a = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type, f = o === "submit" || o === "reset";
        if (f && (t.value === void 0 || t.value === null))
          return;
        var d = ln(a._wrapperState.initialValue);
        i || d !== a.value && (a.value = d), a.defaultValue = d;
      }
      var p = a.name;
      p !== "" && (a.name = ""), a.defaultChecked = !a.defaultChecked, a.defaultChecked = !!a._wrapperState.initialChecked, p !== "" && (a.name = p);
    }
    u(Lo, "postMountWrapper");
    function Rf(e, t) {
      var i = e;
      uu(i, t), Ud(i, t);
    }
    u(Rf, "restoreControlledState");
    function Ud(e, t) {
      var i = t.name;
      if (t.type === "radio" && i != null) {
        for (var a = e; a.parentNode; )
          a = a.parentNode;
        for (var o = a.querySelectorAll("input[name=" + JSON.stringify("" + i) + '][type="radio"]'), f = 0; f < o.length; f++) {
          var d = o[f];
          if (!(d === e || d.form !== e.form)) {
            var p = gh(d);
            if (!p)
              throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            No(d), uu(d, p);
          }
        }
      }
    }
    u(Ud, "updateNamedCousins");
    function ou(e, t, i) {
      (t !== "number" || e.ownerDocument.activeElement !== e) && (i == null ? e.defaultValue = ln(e._wrapperState.initialValue) : e.defaultValue !== ln(i) && (e.defaultValue = ln(i)));
    }
    u(ou, "setDefaultValue");
    var zo = !1, Ad = !1;
    function hl(e) {
      var t = "";
      return M.Children.forEach(e, function(i) {
        i != null && (t += i);
      }), t;
    }
    u(hl, "flattenChildren");
    function wf(e, t) {
      typeof t.children == "object" && t.children !== null && M.Children.forEach(t.children, function(i) {
        i != null && (typeof i == "string" || typeof i == "number" || typeof i.type == "string" && (Ad || (Ad = !0, T("Only strings and numbers are supported as <option> children."))));
      }), t.selected != null && !zo && (T("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), zo = !0);
    }
    u(wf, "validateProps");
    function _f(e, t) {
      t.value != null && e.setAttribute("value", ln(Nr(t.value)));
    }
    u(_f, "postMountWrapper$1");
    function Mr(e, t) {
      var i = ie({
        children: void 0
      }, t), a = hl(t.children);
      return a && (i.children = a), i;
    }
    u(Mr, "getHostProps$1");
    var ml;
    ml = !1;
    function yl() {
      var e = xi();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    u(yl, "getDeclarationErrorAddendum");
    var gl = ["value", "defaultValue"];
    function su(e) {
      {
        Do.checkPropTypes("select", e);
        for (var t = 0; t < gl.length; t++) {
          var i = gl[t];
          if (e[i] != null) {
            var a = Array.isArray(e[i]);
            e.multiple && !a ? T("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", i, yl()) : !e.multiple && a && T("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", i, yl());
          }
        }
      }
    }
    u(su, "checkSelectPropTypes");
    function Yn(e, t, i, a) {
      var o = e.options;
      if (t) {
        for (var f = i, d = {}, p = 0; p < f.length; p++)
          d["$" + f[p]] = !0;
        for (var m = 0; m < o.length; m++) {
          var g = d.hasOwnProperty("$" + o[m].value);
          o[m].selected !== g && (o[m].selected = g), g && a && (o[m].defaultSelected = !0);
        }
      } else {
        for (var E = ln(Nr(i)), O = null, b = 0; b < o.length; b++) {
          if (o[b].value === E) {
            o[b].selected = !0, a && (o[b].defaultSelected = !0);
            return;
          }
          O === null && !o[b].disabled && (O = o[b]);
        }
        O !== null && (O.selected = !0);
      }
    }
    u(Yn, "updateOptions");
    function fu(e, t) {
      return ie({}, t, {
        value: void 0
      });
    }
    u(fu, "getHostProps$2");
    function Ur(e, t) {
      var i = e;
      su(t), i._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !ml && (T("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://fb.me/react-controlled-components"), ml = !0);
    }
    u(Ur, "initWrapperState$1");
    function Ld(e, t) {
      var i = e;
      i.multiple = !!t.multiple;
      var a = t.value;
      a != null ? Yn(i, !!t.multiple, a, !1) : t.defaultValue != null && Yn(i, !!t.multiple, t.defaultValue, !0);
    }
    u(Ld, "postMountWrapper$2");
    function zd(e, t) {
      var i = e, a = i._wrapperState.wasMultiple;
      i._wrapperState.wasMultiple = !!t.multiple;
      var o = t.value;
      o != null ? Yn(i, !!t.multiple, o, !1) : a !== !!t.multiple && (t.defaultValue != null ? Yn(i, !!t.multiple, t.defaultValue, !0) : Yn(i, !!t.multiple, t.multiple ? [] : "", !1));
    }
    u(zd, "postUpdateWrapper");
    function Xv(e, t) {
      var i = e, a = t.value;
      a != null && Yn(i, !!t.multiple, a, !1);
    }
    u(Xv, "restoreControlledState$1");
    var Po = !1;
    function kf(e, t) {
      var i = e;
      if (t.dangerouslySetInnerHTML != null)
        throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var a = ie({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: ln(i._wrapperState.initialValue)
      });
      return a;
    }
    u(kf, "getHostProps$3");
    function Ca(e, t) {
      var i = e;
      Do.checkPropTypes("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Po && (T("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://fb.me/react-controlled-components", xi() || "A component"), Po = !0);
      var a = t.value;
      if (a == null) {
        var o = t.children, f = t.defaultValue;
        if (o != null) {
          T("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (f != null)
              throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Array.isArray(o)) {
              if (!(o.length <= 1))
                throw Error("<textarea> can only have at most one child.");
              o = o[0];
            }
            f = o;
          }
        }
        f == null && (f = ""), a = f;
      }
      i._wrapperState = {
        initialValue: Nr(a)
      };
    }
    u(Ca, "initWrapperState$2");
    function Jr(e, t) {
      var i = e, a = Nr(t.value), o = Nr(t.defaultValue);
      if (a != null) {
        var f = ln(a);
        f !== i.value && (i.value = f), t.defaultValue == null && i.defaultValue !== f && (i.defaultValue = f);
      }
      o != null && (i.defaultValue = ln(o));
    }
    u(Jr, "updateWrapper$1");
    function Fo(e, t) {
      var i = e, a = i.textContent;
      a === i._wrapperState.initialValue && a !== "" && a !== null && (i.value = a);
    }
    u(Fo, "postMountWrapper$3");
    function Ho(e, t) {
      Jr(e, t);
    }
    u(Ho, "restoreControlledState$2");
    var cu = "http://www.w3.org/1999/xhtml", du = "http://www.w3.org/1998/Math/MathML", Tl = "http://www.w3.org/2000/svg", gn = {
      html: cu,
      mathml: du,
      svg: Tl
    };
    function Df(e) {
      switch (e) {
        case "svg":
          return Tl;
        case "math":
          return du;
        default:
          return cu;
      }
    }
    u(Df, "getIntrinsicNamespace");
    function Of(e, t) {
      return e == null || e === cu ? Df(t) : e === Tl && t === "foreignObject" ? cu : e;
    }
    u(Of, "getChildNamespace");
    var Pd = /* @__PURE__ */ u(function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, i, a, o) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, i, a, o);
        });
      } : e;
    }, "createMicrosoftUnsafeLocalFunction"), Vo, Fd = Pd(function(e, t) {
      if (e.namespaceURI === gn.svg && !("innerHTML" in e)) {
        Vo = Vo || document.createElement("div"), Vo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var i = Vo.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; i.firstChild; )
          e.appendChild(i.firstChild);
        return;
      }
      e.innerHTML = t;
    }), or = 1, sr = 3, un = 8, Ri = 9, Io = 11, pu = /* @__PURE__ */ u(function(e, t) {
      if (t) {
        var i = e.firstChild;
        if (i && i === e.lastChild && i.nodeType === sr) {
          i.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, "setTextContent");
    function wi(e) {
      return e;
    }
    u(wi, "unsafeCastStringToDOMTopLevelType");
    function Kv(e) {
      return e;
    }
    u(Kv, "unsafeCastDOMTopLevelTypeToString");
    function vu(e, t) {
      var i = {};
      return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i;
    }
    u(vu, "makePrefixMap");
    var ba = {
      animationend: vu("Animation", "AnimationEnd"),
      animationiteration: vu("Animation", "AnimationIteration"),
      animationstart: vu("Animation", "AnimationStart"),
      transitionend: vu("Transition", "TransitionEnd")
    }, _i = {}, Hd = {};
    nn && (Hd = document.createElement("div").style, "AnimationEvent" in window || (delete ba.animationend.animation, delete ba.animationiteration.animation, delete ba.animationstart.animation), "TransitionEvent" in window || delete ba.transitionend.transition);
    function jo(e) {
      if (_i[e])
        return _i[e];
      if (!ba[e])
        return e;
      var t = ba[e];
      for (var i in t)
        if (t.hasOwnProperty(i) && i in Hd)
          return _i[e] = t[i];
      return e;
    }
    u(jo, "getVendorPrefixedEventName");
    var Nf = "abort", Vd = jo("animationend"), Mf = jo("animationiteration"), Uf = jo("animationstart"), Wt = "blur", xa = "canplay", Ra = "canplaythrough", Wo = "cancel", ki = "change", hu = "click", El = "close", ei = "compositionend", mu = "compositionstart", Af = "compositionupdate", yu = "contextmenu", Lf = "copy", zf = "cut", Pf = "dblclick", wa = "auxclick", Id = "drag", gu = "dragend", _a = "dragenter", Ff = "dragexit", Tu = "dragleave", Hf = "dragover", Bo = "dragstart", ka = "drop", Qo = "durationchange", Da = "emptied", Vf = "encrypted", If = "ended", On = "error", $n = "focus", ti = "gotpointercapture", Eu = "input", Ar = "invalid", Bt = "keydown", Gn = "keypress", on = "keyup", Di = "load", Yo = "loadstart", jf = "loadeddata", Wf = "loadedmetadata", $o = "lostpointercapture", ni = "mousedown", Su = "mousemove", Oi = "mouseout", ri = "mouseover", Cu = "mouseup", bu = "paste", Bf = "pause", Qf = "play", Yf = "playing", $f = "pointercancel", Gf = "pointerdown", Go = "pointermove", Nn = "pointerout", ze = "pointerover", ft = "pointerup", Lr = "progress", zt = "ratechange", Ot = "reset", zr = "scroll", Ni = "seeked", Xt = "seeking", Mi = "selectionchange", qo = "stalled", Oa = "submit", Sl = "suspend", xu = "textInput", qf = "timeupdate", Cl = "toggle", Xo = "touchcancel", Ko = "touchend", Zo = "touchmove", Xf = "touchstart", Ru = jo("transitionend"), Jo = "volumechange", es = "waiting", Kf = "wheel", bl = [Nf, xa, Ra, Qo, Da, Vf, If, On, jf, Wf, Yo, Bf, Qf, Yf, Lr, zt, Ni, Xt, qo, Sl, qf, Jo, es];
    function Zf(e) {
      return e;
    }
    u(Zf, "getRawEventName");
    var Zv = typeof WeakMap == "function" ? WeakMap : Map, jd = new Zv();
    function fr(e) {
      var t = jd.get(e);
      return t === void 0 && (t = /* @__PURE__ */ new Map(), jd.set(e, t)), t;
    }
    u(fr, "getListenerMapForElement");
    function ii(e) {
      return e._reactInternalFiber;
    }
    u(ii, "get");
    function Jf(e) {
      return e._reactInternalFiber !== void 0;
    }
    u(Jf, "has");
    function Wd(e, t) {
      e._reactInternalFiber = t;
    }
    u(Wd, "set");
    var Qe = 0, cr = 1, Rt = 2, Pe = 4, Bd = 6, Na = 8, Mn = 16, ec = 32, Ke = 64, Tn = 128, Ui = 256, Ai = 512, qn = 1024, ts = 1028, tc = 932, nc = 2047, xl = 2048, En = 4096, Xn = we.ReactCurrentOwner;
    function Sn(e) {
      var t = e, i = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var a = t;
        do
          t = a, (t.effectTag & (Rt | qn)) !== Qe && (i = t.return), a = t.return;
        while (a);
      }
      return t.tag === se ? i : null;
    }
    u(Sn, "getNearestMountedFiber");
    function ns(e) {
      if (e.tag === K) {
        var t = e.memoizedState;
        if (t === null) {
          var i = e.alternate;
          i !== null && (t = i.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    u(ns, "getSuspenseInstanceFromFiber");
    function rs(e) {
      return e.tag === se ? e.stateNode.containerInfo : null;
    }
    u(rs, "getContainerFromFiber");
    function Li(e) {
      return Sn(e) === e;
    }
    u(Li, "isFiberMounted");
    function zi(e) {
      {
        var t = Xn.current;
        if (t !== null && t.tag === re) {
          var i = t, a = i.stateNode;
          a._warnedAboutRefsInRender || T("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Q(i.type) || "A component"), a._warnedAboutRefsInRender = !0;
        }
      }
      var o = ii(e);
      return o ? Sn(o) === o : !1;
    }
    u(zi, "isMounted");
    function rc(e) {
      if (Sn(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    u(rc, "assertIsMounted");
    function Rl(e) {
      var t = e.alternate;
      if (!t) {
        var i = Sn(e);
        if (i === null)
          throw Error("Unable to find node on an unmounted component.");
        return i !== e ? null : e;
      }
      for (var a = e, o = t; ; ) {
        var f = a.return;
        if (f === null)
          break;
        var d = f.alternate;
        if (d === null) {
          var p = f.return;
          if (p !== null) {
            a = o = p;
            continue;
          }
          break;
        }
        if (f.child === d.child) {
          for (var m = f.child; m; ) {
            if (m === a)
              return rc(f), e;
            if (m === o)
              return rc(f), t;
            m = m.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== o.return)
          a = f, o = d;
        else {
          for (var g = !1, E = f.child; E; ) {
            if (E === a) {
              g = !0, a = f, o = d;
              break;
            }
            if (E === o) {
              g = !0, o = f, a = d;
              break;
            }
            E = E.sibling;
          }
          if (!g) {
            for (E = d.child; E; ) {
              if (E === a) {
                g = !0, a = d, o = f;
                break;
              }
              if (E === o) {
                g = !0, o = d, a = f;
                break;
              }
              E = E.sibling;
            }
            if (!g)
              throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (a.alternate !== o)
          throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (a.tag !== se)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    u(Rl, "findCurrentFiberUsingSlowPath");
    function ic(e) {
      var t = Rl(e);
      if (!t)
        return null;
      for (var i = t; ; ) {
        if (i.tag === ae || i.tag === ge)
          return i;
        if (i.child) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === t)
          return null;
        for (; !i.sibling; ) {
          if (!i.return || i.return === t)
            return null;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
      return null;
    }
    u(ic, "findCurrentHostFiber");
    function wu(e) {
      var t = Rl(e);
      if (!t)
        return null;
      for (var i = t; ; ) {
        if (i.tag === ae || i.tag === ge || jt)
          return i;
        if (i.child && i.tag !== Ce) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === t)
          return null;
        for (; !i.sibling; ) {
          if (!i.return || i.return === t)
            return null;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
      return null;
    }
    u(wu, "findCurrentHostFiberWithNoPortals");
    function Ma(e, t) {
      if (t == null)
        throw Error("accumulateInto(...): Accumulated items must not be null or undefined.");
      return e == null ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t];
    }
    u(Ma, "accumulateInto");
    function wl(e, t, i) {
      Array.isArray(e) ? e.forEach(t, i) : e && t.call(i, e);
    }
    u(wl, "forEachAccumulated");
    var Pi = null, Qd = /* @__PURE__ */ u(function(e) {
      e && ($r(e), e.isPersistent() || e.constructor.release(e));
    }, "executeDispatchesAndRelease"), Yd = /* @__PURE__ */ u(function(e) {
      return Qd(e);
    }, "executeDispatchesAndReleaseTopLevel");
    function is(e) {
      e !== null && (Pi = Ma(Pi, e));
      var t = Pi;
      if (Pi = null, !!t) {
        if (wl(t, Yd), Pi)
          throw Error("processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.");
        he();
      }
    }
    u(is, "runEventsInBatch");
    function _u(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === sr ? t.parentNode : t;
    }
    u(_u, "getEventTarget");
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function ku(e) {
      if (!nn)
        return !1;
      var t = "on" + e, i = t in document;
      if (!i) {
        var a = document.createElement("div");
        a.setAttribute(t, "return;"), i = typeof a[t] == "function";
      }
      return i;
    }
    u(ku, "isEventSupported");
    var Du = 10, Ua = [];
    function $d(e) {
      e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, Ua.length < Du && Ua.push(e);
    }
    u($d, "releaseTopLevelCallbackBookKeeping");
    function _l(e, t, i, a) {
      if (Ua.length) {
        var o = Ua.pop();
        return o.topLevelType = e, o.eventSystemFlags = a, o.nativeEvent = t, o.targetInst = i, o;
      }
      return {
        topLevelType: e,
        eventSystemFlags: a,
        nativeEvent: t,
        targetInst: i,
        ancestors: []
      };
    }
    u(_l, "getTopLevelCallbackBookKeeping");
    function ac(e) {
      if (e.tag === se)
        return e.stateNode.containerInfo;
      for (; e.return; )
        e = e.return;
      return e.tag !== se ? null : e.stateNode.containerInfo;
    }
    u(ac, "findRootContainerNode");
    function Ou(e, t, i, a, o) {
      for (var f = null, d = 0; d < sa.length; d++) {
        var p = sa[d];
        if (p) {
          var m = p.extractEvents(e, t, i, a, o);
          m && (f = Ma(f, m));
        }
      }
      return f;
    }
    u(Ou, "extractPluginEvents");
    function Pr(e, t, i, a, o) {
      var f = Ou(e, t, i, a, o);
      is(f);
    }
    u(Pr, "runExtractedPluginEventsInBatch");
    function Nu(e) {
      var t = e.targetInst, i = t;
      do {
        if (!i) {
          var a = e.ancestors;
          a.push(i);
          break;
        }
        var o = ac(i);
        if (!o)
          break;
        var f = i.tag;
        (f === ae || f === ge) && e.ancestors.push(i), i = Lc(o);
      } while (i);
      for (var d = 0; d < e.ancestors.length; d++) {
        t = e.ancestors[d];
        var p = _u(e.nativeEvent), m = e.topLevelType, g = e.nativeEvent, E = e.eventSystemFlags;
        d === 0 && (E |= Kl), Pr(m, t, g, p, E);
      }
    }
    u(Nu, "handleTopLevel");
    function kl(e, t, i, a) {
      var o = _l(e, i, a, t);
      try {
        ol(Nu, o);
      } finally {
        $d(o);
      }
    }
    u(kl, "dispatchEventForLegacyPluginEventSystem");
    function Aa(e, t) {
      for (var i = fr(t), a = il[e], o = 0; o < a.length; o++) {
        var f = a[o];
        as(f, t, i);
      }
    }
    u(Aa, "legacyListenToEvent");
    function as(e, t, i) {
      if (!i.has(e)) {
        switch (e) {
          case zr:
            gs(zr, t);
            break;
          case $n:
          case Wt:
            gs($n, t), gs(Wt, t), i.set(Wt, null), i.set($n, null);
            break;
          case Wo:
          case El:
            ku(Zf(e)) && gs(e, t);
            break;
          case Ar:
          case Oa:
          case Ot:
            break;
          default:
            var a = bl.indexOf(e) !== -1;
            a || it(e, t);
            break;
        }
        i.set(e, null);
      }
    }
    u(as, "legacyListenToTopLevelEvent");
    function Dl(e, t) {
      for (var i = fr(t), a = il[e], o = 0; o < a.length; o++) {
        var f = a[o];
        if (!i.has(f))
          return !1;
      }
      return !0;
    }
    u(Dl, "isListeningToAllDependencies");
    var lc;
    function uc(e) {
      lc = e;
    }
    u(uc, "setAttemptUserBlockingHydration");
    var lt;
    function ls(e) {
      lt = e;
    }
    u(ls, "setAttemptContinuousHydration");
    var us;
    function os(e) {
      us = e;
    }
    u(os, "setAttemptHydrationAtCurrentPriority");
    var Cn = !1, Kt = [], tt = null, ct = null, dt = null, Fi = /* @__PURE__ */ new Map(), Qt = /* @__PURE__ */ new Map(), La = [];
    function oc() {
      return Kt.length > 0;
    }
    u(oc, "hasQueuedDiscreteEvents");
    var za = [ni, Cu, Xo, Ko, Xf, wa, Pf, $f, Gf, ft, gu, Bo, ka, ei, mu, Bt, Gn, on, Eu, xu, El, Wo, Lf, zf, bu, hu, ki, yu, Ot, Oa], Ol = [$n, Wt, _a, Tu, ri, Oi, ze, Nn, ti, $o];
    function Hi(e) {
      return za.indexOf(e) > -1;
    }
    u(Hi, "isReplayableDiscreteEvent");
    function Mu(e, t, i) {
      as(e, t, i);
    }
    u(Mu, "trapReplayableEventForDocument");
    function ss(e, t) {
      var i = fr(t);
      za.forEach(function(a) {
        Mu(a, t, i);
      }), Ol.forEach(function(a) {
        Mu(a, t, i);
      });
    }
    u(ss, "eagerlyTrapReplayableEvents");
    function fs(e, t, i, a, o) {
      return {
        blockedOn: e,
        topLevelType: t,
        eventSystemFlags: i | Xl,
        nativeEvent: o,
        container: a
      };
    }
    u(fs, "createQueuedReplayableEvent");
    function cs(e, t, i, a, o) {
      var f = fs(e, t, i, a, o);
      Kt.push(f);
    }
    u(cs, "queueDiscreteEvent");
    function sc(e, t) {
      switch (e) {
        case $n:
        case Wt:
          tt = null;
          break;
        case _a:
        case Tu:
          ct = null;
          break;
        case ri:
        case Oi:
          dt = null;
          break;
        case ze:
        case Nn: {
          var i = t.pointerId;
          Fi.delete(i);
          break;
        }
        case ti:
        case $o: {
          var a = t.pointerId;
          Qt.delete(a);
          break;
        }
      }
    }
    u(sc, "clearIfContinuousEvent");
    function Pa(e, t, i, a, o, f) {
      if (e === null || e.nativeEvent !== f) {
        var d = fs(t, i, a, o, f);
        if (t !== null) {
          var p = Pl(t);
          p !== null && lt(p);
        }
        return d;
      }
      return e.eventSystemFlags |= a, e;
    }
    u(Pa, "accumulateOrCreateContinuousQueuedReplayableEvent");
    function fc(e, t, i, a, o) {
      switch (t) {
        case $n: {
          var f = o;
          return tt = Pa(tt, e, t, i, a, f), !0;
        }
        case _a: {
          var d = o;
          return ct = Pa(ct, e, t, i, a, d), !0;
        }
        case ri: {
          var p = o;
          return dt = Pa(dt, e, t, i, a, p), !0;
        }
        case ze: {
          var m = o, g = m.pointerId;
          return Fi.set(g, Pa(Fi.get(g) || null, e, t, i, a, m)), !0;
        }
        case ti: {
          var E = o, O = E.pointerId;
          return Qt.set(O, Pa(Qt.get(O) || null, e, t, i, a, E)), !0;
        }
      }
      return !1;
    }
    u(fc, "queueIfContinuousEvent");
    function Gd(e) {
      var t = Lc(e.target);
      if (t !== null) {
        var i = Sn(t);
        if (i !== null) {
          var a = i.tag;
          if (a === K) {
            var o = ns(i);
            if (o !== null) {
              e.blockedOn = o, fe.unstable_runWithPriority(e.priority, function() {
                us(i);
              });
              return;
            }
          } else if (a === se) {
            var f = i.stateNode;
            if (f.hydrate) {
              e.blockedOn = rs(i);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    u(Gd, "attemptExplicitHydrationTarget");
    function Fa(e) {
      if (e.blockedOn !== null)
        return !1;
      var t = Ts(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
      if (t !== null) {
        var i = Pl(t);
        return i !== null && lt(i), e.blockedOn = t, !1;
      }
      return !0;
    }
    u(Fa, "attemptReplayContinuousQueuedEvent");
    function cc(e, t, i) {
      Fa(e) && i.delete(t);
    }
    u(cc, "attemptReplayContinuousQueuedEventInMap");
    function qd() {
      for (Cn = !1; Kt.length > 0; ) {
        var e = Kt[0];
        if (e.blockedOn !== null) {
          var t = Pl(e.blockedOn);
          t !== null && lc(t);
          break;
        }
        var i = Ts(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
        i !== null ? e.blockedOn = i : Kt.shift();
      }
      tt !== null && Fa(tt) && (tt = null), ct !== null && Fa(ct) && (ct = null), dt !== null && Fa(dt) && (dt = null), Fi.forEach(cc), Qt.forEach(cc);
    }
    u(qd, "replayUnblockedEvents");
    function Nl(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Cn || (Cn = !0, fe.unstable_scheduleCallback(fe.unstable_NormalPriority, qd)));
    }
    u(Nl, "scheduleCallbackIfUnblocked");
    function ds(e) {
      if (Kt.length > 0) {
        Nl(Kt[0], e);
        for (var t = 1; t < Kt.length; t++) {
          var i = Kt[t];
          i.blockedOn === e && (i.blockedOn = null);
        }
      }
      tt !== null && Nl(tt, e), ct !== null && Nl(ct, e), dt !== null && Nl(dt, e);
      var a = /* @__PURE__ */ u(function(p) {
        return Nl(p, e);
      }, "unblock");
      Fi.forEach(a), Qt.forEach(a);
      for (var o = 0; o < La.length; o++) {
        var f = La[o];
        f.blockedOn === e && (f.blockedOn = null);
      }
      for (; La.length > 0; ) {
        var d = La[0];
        if (d.blockedOn !== null)
          break;
        Gd(d), d.blockedOn === null && La.shift();
      }
    }
    u(ds, "retryIfBlockedOn");
    function Xd(e, t, i) {
      e.addEventListener(t, i, !1);
    }
    u(Xd, "addEventBubbleListener");
    function ps(e, t, i) {
      e.addEventListener(t, i, !0);
    }
    u(ps, "addEventCaptureListener");
    var dc = {}, vs = /* @__PURE__ */ new Map(), hs = /* @__PURE__ */ new Map(), ms = [Wt, "blur", Wo, "cancel", hu, "click", El, "close", yu, "contextMenu", Lf, "copy", zf, "cut", wa, "auxClick", Pf, "doubleClick", gu, "dragEnd", Bo, "dragStart", ka, "drop", $n, "focus", Eu, "input", Ar, "invalid", Bt, "keyDown", Gn, "keyPress", on, "keyUp", ni, "mouseDown", Cu, "mouseUp", bu, "paste", Bf, "pause", Qf, "play", $f, "pointerCancel", Gf, "pointerDown", ft, "pointerUp", zt, "rateChange", Ot, "reset", Ni, "seeked", Oa, "submit", Xo, "touchCancel", Ko, "touchEnd", Xf, "touchStart", Jo, "volumeChange"], Jv = [ki, Mi, xu, mu, ei, Af], eh = [Id, "drag", _a, "dragEnter", Ff, "dragExit", Tu, "dragLeave", Hf, "dragOver", Su, "mouseMove", Oi, "mouseOut", ri, "mouseOver", Go, "pointerMove", Nn, "pointerOut", ze, "pointerOver", zr, "scroll", Cl, "toggle", Zo, "touchMove", Kf, "wheel"], th = [Nf, "abort", Vd, "animationEnd", Mf, "animationIteration", Uf, "animationStart", xa, "canPlay", Ra, "canPlayThrough", Qo, "durationChange", Da, "emptied", Vf, "encrypted", If, "ended", On, "error", ti, "gotPointerCapture", Di, "load", jf, "loadedData", Wf, "loadedMetadata", Yo, "loadStart", $o, "lostPointerCapture", Yf, "playing", Lr, "progress", Xt, "seeking", qo, "stalled", Sl, "suspend", qf, "timeUpdate", Ru, "transitionEnd", es, "waiting"];
    function dr(e, t) {
      for (var i = 0; i < e.length; i += 2) {
        var a = e[i], o = e[i + 1], f = o[0].toUpperCase() + o.slice(1), d = "on" + f, p = {
          phasedRegistrationNames: {
            bubbled: d,
            captured: d + "Capture"
          },
          dependencies: [a],
          eventPriority: t
        };
        hs.set(a, t), vs.set(a, p), dc[o] = p;
      }
    }
    u(dr, "processSimpleEventPluginPairsByPriority");
    function Vi(e, t) {
      for (var i = 0; i < e.length; i++)
        hs.set(e[i], t);
    }
    u(Vi, "processTopEventPairsByPriority"), dr(ms, sl), dr(eh, pa), dr(th, Si), Vi(Jv, sl);
    function Ha(e) {
      var t = hs.get(e);
      return t === void 0 ? Si : t;
    }
    u(Ha, "getEventPriorityForPluginSystem");
    var Kd = fe.unstable_UserBlockingPriority, Zd = fe.unstable_runWithPriority, Uu = !0;
    function pc(e) {
      Uu = !!e;
    }
    u(pc, "setEnabled");
    function ys() {
      return Uu;
    }
    u(ys, "isEnabled");
    function it(e, t) {
      pr(t, e, !1);
    }
    u(it, "trapBubbledEvent");
    function gs(e, t) {
      pr(t, e, !0);
    }
    u(gs, "trapCapturedEvent");
    function pr(e, t, i) {
      var a;
      switch (Ha(t)) {
        case sl:
          a = Un.bind(null, t, fa, e);
          break;
        case pa:
          a = Jd.bind(null, t, fa, e);
          break;
        case Si:
        default:
          a = Au.bind(null, t, fa, e);
          break;
      }
      var o = Zf(t);
      i ? ps(e, o, a) : Xd(e, o, a);
    }
    u(pr, "trapEventForPluginEventSystem");
    function Un(e, t, i, a) {
      Co(a.timeStamp), So(Au, e, t, i, a);
    }
    u(Un, "dispatchDiscreteEvent");
    function Jd(e, t, i, a) {
      Zd(Kd, Au.bind(null, e, t, i, a));
    }
    u(Jd, "dispatchUserBlockingUpdate");
    function Au(e, t, i, a) {
      if (!!Uu) {
        if (oc() && Hi(e)) {
          cs(
            null,
            e,
            t,
            i,
            a
          );
          return;
        }
        var o = Ts(e, t, i, a);
        if (o === null) {
          sc(e, a);
          return;
        }
        if (Hi(e)) {
          cs(o, e, t, i, a);
          return;
        }
        fc(o, e, t, i, a) || (sc(e, a), kl(e, t, a, null));
      }
    }
    u(Au, "dispatchEvent");
    function Ts(e, t, i, a) {
      var o = _u(a), f = Lc(o);
      if (f !== null) {
        var d = Sn(f);
        if (d === null)
          f = null;
        else {
          var p = d.tag;
          if (p === K) {
            var m = ns(d);
            if (m !== null)
              return m;
            f = null;
          } else if (p === se) {
            var g = d.stateNode;
            if (g.hydrate)
              return rs(d);
            f = null;
          } else
            d !== f && (f = null);
        }
      }
      return kl(e, t, a, f), null;
    }
    u(Ts, "attemptToDispatchEvent");
    var ep = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Va = {
      animationIterationCount: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function tp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    u(tp, "prefixKey");
    var vc = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Va).forEach(function(e) {
      vc.forEach(function(t) {
        Va[tp(t, e)] = Va[e];
      });
    });
    function Es(e, t, i) {
      var a = t == null || typeof t == "boolean" || t === "";
      return a ? "" : !i && typeof t == "number" && t !== 0 && !(Va.hasOwnProperty(e) && Va[e]) ? t + "px" : ("" + t).trim();
    }
    u(Es, "dangerousStyleValue");
    var hc = /([A-Z])/g, np = /^ms-/;
    function rp(e) {
      return e.replace(hc, "-$1").toLowerCase().replace(np, "-ms-");
    }
    u(rp, "hyphenateStyleName");
    var Ss = /* @__PURE__ */ u(function() {
    }, "warnValidStyle");
    {
      var ip = /^(?:webkit|moz|o)[A-Z]/, ai = /^-ms-/, ap = /-(.)/g, Cs = /;\s*$/, Ia = {}, bs = {}, Lu = !1, lp = !1, nh = /* @__PURE__ */ u(function(e) {
        return e.replace(ap, function(t, i) {
          return i.toUpperCase();
        });
      }, "camelize"), mc = /* @__PURE__ */ u(function(e) {
        Ia.hasOwnProperty(e) && Ia[e] || (Ia[e] = !0, T(
          "Unsupported style property %s. Did you mean %s?",
          e,
          nh(e.replace(ai, "ms-"))
        ));
      }, "warnHyphenatedStyleName"), rh = /* @__PURE__ */ u(function(e) {
        Ia.hasOwnProperty(e) && Ia[e] || (Ia[e] = !0, T("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, "warnBadVendoredStyleName"), yc = /* @__PURE__ */ u(function(e, t) {
        bs.hasOwnProperty(t) && bs[t] || (bs[t] = !0, T(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Cs, "")));
      }, "warnStyleValueWithSemicolon"), ih = /* @__PURE__ */ u(function(e, t) {
        Lu || (Lu = !0, T("`NaN` is an invalid value for the `%s` css style property.", e));
      }, "warnStyleValueIsNaN"), up = /* @__PURE__ */ u(function(e, t) {
        lp || (lp = !0, T("`Infinity` is an invalid value for the `%s` css style property.", e));
      }, "warnStyleValueIsInfinity");
      Ss = /* @__PURE__ */ u(function(e, t) {
        e.indexOf("-") > -1 ? mc(e) : ip.test(e) ? rh(e) : Cs.test(t) && yc(e, t), typeof t == "number" && (isNaN(t) ? ih(e, t) : isFinite(t) || up(e, t));
      }, "warnValidStyle");
    }
    var ah = Ss;
    function op(e) {
      {
        var t = "", i = "";
        for (var a in e)
          if (!!e.hasOwnProperty(a)) {
            var o = e[a];
            if (o != null) {
              var f = a.indexOf("--") === 0;
              t += i + (f ? a : rp(a)) + ":", t += Es(a, o, f), i = ";";
            }
          }
        return t || null;
      }
    }
    u(op, "createDangerousStringForStyles");
    function gc(e, t) {
      var i = e.style;
      for (var a in t)
        if (!!t.hasOwnProperty(a)) {
          var o = a.indexOf("--") === 0;
          o || ah(a, t[a]);
          var f = Es(a, t[a], o);
          a === "float" && (a = "cssFloat"), o ? i.setProperty(a, f) : i[a] = f;
        }
    }
    u(gc, "setValueForStyles");
    function lh(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    u(lh, "isValueEmpty");
    function Tc(e) {
      var t = {};
      for (var i in e)
        for (var a = ep[i] || [i], o = 0; o < a.length; o++)
          t[a[o]] = i;
      return t;
    }
    u(Tc, "expandShorthandMap");
    function sp(e, t) {
      {
        if (!t)
          return;
        var i = Tc(e), a = Tc(t), o = {};
        for (var f in i) {
          var d = i[f], p = a[f];
          if (p && d !== p) {
            var m = d + "," + p;
            if (o[m])
              continue;
            o[m] = !0, T("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", lh(e[d]) ? "Removing" : "Updating", d, p);
          }
        }
      }
    }
    u(sp, "validateShorthandPropertyCollisionInDev");
    var fp = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
    }, cp = ie({
      menuitem: !0
    }, fp), Ec = "__html", zu = null;
    zu = we.ReactDebugCurrentFrame;
    function xs(e, t) {
      if (!!t) {
        if (cp[e] && !(t.children == null && t.dangerouslySetInnerHTML == null))
          throw Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`." + zu.getStackAddendum());
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (!(typeof t.dangerouslySetInnerHTML == "object" && Ec in t.dangerouslySetInnerHTML))
            throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && T("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), !(t.style == null || typeof t.style == "object"))
          throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX." + zu.getStackAddendum());
      }
    }
    u(xs, "assertValidProps");
    function li(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    u(li, "isCustomComponent");
    var Pu = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, dp = {
      "aria-current": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, ja = {}, pp = new RegExp("^(aria)-[" + A + "]*$"), uh = new RegExp("^(aria)[A-Z][" + A + "]*$"), Rs = Object.prototype.hasOwnProperty;
    function vp(e, t) {
      {
        if (Rs.call(ja, t) && ja[t])
          return !0;
        if (uh.test(t)) {
          var i = "aria-" + t.slice(4).toLowerCase(), a = dp.hasOwnProperty(i) ? i : null;
          if (a == null)
            return T("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ja[t] = !0, !0;
          if (t !== a)
            return T("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, a), ja[t] = !0, !0;
        }
        if (pp.test(t)) {
          var o = t.toLowerCase(), f = dp.hasOwnProperty(o) ? o : null;
          if (f == null)
            return ja[t] = !0, !1;
          if (t !== f)
            return T("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, f), ja[t] = !0, !0;
        }
      }
      return !0;
    }
    u(vp, "validateProperty");
    function Pt(e, t) {
      {
        var i = [];
        for (var a in t) {
          var o = vp(e, a);
          o || i.push(a);
        }
        var f = i.map(function(d) {
          return "`" + d + "`";
        }).join(", ");
        i.length === 1 ? T("Invalid aria prop %s on <%s> tag. For details, see https://fb.me/invalid-aria-prop", f, e) : i.length > 1 && T("Invalid aria props %s on <%s> tag. For details, see https://fb.me/invalid-aria-prop", f, e);
      }
    }
    u(Pt, "warnInvalidARIAProps");
    function Sc(e, t) {
      li(e, t) || Pt(e, t);
    }
    u(Sc, "validateProperties");
    var Kn = !1;
    function Fr(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Kn && (Kn = !0, e === "select" && t.multiple ? T("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : T("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    u(Fr, "validateProperties$1");
    var Ii = /* @__PURE__ */ u(function() {
    }, "validateProperty$1");
    {
      var Ft = {}, hp = Object.prototype.hasOwnProperty, Fu = /^on./, ws = /^on[^A-Z]/, Cc = new RegExp("^(aria)-[" + A + "]*$"), me = new RegExp("^(aria)[A-Z][" + A + "]*$");
      Ii = /* @__PURE__ */ u(function(e, t, i, a) {
        if (hp.call(Ft, t) && Ft[t])
          return !0;
        var o = t.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return T("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Ft[t] = !0, !0;
        if (a) {
          if (kr.hasOwnProperty(t))
            return !0;
          var f = _n.hasOwnProperty(o) ? _n[o] : null;
          if (f != null)
            return T("Invalid event handler property `%s`. Did you mean `%s`?", t, f), Ft[t] = !0, !0;
          if (Fu.test(t))
            return T("Unknown event handler property `%s`. It will be ignored.", t), Ft[t] = !0, !0;
        } else if (Fu.test(t))
          return ws.test(t) && T("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Ft[t] = !0, !0;
        if (Cc.test(t) || me.test(t))
          return !0;
        if (o === "innerhtml")
          return T("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Ft[t] = !0, !0;
        if (o === "aria")
          return T("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Ft[t] = !0, !0;
        if (o === "is" && i !== null && i !== void 0 && typeof i != "string")
          return T("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof i), Ft[t] = !0, !0;
        if (typeof i == "number" && isNaN(i))
          return T("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Ft[t] = !0, !0;
        var d = xo(t), p = d !== null && d.type === va;
        if (Pu.hasOwnProperty(o)) {
          var m = Pu[o];
          if (m !== t)
            return T("Invalid DOM property `%s`. Did you mean `%s`?", t, m), Ft[t] = !0, !0;
        } else if (!p && t !== o)
          return T("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), Ft[t] = !0, !0;
        return typeof i == "boolean" && St(t, i, d, !1) ? (i ? T('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', i, t, t, i, t) : T('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', i, t, t, i, t, t, t), Ft[t] = !0, !0) : p ? !0 : St(t, i, d, !1) ? (Ft[t] = !0, !1) : ((i === "false" || i === "true") && d !== null && d.type === rn && (T("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", i, t, i === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, i), Ft[t] = !0), !0);
      }, "validateProperty$1");
    }
    var An = /* @__PURE__ */ u(function(e, t, i) {
      {
        var a = [];
        for (var o in t) {
          var f = Ii(e, o, t[o], i);
          f || a.push(o);
        }
        var d = a.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        a.length === 1 ? T("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://fb.me/react-attribute-behavior", d, e) : a.length > 1 && T("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://fb.me/react-attribute-behavior", d, e);
      }
    }, "warnUnknownProperties");
    function Te(e, t, i) {
      li(e, t) || An(e, t, i);
    }
    u(Te, "validateProperties$2");
    var Ze = !1, yt = "dangerouslySetInnerHTML", Wa = "suppressContentEditableWarning", Ln = "suppressHydrationWarning", Ml = "autoFocus", Hr = "children", vr = "style", Ba = "__html", ji = gn.html, _s, ee, Qa, Ul, Zn, Hu, Wi, Al, hr, Ll;
    {
      _s = {
        time: !0,
        dialog: !0,
        webview: !0
      }, Qa = /* @__PURE__ */ u(function(e, t) {
        Sc(e, t), Fr(e, t), Te(
          e,
          t,
          !0
        );
      }, "validatePropertiesInDevelopment"), Al = nn && !document.documentMode;
      var bc = /\r\n?/g, ks = /\u0000|\uFFFD/g;
      hr = /* @__PURE__ */ u(function(e) {
        var t = typeof e == "string" ? e : "" + e;
        return t.replace(bc, `
`).replace(ks, "");
      }, "normalizeMarkupForTextOrAttribute"), Ul = /* @__PURE__ */ u(function(e, t) {
        if (!Ze) {
          var i = hr(t), a = hr(e);
          a !== i && (Ze = !0, T('Text content did not match. Server: "%s" Client: "%s"', a, i));
        }
      }, "warnForTextDifference"), Zn = /* @__PURE__ */ u(function(e, t, i) {
        if (!Ze) {
          var a = hr(i), o = hr(t);
          o !== a && (Ze = !0, T("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(a)));
        }
      }, "warnForPropDifference"), Hu = /* @__PURE__ */ u(function(e) {
        if (!Ze) {
          Ze = !0;
          var t = [];
          e.forEach(function(i) {
            t.push(i);
          }), T("Extra attributes from the server: %s", t);
        }
      }, "warnForExtraAttributes"), Wi = /* @__PURE__ */ u(function(e, t) {
        t === !1 ? T("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : T("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
      }, "warnForInvalidEventListener"), Ll = /* @__PURE__ */ u(function(e, t) {
        var i = e.namespaceURI === ji ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
        return i.innerHTML = t, i.innerHTML;
      }, "normalizeHTML");
    }
    function Ht(e, t) {
      var i = e.nodeType === Ri || e.nodeType === Io, a = i ? e : e.ownerDocument;
      Aa(t, a);
    }
    u(Ht, "ensureListeningTo");
    function Bi(e) {
      return e.nodeType === Ri ? e : e.ownerDocument;
    }
    u(Bi, "getOwnerDocumentFromRootContainer");
    function Qi() {
    }
    u(Qi, "noop");
    function Ya(e) {
      e.onclick = Qi;
    }
    u(Ya, "trapClickOnNonInteractiveElement");
    function Ds(e, t, i, a, o) {
      for (var f in a)
        if (!!a.hasOwnProperty(f)) {
          var d = a[f];
          if (f === vr)
            d && Object.freeze(d), gc(t, d);
          else if (f === yt) {
            var p = d ? d[Ba] : void 0;
            p != null && Fd(t, p);
          } else if (f === Hr)
            if (typeof d == "string") {
              var m = e !== "textarea" || d !== "";
              m && pu(t, d);
            } else
              typeof d == "number" && pu(t, "" + d);
          else
            f === Wa || f === Ln || f === Ml || (kr.hasOwnProperty(f) ? d != null && (typeof d != "function" && Wi(f, d), Ht(i, f)) : d != null && iu(t, f, d, o));
        }
    }
    u(Ds, "setInitialDOMProperties");
    function zn(e, t, i, a) {
      for (var o = 0; o < t.length; o += 2) {
        var f = t[o], d = t[o + 1];
        f === vr ? gc(e, d) : f === yt ? Fd(e, d) : f === Hr ? pu(e, d) : iu(e, f, d, a);
      }
    }
    u(zn, "updateDOMProperties");
    function mp(e, t, i, a) {
      var o, f = Bi(i), d, p = a;
      if (p === ji && (p = Df(e)), p === ji) {
        if (o = li(e, t), !o && e !== e.toLowerCase() && T("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var m = f.createElement("div");
          m.innerHTML = "<script><\/script>";
          var g = m.firstChild;
          d = m.removeChild(g);
        } else if (typeof t.is == "string")
          d = f.createElement(e, {
            is: t.is
          });
        else if (d = f.createElement(e), e === "select") {
          var E = d;
          t.multiple ? E.multiple = !0 : t.size && (E.size = t.size);
        }
      } else
        d = f.createElementNS(p, e);
      return p === ji && !o && Object.prototype.toString.call(d) === "[object HTMLUnknownElement]" && !Object.prototype.hasOwnProperty.call(_s, e) && (_s[e] = !0, T("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), d;
    }
    u(mp, "createElement");
    function xc(e, t) {
      return Bi(t).createTextNode(e);
    }
    u(xc, "createTextNode");
    function oh(e, t, i, a) {
      var o = li(t, i);
      Qa(t, i);
      var f;
      switch (t) {
        case "iframe":
        case "object":
        case "embed":
          it(Di, e), f = i;
          break;
        case "video":
        case "audio":
          for (var d = 0; d < bl.length; d++)
            it(bl[d], e);
          f = i;
          break;
        case "source":
          it(On, e), f = i;
          break;
        case "img":
        case "image":
        case "link":
          it(On, e), it(Di, e), f = i;
          break;
        case "form":
          it(Ot, e), it(Oa, e), f = i;
          break;
        case "details":
          it(Cl, e), f = i;
          break;
        case "input":
          xf(e, i), f = Uo(e, i), it(Ar, e), Ht(a, "onChange");
          break;
        case "option":
          wf(e, i), f = Mr(e, i);
          break;
        case "select":
          Ur(e, i), f = fu(e, i), it(Ar, e), Ht(a, "onChange");
          break;
        case "textarea":
          Ca(e, i), f = kf(e, i), it(Ar, e), Ht(a, "onChange");
          break;
        default:
          f = i;
      }
      switch (xs(t, f), Ds(t, e, a, f, o), t) {
        case "input":
          Sa(e), Lo(e, i, !1);
          break;
        case "textarea":
          Sa(e), Fo(e);
          break;
        case "option":
          _f(e, i);
          break;
        case "select":
          Ld(e, i);
          break;
        default:
          typeof f.onClick == "function" && Ya(e);
          break;
      }
    }
    u(oh, "setInitialProperties");
    function yp(e, t, i, a, o) {
      Qa(t, a);
      var f = null, d, p;
      switch (t) {
        case "input":
          d = Uo(e, i), p = Uo(e, a), f = [];
          break;
        case "option":
          d = Mr(e, i), p = Mr(e, a), f = [];
          break;
        case "select":
          d = fu(e, i), p = fu(e, a), f = [];
          break;
        case "textarea":
          d = kf(e, i), p = kf(e, a), f = [];
          break;
        default:
          d = i, p = a, typeof d.onClick != "function" && typeof p.onClick == "function" && Ya(e);
          break;
      }
      xs(t, p);
      var m, g, E = null;
      for (m in d)
        if (!(p.hasOwnProperty(m) || !d.hasOwnProperty(m) || d[m] == null))
          if (m === vr) {
            var O = d[m];
            for (g in O)
              O.hasOwnProperty(g) && (E || (E = {}), E[g] = "");
          } else
            m === yt || m === Hr || m === Wa || m === Ln || m === Ml || (kr.hasOwnProperty(m) ? f || (f = []) : (f = f || []).push(m, null));
      for (m in p) {
        var b = p[m], N = d?.[m];
        if (!(!p.hasOwnProperty(m) || b === N || b == null && N == null))
          if (m === vr)
            if (b && Object.freeze(b), N) {
              for (g in N)
                N.hasOwnProperty(g) && (!b || !b.hasOwnProperty(g)) && (E || (E = {}), E[g] = "");
              for (g in b)
                b.hasOwnProperty(g) && N[g] !== b[g] && (E || (E = {}), E[g] = b[g]);
            } else
              E || (f || (f = []), f.push(m, E)), E = b;
          else if (m === yt) {
            var V = b ? b[Ba] : void 0, W = N ? N[Ba] : void 0;
            V != null && W !== V && (f = f || []).push(m, V);
          } else
            m === Hr ? N !== b && (typeof b == "string" || typeof b == "number") && (f = f || []).push(m, "" + b) : m === Wa || m === Ln || (kr.hasOwnProperty(m) ? (b != null && (typeof b != "function" && Wi(m, b), Ht(o, m)), !f && N !== b && (f = [])) : (f = f || []).push(m, b));
      }
      return E && (sp(E, p[vr]), (f = f || []).push(vr, E)), f;
    }
    u(yp, "diffProperties");
    function gp(e, t, i, a, o) {
      i === "input" && o.type === "radio" && o.name != null && Ao(e, o);
      var f = li(i, a), d = li(i, o);
      switch (zn(e, t, f, d), i) {
        case "input":
          uu(e, o);
          break;
        case "textarea":
          Jr(e, o);
          break;
        case "select":
          zd(e, o);
          break;
      }
    }
    u(gp, "updateProperties");
    function $a(e) {
      {
        var t = e.toLowerCase();
        return Pu.hasOwnProperty(t) && Pu[t] || null;
      }
    }
    u($a, "getPossibleStandardName");
    function Tp(e, t, i, a, o) {
      var f, d;
      switch (ee = i[Ln] === !0, f = li(t, i), Qa(t, i), t) {
        case "iframe":
        case "object":
        case "embed":
          it(Di, e);
          break;
        case "video":
        case "audio":
          for (var p = 0; p < bl.length; p++)
            it(bl[p], e);
          break;
        case "source":
          it(On, e);
          break;
        case "img":
        case "image":
        case "link":
          it(On, e), it(Di, e);
          break;
        case "form":
          it(Ot, e), it(Oa, e);
          break;
        case "details":
          it(Cl, e);
          break;
        case "input":
          xf(e, i), it(Ar, e), Ht(o, "onChange");
          break;
        case "option":
          wf(e, i);
          break;
        case "select":
          Ur(e, i), it(Ar, e), Ht(o, "onChange");
          break;
        case "textarea":
          Ca(e, i), it(Ar, e), Ht(o, "onChange");
          break;
      }
      xs(t, i);
      {
        d = /* @__PURE__ */ new Set();
        for (var m = e.attributes, g = 0; g < m.length; g++) {
          var E = m[g].name.toLowerCase();
          switch (E) {
            case "data-reactroot":
              break;
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              d.add(m[g].name);
          }
        }
      }
      var O = null;
      for (var b in i)
        if (!!i.hasOwnProperty(b)) {
          var N = i[b];
          if (b === Hr)
            typeof N == "string" ? e.textContent !== N && (ee || Ul(e.textContent, N), O = [Hr, N]) : typeof N == "number" && e.textContent !== "" + N && (ee || Ul(e.textContent, N), O = [Hr, "" + N]);
          else if (kr.hasOwnProperty(b))
            N != null && (typeof N != "function" && Wi(b, N), Ht(o, b));
          else if (typeof f == "boolean") {
            var V = void 0, W = xo(b);
            if (!ee) {
              if (!(b === Wa || b === Ln || b === "value" || b === "checked" || b === "selected")) {
                if (b === yt) {
                  var oe = e.innerHTML, de = N ? N[Ba] : void 0, $e = Ll(e, de ?? "");
                  $e !== oe && Zn(b, oe, $e);
                } else if (b === vr) {
                  if (d.delete(b), Al) {
                    var Oe = op(N);
                    V = e.getAttribute("style"), Oe !== V && Zn(b, V, Oe);
                  }
                } else if (f)
                  d.delete(b.toLowerCase()), V = vf(e, b, N), N !== V && Zn(b, V, N);
                else if (!Qn(b, W, f) && !tu(b, N, W, f)) {
                  var nt = !1;
                  if (W !== null)
                    d.delete(W.attributeName), V = bd(e, b, N, W);
                  else {
                    var _ = a;
                    if (_ === ji && (_ = Df(t)), _ === ji)
                      d.delete(b.toLowerCase());
                    else {
                      var U = $a(b);
                      U !== null && U !== b && (nt = !0, d.delete(U)), d.delete(b);
                    }
                    V = vf(e, b, N);
                  }
                  N !== V && !nt && Zn(b, V, N);
                }
              }
            }
          }
        }
      switch (d.size > 0 && !ee && Hu(d), t) {
        case "input":
          Sa(e), Lo(e, i, !0);
          break;
        case "textarea":
          Sa(e), Fo(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof i.onClick == "function" && Ya(e);
          break;
      }
      return O;
    }
    u(Tp, "diffHydratedProperties");
    function Ep(e, t) {
      var i = e.nodeValue !== t;
      return i;
    }
    u(Ep, "diffHydratedText");
    function Rc(e, t) {
      Ul(e.nodeValue, t);
    }
    u(Rc, "warnForUnmatchedText");
    function Vu(e, t) {
      {
        if (Ze)
          return;
        Ze = !0, T("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    u(Vu, "warnForDeletedHydratableElement");
    function Sp(e, t) {
      {
        if (Ze)
          return;
        Ze = !0, T('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    u(Sp, "warnForDeletedHydratableText");
    function Cp(e, t, i) {
      {
        if (Ze)
          return;
        Ze = !0, T("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    u(Cp, "warnForInsertedHydratedElement");
    function wc(e, t) {
      {
        if (t === "" || Ze)
          return;
        Ze = !0, T('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    u(wc, "warnForInsertedHydratedText");
    function bp(e, t, i) {
      switch (t) {
        case "input":
          Rf(e, i);
          return;
        case "textarea":
          Ho(e, i);
          return;
        case "select":
          Xv(e, i);
          return;
      }
    }
    u(bp, "restoreControlledState$3");
    function Iu(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    u(Iu, "getActiveElement");
    function Yi(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    u(Yi, "getLeafNode");
    function sh(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    u(sh, "getSiblingNode");
    function xp(e, t) {
      for (var i = Yi(e), a = 0, o = 0; i; ) {
        if (i.nodeType === sr) {
          if (o = a + i.textContent.length, a <= t && o >= t)
            return {
              node: i,
              offset: t - a
            };
          a = o;
        }
        i = Yi(sh(i));
      }
    }
    u(xp, "getNodeForCharacterOffset");
    function zl(e) {
      var t = e.ownerDocument, i = t && t.defaultView || window, a = i.getSelection && i.getSelection();
      if (!a || a.rangeCount === 0)
        return null;
      var o = a.anchorNode, f = a.anchorOffset, d = a.focusNode, p = a.focusOffset;
      try {
        o.nodeType, d.nodeType;
      } catch {
        return null;
      }
      return fh(e, o, f, d, p);
    }
    u(zl, "getOffsets");
    function fh(e, t, i, a, o) {
      var f = 0, d = -1, p = -1, m = 0, g = 0, E = e, O = null;
      e:
        for (; ; ) {
          for (var b = null; E === t && (i === 0 || E.nodeType === sr) && (d = f + i), E === a && (o === 0 || E.nodeType === sr) && (p = f + o), E.nodeType === sr && (f += E.nodeValue.length), (b = E.firstChild) !== null; )
            O = E, E = b;
          for (; ; ) {
            if (E === e)
              break e;
            if (O === t && ++m === i && (d = f), O === a && ++g === o && (p = f), (b = E.nextSibling) !== null)
              break;
            E = O, O = E.parentNode;
          }
          E = b;
        }
      return d === -1 || p === -1 ? null : {
        start: d,
        end: p
      };
    }
    u(fh, "getModernOffsetsFromPoints");
    function Rp(e, t) {
      var i = e.ownerDocument || document, a = i && i.defaultView || window;
      if (!!a.getSelection) {
        var o = a.getSelection(), f = e.textContent.length, d = Math.min(t.start, f), p = t.end === void 0 ? d : Math.min(t.end, f);
        if (!o.extend && d > p) {
          var m = p;
          p = d, d = m;
        }
        var g = xp(e, d), E = xp(e, p);
        if (g && E) {
          if (o.rangeCount === 1 && o.anchorNode === g.node && o.anchorOffset === g.offset && o.focusNode === E.node && o.focusOffset === E.offset)
            return;
          var O = i.createRange();
          O.setStart(g.node, g.offset), o.removeAllRanges(), d > p ? (o.addRange(O), o.extend(E.node, E.offset)) : (O.setEnd(E.node, E.offset), o.addRange(O));
        }
      }
    }
    u(Rp, "setOffsets");
    function $i(e) {
      return e && e.nodeType === sr;
    }
    u($i, "isTextNode");
    function wp(e, t) {
      return !e || !t ? !1 : e === t ? !0 : $i(e) ? !1 : $i(t) ? wp(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    u(wp, "containsNode");
    function ch(e) {
      return e && e.ownerDocument && wp(e.ownerDocument.documentElement, e);
    }
    u(ch, "isInDocument");
    function _p(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    u(_p, "isSameOriginFrame");
    function Os() {
      for (var e = window, t = Iu(); t instanceof e.HTMLIFrameElement; ) {
        if (_p(t))
          e = t.contentWindow;
        else
          return t;
        t = Iu(e.document);
      }
      return t;
    }
    u(Os, "getActiveElementDeep");
    function ju(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    u(ju, "hasSelectionCapabilities");
    function dh() {
      var e = Os();
      return {
        activeElementDetached: null,
        focusedElem: e,
        selectionRange: ju(e) ? Vr(e) : null
      };
    }
    u(dh, "getSelectionInformation");
    function ph(e) {
      var t = Os(), i = e.focusedElem, a = e.selectionRange;
      if (t !== i && ch(i)) {
        a !== null && ju(i) && _c(i, a);
        for (var o = [], f = i; f = f.parentNode; )
          f.nodeType === or && o.push({
            element: f,
            left: f.scrollLeft,
            top: f.scrollTop
          });
        typeof i.focus == "function" && i.focus();
        for (var d = 0; d < o.length; d++) {
          var p = o[d];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    u(ph, "restoreSelection");
    function Vr(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = zl(e), t || {
        start: 0,
        end: 0
      };
    }
    u(Vr, "getSelection");
    function _c(e, t) {
      var i = t.start, a = t.end;
      a === void 0 && (a = i), "selectionStart" in e ? (e.selectionStart = i, e.selectionEnd = Math.min(a, e.value.length)) : Rp(e, t);
    }
    u(_c, "setSelection");
    var Wu = /* @__PURE__ */ u(function() {
    }, "validateDOMNesting"), mr = /* @__PURE__ */ u(function() {
    }, "updatedAncestorInfo");
    {
      var Ns = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], ui = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        "foreignObject",
        "desc",
        "title"
      ], kc = ui.concat(["button"]), Dc = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], kp = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      mr = /* @__PURE__ */ u(function(e, t) {
        var i = ie({}, e || kp), a = {
          tag: t
        };
        return ui.indexOf(t) !== -1 && (i.aTagInScope = null, i.buttonTagInScope = null, i.nobrTagInScope = null), kc.indexOf(t) !== -1 && (i.pTagInButtonScope = null), Ns.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (i.listItemTagAutoclosing = null, i.dlItemTagAutoclosing = null), i.current = a, t === "form" && (i.formTag = a), t === "a" && (i.aTagInScope = a), t === "button" && (i.buttonTagInScope = a), t === "nobr" && (i.nobrTagInScope = a), t === "p" && (i.pTagInButtonScope = a), t === "li" && (i.listItemTagAutoclosing = a), (t === "dd" || t === "dt") && (i.dlItemTagAutoclosing = a), i;
      }, "updatedAncestorInfo");
      var Dp = /* @__PURE__ */ u(function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return Dc.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, "isTagValidWithParent"), Ga = /* @__PURE__ */ u(function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, "findInvalidAncestorForTag"), Oc = {};
      Wu = /* @__PURE__ */ u(function(e, t, i) {
        i = i || kp;
        var a = i.current, o = a && a.tag;
        t != null && (e != null && T("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var f = Dp(e, o) ? null : a, d = f ? null : Ga(e, i), p = f || d;
        if (!!p) {
          var m = p.tag, g = be(), E = !!f + "|" + e + "|" + m + "|" + g;
          if (!Oc[E]) {
            Oc[E] = !0;
            var O = e, b = "";
            if (e === "#text" ? /\S/.test(t) ? O = "Text nodes" : (O = "Whitespace text nodes", b = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : O = "<" + e + ">", f) {
              var N = "";
              m === "table" && e === "tr" && (N += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), T("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", O, m, b, N);
            } else
              T("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", O, m);
          }
        }
      }, "validateDOMNesting");
    }
    var Gi;
    Gi = "suppressHydrationWarning";
    var Bu = "$", Ms = "/$", Us = "$?", Qu = "$!", Nc = "style", qa = null, Mc = null;
    function Yu(e, t) {
      switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!t.autoFocus;
      }
      return !1;
    }
    u(Yu, "shouldAutoFocusHostComponent");
    function vh(e) {
      var t, i, a = e.nodeType;
      switch (a) {
        case Ri:
        case Io: {
          t = a === Ri ? "#document" : "#fragment";
          var o = e.documentElement;
          i = o ? o.namespaceURI : Of(null, "");
          break;
        }
        default: {
          var f = a === un ? e.parentNode : e, d = f.namespaceURI || null;
          t = f.tagName, i = Of(d, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), m = mr(null, p);
        return {
          namespace: i,
          ancestorInfo: m
        };
      }
    }
    u(vh, "getRootHostContext");
    function Op(e, t, i) {
      {
        var a = e, o = Of(a.namespace, t), f = mr(a.ancestorInfo, t);
        return {
          namespace: o,
          ancestorInfo: f
        };
      }
    }
    u(Op, "getChildHostContext");
    function jy(e) {
      return e;
    }
    u(jy, "getPublicInstance");
    function n(e) {
      qa = ys(), Mc = dh(), pc(!1);
    }
    u(n, "prepareForCommit");
    function r(e) {
      ph(Mc), pc(qa), qa = null, Mc = null;
    }
    u(r, "resetAfterCommit");
    function l(e, t, i, a, o) {
      var f;
      {
        var d = a;
        if (Wu(e, null, d.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, m = mr(d.ancestorInfo, e);
          Wu(null, p, m);
        }
        f = d.namespace;
      }
      var g = mp(e, t, i, f);
      return Mp(o, g), Th(g, t), g;
    }
    u(l, "createInstance");
    function s(e, t) {
      e.appendChild(t);
    }
    u(s, "appendInitialChild");
    function c(e, t, i, a, o) {
      return oh(e, t, i, a), Yu(t, i);
    }
    u(c, "finalizeInitialChildren");
    function v(e, t, i, a, o, f) {
      {
        var d = f;
        if (typeof a.children != typeof i.children && (typeof a.children == "string" || typeof a.children == "number")) {
          var p = "" + a.children, m = mr(d.ancestorInfo, t);
          Wu(null, p, m);
        }
      }
      return yp(e, t, i, a, o);
    }
    u(v, "prepareUpdate");
    function h(e, t) {
      return e === "textarea" || e === "option" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    u(h, "shouldSetTextContent");
    function y(e, t) {
      return !!t.hidden;
    }
    u(y, "shouldDeprioritizeSubtree");
    function w(e, t, i, a) {
      {
        var o = i;
        Wu(null, e, o.ancestorInfo);
      }
      var f = xc(e, t);
      return Mp(a, f), f;
    }
    u(w, "createTextInstance");
    var R = typeof setTimeout == "function" ? setTimeout : void 0, Y = typeof clearTimeout == "function" ? clearTimeout : void 0, X = -1;
    function De(e, t, i, a) {
      Yu(t, i) && e.focus();
    }
    u(De, "commitMount");
    function He(e, t, i, a, o, f) {
      Th(e, o), gp(e, t, i, a, o);
    }
    u(He, "commitUpdate");
    function Pn(e) {
      pu(e, "");
    }
    u(Pn, "resetTextContent");
    function Yt(e, t, i) {
      e.nodeValue = i;
    }
    u(Yt, "commitTextUpdate");
    function C(e, t) {
      e.appendChild(t);
    }
    u(C, "appendChild");
    function S(e, t) {
      var i;
      e.nodeType === un ? (i = e.parentNode, i.insertBefore(t, e)) : (i = e, i.appendChild(t));
      var a = e._reactRootContainer;
      a == null && i.onclick === null && Ya(i);
    }
    u(S, "appendChildToContainer");
    function k(e, t, i) {
      e.insertBefore(t, i);
    }
    u(k, "insertBefore");
    function P(e, t, i) {
      e.nodeType === un ? e.parentNode.insertBefore(t, i) : e.insertBefore(t, i);
    }
    u(P, "insertInContainerBefore");
    function j(e, t) {
      e.removeChild(t);
    }
    u(j, "removeChild");
    function Z(e, t) {
      e.nodeType === un ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    u(Z, "removeChildFromContainer");
    function ue(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    u(ue, "hideInstance");
    function Ae(e) {
      e.nodeValue = "";
    }
    u(Ae, "hideTextInstance");
    function pt(e, t) {
      e = e;
      var i = t[Nc], a = i != null && i.hasOwnProperty("display") ? i.display : null;
      e.style.display = Es("display", a);
    }
    u(pt, "unhideInstance");
    function Ee(e, t) {
      e.nodeValue = t;
    }
    u(Ee, "unhideTextInstance");
    function qi(e, t, i) {
      return e.nodeType !== or || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    u(qi, "canHydrateInstance");
    function hh(e, t) {
      return t === "" || e.nodeType !== sr ? null : e;
    }
    u(hh, "canHydrateTextInstance");
    function CS(e) {
      return e.data === Us;
    }
    u(CS, "isSuspenseInstancePending");
    function bS(e) {
      return e.data === Qu;
    }
    u(bS, "isSuspenseInstanceFallback");
    function Wy(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === or || t === sr)
          break;
      }
      return e;
    }
    u(Wy, "getNextHydratable");
    function Np(e) {
      return Wy(e.nextSibling);
    }
    u(Np, "getNextHydratableSibling");
    function By(e) {
      return Wy(e.firstChild);
    }
    u(By, "getFirstHydratableChild");
    function xS(e, t, i, a, o, f) {
      Mp(f, e), Th(e, i);
      var d;
      {
        var p = o;
        d = p.namespace;
      }
      return Tp(e, t, i, d, a);
    }
    u(xS, "hydrateInstance");
    function RS(e, t, i) {
      return Mp(i, e), Ep(e, t);
    }
    u(RS, "hydrateTextInstance");
    function wS(e) {
      for (var t = e.nextSibling, i = 0; t; ) {
        if (t.nodeType === un) {
          var a = t.data;
          if (a === Ms) {
            if (i === 0)
              return Np(t);
            i--;
          } else
            (a === Bu || a === Qu || a === Us) && i++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    u(wS, "getNextHydratableInstanceAfterSuspenseInstance");
    function Qy(e) {
      for (var t = e.previousSibling, i = 0; t; ) {
        if (t.nodeType === un) {
          var a = t.data;
          if (a === Bu || a === Qu || a === Us) {
            if (i === 0)
              return t;
            i--;
          } else
            a === Ms && i++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    u(Qy, "getParentSuspenseInstance");
    function _S(e) {
      ds(e);
    }
    u(_S, "commitHydratedContainer");
    function kS(e) {
      ds(e);
    }
    u(kS, "commitHydratedSuspenseInstance");
    function DS(e, t, i) {
      Rc(t, i);
    }
    u(DS, "didNotMatchHydratedContainerTextInstance");
    function OS(e, t, i, a, o) {
      t[Gi] !== !0 && Rc(a, o);
    }
    u(OS, "didNotMatchHydratedTextInstance");
    function NS(e, t) {
      t.nodeType === or ? Vu(e, t) : t.nodeType === un || Sp(e, t);
    }
    u(NS, "didNotHydrateContainerInstance");
    function MS(e, t, i, a) {
      t[Gi] !== !0 && (a.nodeType === or ? Vu(i, a) : a.nodeType === un || Sp(i, a));
    }
    u(MS, "didNotHydrateInstance");
    function US(e, t, i) {
      Cp(e, t);
    }
    u(US, "didNotFindHydratableContainerInstance");
    function AS(e, t) {
      wc(e, t);
    }
    u(AS, "didNotFindHydratableContainerTextInstance");
    function LS(e, t, i, a, o) {
      t[Gi] !== !0 && Cp(i, a);
    }
    u(LS, "didNotFindHydratableInstance");
    function zS(e, t, i, a) {
      t[Gi] !== !0 && wc(i, a);
    }
    u(zS, "didNotFindHydratableTextInstance");
    function PS(e, t, i) {
      t[Gi];
    }
    u(PS, "didNotFindHydratableSuspenseInstance");
    var mh = Math.random().toString(36).slice(2), Uc = "__reactInternalInstance$" + mh, Yy = "__reactEventHandlers$" + mh, Ac = "__reactContainere$" + mh;
    function Mp(e, t) {
      t[Uc] = e;
    }
    u(Mp, "precacheFiberNode");
    function FS(e, t) {
      t[Ac] = e;
    }
    u(FS, "markContainerAsRoot");
    function $y(e) {
      e[Ac] = null;
    }
    u($y, "unmarkContainerAsRoot");
    function yh(e) {
      return !!e[Ac];
    }
    u(yh, "isContainerMarkedAsRoot");
    function Lc(e) {
      var t = e[Uc];
      if (t)
        return t;
      for (var i = e.parentNode; i; ) {
        if (t = i[Ac] || i[Uc], t) {
          var a = t.alternate;
          if (t.child !== null || a !== null && a.child !== null)
            for (var o = Qy(e); o !== null; ) {
              var f = o[Uc];
              if (f)
                return f;
              o = Qy(o);
            }
          return t;
        }
        e = i, i = e.parentNode;
      }
      return null;
    }
    u(Lc, "getClosestInstanceFromNode");
    function Pl(e) {
      var t = e[Uc] || e[Ac];
      return t && (t.tag === ae || t.tag === ge || t.tag === K || t.tag === se) ? t : null;
    }
    u(Pl, "getInstanceFromNode$1");
    function $u(e) {
      if (e.tag === ae || e.tag === ge)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    u($u, "getNodeFromInstance$1");
    function gh(e) {
      return e[Yy] || null;
    }
    u(gh, "getFiberCurrentPropsFromNode$1");
    function Th(e, t) {
      e[Yy] = t;
    }
    u(Th, "updateFiberProps");
    function Xa(e) {
      do
        e = e.return;
      while (e && e.tag !== ae);
      return e || null;
    }
    u(Xa, "getParent");
    function HS(e, t) {
      for (var i = 0, a = e; a; a = Xa(a))
        i++;
      for (var o = 0, f = t; f; f = Xa(f))
        o++;
      for (; i - o > 0; )
        e = Xa(e), i--;
      for (; o - i > 0; )
        t = Xa(t), o--;
      for (var d = i; d--; ) {
        if (e === t || e === t.alternate)
          return e;
        e = Xa(e), t = Xa(t);
      }
      return null;
    }
    u(HS, "getLowestCommonAncestor");
    function VS(e, t, i) {
      for (var a = []; e; )
        a.push(e), e = Xa(e);
      var o;
      for (o = a.length; o-- > 0; )
        t(a[o], "captured", i);
      for (o = 0; o < a.length; o++)
        t(a[o], "bubbled", i);
    }
    u(VS, "traverseTwoPhase");
    function IS(e, t, i, a, o) {
      for (var f = e && t ? HS(e, t) : null, d = []; !(!e || e === f); ) {
        var p = e.alternate;
        if (p !== null && p === f)
          break;
        d.push(e), e = Xa(e);
      }
      for (var m = []; !(!t || t === f); ) {
        var g = t.alternate;
        if (g !== null && g === f)
          break;
        m.push(t), t = Xa(t);
      }
      for (var E = 0; E < d.length; E++)
        i(d[E], "bubbled", a);
      for (var O = m.length; O-- > 0; )
        i(m[O], "captured", o);
    }
    u(IS, "traverseEnterLeave");
    function jS(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    u(jS, "isInteractive");
    function WS(e, t, i) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(i.disabled && jS(t));
        default:
          return !1;
      }
    }
    u(WS, "shouldPreventMouseEvent");
    function Gy(e, t) {
      var i, a = e.stateNode;
      if (!a)
        return null;
      var o = et(a);
      if (!o || (i = o[t], WS(t, e.type, o)))
        return null;
      if (!(!i || typeof i == "function"))
        throw Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof i + "` type.");
      return i;
    }
    u(Gy, "getListener");
    function BS(e, t, i) {
      var a = t.dispatchConfig.phasedRegistrationNames[i];
      return Gy(e, a);
    }
    u(BS, "listenerAtPhase");
    function QS(e, t, i) {
      e || T("Dispatching inst must not be null");
      var a = BS(e, i, t);
      a && (i._dispatchListeners = Ma(i._dispatchListeners, a), i._dispatchInstances = Ma(i._dispatchInstances, e));
    }
    u(QS, "accumulateDirectionalDispatches");
    function YS(e) {
      e && e.dispatchConfig.phasedRegistrationNames && VS(e._targetInst, QS, e);
    }
    u(YS, "accumulateTwoPhaseDispatchesSingle");
    function qy(e, t, i) {
      if (e && i && i.dispatchConfig.registrationName) {
        var a = i.dispatchConfig.registrationName, o = Gy(e, a);
        o && (i._dispatchListeners = Ma(i._dispatchListeners, o), i._dispatchInstances = Ma(i._dispatchInstances, e));
      }
    }
    u(qy, "accumulateDispatches");
    function $S(e) {
      e && e.dispatchConfig.registrationName && qy(e._targetInst, null, e);
    }
    u($S, "accumulateDirectDispatchesSingle");
    function As(e) {
      wl(e, YS);
    }
    u(As, "accumulateTwoPhaseDispatches");
    function GS(e, t, i, a) {
      IS(i, a, qy, e, t);
    }
    u(GS, "accumulateEnterLeaveDispatches");
    function qS(e) {
      wl(e, $S);
    }
    u(qS, "accumulateDirectDispatches");
    var zc = null, Eh = null, Pc = null;
    function XS(e) {
      return zc = e, Eh = Ky(), !0;
    }
    u(XS, "initialize");
    function KS() {
      zc = null, Eh = null, Pc = null;
    }
    u(KS, "reset");
    function Xy() {
      if (Pc)
        return Pc;
      var e, t = Eh, i = t.length, a, o = Ky(), f = o.length;
      for (e = 0; e < i && t[e] === o[e]; e++)
        ;
      var d = i - e;
      for (a = 1; a <= d && t[i - a] === o[f - a]; a++)
        ;
      var p = a > 1 ? 1 - a : void 0;
      return Pc = o.slice(e, p), Pc;
    }
    u(Xy, "getData");
    function Ky() {
      return "value" in zc ? zc.value : zc.textContent;
    }
    u(Ky, "getText");
    var ZS = 10, JS = {
      type: null,
      target: null,
      currentTarget: function() {
        return null;
      },
      eventPhase: null,
      bubbles: null,
      cancelable: null,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: null,
      isTrusted: null
    };
    function Up() {
      return !0;
    }
    u(Up, "functionThatReturnsTrue");
    function Gu() {
      return !1;
    }
    u(Gu, "functionThatReturnsFalse");
    function yr(e, t, i, a) {
      delete this.nativeEvent, delete this.preventDefault, delete this.stopPropagation, delete this.isDefaultPrevented, delete this.isPropagationStopped, this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = i;
      var o = this.constructor.Interface;
      for (var f in o)
        if (!!o.hasOwnProperty(f)) {
          delete this[f];
          var d = o[f];
          d ? this[f] = d(i) : f === "target" ? this.target = a : this[f] = i[f];
        }
      var p = i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1;
      return p ? this.isDefaultPrevented = Up : this.isDefaultPrevented = Gu, this.isPropagationStopped = Gu, this;
    }
    u(yr, "SyntheticEvent"), ie(yr.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        !e || (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Up);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        !e || (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Up);
      },
      persist: function() {
        this.isPersistent = Up;
      },
      isPersistent: Gu,
      destructor: function() {
        var e = this.constructor.Interface;
        for (var t in e)
          Object.defineProperty(this, t, Ls(t, e[t]));
        this.dispatchConfig = null, this._targetInst = null, this.nativeEvent = null, this.isDefaultPrevented = Gu, this.isPropagationStopped = Gu, this._dispatchListeners = null, this._dispatchInstances = null, Object.defineProperty(this, "nativeEvent", Ls("nativeEvent", null)), Object.defineProperty(this, "isDefaultPrevented", Ls("isDefaultPrevented", Gu)), Object.defineProperty(this, "isPropagationStopped", Ls("isPropagationStopped", Gu)), Object.defineProperty(this, "preventDefault", Ls("preventDefault", function() {
        })), Object.defineProperty(this, "stopPropagation", Ls("stopPropagation", function() {
        }));
      }
    }), yr.Interface = JS, yr.extend = function(e) {
      var t = this, i = /* @__PURE__ */ u(function() {
      }, "E");
      i.prototype = t.prototype;
      var a = new i();
      function o() {
        return t.apply(this, arguments);
      }
      return u(o, "Class"), ie(a, o.prototype), o.prototype = a, o.prototype.constructor = o, o.Interface = ie({}, t.Interface, e), o.extend = t.extend, Zy(o), o;
    }, Zy(yr);
    function Ls(e, t) {
      var i = typeof t == "function";
      return {
        configurable: !0,
        set: a,
        get: o
      };
      function a(d) {
        var p = i ? "setting the method" : "setting the property";
        return f(p, "This is effectively a no-op"), d;
      }
      function o() {
        var d = i ? "accessing the method" : "accessing the property", p = i ? "This is a no-op function" : "This is set to null";
        return f(d, p), t;
      }
      function f(d, p) {
        T("This synthetic event is reused for performance reasons. If you're seeing this, you're %s `%s` on a released/nullified synthetic event. %s. If you must keep the original synthetic event around, use event.persist(). See https://fb.me/react-event-pooling for more information.", d, e, p);
      }
    }
    u(Ls, "getPooledWarningPropertyDefinition");
    function e0(e, t, i, a) {
      var o = this;
      if (o.eventPool.length) {
        var f = o.eventPool.pop();
        return o.call(f, e, t, i, a), f;
      }
      return new o(e, t, i, a);
    }
    u(e0, "getPooledEvent");
    function t0(e) {
      var t = this;
      if (!(e instanceof t))
        throw Error("Trying to release an event instance into a pool of a different type.");
      e.destructor(), t.eventPool.length < ZS && t.eventPool.push(e);
    }
    u(t0, "releasePooledEvent");
    function Zy(e) {
      e.eventPool = [], e.getPooled = e0, e.release = t0;
    }
    u(Zy, "addEventPoolingTo");
    var n0 = yr.extend({
      data: null
    }), r0 = yr.extend({
      data: null
    }), i0 = [9, 13, 27, 32], Jy = 229, Sh = nn && "CompositionEvent" in window, Fc = null;
    nn && "documentMode" in document && (Fc = document.documentMode);
    var a0 = nn && "TextEvent" in window && !Fc, eg = nn && (!Sh || Fc && Fc > 8 && Fc <= 11), tg = 32, ng = String.fromCharCode(tg), Ka = {
      beforeInput: {
        phasedRegistrationNames: {
          bubbled: "onBeforeInput",
          captured: "onBeforeInputCapture"
        },
        dependencies: [ei, Gn, xu, bu]
      },
      compositionEnd: {
        phasedRegistrationNames: {
          bubbled: "onCompositionEnd",
          captured: "onCompositionEndCapture"
        },
        dependencies: [Wt, ei, Bt, Gn, on, ni]
      },
      compositionStart: {
        phasedRegistrationNames: {
          bubbled: "onCompositionStart",
          captured: "onCompositionStartCapture"
        },
        dependencies: [Wt, mu, Bt, Gn, on, ni]
      },
      compositionUpdate: {
        phasedRegistrationNames: {
          bubbled: "onCompositionUpdate",
          captured: "onCompositionUpdateCapture"
        },
        dependencies: [Wt, Af, Bt, Gn, on, ni]
      }
    }, rg = !1;
    function l0(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey);
    }
    u(l0, "isKeypressCommand");
    function u0(e) {
      switch (e) {
        case mu:
          return Ka.compositionStart;
        case ei:
          return Ka.compositionEnd;
        case Af:
          return Ka.compositionUpdate;
      }
    }
    u(u0, "getCompositionEventType");
    function o0(e, t) {
      return e === Bt && t.keyCode === Jy;
    }
    u(o0, "isFallbackCompositionStart");
    function ig(e, t) {
      switch (e) {
        case on:
          return i0.indexOf(t.keyCode) !== -1;
        case Bt:
          return t.keyCode !== Jy;
        case Gn:
        case ni:
        case Wt:
          return !0;
        default:
          return !1;
      }
    }
    u(ig, "isFallbackCompositionEnd");
    function ag(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    u(ag, "getDataFromCustomEvent");
    function lg(e) {
      return e.locale === "ko";
    }
    u(lg, "isUsingKoreanIME");
    var zs = !1;
    function s0(e, t, i, a) {
      var o, f;
      if (Sh ? o = u0(e) : zs ? ig(e, i) && (o = Ka.compositionEnd) : o0(e, i) && (o = Ka.compositionStart), !o)
        return null;
      eg && !lg(i) && (!zs && o === Ka.compositionStart ? zs = XS(a) : o === Ka.compositionEnd && zs && (f = Xy()));
      var d = n0.getPooled(o, t, i, a);
      if (f)
        d.data = f;
      else {
        var p = ag(i);
        p !== null && (d.data = p);
      }
      return As(d), d;
    }
    u(s0, "extractCompositionEvent");
    function f0(e, t) {
      switch (e) {
        case ei:
          return ag(t);
        case Gn:
          var i = t.which;
          return i !== tg ? null : (rg = !0, ng);
        case xu:
          var a = t.data;
          return a === ng && rg ? null : a;
        default:
          return null;
      }
    }
    u(f0, "getNativeBeforeInputChars");
    function c0(e, t) {
      if (zs) {
        if (e === ei || !Sh && ig(e, t)) {
          var i = Xy();
          return KS(), zs = !1, i;
        }
        return null;
      }
      switch (e) {
        case bu:
          return null;
        case Gn:
          if (!l0(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case ei:
          return eg && !lg(t) ? null : t.data;
        default:
          return null;
      }
    }
    u(c0, "getFallbackBeforeInputChars");
    function d0(e, t, i, a) {
      var o;
      if (a0 ? o = f0(e, i) : o = c0(e, i), !o)
        return null;
      var f = r0.getPooled(Ka.beforeInput, t, i, a);
      return f.data = o, As(f), f;
    }
    u(d0, "extractBeforeInputEvent");
    var p0 = {
      eventTypes: Ka,
      extractEvents: function(e, t, i, a, o) {
        var f = s0(e, t, i, a), d = d0(e, t, i, a);
        return f === null ? d : d === null ? f : [f, d];
      }
    }, v0 = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function ug(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!v0[e.type] : t === "textarea";
    }
    u(ug, "isTextInputElement");
    var og = {
      change: {
        phasedRegistrationNames: {
          bubbled: "onChange",
          captured: "onChangeCapture"
        },
        dependencies: [Wt, ki, hu, $n, Eu, Bt, on, Mi]
      }
    };
    function sg(e, t, i) {
      var a = yr.getPooled(og.change, e, t, i);
      return a.type = "change", rr(i), As(a), a;
    }
    u(sg, "createAndAccumulateChangeEvent");
    var Hc = null, Vc = null;
    function h0(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    u(h0, "shouldUseChangeEvent");
    function m0(e) {
      var t = sg(Vc, e, _u(e));
      da(y0, t);
    }
    u(m0, "manualDispatchChangeEvent");
    function y0(e) {
      is(e);
    }
    u(y0, "runEventInBatch");
    function Ap(e) {
      var t = $u(e);
      if (No(t))
        return e;
    }
    u(Ap, "getInstIfValueChanged");
    function g0(e, t) {
      if (e === ki)
        return t;
    }
    u(g0, "getTargetInstForChangeEvent");
    var Ch = !1;
    nn && (Ch = ku("input") && (!document.documentMode || document.documentMode > 9));
    function T0(e, t) {
      Hc = e, Vc = t, Hc.attachEvent("onpropertychange", cg);
    }
    u(T0, "startWatchingForValueChange");
    function fg() {
      !Hc || (Hc.detachEvent("onpropertychange", cg), Hc = null, Vc = null);
    }
    u(fg, "stopWatchingForValueChange");
    function cg(e) {
      e.propertyName === "value" && Ap(Vc) && m0(e);
    }
    u(cg, "handlePropertyChange");
    function E0(e, t, i) {
      e === $n ? (fg(), T0(t, i)) : e === Wt && fg();
    }
    u(E0, "handleEventsForInputEventPolyfill");
    function S0(e, t) {
      if (e === Mi || e === on || e === Bt)
        return Ap(Vc);
    }
    u(S0, "getTargetInstForInputEventPolyfill");
    function C0(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    u(C0, "shouldUseClickEvent");
    function b0(e, t) {
      if (e === hu)
        return Ap(t);
    }
    u(b0, "getTargetInstForClickEvent");
    function x0(e, t) {
      if (e === Eu || e === ki)
        return Ap(t);
    }
    u(x0, "getTargetInstForInputOrChangeEvent");
    function R0(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ou(e, "number", e.value);
    }
    u(R0, "handleControlledInputBlur");
    var w0 = {
      eventTypes: og,
      _isInputEventSupported: Ch,
      extractEvents: function(e, t, i, a, o) {
        var f = t ? $u(t) : window, d, p;
        if (h0(f) ? d = g0 : ug(f) ? Ch ? d = x0 : (d = S0, p = E0) : C0(f) && (d = b0), d) {
          var m = d(e, t);
          if (m) {
            var g = sg(m, i, a);
            return g;
          }
        }
        p && p(e, f, t), e === Wt && R0(f);
      }
    }, Ic = yr.extend({
      view: null,
      detail: null
    }), _0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function k0(e) {
      var t = this, i = t.nativeEvent;
      if (i.getModifierState)
        return i.getModifierState(e);
      var a = _0[e];
      return a ? !!i[a] : !1;
    }
    u(k0, "modifierStateGetter");
    function bh(e) {
      return k0;
    }
    u(bh, "getEventModifierState");
    var dg = 0, pg = 0, vg = !1, hg = !1, jc = Ic.extend({
      screenX: null,
      screenY: null,
      clientX: null,
      clientY: null,
      pageX: null,
      pageY: null,
      ctrlKey: null,
      shiftKey: null,
      altKey: null,
      metaKey: null,
      getModifierState: bh,
      button: null,
      buttons: null,
      relatedTarget: function(e) {
        return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement);
      },
      movementX: function(e) {
        if ("movementX" in e)
          return e.movementX;
        var t = dg;
        return dg = e.screenX, vg ? e.type === "mousemove" ? e.screenX - t : 0 : (vg = !0, 0);
      },
      movementY: function(e) {
        if ("movementY" in e)
          return e.movementY;
        var t = pg;
        return pg = e.screenY, hg ? e.type === "mousemove" ? e.screenY - t : 0 : (hg = !0, 0);
      }
    }), mg = jc.extend({
      pointerId: null,
      width: null,
      height: null,
      pressure: null,
      tangentialPressure: null,
      tiltX: null,
      tiltY: null,
      twist: null,
      pointerType: null,
      isPrimary: null
    }), Wc = {
      mouseEnter: {
        registrationName: "onMouseEnter",
        dependencies: [Oi, ri]
      },
      mouseLeave: {
        registrationName: "onMouseLeave",
        dependencies: [Oi, ri]
      },
      pointerEnter: {
        registrationName: "onPointerEnter",
        dependencies: [Nn, ze]
      },
      pointerLeave: {
        registrationName: "onPointerLeave",
        dependencies: [Nn, ze]
      }
    }, D0 = {
      eventTypes: Wc,
      extractEvents: function(e, t, i, a, o) {
        var f = e === ri || e === ze, d = e === Oi || e === Nn;
        if (f && (o & Xl) === 0 && (i.relatedTarget || i.fromElement) || !d && !f)
          return null;
        var p;
        if (a.window === a)
          p = a;
        else {
          var m = a.ownerDocument;
          m ? p = m.defaultView || m.parentWindow : p = window;
        }
        var g, E;
        if (d) {
          g = t;
          var O = i.relatedTarget || i.toElement;
          if (E = O ? Lc(O) : null, E !== null) {
            var b = Sn(E);
            (E !== b || E.tag !== ae && E.tag !== ge) && (E = null);
          }
        } else
          g = null, E = t;
        if (g === E)
          return null;
        var N, V, W, oe;
        e === Oi || e === ri ? (N = jc, V = Wc.mouseLeave, W = Wc.mouseEnter, oe = "mouse") : (e === Nn || e === ze) && (N = mg, V = Wc.pointerLeave, W = Wc.pointerEnter, oe = "pointer");
        var de = g == null ? p : $u(g), $e = E == null ? p : $u(E), Oe = N.getPooled(V, g, i, a);
        Oe.type = oe + "leave", Oe.target = de, Oe.relatedTarget = $e;
        var nt = N.getPooled(W, E, i, a);
        return nt.type = oe + "enter", nt.target = $e, nt.relatedTarget = de, GS(Oe, nt, g, E), (o & Kl) === 0 ? [Oe] : [Oe, nt];
      }
    };
    function O0(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    u(O0, "is");
    var qu = typeof Object.is == "function" ? Object.is : O0, N0 = Object.prototype.hasOwnProperty;
    function Bc(e, t) {
      if (qu(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var i = Object.keys(e), a = Object.keys(t);
      if (i.length !== a.length)
        return !1;
      for (var o = 0; o < i.length; o++)
        if (!N0.call(t, i[o]) || !qu(e[i[o]], t[i[o]]))
          return !1;
      return !0;
    }
    u(Bc, "shallowEqual");
    var M0 = nn && "documentMode" in document && document.documentMode <= 11, yg = {
      select: {
        phasedRegistrationNames: {
          bubbled: "onSelect",
          captured: "onSelectCapture"
        },
        dependencies: [Wt, yu, gu, $n, Bt, on, ni, Cu, Mi]
      }
    }, Ps = null, xh = null, Qc = null, Rh = !1;
    function U0(e) {
      if ("selectionStart" in e && ju(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, i = t.getSelection();
      return {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      };
    }
    u(U0, "getSelection$1");
    function gg(e) {
      return e.window === e ? e.document : e.nodeType === Ri ? e : e.ownerDocument;
    }
    u(gg, "getEventTargetDocument");
    function Tg(e, t) {
      var i = gg(t);
      if (Rh || Ps == null || Ps !== Iu(i))
        return null;
      var a = U0(Ps);
      if (!Qc || !Bc(Qc, a)) {
        Qc = a;
        var o = yr.getPooled(yg.select, xh, e, t);
        return o.type = "select", o.target = Ps, As(o), o;
      }
      return null;
    }
    u(Tg, "constructSelectEvent");
    var A0 = {
      eventTypes: yg,
      extractEvents: function(e, t, i, a, o, f) {
        var d = f || gg(a);
        if (!d || !Dl("onSelect", d))
          return null;
        var p = t ? $u(t) : window;
        switch (e) {
          case $n:
            (ug(p) || p.contentEditable === "true") && (Ps = p, xh = t, Qc = null);
            break;
          case Wt:
            Ps = null, xh = null, Qc = null;
            break;
          case ni:
            Rh = !0;
            break;
          case yu:
          case Cu:
          case gu:
            return Rh = !1, Tg(i, a);
          case Mi:
            if (M0)
              break;
          case Bt:
          case on:
            return Tg(i, a);
        }
        return null;
      }
    }, L0 = yr.extend({
      animationName: null,
      elapsedTime: null,
      pseudoElement: null
    }), z0 = yr.extend({
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), P0 = Ic.extend({
      relatedTarget: null
    });
    function Lp(e) {
      var t, i = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && i === 13 && (t = 13)) : t = i, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    u(Lp, "getEventCharCode");
    var F0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, H0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function V0(e) {
      if (e.key) {
        var t = F0[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var i = Lp(e);
        return i === 13 ? "Enter" : String.fromCharCode(i);
      }
      return e.type === "keydown" || e.type === "keyup" ? H0[e.keyCode] || "Unidentified" : "";
    }
    u(V0, "getEventKey");
    var I0 = Ic.extend({
      key: V0,
      location: null,
      ctrlKey: null,
      shiftKey: null,
      altKey: null,
      metaKey: null,
      repeat: null,
      locale: null,
      getModifierState: bh,
      charCode: function(e) {
        return e.type === "keypress" ? Lp(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Lp(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), j0 = jc.extend({
      dataTransfer: null
    }), W0 = Ic.extend({
      touches: null,
      targetTouches: null,
      changedTouches: null,
      altKey: null,
      metaKey: null,
      ctrlKey: null,
      shiftKey: null,
      getModifierState: bh
    }), B0 = yr.extend({
      propertyName: null,
      elapsedTime: null,
      pseudoElement: null
    }), Q0 = jc.extend({
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: null,
      deltaMode: null
    }), Y0 = [Nf, Wo, xa, Ra, El, Qo, Da, Vf, If, On, Eu, Ar, Di, jf, Wf, Yo, Bf, Qf, Yf, Lr, zt, Ot, Ni, Xt, qo, Oa, Sl, qf, Cl, Jo, es], $0 = {
      eventTypes: dc,
      extractEvents: function(e, t, i, a, o) {
        var f = vs.get(e);
        if (!f)
          return null;
        var d;
        switch (e) {
          case Gn:
            if (Lp(i) === 0)
              return null;
          case Bt:
          case on:
            d = I0;
            break;
          case Wt:
          case $n:
            d = P0;
            break;
          case hu:
            if (i.button === 2)
              return null;
          case wa:
          case Pf:
          case ni:
          case Su:
          case Cu:
          case Oi:
          case ri:
          case yu:
            d = jc;
            break;
          case Id:
          case gu:
          case _a:
          case Ff:
          case Tu:
          case Hf:
          case Bo:
          case ka:
            d = j0;
            break;
          case Xo:
          case Ko:
          case Zo:
          case Xf:
            d = W0;
            break;
          case Vd:
          case Mf:
          case Uf:
            d = L0;
            break;
          case Ru:
            d = B0;
            break;
          case zr:
            d = Ic;
            break;
          case Kf:
            d = Q0;
            break;
          case Lf:
          case zf:
          case bu:
            d = z0;
            break;
          case ti:
          case $o:
          case $f:
          case Gf:
          case Go:
          case Nn:
          case ze:
          case ft:
            d = mg;
            break;
          default:
            Y0.indexOf(e) === -1 && T("SimpleEventPlugin: Unhandled event type, `%s`. This warning is likely caused by a bug in React. Please file an issue.", e), d = yr;
            break;
        }
        var p = d.getPooled(f, t, i, a);
        return As(p), p;
      }
    }, G0 = ["ResponderEventPlugin", "SimpleEventPlugin", "EnterLeaveEventPlugin", "ChangeEventPlugin", "SelectEventPlugin", "BeforeInputEventPlugin"];
    ql(G0), kt(gh, Pl, $u), Ti({
      SimpleEventPlugin: $0,
      EnterLeaveEventPlugin: D0,
      ChangeEventPlugin: w0,
      SelectEventPlugin: A0,
      BeforeInputEventPlugin: p0
    });
    var Eg = "\u269B", q0 = "\u26D4", bn = typeof performance < "u" && typeof performance.mark == "function" && typeof performance.clearMarks == "function" && typeof performance.measure == "function" && typeof performance.clearMeasures == "function", Xu = null, Xi = null, Ku = null, zp = !1, Pp = !1, wh = !1, Yc = 0, Ki = 0, Fp = /* @__PURE__ */ new Set(), _h = /* @__PURE__ */ u(function(e) {
      return Eg + " " + e;
    }, "formatMarkName"), X0 = /* @__PURE__ */ u(function(e, t) {
      var i = t ? q0 + " " : Eg + " ", a = t ? " Warning: " + t : "";
      return "" + i + e + a;
    }, "formatLabel"), Fs = /* @__PURE__ */ u(function(e) {
      performance.mark(_h(e));
    }, "beginMark"), K0 = /* @__PURE__ */ u(function(e) {
      performance.clearMarks(_h(e));
    }, "clearMark"), Hs = /* @__PURE__ */ u(function(e, t, i) {
      var a = _h(t), o = X0(e, i);
      try {
        performance.measure(o, a);
      } catch {
      }
      performance.clearMarks(a), performance.clearMeasures(o);
    }, "endMark"), kh = /* @__PURE__ */ u(function(e, t) {
      return e + " (#" + t + ")";
    }, "getFiberMarkName"), Dh = /* @__PURE__ */ u(function(e, t, i) {
      return i === null ? e + " [" + (t ? "update" : "mount") + "]" : e + "." + i;
    }, "getFiberLabel"), Oh = /* @__PURE__ */ u(function(e, t) {
      var i = Q(e.type) || "Unknown", a = e._debugID, o = e.alternate !== null, f = Dh(i, o, t);
      if (zp && Fp.has(f))
        return !1;
      Fp.add(f);
      var d = kh(f, a);
      return Fs(d), !0;
    }, "beginFiberMark"), Sg = /* @__PURE__ */ u(function(e, t) {
      var i = Q(e.type) || "Unknown", a = e._debugID, o = e.alternate !== null, f = Dh(i, o, t), d = kh(f, a);
      K0(d);
    }, "clearFiberMark"), Hp = /* @__PURE__ */ u(function(e, t, i) {
      var a = Q(e.type) || "Unknown", o = e._debugID, f = e.alternate !== null, d = Dh(a, f, t), p = kh(d, o);
      Hs(d, p, i);
    }, "endFiberMark"), Vp = /* @__PURE__ */ u(function(e) {
      switch (e.tag) {
        case se:
        case ae:
        case ge:
        case Ce:
        case It:
        case z:
        case wn:
        case pn:
          return !0;
        default:
          return !1;
      }
    }, "shouldIgnoreFiber"), Z0 = /* @__PURE__ */ u(function() {
      Xi !== null && Ku !== null && Sg(Ku, Xi), Ku = null, Xi = null, wh = !1;
    }, "clearPendingPhaseMeasurement"), J0 = /* @__PURE__ */ u(function() {
      for (var e = Xu; e; )
        e._debugIsCurrentlyTiming && Hp(e, null, null), e = e.return;
    }, "pauseTimers"), Cg = /* @__PURE__ */ u(function(e) {
      e.return !== null && Cg(e.return), e._debugIsCurrentlyTiming && Oh(e, null);
    }, "resumeTimersRecursively"), eC = /* @__PURE__ */ u(function() {
      Xu !== null && Cg(Xu);
    }, "resumeTimers");
    function Ip() {
      Ki++;
    }
    u(Ip, "recordEffect");
    function tC() {
      zp && (Pp = !0), Xi !== null && Xi !== "componentWillMount" && Xi !== "componentWillReceiveProps" && (wh = !0);
    }
    u(tC, "recordScheduleUpdate");
    function bg(e) {
      {
        if (!bn || Vp(e) || (Xu = e, !Oh(e, null)))
          return;
        e._debugIsCurrentlyTiming = !0;
      }
    }
    u(bg, "startWorkTimer");
    function xg(e) {
      {
        if (!bn || Vp(e))
          return;
        e._debugIsCurrentlyTiming = !1, Sg(e, null);
      }
    }
    u(xg, "cancelWorkTimer");
    function Rg(e) {
      {
        if (!bn || Vp(e) || (Xu = e.return, !e._debugIsCurrentlyTiming))
          return;
        e._debugIsCurrentlyTiming = !1, Hp(e, null, null);
      }
    }
    u(Rg, "stopWorkTimer");
    function nC(e) {
      {
        if (!bn || Vp(e) || (Xu = e.return, !e._debugIsCurrentlyTiming))
          return;
        e._debugIsCurrentlyTiming = !1;
        var t = e.tag === K ? "Rendering was suspended" : "An error was thrown inside this error boundary";
        Hp(e, null, t);
      }
    }
    u(nC, "stopFailedWorkTimer");
    function Zi(e, t) {
      {
        if (!bn || (Z0(), !Oh(e, t)))
          return;
        Ku = e, Xi = t;
      }
    }
    u(Zi, "startPhaseTimer");
    function Ji() {
      {
        if (!bn)
          return;
        if (Xi !== null && Ku !== null) {
          var e = wh ? "Scheduled a cascading update" : null;
          Hp(Ku, Xi, e);
        }
        Xi = null, Ku = null;
      }
    }
    u(Ji, "stopPhaseTimer");
    function wg(e) {
      {
        if (Xu = e, !bn)
          return;
        Yc = 0, Fs("(React Tree Reconciliation)"), eC();
      }
    }
    u(wg, "startWorkLoopTimer");
    function _g(e, t) {
      {
        if (!bn)
          return;
        var i = null;
        if (e !== null)
          if (e.tag === se)
            i = "A top-level update interrupted the previous render";
          else {
            var a = Q(e.type) || "Unknown";
            i = "An update to " + a + " interrupted the previous render";
          }
        else
          Yc > 1 && (i = "There were cascading updates");
        Yc = 0;
        var o = t ? "(React Tree Reconciliation: Completed Root)" : "(React Tree Reconciliation: Yielded)";
        J0(), Hs(o, "(React Tree Reconciliation)", i);
      }
    }
    u(_g, "stopWorkLoopTimer");
    function rC() {
      {
        if (!bn)
          return;
        zp = !0, Pp = !1, Fp.clear(), Fs("(Committing Changes)");
      }
    }
    u(rC, "startCommitTimer");
    function iC() {
      {
        if (!bn)
          return;
        var e = null;
        Pp ? e = "Lifecycle hook scheduled a cascading update" : Yc > 0 && (e = "Caused by a cascading update in earlier commit"), Pp = !1, Yc++, zp = !1, Fp.clear(), Hs("(Committing Changes)", "(Committing Changes)", e);
      }
    }
    u(iC, "stopCommitTimer");
    function kg() {
      {
        if (!bn)
          return;
        Ki = 0, Fs("(Committing Snapshot Effects)");
      }
    }
    u(kg, "startCommitSnapshotEffectsTimer");
    function Dg() {
      {
        if (!bn)
          return;
        var e = Ki;
        Ki = 0, Hs("(Committing Snapshot Effects: " + e + " Total)", "(Committing Snapshot Effects)", null);
      }
    }
    u(Dg, "stopCommitSnapshotEffectsTimer");
    function Og() {
      {
        if (!bn)
          return;
        Ki = 0, Fs("(Committing Host Effects)");
      }
    }
    u(Og, "startCommitHostEffectsTimer");
    function Ng() {
      {
        if (!bn)
          return;
        var e = Ki;
        Ki = 0, Hs("(Committing Host Effects: " + e + " Total)", "(Committing Host Effects)", null);
      }
    }
    u(Ng, "stopCommitHostEffectsTimer");
    function Mg() {
      {
        if (!bn)
          return;
        Ki = 0, Fs("(Calling Lifecycle Methods)");
      }
    }
    u(Mg, "startCommitLifeCyclesTimer");
    function Ug() {
      {
        if (!bn)
          return;
        var e = Ki;
        Ki = 0, Hs("(Calling Lifecycle Methods: " + e + " Total)", "(Calling Lifecycle Methods)", null);
      }
    }
    u(Ug, "stopCommitLifeCyclesTimer");
    var Nh = [], jp;
    jp = [];
    var Za = -1;
    function Zu(e) {
      return {
        current: e
      };
    }
    u(Zu, "createCursor");
    function Fn(e, t) {
      if (Za < 0) {
        T("Unexpected pop.");
        return;
      }
      t !== jp[Za] && T("Unexpected Fiber popped."), e.current = Nh[Za], Nh[Za] = null, jp[Za] = null, Za--;
    }
    u(Fn, "pop");
    function Hn(e, t, i) {
      Za++, Nh[Za] = e.current, jp[Za] = i, e.current = t;
    }
    u(Hn, "push");
    var Mh;
    Mh = {};
    var gr = {};
    Object.freeze(gr);
    var Ja = Zu(gr), ea = Zu(!1), Uh = gr;
    function Vs(e, t, i) {
      return i && ta(t) ? Uh : Ja.current;
    }
    u(Vs, "getUnmaskedContext");
    function Ag(e, t, i) {
      {
        var a = e.stateNode;
        a.__reactInternalMemoizedUnmaskedChildContext = t, a.__reactInternalMemoizedMaskedChildContext = i;
      }
    }
    u(Ag, "cacheContext");
    function Is(e, t) {
      {
        var i = e.type, a = i.contextTypes;
        if (!a)
          return gr;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
          return o.__reactInternalMemoizedMaskedChildContext;
        var f = {};
        for (var d in a)
          f[d] = t[d];
        {
          var p = Q(i) || "Unknown";
          D(a, f, "context", p, be);
        }
        return o && Ag(e, t, f), f;
      }
    }
    u(Is, "getMaskedContext");
    function Wp() {
      return ea.current;
    }
    u(Wp, "hasContextChanged");
    function ta(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    u(ta, "isContextProvider");
    function Bp(e) {
      Fn(ea, e), Fn(Ja, e);
    }
    u(Bp, "popContext");
    function Ah(e) {
      Fn(ea, e), Fn(Ja, e);
    }
    u(Ah, "popTopLevelContextObject");
    function Lg(e, t, i) {
      {
        if (Ja.current !== gr)
          throw Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Hn(Ja, t, e), Hn(ea, i, e);
      }
    }
    u(Lg, "pushTopLevelContextObject");
    function zg(e, t, i) {
      {
        var a = e.stateNode, o = t.childContextTypes;
        if (typeof a.getChildContext != "function") {
          {
            var f = Q(t) || "Unknown";
            Mh[f] || (Mh[f] = !0, T("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", f, f));
          }
          return i;
        }
        var d;
        Zi(e, "getChildContext"), d = a.getChildContext(), Ji();
        for (var p in d)
          if (!(p in o))
            throw Error((Q(t) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var m = Q(t) || "Unknown";
          D(
            o,
            d,
            "child context",
            m,
            be
          );
        }
        return ie({}, i, {}, d);
      }
    }
    u(zg, "processChildContext");
    function Qp(e) {
      {
        var t = e.stateNode, i = t && t.__reactInternalMemoizedMergedChildContext || gr;
        return Uh = Ja.current, Hn(Ja, i, e), Hn(ea, ea.current, e), !0;
      }
    }
    u(Qp, "pushContextProvider");
    function Pg(e, t, i) {
      {
        var a = e.stateNode;
        if (!a)
          throw Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (i) {
          var o = zg(e, t, Uh);
          a.__reactInternalMemoizedMergedChildContext = o, Fn(ea, e), Fn(Ja, e), Hn(Ja, o, e), Hn(ea, i, e);
        } else
          Fn(ea, e), Hn(ea, i, e);
      }
    }
    u(Pg, "invalidateContextProvider");
    function aC(e) {
      {
        if (!(Li(e) && e.tag === re))
          throw Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case se:
              return t.stateNode.context;
            case re: {
              var i = t.type;
              if (ta(i))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    u(aC, "findCurrentUnmaskedContext");
    var Fg = 0, lC = 1, uC = 2, oC = fe.unstable_runWithPriority, Lh = fe.unstable_scheduleCallback, Hg = fe.unstable_cancelCallback, sC = fe.unstable_shouldYield, Vg = fe.unstable_requestPaint, zh = fe.unstable_now, fC = fe.unstable_getCurrentPriorityLevel, Yp = fe.unstable_ImmediatePriority, Ig = fe.unstable_UserBlockingPriority, jg = fe.unstable_NormalPriority, Wg = fe.unstable_LowPriority, Bg = fe.unstable_IdlePriority;
    if (!(at.__interactionsRef != null && at.__interactionsRef.current != null))
      throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at http://fb.me/react-profiling");
    var Qg = {}, Vn = 99, Fl = 98, oi = 97, Ph = 96, $c = 95, js = 90, cC = sC, dC = Vg !== void 0 ? Vg : function() {
    }, el = null, $p = null, Fh = !1, Yg = zh(), Tr = Yg < 1e4 ? zh : function() {
      return zh() - Yg;
    };
    function Ws() {
      switch (fC()) {
        case Yp:
          return Vn;
        case Ig:
          return Fl;
        case jg:
          return oi;
        case Wg:
          return Ph;
        case Bg:
          return $c;
        default:
          throw Error("Unknown priority level.");
      }
    }
    u(Ws, "getCurrentPriorityLevel");
    function $g(e) {
      switch (e) {
        case Vn:
          return Yp;
        case Fl:
          return Ig;
        case oi:
          return jg;
        case Ph:
          return Wg;
        case $c:
          return Bg;
        default:
          throw Error("Unknown priority level.");
      }
    }
    u($g, "reactPriorityToSchedulerPriority");
    function tl(e, t) {
      var i = $g(e);
      return oC(i, t);
    }
    u(tl, "runWithPriority$1");
    function Gc(e, t, i) {
      var a = $g(e);
      return Lh(a, t, i);
    }
    u(Gc, "scheduleCallback");
    function Gg(e) {
      return el === null ? (el = [e], $p = Lh(Yp, qg)) : el.push(e), Qg;
    }
    u(Gg, "scheduleSyncCallback");
    function pC(e) {
      e !== Qg && Hg(e);
    }
    u(pC, "cancelCallback");
    function na() {
      if ($p !== null) {
        var e = $p;
        $p = null, Hg(e);
      }
      qg();
    }
    u(na, "flushSyncCallbackQueue");
    function qg() {
      if (!Fh && el !== null) {
        Fh = !0;
        var e = 0;
        try {
          var t = !0, i = el;
          tl(Vn, function() {
            for (; e < i.length; e++) {
              var a = i[e];
              do
                a = a(t);
              while (a !== null);
            }
          }), el = null;
        } catch (a) {
          throw el !== null && (el = el.slice(e + 1)), Lh(Yp, na), a;
        } finally {
          Fh = !1;
        }
      }
    }
    u(qg, "flushSyncCallbackQueueImpl");
    var sn = 0, Ct = 1, Ir = 2, Bs = 4, ra = 8, qc = 1073741823, q = 0, ia = 1, Ju = 2, Xg = 3, Fe = qc, Kg = Fe - 1, Gp = 10, qp = Kg - 1;
    function Hh(e) {
      return qp - (e / Gp | 0);
    }
    u(Hh, "msToExpirationTime");
    function eo(e) {
      return (qp - e) * Gp;
    }
    u(eo, "expirationTimeToMs");
    function vC(e, t) {
      return ((e / t | 0) + 1) * t;
    }
    u(vC, "ceiling");
    function Vh(e, t, i) {
      return qp - vC(qp - e + t / Gp, i / Gp);
    }
    u(Vh, "computeExpirationBucket");
    var Xc = 5e3, Ih = 250;
    function hC(e) {
      return Vh(e, Xc, Ih);
    }
    u(hC, "computeAsyncExpiration");
    function mC(e, t) {
      return Vh(e, t, Ih);
    }
    u(mC, "computeSuspenseExpiration");
    var Zg = 500, Jg = 100;
    function eT(e) {
      return Vh(e, Zg, Jg);
    }
    u(eT, "computeInteractiveExpiration");
    function tT(e, t) {
      if (t === Fe)
        return Vn;
      if (t === ia || t === Ju)
        return $c;
      var i = eo(t) - eo(e);
      return i <= 0 ? Vn : i <= Zg + Jg ? Fl : i <= Xc + Ih ? oi : $c;
    }
    u(tT, "inferPriorityFromExpirationTime");
    var si = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var yC = /* @__PURE__ */ u(function(e) {
        for (var t = null, i = e; i !== null; )
          i.mode & Ct && (t = i), i = i.return;
        return t;
      }, "findStrictRoot"), to = /* @__PURE__ */ u(function(e) {
        var t = [];
        return e.forEach(function(i) {
          t.push(i);
        }), t.sort().join(", ");
      }, "setToSortedString"), Kc = [], Zc = [], Jc = [], ed = [], td = [], nd = [], no = /* @__PURE__ */ new Set();
      si.recordUnsafeLifecycleWarnings = function(e, t) {
        no.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && Kc.push(e), e.mode & Ct && typeof t.UNSAFE_componentWillMount == "function" && Zc.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Jc.push(e), e.mode & Ct && typeof t.UNSAFE_componentWillReceiveProps == "function" && ed.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && td.push(e), e.mode & Ct && typeof t.UNSAFE_componentWillUpdate == "function" && nd.push(e));
      }, si.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Kc.length > 0 && (Kc.forEach(function(b) {
          e.add(Q(b.type) || "Component"), no.add(b.type);
        }), Kc = []);
        var t = /* @__PURE__ */ new Set();
        Zc.length > 0 && (Zc.forEach(function(b) {
          t.add(Q(b.type) || "Component"), no.add(b.type);
        }), Zc = []);
        var i = /* @__PURE__ */ new Set();
        Jc.length > 0 && (Jc.forEach(function(b) {
          i.add(Q(b.type) || "Component"), no.add(b.type);
        }), Jc = []);
        var a = /* @__PURE__ */ new Set();
        ed.length > 0 && (ed.forEach(function(b) {
          a.add(Q(b.type) || "Component"), no.add(b.type);
        }), ed = []);
        var o = /* @__PURE__ */ new Set();
        td.length > 0 && (td.forEach(function(b) {
          o.add(Q(b.type) || "Component"), no.add(b.type);
        }), td = []);
        var f = /* @__PURE__ */ new Set();
        if (nd.length > 0 && (nd.forEach(function(b) {
          f.add(Q(b.type) || "Component"), no.add(b.type);
        }), nd = []), t.size > 0) {
          var d = to(t);
          T(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, d);
        }
        if (a.size > 0) {
          var p = to(a);
          T(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://fb.me/react-derived-state

Please update the following components: %s`, p);
        }
        if (f.size > 0) {
          var m = to(f);
          T(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, m);
        }
        if (e.size > 0) {
          var g = to(e);
          gt(`componentWillMount has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (i.size > 0) {
          var E = to(i);
          gt(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://fb.me/react-derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, E);
        }
        if (o.size > 0) {
          var O = to(o);
          gt(`componentWillUpdate has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, O);
        }
      };
      var Xp = /* @__PURE__ */ new Map(), nT = /* @__PURE__ */ new Set();
      si.recordLegacyContextWarning = function(e, t) {
        var i = yC(e);
        if (i === null) {
          T("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!nT.has(e.type)) {
          var a = Xp.get(i);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (a === void 0 && (a = [], Xp.set(i, a)), a.push(e));
        }
      }, si.flushLegacyContextWarning = function() {
        Xp.forEach(function(e, t) {
          if (e.length !== 0) {
            var i = e[0], a = /* @__PURE__ */ new Set();
            e.forEach(function(d) {
              a.add(Q(d.type) || "Component"), nT.add(d.type);
            });
            var o = to(a), f = qt(i);
            T(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://fb.me/react-legacy-context%s`, o, f);
          }
        });
      }, si.discardPendingWarnings = function() {
        Kc = [], Zc = [], Jc = [], ed = [], td = [], nd = [], Xp = /* @__PURE__ */ new Map();
      };
    }
    var jr = null, Qs = null, gC = /* @__PURE__ */ u(function(e) {
      jr = e;
    }, "setRefreshHandler");
    function Ys(e) {
      {
        if (jr === null)
          return e;
        var t = jr(e);
        return t === void 0 ? e : t.current;
      }
    }
    u(Ys, "resolveFunctionForHotReloading");
    function jh(e) {
      return Ys(e);
    }
    u(jh, "resolveClassForHotReloading");
    function Wh(e) {
      {
        if (jr === null)
          return e;
        var t = jr(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var i = Ys(e.render);
            if (e.render !== i) {
              var a = {
                $$typeof: Ta,
                render: i
              };
              return e.displayName !== void 0 && (a.displayName = e.displayName), a;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    u(Wh, "resolveForwardRefForHotReloading");
    function rT(e, t) {
      {
        if (jr === null)
          return !1;
        var i = e.elementType, a = t.type, o = !1, f = typeof a == "object" && a !== null ? a.$$typeof : null;
        switch (e.tag) {
          case re: {
            typeof a == "function" && (o = !0);
            break;
          }
          case Re: {
            (typeof a == "function" || f === bi) && (o = !0);
            break;
          }
          case B: {
            (f === Ta || f === bi) && (o = !0);
            break;
          }
          case ke:
          case Ye: {
            (f === cl || f === bi) && (o = !0);
            break;
          }
          default:
            return !1;
        }
        if (o) {
          var d = jr(i);
          if (d !== void 0 && d === jr(a))
            return !0;
        }
        return !1;
      }
    }
    u(rT, "isCompatibleFamilyForHotReloading");
    function iT(e) {
      {
        if (jr === null || typeof WeakSet != "function")
          return;
        Qs === null && (Qs = /* @__PURE__ */ new WeakSet()), Qs.add(e);
      }
    }
    u(iT, "markFailedErrorBoundaryForHotReloading");
    var TC = /* @__PURE__ */ u(function(e, t) {
      {
        if (jr === null)
          return;
        var i = t.staleFamilies, a = t.updatedFamilies;
        Ql(), kE(function() {
          Bh(e.current, a, i);
        });
      }
    }, "scheduleRefresh"), EC = /* @__PURE__ */ u(function(e, t) {
      {
        if (e.context !== gr)
          return;
        Ql(), Yb(function() {
          Sd(t, e, null, null);
        });
      }
    }, "scheduleRoot");
    function Bh(e, t, i) {
      {
        var a = e.alternate, o = e.child, f = e.sibling, d = e.tag, p = e.type, m = null;
        switch (d) {
          case Re:
          case Ye:
          case re:
            m = p;
            break;
          case B:
            m = p.render;
            break;
        }
        if (jr === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var g = !1, E = !1;
        if (m !== null) {
          var O = jr(m);
          O !== void 0 && (i.has(O) ? E = !0 : t.has(O) && (d === re ? E = !0 : g = !0));
        }
        Qs !== null && (Qs.has(e) || a !== null && Qs.has(a)) && (E = !0), E && (e._debugNeedsRemount = !0), (E || g) && Yr(e, Fe), o !== null && !E && Bh(o, t, i), f !== null && Bh(f, t, i);
      }
    }
    u(Bh, "scheduleFibersWithFamiliesRecursively");
    var SC = /* @__PURE__ */ u(function(e, t) {
      {
        var i = /* @__PURE__ */ new Set(), a = new Set(t.map(function(o) {
          return o.current;
        }));
        return Qh(e.current, a, i), i;
      }
    }, "findHostInstancesForRefresh");
    function Qh(e, t, i) {
      {
        var a = e.child, o = e.sibling, f = e.tag, d = e.type, p = null;
        switch (f) {
          case Re:
          case Ye:
          case re:
            p = d;
            break;
          case B:
            p = d.render;
            break;
        }
        var m = !1;
        p !== null && t.has(p) && (m = !0), m ? CC(e, i) : a !== null && Qh(a, t, i), o !== null && Qh(o, t, i);
      }
    }
    u(Qh, "findHostInstancesForMatchingFibersRecursively");
    function CC(e, t) {
      {
        var i = bC(e, t);
        if (i)
          return;
        for (var a = e; ; ) {
          switch (a.tag) {
            case ae:
              t.add(a.stateNode);
              return;
            case Ce:
              t.add(a.stateNode.containerInfo);
              return;
            case se:
              t.add(a.stateNode.containerInfo);
              return;
          }
          if (a.return === null)
            throw new Error("Expected to reach root first.");
          a = a.return;
        }
      }
    }
    u(CC, "findHostInstancesForFiberShallowly");
    function bC(e, t) {
      for (var i = e, a = !1; ; ) {
        if (i.tag === ae)
          a = !0, t.add(i.stateNode);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return a;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return a;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
      return !1;
    }
    u(bC, "findChildHostInstancesForFiberShallowly");
    function fi(e, t) {
      if (e && e.defaultProps) {
        var i = ie({}, t), a = e.defaultProps;
        for (var o in a)
          i[o] === void 0 && (i[o] = a[o]);
        return i;
      }
      return t;
    }
    u(fi, "resolveDefaultProps");
    function xC(e) {
      if (_d(e), e._status !== Ea)
        throw e._result;
      return e._result;
    }
    u(xC, "readLazyComponentType");
    var Yh = Zu(null), $h;
    $h = {};
    var Kp = null, $s = null, Zp = null, Jp = !1;
    function ev() {
      Kp = null, $s = null, Zp = null, Jp = !1;
    }
    u(ev, "resetContextDependencies");
    function aT() {
      Jp = !0;
    }
    u(aT, "enterDisallowedContextReadInDEV");
    function lT() {
      Jp = !1;
    }
    u(lT, "exitDisallowedContextReadInDEV");
    function uT(e, t) {
      var i = e.type._context;
      Hn(Yh, i._currentValue, e), i._currentValue = t, i._currentRenderer !== void 0 && i._currentRenderer !== null && i._currentRenderer !== $h && T("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), i._currentRenderer = $h;
    }
    u(uT, "pushProvider");
    function Gh(e) {
      var t = Yh.current;
      Fn(Yh, e);
      var i = e.type._context;
      i._currentValue = t;
    }
    u(Gh, "popProvider");
    function RC(e, t, i) {
      if (qu(i, t))
        return 0;
      var a = typeof e._calculateChangedBits == "function" ? e._calculateChangedBits(i, t) : qc;
      return (a & qc) !== a && T("calculateChangedBits: Expected the return value to be a 31-bit integer. Instead received: %s", a), a | 0;
    }
    u(RC, "calculateChangedBits");
    function oT(e, t) {
      for (var i = e; i !== null; ) {
        var a = i.alternate;
        if (i.childExpirationTime < t)
          i.childExpirationTime = t, a !== null && a.childExpirationTime < t && (a.childExpirationTime = t);
        else if (a !== null && a.childExpirationTime < t)
          a.childExpirationTime = t;
        else
          break;
        i = i.return;
      }
    }
    u(oT, "scheduleWorkOnParentPath");
    function wC(e, t, i, a) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var f = void 0, d = o.dependencies;
        if (d !== null) {
          f = o.child;
          for (var p = d.firstContext; p !== null; ) {
            if (p.context === t && (p.observedBits & i) !== 0) {
              if (o.tag === re) {
                var m = Hl(a, null);
                m.tag = tv, Vl(o, m);
              }
              o.expirationTime < a && (o.expirationTime = a);
              var g = o.alternate;
              g !== null && g.expirationTime < a && (g.expirationTime = a), oT(o.return, a), d.expirationTime < a && (d.expirationTime = a);
              break;
            }
            p = p.next;
          }
        } else
          o.tag === z ? f = o.type === e.type ? null : o.child : f = o.child;
        if (f !== null)
          f.return = o;
        else
          for (f = o; f !== null; ) {
            if (f === e) {
              f = null;
              break;
            }
            var E = f.sibling;
            if (E !== null) {
              E.return = f.return, f = E;
              break;
            }
            f = f.return;
          }
        o = f;
      }
    }
    u(wC, "propagateContextChange");
    function Gs(e, t) {
      Kp = e, $s = null, Zp = null;
      var i = e.dependencies;
      if (i !== null) {
        var a = i.firstContext;
        a !== null && (i.expirationTime >= t && Jm(), i.firstContext = null);
      }
    }
    u(Gs, "prepareToReadContext");
    function Vt(e, t) {
      if (Jp && T("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Zp !== e) {
        if (!(t === !1 || t === 0)) {
          var i;
          typeof t != "number" || t === qc ? (Zp = e, i = qc) : i = t;
          var a = {
            context: e,
            observedBits: i,
            next: null
          };
          if ($s === null) {
            if (Kp === null)
              throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
            $s = a, Kp.dependencies = {
              expirationTime: q,
              firstContext: a,
              responders: null
            };
          } else
            $s = $s.next = a;
        }
      }
      return e._currentValue;
    }
    u(Vt, "readContext");
    var sT = 0, fT = 1, tv = 2, qh = 3, nv = !1, Xh, rv;
    Xh = !1, rv = null;
    function Kh(e) {
      var t = {
        baseState: e.memoizedState,
        baseQueue: null,
        shared: {
          pending: null
        },
        effects: null
      };
      e.updateQueue = t;
    }
    u(Kh, "initializeUpdateQueue");
    function Zh(e, t) {
      var i = t.updateQueue, a = e.updateQueue;
      if (i === a) {
        var o = {
          baseState: a.baseState,
          baseQueue: a.baseQueue,
          shared: a.shared,
          effects: a.effects
        };
        t.updateQueue = o;
      }
    }
    u(Zh, "cloneUpdateQueue");
    function Hl(e, t) {
      var i = {
        expirationTime: e,
        suspenseConfig: t,
        tag: sT,
        payload: null,
        callback: null,
        next: null
      };
      return i.next = i, i.priority = Ws(), i;
    }
    u(Hl, "createUpdate");
    function Vl(e, t) {
      var i = e.updateQueue;
      if (i !== null) {
        var a = i.shared, o = a.pending;
        o === null ? t.next = t : (t.next = o.next, o.next = t), a.pending = t, rv === a && !Xh && (T("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Xh = !0);
      }
    }
    u(Vl, "enqueueUpdate");
    function cT(e, t) {
      var i = e.alternate;
      i !== null && Zh(i, e);
      var a = e.updateQueue, o = a.baseQueue;
      o === null ? (a.baseQueue = t.next = t, t.next = t) : (t.next = o.next, o.next = t);
    }
    u(cT, "enqueueCapturedUpdate");
    function _C(e, t, i, a, o, f) {
      switch (i.tag) {
        case fT: {
          var d = i.payload;
          if (typeof d == "function") {
            aT(), e.mode & Ct && d.call(f, a, o);
            var p = d.call(f, a, o);
            return lT(), p;
          }
          return d;
        }
        case qh:
          e.effectTag = e.effectTag & ~En | Ke;
        case sT: {
          var m = i.payload, g;
          return typeof m == "function" ? (aT(), e.mode & Ct && m.call(f, a, o), g = m.call(f, a, o), lT()) : g = m, g == null ? a : ie({}, a, g);
        }
        case tv:
          return nv = !0, a;
      }
      return a;
    }
    u(_C, "getStateFromUpdate");
    function rd(e, t, i, a) {
      var o = e.updateQueue;
      nv = !1, rv = o.shared;
      var f = o.baseQueue, d = o.shared.pending;
      if (d !== null) {
        if (f !== null) {
          var p = f.next, m = d.next;
          f.next = m, d.next = p;
        }
        f = d, o.shared.pending = null;
        var g = e.alternate;
        if (g !== null) {
          var E = g.updateQueue;
          E !== null && (E.baseQueue = d);
        }
      }
      if (f !== null) {
        var O = f.next, b = o.baseState, N = q, V = null, W = null, oe = null;
        if (O !== null) {
          var de = O;
          do {
            var $e = de.expirationTime;
            if ($e < a) {
              var Oe = {
                expirationTime: de.expirationTime,
                suspenseConfig: de.suspenseConfig,
                tag: de.tag,
                payload: de.payload,
                callback: de.callback,
                next: null
              };
              oe === null ? (W = oe = Oe, V = b) : oe = oe.next = Oe, $e > N && (N = $e);
            } else {
              if (oe !== null) {
                var nt = {
                  expirationTime: Fe,
                  suspenseConfig: de.suspenseConfig,
                  tag: de.tag,
                  payload: de.payload,
                  callback: de.callback,
                  next: null
                };
                oe = oe.next = nt;
              }
              ME($e, de.suspenseConfig), b = _C(e, o, de, b, t, i);
              var _ = de.callback;
              if (_ !== null) {
                e.effectTag |= ec;
                var U = o.effects;
                U === null ? o.effects = [de] : U.push(de);
              }
            }
            if (de = de.next, de === null || de === O) {
              if (d = o.shared.pending, d === null)
                break;
              de = f.next = d.next, d.next = O, o.baseQueue = f = d, o.shared.pending = null;
            }
          } while (!0);
        }
        oe === null ? V = b : oe.next = W, o.baseState = V, o.baseQueue = oe, Qv(N), e.expirationTime = N, e.memoizedState = b;
      }
      rv = null;
    }
    u(rd, "processUpdateQueue");
    function kC(e, t) {
      if (typeof e != "function")
        throw Error("Invalid argument passed as callback. Expected a function. Instead received: " + e);
      e.call(t);
    }
    u(kC, "callCallback");
    function dT() {
      nv = !1;
    }
    u(dT, "resetHasForceUpdateBeforeProcessing");
    function iv() {
      return nv;
    }
    u(iv, "checkHasForceUpdateAfterProcessing");
    function pT(e, t, i) {
      var a = t.effects;
      if (t.effects = null, a !== null)
        for (var o = 0; o < a.length; o++) {
          var f = a[o], d = f.callback;
          d !== null && (f.callback = null, kC(d, i));
        }
    }
    u(pT, "commitUpdateQueue");
    var DC = we.ReactCurrentBatchConfig;
    function id() {
      return DC.suspense;
    }
    u(id, "requestCurrentSuspenseConfig");
    var Jh = {}, OC = Array.isArray, vT = new M.Component().refs, em, tm, nm, rm, im, hT, av, am, lm, um;
    {
      em = /* @__PURE__ */ new Set(), tm = /* @__PURE__ */ new Set(), nm = /* @__PURE__ */ new Set(), rm = /* @__PURE__ */ new Set(), am = /* @__PURE__ */ new Set(), im = /* @__PURE__ */ new Set(), lm = /* @__PURE__ */ new Set(), um = /* @__PURE__ */ new Set();
      var mT = /* @__PURE__ */ new Set();
      av = /* @__PURE__ */ u(function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var i = t + "_" + e;
          mT.has(i) || (mT.add(i), T("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, "warnOnInvalidCallback"), hT = /* @__PURE__ */ u(function(e, t) {
        if (t === void 0) {
          var i = Q(e) || "Component";
          im.has(i) || (im.add(i), T("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", i));
        }
      }, "warnOnUndefinedDerivedState"), Object.defineProperty(Jh, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Jh);
    }
    function lv(e, t, i, a) {
      var o = e.memoizedState;
      e.mode & Ct && i(a, o);
      var f = i(a, o);
      hT(t, f);
      var d = f == null ? o : ie({}, o, f);
      if (e.memoizedState = d, e.expirationTime === q) {
        var p = e.updateQueue;
        p.baseState = d;
      }
    }
    u(lv, "applyDerivedStateFromProps");
    var om = {
      isMounted: zi,
      enqueueSetState: function(e, t, i) {
        var a = ii(e), o = ua(), f = id(), d = co(o, a, f), p = Hl(d, f);
        p.payload = t, i != null && (av(i, "setState"), p.callback = i), Vl(a, p), Yr(a, d);
      },
      enqueueReplaceState: function(e, t, i) {
        var a = ii(e), o = ua(), f = id(), d = co(o, a, f), p = Hl(d, f);
        p.tag = fT, p.payload = t, i != null && (av(i, "replaceState"), p.callback = i), Vl(a, p), Yr(a, d);
      },
      enqueueForceUpdate: function(e, t) {
        var i = ii(e), a = ua(), o = id(), f = co(a, i, o), d = Hl(f, o);
        d.tag = tv, t != null && (av(t, "forceUpdate"), d.callback = t), Vl(i, d), Yr(i, f);
      }
    };
    function yT(e, t, i, a, o, f, d) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        e.mode & Ct && p.shouldComponentUpdate(a, f, d), Zi(e, "shouldComponentUpdate");
        var m = p.shouldComponentUpdate(a, f, d);
        return Ji(), m === void 0 && T("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Q(t) || "Component"), m;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Bc(i, a) || !Bc(o, f) : !0;
    }
    u(yT, "checkShouldComponentUpdate");
    function NC(e, t, i) {
      var a = e.stateNode;
      {
        var o = Q(t) || "Component", f = a.render;
        f || (t.prototype && typeof t.prototype.render == "function" ? T("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : T("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), a.getInitialState && !a.getInitialState.isReactClassApproved && !a.state && T("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), a.getDefaultProps && !a.getDefaultProps.isReactClassApproved && T("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), a.propTypes && T("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), a.contextType && T("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), a.contextTypes && T("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !lm.has(t) && (lm.add(t), T("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof a.componentShouldUpdate == "function" && T("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof a.shouldComponentUpdate < "u" && T("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Q(t) || "A pure component"), typeof a.componentDidUnmount == "function" && T("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof a.componentDidReceiveProps == "function" && T("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof a.componentWillRecieveProps == "function" && T("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof a.UNSAFE_componentWillRecieveProps == "function" && T("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var d = a.props !== i;
        a.props !== void 0 && d && T("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), a.defaultProps && T("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof a.getSnapshotBeforeUpdate == "function" && typeof a.componentDidUpdate != "function" && !nm.has(t) && (nm.add(t), T("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Q(t))), typeof a.getDerivedStateFromProps == "function" && T("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof a.getDerivedStateFromError == "function" && T("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && T("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var p = a.state;
        p && (typeof p != "object" || OC(p)) && T("%s.state: must be set to an object or null", o), typeof a.getChildContext == "function" && typeof t.childContextTypes != "object" && T("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    u(NC, "checkClassInstance");
    function gT(e, t) {
      t.updater = om, e.stateNode = t, Wd(t, e), t._reactInternalInstance = Jh;
    }
    u(gT, "adoptClassInstance");
    function TT(e, t, i) {
      var a = !1, o = gr, f = gr, d = t.contextType;
      if ("contextType" in t) {
        var p = d === null || d !== void 0 && d.$$typeof === ga && d._context === void 0;
        if (!p && !um.has(t)) {
          um.add(t);
          var m = "";
          d === void 0 ? m = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof d != "object" ? m = " However, it is set to a " + typeof d + "." : d.$$typeof === ya ? m = " Did you accidentally pass the Context.Provider instead?" : d._context !== void 0 ? m = " Did you accidentally pass the Context.Consumer instead?" : m = " However, it is set to an object with keys {" + Object.keys(d).join(", ") + "}.", T("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Q(t) || "Component", m);
        }
      }
      if (typeof d == "object" && d !== null)
        f = Vt(d);
      else {
        o = Vs(e, t, !0);
        var g = t.contextTypes;
        a = g != null, f = a ? Is(e, o) : gr;
      }
      e.mode & Ct && new t(i, f);
      var E = new t(i, f), O = e.memoizedState = E.state !== null && E.state !== void 0 ? E.state : null;
      gT(e, E);
      {
        if (typeof t.getDerivedStateFromProps == "function" && O === null) {
          var b = Q(t) || "Component";
          tm.has(b) || (tm.add(b), T("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", b, E.state === null ? "null" : "undefined", b));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof E.getSnapshotBeforeUpdate == "function") {
          var N = null, V = null, W = null;
          if (typeof E.componentWillMount == "function" && E.componentWillMount.__suppressDeprecationWarning !== !0 ? N = "componentWillMount" : typeof E.UNSAFE_componentWillMount == "function" && (N = "UNSAFE_componentWillMount"), typeof E.componentWillReceiveProps == "function" && E.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? V = "componentWillReceiveProps" : typeof E.UNSAFE_componentWillReceiveProps == "function" && (V = "UNSAFE_componentWillReceiveProps"), typeof E.componentWillUpdate == "function" && E.componentWillUpdate.__suppressDeprecationWarning !== !0 ? W = "componentWillUpdate" : typeof E.UNSAFE_componentWillUpdate == "function" && (W = "UNSAFE_componentWillUpdate"), N !== null || V !== null || W !== null) {
            var oe = Q(t) || "Component", de = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            rm.has(oe) || (rm.add(oe), T(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-unsafe-component-lifecycles`, oe, de, N !== null ? `
  ` + N : "", V !== null ? `
  ` + V : "", W !== null ? `
  ` + W : ""));
          }
        }
      }
      return a && Ag(e, o, f), E;
    }
    u(TT, "constructClassInstance");
    function MC(e, t) {
      Zi(e, "componentWillMount");
      var i = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), Ji(), i !== t.state && (T("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Q(e.type) || "Component"), om.enqueueReplaceState(t, t.state, null));
    }
    u(MC, "callComponentWillMount");
    function ET(e, t, i, a) {
      var o = t.state;
      if (Zi(e, "componentWillReceiveProps"), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, a), Ji(), t.state !== o) {
        {
          var f = Q(e.type) || "Component";
          em.has(f) || (em.add(f), T("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", f));
        }
        om.enqueueReplaceState(t, t.state, null);
      }
    }
    u(ET, "callComponentWillReceiveProps");
    function sm(e, t, i, a) {
      NC(e, t, i);
      var o = e.stateNode;
      o.props = i, o.state = e.memoizedState, o.refs = vT, Kh(e);
      var f = t.contextType;
      if (typeof f == "object" && f !== null)
        o.context = Vt(f);
      else {
        var d = Vs(e, t, !0);
        o.context = Is(e, d);
      }
      {
        if (o.state === i) {
          var p = Q(t) || "Component";
          am.has(p) || (am.add(p), T("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Ct && si.recordLegacyContextWarning(e, o), si.recordUnsafeLifecycleWarnings(e, o);
      }
      rd(e, i, o, a), o.state = e.memoizedState;
      var m = t.getDerivedStateFromProps;
      typeof m == "function" && (lv(e, t, m, i), o.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (MC(e, o), rd(e, i, o, a), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.effectTag |= Pe);
    }
    u(sm, "mountClassInstance");
    function UC(e, t, i, a) {
      var o = e.stateNode, f = e.memoizedProps;
      o.props = f;
      var d = o.context, p = t.contextType, m = gr;
      if (typeof p == "object" && p !== null)
        m = Vt(p);
      else {
        var g = Vs(e, t, !0);
        m = Is(e, g);
      }
      var E = t.getDerivedStateFromProps, O = typeof E == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      !O && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function") && (f !== i || d !== m) && ET(e, o, i, m), dT();
      var b = e.memoizedState, N = o.state = b;
      if (rd(e, i, o, a), N = e.memoizedState, f === i && b === N && !Wp() && !iv())
        return typeof o.componentDidMount == "function" && (e.effectTag |= Pe), !1;
      typeof E == "function" && (lv(e, t, E, i), N = e.memoizedState);
      var V = iv() || yT(e, t, f, i, b, N, m);
      return V ? (!O && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (Zi(e, "componentWillMount"), typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), Ji()), typeof o.componentDidMount == "function" && (e.effectTag |= Pe)) : (typeof o.componentDidMount == "function" && (e.effectTag |= Pe), e.memoizedProps = i, e.memoizedState = N), o.props = i, o.state = N, o.context = m, V;
    }
    u(UC, "resumeMountClassInstance");
    function AC(e, t, i, a, o) {
      var f = t.stateNode;
      Zh(e, t);
      var d = t.memoizedProps;
      f.props = t.type === t.elementType ? d : fi(t.type, d);
      var p = f.context, m = i.contextType, g = gr;
      if (typeof m == "object" && m !== null)
        g = Vt(m);
      else {
        var E = Vs(t, i, !0);
        g = Is(t, E);
      }
      var O = i.getDerivedStateFromProps, b = typeof O == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      !b && (typeof f.UNSAFE_componentWillReceiveProps == "function" || typeof f.componentWillReceiveProps == "function") && (d !== a || p !== g) && ET(t, f, a, g), dT();
      var N = t.memoizedState, V = f.state = N;
      if (rd(t, a, f, o), V = t.memoizedState, d === a && N === V && !Wp() && !iv())
        return typeof f.componentDidUpdate == "function" && (d !== e.memoizedProps || N !== e.memoizedState) && (t.effectTag |= Pe), typeof f.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || N !== e.memoizedState) && (t.effectTag |= Ui), !1;
      typeof O == "function" && (lv(t, i, O, a), V = t.memoizedState);
      var W = iv() || yT(t, i, d, a, N, V, g);
      return W ? (!b && (typeof f.UNSAFE_componentWillUpdate == "function" || typeof f.componentWillUpdate == "function") && (Zi(t, "componentWillUpdate"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate(a, V, g), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(a, V, g), Ji()), typeof f.componentDidUpdate == "function" && (t.effectTag |= Pe), typeof f.getSnapshotBeforeUpdate == "function" && (t.effectTag |= Ui)) : (typeof f.componentDidUpdate == "function" && (d !== e.memoizedProps || N !== e.memoizedState) && (t.effectTag |= Pe), typeof f.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || N !== e.memoizedState) && (t.effectTag |= Ui), t.memoizedProps = a, t.memoizedState = V), f.props = a, f.state = V, f.context = g, W;
    }
    u(AC, "updateClassInstance");
    var fm, cm, dm, pm, vm, ST = /* @__PURE__ */ u(function(e) {
    }, "warnForMissingKey");
    fm = !1, cm = !1, dm = {}, pm = {}, vm = {}, ST = /* @__PURE__ */ u(function(e) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var t = 'Each child in a list should have a unique "key" prop. See https://fb.me/react-warning-keys for more information.' + be();
        pm[t] || (pm[t] = !0, T('Each child in a list should have a unique "key" prop. See https://fb.me/react-warning-keys for more information.'));
      }
    }, "warnForMissingKey");
    var uv = Array.isArray;
    function ad(e, t, i) {
      var a = i.ref;
      if (a !== null && typeof a != "function" && typeof a != "object") {
        if ((e.mode & Ct || ir) && !(i._owner && i._self && i._owner.stateNode !== i._self)) {
          var o = Q(e.type) || "Component";
          dm[o] || (T('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref%s', a, qt(e)), dm[o] = !0);
        }
        if (i._owner) {
          var f = i._owner, d;
          if (f) {
            var p = f;
            if (p.tag !== re)
              throw Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref");
            d = p.stateNode;
          }
          if (!d)
            throw Error("Missing owner for string ref " + a + ". This error is likely caused by a bug in React. Please file an issue.");
          var m = "" + a;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === m)
            return t.ref;
          var g = /* @__PURE__ */ u(function(E) {
            var O = d.refs;
            O === vT && (O = d.refs = {}), E === null ? delete O[m] : O[m] = E;
          }, "ref");
          return g._stringRef = m, g;
        } else {
          if (typeof a != "string")
            throw Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!i._owner)
            throw Error("Element ref was specified as a string (" + a + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://fb.me/react-refs-must-have-owner for more information.`);
        }
      }
      return a;
    }
    u(ad, "coerceRef");
    function ov(e, t) {
      if (e.type !== "textarea") {
        var i = "";
        throw i = " If you meant to render a collection of children, use an array instead." + be(), Error("Objects are not valid as a React child (found: " + (Object.prototype.toString.call(t) === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : t) + ")." + i);
      }
    }
    u(ov, "throwOnInvalidObjectType");
    function sv() {
      {
        var e = "Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it." + be();
        if (vm[e])
          return;
        vm[e] = !0, T("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    u(sv, "warnOnFunctionType");
    function CT(e) {
      function t(_, U) {
        if (!!e) {
          var x = _.lastEffect;
          x !== null ? (x.nextEffect = U, _.lastEffect = U) : _.firstEffect = _.lastEffect = U, U.nextEffect = null, U.effectTag = Na;
        }
      }
      u(t, "deleteChild");
      function i(_, U) {
        if (!e)
          return null;
        for (var x = U; x !== null; )
          t(_, x), x = x.sibling;
        return null;
      }
      u(i, "deleteRemainingChildren");
      function a(_, U) {
        for (var x = /* @__PURE__ */ new Map(), I = U; I !== null; )
          I.key !== null ? x.set(I.key, I) : x.set(I.index, I), I = I.sibling;
        return x;
      }
      u(a, "mapRemainingChildren");
      function o(_, U) {
        var x = yo(_, U);
        return x.index = 0, x.sibling = null, x;
      }
      u(o, "useFiber");
      function f(_, U, x) {
        if (_.index = x, !e)
          return U;
        var I = _.alternate;
        if (I !== null) {
          var H = I.index;
          return H < U ? (_.effectTag = Rt, U) : H;
        } else
          return _.effectTag = Rt, U;
      }
      u(f, "placeChild");
      function d(_) {
        return e && _.alternate === null && (_.effectTag = Rt), _;
      }
      u(d, "placeSingleChild");
      function p(_, U, x, I) {
        if (U === null || U.tag !== ge) {
          var H = ky(x, _.mode, I);
          return H.return = _, H;
        } else {
          var $ = o(U, x);
          return $.return = _, $;
        }
      }
      u(p, "updateTextNode");
      function m(_, U, x, I) {
        if (U !== null && (U.elementType === x.type || rT(U, x))) {
          var H = o(U, x.props);
          return H.ref = ad(_, U, x), H.return = _, H._debugSource = x._source, H._debugOwner = x._owner, H;
        }
        var $ = _y(x, _.mode, I);
        return $.ref = ad(_, U, x), $.return = _, $;
      }
      u(m, "updateElement");
      function g(_, U, x, I) {
        if (U === null || U.tag !== Ce || U.stateNode.containerInfo !== x.containerInfo || U.stateNode.implementation !== x.implementation) {
          var H = Dy(x, _.mode, I);
          return H.return = _, H;
        } else {
          var $ = o(U, x.children || []);
          return $.return = _, $;
        }
      }
      u(g, "updatePortal");
      function E(_, U, x, I, H) {
        if (U === null || U.tag !== It) {
          var $ = $l(x, _.mode, I, H);
          return $.return = _, $;
        } else {
          var Me = o(U, x);
          return Me.return = _, Me;
        }
      }
      u(E, "updateFragment");
      function O(_, U, x) {
        if (typeof U == "string" || typeof U == "number") {
          var I = ky("" + U, _.mode, x);
          return I.return = _, I;
        }
        if (typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case ma: {
              var H = _y(U, _.mode, x);
              return H.ref = ad(_, null, U), H.return = _, H;
            }
            case Gt: {
              var $ = Dy(U, _.mode, x);
              return $.return = _, $;
            }
          }
          if (uv(U) || Dr(U)) {
            var Me = $l(U, _.mode, x, null);
            return Me.return = _, Me;
          }
          ov(_, U);
        }
        return typeof U == "function" && sv(), null;
      }
      u(O, "createChild");
      function b(_, U, x, I) {
        var H = U !== null ? U.key : null;
        if (typeof x == "string" || typeof x == "number")
          return H !== null ? null : p(_, U, "" + x, I);
        if (typeof x == "object" && x !== null) {
          switch (x.$$typeof) {
            case ma:
              return x.key === H ? x.type === yn ? E(_, U, x.props.children, I, H) : m(_, U, x, I) : null;
            case Gt:
              return x.key === H ? g(_, U, x, I) : null;
          }
          if (uv(x) || Dr(x))
            return H !== null ? null : E(_, U, x, I, null);
          ov(_, x);
        }
        return typeof x == "function" && sv(), null;
      }
      u(b, "updateSlot");
      function N(_, U, x, I, H) {
        if (typeof I == "string" || typeof I == "number") {
          var $ = _.get(x) || null;
          return p(U, $, "" + I, H);
        }
        if (typeof I == "object" && I !== null) {
          switch (I.$$typeof) {
            case ma: {
              var Me = _.get(I.key === null ? x : I.key) || null;
              return I.type === yn ? E(U, Me, I.props.children, H, I.key) : m(U, Me, I, H);
            }
            case Gt: {
              var Ve = _.get(I.key === null ? x : I.key) || null;
              return g(U, Ve, I, H);
            }
          }
          if (uv(I) || Dr(I)) {
            var Je = _.get(x) || null;
            return E(U, Je, I, H, null);
          }
          ov(U, I);
        }
        return typeof I == "function" && sv(), null;
      }
      u(N, "updateFromMap");
      function V(_, U) {
        {
          if (typeof _ != "object" || _ === null)
            return U;
          switch (_.$$typeof) {
            case ma:
            case Gt:
              ST(_);
              var x = _.key;
              if (typeof x != "string")
                break;
              if (U === null) {
                U = /* @__PURE__ */ new Set(), U.add(x);
                break;
              }
              if (!U.has(x)) {
                U.add(x);
                break;
              }
              T("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted \u2014 the behavior is unsupported and could change in a future version.", x);
              break;
          }
        }
        return U;
      }
      u(V, "warnOnInvalidKey");
      function W(_, U, x, I) {
        for (var H = null, $ = 0; $ < x.length; $++) {
          var Me = x[$];
          H = V(Me, H);
        }
        for (var Ve = null, Je = null, Ie = U, Ge = 0, je = 0, vt = null; Ie !== null && je < x.length; je++) {
          Ie.index > je ? (vt = Ie, Ie = null) : vt = Ie.sibling;
          var Mt = b(_, Ie, x[je], I);
          if (Mt === null) {
            Ie === null && (Ie = vt);
            break;
          }
          e && Ie && Mt.alternate === null && t(_, Ie), Ge = f(Mt, Ge, je), Je === null ? Ve = Mt : Je.sibling = Mt, Je = Mt, Ie = vt;
        }
        if (je === x.length)
          return i(_, Ie), Ve;
        if (Ie === null) {
          for (; je < x.length; je++) {
            var Ut = O(_, x[je], I);
            Ut !== null && (Ge = f(Ut, Ge, je), Je === null ? Ve = Ut : Je.sibling = Ut, Je = Ut);
          }
          return Ve;
        }
        for (var Rn = a(_, Ie); je < x.length; je++) {
          var ot = N(Rn, _, je, x[je], I);
          ot !== null && (e && ot.alternate !== null && Rn.delete(ot.key === null ? je : ot.key), Ge = f(ot, Ge, je), Je === null ? Ve = ot : Je.sibling = ot, Je = ot);
        }
        return e && Rn.forEach(function(In) {
          return t(_, In);
        }), Ve;
      }
      u(W, "reconcileChildrenArray");
      function oe(_, U, x, I) {
        var H = Dr(x);
        if (typeof H != "function")
          throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && x[Symbol.toStringTag] === "Generator" && (cm || T("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), cm = !0), x.entries === H && (fm || T("Using Maps as children is unsupported and will likely yield unexpected results. Convert it to a sequence/iterable of keyed ReactElements instead."), fm = !0);
          var $ = H.call(x);
          if ($)
            for (var Me = null, Ve = $.next(); !Ve.done; Ve = $.next()) {
              var Je = Ve.value;
              Me = V(Je, Me);
            }
        }
        var Ie = H.call(x);
        if (Ie == null)
          throw Error("An iterable object provided no iterator.");
        for (var Ge = null, je = null, vt = U, Mt = 0, Ut = 0, Rn = null, ot = Ie.next(); vt !== null && !ot.done; Ut++, ot = Ie.next()) {
          vt.index > Ut ? (Rn = vt, vt = null) : Rn = vt.sibling;
          var In = b(_, vt, ot.value, I);
          if (In === null) {
            vt === null && (vt = Rn);
            break;
          }
          e && vt && In.alternate === null && t(_, vt), Mt = f(In, Mt, Ut), je === null ? Ge = In : je.sibling = In, je = In, vt = Rn;
        }
        if (ot.done)
          return i(_, vt), Ge;
        if (vt === null) {
          for (; !ot.done; Ut++, ot = Ie.next()) {
            var vi = O(_, ot.value, I);
            vi !== null && (Mt = f(vi, Mt, Ut), je === null ? Ge = vi : je.sibling = vi, je = vi);
          }
          return Ge;
        }
        for (var zy = a(_, vt); !ot.done; Ut++, ot = Ie.next()) {
          var Gl = N(zy, _, Ut, ot.value, I);
          Gl !== null && (e && Gl.alternate !== null && zy.delete(Gl.key === null ? Ut : Gl.key), Mt = f(Gl, Mt, Ut), je === null ? Ge = Gl : je.sibling = Gl, je = Gl);
        }
        return e && zy.forEach(function(gx) {
          return t(_, gx);
        }), Ge;
      }
      u(oe, "reconcileChildrenIterator");
      function de(_, U, x, I) {
        if (U !== null && U.tag === ge) {
          i(_, U.sibling);
          var H = o(U, x);
          return H.return = _, H;
        }
        i(_, U);
        var $ = ky(x, _.mode, I);
        return $.return = _, $;
      }
      u(de, "reconcileSingleTextNode");
      function $e(_, U, x, I) {
        for (var H = x.key, $ = U; $ !== null; ) {
          if ($.key === H) {
            switch ($.tag) {
              case It: {
                if (x.type === yn) {
                  i(_, $.sibling);
                  var Me = o($, x.props.children);
                  return Me.return = _, Me._debugSource = x._source, Me._debugOwner = x._owner, Me;
                }
                break;
              }
              case rt:
              default: {
                if ($.elementType === x.type || rT($, x)) {
                  i(_, $.sibling);
                  var Ve = o($, x.props);
                  return Ve.ref = ad(_, $, x), Ve.return = _, Ve._debugSource = x._source, Ve._debugOwner = x._owner, Ve;
                }
                break;
              }
            }
            i(_, $);
            break;
          } else
            t(_, $);
          $ = $.sibling;
        }
        if (x.type === yn) {
          var Je = $l(x.props.children, _.mode, I, x.key);
          return Je.return = _, Je;
        } else {
          var Ie = _y(x, _.mode, I);
          return Ie.ref = ad(_, U, x), Ie.return = _, Ie;
        }
      }
      u($e, "reconcileSingleElement");
      function Oe(_, U, x, I) {
        for (var H = x.key, $ = U; $ !== null; ) {
          if ($.key === H)
            if ($.tag === Ce && $.stateNode.containerInfo === x.containerInfo && $.stateNode.implementation === x.implementation) {
              i(_, $.sibling);
              var Me = o($, x.children || []);
              return Me.return = _, Me;
            } else {
              i(_, $);
              break;
            }
          else
            t(_, $);
          $ = $.sibling;
        }
        var Ve = Dy(x, _.mode, I);
        return Ve.return = _, Ve;
      }
      u(Oe, "reconcileSinglePortal");
      function nt(_, U, x, I) {
        var H = typeof x == "object" && x !== null && x.type === yn && x.key === null;
        H && (x = x.props.children);
        var $ = typeof x == "object" && x !== null;
        if ($)
          switch (x.$$typeof) {
            case ma:
              return d($e(_, U, x, I));
            case Gt:
              return d(Oe(_, U, x, I));
          }
        if (typeof x == "string" || typeof x == "number")
          return d(de(_, U, "" + x, I));
        if (uv(x))
          return W(_, U, x, I);
        if (Dr(x))
          return oe(_, U, x, I);
        if ($ && ov(_, x), typeof x == "function" && sv(), typeof x > "u" && !H)
          switch (_.tag) {
            case re: {
              var Me = _.stateNode;
              if (Me.render._isMockFunction)
                break;
            }
            case Re: {
              var Ve = _.type;
              throw Error((Ve.displayName || Ve.name || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
            }
          }
        return i(_, U);
      }
      return u(nt, "reconcileChildFibers"), nt;
    }
    u(CT, "ChildReconciler");
    var qs = CT(!0), hm = CT(!1);
    function LC(e, t) {
      if (!(e === null || t.child === e.child))
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var i = t.child, a = yo(i, i.pendingProps);
        for (t.child = a, a.return = t; i.sibling !== null; )
          i = i.sibling, a = a.sibling = yo(i, i.pendingProps), a.return = t;
        a.sibling = null;
      }
    }
    u(LC, "cloneChildFibers");
    function zC(e, t) {
      for (var i = e.child; i !== null; )
        H1(i, t), i = i.sibling;
    }
    u(zC, "resetChildFibers");
    var ld = {}, Il = Zu(ld), ud = Zu(ld), fv = Zu(ld);
    function cv(e) {
      if (e === ld)
        throw Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    u(cv, "requiredContext");
    function bT() {
      var e = cv(fv.current);
      return e;
    }
    u(bT, "getRootHostContainer");
    function mm(e, t) {
      Hn(fv, t, e), Hn(ud, e, e), Hn(Il, ld, e);
      var i = vh(t);
      Fn(Il, e), Hn(Il, i, e);
    }
    u(mm, "pushHostContainer");
    function Xs(e) {
      Fn(Il, e), Fn(ud, e), Fn(fv, e);
    }
    u(Xs, "popHostContainer");
    function ym() {
      var e = cv(Il.current);
      return e;
    }
    u(ym, "getHostContext");
    function xT(e) {
      cv(fv.current);
      var t = cv(Il.current), i = Op(t, e.type);
      t !== i && (Hn(ud, e, e), Hn(Il, i, e));
    }
    u(xT, "pushHostContext");
    function gm(e) {
      ud.current === e && (Fn(Il, e), Fn(ud, e));
    }
    u(gm, "popHostContext");
    var PC = 0, RT = 1, Tm = 1, od = 2, ci = Zu(PC);
    function dv(e, t) {
      return (e & t) !== 0;
    }
    u(dv, "hasSuspenseContext");
    function sd(e) {
      return e & RT;
    }
    u(sd, "setDefaultShallowSuspenseContext");
    function Em(e, t) {
      return e & RT | t;
    }
    u(Em, "setShallowSuspenseContext");
    function FC(e, t) {
      return e | t;
    }
    u(FC, "addSubtreeSuspenseContext");
    function ro(e, t) {
      Hn(ci, t, e);
    }
    u(ro, "pushSuspenseContext");
    function Ks(e) {
      Fn(ci, e);
    }
    u(Ks, "popSuspenseContext");
    function HC(e, t) {
      var i = e.memoizedState;
      if (i !== null)
        return i.dehydrated !== null;
      var a = e.memoizedProps;
      return a.fallback === void 0 ? !1 : a.unstable_avoidThisFallback !== !0 ? !0 : !t;
    }
    u(HC, "shouldCaptureSuspense");
    function pv(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === K) {
          var i = t.memoizedState;
          if (i !== null) {
            var a = i.dehydrated;
            if (a === null || CS(a) || bS(a))
              return t;
          }
        } else if (t.tag === hn && t.memoizedProps.revealOrder !== void 0) {
          var o = (t.effectTag & Ke) !== Qe;
          if (o)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    u(pv, "findFirstSuspended");
    function io(e, t) {
      var i = {
        responder: e,
        props: t
      };
      return Object.freeze(i), i;
    }
    u(io, "createDeprecatedResponderListener");
    var Zs = 1, Js = 2, vv = 4, G = we.ReactCurrentDispatcher, Wr = we.ReactCurrentBatchConfig, Sm;
    Sm = /* @__PURE__ */ new Set();
    var jl = q, wt = null, xn = null, fn = null, hv = !1, VC = 25, L = null, Br = null, Wl = -1, Cm = !1;
    function ut() {
      {
        var e = L;
        Br === null ? Br = [e] : Br.push(e);
      }
    }
    u(ut, "mountHookTypesDev");
    function J() {
      {
        var e = L;
        Br !== null && (Wl++, Br[Wl] !== e && IC(e));
      }
    }
    u(J, "updateHookTypesDev");
    function fd(e) {
      e != null && !Array.isArray(e) && T("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", L, typeof e);
    }
    u(fd, "checkDepsAreArrayDev");
    function IC(e) {
      {
        var t = Q(wt.type);
        if (!Sm.has(t) && (Sm.add(t), Br !== null)) {
          for (var i = "", a = 30, o = 0; o <= Wl; o++) {
            for (var f = Br[o], d = o === Wl ? e : f, p = o + 1 + ". " + f; p.length < a; )
              p += " ";
            p += d + `
`, i += p;
          }
          T(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://fb.me/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, i);
        }
      }
    }
    u(IC, "warnOnHookMismatchInDev");
    function Er() {
      throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    u(Er, "throwInvalidHookError");
    function bm(e, t) {
      if (Cm)
        return !1;
      if (t === null)
        return T("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", L), !1;
      e.length !== t.length && T(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, L, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var i = 0; i < t.length && i < e.length; i++)
        if (!qu(e[i], t[i]))
          return !1;
      return !0;
    }
    u(bm, "areHookInputsEqual");
    function ef(e, t, i, a, o, f) {
      jl = f, wt = t, Br = e !== null ? e._debugHookTypes : null, Wl = -1, Cm = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.expirationTime = q, e !== null && e.memoizedState !== null ? G.current = zT : Br !== null ? G.current = LT : G.current = AT;
      var d = i(a, o);
      if (t.expirationTime === jl) {
        var p = 0;
        do {
          if (t.expirationTime = q, !(p < VC))
            throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Cm = !1, xn = null, fn = null, t.updateQueue = null, Wl = -1, G.current = PT, d = i(a, o);
        } while (t.expirationTime === jl);
      }
      G.current = Rv, t._debugHookTypes = Br;
      var m = xn !== null && xn.next !== null;
      if (jl = q, wt = null, xn = null, fn = null, L = null, Br = null, Wl = -1, hv = !1, m)
        throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return d;
    }
    u(ef, "renderWithHooks");
    function wT(e, t, i) {
      t.updateQueue = e.updateQueue, t.effectTag &= ~(Ai | Pe), e.expirationTime <= i && (e.expirationTime = q);
    }
    u(wT, "bailoutHooks");
    function _T() {
      if (G.current = Rv, hv)
        for (var e = wt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
      jl = q, wt = null, xn = null, fn = null, Br = null, Wl = -1, L = null, hv = !1;
    }
    u(_T, "resetHooksAfterThrow");
    function tf() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return fn === null ? wt.memoizedState = fn = e : fn = fn.next = e, fn;
    }
    u(tf, "mountWorkInProgressHook");
    function nf() {
      var e;
      if (xn === null) {
        var t = wt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = xn.next;
      var i;
      if (fn === null ? i = wt.memoizedState : i = fn.next, i !== null)
        fn = i, i = fn.next, xn = e;
      else {
        if (e === null)
          throw Error("Rendered more hooks than during the previous render.");
        xn = e;
        var a = {
          memoizedState: xn.memoizedState,
          baseState: xn.baseState,
          baseQueue: xn.baseQueue,
          queue: xn.queue,
          next: null
        };
        fn === null ? wt.memoizedState = fn = a : fn = fn.next = a;
      }
      return fn;
    }
    u(nf, "updateWorkInProgressHook");
    function jC() {
      return {
        lastEffect: null
      };
    }
    u(jC, "createFunctionComponentUpdateQueue");
    function xm(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    u(xm, "basicStateReducer");
    function Rm(e, t, i) {
      var a = tf(), o;
      i !== void 0 ? o = i(t) : o = t, a.memoizedState = a.baseState = o;
      var f = a.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, d = f.dispatch = UT.bind(null, wt, f);
      return [a.memoizedState, d];
    }
    u(Rm, "mountReducer");
    function wm(e, t, i) {
      var a = nf(), o = a.queue;
      if (o === null)
        throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var f = xn, d = f.baseQueue, p = o.pending;
      if (p !== null) {
        if (d !== null) {
          var m = d.next, g = p.next;
          d.next = g, p.next = m;
        }
        f.baseQueue = d = p, o.pending = null;
      }
      if (d !== null) {
        var E = d.next, O = f.baseState, b = null, N = null, V = null, W = E;
        do {
          var oe = W.expirationTime;
          if (oe < jl) {
            var de = {
              expirationTime: W.expirationTime,
              suspenseConfig: W.suspenseConfig,
              action: W.action,
              eagerReducer: W.eagerReducer,
              eagerState: W.eagerState,
              next: null
            };
            V === null ? (N = V = de, b = O) : V = V.next = de, oe > wt.expirationTime && (wt.expirationTime = oe, Qv(oe));
          } else {
            if (V !== null) {
              var $e = {
                expirationTime: Fe,
                suspenseConfig: W.suspenseConfig,
                action: W.action,
                eagerReducer: W.eagerReducer,
                eagerState: W.eagerState,
                next: null
              };
              V = V.next = $e;
            }
            if (ME(oe, W.suspenseConfig), W.eagerReducer === e)
              O = W.eagerState;
            else {
              var Oe = W.action;
              O = e(O, Oe);
            }
          }
          W = W.next;
        } while (W !== null && W !== E);
        V === null ? b = O : V.next = N, qu(O, a.memoizedState) || Jm(), a.memoizedState = O, a.baseState = b, a.baseQueue = V, o.lastRenderedState = O;
      }
      var nt = o.dispatch;
      return [a.memoizedState, nt];
    }
    u(wm, "updateReducer");
    function _m(e, t, i) {
      var a = nf(), o = a.queue;
      if (o === null)
        throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var f = o.dispatch, d = o.pending, p = a.memoizedState;
      if (d !== null) {
        o.pending = null;
        var m = d.next, g = m;
        do {
          var E = g.action;
          p = e(p, E), g = g.next;
        } while (g !== m);
        qu(p, a.memoizedState) || Jm(), a.memoizedState = p, a.baseQueue === null && (a.baseState = p), o.lastRenderedState = p;
      }
      return [p, f];
    }
    u(_m, "rerenderReducer");
    function cd(e) {
      var t = tf();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var i = t.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: xm,
        lastRenderedState: e
      }, a = i.dispatch = UT.bind(null, wt, i);
      return [t.memoizedState, a];
    }
    u(cd, "mountState");
    function mv(e) {
      return wm(xm);
    }
    u(mv, "updateState");
    function yv(e) {
      return _m(xm);
    }
    u(yv, "rerenderState");
    function km(e, t, i, a) {
      var o = {
        tag: e,
        create: t,
        destroy: i,
        deps: a,
        next: null
      }, f = wt.updateQueue;
      if (f === null)
        f = jC(), wt.updateQueue = f, f.lastEffect = o.next = o;
      else {
        var d = f.lastEffect;
        if (d === null)
          f.lastEffect = o.next = o;
        else {
          var p = d.next;
          d.next = o, o.next = p, f.lastEffect = o;
        }
      }
      return o;
    }
    u(km, "pushEffect");
    function Dm(e) {
      var t = tf(), i = {
        current: e
      };
      return Object.seal(i), t.memoizedState = i, i;
    }
    u(Dm, "mountRef");
    function gv(e) {
      var t = nf();
      return t.memoizedState;
    }
    u(gv, "updateRef");
    function Om(e, t, i, a) {
      var o = tf(), f = a === void 0 ? null : a;
      wt.effectTag |= e, o.memoizedState = km(Zs | t, i, void 0, f);
    }
    u(Om, "mountEffectImpl");
    function Nm(e, t, i, a) {
      var o = nf(), f = a === void 0 ? null : a, d = void 0;
      if (xn !== null) {
        var p = xn.memoizedState;
        if (d = p.destroy, f !== null) {
          var m = p.deps;
          if (bm(f, m)) {
            km(t, i, d, f);
            return;
          }
        }
      }
      wt.effectTag |= e, o.memoizedState = km(Zs | t, i, d, f);
    }
    u(Nm, "updateEffectImpl");
    function Tv(e, t) {
      return typeof jest < "u" && VE(wt), Om(Pe | Ai, vv, e, t);
    }
    u(Tv, "mountEffect");
    function rf(e, t) {
      return typeof jest < "u" && VE(wt), Nm(Pe | Ai, vv, e, t);
    }
    u(rf, "updateEffect");
    function Mm(e, t) {
      return Om(Pe, Js, e, t);
    }
    u(Mm, "mountLayoutEffect");
    function Ev(e, t) {
      return Nm(Pe, Js, e, t);
    }
    u(Ev, "updateLayoutEffect");
    function kT(e, t) {
      if (typeof t == "function") {
        var i = t, a = e();
        return i(a), function() {
          i(null);
        };
      } else if (t != null) {
        var o = t;
        o.hasOwnProperty("current") || T("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(o).join(", ") + "}");
        var f = e();
        return o.current = f, function() {
          o.current = null;
        };
      }
    }
    u(kT, "imperativeHandleEffect");
    function Um(e, t, i) {
      typeof t != "function" && T("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var a = i != null ? i.concat([e]) : null;
      return Om(Pe, Js, kT.bind(null, t, e), a);
    }
    u(Um, "mountImperativeHandle");
    function Sv(e, t, i) {
      typeof t != "function" && T("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var a = i != null ? i.concat([e]) : null;
      return Nm(Pe, Js, kT.bind(null, t, e), a);
    }
    u(Sv, "updateImperativeHandle");
    function WC(e, t) {
    }
    u(WC, "mountDebugValue");
    var Cv = WC;
    function bv(e, t) {
      var i = tf(), a = t === void 0 ? null : t;
      return i.memoizedState = [e, a], e;
    }
    u(bv, "mountCallback");
    function af(e, t) {
      var i = nf(), a = t === void 0 ? null : t, o = i.memoizedState;
      if (o !== null && a !== null) {
        var f = o[1];
        if (bm(a, f))
          return o[0];
      }
      return i.memoizedState = [e, a], e;
    }
    u(af, "updateCallback");
    function Am(e, t) {
      var i = tf(), a = t === void 0 ? null : t, o = e();
      return i.memoizedState = [o, a], o;
    }
    u(Am, "mountMemo");
    function xv(e, t) {
      var i = nf(), a = t === void 0 ? null : t, o = i.memoizedState;
      if (o !== null && a !== null) {
        var f = o[1];
        if (bm(a, f))
          return o[0];
      }
      var d = e();
      return i.memoizedState = [d, a], d;
    }
    u(xv, "updateMemo");
    function Lm(e, t) {
      var i = cd(e), a = i[0], o = i[1];
      return Tv(function() {
        var f = Wr.suspense;
        Wr.suspense = t === void 0 ? null : t;
        try {
          o(e);
        } finally {
          Wr.suspense = f;
        }
      }, [e, t]), a;
    }
    u(Lm, "mountDeferredValue");
    function DT(e, t) {
      var i = mv(), a = i[0], o = i[1];
      return rf(function() {
        var f = Wr.suspense;
        Wr.suspense = t === void 0 ? null : t;
        try {
          o(e);
        } finally {
          Wr.suspense = f;
        }
      }, [e, t]), a;
    }
    u(DT, "updateDeferredValue");
    function OT(e, t) {
      var i = yv(), a = i[0], o = i[1];
      return rf(function() {
        var f = Wr.suspense;
        Wr.suspense = t === void 0 ? null : t;
        try {
          o(e);
        } finally {
          Wr.suspense = f;
        }
      }, [e, t]), a;
    }
    u(OT, "rerenderDeferredValue");
    function zm(e, t, i) {
      var a = Ws();
      tl(a < Fl ? Fl : a, function() {
        e(!0);
      }), tl(a > oi ? oi : a, function() {
        var o = Wr.suspense;
        Wr.suspense = t === void 0 ? null : t;
        try {
          e(!1), i();
        } finally {
          Wr.suspense = o;
        }
      });
    }
    u(zm, "startTransition");
    function Pm(e) {
      var t = cd(!1), i = t[0], a = t[1], o = bv(zm.bind(null, a, e), [a, e]);
      return [o, i];
    }
    u(Pm, "mountTransition");
    function NT(e) {
      var t = mv(), i = t[0], a = t[1], o = af(zm.bind(null, a, e), [a, e]);
      return [o, i];
    }
    u(NT, "updateTransition");
    function MT(e) {
      var t = yv(), i = t[0], a = t[1], o = af(zm.bind(null, a, e), [a, e]);
      return [o, i];
    }
    u(MT, "rerenderTransition");
    function UT(e, t, i) {
      typeof arguments[3] == "function" && T("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var a = ua(), o = id(), f = co(a, e, o), d = {
        expirationTime: f,
        suspenseConfig: o,
        action: i,
        eagerReducer: null,
        eagerState: null,
        next: null
      };
      d.priority = Ws();
      var p = t.pending;
      p === null ? d.next = d : (d.next = p.next, p.next = d), t.pending = d;
      var m = e.alternate;
      if (e === wt || m !== null && m === wt)
        hv = !0, d.expirationTime = jl, wt.expirationTime = jl;
      else {
        if (e.expirationTime === q && (m === null || m.expirationTime === q)) {
          var g = t.lastRenderedReducer;
          if (g !== null) {
            var E;
            E = G.current, G.current = di;
            try {
              var O = t.lastRenderedState, b = g(O, i);
              if (d.eagerReducer = g, d.eagerState = b, qu(b, O))
                return;
            } catch {
            } finally {
              G.current = E;
            }
          }
        }
        typeof jest < "u" && (HE(e), w1(e)), Yr(e, f);
      }
    }
    u(UT, "dispatchAction");
    var Rv = {
      readContext: Vt,
      useCallback: Er,
      useContext: Er,
      useEffect: Er,
      useImperativeHandle: Er,
      useLayoutEffect: Er,
      useMemo: Er,
      useReducer: Er,
      useRef: Er,
      useState: Er,
      useDebugValue: Er,
      useResponder: Er,
      useDeferredValue: Er,
      useTransition: Er
    }, AT = null, LT = null, zT = null, PT = null, aa = null, di = null, wv = null;
    {
      var Fm = /* @__PURE__ */ u(function() {
        T("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, "warnInvalidContextAccess"), xe = /* @__PURE__ */ u(function() {
        T("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://fb.me/rules-of-hooks");
      }, "warnInvalidHookAccess");
      AT = {
        readContext: function(e, t) {
          return Vt(e, t);
        },
        useCallback: function(e, t) {
          return L = "useCallback", ut(), fd(t), bv(e, t);
        },
        useContext: function(e, t) {
          return L = "useContext", ut(), Vt(e, t);
        },
        useEffect: function(e, t) {
          return L = "useEffect", ut(), fd(t), Tv(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return L = "useImperativeHandle", ut(), fd(i), Um(e, t, i);
        },
        useLayoutEffect: function(e, t) {
          return L = "useLayoutEffect", ut(), fd(t), Mm(e, t);
        },
        useMemo: function(e, t) {
          L = "useMemo", ut(), fd(t);
          var i = G.current;
          G.current = aa;
          try {
            return Am(e, t);
          } finally {
            G.current = i;
          }
        },
        useReducer: function(e, t, i) {
          L = "useReducer", ut();
          var a = G.current;
          G.current = aa;
          try {
            return Rm(e, t, i);
          } finally {
            G.current = a;
          }
        },
        useRef: function(e) {
          return L = "useRef", ut(), Dm(e);
        },
        useState: function(e) {
          L = "useState", ut();
          var t = G.current;
          G.current = aa;
          try {
            return cd(e);
          } finally {
            G.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return L = "useDebugValue", ut(), void 0;
        },
        useResponder: function(e, t) {
          return L = "useResponder", ut(), io(e, t);
        },
        useDeferredValue: function(e, t) {
          return L = "useDeferredValue", ut(), Lm(e, t);
        },
        useTransition: function(e) {
          return L = "useTransition", ut(), Pm(e);
        }
      }, LT = {
        readContext: function(e, t) {
          return Vt(e, t);
        },
        useCallback: function(e, t) {
          return L = "useCallback", J(), bv(e, t);
        },
        useContext: function(e, t) {
          return L = "useContext", J(), Vt(e, t);
        },
        useEffect: function(e, t) {
          return L = "useEffect", J(), Tv(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return L = "useImperativeHandle", J(), Um(e, t, i);
        },
        useLayoutEffect: function(e, t) {
          return L = "useLayoutEffect", J(), Mm(e, t);
        },
        useMemo: function(e, t) {
          L = "useMemo", J();
          var i = G.current;
          G.current = aa;
          try {
            return Am(e, t);
          } finally {
            G.current = i;
          }
        },
        useReducer: function(e, t, i) {
          L = "useReducer", J();
          var a = G.current;
          G.current = aa;
          try {
            return Rm(e, t, i);
          } finally {
            G.current = a;
          }
        },
        useRef: function(e) {
          return L = "useRef", J(), Dm(e);
        },
        useState: function(e) {
          L = "useState", J();
          var t = G.current;
          G.current = aa;
          try {
            return cd(e);
          } finally {
            G.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return L = "useDebugValue", J(), void 0;
        },
        useResponder: function(e, t) {
          return L = "useResponder", J(), io(e, t);
        },
        useDeferredValue: function(e, t) {
          return L = "useDeferredValue", J(), Lm(e, t);
        },
        useTransition: function(e) {
          return L = "useTransition", J(), Pm(e);
        }
      }, zT = {
        readContext: function(e, t) {
          return Vt(e, t);
        },
        useCallback: function(e, t) {
          return L = "useCallback", J(), af(e, t);
        },
        useContext: function(e, t) {
          return L = "useContext", J(), Vt(e, t);
        },
        useEffect: function(e, t) {
          return L = "useEffect", J(), rf(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return L = "useImperativeHandle", J(), Sv(e, t, i);
        },
        useLayoutEffect: function(e, t) {
          return L = "useLayoutEffect", J(), Ev(e, t);
        },
        useMemo: function(e, t) {
          L = "useMemo", J();
          var i = G.current;
          G.current = di;
          try {
            return xv(e, t);
          } finally {
            G.current = i;
          }
        },
        useReducer: function(e, t, i) {
          L = "useReducer", J();
          var a = G.current;
          G.current = di;
          try {
            return wm(e, t, i);
          } finally {
            G.current = a;
          }
        },
        useRef: function(e) {
          return L = "useRef", J(), gv();
        },
        useState: function(e) {
          L = "useState", J();
          var t = G.current;
          G.current = di;
          try {
            return mv(e);
          } finally {
            G.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return L = "useDebugValue", J(), Cv();
        },
        useResponder: function(e, t) {
          return L = "useResponder", J(), io(e, t);
        },
        useDeferredValue: function(e, t) {
          return L = "useDeferredValue", J(), DT(e, t);
        },
        useTransition: function(e) {
          return L = "useTransition", J(), NT(e);
        }
      }, PT = {
        readContext: function(e, t) {
          return Vt(e, t);
        },
        useCallback: function(e, t) {
          return L = "useCallback", J(), af(e, t);
        },
        useContext: function(e, t) {
          return L = "useContext", J(), Vt(e, t);
        },
        useEffect: function(e, t) {
          return L = "useEffect", J(), rf(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return L = "useImperativeHandle", J(), Sv(e, t, i);
        },
        useLayoutEffect: function(e, t) {
          return L = "useLayoutEffect", J(), Ev(e, t);
        },
        useMemo: function(e, t) {
          L = "useMemo", J();
          var i = G.current;
          G.current = wv;
          try {
            return xv(e, t);
          } finally {
            G.current = i;
          }
        },
        useReducer: function(e, t, i) {
          L = "useReducer", J();
          var a = G.current;
          G.current = wv;
          try {
            return _m(e, t, i);
          } finally {
            G.current = a;
          }
        },
        useRef: function(e) {
          return L = "useRef", J(), gv();
        },
        useState: function(e) {
          L = "useState", J();
          var t = G.current;
          G.current = wv;
          try {
            return yv(e);
          } finally {
            G.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return L = "useDebugValue", J(), Cv();
        },
        useResponder: function(e, t) {
          return L = "useResponder", J(), io(e, t);
        },
        useDeferredValue: function(e, t) {
          return L = "useDeferredValue", J(), OT(e, t);
        },
        useTransition: function(e) {
          return L = "useTransition", J(), MT(e);
        }
      }, aa = {
        readContext: function(e, t) {
          return Fm(), Vt(e, t);
        },
        useCallback: function(e, t) {
          return L = "useCallback", xe(), ut(), bv(e, t);
        },
        useContext: function(e, t) {
          return L = "useContext", xe(), ut(), Vt(e, t);
        },
        useEffect: function(e, t) {
          return L = "useEffect", xe(), ut(), Tv(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return L = "useImperativeHandle", xe(), ut(), Um(e, t, i);
        },
        useLayoutEffect: function(e, t) {
          return L = "useLayoutEffect", xe(), ut(), Mm(e, t);
        },
        useMemo: function(e, t) {
          L = "useMemo", xe(), ut();
          var i = G.current;
          G.current = aa;
          try {
            return Am(e, t);
          } finally {
            G.current = i;
          }
        },
        useReducer: function(e, t, i) {
          L = "useReducer", xe(), ut();
          var a = G.current;
          G.current = aa;
          try {
            return Rm(e, t, i);
          } finally {
            G.current = a;
          }
        },
        useRef: function(e) {
          return L = "useRef", xe(), ut(), Dm(e);
        },
        useState: function(e) {
          L = "useState", xe(), ut();
          var t = G.current;
          G.current = aa;
          try {
            return cd(e);
          } finally {
            G.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return L = "useDebugValue", xe(), ut(), void 0;
        },
        useResponder: function(e, t) {
          return L = "useResponder", xe(), ut(), io(e, t);
        },
        useDeferredValue: function(e, t) {
          return L = "useDeferredValue", xe(), ut(), Lm(e, t);
        },
        useTransition: function(e) {
          return L = "useTransition", xe(), ut(), Pm(e);
        }
      }, di = {
        readContext: function(e, t) {
          return Fm(), Vt(e, t);
        },
        useCallback: function(e, t) {
          return L = "useCallback", xe(), J(), af(e, t);
        },
        useContext: function(e, t) {
          return L = "useContext", xe(), J(), Vt(e, t);
        },
        useEffect: function(e, t) {
          return L = "useEffect", xe(), J(), rf(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return L = "useImperativeHandle", xe(), J(), Sv(e, t, i);
        },
        useLayoutEffect: function(e, t) {
          return L = "useLayoutEffect", xe(), J(), Ev(e, t);
        },
        useMemo: function(e, t) {
          L = "useMemo", xe(), J();
          var i = G.current;
          G.current = di;
          try {
            return xv(e, t);
          } finally {
            G.current = i;
          }
        },
        useReducer: function(e, t, i) {
          L = "useReducer", xe(), J();
          var a = G.current;
          G.current = di;
          try {
            return wm(e, t, i);
          } finally {
            G.current = a;
          }
        },
        useRef: function(e) {
          return L = "useRef", xe(), J(), gv();
        },
        useState: function(e) {
          L = "useState", xe(), J();
          var t = G.current;
          G.current = di;
          try {
            return mv(e);
          } finally {
            G.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return L = "useDebugValue", xe(), J(), Cv();
        },
        useResponder: function(e, t) {
          return L = "useResponder", xe(), J(), io(e, t);
        },
        useDeferredValue: function(e, t) {
          return L = "useDeferredValue", xe(), J(), DT(e, t);
        },
        useTransition: function(e) {
          return L = "useTransition", xe(), J(), NT(e);
        }
      }, wv = {
        readContext: function(e, t) {
          return Fm(), Vt(e, t);
        },
        useCallback: function(e, t) {
          return L = "useCallback", xe(), J(), af(e, t);
        },
        useContext: function(e, t) {
          return L = "useContext", xe(), J(), Vt(e, t);
        },
        useEffect: function(e, t) {
          return L = "useEffect", xe(), J(), rf(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return L = "useImperativeHandle", xe(), J(), Sv(e, t, i);
        },
        useLayoutEffect: function(e, t) {
          return L = "useLayoutEffect", xe(), J(), Ev(e, t);
        },
        useMemo: function(e, t) {
          L = "useMemo", xe(), J();
          var i = G.current;
          G.current = di;
          try {
            return xv(e, t);
          } finally {
            G.current = i;
          }
        },
        useReducer: function(e, t, i) {
          L = "useReducer", xe(), J();
          var a = G.current;
          G.current = di;
          try {
            return _m(e, t, i);
          } finally {
            G.current = a;
          }
        },
        useRef: function(e) {
          return L = "useRef", xe(), J(), gv();
        },
        useState: function(e) {
          L = "useState", xe(), J();
          var t = G.current;
          G.current = di;
          try {
            return yv(e);
          } finally {
            G.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return L = "useDebugValue", xe(), J(), Cv();
        },
        useResponder: function(e, t) {
          return L = "useResponder", xe(), J(), io(e, t);
        },
        useDeferredValue: function(e, t) {
          return L = "useDeferredValue", xe(), J(), OT(e, t);
        },
        useTransition: function(e) {
          return L = "useTransition", xe(), J(), MT(e);
        }
      };
    }
    var _v = fe.unstable_now, FT = 0, dd = -1;
    function BC() {
      return FT;
    }
    u(BC, "getCommitTime");
    function HT() {
      FT = _v();
    }
    u(HT, "recordCommitTime");
    function Hm(e) {
      dd = _v(), e.actualStartTime < 0 && (e.actualStartTime = _v());
    }
    u(Hm, "startProfilerTimer");
    function VT(e) {
      dd = -1;
    }
    u(VT, "stopProfilerTimerIfRunning");
    function kv(e, t) {
      if (dd >= 0) {
        var i = _v() - dd;
        e.actualDuration += i, t && (e.selfBaseDuration = i), dd = -1;
      }
    }
    u(kv, "stopProfilerTimerIfRunningAndRecordDelta");
    var Qr = null, ao = null, lo = !1;
    function QC(e) {
      var t = e.stateNode.containerInfo;
      return ao = By(t), Qr = e, lo = !0, !0;
    }
    u(QC, "enterHydrationState");
    function IT(e, t) {
      switch (e.tag) {
        case se:
          NS(e.stateNode.containerInfo, t);
          break;
        case ae:
          MS(e.type, e.memoizedProps, e.stateNode, t);
          break;
      }
      var i = B1();
      i.stateNode = t, i.return = e, i.effectTag = Na, e.lastEffect !== null ? (e.lastEffect.nextEffect = i, e.lastEffect = i) : e.firstEffect = e.lastEffect = i;
    }
    u(IT, "deleteHydratableInstance");
    function jT(e, t) {
      switch (t.effectTag = t.effectTag & ~qn | Rt, e.tag) {
        case se: {
          var i = e.stateNode.containerInfo;
          switch (t.tag) {
            case ae:
              var a = t.type;
              t.pendingProps, US(i, a);
              break;
            case ge:
              var o = t.pendingProps;
              AS(i, o);
              break;
          }
          break;
        }
        case ae: {
          var f = e.type, d = e.memoizedProps, p = e.stateNode;
          switch (t.tag) {
            case ae:
              var m = t.type;
              t.pendingProps, LS(f, d, p, m);
              break;
            case ge:
              var g = t.pendingProps;
              zS(f, d, p, g);
              break;
            case K:
              PS(f, d);
              break;
          }
          break;
        }
        default:
          return;
      }
    }
    u(jT, "insertNonHydratedInstance");
    function WT(e, t) {
      switch (e.tag) {
        case ae: {
          var i = e.type;
          e.pendingProps;
          var a = qi(t, i);
          return a !== null ? (e.stateNode = a, !0) : !1;
        }
        case ge: {
          var o = e.pendingProps, f = hh(t, o);
          return f !== null ? (e.stateNode = f, !0) : !1;
        }
        case K:
          return !1;
        default:
          return !1;
      }
    }
    u(WT, "tryHydrate");
    function Vm(e) {
      if (!!lo) {
        var t = ao;
        if (!t) {
          jT(Qr, e), lo = !1, Qr = e;
          return;
        }
        var i = t;
        if (!WT(e, t)) {
          if (t = Np(i), !t || !WT(e, t)) {
            jT(Qr, e), lo = !1, Qr = e;
            return;
          }
          IT(Qr, i);
        }
        Qr = e, ao = By(t);
      }
    }
    u(Vm, "tryToClaimNextHydratableInstance");
    function YC(e, t, i) {
      var a = e.stateNode, o = xS(a, e.type, e.memoizedProps, t, i, e);
      return e.updateQueue = o, o !== null;
    }
    u(YC, "prepareToHydrateHostInstance");
    function $C(e) {
      var t = e.stateNode, i = e.memoizedProps, a = RS(t, i, e);
      if (a) {
        var o = Qr;
        if (o !== null)
          switch (o.tag) {
            case se: {
              var f = o.stateNode.containerInfo;
              DS(f, t, i);
              break;
            }
            case ae: {
              var d = o.type, p = o.memoizedProps, m = o.stateNode;
              OS(d, p, m, t, i);
              break;
            }
          }
      }
      return a;
    }
    u($C, "prepareToHydrateHostTextInstance");
    function GC(e) {
      var t = e.memoizedState, i = t !== null ? t.dehydrated : null;
      if (!i)
        throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return wS(i);
    }
    u(GC, "skipPastDehydratedSuspenseInstance");
    function BT(e) {
      for (var t = e.return; t !== null && t.tag !== ae && t.tag !== se && t.tag !== K; )
        t = t.return;
      Qr = t;
    }
    u(BT, "popToNextHostParent");
    function Dv(e) {
      if (e !== Qr)
        return !1;
      if (!lo)
        return BT(e), lo = !0, !1;
      var t = e.type;
      if (e.tag !== ae || t !== "head" && t !== "body" && !h(t, e.memoizedProps))
        for (var i = ao; i; )
          IT(e, i), i = Np(i);
      return BT(e), e.tag === K ? ao = GC(e) : ao = Qr ? Np(e.stateNode) : null, !0;
    }
    u(Dv, "popHydrationState");
    function Im() {
      Qr = null, ao = null, lo = !1;
    }
    u(Im, "resetHydrationState");
    var pd = we.ReactCurrentOwner, Bl = !1, jm, Wm, Bm, Qm, Ym, uo, $m, Ov;
    jm = {}, Wm = {}, Bm = {}, Qm = {}, Ym = {}, uo = !1, $m = {}, Ov = {};
    function Sr(e, t, i, a) {
      e === null ? t.child = hm(t, null, i, a) : t.child = qs(t, e.child, i, a);
    }
    u(Sr, "reconcileChildren");
    function qC(e, t, i, a) {
      t.child = qs(t, e.child, null, a), t.child = qs(t, null, i, a);
    }
    u(qC, "forceUnmountCurrentAndReconcile");
    function QT(e, t, i, a, o) {
      if (t.type !== t.elementType) {
        var f = i.propTypes;
        f && D(
          f,
          a,
          "prop",
          Q(i),
          be
        );
      }
      var d = i.render, p = t.ref, m;
      return Gs(t, o), pd.current = t, Or(!0), m = ef(e, t, d, a, p, o), t.mode & Ct && t.memoizedState !== null && (m = ef(e, t, d, a, p, o)), Or(!1), e !== null && !Bl ? (wT(e, t, o), nl(e, t, o)) : (t.effectTag |= cr, Sr(e, t, m, o), t.child);
    }
    u(QT, "updateForwardRef");
    function YT(e, t, i, a, o, f) {
      if (e === null) {
        var d = i.type;
        if (P1(d) && i.compare === null && i.defaultProps === void 0) {
          var p = d;
          return p = Ys(d), t.tag = Ye, t.type = p, Xm(t, d), $T(e, t, p, a, o, f);
        }
        {
          var m = d.propTypes;
          m && D(
            m,
            a,
            "prop",
            Q(d),
            be
          );
        }
        var g = wy(i.type, null, a, null, t.mode, f);
        return g.ref = t.ref, g.return = t, t.child = g, g;
      }
      {
        var E = i.type, O = E.propTypes;
        O && D(
          O,
          a,
          "prop",
          Q(E),
          be
        );
      }
      var b = e.child;
      if (o < f) {
        var N = b.memoizedProps, V = i.compare;
        if (V = V !== null ? V : Bc, V(N, a) && e.ref === t.ref)
          return nl(e, t, f);
      }
      t.effectTag |= cr;
      var W = yo(b, a);
      return W.ref = t.ref, W.return = t, t.child = W, W;
    }
    u(YT, "updateMemoComponent");
    function $T(e, t, i, a, o, f) {
      if (t.type !== t.elementType) {
        var d = t.elementType;
        d.$$typeof === bi && (d = yf(d));
        var p = d && d.propTypes;
        p && D(
          p,
          a,
          "prop",
          Q(d),
          be
        );
      }
      if (e !== null) {
        var m = e.memoizedProps;
        if (Bc(m, a) && e.ref === t.ref && t.type === e.type && (Bl = !1, o < f))
          return t.expirationTime = e.expirationTime, nl(e, t, f);
      }
      return Gm(e, t, i, a, f);
    }
    u($T, "updateSimpleMemoComponent");
    function XC(e, t, i) {
      var a = t.pendingProps;
      return Sr(e, t, a, i), t.child;
    }
    u(XC, "updateFragment");
    function KC(e, t, i) {
      var a = t.pendingProps.children;
      return Sr(e, t, a, i), t.child;
    }
    u(KC, "updateMode");
    function ZC(e, t, i) {
      t.effectTag |= Pe;
      var a = t.pendingProps, o = a.children;
      return Sr(e, t, o, i), t.child;
    }
    u(ZC, "updateProfiler");
    function GT(e, t) {
      var i = t.ref;
      (e === null && i !== null || e !== null && e.ref !== i) && (t.effectTag |= Tn);
    }
    u(GT, "markRef");
    function Gm(e, t, i, a, o) {
      if (t.type !== t.elementType) {
        var f = i.propTypes;
        f && D(
          f,
          a,
          "prop",
          Q(i),
          be
        );
      }
      var d;
      {
        var p = Vs(t, i, !0);
        d = Is(t, p);
      }
      var m;
      return Gs(t, o), pd.current = t, Or(!0), m = ef(e, t, i, a, d, o), t.mode & Ct && t.memoizedState !== null && (m = ef(e, t, i, a, d, o)), Or(!1), e !== null && !Bl ? (wT(e, t, o), nl(e, t, o)) : (t.effectTag |= cr, Sr(e, t, m, o), t.child);
    }
    u(Gm, "updateFunctionComponent");
    function qT(e, t, i, a, o) {
      if (t.type !== t.elementType) {
        var f = i.propTypes;
        f && D(
          f,
          a,
          "prop",
          Q(i),
          be
        );
      }
      var d;
      ta(i) ? (d = !0, Qp(t)) : d = !1, Gs(t, o);
      var p = t.stateNode, m;
      p === null ? (e !== null && (e.alternate = null, t.alternate = null, t.effectTag |= Rt), TT(t, i, a), sm(t, i, a, o), m = !0) : e === null ? m = UC(t, i, a, o) : m = AC(e, t, i, a, o);
      var g = qm(e, t, i, m, d, o);
      {
        var E = t.stateNode;
        E.props !== a && (uo || T("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Q(t.type) || "a component"), uo = !0);
      }
      return g;
    }
    u(qT, "updateClassComponent");
    function qm(e, t, i, a, o, f) {
      GT(e, t);
      var d = (t.effectTag & Ke) !== Qe;
      if (!a && !d)
        return o && Pg(t, i, !1), nl(e, t, f);
      var p = t.stateNode;
      pd.current = t;
      var m;
      return d && typeof i.getDerivedStateFromError != "function" ? (m = null, VT()) : (Or(!0), m = p.render(), t.mode & Ct && p.render(), Or(!1)), t.effectTag |= cr, e !== null && d ? qC(e, t, m, f) : Sr(e, t, m, f), t.memoizedState = p.state, o && Pg(t, i, !0), t.child;
    }
    u(qm, "finishClassComponent");
    function XT(e) {
      var t = e.stateNode;
      t.pendingContext ? Lg(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Lg(e, t.context, !1), mm(e, t.containerInfo);
    }
    u(XT, "pushHostRootContext");
    function JC(e, t, i) {
      XT(t);
      var a = t.updateQueue;
      if (!(e !== null && a !== null))
        throw Error("If the root does not have an updateQueue, we should have already bailed out. This error is likely caused by a bug in React. Please file an issue.");
      var o = t.pendingProps, f = t.memoizedState, d = f !== null ? f.element : null;
      Zh(e, t), rd(t, o, null, i);
      var p = t.memoizedState, m = p.element;
      if (m === d)
        return Im(), nl(e, t, i);
      var g = t.stateNode;
      if (g.hydrate && QC(t)) {
        var E = hm(t, null, m, i);
        t.child = E;
        for (var O = E; O; )
          O.effectTag = O.effectTag & ~Rt | qn, O = O.sibling;
      } else
        Sr(e, t, m, i), Im();
      return t.child;
    }
    u(JC, "updateHostRoot");
    function eb(e, t, i) {
      xT(t), e === null && Vm(t);
      var a = t.type, o = t.pendingProps, f = e !== null ? e.memoizedProps : null, d = o.children, p = h(a, o);
      return p ? d = null : f !== null && h(a, f) && (t.effectTag |= Mn), GT(e, t), t.mode & Bs && i !== ia && y(a, o) ? (Ey(ia), t.expirationTime = t.childExpirationTime = ia, null) : (Sr(e, t, d, i), t.child);
    }
    u(eb, "updateHostComponent");
    function tb(e, t) {
      return e === null && Vm(t), null;
    }
    u(tb, "updateHostText");
    function nb(e, t, i, a, o) {
      e !== null && (e.alternate = null, t.alternate = null, t.effectTag |= Rt);
      var f = t.pendingProps;
      xg(t);
      var d = xC(i);
      t.type = d;
      var p = t.tag = F1(d);
      bg(t);
      var m = fi(d, f), g;
      switch (p) {
        case Re:
          return Xm(t, d), t.type = d = Ys(d), g = Gm(null, t, d, m, o), g;
        case re:
          return t.type = d = jh(d), g = qT(null, t, d, m, o), g;
        case B:
          return t.type = d = Wh(d), g = QT(null, t, d, m, o), g;
        case ke: {
          if (t.type !== t.elementType) {
            var E = d.propTypes;
            E && D(
              E,
              m,
              "prop",
              Q(d),
              be
            );
          }
          return g = YT(
            null,
            t,
            d,
            fi(d.type, m),
            a,
            o
          ), g;
        }
      }
      var O = "";
      throw d !== null && typeof d == "object" && d.$$typeof === bi && (O = " Did you wrap a component in React.lazy() more than once?"), Error("Element type is invalid. Received a promise that resolves to: " + d + ". Lazy element type must resolve to a class or function." + O);
    }
    u(nb, "mountLazyComponent");
    function rb(e, t, i, a, o) {
      e !== null && (e.alternate = null, t.alternate = null, t.effectTag |= Rt), t.tag = re;
      var f;
      return ta(i) ? (f = !0, Qp(t)) : f = !1, Gs(t, o), TT(t, i, a), sm(t, i, a, o), qm(null, t, i, !0, f, o);
    }
    u(rb, "mountIncompleteClassComponent");
    function ib(e, t, i, a) {
      e !== null && (e.alternate = null, t.alternate = null, t.effectTag |= Rt);
      var o = t.pendingProps, f;
      {
        var d = Vs(t, i, !1);
        f = Is(t, d);
      }
      Gs(t, a);
      var p;
      {
        if (i.prototype && typeof i.prototype.render == "function") {
          var m = Q(i) || "Unknown";
          jm[m] || (T("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", m, m), jm[m] = !0);
        }
        t.mode & Ct && si.recordLegacyContextWarning(t, null), Or(!0), pd.current = t, p = ef(null, t, i, o, f, a), Or(!1);
      }
      if (t.effectTag |= cr, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        {
          var g = Q(i) || "Unknown";
          Wm[g] || (T("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Wm[g] = !0);
        }
        t.tag = re, t.memoizedState = null, t.updateQueue = null;
        var E = !1;
        ta(i) ? (E = !0, Qp(t)) : E = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Kh(t);
        var O = i.getDerivedStateFromProps;
        return typeof O == "function" && lv(t, i, O, o), gT(t, p), sm(t, i, o, a), qm(null, t, i, !0, E, a);
      } else
        return t.tag = Re, t.mode & Ct && t.memoizedState !== null && (p = ef(null, t, i, o, f, a)), Sr(null, t, p, a), Xm(t, i), t.child;
    }
    u(ib, "mountIndeterminateComponent");
    function Xm(e, t) {
      {
        if (t && t.childContextTypes && T("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var i = "", a = xi();
          a && (i += `

Check the render method of \`` + a + "`.");
          var o = a || e._debugID || "", f = e._debugSource;
          f && (o = f.fileName + ":" + f.lineNumber), Ym[o] || (Ym[o] = !0, T("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", i));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var d = Q(t) || "Unknown";
          Qm[d] || (T("%s: Function components do not support getDerivedStateFromProps.", d), Qm[d] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = Q(t) || "Unknown";
          Bm[p] || (T("%s: Function components do not support contextType.", p), Bm[p] = !0);
        }
      }
    }
    u(Xm, "validateFunctionComponentInDev");
    var Km = {
      dehydrated: null,
      retryTime: q
    };
    function ab(e, t, i) {
      return dv(e, od) && (t === null || t.memoizedState !== null);
    }
    u(ab, "shouldRemainOnFallback");
    function KT(e, t, i) {
      var a = t.mode, o = t.pendingProps;
      ex(t) && (t.effectTag |= Ke);
      var f = ci.current, d = !1, p = (t.effectTag & Ke) !== Qe;
      if (p || ab(f, e) ? (d = !0, t.effectTag &= ~Ke) : (e === null || e.memoizedState !== null) && o.fallback !== void 0 && o.unstable_avoidThisFallback !== !0 && (f = FC(f, Tm)), f = sd(f), ro(t, f), e === null)
        if (o.fallback !== void 0 && Vm(t), d) {
          var m = o.fallback, g = $l(null, a, q, null);
          if (g.return = t, (t.mode & Ir) === sn) {
            var E = t.memoizedState, O = E !== null ? t.child.child : t.child;
            g.child = O;
            for (var b = O; b !== null; )
              b.return = g, b = b.sibling;
          }
          var N = $l(m, a, i, null);
          return N.return = t, g.sibling = N, t.memoizedState = Km, t.child = g, N;
        } else {
          var V = o.children;
          return t.memoizedState = null, t.child = hm(t, null, V, i);
        }
      else {
        var W = e.memoizedState;
        if (W !== null) {
          var oe = e.child, de = oe.sibling;
          if (d) {
            var $e = o.fallback, Oe = yo(oe, oe.pendingProps);
            if (Oe.return = t, (t.mode & Ir) === sn) {
              var nt = t.memoizedState, _ = nt !== null ? t.child.child : t.child;
              if (_ !== oe.child) {
                Oe.child = _;
                for (var U = _; U !== null; )
                  U.return = Oe, U = U.sibling;
              }
            }
            if (t.mode & ra) {
              for (var x = 0, I = Oe.child; I !== null; )
                x += I.treeBaseDuration, I = I.sibling;
              Oe.treeBaseDuration = x;
            }
            var H = yo(de, $e);
            return H.return = t, Oe.sibling = H, Oe.childExpirationTime = q, t.memoizedState = Km, t.child = Oe, H;
          } else {
            var $ = o.children, Me = oe.child, Ve = qs(t, Me, $, i);
            return t.memoizedState = null, t.child = Ve;
          }
        } else {
          var Je = e.child;
          if (d) {
            var Ie = o.fallback, Ge = $l(
              null,
              a,
              q,
              null
            );
            if (Ge.return = t, Ge.child = Je, Je !== null && (Je.return = Ge), (t.mode & Ir) === sn) {
              var je = t.memoizedState, vt = je !== null ? t.child.child : t.child;
              Ge.child = vt;
              for (var Mt = vt; Mt !== null; )
                Mt.return = Ge, Mt = Mt.sibling;
            }
            if (t.mode & ra) {
              for (var Ut = 0, Rn = Ge.child; Rn !== null; )
                Ut += Rn.treeBaseDuration, Rn = Rn.sibling;
              Ge.treeBaseDuration = Ut;
            }
            var ot = $l(Ie, a, i, null);
            return ot.return = t, Ge.sibling = ot, ot.effectTag |= Rt, Ge.childExpirationTime = q, t.memoizedState = Km, t.child = Ge, ot;
          } else {
            t.memoizedState = null;
            var In = o.children;
            return t.child = qs(t, Je, In, i);
          }
        }
      }
    }
    u(KT, "updateSuspenseComponent");
    function ZT(e, t) {
      e.expirationTime < t && (e.expirationTime = t);
      var i = e.alternate;
      i !== null && i.expirationTime < t && (i.expirationTime = t), oT(e.return, t);
    }
    u(ZT, "scheduleWorkOnFiber");
    function lb(e, t, i) {
      for (var a = t; a !== null; ) {
        if (a.tag === K) {
          var o = a.memoizedState;
          o !== null && ZT(a, i);
        } else if (a.tag === hn)
          ZT(a, i);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    }
    u(lb, "propagateSuspenseContextChange");
    function ub(e) {
      for (var t = e, i = null; t !== null; ) {
        var a = t.alternate;
        a !== null && pv(a) === null && (i = t), t = t.sibling;
      }
      return i;
    }
    u(ub, "findLastContentRow");
    function ob(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !$m[e])
        if ($m[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              T('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              T('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              T('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          T('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    u(ob, "validateRevealOrder");
    function sb(e, t) {
      e !== void 0 && !Ov[e] && (e !== "collapsed" && e !== "hidden" ? (Ov[e] = !0, T('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Ov[e] = !0, T('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    u(sb, "validateTailOptions");
    function JT(e, t) {
      {
        var i = Array.isArray(e), a = !i && typeof Dr(e) == "function";
        if (i || a) {
          var o = i ? "array" : "iterable";
          return T("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o), !1;
        }
      }
      return !0;
    }
    u(JT, "validateSuspenseListNestedChild");
    function fb(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Array.isArray(e)) {
          for (var i = 0; i < e.length; i++)
            if (!JT(e[i], i))
              return;
        } else {
          var a = Dr(e);
          if (typeof a == "function") {
            var o = a.call(e);
            if (o)
              for (var f = o.next(), d = 0; !f.done; f = o.next()) {
                if (!JT(f.value, d))
                  return;
                d++;
              }
          } else
            T('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    u(fb, "validateSuspenseListChildren");
    function Zm(e, t, i, a, o, f) {
      var d = e.memoizedState;
      d === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: i,
        tailExpiration: 0,
        tailMode: o,
        lastEffect: f
      } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = a, d.tail = i, d.tailExpiration = 0, d.tailMode = o, d.lastEffect = f);
    }
    u(Zm, "initSuspenseListRenderState");
    function eE(e, t, i) {
      var a = t.pendingProps, o = a.revealOrder, f = a.tail, d = a.children;
      ob(o), sb(f, o), fb(d, o), Sr(e, t, d, i);
      var p = ci.current, m = dv(p, od);
      if (m)
        p = Em(p, od), t.effectTag |= Ke;
      else {
        var g = e !== null && (e.effectTag & Ke) !== Qe;
        g && lb(t, t.child, i), p = sd(p);
      }
      if (ro(t, p), (t.mode & Ir) === sn)
        t.memoizedState = null;
      else
        switch (o) {
          case "forwards": {
            var E = ub(t.child), O;
            E === null ? (O = t.child, t.child = null) : (O = E.sibling, E.sibling = null), Zm(
              t,
              !1,
              O,
              E,
              f,
              t.lastEffect
            );
            break;
          }
          case "backwards": {
            var b = null, N = t.child;
            for (t.child = null; N !== null; ) {
              var V = N.alternate;
              if (V !== null && pv(V) === null) {
                t.child = N;
                break;
              }
              var W = N.sibling;
              N.sibling = b, b = N, N = W;
            }
            Zm(
              t,
              !0,
              b,
              null,
              f,
              t.lastEffect
            );
            break;
          }
          case "together": {
            Zm(
              t,
              !1,
              null,
              null,
              void 0,
              t.lastEffect
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    u(eE, "updateSuspenseListComponent");
    function cb(e, t, i) {
      mm(t, t.stateNode.containerInfo);
      var a = t.pendingProps;
      return e === null ? t.child = qs(t, null, a, i) : Sr(e, t, a, i), t.child;
    }
    u(cb, "updatePortalComponent");
    function db(e, t, i) {
      var a = t.type, o = a._context, f = t.pendingProps, d = t.memoizedProps, p = f.value;
      {
        var m = t.type.propTypes;
        m && D(m, f, "prop", "Context.Provider", be);
      }
      if (uT(t, p), d !== null) {
        var g = d.value, E = RC(o, p, g);
        if (E === 0) {
          if (d.children === f.children && !Wp())
            return nl(e, t, i);
        } else
          wC(t, o, E, i);
      }
      var O = f.children;
      return Sr(e, t, O, i), t.child;
    }
    u(db, "updateContextProvider");
    var tE = !1;
    function pb(e, t, i) {
      var a = t.type;
      a._context === void 0 ? a !== a.Consumer && (tE || (tE = !0, T("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : a = a._context;
      var o = t.pendingProps, f = o.children;
      typeof f != "function" && T("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Gs(t, i);
      var d = Vt(a, o.unstable_observedBits), p;
      return pd.current = t, Or(!0), p = f(d), Or(!1), t.effectTag |= cr, Sr(e, t, p, i), t.child;
    }
    u(pb, "updateContextConsumer");
    function Jm() {
      Bl = !0;
    }
    u(Jm, "markWorkInProgressReceivedUpdate");
    function nl(e, t, i) {
      xg(t), e !== null && (t.dependencies = e.dependencies), VT();
      var a = t.expirationTime;
      a !== q && Qv(a);
      var o = t.childExpirationTime;
      return o < i ? null : (LC(e, t), t.child);
    }
    u(nl, "bailoutOnAlreadyFinishedWork");
    function vb(e, t, i) {
      {
        var a = t.return;
        if (a === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, i.index = t.index, i.sibling = t.sibling, i.return = t.return, i.ref = t.ref, t === a.child)
          a.child = i;
        else {
          var o = a.child;
          if (o === null)
            throw new Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw new Error("Expected to find the previous sibling.");
          o.sibling = i;
        }
        var f = a.lastEffect;
        return f !== null ? (f.nextEffect = e, a.lastEffect = e) : a.firstEffect = a.lastEffect = e, e.nextEffect = null, e.effectTag = Na, i.effectTag |= Rt, i;
      }
    }
    u(vb, "remountFiber");
    function nE(e, t, i) {
      var a = t.expirationTime;
      if (t._debugNeedsRemount && e !== null)
        return vb(e, t, wy(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.expirationTime));
      if (e !== null) {
        var o = e.memoizedProps, f = t.pendingProps;
        if (o !== f || Wp() || t.type !== e.type)
          Bl = !0;
        else if (a < i) {
          switch (Bl = !1, t.tag) {
            case se:
              XT(t), Im();
              break;
            case ae:
              if (xT(t), t.mode & Bs && i !== ia && y(t.type, f))
                return Ey(ia), t.expirationTime = t.childExpirationTime = ia, null;
              break;
            case re: {
              var d = t.type;
              ta(d) && Qp(t);
              break;
            }
            case Ce:
              mm(t, t.stateNode.containerInfo);
              break;
            case z: {
              var p = t.memoizedProps.value;
              uT(t, p);
              break;
            }
            case pe:
              {
                var m = t.childExpirationTime >= i;
                m && (t.effectTag |= Pe);
              }
              break;
            case K: {
              var g = t.memoizedState;
              if (g !== null) {
                var E = t.child, O = E.childExpirationTime;
                if (O !== q && O >= i)
                  return KT(e, t, i);
                ro(t, sd(ci.current));
                var b = nl(e, t, i);
                return b !== null ? b.sibling : null;
              } else
                ro(t, sd(ci.current));
              break;
            }
            case hn: {
              var N = (e.effectTag & Ke) !== Qe, V = t.childExpirationTime >= i;
              if (N) {
                if (V)
                  return eE(e, t, i);
                t.effectTag |= Ke;
              }
              var W = t.memoizedState;
              if (W !== null && (W.rendering = null, W.tail = null), ro(t, ci.current), V)
                break;
              return null;
            }
          }
          return nl(e, t, i);
        } else
          Bl = !1;
      } else
        Bl = !1;
      switch (t.expirationTime = q, t.tag) {
        case At:
          return ib(e, t, t.type, i);
        case vn: {
          var oe = t.elementType;
          return nb(e, t, oe, a, i);
        }
        case Re: {
          var de = t.type, $e = t.pendingProps, Oe = t.elementType === de ? $e : fi(de, $e);
          return Gm(e, t, de, Oe, i);
        }
        case re: {
          var nt = t.type, _ = t.pendingProps, U = t.elementType === nt ? _ : fi(nt, _);
          return qT(e, t, nt, U, i);
        }
        case se:
          return JC(e, t, i);
        case ae:
          return eb(e, t, i);
        case ge:
          return tb(e, t);
        case K:
          return KT(e, t, i);
        case Ce:
          return cb(e, t, i);
        case B: {
          var x = t.type, I = t.pendingProps, H = t.elementType === x ? I : fi(x, I);
          return QT(e, t, x, H, i);
        }
        case It:
          return XC(e, t, i);
        case pn:
          return KC(e, t, i);
        case pe:
          return ZC(e, t, i);
        case z:
          return db(e, t, i);
        case wn:
          return pb(e, t, i);
        case ke: {
          var $ = t.type, Me = t.pendingProps, Ve = fi($, Me);
          if (t.type !== t.elementType) {
            var Je = $.propTypes;
            Je && D(
              Je,
              Ve,
              "prop",
              Q($),
              be
            );
          }
          return Ve = fi($.type, Ve), YT(e, t, $, Ve, a, i);
        }
        case Ye:
          return $T(e, t, t.type, t.pendingProps, a, i);
        case Le: {
          var Ie = t.type, Ge = t.pendingProps, je = t.elementType === Ie ? Ge : fi(Ie, Ge);
          return rb(e, t, Ie, je, i);
        }
        case hn:
          return eE(e, t, i);
      }
      throw Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    u(nE, "beginWork");
    function lf(e) {
      e.effectTag |= Pe;
    }
    u(lf, "markUpdate");
    function rE(e) {
      e.effectTag |= Tn;
    }
    u(rE, "markRef$1");
    var iE, ey, aE, lE;
    iE = /* @__PURE__ */ u(function(e, t, i, a) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === ae || o.tag === ge)
          s(e, o.stateNode);
        else if (o.tag !== Ce) {
          if (o.child !== null) {
            o.child.return = o, o = o.child;
            continue;
          }
        }
        if (o === t)
          return;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === t)
            return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }, "appendAllChildren"), ey = /* @__PURE__ */ u(function(e) {
    }, "updateHostContainer"), aE = /* @__PURE__ */ u(function(e, t, i, a, o) {
      var f = e.memoizedProps;
      if (f !== a) {
        var d = t.stateNode, p = ym(), m = v(d, i, f, a, o, p);
        t.updateQueue = m, m && lf(t);
      }
    }, "updateHostComponent$1"), lE = /* @__PURE__ */ u(function(e, t, i, a) {
      i !== a && lf(t);
    }, "updateHostText$1");
    function Nv(e, t) {
      switch (e.tailMode) {
        case "hidden": {
          for (var i = e.tail, a = null; i !== null; )
            i.alternate !== null && (a = i), i = i.sibling;
          a === null ? e.tail = null : a.sibling = null;
          break;
        }
        case "collapsed": {
          for (var o = e.tail, f = null; o !== null; )
            o.alternate !== null && (f = o), o = o.sibling;
          f === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : f.sibling = null;
          break;
        }
      }
    }
    u(Nv, "cutOffTailIfNeeded");
    function uE(e, t, i) {
      var a = t.pendingProps;
      switch (t.tag) {
        case At:
        case vn:
        case Ye:
        case Re:
        case B:
        case It:
        case pn:
        case pe:
        case wn:
        case ke:
          return null;
        case re: {
          var o = t.type;
          return ta(o) && Bp(t), null;
        }
        case se: {
          Xs(t), Ah(t);
          var f = t.stateNode;
          if (f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), e === null || e.child === null) {
            var d = Dv(t);
            d && lf(t);
          }
          return ey(t), null;
        }
        case ae: {
          gm(t);
          var p = bT(), m = t.type;
          if (e !== null && t.stateNode != null)
            aE(e, t, m, a, p), e.ref !== t.ref && rE(t);
          else {
            if (!a) {
              if (t.stateNode === null)
                throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return null;
            }
            var g = ym(), E = Dv(t);
            if (E)
              YC(t, p, g) && lf(t);
            else {
              var O = l(m, a, p, g, t);
              iE(O, t, !1, !1), t.stateNode = O, c(O, m, a, p) && lf(t);
            }
            t.ref !== null && rE(t);
          }
          return null;
        }
        case ge: {
          var b = a;
          if (e && t.stateNode != null) {
            var N = e.memoizedProps;
            lE(e, t, N, b);
          } else {
            if (typeof b != "string" && t.stateNode === null)
              throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var V = bT(), W = ym(), oe = Dv(t);
            oe ? $C(t) && lf(t) : t.stateNode = w(b, V, W, t);
          }
          return null;
        }
        case K: {
          Ks(t);
          var de = t.memoizedState;
          if ((t.effectTag & Ke) !== Qe)
            return t.expirationTime = i, t;
          var $e = de !== null, Oe = !1;
          if (e === null)
            t.memoizedProps.fallback !== void 0 && Dv(t);
          else {
            var nt = e.memoizedState;
            if (Oe = nt !== null, !$e && nt !== null) {
              var _ = e.child.sibling;
              if (_ !== null) {
                var U = t.firstEffect;
                U !== null ? (t.firstEffect = _, _.nextEffect = U) : (t.firstEffect = t.lastEffect = _, _.nextEffect = null), _.effectTag = Na;
              }
            }
          }
          if ($e && !Oe && (t.mode & Ir) !== sn) {
            var x = e === null && t.memoizedProps.unstable_avoidThisFallback !== !0;
            x || dv(ci.current, Tm) ? Kb() : Zb();
          }
          return ($e || Oe) && (t.effectTag |= Pe), null;
        }
        case Ce:
          return Xs(t), ey(t), null;
        case z:
          return Gh(t), null;
        case Le: {
          var I = t.type;
          return ta(I) && Bp(t), null;
        }
        case hn: {
          Ks(t);
          var H = t.memoizedState;
          if (H === null)
            return null;
          var $ = (t.effectTag & Ke) !== Qe, Me = H.rendering;
          if (Me === null)
            if ($)
              Nv(H, !1);
            else {
              var Ve = e1() && (e === null || (e.effectTag & Ke) === Qe);
              if (!Ve)
                for (var Je = t.child; Je !== null; ) {
                  var Ie = pv(Je);
                  if (Ie !== null) {
                    $ = !0, t.effectTag |= Ke, Nv(H, !1);
                    var Ge = Ie.updateQueue;
                    return Ge !== null && (t.updateQueue = Ge, t.effectTag |= Pe), H.lastEffect === null && (t.firstEffect = null), t.lastEffect = H.lastEffect, zC(t, i), ro(t, Em(ci.current, od)), t.child;
                  }
                  Je = Je.sibling;
                }
            }
          else {
            if (!$) {
              var je = pv(Me);
              if (je !== null) {
                t.effectTag |= Ke, $ = !0;
                var vt = je.updateQueue;
                if (vt !== null && (t.updateQueue = vt, t.effectTag |= Pe), Nv(H, !0), H.tail === null && H.tailMode === "hidden" && !Me.alternate) {
                  var Mt = t.lastEffect = H.lastEffect;
                  return Mt !== null && (Mt.nextEffect = null), null;
                }
              } else if (Tr() * 2 - H.renderingStartTime > H.tailExpiration && i > ia) {
                t.effectTag |= Ke, $ = !0, Nv(H, !1);
                var Ut = i - 1;
                t.expirationTime = t.childExpirationTime = Ut, Ey(Ut);
              }
            }
            if (H.isBackwards)
              Me.sibling = t.child, t.child = Me;
            else {
              var Rn = H.last;
              Rn !== null ? Rn.sibling = Me : t.child = Me, H.last = Me;
            }
          }
          if (H.tail !== null) {
            if (H.tailExpiration === 0) {
              var ot = 500;
              H.tailExpiration = Tr() + ot;
            }
            var In = H.tail;
            H.rendering = In, H.tail = In.sibling, H.lastEffect = t.lastEffect, H.renderingStartTime = Tr(), In.sibling = null;
            var vi = ci.current;
            return $ ? vi = Em(vi, od) : vi = sd(vi), ro(t, vi), In;
          }
          return null;
        }
      }
      throw Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    u(uE, "completeWork");
    function hb(e, t) {
      switch (e.tag) {
        case re: {
          var i = e.type;
          ta(i) && Bp(e);
          var a = e.effectTag;
          return a & En ? (e.effectTag = a & ~En | Ke, e) : null;
        }
        case se: {
          Xs(e), Ah(e);
          var o = e.effectTag;
          if ((o & Ke) !== Qe)
            throw Error("The root failed to unmount after an error. This is likely a bug in React. Please file an issue.");
          return e.effectTag = o & ~En | Ke, e;
        }
        case ae:
          return gm(e), null;
        case K: {
          Ks(e);
          var f = e.effectTag;
          return f & En ? (e.effectTag = f & ~En | Ke, e) : null;
        }
        case hn:
          return Ks(e), null;
        case Ce:
          return Xs(e), null;
        case z:
          return Gh(e), null;
        default:
          return null;
      }
    }
    u(hb, "unwindWork");
    function oE(e) {
      switch (e.tag) {
        case re: {
          var t = e.type.childContextTypes;
          t != null && Bp(e);
          break;
        }
        case se: {
          Xs(e), Ah(e);
          break;
        }
        case ae: {
          gm(e);
          break;
        }
        case Ce:
          Xs(e);
          break;
        case K:
          Ks(e);
          break;
        case hn:
          Ks(e);
          break;
        case z:
          Gh(e);
          break;
      }
    }
    u(oE, "unwindInterruptedWork");
    function ty(e, t) {
      return {
        value: e,
        source: t,
        stack: qt(t)
      };
    }
    u(ty, "createCapturedValue");
    function mb(e) {
      var t = e.error;
      {
        var i = e.componentName, a = e.componentStack, o = e.errorBoundaryName, f = e.errorBoundaryFound, d = e.willRetry;
        if (t != null && t._suppressLogging) {
          if (f && d)
            return;
          console.error(t);
        }
        var p = i ? "The above error occurred in the <" + i + "> component:" : "The above error occurred in one of your React components:", m;
        f && o ? d ? m = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + o + ".") : m = "This error was initially handled by the error boundary " + o + `.
Recreating the tree from scratch failed so React will unmount the tree.` : m = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://fb.me/react-error-boundaries to learn more about error boundaries.`;
        var g = "" + p + a + `

` + ("" + m);
        console.error(g);
      }
    }
    u(mb, "logCapturedError");
    var sE = null;
    sE = /* @__PURE__ */ new Set();
    var yb = typeof WeakSet == "function" ? WeakSet : Set;
    function ny(e, t) {
      var i = t.source, a = t.stack;
      a === null && i !== null && (a = qt(i));
      var o = {
        componentName: i !== null ? Q(i.type) : null,
        componentStack: a !== null ? a : "",
        error: t.value,
        errorBoundary: null,
        errorBoundaryName: null,
        errorBoundaryFound: !1,
        willRetry: !1
      };
      e !== null && e.tag === re && (o.errorBoundary = e.stateNode, o.errorBoundaryName = Q(e.type), o.errorBoundaryFound = !0, o.willRetry = !0);
      try {
        mb(o);
      } catch (f) {
        setTimeout(function() {
          throw f;
        });
      }
    }
    u(ny, "logError");
    var gb = /* @__PURE__ */ u(function(e, t) {
      Zi(e, "componentWillUnmount"), t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount(), Ji();
    }, "callComponentWillUnmountWithTimer");
    function Tb(e, t) {
      if (Se(null, gb, null, e, t), le()) {
        var i = ye();
        ho(e, i);
      }
    }
    u(Tb, "safelyCallComponentWillUnmount");
    function fE(e) {
      var t = e.ref;
      if (t !== null)
        if (typeof t == "function") {
          if (Se(null, t, null, null), le()) {
            var i = ye();
            ho(e, i);
          }
        } else
          t.current = null;
    }
    u(fE, "safelyDetachRef");
    function Eb(e, t) {
      if (Se(null, t, null), le()) {
        var i = ye();
        ho(e, i);
      }
    }
    u(Eb, "safelyCallDestroy");
    function Sb(e, t) {
      switch (t.tag) {
        case Re:
        case B:
        case Ye:
        case rt:
          return;
        case re: {
          if (t.effectTag & Ui && e !== null) {
            var i = e.memoizedProps, a = e.memoizedState;
            Zi(t, "getSnapshotBeforeUpdate");
            var o = t.stateNode;
            t.type === t.elementType && !uo && (o.props !== t.memoizedProps && T("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Q(t.type) || "instance"), o.state !== t.memoizedState && T("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Q(t.type) || "instance"));
            var f = o.getSnapshotBeforeUpdate(t.elementType === t.type ? i : fi(t.type, i), a);
            {
              var d = sE;
              f === void 0 && !d.has(t.type) && (d.add(t.type), T("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Q(t.type)));
            }
            o.__reactInternalSnapshotBeforeUpdate = f, Ji();
          }
          return;
        }
        case se:
        case ae:
        case ge:
        case Ce:
        case Le:
          return;
      }
      throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    u(Sb, "commitBeforeMutationLifeCycles");
    function cE(e, t) {
      var i = t.updateQueue, a = i !== null ? i.lastEffect : null;
      if (a !== null) {
        var o = a.next, f = o;
        do {
          if ((f.tag & e) === e) {
            var d = f.destroy;
            f.destroy = void 0, d !== void 0 && d();
          }
          f = f.next;
        } while (f !== o);
      }
    }
    u(cE, "commitHookEffectListUnmount");
    function dE(e, t) {
      var i = t.updateQueue, a = i !== null ? i.lastEffect : null;
      if (a !== null) {
        var o = a.next, f = o;
        do {
          if ((f.tag & e) === e) {
            var d = f.create;
            f.destroy = d();
            {
              var p = f.destroy;
              if (p !== void 0 && typeof p != "function") {
                var m = void 0;
                p === null ? m = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? m = `

It looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

useEffect(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://fb.me/react-hooks-data-fetching` : m = " You returned: " + p, T("An effect function must not return anything besides a function, which is used for clean-up.%s%s", m, qt(t));
              }
            }
          }
          f = f.next;
        } while (f !== o);
      }
    }
    u(dE, "commitHookEffectListMount");
    function Cb(e) {
      if ((e.effectTag & Ai) !== Qe)
        switch (e.tag) {
          case Re:
          case B:
          case Ye:
          case rt: {
            cE(vv | Zs, e), dE(vv | Zs, e);
            break;
          }
        }
    }
    u(Cb, "commitPassiveHookEffects");
    function bb(e, t, i, a) {
      switch (i.tag) {
        case Re:
        case B:
        case Ye:
        case rt: {
          dE(Js | Zs, i);
          return;
        }
        case re: {
          var o = i.stateNode;
          if (i.effectTag & Pe)
            if (t === null)
              Zi(i, "componentDidMount"), i.type === i.elementType && !uo && (o.props !== i.memoizedProps && T("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Q(i.type) || "instance"), o.state !== i.memoizedState && T("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Q(i.type) || "instance")), o.componentDidMount(), Ji();
            else {
              var f = i.elementType === i.type ? t.memoizedProps : fi(i.type, t.memoizedProps), d = t.memoizedState;
              Zi(i, "componentDidUpdate"), i.type === i.elementType && !uo && (o.props !== i.memoizedProps && T("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Q(i.type) || "instance"), o.state !== i.memoizedState && T("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Q(i.type) || "instance")), o.componentDidUpdate(f, d, o.__reactInternalSnapshotBeforeUpdate), Ji();
            }
          var p = i.updateQueue;
          p !== null && (i.type === i.elementType && !uo && (o.props !== i.memoizedProps && T("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Q(i.type) || "instance"), o.state !== i.memoizedState && T("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Q(i.type) || "instance")), pT(i, p, o));
          return;
        }
        case se: {
          var m = i.updateQueue;
          if (m !== null) {
            var g = null;
            if (i.child !== null)
              switch (i.child.tag) {
                case ae:
                  g = i.child.stateNode;
                  break;
                case re:
                  g = i.child.stateNode;
                  break;
              }
            pT(i, m, g);
          }
          return;
        }
        case ae: {
          var E = i.stateNode;
          if (t === null && i.effectTag & Pe) {
            var O = i.type, b = i.memoizedProps;
            De(E, O, b);
          }
          return;
        }
        case ge:
          return;
        case Ce:
          return;
        case pe: {
          {
            var N = i.memoizedProps.onRender;
            typeof N == "function" && N(i.memoizedProps.id, t === null ? "mount" : "update", i.actualDuration, i.treeBaseDuration, i.actualStartTime, BC(), e.memoizedInteractions);
          }
          return;
        }
        case K: {
          Mb(e, i);
          return;
        }
        case hn:
        case Le:
        case mn:
        case Lt:
          return;
      }
      throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    u(bb, "commitLifeCycles");
    function xb(e, t) {
      for (var i = e; ; ) {
        if (i.tag === ae) {
          var a = i.stateNode;
          t ? ue(a) : pt(i.stateNode, i.memoizedProps);
        } else if (i.tag === ge) {
          var o = i.stateNode;
          t ? Ae(o) : Ee(o, i.memoizedProps);
        } else if (i.tag === K && i.memoizedState !== null && i.memoizedState.dehydrated === null) {
          var f = i.child.sibling;
          f.return = i, i = f;
          continue;
        } else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    u(xb, "hideOrUnhideAllChildren");
    function Rb(e) {
      var t = e.ref;
      if (t !== null) {
        var i = e.stateNode, a;
        switch (e.tag) {
          case ae:
            a = i;
            break;
          default:
            a = i;
        }
        typeof t == "function" ? t(a) : (t.hasOwnProperty("current") || T("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().%s", Q(e.type), qt(e)), t.current = a);
      }
    }
    u(Rb, "commitAttachRef");
    function wb(e) {
      var t = e.ref;
      t !== null && (typeof t == "function" ? t(null) : t.current = null);
    }
    u(wb, "commitDetachRef");
    function pE(e, t, i) {
      switch (M1(t), t.tag) {
        case Re:
        case B:
        case ke:
        case Ye:
        case rt: {
          var a = t.updateQueue;
          if (a !== null) {
            var o = a.lastEffect;
            if (o !== null) {
              var f = o.next;
              {
                var d = i > oi ? oi : i;
                tl(d, function() {
                  var m = f;
                  do {
                    var g = m.destroy;
                    g !== void 0 && Eb(t, g), m = m.next;
                  } while (m !== f);
                });
              }
            }
          }
          return;
        }
        case re: {
          fE(t);
          var p = t.stateNode;
          typeof p.componentWillUnmount == "function" && Tb(t, p);
          return;
        }
        case ae: {
          fE(t);
          return;
        }
        case Ce: {
          yE(e, t, i);
          return;
        }
        case mn:
          return;
        case qe:
          return;
        case Lt:
          return;
      }
    }
    u(pE, "commitUnmount");
    function _b(e, t, i) {
      for (var a = t; ; ) {
        if (pE(e, a, i), a.child !== null && a.tag !== Ce) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === t)
          return;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === t)
            return;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    }
    u(_b, "commitNestedUnmounts");
    function vE(e) {
      var t = e.alternate;
      e.return = null, e.child = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.alternate = null, e.firstEffect = null, e.lastEffect = null, e.pendingProps = null, e.memoizedProps = null, e.stateNode = null, t !== null && vE(t);
    }
    u(vE, "detachFiber");
    function kb(e) {
      for (var t = e.return; t !== null; ) {
        if (hE(t))
          return t;
        t = t.return;
      }
      throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    u(kb, "getHostParentFiber");
    function hE(e) {
      return e.tag === ae || e.tag === se || e.tag === Ce;
    }
    u(hE, "isHostParent");
    function Db(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || hE(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== ae && t.tag !== ge && t.tag !== qe; ) {
            if (t.effectTag & Rt || t.child === null || t.tag === Ce)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.effectTag & Rt))
            return t.stateNode;
        }
    }
    u(Db, "getHostSibling");
    function mE(e) {
      var t = kb(e), i, a, o = t.stateNode;
      switch (t.tag) {
        case ae:
          i = o, a = !1;
          break;
        case se:
          i = o.containerInfo, a = !0;
          break;
        case Ce:
          i = o.containerInfo, a = !0;
          break;
        case mn:
        default:
          throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
      t.effectTag & Mn && (Pn(i), t.effectTag &= ~Mn);
      var f = Db(e);
      a ? ry(e, f, i) : iy(e, f, i);
    }
    u(mE, "commitPlacement");
    function ry(e, t, i) {
      var a = e.tag, o = a === ae || a === ge;
      if (o || jt) {
        var f = o ? e.stateNode : e.stateNode.instance;
        t ? P(i, f, t) : S(i, f);
      } else if (a !== Ce) {
        var d = e.child;
        if (d !== null) {
          ry(d, t, i);
          for (var p = d.sibling; p !== null; )
            ry(p, t, i), p = p.sibling;
        }
      }
    }
    u(ry, "insertOrAppendPlacementNodeIntoContainer");
    function iy(e, t, i) {
      var a = e.tag, o = a === ae || a === ge;
      if (o || jt) {
        var f = o ? e.stateNode : e.stateNode.instance;
        t ? k(i, f, t) : C(i, f);
      } else if (a !== Ce) {
        var d = e.child;
        if (d !== null) {
          iy(d, t, i);
          for (var p = d.sibling; p !== null; )
            iy(p, t, i), p = p.sibling;
        }
      }
    }
    u(iy, "insertOrAppendPlacementNode");
    function yE(e, t, i) {
      for (var a = t, o = !1, f, d; ; ) {
        if (!o) {
          var p = a.return;
          e:
            for (; ; ) {
              if (p === null)
                throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
              var m = p.stateNode;
              switch (p.tag) {
                case ae:
                  f = m, d = !1;
                  break e;
                case se:
                  f = m.containerInfo, d = !0;
                  break e;
                case Ce:
                  f = m.containerInfo, d = !0;
                  break e;
              }
              p = p.return;
            }
          o = !0;
        }
        if (a.tag === ae || a.tag === ge)
          _b(e, a, i), d ? Z(f, a.stateNode) : j(f, a.stateNode);
        else if (a.tag === Ce) {
          if (a.child !== null) {
            f = a.stateNode.containerInfo, d = !0, a.child.return = a, a = a.child;
            continue;
          }
        } else if (pE(e, a, i), a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === t)
          return;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === t)
            return;
          a = a.return, a.tag === Ce && (o = !1);
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    }
    u(yE, "unmountHostComponents");
    function Ob(e, t, i) {
      yE(e, t, i), vE(t);
    }
    u(Ob, "commitDeletion");
    function ay(e, t) {
      switch (t.tag) {
        case Re:
        case B:
        case ke:
        case Ye:
        case rt: {
          cE(Js | Zs, t);
          return;
        }
        case re:
          return;
        case ae: {
          var i = t.stateNode;
          if (i != null) {
            var a = t.memoizedProps, o = e !== null ? e.memoizedProps : a, f = t.type, d = t.updateQueue;
            t.updateQueue = null, d !== null && He(i, d, f, o, a);
          }
          return;
        }
        case ge: {
          if (t.stateNode === null)
            throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
          var p = t.stateNode, m = t.memoizedProps, g = e !== null ? e.memoizedProps : m;
          Yt(p, g, m);
          return;
        }
        case se: {
          {
            var E = t.stateNode;
            E.hydrate && (E.hydrate = !1, _S(E.containerInfo));
          }
          return;
        }
        case pe:
          return;
        case K: {
          Nb(t), gE(t);
          return;
        }
        case hn: {
          gE(t);
          return;
        }
        case Le:
          return;
      }
      throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    u(ay, "commitWork");
    function Nb(e) {
      var t = e.memoizedState, i, a = e;
      t === null ? i = !1 : (i = !0, a = e.child, Xb()), a !== null && xb(a, i);
    }
    u(Nb, "commitSuspenseComponent");
    function Mb(e, t) {
      var i = t.memoizedState;
      if (i === null) {
        var a = t.alternate;
        if (a !== null) {
          var o = a.memoizedState;
          if (o !== null) {
            var f = o.dehydrated;
            f !== null && kS(f);
          }
        }
      }
    }
    u(Mb, "commitSuspenseHydrationCallbacks");
    function gE(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var i = e.stateNode;
        i === null && (i = e.stateNode = new yb()), t.forEach(function(a) {
          var o = m1.bind(null, e, a);
          i.has(a) || (a.__reactDoNotTraceInteractions !== !0 && (o = at.unstable_wrap(o)), i.add(a), a.then(o, o));
        });
      }
    }
    u(gE, "attachSuspenseRetryListeners");
    function Ub(e) {
      Pn(e.stateNode);
    }
    u(Ub, "commitResetTextContent");
    var Ab = typeof WeakMap == "function" ? WeakMap : Map;
    function TE(e, t, i) {
      var a = Hl(i, null);
      a.tag = qh, a.payload = {
        element: null
      };
      var o = t.value;
      return a.callback = function() {
        p1(o), ny(e, t);
      }, a;
    }
    u(TE, "createRootErrorUpdate");
    function EE(e, t, i) {
      var a = Hl(i, null);
      a.tag = qh;
      var o = e.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = t.value;
        a.payload = function() {
          return ny(e, t), o(f);
        };
      }
      var d = e.stateNode;
      return d !== null && typeof d.componentDidCatch == "function" ? a.callback = /* @__PURE__ */ u(function() {
        iT(e), typeof o != "function" && (c1(this), ny(e, t));
        var m = t.value, g = t.stack;
        this.componentDidCatch(m, {
          componentStack: g !== null ? g : ""
        }), typeof o != "function" && e.expirationTime !== Fe && T("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Q(e.type) || "Unknown");
      }, "callback") : a.callback = function() {
        iT(e);
      }, a;
    }
    u(EE, "createClassErrorUpdate");
    function Lb(e, t, i) {
      var a = e.pingCache, o;
      if (a === null ? (a = e.pingCache = new Ab(), o = /* @__PURE__ */ new Set(), a.set(i, o)) : (o = a.get(i), o === void 0 && (o = /* @__PURE__ */ new Set(), a.set(i, o))), !o.has(t)) {
        o.add(t);
        var f = v1.bind(null, e, i, t);
        i.then(f, f);
      }
    }
    u(Lb, "attachPingListener");
    function zb(e, t, i, a, o) {
      if (i.effectTag |= xl, i.firstEffect = i.lastEffect = null, a !== null && typeof a == "object" && typeof a.then == "function") {
        var f = a;
        if ((i.mode & Ir) === sn) {
          var d = i.alternate;
          d ? (i.updateQueue = d.updateQueue, i.memoizedState = d.memoizedState, i.expirationTime = d.expirationTime) : (i.updateQueue = null, i.memoizedState = null);
        }
        var p = dv(ci.current, Tm), m = t;
        do {
          if (m.tag === K && HC(m, p)) {
            var g = m.updateQueue;
            if (g === null) {
              var E = /* @__PURE__ */ new Set();
              E.add(f), m.updateQueue = E;
            } else
              g.add(f);
            if ((m.mode & Ir) === sn) {
              if (m.effectTag |= Ke, i.effectTag &= ~(tc | xl), i.tag === re) {
                var O = i.alternate;
                if (O === null)
                  i.tag = Le;
                else {
                  var b = Hl(Fe, null);
                  b.tag = tv, Vl(i, b);
                }
              }
              i.expirationTime = Fe;
              return;
            }
            Lb(e, o, f), m.effectTag |= En, m.expirationTime = o;
            return;
          }
          m = m.return;
        } while (m !== null);
        a = new Error((Q(i.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.` + qt(i));
      }
      Jb(), a = ty(a, i);
      var N = t;
      do {
        switch (N.tag) {
          case se: {
            var V = a;
            N.effectTag |= En, N.expirationTime = o;
            var W = TE(N, V, o);
            cT(N, W);
            return;
          }
          case re:
            var oe = a, de = N.type, $e = N.stateNode;
            if ((N.effectTag & Ke) === Qe && (typeof de.getDerivedStateFromError == "function" || $e !== null && typeof $e.componentDidCatch == "function" && !LE($e))) {
              N.effectTag |= En, N.expirationTime = o;
              var Oe = EE(N, oe, o);
              cT(N, Oe);
              return;
            }
            break;
        }
        N = N.return;
      } while (N !== null);
    }
    u(zb, "throwException");
    var Pb = Math.ceil, ly = we.ReactCurrentDispatcher, SE = we.ReactCurrentOwner, uy = we.IsSomeRendererActing, Nt = 0, Mv = 1, Fb = 2, CE = 4, oy = 8, Cr = 16, la = 32, oo = 0, Uv = 1, bE = 2, Av = 3, Lv = 4, sy = 5, ve = Nt, Jn = null, ne = null, cn = q, Zt = oo, zv = null, rl = Fe, vd = Fe, Pv = null, hd = q, Fv = !1, fy = 0, xE = 500, te = null, Hv = !1, cy = null, uf = null, md = !1, of = null, yd = js, dy = q, so = null, Hb = 50, gd = 0, py = null, Vb = 50, Vv = 0, Td = null, fo = null, Ed = q;
    function ua() {
      return (ve & (Cr | la)) !== Nt ? Hh(Tr()) : (Ed !== q || (Ed = Hh(Tr())), Ed);
    }
    u(ua, "requestCurrentTimeForUpdate");
    function Ib() {
      return Hh(Tr());
    }
    u(Ib, "getCurrentTime");
    function co(e, t, i) {
      var a = t.mode;
      if ((a & Ir) === sn)
        return Fe;
      var o = Ws();
      if ((a & Bs) === sn)
        return o === Vn ? Fe : Kg;
      if ((ve & Cr) !== Nt)
        return cn;
      var f;
      if (i !== null)
        f = mC(e, i.timeoutMs | 0 || Xc);
      else
        switch (o) {
          case Vn:
            f = Fe;
            break;
          case Fl:
            f = eT(e);
            break;
          case oi:
          case Ph:
            f = hC(e);
            break;
          case $c:
            f = Ju;
            break;
          default:
            throw Error("Expected a valid priority level");
        }
      return Jn !== null && f === cn && (f -= 1), f;
    }
    u(co, "computeExpirationForFiber");
    function jb(e, t) {
      T1(), x1(e);
      var i = Iv(e, t);
      if (i === null) {
        C1(e);
        return;
      }
      S1(e, t), tC();
      var a = Ws();
      if (t === Fe ? (ve & oy) !== Nt && (ve & (Cr | la)) === Nt ? (Yl(i, t), vy(i)) : (br(i), Yl(i, t), ve === Nt && na()) : (br(i), Yl(i, t)), (ve & CE) !== Nt && (a === Fl || a === Vn))
        if (so === null)
          so = /* @__PURE__ */ new Map([[i, t]]);
        else {
          var o = so.get(i);
          (o === void 0 || o > t) && so.set(i, t);
        }
    }
    u(jb, "scheduleUpdateOnFiber");
    var Yr = jb;
    function Iv(e, t) {
      e.expirationTime < t && (e.expirationTime = t);
      var i = e.alternate;
      i !== null && i.expirationTime < t && (i.expirationTime = t);
      var a = e.return, o = null;
      if (a === null && e.tag === se)
        o = e.stateNode;
      else
        for (; a !== null; ) {
          if (i = a.alternate, a.childExpirationTime < t && (a.childExpirationTime = t), i !== null && i.childExpirationTime < t && (i.childExpirationTime = t), a.return === null && a.tag === se) {
            o = a.stateNode;
            break;
          }
          a = a.return;
        }
      return o !== null && (Jn === o && (Qv(t), Zt === Lv && go(o, cn)), GE(o, t)), o;
    }
    u(Iv, "markUpdateTimeFromFiberToRoot");
    function jv(e) {
      var t = e.lastExpiredTime;
      if (t !== q)
        return t;
      var i = e.firstPendingTime;
      if (!$E(e, i))
        return i;
      var a = e.lastPingedTime, o = e.nextKnownPendingLevel, f = a > o ? a : o;
      return f <= Ju && i !== f ? q : f;
    }
    u(jv, "getNextRootExpirationTimeToWorkOn");
    function br(e) {
      var t = e.lastExpiredTime;
      if (t !== q) {
        e.callbackExpirationTime = Fe, e.callbackPriority = Vn, e.callbackNode = Gg(vy.bind(null, e));
        return;
      }
      var i = jv(e), a = e.callbackNode;
      if (i === q) {
        a !== null && (e.callbackNode = null, e.callbackExpirationTime = q, e.callbackPriority = js);
        return;
      }
      var o = ua(), f = tT(o, i);
      if (a !== null) {
        var d = e.callbackPriority, p = e.callbackExpirationTime;
        if (p === i && d >= f)
          return;
        pC(a);
      }
      e.callbackExpirationTime = i, e.callbackPriority = f;
      var m;
      i === Fe ? m = Gg(vy.bind(null, e)) : m = Gc(
        f,
        RE.bind(null, e),
        {
          timeout: eo(i) - Tr()
        }
      ), e.callbackNode = m;
    }
    u(br, "ensureRootIsScheduled");
    function RE(e, t) {
      if (Ed = q, t) {
        var i = ua();
        return Oy(e, i), br(e), null;
      }
      var a = jv(e);
      if (a !== q) {
        var o = e.callbackNode;
        if ((ve & (Cr | la)) !== Nt)
          throw Error("Should not already be working.");
        if (Ql(), (e !== Jn || a !== cn) && (po(e, a), WE(e, a)), ne !== null) {
          var f = ve;
          ve |= Cr;
          var d = OE(), p = Wv(e);
          wg(ne);
          do
            try {
              i1();
              break;
            } catch (E) {
              DE(e, E);
            }
          while (!0);
          if (ev(), ve = f, NE(d), Bv(p), Zt === Uv) {
            var m = zv;
            throw my(), po(e, a), go(e, a), br(e), m;
          }
          if (ne !== null)
            my();
          else {
            PE();
            var g = e.finishedWork = e.current.alternate;
            e.finishedExpirationTime = a, Wb(e, g, Zt, a);
          }
          if (br(e), e.callbackNode === o)
            return RE.bind(null, e);
        }
      }
      return null;
    }
    u(RE, "performConcurrentWorkOnRoot");
    function Wb(e, t, i, a) {
      switch (Jn = null, i) {
        case oo:
        case Uv:
          throw Error("Root did not complete. This is a bug in React.");
        case bE: {
          Oy(e, a > Ju ? Ju : a);
          break;
        }
        case Av: {
          go(e, a);
          var o = e.lastSuspendedTime;
          a === o && (e.nextKnownPendingLevel = hy(t));
          var f = rl === Fe;
          if (f && !mo.current) {
            var d = fy + xE - Tr();
            if (d > 10) {
              if (Fv) {
                var p = e.lastPingedTime;
                if (p === q || p >= a) {
                  e.lastPingedTime = a, po(e, a);
                  break;
                }
              }
              var m = jv(e);
              if (m !== q && m !== a)
                break;
              if (o !== q && o !== a) {
                e.lastPingedTime = o;
                break;
              }
              e.timeoutHandle = R(vo.bind(null, e), d);
              break;
            }
          }
          vo(e);
          break;
        }
        case Lv: {
          go(e, a);
          var g = e.lastSuspendedTime;
          if (a === g && (e.nextKnownPendingLevel = hy(t)), !mo.current) {
            if (Fv) {
              var E = e.lastPingedTime;
              if (E === q || E >= a) {
                e.lastPingedTime = a, po(e, a);
                break;
              }
            }
            var O = jv(e);
            if (O !== q && O !== a)
              break;
            if (g !== q && g !== a) {
              e.lastPingedTime = g;
              break;
            }
            var b;
            if (vd !== Fe)
              b = eo(vd) - Tr();
            else if (rl === Fe)
              b = 0;
            else {
              var N = t1(rl), V = Tr(), W = eo(a) - V, oe = V - N;
              oe < 0 && (oe = 0), b = y1(oe) - oe, W < b && (b = W);
            }
            if (b > 10) {
              e.timeoutHandle = R(vo.bind(null, e), b);
              break;
            }
          }
          vo(e);
          break;
        }
        case sy: {
          if (!mo.current && rl !== Fe && Pv !== null) {
            var de = g1(rl, a, Pv);
            if (de > 10) {
              go(e, a), e.timeoutHandle = R(vo.bind(null, e), de);
              break;
            }
          }
          vo(e);
          break;
        }
        default:
          throw Error("Unknown root exit status.");
      }
    }
    u(Wb, "finishConcurrentRender");
    function vy(e) {
      var t = e.lastExpiredTime, i = t !== q ? t : Fe;
      if ((ve & (Cr | la)) !== Nt)
        throw Error("Should not already be working.");
      if (Ql(), (e !== Jn || i !== cn) && (po(e, i), WE(e, i)), ne !== null) {
        var a = ve;
        ve |= Cr;
        var o = OE(), f = Wv(e);
        wg(ne);
        do
          try {
            r1();
            break;
          } catch (p) {
            DE(e, p);
          }
        while (!0);
        if (ev(), ve = a, NE(o), Bv(f), Zt === Uv) {
          var d = zv;
          throw my(), po(e, i), go(e, i), br(e), d;
        }
        if (ne !== null)
          throw Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
        PE(), e.finishedWork = e.current.alternate, e.finishedExpirationTime = i, Bb(e), br(e);
      }
      return null;
    }
    u(vy, "performSyncWorkOnRoot");
    function Bb(e) {
      Jn = null, vo(e);
    }
    u(Bb, "finishSyncRender");
    function Qb() {
      if ((ve & (Mv | Cr | la)) !== Nt) {
        (ve & Cr) !== Nt && T("unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.");
        return;
      }
      $b(), Ql();
    }
    u(Qb, "flushDiscreteUpdates");
    function Yb(e, t, i, a) {
      return tl(Vn, e.bind(null, t, i, a));
    }
    u(Yb, "syncUpdates");
    function $b() {
      if (so !== null) {
        var e = so;
        so = null, e.forEach(function(t, i) {
          Oy(i, t), br(i);
        }), na();
      }
    }
    u($b, "flushPendingDiscreteUpdates");
    function wE(e, t) {
      var i = ve;
      ve |= Mv;
      try {
        return e(t);
      } finally {
        ve = i, ve === Nt && na();
      }
    }
    u(wE, "batchedUpdates$1");
    function Gb(e, t) {
      var i = ve;
      ve |= Fb;
      try {
        return e(t);
      } finally {
        ve = i, ve === Nt && na();
      }
    }
    u(Gb, "batchedEventUpdates$1");
    function qb(e, t, i, a, o) {
      var f = ve;
      ve |= CE;
      try {
        return tl(Fl, e.bind(null, t, i, a, o));
      } finally {
        ve = f, ve === Nt && na();
      }
    }
    u(qb, "discreteUpdates$1");
    function _E(e, t) {
      var i = ve;
      ve &= ~Mv, ve |= oy;
      try {
        return e(t);
      } finally {
        ve = i, ve === Nt && na();
      }
    }
    u(_E, "unbatchedUpdates");
    function kE(e, t) {
      if ((ve & (Cr | la)) !== Nt)
        throw Error("flushSync was called from inside a lifecycle method. It cannot be called when React is already rendering.");
      var i = ve;
      ve |= Mv;
      try {
        return tl(Vn, e.bind(null, t));
      } finally {
        ve = i, na();
      }
    }
    u(kE, "flushSync");
    function po(e, t) {
      e.finishedWork = null, e.finishedExpirationTime = q;
      var i = e.timeoutHandle;
      if (i !== X && (e.timeoutHandle = X, Y(i)), ne !== null)
        for (var a = ne.return; a !== null; )
          oE(a), a = a.return;
      Jn = e, ne = yo(e.current, null), cn = t, Zt = oo, zv = null, rl = Fe, vd = Fe, Pv = null, hd = q, Fv = !1, fo = null, si.discardPendingWarnings();
    }
    u(po, "prepareFreshStack");
    function DE(e, t) {
      do {
        try {
          if (ev(), _T(), ur(), ne === null || ne.return === null)
            return Zt = Uv, zv = t, ne = null, null;
          ca && ne.mode & ra && kv(ne, !0), zb(e, ne.return, ne, t, cn), ne = AE(ne);
        } catch (i) {
          t = i;
          continue;
        }
        return;
      } while (!0);
    }
    u(DE, "handleError");
    function OE(e) {
      var t = ly.current;
      return ly.current = Rv, t === null ? Rv : t;
    }
    u(OE, "pushDispatcher");
    function NE(e) {
      ly.current = e;
    }
    u(NE, "popDispatcher");
    function Wv(e) {
      {
        var t = at.__interactionsRef.current;
        return at.__interactionsRef.current = e.memoizedInteractions, t;
      }
    }
    u(Wv, "pushInteractions");
    function Bv(e) {
      at.__interactionsRef.current = e;
    }
    u(Bv, "popInteractions");
    function Xb() {
      fy = Tr();
    }
    u(Xb, "markCommitTimeOfFallback");
    function ME(e, t) {
      e < rl && e > Ju && (rl = e), t !== null && e < vd && e > Ju && (vd = e, Pv = t);
    }
    u(ME, "markRenderEventTimeAndConfig");
    function Qv(e) {
      e > hd && (hd = e);
    }
    u(Qv, "markUnprocessedUpdateTime");
    function Kb() {
      Zt === oo && (Zt = Av);
    }
    u(Kb, "renderDidSuspend");
    function Zb() {
      (Zt === oo || Zt === Av) && (Zt = Lv), hd !== q && Jn !== null && (go(Jn, cn), GE(Jn, hd));
    }
    u(Zb, "renderDidSuspendDelayIfPossible");
    function Jb() {
      Zt !== sy && (Zt = bE);
    }
    u(Jb, "renderDidError");
    function e1() {
      return Zt === oo;
    }
    u(e1, "renderHasNotSuspendedYet");
    function t1(e) {
      var t = eo(e);
      return t - Xc;
    }
    u(t1, "inferTimeFromExpirationTime");
    function n1(e, t) {
      var i = eo(e);
      return i - (t.timeoutMs | 0 || Xc);
    }
    u(n1, "inferTimeFromExpirationTimeWithSuspenseConfig");
    function r1() {
      for (; ne !== null; )
        ne = UE(ne);
    }
    u(r1, "workLoopSync");
    function i1() {
      for (; ne !== null && !cC(); )
        ne = UE(ne);
    }
    u(i1, "workLoopConcurrent");
    function UE(e) {
      var t = e.alternate;
      bg(e), pl(e);
      var i;
      return (e.mode & ra) !== sn ? (Hm(e), i = yy(t, e, cn), kv(e, !0)) : i = yy(t, e, cn), ur(), e.memoizedProps = e.pendingProps, i === null && (i = AE(e)), SE.current = null, i;
    }
    u(UE, "performUnitOfWork");
    function AE(e) {
      ne = e;
      do {
        var t = ne.alternate, i = ne.return;
        if ((ne.effectTag & xl) === Qe) {
          pl(ne);
          var a = void 0;
          if ((ne.mode & ra) === sn ? a = uE(t, ne, cn) : (Hm(ne), a = uE(t, ne, cn), kv(ne, !1)), Rg(ne), ur(), a1(ne), a !== null)
            return a;
          if (i !== null && (i.effectTag & xl) === Qe) {
            i.firstEffect === null && (i.firstEffect = ne.firstEffect), ne.lastEffect !== null && (i.lastEffect !== null && (i.lastEffect.nextEffect = ne.firstEffect), i.lastEffect = ne.lastEffect);
            var o = ne.effectTag;
            o > cr && (i.lastEffect !== null ? i.lastEffect.nextEffect = ne : i.firstEffect = ne, i.lastEffect = ne);
          }
        } else {
          var f = hb(ne);
          if ((ne.mode & ra) !== sn) {
            kv(ne, !1);
            for (var d = ne.actualDuration, p = ne.child; p !== null; )
              d += p.actualDuration, p = p.sibling;
            ne.actualDuration = d;
          }
          if (f !== null)
            return nC(ne), f.effectTag &= nc, f;
          Rg(ne), i !== null && (i.firstEffect = i.lastEffect = null, i.effectTag |= xl);
        }
        var m = ne.sibling;
        if (m !== null)
          return m;
        ne = i;
      } while (ne !== null);
      return Zt === oo && (Zt = sy), null;
    }
    u(AE, "completeUnitOfWork");
    function hy(e) {
      var t = e.expirationTime, i = e.childExpirationTime;
      return t > i ? t : i;
    }
    u(hy, "getRemainingExpirationTime");
    function a1(e) {
      if (!(cn !== ia && e.childExpirationTime === ia)) {
        var t = q;
        if ((e.mode & ra) !== sn) {
          for (var i = e.actualDuration, a = e.selfBaseDuration, o = e.alternate === null || e.child !== e.alternate.child, f = e.child; f !== null; ) {
            var d = f.expirationTime, p = f.childExpirationTime;
            d > t && (t = d), p > t && (t = p), o && (i += f.actualDuration), a += f.treeBaseDuration, f = f.sibling;
          }
          e.actualDuration = i, e.treeBaseDuration = a;
        } else
          for (var m = e.child; m !== null; ) {
            var g = m.expirationTime, E = m.childExpirationTime;
            g > t && (t = g), E > t && (t = E), m = m.sibling;
          }
        e.childExpirationTime = t;
      }
    }
    u(a1, "resetChildExpirationTime");
    function vo(e) {
      var t = Ws();
      return tl(Vn, l1.bind(null, e, t)), null;
    }
    u(vo, "commitRoot");
    function l1(e, t) {
      do
        Ql();
      while (of !== null);
      if (E1(), (ve & (Cr | la)) !== Nt)
        throw Error("Should not already be working.");
      var i = e.finishedWork, a = e.finishedExpirationTime;
      if (i === null)
        return null;
      if (e.finishedWork = null, e.finishedExpirationTime = q, i === e.current)
        throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackExpirationTime = q, e.callbackPriority = js, e.nextKnownPendingLevel = q, rC();
      var o = hy(i);
      $1(e, a, o), e === Jn && (Jn = null, ne = null, cn = q);
      var f;
      if (i.effectTag > cr ? i.lastEffect !== null ? (i.lastEffect.nextEffect = i, f = i.firstEffect) : f = i : f = i.firstEffect, f !== null) {
        var d = ve;
        ve |= la;
        var p = Wv(e);
        SE.current = null, kg(), n(e.containerInfo), te = f;
        do
          if (Se(null, u1, null), le()) {
            if (te === null)
              throw Error("Should be working on an effect.");
            var m = ye();
            ho(te, m), te = te.nextEffect;
          }
        while (te !== null);
        Dg(), HT(), Og(), te = f;
        do
          if (Se(null, o1, null, e, t), le()) {
            if (te === null)
              throw Error("Should be working on an effect.");
            var g = ye();
            ho(te, g), te = te.nextEffect;
          }
        while (te !== null);
        Ng(), r(e.containerInfo), e.current = i, Mg(), te = f;
        do
          if (Se(null, s1, null, e, a), le()) {
            if (te === null)
              throw Error("Should be working on an effect.");
            var E = ye();
            ho(te, E), te = te.nextEffect;
          }
        while (te !== null);
        Ug(), te = null, dC(), Bv(p), ve = d;
      } else
        e.current = i, kg(), Dg(), HT(), Og(), Ng(), Mg(), Ug();
      iC();
      var O = md;
      if (md)
        md = !1, of = e, dy = a, yd = t;
      else
        for (te = f; te !== null; ) {
          var b = te.nextEffect;
          te.nextEffect = null, te = b;
        }
      var N = e.firstPendingTime;
      if (N !== q) {
        if (fo !== null) {
          var V = fo;
          fo = null;
          for (var W = 0; W < V.length; W++)
            jE(e, V[W], e.memoizedInteractions);
        }
        Yl(e, N);
      } else
        uf = null;
      if (O || BE(e, a), N === Fe ? e === py ? gd++ : (gd = 0, py = e) : gd = 0, N1(i.stateNode, a), br(e), Hv) {
        Hv = !1;
        var oe = cy;
        throw cy = null, oe;
      }
      return (ve & oy) !== Nt || na(), null;
    }
    u(l1, "commitRootImpl");
    function u1() {
      for (; te !== null; ) {
        var e = te.effectTag;
        if ((e & Ui) !== Qe) {
          pl(te), Ip();
          var t = te.alternate;
          Sb(t, te), ur();
        }
        (e & Ai) !== Qe && (md || (md = !0, Gc(oi, function() {
          return Ql(), null;
        }))), te = te.nextEffect;
      }
    }
    u(u1, "commitBeforeMutationEffects");
    function o1(e, t) {
      for (; te !== null; ) {
        pl(te);
        var i = te.effectTag;
        if (i & Mn && Ub(te), i & Tn) {
          var a = te.alternate;
          a !== null && wb(a);
        }
        var o = i & (Rt | Pe | Na | qn);
        switch (o) {
          case Rt: {
            mE(te), te.effectTag &= ~Rt;
            break;
          }
          case Bd: {
            mE(te), te.effectTag &= ~Rt;
            var f = te.alternate;
            ay(f, te);
            break;
          }
          case qn: {
            te.effectTag &= ~qn;
            break;
          }
          case ts: {
            te.effectTag &= ~qn;
            var d = te.alternate;
            ay(d, te);
            break;
          }
          case Pe: {
            var p = te.alternate;
            ay(p, te);
            break;
          }
          case Na: {
            Ob(e, te, t);
            break;
          }
        }
        Ip(), ur(), te = te.nextEffect;
      }
    }
    u(o1, "commitMutationEffects");
    function s1(e, t) {
      for (; te !== null; ) {
        pl(te);
        var i = te.effectTag;
        if (i & (Pe | ec)) {
          Ip();
          var a = te.alternate;
          bb(e, a, te);
        }
        i & Tn && (Ip(), Rb(te)), ur(), te = te.nextEffect;
      }
    }
    u(s1, "commitLayoutEffects");
    function Ql() {
      if (yd !== js) {
        var e = yd > oi ? oi : yd;
        return yd = js, tl(e, f1);
      }
    }
    u(Ql, "flushPassiveEffects");
    function f1() {
      if (of === null)
        return !1;
      var e = of, t = dy;
      if (of = null, dy = q, (ve & (Cr | la)) !== Nt)
        throw Error("Cannot flush passive effects while already rendering.");
      var i = ve;
      ve |= la;
      for (var a = Wv(e), o = e.current.firstEffect; o !== null; ) {
        {
          if (pl(o), Se(null, Cb, null, o), le()) {
            if (o === null)
              throw Error("Should be working on an effect.");
            var f = ye();
            ho(o, f);
          }
          ur();
        }
        var d = o.nextEffect;
        o.nextEffect = null, o = d;
      }
      return Bv(a), BE(e, t), ve = i, na(), Vv = of === null ? 0 : Vv + 1, !0;
    }
    u(f1, "flushPassiveEffectsImpl");
    function LE(e) {
      return uf !== null && uf.has(e);
    }
    u(LE, "isAlreadyFailedLegacyErrorBoundary");
    function c1(e) {
      uf === null ? uf = /* @__PURE__ */ new Set([e]) : uf.add(e);
    }
    u(c1, "markLegacyErrorBoundaryAsFailed");
    function d1(e) {
      Hv || (Hv = !0, cy = e);
    }
    u(d1, "prepareToThrowUncaughtError");
    var p1 = d1;
    function zE(e, t, i) {
      var a = ty(i, t), o = TE(e, a, Fe);
      Vl(e, o);
      var f = Iv(e, Fe);
      f !== null && (br(f), Yl(f, Fe));
    }
    u(zE, "captureCommitPhaseErrorOnRoot");
    function ho(e, t) {
      if (e.tag === se) {
        zE(e, e, t);
        return;
      }
      for (var i = e.return; i !== null; ) {
        if (i.tag === se) {
          zE(i, e, t);
          return;
        } else if (i.tag === re) {
          var a = i.type, o = i.stateNode;
          if (typeof a.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && !LE(o)) {
            var f = ty(t, e), d = EE(
              i,
              f,
              Fe
            );
            Vl(i, d);
            var p = Iv(i, Fe);
            p !== null && (br(p), Yl(p, Fe));
            return;
          }
        }
        i = i.return;
      }
    }
    u(ho, "captureCommitPhaseError");
    function v1(e, t, i) {
      var a = e.pingCache;
      if (a !== null && a.delete(t), Jn === e && cn === i) {
        Zt === Lv || Zt === Av && rl === Fe && Tr() - fy < xE ? po(e, cn) : Fv = !0;
        return;
      }
      if (!!$E(e, i)) {
        var o = e.lastPingedTime;
        o !== q && o < i || (e.lastPingedTime = i, br(e), Yl(e, i));
      }
    }
    u(v1, "pingSuspendedRoot");
    function h1(e, t) {
      if (t === q) {
        var i = null, a = ua();
        t = co(a, e, i);
      }
      var o = Iv(e, t);
      o !== null && (br(o), Yl(o, t));
    }
    u(h1, "retryTimedOutBoundary");
    function m1(e, t) {
      var i = q, a;
      a = e.stateNode, a !== null && a.delete(t), h1(e, i);
    }
    u(m1, "resolveRetryThenable");
    function y1(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Pb(e / 1960) * 1960;
    }
    u(y1, "jnd");
    function g1(e, t, i) {
      var a = i.busyMinDurationMs | 0;
      if (a <= 0)
        return 0;
      var o = i.busyDelayMs | 0, f = Tr(), d = n1(e, i), p = f - d;
      if (p <= o)
        return 0;
      var m = o + a - p;
      return m;
    }
    u(g1, "computeMsUntilSuspenseLoadingDelay");
    function T1() {
      if (gd > Hb)
        throw gd = 0, py = null, Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Vv > Vb && (Vv = 0, T("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    u(T1, "checkForNestedUpdates");
    function E1() {
      si.flushLegacyContextWarning(), si.flushPendingUnsafeLifecycleWarnings();
    }
    u(E1, "flushRenderPhaseStrictModeWarningsInDEV");
    function PE() {
      var e = !0;
      _g(Td, e), Td = null;
    }
    u(PE, "stopFinishedWorkLoopTimer");
    function my() {
      var e = !1;
      _g(Td, e), Td = null;
    }
    u(my, "stopInterruptedWorkLoopTimer");
    function S1(e, t) {
      Jn !== null && t > cn && (Td = e);
    }
    u(S1, "checkForInterruption");
    var Yv = null;
    function C1(e) {
      {
        var t = e.tag;
        if (t !== se && t !== re && t !== Re && t !== B && t !== ke && t !== Ye && t !== rt)
          return;
        var i = Q(e.type) || "ReactComponent";
        if (Yv !== null) {
          if (Yv.has(i))
            return;
          Yv.add(i);
        } else
          Yv = /* @__PURE__ */ new Set([i]);
        T("Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in %s.%s", t === re ? "the componentWillUnmount method" : "a useEffect cleanup function", qt(e));
      }
    }
    u(C1, "warnAboutUpdateOnUnmountedFiberInDEV");
    var yy;
    {
      var b1 = null;
      yy = /* @__PURE__ */ u(function(e, t, i) {
        var a = YE(b1, t);
        try {
          return nE(e, t, i);
        } catch (f) {
          if (f !== null && typeof f == "object" && typeof f.then == "function")
            throw f;
          if (ev(), _T(), oE(t), YE(t, a), t.mode & ra && Hm(t), Se(null, nE, null, e, t, i), le()) {
            var o = ye();
            throw o;
          } else
            throw f;
        }
      }, "beginWork$1");
    }
    var FE = !1, gy;
    gy = /* @__PURE__ */ new Set();
    function x1(e) {
      if (lu && (ve & Cr) !== Nt)
        switch (e.tag) {
          case Re:
          case B:
          case Ye: {
            var t = ne && Q(ne.type) || "Unknown", i = t;
            if (!gy.has(i)) {
              gy.add(i);
              var a = Q(e.type) || "Unknown";
              T("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://fb.me/setstate-in-render", a, t, t);
            }
            break;
          }
          case re: {
            FE || (T("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), FE = !0);
            break;
          }
        }
    }
    u(x1, "warnAboutRenderPhaseUpdatesInDEV");
    var mo = {
      current: !1
    };
    function HE(e) {
      uy.current === !0 && mo.current !== !0 && T(`It looks like you're using the wrong act() around your test interactions.
Be sure to use the matching version of act() corresponding to your renderer:

// for react-dom:
import {act} from 'react-dom/test-utils';
// ...
act(() => ...);

// for react-test-renderer:
import TestRenderer from 'react-test-renderer';
const {act} = TestRenderer;
// ...
act(() => ...);%s`, qt(e));
    }
    u(HE, "warnIfNotScopedWithMatchingAct");
    function VE(e) {
      (e.mode & Ct) !== sn && uy.current === !1 && mo.current === !1 && T(`An update to %s ran an effect, but was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://fb.me/react-wrap-tests-with-act%s`, Q(e.type), qt(e));
    }
    u(VE, "warnIfNotCurrentlyActingEffectsInDEV");
    function R1(e) {
      ve === Nt && uy.current === !1 && mo.current === !1 && T(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://fb.me/react-wrap-tests-with-act%s`, Q(e.type), qt(e));
    }
    u(R1, "warnIfNotCurrentlyActingUpdatesInDEV");
    var w1 = R1, IE = !1;
    function _1(e) {
      IE === !1 && fe.unstable_flushAllWithoutAsserting === void 0 && (e.mode & Ir || e.mode & Bs) && (IE = !0, T(`In Concurrent or Sync modes, the "scheduler" module needs to be mocked to guarantee consistent behaviour across tests and browsers. For example, with jest: 
jest.mock('scheduler', () => require('scheduler/unstable_mock'));

For more info, visit https://fb.me/react-mock-scheduler`));
    }
    u(_1, "warnIfUnmockedScheduler");
    function Ty(e, t) {
      return t * 1e3 + e.interactionThreadID;
    }
    u(Ty, "computeThreadID");
    function Ey(e) {
      fo === null ? fo = [e] : fo.push(e);
    }
    u(Ey, "markSpawnedWork");
    function jE(e, t, i) {
      if (i.size > 0) {
        var a = e.pendingInteractionMap, o = a.get(t);
        o != null ? i.forEach(function(p) {
          o.has(p) || p.__count++, o.add(p);
        }) : (a.set(t, new Set(i)), i.forEach(function(p) {
          p.__count++;
        }));
        var f = at.__subscriberRef.current;
        if (f !== null) {
          var d = Ty(e, t);
          f.onWorkScheduled(i, d);
        }
      }
    }
    u(jE, "scheduleInteractions");
    function Yl(e, t) {
      jE(e, t, at.__interactionsRef.current);
    }
    u(Yl, "schedulePendingInteractions");
    function WE(e, t) {
      var i = /* @__PURE__ */ new Set();
      if (e.pendingInteractionMap.forEach(function(f, d) {
        d >= t && f.forEach(function(p) {
          return i.add(p);
        });
      }), e.memoizedInteractions = i, i.size > 0) {
        var a = at.__subscriberRef.current;
        if (a !== null) {
          var o = Ty(e, t);
          try {
            a.onWorkStarted(i, o);
          } catch (f) {
            Gc(Vn, function() {
              throw f;
            });
          }
        }
      }
    }
    u(WE, "startWorkOnPendingInteractions");
    function BE(e, t) {
      var i = e.firstPendingTime, a;
      try {
        if (a = at.__subscriberRef.current, a !== null && e.memoizedInteractions.size > 0) {
          var o = Ty(e, t);
          a.onWorkStopped(e.memoizedInteractions, o);
        }
      } catch (d) {
        Gc(Vn, function() {
          throw d;
        });
      } finally {
        var f = e.pendingInteractionMap;
        f.forEach(function(d, p) {
          p > i && (f.delete(p), d.forEach(function(m) {
            if (m.__count--, a !== null && m.__count === 0)
              try {
                a.onInteractionScheduledWorkCompleted(m);
              } catch (g) {
                Gc(Vn, function() {
                  throw g;
                });
              }
          }));
        });
      }
    }
    u(BE, "finishPendingInteractions");
    var Sy = null, Cy = null, by = null, sf = !1, k1 = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function D1(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return T("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://fb.me/react-devtools"), !0;
      try {
        var i = t.inject(e);
        typeof t.onScheduleFiberRoot == "function" && (Sy = /* @__PURE__ */ u(function(a, o) {
          try {
            t.onScheduleFiberRoot(i, a, o);
          } catch (f) {
            sf || (sf = !0, T("React instrumentation encountered an error: %s", f));
          }
        }, "onScheduleFiberRoot")), Cy = /* @__PURE__ */ u(function(a, o) {
          try {
            var f = (a.current.effectTag & Ke) === Ke;
            if (ca) {
              var d = Ib(), p = tT(d, o);
              t.onCommitFiberRoot(i, a, p, f);
            }
          } catch (m) {
            sf || (sf = !0, T("React instrumentation encountered an error: %s", m));
          }
        }, "onCommitFiberRoot"), by = /* @__PURE__ */ u(function(a) {
          try {
            t.onCommitFiberUnmount(i, a);
          } catch (o) {
            sf || (sf = !0, T("React instrumentation encountered an error: %s", o));
          }
        }, "onCommitFiberUnmount");
      } catch (a) {
        T("React instrumentation encountered an error: %s.", a);
      }
      return !0;
    }
    u(D1, "injectInternals");
    function O1(e, t) {
      typeof Sy == "function" && Sy(e, t);
    }
    u(O1, "onScheduleRoot");
    function N1(e, t) {
      typeof Cy == "function" && Cy(e, t);
    }
    u(N1, "onCommitRoot");
    function M1(e) {
      typeof by == "function" && by(e);
    }
    u(M1, "onCommitUnmount");
    var xy;
    {
      xy = !1;
      try {
        var QE = Object.preventExtensions({}), U1 = /* @__PURE__ */ new Map([[QE, null]]), A1 = /* @__PURE__ */ new Set([QE]);
        U1.set(0, 0), A1.add(0);
      } catch {
        xy = !0;
      }
    }
    var L1 = 1;
    function z1(e, t, i, a) {
      this.tag = e, this.key = i, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = a, this.effectTag = Qe, this.nextEffect = null, this.firstEffect = null, this.lastEffect = null, this.expirationTime = q, this.childExpirationTime = q, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugID = L1++, this._debugIsCurrentlyTiming = !1, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !xy && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    u(z1, "FiberNode");
    var pi = /* @__PURE__ */ u(function(e, t, i, a) {
      return new z1(e, t, i, a);
    }, "createFiber");
    function Ry(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    u(Ry, "shouldConstruct");
    function P1(e) {
      return typeof e == "function" && !Ry(e) && e.defaultProps === void 0;
    }
    u(P1, "isSimpleFunctionComponent");
    function F1(e) {
      if (typeof e == "function")
        return Ry(e) ? re : Re;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Ta)
          return B;
        if (t === cl)
          return ke;
      }
      return At;
    }
    u(F1, "resolveLazyComponentTag");
    function yo(e, t) {
      var i = e.alternate;
      i === null ? (i = pi(e.tag, t, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i._debugID = e._debugID, i._debugSource = e._debugSource, i._debugOwner = e._debugOwner, i._debugHookTypes = e._debugHookTypes, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.effectTag = Qe, i.nextEffect = null, i.firstEffect = null, i.lastEffect = null, i.actualDuration = 0, i.actualStartTime = -1), i.childExpirationTime = e.childExpirationTime, i.expirationTime = e.expirationTime, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue;
      var a = e.dependencies;
      switch (i.dependencies = a === null ? null : {
        expirationTime: a.expirationTime,
        firstContext: a.firstContext,
        responders: a.responders
      }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i.selfBaseDuration = e.selfBaseDuration, i.treeBaseDuration = e.treeBaseDuration, i._debugNeedsRemount = e._debugNeedsRemount, i.tag) {
        case At:
        case Re:
        case Ye:
          i.type = Ys(e.type);
          break;
        case re:
          i.type = jh(e.type);
          break;
        case B:
          i.type = Wh(e.type);
          break;
      }
      return i;
    }
    u(yo, "createWorkInProgress");
    function H1(e, t) {
      e.effectTag &= Rt, e.nextEffect = null, e.firstEffect = null, e.lastEffect = null;
      var i = e.alternate;
      if (i === null)
        e.childExpirationTime = q, e.expirationTime = t, e.child = null, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childExpirationTime = i.childExpirationTime, e.expirationTime = i.expirationTime, e.child = i.child, e.memoizedProps = i.memoizedProps, e.memoizedState = i.memoizedState, e.updateQueue = i.updateQueue;
        var a = i.dependencies;
        e.dependencies = a === null ? null : {
          expirationTime: a.expirationTime,
          firstContext: a.firstContext,
          responders: a.responders
        }, e.selfBaseDuration = i.selfBaseDuration, e.treeBaseDuration = i.treeBaseDuration;
      }
      return e;
    }
    u(H1, "resetWorkInProgress");
    function V1(e) {
      var t;
      return e === uC ? t = Bs | Ir | Ct : e === lC ? t = Ir | Ct : t = sn, k1 && (t |= ra), pi(se, null, null, t);
    }
    u(V1, "createHostRootFiber");
    function wy(e, t, i, a, o, f) {
      var d, p = At, m = e;
      if (typeof e == "function")
        Ry(e) ? (p = re, m = jh(m)) : m = Ys(m);
      else if (typeof e == "string")
        p = ae;
      else {
        e:
          switch (e) {
            case yn:
              return $l(i.children, o, f, t);
            case au:
              p = pn, o |= Bs | Ir | Ct;
              break;
            case Xr:
              p = pn, o |= Ct;
              break;
            case lr:
              return I1(i, o, f, t);
            case wo:
              return j1(i, o, f, t);
            case _o:
              return W1(i, o, f, t);
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case ya:
                    p = z;
                    break e;
                  case ga:
                    p = wn;
                    break e;
                  case Ta:
                    p = B, m = Wh(m);
                    break e;
                  case cl:
                    p = ke;
                    break e;
                  case bi:
                    p = vn, m = null;
                    break e;
                  case dl:
                    p = rt;
                    break e;
                }
              var g = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var E = a ? Q(a.type) : null;
                E && (g += `

Check the render method of \`` + E + "`.");
              }
              throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (e == null ? e : typeof e) + "." + g);
            }
          }
      }
      return d = pi(p, i, t, o), d.elementType = e, d.type = m, d.expirationTime = f, d;
    }
    u(wy, "createFiberFromTypeAndProps");
    function _y(e, t, i) {
      var a = null;
      a = e._owner;
      var o = e.type, f = e.key, d = e.props, p = wy(o, f, d, a, t, i);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    u(_y, "createFiberFromElement");
    function $l(e, t, i, a) {
      var o = pi(It, e, a, t);
      return o.expirationTime = i, o;
    }
    u($l, "createFiberFromFragment");
    function I1(e, t, i, a) {
      (typeof e.id != "string" || typeof e.onRender != "function") && T('Profiler must specify an "id" string and "onRender" function as props');
      var o = pi(pe, e, a, t | ra);
      return o.elementType = lr, o.type = lr, o.expirationTime = i, o;
    }
    u(I1, "createFiberFromProfiler");
    function j1(e, t, i, a) {
      var o = pi(K, e, a, t);
      return o.type = wo, o.elementType = wo, o.expirationTime = i, o;
    }
    u(j1, "createFiberFromSuspense");
    function W1(e, t, i, a) {
      var o = pi(hn, e, a, t);
      return o.type = _o, o.elementType = _o, o.expirationTime = i, o;
    }
    u(W1, "createFiberFromSuspenseList");
    function ky(e, t, i) {
      var a = pi(ge, e, null, t);
      return a.expirationTime = i, a;
    }
    u(ky, "createFiberFromText");
    function B1() {
      var e = pi(ae, null, null, sn);
      return e.elementType = "DELETED", e.type = "DELETED", e;
    }
    u(B1, "createFiberFromHostInstanceForDeletion");
    function Dy(e, t, i) {
      var a = e.children !== null ? e.children : [], o = pi(Ce, a, e.key, t);
      return o.expirationTime = i, o.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, o;
    }
    u(Dy, "createFiberFromPortal");
    function YE(e, t) {
      return e === null && (e = pi(At, null, null, sn)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.effectTag = t.effectTag, e.nextEffect = t.nextEffect, e.firstEffect = t.firstEffect, e.lastEffect = t.lastEffect, e.expirationTime = t.expirationTime, e.childExpirationTime = t.childExpirationTime, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugID = t._debugID, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugIsCurrentlyTiming = t._debugIsCurrentlyTiming, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    u(YE, "assignFiberPropertiesInDEV");
    function Q1(e, t, i) {
      this.tag = t, this.current = null, this.containerInfo = e, this.pendingChildren = null, this.pingCache = null, this.finishedExpirationTime = q, this.finishedWork = null, this.timeoutHandle = X, this.context = null, this.pendingContext = null, this.hydrate = i, this.callbackNode = null, this.callbackPriority = js, this.firstPendingTime = q, this.firstSuspendedTime = q, this.lastSuspendedTime = q, this.nextKnownPendingLevel = q, this.lastPingedTime = q, this.lastExpiredTime = q, this.interactionThreadID = at.unstable_getThreadID(), this.memoizedInteractions = /* @__PURE__ */ new Set(), this.pendingInteractionMap = /* @__PURE__ */ new Map();
    }
    u(Q1, "FiberRootNode");
    function Y1(e, t, i, a) {
      var o = new Q1(e, t, i), f = V1(t);
      return o.current = f, f.stateNode = o, Kh(f), o;
    }
    u(Y1, "createFiberRoot");
    function $E(e, t) {
      var i = e.firstSuspendedTime, a = e.lastSuspendedTime;
      return i !== q && i >= t && a <= t;
    }
    u($E, "isRootSuspendedAtTime");
    function go(e, t) {
      var i = e.firstSuspendedTime, a = e.lastSuspendedTime;
      i < t && (e.firstSuspendedTime = t), (a > t || i === q) && (e.lastSuspendedTime = t), t <= e.lastPingedTime && (e.lastPingedTime = q), t <= e.lastExpiredTime && (e.lastExpiredTime = q);
    }
    u(go, "markRootSuspendedAtTime");
    function GE(e, t) {
      var i = e.firstPendingTime;
      t > i && (e.firstPendingTime = t);
      var a = e.firstSuspendedTime;
      a !== q && (t >= a ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = q : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1), t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t));
    }
    u(GE, "markRootUpdatedAtTime");
    function $1(e, t, i) {
      e.firstPendingTime = i, t <= e.lastSuspendedTime ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = q : t <= e.firstSuspendedTime && (e.firstSuspendedTime = t - 1), t <= e.lastPingedTime && (e.lastPingedTime = q), t <= e.lastExpiredTime && (e.lastExpiredTime = q);
    }
    u($1, "markRootFinishedAtTime");
    function Oy(e, t) {
      var i = e.lastExpiredTime;
      (i === q || i > t) && (e.lastExpiredTime = t);
    }
    u(Oy, "markRootExpiredAtTime");
    var Ny, My;
    Ny = !1, My = {};
    function G1(e) {
      if (!e)
        return gr;
      var t = ii(e), i = aC(t);
      if (t.tag === re) {
        var a = t.type;
        if (ta(a))
          return zg(t, a, i);
      }
      return i;
    }
    u(G1, "getContextForSubtree");
    function q1(e, t) {
      {
        var i = ii(e);
        if (i === void 0)
          throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : Error("Argument appears to not be a ReactComponent. Keys: " + Object.keys(e));
        var a = ic(i);
        if (a === null)
          return null;
        if (a.mode & Ct) {
          var o = Q(i.type) || "Component";
          My[o] || (My[o] = !0, i.mode & Ct ? T("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://fb.me/react-strict-mode-find-node%s", t, t, o, qt(a)) : T("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://fb.me/react-strict-mode-find-node%s", t, t, o, qt(a)));
        }
        return a.stateNode;
      }
    }
    u(q1, "findHostInstanceWithWarning");
    function X1(e, t, i, a) {
      return Y1(e, t, i);
    }
    u(X1, "createContainer");
    function Sd(e, t, i, a) {
      O1(t, e);
      var o = t.current, f = ua();
      typeof jest < "u" && (_1(o), HE(o));
      var d = id(), p = co(f, o, d), m = G1(i);
      t.context === null ? t.context = m : t.pendingContext = m, lu && Kr !== null && !Ny && (Ny = !0, T(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Q(Kr.type) || "Unknown"));
      var g = Hl(p, d);
      return g.payload = {
        element: e
      }, a = a === void 0 ? null : a, a !== null && (typeof a != "function" && T("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", a), g.callback = a), Vl(o, g), Yr(o, p), p;
    }
    u(Sd, "updateContainer");
    function Uy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ae:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    u(Uy, "getPublicRootInstance");
    function qE(e, t) {
      var i = e.memoizedState;
      i !== null && i.dehydrated !== null && i.retryTime < t && (i.retryTime = t);
    }
    u(qE, "markRetryTimeImpl");
    function Ay(e, t) {
      qE(e, t);
      var i = e.alternate;
      i && qE(i, t);
    }
    u(Ay, "markRetryTimeIfNotHydrated");
    function K1(e) {
      if (e.tag === K) {
        var t = eT(ua());
        Yr(e, t), Ay(e, t);
      }
    }
    u(K1, "attemptUserBlockingHydration$1");
    function Z1(e) {
      e.tag === K && (Yr(e, Xg), Ay(e, Xg));
    }
    u(Z1, "attemptContinuousHydration$1");
    function J1(e) {
      if (e.tag === K) {
        var t = ua(), i = co(t, e, null);
        Yr(e, i), Ay(e, i);
      }
    }
    u(J1, "attemptHydrationAtCurrentPriority$1");
    function XE(e) {
      var t = wu(e);
      return t === null ? null : t.tag === mn ? t.stateNode.instance : t.stateNode;
    }
    u(XE, "findHostInstanceWithNoPortals");
    var KE = /* @__PURE__ */ u(function(e) {
      return !1;
    }, "shouldSuspendImpl");
    function ex(e) {
      return KE(e);
    }
    u(ex, "shouldSuspend");
    var ZE = null, JE = null, eS = null, tS = null;
    {
      var nS = /* @__PURE__ */ u(function(e, t, i, a) {
        if (i >= t.length)
          return a;
        var o = t[i], f = Array.isArray(e) ? e.slice() : ie({}, e);
        return f[o] = nS(e[o], t, i + 1, a), f;
      }, "copyWithSetImpl"), rS = /* @__PURE__ */ u(function(e, t, i) {
        return nS(e, t, 0, i);
      }, "copyWithSet");
      ZE = /* @__PURE__ */ u(function(e, t, i, a) {
        for (var o = e.memoizedState; o !== null && t > 0; )
          o = o.next, t--;
        if (o !== null) {
          var f = rS(o.memoizedState, i, a);
          o.memoizedState = f, o.baseState = f, e.memoizedProps = ie({}, e.memoizedProps), Yr(e, Fe);
        }
      }, "overrideHookState"), JE = /* @__PURE__ */ u(function(e, t, i) {
        e.pendingProps = rS(e.memoizedProps, t, i), e.alternate && (e.alternate.pendingProps = e.pendingProps), Yr(e, Fe);
      }, "overrideProps"), eS = /* @__PURE__ */ u(function(e) {
        Yr(e, Fe);
      }, "scheduleUpdate"), tS = /* @__PURE__ */ u(function(e) {
        KE = e;
      }, "setSuspenseHandler");
    }
    function tx(e) {
      var t = e.findFiberByHostInstance, i = we.ReactCurrentDispatcher;
      return D1(ie({}, e, {
        overrideHookState: ZE,
        overrideProps: JE,
        setSuspenseHandler: tS,
        scheduleUpdate: eS,
        currentDispatcherRef: i,
        findHostInstanceByFiber: function(a) {
          var o = ic(a);
          return o === null ? null : o.stateNode;
        },
        findFiberByHostInstance: function(a) {
          return t ? t(a) : null;
        },
        findHostInstancesForRefresh: SC,
        scheduleRefresh: TC,
        scheduleRoot: EC,
        setRefreshHandler: gC,
        getCurrentFiber: function() {
          return Kr;
        }
      }));
    }
    u(tx, "injectIntoDevTools"), we.IsSomeRendererActing;
    function Ly(e, t, i) {
      this._internalRoot = nx(e, t, i);
    }
    u(Ly, "ReactDOMBlockingRoot"), Ly.prototype.render = function(e) {
      var t = this._internalRoot;
      {
        typeof arguments[1] == "function" && T("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
        var i = t.containerInfo;
        if (i.nodeType !== un) {
          var a = XE(t.current);
          a && a.parentNode !== i && T("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Sd(e, t, null, null);
    }, Ly.prototype.unmount = function() {
      typeof arguments[0] == "function" && T("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot, t = e.containerInfo;
      Sd(null, e, null, function() {
        $y(t);
      });
    };
    function nx(e, t, i) {
      var a = i != null && i.hydrate === !0;
      i?.hydrationOptions;
      var o = X1(e, t, a);
      if (FS(o.current, e), a && t !== Fg) {
        var f = e.nodeType === Ri ? e : e.ownerDocument;
        ss(e, f);
      }
      return o;
    }
    u(nx, "createRootImpl");
    function rx(e, t) {
      return new Ly(e, Fg, t);
    }
    u(rx, "createLegacyRoot");
    function ff(e) {
      return !!(e && (e.nodeType === or || e.nodeType === Ri || e.nodeType === Io || e.nodeType === un && e.nodeValue === " react-mount-point-unstable "));
    }
    u(ff, "isValidContainer");
    var ix = we.ReactCurrentOwner, iS, aS = !1;
    iS = /* @__PURE__ */ u(function(e) {
      if (e._reactRootContainer && e.nodeType !== un) {
        var t = XE(e._reactRootContainer._internalRoot.current);
        t && t.parentNode !== e && T("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var i = !!e._reactRootContainer, a = $v(e), o = !!(a && Pl(a));
      o && !i && T("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === or && e.tagName && e.tagName.toUpperCase() === "BODY" && T("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    }, "topLevelUpdateWarnings");
    function $v(e) {
      return e ? e.nodeType === Ri ? e.documentElement : e.firstChild : null;
    }
    u($v, "getReactRootElementInContainer");
    function ax(e) {
      var t = $v(e);
      return !!(t && t.nodeType === or && t.hasAttribute(F));
    }
    u(ax, "shouldHydrateDueToLegacyHeuristic");
    function lx(e, t) {
      var i = t || ax(e);
      if (!i)
        for (var a = !1, o; o = e.lastChild; )
          !a && o.nodeType === or && o.hasAttribute(F) && (a = !0, T("render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup.")), e.removeChild(o);
      return i && !t && !aS && (aS = !0, gt("render(): Calling ReactDOM.render() to hydrate server-rendered markup will stop working in React v17. Replace the ReactDOM.render() call with ReactDOM.hydrate() if you want React to attach to the server HTML.")), rx(e, i ? {
        hydrate: !0
      } : void 0);
    }
    u(lx, "legacyCreateRootFromDOMContainer");
    function ux(e, t) {
      e !== null && typeof e != "function" && T("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    u(ux, "warnOnInvalidCallback$1");
    function Gv(e, t, i, a, o) {
      iS(i), ux(o === void 0 ? null : o, "render");
      var f = i._reactRootContainer, d;
      if (f) {
        if (d = f._internalRoot, typeof o == "function") {
          var m = o;
          o = /* @__PURE__ */ u(function() {
            var g = Uy(d);
            m.call(g);
          }, "callback");
        }
        Sd(t, d, e, o);
      } else {
        if (f = i._reactRootContainer = lx(i, a), d = f._internalRoot, typeof o == "function") {
          var p = o;
          o = /* @__PURE__ */ u(function() {
            var g = Uy(d);
            p.call(g);
          }, "callback");
        }
        _E(function() {
          Sd(t, d, e, o);
        });
      }
      return Uy(d);
    }
    u(Gv, "legacyRenderSubtreeIntoContainer");
    function ox(e) {
      {
        var t = ix.current;
        if (t !== null && t.stateNode !== null) {
          var i = t.stateNode._warnedAboutRefsInRender;
          i || T("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Q(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === or ? e : q1(e, "findDOMNode");
    }
    u(ox, "findDOMNode");
    function sx(e, t, i) {
      if (!ff(t))
        throw Error("Target container is not a DOM element.");
      {
        var a = yh(t) && t._reactRootContainer === void 0;
        a && T("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call createRoot(container, {hydrate: true}).render(element)?");
      }
      return Gv(null, e, t, !0, i);
    }
    u(sx, "hydrate");
    function fx(e, t, i) {
      if (!ff(t))
        throw Error("Target container is not a DOM element.");
      {
        var a = yh(t) && t._reactRootContainer === void 0;
        a && T("You are calling ReactDOM.render() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Gv(null, e, t, !1, i);
    }
    u(fx, "render");
    function cx(e, t, i, a) {
      if (!ff(i))
        throw Error("Target container is not a DOM element.");
      if (!(e != null && Jf(e)))
        throw Error("parentComponent must be a valid React Component");
      return Gv(e, t, i, !1, a);
    }
    u(cx, "unstable_renderSubtreeIntoContainer");
    function dx(e) {
      if (!ff(e))
        throw Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = yh(e) && e._reactRootContainer === void 0;
        t && T("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var i = $v(e), a = i && !Pl(i);
          a && T("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return _E(function() {
          Gv(null, null, e, !1, function() {
            e._reactRootContainer = null, $y(e);
          });
        }), !0;
      } else {
        {
          var o = $v(e), f = !!(o && Pl(o)), d = e.nodeType === or && ff(e.parentNode) && !!e.parentNode._reactRootContainer;
          f && T("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", d ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    u(dx, "unmountComponentAtNode");
    function px(e, t, i) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: Gt,
        key: a == null ? null : "" + a,
        children: e,
        containerInfo: t,
        implementation: i
      };
    }
    u(px, "createPortal");
    var lS = "16.14.0";
    uc(K1), ls(Z1), os(J1);
    var uS = !1;
    (typeof Map != "function" || Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && T("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), Zl(bp), bo(wE, qb, Qb, Gb);
    function oS(e, t) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ff(t))
        throw Error("Target container is not a DOM element.");
      return px(e, t, null, i);
    }
    u(oS, "createPortal$1");
    function vx(e, t, i, a) {
      return cx(e, t, i, a);
    }
    u(vx, "renderSubtreeIntoContainer");
    function hx(e, t) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      return uS || (uS = !0, gt('The ReactDOM.unstable_createPortal() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactDOM.createPortal() instead. It has the exact same API, but without the "unstable_" prefix.')), oS(e, t, i);
    }
    u(hx, "unstable_createPortal");
    var mx = {
      Events: [Pl, $u, gh, Ti, gi, As, qS, rr, Eo, Au, is, Ql, mo]
    }, yx = tx({
      findFiberByHostInstance: Lc,
      bundleType: 1,
      version: lS,
      rendererPackageName: "react-dom"
    });
    if (!yx && nn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var sS = window.location.protocol;
      /^(https?|file):$/.test(sS) && console.info("%cDownload the React DevTools for a better development experience: https://fb.me/react-devtools" + (sS === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://fb.me/react-devtools-faq` : ""), "font-weight:bold");
    }
    Rr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mx, Rr.createPortal = oS, Rr.findDOMNode = ox, Rr.flushSync = kE, Rr.hydrate = sx, Rr.render = fx, Rr.unmountComponentAtNode = dx, Rr.unstable_batchedUpdates = wE, Rr.unstable_createPortal = hx, Rr.unstable_renderSubtreeIntoContainer = vx, Rr.version = lS;
  }()), Rr;
}
u(kx, "requireReactDom_development");
(function(M) {
  function ie() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ie);
      } catch (fe) {
        console.error(fe);
      }
    }
  }
  u(ie, "checkDCE"), process.env.NODE_ENV === "production" ? (ie(), M.exports = xx()) : M.exports = kx();
})(ES);
const Nx = /* @__PURE__ */ Sx(ES.exports);
export {
  Nx as R,
  ES as r
};
//# sourceMappingURL=index.44debf7c.js.map
