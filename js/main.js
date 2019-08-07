/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import "./import/modules";
$(document).ready(function () {
  $('#slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<img class="slider-leftarrow" src="./img/arl.png">',
    nextArrow: '<img class="slider-rightarrow" src="./img/arr.png">',
    dotsClass: 'slider-dots'
  });
});
$(document).ready(function () {
  $('#slider-team').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 5,
    dots: false,
    prevArrow: '<img class="our-team-wraper__left" src="./img/arl1.png">',
    nextArrow: '<img class="our-team-wraper__right" src="./img/arr1.png">',
    responsive: [{
      breakpoint: 1330,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false
      }
    }, {
      breakpoint: 990,
      settings: {
        variableWidth: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }]
  });
});
var app = new Vue({
  el: '#slider-team',
  data: {
    co: [{
      id: 1,
      photo: './img/miguel.png',
      name: 'Miguel Obrien',
      position: 'CEO & Founder',
      social: {
        "in": ['fab fa-linkedin-in', 'https://www.linkedin.com'],
        gg: ['fab fa-google-plus-g', 'https://aboutme.google.com'],
        fb: ['fab fa-facebook-f', 'https://www.facebook.com'],
        tw: ['fab fa-twitter', 'https://twitter.com']
      }
    }, {
      id: 2,
      photo: './img/jackie.png',
      name: 'JACKIE CARROLL',
      position: 'Art Director',
      social: {
        be: ['fab fa-behance', 'https://www.behance.net'],
        "in": ['fab fa-linkedin-in', 'https://www.linkedin.com'],
        gg: ['fab fa-google-plus-g', 'https://aboutme.google.com'],
        fb: ['fab fa-facebook-f', 'https://www.facebook.com'],
        tw: ['fab fa-twitter', 'https://twitter.com']
      }
    }, {
      id: 3,
      photo: './img/ida.png',
      name: 'IDA MORRISON',
      position: 'Designer',
      social: {
        be: ['fab fa-behance', 'https://www.behance.net'],
        "in": ['fab fa-linkedin-in', 'https://www.linkedin.com'],
        gg: ['fab fa-google-plus-g', 'https://aboutme.google.com'],
        fb: ['fab fa-facebook-f', 'https://www.facebook.com'],
        tw: ['fab fa-twitter', 'https://twitter.com']
      }
    }, {
      id: 4,
      photo: './img/miguel.png',
      name: 'ROB',
      position: 'Front-End Developer',
      social: {
        "in": ['fab fa-linkedin-in', 'https://www.linkedin.com'],
        gg: ['fab fa-google-plus-g', 'https://aboutme.google.com'],
        fb: ['fab fa-facebook-f', 'https://www.facebook.com'],
        tw: ['fab fa-twitter', 'https://twitter.com']
      }
    }, {
      id: 5,
      photo: './img/jackie.png',
      name: 'LADY',
      position: 'position',
      social: {
        gg: ['fab fa-google-plus-g', 'https://aboutme.google.com'],
        fb: ['fab fa-facebook-f', 'https://www.facebook.com'],
        tw: ['fab fa-twitter', 'https://twitter.com']
      }
    }]
  }
});

    $('.map-home__icon').on('click', function () {
        $('.map-home__box').toggleClass("map-home__box--hidden");
        $(this).toggleClass("fillBG");

    })
    $('.map-phone__icon').on('click',  function () {
        $('.map-phone__box').toggleClass("map-phone__box--hidden");
        $(this).toggleClass("fill");
    })
/***/ })

/******/ });
//# sourceMappingURL=main.js.map