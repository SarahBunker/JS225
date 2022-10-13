(function() {
  let _ = function(element) {
    u = {
      first() {
        return element[0];
      },
      last() {
        return element[element.length -1]
      },
      without(...items) {
        let newArray = [];
        element.forEach( el => {
          if (items.indexOf(el) === -1) newArray.push(el);
        })
        return newArray
      },
      lastIndexOf(search) {
        let index = -1;
        element.forEach( (el, currentIndex) => {
          if (el === search) index = currentIndex
        })
        return index;
      },
      sample(quantity) {
        let copyElements = element.slice();
        let sampled = [];

        function get() {
          let index = Math.floor(Math.random() * copyElements.length);
          let el = copyElements[index];
          copyElements.splice(index, 1);
          return el;
        }

        if (!quantity || quantity === 1) return get();

        for (let i = 1; i <= quantity; i ++ ) {
          sampled.push(get());
        }

        return sampled;
      },

      findWhere(objectMatch) {
        for (let i = 0; i < element.length; i ++) {
          let currentObject = element[i];
          if (objectHasProperties(currentObject, objectMatch)) return currentObject ;
        }

        return undefined;
      },
      where(objectMatch) {
        let matches = [];
        for (let i = 0; i < element.length; i ++) {
          let currentObject = element[i];
          if (objectHasProperties(currentObject, objectMatch)) matches.push(currentObject);
        }
        return matches;
      },
      pluck(keyMatch) {
        let matches = [];
        for (let i = 0; i < element.length; i ++) {
          let currentObject = element[i];
          if (Object.keys(currentObject).includes(keyMatch)) matches.push(currentObject[keyMatch]);
        }
        return matches;
      },
      keys() {
        return Object.keys(element);
      },
      values() {
        return Object.values(element);
      },

      pick(...props) {
        let newObj = {};
        for (let i = 0; i < props.length; i ++) {
          let prop = props[i];
          if (!(prop in element)) continue;
          newObj[prop] = element[prop];
        }
        return newObj;
      },
      omit(...props) {
        let newObj = {};
        for (let prop in element) {
          if (props.includes(prop)) continue;
          newObj[prop] = element[prop];
        }
        return newObj;
      },
      has(prop) {
        return prop in element;
      },
    };

    (["isElement", "isArray", "isObject", "isFunction", "isString", "isNumber", "isBoolean"]).forEach( method => {
      u[method] = function() { _[method].call(u, element); }
    });

    return u;
  };

  function objectHasProperties(object, objectMatch) {
    let keys = Object.keys(objectMatch);
    for (let i = 0; i < keys.length; i ++) {
      let key = keys[i];
      if (object[key] !== objectMatch[key]) return false;
    }
    return true;
  }

  _.range = function(start, stop) {
    let newRange = [];
    if (stop === undefined) {
      stop = start;
      start = 0;
    }
    for (let i = start; i < stop; i ++) {
      newRange.push(i);
    }

    return newRange;
  }

  _.extend = function(...objects) {
    let oldObj = objects.pop();
    let newObj = objects[objects.length - 1];

    for (let prop in oldObj) {
      newObj[prop] = oldObj[prop];
    }

    return objects.length === 1 ? newObj : _.extend.apply( _, objects);
  }

  _.isElement = function(obj) {
    return obj && obj.nodeType === 1;
  }
  _.isArray = Array.isArray || function(obj) {
    return toString.call(obj) === "[object Array]";
  }
  _.isObject = function(obj) {
    const type = typeof obj;
    return type === 'object' || type === 'function' && !!obj;
  }
  _.isFunction = function(obj) {
    const type = typeof obj;
    return type === 'function' && !!obj;
  }
  let methods = ["Boolean", "String", "Number"]
  methods.forEach( function(method) {
    _["is" + method] = function(obj) {
      return toString.call(obj) === "[object " + method + "]";
    }
  })

  window._ = _;
  global._ = _;

})();
