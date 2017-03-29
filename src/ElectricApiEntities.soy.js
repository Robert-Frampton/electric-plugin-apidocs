/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from ElectricApiEntities.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ElectricApiEntities.
 * @public
 */

goog.module('ElectricApiEntities.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('goog.string');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div');
    if (opt_data.entityData) {
      $accessFilter(opt_data, null, opt_ijData);
      $entity(opt_data, null, opt_ijData);
    }
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'ElectricApiEntities.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $accessFilter(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'card entity-filter',
      'id', 'entryFilter');
    ie_open('h1');
      itext('Filter:');
    ie_close('h1');
    ie_open('div', null, null,
        'class', 'form-inline');
      ie_open('div', null, null,
          'class', 'checkbox');
        ie_open('label');
          ie_open_start('input');
              if (opt_data.filter['protected']) {
                iattr('checked', '');
              }
              iattr('data-onchange', 'handleFilterChange_');
              iattr('type', 'checkbox');
              iattr('name', 'protected');
          ie_open_end();
          ie_close('input');
          itext(' Protected');
        ie_close('label');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'checkbox');
        ie_open('label');
          ie_open_start('input');
              if (opt_data.filter['private']) {
                iattr('checked', '');
              }
              iattr('data-onchange', 'handleFilterChange_');
              iattr('type', 'checkbox');
              iattr('name', 'private');
          ie_open_end();
          ie_close('input');
          itext(' Private');
        ie_close('label');
      ie_close('div');
    ie_close('div');
  ie_close('div');
}
exports.accessFilter = $accessFilter;
if (goog.DEBUG) {
  $accessFilter.soyTemplateName = 'ElectricApiEntities.accessFilter';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $augments(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'entity-augments');
    var augmentationList269 = opt_data.augments;
    var augmentationListLen269 = augmentationList269.length;
    for (var augmentationIndex269 = 0; augmentationIndex269 < augmentationListLen269; augmentationIndex269++) {
      var augmentationData269 = augmentationList269[augmentationIndex269];
      ie_open('span');
        var dyn21 = augmentationData269.title;
        if (typeof dyn21 == 'function') dyn21(); else if (dyn21 != null) itext(dyn21);
        itext(' ');
      ie_close('span');
      if (augmentationData269.link) {
        ie_open('a', null, null,
            'href', '/api/' + augmentationData269.link + '.html');
          var dyn22 = augmentationData269.name;
          if (typeof dyn22 == 'function') dyn22(); else if (dyn22 != null) itext(dyn22);
        ie_close('a');
      } else {
        ie_open('code');
          var dyn23 = augmentationData269.name;
          if (typeof dyn23 == 'function') dyn23(); else if (dyn23 != null) itext(dyn23);
        ie_close('code');
      }
    }
  ie_close('div');
}
exports.augments = $augments;
if (goog.DEBUG) {
  $augments.soyTemplateName = 'ElectricApiEntities.augments';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $default(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'entity-default');
    ie_open('span');
      itext('Default: ');
      ie_open('code');
        var dyn24 = opt_data['default'];
        if (typeof dyn24 == 'function') dyn24(); else if (dyn24 != null) itext(dyn24);
      ie_close('code');
    ie_close('span');
  ie_close('div');
}
exports.default = $default;
if (goog.DEBUG) {
  $default.soyTemplateName = 'ElectricApiEntities.default';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $description(opt_data, opt_ignored, opt_ijData) {
  if (opt_data.description.type == 'html' || opt_data.description.type == 'text') {
    var dyn25 = opt_data.description.value;
    if (typeof dyn25 == 'function') dyn25(); else if (dyn25 != null) itext(dyn25);
  } else if (opt_data.description.type == 'inlineCode') {
    ie_open('code');
      var dyn26 = opt_data.description.value;
      if (typeof dyn26 == 'function') dyn26(); else if (dyn26 != null) itext(dyn26);
    ie_close('code');
  } else if (opt_data.description.children) {
    var childList287 = opt_data.description.children;
    var childListLen287 = childList287.length;
    for (var childIndex287 = 0; childIndex287 < childListLen287; childIndex287++) {
      var childData287 = childList287[childIndex287];
      $description({description: childData287}, null, opt_ijData);
    }
  }
}
exports.description = $description;
if (goog.DEBUG) {
  $description.soyTemplateName = 'ElectricApiEntities.description';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $entity(opt_data, opt_ignored, opt_ijData) {
  if (! opt_data.entityData.access || opt_data.filter[opt_data.entityData.access]) {
    ie_open('section', null, null,
        'class', 'card entity',
        'data-access', opt_data.entityData.access ? opt_data.entityData.access : 'public',
        'id', opt_data.entityData.name);
      $entityHeader(opt_data, null, opt_ijData);
      if (opt_data.entityData.augments) {
        $augments({augments: opt_data.entityData.augments}, null, opt_ijData);
      }
      if (opt_data.entityData.description) {
        ie_open('div', null, null,
            'class', 'entity-description');
          $description({description: opt_data.entityData.description}, null, opt_ijData);
        ie_close('div');
      }
      if (opt_data.entityData['default']) {
        $default({default: opt_data.entityData['default']}, null, opt_ijData);
      }
      if (opt_data.entityData.params) {
        $params({params: opt_data.entityData.params}, null, opt_ijData);
      }
      if (opt_data.entityData.returns) {
        $returns({returns: opt_data.entityData.returns}, null, opt_ijData);
      }
      if (opt_data.entityData.members) {
        $members(soy.$$assignDefaults({members: opt_data.entityData.members}, opt_data), null, opt_ijData);
      }
    ie_close('section');
  }
}
exports.entity = $entity;
if (goog.DEBUG) {
  $entity.soyTemplateName = 'ElectricApiEntities.entity';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $entityHeader(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'entity-header');
    $entityName(opt_data, null, opt_ijData);
    var loc__soy328 = opt_data.entityData.context.loc;
    var filePath__soy329 = opt_data.entityData.context.file + '#L' + loc__soy328.start.line + (loc__soy328.end.line != loc__soy328.start.line ? '-L' + loc__soy328.end.line : '');
    ie_open('a', null, null,
        'class', 'entity-link',
        'href', 'https://github.com/' + opt_data.project.user + '/' + opt_data.project.repo + '/tree/' + opt_data.project.ref + '/' + filePath__soy329);
      var dyn27 = filePath__soy329;
      if (typeof dyn27 == 'function') dyn27(); else if (dyn27 != null) itext(dyn27);
    ie_close('a');
  ie_close('div');
}
exports.entityHeader = $entityHeader;
if (goog.DEBUG) {
  $entityHeader.soyTemplateName = 'ElectricApiEntities.entityHeader';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $entityName(opt_data, opt_ignored, opt_ijData) {
  ie_open('h1', null, null,
      'class', 'entity-name');
    ie_open('a', null, null,
        'href', '#' + opt_data.entityData.name);
      if (opt_data.entityData.access) {
        ie_open('span', null, null,
            'class', 'entity-access');
          var dyn28 = opt_data.entityData.access + ' ';
          if (typeof dyn28 == 'function') dyn28(); else if (dyn28 != null) itext(dyn28);
        ie_close('span');
      }
      var dyn29 = opt_data.entityData.name;
      if (typeof dyn29 == 'function') dyn29(); else if (dyn29 != null) itext(dyn29);
      if (opt_data.entityData.kind == 'function' || opt_data.entityData.name == 'constructor') {
        itext('(');
        if (opt_data.entityData.params) {
          $inlineParams({params: opt_data.entityData.params}, null, opt_ijData);
        }
        itext(')');
      } else if (opt_data.entityData.type) {
        ie_open('span', null, null,
            'class', 'entity-name-type');
          itext(':');
          var dyn30 = opt_data.entityData.type;
          if (typeof dyn30 == 'function') dyn30(); else if (dyn30 != null) itext(dyn30);
        ie_close('span');
      }
    ie_close('a');
  ie_close('h1');
}
exports.entityName = $entityName;
if (goog.DEBUG) {
  $entityName.soyTemplateName = 'ElectricApiEntities.entityName';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $inlineParams(opt_data, opt_ignored, opt_ijData) {
  ie_open('span');
    var paramList370 = opt_data.params;
    var paramListLen370 = paramList370.length;
    for (var paramIndex370 = 0; paramIndex370 < paramListLen370; paramIndex370++) {
      var paramData370 = paramList370[paramIndex370];
      var dyn31 = paramData370.name;
      if (typeof dyn31 == 'function') dyn31(); else if (dyn31 != null) itext(dyn31);
      if (! (paramIndex370 == paramListLen370 - 1)) {
        itext(', ');
      }
    }
  ie_close('span');
}
exports.inlineParams = $inlineParams;
if (goog.DEBUG) {
  $inlineParams.soyTemplateName = 'ElectricApiEntities.inlineParams';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $members(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'entity-members');
    if (opt_data.members.properties && opt_data.members.properties.length) {
      ie_open('h2');
        itext('Properties:');
      ie_close('h2');
      var propertyList381 = opt_data.members.properties;
      var propertyListLen381 = propertyList381.length;
      for (var propertyIndex381 = 0; propertyIndex381 < propertyListLen381; propertyIndex381++) {
        var propertyData381 = propertyList381[propertyIndex381];
        $entity(soy.$$assignDefaults({entityData: propertyData381, instance: true}, opt_data), null, opt_ijData);
      }
    }
    if (opt_data.members.methods && opt_data.members.methods.length) {
      ie_open('h2');
        itext('Methods:');
      ie_close('h2');
      var methodList389 = opt_data.members.methods;
      var methodListLen389 = methodList389.length;
      for (var methodIndex389 = 0; methodIndex389 < methodListLen389; methodIndex389++) {
        var methodData389 = methodList389[methodIndex389];
        $entity(soy.$$assignDefaults({entityData: methodData389, instance: true}, opt_data), null, opt_ijData);
      }
    }
    if (opt_data.members['static'] && opt_data.members['static'].length) {
      ie_open('h2');
        itext('Static:');
      ie_close('h2');
      var staticMemberList397 = opt_data.members['static'];
      var staticMemberListLen397 = staticMemberList397.length;
      for (var staticMemberIndex397 = 0; staticMemberIndex397 < staticMemberListLen397; staticMemberIndex397++) {
        var staticMemberData397 = staticMemberList397[staticMemberIndex397];
        $entity(soy.$$assignDefaults({entityData: staticMemberData397, static: true}, opt_data), null, opt_ijData);
      }
    }
  ie_close('div');
}
exports.members = $members;
if (goog.DEBUG) {
  $members.soyTemplateName = 'ElectricApiEntities.members';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $param(opt_data, opt_ignored, opt_ijData) {
  ie_open('tr');
    ie_open('td');
      var dyn32 = opt_data.param.name;
      if (typeof dyn32 == 'function') dyn32(); else if (dyn32 != null) itext(dyn32);
    ie_close('td');
    ie_open('td');
      if (opt_data.param.type) {
        $type({type: opt_data.param.type}, null, opt_ijData);
      }
    ie_close('td');
    ie_open('td');
      if (opt_data.param.description) {
        $description({description: opt_data.param.description}, null, opt_ijData);
      }
    ie_close('td');
  ie_close('tr');
}
exports.param = $param;
if (goog.DEBUG) {
  $param.soyTemplateName = 'ElectricApiEntities.param';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $params(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'entity-params');
    ie_open('span');
      itext('Parameters:');
    ie_close('span');
    ie_open('div', null, null,
        'class', 'datatable');
      ie_open('table', null, null,
          'class', 'table');
        ie_open('thead');
          ie_open('tr');
            ie_open('th');
              itext('Parameter');
            ie_close('th');
            ie_open('th');
              itext('Type');
            ie_close('th');
            ie_open('th');
              itext('Description');
            ie_close('th');
          ie_close('tr');
        ie_close('thead');
        ie_open('tbody');
          var paramList418 = opt_data.params;
          var paramListLen418 = paramList418.length;
          for (var paramIndex418 = 0; paramIndex418 < paramListLen418; paramIndex418++) {
            var paramData418 = paramList418[paramIndex418];
            $param({param: paramData418}, null, opt_ijData);
          }
        ie_close('tbody');
      ie_close('table');
    ie_close('div');
  ie_close('div');
}
exports.params = $params;
if (goog.DEBUG) {
  $params.soyTemplateName = 'ElectricApiEntities.params';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $returns(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'entity-returns');
    var return__soy423 = opt_data.returns[0];
    ie_open('span');
      itext('Returns: ');
      ie_open('code');
        $type({type: return__soy423.type}, null, opt_ijData);
      ie_close('code');
    ie_close('span');
    if (return__soy423.description) {
      ie_open('div');
        $description({description: return__soy423.description}, null, opt_ijData);
      ie_close('div');
    }
  ie_close('div');
}
exports.returns = $returns;
if (goog.DEBUG) {
  $returns.soyTemplateName = 'ElectricApiEntities.returns';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $type(opt_data, opt_ignored, opt_ijData) {
  ie_open('span');
    if (opt_data.type.expression) {
      var dyn33 = opt_data.type.expression.name;
      if (typeof dyn33 == 'function') dyn33(); else if (dyn33 != null) itext(dyn33);
    } else {
      var dyn34 = opt_data.type.name;
      if (typeof dyn34 == 'function') dyn34(); else if (dyn34 != null) itext(dyn34);
    }
  ie_close('span');
}
exports.type = $type;
if (goog.DEBUG) {
  $type.soyTemplateName = 'ElectricApiEntities.type';
}

exports.render.params = ["entityData","filter","project"];
exports.render.types = {"entityData":"any","filter":"any","project":"any"};
exports.accessFilter.params = ["filter"];
exports.accessFilter.types = {"filter":"any"};
exports.augments.params = ["augments"];
exports.augments.types = {"augments":"any"};
exports.default.params = ["default"];
exports.default.types = {"default":"any"};
exports.description.params = ["description"];
exports.description.types = {"description":"any"};
exports.entity.params = ["entityData","filter","project"];
exports.entity.types = {"entityData":"any","filter":"any","project":"any"};
exports.entityHeader.params = ["entityData","project"];
exports.entityHeader.types = {"entityData":"any","project":"any"};
exports.entityName.params = ["entityData"];
exports.entityName.types = {"entityData":"any"};
exports.inlineParams.params = ["params"];
exports.inlineParams.types = {"params":"any"};
exports.members.params = ["members","project"];
exports.members.types = {"members":"any","project":"any"};
exports.param.params = ["param"];
exports.param.types = {"param":"any"};
exports.params.params = ["params"];
exports.params.types = {"params":"any"};
exports.returns.params = ["returns"];
exports.returns.types = {"returns":"any"};
exports.type.params = ["type"];
exports.type.types = {"type":"any"};
templates = exports;
return exports;

});

class ElectricApiEntities extends Component {}
Soy.register(ElectricApiEntities, templates);
export { ElectricApiEntities, templates };
export default templates;
/* jshint ignore:end */
