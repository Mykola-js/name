"use strict";

(function e(t, n, r) {
	function s(o, u) {
		if (!n[o]) {
			if (!t[o]) {
				var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);throw new Error("Cannot find module '" + o + "'");
			}var f = n[o] = { exports: {} };t[o][0].call(f.exports, function (e) {
				var n = t[o][1][e];return s(n ? n : e);
			}, f, f.exports, e, t, n, r);
		}return n[o].exports;
	}var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
		s(r[o]);
	}return s;
})({ 1: [function (require, module, exports) {
		//FrontEnd Scripts
		var source = [" Twenty-eight guineas.", ' Rosemary gave no sign. Even if one is rich...', ' Her voice was dreamy as she answered: "Well,', ' keep it for me, will you The shopman', '  bowed. He would be willing of course, to keep it for her forever.', 'Outside rain was falling, there was a cold, bitter taste in the air', 'and the newly lighted lamps looked sad... At that very moment a'];

		var tbody = document.getElementById('tbody');

		var sortUp = function sortUp() {
			source.sort(function (a, b) {
				if (a < b) {
					return 1;
				} else if (a > b) {
					return -1;
				} else {
					return 0;
				}
			});
		};

		var sortDown = function sortDown() {
			source.sort(function (a, b) {
				if (a > b) {
					return 1;
				} else if (a < b) {
					return -1;
				} else {
					return 0;
				}
			});
		};

		var tableRender = function tableRender(data) {

			tbody.innerHTML = '';
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var item = _step.value;

					var row = document.createElement('tr');
					tbody.appendChild(row);

					var cell_Name = document.createElement('td');
					cell_Name.innerText = item;
					row.appendChild(cell_Name);
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		};

		tableRender(source);

		document.getElementById('sort-down').addEventListener('click', function (event) {
			sortDown();
			tableRender(source);
		});

		document.getElementById('sort-up').addEventListener('click', function (event) {
			sortUp();
			tableRender(source);
		});
	}, {}] }, {}, [1]);