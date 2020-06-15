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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ceremony.js":
/*!*************************!*\
  !*** ./src/ceremony.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Ceremony {\n    constructor(ctx, graduates, currentStudent = 0) {\n        this.ctx = ctx;\n        this.graduates = graduates;\n        this.currentStudent = currentStudent;\n        this.bearSpriteSheet = new Image();\n        this.stage = new Image();\n        this.audienceChairs = new Image();\n        this.trophy = new Image();\n        this.aalogo = new Image();\n        this.canvas = document.querySelector(\"canvas\")\n\n        this.bearSpriteSheet.src = \"./dist/assets/PixelArt.png\";\n        this.stage.src = './dist/assets/gifties-stage.png';\n        this.audienceChairs.src = \"./dist/assets/theatre_chairs.png\";\n        this.trophy.src = \"./dist/assets/trophy.png\";\n        // this.aalogo.src = \"./dist/assets/logo.png\";\n    }\n\n    constructStage() {\n        let waitingSprite = [40, 10];\n        // let waitingSprite = [0, 550];\n        let spriteSize = [270, 270]\n\n        this.interval = setInterval(() => {\n            this.ctx.drawImage(this.stage, 0, 0, this.canvas.width, 600);\n            this.ctx.drawImage(this.audienceChairs,0, 600, this.canvas.width, 70)\n            this.ctx.drawImage(this.audienceChairs,0, 670, this.canvas.width, 70)\n            // this.ctx.drawImage(this.audienceChairs,0, 620, 1000, 70)\n            this.ctx.drawImage(this.bearSpriteSheet,\n                waitingSprite[0], waitingSprite[1],\n                spriteSize[0], spriteSize[1],\n                80, 445,\n                // spriteSize[0], spriteSize[1])\n                80, 80)\n                // clearInterval(this.interval)\n        },100)\n    }\n\n    nextStudentMoves(button) {\n        button.disabled = true\n        this.graduates[this.currentStudent].moveAcrossScreen(this, button)\n        this.currentStudent += 1\n    }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ceremony);\n\n//# sourceURL=webpack:///./src/ceremony.js?");

/***/ }),

/***/ "./src/graduate.js":
/*!*************************!*\
  !*** ./src/graduate.js ***!
  \*************************/
