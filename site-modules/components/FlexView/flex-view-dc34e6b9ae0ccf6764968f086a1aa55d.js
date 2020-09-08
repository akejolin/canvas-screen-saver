function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from '../../../web_modules/react-d5feeccd9551fb7f62a2e2573736736e.js';
import PropTypes from '../../../web_modules/prop-types-76f17b5f1ab0157dea4931c8b7a2f947.js';
import './styles.css.proxy-5dcdf6c14b5b43c27ab427f77d9262cd.js';

const FlexView = props => {
  const styles = {
    default: props.row ? {
      flexDirection: 'row'
    } : {} // Default has been moved to scss

  };

  let outputStyles = _objectSpread(_objectSpread({}, styles.default), props.style);

  if (outputStyles.width === '100%') {
    outputStyles = _objectSpread(_objectSpread({}, outputStyles), {
      paddingLeft: 0,
      paddingRight: 0,
      marginLeft: 0,
      marginRight: 0
    });
  }

  if (outputStyles.height === '100%') {
    outputStyles = _objectSpread(_objectSpread({}, outputStyles), {
      paddingTop: 0,
      paddingBottom: 0,
      marginTop: 0,
      marginBottom: 0
    });
  }

  ;
  const TagName = props.tagName;

  let setProps = _objectSpread({}, props);

  setProps.style = outputStyles;
  setProps.className = `flex-view${props.className ? ' ' + props.className : ''}`;
  delete setProps.row;
  delete setProps.tagName;
  return /*#__PURE__*/React.createElement(TagName, setProps, props.children);
};

FlexView.defaultProps = {
  style: {},
  row: false,
  tagName: 'div'
};
export default FlexView;