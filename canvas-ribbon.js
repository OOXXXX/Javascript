! function() {
	function a(a, b, c) {
		return Number(a.getAttribute(b)) || c
	}

	function p() {
		for (e.clearRect(0, 0, g, h), j = [{
				x: 0,
				y: .7 * h + i
			}, {
				x: 0,
				y: .7 * h - i
			}]; j[1].x < g + i;) q(j[0], j[1])
	}

	function q(a, b) {
		e.beginPath(), e.moveTo(a.x, a.y), e.lineTo(b.x, b.y);
		var c = b.x + (2 * o() - .25) * i,
			d = r(b.y);
		e.lineTo(c, d), e.closePath(), l -= m / -50, e.fillStyle = "#" + (127 * n(l) + 128 << 16 | 127 * n(l + m / 3) + 128 << 8 | 127 * n(l + 2 * (m / 3)) + 128).toString(16), e.fill(), j[0] = j[1], j[1] = {
			x: c,
			y: d
		}
	}

	function r(a) {
		var b = a + (2 * o() - 1.1) * i;
		return b > h || 0 > b ? r(a) : b
	}
	var b, c, j, d, e, f, g, h, i, k, l, m, n, o;
	document.addEventListener("touchmove", function(a) {
		a.preventDefault()
	}), b = document.getElementById("ribbon"), config = {
		zindex: a(b, "zIndex", -1),
		alpha: a(b, "alpha", .6),
		ribbon_width: a(b, "size", 90)
	}, c = document.createElement("canvas"), c.style.cssText = "position:fixed;top:0;left:0;z-index:" + config.zindex, document.getElementsByTagName("body")[0].appendChild(c), d = c, e = d.getContext("2d"), f = window.devicePixelRatio || 1, g = window.innerWidth, h = window.innerHeight, i = config.ribbon_width, k = Math, l = 0, m = 2 * k.PI, n = k.cos, o = k.random, d.width = g * f, d.height = h * f, e.scale(f, f), e.globalAlpha = config.alpha, document.onclick = p, document.ontouchstart = p, p()
}();