!(function () {
  "use strict";
  var e = {
      188: function (e, t, o) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = o(915);
        t.default = class {
          constructor(e, t, o) {
            (this.body = document.querySelector("body")),
              (this.iconOpen = document.querySelector(
                "." + n.CSS_CLASSES.ICON_OPEN
              )),
              (this.sidebar = document.querySelector(
                "." + n.CSS_CLASSES.SIDEBAR
              )),
              (this.closeOtherSubMenus = e || !1),
              (this.closeMenuOnBackdropClick = t || !0),
              (this.closeSubMenusOnMenuClose = o || !0);
          }
          init() {
            const e = document.querySelectorAll(
                "." + n.CSS_CLASSES.LINK_LEVEL[1]
              ),
              t = document.querySelectorAll("." + n.CSS_CLASSES.LINK_LEVEL[2]);
            this.addEventsForLinks(e, 1), this.addEventsForLinks(t, 2);
            this.iconOpen.addEventListener("click", () => {
              const e = document.querySelector("." + n.CSS_CLASSES.ICON_CLOSE),
                t = [];
              t.push(e),
                this.openMenu(this.sidebar, this.body),
                this.addCloseEvents(t, this.sidebar, this.body);
            });
          }
          addBackdropToDom() {
            const e = document.createElement("div");
            (e.className = "off-canvas-backdrop"), document.body.appendChild(e);
          }
          addCloseEvents(e, t, o) {
            if (this.closeMenuOnBackdropClick) {
              const t = document.querySelector("." + n.CSS_CLASSES.BACKDROP);
              e.push(t);
            }
            for (let n = 0; n < e.length; n++) {
              e[n].addEventListener("click", () => {
                this.hideSidebar(t),
                  this.removeBackdropFromDom(),
                  this.makeBodyScrollable(o),
                  this.closeSubMenusOnMenuClose && this.rotateMenuArrowsBack(),
                  this.closeSubMenusOnMenuClose && this.closeAllSubMenus();
              });
            }
          }
          addEventsForLinks(e, t) {
            null == e ||
              e.forEach((e) => {
                null == e ||
                  e.addEventListener("click", (e) => {
                    this.handleClickOnLevel(e, t);
                  });
              });
          }
          closeAllSubMenus() {
            const e =
                "." +
                n.CSS_CLASSES.SUBMENU_LEVEL[1] +
                ",." +
                n.CSS_CLASSES.SUBMENU_LEVEL[2],
              t = document.querySelectorAll(e);
            for (let e = 0; e < t.length; e++) {
              t[e].style.display = "none";
            }
          }
          handleClickOnLevel(e, t) {
            const o = e.currentTarget,
              s = o.closest("." + n.CSS_CLASSES.LINK_LEVEL[t]),
              r = s.parentElement.nextElementSibling,
              l = "block" === r.style.display,
              c = s.childNodes[1];
            l
              ? ((r.style.display = "none"),
                c.classList.remove("rotate-90"),
                o.classList.remove("active"))
              : (this.closeOtherSubMenus && this.closeAllSubMenus(),
                this.closeOtherSubMenus && this.rotateMenuArrowsBack(),
                (r.style.display = "block"),
                c.classList.add("rotate-90"),
                o.classList.add("active"));
          }
          handleSidebar(e) {
            (e.className = n.CSS_CLASSES.SIDEBAR + " show"),
              (e.style.visibility = "visible");
          }
          hideSidebar(e) {
            e.className = n.CSS_CLASSES.SIDEBAR;
          }
          makeBodyScrollable(e) {
            e.style.overflow = "";
          }
          openMenu(e, t) {
            this.preventBodyFromScrolling(t),
              this.handleSidebar(e),
              this.addBackdropToDom();
          }
          preventBodyFromScrolling(e) {
            e.style.overflow = "hidden";
          }
          removeBackdropFromDom() {
            const e = document.querySelector(".off-canvas-backdrop");
            e && e.remove();
          }
          rotateMenuArrowsBack() {
            const e = document.querySelectorAll("." + n.CSS_CLASSES.ARROW),
              t = e.length;
            for (let o = 0; o < t; o++) e[o].className = n.CSS_CLASSES.ARROW;
          }
          setMenuTitle(e) {
            document.querySelector(".off-canvas-title").innerHTML = e;
          }
          waitForDomElement(e) {
            return new Promise((t) => {
              if (document.querySelector(e))
                return t(document.querySelector(e));
              const o = new MutationObserver(() => {
                document.querySelector(e) &&
                  (t(document.querySelector(e)), o.disconnect());
              });
              o.observe(document.body, { childList: !0, subtree: !0 });
            });
          }
        };
      },
      915: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CSS_CLASSES = void 0),
          (t.CSS_CLASSES = {
            ARROW: "link-arrow",
            BACKDROP: "off-canvas-backdrop",
            ICON_CLOSE: "icon-close",
            ICON_OPEN: "icon-open-container",
            LINK_LEVEL: { 1: "link-level-1", 2: "link-level-2" },
            SIDEBAR: "off-canvas",
            SUBMENU_LEVEL: { 1: "list-level-1", 2: "list-level-2" },
          });
      },
      929: function (e, t, o) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), o(354);
        new (n(o(188)).default)().init();
      },
      354: function (e, t, o) {
        e.exports = o.p + "off-canvas-menu.css";
      },
    },
    t = {};
  function o(n) {
    var s = t[n];
    if (void 0 !== s) return s.exports;
    var r = (t[n] = { exports: {} });
    return e[n].call(r.exports, r, r.exports, o), r.exports;
  }
  (o.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  })()),
    (function () {
      var e;
      o.g.importScripts && (e = o.g.location + "");
      var t = o.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        n.length && (e = n[n.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (o.p = e);
    })();
  o(929);
})();
