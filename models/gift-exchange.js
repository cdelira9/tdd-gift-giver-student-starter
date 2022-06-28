const { BadRequestError } = require("../utils/errors");

//const names = ["me", "you", "them", "us", "her", "him", "they", "y'all"];
class GiftExchange {
  static pairs(names) {
    if (names.length % 2 != 0) {
      throw new BadRequestError();
    }
    let currentIndex = names.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [names[currentIndex], names[randomIndex]] = [
        names[randomIndex],
        names[currentIndex],
      ];
    }
    var arr = [];
    for (let i = 0; i < names.length; i++) {
      var curr = names[i];
      var nextIdx = i + 1;
      var nextName = names[nextIdx];
      var tuple = [curr, nextName];
      arr.push(tuple);
      i++;
    }
    return arr;
  }
  static traditional(names) {
    let currentIndex = names.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [names[currentIndex], names[randomIndex]] = [
        names[randomIndex],
        names[currentIndex],
      ];
    }
    var arr = [];
    for (let i = 0; i < names.length; i++) {
      var nextIdx = i + 1;
      if (nextIdx < names.length) {
        arr.push(names[i] + " is giving a gift to " + names[nextIdx]);
      } else {
        arr.push(names[i] + " is giving a gift to " + names[0]);
      }
    }
    return arr;

    // var arr = [];
    // var size = names.length;
    // for (let i = 0; i < names.length; i++) {
    //   var idxFirst = Math.floor(Math.random() * size);
    //   size--;
    //   var idxSecond = Math.floor(Math.random() * size);
    //   //size--;
    //   arr.push(names[idxFirst] + " is giving a gift to " + names[idxSecond]);
    // }
    // return arr;
  }
}

module.exports = GiftExchange;
