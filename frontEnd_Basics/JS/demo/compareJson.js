let utils = {
  /**
   * 比较两个json（新json与老json）的不同,并返回 不同时的旧值(old_val)和新值(new_val)
   * @param {*} json1 老json
   * @param {*} json2 新json
   */
  diff(json1, json2) {
    if (!json1 || this.isEmptyObject(json1) || !json2 || this.isEmptyObject(json2)) {
      return null;
    }
    let diffRes = {
      old_val: {},
      new_val: {}
    };
    for (let k in json2) {
      // 判断数据类型是否一致
      if (this.getTypeByObj(json2[k]) === this.getTypeByObj(json1[k])) {
        // 比较 “Array”和“Object”类型
        if (this.getTypeByObj(json2[k]) === 'Array' || this.getTypeByObj(json2[k]) === 'Object') {
          const diffData = this.diff(json1[k], json2[k]);
          if (!this.isEmptyObject(diffData)) {
            diffRes.old_val[k] = diffData.old_val;
            diffRes.new_val[k] = diffData.new_val;
          }
        } else if (json1[k] !== json2[k]) { // 比较其他类型数据
          diffRes.old_val[k] = json1[k];
          diffRes.new_val[k] = json2[k];
        }
      } else {
        diffRes.old_val[k] = json1[k];
        diffRes.new_val[k] = json2[k];
      }
    }
    // 若没有变化，返回null
    if (this.isEmptyObject(diffRes.old_val) || this.isEmptyObject(diffRes.new_val)) {
      return null;
    }
    return diffRes;
  },
  /**
   * 获取数据类型
   * @param {*} obj
   */
  getTypeByObj(obj) {
    return Object.prototype.toString.call(obj).match(/^\[object ([a-zA-Z]*)\]$/)[1];
  },
  /**
   * 判断是否是空对象
   * @param {*} obj
   */
  isEmptyObject(obj) {
    for (var key in obj) {
      return false;
    };
    return true;
  }
}


let json1=
  {
    "INDUSTRY_BIN": 10,
    "DEFAULT_100": "bjaec",
    "DEFAULT_ISSUE_100": 7,
    "HH_INCOME": 2,
    "RENT_OWN": 10,
    "AGE": 8,
    "CARD_LEVEL": "aekcd",
    "ACQU_CHANNEL": "fgdie",
    "HOUSING_TYP": 7,
    "SCORE_AAPLIC": 3,
    "HOME_VALUE": 7,
    "N_INQUIRIES_30": 5,
    "N_INQUIRIES_60": 4,
    "N_INQUIRIES_90": 3,
    "NEW_LINES_3MON": 6,
    "CAR_MODEL_YEAR": 10,
    "YRSRES": 7,
    "MALE": "hebgj",
    "MARITAL_STATUS": "efbgj",
    "FRAUD_ACTIVITY": "cbihg",
    "CITIZEN": "jegch",
    "EMPLOYED_CURRENT_YRS": 8,
    "OVERRIDE": "bfacg",
    "NEWCUST": "jbhkf",
    "INDUS_OCCUP": 10,
    "REJECTED_COUNT": 7,
    "CARD_BEAUTY_SPEND": 6,
    "CASH_ADVANCE_N": 1,
    "CARD_AUTO_SPEND": 7,
    "CASH_ADVANCE_AVG_N": 6,
    "DINING_SPEND_PCT": 9,
    "RETAIL_SPEND_PCT": 8,
    "GROCERY_SPEND_PCT": 10,
    "E_COMMERCE_SPEND_PCT": 7,
    "ELECTRONICS_SPEND_PCT": 8,
    "CLOTHING_SPEND_PCT": 6,
    "CARD_AUTO_PCT": 5,
    "EDUCATION_SPEND_PCT": 7,
    "CARD_BEAUTY_PCT": 2,
    "LINE_START": 5,
    "MAX_CASH_ADVANCE_24MON": 5,
    "MAX_BALANCE_24MON": 10,
    "OVER_LIMIT_N": 7,
    "EMPLOYMENT_RISKY": "khfjg",
    "CASH_ADVANCE_PCT_TRANS": 1,
    "INSTALLMENT_LOAN_PCT": 4,
    "bizId": "g3c1264hi9"
  }


,

  json2=
      {
        "INDUSTRY_BIN": 10,
        "DEFAULT_100": "bjaec",
        "DEFAULT_ISSUE_100": 7,
        "HH_INCOME": 2,
        "RENT_OWN": 10,
        "AGE": 8,
        "CARD_LEVEL": "aekcd",
        "ACQU_CHANNEL": "fgdie",
        "HOUSING_TYP": 7,
        "SCORE_AAPLIC": 3,
        "HOME_VALUE": 7,
        "N_INQUIRIES_30": 5,
        "N_INQUIRIES_60": 4,
        "N_INQUIRIES_90": 3,
        "NEW_LINES_3MON": 6,
        "CAR_MODEL_YEAR": 10,
        "YRSRES": 7,
        "MALE": "hebgj",
        "MARITAL_STATUS": "efbgj",
        "FRAUD_ACTIVITY": "cbihg",
        "CITIZEN": "jegch",
        "EMPLOYED_CURRENT_YRS": 8,
        "OVERRIDE": "bfacg",
        "NEWCUST": "jbhkf",
        "INDUS_OCCUP": 10,
        "REJECTED_COUNT": 7,
        "CARD_BEAUTY_SPEND": 6,
        "CASH_ADVANCE_N": 1,
        "CARD_AUTO_SPEND": 7,
        "CASH_ADVANCE_AVG_N": 6,
        "DINING_SPEND_PCT": 9,
        "RETAIL_SPEND_PCT": 8,
        "GROCERY_SPEND_PCT": 10,
        "E_COMMERCE_SPEND_PCT": 7,
        "ELECTRONICS_SPEND_PCT": 8,
        "CLOTHING_SPEND_PCT": 6,
        "CARD_AUTO_PCT": 5,
        "EDUCATION_SPEND_PCT": 7,
        "CARD_BEAUTY_PCT": 2,
        "LINE_START": 5,
        "MAX_CASH_ADVANCE_24MON": 5,
        "MAX_BALANCE_24MON": 10,
        "OVER_LIMIT_N": 7,
        "EMPLOYMENT_RISKY": "khfjg",
        "CASH_ADVANCE_PCT_TRANS": 1,
        "INSTALLMENT_LOAN_PCT": 2,
        "DEAULT_100":"123",
        "bizId": "g3c1264hi9"
      }



console.log(utils.diff(json1,json2));

