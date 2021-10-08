function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet> ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>Login works!</p>\n\n<form [formGroup]=\"loginFormGroup\" (ngSubmit)=\"autenticar()\" >\n    <label for=\"lname\">Correo:</label><br>\n    <input type=\"text\" formControlName=\"correo\"><br><br>\n    <label for=\"lname\">Contraseña:</label><br>\n    <input type=\"text\" formControlName=\"password\"><br><br>\n    <button type=\"submit\" [disabled]=\"loginFormGroup.invalid\" >Click Me!</button>\n    <button (click)=\"register()\"  >Register!</button>\n\n</form>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/present-verb-aprender/present-verb-aprender.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/present-verb-aprender/present-verb-aprender.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPresentVerbAprenderPresentVerbAprenderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-drawer-container class=\"em-form\">\n    <div>\n        <button (click)=\"obtenerRutina()\" *ngIf=\"hoyYaRealizoAprender\" type=\"button\" class=\"btn btn-primary\"> Iniciar Aprendizaje </button>\n    </div>\n    <div class=\"container container-form-em\" *ngIf=\"hoyYaRealizoAprender == false\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm\">\n                    <div class=\"progress bar-container\">\n                        <div class=\"progress-bar progress-bar-striped active\" [ngStyle]=\"{width: barraProgreso + '%'}\"\n                            role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                            style=\"width:40%\">\n                            {{barraProgreso}}%\n                        </div>\n                    </div>\n\n                    <form class=\"\">\n                        <mat-form-field class=\"em-margin-input\" style=\"width: 75%;\" id=\"verb_input\">\n                            <input autocomplete=\"off\" matInput type=\"text\" placeholder=\"\" class=\"form-control\" name=\"in\" readonly [(ngModel)]=\" englishVerbo +' / '+ spanishVerbo\" style=\"text-align:center; background-color: #3CBC8D;\">\n                        </mat-form-field>\n                    </form>\n\n                    <form class=\"\" #formulario=\"ngForm\">\n                        <mat-form-field class=\"em-margin-input\" style=\"width: 75%;\" id=\"verb_input\">\n                            <input autocomplete=\"off\" matInput type=\"text\" placeholder=\"\"\n                                class=\"form-control {{colorSegunValidacionClass}}\" name=\"in\"\n                                (input)=\"validarVerboEntredaConVerboPorAprender($event.target.value); colorSegunValidacion($event.target.value);\"\n                                [(ngModel)]=\"verboEntrada\">\n                        </mat-form-field>\n                    </form>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm\">\n                    <nav class=\"em-nav nav flex-column float-right\">\n                        <button (click)=\"reproducir()\" type=\"button\" class=\"btn btn-primary\">* Reproducir *</button>\n                        <div class=\"container-reproducir-siguiente\">\n                            <button (click)=\"reproducirSiguientePalabra()\" type=\"button\"\n                                class=\"btn btn-primary\">Reproducir</button>\n                            <select class=\"verbos-reproducir\" id=\"exampleFormControlSelect1\" [(ngModel)]=\"cantidadVerbosReproducir\">\n                                <option *ngFor='let em of [].constructor(numeroPalabras); let i = index;'  [value]=\"i\">{{i+1}}</option>\n                            </select>\n                        </div>\n                        <button (click)=\"mostrarSiguientePalabra()\" type=\"button\" class=\"btn btn-primary\">* Ayuda\n                            Siguietne Palabra*</button>\n                        <button (click)=\"mostrarAyuda()\" type=\"button\" class=\"btn btn-primary\">* Ayuda *</button>\n                    </nav>\n                </div>\n            </div>\n            <div *ngIf=\"activarAyuda\" class=\"bar-container alert alert-warning\">\n                <strong>{{palabraActual}}</strong>\n            </div>\n        </div>\n    </div>\n    <p *ngIf=\"hoyYaRealizoAprender == true\">Hoy ya realizaste esta Rutina -> {{hoyYaRealizoAprender}}</p>\n</mat-drawer-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/present-verb/present-verb.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/present-verb/present-verb.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPresentVerbPresentVerbComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-drawer-container class=\"em-form\">\n    <div>\n        <button (click)=\"obtenerRutina()\" type=\"button\" class=\"btn btn-primary\"> Iniciar Rutina </button>\n    </div>\n    <div class=\"container container-form-em\" *ngIf=\"hoyYaRealizoAprender == false\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm\">\n                    <div class=\"progress bar-container\">\n                        <div class=\"progress-bar progress-bar-striped active\" [ngStyle]=\"{width: barraProgreso + '%'}\"\n                            role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                            style=\"width:40%\">\n                            {{barraProgreso}}%\n                        </div>\n                    </div>\n                    <form class=\"\" #formulario=\"ngForm\">\n                        <mat-form-field class=\"em-margin-input\" style=\"width: 75%;\" id=\"verb_input\">\n                            <input #verboEntradaInput [readonly]=\"!editable\" autocomplete=\"off\" matInput type=\"text\" placeholder=\"\"\n                                class=\"form-control {{colorSegunValidacionClass}}\" name=\"in\"\n                                (input)=\"validarVerboEntredaConVerboRutina($event.target.value); colorSegunValidacion($event.target.value);\"\n                                [(ngModel)]=\"verboEntrada\">\n                        </mat-form-field>\n                    </form>\n  \n                    <div *ngIf=\"showOptions == true\" class=\"btn-group-vertical\" role=\"group\" aria-label=\"Vertical button group\">\n                      <button *ngFor='let option of opciones; let indexOfelement=index;' id=\"{{indexOfelement + 1}}\" mdbBtn (click)=\"validarTraductorSeleccionado(option.valido)\" type=\"button\" color=\"amber\" class=\"waves-light ml-0\" mdbWavesEffect>{{indexOfelement + 1}}. {{option.descripcion}}</button>\n                    </div>\n  \n                  </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm\">\n                    <nav class=\"em-nav nav flex-column float-right\">\n                        <button id=\"ArrowUp\"  (click)=\"reproducir()\" type=\"button\" class=\"btn btn-primary\"> * Reproducir *</button>\n                        <div class=\"container-reproducir-siguiente\">\n                            <button (click)=\"reproducirSiguientePalabra()\" type=\"button\"\n                                class=\"btn btn-primary\">Reproducir</button>\n                            <select class=\"verbos-reproducir\" id=\"exampleFormControlSelect1\" [(ngModel)]=\"cantidadVerbosReproducir\">\n                                <option *ngFor='let em of [].constructor(numeroPalabras); let i = index;'  [value]=\"i\">{{i+1}}</option>\n                            </select>\n                        </div>\n                        <button (click)=\"mostrarSiguientePalabra()\" type=\"button\" class=\"btn btn-primary\">* Ayuda\n                            Siguietne Palabra*</button>\n                        <button (click)=\"mostrarAyuda()\" type=\"button\" class=\"btn btn-primary\">* Ayuda *</button>\n                    </nav>\n                </div>\n            </div>\n            <div *ngIf=\"activarAyuda\" class=\"bar-container alert alert-warning\">\n                <strong>{{palabraActual}}</strong>\n            </div>\n        </div>\n    </div>\n    <p *ngIf=\"hoyYaRealizoAprender\">La Rutina no tiene verbos por repasar-> {{hoyYaRealizoAprender}}</p>\n  </mat-drawer-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/principal/principal.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/principal/principal.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPrincipalPrincipalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    <mat-drawer-container class=\"example-header\">\n        <div class=\"form-group\">\n            <button class=\"btn btn-primary\" (click)=\"cerrarsesion()\">Logout</button>\n        </div>\n    </mat-drawer-container>\n\n    <mat-drawer-container class=\"main-container-em\">\n        <mat-drawer class=\"menu-container\" mode=\"side\" opened>\n            <mat-list *ngFor=\"let tema of usuario.temas \">\n                <mat-list-item style=\"cursor: pointer\" [ngClass]=\"colorSegunValidacion(tema['realizadoHoy'])\" (click)=\"content(tema)\">{{tema[\"tema\"]}}     [ {{tema[\"ultimoIndiceAprendido\"]}}/{{tema[\"filas\"]}} ] </mat-list-item>\n            </mat-list>\n        </mat-drawer>\n\n\n        <div *ngIf=\"!isEmpty(usuario.sistema.temaSeleccionado)\" >\n            <div class=\"tabs-em container\">\n                <mat-tab-group class=\"em-group-tabs\">\n                    <mat-tab class=\"em-aprender-tab\" label=\"Aprender | {{ usuario.sistema.temaSeleccionado.tema }}\">\n                        <app-present-verb-aprender></app-present-verb-aprender>\n                    </mat-tab>\n                    <mat-tab class=\"em-rutina-tab\" label=\"Rutina | {{ usuario.sistema.temaSeleccionado.tema }}\">\n                        <app-present-verb [hojaTemaExcel]=\"hojaTemaExcel\"></app-present-verb>\n                    </mat-tab>\n                </mat-tab-group>\n            </div>\n        </div>\n\n    </mat-drawer-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/registrer/registrer.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registrer/registrer.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegistrerRegistrerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>registrer works!</p>\n\n<form [formGroup]=\"registrerFormGroup\" (ngSubmit)=\"crearusuario()\" >\n    <label for=\"fname\">Nombre:</label><br>\n    <input type=\"text\" formControlName=\"nombre\" ><br>\n    <label for=\"lname\">Correo:</label><br>\n    <input type=\"text\" formControlName=\"correo\"><br><br>\n    <label for=\"lname\">Contraseña:</label><br>\n    <input type=\"text\" formControlName=\"password\"><br><br>\n    <button type=\"submit\" [disabled]=\"registrerFormGroup.invalid\" >Click Me!</button>\n    <button (click)=\"login()\">Login!</button>\n\n</form> ";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _principal_principal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./principal/principal.component */
    "./src/app/principal/principal.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _registrer_registrer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./registrer/registrer.component */
    "./src/app/registrer/registrer.component.ts");

    var routes = [{
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'home',
      component: _principal_principal_component__WEBPACK_IMPORTED_MODULE_3__["PrincipalComponent"]
    }, {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'register',
      component: _registrer_registrer_component__WEBPACK_IMPORTED_MODULE_5__["RegistrerComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'em-learning';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _present_verb_present_verb_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./present-verb/present-verb.component */
    "./src/app/present-verb/present-verb.component.ts");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _principal_principal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./principal/principal.component */
    "./src/app/principal/principal.component.ts");
    /* harmony import */


    var _present_verb_aprender_present_verb_aprender_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./present-verb-aprender/present-verb-aprender.component */
    "./src/app/present-verb-aprender/present-verb-aprender.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ngx-bootstrap/alert */
    "./node_modules/ngx-bootstrap/alert/fesm2015/ngx-bootstrap-alert.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _dominio_estado_estado_reducer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./dominio/estado/estado.reducer */
    "./src/app/dominio/estado/estado.reducer.ts");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _registrer_registrer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./registrer/registrer.component */
    "./src/app/registrer/registrer.component.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _present_verb_present_verb_component__WEBPACK_IMPORTED_MODULE_15__["PresentVerbComponent"], _principal_principal_component__WEBPACK_IMPORTED_MODULE_17__["PrincipalComponent"], _present_verb_aprender_present_verb_aprender_component__WEBPACK_IMPORTED_MODULE_18__["PresentVerbAprenderComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"], _registrer_registrer_component__WEBPACK_IMPORTED_MODULE_27__["RegistrerComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_21__["AlertModule"].forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_28__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_26__["environment"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_29__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_30__["AngularFireAuthModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_23__["StoreModule"].forRoot(_dominio_estado_estado_reducer__WEBPACK_IMPORTED_MODULE_24__["appStateReducers"]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_25__["StoreDevtoolsModule"].instrument({
        maxAge: 25,
        logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_26__["environment"].production
      })],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/comun/audio/audio.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/comun/audio/audio.service.ts ***!
    \**********************************************/

  /*! exports provided: AudioService */

  /***/
  function srcAppComunAudioAudioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AudioService", function () {
      return AudioService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AudioService = /*#__PURE__*/function () {
      function AudioService() {
        _classCallCheck(this, AudioService);
      }

      _createClass(AudioService, [{
        key: "reproducir",
        value: function reproducir(verb) {
          var audioGeneroAleatorio = this.obtenerAudioGeneroAleatorio();
          this.reproductor = new SpeechSynthesisUtterance(verb);
          this.reproductor["default"] = false;
          this.reproductor.lang = audioGeneroAleatorio == 1 ? "en-GB" : "en-US";
          this.reproductor.localService = false;
          this.reproductor.name = audioGeneroAleatorio == 1 ? "Google UK English Female" : "Microsoft Zira Desktop - English (United States)";
          this.reproductor.voiceURI = audioGeneroAleatorio == 1 ? "Google UK English Female" : "Microsoft Zira Desktop - English (United States)"; //this.reproductor.pitch = 2; // velocidad de voz [0.1 - 10]
          //this.reproductor.volume = 1; //
          //this.reproductor.rate = 1;

          window.speechSynthesis.speak(this.reproductor);
        }
      }, {
        key: "obtenerAudioGeneroAleatorio",
        value: function obtenerAudioGeneroAleatorio() {
          var indiceAleatoreo = Math.floor(Math.random() * 2) + 0;
          return indiceAleatoreo;
        }
      }]);

      return AudioService;
    }();

    AudioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AudioService);
    /***/
  },

  /***/
  "./src/app/dominio/estado/estado.reducer.ts":
  /*!**************************************************!*\
    !*** ./src/app/dominio/estado/estado.reducer.ts ***!
    \**************************************************/

  /*! exports provided: appStateReducers */

  /***/
  function srcAppDominioEstadoEstadoReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appStateReducers", function () {
      return appStateReducers;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _usuario_usuario_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../usuario/usuario.reducer */
    "./src/app/dominio/usuario/usuario.reducer.ts");

    var appStateReducers = {
      usuario: _usuario_usuario_reducer__WEBPACK_IMPORTED_MODULE_1__["usuarioReducer"]
    };
    /***/
  },

  /***/
  "./src/app/dominio/sistema/sistema.model.ts":
  /*!**************************************************!*\
    !*** ./src/app/dominio/sistema/sistema.model.ts ***!
    \**************************************************/

  /*! exports provided: Sistema */

  /***/
  function srcAppDominioSistemaSistemaModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Sistema", function () {
      return Sistema;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _tema_tema_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../tema/tema.model */
    "./src/app/dominio/tema/tema.model.ts");

    var Sistema = function Sistema() {
      _classCallCheck(this, Sistema);

      this.temaSeleccionado = new _tema_tema_model__WEBPACK_IMPORTED_MODULE_1__["Tema"]();
    };
    /***/

  },

  /***/
  "./src/app/dominio/tema/tema.model.ts":
  /*!********************************************!*\
    !*** ./src/app/dominio/tema/tema.model.ts ***!
    \********************************************/

  /*! exports provided: Tema */

  /***/
  function srcAppDominioTemaTemaModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tema", function () {
      return Tema;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Tema = function Tema() {
      _classCallCheck(this, Tema);
    };
    /***/

  },

  /***/
  "./src/app/dominio/usuario/usuario.actions.ts":
  /*!****************************************************!*\
    !*** ./src/app/dominio/usuario/usuario.actions.ts ***!
    \****************************************************/

  /*! exports provided: crear, actualizar, temaSeleccionado, actualizarRutinaTemaSeleccionado, actualizarConfiguracionTemaSeleccionado */

  /***/
  function srcAppDominioUsuarioUsuarioActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "crear", function () {
      return crear;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "actualizar", function () {
      return actualizar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "temaSeleccionado", function () {
      return temaSeleccionado;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "actualizarRutinaTemaSeleccionado", function () {
      return actualizarRutinaTemaSeleccionado;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "actualizarConfiguracionTemaSeleccionado", function () {
      return actualizarConfiguracionTemaSeleccionado;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var crear = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Usuario] Crear Nombre', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var actualizar = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Usuario] Actualizar', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var temaSeleccionado = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Sistema] tema seleccionado', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var actualizarRutinaTemaSeleccionado = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Sistema] actualizar Rutina Tema Seleccionado', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var actualizarConfiguracionTemaSeleccionado = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Sistema] actualizar Configuracion Tema Seleccionado', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    /***/
  },

  /***/
  "./src/app/dominio/usuario/usuario.model.ts":
  /*!**************************************************!*\
    !*** ./src/app/dominio/usuario/usuario.model.ts ***!
    \**************************************************/

  /*! exports provided: Usuario */

  /***/
  function srcAppDominioUsuarioUsuarioModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Usuario", function () {
      return Usuario;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _sistema_sistema_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../sistema/sistema.model */
    "./src/app/dominio/sistema/sistema.model.ts");

    var Usuario = function Usuario() {
      _classCallCheck(this, Usuario);

      this.sistema = new _sistema_sistema_model__WEBPACK_IMPORTED_MODULE_1__["Sistema"]();
    };
    /***/

  },

  /***/
  "./src/app/dominio/usuario/usuario.reducer.ts":
  /*!****************************************************!*\
    !*** ./src/app/dominio/usuario/usuario.reducer.ts ***!
    \****************************************************/

  /*! exports provided: usuarioState, usuarioReducer */

  /***/
  function srcAppDominioUsuarioUsuarioReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "usuarioState", function () {
      return usuarioState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "usuarioReducer", function () {
      return usuarioReducer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _usuario_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./usuario.actions */
    "./src/app/dominio/usuario/usuario.actions.ts");
    /* harmony import */


    var _usuario_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./usuario.model */
    "./src/app/dominio/usuario/usuario.model.ts");

    var usuarioState = new _usuario_model__WEBPACK_IMPORTED_MODULE_3__["Usuario"]();

    var _usuarioReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(usuarioState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_usuario_actions__WEBPACK_IMPORTED_MODULE_2__["crear"], function (state, _ref) {
      var nombre = _ref.nombre;
      return Object.assign({}, state, {
        nombre: nombre
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_usuario_actions__WEBPACK_IMPORTED_MODULE_2__["actualizar"], function (state, _ref2) {
      var id = _ref2.id,
          correo = _ref2.correo,
          temas = _ref2.temas;
      return Object.assign({}, state, {
        id: id,
        correo: correo,
        temas: temas
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_usuario_actions__WEBPACK_IMPORTED_MODULE_2__["temaSeleccionado"], function (state, _ref3) {
      var temaSeleccionado = _ref3.temaSeleccionado;
      return Object.assign({}, state, {
        temas: state.temas.map(function (tema) {
          if (tema.tema === temaSeleccionado.tema) {
            tema.configuracion = temaSeleccionado.configuracion;
          }

          return tema;
        }),
        sistema: {
          temaSeleccionado: temaSeleccionado
        }
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_usuario_actions__WEBPACK_IMPORTED_MODULE_2__["actualizarRutinaTemaSeleccionado"], function (state, _ref4) {
      var englishVerbs = _ref4.englishVerbs;
      return Object.assign({}, state, {
        sistema: Object.assign({}, state.sistema, {
          temaSeleccionado: Object.assign({}, state.sistema.temaSeleccionado, {
            rutina: Object.assign({}, state.sistema.temaSeleccionado.rutina, {
              englishVerbs: englishVerbs
            })
          })
        })
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_usuario_actions__WEBPACK_IMPORTED_MODULE_2__["actualizarConfiguracionTemaSeleccionado"], function (state, _ref5) {
      var configuracion = _ref5.configuracion;
      return Object.assign({}, state, {
        sistema: Object.assign({}, state.sistema, {
          temaSeleccionado: Object.assign({}, state.sistema.temaSeleccionado, {
            configuracion: configuracion
          })
        })
      });
    }));

    function usuarioReducer(state, action) {
      return _usuarioReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/login/autenticacion.service.ts":
  /*!************************************************!*\
    !*** ./src/app/login/autenticacion.service.ts ***!
    \************************************************/

  /*! exports provided: AutenticacionService */

  /***/
  function srcAppLoginAutenticacionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutenticacionService", function () {
      return AutenticacionService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");

    var AutenticacionService = /*#__PURE__*/function () {
      function AutenticacionService(http, auth) {
        _classCallCheck(this, AutenticacionService);

        this.http = http;
        this.auth = auth;
        this.autenticarseUrl = 'http://192.168.1.9:81/api/autenticacion';
      }

      _createClass(AutenticacionService, [{
        key: "autenticar",
        value: function autenticar(autenticacion) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json; charset=utf-8'
            })
          };
          return this.http.post(this.autenticarseUrl, JSON.stringify(autenticacion), httpOptions);
        }
      }, {
        key: "login",
        value: function login(correo, password) {
          return this.auth.auth.signInWithEmailAndPassword(correo, password);
        }
      }]);

      return AutenticacionService;
    }();

    AutenticacionService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }];
    };

    AutenticacionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AutenticacionService);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _autenticacion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./autenticacion.service */
    "./src/app/login/autenticacion.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _dominio_usuario_usuario_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../dominio/usuario/usuario.actions */
    "./src/app/dominio/usuario/usuario.actions.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _principal_temas_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../principal/temas.service */
    "./src/app/principal/temas.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router, autenticacionService, temaService, store, fb) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.autenticacionService = autenticacionService;
        this.temaService = temaService;
        this.store = store;
        this.fb = fb;
        this.isLoggedIn = false;
        this.isLoginFailed = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLoggedIn = false;
          this.loginFormGroup = this.fb.group({
            correo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
          });
        }
      }, {
        key: "autenticar",
        value: function autenticar() {
          var _this = this;

          if (this.loginFormGroup.invalid) return;
          sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: 'Auto close alert!',
            didOpen: function didOpen() {
              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.showLoading();
            }
          });
          var _this$loginFormGroup$ = this.loginFormGroup.value,
              correo = _this$loginFormGroup$.correo,
              password = _this$loginFormGroup$.password;
          this.autenticacionService.login(correo, password).then(function (credenciales) {
            _this.temaService.getTemasByCorreo(correo).subscribe(function (tema) {
              console.log("**************** Temas ********************");
              console.log(tema);

              _this.store.dispatch(Object(_dominio_usuario_usuario_actions__WEBPACK_IMPORTED_MODULE_5__["actualizar"])({
                id: credenciales.user.uid,
                correo: correo,
                temas: tema
              }));
            });

            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.close();

            _this.router.navigate(['/home']);
          })["catch"](function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.message,
              footer: '<a href="">Why do I have this issue?</a>'
            });
          });
        }
      }, {
        key: "register",
        value: function register() {
          this.router.navigate(['/register']);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _autenticacion_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacionService"]
      }, {
        type: _principal_temas_service__WEBPACK_IMPORTED_MODULE_8__["TemasService"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/login/register.ts":
  /*!***********************************!*\
    !*** ./src/app/login/register.ts ***!
    \***********************************/

  /*! exports provided: Registrer */

  /***/
  function srcAppLoginRegisterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Registrer", function () {
      return Registrer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Registrer = function Registrer(id, correo, contrasena) {
      _classCallCheck(this, Registrer);

      this.id = id;
      this.correo = correo;
      this.contrasena = contrasena;
      this.ultimoIndiceAprendido = 0;
    };
    /***/

  },

  /***/
  "./src/app/present-verb-aprender/actualizar-perfil-present-verb.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/present-verb-aprender/actualizar-perfil-present-verb.ts ***!
    \*************************************************************************/

  /*! exports provided: ActualizarPerfilPresentVerb */

  /***/
  function srcAppPresentVerbAprenderActualizarPerfilPresentVerbTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActualizarPerfilPresentVerb", function () {
      return ActualizarPerfilPresentVerb;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ActualizarPerfilPresentVerb = function ActualizarPerfilPresentVerb() {
      _classCallCheck(this, ActualizarPerfilPresentVerb);
    };
    /***/

  },

  /***/
  "./src/app/present-verb-aprender/present-verb-aprender.component.css":
  /*!***************************************************************************!*\
    !*** ./src/app/present-verb-aprender/present-verb-aprender.component.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPresentVerbAprenderPresentVerbAprenderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tp-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.tp-margin {\n  margin: 0 10px;\n}\n\n.example-form {\n height: 149px;\n}\n\n.em-tab{\n width: 83%;\n}\n\n.tp-section {\n display: flex;\n align-content: center;\n align-items: center;\n height: 60px;\n}\n\n.tp-margin {\n margin: 0 10px;\n}\n\n.example-form {\nheight: 149px;\n}\n\n.em-tab{\n width: 83%;\n}\n\n.menu-container {\nwidth: 20%;\nbackground-color: cornflowerblue;\n}\n\n.theme{\ncolor: #fff;\nbackground-color: #007bff;\nborder-color: #007bff;\nwidth: 15%;\n}\n\n.bar-container {\nwidth: 75%;\n}\n\n.em-margin-input{\nmargin-top: 20px;\n}\n\n.validacionExitosa{\nbox-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);\ncolor: black;\ntransform: translateY(-7px);\n}\n\n.validacionError{\nbox-shadow: 0px 15px 20px #ffb3b3;\ncolor: black;\ntransform: translateY(-7px);\n}\n\n.validacionVacia{\nbox-shadow: 0px 15px 20px #80bfff;\ncolor: black;\ntransform: translateY(-7px);\n}\n\n.em-nav button {\nmargin: 5px;\n}\n\n.mat-tab-list {\n background-color: #007bff !important;\n}\n\n.verbos-reproducir{\n width: 60px;\n}\n\n.container-reproducir-siguiente{\ndisplay: -webkit-inline-box;\n}\n\np {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlc2VudC12ZXJiLWFwcmVuZGVyL3ByZXNlbnQtdmVyYi1hcHJlbmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFHQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixxQkFBcUI7Q0FDckIsbUJBQW1CO0NBQ25CLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtBQUNBLFVBQVU7QUFDVixnQ0FBZ0M7QUFDaEM7O0FBRUE7QUFDQSxXQUFXO0FBQ1gseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQixVQUFVO0FBQ1Y7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQSxpREFBaUQ7QUFDakQsWUFBWTtBQUNaLDJCQUEyQjtBQUMzQjs7QUFFQTtBQUNBLGlDQUFpQztBQUNqQyxZQUFZO0FBQ1osMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0EsaUNBQWlDO0FBQ2pDLFlBQVk7QUFDWiwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7Q0FDQyxvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wcmVzZW50LXZlcmItYXByZW5kZXIvcHJlc2VudC12ZXJiLWFwcmVuZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHAtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4udHAtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cblxuLmV4YW1wbGUtZm9ybSB7XG4gaGVpZ2h0OiAxNDlweDtcbn1cblxuLmVtLXRhYntcbiB3aWR0aDogODMlO1xufVxuXG4udHAtc2VjdGlvbiB7XG4gZGlzcGxheTogZmxleDtcbiBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiBoZWlnaHQ6IDYwcHg7XG59XG5cbi50cC1tYXJnaW4ge1xuIG1hcmdpbjogMCAxMHB4O1xufVxuXG4uZXhhbXBsZS1mb3JtIHtcbmhlaWdodDogMTQ5cHg7XG59XG5cbi5lbS10YWJ7XG4gd2lkdGg6IDgzJTtcbn1cblxuLm1lbnUtY29udGFpbmVyIHtcbndpZHRoOiAyMCU7XG5iYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbn1cblxuLnRoZW1le1xuY29sb3I6ICNmZmY7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xud2lkdGg6IDE1JTtcbn1cblxuLmJhci1jb250YWluZXIge1xud2lkdGg6IDc1JTtcbn1cblxuLmVtLW1hcmdpbi1pbnB1dHtcbm1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi52YWxpZGFjaW9uRXhpdG9zYXtcbmJveC1zaGFkb3c6IDBweCAxNXB4IDIwcHggcmdiYSg0NiwgMjI5LCAxNTcsIDAuNCk7XG5jb2xvcjogYmxhY2s7XG50cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTdweCk7XG59XG5cbi52YWxpZGFjaW9uRXJyb3J7XG5ib3gtc2hhZG93OiAwcHggMTVweCAyMHB4ICNmZmIzYjM7XG5jb2xvcjogYmxhY2s7XG50cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTdweCk7XG59XG5cbi52YWxpZGFjaW9uVmFjaWF7XG5ib3gtc2hhZG93OiAwcHggMTVweCAyMHB4ICM4MGJmZmY7XG5jb2xvcjogYmxhY2s7XG50cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTdweCk7XG59XG5cbi5lbS1uYXYgYnV0dG9uIHtcbm1hcmdpbjogNXB4O1xufVxuXG4ubWF0LXRhYi1saXN0IHtcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XG59XG5cbi52ZXJib3MtcmVwcm9kdWNpcntcbiB3aWR0aDogNjBweDtcbn1cblxuLmNvbnRhaW5lci1yZXByb2R1Y2lyLXNpZ3VpZW50ZXtcbmRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcbn1cblxucCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/present-verb-aprender/present-verb-aprender.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/present-verb-aprender/present-verb-aprender.component.ts ***!
    \**************************************************************************/

  /*! exports provided: PresentVerbAprenderComponent */

  /***/
  function srcAppPresentVerbAprenderPresentVerbAprenderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PresentVerbAprenderComponent", function () {
      return PresentVerbAprenderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _present_verb_aprender_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./present-verb-aprender.service */
    "./src/app/present-verb-aprender/present-verb-aprender.service.ts");
    /* harmony import */


    var _actualizar_perfil_present_verb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./actualizar-perfil-present-verb */
    "./src/app/present-verb-aprender/actualizar-perfil-present-verb.ts");
    /* harmony import */


    var _comun_audio_audio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../comun/audio/audio.service */
    "./src/app/comun/audio/audio.service.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _dominio_usuario_usuario_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../dominio/usuario/usuario.actions */
    "./src/app/dominio/usuario/usuario.actions.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var PresentVerbAprenderComponent = /*#__PURE__*/function () {
      function PresentVerbAprenderComponent(http, presentVerbService, audioService, store) {
        _classCallCheck(this, PresentVerbAprenderComponent);

        this.http = http;
        this.presentVerbService = presentVerbService;
        this.audioService = audioService;
        this.store = store;
        this.repeticionesAltaComoAprendidoTemporal = 0;
        this.barraProgreso = 0;
        this.colorBarraProgreso = 'alert alert-danger';
        this.colorSegunValidacionClass = 'border border-primary validacionVacia';
        this.hoyYaRealizoAprender = true;
        this.numeroPalabras = 0;
        this.cantidadVerbosReproducir = 0;
        this.patt1 = /\w+/g;
        this.activarAyuda = false;
        this.palabraActual = '';
      }

      _createClass(PresentVerbAprenderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "obtenerRutina",
        value: function obtenerRutina() {
          var _this2 = this;

          this.store.select('usuario').subscribe(function (usuario) {
            //console.log("Before **")
            //console.log(this.isEmpty(usuario.sistema.temaSeleccionado.aprender))
            //console.log(this.isEmpty(usuario.sistema.temaSeleccionado.aprender) || this.usuario.sistema.temaSeleccionado.tema !== usuario.sistema.temaSeleccionado.tema)
            if (_this2.isEmpty(_this2.usuario) || _this2.isEmpty(_this2.usuario.sistema.temaSeleccionado.aprender) || _this2.usuario.sistema.temaSeleccionado.tema !== usuario.sistema.temaSeleccionado.tema) {
              _this2.usuario = usuario;
              console.log("************** 1 ******************");

              _this2.presentVerbService.obtenerRutinaByConfiguracions(usuario.sistema.temaSeleccionado).subscribe(function (aprender) {
                aprender.numeroVerbosAprender = aprender.english.length;
                aprender.indiceVerboRetrocesoTemporal = 0;
                aprender.indiceVerboValidar = 0;
                aprender.indicesVerbosAprendidos = [];
                usuario.sistema.temaSeleccionado.aprender = aprender;
                usuario.sistema.temaSeleccionado.tipo = "A";
                _this2.barraProgreso = 0;
                _this2.repeticionesAltaComoAprendidoTemporal = 0;
                _this2.hoyYaRealizoAprender = usuario.sistema.temaSeleccionado.realizadoHoy; //this.store.dispatch(temaSeleccionado({ temaSeleccionado: usuario.sistema.temaSeleccionado }));

                _this2.ingresarInformacionAprender();
              }, function (error) {});
            }
            /*else {
              console.log("************** 1.B ******************")
              this.hoyYaRealizoAprender = this.usuario.sistema.temaSeleccionado.realizadoHoy;
              this.ingresarInformacionAprender()
            }*/

          });
        }
      }, {
        key: "isEmpty",
        value: function isEmpty(obj) {
          if (obj === undefined) return true;
          return Object.keys(obj).length === 0;
        }
      }, {
        key: "validarVerboEntredaConVerboPorAprender",
        value: function validarVerboEntredaConVerboPorAprender(verboEntrada) {
          if (this.estaRutinaCompletada()) {
            this.actualizacionPerfil();
          } else if (this.esIgualVerbEntradaVerboRutina(verboEntrada)) {
            this.configuracionAprender();

            if (this.estaRutinaCompletada()) {
              this.actualizacionPerfil();
            }
          }
        }
      }, {
        key: "actualizacionPerfil",
        value: function actualizacionPerfil() {
          var _this3 = this;

          this.actualizarPerfilPresentVerb = new _actualizar_perfil_present_verb__WEBPACK_IMPORTED_MODULE_4__["ActualizarPerfilPresentVerb"]();
          this.actualizarPerfilPresentVerb.nombre = this.usuario.sistema.temaSeleccionado.tema;
          this.actualizarPerfilPresentVerb.correo = this.usuario.correo;
          this.actualizarPerfilPresentVerb.ultimoIndiceAprendido = this.usuario.sistema.temaSeleccionado.configuracion.ultimoIndiceAprendido + this.usuario.sistema.temaSeleccionado.aprender.english.length;
          this.presentVerbService.actualizarPerfil(this.actualizarPerfilPresentVerb).subscribe(function (exito) {
            console.log(exito);
          });
          this.presentVerbService.obtenerPerfilPorTema(this.usuario).subscribe(function (configuracion) {
            console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
            console.log(configuracion);
            _this3.usuario.sistema.temaSeleccionado.configuracion = configuracion;
            _this3.usuario.sistema.temaSeleccionado.realizadoHoy = true;
          });
          this.store.dispatch(Object(_dominio_usuario_usuario_actions__WEBPACK_IMPORTED_MODULE_7__["temaSeleccionado"])({
            temaSeleccionado: this.usuario.sistema.temaSeleccionado
          }));
          this.hoyRealizoAprender();
        }
      }, {
        key: "configuracionAprender",
        value: function configuracionAprender() {
          this.formulario.resetForm();
          this.obtenerSiguienteIndice();
          this.reproducir();
        }
      }, {
        key: "esIgualVerbEntradaVerboRutina",
        value: function esIgualVerbEntradaVerboRutina(verboEntrada) {
          this.obtenerNumerosPalabras();
          return verboEntrada.toUpperCase() == this.usuario.sistema.temaSeleccionado.aprender.english[this.usuario.sistema.temaSeleccionado.aprender.indiceVerboRetrocesoTemporal].toUpperCase();
        }
      }, {
        key: "ingresarInformacionAprender",
        value: function ingresarInformacionAprender() {
          this.reproducir();
        }
      }, {
        key: "obtenerSiguienteIndice",
        value: function obtenerSiguienteIndice() {
          if (!this.estaRutinaCompletada()) {
            if (this.esIgualrIndiceVerboRetrocesoTemporalIndiceVerboValidar()) {
              if (this.esIgualRepeticionAlcaComoAprendioTemporalRepeticionAltaComoAprendido()) {
                this.actualizarVerbosAprendidos();
                this.actualizarBarraProgreso();
                this.usuario.sistema.temaSeleccionado.aprender.indiceVerboValidar++;
                this.usuario.sistema.temaSeleccionado.aprender.indiceVerboRetrocesoTemporal = 0;
                this.repeticionesAltaComoAprendidoTemporal = 0;
              } else {
                this.usuario.sistema.temaSeleccionado.aprender.indiceVerboRetrocesoTemporal = 0;
                this.repeticionesAltaComoAprendidoTemporal++;
              }
            } else {
              this.usuario.sistema.temaSeleccionado.aprender.indiceVerboRetrocesoTemporal++;
            }
          } else {
            console.log('------- Rutina Completada 2 --------');
          }
        }
      }, {
        key: "esIgualRepeticionAlcaComoAprendioTemporalRepeticionAltaComoAprendido",
        value: function esIgualRepeticionAlcaComoAprendioTemporalRepeticionAltaComoAprendido() {
          return this.repeticionesAltaComoAprendidoTemporal == this.usuario.sistema.temaSeleccionado.configuracion.repeticionesAltaComoAprendido;
        }
      }, {
        key: "esIgualrIndiceVerboRetrocesoTemporalIndiceVerboValidar",
        value: function esIgualrIndiceVerboRetrocesoTemporalIndiceVerboValidar() {
          return this.usuario.sistema.temaSeleccionado.aprender.indiceVerboRetrocesoTemporal == this.usuario.sistema.temaSeleccionado.aprender.indiceVerboValidar;
        }
      }, {
        key: "estaRutinaCompletada",
        value: function estaRutinaCompletada() {
          var rutinaCompletada = Array.from({
            length: this.usuario.sistema.temaSeleccionado.aprender.numeroVerbosAprender
          }, function (v, k) {
            return k;
          });
          var rutinaActual = this.usuario.sistema.temaSeleccionado.aprender.indicesVerbosAprendidos;

          if (this.isEmpty(rutinaActual)) {
            return false;
          }

          return JSON.stringify(rutinaCompletada.sort()) == JSON.stringify(rutinaActual.sort());
        }
      }, {
        key: "actualizarVerbosAprendidos",
        value: function actualizarVerbosAprendidos() {
          this.usuario.sistema.temaSeleccionado.aprender.indicesVerbosAprendidos.push(this.usuario.sistema.temaSeleccionado.aprender.indiceVerboValidar);
        }
      }, {
        key: "reproducir",
        value: function reproducir() {
          console.log("______________________Before___________________________"); //console.log(this.hoyRealizoAprender())
          //console.log(!this.hoyRealizoAprender())

          if (!this.hoyRealizoAprender()) {
            console.log("_________________________________________________");
            this.audioService.reproducir(this.usuario.sistema.temaSeleccionado.aprender.english[this.usuario.sistema.temaSeleccionado.aprender.indiceVerboRetrocesoTemporal]);
            this.spanishVerbo = this.usuario.sistema.temaSeleccionado.aprender.spanish[this.usuario.sistema.temaSeleccionado.aprender.indiceVerboRetrocesoTemporal];
            this.englishVerbo = this.usuario.sistema.temaSeleccionado.aprender.english[this.usuario.sistema.temaSeleccionado.aprender.indiceVerboRetrocesoTemporal];
            this.obtenerNumerosPalabras();
          }
        }
      }, {
        key: "reproducirSiguientePalabra",
        value: function reproducirSiguientePalabra() {
          this.audioService.reproducir(this.obtenerSiguientePalabra());
        }
      }, {
        key: "obtenerSiguientePalabra",
        value: function obtenerSiguientePalabra() {
          var arrayEsperado = this.usuario.sistema.temaSeleccionado.aprender.english[this.usuario.sistema.temaSeleccionado.aprender.indiceVerboRetrocesoTemporal].match(this.patt1);
          var arrayActual = this.verboEntrada == null || this.verboEntrada.trim() == '' ? [''] : this.verboEntrada.match(this.patt1);
          var i;
          var verbos = '';

          for (i = 0; i < arrayEsperado.length; i++) {
            if (i >= arrayActual.length) {
              break;
            }

            if (arrayEsperado[i].toUpperCase() != arrayActual[i].toUpperCase()) {
              break;
            }
          }

          for (var x = i; x < parseInt(i) + parseInt(this.cantidadVerbosReproducir.toString()) + 1; x++) {
            verbos = verbos + arrayEsperado[x] + ' ';
          }

          return verbos;
        }
      }, {
        key: "hoyRealizoAprender",
        value: function hoyRealizoAprender() {
          console.log("this.estaRutinaCompletada() " + this.estaRutinaCompletada());
          console.log("this.ultimaFechaAprendidaEsHoy() " + this.ultimaFechaAprendidaEsHoy());
          this.hoyYaRealizoAprender = this.estaRutinaCompletada() || this.ultimaFechaAprendidaEsHoy();
          return this.hoyYaRealizoAprender;
        }
      }, {
        key: "actualizarBarraProgreso",
        value: function actualizarBarraProgreso() {
          this.barraProgreso = this.usuario.sistema.temaSeleccionado.aprender.indicesVerbosAprendidos.length / this.usuario.sistema.temaSeleccionado.aprender.numeroVerbosAprender * 100;
        }
      }, {
        key: "mostrarAyuda",
        value: function mostrarAyuda() {
          var _this4 = this;

          this.activarAyuda = true;
          this.palabraActual = this.usuario.sistema.temaSeleccionado.aprender.english[this.usuario.sistema.temaSeleccionado.aprender.indiceVerboValidar];
          setTimeout(function () {
            _this4.activarAyuda = false;
          }, 3000);
        }
      }, {
        key: "mostrarSiguientePalabra",
        value: function mostrarSiguientePalabra() {
          var _this5 = this;

          this.activarAyuda = true;
          this.palabraActual = this.obtenerSiguientePalabra();
          setTimeout(function () {
            _this5.activarAyuda = false;
          }, 3000);
        }
      }, {
        key: "colorSegunValidacion",
        value: function colorSegunValidacion(verboEntrada) {
          if (verboEntrada.trim() == "") {
            this.colorSegunValidacionClass = 'border border-primary validacionVacia';
          } else if (this.usuario.sistema.temaSeleccionado.aprender.english[this.usuario.sistema.temaSeleccionado.aprender.indiceVerboRetrocesoTemporal].toUpperCase().includes(verboEntrada.toUpperCase())) {
            this.colorSegunValidacionClass = 'border border-success validacionExitosa';
          } else {
            this.colorSegunValidacionClass = 'border border-danger validacionError';
          }
        }
      }, {
        key: "obtenerNumerosPalabras",
        value: function obtenerNumerosPalabras() {
          this.hoyYaRealizoAprender = this.usuario.sistema.temaSeleccionado.realizadoHoy;

          if (!this.hoyYaRealizoAprender) {
            this.hoyYaRealizoAprender = this.usuario.sistema.temaSeleccionado.aprender.english.length <= 0;
          }

          if (!this.usuario.sistema.temaSeleccionado.realizadoHoy && this.usuario.sistema.temaSeleccionado.aprender.english.length > 0) {
            var arrayEsperado = this.usuario.sistema.temaSeleccionado.aprender.english[this.usuario.sistema.temaSeleccionado.aprender.indiceVerboRetrocesoTemporal].match(this.patt1);
            var arrayActual = this.verboEntrada == null || this.verboEntrada.trim() == '' ? [''] : this.verboEntrada.match(this.patt1);
            var i;
            var verbos = '';

            for (i = 0; i < arrayEsperado.length; i++) {
              if (i >= arrayActual.length) {
                break;
              }

              if (arrayEsperado[i].toUpperCase() != arrayActual[i].toUpperCase()) {
                break;
              }
            }

            this.numeroPalabras = arrayEsperado.length - i;
          }
        }
      }, {
        key: "ultimaFechaAprendidaEsHoy",
        value: function ultimaFechaAprendidaEsHoy() {
          return new Date(this.transformarDate(this.usuario.sistema.temaSeleccionado.configuracion.ultimaFechaAprendio)) >= new Date(this.transformarDate(Date.now()));
        }
      }, {
        key: "transformarDate",
        value: function transformarDate(date) {
          return new _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]('en-LA').transform(date, 'shortDate');
        }
      }]);

      return PresentVerbAprenderComponent;
    }();

    PresentVerbAprenderComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _present_verb_aprender_service__WEBPACK_IMPORTED_MODULE_3__["PresentVerbAprenderService"]
      }, {
        type: _comun_audio_audio_service__WEBPACK_IMPORTED_MODULE_5__["AudioService"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PresentVerbAprenderComponent.prototype, "hojaTemaExcel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('formulario', {
      "static": false
    })], PresentVerbAprenderComponent.prototype, "formulario", void 0);
    PresentVerbAprenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-present-verb-aprender',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./present-verb-aprender.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/present-verb-aprender/present-verb-aprender.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./present-verb-aprender.component.css */
      "./src/app/present-verb-aprender/present-verb-aprender.component.css"))["default"]]
    })], PresentVerbAprenderComponent);
    /***/
  },

  /***/
  "./src/app/present-verb-aprender/present-verb-aprender.service.ts":
  /*!************************************************************************!*\
    !*** ./src/app/present-verb-aprender/present-verb-aprender.service.ts ***!
    \************************************************************************/

  /*! exports provided: PresentVerbAprenderService */

  /***/
  function srcAppPresentVerbAprenderPresentVerbAprenderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PresentVerbAprenderService", function () {
      return PresentVerbAprenderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var PresentVerbAprenderService = /*#__PURE__*/function () {
      function PresentVerbAprenderService(http) {
        _classCallCheck(this, PresentVerbAprenderService);

        this.http = http;
        this.endpoint = 'https://boiling-forest-31476.herokuapp.com';
      }

      _createClass(PresentVerbAprenderService, [{
        key: "obtenerRutina",
        value: function obtenerRutina(ultimoIndiceVerboAprendido, numeroVerbosPorAprenderDiario, hojaTemaExcel) {
          return this.http.get(this.endpoint + "/api/present/verb/verbosporaprender/" + ultimoIndiceVerboAprendido + "/" + numeroVerbosPorAprenderDiario + "/" + hojaTemaExcel);
        }
      }, {
        key: "obtenerRutinaByConfiguracion",
        value: function obtenerRutinaByConfiguracion(tema) {
          return this.http.get(this.endpoint + "/api/present/verb/verbosporaprender/" + tema.configuracion.ultimoIndiceAprendido + "/" + tema.configuracion.numeroVerbosPorAprenderDiario + "/" + tema.indiceExcel);
        }
      }, {
        key: "obtenerRutinaByConfiguracions",
        value: function obtenerRutinaByConfiguracions(tema) {
          return this.http.get(this.endpoint + "/api/present/verb/verbosporaprender/" + tema.configuracion.ultimoIndiceAprendido + "/" + tema.configuracion.numeroVerbosPorAprenderDiario + "/" + tema.indiceExcel);
        }
      }, {
        key: "obtenerPerfilPorTema",
        value: function obtenerPerfilPorTema(usuario) {
          return this.http.get(this.endpoint + "/api/present/verb/perfil/" + usuario.correo + "/" + usuario.sistema.temaSeleccionado.tema);
        }
      }, {
        key: "actualizarPerfil",
        value: function actualizarPerfil(actualizarPerfilPresentVerb) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json; charset=utf-8'
            })
          };
          return this.http.post(this.endpoint + "/api/present/verb/tema", JSON.stringify(actualizarPerfilPresentVerb), httpOptions);
        }
      }, {
        key: "obtenerPreguntas",
        value: function obtenerPreguntas(ultimoIndiceVerboAprendido, numeroVerbosPorAprenderDiario, hojaTemaExcel) {
          return this.http.get(this.endpoint + "/api/present/verb/preguntas/" + ultimoIndiceVerboAprendido + "/" + numeroVerbosPorAprenderDiario + "/" + hojaTemaExcel);
        }
      }]);

      return PresentVerbAprenderService;
    }();

    PresentVerbAprenderService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    PresentVerbAprenderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PresentVerbAprenderService);
    /***/
  },

  /***/
  "./src/app/present-verb/opcion.ts":
  /*!****************************************!*\
    !*** ./src/app/present-verb/opcion.ts ***!
    \****************************************/

  /*! exports provided: Opcion */

  /***/
  function srcAppPresentVerbOpcionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Opcion", function () {
      return Opcion;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Opcion = function Opcion(descripcion, valido) {
      _classCallCheck(this, Opcion);

      this.descripcion = descripcion;
      this.valido = valido;
    };
    /***/

  },

  /***/
  "./src/app/present-verb/present-verb.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/present-verb/present-verb.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPresentVerbPresentVerbComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tp-section {\n    display: flex;\n    align-content: center;\n    align-items: center;\n    height: 60px;\n }\n\n .tp-margin {\n    margin: 0 10px;\n }\n\n .example-form {\n   height: 149px;\n}\n\n .em-tab{\n   width: 83%;\n}\n\n .tp-section {\n   display: flex;\n   align-content: center;\n   align-items: center;\n   height: 60px;\n}\n\n .tp-margin {\n   margin: 0 10px;\n}\n\n .example-form {\n  height: 149px;\n}\n\n .em-tab{\n   width: 83%;\n}\n\n .menu-container {\n  width: 20%;\n  background-color: cornflowerblue;\n}\n\n .theme{\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n  width: 15%;\n}\n\n .bar-container {\n  width: 75%;\n}\n\n .em-margin-input{\n  margin-top: 20px;\n}\n\n .validacionExitosa{\n  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);\n  color: black;\n  transform: translateY(-7px);\n}\n\n .validacionError{\n  box-shadow: 0px 15px 20px #ffb3b3;\n  color: black;\n  transform: translateY(-7px);\n}\n\n .validacionVacia{\n  box-shadow: 0px 15px 20px #80bfff;\n  color: black;\n  transform: translateY(-7px);\n}\n\n .em-nav button {\n  margin: 5px;\n}\n\n .mat-tab-list {\n   background-color: #007bff !important;\n}\n\n .verbos-reproducir{\n   width: 60px;\n}\n\n .container-reproducir-siguiente{\n  display: -webkit-inline-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlc2VudC12ZXJiL3ByZXNlbnQtdmVyYi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsWUFBWTtDQUNmOztDQUVBO0lBQ0csY0FBYztDQUNqQjs7Q0FHQTtHQUNFLGFBQWE7QUFDaEI7O0NBRUE7R0FDRyxVQUFVO0FBQ2I7O0NBRUE7R0FDRyxhQUFhO0dBQ2IscUJBQXFCO0dBQ3JCLG1CQUFtQjtHQUNuQixZQUFZO0FBQ2Y7O0NBRUE7R0FDRyxjQUFjO0FBQ2pCOztDQUVBO0VBQ0UsYUFBYTtBQUNmOztDQUVBO0dBQ0csVUFBVTtBQUNiOztDQUVBO0VBQ0UsVUFBVTtFQUNWLGdDQUFnQztBQUNsQzs7Q0FFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjs7Q0FFQTtFQUNFLFVBQVU7QUFDWjs7Q0FFQTtFQUNFLGdCQUFnQjtBQUNsQjs7Q0FFQTtFQUNFLGlEQUFpRDtFQUNqRCxZQUFZO0VBQ1osMkJBQTJCO0FBQzdCOztDQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7O0NBRUE7RUFDRSxpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLDJCQUEyQjtBQUM3Qjs7Q0FFQTtFQUNFLFdBQVc7QUFDYjs7Q0FFQTtHQUNHLG9DQUFvQztBQUN2Qzs7Q0FFQTtHQUNHLFdBQVc7QUFDZDs7Q0FFQTtFQUNFLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3ByZXNlbnQtdmVyYi9wcmVzZW50LXZlcmIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cC1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogNjBweDtcbiB9XG5cbiAudHAtbWFyZ2luIHtcbiAgICBtYXJnaW46IDAgMTBweDtcbiB9XG4gXG4gXG4gLmV4YW1wbGUtZm9ybSB7XG4gICBoZWlnaHQ6IDE0OXB4O1xufVxuXG4uZW0tdGFie1xuICAgd2lkdGg6IDgzJTtcbn1cblxuLnRwLXNlY3Rpb24ge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBoZWlnaHQ6IDYwcHg7XG59XG5cbi50cC1tYXJnaW4ge1xuICAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbi5leGFtcGxlLWZvcm0ge1xuICBoZWlnaHQ6IDE0OXB4O1xufVxuXG4uZW0tdGFie1xuICAgd2lkdGg6IDgzJTtcbn1cblxuLm1lbnUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDIwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XG59XG5cbi50aGVtZXtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcbiAgd2lkdGg6IDE1JTtcbn1cblxuLmJhci1jb250YWluZXIge1xuICB3aWR0aDogNzUlO1xufVxuXG4uZW0tbWFyZ2luLWlucHV0e1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4udmFsaWRhY2lvbkV4aXRvc2F7XG4gIGJveC1zaGFkb3c6IDBweCAxNXB4IDIwcHggcmdiYSg0NiwgMjI5LCAxNTcsIDAuNCk7XG4gIGNvbG9yOiBibGFjaztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03cHgpO1xufVxuXG4udmFsaWRhY2lvbkVycm9ye1xuICBib3gtc2hhZG93OiAwcHggMTVweCAyMHB4ICNmZmIzYjM7XG4gIGNvbG9yOiBibGFjaztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03cHgpO1xufVxuXG4udmFsaWRhY2lvblZhY2lhe1xuICBib3gtc2hhZG93OiAwcHggMTVweCAyMHB4ICM4MGJmZmY7XG4gIGNvbG9yOiBibGFjaztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03cHgpO1xufVxuXG4uZW0tbmF2IGJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4ubWF0LXRhYi1saXN0IHtcbiAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmYgIWltcG9ydGFudDtcbn1cblxuLnZlcmJvcy1yZXByb2R1Y2lye1xuICAgd2lkdGg6IDYwcHg7XG59XG5cbi5jb250YWluZXItcmVwcm9kdWNpci1zaWd1aWVudGV7XG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/present-verb/present-verb.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/present-verb/present-verb.component.ts ***!
    \********************************************************/

  /*! exports provided: PresentVerbComponent */

  /***/
  function srcAppPresentVerbPresentVerbComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PresentVerbComponent", function () {
      return PresentVerbComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _comun_audio_audio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../comun/audio/audio.service */
    "./src/app/comun/audio/audio.service.ts");
    /* harmony import */


    var _present_verb_aprender_present_verb_aprender_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../present-verb-aprender/present-verb-aprender.service */
    "./src/app/present-verb-aprender/present-verb-aprender.service.ts");
    /* harmony import */


    var _opcion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./opcion */
    "./src/app/present-verb/opcion.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _present_verb_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./present-verb.service */
    "./src/app/present-verb/present-verb.service.ts");

    var PresentVerbComponent = /*#__PURE__*/function () {
      function PresentVerbComponent(http, presentVerbService, presentVerbAprenderService, audioService, store) {
        _classCallCheck(this, PresentVerbComponent);

        this.http = http;
        this.presentVerbService = presentVerbService;
        this.presentVerbAprenderService = presentVerbAprenderService;
        this.audioService = audioService;
        this.store = store;
        this.barraProgreso = 0;
        this.colorBarraProgreso = 'alert alert-danger';
        this.colorSegunValidacionClass = 'border border-primary validacionVacia';
        this.cantidadVerbosReproducir = 0;
        this.patt1 = /\w+/g;
        this.hoyYaRealizoAprender = true;
        this.intentar = false;
        this.editable = true;
        this.showOptions = false;
        this.opciones = [];
        this.activarAyuda = false;
        this.palabraActual = '';
      }

      _createClass(PresentVerbComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {//this.obtenerRutina();
        }
      }, {
        key: "obtenerRutina",
        value: function obtenerRutina() {
          var _this6 = this;

          this.intentar = true;
          console.log(this.intentar);
          this.store.select('usuario').subscribe(function (usuario) {
            _this6.usuario = usuario;

            if (_this6.isEmpty(_this6.usuario.sistema.temaSeleccionado.rutina)) {
              _this6.hoyYaRealizoAprender = false;
            } else {
              _this6.hoyYaRealizoAprender = _this6.usuario.sistema.temaSeleccionado.rutina.english.length === 0;
            }

            if (_this6.intentar || _this6.isEmpty(_this6.usuario) || _this6.isEmpty(_this6.usuario.sistema.temaSeleccionado.rutina) || _this6.usuario.sistema.temaSeleccionado.tema !== usuario.sistema.temaSeleccionado.tema) {
              _this6.presentVerbAprenderService.obtenerPerfilPorTema(_this6.usuario).subscribe(function (configuracion) {
                _this6.usuario.sistema.temaSeleccionado.configuracion = configuracion;
              });

              _this6.presentVerbService.obtenerRutinaRepasoByConfiguracion(usuario.sistema.temaSeleccionado).subscribe(function (rutina) {
                rutina.numeroVerbosAprender = rutina.english.length;
                rutina.indiceVerboRetrocesoTemporal = 0;
                rutina.indiceVerboValidar = 0;
                rutina.indicesVerbosAprendidos = [];
                rutina.indicesVerbosRepasados = [];
                rutina.numeroVerbosRutina = rutina.english.length;
                usuario.sistema.temaSeleccionado.tipo = "B";
                usuario.sistema.temaSeleccionado.rutina = rutina;
                _this6.barraProgreso = 0;
                _this6.hoyYaRealizoAprender = _this6.usuario.sistema.temaSeleccionado.rutina.english.length === 0;
                _this6.intentar = false; //this.store.dispatch(temaSeleccionado({ temaSeleccionado: usuario.sistema.temaSeleccionado }));

                _this6.ingresarInformacionRutina();
              }, function (error) {}); // end

            }
          });
          console.log("************* Fin obtenerRutina ****************** ");
        }
      }, {
        key: "validarVerboEntredaConVerboRutina",
        value: function validarVerboEntredaConVerboRutina(verboEntrada) {
          var _this7 = this;

          if (this.estaRutinaCompletada()) {
            this.actualizarPerfil();
          } else if (this.esIgualVerbEntradaVerboRutina(verboEntrada)) {
            this.editable = false;
            this.showOptions = true;
            var cuatro = false;
            var indices = [];

            while (!cuatro) {
              var indiceAleatoreo = Math.floor(Math.random() * this.usuario.sistema.temaSeleccionado.rutina.numeroVerbosRutina) + 0;

              if (!indices.includes(indiceAleatoreo)) {
                indices.push(indiceAleatoreo);
              }

              if (indices.length == 4) {
                if (!indices.includes(this.usuario.sistema.temaSeleccionado.rutina.indiceVerboValidar)) {
                  indices = [];
                }
              }

              if (indices.length == 4) {
                break;
              }
            }

            this.opciones = [];
            indices.forEach(function (element) {
              _this7.opciones.push(new _opcion__WEBPACK_IMPORTED_MODULE_5__["Opcion"](_this7.usuario.sistema.temaSeleccionado.rutina.spanish[element], element));
            });
          }
        }
      }, {
        key: "validarTraductorSeleccionado",
        value: function validarTraductorSeleccionado(indiceOpcion) {
          var _this8 = this;

          if (indiceOpcion == this.usuario.sistema.temaSeleccionado.rutina.indiceVerboValidar) {
            this.actualizarVerbosAprendidos();
            this.obtenerIndiceAleatoreo();
            this.reproducir();
            this.actualizarBarraProgreso();

            if (this.estaRutinaCompletada()) {
              this.actualizarPerfil();
            }

            this.editable = true;
            this.showOptions = false;
            setTimeout(function () {
              _this8.formulario.resetForm();

              _this8.verboEntradaInput.nativeElement.focus();
            }, 1);
          }
        }
      }, {
        key: "handleKeyboardEvent",
        value: function handleKeyboardEvent(event) {
          this.key = event.key;

          if (this.showOptions) {
            document.getElementById(event.key).click();
          }

          if (this.key === "ArrowUp") {
            document.getElementById(event.key).click();
          }

          if (this.key === "ArrowLeft") {
            console.log(this.key);
          }

          if (this.key === "ArrowRight") {
            console.log(this.key);
          }

          if (this.key === "ArrowDown") {
            console.log(this.key);
          }
        }
      }, {
        key: "actualizarPerfil",
        value: function actualizarPerfil() {
          /*console.log("[actualizarPerfil]")
          this.actualizarUltimafecharutina = new ActualizarUltimafecharutina();
          //this.actualizarUltimafecharutina.correo = this.informacionSesionService.obtenerCorreo();
          this.actualizarUltimafecharutina.nombre = this.T[this.hojaTemaExcel['tema']].tema;
          console.log("[before]")
          this.presentVerbService.actualizarPerfil(this.actualizarUltimafecharutina).subscribe((exito) => {
          
          }, (error) => {
               });*/
        }
      }, {
        key: "esIgualVerbEntradaVerboRutina",
        value: function esIgualVerbEntradaVerboRutina(verboEntrada) {
          return verboEntrada.toUpperCase() == this.usuario.sistema.temaSeleccionado.rutina.english[this.usuario.sistema.temaSeleccionado.rutina.indiceVerboValidar].toUpperCase();
        }
      }, {
        key: "ingresarInformacionRutina",
        value: function ingresarInformacionRutina() {
          this.obtenerIndiceAleatoreo();
          this.reproducir();
        }
      }, {
        key: "obtenerIndiceAleatoreo",
        value: function obtenerIndiceAleatoreo() {
          var existeMasVerbosPorRepasar = true;

          while (existeMasVerbosPorRepasar) {
            if (this.estaRutinaCompletada()) {
              break;
            }

            var indiceAleatoreo = Math.floor(Math.random() * this.usuario.sistema.temaSeleccionado.rutina.numeroVerbosRutina) + 0;

            if (!this.usuario.sistema.temaSeleccionado.rutina.indicesVerbosRepasados.includes(indiceAleatoreo)) {
              this.usuario.sistema.temaSeleccionado.rutina.indiceVerboValidar = indiceAleatoreo;
              break;
            }
          }
        }
      }, {
        key: "estaRutinaCompletada",
        value: function estaRutinaCompletada() {
          var rutinaCompletada = Array.from({
            length: this.usuario.sistema.temaSeleccionado.rutina.numeroVerbosRutina
          }, function (v, k) {
            return k;
          });
          var rutinaActual = this.usuario.sistema.temaSeleccionado.rutina.indicesVerbosRepasados;

          if (this.isEmpty(rutinaActual)) {
            return false;
          }

          return JSON.stringify(rutinaCompletada.sort()) == JSON.stringify(rutinaActual.sort());
        }
      }, {
        key: "isEmpty",
        value: function isEmpty(obj) {
          if (obj === undefined) return true;
          return Object.keys(obj).length === 0;
        }
      }, {
        key: "actualizarVerbosAprendidos",
        value: function actualizarVerbosAprendidos() {
          this.usuario.sistema.temaSeleccionado.rutina.indicesVerbosRepasados.push(this.usuario.sistema.temaSeleccionado.rutina.indiceVerboValidar);
        }
      }, {
        key: "actualizarBarraProgreso",
        value: function actualizarBarraProgreso() {
          this.barraProgreso = this.usuario.sistema.temaSeleccionado.rutina.indicesVerbosRepasados.length / this.usuario.sistema.temaSeleccionado.rutina.numeroVerbosRutina * 100;
        }
      }, {
        key: "reproducir",
        value: function reproducir() {
          if (!this.estaRutinaCompletada()) {
            this.audioService.reproducir(this.usuario.sistema.temaSeleccionado.rutina.english[this.usuario.sistema.temaSeleccionado.rutina.indiceVerboValidar]);
            console.log("****************** reproducir ********************");
            console.log(this.usuario.sistema.temaSeleccionado.rutina.indiceVerboValidar); //console.log(this.usuario.sistema.temaSeleccionado)
          }
        }
      }, {
        key: "mostrarAyuda",
        value: function mostrarAyuda() {
          var _this9 = this;

          this.activarAyuda = true;
          this.palabraActual = this.usuario.sistema.temaSeleccionado.rutina.english[this.usuario.sistema.temaSeleccionado.rutina.indiceVerboValidar] + " / " + this.usuario.sistema.temaSeleccionado.rutina.spanish[this.usuario.sistema.temaSeleccionado.rutina.indiceVerboValidar];
          setTimeout(function () {
            _this9.activarAyuda = false;
          }, 3000);
        }
      }, {
        key: "colorSegunValidacion",
        value: function colorSegunValidacion(verboEntrada) {
          if (verboEntrada.trim() == "") {
            this.colorSegunValidacionClass = 'border border-primary validacionVacia';
          } else if (this.usuario.sistema.temaSeleccionado.rutina.english[this.usuario.sistema.temaSeleccionado.rutina.indiceVerboValidar].toUpperCase().includes(verboEntrada.toUpperCase())) {
            this.colorSegunValidacionClass = 'border border-success validacionExitosa';
          } else {
            this.colorSegunValidacionClass = 'border border-danger validacionError';
          }
        }
      }, {
        key: "reproducirSiguientePalabra",
        value: function reproducirSiguientePalabra() {
          this.audioService.reproducir(this.obtenerSiguientePalabra());
        }
      }, {
        key: "obtenerSiguientePalabra",
        value: function obtenerSiguientePalabra() {
          var arrayEsperado = this.usuario.sistema.temaSeleccionado.rutina.english[this.usuario.sistema.temaSeleccionado.rutina.indiceVerboRetrocesoTemporal].match(this.patt1);
          var arrayActual = this.verboEntrada == null || this.verboEntrada.trim() == '' ? [''] : this.verboEntrada.match(this.patt1);
          var i;
          var verbos = '';

          for (i = 0; i < arrayEsperado.length; i++) {
            if (i >= arrayActual.length) {
              break;
            }

            if (arrayEsperado[i].toUpperCase() != arrayActual[i].toUpperCase()) {
              break;
            }
          }

          for (var x = i; x < parseInt(i) + parseInt(this.cantidadVerbosReproducir.toString()) + 1; x++) {
            verbos = verbos + arrayEsperado[x] + ' ';
          }

          return verbos;
        }
      }, {
        key: "mostrarSiguientePalabra",
        value: function mostrarSiguientePalabra() {
          var _this10 = this;

          this.activarAyuda = true;
          this.palabraActual = this.obtenerSiguientePalabra();
          setTimeout(function () {
            _this10.activarAyuda = false;
          }, 3000);
        }
      }]);

      return PresentVerbComponent;
    }();

    PresentVerbComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _present_verb_service__WEBPACK_IMPORTED_MODULE_7__["PresentVerbService"]
      }, {
        type: _present_verb_aprender_present_verb_aprender_service__WEBPACK_IMPORTED_MODULE_4__["PresentVerbAprenderService"]
      }, {
        type: _comun_audio_audio_service__WEBPACK_IMPORTED_MODULE_3__["AudioService"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PresentVerbComponent.prototype, "hojaTemaExcel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('formulario', {
      "static": false
    })], PresentVerbComponent.prototype, "formulario", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PresentVerbComponent.prototype, "editable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PresentVerbComponent.prototype, "showOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("verboEntradaInput", {
      "static": false
    })], PresentVerbComponent.prototype, "verboEntradaInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])], PresentVerbComponent.prototype, "handleKeyboardEvent", null);
    PresentVerbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-present-verb',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./present-verb.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/present-verb/present-verb.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./present-verb.component.css */
      "./src/app/present-verb/present-verb.component.css"))["default"]]
    })], PresentVerbComponent);
    /***/
  },

  /***/
  "./src/app/present-verb/present-verb.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/present-verb/present-verb.service.ts ***!
    \******************************************************/

  /*! exports provided: PresentVerbService */

  /***/
  function srcAppPresentVerbPresentVerbServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PresentVerbService", function () {
      return PresentVerbService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var PresentVerbService = /*#__PURE__*/function () {
      function PresentVerbService(http) {
        _classCallCheck(this, PresentVerbService);

        this.http = http;
        this.endpoint = 'https://boiling-forest-31476.herokuapp.com';
      }

      _createClass(PresentVerbService, [{
        key: "obtenerRutinaRepasoByConfiguracion",
        value: function obtenerRutinaRepasoByConfiguracion(tema) {
          return this.http.get(this.endpoint + '/api/present/verb/' + tema.configuracion.ultimoIndiceAprendido + "/" + tema.indiceExcel);
        }
      }, {
        key: "obtenerRutina",
        value: function obtenerRutina(ultimoIndiceVerboAprendido, hojaTemaExcel) {
          return this.http.get(this.endpoint + '/api/present/verb/' + ultimoIndiceVerboAprendido + "/" + hojaTemaExcel);
        }
      }, {
        key: "obtenerPreguntasRutina",
        value: function obtenerPreguntasRutina(ultimoIndiceVerboAprendido, hojaTemaExcel) {
          return this.http.get(this.endpoint + '/api/present/verb/preguntas/' + ultimoIndiceVerboAprendido + "/" + hojaTemaExcel);
        }
      }, {
        key: "actualizarPerfil",
        value: function actualizarPerfil(actualizarUltimafecharutina) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json; charset=utf-8'
            })
          };
          return this.http.post(this.endpoint + "/api/present/verb/ultimafecharutina", JSON.stringify(actualizarUltimafecharutina), httpOptions);
        }
      }]);

      return PresentVerbService;
    }();

    PresentVerbService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    PresentVerbService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PresentVerbService);
    /***/
  },

  /***/
  "./src/app/principal/principal.component.css":
  /*!***************************************************!*\
    !*** ./src/app/principal/principal.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPrincipalPrincipalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-container-em {\n    width: 99%;\n    height: 700px;\n    margin: 10px;\n    border: 1px solid rgb(143, 136, 136);\n    background-color: black;\n  }\n  \n  .example-header {\n    width: 99%;\n    height: 70px;\n    margin: 10px;\n    border: 1px solid rgb(143, 136, 136);\n    background-color: black;\n  }\n  \n  .menu-container {\n      width: 20%;\n      background-color: black;\n  }\n  \n  .theme{\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff;\n    width: 15%;\n  }\n  \n  .map-ripple-element{\n    background-color: #007bff;\n  }\n  \n  .tabs-em {\n    color: #fff;\n  }\n  \n  .is-active {\n    background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpbmNpcGFsL3ByaW5jaXBhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLG9DQUFvQztJQUNwQyx1QkFBdUI7RUFDekI7O0VBRUE7TUFDSSxVQUFVO01BQ1YsdUJBQXVCO0VBQzNCOztFQUVBO0lBQ0UsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsVUFBVTtFQUNaOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvcHJpbmNpcGFsL3ByaW5jaXBhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyLWVtIHtcbiAgICB3aWR0aDogOTklO1xuICAgIGhlaWdodDogNzAwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNDMsIDEzNiwgMTM2KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgLmV4YW1wbGUtaGVhZGVyIHtcbiAgICB3aWR0aDogOTklO1xuICAgIGhlaWdodDogNzBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE0MywgMTM2LCAxMzYpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgLm1lbnUtY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAyMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgLnRoZW1le1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xuICAgIHdpZHRoOiAxNSU7XG4gIH1cblxuICAubWFwLXJpcHBsZS1lbGVtZW50e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gIH1cblxuICAudGFicy1lbSB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAuaXMtYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/principal/principal.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/principal/principal.component.ts ***!
    \**************************************************/

  /*! exports provided: PrincipalComponent */

  /***/
  function srcAppPrincipalPrincipalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function () {
      return PrincipalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _sesion_informacion_sesion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../sesion/informacion-sesion.service */
    "./src/app/sesion/informacion-sesion.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _dominio_usuario_usuario_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../dominio/usuario/usuario.actions */
    "./src/app/dominio/usuario/usuario.actions.ts");
    /* harmony import */


    var _present_verb_aprender_present_verb_aprender_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../present-verb-aprender/present-verb-aprender.service */
    "./src/app/present-verb-aprender/present-verb-aprender.service.ts");
    /* harmony import */


    var _dominio_usuario_usuario_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../dominio/usuario/usuario.model */
    "./src/app/dominio/usuario/usuario.model.ts");

    var PrincipalComponent = /*#__PURE__*/function () {
      function PrincipalComponent(router, informacionSesionService, store, presentVerbService) {
        _classCallCheck(this, PrincipalComponent);

        this.router = router;
        this.informacionSesionService = informacionSesionService;
        this.store = store;
        this.presentVerbService = presentVerbService;
        this.usuario = new _dominio_usuario_usuario_model__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
      }

      _createClass(PrincipalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.actualizarUsuario();
        }
      }, {
        key: "content",
        value: function content(tema) {
          var _this11 = this;

          if (tema.configuracion == null) {
            this.usuario.sistema.temaSeleccionado = tema;
            this.presentVerbService.obtenerPerfilPorTema(this.usuario).subscribe(function (configuracion) {
              tema.configuracion = configuracion;

              _this11.store.dispatch(Object(_dominio_usuario_usuario_actions__WEBPACK_IMPORTED_MODULE_5__["temaSeleccionado"])({
                temaSeleccionado: tema
              }));

              _this11.actualizarUsuario();
            });
          } else {
            this.store.dispatch(Object(_dominio_usuario_usuario_actions__WEBPACK_IMPORTED_MODULE_5__["temaSeleccionado"])({
              temaSeleccionado: tema
            }));
            this.actualizarUsuario();
          }
        }
      }, {
        key: "cerrarsesion",
        value: function cerrarsesion() {
          this.informacionSesionService.cerrarSession();
          this.router.navigate(['/login']);
        }
      }, {
        key: "colorSegunValidacion",
        value: function colorSegunValidacion(realizado) {
          if (realizado) {
            return 'btn-success';
          } else if (!realizado) {
            return 'btn-primary';
          }
        }
      }, {
        key: "actualizarUsuario",
        value: function actualizarUsuario() {
          var _this12 = this;

          this.store.select('usuario').subscribe(function (usuario) {
            _this12.usuario = usuario;
          });
        }
      }, {
        key: "isEmpty",
        value: function isEmpty(obj) {
          return Object.keys(obj).length === 0;
        }
      }]);

      return PrincipalComponent;
    }();

    PrincipalComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _sesion_informacion_sesion_service__WEBPACK_IMPORTED_MODULE_2__["InformacionSesionService"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
      }, {
        type: _present_verb_aprender_present_verb_aprender_service__WEBPACK_IMPORTED_MODULE_6__["PresentVerbAprenderService"]
      }];
    };

    PrincipalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-principal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./principal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/principal/principal.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./principal.component.css */
      "./src/app/principal/principal.component.css"))["default"]]
    })], PrincipalComponent);
    /***/
  },

  /***/
  "./src/app/principal/temas.service.ts":
  /*!********************************************!*\
    !*** ./src/app/principal/temas.service.ts ***!
    \********************************************/

  /*! exports provided: TemasService */

  /***/
  function srcAppPrincipalTemasServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemasService", function () {
      return TemasService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var TemasService = /*#__PURE__*/function () {
      function TemasService(http) {
        _classCallCheck(this, TemasService);

        this.http = http;
        this.endpoint = 'https://boiling-forest-31476.herokuapp.com';
      } // Validar y borrar


      _createClass(TemasService, [{
        key: "obtenerTemas",
        value: function obtenerTemas() {
          return this.http.get(this.endpoint + "/api/present/verb/temas/edwin.mendez@em.com.co");
        }
      }, {
        key: "getTemasByCorreo",
        value: function getTemasByCorreo(correo) {
          return this.http.get(this.endpoint + "/api/present/verb/temas/" + correo);
        }
      }]);

      return TemasService;
    }();

    TemasService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    TemasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TemasService);
    /***/
  },

  /***/
  "./src/app/registrer/registrer.component.css":
  /*!***************************************************!*\
    !*** ./src/app/registrer/registrer.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegistrerRegistrerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJlci9yZWdpc3RyZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/registrer/registrer.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/registrer/registrer.component.ts ***!
    \**************************************************/

  /*! exports provided: RegistrerComponent */

  /***/
  function srcAppRegistrerRegistrerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrerComponent", function () {
      return RegistrerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _registrer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./registrer.service */
    "./src/app/registrer/registrer.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _login_register__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../login/register */
    "./src/app/login/register.ts");

    var RegistrerComponent = /*#__PURE__*/function () {
      function RegistrerComponent(fb, registerServices, router) {
        _classCallCheck(this, RegistrerComponent);

        this.fb = fb;
        this.registerServices = registerServices;
        this.router = router;
      }

      _createClass(RegistrerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registrerFormGroup = this.fb.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            correo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "crearusuario",
        value: function crearusuario() {
          var _this13 = this;

          if (this.registrerFormGroup.invalid) return;
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Auto close alert!',
            didOpen: function didOpen() {
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.showLoading();
            }
          });
          var _this$registrerFormGr = this.registrerFormGroup.value,
              nombre = _this$registrerFormGr.nombre,
              correo = _this$registrerFormGr.correo,
              password = _this$registrerFormGr.password;
          this.registerServices.crearUsuario(nombre, correo, password).then(function (informacion) {
            console.log(informacion.user.uid);
            var perfil = new _login_register__WEBPACK_IMPORTED_MODULE_6__["Registrer"](informacion.user.uid, correo, password);

            _this13.registerServices.register(perfil).subscribe();

            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.close();

            _this13.router.navigate(['/login']);
          })["catch"](function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.message,
              footer: '<a href="">Why do I have this issue?</a>'
            });
          });
        }
      }, {
        key: "login",
        value: function login() {
          this.router.navigate(['/login']);
        }
      }]);

      return RegistrerComponent;
    }();

    RegistrerComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _registrer_service__WEBPACK_IMPORTED_MODULE_4__["RegistrerService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    RegistrerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registrer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./registrer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/registrer/registrer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./registrer.component.css */
      "./src/app/registrer/registrer.component.css"))["default"]]
    })], RegistrerComponent);
    /***/
  },

  /***/
  "./src/app/registrer/registrer.service.ts":
  /*!************************************************!*\
    !*** ./src/app/registrer/registrer.service.ts ***!
    \************************************************/

  /*! exports provided: RegistrerService */

  /***/
  function srcAppRegistrerRegistrerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrerService", function () {
      return RegistrerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");

    var RegistrerService = /*#__PURE__*/function () {
      function RegistrerService(http, auth) {
        _classCallCheck(this, RegistrerService);

        this.http = http;
        this.auth = auth;
        this.autenticarseUrl = 'https://boiling-forest-31476.herokuapp.com/api/present/verb/perfil';
      }

      _createClass(RegistrerService, [{
        key: "register",
        value: function register(perfil) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json; charset=utf-8'
            })
          };
          return this.http.post(this.autenticarseUrl, JSON.stringify(perfil), httpOptions);
        }
      }, {
        key: "crearUsuario",
        value: function crearUsuario(nombre, correo, password) {
          return this.auth.auth.createUserWithEmailAndPassword(correo, password);
        }
      }]);

      return RegistrerService;
    }();

    RegistrerService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }];
    };

    RegistrerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], RegistrerService);
    /***/
  },

  /***/
  "./src/app/sesion/informacion-present-verb.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/sesion/informacion-present-verb.service.ts ***!
    \************************************************************/

  /*! exports provided: InformacionPresentVerbService */

  /***/
  function srcAppSesionInformacionPresentVerbServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InformacionPresentVerbService", function () {
      return InformacionPresentVerbService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var ULTIMO_INDICE_VERBO_APRENDIDO = 'UltimoIndiceVerboAprendido';
    var NUMERO_VERBOS_POR_APRENDER_DIARIO = 'NumeroVerbosPorAprenderDiario';
    var REPETICIONES_ALTA_COMO_APRENDIDO = 'RepeticionesAltaComoAprendido';
    var ULTIMA_FECHA_APRENDIDO = 'UltimaFechaAprendio';
    var ES_PREGUNTA_RESPUESTA = 'EsPreguntaRespuesta';

    var InformacionPresentVerbService = /*#__PURE__*/function () {
      function InformacionPresentVerbService() {
        _classCallCheck(this, InformacionPresentVerbService);
      }

      _createClass(InformacionPresentVerbService, [{
        key: "guardarUltimoIndiceVerboAprendido",
        value: function guardarUltimoIndiceVerboAprendido(ultimoIndiceVerboAprendido) {
          window.sessionStorage.removeItem(ULTIMO_INDICE_VERBO_APRENDIDO);
          window.sessionStorage.setItem(ULTIMO_INDICE_VERBO_APRENDIDO, String(ultimoIndiceVerboAprendido));
        }
      }, {
        key: "obtenerUltimoIndiceVerboAprendido",
        value: function obtenerUltimoIndiceVerboAprendido() {
          return +sessionStorage.getItem(ULTIMO_INDICE_VERBO_APRENDIDO);
        }
      }, {
        key: "guardarNumeroVerbosPorAprenderDiario",
        value: function guardarNumeroVerbosPorAprenderDiario(numeroVerbosPorAprenderDiario) {
          window.sessionStorage.removeItem(NUMERO_VERBOS_POR_APRENDER_DIARIO);
          window.sessionStorage.setItem(NUMERO_VERBOS_POR_APRENDER_DIARIO, String(numeroVerbosPorAprenderDiario));
        }
      }, {
        key: "obtenerNumeroVerbosPorAprenderDiario",
        value: function obtenerNumeroVerbosPorAprenderDiario() {
          return +sessionStorage.getItem(NUMERO_VERBOS_POR_APRENDER_DIARIO);
        }
      }, {
        key: "guardarRepeticionesAltaComoAprendido",
        value: function guardarRepeticionesAltaComoAprendido(numeroVerbosPorAprenderDiario) {
          window.sessionStorage.removeItem(REPETICIONES_ALTA_COMO_APRENDIDO);
          window.sessionStorage.setItem(REPETICIONES_ALTA_COMO_APRENDIDO, String(numeroVerbosPorAprenderDiario));
        }
      }, {
        key: "obtenerRepeticionesAltaComoAprendido",
        value: function obtenerRepeticionesAltaComoAprendido() {
          return +sessionStorage.getItem(REPETICIONES_ALTA_COMO_APRENDIDO);
        }
      }, {
        key: "guardarUltimaFechaAprendio",
        value: function guardarUltimaFechaAprendio(ultimaFechaAprendio) {
          window.sessionStorage.removeItem(ULTIMA_FECHA_APRENDIDO);
          window.sessionStorage.setItem(ULTIMA_FECHA_APRENDIDO, String(ultimaFechaAprendio));
        }
      }, {
        key: "obtenerUltimaFechaAprendio",
        value: function obtenerUltimaFechaAprendio() {
          return sessionStorage.getItem(ULTIMA_FECHA_APRENDIDO);
        }
      }, {
        key: "guardarEsPreguntaRespuesta",
        value: function guardarEsPreguntaRespuesta(esPreguntaRespuesta) {
          window.sessionStorage.removeItem(ES_PREGUNTA_RESPUESTA);
          window.sessionStorage.setItem(ES_PREGUNTA_RESPUESTA, String(esPreguntaRespuesta));
        }
      }, {
        key: "obtenerEsPreguntaRespuesta",
        value: function obtenerEsPreguntaRespuesta() {
          return sessionStorage.getItem(ES_PREGUNTA_RESPUESTA) == 'true';
        }
      }, {
        key: "ultimaFechaAprendidaEsHoy",
        value: function ultimaFechaAprendidaEsHoy() {
          return new Date(this.transformarDate(this.obtenerUltimaFechaAprendio())) >= new Date(this.transformarDate(Date.now()));
        }
      }, {
        key: "transformarDate",
        value: function transformarDate(date) {
          return new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-LA').transform(date, 'shortDate');
        }
      }]);

      return InformacionPresentVerbService;
    }();

    InformacionPresentVerbService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], InformacionPresentVerbService);
    /***/
  },

  /***/
  "./src/app/sesion/informacion-sesion.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/sesion/informacion-sesion.service.ts ***!
    \******************************************************/

  /*! exports provided: InformacionSesionService */

  /***/
  function srcAppSesionInformacionSesionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InformacionSesionService", function () {
      return InformacionSesionService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _informacion_present_verb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./informacion-present-verb.service */
    "./src/app/sesion/informacion-present-verb.service.ts");

    var TOKEN_KEY = 'TokenAutorizacion';
    var USUARIO_KEY = 'UsuarioAutenticado';
    var AUTORIZACIONES_KEY = 'Autorizaciones';
    var CORREO_KEY = 'Correo';

    var InformacionSesionService = /*#__PURE__*/function (_informacion_present_) {
      _inherits(InformacionSesionService, _informacion_present_);

      var _super = _createSuper(InformacionSesionService);

      function InformacionSesionService(router) {
        var _this14;

        _classCallCheck(this, InformacionSesionService);

        _this14 = _super.call(this);
        _this14.router = router;
        _this14.roles = [];
        return _this14;
      }

      _createClass(InformacionSesionService, [{
        key: "cerrarSession",
        value: function cerrarSession() {
          window.sessionStorage.clear();
        }
      }, {
        key: "guardarToken",
        value: function guardarToken(token) {
          window.sessionStorage.removeItem(TOKEN_KEY);
          window.sessionStorage.setItem(TOKEN_KEY, token);
        }
      }, {
        key: "obtenerToken",
        value: function obtenerToken() {
          return sessionStorage.getItem(TOKEN_KEY);
        }
      }, {
        key: "guardarUsuario",
        value: function guardarUsuario(usuario) {
          window.sessionStorage.removeItem(USUARIO_KEY);
          window.sessionStorage.setItem(USUARIO_KEY, usuario);
        }
      }, {
        key: "obtenerUsuario",
        value: function obtenerUsuario() {
          return sessionStorage.getItem(USUARIO_KEY);
        }
      }, {
        key: "guardarAutorizaciones",
        value: function guardarAutorizaciones(autorizaciones) {
          window.sessionStorage.removeItem(AUTORIZACIONES_KEY);
          window.sessionStorage.setItem(AUTORIZACIONES_KEY, JSON.stringify(autorizaciones));
        }
      }, {
        key: "obtenerAutorizaciones",
        value: function obtenerAutorizaciones() {
          var _this15 = this;

          this.roles = [];

          if (sessionStorage.getItem(TOKEN_KEY)) {
            JSON.parse(sessionStorage.getItem(AUTORIZACIONES_KEY)).forEach(function (autorizacion) {
              _this15.roles.push(autorizacion.autorizacion);
            });
          }

          return this.roles;
        }
      }, {
        key: "requiereIniciarSesion",
        value: function requiereIniciarSesion() {//if(!this.obtenerToken()){
          //  this.router.navigate(['/login']);
          //}  
        }
      }, {
        key: "guardarCorreo",
        value: function guardarCorreo(correo) {
          window.sessionStorage.removeItem(CORREO_KEY);
          window.sessionStorage.setItem(CORREO_KEY, correo);
        }
      }, {
        key: "obtenerCorreo",
        value: function obtenerCorreo() {
          return sessionStorage.getItem(CORREO_KEY);
        }
      }]);

      return InformacionSesionService;
    }(_informacion_present_verb_service__WEBPACK_IMPORTED_MODULE_3__["InformacionPresentVerbService"]);

    InformacionSesionService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    InformacionSesionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], InformacionSesionService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: "AIzaSyCvVPZBsYjEEN5gEc8XdcLjEQQdz7oG9gA",
        authDomain: "em-learning-3d209.firebaseapp.com",
        projectId: "em-learning-3d209",
        storageBucket: "em-learning-3d209.appspot.com",
        messagingSenderId: "173073600361",
        appId: "1:173073600361:web:6c595afa898ce6f52af7f8",
        measurementId: "G-2YBTLJTQEE"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/usuario/Documentos/ejemplos/desarrollo/em-learning-frontend/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map