!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var r,n,o,i;r=document.querySelector(".overlay"),n=document.querySelectorAll(".side"),o=document.querySelectorAll("[data-side-toggle]"),i=!1,o.forEach((function(t){t.addEventListener("click",(function(o){var a,c;o.preventDefault(),a=t.dataset.sideToggle,(c=e(n).find((function(e){return e.dataset.side===a})))&&(i=!i,c.classList.toggle("is-open",i),r.classList.toggle("is-open",i))}))})),r.addEventListener("click",(function(e){e.preventDefault(),i=!1,n.forEach((function(e){return e.classList.remove("is-open")})),r.classList.remove("is-open")}))}();