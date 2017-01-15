

var Promise = function () {
  this.okCallbacks = [];
  this.koCallbacks = [];
};

Promise.prototype = {
  okCallbacks: null,
  koCallbacks: null,
  then: function (okCallback, koCallback) {
    this.okCallbacks.push(okCallback);
    if (koCallback) {
      koCallbacks.push(koCallback);
    }
  }
};


var Defer = function () {
  this.promise = new Promise();
};

Defer.prototype = {
  promise: null,
  resolve: function (data) {
    this.promise.okCallbacks.forEach(function(callback) {
      setTimeout(function () {
        callback(data)
      }, 0);
    });
  },

  reject: function (error) {
    this.promise.koCallbacks.forEach(function(callback) {
      setTimeout(function () {
        callback(error)
      }, 0);
    });
  }
};


function test() {
  var defer = new Defer();
  setTimeout( () => {
      console.log("in time out...");
      return defer.resolve("xxx");
  }, 1000);
  return defer.promise;
}

test().then(function (text) {
  console.log(text);
});

export {Defer}
