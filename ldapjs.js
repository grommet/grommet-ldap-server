import ldap from 'ldapjs';
import helpers from 'ldap-filter/lib/helpers';

function escapeRegExp(str) {
  /* JSSTYLED */
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}

ldap.SubstringFilter.prototype.matches = function (target, strictAttrCase) {
  var tv = helpers.getAttrValue(target, this.attribute, strictAttrCase);
  if (tv !== undefined && tv !== null) {
    var re = '';

    if (this.initial)
      re += '^' + escapeRegExp(this.initial) + '.*';
    this.any.forEach(function (s) {
      re += escapeRegExp(s) + '.*';
    });
    if (this.final)
      re += escapeRegExp(this.final) + '$';

    var matcher = new RegExp(re, 'i');
    return helpers.testValues(function (v) {
      return matcher.test(v);
    }, tv);
  }

  return false;
};

ldap.EqualityFilter.prototype.matches = function (target, strictAttrCase) {
  var tv = helpers.getAttrValue(target, this.attribute, strictAttrCase);
  var value = this.value.toLowerCase();

  return helpers.testValues(function (v) {
    return value === v.toLowerCase();
  }, tv);
};

export default ldap;
