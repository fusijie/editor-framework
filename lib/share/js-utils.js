'use strict';

function _getPropertyDescriptor(obj, name) {
  if (!obj) {
    return null;
  }

  let pd = Object.getOwnPropertyDescriptor(obj, name);
  return pd || _getPropertyDescriptor(Object.getPrototypeOf(obj), name);
}

function _copyprop(name, source, target) {
  let pd = _getPropertyDescriptor(source, name);
  Object.defineProperty(target, name, pd);
}

/**
 * Extending JavaScript to better handle property and class inheritance
 * @module Editor.JS
 */
module.exports = {
  /**
   * Copy property by name from source to target
   * @method copyprop
   * @param {string} name
   * @param {object} source
   * @param {object} target
   */
  copyprop: _copyprop,

  /**
   * copy all properties not defined in obj from arguments[1...n]
   * @method addon
   * @param {object} obj - object to extend its properties
   * @param {...object} sourceObj - source object to copy properties from
   * @return {object} the result obj
   */
  addon (obj, ...args) {
    obj = obj || {};
    for (let i = 0; i < args.length; ++i) {
      let source = args[i];

      for ( let name in source) {
        if ( !(name in obj) ) {
          _copyprop( name, source, obj);
        }
      }
    }
    return obj;
  },

  /**
   * Extract properties by `propNames` from `obj`
   * @method extract
   * @param {object} obj - object to extend its properties
   * @param {string[]} propNames
   * @return {object} - the result obj
   */
  extract ( obj, propNames ) {
    let newObj = {};
    for ( let i = 0; i < propNames.length; ++i ) {
      let name = propNames[i];

      if ( obj[name] !== undefined ) {
        _copyprop( name, obj, newObj);
      }
    }

    return newObj;
  },

  /**
   * Copy all properties from arguments[1...n] to obj
   * @method mixin
   * @param {object} obj
   * @param {...object} sourceObj
   * @return {object} the result obj
   */
  mixin (obj, ...args) {
    obj = obj || {};
    for (let i = 0; i < args.length; i++) {
      let source = args[i];
      if (source) {
        if (typeof source !== 'object') {
          Editor.error('JS.mixin called on non-object:', source);
          continue;
        }

        for ( let name in source) {
          _copyprop( name, source, obj);
        }
      }
    }

    return obj;
  },

  /**
   * Derive the class from the supplied base class.
   * @method extend
   * @param {function} cls
   * @param {function} base - the baseclass to inherit
   * @return {function} the result class
   */
  extend (cls, base) {
    if ( !base ) {
      Editor.error('The base class to extend from must be non-nil');
      return;
    }

    if ( !cls ) {
      Editor.error('The class to extend must be non-nil');
      return;
    }

    for (var p in base) {
      if (base.hasOwnProperty(p)) {
        cls[p] = base[p];
      }
    }

    function __() { this.constructor = cls; }
    __.prototype = base.prototype;
    cls.prototype = new __();

    return cls;
  },

  /**
   * Removes all enumerable properties from object
   * @method clear
   * @param {*} obj
   */
  clear (obj) {
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      delete obj[keys[i]];
    }
  },

  /**
   * Get property by path
   * @method getPropertyByPath
   * @param {object} obj
   * @param {string} path
   */
  getPropertyByPath (obj, path) {
    if ( !obj ) {
      return null;
    }

    if (path.indexOf('.') === -1) {
      return obj[path];
    }

    let props = path.split('.');
    let subProp = obj;
    for (let i = 0; i < props.length; i++) {
      subProp = subProp[props[i]];
      if ( !subProp ) {
        return null;
      }
    }

    return subProp;
  },
};
