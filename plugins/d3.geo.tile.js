d3.geo.tile = function() {
    function t() {
        var t = Math.max(Math.log(n) / Math.LN2 - 8, 0),
            h = Math.round(t + e),
            o = Math.pow(2, t - h + 8),
            u = [(r[0] - n / 2) / o, (r[1] - n / 2) / o],
            l = [],
            c = d3.range(Math.max(0, Math.floor(-u[0])), Math.max(0, Math.ceil(a[0] / o - u[0]))),
            M = d3.range(Math.max(0, Math.floor(-u[1])), Math.max(0, Math.ceil(a[1] / o - u[1])));
        return M.forEach(function(t) {
            c.forEach(function(a) {
                l.push([a, t, h])
            })
        }), l.translate = u, l.scale = o, l
    }
    var a = [960, 500],
        n = 256,
        r = [a[0] / 2, a[1] / 2],
        e = 0;
    return t.size = function(n) {
        return arguments.length ? (a = n, t) : a
    }, t.scale = function(a) {
        return arguments.length ? (n = a, t) : n
    }, t.translate = function(a) {
        return arguments.length ? (r = a, t) : r
    }, t.zoomDelta = function(a) {
        return arguments.length ? (e = +a, t) : e
    }, t
};