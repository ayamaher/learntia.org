"use strict"
(function(e) {
    "function" === typeof define && define.amd ? define(["jquery", "datatables.net", "datatables.net-buttons"], function(d) {
        return e(d, window, document)
    }) : "object" === typeof exports ? module.exports = function(d, a) {
        d || (d = window);
        if (!a || !a.fn.dataTable) a = require("datatables.net")(d, a).$;
        a.fn.dataTable.Buttons || require("datatables.net-buttons")(d, a);
        return e(a, d, d.document)
    } : e(jQuery, window, document)
})(function(e, d, a) {
    var i = e.fn.dataTable,
        g = a.createElement("a");
    i.ext.buttons.print = {
        className: "buttons-print",
        text: function(c) {
            return c.i18n("buttons.print", "Print")
        },
        action: function(c, b, a, f) {
            c = b.buttons.exportData(f.exportOptions);
            a = function(c, a) {
                for (var b = "<tr>", d = 0, e = c.length; d < e; d++) b += "<" + a + ">" + c[d] + "</" + a + ">";
                return b + "</tr>"
            };
            b = '<table class="' + b.table().node().className + '">';
            f.header && (b += "<thead>" + a(c.header, "th") + "</thead>");
            for (var b = b + "<tbody>", j = 0, i = c.body.length; j < i; j++) b += a(c.body[j], "td");
            b += "</tbody>";
            f.footer && c.footer && (b += "<tfoot>" + a(c.footer, "th") + "</tfoot>");
            var h = d.open("", ""),
                c = f.title;
            "function" === typeof c && (c = c()); - 1 !== c.indexOf("*") && (c = c.replace("*", e("title").text()));
            h.document.close();
            var k = "<title>" + c + "</title>";
            e("style, link").each(function() {
                var c = k,
                    b = e(this).clone()[0],
                    a;
                "link" === b.nodeName.toLowerCase() && (g.href = b.href, a = g.host, -1 === a.indexOf("/") && 0 !== g.pathname.indexOf("/") && (a += "/"), b.href = g.protocol + "//" + a + g.pathname + g.search);
                k = c + b.outerHTML
            });
            h.document.head.innerHTML = k;
            h.document.body.innerHTML = "<h1>" + c + "</h1><div>" + f.message + "</div>" + b;
            f.customize && f.customize(h);
            setTimeout(function() {
                f.autoPrint && (h.print(), h.close())
            }, 250)
        },
        title: "*",
        message: "",
        exportOptions: {},
        header: !0,
        footer: !1,
        autoPrint: !0,
        customize: null
    };
    return i.Buttons
});
