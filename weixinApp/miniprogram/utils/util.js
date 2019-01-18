/**
 * Map转json
 * @param m
 * @returns String
 */
function MapTOJson(m) {
  var str = '{';
  var i = 1;
  m.forEach(function(item, key, mapObj) {
    if (mapObj.size == i) {
      str += '"' + key + '":"' + item + '"';
    } else {
      str += '"' + key + '":"' + item + '",';
    }
    i++;
  });
  str += '}';
  //console.log(str);
  return str;
}
module.exports = {
  MapTOJson: MapTOJson
}