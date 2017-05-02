'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _set2 = require('lodash/set');

var _set3 = _interopRequireDefault(_set2);

var _unset2 = require('lodash/unset');

var _unset3 = _interopRequireDefault(_unset2);

var _loadConfig = require('./util/load-config');

var _loadConfig2 = _interopRequireDefault(_loadConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.version = require('../package.json').version; /**
                                                       * @Author: Zhengfeng.Yao <yzf>
                                                       * @Date:   2017-04-25 16:26:24
                                                       * @Last modified by:   yzf
                                                       * @Last modified time: 2017-04-25 16:59:40
                                                       */

exports.webpackVersion = require('webpack/package.json').version;

var Config = function Config(options) {
  (0, _classCallCheck3.default)(this, Config);

  this.config = (0, _loadConfig2.default)(options);
};

exports.Config = Config;
//# sourceMappingURL=index.js.map