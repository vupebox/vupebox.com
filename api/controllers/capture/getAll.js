"use strict";

var _models = _interopRequireDefault(require("../../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getAll =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var captures, total, totalEspenditure, totalExpenditureCancel;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _models.default.Capture.find({});

          case 3:
            captures = _context.sent;
            _context.next = 6;
            return _models.default.CaptureProduct.aggregate([{
              $match: {}
            }, {
              $group: {
                _id: null,
                total: {
                  $sum: '$total'
                }
              }
            }]);

          case 6:
            total = _context.sent;
            _context.next = 9;
            return _models.default.Capture.aggregate([{
              $match: {}
            }, {
              $group: {
                _id: null,
                totalEspenditure: {
                  $sum: '$expenditure'
                }
              }
            }]);

          case 9:
            totalEspenditure = _context.sent;
            _context.next = 12;
            return _models.default.Capture.aggregate([{
              $match: {}
            }, {
              $group: {
                _id: null,
                totalExpenditureCancel: {
                  $sum: '$expenditureCancel'
                }
              }
            }]);

          case 12:
            totalExpenditureCancel = _context.sent;

            if (captures) {
              res.ok({
                captures: captures,
                total: total[0].total - totalEspenditure[0].totalEspenditure + totalExpenditureCancel[0].totalExpenditureCancel
              });
            } else {
              res.ok([]);
            }

            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            // console.log("error", error);
            res.error('Hubo un error al traer las capturas');

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 16]]);
  }));

  return function getAll(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = getAll;