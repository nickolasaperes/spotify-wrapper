"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HEADERS = exports.API_URL = void 0;
var TOKEN_API = 'BQCXa_lgJqrjhdtK1SqVAtML5KbJHnCVi0yM3_WB2z0NLLUrnVGzycK07CgHfgG-0c8wnHvncg81F0FXgbUfcCng6Dhvs-BkV2CCRrBfVZ32N8OWrR6OPiDYTJLuUvIZDpq0zVSTB6V9epapa-Pol_ldbkvtt6s';
var API_URL = 'https://api.spotify.com/v1';
exports.API_URL = API_URL;
var HEADERS = {
  headers: {
    Authorization: "Bearer ".concat(TOKEN_API)
  }
};
exports.HEADERS = HEADERS;