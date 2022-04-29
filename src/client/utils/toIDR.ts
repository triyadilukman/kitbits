function toIDR(idr: number) {
  var withIDR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var parsed = idr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return "".concat(withIDR ? 'Rp' : '').concat(parsed);
}

export default toIDR;