/*! exports provided: Graduate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Graduate\", function() { return Graduate; });\nclass Graduate {\n    constructor(ctx, name, img_url) {\n        this.ctx = ctx\n        this.name = name\n        this.img_url = new Image()\n        this.img_url.src = img_url\n        this.canvas = document.querySelector(\"canvas\")\n    }\n\n    drawGraduate(ceremony,i,startingPosition, jumpHeight){\n        let spriteSize = [270, 270]\n        let runningSprites = [[340, 270], [640, 270], [940, 270]];\n        // let dashSprites = [[350, 250], [400, 250], [450, 250]];\n        let jumpSprite = [0, 550]\n\n        this.ctx.clearRect(0, 0, 1000, 1000)\n\n        this.ctx.drawImage(ceremony.stage, 0, 0, this.canvas.width, 600);\n        this.ctx.drawImage(ceremony.audienceChairs, 0, 600, this.canvas.width, 70)\n        this.ctx.drawImage(ceremony.audienceChairs, 0, 670, this.canvas.width, 70)\n\n        this.scaleGraduateImg();\n        if (startingPosition[0] >= 600 && startingPosition[0] <= 810) {\n            if (startingPosition[0] <= 810) {\n                jumpHeight[0] = jumpHeight[0] + 10;\n            } else {\n                jumpHeight[0] = jumpHeight[0] - 10;\n            }\n\n            this.ctx.drawImage(ceremony.bearSpriteSheet,\n                // runningSprites[i % runningSprites.length][0], runningSprites[i % runningSprites.length][1],\n                jumpSprite[0], jumpSprite[1]-20,\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1] - jumpHeight,\n                80, 80)\n        } else {\n            this.ctx.drawImage(ceremony.bearSpriteSheet,\n                runningSprites[i % runningSprites.length][0], runningSprites[i % runningSprites.length][1],\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1],\n                80, 80)\n        }\n\n\n        if (startingPosition[0] < 750) {\n            this.ctx.drawImage(ceremony.trophy, 720, 300, 50, 80); //draw diploma\n        } else if (startingPosition[0] === 750) {\n            ceremony.sound.play();\n        } else {\n            // this.ctx.drawImage(ceremony.aalogo, 365, 55, 170, 150);\n        }\n    }\n\n    moveAcrossScreen(ceremony,button) {\n        clearInterval(ceremony.interval);\n        let startingPosition = [80, 445]\n        let jumpSprite = [300, 100] //might get to use this later\n        let studentName = document.querySelector(\"#student\")\n        studentName.innerHTML = this.name\n        let i = 0;\n        let jumpHeight = [0];\n\n        let interval = setInterval(() => {\n            startingPosition[0] += 10\n            i++\n            this.drawGraduate(ceremony,i, startingPosition, jumpHeight)\n\n            if (startingPosition[0] >= 1270) {\n                clearInterval(interval)\n                this.ctx.clearRect(0, 0, 1000, 1000)\n                ceremony.constructStage()\n                button.disabled = false\n                studentName.innerHTML  = \"\"\n            }\n        }, 50)\n    }\n\n    scaleGraduateImg() {\n        let scale = Math.max(350 / this.img_url.width, 250 / this.img_url.height);\n        let x = 750 - ((this.img_url.width / 2) * scale);\n        let y = 200 - ((this.img_url.height / 2) * scale);\n        this.ctx.drawImage(this.img_url, x, y, this.img_url.width * scale, this.img_url.height * scale);\n    }\n\n    jumpAndGrabDiploma(ceremony, i, startingPosition) {\n\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/graduate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graduate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graduate */ \"./src/graduate.js\");\n/* harmony import */ var _ceremony__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ceremony */ \"./src/ceremony.js\");\n/* harmony import */ var _students_berkley_gifties_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./students/berkley-gifties.js */ \"./src/students/berkley-gifties.js\");\n\n //there is no reason that these two imports are different. I was messing around with how you can import files\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let canvas = document.getElementById(\"canvas\")\n    let nextStudentButton = document.getElementById(\"next-student\")\n    let ctx = canvas.getContext(\"2d\")\n    let ol1 = document.getElementById(\"ol1\")\n    let ol2 = document.getElementById(\"ol2\")\n    let goBearsSound = document.getElementById(\"go-bears\");\n    let submitButton = document.querySelector(\"#current-student-button\")\n    \n    //creating graduate instances\n    let graduates = [] \n    _students_berkley_gifties_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].forEach((student) => {\n        let graduate = new _graduate__WEBPACK_IMPORTED_MODULE_0__[\"Graduate\"](ctx,student.name,student.imageUrl)\n        graduates.push(graduate)\n    })\n\n    let mid = Math.floor(graduates.length/2)\n\n    //adding to list that appears on sides of stage\n    for (let i = 0; i < graduates.length;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol1.appendChild(listItem)\n    }\n\n    for (let i = 0; i < graduates.length;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol2.appendChild(listItem)\n    }\n\n    //creating ceremony\n    let ceremony = new _ceremony__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, graduates)\n    ceremony.sound = goBearsSound; // give sound to ceremony instance\n\n    submitButton.addEventListener(\"click\", () => {\n        let input = document.querySelector(\"input\");\n        ceremony.currentStudent = parseInt(input.value) - 1\n    })\n\n    ceremony.constructStage()\n\n\n    nextStudentButton.addEventListener(\"click\", (e) => {\n        ceremony.nextStudentMoves(e.target)\n    })\n\n\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/students/berkley-gifties.js":
/*!*****************************************!*\
  !*** ./src/students/berkley-gifties.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst students = [\n  {\n    \"name\":\"Andrea\",\n    \"imageUrl\": \"./dist/assets/gifties-default-pic.png\"\n  },\n  {\n    \"name\":\"Ada\",\n    \"imageUrl\": \"./dist/assets/gifties-ada.png\"\n  },\n  {\n    \"name\":\"Armita\",\n    \"imageUrl\": \"./dist/assets/gifties-armita.png\"\n  },\n  {\n    \"name\":\"Brenda\",\n    \"imageUrl\": \"./dist/assets/gifties-brenda.png\"\n  },\n  {\n    \"name\":\"Brighid\",\n    \"imageUrl\": \"./dist/assets/gifties-brighid.png\"\n  },\n  {\n    \"name\":\"Carol\",\n    \"imageUrl\": \"./dist/assets/gifties-default-pic.png\"\n  },\n  {\n    \"name\":\"David\",\n    \"imageUrl\": \"./dist/assets/gifties-david.png\"\n  },\n  {\n    \"name\":\"Debbie\",\n    \"imageUrl\": \"./dist/assets/gifties-default-pic.png\"\n  },\n  {\n    \"name\":\"Erica\",\n    \"imageUrl\": \"./dist/assets/gifties-erica.png\"\n  },\n  {\n    \"name\":\"Erik\",\n    \"imageUrl\": \"./dist/assets/gifties-default-pic.png\"\n  },\n  {\n    \"name\":\"Ion\",\n    \"imageUrl\": \"./dist/assets/gifties-default-pic.png\"\n  },\n  {\n    \"name\":\"Jason\",\n    \"imageUrl\": \"./dist/assets/gifties-default-pic.png\"\n  },\n  {\n    \"name\":\"Joyce\",\n    \"imageUrl\": \"./dist/assets/gifties-joyce.png\"\n  },\n  {\n    \"name\":\"Kelly\",\n    \"imageUrl\": \"./dist/assets/gifties-kelly.png\"\n  },\n  {\n    \"name\":\"Lydia\",\n    \"imageUrl\": \"./dist/assets/gifties-lydia.png\"\n  },\n  {\n    \"name\":\"Mabel\",\n    \"imageUrl\": \"./dist/assets/gifties-mabel.png\"\n  },\n  {\n    \"name\":\"Margaret\",\n    \"imageUrl\": \"./dist/assets/gifties-default-pic.png\"\n  },\n  {\n    \"name\":\"Margie\",\n    \"imageUrl\": \"./dist/assets/gifties-default-pic.png\"\n  },\n  {\n    \"name\":\"Matt\",\n    \"imageUrl\": \"./dist/assets/gifties-matt.png\"\n  },\n  {\n    \"name\":\"Maureen\",\n    \"imageUrl\": \"./dist/assets/gifties-maureen.png\"\n  },\n  {\n    \"name\":\"Tracy\",\n    \"imageUrl\": \"./dist/assets/gifties-default-pic.png\"\n  }\n]\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (students);\n\n//# sourceURL=webpack:///./src/students/berkley-gifties.js?");

/***/ })

/******/ });