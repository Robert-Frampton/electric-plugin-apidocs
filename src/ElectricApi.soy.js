/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from ElectricApi.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ElectricApi.
 * @public
 */

goog.module('ElectricApi.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('ElectricApiEntities.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'api');
    ie_open('nav', null, null,
        'class', 'sidebar');
      $navigation(opt_data, null, opt_ijData);
    ie_close('nav');
    ie_open('div', null, null,
        'class', 'sidebar-offset');
      ie_open('div', null, null,
          'class', 'container-hybrid docs-home-top');
        ie_open('div', null, null,
            'class', 'entity-container',
            'id', 'entityContainer');
          if (opt_data.entityData && opt_data.entityData.name) {
            $templateAlias1(opt_data, null, opt_ijData);
          }
        ie_close('div');
      ie_close('div');
    ie_close('div');
    ie_open('script', null, null,
        'type', 'text/javascript');
      itext('new metal.ApiAutocomplete({dataSource: \'/api/');
      var dyn0 = opt_data.project.ref;
      if (typeof dyn0 == 'function') dyn0(); else if (dyn0 != null) itext(dyn0);
      itext('/API.json\', project: {ref: ');
      var dyn1 = opt_data.project.ref;
      if (typeof dyn1 == 'function') dyn1(); else if (dyn1 != null) itext(dyn1);
      itext(', repo: ');
      var dyn2 = opt_data.project.repo;
      if (typeof dyn2 == 'function') dyn2(); else if (dyn2 != null) itext(dyn2);
      itext(', user: ');
      var dyn3 = opt_data.project.user;
      if (typeof dyn3 == 'function') dyn3(); else if (dyn3 != null) itext(dyn3);
      itext('}, input: document.querySelector(\'input[name="query"]\')}); var serialized = JSON.parse(');
      var dyn4 = opt_data.serialized;
      if (typeof dyn4 == 'function') dyn4(); else if (dyn4 != null) itext(dyn4);
      itext('); if (serialized.entityData && serialized.entityData.name) {metal.Component.render(metal.ElectricApiEntities, {element: \'#entityContainer\', entityData: serialized.entityData, filter: serialized.filter, project: serialized.project});}');
    ie_close('script');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'ElectricApi.render';
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
    var augmentationList39 = opt_data.augments;
    var augmentationListLen39 = augmentationList39.length;
    for (var augmentationIndex39 = 0; augmentationIndex39 < augmentationListLen39; augmentationIndex39++) {
      var augmentationData39 = augmentationList39[augmentationIndex39];
      ie_open('span');
        var dyn5 = augmentationData39.title;
        if (typeof dyn5 == 'function') dyn5(); else if (dyn5 != null) itext(dyn5);
        itext(' ');
      ie_close('span');
      if (augmentationData39.link) {
        ie_open('a', null, null,
            'href', '/api/' + augmentationData39.link + '.html');
          var dyn6 = augmentationData39.name;
          if (typeof dyn6 == 'function') dyn6(); else if (dyn6 != null) itext(dyn6);
        ie_close('a');
      } else {
        ie_open('code');
          var dyn7 = augmentationData39.name;
          if (typeof dyn7 == 'function') dyn7(); else if (dyn7 != null) itext(dyn7);
        ie_close('code');
      }
    }
  ie_close('div');
}
exports.augments = $augments;
if (goog.DEBUG) {
  $augments.soyTemplateName = 'ElectricApi.augments';
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
        var dyn8 = opt_data['default'];
        if (typeof dyn8 == 'function') dyn8(); else if (dyn8 != null) itext(dyn8);
      ie_close('code');
    ie_close('span');
  ie_close('div');
}
exports.default = $default;
if (goog.DEBUG) {
  $default.soyTemplateName = 'ElectricApi.default';
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
    var dyn9 = opt_data.description.value;
    if (typeof dyn9 == 'function') dyn9(); else if (dyn9 != null) itext(dyn9);
  } else if (opt_data.description.type == 'inlineCode') {
    ie_open('code');
      var dyn10 = opt_data.description.value;
      if (typeof dyn10 == 'function') dyn10(); else if (dyn10 != null) itext(dyn10);
    ie_close('code');
  } else if (opt_data.description.children) {
    var childList57 = opt_data.description.children;
    var childListLen57 = childList57.length;
    for (var childIndex57 = 0; childIndex57 < childListLen57; childIndex57++) {
      var childData57 = childList57[childIndex57];
      $description({description: childData57}, null, opt_ijData);
    }
  }
}
exports.description = $description;
if (goog.DEBUG) {
  $description.soyTemplateName = 'ElectricApi.description';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $entity(opt_data, opt_ignored, opt_ijData) {
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
exports.entity = $entity;
if (goog.DEBUG) {
  $entity.soyTemplateName = 'ElectricApi.entity';
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
    var loc__soy96 = opt_data.entityData.context.loc;
    var filePath__soy97 = opt_data.entityData.context.file + '#L' + loc__soy96.start.line + (loc__soy96.end.line != loc__soy96.start.line ? '-L' + loc__soy96.end.line : '');
    ie_open('a', null, null,
        'class', 'entity-link',
        'href', 'https://github.com/' + opt_data.project.user + '/' + opt_data.project.repo + '/tree/' + opt_data.project.ref + '/' + filePath__soy97);
      var dyn11 = filePath__soy97;
      if (typeof dyn11 == 'function') dyn11(); else if (dyn11 != null) itext(dyn11);
    ie_close('a');
  ie_close('div');
}
exports.entityHeader = $entityHeader;
if (goog.DEBUG) {
  $entityHeader.soyTemplateName = 'ElectricApi.entityHeader';
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
          var dyn12 = opt_data.entityData.access + ' ';
          if (typeof dyn12 == 'function') dyn12(); else if (dyn12 != null) itext(dyn12);
        ie_close('span');
      }
      var dyn13 = opt_data.entityData.name;
      if (typeof dyn13 == 'function') dyn13(); else if (dyn13 != null) itext(dyn13);
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
          var dyn14 = opt_data.entityData.type;
          if (typeof dyn14 == 'function') dyn14(); else if (dyn14 != null) itext(dyn14);
        ie_close('span');
      }
    ie_close('a');
  ie_close('h1');
}
exports.entityName = $entityName;
if (goog.DEBUG) {
  $entityName.soyTemplateName = 'ElectricApi.entityName';
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
    var paramList138 = opt_data.params;
    var paramListLen138 = paramList138.length;
    for (var paramIndex138 = 0; paramIndex138 < paramListLen138; paramIndex138++) {
      var paramData138 = paramList138[paramIndex138];
      var dyn15 = paramData138.name;
      if (typeof dyn15 == 'function') dyn15(); else if (dyn15 != null) itext(dyn15);
      if (! (paramIndex138 == paramListLen138 - 1)) {
        itext(', ');
      }
    }
  ie_close('span');
}
exports.inlineParams = $inlineParams;
if (goog.DEBUG) {
  $inlineParams.soyTemplateName = 'ElectricApi.inlineParams';
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
      var propertyList149 = opt_data.members.properties;
      var propertyListLen149 = propertyList149.length;
      for (var propertyIndex149 = 0; propertyIndex149 < propertyListLen149; propertyIndex149++) {
        var propertyData149 = propertyList149[propertyIndex149];
        $entity(soy.$$assignDefaults({entityData: propertyData149, instance: true}, opt_data), null, opt_ijData);
      }
    }
    if (opt_data.members.methods && opt_data.members.methods.length) {
      ie_open('h2');
        itext('Methods:');
      ie_close('h2');
      var methodList157 = opt_data.members.methods;
      var methodListLen157 = methodList157.length;
      for (var methodIndex157 = 0; methodIndex157 < methodListLen157; methodIndex157++) {
        var methodData157 = methodList157[methodIndex157];
        $entity(soy.$$assignDefaults({entityData: methodData157, instance: true}, opt_data), null, opt_ijData);
      }
    }
    if (opt_data.members['static'] && opt_data.members['static'].length) {
      ie_open('h2');
        itext('Static:');
      ie_close('h2');
      var staticMemberList165 = opt_data.members['static'];
      var staticMemberListLen165 = staticMemberList165.length;
      for (var staticMemberIndex165 = 0; staticMemberIndex165 < staticMemberListLen165; staticMemberIndex165++) {
        var staticMemberData165 = staticMemberList165[staticMemberIndex165];
        $entity(soy.$$assignDefaults({entityData: staticMemberData165, static: true}, opt_data), null, opt_ijData);
      }
    }
  ie_close('div');
}
exports.members = $members;
if (goog.DEBUG) {
  $members.soyTemplateName = 'ElectricApi.members';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $navigation(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'sidebar-search');
    ie_open('div', null, null,
        'class', 'form-group');
      ie_open('select', null, null,
          'class', 'form-control',
          'onchange', 'location = this.value;');
        var refList179 = opt_data.project.refs;
        var refListLen179 = refList179.length;
        for (var refIndex179 = 0; refIndex179 < refListLen179; refIndex179++) {
          var refData179 = refList179[refIndex179];
          ie_open_start('option');
              iattr('value', '/api/' + refData179);
              if (refData179 == opt_data.project.ref) {
                iattr('selected', '');
              }
          ie_open_end();
            var dyn16 = refData179;
            if (typeof dyn16 == 'function') dyn16(); else if (dyn16 != null) itext(dyn16);
          ie_close('option');
        }
      ie_close('select');
    ie_close('div');
    ie_open('div', null, null,
        'class', 'form-group');
      ie_open('input', null, null,
          'autocomplete', 'off',
          'class', 'form-control',
          'name', 'query',
          'placeholder', 'Search...');
      ie_close('input');
    ie_close('div');
  ie_close('div');
  ie_open('ul', null, null,
      'class', 'sidebar-list sidebar-list-1');
    var entityList189 = opt_data.apiData;
    var entityListLen189 = entityList189.length;
    for (var entityIndex189 = 0; entityIndex189 < entityListLen189; entityIndex189++) {
      var entityData189 = entityList189[entityIndex189];
      ie_open('li', null, null,
          'class', 'sidebar-item');
        ie_open('a', null, null,
            'class', 'sidebar-link',
            'href', '/api/' + opt_data.project.ref + '/' + entityData189.name + '.html');
          var dyn17 = entityData189.name;
          if (typeof dyn17 == 'function') dyn17(); else if (dyn17 != null) itext(dyn17);
        ie_close('a');
      ie_close('li');
    }
  ie_close('ul');
}
exports.navigation = $navigation;
if (goog.DEBUG) {
  $navigation.soyTemplateName = 'ElectricApi.navigation';
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
      var dyn18 = opt_data.param.name;
      if (typeof dyn18 == 'function') dyn18(); else if (dyn18 != null) itext(dyn18);
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
  $param.soyTemplateName = 'ElectricApi.param';
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
          var paramList210 = opt_data.params;
          var paramListLen210 = paramList210.length;
          for (var paramIndex210 = 0; paramIndex210 < paramListLen210; paramIndex210++) {
            var paramData210 = paramList210[paramIndex210];
            $param({param: paramData210}, null, opt_ijData);
          }
        ie_close('tbody');
      ie_close('table');
    ie_close('div');
  ie_close('div');
}
exports.params = $params;
if (goog.DEBUG) {
  $params.soyTemplateName = 'ElectricApi.params';
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
    var return__soy215 = opt_data.returns[0];
    ie_open('span');
      itext('Returns: ');
      ie_open('code');
        $type({type: return__soy215.type}, null, opt_ijData);
      ie_close('code');
    ie_close('span');
    if (return__soy215.description) {
      ie_open('div');
        $description({description: return__soy215.description}, null, opt_ijData);
      ie_close('div');
    }
  ie_close('div');
}
exports.returns = $returns;
if (goog.DEBUG) {
  $returns.soyTemplateName = 'ElectricApi.returns';
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
      var dyn19 = opt_data.type.expression.name;
      if (typeof dyn19 == 'function') dyn19(); else if (dyn19 != null) itext(dyn19);
    } else {
      var dyn20 = opt_data.type.name;
      if (typeof dyn20 == 'function') dyn20(); else if (dyn20 != null) itext(dyn20);
    }
  ie_close('span');
}
exports.type = $type;
if (goog.DEBUG) {
  $type.soyTemplateName = 'ElectricApi.type';
}

exports.render.params = ["apiData","filter","project","serialized","entityData"];
exports.render.types = {"apiData":"any","filter":"any","project":"any","serialized":"any","entityData":"any"};
exports.augments.params = ["augments"];
exports.augments.types = {"augments":"any"};
exports.default.params = ["default"];
exports.default.types = {"default":"any"};
exports.description.params = ["description"];
exports.description.types = {"description":"any"};
exports.entity.params = ["entityData","project"];
exports.entity.types = {"entityData":"any","project":"any"};
exports.entityHeader.params = ["entityData","project"];
exports.entityHeader.types = {"entityData":"any","project":"any"};
exports.entityName.params = ["entityData"];
exports.entityName.types = {"entityData":"any"};
exports.inlineParams.params = ["params"];
exports.inlineParams.types = {"params":"any"};
exports.members.params = ["members","project"];
exports.members.types = {"members":"any","project":"any"};
exports.navigation.params = ["apiData","project"];
exports.navigation.types = {"apiData":"any","project":"any"};
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

class ElectricApi extends Component {}
Soy.register(ElectricApi, templates);
export { ElectricApi, templates };
export default templates;
/* jshint ignore:end */
