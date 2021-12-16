function cov_6xrm7ksak() {
  var path = "/Users/loganvincent/turing/mod-4/projects/pew-fe/src/reducers/index.js";
  var hash = "979268ff71bcb0ad89b89c8e35f3916c8efc22df";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/loganvincent/turing/mod-4/projects/pew-fe/src/reducers/index.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 28
        },
        end: {
          line: 11,
          column: 1
        }
      },
      "1": {
        start: {
          line: 13,
          column: 26
        },
        end: {
          line: 38,
          column: 1
        }
      },
      "2": {
        start: {
          line: 14,
          column: 1
        },
        end: {
          line: 37,
          column: 2
        }
      },
      "3": {
        start: {
          line: 16,
          column: 5
        },
        end: {
          line: 16,
          column: 57
        }
      },
      "4": {
        start: {
          line: 18,
          column: 5
        },
        end: {
          line: 18,
          column: 56
        }
      },
      "5": {
        start: {
          line: 20,
          column: 5
        },
        end: {
          line: 20,
          column: 57
        }
      },
      "6": {
        start: {
          line: 22,
          column: 5
        },
        end: {
          line: 22,
          column: 56
        }
      },
      "7": {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 24,
          column: 55
        }
      },
      "8": {
        start: {
          line: 26,
          column: 6
        },
        end: {
          line: 26,
          column: 47
        }
      },
      "9": {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 28,
          column: 52
        }
      },
      "10": {
        start: {
          line: 30,
          column: 6
        },
        end: {
          line: 30,
          column: 54
        }
      },
      "11": {
        start: {
          line: 32,
          column: 6
        },
        end: {
          line: 32,
          column: 50
        }
      },
      "12": {
        start: {
          line: 36,
          column: 5
        },
        end: {
          line: 36,
          column: 17
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 26
          },
          end: {
            line: 13,
            column: 27
          }
        },
        loc: {
          start: {
            line: 13,
            column: 60
          },
          end: {
            line: 38,
            column: 1
          }
        },
        line: 13
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 27
          },
          end: {
            line: 13,
            column: 47
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 13,
            column: 35
          },
          end: {
            line: 13,
            column: 47
          }
        }],
        line: 13
      },
      "1": {
        loc: {
          start: {
            line: 14,
            column: 1
          },
          end: {
            line: 37,
            column: 2
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 15,
            column: 3
          },
          end: {
            line: 16,
            column: 57
          }
        }, {
          start: {
            line: 17,
            column: 3
          },
          end: {
            line: 18,
            column: 56
          }
        }, {
          start: {
            line: 19,
            column: 3
          },
          end: {
            line: 20,
            column: 57
          }
        }, {
          start: {
            line: 21,
            column: 3
          },
          end: {
            line: 22,
            column: 56
          }
        }, {
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 24,
            column: 55
          }
        }, {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 26,
            column: 47
          }
        }, {
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 28,
            column: 52
          }
        }, {
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 30,
            column: 54
          }
        }, {
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 32,
            column: 50
          }
        }, {
          start: {
            line: 35,
            column: 3
          },
          end: {
            line: 36,
            column: 17
          }
        }],
        line: 14
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0],
      "1": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "979268ff71bcb0ad89b89c8e35f3916c8efc22df"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_6xrm7ksak = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_6xrm7ksak();
