const APP_ID = "riqt52ah";

const takshak = {
    init: function() {
          this.navigationReveal(), this.productsHover(), this.addOnsHover()
      },
    queryStringToObject: function(e) {
        return _.chain(e).split("&").map(_.partial(_.split, _, "=", 2)).fromPairs().value()
    },
    navigationClose: function() {
        const e = document.querySelector(".js-nav-wrapper");
        if (!e) return;
        _.forEach(["touchstart", "click"], t => {
            document.body.addEventListener(t, function(e) {}, !0), e.addEventListener(t, function(e) {
                e.stopPropagation()
            }, !0)
        })
    },
    navigationReveal: function() {
        const e = document.querySelector(".js-header"),
            t = document.querySelector(".js-masthead");
        let n = t ? t.offsetHeight : e.offsetHeight,
            o = window.pageYOffset;
        document.addEventListener("scroll", function(s) {
            const r = window.pageYOffset || document.documentElement.scrollTop;
            r > o ? (e.classList.remove("header-visible"), o >= n ? (e.classList.add("header-fixed"), document.body.classList.add("p-0")) : (e.classList.remove("header-fixed"), e.classList.remove("header-zero"), document.body.classList.remove("p-0"))) : o >= n ? (e.classList.add("header-fixed"), e.classList.add("header-visible")) : (t || e.classList.add("header-zero"), e.classList.remove("header-fixed"), e.classList.remove("header-visible")), o = r <= 0 ? 0 : r
        }, !1)
    },
    productsHover: function() {
        const e = document.querySelectorAll(".js-products-link");
        _.forEach(e, e => {
            e.addEventListener("mouseenter", function(t) {
                const n = e.querySelector(".products-img");
                if (!n) return;
                const o = n.src,
                    s = n.srcset,
                    r = n.sizes;
                let i = document.querySelector("#products-type-img");
                i.src = o, i.srcset = s, i.sizes = r
            })
        })
    },
    addOnsHover: function() {
        const e = document.querySelectorAll(".js-addons-link");
        _.forEach(e, e => {
            e.addEventListener("mouseenter", function(t) {
                const n = e.querySelector(".products-img");
                if (!n) return;
                const o = n.src,
                    s = n.srcset,
                    r = n.sizes;
                let i = document.querySelector("#addons-img");
                i.src = o, i.srcset = s, i.sizes = r
            })
        })
    }
};
takshak.init();