function cov_2pq2lu1w1j() {
  var path = "/Users/loganvincent/turing/mod-4/projects/pew-fe/src/store/store.js";
  var hash = "23f7ab8d71ad44cf1a3be79c0df06add663dab35";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/loganvincent/turing/mod-4/projects/pew-fe/src/store/store.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 14
        },
        end: {
          line: 5,
          column: 74
        }
      },
      "1": {
        start: {
          line: 7,
          column: 0
        },
        end: {
          line: 7,
          column: 52
        }
      },
      "2": {
        start: {
          line: 7,
          column: 22
        },
        end: {
          line: 7,
          column: 51
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 16
          },
          end: {
            line: 7,
            column: 17
          }
        },
        loc: {
          start: {
            line: 7,
            column: 22
          },
          end: {
            line: 7,
            column: 51
          }
        },
        line: 7
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "23f7ab8d71ad44cf1a3be79c0df06add663dab35"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2pq2lu1w1j = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2pq2lu1w1j();
import redux, { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { appReducer, initialState } from '../reducers';
const store = (cov_2pq2lu1w1j().s[0]++, createStore(appReducer, initialState, composeWithDevTools()));
cov_2pq2lu1w1j().s[1]++;
store.subscribe(() => {
  cov_2pq2lu1w1j().f[0]++;
  cov_2pq2lu1w1j().s[2]++;
  return console.log(store.getState());
});
export default store;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbInJlZHV4IiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwUmVkdWNlciIsImluaXRpYWxTdGF0ZSIsInN0b3JlIiwic3Vic2NyaWJlIiwiY29uc29sZSIsImxvZyIsImdldFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPQSxLQUFQLElBQWdCQyxXQUFoQixRQUFtQyxPQUFuQztBQUNBLFNBQVNDLG1CQUFULFFBQW9DLDBCQUFwQztBQUNBLFNBQVFDLFVBQVIsRUFBb0JDLFlBQXBCLFFBQXVDLGFBQXZDO0FBRUEsTUFBTUMsS0FBSyw2QkFBR0osV0FBVyxDQUFDRSxVQUFELEVBQWFDLFlBQWIsRUFBMkJGLG1CQUFtQixFQUE5QyxDQUFkLENBQVg7O0FBRUFHLEtBQUssQ0FBQ0MsU0FBTixDQUFnQixNQUFNO0FBQUE7QUFBQTtBQUFBLFNBQUFDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFLLENBQUNJLFFBQU4sRUFBWjtBQUE2QixDQUFuRDtBQUVBLGVBQWVKLEtBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVkdXgsIHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXG5pbXBvcnQge2FwcFJlZHVjZXIsIGluaXRpYWxTdGF0ZX0gZnJvbSAnLi4vcmVkdWNlcnMnXG4gXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKGFwcFJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgY29tcG9zZVdpdGhEZXZUb29scygpKVxuIFxuc3RvcmUuc3Vic2NyaWJlKCgpID0+IGNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkpKVxuIFxuZXhwb3J0IGRlZmF1bHQgc3RvcmVcbiJdfQ==