import redux from 'redux';
export const initialState = (cov_6xrm7ksak().s[0]++, {
  activeTile: 0,
  totalPoints: 0,
  stepCount: 0,
  levelOneComplete: false,
  leaderBoard: [],
  currentPlayer: '',
  finalTime: null
});
cov_6xrm7ksak().s[1]++;
export const appReducer = (state = (cov_6xrm7ksak().b[0][0]++, initialState), action) => {
  cov_6xrm7ksak().f[0]++;
  cov_6xrm7ksak().s[2]++;

  switch (action.type) {
    case 'UP':
      cov_6xrm7ksak().b[1][0]++;
      cov_6xrm7ksak().s[3]++;
      return { ...state,
        activeTile: state.activeTile - 15
      };

    case 'RIGHT':
      cov_6xrm7ksak().b[1][1]++;
      cov_6xrm7ksak().s[4]++;
      return { ...state,
        activeTile: state.activeTile + 1
      };

    case 'DOWN':
      cov_6xrm7ksak().b[1][2]++;
      cov_6xrm7ksak().s[5]++;
      return { ...state,
        activeTile: state.activeTile + 15
      };

    case 'LEFT':
      cov_6xrm7ksak().b[1][3]++;
      cov_6xrm7ksak().s[6]++;
      return { ...state,
        activeTile: state.activeTile - 1
      };

    case 'STEP':
      cov_6xrm7ksak().b[1][4]++;
      cov_6xrm7ksak().s[7]++;
      return { ...state,
        stepCount: state.stepCount + 1
      };

    case 'LEVEL_ONE_COMPLETE':
      cov_6xrm7ksak().b[1][5]++;
      cov_6xrm7ksak().s[8]++;
      return { ...state,
        levelOneComplete: true
      };

    case 'GET_LEADER_BOARD':
      cov_6xrm7ksak().b[1][6]++;
      cov_6xrm7ksak().s[9]++;
      return { ...state,
        leaderBoard: action.payload
      };

    case 'CURRENT_PLAYER':
      cov_6xrm7ksak().b[1][7]++;
      cov_6xrm7ksak().s[10]++;
      return { ...state,
        currentPlayer: action.payload
      };

    case 'FINAL_TIME':
      cov_6xrm7ksak().b[1][8]++;
      cov_6xrm7ksak().s[11]++;
      return { ...state,
        finalTime: action.payload
      };
    // case 'ACTIVE_TILE_POINTS':
    //   return state.totalPoints + payload

    default:
      cov_6xrm7ksak().b[1][9]++;
      cov_6xrm7ksak().s[12]++;
      return state;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlZHV4IiwiaW5pdGlhbFN0YXRlIiwiYWN0aXZlVGlsZSIsInRvdGFsUG9pbnRzIiwic3RlcENvdW50IiwibGV2ZWxPbmVDb21wbGV0ZSIsImxlYWRlckJvYXJkIiwiY3VycmVudFBsYXllciIsImZpbmFsVGltZSIsImFwcFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBRUEsT0FBTyxNQUFNQyxZQUFZLDRCQUFHO0FBQzNCQyxFQUFBQSxVQUFVLEVBQUUsQ0FEZTtBQUUzQkMsRUFBQUEsV0FBVyxFQUFFLENBRmM7QUFHM0JDLEVBQUFBLFNBQVMsRUFBRSxDQUhnQjtBQUkzQkMsRUFBQUEsZ0JBQWdCLEVBQUUsS0FKUztBQUszQkMsRUFBQUEsV0FBVyxFQUFFLEVBTGM7QUFNM0JDLEVBQUFBLGFBQWEsRUFBRSxFQU5ZO0FBTzNCQyxFQUFBQSxTQUFTLEVBQUU7QUFQZ0IsQ0FBSCxDQUFsQjs7QUFVUCxPQUFPLE1BQU1DLFVBQVUsR0FBRyxDQUFDQyxLQUFLLCtCQUFHVCxZQUFILENBQU4sRUFBdUJVLE1BQXZCLEtBQWtDO0FBQUE7QUFBQTs7QUFDM0QsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0UsU0FBSyxJQUFMO0FBQUE7QUFBQTtBQUNFLGFBQU8sRUFBQyxHQUFHRixLQUFKO0FBQVdSLFFBQUFBLFVBQVUsRUFBRVEsS0FBSyxDQUFDUixVQUFOLEdBQW1CO0FBQTFDLE9BQVA7O0FBQ0YsU0FBSyxPQUFMO0FBQUE7QUFBQTtBQUNFLGFBQU8sRUFBQyxHQUFHUSxLQUFKO0FBQVdSLFFBQUFBLFVBQVUsRUFBRVEsS0FBSyxDQUFDUixVQUFOLEdBQW1CO0FBQTFDLE9BQVA7O0FBQ0YsU0FBSyxNQUFMO0FBQUE7QUFBQTtBQUNFLGFBQU8sRUFBQyxHQUFHUSxLQUFKO0FBQVdSLFFBQUFBLFVBQVUsRUFBRVEsS0FBSyxDQUFDUixVQUFOLEdBQW1CO0FBQTFDLE9BQVA7O0FBQ0YsU0FBSyxNQUFMO0FBQUE7QUFBQTtBQUNFLGFBQU8sRUFBQyxHQUFHUSxLQUFKO0FBQVdSLFFBQUFBLFVBQVUsRUFBRVEsS0FBSyxDQUFDUixVQUFOLEdBQW1CO0FBQTFDLE9BQVA7O0FBQ0QsU0FBSyxNQUFMO0FBQUE7QUFBQTtBQUNFLGFBQU8sRUFBQyxHQUFHUSxLQUFKO0FBQVdOLFFBQUFBLFNBQVMsRUFBRU0sS0FBSyxDQUFDTixTQUFOLEdBQWtCO0FBQXhDLE9BQVA7O0FBQ0YsU0FBSyxvQkFBTDtBQUFBO0FBQUE7QUFDRSxhQUFPLEVBQUMsR0FBR00sS0FBSjtBQUFXTCxRQUFBQSxnQkFBZ0IsRUFBRTtBQUE3QixPQUFQOztBQUNGLFNBQUssa0JBQUw7QUFBQTtBQUFBO0FBQ0UsYUFBTyxFQUFDLEdBQUdLLEtBQUo7QUFBV0osUUFBQUEsV0FBVyxFQUFFSyxNQUFNLENBQUNFO0FBQS9CLE9BQVA7O0FBQ0YsU0FBSyxnQkFBTDtBQUFBO0FBQUE7QUFDRSxhQUFPLEVBQUMsR0FBR0gsS0FBSjtBQUFXSCxRQUFBQSxhQUFhLEVBQUVJLE1BQU0sQ0FBQ0U7QUFBakMsT0FBUDs7QUFDRixTQUFLLFlBQUw7QUFBQTtBQUFBO0FBQ0UsYUFBTyxFQUFDLEdBQUdILEtBQUo7QUFBV0YsUUFBQUEsU0FBUyxFQUFFRyxNQUFNLENBQUNFO0FBQTdCLE9BQVA7QUFDSDtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUNFLGFBQU9ILEtBQVA7QUF0Qko7QUF3QkEsQ0F6Qk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVkdXggZnJvbSAncmVkdXgnXG4gXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuIGFjdGl2ZVRpbGU6IDAsXG4gdG90YWxQb2ludHM6IDAsXG4gc3RlcENvdW50OiAwLFxuIGxldmVsT25lQ29tcGxldGU6IGZhbHNlLFxuIGxlYWRlckJvYXJkOiBbXSxcbiBjdXJyZW50UGxheWVyOiAnJyxcbiBmaW5hbFRpbWU6IG51bGxcbn1cbiBcbmV4cG9ydCBjb25zdCBhcHBSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgIGNhc2UgJ1VQJzpcbiAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgYWN0aXZlVGlsZTogc3RhdGUuYWN0aXZlVGlsZSAtIDE1fVxuICAgY2FzZSAnUklHSFQnOlxuICAgICByZXR1cm4gey4uLnN0YXRlLCBhY3RpdmVUaWxlOiBzdGF0ZS5hY3RpdmVUaWxlICsgMX1cbiAgIGNhc2UgJ0RPV04nOlxuICAgICByZXR1cm4gey4uLnN0YXRlLCBhY3RpdmVUaWxlOiBzdGF0ZS5hY3RpdmVUaWxlICsgMTV9XG4gICBjYXNlICdMRUZUJzpcbiAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgYWN0aXZlVGlsZTogc3RhdGUuYWN0aXZlVGlsZSAtIDF9XG4gICAgY2FzZSAnU1RFUCc6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBzdGVwQ291bnQ6IHN0YXRlLnN0ZXBDb3VudCArIDF9XG4gICAgY2FzZSAnTEVWRUxfT05FX0NPTVBMRVRFJzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxldmVsT25lQ29tcGxldGU6IHRydWV9XG4gICAgY2FzZSAnR0VUX0xFQURFUl9CT0FSRCc6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBsZWFkZXJCb2FyZDogYWN0aW9uLnBheWxvYWR9XG4gICAgY2FzZSAnQ1VSUkVOVF9QTEFZRVInOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgY3VycmVudFBsYXllcjogYWN0aW9uLnBheWxvYWR9XG4gICAgY2FzZSAnRklOQUxfVElNRSc6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBmaW5hbFRpbWU6IGFjdGlvbi5wYXlsb2FkfVxuICAgLy8gY2FzZSAnQUNUSVZFX1RJTEVfUE9JTlRTJzpcbiAgIC8vICAgcmV0dXJuIHN0YXRlLnRvdGFsUG9pbnRzICsgcGF5bG9hZFxuICAgZGVmYXVsdDpcbiAgICAgcmV0dXJuIHN0YXRlXG4gfVxufVxuIl19