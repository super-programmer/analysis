
// tpl 1 单选
// tpl 2 多选
// tpl 3 判断
// tpl 4 填空
// tpl 5 问答
// tpl 6 复合题
// tpl 7 完形
import SectionToChinese from '@/common/common'
import http from '@/http'
export default {
  namespaced: true,
  state: {
    content: {
      'stgId': 2,
      'sbjId': 1,
      'authorId': 1041413,
      'authorName': '徐老师',
      'schoolId': 5,
      'createdOn': '2018-07-17T03:16:15.459+0000',
      'modifiedBy': 1041413,
      'modifiedOn': '2018-07-17T03:16:15.459+0000',
      'isDeleted': false,
      'paperId': 2184,
      'papType': 1,
      'title': '限时测验五分数',
      'year': null,
      'provId': null,
      'provName': null,
      'isDraft': false,
      'content': {
        'score': 0.00,
        'subjective': true,
        'sections': [{
          'score': 0.00,
          'subjective': true,
          'label': null,
          'groups': [
            {
              'gid': 1,
              'title': '多选判断题',
              'ord': 1,
              'label': null,
              'qtpId': 8,
              'subjective': false,
              'score': 0.00,
              'ques': [
                {
                  'resId': 1459,
                  'qid': 1856,
                  'subjective': false,
                  'score': 0.00,
                  'ord': 1,
                  'contents': {
                    '1': {
                      'qcid': 579,
                      'qid': 1856,
                      'uid': 1,
                      'score': 0.00
                    },
                    '3': {
                      'qcid': 580,
                      'qid': 1856,
                      'uid': 3,
                      'score': 0.00
                    },
                    '6': {
                      'qcid': 581,
                      'qid': 1856,
                      'uid': 6,
                      'score': 0.00
                    }
                  }
                }]
            },
            {
              'gid': 2,
              'title': '完形填空',
              'ord': 2,
              'label': null,
              'qtpId': 7,
              'subjective': false,
              'score': 0.00,
              'ques': [
                {
                  'resId': 832,
                  'qid': 1092,
                  'subjective': false,
                  'score': 0.00,
                  'ord': 2,
                  'contents': {
                    '1': {
                      'qcid': 307,
                      'qid': 1092,
                      'uid': 1,
                      'score': 0.00
                    },
                    '3': {
                      'qcid': 308,
                      'qid': 1092,
                      'uid': 3,
                      'score': 0.00
                    },
                    '4': {
                      'qcid': 309,
                      'qid': 1092,
                      'uid': 4,
                      'score': 0.00
                    },
                    '5': {
                      'qcid': 310,
                      'qid': 1092,
                      'uid': 5,
                      'score': 0.00
                    },
                    '6': {
                      'qcid': 311,
                      'qid': 1092,
                      'uid': 6,
                      'score': 0.00
                    },
                    '7': {
                      'qcid': 312,
                      'qid': 1092,
                      'uid': 7,
                      'score': 0.00
                    }
                  }
                }]
            }, {
              'gid': 3,
              'title': '阅读理解',
              'ord': 3,
              'label': null,
              'qtpId': 10,
              'subjective': false,
              'score': 0.00,
              'ques': [
                {
                  'resId': 834,
                  'qid': 1094,
                  'subjective': false,
                  'score': 0.00,
                  'ord': 3,
                  'contents': {
                    '1': {
                      'qcid': 318,
                      'qid': 1094,
                      'uid': 1,
                      'score': 0.00
                    },
                    '3': {
                      'qcid': 319,
                      'qid': 1094,
                      'uid': 3,
                      'score': 0.00
                    },
                    '15': {
                      'qcid': 321,
                      'qid': 1094,
                      'uid': 15,
                      'score': 0.00
                    },
                    '9': {
                      'qcid': 320,
                      'qid': 1094,
                      'uid': 9,
                      'score': 0.00
                    },
                    '21': {
                      'qcid': 322,
                      'qid': 1094,
                      'uid': 21,
                      'score': 0.00
                    }
                  }
                }]
            }, {
              'gid': 4,
              'title': '判断题',
              'ord': 4,
              'label': null,
              'qtpId': 3,
              'subjective': false,
              'score': 0.00,
              'ques': [{
                'resId': 1025,
                'qid': 1337,
                'subjective': false,
                'score': 0.00,
                'ord': 4,
                'contents': {
                  '1': {
                    'qcid': 412,
                    'qid': 1337,
                    'uid': 1,
                    'score': 0.00
                  }
                }
              }]
            }, {
              'gid': 5,
              'title': '综合题',
              'ord': 5,
              'label': null,
              'qtpId': 9,
              'subjective': true,
              'score': 0.00,
              'ques': [
                {
                  'resId': 1029,
                  'qid': 1341,
                  'subjective': true,
                  'score': 0.00,
                  'ord': 5,
                  'contents': {
                    '1': {
                      'qcid': 416,
                      'qid': 1341,
                      'uid': 1,
                      'score': 0.00
                    },
                    '3': {
                      'qcid': 417,
                      'qid': 1341,
                      'uid': 3,
                      'score': 0.00
                    },
                    '36': {
                      'qcid': 421,
                      'qid': 1341,
                      'uid': 36,
                      'score': 0.00
                    },
                    '26': {
                      'qcid': 420,
                      'qid': 1341,
                      'uid': 26,
                      'score': 0.00
                    },
                    '8': {
                      'qcid': 418,
                      'qid': 1341,
                      'uid': 8,
                      'score': 0.00
                    },
                    '19': {
                      'qcid': 419,
                      'qid': 1341,
                      'uid': 19,
                      'score': 0.00
                    }
                  },
                  'blanks': {
                    '33': {
                      'qid': 1341,
                      'uid': 33,
                      'score': 0.00
                    },
                    '34': {
                      'qid': 1341,
                      'uid': 34,
                      'score': 0.00
                    }
                  }
                }
              ]
            }, {
              'gid': 6,
              'title': '默写题',
              'ord': 6,
              'label': null,
              'qtpId': 13,
              'subjective': true,
              'score': 0.00,
              'ques': [{
                'resId': 1434,
                'qid': 1831,
                'subjective': true,
                'score': 0.00,
                'ord': 6,
                'contents': {
                  '1': {
                    'qcid': 565,
                    'qid': 1831,
                    'uid': 1,
                    'score': 0.00
                  }
                },
                'blanks': {
                  '3': {
                    'qid': 1831,
                    'uid': 3,
                    'score': 0.00
                  },
                  '4': {
                    'qid': 1831,
                    'uid': 4,
                    'score': 0.00
                  },
                  '5': {
                    'qid': 1831,
                    'uid': 5,
                    'score': 0.00
                  },
                  '6': {
                    'qid': 1831,
                    'uid': 6,
                    'score': 0.00
                  }
                }
              }]
            }, {
              'gid': 7,
              'title': '问答题',
              'ord': 7,
              'label': null,
              'qtpId': 5,
              'subjective': true,
              'score': 0.00,
              'ques': [{
                'resId': 1642,
                'qid': 2068,
                'subjective': true,
                'score': 0.00,
                'ord': 7,
                'contents': {
                  '1': {
                    'qcid': 725,
                    'qid': 2068,
                    'uid': 1,
                    'score': 0.00
                  }
                }
              }]
            }, {
              'gid': 8,
              'title': '单选题',
              'ord': 8,
              'label': null,
              'qtpId': 1,
              'subjective': false,
              'score': 0.00,
              'ques': [
                {
                  'resId': 1023,
                  'qid': 1335,
                  'subjective': false,
                  'score': 0.00,
                  'ord': 8,
                  'contents': {
                    '1': {
                      'qcid': 410,
                      'qid': 1335,
                      'uid': 1,
                      'score': 0.00
                    }
                  }
                },
                {
                  'resId': 912,
                  'qid': 1190,
                  'subjective': false,
                  'score': 0.00,
                  'ord': 9,
                  'contents': {
                    '1': {
                      'qcid': 342,
                      'qid': 1190,
                      'uid': 1,
                      'score': 0.00
                    }
                  }
                }
              ]
            }, {
              'gid': 9,
              'title': '多选题',
              'ord': 9,
              'label': null,
              'qtpId': 2,
              'subjective': false,
              'score': 0.00,
              'ques': [{
                'resId': 824,
                'qid': 1084,
                'subjective': false,
                'score': 0.00,
                'ord': 10,
                'contents': {
                  '1': {
                    'qcid': 304,
                    'qid': 1084,
                    'uid': 1,
                    'score': 0.00
                  }
                }
              }, {
                'resId': 917,
                'qid': 1196,
                'subjective': false,
                'score': 0.00,
                'ord': 11,
                'contents': {
                  '1': {
                    'qcid': 345,
                    'qid': 1196,
                    'uid': 1,
                    'score': 0.00
                  }
                }
              }]
            }, {
              'gid': 10,
              'title': '诗歌鉴赏',
              'ord': 10,
              'label': null,
              'qtpId': 21,
              'subjective': true,
              'score': 0.00,
              'ques': [{
                'resId': 1460,
                'qid': 1857,
                'subjective': true,
                'score': 0.00,
                'ord': 12,
                'contents': {
                  '1': {
                    'qcid': 582,
                    'qid': 1857,
                    'uid': 1,
                    'score': 0.00
                  },
                  '24': {
                    'qcid': 586,
                    'qid': 1857,
                    'uid': 24,
                    'score': 0.00
                  },
                  '3': {
                    'qcid': 583,
                    'qid': 1857,
                    'uid': 3,
                    'score': 0.00
                  },
                  '59': {
                    'qcid': 589,
                    'qid': 1857,
                    'uid': 59,
                    'score': 0.00
                  },
                  '17': {
                    'qcid': 585,
                    'qid': 1857,
                    'uid': 17,
                    'score': 0.00
                  },
                  '39': {
                    'qcid': 587,
                    'qid': 1857,
                    'uid': 39,
                    'score': 0.00
                  },
                  '8': {
                    'qcid': 584,
                    'qid': 1857,
                    'uid': 8,
                    'score': 0.00
                  },
                  '54': {
                    'qcid': 588,
                    'qid': 1857,
                    'uid': 54,
                    'score': 0.00
                  }
                },
                'blanks': {
                  '35': {
                    'qid': 1857,
                    'uid': 35,
                    'score': 0.00
                  },
                  '36': {
                    'qid': 1857,
                    'uid': 36,
                    'score': 0.00
                  },
                  '37': {
                    'qid': 1857,
                    'uid': 37,
                    'score': 0.00
                  },
                  '38': {
                    'qid': 1857,
                    'uid': 38,
                    'score': 0.00
                  },
                  '50': {
                    'qid': 1857,
                    'uid': 50,
                    'score': 0.00
                  },
                  '51': {
                    'qid': 1857,
                    'uid': 51,
                    'score': 0.00
                  },
                  '52': {
                    'qid': 1857,
                    'uid': 52,
                    'score': 0.00
                  },
                  '53': {
                    'qid': 1857,
                    'uid': 53,
                    'score': 0.00
                  }
                }
              }]
            }, {
              'gid': 11,
              'title': '听力题',
              'ord': 11,
              'label': null,
              'qtpId': 12,
              'subjective': false,
              'score': 0.00,
              'ques': [{
                'resId': 837,
                'qid': 1097,
                'subjective': false,
                'score': 0.00,
                'ord': 13,
                'contents': {
                  '1': {
                    'qcid': 323,
                    'qid': 1097,
                    'uid': 1,
                    'score': 0.00
                  },
                  '3': {
                    'qcid': 324,
                    'qid': 1097,
                    'uid': 3,
                    'score': 0.00
                  },
                  '14': {
                    'qcid': 326,
                    'qid': 1097,
                    'uid': 14,
                    'score': 0.00
                  },
                  '8': {
                    'qcid': 325,
                    'qid': 1097,
                    'uid': 8,
                    'score': 0.00
                  },
                  '19': {
                    'qcid': 327,
                    'qid': 1097,
                    'uid': 19,
                    'score': 0.00
                  }
                }
              }]
            }]
        }],
        'queNumPerGrp': false
      },
      'file': null,
      'src': null,
      'subjective': false,
      'estMinute': 0,
      'papTpl': 1,
      'settings': {
        'title': true,
        'subtitle': false,
        'mark': false,
        'area': false,
        'info': false,
        'input': false,
        'score': false,
        'attention': false,
        'sub': false,
        'subnotes': false,
        'big': true,
        'bigscore': false
      },
      'questions': {
        '1190': {
          'stgId': 2,
          'sbjId': 3,
          'authorId': 1041413,
          'authorName': '徐老师',
          'schoolId': 5,
          'createdOn': '2018-07-07T06:19:55.627+0000',
          'modifiedBy': 1041413,
          'modifiedOn': '2018-07-07T06:19:55.627+0000',
          'isDeleted': false,
          'tbkNodes': [{
            'attrs': {
              'stgId': 2,
              'sbjId': 3,
              'edtId': 32,
              'tbkId': 496,
              'tbkName': '七年级上'
            },
            'path': [{
              'id': 11040,
              'name': '七年级上'
            }]
          }],
          'qid': 1190,
          'seed': 8,
          'content': {
            'uid': 1,
            'qcid': 342,
            'qtpId': 1,
            'tpl': 1,
            'puid': 0,
            'label': '',
            'subjective': false,
            'exts': {
              'optPerLine': 1
            },
            'stem': '<p>英语英语单选单选请选择 A，有答案解析的哦</p>',
            'answer': 'A',
            'options': [{
              'uid': 3,
              'label': 'A',
              'option': '<p>单选单选</p>',
              'correct': true
            }, {
              'uid': 4,
              'label': 'B',
              'option': '<p>单选单选</p>',
              'correct': false
            }, {
              'uid': 5,
              'label': 'C',
              'option': '<p>单选单选</p>',
              'correct': false
            }, {
              'uid': 6,
              'label': 'D',
              'option': '<p>单选单选</p>',
              'correct': false
            }],
            'solutions': [{
              'uid': 7,
              'steps': ['<p>单选单选单选单选</p>']
            }]
          },
          'diff': 3,
          'estMinute': 0,
          'src': {
            'text': ''
          }
        },
        '1341': {
          'stgId': 2,
          'sbjId': 1,
          'authorId': 1041413,
          'authorName': '徐老师',
          'schoolId': 5,
          'createdOn': '2018-07-08T09:12:16.272+0000',
          'modifiedBy': 1041413,
          'modifiedOn': '2018-07-08T09:12:16.272+0000',
          'isDeleted': false,
          'tbkNodes': [{
            'attrs': {
              'stgId': 2,
              'sbjId': 1,
              'edtId': 1,
              'tbkId': 394,
              'tbkName': '七年级上册(2016部编）'
            },
            'path': [{
              'id': 7647,
              'name': '七年级上册(2016部编）'
            }]
          }],
          'qid': 1341,
          'seed': 42,
          'content': {
            'uid': 1,
            'qcid': 416,
            'qtpId': 9,
            'tpl': 6,
            'puid': 0,
            'label': '',
            'subjective': true,
            'exts': {
              'optPerLine': 1
            },
            'stem': '<p>语文综合题题干语文综合题题干语文综合题题干语文综合题题干语文综合题题干语文综合题题干</p>',
            'subs': [
              {
                'uid': 3,
                'qcid': 417,
                'qtpId': 1,
                'tpl': 1,
                'puid': 1,
                'label': '',
                'subjective': false,
                'stem': '<p>单选子题选择A</p>',
                'answer': 'A',
                'options': [
                  {
                    'uid': 4,
                    'label': 'A',
                    'option': '<p>选择A选择A</p>',
                    'correct': true
                  }, {
                    'uid': 5,
                    'label': 'B',
                    'option': '<p>选择A选择A</p>',
                    'correct': false
                  }, {
                    'uid': 6,
                    'label': 'C',
                    'option': '<p>选择A选择A</p>',
                    'correct': false
                  }, {
                    'uid': 7,
                    'label': 'D',
                    'option': '<p>选择A选择A</p>',
                    'correct': false
                  }],
                'solutions': [{
                  'uid': 13,
                  'steps': ['<p>选择A</p>']
                }]
              },
              {
                'uid': 8,
                'qcid': 418,
                'qtpId': 2,
                'tpl': 2,
                'puid': 1,
                'label': '',
                'subjective': false,
                'stem': '<p>多选子题选择ABCD</p>',
                'answer': 'ABCD',
                'options': [{
                  'uid': 14,
                  'label': 'A',
                  'option': '<p>选择ABCD</p>',
                  'correct': true
                }, {
                  'uid': 15,
                  'label': 'B',
                  'option': '<p>选择ABCD</p>',
                  'correct': true
                }, {
                  'uid': 16,
                  'label': 'C',
                  'option': '<p>选择ABCD</p>',
                  'correct': true
                }, {
                  'uid': 17,
                  'label': 'D',
                  'option': '<p>选择ABCD</p>',
                  'correct': true
                }],
                'solutions': [{
                  'uid': 18,
                  'steps': ['<p>选择ABCD</p>']
                }]
              },
              {
                'uid': 19,
                'qcid': 419,
                'qtpId': 3,
                'tpl': 3,
                'puid': 1,
                'label': '',
                'subjective': false,
                'stem': '<p>判断子题选择正确</p>',
                'answer': 'A',
                'options': [{
                  'uid': 24,
                  'label': 'A',
                  'option': '正确',
                  'correct': true
                }, {
                  'uid': 25,
                  'label': 'B',
                  'option': '错误',
                  'correct': false
                }],
                'solutions': [{
                  'uid': 31,
                  'steps': ['<p>选择正确</p>']
                }]
              },
              {
                'uid': 26,
                'qcid': 420,
                'qtpId': 4,
                'tpl': 4,
                'puid': 1,
                'label': '',
                'subjective': true,
                'stem': '<p>填空子题多个答案，中文英文，窗前<img class="c-insertblank-placeholder uid--editor_829811584407639001"/>明月光，疑是<img class="c-insertblank-placeholder uid--editor_829811584407639002"/>地上霜，举头望明月，低头思故乡</p>',
                'blanks': [{
                  'uid': 33,
                  'label': '空格1',
                  'blank': '明月',
                  'alts': ['mingyue']
                }, {
                  'uid': 34,
                  'label': '空格2',
                  'blank': '地上',
                  'alts': ['dishang']
                }],
                'solutions': [{
                  'uid': 35,
                  'steps': ['<p>明月 &nbsp;mingyue &nbsp;地上 &nbsp;dishang</p>']
                }]
              },
              {
                'uid': 36,
                'qcid': 421,
                'qtpId': 5,
                'tpl': 5,
                'puid': 1,
                'label': '',
                'subjective': true,
                'stem': '<p>问答子题问答子题问答子题问答子题v</p>',
                'answer': '<p>问答子题问答子题问答子题问答子题</p>',
                'solutions': [{
                  'uid': 41,
                  'steps': ['<p>问答子题问答子题问答子题问答子题</p>']
                }]
              }
            ]
          },
          'diff': 4,
          'estMinute': 0,
          'src': {
            'text': ''
          }
        },
        '1097': {
          'stgId': 2,
          'sbjId': 3,
          'authorId': 1041413,
          'authorName': '徐老师',
          'schoolId': 5,
          'createdOn': '2018-07-06T09:50:48.884+0000',
          'modifiedBy': 1041413,
          'modifiedOn': '2018-07-06T09:50:48.884+0000',
          'isDeleted': false,
          'tbkNodes': [{
            'attrs': {
              'stgId': 2,
              'sbjId': 3,
              'edtId': 32,
              'tbkId': 496,
              'tbkName': '七年级上'
            },
            'path': [{
              'id': 11040,
              'name': '七年级上'
            }]
          }],
          'qid': 1097,
          'seed': 25,
          'content': {
            'uid': 1,
            'qcid': 323,
            'qtpId': 12,
            'tpl': 6,
            'puid': 0,
            'label': '',
            'subjective': false,
            'exts': {
              'optPerLine': 1
            },
            'stem': '<p>英语听力题英语听力题英语听力题英语听力题全部选择D</p>',
            'subs': [{
              'uid': 3,
              'qcid': 324,
              'qtpId': 1,
              'tpl': 1,
              'puid': 1,
              'label': '',
              'subjective': false,
              'stem': '<p>听力题全部选择D</p>',
              'answer': 'D',
              'options': [{
                'uid': 4,
                'label': 'A',
                'option': '<p>听力题全部选择D听力题全部选择D听力题全部选择D</p>',
                'correct': false
              }, {
                'uid': 5,
                'label': 'B',
                'option': '<p>听力题全部选择D听力题全部选择D听力题全部选择D</p>',
                'correct': false
              }, {
                'uid': 6,
                'label': 'C',
                'option': '<p>听力题全部选择D听力题全部选择D听力题全部选择D</p>',
                'correct': false
              }, {
                'uid': 7,
                'label': 'D',
                'option': '<p>听力题全部选择D听力题全部选择D听力题全部选择D</p>',
                'correct': true
              }]
            }, {
              'uid': 8,
              'qcid': 325,
              'qtpId': 1,
              'tpl': 1,
              'puid': 1,
              'label': '',
              'subjective': false,
              'stem': '<p>听力题全部选择D听力题全部选择D听力题全部选择D</p>',
              'answer': 'D',
              'options': [{
                'uid': 9,
                'label': 'A',
                'option': '<p>听力题全部选择D听力题全部选择D</p>',
                'correct': false
              }, {
                'uid': 10,
                'label': 'B',
                'option': '<p>听力题全部选择D听力题全部选择D</p>',
                'correct': false
              }, {
                'uid': 11,
                'label': 'C',
                'option': '<p>听力题全部选择D听力题全部选择D</p>',
                'correct': false
              }, {
                'uid': 12,
                'label': 'D',
                'option': '<p>听力题全部选择D听力题全部选择D</p>',
                'correct': true
              }],
              'solutions': [{
                'uid': 13,
                'steps': ['<p>听力题全部选择D听力题全部选择D</p>']
              }]
            }, {
              'uid': 14,
              'qcid': 326,
              'qtpId': 1,
              'tpl': 1,
              'puid': 1,
              'label': '',
              'subjective': false,
              'stem': '<p>听力题全部选择D听力题全部选择D听力题全部选择D听力题全部选择D</p>',
              'answer': 'D',
              'options': [{
                'uid': 15,
                'label': 'A',
                'option': '<p>全部选择D</p>',
                'correct': false
              }, {
                'uid': 16,
                'label': 'B',
                'option': '<p>全部选择D</p>',
                'correct': false
              }, {
                'uid': 17,
                'label': 'C',
                'option': '<p>全部选择D</p>',
                'correct': false
              }, {
                'uid': 18,
                'label': 'D',
                'option': '<p>全部选择D</p>',
                'correct': true
              }]
            }, {
              'uid': 19,
              'qcid': 327,
              'qtpId': 1,
              'tpl': 1,
              'puid': 1,
              'label': '',
              'subjective': false,
              'stem': '<p>全部选择D</p>',
              'answer': 'D',
              'options': [{
                'uid': 20,
                'label': 'A',
                'option': '<p>D</p>',
                'correct': false
              }, {
                'uid': 21,
                'label': 'B',
                'option': '<p>D</p>',
                'correct': false
              }, {
                'uid': 22,
                'label': 'C',
                'option': '<p>D</p>',
                'correct': false
              }, {
                'uid': 23,
                'label': 'D',
                'option': '<p>D</p>',
                'correct': true
              }],
              'solutions': [{
                'uid': 24,
                'steps': ['<p>D</p>']
              }]
            }]
          },
          'diff': 1,
          'estMinute': 0,
          'src': {
            'text': ''
          }
        },
        '1196': {
          'stgId': 2,
          'sbjId': 3,
          'authorId': 1041413,
          'authorName': '徐老师',
          'schoolId': 5,
          'createdOn': '2018-07-07T06:23:03.687+0000',
          'modifiedBy': 1041413,
          'modifiedOn': '2018-07-07T06:23:03.687+0000',
          'isDeleted': false,
          'tbkNodes': [{
            'attrs': {
              'stgId': 2,
              'sbjId': 3,
              'edtId': 32,
              'tbkId': 496,
              'tbkName': '七年级上'
            },
            'path': [{
              'id': 11040,
              'name': '七年级上'
            }]
          }],
          'qid': 1196,
          'seed': 8,
          'content': {
            'uid': 1,
            'qcid': 345,
            'qtpId': 2,
            'tpl': 2,
            'puid': 0,
            'label': '',
            'subjective': false,
            'exts': {
              'optPerLine': 1
            },
            'stem': '<p>英语多选题英语多选题英语多选题英语多选题英语多选题英语多选题，有解析，答案为ABCD</p>',
            'answer': 'ABCD',
            'options': [{
              'uid': 3,
              'label': 'A',
              'option': '<p>英语多选题答案为ABCD</p>',
              'correct': true
            }, {
              'uid': 4,
              'label': 'B',
              'option': '<p>答案为ABCD</p>',
              'correct': true
            }, {
              'uid': 5,
              'label': 'C',
              'option': '<p>答案为ABCD</p>',
              'correct': true
            }, {
              'uid': 6,
              'label': 'D',
              'option': '<p>答案为ABCD</p>',
              'correct': true
            }],
            'solutions': [{
              'uid': 7,
              'steps': ['<p>答案为ABCD</p>']
            }]
          },
          'diff': 4,
          'estMinute': 0,
          'src': {
            'text': ''
          }
        },
        '1084': {
          'stgId': 2,
          'sbjId': 3,
          'authorId': 1041413,
          'authorName': '徐老师',
          'schoolId': 5,
          'createdOn': '2018-07-06T09:38:00.583+0000',
          'modifiedBy': 1041413,
          'modifiedOn': '2018-07-06T09:38:00.583+0000',
          'isDeleted': false,
          'tbkNodes': [{
            'attrs': {
              'stgId': 2,
              'sbjId': 3,
              'edtId': 32,
              'tbkId': 496,
              'tbkName': '七年级上'
            },
            'path': [{
              'id': 11040,
              'name': '七年级上'
            }]
          }],
          'qid': 1084,
          'seed': 8,
          'content': {
            'uid': 1,
            'qcid': 304,
            'qtpId': 2,
            'tpl': 2,
            'puid': 0,
            'label': '',
            'subjective': false,
            'exts': {
              'optPerLine': 1
            },
            'stem': '<p>英语多选题英语多选题英语多选题英语多选题英语多选题英语多选题英语多选题英语多选题英语多选题英语多选题英语多选题英语多选题英语多选题英语多选题英语多选题英语多选题英语多选题较易选ABCD</p>',
            'answer': 'ABCD',
            'options': [{
              'uid': 3,
              'label': 'A',
              'option': '<p>英语多选题英语多选题</p>',
              'correct': true
            }, {
              'uid': 4,
              'label': 'B',
              'option': '<p>英语多选题英语多选题</p>',
              'correct': true
            }, {
              'uid': 5,
              'label': 'C',
              'option': '<p>英语多选题英语多选题</p>',
              'correct': true
            }, {
              'uid': 6,
              'label': 'D',
              'option': '<p>英语多选题英语多选题</p>',
              'correct': true
            }],
            'solutions': [{
              'uid': 7,
              'steps': ['<p>英语多选题英语多选题英语多选题</p>']
            }]
          },
          'diff': 2,
          'estMinute': 0,
          'src': {
            'text': ''
          }
        },
        '1094': {
          'stgId': 2,
          'sbjId': 3,
          'authorId': 1041413,
          'authorName': '徐老师',
          'schoolId': 5,
          'createdOn': '2018-07-06T09:47:27.200+0000',
          'modifiedBy': 1041413,
          'modifiedOn': '2018-07-06T09:47:27.200+0000',
          'isDeleted': false,
          'tbkNodes': [{
            'attrs': {
              'stgId': 2,
              'sbjId': 3,
              'edtId': 32,
              'tbkId': 496,
              'tbkName': '七年级上'
            },
            'path': [{
              'id': 11040,
              'name': '七年级上'
            }]
          }],
          'qid': 1094,
          'seed': 26,
          'content': {
            'uid': 1,
            'qcid': 318,
            'qtpId': 10,
            'tpl': 6,
            'puid': 0,
            'label': '',
            'subjective': false,
            'exts': {
              'optPerLine': 1
            },
            'stem': '<p>英语阅读理解困难全部选择C &nbsp; &nbsp;英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C英语阅读理解困难全部选择C</p>',
            'subs': [{
              'uid': 3,
              'qcid': 319,
              'qtpId': 1,
              'tpl': 1,
              'puid': 1,
              'label': '',
              'subjective': false,
              'stem': '<p>英语阅读理解困难全部选择C</p>',
              'answer': 'C',
              'options': [{
                'uid': 4,
                'label': 'A',
                'option': '<p>选择C</p>',
                'correct': false
              }, {
                'uid': 5,
                'label': 'B',
                'option': '<p>选择C</p>',
                'correct': false
              }, {
                'uid': 6,
                'label': 'C',
                'option': '<p>选择C</p>',
                'correct': true
              }, {
                'uid': 7,
                'label': 'D',
                'option': '<p>选择C</p>',
                'correct': false
              }],
              'solutions': [{
                'uid': 8,
                'steps': ['<p>英语阅读理解困难全部选择C</p>']
              }]
            }, {
              'uid': 9,
              'qcid': 320,
              'qtpId': 1,
              'tpl': 1,
              'puid': 1,
              'label': '',
              'subjective': false,
              'stem': '<p>英语阅读理解困难全部选择C</p>',
              'answer': 'C',
              'options': [{
                'uid': 10,
                'label': 'A',
                'option': '<p>选择C</p>',
                'correct': false
              }, {
                'uid': 11,
                'label': 'B',
                'option': '<p>选择C</p>',
                'correct': false
              }, {
                'uid': 12,
                'label': 'C',
                'option': '<p>选择C</p>',
                'correct': true
              }, {
                'uid': 13,
                'label': 'D',
                'option': '<p>选择C</p>',
                'correct': false
              }],
              'solutions': [{
                'uid': 14,
                'steps': ['<p>英语阅读理解困难全部选择C</p>']
              }]
            }, {
              'uid': 15,
              'qcid': 321,
              'qtpId': 1,
              'tpl': 1,
              'puid': 1,
              'label': '',
              'subjective': false,
              'stem': '<p>英语阅读理解困难全部选择C</p>',
              'answer': 'C',
              'options': [{
                'uid': 16,
                'label': 'A',
                'option': '<p>全部选择C</p>',
                'correct': false
              }, {
                'uid': 17,
                'label': 'B',
                'option': '<p>全部选择C</p>',
                'correct': false
              }, {
                'uid': 18,
                'label': 'C',
                'option': '<p>全部选择C</p>',
                'correct': true
              }, {
                'uid': 19,
                'label': 'D',
                'option': '<p>全部选择C</p>',
                'correct': false
              }],
              'solutions': [{
                'uid': 20,
                'steps': ['<p>英语阅读理解困难全部选择C</p>']
              }]
            }, {
              'uid': 21,
              'qcid': 322,
              'qtpId': 1,
              'tpl': 1,
              'puid': 1,
              'label': '',
              'subjective': false,
              'stem': '<p>英语阅读理解困难全部选择C</p>',
              'answer': 'C',
              'options': [{
                'uid': 22,
                'label': 'A',
                'option': '<p>C</p>',
                'correct': false
              }, {
                'uid': 23,
                'label': 'B',
                'option': '<p>C</p>',
                'correct': false
              }, {
                'uid': 24,
                'label': 'C',
                'option': '<p>C</p>',
                'correct': true
              }, {
                'uid': 25,
                'label': 'D',
                'option': '<p>C</p>',
                'correct': false
              }]
            }]
          },
          'diff': 5,
          'estMinute': 0,
          'src': {
            'text': ''
          }
        },
        '1092': {
          'stgId': 2,
          'sbjId': 3,
          'authorId': 1041413,
          'authorName': '徐老师',
          'schoolId': 5,
          'createdOn': '2018-07-06T09:42:08.221+0000',
          'modifiedBy': 1041413,
          'modifiedOn': '2018-07-06T09:42:08.221+0000',
          'isDeleted': false,
          'tbkNodes': [{
            'attrs': {
              'stgId': 2,
              'sbjId': 3,
              'edtId': 32,
              'tbkId': 496,
              'tbkName': '七年级上'
            },
            'path': [{
              'id': 11040,
              'name': '七年级上'
            }]
          }],
          'qid': 1092,
          'seed': 9,
          'content': {
            'uid': 1,
            'qcid': 307,
            'qtpId': 7,
            'tpl': 7,
            'puid': 0,
            'label': '',
            'subjective': false,
            'exts': {
              'optPerLine': 1
            },
            'stem': '<p>全部选择D &nbsp; &nbsp; &nbsp;英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难全部选择D</p>',
            'solutions': [{
              'uid': 8,
              'steps': ['<p>英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难英语完形填空较难</p>']
            }],
            'subs': [
              {
                'uid': 3,
                'qcid': 308,
                'qtpId': 1,
                'tpl': 1,
                'puid': 1,
                'label': '',
                'subjective': false,
                'answer': 'D',
                'options': [
                  {
                    'uid': 4,
                    'label': 'A',
                    'option': '英语完形填空较难',
                    'correct': false
                  }, {
                    'uid': 5,
                    'label': 'B',
                    'option': '英语完形填空较难',
                    'correct': false
                  }, {
                    'uid': 6,
                    'label': 'C',
                    'option': '英语完形填空较难',
                    'correct': false
                  }, {
                    'uid': 7,
                    'label': 'D',
                    'option': '英语完形填空较难',
                    'correct': true
                  }]
              },
              {
                'uid': 4,
                'qcid': 309,
                'qtpId': 1,
                'tpl': 1,
                'puid': 1,
                'label': '',
                'subjective': false,
                'answer': 'D',
                'options': [{
                  'uid': 5,
                  'label': 'A',
                  'option': '英语完形填空较难',
                  'correct': false
                }, {
                  'uid': 6,
                  'label': 'B',
                  'option': '英语完形填空较难',
                  'correct': false
                }, {
                  'uid': 7,
                  'label': 'C',
                  'option': '英语完形填空较难',
                  'correct': false
                }, {
                  'uid': 8,
                  'label': 'D',
                  'option': '英语完形填空较难',
                  'correct': true
                }]
              },
              {
                'uid': 5,
                'qcid': 310,
                'qtpId': 1,
                'tpl': 1,
                'puid': 1,
                'label': '',
                'subjective': false,
                'answer': 'D',
                'options': [{
                  'uid': 6,
                  'label': 'A',
                  'option': '英语完形填空较难',
                  'correct': false
                }, {
                  'uid': 7,
                  'label': 'B',
                  'option': '英语完形填空较难',
                  'correct': false
                }, {
                  'uid': 8,
                  'label': 'C',
                  'option': '英语完形填空较难',
                  'correct': false
                }, {
                  'uid': 9,
                  'label': 'D',
                  'option': '英语完形填空较难',
                  'correct': true
                }]
              },
              {
                'uid': 6,
                'qcid': 311,
                'qtpId': 1,
                'tpl': 1,
                'puid': 1,
                'label': '',
                'subjective': false,
                'answer': 'D',
                'options': [{
                  'uid': 7,
                  'label': 'A',
                  'option': '英语完形填空较难',
                  'correct': false
                }, {
                  'uid': 8,
                  'label': 'B',
                  'option': '英语完形填空较难',
                  'correct': false
                }, {
                  'uid': 9,
                  'label': 'C',
                  'option': '英语完形填空较难',
                  'correct': false
                }, {
                  'uid': 10,
                  'label': 'D',
                  'option': '英语完形填空较难',
                  'correct': true
                }]
              },
              {
                'uid': 7,
                'qcid': 312,
                'qtpId': 1,
                'tpl': 1,
                'puid': 1,
                'label': '',
                'subjective': false,
                'answer': 'D',
                'options': [{
                  'uid': 8,
                  'label': 'A',
                  'option': '英语完形填空较难',
                  'correct': false
                }, {
                  'uid': 9,
                  'label': 'B',
                  'option': '英语完形填空较难',
                  'correct': false
                }, {
                  'uid': 10,
                  'label': 'C',
                  'option': '英语完形填空较难',
                  'correct': false
                }, {
                  'uid': 11,
                  'label': 'D',
                  'option': '英语完形填空较难',
                  'correct': true
                }]
              }
              ]
          },
          'diff': 4,
          'estMinute': 0,
          'src': {
            'text': ''
          }
        },
        '1337': {
          'stgId': 2,
          'sbjId': 1,
          'authorId': 1041413,
          'authorName': '徐老师',
          'schoolId': 5,
          'createdOn': '2018-07-08T08:59:48.849+0000',
          'modifiedBy': 1041413,
          'modifiedOn': '2018-07-08T08:59:48.849+0000',
          'isDeleted': false,
          'tbkNodes': [{
            'attrs': {
              'stgId': 2,
              'sbjId': 1,
              'edtId': 1,
              'tbkId': 394,
              'tbkName': '七年级上册(2016部编）'
            },
            'path': [{
              'id': 7647,
              'name': '七年级上册(2016部编）'
            }]
          }],
          'qid': 1337,
          'seed': 6,
          'content': {
            'uid': 1,
            'qcid': 412,
            'qtpId': 3,
            'tpl': 3,
            'puid': 0,
            'label': '',
            'subjective': false,
            'exts': {
              'optPerLine': 1
            },
            'stem': '<p>语文判断题选择正确的</p>',
            'answer': 'A',
            'options': [{
              'uid': 3,
              'label': 'A',
              'option': '正确',
              'correct': true
            }, {
              'uid': 4,
              'label': 'B',
              'option': '错误',
              'correct': false
            }],
            'solutions': [{
              'uid': 5,
              'steps': ['<p>正确的</p>']
            }]
          },
          'diff': 3,
          'estMinute': 0,
          'src': {
            'text': ''
          }
        },
        '1831': {
          'stgId': 2,
          'sbjId': 1,
          'authorId': 1041413,
          'authorName': '徐老师',
          'schoolId': 5,
          'createdOn': '2018-07-12T03:37:22.751+0000',
          'modifiedBy': 1041413,
          'modifiedOn': '2018-07-12T03:37:22.751+0000',
          'isDeleted': false,
          'tbkNodes': [{
            'attrs': {
              'stgId': 2,
              'sbjId': 1,
              'edtId': 1,
              'tbkId': 394,
              'tbkName': '七年级上册(2016部编）'
            },
            'path': [{
              'id': 7647,
              'name': '七年级上册(2016部编）'
            }]
          }],
          'qid': 1831,
          'seed': 9,
          'content': {
            'uid': 1,
            'qcid': 565,
            'qtpId': 13,
            'tpl': 4,
            'puid': 0,
            'label': '',
            'subjective': true,
            'exts': {
              'optPerLine': 1
            },
            'stem': '<p>默写题，手动批改，中英文，窗前<img class="c-insertblank-placeholder uid--editor_934162346679750401"/>明月光，疑是<img class="c-insertblank-placeholder uid--editor_934162346679750402"/>地上霜，<img class="c-insertblank-placeholder uid--editor_934162346679750403"/>举头望明月，低头思<img class="c-insertblank-placeholder uid--editor_934162346679750404"/>故乡</p>',
            'blanks': [{
              'uid': 3,
              'label': '空格1',
              'blank': 'mingyue',
              'alts': ['明月']
            }, {
              'uid': 4,
              'label': '空格2',
              'blank': '地上',
              'alts': ['dishang']
            }, {
              'uid': 5,
              'label': '空格3',
              'blank': 'jutou',
              'alts': ['举头']
            }, {
              'uid': 6,
              'label': '空格4',
              'blank': 'guxiang',
              'alts': ['故乡']
            }],
            'solutions': [{
              'uid': 7,
              'steps': ['<p>默写题，手动批改，中英文</p>', '<p>默写题，手动批改，中英文1</p>']
            }, {
              'uid': 8,
              'steps': ['<p>默写题，手动批改，中英文2</p>']
            }]
          },
          'diff': 3,
          'estMinute': 0,
          'src': {
            'text': ''
          }
        },
        '1335': {
          'stgId': 2,
          'sbjId': 1,
          'authorId': 1041413,
          'authorName': '徐老师',
          'schoolId': 5,
          'createdOn': '2018-07-08T08:58:38.328+0000',
          'modifiedBy': 1041413,
          'modifiedOn': '2018-07-08T08:58:38.328+0000',
          'isDeleted': false,
          'tbkNodes': [{
            'attrs': {
              'stgId': 2,
              'sbjId': 1,
              'edtId': 1,
              'tbkId': 394,
              'tbkName': '七年级上册(2016部编）'
            },
            'path': [{
              'id': 7647,
              'name': '七年级上册(2016部编）'
            }]
          }],
          'qid': 1335,
          'seed': 8,
          'content': {
            'uid': 1,
            'qcid': 410,
            'qtpId': 1,
            'tpl': 1,
            'puid': 0,
            'label': '',
            'subjective': false,
            'exts': {
              'optPerLine': 1
            },
            'stem': '<p>语文单选题选择A</p>',
            'answer': 'A',
            'options': [{
              'uid': 3,
              'label': 'A',
              'option': '<p>选择A选择A选择A选择A选择A选择A选择A选择A选择A选择A选择A</p>',
              'correct': true
            }, {
              'uid': 4,
              'label': 'B',
              'option': '<p>选择A选择A选择A选择A选择A选择A选择A选择A选择A选择A选择A选择A选择A选择A选择A选择A</p>',
              'correct': false
            }, {
              'uid': 5,
              'label': 'C',
              'option': '<p>选择A选择A选择A选择A选择A选择A选择A选择A选择A选择A选择A</p>',
              'correct': false
            }, {
              'uid': 6,
              'label': 'D',
              'option': '<p>选择A选择A选择A选择A选择A选择A选择A选择A选择A选择A选择A选择A选择A</p>',
              'correct': false
            }],
            'solutions': [{
              'uid': 7,
              'steps': ['<p>选择A选择A选择A选择A选择A选择A选择A选择A选择A</p>']
            }]
          },
          'diff': 1,
          'estMinute': 0,
          'src': {
            'text': ''
          }
        },
        '2068': {
          'stgId': 2,
          'sbjId': 1,
          'authorId': 1041413,
          'authorName': '徐老师',
          'schoolId': 5,
          'createdOn': '2018-07-14T08:22:52.944+0000',
          'modifiedBy': 1041413,
          'modifiedOn': '2018-07-14T08:22:52.944+0000',
          'isDeleted': false,
          'qid': 2068,
          'seed': 4,
          'content': {
            'uid': 1,
            'qcid': 725,
            'qtpId': 5,
            'tpl': 5,
            'puid': 0,
            'label': '',
            'subjective': true,
            'exts': {
              'optPerLine': 1
            },
            'stem': '<p><img src="http://fs.yunguiedu.com/group1/M00/00/2C/wKgKjFtJszGAMyC5AAMAzRf7CaQ727.jpg"/></p>',
            'answer': '<p><img src="http://fs.yunguiedu.com/group1/M00/00/2C/wKgKjFtJszeACDWXAAA7_WRpFQE426.jpg"/><img src="http://fs.yunguiedu.com/group1/M00/00/2C/wKgKjFtJszyARBstAAMAzRf7CaQ738.jpg"/></p>',
            'solutions': [{
              'uid': 3,
              'steps': ['']
            }]
          },
          'diff': 4,
          'estMinute': 0,
          'src': {
            'text': ''
          }
        },
        '1857': {
          'stgId': 1,
          'sbjId': 1,
          'authorId': 1041413,
          'authorName': '徐老师',
          'schoolId': 5,
          'createdOn': '2018-07-12T03:58:20.977+0000',
          'modifiedBy': 1041413,
          'modifiedOn': '2018-07-12T03:58:20.977+0000',
          'isDeleted': false,
          'qid': 1857,
          'seed': 66,
          'content': {
            'uid': 1,
            'qcid': 582,
            'qtpId': 21,
            'tpl': 6,
            'puid': 0,
            'label': '',
            'subjective': true,
            'exts': {
              'optPerLine': 1
            },
            'stem': '<p>诗歌鉴赏，窗前明月光，疑是地上霜，举头望明月，低头思故乡</p>',
            'subs': [
              {
                'uid': 3,
                'qcid': 583,
                'qtpId': 1,
                'tpl': 1,
                'puid': 1,
                'label': '',
                'subjective': false,
                'stem': '<p>单选题子题选择A</p>',
                'answer': 'A',
                'options': [{
                  'uid': 4,
                  'label': 'A',
                  'option': '<p>选择A 单选题子题单选题子题单选题子题单选题子题单选题子题单选题子题单选题子题单选题子题单选题子题</p>',
                  'correct': true
                }, {
                  'uid': 5,
                  'label': 'B',
                  'option': '<p>单选题子题单选题子题单选题子题单选题子题单选题子题单选题子题单选题子题单选题子题单选题子题</p>',
                  'correct': false
                }, {
                  'uid': 6,
                  'label': 'C',
                  'option': '<p>单选题子题单选题子题单选题子题单选题子题单选题子题单选题子题单选题子题单选题子题单选题子题</p>',
                  'correct': false
                }, {
                  'uid': 7,
                  'label': 'D',
                  'option': '<p>单选题子题单选题子题单选题子题单选题子题单选题子题单选题子题单选题子题单选题子题单选题子题</p>',
                  'correct': false
                }]
              },
              {
                'uid': 8,
                'qcid': 584,
                'qtpId': 2,
                'tpl': 2,
                'puid': 1,
                'label': '',
                'subjective': false,
                'stem': '<p>多选题子题，选择ABCD</p>',
                'answer': 'ABCD',
                'options': [{
                  'uid': 13,
                  'label': 'A',
                  'option': '<p>多选题子题，选择ABCD多选题子题，选择ABCD</p>',
                  'correct': true
                }, {
                  'uid': 14,
                  'label': 'B',
                  'option': '<p>多选题子题，选择ABCD多选题子题，选择ABCD</p>',
                  'correct': true
                }, {
                  'uid': 15,
                  'label': 'C',
                  'option': '<p>多选题子题，选择ABCD多选题子题，选择ABCD多选题子题，选择ABCD多选题子题，选择ABCD多选题子题，选择ABCD多选题子题，选择ABCD多选题子题，选择ABCD</p>',
                  'correct': true
                }, {
                  'uid': 16,
                  'label': 'D',
                  'option': '<p>多选题子题，选择ABCD多选题子题，选择ABCD多选题子题，选择ABCD多选题子题，选择ABCD多选题子题，选择ABCD多选题子题，选择ABCD多选题子题，选择ABCD多选题子题，选择ABCD多选题子题，选择ABCD</p>',
                  'correct': true
                }]
              },
              {
                'uid': 17,
                'qcid': 585,
                'qtpId': 3,
                'tpl': 3,
                'puid': 1,
                'label': '',
                'subjective': false,
                'stem': '<p>子题判断题，选择正确</p>',
                'answer': 'A',
                'options': [{
                  'uid': 22,
                  'label': 'A',
                  'option': '正确',
                  'correct': true
                }, {
                  'uid': 23,
                  'label': 'B',
                  'option': '错误',
                  'correct': false
                }]
              },
              {
                'uid': 24,
                'qcid': 586,
                'qtpId': 4,
                'tpl': 4,
                'puid': 1,
                'label': '',
                'subjective': true,
                'stem': '<p>窗前<img class="c-insertblank-placeholder uid--editor_332289701682761301"/>明月光，疑是<img class="c-insertblank-placeholder uid--editor_332289701682761302"/>地上霜，举头望<img class="c-insertblank-placeholder uid--editor_332289701682761303"/>明月，低头思<img class="c-insertblank-placeholder uid--editor_332289701682761304"/>故乡</p>',
                'blanks': [{
                  'uid': 35,
                  'label': '空格1',
                  'blank': '明月'
                }, {
                  'uid': 36,
                  'label': '空格2',
                  'blank': '地上'
                }, {
                  'uid': 37,
                  'label': '空格3',
                  'blank': '明月'
                }, {
                  'uid': 38,
                  'label': '空格4',
                  'blank': '故乡'
                }]
              },
              {
                'uid': 39,
                'qcid': 587,
                'qtpId': 4,
                'tpl': 4,
                'puid': 1,
                'label': '',
                'subjective': true,
                'stem': '<p>窗前<img class="c-insertblank-placeholder uid--editor_346129140873272101"/>明月光，疑是<img class="c-insertblank-placeholder uid--editor_346129140873272102"/>地上霜，举头望<img class="c-insertblank-placeholder uid--editor_346129140873272103"/>明月，低头思<img class="c-insertblank-placeholder uid--editor_346129140873272104"/>故乡</p>',
                'blanks': [{
                  'uid': 50,
                  'label': '空格1',
                  'blank': '明月'
                }, {
                  'uid': 51,
                  'label': '空格2',
                  'blank': '地上'
                }, {
                  'uid': 52,
                  'label': '空格3',
                  'blank': '明月'
                }, {
                  'uid': 53,
                  'label': '空格4',
                  'blank': '故乡'
                }]
              },
              {
                'uid': 54,
                'qcid': 588,
                'qtpId': 5,
                'tpl': 5,
                'puid': 1,
                'label': '',
                'subjective': true,
                'stem': '<p>子题问答题</p>',
                'answer': '<p>子题问答题</p>'
              },
              {
                'uid': 59,
                'qcid': 589,
                'qtpId': 3,
                'tpl': 3,
                'puid': 1,
                'label': '',
                'subjective': false,
                'stem': '<p>子题判断题，选正确</p>',
                'answer': 'A',
                'options': [{
                  'uid': 64,
                  'label': 'A',
                  'option': '正确',
                  'correct': true
                }, {
                  'uid': 65,
                  'label': 'B',
                  'option': '错误',
                  'correct': false
                }]
              }
            ]
          },
          'diff': 4,
          'estMinute': 0,
          'src': {
            'text': ''
          }
        },
        '1856': {
          'stgId': 2,
          'sbjId': 1,
          'authorId': 1041413,
          'authorName': '徐老师',
          'schoolId': 5,
          'createdOn': '2018-07-12T03:54:20.525+0000',
          'modifiedBy': 1041413,
          'modifiedOn': '2018-07-12T03:54:20.525+0000',
          'isDeleted': false,
          'qid': 1856,
          'seed': 10,
          'content': {
            'uid': 1,
            'qcid': 579,
            'qtpId': 8,
            'tpl': 6,
            'puid': 0,
            'label': '',
            'subjective': false,
            'exts': {
              'optPerLine': 1
            },
            'stem': '<p>多选判断题，窗前明月光，疑是地上霜，举头望明月，低头思故乡</p>',
            'subs': [
              {
                'uid': 3,
                'qcid': 580,
                'qtpId': 3,
                'tpl': 3,
                'puid': 1,
                'label': '',
                'subjective': false,
                'stem': '<p>多选判断题，选择正确</p>',
                'answer': 'A',
                'options': [{
                  'uid': 4,
                  'label': 'A',
                  'option': '正确',
                  'correct': true
                }, {
                  'uid': 5,
                  'label': 'B',
                  'option': '错误',
                  'correct': false
                }],
                'solutions': [{
                  'uid': 9,
                  'steps': ['<p>多选判断题，选择正确</p>']
                }]
              },
              {
                'uid': 6,
                'qcid': 581,
                'qtpId': 3,
                'tpl': 3,
                'puid': 1,
                'label': '',
                'subjective': false,
                'stem': '<p>多选判断题，选择正确</p>',
                'answer': 'A',
                'options': [{
                  'uid': 7,
                  'label': 'A',
                  'option': '正确',
                  'correct': true
                }, {
                  'uid': 8,
                  'label': 'B',
                  'option': '错误',
                  'correct': false
                }]
              }]
          },
          'diff': 4,
          'estMinute': 0,
          'src': {
            'text': ''
          }
        }
      }
    },
    gradeData: {}
  },
  getters: {
    state (state) {
      return state
    }
  },
  mutations: {
    GETORIN (state, data) {
      state.content = data.content
    },
    GETGRADE (state, data) {
      state.gradeData = data
    }
  },
  actions: {
    initPaper ({commit}, data) {
      return new Promise((resolve, reject) => {
        let option = {
          method: 'get',
          url: `repository/resource/${data.resId}/paper/${data.refId}`
        }
        http.axiosRequest(option).then((res) => {
          if (res) {
            // 阿拉伯数字转换
            res.data.content.sections[0].groups.map((item) => {
              item.ord = SectionToChinese(item.ord)
            })
            commit('GETORIN', res.data)
            resolve()
          }
        })
        if (data.type === 'tea') {
          let option = {
            method: 'get',
            url: `work/home/tasks/${data.taskId}/analy2/ques`
          }
          http.axiosRequest(option).then((res) => {
            if (res) {
              commit('GETGRADE', res.data)
              resolve()
            }
          })
        }
      })
    }
  }
}
