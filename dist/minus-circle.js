import React from 'react';
function MinusCircle(props) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "auto",
    height: "100%",
    viewBox: "0 0 420 420",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    "clipPath": "url(#clip0_55_1292)"
  }, /*#__PURE__*/React.createElement("path", {
    "fillRule": "evenodd",
    "clipRule": "evenodd",
    d: "M210 420C325.98 420 420 325.98 420 210C420 94.0202 325.98 0 210 0C94.0202 0 0 94.0202 0 210C0 325.98 94.0202 420 210 420ZM123.5 187C111.074 187 101 197.074 101 209.5C101 221.926 111.074 232 123.5 232H296.5C308.926 232 319 221.926 319 209.5C319 197.074 308.926 187 296.5 187H123.5Z",
    fill: props.color
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_55_1292"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "420",
    height: "420",
    fill: "white"
  }))));
}
MinusCircle.defaultProps = {
  color: '#1B1B1B'
};
export default MinusCircle;