/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(1);
	var io = __webpack_require__(174);
	var Display = __webpack_require__(224);
	__webpack_require__(226);

	console.log("hereherererere");

	$(function () {
		new Display();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.3
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-04-05T19:26Z
	 */(function(global,factory){if(typeof module==="object"&&typeof module.exports==="object"){ // For CommonJS and CommonJS-like environments where a proper `window`
	// is present, execute the factory and get jQuery.
	// For environments that do not have a `window` with a `document`
	// (such as Node.js), expose a factory as module.exports.
	// This accentuates the need for the creation of a real `window`.
	// e.g. var jQuery = require("jquery")(window);
	// See ticket #14549 for more info.
	module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}return factory(w);};}else {factory(global);} // Pass this if window is not defined yet
	})(typeof window!=="undefined"?window:this,function(window,noGlobal){ // Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr=[];var document=window.document;var slice=arr.slice;var concat=arr.concat;var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var support={};var version="2.2.3", // Define a local copy of jQuery
	jQuery=function(selector,context){ // The jQuery object is actually just the init constructor 'enhanced'
	// Need init if jQuery is called (just allow error to be thrown if not included)
	return new jQuery.fn.init(selector,context);}, // Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, // Matches dashed string for camelizing
	rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi, // Used by jQuery.camelCase as callback to replace()
	fcamelCase=function(all,letter){return letter.toUpperCase();};jQuery.fn=jQuery.prototype={ // The current version of jQuery being used
	jquery:version,constructor:jQuery, // Start with an empty selector
	selector:"", // The default length of a jQuery object is 0
	length:0,toArray:function(){return slice.call(this);}, // Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get:function(num){return num!=null? // Return just the one element from the set
	num<0?this[num+this.length]:this[num]: // Return all the elements in a clean array
	slice.call(this);}, // Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack:function(elems){ // Build a new jQuery matched element set
	var ret=jQuery.merge(this.constructor(),elems); // Add the old object onto the stack (as a reference)
	ret.prevObject=this;ret.context=this.context; // Return the newly-formed element set
	return ret;}, // Execute a callback for every element in the matched set.
	each:function(callback){return jQuery.each(this,callback);},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function(){return this.pushStack(slice.apply(this,arguments));},first:function(){return this.eq(0);},last:function(){return this.eq(-1);},eq:function(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function(){return this.prevObject||this.constructor();}, // For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false; // Handle a deep copy situation
	if(typeof target==="boolean"){deep=target; // Skip the boolean and the target
	target=arguments[i]||{};i++;} // Handle case when target is a string or something (possible in deep copy)
	if(typeof target!=="object"&&!jQuery.isFunction(target)){target={};} // Extend jQuery itself if only one argument is passed
	if(i===length){target=this;i--;}for(;i<length;i++){ // Only deal with non-null/undefined values
	if((options=arguments[i])!=null){ // Extend the base object
	for(name in options){src=target[name];copy=options[name]; // Prevent never-ending loop
	if(target===copy){continue;} // Recurse if we're merging plain objects or arrays
	if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else {clone=src&&jQuery.isPlainObject(src)?src:{};} // Never move original objects, clone them
	target[name]=jQuery.extend(deep,clone,copy); // Don't bring in undefined values
	}else if(copy!==undefined){target[name]=copy;}}}} // Return the modified object
	return target;};jQuery.extend({ // Unique for each copy of jQuery on the page
	expando:"jQuery"+(version+Math.random()).replace(/\D/g,""), // Assume jQuery is ready without the ready module
	isReady:true,error:function(msg){throw new Error(msg);},noop:function(){},isFunction:function(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray,isWindow:function(obj){return obj!=null&&obj===obj.window;},isNumeric:function(obj){ // parseFloat NaNs numeric-cast false positives (null|true|false|"")
	// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
	// subtraction forces infinities to NaN
	// adding 1 corrects loss of precision from parseFloat (#15100)
	var realStringObj=obj&&obj.toString();return !jQuery.isArray(obj)&&realStringObj-parseFloat(realStringObj)+1>=0;},isPlainObject:function(obj){var key; // Not plain objects:
	// - Any object or value whose internal [[Class]] property is not "[object Object]"
	// - DOM nodes
	// - window
	if(jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false;} // Not own constructor property must be Object
	if(obj.constructor&&!hasOwn.call(obj,"constructor")&&!hasOwn.call(obj.constructor.prototype||{},"isPrototypeOf")){return false;} // Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own
	for(key in obj){}return key===undefined||hasOwn.call(obj,key);},isEmptyObject:function(obj){var name;for(name in obj){return false;}return true;},type:function(obj){if(obj==null){return obj+"";} // Support: Android<4.0, iOS<6 (functionish RegExp)
	return typeof obj==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj;}, // Evaluates a script in a global context
	globalEval:function(code){var script,indirect=eval;code=jQuery.trim(code);if(code){ // If the code includes a valid, prologue position
	// strict mode pragma, execute code by injecting a
	// script tag into the document.
	if(code.indexOf("use strict")===1){script=document.createElement("script");script.text=code;document.head.appendChild(script).parentNode.removeChild(script);}else { // Otherwise, avoid the DOM node creation, insertion
	// and removal by using an indirect global eval
	indirect(code);}}}, // Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase:function(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();},each:function(obj,callback){var length,i=0;if(isArrayLike(obj)){length=obj.length;for(;i<length;i++){if(callback.call(obj[i],i,obj[i])===false){break;}}}else {for(i in obj){if(callback.call(obj[i],i,obj[i])===false){break;}}}return obj;}, // Support: Android<4.1
	trim:function(text){return text==null?"":(text+"").replace(rtrim,"");}, // results is for internal usage only
	makeArray:function(arr,results){var ret=results||[];if(arr!=null){if(isArrayLike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else {push.call(ret,arr);}}return ret;},inArray:function(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i);},merge:function(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j];}first.length=i;return first;},grep:function(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert; // Go through the array, only saving the items
	// that pass the validator function
	for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}return matches;}, // arg is for internal usage only
	map:function(elems,callback,arg){var length,value,i=0,ret=[]; // Go through the array, translating each of the items to their new values
	if(isArrayLike(elems)){length=elems.length;for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}} // Go through every key on the object,
	}else {for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}} // Flatten any nested arrays
	return concat.apply([],ret);}, // A global GUID counter for objects
	guid:1, // Bind a function to a context, optionally partially applying any
	// arguments.
	proxy:function(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;} // Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if(!jQuery.isFunction(fn)){return undefined;} // Simulated bind
	args=slice.call(arguments,2);proxy=function(){return fn.apply(context||this,args.concat(slice.call(arguments)));}; // Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;},now:Date.now, // jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support:support}); // JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */if(typeof Symbol==="function"){jQuery.fn[Symbol.iterator]=arr[Symbol.iterator];} /* jshint ignore: end */ // Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArrayLike(obj){ // Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length=!!obj&&"length" in obj&&obj.length,type=jQuery.type(obj);if(type==="function"||jQuery.isWindow(obj)){return false;}return type==="array"||length===0||typeof length==="number"&&length>0&&length-1 in obj;}var Sizzle= /*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate, // Local document vars
	setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains, // Instance-specific data
	expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function(a,b){if(a===b){hasDuplicate=true;}return 0;}, // General-purpose constants
	MAX_NEGATIVE=1<<31, // Instance methods
	hasOwn={}.hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice, // Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf=function(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i;}}return -1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", // Regular expressions
	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace="[\\x20\\t\\r\\n\\f]", // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+ // Operator (capture 2)
	"*([*^$|!~]?=)"+whitespace+ // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
	"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+identifier+")(?:\\(("+ // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
	// 1. quoted (capture 3; capture 4 or capture 5)
	"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+ // 2. simple (capture 6)
	"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+ // 3. anything else (capture 2)
	".*"+")\\)|)", // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+identifier+")"),"CLASS":new RegExp("^\\.("+identifier+")"),"TAG":new RegExp("^("+identifier+"|[*])"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"), // For use in libraries implementing .is()
	// We use this for POS matching in `select`
	"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/, // Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,rescape=/'|\\/g, // CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000; // NaN means non-codepoint
	// Support: Firefox<24
	// Workaround erroneous numeric interpretation of +"0x"
	return high!==high||escapedWhitespace?escaped:high<0? // BMP codepoint
	String.fromCharCode(high+0x10000): // Supplemental Plane codepoint (surrogate pair)
	String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);}, // Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler=function(){setDocument();}; // Optimize for push.apply( _, NodeList )
	try{push.apply(arr=slice.call(preferredDoc.childNodes),preferredDoc.childNodes); // Support: Android<4.0
	// Detect silently failing push.apply
	arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length? // Leverage slice if possible
	function(target,els){push_native.apply(target,slice.call(els));}: // Support: IE<9
	// Otherwise append directly
	function(target,els){var j=target.length,i=0; // Can't trust NodeList.length
	while(target[j++]=els[i++]){}target.length=j-1;}};}function Sizzle(selector,context,results,seed){var m,i,elem,nid,nidselect,match,groups,newSelector,newContext=context&&context.ownerDocument, // nodeType defaults to 9, since context defaults to document
	nodeType=context?context.nodeType:9;results=results||[]; // Return early from calls with invalid selector or context
	if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;} // Try to shortcut find operations (as opposed to filters) in HTML documents
	if(!seed){if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}context=context||document;if(documentIsHTML){ // If the selector is sufficiently simple, try using a "get*By*" DOM method
	// (excepting DocumentFragment context, where the methods don't exist)
	if(nodeType!==11&&(match=rquickExpr.exec(selector))){ // ID selector
	if(m=match[1]){ // Document context
	if(nodeType===9){if(elem=context.getElementById(m)){ // Support: IE, Opera, Webkit
	// TODO: identify versions
	// getElementById can match elements by name instead of ID
	if(elem.id===m){results.push(elem);return results;}}else {return results;} // Element context
	}else { // Support: IE, Opera, Webkit
	// TODO: identify versions
	// getElementById can match elements by name instead of ID
	if(newContext&&(elem=newContext.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}} // Type selector
	}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results; // Class selector
	}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}} // Take advantage of querySelectorAll
	if(support.qsa&&!compilerCache[selector+" "]&&(!rbuggyQSA||!rbuggyQSA.test(selector))){if(nodeType!==1){newContext=context;newSelector=selector; // qSA looks outside Element context, which is not what we want
	// Thanks to Andrew Dupont for this workaround technique
	// Support: IE <=8
	// Exclude object elements
	}else if(context.nodeName.toLowerCase()!=="object"){ // Capture the context ID, setting it first if necessary
	if(nid=context.getAttribute("id")){nid=nid.replace(rescape,"\\$&");}else {context.setAttribute("id",nid=expando);} // Prefix every selector in the list
	groups=tokenize(selector);i=groups.length;nidselect=ridentifier.test(nid)?"#"+nid:"[id='"+nid+"']";while(i--){groups[i]=nidselect+" "+toSelector(groups[i]);}newSelector=groups.join(","); // Expand context for sibling selectors
	newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;}if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){}finally {if(nid===expando){context.removeAttribute("id");}}}}}} // All others
	return select(selector.replace(rtrim,"$1"),context,results,seed);} /**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */function createCache(){var keys=[];function cache(key,value){ // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
	if(keys.push(key+" ")>Expr.cacheLength){ // Only keep the most recent entries
	delete cache[keys.shift()];}return cache[key+" "]=value;}return cache;} /**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */function markFunction(fn){fn[expando]=true;return fn;} /**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */function assert(fn){var div=document.createElement("div");try{return !!fn(div);}catch(e){return false;}finally { // Remove from its parent by default
	if(div.parentNode){div.parentNode.removeChild(div);} // release memory in IE
	div=null;}} /**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */function addHandle(attrs,handler){var arr=attrs.split("|"),i=arr.length;while(i--){Expr.attrHandle[arr[i]]=handler;}} /**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&(~b.sourceIndex||MAX_NEGATIVE)-(~a.sourceIndex||MAX_NEGATIVE); // Use IE sourceIndex if available on both nodes
	if(diff){return diff;} // Check if b follows a
	if(cur){while(cur=cur.nextSibling){if(cur===b){return -1;}}}return a?1:-1;} /**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};} /**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return (name==="input"||name==="button")&&elem.type===type;};} /**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length; // Match elements found at the specified indexes
	while(i--){if(seed[j=matchIndexes[i]]){seed[j]=!(matches[j]=seed[j]);}}});});} /**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;} // Expose support vars for convenience
	support=Sizzle.support={}; /**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */isXML=Sizzle.isXML=function(elem){ // documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;}; /**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */setDocument=Sizzle.setDocument=function(node){var hasCompare,parent,doc=node?node.ownerDocument||node:preferredDoc; // Return early if doc is invalid or already selected
	if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;} // Update global variables
	document=doc;docElem=document.documentElement;documentIsHTML=!isXML(document); // Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if((parent=document.defaultView)&&parent.top!==parent){ // Support: IE 11
	if(parent.addEventListener){parent.addEventListener("unload",unloadHandler,false); // Support: IE 9 - 10 only
	}else if(parent.attachEvent){parent.attachEvent("onunload",unloadHandler);}} /* Attributes
		---------------------------------------------------------------------- */ // Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes=assert(function(div){div.className="i";return !div.getAttribute("className");}); /* getElement(s)By*
		---------------------------------------------------------------------- */ // Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName=assert(function(div){div.appendChild(document.createComment(""));return !div.getElementsByTagName("*").length;}); // Support: IE<9
	support.getElementsByClassName=rnative.test(document.getElementsByClassName); // Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById=assert(function(div){docElem.appendChild(div).id=expando;return !document.getElementsByName||!document.getElementsByName(expando).length;}); // ID find and filter
	if(support.getById){Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var m=context.getElementById(id);return m?[m]:[];}};Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};}else { // Support: IE6/7
	// getElementById is not reliable as a find shortcut
	delete Expr.find["ID"];Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};} // Tag
	Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag); // DocumentFragment nodes don't have gEBTN
	}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0, // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
	results=context.getElementsByTagName(tag); // Filter out possible comments
	if(tag==="*"){while(elem=results[i++]){if(elem.nodeType===1){tmp.push(elem);}}return tmp;}return results;}; // Class
	Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){return context.getElementsByClassName(className);}}; /* QSA/matchesSelector
		---------------------------------------------------------------------- */ // QSA and matchesSelector support
	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches=[]; // qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA=[];if(support.qsa=rnative.test(document.querySelectorAll)){ // Build QSA regex
	// Regex strategy adopted from Diego Perini
	assert(function(div){ // Select is set to empty string on purpose
	// This is to test IE's treatment of not explicitly
	// setting a boolean content attribute,
	// since its presence should be enough
	// http://bugs.jquery.com/ticket/12359
	docElem.appendChild(div).innerHTML="<a id='"+expando+"'></a>"+"<select id='"+expando+"-\r\\' msallowcapture=''>"+"<option selected=''></option></select>"; // Support: IE8, Opera 11-12.16
	// Nothing should be selected when empty strings follow ^= or $= or *=
	// The test attribute must be unknown in Opera but "safe" for WinRT
	// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
	if(div.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");} // Support: IE8
	// Boolean attributes and "value" are not treated correctly
	if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");} // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
	if(!div.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=");} // Webkit/Opera - :checked should return selected option elements
	// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	// IE8 throws error here and will not see later tests
	if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");} // Support: Safari 8+, iOS 8+
	// https://bugs.webkit.org/show_bug.cgi?id=136851
	// In-page `selector#id sibing-combinator selector` fails
	if(!div.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}});assert(function(div){ // Support: Windows 8 Native Apps
	// The type and name attributes are restricted during .innerHTML assignment
	var input=document.createElement("input");input.setAttribute("type","hidden");div.appendChild(input).setAttribute("name","D"); // Support: IE8
	// Enforce case-sensitivity of name attribute
	if(div.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");} // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
	// IE8 throws error here and will not see later tests
	if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled");} // Opera 10-11 does not throw on post-comma invalid pseudos
	div.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}if(support.matchesSelector=rnative.test(matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)){assert(function(div){ // Check to see if it's possible to do matchesSelector
	// on a disconnected node (IE 9)
	support.disconnectedMatch=matches.call(div,"div"); // This should fail with an exception
	// Gecko does not error, returns false instead
	matches.call(div,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|")); /* Contains
		---------------------------------------------------------------------- */hasCompare=rnative.test(docElem.compareDocumentPosition); // Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while(b=b.parentNode){if(b===a){return true;}}}return false;}; /* Sorting
		---------------------------------------------------------------------- */ // Document order sorting
	sortOrder=hasCompare?function(a,b){ // Flag for duplicate removal
	if(a===b){hasDuplicate=true;return 0;} // Sort on method existence if only one input has compareDocumentPosition
	var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;} // Calculate position if both inputs belong to the same document
	compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b): // Otherwise we know they are disconnected
	1; // Disconnected nodes
	if(compare&1||!support.sortDetached&&b.compareDocumentPosition(a)===compare){ // Choose the first element that is related to our preferred document
	if(a===document||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return -1;}if(b===document||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1;} // Maintain original order
	return sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;}return compare&4?-1:1;}:function(a,b){ // Exit early if the nodes are identical
	if(a===b){hasDuplicate=true;return 0;}var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b]; // Parentless nodes are either documents or disconnected
	if(!aup||!bup){return a===document?-1:b===document?1:aup?-1:bup?1:sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0; // If the nodes are siblings, we can do a quick check
	}else if(aup===bup){return siblingCheck(a,b);} // Otherwise we need full lists of their ancestors for comparison
	cur=a;while(cur=cur.parentNode){ap.unshift(cur);}cur=b;while(cur=cur.parentNode){bp.unshift(cur);} // Walk down the tree looking for a discrepancy
	while(ap[i]===bp[i]){i++;}return i? // Do a sibling check if the nodes have a common ancestor
	siblingCheck(ap[i],bp[i]): // Otherwise nodes in our document sort first
	ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return document;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){ // Set document vars if needed
	if((elem.ownerDocument||elem)!==document){setDocument(elem);} // Make sure that attribute selectors are quoted
	expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&!compilerCache[expr+" "]&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr); // IE 9's matchesSelector returns false on disconnected nodes
	if(ret||support.disconnectedMatch|| // As well, disconnected nodes are said to be in a document
	// fragment in IE 9
	elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){ // Set document vars if needed
	if((context.ownerDocument||context)!==document){setDocument(context);}return contains(context,elem);};Sizzle.attr=function(elem,name){ // Set document vars if needed
	if((elem.ownerDocument||elem)!==document){setDocument(elem);}var fn=Expr.attrHandle[name.toLowerCase()], // Don't get fooled by Object.prototype properties (jQuery #13807)
	val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);}; /**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0; // Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while(elem=results[i++]){if(elem===results[i]){j=duplicates.push(i);}}while(j--){results.splice(duplicates[j],1);}} // Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput=null;return results;}; /**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){ // If no nodeType, this is expected to be an array
	while(node=elem[i++]){ // Do not traverse comment nodes
	ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){ // Use textContent for elements
	// innerText usage removed for consistency of new lines (jQuery #11153)
	if(typeof elem.textContent==="string"){return elem.textContent;}else { // Traverse its children
	for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;} // Do not include comment or processing instruction nodes
	return ret;};Expr=Sizzle.selectors={ // Can be adjusted by the user
	cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function(match){match[1]=match[1].replace(runescape,funescape); // Move the given value to match[3] whether quoted or unquoted
	match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}return match.slice(0,4);},"CHILD":function(match){ /* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){ // nth-* requires argument
	if(!match[3]){Sizzle.error(match[0]);} // numeric x and y parameters for Expr.filter.CHILD
	// remember that false/true cast respectively to 0/1
	match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+(match[7]+match[8]||match[3]==="odd"); // other types prohibit arguments
	}else if(match[3]){Sizzle.error(match[0]);}return match;},"PSEUDO":function(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;} // Accept quoted arguments as-is
	if(match[3]){match[2]=match[4]||match[5]||""; // Strip excess characters from unquoted arguments
	}else if(unquoted&&rpseudo.test(unquoted)&&( // Get excess from tokenize (recursively)
	excess=tokenize(unquoted,true))&&( // advance to the next closing parenthesis
	excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){ // excess is a negative index
	match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);} // Return only captures needed by the pseudo filter method (type and argument)
	return match.slice(0,3);}},filter:{"TAG":function(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},"ATTR":function(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}if(!operator){return true;}result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0? // Shortcut for :nth-*(n)
	function(elem){return !!elem.parentNode;}:function(elem,context,xml){var cache,uniqueCache,outerCache,node,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=false;if(parent){ // :(first|last|only)-(child|of-type)
	if(simple){while(dir){node=elem;while(node=node[dir]){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}} // Reverse direction for :only-* (if we haven't yet done so)
	start=dir=type==="only"&&!start&&"nextSibling";}return true;}start=[forward?parent.firstChild:parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`
	if(forward&&useCache){ // Seek `elem` from a previously-cached index
	// ...in a gzip-friendly way
	node=parent;outerCache=node[expando]||(node[expando]={}); // Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while(node=++nodeIndex&&node&&node[dir]||( // Fallback to seeking `elem` from the start
	diff=nodeIndex=0)||start.pop()){ // When found, cache indexes on `parent` and break
	if(node.nodeType===1&&++diff&&node===elem){uniqueCache[type]=[dirruns,nodeIndex,diff];break;}}}else { // Use previously-cached element index if available
	if(useCache){ // ...in a gzip-friendly way
	node=elem;outerCache=node[expando]||(node[expando]={}); // Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex;} // xml :nth-child(...)
	// or :nth-last-child(...) or :nth(-last)?-of-type(...)
	if(diff===false){ // Use the same loop as above to seek `elem` from the start
	while(node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop()){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){ // Cache the index of each encountered element
	if(useCache){outerCache=node[expando]||(node[expando]={}); // Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});uniqueCache[type]=[dirruns,diff];}if(node===elem){break;}}}}} // Incorporate the offset, then check against cycle size
	diff-=last;return diff===first||diff%first===0&&diff/first>=0;}};},"PSEUDO":function(pseudo,argument){ // pseudo-class names are case-insensitive
	// http://www.w3.org/TR/selectors/#pseudo-classes
	// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
	// Remember that setFilters inherits from pseudos
	var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo); // The user may use createPseudo to indicate that
	// arguments are needed to create the filter function
	// just as Sizzle does
	if(fn[expando]){return fn(argument);} // But maintain support for old signatures
	if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}return fn;}},pseudos:{ // Potentially complex pseudos
	"not":markFunction(function(selector){ // Trim the selector passed to compile
	// to avoid treating leading and trailing
	// spaces as combinators
	var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length; // Match elements unmatched by `matcher`
	while(i--){if(elem=unmatched[i]){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results); // Don't keep the element (issue #299)
	input[0]=null;return !results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return (elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}), // "Whether an element is represented by a :lang() selector
	// is based solely on the element's language value
	// being equal to the identifier C,
	// or beginning with the identifier C immediately followed by "-".
	// The matching of C against the element's language value is performed case-insensitively.
	// The identifier C does not have to be a valid language name."
	// http://www.w3.org/TR/selectors/#lang-pseudo
	"lang":markFunction(function(lang){ // lang value must be a valid identifier
	if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do {if(elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang")){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}), // Miscellaneous
	"target":function(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function(elem){return elem===docElem;},"focus":function(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);}, // Boolean properties
	"enabled":function(elem){return elem.disabled===false;},"disabled":function(elem){return elem.disabled===true;},"checked":function(elem){ // In CSS3, :checked should return both checked and selected elements
	// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	var nodeName=elem.nodeName.toLowerCase();return nodeName==="input"&&!!elem.checked||nodeName==="option"&&!!elem.selected;},"selected":function(elem){ // Accessing this property makes selected-by-default
	// options in Safari work properly
	if(elem.parentNode){elem.parentNode.selectedIndex;}return elem.selected===true;}, // Contents
	"empty":function(elem){ // http://www.w3.org/TR/selectors/#empty-pseudo
	// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
	//   but not by others (comment: 8; processing instruction: 7; etc.)
	// nodeType < 6 works because attributes (2) do not appear as children
	for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}return true;},"parent":function(elem){return !Expr.pseudos["empty"](elem);}, // Element/input types
	"header":function(elem){return rheader.test(elem.nodeName);},"input":function(elem){return rinputs.test(elem.nodeName);},"button":function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&( // Support: IE<8
	// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
	(attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");}, // Position-in-collection
	"first":createPositionalPseudo(function(){return [0];}),"last":createPositionalPseudo(function(matchIndexes,length){return [length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return [argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i);}return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"]; // Add button/input type pseudos
	for(i in {radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}for(i in {submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);} // Easy API for creating new setFilters
	function setFilters(){}setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){ // Comma and first run
	if(!matched||(match=rcomma.exec(soFar))){if(match){ // Don't consume trailing commas as valid
	soFar=soFar.slice(match[0].length)||soFar;}groups.push(tokens=[]);}matched=false; // Combinators
	if(match=rcombinators.exec(soFar)){matched=match.shift();tokens.push({value:matched, // Cast descendant combinators to space
	type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);} // Filters
	for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}if(!matched){break;}} // Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly?soFar.length:soFar?Sizzle.error(selector): // Cache the tokens
	tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}return selector;}function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base&&dir==="parentNode",doneName=done++;return combinator.first? // Check against closest ancestor/preceding element
	function(elem,context,xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}}: // Check against all ancestor/preceding elements
	function(elem,context,xml){var oldCache,uniqueCache,outerCache,newCache=[dirruns,doneName]; // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
	if(xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else {while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={}); // Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});if((oldCache=uniqueCache[dir])&&oldCache[0]===dirruns&&oldCache[1]===doneName){ // Assign to newCache so results back-propagate to previous elements
	return newCache[2]=oldCache[2];}else { // Reuse newcache so results back-propagate to previous elements
	uniqueCache[dir]=newCache; // A match means we're done; a fail means we have to keep checking
	if(newCache[2]=matcher(elem,context,xml)){return true;}}}}}};}function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}return true;}:matchers[0];}function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}return results;}function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if(elem=unmatched[i]){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}return newUnmatched;}function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length, // Get initial elements from seed or context
	elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]), // Prefilter to get matcher input, preserving a map for seed-results synchronization
	matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
	postFinder||(seed?preFilter:preexisting||postFilter)? // ...intermediate processing is necessary
	[]: // ...otherwise use results directly
	results:matcherIn; // Find primary matches
	if(matcher){matcher(matcherIn,matcherOut,context,xml);} // Apply postFilter
	if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml); // Un-match failing elements by moving them back to matcherIn
	i=temp.length;while(i--){if(elem=temp[i]){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}if(seed){if(postFinder||preFilter){if(postFinder){ // Get the final matcherOut by condensing this intermediate into postFinder contexts
	temp=[];i=matcherOut.length;while(i--){if(elem=matcherOut[i]){ // Restore matcherIn since elem is not yet a final match
	temp.push(matcherIn[i]=elem);}}postFinder(null,matcherOut=[],temp,xml);} // Move matched elements from seed to results to keep them synchronized
	i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}} // Add elements to results, through postFinder if defined
	}else {matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else {push.apply(results,matcherOut);}}});}function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0, // The foundational matcher ensures that elements are reachable from top-level context(s)
	matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=!leadingRelative&&(xml||context!==outermostContext)||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml)); // Avoid hanging onto element (issue #299)
	checkContext=null;return ret;}];for(;i<len;i++){if(matcher=Expr.relative[tokens[i].type]){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else {matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches); // Return special upon seeing a positional matcher
	if(matcher[expando]){ // Find the next relative operator (if any) for proper handling
	j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector( // If the preceding token was a descendant combinator, insert an implicit any-element `*`
	tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens(tokens=tokens.slice(j)),j<len&&toSelector(tokens));}matchers.push(matcher);}}return elementMatcher(matchers);}function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext, // We must always have either seed elements or outermost context
	elems=seed||byElement&&Expr.find["TAG"]("*",outermost), // Use integer dirruns iff this is the outermost matcher
	dirrunsUnique=dirruns+=contextBackup==null?1:Math.random()||0.1,len=elems.length;if(outermost){outermostContext=context===document||context||outermost;} // Add elements passing elementMatchers directly to results
	// Support: IE<9, Safari
	// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
	for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;if(!context&&elem.ownerDocument!==document){setDocument(elem);xml=!documentIsHTML;}while(matcher=elementMatchers[j++]){if(matcher(elem,context||document,xml)){results.push(elem);break;}}if(outermost){dirruns=dirrunsUnique;}} // Track unmatched elements for set filters
	if(bySet){ // They will have gone through all possible matchers
	if(elem=!matcher&&elem){matchedCount--;} // Lengthen the array for every element, matched or not
	if(seed){unmatched.push(elem);}}} // `i` is now the count of elements visited above, and adding it to `matchedCount`
	// makes the latter nonnegative.
	matchedCount+=i; // Apply set filters to unmatched elements
	// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
	// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
	// no element matchers and no seed.
	// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
	// case, which will result in a "00" `matchedCount` that differs from `i` but is also
	// numerically zero.
	if(bySet&&i!==matchedCount){j=0;while(matcher=setMatchers[j++]){matcher(unmatched,setMatched,context,xml);}if(seed){ // Reintegrate element matches to eliminate the need for sorting
	if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}} // Discard index placeholder values to get only actual matches
	setMatched=condense(setMatched);} // Add matches to results
	push.apply(results,setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting
	if(outermost&&!seed&&setMatched.length>0&&matchedCount+setMatchers.length>1){Sizzle.uniqueSort(results);}} // Override manipulation of globals by nested matchers
	if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}compile=Sizzle.compile=function(selector,match /* Internal Use Only */){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){ // Generate a function of recursive functions that can be used to check each element
	if(!match){match=tokenize(selector);}i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else {elementMatchers.push(cached);}} // Cache the compiled function
	cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers)); // Save selector and tokenization
	cached.selector=selector;}return cached;}; /**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize(selector=compiled.selector||selector);results=results||[]; // Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if(match.length===1){ // Reduce context if the leading compound selector is an ID
	tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&support.getById&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results; // Precompiled matchers will still verify ancestry, so step up a level
	}else if(compiled){context=context.parentNode;}selector=selector.slice(tokens.shift().value.length);} // Fetch a seed set for right-to-left matching
	i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i]; // Abort if we hit a combinator
	if(Expr.relative[type=token.type]){break;}if(find=Expr.find[type]){ // Search, expanding context for leading sibling combinators
	if(seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context)){ // If seed is empty or no tokens remain, we can return early
	tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}break;}}}} // Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context);return results;}; // One-time assignments
	// Sort stability
	support.sortStable=expando.split("").sort(sortOrder).join("")===expando; // Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates=!!hasDuplicate; // Initialize against the default document
	setDocument(); // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached=assert(function(div1){ // Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition(document.createElement("div"))&1;}); // Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if(!assert(function(div){div.innerHTML="<a href='#'></a>";return div.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});} // Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if(!support.attributes||!assert(function(div){div.innerHTML="<input/>";div.firstChild.setAttribute("value","");return div.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});} // Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if(!assert(function(div){return div.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;}});}return Sizzle;}(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;var dir=function(elem,dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break;}matched.push(elem);}}return matched;};var siblings=function(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n);}}return matched;};var rneedsContext=jQuery.expr.match.needsContext;var rsingleTag=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/;var risSimple=/^.[^:#\[\.,]*$/; // Implement the identical functionality for filter and not
	function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){ /* jshint -W018 */return !!qualifier.call(elem,i,elem)!==not;});}if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return elem===qualifier!==not;});}if(typeof qualifier==="string"){if(risSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not);}qualifier=jQuery.filter(qualifier,elements);}return jQuery.grep(elements,function(elem){return indexOf.call(qualifier,elem)>-1!==not;});}jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}return elems.length===1&&elem.nodeType===1?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function(selector){var i,len=this.length,ret=[],self=this;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);} // Needed because $( selector, context ) becomes $( context ).find( selector )
	ret=this.pushStack(len>1?jQuery.unique(ret):ret);ret.selector=this.selector?this.selector+" "+selector:selector;return ret;},filter:function(selector){return this.pushStack(winnow(this,selector||[],false));},not:function(selector){return this.pushStack(winnow(this,selector||[],true));},is:function(selector){return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
	// so $("p:first").is("p:last") won't return true for a doc with two "p".
	typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}}); // Initialize a jQuery object
	// A central reference to the root jQuery(document)
	var rootjQuery, // A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,init=jQuery.fn.init=function(selector,context,root){var match,elem; // HANDLE: $(""), $(null), $(undefined), $(false)
	if(!selector){return this;} // Method init() accepts an alternate rootjQuery
	// so migrate can support jQuery.sub (gh-2101)
	root=root||rootjQuery; // Handle HTML strings
	if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){ // Assume that strings that start and end with <> are HTML and skip the regex check
	match=[null,selector,null];}else {match=rquickExpr.exec(selector);} // Match html or make sure no context is specified for #id
	if(match&&(match[1]||!context)){ // HANDLE: $(html) -> $(array)
	if(match[1]){context=context instanceof jQuery?context[0]:context; // Option to run scripts is true for back-compat
	// Intentionally let the error be thrown if parseHTML is not present
	jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true)); // HANDLE: $(html, props)
	if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){ // Properties of context are called as methods if possible
	if(jQuery.isFunction(this[match])){this[match](context[match]); // ...and otherwise set as attributes
	}else {this.attr(match,context[match]);}}}return this; // HANDLE: $(#id)
	}else {elem=document.getElementById(match[2]); // Support: Blackberry 4.6
	// gEBID returns nodes no longer in the document (#6963)
	if(elem&&elem.parentNode){ // Inject the element directly into the jQuery object
	this.length=1;this[0]=elem;}this.context=document;this.selector=selector;return this;} // HANDLE: $(expr, $(...))
	}else if(!context||context.jquery){return (context||root).find(selector); // HANDLE: $(expr, context)
	// (which is just equivalent to: $(context).find(expr)
	}else {return this.constructor(context).find(selector);} // HANDLE: $(DOMElement)
	}else if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this; // HANDLE: $(function)
	// Shortcut for document ready
	}else if(jQuery.isFunction(selector)){return root.ready!==undefined?root.ready(selector): // Execute immediately if ready is not present
	selector(jQuery);}if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context;}return jQuery.makeArray(selector,this);}; // Give the init function the jQuery prototype for later instantiation
	init.prototype=jQuery.fn; // Initialize central reference
	rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/, // Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({has:function(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function(selectors,context){var cur,i=0,l=this.length,matched=[],pos=rneedsContext.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){ // Always skip document fragments
	if(cur.nodeType<11&&(pos?pos.index(cur)>-1: // Don't pass non-elements to Sizzle
	cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);}, // Determine the position of an element within the set
	index:function(elem){ // No argument, return index in parent
	if(!elem){return this[0]&&this[0].parentNode?this.first().prevAll().length:-1;} // Index in selector
	if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0]);} // Locate the position of the desired element
	return indexOf.call(this, // If it receives a jQuery object, the first element is used
	elem.jquery?elem[0]:elem);},add:function(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}return cur;}jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function(elem){return dir(elem,"parentNode");},parentsUntil:function(elem,i,until){return dir(elem,"parentNode",until);},next:function(elem){return sibling(elem,"nextSibling");},prev:function(elem){return sibling(elem,"previousSibling");},nextAll:function(elem){return dir(elem,"nextSibling");},prevAll:function(elem){return dir(elem,"previousSibling");},nextUntil:function(elem,i,until){return dir(elem,"nextSibling",until);},prevUntil:function(elem,i,until){return dir(elem,"previousSibling",until);},siblings:function(elem){return siblings((elem.parentNode||{}).firstChild,elem);},children:function(elem){return siblings(elem.firstChild);},contents:function(elem){return elem.contentDocument||jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched);}if(this.length>1){ // Remove duplicates
	if(!guaranteedUnique[name]){jQuery.uniqueSort(matched);} // Reverse order for parents* and prev-derivatives
	if(rparentsprev.test(name)){matched.reverse();}}return this.pushStack(matched);};});var rnotwhite=/\S+/g; // Convert String-formatted options into Object-formatted ones
	function createOptions(options){var object={};jQuery.each(options.match(rnotwhite)||[],function(_,flag){object[flag]=true;});return object;} /*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */jQuery.Callbacks=function(options){ // Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options=typeof options==="string"?createOptions(options):jQuery.extend({},options);var  // Flag to know if list is currently firing
	firing, // Last fire value for non-forgettable lists
	memory, // Flag to know if list was already fired
	fired, // Flag to prevent firing
	locked, // Actual callback list
	list=[], // Queue of execution data for repeatable lists
	queue=[], // Index of currently firing callback (modified by add/remove as needed)
	firingIndex=-1, // Fire callbacks
	fire=function(){ // Enforce single-firing
	locked=options.once; // Execute callbacks for all pending executions,
	// respecting firingIndex overrides and runtime changes
	fired=firing=true;for(;queue.length;firingIndex=-1){memory=queue.shift();while(++firingIndex<list.length){ // Run callback and check for early termination
	if(list[firingIndex].apply(memory[0],memory[1])===false&&options.stopOnFalse){ // Jump to end and forget the data so .add doesn't re-fire
	firingIndex=list.length;memory=false;}}} // Forget the data if we're done with it
	if(!options.memory){memory=false;}firing=false; // Clean up if we're done firing for good
	if(locked){ // Keep an empty list if we have data for future add calls
	if(memory){list=[]; // Otherwise, this object is spent
	}else {list="";}}}, // Actual Callbacks object
	self={ // Add a callback or a collection of callbacks to the list
	add:function(){if(list){ // If we have memory from a past run, we should fire after adding
	if(memory&&!firing){firingIndex=list.length-1;queue.push(memory);}(function add(args){jQuery.each(args,function(_,arg){if(jQuery.isFunction(arg)){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&jQuery.type(arg)!=="string"){ // Inspect recursively
	add(arg);}});})(arguments);if(memory&&!firing){fire();}}return this;}, // Remove a callback from the list
	remove:function(){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1); // Handle firing indexes
	if(index<=firingIndex){firingIndex--;}}});return this;}, // Check if a given callback is in the list.
	// If no argument is given, return whether or not list has callbacks attached.
	has:function(fn){return fn?jQuery.inArray(fn,list)>-1:list.length>0;}, // Remove all callbacks from the list
	empty:function(){if(list){list=[];}return this;}, // Disable .fire and .add
	// Abort any current/pending executions
	// Clear all callbacks and values
	disable:function(){locked=queue=[];list=memory="";return this;},disabled:function(){return !list;}, // Disable .fire
	// Also disable .add unless we have memory (since it would have no effect)
	// Abort any pending executions
	lock:function(){locked=queue=[];if(!memory){list=memory="";}return this;},locked:function(){return !!locked;}, // Call all callbacks with the given context and arguments
	fireWith:function(context,args){if(!locked){args=args||[];args=[context,args.slice?args.slice():args];queue.push(args);if(!firing){fire();}}return this;}, // Call all the callbacks with the given arguments
	fire:function(){self.fireWith(this,arguments);return this;}, // To know if the callbacks have already been called at least once
	fired:function(){return !!fired;}};return self;};jQuery.extend({Deferred:function(func){var tuples=[ // action, add listener, listener list, final state
	["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],state="pending",promise={state:function(){return state;},always:function(){deferred.done(arguments).fail(arguments);return this;},then:function() /* fnDone, fnFail, fnProgress */{var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var fn=jQuery.isFunction(fns[i])&&fns[i]; // deferred[ done | fail | progress ] for forwarding actions to newDefer
	deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);}else {newDefer[tuple[0]+"With"](this===promise?newDefer.promise():this,fn?[returned]:arguments);}});});fns=null;}).promise();}, // Get a promise for this deferred
	// If obj is provided, the promise aspect is added to the object
	promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise;}},deferred={}; // Keep pipe for back-compat
	promise.pipe=promise.then; // Add list-specific methods
	jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3]; // promise[ done | fail | progress ] = list.add
	promise[tuple[1]]=list.add; // Handle state
	if(stateString){list.add(function(){ // state = [ resolved | rejected ]
	state=stateString; // [ reject_list | resolve_list ].disable; progress_list.lock
	},tuples[i^1][2].disable,tuples[2][2].lock);} // deferred[ resolve | reject | notify ]
	deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?promise:this,arguments);return this;};deferred[tuple[0]+"With"]=list.fireWith;}); // Make the deferred a promise
	promise.promise(deferred); // Call given func if any
	if(func){func.call(deferred,deferred);} // All done!
	return deferred;}, // Deferred helper
	when:function(subordinate /* , ..., subordinateN */){var i=0,resolveValues=slice.call(arguments),length=resolveValues.length, // the count of uncompleted subordinates
	remaining=length!==1||subordinate&&jQuery.isFunction(subordinate.promise)?length:0, // the master Deferred.
	// If resolveValues consist of only a single Deferred, just use that.
	deferred=remaining===1?subordinate:jQuery.Deferred(), // Update function for both resolve and progress values
	updateFunc=function(i,contexts,values){return function(value){contexts[i]=this;values[i]=arguments.length>1?slice.call(arguments):value;if(values===progressValues){deferred.notifyWith(contexts,values);}else if(! --remaining){deferred.resolveWith(contexts,values);}};},progressValues,progressContexts,resolveContexts; // Add listeners to Deferred subordinates; treat others as resolved
	if(length>1){progressValues=new Array(length);progressContexts=new Array(length);resolveContexts=new Array(length);for(;i<length;i++){if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().progress(updateFunc(i,progressContexts,progressValues)).done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject);}else {--remaining;}}} // If we're not waiting on anything, resolve the master
	if(!remaining){deferred.resolveWith(resolveContexts,resolveValues);}return deferred.promise();}}); // The deferred used on DOM ready
	var readyList;jQuery.fn.ready=function(fn){ // Add the callback
	jQuery.ready.promise().done(fn);return this;};jQuery.extend({ // Is the DOM ready to be used? Set to true once it occurs.
	isReady:false, // A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait:1, // Hold (or release) the ready event
	holdReady:function(hold){if(hold){jQuery.readyWait++;}else {jQuery.ready(true);}}, // Handle when the DOM is ready
	ready:function(wait){ // Abort if there are pending holds or we're already ready
	if(wait===true?--jQuery.readyWait:jQuery.isReady){return;} // Remember that the DOM is ready
	jQuery.isReady=true; // If a normal DOM Ready event fired, decrement, and wait if need be
	if(wait!==true&&--jQuery.readyWait>0){return;} // If there are functions bound, to execute
	readyList.resolveWith(document,[jQuery]); // Trigger any bound ready events
	if(jQuery.fn.triggerHandler){jQuery(document).triggerHandler("ready");jQuery(document).off("ready");}}}); /**
	 * The ready event handler and self cleanup method
	 */function completed(){document.removeEventListener("DOMContentLoaded",completed);window.removeEventListener("load",completed);jQuery.ready();}jQuery.ready.promise=function(obj){if(!readyList){readyList=jQuery.Deferred(); // Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE9-10 only
	// Older IE sometimes signals "interactive" too soon
	if(document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll){ // Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout(jQuery.ready);}else { // Use the handy event callback
	document.addEventListener("DOMContentLoaded",completed); // A fallback to window.onload, that will always work
	window.addEventListener("load",completed);}}return readyList.promise(obj);}; // Kick off the DOM ready check even if the user does not
	jQuery.ready.promise(); // Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access=function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null; // Sets many values
	if(jQuery.type(key)==="object"){chainable=true;for(i in key){access(elems,fn,i,key[i],true,emptyGet,raw);} // Sets one value
	}else if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=true;}if(bulk){ // Bulk operations run against the entire set
	if(raw){fn.call(elems,value);fn=null; // ...except when executing function values
	}else {bulk=fn;fn=function(elem,key,value){return bulk.call(jQuery(elem),value);};}}if(fn){for(;i<len;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}return chainable?elems: // Gets
	bulk?fn.call(elems):len?fn(elems[0],key):emptyGet;};var acceptData=function(owner){ // Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */return owner.nodeType===1||owner.nodeType===9||! +owner.nodeType;};function Data(){this.expando=jQuery.expando+Data.uid++;}Data.uid=1;Data.prototype={register:function(owner,initial){var value=initial||{}; // If it is a node unlikely to be stringify-ed or looped over
	// use plain assignment
	if(owner.nodeType){owner[this.expando]=value; // Otherwise secure it in a non-enumerable, non-writable property
	// configurability must be true to allow the property to be
	// deleted with the delete operator
	}else {Object.defineProperty(owner,this.expando,{value:value,writable:true,configurable:true});}return owner[this.expando];},cache:function(owner){ // We can accept data for non-element nodes in modern browsers,
	// but we should not, see #8335.
	// Always return an empty object.
	if(!acceptData(owner)){return {};} // Check if the owner object already has a cache
	var value=owner[this.expando]; // If not, create one
	if(!value){value={}; // We can accept data for non-element nodes in modern browsers,
	// but we should not, see #8335.
	// Always return an empty object.
	if(acceptData(owner)){ // If it is a node unlikely to be stringify-ed or looped over
	// use plain assignment
	if(owner.nodeType){owner[this.expando]=value; // Otherwise secure it in a non-enumerable property
	// configurable must be true to allow the property to be
	// deleted when data is removed
	}else {Object.defineProperty(owner,this.expando,{value:value,configurable:true});}}}return value;},set:function(owner,data,value){var prop,cache=this.cache(owner); // Handle: [ owner, key, value ] args
	if(typeof data==="string"){cache[data]=value; // Handle: [ owner, { properties } ] args
	}else { // Copy the properties one-by-one to the cache object
	for(prop in data){cache[prop]=data[prop];}}return cache;},get:function(owner,key){return key===undefined?this.cache(owner):owner[this.expando]&&owner[this.expando][key];},access:function(owner,key,value){var stored; // In cases where either:
	//
	//   1. No key was specified
	//   2. A string key was specified, but no value provided
	//
	// Take the "read" path and allow the get method to determine
	// which value to return, respectively either:
	//
	//   1. The entire cache object
	//   2. The data stored at the key
	//
	if(key===undefined||key&&typeof key==="string"&&value===undefined){stored=this.get(owner,key);return stored!==undefined?stored:this.get(owner,jQuery.camelCase(key));} // When the key is not a string, or both a key and value
	// are specified, set or extend (existing objects) with either:
	//
	//   1. An object of properties
	//   2. A key and value
	//
	this.set(owner,key,value); // Since the "set" path can have two possible entry points
	// return the expected data based on which path was taken[*]
	return value!==undefined?value:key;},remove:function(owner,key){var i,name,camel,cache=owner[this.expando];if(cache===undefined){return;}if(key===undefined){this.register(owner);}else { // Support array or space separated string of keys
	if(jQuery.isArray(key)){ // If "name" is an array of keys...
	// When data is initially created, via ("key", "val") signature,
	// keys will be converted to camelCase.
	// Since there is no way to tell _how_ a key was added, remove
	// both plain key and camelCase key. #12786
	// This will only penalize the array argument path.
	name=key.concat(key.map(jQuery.camelCase));}else {camel=jQuery.camelCase(key); // Try the string as a key before any manipulation
	if(key in cache){name=[key,camel];}else { // If a key with the spaces exists, use it.
	// Otherwise, create an array by matching non-whitespace
	name=camel;name=name in cache?[name]:name.match(rnotwhite)||[];}}i=name.length;while(i--){delete cache[name[i]];}} // Remove the expando if there's no more data
	if(key===undefined||jQuery.isEmptyObject(cache)){ // Support: Chrome <= 35-45+
	// Webkit & Blink performance suffers when deleting properties
	// from DOM nodes, so set to undefined instead
	// https://code.google.com/p/chromium/issues/detail?id=378607
	if(owner.nodeType){owner[this.expando]=undefined;}else {delete owner[this.expando];}}},hasData:function(owner){var cache=owner[this.expando];return cache!==undefined&&!jQuery.isEmptyObject(cache);}};var dataPriv=new Data();var dataUser=new Data(); //	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;function dataAttr(elem,key,data){var name; // If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$&").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null: // Only convert to a number if it doesn't change the string
	+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data;}catch(e){} // Make sure we set the data so it isn't changed later
	dataUser.set(elem,key,data);}else {data=undefined;}}return data;}jQuery.extend({hasData:function(elem){return dataUser.hasData(elem)||dataPriv.hasData(elem);},data:function(elem,name,data){return dataUser.access(elem,name,data);},removeData:function(elem,name){dataUser.remove(elem,name);}, // TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data:function(elem,name,data){return dataPriv.access(elem,name,data);},_removeData:function(elem,name){dataPriv.remove(elem,name);}});jQuery.fn.extend({data:function(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes; // Gets all values
	if(key===undefined){if(this.length){data=dataUser.get(elem);if(elem.nodeType===1&&!dataPriv.get(elem,"hasDataAttrs")){i=attrs.length;while(i--){ // Support: IE11+
	// The attrs elements can be null (#14894)
	if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}dataPriv.set(elem,"hasDataAttrs",true);}}return data;} // Sets multiple values
	if(typeof key==="object"){return this.each(function(){dataUser.set(this,key);});}return access(this,function(value){var data,camelKey; // The calling jQuery object (element matches) is not empty
	// (and therefore has an element appears at this[ 0 ]) and the
	// `value` parameter was not undefined. An empty jQuery object
	// will result in `undefined` for elem = this[ 0 ] which will
	// throw an exception if an attempt to read a data cache is made.
	if(elem&&value===undefined){ // Attempt to get data from the cache
	// with the key as-is
	data=dataUser.get(elem,key)|| // Try to find dashed key if it exists (gh-2779)
	// This is for 2.2.x only
	dataUser.get(elem,key.replace(rmultiDash,"-$&").toLowerCase());if(data!==undefined){return data;}camelKey=jQuery.camelCase(key); // Attempt to get data from the cache
	// with the key camelized
	data=dataUser.get(elem,camelKey);if(data!==undefined){return data;} // Attempt to "discover" the data in
	// HTML5 custom data-* attrs
	data=dataAttr(elem,camelKey,undefined);if(data!==undefined){return data;} // We tried really hard, but the data doesn't exist.
	return;} // Set the data...
	camelKey=jQuery.camelCase(key);this.each(function(){ // First, attempt to store a copy or reference of any
	// data that might've been store with a camelCased key.
	var data=dataUser.get(this,camelKey); // For HTML5 data-* attribute interop, we have to
	// store property names with dashes in a camelCase form.
	// This might not apply to all properties...*
	dataUser.set(this,camelKey,value); // *... In the case of properties that might _actually_
	// have dashes, we need to also store a copy of that
	// unchanged property.
	if(key.indexOf("-")>-1&&data!==undefined){dataUser.set(this,key,value);}});},null,value,arguments.length>1,null,true);},removeData:function(key){return this.each(function(){dataUser.remove(this,key);});}});jQuery.extend({queue:function(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=dataPriv.get(elem,type); // Speed up dequeue by getting out quickly if this is just a lookup
	if(data){if(!queue||jQuery.isArray(data)){queue=dataPriv.access(elem,type,jQuery.makeArray(data));}else {queue.push(data);}}return queue||[];}},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type);}; // If the fx queue is dequeued, always remove the progress sentinel
	if(fn==="inprogress"){fn=queue.shift();startLength--;}if(fn){ // Add a progress sentinel to prevent the fx queue from being
	// automatically dequeued
	if(type==="fx"){queue.unshift("inprogress");} // Clear up the last queue stop function
	delete hooks.stop;fn.call(elem,next,hooks);}if(!startLength&&hooks){hooks.empty.fire();}}, // Not public - generate a queueHooks object, or return the current one
	_queueHooks:function(elem,type){var key=type+"queueHooks";return dataPriv.get(elem,key)||dataPriv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){dataPriv.remove(elem,[type+"queue",key]);})});}});jQuery.fn.extend({queue:function(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}if(arguments.length<setter){return jQuery.queue(this[0],type);}return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data); // Ensure a hooks for this queue
	jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function(type){return this.queue(type||"fx",[]);}, // Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(! --count){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}type=type||"fx";while(i--){tmp=dataPriv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}resolve();return defer.promise(obj);}});var pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");var cssExpand=["Top","Right","Bottom","Left"];var isHidden=function(elem,el){ // isHidden might be called from jQuery#filter function;
	// in that case, element will be second argument
	elem=el||elem;return jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.ownerDocument,elem);};function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale=1,maxIterations=20,currentValue=tween?function(){return tween.cur();}:function(){return jQuery.css(elem,prop,"");},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"), // Starting value computation is required for potential unit mismatches
	initialInUnit=(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){ // Trust units reported by jQuery.css
	unit=unit||initialInUnit[3]; // Make sure we update the tween properties later on
	valueParts=valueParts||[]; // Iteratively approximate from a nonzero starting point
	initialInUnit=+initial||1;do { // If previous iteration zeroed out, double until we get *something*.
	// Use string for doubling so we don't accidentally see scale as unchanged below
	scale=scale||".5"; // Adjust and apply
	initialInUnit=initialInUnit/scale;jQuery.style(elem,prop,initialInUnit+unit); // Update scale, tolerating zero or NaN from tween.cur()
	// Break the loop if scale is unchanged or perfect, or if we've just had enough.
	}while(scale!==(scale=currentValue()/initial)&&scale!==1&&--maxIterations);}if(valueParts){initialInUnit=+initialInUnit||+initial||0; // Apply relative offset (+=/-=) if specified
	adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2];if(tween){tween.unit=unit;tween.start=initialInUnit;tween.end=adjusted;}}return adjusted;}var rcheckableType=/^(?:checkbox|radio)$/i;var rtagName=/<([\w:-]+)/;var rscriptType=/^$|\/(?:java|ecma)script/i; // We have to close these tags to support XHTML (#13200)
	var wrapMap={ // Support: IE9
	option:[1,"<select multiple='multiple'>","</select>"], // XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}; // Support: IE9
	wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;function getAll(context,tag){ // Support: IE9-11+
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret=typeof context.getElementsByTagName!=="undefined"?context.getElementsByTagName(tag||"*"):typeof context.querySelectorAll!=="undefined"?context.querySelectorAll(tag||"*"):[];return tag===undefined||tag&&jQuery.nodeName(context,tag)?jQuery.merge([context],ret):ret;} // Mark scripts as having already been evaluated
	function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i<l;i++){dataPriv.set(elems[i],"globalEval",!refElements||dataPriv.get(refElements[i],"globalEval"));}}var rhtml=/<|&#?\w+;/;function buildFragment(elems,context,scripts,selection,ignored){var elem,tmp,tag,wrap,contains,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){elem=elems[i];if(elem||elem===0){ // Add nodes directly
	if(jQuery.type(elem)==="object"){ // Support: Android<4.1, PhantomJS<2
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(nodes,elem.nodeType?[elem]:elem); // Convert non-html into a text node
	}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
	}else {tmp=tmp||fragment.appendChild(context.createElement("div")); // Deserialize a standard representation
	tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2]; // Descend through wrappers to the right content
	j=wrap[0];while(j--){tmp=tmp.lastChild;} // Support: Android<4.1, PhantomJS<2
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(nodes,tmp.childNodes); // Remember the top-level container
	tmp=fragment.firstChild; // Ensure the created nodes are orphaned (#12392)
	tmp.textContent="";}}} // Remove wrapper from fragment
	fragment.textContent="";i=0;while(elem=nodes[i++]){ // Skip elements already in the context collection (trac-4087)
	if(selection&&jQuery.inArray(elem,selection)>-1){if(ignored){ignored.push(elem);}continue;}contains=jQuery.contains(elem.ownerDocument,elem); // Append to fragment
	tmp=getAll(fragment.appendChild(elem),"script"); // Preserve script evaluation history
	if(contains){setGlobalEval(tmp);} // Capture executables
	if(scripts){j=0;while(elem=tmp[j++]){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}return fragment;}(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input"); // Support: Android 4.0-4.3, Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input); // Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;})();var rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,rtypenamespace=/^([^.]*)(?:\.(.+)|)/;function returnTrue(){return true;}function returnFalse(){return false;} // Support: IE9
	// See #13393 for more info
	function safeActiveElement(){try{return document.activeElement;}catch(err){}}function on(elem,types,selector,data,fn,one){var origFn,type; // Types can be a map of types/handlers
	if(typeof types==="object"){ // ( types-Object, selector, data )
	if(typeof selector!=="string"){ // ( types-Object, data )
	data=data||selector;selector=undefined;}for(type in types){on(elem,type,selector,data,types[type],one);}return elem;}if(data==null&&fn==null){ // ( types, fn )
	fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){ // ( types, selector, fn )
	fn=data;data=undefined;}else { // ( types, data, fn )
	fn=data;data=selector;selector=undefined;}}if(fn===false){fn=returnFalse;}else if(!fn){return elem;}if(one===1){origFn=fn;fn=function(event){ // Can use an empty set, since event contains the info
	jQuery().off(event);return origFn.apply(this,arguments);}; // Use same guid so caller can remove using origFn
	fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}return elem.each(function(){jQuery.event.add(this,types,fn,data,selector);});} /*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */jQuery.event={global:{},add:function(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem); // Don't attach events to noData or text/comment nodes (but allow plain objects)
	if(!elemData){return;} // Caller can pass in an object of custom data in lieu of the handler
	if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;} // Make sure that the handler has a unique ID, used to find/remove it later
	if(!handler.guid){handler.guid=jQuery.guid++;} // Init the element's event structure and main handler, if this is the first
	if(!(events=elemData.events)){events=elemData.events={};}if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){ // Discard the second event of a jQuery.event.trigger() and
	// when an event is called after a page has unloaded
	return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;};} // Handle multiple events separated by a space
	types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort(); // There *must* be a type, no attaching namespace-only handlers
	if(!type){continue;} // If event changes its type, use the special event handlers for the changed type
	special=jQuery.event.special[type]||{}; // If selector defined, determine special event api type, otherwise given type
	type=(selector?special.delegateType:special.bindType)||type; // Update special based on newly reset type
	special=jQuery.event.special[type]||{}; // handleObj is passed to all event handlers
	handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn); // Init the event handler queue if we're the first
	if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0; // Only use addEventListener if the special events handler returns false
	if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle);}}}if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}} // Add to the element's handler list, delegates in front
	if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else {handlers.push(handleObj);} // Keep track of which events have ever been used, for event optimization
	jQuery.event.global[type]=true;}}, // Detach an event or set of events from an element
	remove:function(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);if(!elemData||!(events=elemData.events)){return;} // Once for each type.namespace in types; type may be omitted
	types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element
	if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}continue;}special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"); // Remove matching events
	origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}if(special.remove){special.remove.call(elem,handleObj);}}} // Remove generic event handler if we removed something and no more handlers exist
	// (avoids potential for endless recursion during removal of special event handlers)
	if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}delete events[type];}} // Remove data and the expando if it's no longer used
	if(jQuery.isEmptyObject(events)){dataPriv.remove(elem,"handle events");}},dispatch:function(event){ // Make a writable jQuery.Event from the native event object
	event=jQuery.event.fix(event);var i,j,ret,matched,handleObj,handlerQueue=[],args=slice.call(arguments),handlers=(dataPriv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{}; // Use the fix-ed jQuery.Event rather than the (read-only) native event
	args[0]=event;event.delegateTarget=this; // Call the preDispatch hook for the mapped type, and let it bail if desired
	if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;} // Determine handlers
	handlerQueue=jQuery.event.handlers.call(this,event,handlers); // Run delegates first; they may want to stop propagation beneath us
	i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){ // Triggered event must either 1) have no namespace, or 2) have namespace(s)
	// a subset or equal to those in the bound event (both can have no namespace).
	if(!event.rnamespace||event.rnamespace.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}} // Call the postDispatch hook for the mapped type
	if(special.postDispatch){special.postDispatch.call(this,event);}return event.result;},handlers:function(event,handlers){var i,matches,sel,handleObj,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target; // Support (at least): Chrome, IE9
	// Find delegate handlers
	// Black-hole SVG <use> instance trees (#13180)
	//
	// Support: Firefox<=42+
	// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
	if(delegateCount&&cur.nodeType&&(event.type!=="click"||isNaN(event.button)||event.button<1)){for(;cur!==this;cur=cur.parentNode||this){ // Don't check non-elements (#13208)
	// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
	if(cur.nodeType===1&&(cur.disabled!==true||event.type!=="click")){matches=[];for(i=0;i<delegateCount;i++){handleObj=handlers[i]; // Don't conflict with Object.prototype properties (#13203)
	sel=handleObj.selector+" ";if(matches[sel]===undefined){matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length;}if(matches[sel]){matches.push(handleObj);}}if(matches.length){handlerQueue.push({elem:cur,handlers:matches});}}}} // Add the remaining (directly-bound) handlers
	if(delegateCount<handlers.length){handlerQueue.push({elem:this,handlers:handlers.slice(delegateCount)});}return handlerQueue;}, // Includes some event props shared by KeyEvent and MouseEvent
	props:("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase "+"metaKey relatedTarget shiftKey target timeStamp view which").split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(event,original){ // Add which for key events
	if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode;}return event;}},mouseHooks:{props:("button buttons clientX clientY offsetX offsetY pageX pageY "+"screenX screenY toElement").split(" "),filter:function(event,original){var eventDoc,doc,body,button=original.button; // Calculate pageX/Y if missing and clientX/Y available
	if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;doc=eventDoc.documentElement;body=eventDoc.body;event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0);} // Add which for click: 1 === left; 2 === middle; 3 === right
	// Note: button is not normalized, so don't use it
	if(!event.which&&button!==undefined){event.which=button&1?1:button&2?3:button&4?2:0;}return event;}},fix:function(event){if(event[jQuery.expando]){return event;} // Create a writable copy of the event object and normalize some properties
	var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];if(!fixHook){this.fixHooks[type]=fixHook=rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{};}copy=fixHook.props?this.props.concat(fixHook.props):this.props;event=new jQuery.Event(originalEvent);i=copy.length;while(i--){prop=copy[i];event[prop]=originalEvent[prop];} // Support: Cordova 2.5 (WebKit) (#13255)
	// All events should have a target; Cordova deviceready doesn't
	if(!event.target){event.target=document;} // Support: Safari 6.0+, Chrome<28
	// Target should not be a text node (#504, #13143)
	if(event.target.nodeType===3){event.target=event.target.parentNode;}return fixHook.filter?fixHook.filter(event,originalEvent):event;},special:{load:{ // Prevent triggered image.load events from bubbling to window.load
	noBubble:true},focus:{ // Fire native event if possible so blur/focus sequence is correct
	trigger:function(){if(this!==safeActiveElement()&&this.focus){this.focus();return false;}},delegateType:"focusin"},blur:{trigger:function(){if(this===safeActiveElement()&&this.blur){this.blur();return false;}},delegateType:"focusout"},click:{ // For checkbox, fire native event so checked state will be right
	trigger:function(){if(this.type==="checkbox"&&this.click&&jQuery.nodeName(this,"input")){this.click();return false;}}, // For cross-browser consistency, don't fire native .click() on links
	_default:function(event){return jQuery.nodeName(event.target,"a");}},beforeunload:{postDispatch:function(event){ // Support: Firefox 20+
	// Firefox doesn't alert if the returnValue field is not set.
	if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}}};jQuery.removeEvent=function(elem,type,handle){ // This "if" is needed for plain objects
	if(elem.removeEventListener){elem.removeEventListener(type,handle);}};jQuery.Event=function(src,props){ // Allow instantiation without the 'new' keyword
	if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);} // Event object
	if(src&&src.type){this.originalEvent=src;this.type=src.type; // Events bubbling up the document may have been marked as prevented
	// by a handler lower down the tree; reflect the correct value.
	this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&& // Support: Android<4.0
	src.returnValue===false?returnTrue:returnFalse; // Event type
	}else {this.type=src;} // Put explicitly provided properties onto the event object
	if(props){jQuery.extend(this,props);} // Create a timestamp if incoming event doesn't have one
	this.timeStamp=src&&src.timeStamp||jQuery.now(); // Mark it as fixed
	this[jQuery.expando]=true;}; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e){e.preventDefault();}},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e){e.stopPropagation();}},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e){e.stopImmediatePropagation();}this.stopPropagation();}}; // Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj; // For mouseenter/leave call the handler if related is outside the target.
	// NB: No relatedTarget if the mouse left/entered the browser window
	if(!related||related!==target&&!jQuery.contains(target,related)){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}return ret;}};});jQuery.fn.extend({on:function(types,selector,data,fn){return on(this,types,selector,data,fn);},one:function(types,selector,data,fn){return on(this,types,selector,data,fn,1);},off:function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){ // ( event )  dispatched jQuery.Event
	handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}if(typeof types==="object"){ // ( types-object [, selector] )
	for(type in types){this.off(type,selector,types[type]);}return this;}if(selector===false||typeof selector==="function"){ // ( types [, fn] )
	fn=selector;selector=undefined;}if(fn===false){fn=returnFalse;}return this.each(function(){jQuery.event.remove(this,types,fn,selector);});}});var rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, // Support: IE 10-11, Edge 10240+
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml=/<script|<style|<link/i, // checked="checked" or checked
	rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; // Manipulating tables requires a tbody
	function manipulationTarget(elem,content){return jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType!==11?content:content.firstChild,"tr")?elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody")):elem;} // Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;return elem;}function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1];}else {elem.removeAttribute("type");}return elem;}function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;if(dest.nodeType!==1){return;} // 1. Copy private data: events, handlers, etc.
	if(dataPriv.hasData(src)){pdataOld=dataPriv.access(src);pdataCur=dataPriv.set(dest,pdataOld);events=pdataOld.events;if(events){delete pdataCur.handle;pdataCur.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}} // 2. Copy user data
	if(dataUser.hasData(src)){udataOld=dataUser.access(src);udataCur=jQuery.extend({},udataOld);dataUser.set(dest,udataCur);}} // Fix IE bugs, see support tests
	function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase(); // Fails to persist the checked state of a cloned checkbox or radio button.
	if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked; // Fails to return the selected option to the default selected state when cloning options
	}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}function domManip(collection,args,callback,ignored){ // Flatten any nested arrays
	args=concat.apply([],args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit
	if(isFunction||l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value)){return collection.each(function(index){var self=collection.eq(index);if(isFunction){args[0]=value.call(this,index,self.html());}domManip(self,args,callback,ignored);});}if(l){fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;} // Require either new content or an interest in ignored elements to invoke the callback
	if(first||ignored){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length; // Use the original fragment for the last item
	// instead of the first because it can end up
	// being emptied incorrectly in certain situations (#8070).
	for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true); // Keep references to cloned scripts for later restoration
	if(hasScripts){ // Support: Android<4.1, PhantomJS<2
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(scripts,getAll(node,"script"));}}callback.call(collection[i],node,i);}if(hasScripts){doc=scripts[scripts.length-1].ownerDocument; // Reenable scripts
	jQuery.map(scripts,restoreScript); // Evaluate executable scripts on first document insertion
	for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!dataPriv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){ // Optional AJAX dependency, but won't run scripts if not present
	if(jQuery._evalUrl){jQuery._evalUrl(node.src);}}else {jQuery.globalEval(node.textContent.replace(rcleanScript,""));}}}}}}return collection;}function remove(elem,selector,keepData){var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;for(;(node=nodes[i])!=null;i++){if(!keepData&&node.nodeType===1){jQuery.cleanData(getAll(node));}if(node.parentNode){if(keepData&&jQuery.contains(node.ownerDocument,node)){setGlobalEval(getAll(node,"script"));}node.parentNode.removeChild(node);}}return elem;}jQuery.extend({htmlPrefilter:function(html){return html.replace(rxhtmlTag,"<$1></$2>");},clone:function(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=jQuery.contains(elem.ownerDocument,elem); // Fix IE cloning issues
	if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){ // We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
	destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i]);}} // Copy the events from the original to the clone
	if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i]);}}else {cloneCopyEvent(elem,clone);}} // Preserve script evaluation history
	destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));} // Return the cloned set
	return clone;},cleanData:function(elems){var data,elem,type,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){if(acceptData(elem)){if(data=elem[dataPriv.expando]){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type); // This is a shortcut to avoid jQuery.event.remove's overhead
	}else {jQuery.removeEvent(elem,type,data.handle);}}} // Support: Chrome <= 35-45+
	// Assign undefined instead of using delete, see Data#remove
	elem[dataPriv.expando]=undefined;}if(elem[dataUser.expando]){ // Support: Chrome <= 35-45+
	// Assign undefined instead of using delete, see Data#remove
	elem[dataUser.expando]=undefined;}}}}});jQuery.fn.extend({ // Keep domManip exposed until 3.0 (gh-2225)
	domManip:domManip,detach:function(selector){return remove(this,selector,true);},remove:function(selector){return remove(this,selector);},text:function(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value;}});},null,value,arguments.length);},append:function(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},empty:function(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){ // Prevent memory leaks
	jQuery.cleanData(getAll(elem,false)); // Remove any remaining nodes
	elem.textContent="";}}return this;},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){return elem.innerHTML;} // See if we can take a shortcut and just use innerHTML
	if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=jQuery.htmlPrefilter(value);try{for(;i<l;i++){elem=this[i]||{}; // Remove element nodes and prevent memory leaks
	if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}elem=0; // If using innerHTML throws an exception, use the fallback method
	}catch(e){}}if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function(){var ignored=[]; // Make the changes, replacing each non-ignored context element with the new content
	return domManip(this,arguments,function(elem){var parent=this.parentNode;if(jQuery.inArray(this,ignored)<0){jQuery.cleanData(getAll(this));if(parent){parent.replaceChild(elem,this);}} // Force callback invocation
	},ignored);}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems); // Support: QtWebKit
	// .get() because push.apply(_, arraylike) throws
	push.apply(ret,elems.get());}return this.pushStack(ret);};});var iframe,elemdisplay={ // Support: Firefox
	// We have to pre-define these values for FF (#10227)
	HTML:"block",BODY:"block"}; /**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */ // Called only from within defaultDisplay
	function actualDisplay(name,doc){var elem=jQuery(doc.createElement(name)).appendTo(doc.body),display=jQuery.css(elem[0],"display"); // We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();return display;} /**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */function defaultDisplay(nodeName){var doc=document,display=elemdisplay[nodeName];if(!display){display=actualDisplay(nodeName,doc); // If the simple way fails, read from inside an iframe
	if(display==="none"||!display){ // Use the already-created iframe if possible
	iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement); // Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
	doc=iframe[0].contentDocument; // Support: IE
	doc.write();doc.close();display=actualDisplay(nodeName,doc);iframe.detach();} // Store the correct default display
	elemdisplay[nodeName]=display;}return display;}var rmargin=/^margin/;var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles=function(elem){ // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
	// IE throws on elements created in popups
	// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
	var view=elem.ownerDocument.defaultView;if(!view||!view.opener){view=window;}return view.getComputedStyle(elem);};var swap=function(elem,options,callback,args){var ret,name,old={}; // Remember the old values, and insert the new ones
	for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}ret=callback.apply(elem,args||[]); // Revert the old values
	for(name in options){elem.style[name]=old[name];}return ret;};var documentElement=document.documentElement;(function(){var pixelPositionVal,boxSizingReliableVal,pixelMarginRightVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div"); // Finish early in limited (non-browser) environments
	if(!div.style){return;} // Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";container.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;"+"padding:0;margin-top:1px;position:absolute";container.appendChild(div); // Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests(){div.style.cssText= // Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;"+"position:relative;display:block;"+"margin:auto;border:1px;padding:1px;"+"top:1%;width:50%";div.innerHTML="";documentElement.appendChild(container);var divStyle=window.getComputedStyle(div);pixelPositionVal=divStyle.top!=="1%";reliableMarginLeftVal=divStyle.marginLeft==="2px";boxSizingReliableVal=divStyle.width==="4px"; // Support: Android 4.0 - 4.3 only
	// Some styles come back with percentage values, even though they shouldn't
	div.style.marginRight="50%";pixelMarginRightVal=divStyle.marginRight==="4px";documentElement.removeChild(container);}jQuery.extend(support,{pixelPosition:function(){ // This test is executed only once but we still do memoizing
	// since we can use the boxSizingReliable pre-computing.
	// No need to check if the test was already performed, though.
	computeStyleTests();return pixelPositionVal;},boxSizingReliable:function(){if(boxSizingReliableVal==null){computeStyleTests();}return boxSizingReliableVal;},pixelMarginRight:function(){ // Support: Android 4.0-4.3
	// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
	// since that compresses better and they're computed together anyway.
	if(boxSizingReliableVal==null){computeStyleTests();}return pixelMarginRightVal;},reliableMarginLeft:function(){ // Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
	if(boxSizingReliableVal==null){computeStyleTests();}return reliableMarginLeftVal;},reliableMarginRight:function(){ // Support: Android 2.3
	// Check if div with explicit width and no margin-right incorrectly
	// gets computed margin-right based on width of container. (#3333)
	// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
	// This support function is only executed once so no memoizing is needed.
	var ret,marginDiv=div.appendChild(document.createElement("div")); // Reset CSS: box-sizing; display; margin; border; padding
	marginDiv.style.cssText=div.style.cssText= // Support: Android 2.3
	// Vendor-prefix box-sizing
	"-webkit-box-sizing:content-box;box-sizing:content-box;"+"display:block;margin:0;border:0;padding:0";marginDiv.style.marginRight=marginDiv.style.width="0";div.style.width="1px";documentElement.appendChild(container);ret=!parseFloat(window.getComputedStyle(marginDiv).marginRight);documentElement.removeChild(container);div.removeChild(marginDiv);return ret;}});})();function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed=computed||getStyles(elem);ret=computed?computed.getPropertyValue(name)||computed[name]:undefined; // Support: Opera 12.1x only
	// Fall back to style even without computed
	// computed is undefined for elems on document fragments
	if((ret===""||ret===undefined)&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);} // Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if(computed){ // A tribute to the "awesome hack by Dean Edwards"
	// Android Browser returns percentage for some values,
	// but width seems to be reliably pixels.
	// This is against the CSSOM draft spec:
	// http://dev.w3.org/csswg/cssom/#resolved-values
	if(!support.pixelMarginRight()&&rnumnonpx.test(ret)&&rmargin.test(name)){ // Remember the original values
	width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth; // Put in the new values to get a computed value out
	style.minWidth=style.maxWidth=style.width=ret;ret=computed.width; // Revert the changed values
	style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}return ret!==undefined? // Support: IE9-11+
	// IE returns zIndex value as an integer.
	ret+"":ret;}function addGetHookIf(conditionFn,hookFn){ // Define the hook, we'll check on the first run if it's really needed.
	return {get:function(){if(conditionFn()){ // Hook not needed (or it's not possible to use it due
	// to missing dependency), remove it.
	delete this.get;return;} // Hook needed; redefine it so that the support test is not executed again.
	return (this.get=hookFn).apply(this,arguments);}};}var  // Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap=/^(none|table(?!-c[ea]).+)/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","O","Moz","ms"],emptyStyle=document.createElement("div").style; // Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName(name){ // Shortcut for names that are not vendor prefixed
	if(name in emptyStyle){return name;} // Check for vendor prefixed names
	var capName=name[0].toUpperCase()+name.slice(1),i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in emptyStyle){return name;}}}function setPositiveNumber(elem,value,subtract){ // Any relative (+/-) values have already been
	// normalized at this point
	var matches=rcssNum.exec(value);return matches? // Guard against undefined "subtract", e.g., when used as in cssHooks
	Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):value;}function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra===(isBorderBox?"border":"content")? // If we already have the right measurement, avoid augmentation
	4: // Otherwise initialize for horizontal or vertical properties
	name==="width"?1:0,val=0;for(;i<4;i+=2){ // Both box models exclude margin, so add it if we want it
	if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles);}if(isBorderBox){ // border-box includes padding, so remove it if we want content
	if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);} // At this point, extra isn't border nor margin, so remove border
	if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else { // At this point, extra isn't content, so add padding
	val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles); // At this point, extra isn't content nor padding, so add border
	if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}return val;}function getWidthOrHeight(elem,name,extra){ // Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox=true,val=name==="width"?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box"; // Support: IE11 only
	// In IE 11 fullscreen elements inside of an iframe have
	// 100x too small dimensions (gh-1764).
	if(document.msFullscreenElement&&window.top!==window){ // Support: IE11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if(elem.getClientRects().length){val=Math.round(elem.getBoundingClientRect()[name]*100);}} // Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if(val<=0||val==null){ // Fall back to computed then uncomputed css if necessary
	val=curCSS(elem,name,styles);if(val<0||val==null){val=elem.style[name];} // Computed unit is not pixels. Stop here and return.
	if(rnumnonpx.test(val)){return val;} // Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox=isBorderBox&&(support.boxSizingReliable()||val===elem.style[name]); // Normalize "", auto, and prepare for extra
	val=parseFloat(val)||0;} // Use the active box-sizing model to add/subtract irrelevant styles
	return val+augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles)+"px";}function showHide(elements,show){var display,elem,hidden,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}values[index]=dataPriv.get(elem,"olddisplay");display=elem.style.display;if(show){ // Reset the inline display of this element to learn if it is
	// being hidden by cascaded rules or not
	if(!values[index]&&display==="none"){elem.style.display="";} // Set elements which have been overridden with display: none
	// in a stylesheet to whatever the default browser style is
	// for such an element
	if(elem.style.display===""&&isHidden(elem)){values[index]=dataPriv.access(elem,"olddisplay",defaultDisplay(elem.nodeName));}}else {hidden=isHidden(elem);if(display!=="none"||!hidden){dataPriv.set(elem,"olddisplay",hidden?display:jQuery.css(elem,"display"));}}} // Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for(index=0;index<length;index++){elem=elements[index];if(!elem.style){continue;}if(!show||elem.style.display==="none"||elem.style.display===""){elem.style.display=show?values[index]||"":"none";}}return elements;}jQuery.extend({ // Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks:{opacity:{get:function(elem,computed){if(computed){ // We should always get a number back from opacity
	var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}}, // Don't automatically add "px" to these possibly-unitless properties
	cssNumber:{"animationIterationCount":true,"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true}, // Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps:{"float":"cssFloat"}, // Get and set the style property on a DOM Node
	style:function(elem,name,value,extra){ // Don't set styles on text and comment nodes
	if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;} // Make sure that we're working with the right name
	var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName); // Gets hook for the prefixed version, then unprefixed version
	hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName]; // Check if we're setting a value
	if(value!==undefined){type=typeof value; // Convert "+=" or "-=" to relative numbers (#7345)
	if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){value=adjustCSS(elem,name,ret); // Fixes bug #9237
	type="number";} // Make sure that null and NaN values aren't set (#7116)
	if(value==null||value!==value){return;} // If a number was passed in, add the unit (except for certain CSS properties)
	if(type==="number"){value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");} // Support: IE9-11+
	// background-* props affect original clone's values
	if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";} // If a hook was provided, use that value, otherwise just set the specified value
	if(!hooks||!("set" in hooks)||(value=hooks.set(elem,value,extra))!==undefined){style[name]=value;}}else { // If a hook was provided get the non-computed value from there
	if(hooks&&"get" in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;} // Otherwise just get the value from the style object
	return style[name];}},css:function(elem,name,extra,styles){var val,num,hooks,origName=jQuery.camelCase(name); // Make sure that we're working with the right name
	name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName); // Try prefixed name followed by the unprefixed name
	hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName]; // If a hook was provided get the computed value from there
	if(hooks&&"get" in hooks){val=hooks.get(elem,true,extra);} // Otherwise, if a way to get the computed value exists, use that
	if(val===undefined){val=curCSS(elem,name,styles);} // Convert "normal" to computed value
	if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];} // Make numeric if forced or a qualifier was provided and val looks numeric
	if(extra===""||extra){num=parseFloat(val);return extra===true||isFinite(num)?num||0:val;}return val;}});jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function(elem,computed,extra){if(computed){ // Certain elements can have dimension info if we invisibly show them
	// but it must have a current display style that would benefit
	return rdisplayswap.test(jQuery.css(elem,"display"))&&elem.offsetWidth===0?swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);}):getWidthOrHeight(elem,name,extra);}},set:function(elem,value,extra){var matches,styles=extra&&getStyles(elem),subtract=extra&&augmentWidthOrHeight(elem,name,extra,jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles); // Convert to pixels if value adjustment is needed
	if(subtract&&(matches=rcssNum.exec(value))&&(matches[3]||"px")!=="px"){elem.style[name]=value;value=jQuery.css(elem,name);}return setPositiveNumber(elem,value,subtract);}};});jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){if(computed){return (parseFloat(curCSS(elem,"marginLeft"))||elem.getBoundingClientRect().left-swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left;}))+"px";}}); // Support: Android 2.3
	jQuery.cssHooks.marginRight=addGetHookIf(support.reliableMarginRight,function(elem,computed){if(computed){return swap(elem,{"display":"inline-block"},curCSS,[elem,"marginRight"]);}}); // These hooks are used by animate to expand properties
	jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){var i=0,expanded={}, // Assumes a single number if not a string
	parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(jQuery.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}return map;}return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);},show:function(){return showHide(this,true);},hide:function(){return showHide(this);},toggle:function(state){if(typeof state==="boolean"){return state?this.show():this.hide();}return this.each(function(){if(isHidden(this)){jQuery(this).show();}else {jQuery(this).hide();}});}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||jQuery.easing._default;this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else {this.pos=eased=percent;}this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}if(hooks&&hooks.set){hooks.set(this);}else {Tween.propHooks._default.set(this);}return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function(tween){var result; // Use a property on the element directly when it is not a DOM element,
	// or when there is no matching style property that exists.
	if(tween.elem.nodeType!==1||tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){return tween.elem[tween.prop];} // Passing an empty string as a 3rd parameter to .css will automatically
	// attempt a parseFloat and fallback to a string if the parse fails.
	// Simple values such as "10px" are parsed to Float;
	// complex values such as "rotate(1rad)" are returned as-is.
	result=jQuery.css(tween.elem,tween.prop,""); // Empty strings, null, undefined and "auto" are converted to 0.
	return !result||result==="auto"?0:result;},set:function(tween){ // Use step hook for back compat.
	// Use cssHook if its there.
	// Use .style if available and use plain properties where available.
	if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.nodeType===1&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else {tween.elem[tween.prop]=tween.now;}}}}; // Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function(p){return p;},swing:function(p){return 0.5-Math.cos(p*Math.PI)/2;},_default:"swing"};jQuery.fx=Tween.prototype.init; // Back Compat <1.8 extension point
	jQuery.fx.step={};var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/; // Animations created synchronously will run synchronously
	function createFxNow(){window.setTimeout(function(){fxNow=undefined;});return fxNow=jQuery.now();} // Generate parameters to create a standard animation
	function genFx(type,includeWidth){var which,i=0,attrs={height:type}; // If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}if(includeWidth){attrs.opacity=attrs.width=type;}return attrs;}function createTween(value,prop,animation){var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if(tween=collection[index].call(animation,prop,value)){ // We're done with this property
	return tween;}}}function defaultPrefilter(elem,props,opts){ /* jshint validthis: true */var prop,value,toggle,tween,hooks,oldfire,display,checkDisplay,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHidden(elem),dataShow=dataPriv.get(elem,"fxshow"); // Handle queue: false promises
	if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}hooks.unqueued++;anim.always(function(){ // Ensure the complete handler is called before this completes
	anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});} // Height/width overflow pass
	if(elem.nodeType===1&&("height" in props||"width" in props)){ // Make sure that nothing sneaks out
	// Record all 3 overflow attributes because IE9-10 do not
	// change the overflow attribute when overflowX and
	// overflowY are set to the same value
	opts.overflow=[style.overflow,style.overflowX,style.overflowY]; // Set display property to inline-block for height/width
	// animations on inline elements that are having width/height animated
	display=jQuery.css(elem,"display"); // Test default display if display is currently "none"
	checkDisplay=display==="none"?dataPriv.get(elem,"olddisplay")||defaultDisplay(elem.nodeName):display;if(checkDisplay==="inline"&&jQuery.css(elem,"float")==="none"){style.display="inline-block";}}if(opts.overflow){style.overflow="hidden";anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});} // show/hide pass
	for(prop in props){value=props[prop];if(rfxtypes.exec(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){ // If there is dataShow left over from a stopped hide or show
	// and we are going to proceed with show, we should pretend to be hidden
	if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;}else {continue;}}orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop); // Any non-fx value stops us from restoring the original display value
	}else {display=undefined;}}if(!jQuery.isEmptyObject(orig)){if(dataShow){if("hidden" in dataShow){hidden=dataShow.hidden;}}else {dataShow=dataPriv.access(elem,"fxshow",{});} // Store state if its toggle - enables .stop().toggle() to "reverse"
	if(toggle){dataShow.hidden=!hidden;}if(hidden){jQuery(elem).show();}else {anim.done(function(){jQuery(elem).hide();});}anim.done(function(){var prop;dataPriv.remove(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});for(prop in orig){tween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=tween.start;if(hidden){tween.end=tween.start;tween.start=prop==="width"||prop==="height"?1:0;}}} // If this is a noop like .hide().hide(), restore an overwritten display value
	}else if((display==="none"?defaultDisplay(elem.nodeName):display)==="inline"){style.display=display;}}function propFilter(props,specialEasing){var index,name,easing,value,hooks; // camelCase, specialEasing and expand cssHook pass
	for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0];}if(index!==name){props[name]=value;delete props[index];}hooks=jQuery.cssHooks[name];if(hooks&&"expand" in hooks){value=hooks.expand(value);delete props[name]; // Not quite $.extend, this won't overwrite existing keys.
	// Reusing 'index' because we have the correct "name"
	for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else {specialEasing[name]=easing;}}}function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){ // Don't match elem in the :animated selector
	delete tick.elem;}),tick=function(){if(stopped){return false;}var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime), // Support: Android 2.3
	// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
	temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}else {deferred.resolveWith(elem,[animation]);return false;}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function(gotoEnd){var index=0, // If we are going to the end, we want to run all the tweens
	// otherwise we skip this part
	length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}stopped=true;for(;index<length;index++){animation.tweens[index].run(1);} // Resolve when we played the last frame; otherwise, reject
	if(gotoEnd){deferred.notifyWith(elem,[animation,1,0]);deferred.resolveWith(elem,[animation,gotoEnd]);}else {deferred.rejectWith(elem,[animation,gotoEnd]);}return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=Animation.prefilters[index].call(animation,elem,props,animation.opts);if(result){if(jQuery.isFunction(result.stop)){jQuery._queueHooks(animation.elem,animation.opts.queue).stop=jQuery.proxy(result.stop,result);}return result;}}jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue})); // attach callbacks from options
	return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);}jQuery.Animation=jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);return tween;}]},tweener:function(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"];}else {props=props.match(rnotwhite);}var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];Animation.tweeners[prop]=Animation.tweeners[prop]||[];Animation.tweeners[prop].unshift(callback);}},prefilters:[defaultPrefilter],prefilter:function(callback,prepend){if(prepend){Animation.prefilters.unshift(callback);}else {Animation.prefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default; // Normalize opt.queue - true/undefined/null -> "fx"
	if(opt.queue==null||opt.queue===true){opt.queue="fx";} // Queueing
	opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){ // Show any hidden elements after setting opacity to 0
	return this.filter(isHidden).css("opacity",0).show() // Animate to the value specified
	.end().animate({opacity:to},speed,easing,callback);},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){ // Operate on a copy of prop so per-property easing won't be lost
	var anim=Animation(this,jQuery.extend({},prop),optall); // Empty animations, or finishing resolves immediately
	if(empty||dataPriv.get(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}if(clearQueue&&type!==false){this.queue(type||"fx",[]);}return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=dataPriv.get(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else {for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}} // Start the next in the queue if the last step wasn't forced.
	// Timers currently will call their complete callbacks, which
	// will dequeue but only if they were gotoEnd.
	if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function(type){if(type!==false){type=type||"fx";}return this.each(function(){var index,data=dataPriv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0; // Enable finishing flag on private data
	data.finish=true; // Empty the queue first
	jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);} // Look for any active animations, and finish them
	for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}} // Look for any animations in the old queue and finish them
	for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}} // Turn off finishing flag
	delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};}); // Generate shortcuts for custom animations
	jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i]; // Checks the timer has not already been removed
	if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}if(!timers.length){jQuery.fx.stop();}fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);if(timer()){jQuery.fx.start();}else {jQuery.timers.pop();}};jQuery.fx.interval=13;jQuery.fx.start=function(){if(!timerId){timerId=window.setInterval(jQuery.fx.tick,jQuery.fx.interval);}};jQuery.fx.stop=function(){window.clearInterval(timerId);timerId=null;};jQuery.fx.speeds={slow:600,fast:200, // Default speed
	_default:400}; // Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop=function(){window.clearTimeout(timeout);};});};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox"; // Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn=input.value!==""; // Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected=opt.selected; // Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled=true;support.optDisabled=!opt.disabled; // Support: IE<=11+
	// An input loses its value after becoming a radio
	input=document.createElement("input");input.value="t";input.type="radio";support.radioValue=input.value==="t";})();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function(elem,name,value){var ret,hooks,nType=elem.nodeType; // Don't get/set attributes on text, comment and attribute nodes
	if(nType===3||nType===8||nType===2){return;} // Fallback to prop when attributes are not supported
	if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);} // All attributes are lowercase
	// Grab necessary hook if one is defined
	if(nType!==1||!jQuery.isXMLDoc(elem)){name=name.toLowerCase();hooks=jQuery.attrHooks[name]||(jQuery.expr.match.bool.test(name)?boolHook:undefined);}if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}if(hooks&&"set" in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}elem.setAttribute(name,value+"");return value;}if(hooks&&"get" in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}ret=jQuery.find.attr(elem,name); // Non-existent attributes return null, we normalize to undefined
	return ret==null?undefined:ret;},attrHooks:{type:{set:function(elem,value){if(!support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}return value;}}}},removeAttr:function(elem,value){var name,propName,i=0,attrNames=value&&value.match(rnotwhite);if(attrNames&&elem.nodeType===1){while(name=attrNames[i++]){propName=jQuery.propFix[name]||name; // Boolean attributes get special treatment (#10870)
	if(jQuery.expr.match.bool.test(name)){ // Set corresponding property to false
	elem[propName]=false;}elem.removeAttribute(name);}}}}); // Hooks for boolean attributes
	boolHook={set:function(elem,value,name){if(value===false){ // Remove boolean attributes when set to false
	jQuery.removeAttr(elem,name);}else {elem.setAttribute(name,name);}return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle;if(!isXML){ // Avoid an infinite loop by temporarily removing this function from the getter
	handle=attrHandle[name];attrHandle[name]=ret;ret=getter(elem,name,isXML)!=null?name.toLowerCase():null;attrHandle[name]=handle;}return ret;};});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function(name){return this.each(function(){delete this[jQuery.propFix[name]||name];});}});jQuery.extend({prop:function(elem,name,value){var ret,hooks,nType=elem.nodeType; // Don't get/set properties on text, comment and attribute nodes
	if(nType===3||nType===8||nType===2){return;}if(nType!==1||!jQuery.isXMLDoc(elem)){ // Fix name and attach hooks
	name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}if(value!==undefined){if(hooks&&"set" in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}return elem[name]=value;}if(hooks&&"get" in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}return elem[name];},propHooks:{tabIndex:{get:function(elem){ // elem.tabIndex doesn't always return the
	// correct value when it hasn't been explicitly set
	// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
	// Use proper attribute retrieval(#12072)
	var tabindex=jQuery.find.attr(elem,"tabindex");return tabindex?parseInt(tabindex,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:-1;}}},propFix:{"for":"htmlFor","class":"className"}}); // Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if(!support.optSelected){jQuery.propHooks.selected={get:function(elem){var parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.selectedIndex;}return null;},set:function(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}}};}jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});var rclass=/[\t\r\n\f]/g;function getClass(elem){return elem.getAttribute&&elem.getAttribute("class")||"";}jQuery.fn.extend({addClass:function(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)));});}if(typeof value==="string"&&value){classes=value.match(rnotwhite)||[];while(elem=this[i++]){curValue=getClass(elem);cur=elem.nodeType===1&&(" "+curValue+" ").replace(rclass," ");if(cur){j=0;while(clazz=classes[j++]){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}} // Only assign if different to avoid unneeded rendering.
	finalValue=jQuery.trim(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},removeClass:function(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)));});}if(!arguments.length){return this.attr("class","");}if(typeof value==="string"&&value){classes=value.match(rnotwhite)||[];while(elem=this[i++]){curValue=getClass(elem); // This expression is here for better compressibility (see addClass)
	cur=elem.nodeType===1&&(" "+curValue+" ").replace(rclass," ");if(cur){j=0;while(clazz=classes[j++]){ // Remove *all* instances
	while(cur.indexOf(" "+clazz+" ")>-1){cur=cur.replace(" "+clazz+" "," ");}} // Only assign if different to avoid unneeded rendering.
	finalValue=jQuery.trim(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},toggleClass:function(value,stateVal){var type=typeof value;if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value);}if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal);});}return this.each(function(){var className,i,self,classNames;if(type==="string"){ // Toggle individual class names
	i=0;self=jQuery(this);classNames=value.match(rnotwhite)||[];while(className=classNames[i++]){ // Check each className given, space separated list
	if(self.hasClass(className)){self.removeClass(className);}else {self.addClass(className);}} // Toggle whole class name
	}else if(value===undefined||type==="boolean"){className=getClass(this);if(className){ // Store className if set
	dataPriv.set(this,"__className__",className);} // If the element has a class name or if we're passed `false`,
	// then remove the whole classname (if there was one, the above saved it).
	// Otherwise bring back whatever was previously saved (if anything),
	// falling back to the empty string if nothing was stored.
	if(this.setAttribute){this.setAttribute("class",className||value===false?"":dataPriv.get(this,"__className__")||"");}}});},hasClass:function(selector){var className,elem,i=0;className=" "+selector+" ";while(elem=this[i++]){if(elem.nodeType===1&&(" "+getClass(elem)+" ").replace(rclass," ").indexOf(className)>-1){return true;}}return false;}});var rreturn=/\r/g,rspaces=/[\x20\t\r\n\f]+/g;jQuery.fn.extend({val:function(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get" in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}ret=elem.value;return typeof ret==="string"? // Handle most common string cases
	ret.replace(rreturn,""): // Handle cases where value is null/undef or number
	ret==null?"":ret;}return;}isFunction=jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}if(isFunction){val=value.call(this,i,jQuery(this).val());}else {val=value;} // Treat null/undefined as ""; convert numbers to string
	if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting
	if(!hooks||!("set" in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val: // Support: IE10-11+
	// option.text throws exceptions (#14686, #14858)
	// Strip and collapse whitespace
	// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
	jQuery.trim(jQuery.text(elem)).replace(rspaces," ");}},select:{get:function(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one"||index<0,values=one?null:[],max=one?index+1:options.length,i=index<0?max:one?index:0; // Loop through all the selected options
	for(;i<max;i++){option=options[i]; // IE8-9 doesn't update selected after form reset (#2551)
	if((option.selected||i===index)&&( // Don't return options that are disabled or in a disabled optgroup
	support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){ // Get the specific value for the option
	value=jQuery(option).val(); // We don't need an array for one selects
	if(one){return value;} // Multi-Selects return an array
	values.push(value);}}return values;},set:function(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];if(option.selected=jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1){optionSet=true;}} // Force browsers to behave consistently when non-matching value is set
	if(!optionSet){elem.selectedIndex=-1;}return values;}}}}); // Radios and checkboxes getter/setter
	jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(elem,value){if(jQuery.isArray(value)){return elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1;}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}}); // Return jQuery for attributes-only inclusion
	var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/;jQuery.extend(jQuery.event,{trigger:function(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document; // Don't do events on text and comment nodes
	if(elem.nodeType===3||elem.nodeType===8){return;} // focus/blur morphs to focusin/out; ensure we're not firing them right now
	if(rfocusMorph.test(type+jQuery.event.triggered)){return;}if(type.indexOf(".")>-1){ // Namespaced trigger; create a regexp to match event type in handle()
	namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}ontype=type.indexOf(":")<0&&"on"+type; // Caller can pass in a jQuery.Event object, Object, or just an event type string
	event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==="object"&&event); // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
	event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.rnamespace=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null; // Clean up the event in case it is being reused
	event.result=undefined;if(!event.target){event.target=elem;} // Clone any incoming data and prepend the event, creating the handler arg list
	data=data==null?[event]:jQuery.makeArray(data,[event]); // Allow special events to draw outside the lines
	special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;} // Determine event propagation path in advance, per W3C events spec (#9951)
	// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
	if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;} // Only add window if we got to document (e.g., not plain obj or detached DOM)
	if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}} // Fire handlers on the event path
	i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type; // jQuery handler
	handle=(dataPriv.get(cur,"events")||{})[event.type]&&dataPriv.get(cur,"handle");if(handle){handle.apply(cur,data);} // Native handler
	handle=ontype&&cur[ontype];if(handle&&handle.apply&&acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}event.type=type; // If nobody prevented the default action, do it now
	if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&acceptData(elem)){ // Call a native DOM method on the target with the same name name as the event.
	// Don't do default actions on window, that's where global variables be (#6170)
	if(ontype&&jQuery.isFunction(elem[type])&&!jQuery.isWindow(elem)){ // Don't re-trigger an onFOO event when we call its FOO() method
	tmp=elem[ontype];if(tmp){elem[ontype]=null;} // Prevent re-triggering of the same event, since we already bubbled it above
	jQuery.event.triggered=type;elem[type]();jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}return event.result;}, // Piggyback on a donor event to simulate a different one
	simulate:function(type,elem,event){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true // Previously, `originalEvent: {}` was set here, so stopPropagation call
	// would not be triggered on donor event, since in our own
	// jQuery.event.stopPropagation function we had a check for existence of
	// originalEvent.stopPropagation method, so, consequently it would be a noop.
	//
	// But now, this "simulate" function is used only for events
	// for which stopPropagation() is noop, so there is no need for that anymore.
	//
	// For the 1.x branch though, guard for "click" and "submit"
	// events is still used, but was moved to jQuery.event.stopPropagation function
	// because `originalEvent` should point to the original event for the constancy
	// with other events and for more focused logic
	});jQuery.event.trigger(e,null,elem);if(e.isDefaultPrevented()){event.preventDefault();}}});jQuery.fn.extend({trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){ // Handle event binding
	jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});support.focusin="onfocusin" in window; // Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if(!support.focusin){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){ // Attach a single capturing handler on the document while someone wants focusin/focusout
	var handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));};jQuery.event.special[fix]={setup:function(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}dataPriv.access(doc,fix,(attaches||0)+1);},teardown:function(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,true);dataPriv.remove(doc,fix);}else {dataPriv.access(doc,fix,attaches);}}};});}var location=window.location;var nonce=jQuery.now();var rquery=/\?/; // Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON=function(data){return JSON.parse(data+"");}; // Cross-browser xml parsing
	jQuery.parseXML=function(data){var xml;if(!data||typeof data!=="string"){return null;} // Support: IE9
	try{xml=new window.DOMParser().parseFromString(data,"text/xml");}catch(e){xml=undefined;}if(!xml||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}return xml;};var rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg, // #7653, #8125, #8152: local protocol detection
	rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//, /* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */prefilters={}, /* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */transports={}, // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes="*/".concat("*"), // Anchor tag for parsing the document origin
	originAnchor=document.createElement("a");originAnchor.href=location.href; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports(structure){ // dataTypeExpression is optional and defaults to "*"
	return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite)||[];if(jQuery.isFunction(func)){ // For each dataType in the dataTypeExpression
	while(dataType=dataTypes[i++]){ // Prepend if requested
	if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func); // Otherwise append
	}else {(structure[dataType]=structure[dataType]||[]).push(func);}}}};} // Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=structure===transports;function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return !(selected=dataTypeOrTransport);}});return selected;}return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");} // A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:deep||(deep={}))[key]=src[key];}}if(deep){jQuery.extend(true,target,deep);}return target;} /* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes; // Remove auto dataType and get content-type in the process
	while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}} // Check if we're dealing with a known content-type
	if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}} // Check to see if we have a response for the expected dataType
	if(dataTypes[0] in responses){finalDataType=dataTypes[0];}else { // Try convertible dataTypes
	for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}if(!firstDataType){firstDataType=type;}} // Or just use first one
	finalDataType=finalDataType||firstDataType;} // If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}return responses[finalDataType];}} /* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={}, // Work with a copy of dataTypes in case we need to modify it for conversion
	dataTypes=s.dataTypes.slice(); // Create converters map with lowercased keys
	if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}current=dataTypes.shift(); // Convert to each sequential dataType
	while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;} // Apply the dataFilter if provided
	if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}prev=current;current=dataTypes.shift();if(current){ // There's only work to do if current dataType is non-auto
	if(current==="*"){current=prev; // Convert response if prev dataType is non-auto and differs from current
	}else if(prev!=="*"&&prev!==current){ // Seek a direct converter
	conv=converters[prev+" "+current]||converters["* "+current]; // If none found, seek a pair
	if(!conv){for(conv2 in converters){ // If conv2 outputs current
	tmp=conv2.split(" ");if(tmp[1]===current){ // If prev can be converted to accepted input
	conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){ // Condense equivalence converters
	if(conv===true){conv=converters[conv2]; // Otherwise, insert the intermediate dataType
	}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}break;}}}} // Apply converter (if not an equivalence)
	if(conv!==true){ // Unless errors are allowed to bubble, catch and return them
	if(conv&&s.throws){response=conv(response);}else {try{response=conv(response);}catch(e){return {state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}return {state:"success",data:response};}jQuery.extend({ // Counter for holding the number of active queries
	active:0, // Last-Modified header cache for next request
	lastModified:{},etag:{},ajaxSettings:{url:location.href,type:"GET",isLocal:rlocalProtocol.test(location.protocol),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8", /*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"}, // Data converters
	// Keys separate source (or catchall "*") and destination types with a single space
	converters:{ // Convert anything to text
	"* text":String, // Text to html (true = no transformation)
	"text html":true, // Evaluate text as a json expression
	"text json":jQuery.parseJSON, // Parse text as xml
	"text xml":jQuery.parseXML}, // For options that shouldn't be deep extended:
	// you can add your own custom options here if
	// and when you create one that shouldn't be
	// deep extended (see ajaxExtend)
	flatOptions:{url:true,context:true}}, // Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup:function(target,settings){return settings? // Building a settings object
	ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings): // Extending ajaxSettings
	ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports), // Main method
	ajax:function(url,options){ // If url is an object, simulate pre-1.5 signature
	if(typeof url==="object"){options=url;url=undefined;} // Force options to be an object
	options=options||{};var transport, // URL without anti-cache param
	cacheURL, // Response headers
	responseHeadersString,responseHeaders, // timeout handle
	timeoutTimer, // Url cleanup var
	urlAnchor, // To know if global events are to be dispatched
	fireGlobals, // Loop variable
	i, // Create the final options object
	s=jQuery.ajaxSetup({},options), // Callbacks context
	callbackContext=s.context||s, // Context for global events is callbackContext if it is a DOM node or jQuery collection
	globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event, // Deferreds
	deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"), // Status-dependent callbacks
	statusCode=s.statusCode||{}, // Headers (they are sent all at once)
	requestHeaders={},requestHeadersNames={}, // The jqXHR state
	state=0, // Default abort message
	strAbort="canceled", // Fake xhr
	jqXHR={readyState:0, // Builds headers hashtable if needed
	getResponseHeader:function(key){var match;if(state===2){if(!responseHeaders){responseHeaders={};while(match=rheaders.exec(responseHeadersString)){responseHeaders[match[1].toLowerCase()]=match[2];}}match=responseHeaders[key.toLowerCase()];}return match==null?null:match;}, // Raw string
	getAllResponseHeaders:function(){return state===2?responseHeadersString:null;}, // Caches the header
	setRequestHeader:function(name,value){var lname=name.toLowerCase();if(!state){name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;requestHeaders[name]=value;}return this;}, // Overrides response content-type header
	overrideMimeType:function(type){if(!state){s.mimeType=type;}return this;}, // Status-dependent callbacks
	statusCode:function(map){var code;if(map){if(state<2){for(code in map){ // Lazy-add the new callback in a way that preserves old ones
	statusCode[code]=[statusCode[code],map[code]];}}else { // Execute the appropriate callbacks
	jqXHR.always(map[jqXHR.status]);}}return this;}, // Cancel the request
	abort:function(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}done(0,finalText);return this;}}; // Attach deferreds
	deferred.promise(jqXHR).complete=completeDeferred.add;jqXHR.success=jqXHR.done;jqXHR.error=jqXHR.fail; // Remove hash character (#7531: and string promotion)
	// Add protocol if not provided (prefilters might expect it)
	// Handle falsy url in the settings object (#10093: consistency with old signature)
	// We also use the url parameter if available
	s.url=((url||s.url||location.href)+"").replace(rhash,"").replace(rprotocol,location.protocol+"//"); // Alias method option to type as per ticket #12004
	s.type=options.method||options.type||s.method||s.type; // Extract dataTypes list
	s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().match(rnotwhite)||[""]; // A cross-domain request is in order when the origin doesn't match the current origin.
	if(s.crossDomain==null){urlAnchor=document.createElement("a"); // Support: IE8-11+
	// IE throws exception if url is malformed, e.g. http://example.com:80x/
	try{urlAnchor.href=s.url; // Support: IE8-11+
	// Anchor's host property isn't correctly set when s.url is relative
	urlAnchor.href=urlAnchor.href;s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==urlAnchor.protocol+"//"+urlAnchor.host;}catch(e){ // If there is an error parsing the URL, assume it is crossDomain,
	// it can be rejected by the transport if it is invalid
	s.crossDomain=true;}} // Convert data if not already a string
	if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);} // Apply prefilters
	inspectPrefiltersOrTransports(prefilters,s,options,jqXHR); // If request was aborted inside a prefilter, stop there
	if(state===2){return jqXHR;} // We can fire global events as of now if asked to
	// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
	fireGlobals=jQuery.event&&s.global; // Watch for a new set of requests
	if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");} // Uppercase the type
	s.type=s.type.toUpperCase(); // Determine if request has content
	s.hasContent=!rnoContent.test(s.type); // Save the URL in case we're toying with the If-Modified-Since
	// and/or If-None-Match header later on
	cacheURL=s.url; // More options handling for requests with no content
	if(!s.hasContent){ // If data is available, append data to url
	if(s.data){cacheURL=s.url+=(rquery.test(cacheURL)?"&":"?")+s.data; // #9682: remove data so that it's not used in an eventual retry
	delete s.data;} // Add anti-cache in url if needed
	if(s.cache===false){s.url=rts.test(cacheURL)? // If there is already a '_' parameter, set its value
	cacheURL.replace(rts,"$1_="+nonce++): // Otherwise add one to the end
	cacheURL+(rquery.test(cacheURL)?"&":"?")+"_="+nonce++;}} // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}} // Set the correct header, if data is being sent
	if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);} // Set the Accepts header for the server, depending on the dataType
	jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]); // Check for headers option
	for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);} // Allow custom headers/mimetypes and early abort
	if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){ // Abort if not done already and return
	return jqXHR.abort();} // Aborting is no longer a cancellation
	strAbort="abort"; // Install callbacks on deferreds
	for(i in {success:1,error:1,complete:1}){jqXHR[i](s[i]);} // Get transport
	transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR); // If no transport, we auto-abort
	if(!transport){done(-1,"No Transport");}else {jqXHR.readyState=1; // Send global event
	if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);} // If request was aborted inside ajaxSend, stop there
	if(state===2){return jqXHR;} // Timeout
	if(s.async&&s.timeout>0){timeoutTimer=window.setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}try{state=1;transport.send(requestHeaders,done);}catch(e){ // Propagate exception as error if not done
	if(state<2){done(-1,e); // Simply rethrow otherwise
	}else {throw e;}}} // Callback for when everything is done
	function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText; // Called once
	if(state===2){return;} // State is "done" now
	state=2; // Clear timeout if it exists
	if(timeoutTimer){window.clearTimeout(timeoutTimer);} // Dereference transport for early garbage collection
	// (no matter how long the jqXHR object will be used)
	transport=undefined; // Cache response headers
	responseHeadersString=headers||""; // Set readyState
	jqXHR.readyState=status>0?4:0; // Determine if successful
	isSuccess=status>=200&&status<300||status===304; // Get response data
	if(responses){response=ajaxHandleResponses(s,jqXHR,responses);} // Convert no matter what (that way responseXXX fields are always set)
	response=ajaxConvert(s,response,jqXHR,isSuccess); // If successful, handle type chaining
	if(isSuccess){ // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}} // if no content
	if(status===204||s.type==="HEAD"){statusText="nocontent"; // if not modified
	}else if(status===304){statusText="notmodified"; // If we have data, let's convert it
	}else {statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else { // Extract error from statusText and normalize for non-aborts
	error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}} // Set data for the fake xhr object
	jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+""; // Success/Error
	if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else {deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);} // Status-dependent callbacks
	jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);} // Complete
	completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]); // Handle the global AJAX counter
	if(! --jQuery.active){jQuery.event.trigger("ajaxStop");}}}return jqXHR;},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){ // Shift arguments if data argument was omitted
	if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;} // The url can be an options object (which then must have .url)
	return jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url));};});jQuery._evalUrl=function(url){return jQuery.ajax({url:url, // Make this explicit, since user can override this through ajaxSetup (#11264)
	type:"GET",dataType:"script",async:false,global:false,"throws":true});};jQuery.fn.extend({wrapAll:function(html){var wrap;if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i));});}if(this[0]){ // The elements to wrap the target around
	wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}wrap.map(function(){var elem=this;while(elem.firstElementChild){elem=elem.firstElementChild;}return elem;}).append(this);}return this;},wrapInner:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else {self.append(html);}});},wrap:function(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes);}}).end();}});jQuery.expr.filters.hidden=function(elem){return !jQuery.expr.filters.visible(elem);};jQuery.expr.filters.visible=function(elem){ // Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	// Use OR instead of AND as the element is not visible if either is true
	// See tickets #10406 and #13132
	return elem.offsetWidth>0||elem.offsetHeight>0||elem.getClientRects().length>0;};var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){ // Serialize array item.
	jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){ // Treat each array item as a scalar.
	add(prefix,v);}else { // Item is non-scalar (array or object), encode its numeric index.
	buildParams(prefix+"["+(typeof v==="object"&&v!=null?i:"")+"]",v,traditional,add);}});}else if(!traditional&&jQuery.type(obj)==="object"){ // Serialize object item.
	for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else { // Serialize scalar item.
	add(prefix,obj);}} // Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,value){ // If value is a function, invoke it and return its value
	value=jQuery.isFunction(value)?value():value==null?"":value;s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value);}; // Set traditional to true for jQuery <= 1.3.2 behavior.
	if(traditional===undefined){traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional;} // If an array was passed in, assume that it is an array of form elements.
	if(jQuery.isArray(a)||a.jquery&&!jQuery.isPlainObject(a)){ // Serialize the form elements
	jQuery.each(a,function(){add(this.name,this.value);});}else { // If traditional, encode the "old" way (the way 1.3.2 or older
	// did it), otherwise encode params recursively.
	for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}} // Return the resulting serialization
	return s.join("&").replace(r20,"+");};jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){ // Can add propHook for "elements" to filter or add form elements
	var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type; // Use .is( ":disabled" ) so that fieldset[disabled] works
	return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return {name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});jQuery.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest();}catch(e){}};var xhrSuccessStatus={ // File protocol always yields status code 0, assume 200
	0:200, // Support: IE9
	// #1450: sometimes IE returns 1223 when it should be 204
	1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors=!!xhrSupported&&"withCredentials" in xhrSupported;support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){var callback,errorCallback; // Cross domain only allowed if supported through XMLHttpRequest
	if(support.cors||xhrSupported&&!options.crossDomain){return {send:function(headers,complete){var i,xhr=options.xhr();xhr.open(options.type,options.url,options.async,options.username,options.password); // Apply custom fields if provided
	if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}} // Override mime type if needed
	if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);} // X-Requested-With header
	// For cross-domain requests, seeing as conditions for a preflight are
	// akin to a jigsaw puzzle, we simply never set it to be sure.
	// (it can always be set on a per-request basis or even using ajaxSetup)
	// For same-domain requests, won't change header if already provided.
	if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";} // Set headers
	for(i in headers){xhr.setRequestHeader(i,headers[i]);} // Callback
	callback=function(type){return function(){if(callback){callback=errorCallback=xhr.onload=xhr.onerror=xhr.onabort=xhr.onreadystatechange=null;if(type==="abort"){xhr.abort();}else if(type==="error"){ // Support: IE9
	// On a manual native abort, IE9 throws
	// errors on any property access that is not readyState
	if(typeof xhr.status!=="number"){complete(0,"error");}else {complete( // File: protocol always yields status 0; see #8605, #14207
	xhr.status,xhr.statusText);}}else {complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText, // Support: IE9 only
	// IE9 has no XHR2 but throws on binary (trac-11426)
	// For XHR2 non-text, let the caller handle it (gh-2498)
	(xhr.responseType||"text")!=="text"||typeof xhr.responseText!=="string"?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders());}}};}; // Listen to events
	xhr.onload=callback();errorCallback=xhr.onerror=callback("error"); // Support: IE9
	// Use onreadystatechange to replace onabort
	// to handle uncaught aborts
	if(xhr.onabort!==undefined){xhr.onabort=errorCallback;}else {xhr.onreadystatechange=function(){ // Check readyState before timeout as it changes
	if(xhr.readyState===4){ // Allow onerror to be called first,
	// but that will not handle a native abort
	// Also, save errorCallback to a variable
	// as xhr.onerror cannot be accessed
	window.setTimeout(function(){if(callback){errorCallback();}});}};} // Create the abort callback
	callback=callback("abort");try{ // Do send the request (this may raise an exception)
	xhr.send(options.hasContent&&options.data||null);}catch(e){ // #14683: Only rethrow if this hasn't been notified as an error yet
	if(callback){throw e;}}},abort:function(){if(callback){callback();}}};}}); // Install script dataType
	jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, "+"application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(text){jQuery.globalEval(text);return text;}}}); // Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}if(s.crossDomain){s.type="GET";}}); // Bind script tag hack transport
	jQuery.ajaxTransport("script",function(s){ // This transport only deals with cross domain requests
	if(s.crossDomain){var script,callback;return {send:function(_,complete){script=jQuery("<script>").prop({charset:s.scriptCharset,src:s.url}).on("load error",callback=function(evt){script.remove();callback=null;if(evt){complete(evt.type==="error"?404:200,evt.type);}}); // Use native DOM manipulation to avoid our domManip AJAX trickery
	document.head.appendChild(script[0]);},abort:function(){if(callback){callback();}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/; // Default jsonp settings
	jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||jQuery.expando+"_"+nonce++;this[callback]=true;return callback;}}); // Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rjsonp.test(s.data)&&"data"); // Handle iff the expected data type is "jsonp" or we have a parameter to set
	if(jsonProp||s.dataTypes[0]==="jsonp"){ // Get callback name, remembering preexisting value associated with it
	callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback; // Insert callback into url or form data
	if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;} // Use data converter to retrieve json after script execution
	s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}return responseContainer[0];}; // Force json dataType
	s.dataTypes[0]="json"; // Install callback
	overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;}; // Clean-up function (fires after converters)
	jqXHR.always(function(){ // If previous value didn't exist - remove it
	if(overwritten===undefined){jQuery(window).removeProp(callbackName); // Otherwise restore preexisting value
	}else {window[callbackName]=overwritten;} // Save back as free
	if(s[callbackName]){ // Make sure that re-using the options doesn't screw things around
	s.jsonpCallback=originalSettings.jsonpCallback; // Save the callback name for future use
	oldCallbacks.push(callbackName);} // Call if it was a function and we have a response
	if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}responseContainer=overwritten=undefined;}); // Delegate to script
	return "script";}}); // Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML=function(data,context,keepScripts){if(!data||typeof data!=="string"){return null;}if(typeof context==="boolean"){keepScripts=context;context=false;}context=context||document;var parsed=rsingleTag.exec(data),scripts=!keepScripts&&[]; // Single tag
	if(parsed){return [context.createElement(parsed[1])];}parsed=buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}return jQuery.merge([],parsed.childNodes);}; // Keep a copy of the old load method
	var _load=jQuery.fn.load; /**
	 * Load a url into a page
	 */jQuery.fn.load=function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments);}var selector,type,response,self=this,off=url.indexOf(" ");if(off>-1){selector=jQuery.trim(url.slice(off));url=url.slice(0,off);} // If it's a function
	if(jQuery.isFunction(params)){ // We assume that it's the callback
	callback=params;params=undefined; // Otherwise, build a param string
	}else if(params&&typeof params==="object"){type="POST";} // If we have elements to modify, make the request
	if(self.length>0){jQuery.ajax({url:url, // If "type" variable is undefined, then "GET" method will be used.
	// Make value of this field explicit since
	// user can override it through ajaxSetup method
	type:type||"GET",dataType:"html",data:params}).done(function(responseText){ // Save response for use in complete callback
	response=arguments;self.html(selector? // If a selector was specified, locate the right elements in a dummy div
	// Exclude scripts to avoid IE 'Permission Denied' errors
	jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector): // Otherwise use the full result
	responseText); // If the request succeeds, this function gets "data", "status", "jqXHR"
	// but they are ignored because response was set above.
	// If it fails, this function gets "jqXHR", "status", "error"
	}).always(callback&&function(jqXHR,status){self.each(function(){callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);});});}return this;}; // Attach a bunch of functions for handling common AJAX events
	jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;}; /**
	 * Gets a window from an element
	 */function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9&&elem.defaultView;}jQuery.offset={setOffset:function(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={}; // Set position first, in-case top/left are set even on static elem
	if(position==="static"){elem.style.position="relative";}curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1; // Need to be able to calculate position if either
	// top or left is auto and position is either absolute or fixed
	if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else {curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}if(jQuery.isFunction(options)){ // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
	options=options.call(elem,i,jQuery.extend({},curOffset));}if(options.top!=null){props.top=options.top-curOffset.top+curTop;}if(options.left!=null){props.left=options.left-curOffset.left+curLeft;}if("using" in options){options.using.call(elem,props);}else {curElem.css(props);}}};jQuery.fn.extend({offset:function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}var docElem,win,elem=this[0],box={top:0,left:0},doc=elem&&elem.ownerDocument;if(!doc){return;}docElem=doc.documentElement; // Make sure it's not a disconnected DOM node
	if(!jQuery.contains(docElem,elem)){return box;}box=elem.getBoundingClientRect();win=getWindow(doc);return {top:box.top+win.pageYOffset-docElem.clientTop,left:box.left+win.pageXOffset-docElem.clientLeft};},position:function(){if(!this[0]){return;}var offsetParent,offset,elem=this[0],parentOffset={top:0,left:0}; // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
	// because it is its only offset parent
	if(jQuery.css(elem,"position")==="fixed"){ // Assume getBoundingClientRect is there when computed position is fixed
	offset=elem.getBoundingClientRect();}else { // Get *real* offsetParent
	offsetParent=this.offsetParent(); // Get correct offsets
	offset=this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset();} // Add offsetParent borders
	parentOffset.top+=jQuery.css(offsetParent[0],"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent[0],"borderLeftWidth",true);} // Subtract parent offsets and element margins
	return {top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};}, // This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent;while(offsetParent&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.offsetParent;}return offsetParent||documentElement;});}}); // Create scrollLeft and scrollTop methods
	jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?win[prop]:elem[method];}if(win){win.scrollTo(!top?val:win.pageXOffset,top?val:win.pageYOffset);}else {elem[method]=val;}},method,val,arguments.length);};}); // Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop); // If curCSS returns percentage, fallback to offset
	return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});}); // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){ // Margin is only for outerHeight, outerWidth
	jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){ // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
	// isn't a whole lot we can do. See pull request at this URL for discussion:
	// https://github.com/jquery/jquery/pull/764
	return elem.document.documentElement["client"+name];} // Get document width or height
	if(elem.nodeType===9){doc=elem.documentElement; // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
	// whichever is greatest
	return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}return value===undefined? // Get width or height on the element, requesting but not forcing parseFloat
	jQuery.css(elem,type,extra): // Set width or height on the element
	jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable,null);};});});jQuery.fn.extend({bind:function(types,data,fn){return this.on(types,null,data,fn);},unbind:function(types,fn){return this.off(types,null,fn);},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function(selector,types,fn){ // ( namespace ) or ( selector, types [, fn] )
	return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);},size:function(){return this.length;}});jQuery.fn.andSelf=jQuery.fn.addBack; // Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return jQuery;}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}var  // Map over jQuery in case of overwrite
	_jQuery=window.jQuery, // Map over the $ in case of overwrite
	_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}return jQuery;}; // Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if(!noGlobal){window.jQuery=window.$=jQuery;}return jQuery;});

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var url = __webpack_require__(175);
	var parser = __webpack_require__(180);
	var Manager = __webpack_require__(188);
	var debug = __webpack_require__(177)('socket.io-client');

	/**
	 * Module exports.
	 */

	module.exports = exports = lookup;

	/**
	 * Managers cache.
	 */

	var cache = exports.managers = {};

	/**
	 * Looks up an existing `Manager` for multiplexing.
	 * If the user summons:
	 *
	 *   `io('http://localhost/a');`
	 *   `io('http://localhost/b');`
	 *
	 * We reuse the existing instance based on same scheme/port/host,
	 * and we initialize sockets for each namespace.
	 *
	 * @api public
	 */

	function lookup(uri, opts) {
	  if (typeof uri == 'object') {
	    opts = uri;
	    uri = undefined;
	  }

	  opts = opts || {};

	  var parsed = url(uri);
	  var source = parsed.source;
	  var id = parsed.id;
	  var path = parsed.path;
	  var sameNamespace = cache[id] && path in cache[id].nsps;
	  var newConnection = opts.forceNew || opts['force new connection'] || false === opts.multiplex || sameNamespace;

	  var io;

	  if (newConnection) {
	    debug('ignoring socket cache for %s', source);
	    io = Manager(source, opts);
	  } else {
	    if (!cache[id]) {
	      debug('new io instance for %s', source);
	      cache[id] = Manager(source, opts);
	    }
	    io = cache[id];
	  }

	  return io.socket(parsed.path);
	}

	/**
	 * Protocol version.
	 *
	 * @api public
	 */

	exports.protocol = parser.protocol;

	/**
	 * `connect`.
	 *
	 * @param {String} uri
	 * @api public
	 */

	exports.connect = lookup;

	/**
	 * Expose constructors for standalone build.
	 *
	 * @api public
	 */

	exports.Manager = __webpack_require__(188);
	exports.Socket = __webpack_require__(216);

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module dependencies.
	 */

	var parseuri = __webpack_require__(176);
	var debug = __webpack_require__(177)('socket.io-client:url');

	/**
	 * Module exports.
	 */

	module.exports = url;

	/**
	 * URL parser.
	 *
	 * @param {String} url
	 * @param {Object} An object meant to mimic window.location.
	 *                 Defaults to window.location.
	 * @api public
	 */

	function url(uri, loc) {
	  var obj = uri;

	  // default to window.location
	  var loc = loc || global.location;
	  if (null == uri) uri = loc.protocol + '//' + loc.host;

	  // relative path support
	  if ('string' == typeof uri) {
	    if ('/' == uri.charAt(0)) {
	      if ('/' == uri.charAt(1)) {
	        uri = loc.protocol + uri;
	      } else {
	        uri = loc.host + uri;
	      }
	    }

	    if (!/^(https?|wss?):\/\//.test(uri)) {
	      debug('protocol-less url %s', uri);
	      if ('undefined' != typeof loc) {
	        uri = loc.protocol + '//' + uri;
	      } else {
	        uri = 'https://' + uri;
	      }
	    }

	    // parse
	    debug('parse %s', uri);
	    obj = parseuri(uri);
	  }

	  // make sure we treat `localhost:80` and `localhost` equally
	  if (!obj.port) {
	    if (/^(http|ws)$/.test(obj.protocol)) {
	      obj.port = '80';
	    } else if (/^(http|ws)s$/.test(obj.protocol)) {
	      obj.port = '443';
	    }
	  }

	  obj.path = obj.path || '/';

	  var ipv6 = obj.host.indexOf(':') !== -1;
	  var host = ipv6 ? '[' + obj.host + ']' : obj.host;

	  // define unique id
	  obj.id = obj.protocol + '://' + host + ':' + obj.port;
	  // define href
	  obj.href = obj.protocol + '://' + host + (loc && loc.port == obj.port ? '' : ':' + obj.port);

	  return obj;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 176 */
/***/ function(module, exports) {

	/**
	 * Parses an URI
	 *
	 * @author Steven Levithan <stevenlevithan.com> (MIT license)
	 * @api private
	 */

	var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

	var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];

	module.exports = function parseuri(str) {
	    var src = str,
	        b = str.indexOf('['),
	        e = str.indexOf(']');

	    if (b != -1 && e != -1) {
	        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
	    }

	    var m = re.exec(str || ''),
	        uri = {},
	        i = 14;

	    while (i--) {
	        uri[parts[i]] = m[i] || '';
	    }

	    if (b != -1 && e != -1) {
	        uri.source = src;
	        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
	        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
	        uri.ipv6uri = true;
	    }

	    return uri;
	};

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(178);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();

	/**
	 * Colors.
	 */

	exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return 'WebkitAppearance' in document.documentElement.style ||
	  // is firebug? http://stackoverflow.com/a/398120/376773
	  window.console && (console.firebug || console.exception && console.table) ||
	  // is firefox >= v31?
	  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	  navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31;
	}

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	exports.formatters.j = function (v) {
	  return JSON.stringify(v);
	};

	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);

	  if (!useColors) return args;

	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function (match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
	  return args;
	}

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch (e) {}
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch (e) {}
	  return r;
	}

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

	exports.enable(load());

	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */

	function localstorage() {
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(179);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */

	exports.formatters = {};

	/**
	 * Previously assigned color.
	 */

	var prevColor = 0;

	/**
	 * Previous log timestamp.
	 */

	var prevTime;

	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */

	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function debug(namespace) {

	  // define the `disabled` version
	  function disabled() {}
	  disabled.enabled = false;

	  // define the `enabled` version
	  function enabled() {

	    var self = enabled;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();

	    var args = Array.prototype.slice.call(arguments);

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function (match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;

	  var fn = exports.enabled(namespace) ? enabled : disabled;

	  fn.namespace = namespace;

	  return fn;
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;

	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}

/***/ },
/* 179 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function (val, options) {
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long ? long(val) : short(val);
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function long(ms) {
	  return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var debug = __webpack_require__(177)('socket.io-parser');
	var json = __webpack_require__(181);
	var isArray = __webpack_require__(184);
	var Emitter = __webpack_require__(185);
	var binary = __webpack_require__(186);
	var isBuf = __webpack_require__(187);

	/**
	 * Protocol version.
	 *
	 * @api public
	 */

	exports.protocol = 4;

	/**
	 * Packet types.
	 *
	 * @api public
	 */

	exports.types = ['CONNECT', 'DISCONNECT', 'EVENT', 'ACK', 'ERROR', 'BINARY_EVENT', 'BINARY_ACK'];

	/**
	 * Packet type `connect`.
	 *
	 * @api public
	 */

	exports.CONNECT = 0;

	/**
	 * Packet type `disconnect`.
	 *
	 * @api public
	 */

	exports.DISCONNECT = 1;

	/**
	 * Packet type `event`.
	 *
	 * @api public
	 */

	exports.EVENT = 2;

	/**
	 * Packet type `ack`.
	 *
	 * @api public
	 */

	exports.ACK = 3;

	/**
	 * Packet type `error`.
	 *
	 * @api public
	 */

	exports.ERROR = 4;

	/**
	 * Packet type 'binary event'
	 *
	 * @api public
	 */

	exports.BINARY_EVENT = 5;

	/**
	 * Packet type `binary ack`. For acks with binary arguments.
	 *
	 * @api public
	 */

	exports.BINARY_ACK = 6;

	/**
	 * Encoder constructor.
	 *
	 * @api public
	 */

	exports.Encoder = Encoder;

	/**
	 * Decoder constructor.
	 *
	 * @api public
	 */

	exports.Decoder = Decoder;

	/**
	 * A socket.io Encoder instance
	 *
	 * @api public
	 */

	function Encoder() {}

	/**
	 * Encode a packet as a single string if non-binary, or as a
	 * buffer sequence, depending on packet type.
	 *
	 * @param {Object} obj - packet object
	 * @param {Function} callback - function to handle encodings (likely engine.write)
	 * @return Calls callback with Array of encodings
	 * @api public
	 */

	Encoder.prototype.encode = function (obj, callback) {
	  debug('encoding packet %j', obj);

	  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
	    encodeAsBinary(obj, callback);
	  } else {
	    var encoding = encodeAsString(obj);
	    callback([encoding]);
	  }
	};

	/**
	 * Encode packet as string.
	 *
	 * @param {Object} packet
	 * @return {String} encoded
	 * @api private
	 */

	function encodeAsString(obj) {
	  var str = '';
	  var nsp = false;

	  // first is type
	  str += obj.type;

	  // attachments if we have them
	  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
	    str += obj.attachments;
	    str += '-';
	  }

	  // if we have a namespace other than `/`
	  // we append it followed by a comma `,`
	  if (obj.nsp && '/' != obj.nsp) {
	    nsp = true;
	    str += obj.nsp;
	  }

	  // immediately followed by the id
	  if (null != obj.id) {
	    if (nsp) {
	      str += ',';
	      nsp = false;
	    }
	    str += obj.id;
	  }

	  // json data
	  if (null != obj.data) {
	    if (nsp) str += ',';
	    str += json.stringify(obj.data);
	  }

	  debug('encoded %j as %s', obj, str);
	  return str;
	}

	/**
	 * Encode packet as 'buffer sequence' by removing blobs, and
	 * deconstructing packet into object with placeholders and
	 * a list of buffers.
	 *
	 * @param {Object} packet
	 * @return {Buffer} encoded
	 * @api private
	 */

	function encodeAsBinary(obj, callback) {

	  function writeEncoding(bloblessData) {
	    var deconstruction = binary.deconstructPacket(bloblessData);
	    var pack = encodeAsString(deconstruction.packet);
	    var buffers = deconstruction.buffers;

	    buffers.unshift(pack); // add packet info to beginning of data list
	    callback(buffers); // write all the buffers
	  }

	  binary.removeBlobs(obj, writeEncoding);
	}

	/**
	 * A socket.io Decoder instance
	 *
	 * @return {Object} decoder
	 * @api public
	 */

	function Decoder() {
	  this.reconstructor = null;
	}

	/**
	 * Mix in `Emitter` with Decoder.
	 */

	Emitter(Decoder.prototype);

	/**
	 * Decodes an ecoded packet string into packet JSON.
	 *
	 * @param {String} obj - encoded packet
	 * @return {Object} packet
	 * @api public
	 */

	Decoder.prototype.add = function (obj) {
	  var packet;
	  if ('string' == typeof obj) {
	    packet = decodeString(obj);
	    if (exports.BINARY_EVENT == packet.type || exports.BINARY_ACK == packet.type) {
	      // binary packet's json
	      this.reconstructor = new BinaryReconstructor(packet);

	      // no attachments, labeled binary but no binary data to follow
	      if (this.reconstructor.reconPack.attachments === 0) {
	        this.emit('decoded', packet);
	      }
	    } else {
	      // non-binary full packet
	      this.emit('decoded', packet);
	    }
	  } else if (isBuf(obj) || obj.base64) {
	    // raw binary data
	    if (!this.reconstructor) {
	      throw new Error('got binary data when not reconstructing a packet');
	    } else {
	      packet = this.reconstructor.takeBinaryData(obj);
	      if (packet) {
	        // received final buffer
	        this.reconstructor = null;
	        this.emit('decoded', packet);
	      }
	    }
	  } else {
	    throw new Error('Unknown type: ' + obj);
	  }
	};

	/**
	 * Decode a packet String (JSON data)
	 *
	 * @param {String} str
	 * @return {Object} packet
	 * @api private
	 */

	function decodeString(str) {
	  var p = {};
	  var i = 0;

	  // look up type
	  p.type = Number(str.charAt(0));
	  if (null == exports.types[p.type]) return error();

	  // look up attachments if type binary
	  if (exports.BINARY_EVENT == p.type || exports.BINARY_ACK == p.type) {
	    var buf = '';
	    while (str.charAt(++i) != '-') {
	      buf += str.charAt(i);
	      if (i == str.length) break;
	    }
	    if (buf != Number(buf) || str.charAt(i) != '-') {
	      throw new Error('Illegal attachments');
	    }
	    p.attachments = Number(buf);
	  }

	  // look up namespace (if any)
	  if ('/' == str.charAt(i + 1)) {
	    p.nsp = '';
	    while (++i) {
	      var c = str.charAt(i);
	      if (',' == c) break;
	      p.nsp += c;
	      if (i == str.length) break;
	    }
	  } else {
	    p.nsp = '/';
	  }

	  // look up id
	  var next = str.charAt(i + 1);
	  if ('' !== next && Number(next) == next) {
	    p.id = '';
	    while (++i) {
	      var c = str.charAt(i);
	      if (null == c || Number(c) != c) {
	        --i;
	        break;
	      }
	      p.id += str.charAt(i);
	      if (i == str.length) break;
	    }
	    p.id = Number(p.id);
	  }

	  // look up json data
	  if (str.charAt(++i)) {
	    try {
	      p.data = json.parse(str.substr(i));
	    } catch (e) {
	      return error();
	    }
	  }

	  debug('decoded %s as %j', str, p);
	  return p;
	}

	/**
	 * Deallocates a parser's resources
	 *
	 * @api public
	 */

	Decoder.prototype.destroy = function () {
	  if (this.reconstructor) {
	    this.reconstructor.finishedReconstruction();
	  }
	};

	/**
	 * A manager of a binary event's 'buffer sequence'. Should
	 * be constructed whenever a packet of type BINARY_EVENT is
	 * decoded.
	 *
	 * @param {Object} packet
	 * @return {BinaryReconstructor} initialized reconstructor
	 * @api private
	 */

	function BinaryReconstructor(packet) {
	  this.reconPack = packet;
	  this.buffers = [];
	}

	/**
	 * Method to be called when binary data received from connection
	 * after a BINARY_EVENT packet.
	 *
	 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
	 * @return {null | Object} returns null if more binary data is expected or
	 *   a reconstructed packet object if all buffers have been received.
	 * @api private
	 */

	BinaryReconstructor.prototype.takeBinaryData = function (binData) {
	  this.buffers.push(binData);
	  if (this.buffers.length == this.reconPack.attachments) {
	    // done with buffer list
	    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
	    this.finishedReconstruction();
	    return packet;
	  }
	  return null;
	};

	/**
	 * Cleans up binary packet reconstruction variables.
	 *
	 * @api private
	 */

	BinaryReconstructor.prototype.finishedReconstruction = function () {
	  this.reconPack = null;
	  this.buffers = [];
	};

	function error(data) {
	  return {
	    type: exports.ERROR,
	    data: 'parser error'
	  };
	}

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
	;(function () {
	  // Detect the `define` function exposed by asynchronous module loaders. The
	  // strict `define` check is necessary for compatibility with `r.js`.
	  var isLoader = "function" === "function" && __webpack_require__(183);

	  // A set of types used to distinguish objects from primitives.
	  var objectTypes = {
	    "function": true,
	    "object": true
	  };

	  // Detect the `exports` object exposed by CommonJS implementations.
	  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

	  // Use the `global` object exposed by Node (including Browserify via
	  // `insert-module-globals`), Narwhal, and Ringo as the default context,
	  // and the `window` object in browsers. Rhino exports a `global` function
	  // instead.
	  var root = objectTypes[typeof window] && window || this,
	      freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;

	  if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal || freeGlobal["self"] === freeGlobal)) {
	    root = freeGlobal;
	  }

	  // Public: Initializes JSON 3 using the given `context` object, attaching the
	  // `stringify` and `parse` functions to the specified `exports` object.
	  function runInContext(context, exports) {
	    context || (context = root["Object"]());
	    exports || (exports = root["Object"]());

	    // Native constructor aliases.
	    var Number = context["Number"] || root["Number"],
	        String = context["String"] || root["String"],
	        Object = context["Object"] || root["Object"],
	        Date = context["Date"] || root["Date"],
	        SyntaxError = context["SyntaxError"] || root["SyntaxError"],
	        TypeError = context["TypeError"] || root["TypeError"],
	        Math = context["Math"] || root["Math"],
	        nativeJSON = context["JSON"] || root["JSON"];

	    // Delegate to the native `stringify` and `parse` implementations.
	    if (typeof nativeJSON == "object" && nativeJSON) {
	      exports.stringify = nativeJSON.stringify;
	      exports.parse = nativeJSON.parse;
	    }

	    // Convenience aliases.
	    var objectProto = Object.prototype,
	        getClass = objectProto.toString,
	        isProperty,
	        forEach,
	        undef;

	    // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
	    var isExtended = new Date(-3509827334573292);
	    try {
	      // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
	      // results for certain dates in Opera >= 10.53.
	      isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
	      // Safari < 2.0.2 stores the internal millisecond time value correctly,
	      // but clips the values returned by the date methods to the range of
	      // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
	      isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
	    } catch (exception) {}

	    // Internal: Determines whether the native `JSON.stringify` and `parse`
	    // implementations are spec-compliant. Based on work by Ken Snyder.
	    function has(name) {
	      if (has[name] !== undef) {
	        // Return cached feature test result.
	        return has[name];
	      }
	      var isSupported;
	      if (name == "bug-string-char-index") {
	        // IE <= 7 doesn't support accessing string characters using square
	        // bracket notation. IE 8 only supports this for primitives.
	        isSupported = "a"[0] != "a";
	      } else if (name == "json") {
	        // Indicates whether both `JSON.stringify` and `JSON.parse` are
	        // supported.
	        isSupported = has("json-stringify") && has("json-parse");
	      } else {
	        var value,
	            serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
	        // Test `JSON.stringify`.
	        if (name == "json-stringify") {
	          var stringify = exports.stringify,
	              stringifySupported = typeof stringify == "function" && isExtended;
	          if (stringifySupported) {
	            // A test function object with a custom `toJSON` method.
	            (value = function () {
	              return 1;
	            }).toJSON = value;
	            try {
	              stringifySupported =
	              // Firefox 3.1b1 and b2 serialize string, number, and boolean
	              // primitives as object literals.
	              stringify(0) === "0" &&
	              // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
	              // literals.
	              stringify(new Number()) === "0" && stringify(new String()) == '""' &&
	              // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
	              // does not define a canonical JSON representation (this applies to
	              // objects with `toJSON` properties as well, *unless* they are nested
	              // within an object or array).
	              stringify(getClass) === undef &&
	              // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
	              // FF 3.1b3 pass this test.
	              stringify(undef) === undef &&
	              // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
	              // respectively, if the value is omitted entirely.
	              stringify() === undef &&
	              // FF 3.1b1, 2 throw an error if the given value is not a number,
	              // string, array, object, Boolean, or `null` literal. This applies to
	              // objects with custom `toJSON` methods as well, unless they are nested
	              // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
	              // methods entirely.
	              stringify(value) === "1" && stringify([value]) == "[1]" &&
	              // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
	              // `"[null]"`.
	              stringify([undef]) == "[null]" &&
	              // YUI 3.0.0b1 fails to serialize `null` literals.
	              stringify(null) == "null" &&
	              // FF 3.1b1, 2 halts serialization if an array contains a function:
	              // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
	              // elides non-JSON values from objects and arrays, unless they
	              // define custom `toJSON` methods.
	              stringify([undef, getClass, null]) == "[null,null,null]" &&
	              // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
	              // where character escape codes are expected (e.g., `\b` => `\u0008`).
	              stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
	              // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
	              stringify(null, value) === "1" && stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
	              // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
	              // serialize extended years.
	              stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
	              // The milliseconds are optional in ES 5, but required in 5.1.
	              stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
	              // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
	              // four-digit years instead of six-digit years. Credits: @Yaffle.
	              stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
	              // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
	              // values less than 1000. Credits: @Yaffle.
	              stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
	            } catch (exception) {
	              stringifySupported = false;
	            }
	          }
	          isSupported = stringifySupported;
	        }
	        // Test `JSON.parse`.
	        if (name == "json-parse") {
	          var parse = exports.parse;
	          if (typeof parse == "function") {
	            try {
	              // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
	              // Conforming implementations should also coerce the initial argument to
	              // a string prior to parsing.
	              if (parse("0") === 0 && !parse(false)) {
	                // Simple parsing test.
	                value = parse(serialized);
	                var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
	                if (parseSupported) {
	                  try {
	                    // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
	                    parseSupported = !parse('"\t"');
	                  } catch (exception) {}
	                  if (parseSupported) {
	                    try {
	                      // FF 4.0 and 4.0.1 allow leading `+` signs and leading
	                      // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
	                      // certain octal literals.
	                      parseSupported = parse("01") !== 1;
	                    } catch (exception) {}
	                  }
	                  if (parseSupported) {
	                    try {
	                      // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
	                      // points. These environments, along with FF 3.1b1 and 2,
	                      // also allow trailing commas in JSON objects and arrays.
	                      parseSupported = parse("1.") !== 1;
	                    } catch (exception) {}
	                  }
	                }
	              }
	            } catch (exception) {
	              parseSupported = false;
	            }
	          }
	          isSupported = parseSupported;
	        }
	      }
	      return has[name] = !!isSupported;
	    }

	    if (!has("json")) {
	      // Common `[[Class]]` name aliases.
	      var functionClass = "[object Function]",
	          dateClass = "[object Date]",
	          numberClass = "[object Number]",
	          stringClass = "[object String]",
	          arrayClass = "[object Array]",
	          booleanClass = "[object Boolean]";

	      // Detect incomplete support for accessing string characters by index.
	      var charIndexBuggy = has("bug-string-char-index");

	      // Define additional utility methods if the `Date` methods are buggy.
	      if (!isExtended) {
	        var floor = Math.floor;
	        // A mapping between the months of the year and the number of days between
	        // January 1st and the first of the respective month.
	        var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
	        // Internal: Calculates the number of days between the Unix epoch and the
	        // first day of the given month.
	        var getDay = function (year, month) {
	          return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
	        };
	      }

	      // Internal: Determines if a property is a direct property of the given
	      // object. Delegates to the native `Object#hasOwnProperty` method.
	      if (!(isProperty = objectProto.hasOwnProperty)) {
	        isProperty = function (property) {
	          var members = {},
	              constructor;
	          if ((members.__proto__ = null, members.__proto__ = {
	            // The *proto* property cannot be set multiple times in recent
	            // versions of Firefox and SeaMonkey.
	            "toString": 1
	          }, members).toString != getClass) {
	            // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
	            // supports the mutable *proto* property.
	            isProperty = function (property) {
	              // Capture and break the object's prototype chain (see section 8.6.2
	              // of the ES 5.1 spec). The parenthesized expression prevents an
	              // unsafe transformation by the Closure Compiler.
	              var original = this.__proto__,
	                  result = property in (this.__proto__ = null, this);
	              // Restore the original prototype chain.
	              this.__proto__ = original;
	              return result;
	            };
	          } else {
	            // Capture a reference to the top-level `Object` constructor.
	            constructor = members.constructor;
	            // Use the `constructor` property to simulate `Object#hasOwnProperty` in
	            // other environments.
	            isProperty = function (property) {
	              var parent = (this.constructor || constructor).prototype;
	              return property in this && !(property in parent && this[property] === parent[property]);
	            };
	          }
	          members = null;
	          return isProperty.call(this, property);
	        };
	      }

	      // Internal: Normalizes the `for...in` iteration algorithm across
	      // environments. Each enumerated key is yielded to a `callback` function.
	      forEach = function (object, callback) {
	        var size = 0,
	            Properties,
	            members,
	            property;

	        // Tests for bugs in the current environment's `for...in` algorithm. The
	        // `valueOf` property inherits the non-enumerable flag from
	        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
	        (Properties = function () {
	          this.valueOf = 0;
	        }).prototype.valueOf = 0;

	        // Iterate over a new instance of the `Properties` class.
	        members = new Properties();
	        for (property in members) {
	          // Ignore all properties inherited from `Object.prototype`.
	          if (isProperty.call(members, property)) {
	            size++;
	          }
	        }
	        Properties = members = null;

	        // Normalize the iteration algorithm.
	        if (!size) {
	          // A list of non-enumerable properties inherited from `Object.prototype`.
	          members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
	          // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
	          // properties.
	          forEach = function (object, callback) {
	            var isFunction = getClass.call(object) == functionClass,
	                property,
	                length;
	            var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
	            for (property in object) {
	              // Gecko <= 1.0 enumerates the `prototype` property of functions under
	              // certain conditions; IE does not.
	              if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
	                callback(property);
	              }
	            }
	            // Manually invoke the callback for each non-enumerable property.
	            for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
	          };
	        } else if (size == 2) {
	          // Safari <= 2.0.4 enumerates shadowed properties twice.
	          forEach = function (object, callback) {
	            // Create a set of iterated properties.
	            var members = {},
	                isFunction = getClass.call(object) == functionClass,
	                property;
	            for (property in object) {
	              // Store each property name to prevent double enumeration. The
	              // `prototype` property of functions is not enumerated due to cross-
	              // environment inconsistencies.
	              if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
	                callback(property);
	              }
	            }
	          };
	        } else {
	          // No bugs detected; use the standard `for...in` algorithm.
	          forEach = function (object, callback) {
	            var isFunction = getClass.call(object) == functionClass,
	                property,
	                isConstructor;
	            for (property in object) {
	              if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
	                callback(property);
	              }
	            }
	            // Manually invoke the callback for the `constructor` property due to
	            // cross-environment inconsistencies.
	            if (isConstructor || isProperty.call(object, property = "constructor")) {
	              callback(property);
	            }
	          };
	        }
	        return forEach(object, callback);
	      };

	      // Public: Serializes a JavaScript `value` as a JSON string. The optional
	      // `filter` argument may specify either a function that alters how object and
	      // array members are serialized, or an array of strings and numbers that
	      // indicates which properties should be serialized. The optional `width`
	      // argument may be either a string or number that specifies the indentation
	      // level of the output.
	      if (!has("json-stringify")) {
	        // Internal: A map of control characters and their escaped equivalents.
	        var Escapes = {
	          92: "\\\\",
	          34: '\\"',
	          8: "\\b",
	          12: "\\f",
	          10: "\\n",
	          13: "\\r",
	          9: "\\t"
	        };

	        // Internal: Converts `value` into a zero-padded string such that its
	        // length is at least equal to `width`. The `width` must be <= 6.
	        var leadingZeroes = "000000";
	        var toPaddedString = function (width, value) {
	          // The `|| 0` expression is necessary to work around a bug in
	          // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
	          return (leadingZeroes + (value || 0)).slice(-width);
	        };

	        // Internal: Double-quotes a string `value`, replacing all ASCII control
	        // characters (characters with code unit values between 0 and 31) with
	        // their escaped equivalents. This is an implementation of the
	        // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
	        var unicodePrefix = "\\u00";
	        var quote = function (value) {
	          var result = '"',
	              index = 0,
	              length = value.length,
	              useCharIndex = !charIndexBuggy || length > 10;
	          var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);
	          for (; index < length; index++) {
	            var charCode = value.charCodeAt(index);
	            // If the character is a control character, append its Unicode or
	            // shorthand escape sequence; otherwise, append the character as-is.
	            switch (charCode) {
	              case 8:case 9:case 10:case 12:case 13:case 34:case 92:
	                result += Escapes[charCode];
	                break;
	              default:
	                if (charCode < 32) {
	                  result += unicodePrefix + toPaddedString(2, charCode.toString(16));
	                  break;
	                }
	                result += useCharIndex ? symbols[index] : value.charAt(index);
	            }
	          }
	          return result + '"';
	        };

	        // Internal: Recursively serializes an object. Implements the
	        // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
	        var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
	          var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
	          try {
	            // Necessary for host object support.
	            value = object[property];
	          } catch (exception) {}
	          if (typeof value == "object" && value) {
	            className = getClass.call(value);
	            if (className == dateClass && !isProperty.call(value, "toJSON")) {
	              if (value > -1 / 0 && value < 1 / 0) {
	                // Dates are serialized according to the `Date#toJSON` method
	                // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
	                // for the ISO 8601 date time string format.
	                if (getDay) {
	                  // Manually compute the year, month, date, hours, minutes,
	                  // seconds, and milliseconds if the `getUTC*` methods are
	                  // buggy. Adapted from @Yaffle's `date-shim` project.
	                  date = floor(value / 864e5);
	                  for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
	                  for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
	                  date = 1 + date - getDay(year, month);
	                  // The `time` value specifies the time within the day (see ES
	                  // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
	                  // to compute `A modulo B`, as the `%` operator does not
	                  // correspond to the `modulo` operation for negative numbers.
	                  time = (value % 864e5 + 864e5) % 864e5;
	                  // The hours, minutes, seconds, and milliseconds are obtained by
	                  // decomposing the time within the day. See section 15.9.1.10.
	                  hours = floor(time / 36e5) % 24;
	                  minutes = floor(time / 6e4) % 60;
	                  seconds = floor(time / 1e3) % 60;
	                  milliseconds = time % 1e3;
	                } else {
	                  year = value.getUTCFullYear();
	                  month = value.getUTCMonth();
	                  date = value.getUTCDate();
	                  hours = value.getUTCHours();
	                  minutes = value.getUTCMinutes();
	                  seconds = value.getUTCSeconds();
	                  milliseconds = value.getUTCMilliseconds();
	                }
	                // Serialize extended years correctly.
	                value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) + "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
	                // Months, dates, hours, minutes, and seconds should have two
	                // digits; milliseconds should have three.
	                "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
	                // Milliseconds are optional in ES 5.0, but required in 5.1.
	                "." + toPaddedString(3, milliseconds) + "Z";
	              } else {
	                value = null;
	              }
	            } else if (typeof value.toJSON == "function" && (className != numberClass && className != stringClass && className != arrayClass || isProperty.call(value, "toJSON"))) {
	              // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
	              // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
	              // ignores all `toJSON` methods on these objects unless they are
	              // defined directly on an instance.
	              value = value.toJSON(property);
	            }
	          }
	          if (callback) {
	            // If a replacement function was provided, call it to obtain the value
	            // for serialization.
	            value = callback.call(object, property, value);
	          }
	          if (value === null) {
	            return "null";
	          }
	          className = getClass.call(value);
	          if (className == booleanClass) {
	            // Booleans are represented literally.
	            return "" + value;
	          } else if (className == numberClass) {
	            // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
	            // `"null"`.
	            return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
	          } else if (className == stringClass) {
	            // Strings are double-quoted and escaped.
	            return quote("" + value);
	          }
	          // Recursively serialize objects and arrays.
	          if (typeof value == "object") {
	            // Check for cyclic structures. This is a linear search; performance
	            // is inversely proportional to the number of unique nested objects.
	            for (length = stack.length; length--;) {
	              if (stack[length] === value) {
	                // Cyclic structures cannot be serialized by `JSON.stringify`.
	                throw TypeError();
	              }
	            }
	            // Add the object to the stack of traversed objects.
	            stack.push(value);
	            results = [];
	            // Save the current indentation level and indent one additional level.
	            prefix = indentation;
	            indentation += whitespace;
	            if (className == arrayClass) {
	              // Recursively serialize array elements.
	              for (index = 0, length = value.length; index < length; index++) {
	                element = serialize(index, value, callback, properties, whitespace, indentation, stack);
	                results.push(element === undef ? "null" : element);
	              }
	              result = results.length ? whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : "[" + results.join(",") + "]" : "[]";
	            } else {
	              // Recursively serialize object members. Members are selected from
	              // either a user-specified list of property names, or the object
	              // itself.
	              forEach(properties || value, function (property) {
	                var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
	                if (element !== undef) {
	                  // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
	                  // is not the empty string, let `member` {quote(property) + ":"}
	                  // be the concatenation of `member` and the `space` character."
	                  // The "`space` character" refers to the literal space
	                  // character, not the `space` {width} argument provided to
	                  // `JSON.stringify`.
	                  results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
	                }
	              });
	              result = results.length ? whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : "{" + results.join(",") + "}" : "{}";
	            }
	            // Remove the object from the traversed object stack.
	            stack.pop();
	            return result;
	          }
	        };

	        // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
	        exports.stringify = function (source, filter, width) {
	          var whitespace, callback, properties, className;
	          if (objectTypes[typeof filter] && filter) {
	            if ((className = getClass.call(filter)) == functionClass) {
	              callback = filter;
	            } else if (className == arrayClass) {
	              // Convert the property names array into a makeshift set.
	              properties = {};
	              for (var index = 0, length = filter.length, value; index < length; value = filter[index++], (className = getClass.call(value), className == stringClass || className == numberClass) && (properties[value] = 1));
	            }
	          }
	          if (width) {
	            if ((className = getClass.call(width)) == numberClass) {
	              // Convert the `width` to an integer and create a string containing
	              // `width` number of space characters.
	              if ((width -= width % 1) > 0) {
	                for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
	              }
	            } else if (className == stringClass) {
	              whitespace = width.length <= 10 ? width : width.slice(0, 10);
	            }
	          }
	          // Opera <= 7.54u2 discards the values associated with empty string keys
	          // (`""`) only if they are used directly within an object member list
	          // (e.g., `!("" in { "": 1})`).
	          return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
	        };
	      }

	      // Public: Parses a JSON source string.
	      if (!has("json-parse")) {
	        var fromCharCode = String.fromCharCode;

	        // Internal: A map of escaped control characters and their unescaped
	        // equivalents.
	        var Unescapes = {
	          92: "\\",
	          34: '"',
	          47: "/",
	          98: "\b",
	          116: "\t",
	          110: "\n",
	          102: "\f",
	          114: "\r"
	        };

	        // Internal: Stores the parser state.
	        var Index, Source;

	        // Internal: Resets the parser state and throws a `SyntaxError`.
	        var abort = function () {
	          Index = Source = null;
	          throw SyntaxError();
	        };

	        // Internal: Returns the next token, or `"$"` if the parser has reached
	        // the end of the source string. A token may be a string, number, `null`
	        // literal, or Boolean literal.
	        var lex = function () {
	          var source = Source,
	              length = source.length,
	              value,
	              begin,
	              position,
	              isSigned,
	              charCode;
	          while (Index < length) {
	            charCode = source.charCodeAt(Index);
	            switch (charCode) {
	              case 9:case 10:case 13:case 32:
	                // Skip whitespace tokens, including tabs, carriage returns, line
	                // feeds, and space characters.
	                Index++;
	                break;
	              case 123:case 125:case 91:case 93:case 58:case 44:
	                // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
	                // the current position.
	                value = charIndexBuggy ? source.charAt(Index) : source[Index];
	                Index++;
	                return value;
	              case 34:
	                // `"` delimits a JSON string; advance to the next character and
	                // begin parsing the string. String tokens are prefixed with the
	                // sentinel `@` character to distinguish them from punctuators and
	                // end-of-string tokens.
	                for (value = "@", Index++; Index < length;) {
	                  charCode = source.charCodeAt(Index);
	                  if (charCode < 32) {
	                    // Unescaped ASCII control characters (those with a code unit
	                    // less than the space character) are not permitted.
	                    abort();
	                  } else if (charCode == 92) {
	                    // A reverse solidus (`\`) marks the beginning of an escaped
	                    // control character (including `"`, `\`, and `/`) or Unicode
	                    // escape sequence.
	                    charCode = source.charCodeAt(++Index);
	                    switch (charCode) {
	                      case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:
	                        // Revive escaped control characters.
	                        value += Unescapes[charCode];
	                        Index++;
	                        break;
	                      case 117:
	                        // `\u` marks the beginning of a Unicode escape sequence.
	                        // Advance to the first character and validate the
	                        // four-digit code point.
	                        begin = ++Index;
	                        for (position = Index + 4; Index < position; Index++) {
	                          charCode = source.charCodeAt(Index);
	                          // A valid sequence comprises four hexdigits (case-
	                          // insensitive) that form a single hexadecimal value.
	                          if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
	                            // Invalid Unicode escape sequence.
	                            abort();
	                          }
	                        }
	                        // Revive the escaped character.
	                        value += fromCharCode("0x" + source.slice(begin, Index));
	                        break;
	                      default:
	                        // Invalid escape sequence.
	                        abort();
	                    }
	                  } else {
	                    if (charCode == 34) {
	                      // An unescaped double-quote character marks the end of the
	                      // string.
	                      break;
	                    }
	                    charCode = source.charCodeAt(Index);
	                    begin = Index;
	                    // Optimize for the common case where a string is valid.
	                    while (charCode >= 32 && charCode != 92 && charCode != 34) {
	                      charCode = source.charCodeAt(++Index);
	                    }
	                    // Append the string as-is.
	                    value += source.slice(begin, Index);
	                  }
	                }
	                if (source.charCodeAt(Index) == 34) {
	                  // Advance to the next character and return the revived string.
	                  Index++;
	                  return value;
	                }
	                // Unterminated string.
	                abort();
	              default:
	                // Parse numbers and literals.
	                begin = Index;
	                // Advance past the negative sign, if one is specified.
	                if (charCode == 45) {
	                  isSigned = true;
	                  charCode = source.charCodeAt(++Index);
	                }
	                // Parse an integer or floating-point value.
	                if (charCode >= 48 && charCode <= 57) {
	                  // Leading zeroes are interpreted as octal literals.
	                  if (charCode == 48 && (charCode = source.charCodeAt(Index + 1), charCode >= 48 && charCode <= 57)) {
	                    // Illegal octal literal.
	                    abort();
	                  }
	                  isSigned = false;
	                  // Parse the integer component.
	                  for (; Index < length && (charCode = source.charCodeAt(Index), charCode >= 48 && charCode <= 57); Index++);
	                  // Floats cannot contain a leading decimal point; however, this
	                  // case is already accounted for by the parser.
	                  if (source.charCodeAt(Index) == 46) {
	                    position = ++Index;
	                    // Parse the decimal component.
	                    for (; position < length && (charCode = source.charCodeAt(position), charCode >= 48 && charCode <= 57); position++);
	                    if (position == Index) {
	                      // Illegal trailing decimal.
	                      abort();
	                    }
	                    Index = position;
	                  }
	                  // Parse exponents. The `e` denoting the exponent is
	                  // case-insensitive.
	                  charCode = source.charCodeAt(Index);
	                  if (charCode == 101 || charCode == 69) {
	                    charCode = source.charCodeAt(++Index);
	                    // Skip past the sign following the exponent, if one is
	                    // specified.
	                    if (charCode == 43 || charCode == 45) {
	                      Index++;
	                    }
	                    // Parse the exponential component.
	                    for (position = Index; position < length && (charCode = source.charCodeAt(position), charCode >= 48 && charCode <= 57); position++);
	                    if (position == Index) {
	                      // Illegal empty exponent.
	                      abort();
	                    }
	                    Index = position;
	                  }
	                  // Coerce the parsed value to a JavaScript number.
	                  return +source.slice(begin, Index);
	                }
	                // A negative sign may only precede numbers.
	                if (isSigned) {
	                  abort();
	                }
	                // `true`, `false`, and `null` literals.
	                if (source.slice(Index, Index + 4) == "true") {
	                  Index += 4;
	                  return true;
	                } else if (source.slice(Index, Index + 5) == "false") {
	                  Index += 5;
	                  return false;
	                } else if (source.slice(Index, Index + 4) == "null") {
	                  Index += 4;
	                  return null;
	                }
	                // Unrecognized token.
	                abort();
	            }
	          }
	          // Return the sentinel `$` character if the parser has reached the end
	          // of the source string.
	          return "$";
	        };

	        // Internal: Parses a JSON `value` token.
	        var get = function (value) {
	          var results, hasMembers;
	          if (value == "$") {
	            // Unexpected end of input.
	            abort();
	          }
	          if (typeof value == "string") {
	            if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
	              // Remove the sentinel `@` character.
	              return value.slice(1);
	            }
	            // Parse object and array literals.
	            if (value == "[") {
	              // Parses a JSON array, returning a new JavaScript array.
	              results = [];
	              for (;; hasMembers || (hasMembers = true)) {
	                value = lex();
	                // A closing square bracket marks the end of the array literal.
	                if (value == "]") {
	                  break;
	                }
	                // If the array literal contains elements, the current token
	                // should be a comma separating the previous element from the
	                // next.
	                if (hasMembers) {
	                  if (value == ",") {
	                    value = lex();
	                    if (value == "]") {
	                      // Unexpected trailing `,` in array literal.
	                      abort();
	                    }
	                  } else {
	                    // A `,` must separate each array element.
	                    abort();
	                  }
	                }
	                // Elisions and leading commas are not permitted.
	                if (value == ",") {
	                  abort();
	                }
	                results.push(get(value));
	              }
	              return results;
	            } else if (value == "{") {
	              // Parses a JSON object, returning a new JavaScript object.
	              results = {};
	              for (;; hasMembers || (hasMembers = true)) {
	                value = lex();
	                // A closing curly brace marks the end of the object literal.
	                if (value == "}") {
	                  break;
	                }
	                // If the object literal contains members, the current token
	                // should be a comma separator.
	                if (hasMembers) {
	                  if (value == ",") {
	                    value = lex();
	                    if (value == "}") {
	                      // Unexpected trailing `,` in object literal.
	                      abort();
	                    }
	                  } else {
	                    // A `,` must separate each object member.
	                    abort();
	                  }
	                }
	                // Leading commas are not permitted, object property names must be
	                // double-quoted strings, and a `:` must separate each property
	                // name and value.
	                if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
	                  abort();
	                }
	                results[value.slice(1)] = get(lex());
	              }
	              return results;
	            }
	            // Unexpected token encountered.
	            abort();
	          }
	          return value;
	        };

	        // Internal: Updates a traversed object member.
	        var update = function (source, property, callback) {
	          var element = walk(source, property, callback);
	          if (element === undef) {
	            delete source[property];
	          } else {
	            source[property] = element;
	          }
	        };

	        // Internal: Recursively traverses a parsed JSON object, invoking the
	        // `callback` function for each value. This is an implementation of the
	        // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
	        var walk = function (source, property, callback) {
	          var value = source[property],
	              length;
	          if (typeof value == "object" && value) {
	            // `forEach` can't be used to traverse an array in Opera <= 8.54
	            // because its `Object#hasOwnProperty` implementation returns `false`
	            // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
	            if (getClass.call(value) == arrayClass) {
	              for (length = value.length; length--;) {
	                update(value, length, callback);
	              }
	            } else {
	              forEach(value, function (property) {
	                update(value, property, callback);
	              });
	            }
	          }
	          return callback.call(source, property, value);
	        };

	        // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
	        exports.parse = function (source, callback) {
	          var result, value;
	          Index = 0;
	          Source = "" + source;
	          result = get(lex());
	          // If a JSON string contains multiple tokens, it is invalid.
	          if (lex() != "$") {
	            abort();
	          }
	          // Reset the parser state.
	          Index = Source = null;
	          return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
	        };
	      }
	    }

	    exports["runInContext"] = runInContext;
	    return exports;
	  }

	  if (freeExports && !isLoader) {
	    // Export for CommonJS environments.
	    runInContext(root, freeExports);
	  } else {
	    // Export for web browsers and JavaScript engines.
	    var nativeJSON = root.JSON,
	        previousJSON = root["JSON3"],
	        isRestored = false;

	    var JSON3 = runInContext(root, root["JSON3"] = {
	      // Public: Restores the original value of the global `JSON` object and
	      // returns a reference to the `JSON3` object.
	      "noConflict": function () {
	        if (!isRestored) {
	          isRestored = true;
	          root.JSON = nativeJSON;
	          root["JSON3"] = previousJSON;
	          nativeJSON = previousJSON = null;
	        }
	        return JSON3;
	      }
	    });

	    root.JSON = {
	      "parse": JSON3.parse,
	      "stringify": JSON3.stringify
	    };
	  }

	  // Export for asynchronous module loaders.
	  if (isLoader) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return JSON3;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}).call(this);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(182)(module), (function() { return this; }())))

/***/ },
/* 182 */
/***/ function(module, exports) {

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 183 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 184 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

/***/ },
/* 185 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */

	module.exports = Emitter;

	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */

	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};

	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
	  this._callbacks = this._callbacks || {};
	  (this._callbacks[event] = this._callbacks[event] || []).push(fn);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.once = function (event, fn) {
	  var self = this;
	  this._callbacks = this._callbacks || {};

	  function on() {
	    self.off(event, on);
	    fn.apply(this, arguments);
	  }

	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
	  this._callbacks = this._callbacks || {};

	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }

	  // specific event
	  var callbacks = this._callbacks[event];
	  if (!callbacks) return this;

	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks[event];
	    return this;
	  }

	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};

	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */

	Emitter.prototype.emit = function (event) {
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1),
	      callbacks = this._callbacks[event];

	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }

	  return this;
	};

	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */

	Emitter.prototype.listeners = function (event) {
	  this._callbacks = this._callbacks || {};
	  return this._callbacks[event] || [];
	};

	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */

	Emitter.prototype.hasListeners = function (event) {
	  return !!this.listeners(event).length;
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*global Blob,File*/

	/**
	 * Module requirements
	 */

	var isArray = __webpack_require__(184);
	var isBuf = __webpack_require__(187);

	/**
	 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
	 * Anything with blobs or files should be fed through removeBlobs before coming
	 * here.
	 *
	 * @param {Object} packet - socket.io event packet
	 * @return {Object} with deconstructed packet and list of buffers
	 * @api public
	 */

	exports.deconstructPacket = function (packet) {
	  var buffers = [];
	  var packetData = packet.data;

	  function _deconstructPacket(data) {
	    if (!data) return data;

	    if (isBuf(data)) {
	      var placeholder = { _placeholder: true, num: buffers.length };
	      buffers.push(data);
	      return placeholder;
	    } else if (isArray(data)) {
	      var newData = new Array(data.length);
	      for (var i = 0; i < data.length; i++) {
	        newData[i] = _deconstructPacket(data[i]);
	      }
	      return newData;
	    } else if ('object' == typeof data && !(data instanceof Date)) {
	      var newData = {};
	      for (var key in data) {
	        newData[key] = _deconstructPacket(data[key]);
	      }
	      return newData;
	    }
	    return data;
	  }

	  var pack = packet;
	  pack.data = _deconstructPacket(packetData);
	  pack.attachments = buffers.length; // number of binary 'attachments'
	  return { packet: pack, buffers: buffers };
	};

	/**
	 * Reconstructs a binary packet from its placeholder packet and buffers
	 *
	 * @param {Object} packet - event packet with placeholders
	 * @param {Array} buffers - binary buffers to put in placeholder positions
	 * @return {Object} reconstructed packet
	 * @api public
	 */

	exports.reconstructPacket = function (packet, buffers) {
	  var curPlaceHolder = 0;

	  function _reconstructPacket(data) {
	    if (data && data._placeholder) {
	      var buf = buffers[data.num]; // appropriate buffer (should be natural order anyway)
	      return buf;
	    } else if (isArray(data)) {
	      for (var i = 0; i < data.length; i++) {
	        data[i] = _reconstructPacket(data[i]);
	      }
	      return data;
	    } else if (data && 'object' == typeof data) {
	      for (var key in data) {
	        data[key] = _reconstructPacket(data[key]);
	      }
	      return data;
	    }
	    return data;
	  }

	  packet.data = _reconstructPacket(packet.data);
	  packet.attachments = undefined; // no longer useful
	  return packet;
	};

	/**
	 * Asynchronously removes Blobs or Files from data via
	 * FileReader's readAsArrayBuffer method. Used before encoding
	 * data as msgpack. Calls callback with the blobless data.
	 *
	 * @param {Object} data
	 * @param {Function} callback
	 * @api private
	 */

	exports.removeBlobs = function (data, callback) {
	  function _removeBlobs(obj, curKey, containingObject) {
	    if (!obj) return obj;

	    // convert any blob
	    if (global.Blob && obj instanceof Blob || global.File && obj instanceof File) {
	      pendingBlobs++;

	      // async filereader
	      var fileReader = new FileReader();
	      fileReader.onload = function () {
	        // this.result == arraybuffer
	        if (containingObject) {
	          containingObject[curKey] = this.result;
	        } else {
	          bloblessData = this.result;
	        }

	        // if nothing pending its callback time
	        if (! --pendingBlobs) {
	          callback(bloblessData);
	        }
	      };

	      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
	    } else if (isArray(obj)) {
	        // handle array
	        for (var i = 0; i < obj.length; i++) {
	          _removeBlobs(obj[i], i, obj);
	        }
	      } else if (obj && 'object' == typeof obj && !isBuf(obj)) {
	        // and object
	        for (var key in obj) {
	          _removeBlobs(obj[key], key, obj);
	        }
	      }
	  }

	  var pendingBlobs = 0;
	  var bloblessData = data;
	  _removeBlobs(bloblessData);
	  if (!pendingBlobs) {
	    callback(bloblessData);
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 187 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	module.exports = isBuf;

	/**
	 * Returns true if obj is a buffer or an arraybuffer.
	 *
	 * @api private
	 */

	function isBuf(obj) {
	  return global.Buffer && global.Buffer.isBuffer(obj) || global.ArrayBuffer && obj instanceof ArrayBuffer;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var eio = __webpack_require__(189);
	var Socket = __webpack_require__(216);
	var Emitter = __webpack_require__(217);
	var parser = __webpack_require__(180);
	var on = __webpack_require__(219);
	var bind = __webpack_require__(220);
	var debug = __webpack_require__(177)('socket.io-client:manager');
	var indexOf = __webpack_require__(214);
	var Backoff = __webpack_require__(223);

	/**
	 * IE6+ hasOwnProperty
	 */

	var has = Object.prototype.hasOwnProperty;

	/**
	 * Module exports
	 */

	module.exports = Manager;

	/**
	 * `Manager` constructor.
	 *
	 * @param {String} engine instance or engine uri/opts
	 * @param {Object} options
	 * @api public
	 */

	function Manager(uri, opts) {
	  if (!(this instanceof Manager)) return new Manager(uri, opts);
	  if (uri && 'object' == typeof uri) {
	    opts = uri;
	    uri = undefined;
	  }
	  opts = opts || {};

	  opts.path = opts.path || '/socket.io';
	  this.nsps = {};
	  this.subs = [];
	  this.opts = opts;
	  this.reconnection(opts.reconnection !== false);
	  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
	  this.reconnectionDelay(opts.reconnectionDelay || 1000);
	  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
	  this.randomizationFactor(opts.randomizationFactor || 0.5);
	  this.backoff = new Backoff({
	    min: this.reconnectionDelay(),
	    max: this.reconnectionDelayMax(),
	    jitter: this.randomizationFactor()
	  });
	  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
	  this.readyState = 'closed';
	  this.uri = uri;
	  this.connecting = [];
	  this.lastPing = null;
	  this.encoding = false;
	  this.packetBuffer = [];
	  this.encoder = new parser.Encoder();
	  this.decoder = new parser.Decoder();
	  this.autoConnect = opts.autoConnect !== false;
	  if (this.autoConnect) this.open();
	}

	/**
	 * Propagate given event to sockets and emit on `this`
	 *
	 * @api private
	 */

	Manager.prototype.emitAll = function () {
	  this.emit.apply(this, arguments);
	  for (var nsp in this.nsps) {
	    if (has.call(this.nsps, nsp)) {
	      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
	    }
	  }
	};

	/**
	 * Update `socket.id` of all sockets
	 *
	 * @api private
	 */

	Manager.prototype.updateSocketIds = function () {
	  for (var nsp in this.nsps) {
	    if (has.call(this.nsps, nsp)) {
	      this.nsps[nsp].id = this.engine.id;
	    }
	  }
	};

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Manager.prototype);

	/**
	 * Sets the `reconnection` config.
	 *
	 * @param {Boolean} true/false if it should automatically reconnect
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.reconnection = function (v) {
	  if (!arguments.length) return this._reconnection;
	  this._reconnection = !!v;
	  return this;
	};

	/**
	 * Sets the reconnection attempts config.
	 *
	 * @param {Number} max reconnection attempts before giving up
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.reconnectionAttempts = function (v) {
	  if (!arguments.length) return this._reconnectionAttempts;
	  this._reconnectionAttempts = v;
	  return this;
	};

	/**
	 * Sets the delay between reconnections.
	 *
	 * @param {Number} delay
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.reconnectionDelay = function (v) {
	  if (!arguments.length) return this._reconnectionDelay;
	  this._reconnectionDelay = v;
	  this.backoff && this.backoff.setMin(v);
	  return this;
	};

	Manager.prototype.randomizationFactor = function (v) {
	  if (!arguments.length) return this._randomizationFactor;
	  this._randomizationFactor = v;
	  this.backoff && this.backoff.setJitter(v);
	  return this;
	};

	/**
	 * Sets the maximum delay between reconnections.
	 *
	 * @param {Number} delay
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.reconnectionDelayMax = function (v) {
	  if (!arguments.length) return this._reconnectionDelayMax;
	  this._reconnectionDelayMax = v;
	  this.backoff && this.backoff.setMax(v);
	  return this;
	};

	/**
	 * Sets the connection timeout. `false` to disable
	 *
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.timeout = function (v) {
	  if (!arguments.length) return this._timeout;
	  this._timeout = v;
	  return this;
	};

	/**
	 * Starts trying to reconnect if reconnection is enabled and we have not
	 * started reconnecting yet
	 *
	 * @api private
	 */

	Manager.prototype.maybeReconnectOnOpen = function () {
	  // Only try to reconnect if it's the first time we're connecting
	  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
	    // keeps reconnection from firing twice for the same reconnection loop
	    this.reconnect();
	  }
	};

	/**
	 * Sets the current transport `socket`.
	 *
	 * @param {Function} optional, callback
	 * @return {Manager} self
	 * @api public
	 */

	Manager.prototype.open = Manager.prototype.connect = function (fn) {
	  debug('readyState %s', this.readyState);
	  if (~this.readyState.indexOf('open')) return this;

	  debug('opening %s', this.uri);
	  this.engine = eio(this.uri, this.opts);
	  var socket = this.engine;
	  var self = this;
	  this.readyState = 'opening';
	  this.skipReconnect = false;

	  // emit `open`
	  var openSub = on(socket, 'open', function () {
	    self.onopen();
	    fn && fn();
	  });

	  // emit `connect_error`
	  var errorSub = on(socket, 'error', function (data) {
	    debug('connect_error');
	    self.cleanup();
	    self.readyState = 'closed';
	    self.emitAll('connect_error', data);
	    if (fn) {
	      var err = new Error('Connection error');
	      err.data = data;
	      fn(err);
	    } else {
	      // Only do this if there is no fn to handle the error
	      self.maybeReconnectOnOpen();
	    }
	  });

	  // emit `connect_timeout`
	  if (false !== this._timeout) {
	    var timeout = this._timeout;
	    debug('connect attempt will timeout after %d', timeout);

	    // set timer
	    var timer = setTimeout(function () {
	      debug('connect attempt timed out after %d', timeout);
	      openSub.destroy();
	      socket.close();
	      socket.emit('error', 'timeout');
	      self.emitAll('connect_timeout', timeout);
	    }, timeout);

	    this.subs.push({
	      destroy: function () {
	        clearTimeout(timer);
	      }
	    });
	  }

	  this.subs.push(openSub);
	  this.subs.push(errorSub);

	  return this;
	};

	/**
	 * Called upon transport open.
	 *
	 * @api private
	 */

	Manager.prototype.onopen = function () {
	  debug('open');

	  // clear old subs
	  this.cleanup();

	  // mark as open
	  this.readyState = 'open';
	  this.emit('open');

	  // add new subs
	  var socket = this.engine;
	  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
	  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
	  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
	  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
	  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
	  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
	};

	/**
	 * Called upon a ping.
	 *
	 * @api private
	 */

	Manager.prototype.onping = function () {
	  this.lastPing = new Date();
	  this.emitAll('ping');
	};

	/**
	 * Called upon a packet.
	 *
	 * @api private
	 */

	Manager.prototype.onpong = function () {
	  this.emitAll('pong', new Date() - this.lastPing);
	};

	/**
	 * Called with data.
	 *
	 * @api private
	 */

	Manager.prototype.ondata = function (data) {
	  this.decoder.add(data);
	};

	/**
	 * Called when parser fully decodes a packet.
	 *
	 * @api private
	 */

	Manager.prototype.ondecoded = function (packet) {
	  this.emit('packet', packet);
	};

	/**
	 * Called upon socket error.
	 *
	 * @api private
	 */

	Manager.prototype.onerror = function (err) {
	  debug('error', err);
	  this.emitAll('error', err);
	};

	/**
	 * Creates a new socket for the given `nsp`.
	 *
	 * @return {Socket}
	 * @api public
	 */

	Manager.prototype.socket = function (nsp) {
	  var socket = this.nsps[nsp];
	  if (!socket) {
	    socket = new Socket(this, nsp);
	    this.nsps[nsp] = socket;
	    var self = this;
	    socket.on('connecting', onConnecting);
	    socket.on('connect', function () {
	      socket.id = self.engine.id;
	    });

	    if (this.autoConnect) {
	      // manually call here since connecting evnet is fired before listening
	      onConnecting();
	    }
	  }

	  function onConnecting() {
	    if (! ~indexOf(self.connecting, socket)) {
	      self.connecting.push(socket);
	    }
	  }

	  return socket;
	};

	/**
	 * Called upon a socket close.
	 *
	 * @param {Socket} socket
	 */

	Manager.prototype.destroy = function (socket) {
	  var index = indexOf(this.connecting, socket);
	  if (~index) this.connecting.splice(index, 1);
	  if (this.connecting.length) return;

	  this.close();
	};

	/**
	 * Writes a packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Manager.prototype.packet = function (packet) {
	  debug('writing packet %j', packet);
	  var self = this;

	  if (!self.encoding) {
	    // encode, then write to engine with result
	    self.encoding = true;
	    this.encoder.encode(packet, function (encodedPackets) {
	      for (var i = 0; i < encodedPackets.length; i++) {
	        self.engine.write(encodedPackets[i], packet.options);
	      }
	      self.encoding = false;
	      self.processPacketQueue();
	    });
	  } else {
	    // add packet to the queue
	    self.packetBuffer.push(packet);
	  }
	};

	/**
	 * If packet buffer is non-empty, begins encoding the
	 * next packet in line.
	 *
	 * @api private
	 */

	Manager.prototype.processPacketQueue = function () {
	  if (this.packetBuffer.length > 0 && !this.encoding) {
	    var pack = this.packetBuffer.shift();
	    this.packet(pack);
	  }
	};

	/**
	 * Clean up transport subscriptions and packet buffer.
	 *
	 * @api private
	 */

	Manager.prototype.cleanup = function () {
	  debug('cleanup');

	  var sub;
	  while (sub = this.subs.shift()) sub.destroy();

	  this.packetBuffer = [];
	  this.encoding = false;
	  this.lastPing = null;

	  this.decoder.destroy();
	};

	/**
	 * Close the current socket.
	 *
	 * @api private
	 */

	Manager.prototype.close = Manager.prototype.disconnect = function () {
	  debug('disconnect');
	  this.skipReconnect = true;
	  this.reconnecting = false;
	  if ('opening' == this.readyState) {
	    // `onclose` will not fire because
	    // an open event never happened
	    this.cleanup();
	  }
	  this.backoff.reset();
	  this.readyState = 'closed';
	  if (this.engine) this.engine.close();
	};

	/**
	 * Called upon engine close.
	 *
	 * @api private
	 */

	Manager.prototype.onclose = function (reason) {
	  debug('onclose');

	  this.cleanup();
	  this.backoff.reset();
	  this.readyState = 'closed';
	  this.emit('close', reason);

	  if (this._reconnection && !this.skipReconnect) {
	    this.reconnect();
	  }
	};

	/**
	 * Attempt a reconnection.
	 *
	 * @api private
	 */

	Manager.prototype.reconnect = function () {
	  if (this.reconnecting || this.skipReconnect) return this;

	  var self = this;

	  if (this.backoff.attempts >= this._reconnectionAttempts) {
	    debug('reconnect failed');
	    this.backoff.reset();
	    this.emitAll('reconnect_failed');
	    this.reconnecting = false;
	  } else {
	    var delay = this.backoff.duration();
	    debug('will wait %dms before reconnect attempt', delay);

	    this.reconnecting = true;
	    var timer = setTimeout(function () {
	      if (self.skipReconnect) return;

	      debug('attempting reconnect');
	      self.emitAll('reconnect_attempt', self.backoff.attempts);
	      self.emitAll('reconnecting', self.backoff.attempts);

	      // check again for the case socket closed in above events
	      if (self.skipReconnect) return;

	      self.open(function (err) {
	        if (err) {
	          debug('reconnect attempt error');
	          self.reconnecting = false;
	          self.reconnect();
	          self.emitAll('reconnect_error', err.data);
	        } else {
	          debug('reconnect success');
	          self.onreconnect();
	        }
	      });
	    }, delay);

	    this.subs.push({
	      destroy: function () {
	        clearTimeout(timer);
	      }
	    });
	  }
	};

	/**
	 * Called upon successful reconnect.
	 *
	 * @api private
	 */

	Manager.prototype.onreconnect = function () {
	  var attempt = this.backoff.attempts;
	  this.reconnecting = false;
	  this.backoff.reset();
	  this.updateSocketIds();
	  this.emitAll('reconnect', attempt);
	};

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(190);

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(191);

	/**
	 * Exports parser
	 *
	 * @api public
	 *
	 */
	module.exports.parser = __webpack_require__(198);

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */

	var transports = __webpack_require__(192);
	var Emitter = __webpack_require__(207);
	var debug = __webpack_require__(177)('engine.io-client:socket');
	var index = __webpack_require__(214);
	var parser = __webpack_require__(198);
	var parseuri = __webpack_require__(176);
	var parsejson = __webpack_require__(215);
	var parseqs = __webpack_require__(208);

	/**
	 * Module exports.
	 */

	module.exports = Socket;

	/**
	 * Noop function.
	 *
	 * @api private
	 */

	function noop() {}

	/**
	 * Socket constructor.
	 *
	 * @param {String|Object} uri or options
	 * @param {Object} options
	 * @api public
	 */

	function Socket(uri, opts) {
	  if (!(this instanceof Socket)) return new Socket(uri, opts);

	  opts = opts || {};

	  if (uri && 'object' == typeof uri) {
	    opts = uri;
	    uri = null;
	  }

	  if (uri) {
	    uri = parseuri(uri);
	    opts.hostname = uri.host;
	    opts.secure = uri.protocol == 'https' || uri.protocol == 'wss';
	    opts.port = uri.port;
	    if (uri.query) opts.query = uri.query;
	  } else if (opts.host) {
	    opts.hostname = parseuri(opts.host).host;
	  }

	  this.secure = null != opts.secure ? opts.secure : global.location && 'https:' == location.protocol;

	  if (opts.hostname && !opts.port) {
	    // if no port is specified manually, use the protocol default
	    opts.port = this.secure ? '443' : '80';
	  }

	  this.agent = opts.agent || false;
	  this.hostname = opts.hostname || (global.location ? location.hostname : 'localhost');
	  this.port = opts.port || (global.location && location.port ? location.port : this.secure ? 443 : 80);
	  this.query = opts.query || {};
	  if ('string' == typeof this.query) this.query = parseqs.decode(this.query);
	  this.upgrade = false !== opts.upgrade;
	  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
	  this.forceJSONP = !!opts.forceJSONP;
	  this.jsonp = false !== opts.jsonp;
	  this.forceBase64 = !!opts.forceBase64;
	  this.enablesXDR = !!opts.enablesXDR;
	  this.timestampParam = opts.timestampParam || 't';
	  this.timestampRequests = opts.timestampRequests;
	  this.transports = opts.transports || ['polling', 'websocket'];
	  this.readyState = '';
	  this.writeBuffer = [];
	  this.policyPort = opts.policyPort || 843;
	  this.rememberUpgrade = opts.rememberUpgrade || false;
	  this.binaryType = null;
	  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
	  this.perMessageDeflate = false !== opts.perMessageDeflate ? opts.perMessageDeflate || {} : false;

	  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
	  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
	    this.perMessageDeflate.threshold = 1024;
	  }

	  // SSL options for Node.js client
	  this.pfx = opts.pfx || null;
	  this.key = opts.key || null;
	  this.passphrase = opts.passphrase || null;
	  this.cert = opts.cert || null;
	  this.ca = opts.ca || null;
	  this.ciphers = opts.ciphers || null;
	  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? null : opts.rejectUnauthorized;

	  // other options for Node.js client
	  var freeGlobal = typeof global == 'object' && global;
	  if (freeGlobal.global === freeGlobal) {
	    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
	      this.extraHeaders = opts.extraHeaders;
	    }
	  }

	  this.open();
	}

	Socket.priorWebsocketSuccess = false;

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Socket.prototype);

	/**
	 * Protocol version.
	 *
	 * @api public
	 */

	Socket.protocol = parser.protocol; // this is an int

	/**
	 * Expose deps for legacy compatibility
	 * and standalone browser access.
	 */

	Socket.Socket = Socket;
	Socket.Transport = __webpack_require__(197);
	Socket.transports = __webpack_require__(192);
	Socket.parser = __webpack_require__(198);

	/**
	 * Creates transport of the given type.
	 *
	 * @param {String} transport name
	 * @return {Transport}
	 * @api private
	 */

	Socket.prototype.createTransport = function (name) {
	  debug('creating transport "%s"', name);
	  var query = clone(this.query);

	  // append engine.io protocol identifier
	  query.EIO = parser.protocol;

	  // transport name
	  query.transport = name;

	  // session id if we already have one
	  if (this.id) query.sid = this.id;

	  var transport = new transports[name]({
	    agent: this.agent,
	    hostname: this.hostname,
	    port: this.port,
	    secure: this.secure,
	    path: this.path,
	    query: query,
	    forceJSONP: this.forceJSONP,
	    jsonp: this.jsonp,
	    forceBase64: this.forceBase64,
	    enablesXDR: this.enablesXDR,
	    timestampRequests: this.timestampRequests,
	    timestampParam: this.timestampParam,
	    policyPort: this.policyPort,
	    socket: this,
	    pfx: this.pfx,
	    key: this.key,
	    passphrase: this.passphrase,
	    cert: this.cert,
	    ca: this.ca,
	    ciphers: this.ciphers,
	    rejectUnauthorized: this.rejectUnauthorized,
	    perMessageDeflate: this.perMessageDeflate,
	    extraHeaders: this.extraHeaders
	  });

	  return transport;
	};

	function clone(obj) {
	  var o = {};
	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      o[i] = obj[i];
	    }
	  }
	  return o;
	}

	/**
	 * Initializes transport to use and starts probe.
	 *
	 * @api private
	 */
	Socket.prototype.open = function () {
	  var transport;
	  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') != -1) {
	    transport = 'websocket';
	  } else if (0 === this.transports.length) {
	    // Emit error on next tick so it can be listened to
	    var self = this;
	    setTimeout(function () {
	      self.emit('error', 'No transports available');
	    }, 0);
	    return;
	  } else {
	    transport = this.transports[0];
	  }
	  this.readyState = 'opening';

	  // Retry with the next transport if the transport is disabled (jsonp: false)
	  try {
	    transport = this.createTransport(transport);
	  } catch (e) {
	    this.transports.shift();
	    this.open();
	    return;
	  }

	  transport.open();
	  this.setTransport(transport);
	};

	/**
	 * Sets the current transport. Disables the existing one (if any).
	 *
	 * @api private
	 */

	Socket.prototype.setTransport = function (transport) {
	  debug('setting transport %s', transport.name);
	  var self = this;

	  if (this.transport) {
	    debug('clearing existing transport %s', this.transport.name);
	    this.transport.removeAllListeners();
	  }

	  // set up transport
	  this.transport = transport;

	  // set up transport listeners
	  transport.on('drain', function () {
	    self.onDrain();
	  }).on('packet', function (packet) {
	    self.onPacket(packet);
	  }).on('error', function (e) {
	    self.onError(e);
	  }).on('close', function () {
	    self.onClose('transport close');
	  });
	};

	/**
	 * Probes a transport.
	 *
	 * @param {String} transport name
	 * @api private
	 */

	Socket.prototype.probe = function (name) {
	  debug('probing transport "%s"', name);
	  var transport = this.createTransport(name, { probe: 1 }),
	      failed = false,
	      self = this;

	  Socket.priorWebsocketSuccess = false;

	  function onTransportOpen() {
	    if (self.onlyBinaryUpgrades) {
	      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
	      failed = failed || upgradeLosesBinary;
	    }
	    if (failed) return;

	    debug('probe transport "%s" opened', name);
	    transport.send([{ type: 'ping', data: 'probe' }]);
	    transport.once('packet', function (msg) {
	      if (failed) return;
	      if ('pong' == msg.type && 'probe' == msg.data) {
	        debug('probe transport "%s" pong', name);
	        self.upgrading = true;
	        self.emit('upgrading', transport);
	        if (!transport) return;
	        Socket.priorWebsocketSuccess = 'websocket' == transport.name;

	        debug('pausing current transport "%s"', self.transport.name);
	        self.transport.pause(function () {
	          if (failed) return;
	          if ('closed' == self.readyState) return;
	          debug('changing transport and sending upgrade packet');

	          cleanup();

	          self.setTransport(transport);
	          transport.send([{ type: 'upgrade' }]);
	          self.emit('upgrade', transport);
	          transport = null;
	          self.upgrading = false;
	          self.flush();
	        });
	      } else {
	        debug('probe transport "%s" failed', name);
	        var err = new Error('probe error');
	        err.transport = transport.name;
	        self.emit('upgradeError', err);
	      }
	    });
	  }

	  function freezeTransport() {
	    if (failed) return;

	    // Any callback called by transport should be ignored since now
	    failed = true;

	    cleanup();

	    transport.close();
	    transport = null;
	  }

	  //Handle any error that happens while probing
	  function onerror(err) {
	    var error = new Error('probe error: ' + err);
	    error.transport = transport.name;

	    freezeTransport();

	    debug('probe transport "%s" failed because of error: %s', name, err);

	    self.emit('upgradeError', error);
	  }

	  function onTransportClose() {
	    onerror("transport closed");
	  }

	  //When the socket is closed while we're probing
	  function onclose() {
	    onerror("socket closed");
	  }

	  //When the socket is upgraded while we're probing
	  function onupgrade(to) {
	    if (transport && to.name != transport.name) {
	      debug('"%s" works - aborting "%s"', to.name, transport.name);
	      freezeTransport();
	    }
	  }

	  //Remove all listeners on the transport and on self
	  function cleanup() {
	    transport.removeListener('open', onTransportOpen);
	    transport.removeListener('error', onerror);
	    transport.removeListener('close', onTransportClose);
	    self.removeListener('close', onclose);
	    self.removeListener('upgrading', onupgrade);
	  }

	  transport.once('open', onTransportOpen);
	  transport.once('error', onerror);
	  transport.once('close', onTransportClose);

	  this.once('close', onclose);
	  this.once('upgrading', onupgrade);

	  transport.open();
	};

	/**
	 * Called when connection is deemed open.
	 *
	 * @api public
	 */

	Socket.prototype.onOpen = function () {
	  debug('socket open');
	  this.readyState = 'open';
	  Socket.priorWebsocketSuccess = 'websocket' == this.transport.name;
	  this.emit('open');
	  this.flush();

	  // we check for `readyState` in case an `open`
	  // listener already closed the socket
	  if ('open' == this.readyState && this.upgrade && this.transport.pause) {
	    debug('starting upgrade probes');
	    for (var i = 0, l = this.upgrades.length; i < l; i++) {
	      this.probe(this.upgrades[i]);
	    }
	  }
	};

	/**
	 * Handles a packet.
	 *
	 * @api private
	 */

	Socket.prototype.onPacket = function (packet) {
	  if ('opening' == this.readyState || 'open' == this.readyState) {
	    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

	    this.emit('packet', packet);

	    // Socket is live - any packet counts
	    this.emit('heartbeat');

	    switch (packet.type) {
	      case 'open':
	        this.onHandshake(parsejson(packet.data));
	        break;

	      case 'pong':
	        this.setPing();
	        this.emit('pong');
	        break;

	      case 'error':
	        var err = new Error('server error');
	        err.code = packet.data;
	        this.onError(err);
	        break;

	      case 'message':
	        this.emit('data', packet.data);
	        this.emit('message', packet.data);
	        break;
	    }
	  } else {
	    debug('packet received with socket readyState "%s"', this.readyState);
	  }
	};

	/**
	 * Called upon handshake completion.
	 *
	 * @param {Object} handshake obj
	 * @api private
	 */

	Socket.prototype.onHandshake = function (data) {
	  this.emit('handshake', data);
	  this.id = data.sid;
	  this.transport.query.sid = data.sid;
	  this.upgrades = this.filterUpgrades(data.upgrades);
	  this.pingInterval = data.pingInterval;
	  this.pingTimeout = data.pingTimeout;
	  this.onOpen();
	  // In case open handler closes socket
	  if ('closed' == this.readyState) return;
	  this.setPing();

	  // Prolong liveness of socket on heartbeat
	  this.removeListener('heartbeat', this.onHeartbeat);
	  this.on('heartbeat', this.onHeartbeat);
	};

	/**
	 * Resets ping timeout.
	 *
	 * @api private
	 */

	Socket.prototype.onHeartbeat = function (timeout) {
	  clearTimeout(this.pingTimeoutTimer);
	  var self = this;
	  self.pingTimeoutTimer = setTimeout(function () {
	    if ('closed' == self.readyState) return;
	    self.onClose('ping timeout');
	  }, timeout || self.pingInterval + self.pingTimeout);
	};

	/**
	 * Pings server every `this.pingInterval` and expects response
	 * within `this.pingTimeout` or closes connection.
	 *
	 * @api private
	 */

	Socket.prototype.setPing = function () {
	  var self = this;
	  clearTimeout(self.pingIntervalTimer);
	  self.pingIntervalTimer = setTimeout(function () {
	    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
	    self.ping();
	    self.onHeartbeat(self.pingTimeout);
	  }, self.pingInterval);
	};

	/**
	* Sends a ping packet.
	*
	* @api private
	*/

	Socket.prototype.ping = function () {
	  var self = this;
	  this.sendPacket('ping', function () {
	    self.emit('ping');
	  });
	};

	/**
	 * Called on `drain` event
	 *
	 * @api private
	 */

	Socket.prototype.onDrain = function () {
	  this.writeBuffer.splice(0, this.prevBufferLen);

	  // setting prevBufferLen = 0 is very important
	  // for example, when upgrading, upgrade packet is sent over,
	  // and a nonzero prevBufferLen could cause problems on `drain`
	  this.prevBufferLen = 0;

	  if (0 === this.writeBuffer.length) {
	    this.emit('drain');
	  } else {
	    this.flush();
	  }
	};

	/**
	 * Flush write buffers.
	 *
	 * @api private
	 */

	Socket.prototype.flush = function () {
	  if ('closed' != this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
	    debug('flushing %d packets in socket', this.writeBuffer.length);
	    this.transport.send(this.writeBuffer);
	    // keep track of current length of writeBuffer
	    // splice writeBuffer and callbackBuffer on `drain`
	    this.prevBufferLen = this.writeBuffer.length;
	    this.emit('flush');
	  }
	};

	/**
	 * Sends a message.
	 *
	 * @param {String} message.
	 * @param {Function} callback function.
	 * @param {Object} options.
	 * @return {Socket} for chaining.
	 * @api public
	 */

	Socket.prototype.write = Socket.prototype.send = function (msg, options, fn) {
	  this.sendPacket('message', msg, options, fn);
	  return this;
	};

	/**
	 * Sends a packet.
	 *
	 * @param {String} packet type.
	 * @param {String} data.
	 * @param {Object} options.
	 * @param {Function} callback function.
	 * @api private
	 */

	Socket.prototype.sendPacket = function (type, data, options, fn) {
	  if ('function' == typeof data) {
	    fn = data;
	    data = undefined;
	  }

	  if ('function' == typeof options) {
	    fn = options;
	    options = null;
	  }

	  if ('closing' == this.readyState || 'closed' == this.readyState) {
	    return;
	  }

	  options = options || {};
	  options.compress = false !== options.compress;

	  var packet = {
	    type: type,
	    data: data,
	    options: options
	  };
	  this.emit('packetCreate', packet);
	  this.writeBuffer.push(packet);
	  if (fn) this.once('flush', fn);
	  this.flush();
	};

	/**
	 * Closes the connection.
	 *
	 * @api private
	 */

	Socket.prototype.close = function () {
	  if ('opening' == this.readyState || 'open' == this.readyState) {
	    this.readyState = 'closing';

	    var self = this;

	    if (this.writeBuffer.length) {
	      this.once('drain', function () {
	        if (this.upgrading) {
	          waitForUpgrade();
	        } else {
	          close();
	        }
	      });
	    } else if (this.upgrading) {
	      waitForUpgrade();
	    } else {
	      close();
	    }
	  }

	  function close() {
	    self.onClose('forced close');
	    debug('socket closing - telling transport to close');
	    self.transport.close();
	  }

	  function cleanupAndClose() {
	    self.removeListener('upgrade', cleanupAndClose);
	    self.removeListener('upgradeError', cleanupAndClose);
	    close();
	  }

	  function waitForUpgrade() {
	    // wait for upgrade to finish since we can't send packets while pausing a transport
	    self.once('upgrade', cleanupAndClose);
	    self.once('upgradeError', cleanupAndClose);
	  }

	  return this;
	};

	/**
	 * Called upon transport error
	 *
	 * @api private
	 */

	Socket.prototype.onError = function (err) {
	  debug('socket error %j', err);
	  Socket.priorWebsocketSuccess = false;
	  this.emit('error', err);
	  this.onClose('transport error', err);
	};

	/**
	 * Called upon transport close.
	 *
	 * @api private
	 */

	Socket.prototype.onClose = function (reason, desc) {
	  if ('opening' == this.readyState || 'open' == this.readyState || 'closing' == this.readyState) {
	    debug('socket close with reason: "%s"', reason);
	    var self = this;

	    // clear timers
	    clearTimeout(this.pingIntervalTimer);
	    clearTimeout(this.pingTimeoutTimer);

	    // stop event from firing again for transport
	    this.transport.removeAllListeners('close');

	    // ensure transport won't stay open
	    this.transport.close();

	    // ignore further transport communication
	    this.transport.removeAllListeners();

	    // set ready state
	    this.readyState = 'closed';

	    // clear session id
	    this.id = null;

	    // emit close event
	    this.emit('close', reason, desc);

	    // clean buffers after, so users can still
	    // grab the buffers on `close` event
	    self.writeBuffer = [];
	    self.prevBufferLen = 0;
	  }
	};

	/**
	 * Filters upgrades, returning only those matching client transports.
	 *
	 * @param {Array} server upgrades
	 * @api private
	 *
	 */

	Socket.prototype.filterUpgrades = function (upgrades) {
	  var filteredUpgrades = [];
	  for (var i = 0, j = upgrades.length; i < j; i++) {
	    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
	  }
	  return filteredUpgrades;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies
	 */

	var XMLHttpRequest = __webpack_require__(193);
	var XHR = __webpack_require__(195);
	var JSONP = __webpack_require__(211);
	var websocket = __webpack_require__(212);

	/**
	 * Export transports.
	 */

	exports.polling = polling;
	exports.websocket = websocket;

	/**
	 * Polling transport polymorphic constructor.
	 * Decides on xhr vs jsonp based on feature detection.
	 *
	 * @api private
	 */

	function polling(opts) {
	  var xhr;
	  var xd = false;
	  var xs = false;
	  var jsonp = false !== opts.jsonp;

	  if (global.location) {
	    var isSSL = 'https:' == location.protocol;
	    var port = location.port;

	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }

	    xd = opts.hostname != location.hostname || port != opts.port;
	    xs = opts.secure != isSSL;
	  }

	  opts.xdomain = xd;
	  opts.xscheme = xs;
	  xhr = new XMLHttpRequest(opts);

	  if ('open' in xhr && !opts.forceJSONP) {
	    return new XHR(opts);
	  } else {
	    if (!jsonp) throw new Error('JSONP disabled');
	    return new JSONP(opts);
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	// browser shim for xmlhttprequest module
	var hasCORS = __webpack_require__(194);

	module.exports = function (opts) {
	  var xdomain = opts.xdomain;

	  // scheme must be same when usign XDomainRequest
	  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
	  var xscheme = opts.xscheme;

	  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
	  // https://github.com/Automattic/engine.io-client/pull/217
	  var enablesXDR = opts.enablesXDR;

	  // XMLHttpRequest can be disabled on IE
	  try {
	    if ('undefined' != typeof XMLHttpRequest && (!xdomain || hasCORS)) {
	      return new XMLHttpRequest();
	    }
	  } catch (e) {}

	  // Use XDomainRequest for IE8 if enablesXDR is true
	  // because loading bar keeps flashing when using jsonp-polling
	  // https://github.com/yujiosaka/socke.io-ie8-loading-example
	  try {
	    if ('undefined' != typeof XDomainRequest && !xscheme && enablesXDR) {
	      return new XDomainRequest();
	    }
	  } catch (e) {}

	  if (!xdomain) {
	    try {
	      return new ActiveXObject('Microsoft.XMLHTTP');
	    } catch (e) {}
	  }
	};

/***/ },
/* 194 */
/***/ function(module, exports) {

	
	/**
	 * Module exports.
	 *
	 * Logic borrowed from Modernizr:
	 *
	 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
	 */

	try {
	  module.exports = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
	} catch (err) {
	  // if XMLHttp support is disabled in IE then it will throw
	  // when trying to create
	  module.exports = false;
	}

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module requirements.
	 */

	var XMLHttpRequest = __webpack_require__(193);
	var Polling = __webpack_require__(196);
	var Emitter = __webpack_require__(207);
	var inherit = __webpack_require__(209);
	var debug = __webpack_require__(177)('engine.io-client:polling-xhr');

	/**
	 * Module exports.
	 */

	module.exports = XHR;
	module.exports.Request = Request;

	/**
	 * Empty function
	 */

	function empty() {}

	/**
	 * XHR Polling constructor.
	 *
	 * @param {Object} opts
	 * @api public
	 */

	function XHR(opts) {
	  Polling.call(this, opts);

	  if (global.location) {
	    var isSSL = 'https:' == location.protocol;
	    var port = location.port;

	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }

	    this.xd = opts.hostname != global.location.hostname || port != opts.port;
	    this.xs = opts.secure != isSSL;
	  } else {
	    this.extraHeaders = opts.extraHeaders;
	  }
	}

	/**
	 * Inherits from Polling.
	 */

	inherit(XHR, Polling);

	/**
	 * XHR supports binary
	 */

	XHR.prototype.supportsBinary = true;

	/**
	 * Creates a request.
	 *
	 * @param {String} method
	 * @api private
	 */

	XHR.prototype.request = function (opts) {
	  opts = opts || {};
	  opts.uri = this.uri();
	  opts.xd = this.xd;
	  opts.xs = this.xs;
	  opts.agent = this.agent || false;
	  opts.supportsBinary = this.supportsBinary;
	  opts.enablesXDR = this.enablesXDR;

	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;

	  // other options for Node.js client
	  opts.extraHeaders = this.extraHeaders;

	  return new Request(opts);
	};

	/**
	 * Sends data.
	 *
	 * @param {String} data to send.
	 * @param {Function} called upon flush.
	 * @api private
	 */

	XHR.prototype.doWrite = function (data, fn) {
	  var isBinary = typeof data !== 'string' && data !== undefined;
	  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
	  var self = this;
	  req.on('success', fn);
	  req.on('error', function (err) {
	    self.onError('xhr post error', err);
	  });
	  this.sendXhr = req;
	};

	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */

	XHR.prototype.doPoll = function () {
	  debug('xhr poll');
	  var req = this.request();
	  var self = this;
	  req.on('data', function (data) {
	    self.onData(data);
	  });
	  req.on('error', function (err) {
	    self.onError('xhr poll error', err);
	  });
	  this.pollXhr = req;
	};

	/**
	 * Request constructor
	 *
	 * @param {Object} options
	 * @api public
	 */

	function Request(opts) {
	  this.method = opts.method || 'GET';
	  this.uri = opts.uri;
	  this.xd = !!opts.xd;
	  this.xs = !!opts.xs;
	  this.async = false !== opts.async;
	  this.data = undefined != opts.data ? opts.data : null;
	  this.agent = opts.agent;
	  this.isBinary = opts.isBinary;
	  this.supportsBinary = opts.supportsBinary;
	  this.enablesXDR = opts.enablesXDR;

	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;

	  // other options for Node.js client
	  this.extraHeaders = opts.extraHeaders;

	  this.create();
	}

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Request.prototype);

	/**
	 * Creates the XHR object and sends the request.
	 *
	 * @api private
	 */

	Request.prototype.create = function () {
	  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;

	  var xhr = this.xhr = new XMLHttpRequest(opts);
	  var self = this;

	  try {
	    debug('xhr open %s: %s', this.method, this.uri);
	    xhr.open(this.method, this.uri, this.async);
	    try {
	      if (this.extraHeaders) {
	        xhr.setDisableHeaderCheck(true);
	        for (var i in this.extraHeaders) {
	          if (this.extraHeaders.hasOwnProperty(i)) {
	            xhr.setRequestHeader(i, this.extraHeaders[i]);
	          }
	        }
	      }
	    } catch (e) {}
	    if (this.supportsBinary) {
	      // This has to be done after open because Firefox is stupid
	      // http://stackoverflow.com/questions/13216903/get-binary-data-with-xmlhttprequest-in-a-firefox-extension
	      xhr.responseType = 'arraybuffer';
	    }

	    if ('POST' == this.method) {
	      try {
	        if (this.isBinary) {
	          xhr.setRequestHeader('Content-type', 'application/octet-stream');
	        } else {
	          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
	        }
	      } catch (e) {}
	    }

	    // ie6 check
	    if ('withCredentials' in xhr) {
	      xhr.withCredentials = true;
	    }

	    if (this.hasXDR()) {
	      xhr.onload = function () {
	        self.onLoad();
	      };
	      xhr.onerror = function () {
	        self.onError(xhr.responseText);
	      };
	    } else {
	      xhr.onreadystatechange = function () {
	        if (4 != xhr.readyState) return;
	        if (200 == xhr.status || 1223 == xhr.status) {
	          self.onLoad();
	        } else {
	          // make sure the `error` event handler that's user-set
	          // does not throw in the same tick and gets caught here
	          setTimeout(function () {
	            self.onError(xhr.status);
	          }, 0);
	        }
	      };
	    }

	    debug('xhr data %s', this.data);
	    xhr.send(this.data);
	  } catch (e) {
	    // Need to defer since .create() is called directly fhrom the constructor
	    // and thus the 'error' event can only be only bound *after* this exception
	    // occurs.  Therefore, also, we cannot throw here at all.
	    setTimeout(function () {
	      self.onError(e);
	    }, 0);
	    return;
	  }

	  if (global.document) {
	    this.index = Request.requestsCount++;
	    Request.requests[this.index] = this;
	  }
	};

	/**
	 * Called upon successful response.
	 *
	 * @api private
	 */

	Request.prototype.onSuccess = function () {
	  this.emit('success');
	  this.cleanup();
	};

	/**
	 * Called if we have data.
	 *
	 * @api private
	 */

	Request.prototype.onData = function (data) {
	  this.emit('data', data);
	  this.onSuccess();
	};

	/**
	 * Called upon error.
	 *
	 * @api private
	 */

	Request.prototype.onError = function (err) {
	  this.emit('error', err);
	  this.cleanup(true);
	};

	/**
	 * Cleans up house.
	 *
	 * @api private
	 */

	Request.prototype.cleanup = function (fromError) {
	  if ('undefined' == typeof this.xhr || null === this.xhr) {
	    return;
	  }
	  // xmlhttprequest
	  if (this.hasXDR()) {
	    this.xhr.onload = this.xhr.onerror = empty;
	  } else {
	    this.xhr.onreadystatechange = empty;
	  }

	  if (fromError) {
	    try {
	      this.xhr.abort();
	    } catch (e) {}
	  }

	  if (global.document) {
	    delete Request.requests[this.index];
	  }

	  this.xhr = null;
	};

	/**
	 * Called upon load.
	 *
	 * @api private
	 */

	Request.prototype.onLoad = function () {
	  var data;
	  try {
	    var contentType;
	    try {
	      contentType = this.xhr.getResponseHeader('Content-Type').split(';')[0];
	    } catch (e) {}
	    if (contentType === 'application/octet-stream') {
	      data = this.xhr.response;
	    } else {
	      if (!this.supportsBinary) {
	        data = this.xhr.responseText;
	      } else {
	        try {
	          data = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response));
	        } catch (e) {
	          var ui8Arr = new Uint8Array(this.xhr.response);
	          var dataArray = [];
	          for (var idx = 0, length = ui8Arr.length; idx < length; idx++) {
	            dataArray.push(ui8Arr[idx]);
	          }

	          data = String.fromCharCode.apply(null, dataArray);
	        }
	      }
	    }
	  } catch (e) {
	    this.onError(e);
	  }
	  if (null != data) {
	    this.onData(data);
	  }
	};

	/**
	 * Check if it has XDomainRequest.
	 *
	 * @api private
	 */

	Request.prototype.hasXDR = function () {
	  return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
	};

	/**
	 * Aborts the request.
	 *
	 * @api public
	 */

	Request.prototype.abort = function () {
	  this.cleanup();
	};

	/**
	 * Aborts pending requests when unloading the window. This is needed to prevent
	 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
	 * emitted.
	 */

	if (global.document) {
	  Request.requestsCount = 0;
	  Request.requests = {};
	  if (global.attachEvent) {
	    global.attachEvent('onunload', unloadHandler);
	  } else if (global.addEventListener) {
	    global.addEventListener('beforeunload', unloadHandler, false);
	  }
	}

	function unloadHandler() {
	  for (var i in Request.requests) {
	    if (Request.requests.hasOwnProperty(i)) {
	      Request.requests[i].abort();
	    }
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var Transport = __webpack_require__(197);
	var parseqs = __webpack_require__(208);
	var parser = __webpack_require__(198);
	var inherit = __webpack_require__(209);
	var yeast = __webpack_require__(210);
	var debug = __webpack_require__(177)('engine.io-client:polling');

	/**
	 * Module exports.
	 */

	module.exports = Polling;

	/**
	 * Is XHR2 supported?
	 */

	var hasXHR2 = function () {
	  var XMLHttpRequest = __webpack_require__(193);
	  var xhr = new XMLHttpRequest({ xdomain: false });
	  return null != xhr.responseType;
	}();

	/**
	 * Polling interface.
	 *
	 * @param {Object} opts
	 * @api private
	 */

	function Polling(opts) {
	  var forceBase64 = opts && opts.forceBase64;
	  if (!hasXHR2 || forceBase64) {
	    this.supportsBinary = false;
	  }
	  Transport.call(this, opts);
	}

	/**
	 * Inherits from Transport.
	 */

	inherit(Polling, Transport);

	/**
	 * Transport name.
	 */

	Polling.prototype.name = 'polling';

	/**
	 * Opens the socket (triggers polling). We write a PING message to determine
	 * when the transport is open.
	 *
	 * @api private
	 */

	Polling.prototype.doOpen = function () {
	  this.poll();
	};

	/**
	 * Pauses polling.
	 *
	 * @param {Function} callback upon buffers are flushed and transport is paused
	 * @api private
	 */

	Polling.prototype.pause = function (onPause) {
	  var pending = 0;
	  var self = this;

	  this.readyState = 'pausing';

	  function pause() {
	    debug('paused');
	    self.readyState = 'paused';
	    onPause();
	  }

	  if (this.polling || !this.writable) {
	    var total = 0;

	    if (this.polling) {
	      debug('we are currently polling - waiting to pause');
	      total++;
	      this.once('pollComplete', function () {
	        debug('pre-pause polling complete');
	        --total || pause();
	      });
	    }

	    if (!this.writable) {
	      debug('we are currently writing - waiting to pause');
	      total++;
	      this.once('drain', function () {
	        debug('pre-pause writing complete');
	        --total || pause();
	      });
	    }
	  } else {
	    pause();
	  }
	};

	/**
	 * Starts polling cycle.
	 *
	 * @api public
	 */

	Polling.prototype.poll = function () {
	  debug('polling');
	  this.polling = true;
	  this.doPoll();
	  this.emit('poll');
	};

	/**
	 * Overloads onData to detect payloads.
	 *
	 * @api private
	 */

	Polling.prototype.onData = function (data) {
	  var self = this;
	  debug('polling got data %s', data);
	  var callback = function (packet, index, total) {
	    // if its the first message we consider the transport open
	    if ('opening' == self.readyState) {
	      self.onOpen();
	    }

	    // if its a close packet, we close the ongoing requests
	    if ('close' == packet.type) {
	      self.onClose();
	      return false;
	    }

	    // otherwise bypass onData and handle the message
	    self.onPacket(packet);
	  };

	  // decode payload
	  parser.decodePayload(data, this.socket.binaryType, callback);

	  // if an event did not trigger closing
	  if ('closed' != this.readyState) {
	    // if we got data we're not polling
	    this.polling = false;
	    this.emit('pollComplete');

	    if ('open' == this.readyState) {
	      this.poll();
	    } else {
	      debug('ignoring poll - transport state "%s"', this.readyState);
	    }
	  }
	};

	/**
	 * For polling, send a close packet.
	 *
	 * @api private
	 */

	Polling.prototype.doClose = function () {
	  var self = this;

	  function close() {
	    debug('writing close packet');
	    self.write([{ type: 'close' }]);
	  }

	  if ('open' == this.readyState) {
	    debug('transport open - closing');
	    close();
	  } else {
	    // in case we're trying to close while
	    // handshaking is in progress (GH-164)
	    debug('transport not open - deferring close');
	    this.once('open', close);
	  }
	};

	/**
	 * Writes a packets payload.
	 *
	 * @param {Array} data packets
	 * @param {Function} drain callback
	 * @api private
	 */

	Polling.prototype.write = function (packets) {
	  var self = this;
	  this.writable = false;
	  var callbackfn = function () {
	    self.writable = true;
	    self.emit('drain');
	  };

	  var self = this;
	  parser.encodePayload(packets, this.supportsBinary, function (data) {
	    self.doWrite(data, callbackfn);
	  });
	};

	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */

	Polling.prototype.uri = function () {
	  var query = this.query || {};
	  var schema = this.secure ? 'https' : 'http';
	  var port = '';

	  // cache busting is forced
	  if (false !== this.timestampRequests) {
	    query[this.timestampParam] = yeast();
	  }

	  if (!this.supportsBinary && !query.sid) {
	    query.b64 = 1;
	  }

	  query = parseqs.encode(query);

	  // avoid port if default for schema
	  if (this.port && ('https' == schema && this.port != 443 || 'http' == schema && this.port != 80)) {
	    port = ':' + this.port;
	  }

	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }

	  var ipv6 = this.hostname.indexOf(':') !== -1;
	  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var parser = __webpack_require__(198);
	var Emitter = __webpack_require__(207);

	/**
	 * Module exports.
	 */

	module.exports = Transport;

	/**
	 * Transport abstract constructor.
	 *
	 * @param {Object} options.
	 * @api private
	 */

	function Transport(opts) {
	  this.path = opts.path;
	  this.hostname = opts.hostname;
	  this.port = opts.port;
	  this.secure = opts.secure;
	  this.query = opts.query;
	  this.timestampParam = opts.timestampParam;
	  this.timestampRequests = opts.timestampRequests;
	  this.readyState = '';
	  this.agent = opts.agent || false;
	  this.socket = opts.socket;
	  this.enablesXDR = opts.enablesXDR;

	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;

	  // other options for Node.js client
	  this.extraHeaders = opts.extraHeaders;
	}

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Transport.prototype);

	/**
	 * Emits an error.
	 *
	 * @param {String} str
	 * @return {Transport} for chaining
	 * @api public
	 */

	Transport.prototype.onError = function (msg, desc) {
	  var err = new Error(msg);
	  err.type = 'TransportError';
	  err.description = desc;
	  this.emit('error', err);
	  return this;
	};

	/**
	 * Opens the transport.
	 *
	 * @api public
	 */

	Transport.prototype.open = function () {
	  if ('closed' == this.readyState || '' == this.readyState) {
	    this.readyState = 'opening';
	    this.doOpen();
	  }

	  return this;
	};

	/**
	 * Closes the transport.
	 *
	 * @api private
	 */

	Transport.prototype.close = function () {
	  if ('opening' == this.readyState || 'open' == this.readyState) {
	    this.doClose();
	    this.onClose();
	  }

	  return this;
	};

	/**
	 * Sends multiple packets.
	 *
	 * @param {Array} packets
	 * @api private
	 */

	Transport.prototype.send = function (packets) {
	  if ('open' == this.readyState) {
	    this.write(packets);
	  } else {
	    throw new Error('Transport not open');
	  }
	};

	/**
	 * Called upon open
	 *
	 * @api private
	 */

	Transport.prototype.onOpen = function () {
	  this.readyState = 'open';
	  this.writable = true;
	  this.emit('open');
	};

	/**
	 * Called with data.
	 *
	 * @param {String} data
	 * @api private
	 */

	Transport.prototype.onData = function (data) {
	  var packet = parser.decodePacket(data, this.socket.binaryType);
	  this.onPacket(packet);
	};

	/**
	 * Called with a decoded packet.
	 */

	Transport.prototype.onPacket = function (packet) {
	  this.emit('packet', packet);
	};

	/**
	 * Called upon close.
	 *
	 * @api private
	 */

	Transport.prototype.onClose = function () {
	  this.readyState = 'closed';
	  this.emit('close');
	};

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */

	var keys = __webpack_require__(199);
	var hasBinary = __webpack_require__(200);
	var sliceBuffer = __webpack_require__(202);
	var base64encoder = __webpack_require__(203);
	var after = __webpack_require__(204);
	var utf8 = __webpack_require__(205);

	/**
	 * Check if we are running an android browser. That requires us to use
	 * ArrayBuffer with polling transports...
	 *
	 * http://ghinda.net/jpeg-blob-ajax-android/
	 */

	var isAndroid = navigator.userAgent.match(/Android/i);

	/**
	 * Check if we are running in PhantomJS.
	 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
	 * https://github.com/ariya/phantomjs/issues/11395
	 * @type boolean
	 */
	var isPhantomJS = /PhantomJS/i.test(navigator.userAgent);

	/**
	 * When true, avoids using Blobs to encode payloads.
	 * @type boolean
	 */
	var dontSendBlobs = isAndroid || isPhantomJS;

	/**
	 * Current protocol version.
	 */

	exports.protocol = 3;

	/**
	 * Packet types.
	 */

	var packets = exports.packets = {
	  open: 0 // non-ws
	  , close: 1 // non-ws
	  , ping: 2,
	  pong: 3,
	  message: 4,
	  upgrade: 5,
	  noop: 6
	};

	var packetslist = keys(packets);

	/**
	 * Premade error packet.
	 */

	var err = { type: 'error', data: 'parser error' };

	/**
	 * Create a blob api even for blob builder when vendor prefixes exist
	 */

	var Blob = __webpack_require__(206);

	/**
	 * Encodes a packet.
	 *
	 *     <packet type id> [ <data> ]
	 *
	 * Example:
	 *
	 *     5hello world
	 *     3
	 *     4
	 *
	 * Binary is encoded in an identical principle
	 *
	 * @api private
	 */

	exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
	  if ('function' == typeof supportsBinary) {
	    callback = supportsBinary;
	    supportsBinary = false;
	  }

	  if ('function' == typeof utf8encode) {
	    callback = utf8encode;
	    utf8encode = null;
	  }

	  var data = packet.data === undefined ? undefined : packet.data.buffer || packet.data;

	  if (global.ArrayBuffer && data instanceof ArrayBuffer) {
	    return encodeArrayBuffer(packet, supportsBinary, callback);
	  } else if (Blob && data instanceof global.Blob) {
	    return encodeBlob(packet, supportsBinary, callback);
	  }

	  // might be an object with { base64: true, data: dataAsBase64String }
	  if (data && data.base64) {
	    return encodeBase64Object(packet, callback);
	  }

	  // Sending data as a utf-8 string
	  var encoded = packets[packet.type];

	  // data fragment is optional
	  if (undefined !== packet.data) {
	    encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data);
	  }

	  return callback('' + encoded);
	};

	function encodeBase64Object(packet, callback) {
	  // packet data is an object { base64: true, data: dataAsBase64String }
	  var message = 'b' + exports.packets[packet.type] + packet.data.data;
	  return callback(message);
	}

	/**
	 * Encode packet helpers for binary types
	 */

	function encodeArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }

	  var data = packet.data;
	  var contentArray = new Uint8Array(data);
	  var resultBuffer = new Uint8Array(1 + data.byteLength);

	  resultBuffer[0] = packets[packet.type];
	  for (var i = 0; i < contentArray.length; i++) {
	    resultBuffer[i + 1] = contentArray[i];
	  }

	  return callback(resultBuffer.buffer);
	}

	function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }

	  var fr = new FileReader();
	  fr.onload = function () {
	    packet.data = fr.result;
	    exports.encodePacket(packet, supportsBinary, true, callback);
	  };
	  return fr.readAsArrayBuffer(packet.data);
	}

	function encodeBlob(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }

	  if (dontSendBlobs) {
	    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
	  }

	  var length = new Uint8Array(1);
	  length[0] = packets[packet.type];
	  var blob = new Blob([length.buffer, packet.data]);

	  return callback(blob);
	}

	/**
	 * Encodes a packet with binary data in a base64 string
	 *
	 * @param {Object} packet, has `type` and `data`
	 * @return {String} base64 encoded message
	 */

	exports.encodeBase64Packet = function (packet, callback) {
	  var message = 'b' + exports.packets[packet.type];
	  if (Blob && packet.data instanceof global.Blob) {
	    var fr = new FileReader();
	    fr.onload = function () {
	      var b64 = fr.result.split(',')[1];
	      callback(message + b64);
	    };
	    return fr.readAsDataURL(packet.data);
	  }

	  var b64data;
	  try {
	    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
	  } catch (e) {
	    // iPhone Safari doesn't let you apply with typed arrays
	    var typed = new Uint8Array(packet.data);
	    var basic = new Array(typed.length);
	    for (var i = 0; i < typed.length; i++) {
	      basic[i] = typed[i];
	    }
	    b64data = String.fromCharCode.apply(null, basic);
	  }
	  message += global.btoa(b64data);
	  return callback(message);
	};

	/**
	 * Decodes a packet. Changes format to Blob if requested.
	 *
	 * @return {Object} with `type` and `data` (if any)
	 * @api private
	 */

	exports.decodePacket = function (data, binaryType, utf8decode) {
	  // String data
	  if (typeof data == 'string' || data === undefined) {
	    if (data.charAt(0) == 'b') {
	      return exports.decodeBase64Packet(data.substr(1), binaryType);
	    }

	    if (utf8decode) {
	      try {
	        data = utf8.decode(data);
	      } catch (e) {
	        return err;
	      }
	    }
	    var type = data.charAt(0);

	    if (Number(type) != type || !packetslist[type]) {
	      return err;
	    }

	    if (data.length > 1) {
	      return { type: packetslist[type], data: data.substring(1) };
	    } else {
	      return { type: packetslist[type] };
	    }
	  }

	  var asArray = new Uint8Array(data);
	  var type = asArray[0];
	  var rest = sliceBuffer(data, 1);
	  if (Blob && binaryType === 'blob') {
	    rest = new Blob([rest]);
	  }
	  return { type: packetslist[type], data: rest };
	};

	/**
	 * Decodes a packet encoded in a base64 string
	 *
	 * @param {String} base64 encoded message
	 * @return {Object} with `type` and `data` (if any)
	 */

	exports.decodeBase64Packet = function (msg, binaryType) {
	  var type = packetslist[msg.charAt(0)];
	  if (!global.ArrayBuffer) {
	    return { type: type, data: { base64: true, data: msg.substr(1) } };
	  }

	  var data = base64encoder.decode(msg.substr(1));

	  if (binaryType === 'blob' && Blob) {
	    data = new Blob([data]);
	  }

	  return { type: type, data: data };
	};

	/**
	 * Encodes multiple messages (payload).
	 *
	 *     <length>:data
	 *
	 * Example:
	 *
	 *     11:hello world2:hi
	 *
	 * If any contents are binary, they will be encoded as base64 strings. Base64
	 * encoded strings are marked with a b before the length specifier
	 *
	 * @param {Array} packets
	 * @api private
	 */

	exports.encodePayload = function (packets, supportsBinary, callback) {
	  if (typeof supportsBinary == 'function') {
	    callback = supportsBinary;
	    supportsBinary = null;
	  }

	  var isBinary = hasBinary(packets);

	  if (supportsBinary && isBinary) {
	    if (Blob && !dontSendBlobs) {
	      return exports.encodePayloadAsBlob(packets, callback);
	    }

	    return exports.encodePayloadAsArrayBuffer(packets, callback);
	  }

	  if (!packets.length) {
	    return callback('0:');
	  }

	  function setLengthHeader(message) {
	    return message.length + ':' + message;
	  }

	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, !isBinary ? false : supportsBinary, true, function (message) {
	      doneCallback(null, setLengthHeader(message));
	    });
	  }

	  map(packets, encodeOne, function (err, results) {
	    return callback(results.join(''));
	  });
	};

	/**
	 * Async array map using after
	 */

	function map(ary, each, done) {
	  var result = new Array(ary.length);
	  var next = after(ary.length, done);

	  var eachWithIndex = function (i, el, cb) {
	    each(el, function (error, msg) {
	      result[i] = msg;
	      cb(error, result);
	    });
	  };

	  for (var i = 0; i < ary.length; i++) {
	    eachWithIndex(i, ary[i], next);
	  }
	}

	/*
	 * Decodes data when a payload is maybe expected. Possible binary contents are
	 * decoded from their base64 representation
	 *
	 * @param {String} data, callback method
	 * @api public
	 */

	exports.decodePayload = function (data, binaryType, callback) {
	  if (typeof data != 'string') {
	    return exports.decodePayloadAsBinary(data, binaryType, callback);
	  }

	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }

	  var packet;
	  if (data == '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }

	  var length = '',
	      n,
	      msg;

	  for (var i = 0, l = data.length; i < l; i++) {
	    var chr = data.charAt(i);

	    if (':' != chr) {
	      length += chr;
	    } else {
	      if ('' == length || length != (n = Number(length))) {
	        // parser error - ignoring payload
	        return callback(err, 0, 1);
	      }

	      msg = data.substr(i + 1, n);

	      if (length != msg.length) {
	        // parser error - ignoring payload
	        return callback(err, 0, 1);
	      }

	      if (msg.length) {
	        packet = exports.decodePacket(msg, binaryType, true);

	        if (err.type == packet.type && err.data == packet.data) {
	          // parser error in individual packet - ignoring payload
	          return callback(err, 0, 1);
	        }

	        var ret = callback(packet, i + n, l);
	        if (false === ret) return;
	      }

	      // advance cursor
	      i += n;
	      length = '';
	    }
	  }

	  if (length != '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }
	};

	/**
	 * Encodes multiple messages (payload) as binary.
	 *
	 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
	 * 255><data>
	 *
	 * Example:
	 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
	 *
	 * @param {Array} packets
	 * @return {ArrayBuffer} encoded payload
	 * @api private
	 */

	exports.encodePayloadAsArrayBuffer = function (packets, callback) {
	  if (!packets.length) {
	    return callback(new ArrayBuffer(0));
	  }

	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function (data) {
	      return doneCallback(null, data);
	    });
	  }

	  map(packets, encodeOne, function (err, encodedPackets) {
	    var totalLength = encodedPackets.reduce(function (acc, p) {
	      var len;
	      if (typeof p === 'string') {
	        len = p.length;
	      } else {
	        len = p.byteLength;
	      }
	      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
	    }, 0);

	    var resultArray = new Uint8Array(totalLength);

	    var bufferIndex = 0;
	    encodedPackets.forEach(function (p) {
	      var isString = typeof p === 'string';
	      var ab = p;
	      if (isString) {
	        var view = new Uint8Array(p.length);
	        for (var i = 0; i < p.length; i++) {
	          view[i] = p.charCodeAt(i);
	        }
	        ab = view.buffer;
	      }

	      if (isString) {
	        // not true binary
	        resultArray[bufferIndex++] = 0;
	      } else {
	        // true binary
	        resultArray[bufferIndex++] = 1;
	      }

	      var lenStr = ab.byteLength.toString();
	      for (var i = 0; i < lenStr.length; i++) {
	        resultArray[bufferIndex++] = parseInt(lenStr[i]);
	      }
	      resultArray[bufferIndex++] = 255;

	      var view = new Uint8Array(ab);
	      for (var i = 0; i < view.length; i++) {
	        resultArray[bufferIndex++] = view[i];
	      }
	    });

	    return callback(resultArray.buffer);
	  });
	};

	/**
	 * Encode as Blob
	 */

	exports.encodePayloadAsBlob = function (packets, callback) {
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function (encoded) {
	      var binaryIdentifier = new Uint8Array(1);
	      binaryIdentifier[0] = 1;
	      if (typeof encoded === 'string') {
	        var view = new Uint8Array(encoded.length);
	        for (var i = 0; i < encoded.length; i++) {
	          view[i] = encoded.charCodeAt(i);
	        }
	        encoded = view.buffer;
	        binaryIdentifier[0] = 0;
	      }

	      var len = encoded instanceof ArrayBuffer ? encoded.byteLength : encoded.size;

	      var lenStr = len.toString();
	      var lengthAry = new Uint8Array(lenStr.length + 1);
	      for (var i = 0; i < lenStr.length; i++) {
	        lengthAry[i] = parseInt(lenStr[i]);
	      }
	      lengthAry[lenStr.length] = 255;

	      if (Blob) {
	        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
	        doneCallback(null, blob);
	      }
	    });
	  }

	  map(packets, encodeOne, function (err, results) {
	    return callback(new Blob(results));
	  });
	};

	/*
	 * Decodes data when a payload is maybe expected. Strings are decoded by
	 * interpreting each byte as a key code for entries marked to start with 0. See
	 * description of encodePayloadAsBinary
	 *
	 * @param {ArrayBuffer} data, callback method
	 * @api public
	 */

	exports.decodePayloadAsBinary = function (data, binaryType, callback) {
	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }

	  var bufferTail = data;
	  var buffers = [];

	  var numberTooLong = false;
	  while (bufferTail.byteLength > 0) {
	    var tailArray = new Uint8Array(bufferTail);
	    var isString = tailArray[0] === 0;
	    var msgLength = '';

	    for (var i = 1;; i++) {
	      if (tailArray[i] == 255) break;

	      if (msgLength.length > 310) {
	        numberTooLong = true;
	        break;
	      }

	      msgLength += tailArray[i];
	    }

	    if (numberTooLong) return callback(err, 0, 1);

	    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
	    msgLength = parseInt(msgLength);

	    var msg = sliceBuffer(bufferTail, 0, msgLength);
	    if (isString) {
	      try {
	        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
	      } catch (e) {
	        // iPhone Safari doesn't let you apply to typed arrays
	        var typed = new Uint8Array(msg);
	        msg = '';
	        for (var i = 0; i < typed.length; i++) {
	          msg += String.fromCharCode(typed[i]);
	        }
	      }
	    }

	    buffers.push(msg);
	    bufferTail = sliceBuffer(bufferTail, msgLength);
	  }

	  var total = buffers.length;
	  buffers.forEach(function (buffer, i) {
	    callback(exports.decodePacket(buffer, binaryType, true), i, total);
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 199 */
/***/ function(module, exports) {

	
	/**
	 * Gets the keys for an object.
	 *
	 * @return {Array} keys
	 * @api private
	 */

	module.exports = Object.keys || function keys(obj) {
	  var arr = [];
	  var has = Object.prototype.hasOwnProperty;

	  for (var i in obj) {
	    if (has.call(obj, i)) {
	      arr.push(i);
	    }
	  }
	  return arr;
	};

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/*
	 * Module requirements.
	 */

	var isArray = __webpack_require__(201);

	/**
	 * Module exports.
	 */

	module.exports = hasBinary;

	/**
	 * Checks for binary data.
	 *
	 * Right now only Buffer and ArrayBuffer are supported..
	 *
	 * @param {Object} anything
	 * @api public
	 */

	function hasBinary(data) {

	  function _hasBinary(obj) {
	    if (!obj) return false;

	    if (global.Buffer && global.Buffer.isBuffer(obj) || global.ArrayBuffer && obj instanceof ArrayBuffer || global.Blob && obj instanceof Blob || global.File && obj instanceof File) {
	      return true;
	    }

	    if (isArray(obj)) {
	      for (var i = 0; i < obj.length; i++) {
	        if (_hasBinary(obj[i])) {
	          return true;
	        }
	      }
	    } else if (obj && 'object' == typeof obj) {
	      if (obj.toJSON) {
	        obj = obj.toJSON();
	      }

	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
	          return true;
	        }
	      }
	    }

	    return false;
	  }

	  return _hasBinary(data);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 201 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

/***/ },
/* 202 */
/***/ function(module, exports) {

	/**
	 * An abstraction for slicing an arraybuffer even when
	 * ArrayBuffer.prototype.slice is not supported
	 *
	 * @api public
	 */

	module.exports = function (arraybuffer, start, end) {
	  var bytes = arraybuffer.byteLength;
	  start = start || 0;
	  end = end || bytes;

	  if (arraybuffer.slice) {
	    return arraybuffer.slice(start, end);
	  }

	  if (start < 0) {
	    start += bytes;
	  }
	  if (end < 0) {
	    end += bytes;
	  }
	  if (end > bytes) {
	    end = bytes;
	  }

	  if (start >= bytes || start >= end || bytes === 0) {
	    return new ArrayBuffer(0);
	  }

	  var abv = new Uint8Array(arraybuffer);
	  var result = new Uint8Array(end - start);
	  for (var i = start, ii = 0; i < end; i++, ii++) {
	    result[ii] = abv[i];
	  }
	  return result.buffer;
	};

/***/ },
/* 203 */
/***/ function(module, exports) {

	/*
	 * base64-arraybuffer
	 * https://github.com/niklasvh/base64-arraybuffer
	 *
	 * Copyright (c) 2012 Niklas von Hertzen
	 * Licensed under the MIT license.
	 */
	(function (chars) {
	  "use strict";

	  exports.encode = function (arraybuffer) {
	    var bytes = new Uint8Array(arraybuffer),
	        i,
	        len = bytes.length,
	        base64 = "";

	    for (i = 0; i < len; i += 3) {
	      base64 += chars[bytes[i] >> 2];
	      base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
	      base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
	      base64 += chars[bytes[i + 2] & 63];
	    }

	    if (len % 3 === 2) {
	      base64 = base64.substring(0, base64.length - 1) + "=";
	    } else if (len % 3 === 1) {
	      base64 = base64.substring(0, base64.length - 2) + "==";
	    }

	    return base64;
	  };

	  exports.decode = function (base64) {
	    var bufferLength = base64.length * 0.75,
	        len = base64.length,
	        i,
	        p = 0,
	        encoded1,
	        encoded2,
	        encoded3,
	        encoded4;

	    if (base64[base64.length - 1] === "=") {
	      bufferLength--;
	      if (base64[base64.length - 2] === "=") {
	        bufferLength--;
	      }
	    }

	    var arraybuffer = new ArrayBuffer(bufferLength),
	        bytes = new Uint8Array(arraybuffer);

	    for (i = 0; i < len; i += 4) {
	      encoded1 = chars.indexOf(base64[i]);
	      encoded2 = chars.indexOf(base64[i + 1]);
	      encoded3 = chars.indexOf(base64[i + 2]);
	      encoded4 = chars.indexOf(base64[i + 3]);

	      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
	      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
	      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
	    }

	    return arraybuffer;
	  };
	})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");

/***/ },
/* 204 */
/***/ function(module, exports) {

	module.exports = after;

	function after(count, callback, err_cb) {
	    var bail = false;
	    err_cb = err_cb || noop;
	    proxy.count = count;

	    return count === 0 ? callback() : proxy;

	    function proxy(err, result) {
	        if (proxy.count <= 0) {
	            throw new Error('after called too many times');
	        }
	        --proxy.count;

	        // after first error, rest are passed to err_cb
	        if (err) {
	            bail = true;
	            callback(err);
	            // future error callbacks will go to error handler
	            callback = err_cb;
	        } else if (proxy.count === 0 && !bail) {
	            callback(null, result);
	        }
	    }
	}

	function noop() {}

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/utf8js v2.0.0 by @mathias */
	;(function (root) {

		// Detect free variables `exports`
		var freeExports = typeof exports == 'object' && exports;

		// Detect free variable `module`
		var freeModule = typeof module == 'object' && module && module.exports == freeExports && module;

		// Detect free variable `global`, from Node.js or Browserified code,
		// and use it as `root`
		var freeGlobal = typeof global == 'object' && global;
		if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
			root = freeGlobal;
		}

		/*--------------------------------------------------------------------------*/

		var stringFromCharCode = String.fromCharCode;

		// Taken from https://mths.be/punycode
		function ucs2decode(string) {
			var output = [];
			var counter = 0;
			var length = string.length;
			var value;
			var extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) {
						// low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		// Taken from https://mths.be/punycode
		function ucs2encode(array) {
			var length = array.length;
			var index = -1;
			var value;
			var output = '';
			while (++index < length) {
				value = array[index];
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
			}
			return output;
		}

		function checkScalarValue(codePoint) {
			if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
				throw Error('Lone surrogate U+' + codePoint.toString(16).toUpperCase() + ' is not a scalar value');
			}
		}
		/*--------------------------------------------------------------------------*/

		function createByte(codePoint, shift) {
			return stringFromCharCode(codePoint >> shift & 0x3F | 0x80);
		}

		function encodeCodePoint(codePoint) {
			if ((codePoint & 0xFFFFFF80) == 0) {
				// 1-byte sequence
				return stringFromCharCode(codePoint);
			}
			var symbol = '';
			if ((codePoint & 0xFFFFF800) == 0) {
				// 2-byte sequence
				symbol = stringFromCharCode(codePoint >> 6 & 0x1F | 0xC0);
			} else if ((codePoint & 0xFFFF0000) == 0) {
				// 3-byte sequence
				checkScalarValue(codePoint);
				symbol = stringFromCharCode(codePoint >> 12 & 0x0F | 0xE0);
				symbol += createByte(codePoint, 6);
			} else if ((codePoint & 0xFFE00000) == 0) {
				// 4-byte sequence
				symbol = stringFromCharCode(codePoint >> 18 & 0x07 | 0xF0);
				symbol += createByte(codePoint, 12);
				symbol += createByte(codePoint, 6);
			}
			symbol += stringFromCharCode(codePoint & 0x3F | 0x80);
			return symbol;
		}

		function utf8encode(string) {
			var codePoints = ucs2decode(string);
			var length = codePoints.length;
			var index = -1;
			var codePoint;
			var byteString = '';
			while (++index < length) {
				codePoint = codePoints[index];
				byteString += encodeCodePoint(codePoint);
			}
			return byteString;
		}

		/*--------------------------------------------------------------------------*/

		function readContinuationByte() {
			if (byteIndex >= byteCount) {
				throw Error('Invalid byte index');
			}

			var continuationByte = byteArray[byteIndex] & 0xFF;
			byteIndex++;

			if ((continuationByte & 0xC0) == 0x80) {
				return continuationByte & 0x3F;
			}

			// If we end up here, it’s not a continuation byte
			throw Error('Invalid continuation byte');
		}

		function decodeSymbol() {
			var byte1;
			var byte2;
			var byte3;
			var byte4;
			var codePoint;

			if (byteIndex > byteCount) {
				throw Error('Invalid byte index');
			}

			if (byteIndex == byteCount) {
				return false;
			}

			// Read first byte
			byte1 = byteArray[byteIndex] & 0xFF;
			byteIndex++;

			// 1-byte sequence (no continuation bytes)
			if ((byte1 & 0x80) == 0) {
				return byte1;
			}

			// 2-byte sequence
			if ((byte1 & 0xE0) == 0xC0) {
				var byte2 = readContinuationByte();
				codePoint = (byte1 & 0x1F) << 6 | byte2;
				if (codePoint >= 0x80) {
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}

			// 3-byte sequence (may include unpaired surrogates)
			if ((byte1 & 0xF0) == 0xE0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				codePoint = (byte1 & 0x0F) << 12 | byte2 << 6 | byte3;
				if (codePoint >= 0x0800) {
					checkScalarValue(codePoint);
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}

			// 4-byte sequence
			if ((byte1 & 0xF8) == 0xF0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				byte4 = readContinuationByte();
				codePoint = (byte1 & 0x0F) << 0x12 | byte2 << 0x0C | byte3 << 0x06 | byte4;
				if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
					return codePoint;
				}
			}

			throw Error('Invalid UTF-8 detected');
		}

		var byteArray;
		var byteCount;
		var byteIndex;
		function utf8decode(byteString) {
			byteArray = ucs2decode(byteString);
			byteCount = byteArray.length;
			byteIndex = 0;
			var codePoints = [];
			var tmp;
			while ((tmp = decodeSymbol()) !== false) {
				codePoints.push(tmp);
			}
			return ucs2encode(codePoints);
		}

		/*--------------------------------------------------------------------------*/

		var utf8 = {
			'version': '2.0.0',
			'encode': utf8encode,
			'decode': utf8decode
		};

		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return utf8;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (freeExports && !freeExports.nodeType) {
			if (freeModule) {
				// in Node.js or RingoJS v0.8.0+
				freeModule.exports = utf8;
			} else {
				// in Narwhal or RingoJS v0.7.0-
				var object = {};
				var hasOwnProperty = object.hasOwnProperty;
				for (var key in utf8) {
					hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
				}
			}
		} else {
			// in Rhino or a web browser
			root.utf8 = utf8;
		}
	})(this);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(182)(module), (function() { return this; }())))

/***/ },
/* 206 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Create a blob builder even when vendor prefixes exist
	 */

	var BlobBuilder = global.BlobBuilder || global.WebKitBlobBuilder || global.MSBlobBuilder || global.MozBlobBuilder;

	/**
	 * Check if Blob constructor is supported
	 */

	var blobSupported = function () {
	  try {
	    var a = new Blob(['hi']);
	    return a.size === 2;
	  } catch (e) {
	    return false;
	  }
	}();

	/**
	 * Check if Blob constructor supports ArrayBufferViews
	 * Fails in Safari 6, so we need to map to ArrayBuffers there.
	 */

	var blobSupportsArrayBufferView = blobSupported && function () {
	  try {
	    var b = new Blob([new Uint8Array([1, 2])]);
	    return b.size === 2;
	  } catch (e) {
	    return false;
	  }
	}();

	/**
	 * Check if BlobBuilder is supported
	 */

	var blobBuilderSupported = BlobBuilder && BlobBuilder.prototype.append && BlobBuilder.prototype.getBlob;

	/**
	 * Helper function that maps ArrayBufferViews to ArrayBuffers
	 * Used by BlobBuilder constructor and old browsers that didn't
	 * support it in the Blob constructor.
	 */

	function mapArrayBufferViews(ary) {
	  for (var i = 0; i < ary.length; i++) {
	    var chunk = ary[i];
	    if (chunk.buffer instanceof ArrayBuffer) {
	      var buf = chunk.buffer;

	      // if this is a subarray, make a copy so we only
	      // include the subarray region from the underlying buffer
	      if (chunk.byteLength !== buf.byteLength) {
	        var copy = new Uint8Array(chunk.byteLength);
	        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
	        buf = copy.buffer;
	      }

	      ary[i] = buf;
	    }
	  }
	}

	function BlobBuilderConstructor(ary, options) {
	  options = options || {};

	  var bb = new BlobBuilder();
	  mapArrayBufferViews(ary);

	  for (var i = 0; i < ary.length; i++) {
	    bb.append(ary[i]);
	  }

	  return options.type ? bb.getBlob(options.type) : bb.getBlob();
	};

	function BlobConstructor(ary, options) {
	  mapArrayBufferViews(ary);
	  return new Blob(ary, options || {});
	};

	module.exports = function () {
	  if (blobSupported) {
	    return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
	  } else if (blobBuilderSupported) {
	    return BlobBuilderConstructor;
	  } else {
	    return undefined;
	  }
	}();
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 207 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */

	module.exports = Emitter;

	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */

	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};

	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
	  this._callbacks = this._callbacks || {};
	  (this._callbacks[event] = this._callbacks[event] || []).push(fn);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.once = function (event, fn) {
	  var self = this;
	  this._callbacks = this._callbacks || {};

	  function on() {
	    self.off(event, on);
	    fn.apply(this, arguments);
	  }

	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
	  this._callbacks = this._callbacks || {};

	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }

	  // specific event
	  var callbacks = this._callbacks[event];
	  if (!callbacks) return this;

	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks[event];
	    return this;
	  }

	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};

	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */

	Emitter.prototype.emit = function (event) {
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1),
	      callbacks = this._callbacks[event];

	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }

	  return this;
	};

	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */

	Emitter.prototype.listeners = function (event) {
	  this._callbacks = this._callbacks || {};
	  return this._callbacks[event] || [];
	};

	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */

	Emitter.prototype.hasListeners = function (event) {
	  return !!this.listeners(event).length;
	};

/***/ },
/* 208 */
/***/ function(module, exports) {

	/**
	 * Compiles a querystring
	 * Returns string representation of the object
	 *
	 * @param {Object}
	 * @api private
	 */

	exports.encode = function (obj) {
	  var str = '';

	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      if (str.length) str += '&';
	      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
	    }
	  }

	  return str;
	};

	/**
	 * Parses a simple querystring into an object
	 *
	 * @param {String} qs
	 * @api private
	 */

	exports.decode = function (qs) {
	  var qry = {};
	  var pairs = qs.split('&');
	  for (var i = 0, l = pairs.length; i < l; i++) {
	    var pair = pairs[i].split('=');
	    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
	  }
	  return qry;
	};

/***/ },
/* 209 */
/***/ function(module, exports) {

	
	module.exports = function (a, b) {
	  var fn = function () {};
	  fn.prototype = b.prototype;
	  a.prototype = new fn();
	  a.prototype.constructor = a;
	};

/***/ },
/* 210 */
/***/ function(module, exports) {

	'use strict';

	var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
	    length = 64,
	    map = {},
	    seed = 0,
	    i = 0,
	    prev;

	/**
	 * Return a string representing the specified number.
	 *
	 * @param {Number} num The number to convert.
	 * @returns {String} The string representation of the number.
	 * @api public
	 */
	function encode(num) {
	  var encoded = '';

	  do {
	    encoded = alphabet[num % length] + encoded;
	    num = Math.floor(num / length);
	  } while (num > 0);

	  return encoded;
	}

	/**
	 * Return the integer value specified by the given string.
	 *
	 * @param {String} str The string to convert.
	 * @returns {Number} The integer value represented by the string.
	 * @api public
	 */
	function decode(str) {
	  var decoded = 0;

	  for (i = 0; i < str.length; i++) {
	    decoded = decoded * length + map[str.charAt(i)];
	  }

	  return decoded;
	}

	/**
	 * Yeast: A tiny growing id generator.
	 *
	 * @returns {String} A unique id.
	 * @api public
	 */
	function yeast() {
	  var now = encode(+new Date());

	  if (now !== prev) return seed = 0, prev = now;
	  return now + '.' + encode(seed++);
	}

	//
	// Map each character to its index.
	//
	for (; i < length; i++) map[alphabet[i]] = i;

	//
	// Expose the `yeast`, `encode` and `decode` functions.
	//
	yeast.encode = encode;
	yeast.decode = decode;
	module.exports = yeast;

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module requirements.
	 */

	var Polling = __webpack_require__(196);
	var inherit = __webpack_require__(209);

	/**
	 * Module exports.
	 */

	module.exports = JSONPPolling;

	/**
	 * Cached regular expressions.
	 */

	var rNewline = /\n/g;
	var rEscapedNewline = /\\n/g;

	/**
	 * Global JSONP callbacks.
	 */

	var callbacks;

	/**
	 * Callbacks count.
	 */

	var index = 0;

	/**
	 * Noop.
	 */

	function empty() {}

	/**
	 * JSONP Polling constructor.
	 *
	 * @param {Object} opts.
	 * @api public
	 */

	function JSONPPolling(opts) {
	  Polling.call(this, opts);

	  this.query = this.query || {};

	  // define global callbacks array if not present
	  // we do this here (lazily) to avoid unneeded global pollution
	  if (!callbacks) {
	    // we need to consider multiple engines in the same page
	    if (!global.___eio) global.___eio = [];
	    callbacks = global.___eio;
	  }

	  // callback identifier
	  this.index = callbacks.length;

	  // add callback to jsonp global
	  var self = this;
	  callbacks.push(function (msg) {
	    self.onData(msg);
	  });

	  // append to query string
	  this.query.j = this.index;

	  // prevent spurious errors from being emitted when the window is unloaded
	  if (global.document && global.addEventListener) {
	    global.addEventListener('beforeunload', function () {
	      if (self.script) self.script.onerror = empty;
	    }, false);
	  }
	}

	/**
	 * Inherits from Polling.
	 */

	inherit(JSONPPolling, Polling);

	/*
	 * JSONP only supports binary as base64 encoded strings
	 */

	JSONPPolling.prototype.supportsBinary = false;

	/**
	 * Closes the socket.
	 *
	 * @api private
	 */

	JSONPPolling.prototype.doClose = function () {
	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }

	  if (this.form) {
	    this.form.parentNode.removeChild(this.form);
	    this.form = null;
	    this.iframe = null;
	  }

	  Polling.prototype.doClose.call(this);
	};

	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */

	JSONPPolling.prototype.doPoll = function () {
	  var self = this;
	  var script = document.createElement('script');

	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }

	  script.async = true;
	  script.src = this.uri();
	  script.onerror = function (e) {
	    self.onError('jsonp poll error', e);
	  };

	  var insertAt = document.getElementsByTagName('script')[0];
	  if (insertAt) {
	    insertAt.parentNode.insertBefore(script, insertAt);
	  } else {
	    (document.head || document.body).appendChild(script);
	  }
	  this.script = script;

	  var isUAgecko = 'undefined' != typeof navigator && /gecko/i.test(navigator.userAgent);

	  if (isUAgecko) {
	    setTimeout(function () {
	      var iframe = document.createElement('iframe');
	      document.body.appendChild(iframe);
	      document.body.removeChild(iframe);
	    }, 100);
	  }
	};

	/**
	 * Writes with a hidden iframe.
	 *
	 * @param {String} data to send
	 * @param {Function} called upon flush.
	 * @api private
	 */

	JSONPPolling.prototype.doWrite = function (data, fn) {
	  var self = this;

	  if (!this.form) {
	    var form = document.createElement('form');
	    var area = document.createElement('textarea');
	    var id = this.iframeId = 'eio_iframe_' + this.index;
	    var iframe;

	    form.className = 'socketio';
	    form.style.position = 'absolute';
	    form.style.top = '-1000px';
	    form.style.left = '-1000px';
	    form.target = id;
	    form.method = 'POST';
	    form.setAttribute('accept-charset', 'utf-8');
	    area.name = 'd';
	    form.appendChild(area);
	    document.body.appendChild(form);

	    this.form = form;
	    this.area = area;
	  }

	  this.form.action = this.uri();

	  function complete() {
	    initIframe();
	    fn();
	  }

	  function initIframe() {
	    if (self.iframe) {
	      try {
	        self.form.removeChild(self.iframe);
	      } catch (e) {
	        self.onError('jsonp polling iframe removal error', e);
	      }
	    }

	    try {
	      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
	      var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
	      iframe = document.createElement(html);
	    } catch (e) {
	      iframe = document.createElement('iframe');
	      iframe.name = self.iframeId;
	      iframe.src = 'javascript:0';
	    }

	    iframe.id = self.iframeId;

	    self.form.appendChild(iframe);
	    self.iframe = iframe;
	  }

	  initIframe();

	  // escape \n to prevent it from being converted into \r\n by some UAs
	  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
	  data = data.replace(rEscapedNewline, '\\\n');
	  this.area.value = data.replace(rNewline, '\\n');

	  try {
	    this.form.submit();
	  } catch (e) {}

	  if (this.iframe.attachEvent) {
	    this.iframe.onreadystatechange = function () {
	      if (self.iframe.readyState == 'complete') {
	        complete();
	      }
	    };
	  } else {
	    this.iframe.onload = complete;
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */

	var Transport = __webpack_require__(197);
	var parser = __webpack_require__(198);
	var parseqs = __webpack_require__(208);
	var inherit = __webpack_require__(209);
	var yeast = __webpack_require__(210);
	var debug = __webpack_require__(177)('engine.io-client:websocket');
	var BrowserWebSocket = global.WebSocket || global.MozWebSocket;

	/**
	 * Get either the `WebSocket` or `MozWebSocket` globals
	 * in the browser or try to resolve WebSocket-compatible
	 * interface exposed by `ws` for Node-like environment.
	 */

	var WebSocket = BrowserWebSocket;
	if (!WebSocket && typeof window === 'undefined') {
	  try {
	    WebSocket = __webpack_require__(213);
	  } catch (e) {}
	}

	/**
	 * Module exports.
	 */

	module.exports = WS;

	/**
	 * WebSocket transport constructor.
	 *
	 * @api {Object} connection options
	 * @api public
	 */

	function WS(opts) {
	  var forceBase64 = opts && opts.forceBase64;
	  if (forceBase64) {
	    this.supportsBinary = false;
	  }
	  this.perMessageDeflate = opts.perMessageDeflate;
	  Transport.call(this, opts);
	}

	/**
	 * Inherits from Transport.
	 */

	inherit(WS, Transport);

	/**
	 * Transport name.
	 *
	 * @api public
	 */

	WS.prototype.name = 'websocket';

	/*
	 * WebSockets support binary
	 */

	WS.prototype.supportsBinary = true;

	/**
	 * Opens socket.
	 *
	 * @api private
	 */

	WS.prototype.doOpen = function () {
	  if (!this.check()) {
	    // let probe timeout
	    return;
	  }

	  var self = this;
	  var uri = this.uri();
	  var protocols = void 0;
	  var opts = {
	    agent: this.agent,
	    perMessageDeflate: this.perMessageDeflate
	  };

	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	  if (this.extraHeaders) {
	    opts.headers = this.extraHeaders;
	  }

	  this.ws = BrowserWebSocket ? new WebSocket(uri) : new WebSocket(uri, protocols, opts);

	  if (this.ws.binaryType === undefined) {
	    this.supportsBinary = false;
	  }

	  if (this.ws.supports && this.ws.supports.binary) {
	    this.supportsBinary = true;
	    this.ws.binaryType = 'buffer';
	  } else {
	    this.ws.binaryType = 'arraybuffer';
	  }

	  this.addEventListeners();
	};

	/**
	 * Adds event listeners to the socket
	 *
	 * @api private
	 */

	WS.prototype.addEventListeners = function () {
	  var self = this;

	  this.ws.onopen = function () {
	    self.onOpen();
	  };
	  this.ws.onclose = function () {
	    self.onClose();
	  };
	  this.ws.onmessage = function (ev) {
	    self.onData(ev.data);
	  };
	  this.ws.onerror = function (e) {
	    self.onError('websocket error', e);
	  };
	};

	/**
	 * Override `onData` to use a timer on iOS.
	 * See: https://gist.github.com/mloughran/2052006
	 *
	 * @api private
	 */

	if ('undefined' != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)) {
	  WS.prototype.onData = function (data) {
	    var self = this;
	    setTimeout(function () {
	      Transport.prototype.onData.call(self, data);
	    }, 0);
	  };
	}

	/**
	 * Writes data to socket.
	 *
	 * @param {Array} array of packets.
	 * @api private
	 */

	WS.prototype.write = function (packets) {
	  var self = this;
	  this.writable = false;

	  // encodePacket efficient as it uses WS framing
	  // no need for encodePayload
	  var total = packets.length;
	  for (var i = 0, l = total; i < l; i++) {
	    (function (packet) {
	      parser.encodePacket(packet, self.supportsBinary, function (data) {
	        if (!BrowserWebSocket) {
	          // always create a new object (GH-437)
	          var opts = {};
	          if (packet.options) {
	            opts.compress = packet.options.compress;
	          }

	          if (self.perMessageDeflate) {
	            var len = 'string' == typeof data ? global.Buffer.byteLength(data) : data.length;
	            if (len < self.perMessageDeflate.threshold) {
	              opts.compress = false;
	            }
	          }
	        }

	        //Sometimes the websocket has already been closed but the browser didn't
	        //have a chance of informing us about it yet, in that case send will
	        //throw an error
	        try {
	          if (BrowserWebSocket) {
	            // TypeError is thrown when passing the second argument on Safari
	            self.ws.send(data);
	          } else {
	            self.ws.send(data, opts);
	          }
	        } catch (e) {
	          debug('websocket closed before onclose event');
	        }

	        --total || done();
	      });
	    })(packets[i]);
	  }

	  function done() {
	    self.emit('flush');

	    // fake drain
	    // defer to next tick to allow Socket to clear writeBuffer
	    setTimeout(function () {
	      self.writable = true;
	      self.emit('drain');
	    }, 0);
	  }
	};

	/**
	 * Called upon close
	 *
	 * @api private
	 */

	WS.prototype.onClose = function () {
	  Transport.prototype.onClose.call(this);
	};

	/**
	 * Closes socket.
	 *
	 * @api private
	 */

	WS.prototype.doClose = function () {
	  if (typeof this.ws !== 'undefined') {
	    this.ws.close();
	  }
	};

	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */

	WS.prototype.uri = function () {
	  var query = this.query || {};
	  var schema = this.secure ? 'wss' : 'ws';
	  var port = '';

	  // avoid port if default for schema
	  if (this.port && ('wss' == schema && this.port != 443 || 'ws' == schema && this.port != 80)) {
	    port = ':' + this.port;
	  }

	  // append timestamp to URI
	  if (this.timestampRequests) {
	    query[this.timestampParam] = yeast();
	  }

	  // communicate binary support capabilities
	  if (!this.supportsBinary) {
	    query.b64 = 1;
	  }

	  query = parseqs.encode(query);

	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }

	  var ipv6 = this.hostname.indexOf(':') !== -1;
	  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
	};

	/**
	 * Feature detection for WebSocket.
	 *
	 * @return {Boolean} whether this transport is available.
	 * @api public
	 */

	WS.prototype.check = function () {
	  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 213 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 214 */
/***/ function(module, exports) {

	
	var indexOf = [].indexOf;

	module.exports = function (arr, obj) {
	  if (indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ },
/* 215 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * JSON parse.
	 *
	 * @see Based on jQuery#parseJSON (MIT) and JSON2
	 * @api private
	 */

	var rvalidchars = /^[\],:{}\s]*$/;
	var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
	var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
	var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
	var rtrimLeft = /^\s+/;
	var rtrimRight = /\s+$/;

	module.exports = function parsejson(data) {
	  if ('string' != typeof data || !data) {
	    return null;
	  }

	  data = data.replace(rtrimLeft, '').replace(rtrimRight, '');

	  // Attempt to parse using the native JSON parser first
	  if (global.JSON && JSON.parse) {
	    return JSON.parse(data);
	  }

	  if (rvalidchars.test(data.replace(rvalidescape, '@').replace(rvalidtokens, ']').replace(rvalidbraces, ''))) {
	    return new Function('return ' + data)();
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var parser = __webpack_require__(180);
	var Emitter = __webpack_require__(217);
	var toArray = __webpack_require__(218);
	var on = __webpack_require__(219);
	var bind = __webpack_require__(220);
	var debug = __webpack_require__(177)('socket.io-client:socket');
	var hasBin = __webpack_require__(221);

	/**
	 * Module exports.
	 */

	module.exports = exports = Socket;

	/**
	 * Internal events (blacklisted).
	 * These events can't be emitted by the user.
	 *
	 * @api private
	 */

	var events = {
	  connect: 1,
	  connect_error: 1,
	  connect_timeout: 1,
	  connecting: 1,
	  disconnect: 1,
	  error: 1,
	  reconnect: 1,
	  reconnect_attempt: 1,
	  reconnect_failed: 1,
	  reconnect_error: 1,
	  reconnecting: 1,
	  ping: 1,
	  pong: 1
	};

	/**
	 * Shortcut to `Emitter#emit`.
	 */

	var emit = Emitter.prototype.emit;

	/**
	 * `Socket` constructor.
	 *
	 * @api public
	 */

	function Socket(io, nsp) {
	  this.io = io;
	  this.nsp = nsp;
	  this.json = this; // compat
	  this.ids = 0;
	  this.acks = {};
	  this.receiveBuffer = [];
	  this.sendBuffer = [];
	  this.connected = false;
	  this.disconnected = true;
	  if (this.io.autoConnect) this.open();
	}

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Socket.prototype);

	/**
	 * Subscribe to open, close and packet events
	 *
	 * @api private
	 */

	Socket.prototype.subEvents = function () {
	  if (this.subs) return;

	  var io = this.io;
	  this.subs = [on(io, 'open', bind(this, 'onopen')), on(io, 'packet', bind(this, 'onpacket')), on(io, 'close', bind(this, 'onclose'))];
	};

	/**
	 * "Opens" the socket.
	 *
	 * @api public
	 */

	Socket.prototype.open = Socket.prototype.connect = function () {
	  if (this.connected) return this;

	  this.subEvents();
	  this.io.open(); // ensure open
	  if ('open' == this.io.readyState) this.onopen();
	  this.emit('connecting');
	  return this;
	};

	/**
	 * Sends a `message` event.
	 *
	 * @return {Socket} self
	 * @api public
	 */

	Socket.prototype.send = function () {
	  var args = toArray(arguments);
	  args.unshift('message');
	  this.emit.apply(this, args);
	  return this;
	};

	/**
	 * Override `emit`.
	 * If the event is in `events`, it's emitted normally.
	 *
	 * @param {String} event name
	 * @return {Socket} self
	 * @api public
	 */

	Socket.prototype.emit = function (ev) {
	  if (events.hasOwnProperty(ev)) {
	    emit.apply(this, arguments);
	    return this;
	  }

	  var args = toArray(arguments);
	  var parserType = parser.EVENT; // default
	  if (hasBin(args)) {
	    parserType = parser.BINARY_EVENT;
	  } // binary
	  var packet = { type: parserType, data: args };

	  packet.options = {};
	  packet.options.compress = !this.flags || false !== this.flags.compress;

	  // event ack callback
	  if ('function' == typeof args[args.length - 1]) {
	    debug('emitting packet with ack id %d', this.ids);
	    this.acks[this.ids] = args.pop();
	    packet.id = this.ids++;
	  }

	  if (this.connected) {
	    this.packet(packet);
	  } else {
	    this.sendBuffer.push(packet);
	  }

	  delete this.flags;

	  return this;
	};

	/**
	 * Sends a packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Socket.prototype.packet = function (packet) {
	  packet.nsp = this.nsp;
	  this.io.packet(packet);
	};

	/**
	 * Called upon engine `open`.
	 *
	 * @api private
	 */

	Socket.prototype.onopen = function () {
	  debug('transport is open - connecting');

	  // write connect packet if necessary
	  if ('/' != this.nsp) {
	    this.packet({ type: parser.CONNECT });
	  }
	};

	/**
	 * Called upon engine `close`.
	 *
	 * @param {String} reason
	 * @api private
	 */

	Socket.prototype.onclose = function (reason) {
	  debug('close (%s)', reason);
	  this.connected = false;
	  this.disconnected = true;
	  delete this.id;
	  this.emit('disconnect', reason);
	};

	/**
	 * Called with socket packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Socket.prototype.onpacket = function (packet) {
	  if (packet.nsp != this.nsp) return;

	  switch (packet.type) {
	    case parser.CONNECT:
	      this.onconnect();
	      break;

	    case parser.EVENT:
	      this.onevent(packet);
	      break;

	    case parser.BINARY_EVENT:
	      this.onevent(packet);
	      break;

	    case parser.ACK:
	      this.onack(packet);
	      break;

	    case parser.BINARY_ACK:
	      this.onack(packet);
	      break;

	    case parser.DISCONNECT:
	      this.ondisconnect();
	      break;

	    case parser.ERROR:
	      this.emit('error', packet.data);
	      break;
	  }
	};

	/**
	 * Called upon a server event.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Socket.prototype.onevent = function (packet) {
	  var args = packet.data || [];
	  debug('emitting event %j', args);

	  if (null != packet.id) {
	    debug('attaching ack callback to event');
	    args.push(this.ack(packet.id));
	  }

	  if (this.connected) {
	    emit.apply(this, args);
	  } else {
	    this.receiveBuffer.push(args);
	  }
	};

	/**
	 * Produces an ack callback to emit with an event.
	 *
	 * @api private
	 */

	Socket.prototype.ack = function (id) {
	  var self = this;
	  var sent = false;
	  return function () {
	    // prevent double callbacks
	    if (sent) return;
	    sent = true;
	    var args = toArray(arguments);
	    debug('sending ack %j', args);

	    var type = hasBin(args) ? parser.BINARY_ACK : parser.ACK;
	    self.packet({
	      type: type,
	      id: id,
	      data: args
	    });
	  };
	};

	/**
	 * Called upon a server acknowlegement.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Socket.prototype.onack = function (packet) {
	  var ack = this.acks[packet.id];
	  if ('function' == typeof ack) {
	    debug('calling ack %s with %j', packet.id, packet.data);
	    ack.apply(this, packet.data);
	    delete this.acks[packet.id];
	  } else {
	    debug('bad ack %s', packet.id);
	  }
	};

	/**
	 * Called upon server connect.
	 *
	 * @api private
	 */

	Socket.prototype.onconnect = function () {
	  this.connected = true;
	  this.disconnected = false;
	  this.emit('connect');
	  this.emitBuffered();
	};

	/**
	 * Emit buffered events (received and emitted).
	 *
	 * @api private
	 */

	Socket.prototype.emitBuffered = function () {
	  var i;
	  for (i = 0; i < this.receiveBuffer.length; i++) {
	    emit.apply(this, this.receiveBuffer[i]);
	  }
	  this.receiveBuffer = [];

	  for (i = 0; i < this.sendBuffer.length; i++) {
	    this.packet(this.sendBuffer[i]);
	  }
	  this.sendBuffer = [];
	};

	/**
	 * Called upon server disconnect.
	 *
	 * @api private
	 */

	Socket.prototype.ondisconnect = function () {
	  debug('server disconnect (%s)', this.nsp);
	  this.destroy();
	  this.onclose('io server disconnect');
	};

	/**
	 * Called upon forced client/server side disconnections,
	 * this method ensures the manager stops tracking us and
	 * that reconnections don't get triggered for this.
	 *
	 * @api private.
	 */

	Socket.prototype.destroy = function () {
	  if (this.subs) {
	    // clean subscriptions to avoid reconnections
	    for (var i = 0; i < this.subs.length; i++) {
	      this.subs[i].destroy();
	    }
	    this.subs = null;
	  }

	  this.io.destroy(this);
	};

	/**
	 * Disconnects the socket manually.
	 *
	 * @return {Socket} self
	 * @api public
	 */

	Socket.prototype.close = Socket.prototype.disconnect = function () {
	  if (this.connected) {
	    debug('performing disconnect (%s)', this.nsp);
	    this.packet({ type: parser.DISCONNECT });
	  }

	  // remove socket from pool
	  this.destroy();

	  if (this.connected) {
	    // fire events
	    this.onclose('io client disconnect');
	  }
	  return this;
	};

	/**
	 * Sets the compress flag.
	 *
	 * @param {Boolean} if `true`, compresses the sending data
	 * @return {Socket} self
	 * @api public
	 */

	Socket.prototype.compress = function (compress) {
	  this.flags = this.flags || {};
	  this.flags.compress = compress;
	  return this;
	};

/***/ },
/* 217 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */

	module.exports = Emitter;

	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */

	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};

	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.once = function (event, fn) {
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }

	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
	  this._callbacks = this._callbacks || {};

	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }

	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;

	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }

	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};

	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */

	Emitter.prototype.emit = function (event) {
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1),
	      callbacks = this._callbacks['$' + event];

	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }

	  return this;
	};

	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */

	Emitter.prototype.listeners = function (event) {
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};

	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */

	Emitter.prototype.hasListeners = function (event) {
	  return !!this.listeners(event).length;
	};

/***/ },
/* 218 */
/***/ function(module, exports) {

	module.exports = toArray;

	function toArray(list, index) {
	    var array = [];

	    index = index || 0;

	    for (var i = index || 0; i < list.length; i++) {
	        array[i - index] = list[i];
	    }

	    return array;
	}

/***/ },
/* 219 */
/***/ function(module, exports) {

	
	/**
	 * Module exports.
	 */

	module.exports = on;

	/**
	 * Helper for subscriptions.
	 *
	 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
	 * @param {String} event name
	 * @param {Function} callback
	 * @api public
	 */

	function on(obj, ev, fn) {
	  obj.on(ev, fn);
	  return {
	    destroy: function () {
	      obj.removeListener(ev, fn);
	    }
	  };
	}

/***/ },
/* 220 */
/***/ function(module, exports) {

	/**
	 * Slice reference.
	 */

	var slice = [].slice;

	/**
	 * Bind `obj` to `fn`.
	 *
	 * @param {Object} obj
	 * @param {Function|String} fn or string
	 * @return {Function}
	 * @api public
	 */

	module.exports = function (obj, fn) {
	  if ('string' == typeof fn) fn = obj[fn];
	  if ('function' != typeof fn) throw new Error('bind() requires a function');
	  var args = slice.call(arguments, 2);
	  return function () {
	    return fn.apply(obj, args.concat(slice.call(arguments)));
	  };
	};

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/*
	 * Module requirements.
	 */

	var isArray = __webpack_require__(222);

	/**
	 * Module exports.
	 */

	module.exports = hasBinary;

	/**
	 * Checks for binary data.
	 *
	 * Right now only Buffer and ArrayBuffer are supported..
	 *
	 * @param {Object} anything
	 * @api public
	 */

	function hasBinary(data) {

	  function _hasBinary(obj) {
	    if (!obj) return false;

	    if (global.Buffer && global.Buffer.isBuffer && global.Buffer.isBuffer(obj) || global.ArrayBuffer && obj instanceof ArrayBuffer || global.Blob && obj instanceof Blob || global.File && obj instanceof File) {
	      return true;
	    }

	    if (isArray(obj)) {
	      for (var i = 0; i < obj.length; i++) {
	        if (_hasBinary(obj[i])) {
	          return true;
	        }
	      }
	    } else if (obj && 'object' == typeof obj) {
	      // see: https://github.com/Automattic/has-binary/pull/4
	      if (obj.toJSON && 'function' == typeof obj.toJSON) {
	        obj = obj.toJSON();
	      }

	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
	          return true;
	        }
	      }
	    }

	    return false;
	  }

	  return _hasBinary(data);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 222 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

/***/ },
/* 223 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Backoff`.
	 */

	module.exports = Backoff;

	/**
	 * Initialize backoff timer with `opts`.
	 *
	 * - `min` initial timeout in milliseconds [100]
	 * - `max` max timeout [10000]
	 * - `jitter` [0]
	 * - `factor` [2]
	 *
	 * @param {Object} opts
	 * @api public
	 */

	function Backoff(opts) {
	  opts = opts || {};
	  this.ms = opts.min || 100;
	  this.max = opts.max || 10000;
	  this.factor = opts.factor || 2;
	  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
	  this.attempts = 0;
	}

	/**
	 * Return the backoff duration.
	 *
	 * @return {Number}
	 * @api public
	 */

	Backoff.prototype.duration = function () {
	  var ms = this.ms * Math.pow(this.factor, this.attempts++);
	  if (this.jitter) {
	    var rand = Math.random();
	    var deviation = Math.floor(rand * this.jitter * ms);
	    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
	  }
	  return Math.min(ms, this.max) | 0;
	};

	/**
	 * Reset the number of attempts.
	 *
	 * @api public
	 */

	Backoff.prototype.reset = function () {
	  this.attempts = 0;
	};

	/**
	 * Set the minimum duration
	 *
	 * @api public
	 */

	Backoff.prototype.setMin = function (min) {
	  this.ms = min;
	};

	/**
	 * Set the maximum duration
	 *
	 * @api public
	 */

	Backoff.prototype.setMax = function (max) {
	  this.max = max;
	};

	/**
	 * Set the jitter
	 *
	 * @api public
	 */

	Backoff.prototype.setJitter = function (jitter) {
	  this.jitter = jitter;
	};

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(1);
	__webpack_require__(225);
	// require("./websockets.min.js");
	__webpack_require__(226);

	module.exports = function () {
	    var params = {},
	        r = /([^&=]+)=?([^&]*)/g;

	    function d(s) {
	        return decodeURIComponent(s.replace(/\+/g, ' '));
	    }

	    var match,
	        search = window.location.search;
	    while (match = r.exec(search.substring(1))) params[d(match[1])] = d(match[2]);

	    window.params = params;

	    function setBandwidth(connection) {
	        // www.RTCMultiConnection.org/docs/bandwidth/
	        connection.bandwidth = {
	            screen: 300 // 300kbps
	        };

	        connection.processSdp = function (sdp) {
	            sdp = setSendBandwidth(sdp);
	            return sdp;
	        };

	        function setSendBandwidth(sdp) {
	            var sdpLines = sdp.split('\r\n');

	            // VP8
	            var vp8Index = findLine(sdpLines, 'a=rtpmap', 'VP8/90000');
	            var vp8Payload;
	            if (vp8Index) {
	                vp8Payload = getCodecPayloadType(sdpLines[vp8Index]);
	            }

	            var rtxIndex = findLine(sdpLines, 'a=rtpmap', 'rtx/90000');
	            var rtxPayload;
	            if (rtxIndex) {
	                rtxPayload = getCodecPayloadType(sdpLines[rtxIndex]);
	            }

	            if (!rtxPayload) {
	                return sdp;
	            }

	            if (!vp8Payload) {
	                return sdp;
	            }

	            var rtxFmtpLineIndex = findLine(sdpLines, 'a=fmtp:' + rtxPayload.toString());
	            if (rtxFmtpLineIndex !== null) {
	                var appendrtxNext = '\r\n';
	                appendrtxNext += 'a=fmtp:' + vp8Payload + ' x-google-min-bitrate=300; x-google-max-bitrate=300';
	                sdpLines[rtxFmtpLineIndex] = sdpLines[rtxFmtpLineIndex].concat(appendrtxNext);
	                sdp = sdpLines.join('\r\n');
	            }
	            return sdp;
	        }

	        function findLine(sdpLines, prefix, substr) {
	            return findLineInRange(sdpLines, 0, -1, prefix, substr);
	        }

	        function findLineInRange(sdpLines, startLine, endLine, prefix, substr) {
	            var realEndLine = endLine !== -1 ? endLine : sdpLines.length;
	            for (var i = startLine; i < realEndLine; ++i) {
	                if (sdpLines[i].indexOf(prefix) === 0) {
	                    if (!substr || sdpLines[i].toLowerCase().indexOf(substr.toLowerCase()) !== -1) {
	                        return i;
	                    }
	                }
	            }
	            return null;
	        }

	        function getCodecPayloadType(sdpLine) {
	            var pattern = new RegExp('a=rtpmap:(\\d+) \\w+\\/\\d+');
	            var result = sdpLine.match(pattern);
	            return result && result.length === 2 ? result[1] : null;
	        }
	    }

	    function init() {
	        // http://www.rtcmulticonnection.org/docs/constructor/
	        var connection = new RTCMultiConnection(params.s);

	        setBandwidth(connection);

	        connection.optionalArgument = {
	            optional: [{
	                DtlsSrtpKeyAgreement: true
	            }, {
	                googImprovedWifiBwe: true
	            }, {
	                googScreencastMinBitrate: 300
	            }, {
	                googIPv6: true
	            }, {
	                googDscp: true
	            }, {
	                googCpuUnderuseThreshold: 55
	            }, {
	                googCpuOveruseThreshold: 85
	            }, {
	                googSuspendBelowMinBitrate: true
	            }, {
	                googCpuOveruseDetection: true
	            }],
	            mandatory: {}
	        };

	        connection.ondisconnected = function (event) {
	            infoBar.innerHTML = 'Screen sharing has been closed.';
	            infoBar.style.display = 'block';
	            location.reload();
	        };

	        // DOM objects
	        var remoteVideo = document.getElementById('remoteVideo');
	        var card = document.getElementById('card');
	        var containerDiv;

	        if (navigator.mozGetUserMedia) {
	            attachMediaStream = function (element, stream) {
	                console.log("Attaching media stream");
	                element.mozSrcObject = stream;
	                element.play();
	            };
	            reattachMediaStream = function (to, from) {
	                console.log("Reattaching media stream");
	                to.mozSrcObject = from.mozSrcObject;
	                to.play();
	            };
	        } else if (navigator.webkitGetUserMedia) {
	            attachMediaStream = function (element, stream) {
	                if (typeof element.srcObject !== 'undefined') {
	                    element.srcObject = stream;
	                } else if (typeof element.mozSrcObject !== 'undefined') {
	                    element.mozSrcObject = stream;
	                } else if (typeof element.src !== 'undefined') {
	                    element.src = URL.createObjectURL(stream);
	                } else {
	                    console.log('Error attaching stream to element.');
	                }
	            };
	            reattachMediaStream = function (to, from) {
	                to.src = from.src;
	            };
	        } else {
	            console.log("Browser does not appear to be WebRTC-capable");
	        }
	        // onstream event; fired both for local and remote videos

	        var infoBar = document.getElementById('info-bar');

	        connection.onstatechange = function (state) {
	            infoBar.innerHTML = state.name + ': ' + state.reason;

	            if (state.name == 'request-rejected' && params.p) {
	                infoBar.innerHTML = 'Password (' + params.p + ') did not match with broadcaster, that is why your participation request has been rejected.<br>Please contact him and ask for valid password.';
	            }

	            if (state.name === 'room-not-available') {
	                infoBar.innerHTML = 'Screen share session is closed or paused. You will join automatically when share session is resumed.';
	            }
	        };

	        connection.onstreamid = function (event) {
	            infoBar.innerHTML = 'Remote peer is about to send his screen.';
	        };

	        connection.onstream = function (e) {
	            if (e.type == 'remote') {
	                infoBar.style.display = 'none';
	                remoteStream = e.stream;
	                attachMediaStream(remoteVideo, e.stream);
	                waitForRemoteVideo();
	                remoteVideo.setAttribute('data-id', e.userid);

	                websocket.send('received-your-screen');
	            }
	        };
	        // if user left
	        connection.onleave = function (e) {
	            transitionToWaiting();
	        };

	        connection.onSessionClosed = function () {
	            infoBar.innerHTML = 'Screen sharing has been closed.';
	            infoBar.style.display = 'block';
	            location.reload();
	        };

	        connection.onstreamended = function () {};

	        var pubKey = 'pub-c-e34a131f-b2be-4ea4-9f41-0aa84b0be7e5';
	        var subKey = 'sub-c-57b77bd4-e72c-11e5-aad5-02ee2ddab7fe';

	        var pubnub_setup = {
	            channel: "class_channel",
	            publish_key: pubKey,
	            subscribe_key: subKey,
	            ssl: true
	        };

	        var socket = io.connect('https://pubsub.pubnub.com', pubnub_setup);

	        // using websockets as signaling medium
	        // http://www.rtcmulticonnection.org/docs/openSignalingChannel/
	        // using websockets for signaling
	        // www.RTCMultiConnection.org/docs/openSignalingChannel/
	        var onMessageCallbacks = {};
	        // var pub = 'pub-c-e34a131f-b2be-4ea4-9f41-0aa84b0be7e5';
	        // var sub = 'sub-c-57b77bd4-e72c-11e5-aad5-02ee2ddab7fe';

	        // WebSocket = PUBNUB.ws;
	        // var websocket = new WebSocket('wss://pubsub.pubnub.com/' + pub + '/' + sub + '/' + connection.channel);

	        socket.on("message", function (data) {
	            if (data.sender == connection.userid) return;

	            if (onMessageCallbacks[data.channel]) {
	                onMessageCallbacks[data.channel](data.message);
	            };
	        });

	        // websocket.push = websocket.send;
	        function sendData(data) {
	            console.log("sending data!");
	            data.sender = connection.userid;
	            socket.send(data);
	        };

	        // overriding "openSignalingChannel" method
	        connection.openSignalingChannel = function (config) {
	            var channel = config.channel || this.channel;
	            onMessageCallbacks[channel] = config.onmessage;

	            if (config.onopen) setTimeout(config.onopen, 1000);

	            // directly returning socket object using "return" statement
	            return {
	                send: function (message) {
	                    sendData({
	                        sender: connection.userid,
	                        channel: channel,
	                        message: message
	                    });
	                },
	                channel: channel
	            };
	        };

	        // websocket.onerror = function() {
	        //     if(connection.numberOfConnectedUsers <= 0) {
	        //         location.reaload();
	        //     }
	        // };

	        // websocket.onclose = function() {
	        //     if(connection.numberOfConnectedUsers <= 0) {
	        //         location.reaload();
	        //     }
	        // };

	        infoBar.innerHTML = 'Connecting WebSockets server.';

	        socket.on("connect", function () {
	            infoBar.innerHTML = 'WebSockets connection is opened.';

	            var sessionDescription = {
	                userid: params.s,
	                extra: {},
	                session: {
	                    video: true,
	                    oneway: true
	                },
	                sessionid: params.s
	            };

	            if (params.s) {
	                infoBar.innerHTML = 'Joining session: ' + params.s;

	                if (params.p) {
	                    // it seems a password protected room.
	                    connection.extra.password = params.p;
	                }

	                // http://www.rtcmulticonnection.org/docs/join/
	                connection.join(sessionDescription);
	            }
	        });
	    }

	    function waitForRemoteVideo() {
	        // Call the getVideoTracks method via adapter.js.
	        var videoTracks = remoteStream.getVideoTracks();
	        if (videoTracks.length === 0 || remoteVideo.currentTime > 0) {
	            transitionToActive();
	        } else {
	            setTimeout(waitForRemoteVideo, 100);
	        }
	    }

	    function transitionToActive() {
	        remoteVideo.style.opacity = 1;
	        card.style.webkitTransform = 'rotateY(180deg)';
	        window.onresize();
	    }

	    function transitionToWaiting() {
	        card.style.webkitTransform = 'rotateY(0deg)';
	        remoteVideo.style.opacity = 0;
	    }
	    // Set the video displaying in the center of window.
	    window.onresize = function () {
	        var aspectRatio;
	        if (remoteVideo.style.opacity === '1') {
	            aspectRatio = remoteVideo.videoWidth / remoteVideo.videoHeight;
	        } else {
	            return;
	        }
	        var innerHeight = this.innerHeight;
	        var innerWidth = this.innerWidth;
	        var videoWidth = innerWidth < aspectRatio * window.innerHeight ? innerWidth : aspectRatio * window.innerHeight;
	        var videoHeight = innerHeight < window.innerWidth / aspectRatio ? innerHeight : window.innerWidth / aspectRatio;
	        containerDiv = document.getElementById('container');
	        containerDiv.style.width = videoWidth + 'px';
	        containerDiv.style.height = videoHeight + 'px';
	        containerDiv.style.left = (innerWidth - videoWidth) / 2 + 'px';
	        containerDiv.style.top = (innerHeight - videoHeight) / 2 + 'px';
	    };

	    function enterFullScreen() {
	        container.webkitRequestFullScreen();
	    }

	    init();
	};

/***/ },
/* 225 */
/***/ function(module, exports) {

	// Last time updated at Friday, February 19th, 2016, 2:56:28 PM 
	// Quick-Demo for newbies: http://jsfiddle.net/c46de0L8/
	// Another simple demo: http://jsfiddle.net/zar6fg60/
	// Latest file can be found here: https://cdn.webrtc-experiment.com/RTCMultiConnection.js
	// Muaz Khan     - www.MuazKhan.com
	// MIT License   - www.WebRTC-Experiment.com/licence
	// Documentation - www.RTCMultiConnection.org/docs
	// FAQ           - www.RTCMultiConnection.org/FAQ
	// Changes log   - www.RTCMultiConnection.org/changes-log/
	// Demos         - www.WebRTC-Experiment.com/RTCMultiConnection
	// _________________________
	// RTCMultiConnection-v2.2.2
	(function(){ // RMC == RTCMultiConnection
	// usually page-URL is used as channel-id
	// you can always override it!
	// www.RTCMultiConnection.org/docs/channel-id/
	window.RMCDefaultChannel=location.href.replace(/\/|:|#|\?|\$|\^|%|\.|`|~|!|\+|@|\[|\||]|\|*. /g,'').split('\n').join('').split('\r').join(''); // www.RTCMultiConnection.org/docs/constructor/
	window.RTCMultiConnection=function(channel){ // an instance of constructor
	var connection=this; // a reference to RTCMultiSession
	var rtcMultiSession; // setting default channel or channel passed through constructor
	connection.channel=channel||RMCDefaultChannel; // to allow single user to join multiple rooms;
	// you can change this property at runtime!
	connection.isAcceptNewSession=true; // www.RTCMultiConnection.org/docs/open/
	connection.open=function(args){connection.isAcceptNewSession=false; // www.RTCMultiConnection.org/docs/session-initiator/
	// you can always use this property to determine room owner!
	connection.isInitiator=true;var dontTransmit=false; // a channel can contain multiple rooms i.e. sessions
	if(args){if(isString(args)){connection.sessionid=args;}else {if(!isNull(args.transmitRoomOnce)){connection.transmitRoomOnce=args.transmitRoomOnce;}if(!isNull(args.dontTransmit)){dontTransmit=args.dontTransmit;}if(!isNull(args.sessionid)){connection.sessionid=args.sessionid;}}} // if firebase && if session initiator
	if(connection.socket&&connection.socket.remove){connection.socket.remove();}if(!connection.sessionid)connection.sessionid=connection.channel;connection.sessionDescription={sessionid:connection.sessionid,userid:connection.userid,session:connection.session,extra:connection.extra};if(!connection.sessionDescriptions[connection.sessionDescription.sessionid]){connection.numberOfSessions++;connection.sessionDescriptions[connection.sessionDescription.sessionid]=connection.sessionDescription;} // connect with signaling channel
	initRTCMultiSession(function(){ // "captureUserMediaOnDemand" is disabled by default.
	// invoke "getUserMedia" only when first participant found.
	rtcMultiSession.captureUserMediaOnDemand=args?!!args.captureUserMediaOnDemand:false;if(args&&args.onMediaCaptured){connection.onMediaCaptured=args.onMediaCaptured;} // for session-initiator, user-media is captured as soon as "open" is invoked.
	if(!rtcMultiSession.captureUserMediaOnDemand)captureUserMedia(function(){rtcMultiSession.initSession({sessionDescription:connection.sessionDescription,dontTransmit:dontTransmit});invokeMediaCaptured(connection);});if(rtcMultiSession.captureUserMediaOnDemand){rtcMultiSession.initSession({sessionDescription:connection.sessionDescription,dontTransmit:dontTransmit});}});return connection.sessionDescription;}; // www.RTCMultiConnection.org/docs/connect/
	connection.connect=function(sessionid){ // a channel can contain multiple rooms i.e. sessions
	if(sessionid){connection.sessionid=sessionid;} // connect with signaling channel
	initRTCMultiSession(function(){log('Signaling channel is ready.');});return this;}; // www.RTCMultiConnection.org/docs/join/
	connection.join=joinSession; // www.RTCMultiConnection.org/docs/send/
	connection.send=function(data,_channel){if(connection.numberOfConnectedUsers<=0){ // no connections
	setTimeout(function(){ // try again
	connection.send(data,_channel);},1000);return;} // send file/data or /text
	if(!data)throw 'No file, data or text message to share.'; // connection.send([file1, file2, file3])
	// you can share multiple files, strings or data objects using "send" method!
	if(data instanceof Array&&!isNull(data[0].size)&&!isNull(data[0].type)){ // this mechanism can cause failure for subsequent packets/data 
	// on Firefox especially; and on chrome as well!
	// todo: need to use setTimeout instead.
	for(var i=0;i<data.length;i++){data[i].size&&data[i].type&&connection.send(data[i],_channel);}return;} // File or Blob object MUST have "type" and "size" properties
	if(!isNull(data.size)&&!isNull(data.type)){if(!connection.enableFileSharing){throw '"enableFileSharing" boolean MUST be "true" to support file sharing.';}if(!rtcMultiSession.fileBufferReader){initFileBufferReader(connection,function(fbr){rtcMultiSession.fileBufferReader=fbr;connection.send(data,_channel);});return;}var extra=merge({userid:connection.userid},data.extra||connection.extra);rtcMultiSession.fileBufferReader.readAsArrayBuffer(data,function(uuid){rtcMultiSession.fileBufferReader.getNextChunk(uuid,function(nextChunk,isLastChunk,extra){if(_channel)_channel.send(nextChunk);else rtcMultiSession.send(nextChunk);});},extra);}else { // to allow longest string messages
	// and largest data objects
	// or anything of any size!
	// to send multiple data objects concurrently!
	TextSender.send({text:data,channel:rtcMultiSession,_channel:_channel,connection:connection});}};function initRTCMultiSession(onSignalingReady){if(screenFrame){loadScreenFrame();} // RTCMultiSession is the backbone object;
	// this object MUST be initialized once!
	if(rtcMultiSession)return onSignalingReady(); // your everything is passed over RTCMultiSession constructor!
	rtcMultiSession=new RTCMultiSession(connection,onSignalingReady);}connection.disconnect=function(){if(rtcMultiSession)rtcMultiSession.disconnect();rtcMultiSession=null;};function joinSession(session,joinAs){if(isString(session)){connection.skipOnNewSession=true;}if(!rtcMultiSession){log('Signaling channel is not ready. Connecting...'); // connect with signaling channel
	initRTCMultiSession(function(){log('Signaling channel is connected. Joining the session again...');setTimeout(function(){joinSession(session,joinAs);},1000);});return;} // connection.join('sessionid');
	if(isString(session)){if(connection.sessionDescriptions[session]){session=connection.sessionDescriptions[session];}else return setTimeout(function(){log('Session-Descriptions not found. Rechecking..');joinSession(session,joinAs);},1000);} // connection.join('sessionid', { audio: true });
	if(joinAs){return captureUserMedia(function(){session.oneway=true;joinSession(session);},joinAs);}if(!session||!session.userid||!session.sessionid){error('missing arguments',arguments);var error='Invalid data passed over "connection.join" method.';connection.onstatechange({userid:'browser',extra:{},name:'Unexpected data detected.',reason:error});throw error;}if(!connection.dontOverrideSession){connection.session=session.session;}var extra=connection.extra||session.extra||{}; // todo: need to verify that if-block statement works as expected.
	// expectations: if it is oneway streaming; or if it is data-only connection
	// then, it shouldn't capture user-media on participant's side.
	if(session.oneway||isData(session)){rtcMultiSession.joinSession(session,extra);}else {captureUserMedia(function(){rtcMultiSession.joinSession(session,extra);});}}var isFirstSession=true; // www.RTCMultiConnection.org/docs/captureUserMedia/
	function captureUserMedia(callback,_session,dontCheckChromExtension){ // capture user's media resources
	var session=_session||connection.session;if(isEmpty(session)){if(callback)callback();return;} // you can force to skip media capturing!
	if(connection.dontCaptureUserMedia){return callback();} // if it is data-only connection
	// if it is one-way connection and current user is participant
	if(isData(session)||!connection.isInitiator&&session.oneway){ // www.RTCMultiConnection.org/docs/attachStreams/
	connection.attachStreams=[];return callback();}var constraints={audio:!!session.audio?{mandatory:{},optional:[{chromeRenderToAssociatedSink:true}]}:false,video:!!session.video}; // if custom audio device is selected
	if(connection._mediaSources.audio){constraints.audio.optional.push({sourceId:connection._mediaSources.audio});} // if custom video device is selected
	if(connection._mediaSources.video){constraints.video={optional:[{sourceId:connection._mediaSources.video}]};} // for connection.session = {};
	if(!session.screen&&!constraints.audio&&!constraints.video){return callback();}var screen_constraints={audio:false,video:{mandatory:{chromeMediaSource:DetectRTC.screen.chromeMediaSource,maxWidth:screen.width>1920?screen.width:1920,maxHeight:screen.height>1080?screen.height:1080},optional:[]}};if(isFirefox&&session.screen){if(location.protocol!=='https:'){return error(SCREEN_COMMON_FAILURE);}warn(Firefox_Screen_Capturing_Warning);screen_constraints.video={mozMediaSource:'window', // mozMediaSource is redundant here
	mediaSource:'window' // 'screen' || 'window'
	}; // Firefox is supporting audio+screen from single getUserMedia request
	// audio+video+screen will become audio+screen for Firefox
	// because Firefox isn't supporting multi-streams feature version < 38
	// version >38 supports multi-stream sharing.
	// we can use:  firefoxVersion < 38
	// however capturing audio and screen using single getUserMedia is a better option
	if(constraints.audio /* && !session.video */){screen_constraints.audio=true;constraints={};}delete screen_constraints.video.chromeMediaSource;} // if screen is prompted
	if(session.screen){if(isChrome&&DetectRTC.screen.extensionid!=ReservedExtensionID){useCustomChromeExtensionForScreenCapturing=true;}if(isChrome&&!useCustomChromeExtensionForScreenCapturing&&!dontCheckChromExtension&&!DetectRTC.screen.sourceId){listenEventHandler('message',onIFrameCallback);function onIFrameCallback(event){if(event.data&&event.data.chromeMediaSourceId){ // this event listener is no more needed
	window.removeEventListener('message',onIFrameCallback);var sourceId=event.data.chromeMediaSourceId;DetectRTC.screen.sourceId=sourceId;DetectRTC.screen.chromeMediaSource='desktop';if(sourceId=='PermissionDeniedError'){var mediaStreamError={message:location.protocol=='https:'?'User denied to share content of his screen.':SCREEN_COMMON_FAILURE,name:'PermissionDeniedError',constraintName:screen_constraints,session:session};currentUserMediaRequest.mutex=false;DetectRTC.screen.sourceId=null;return connection.onMediaError(mediaStreamError);}captureUserMedia(callback,_session);}if(event.data&&event.data.chromeExtensionStatus){warn('Screen capturing extension status is:',event.data.chromeExtensionStatus);DetectRTC.screen.chromeMediaSource='screen';captureUserMedia(callback,_session,true);}}if(!screenFrame){loadScreenFrame();}screenFrame.postMessage();return;} // check if screen capturing extension is installed.
	if(isChrome&&useCustomChromeExtensionForScreenCapturing&&!dontCheckChromExtension&&DetectRTC.screen.chromeMediaSource=='screen'&&DetectRTC.screen.extensionid){if(DetectRTC.screen.extensionid==ReservedExtensionID&&document.domain.indexOf('webrtc-experiment.com')==-1){return captureUserMedia(callback,_session,true);}log('checking if chrome extension is installed.');DetectRTC.screen.getChromeExtensionStatus(function(status){if(status=='installed-enabled'){DetectRTC.screen.chromeMediaSource='desktop';}captureUserMedia(callback,_session,true);log('chrome extension is installed?',DetectRTC.screen.chromeMediaSource=='desktop');});return;}if(isChrome&&useCustomChromeExtensionForScreenCapturing&&DetectRTC.screen.chromeMediaSource=='desktop'&&!DetectRTC.screen.sourceId){DetectRTC.screen.getSourceId(function(sourceId){if(sourceId=='PermissionDeniedError'){var mediaStreamError={message:'User denied to share content of his screen.',name:'PermissionDeniedError',constraintName:screen_constraints,session:session};currentUserMediaRequest.mutex=false;DetectRTC.screen.chromeMediaSource='desktop';return connection.onMediaError(mediaStreamError);}if(sourceId=='No-Response'){error('Chrome extension seems not available. Make sure that manifest.json#L16 has valid content-script matches pointing to your URL.');DetectRTC.screen.chromeMediaSource='screen';return captureUserMedia(callback,_session,true);}captureUserMedia(callback,_session,true);});return;}if(isChrome&&DetectRTC.screen.chromeMediaSource=='desktop'){screen_constraints.video.mandatory.chromeMediaSourceId=DetectRTC.screen.sourceId;}var _isFirstSession=isFirstSession;_captureUserMedia(screen_constraints,constraints.audio||constraints.video?function(){if(_isFirstSession)isFirstSession=true;_captureUserMedia(constraints,callback);}:callback);}else _captureUserMedia(constraints,callback,session.audio&&!session.video);function _captureUserMedia(forcedConstraints,forcedCallback,isRemoveVideoTracks,dontPreventSSLAutoAllowed){connection.onstatechange({userid:'browser',extra:{},name:'fetching-usermedia',reason:'About to capture user-media with constraints: '+toStr(forcedConstraints)});if(connection.preventSSLAutoAllowed&&!dontPreventSSLAutoAllowed&&isChrome){ // if navigator.customGetUserMediaBar.js is missing
	if(!navigator.customGetUserMediaBar){loadScript(connection.resources.customGetUserMediaBar,function(){_captureUserMedia(forcedConstraints,forcedCallback,isRemoveVideoTracks,dontPreventSSLAutoAllowed);});return;}navigator.customGetUserMediaBar(forcedConstraints,function(){_captureUserMedia(forcedConstraints,forcedCallback,isRemoveVideoTracks,true);},function(){connection.onMediaError({name:'PermissionDeniedError',message:'User denied permission.',constraintName:forcedConstraints,session:session});});return;}var mediaConfig={onsuccess:function(stream,returnBack,idInstance,streamid){onStreamSuccessCallback(stream,returnBack,idInstance,streamid,forcedConstraints,forcedCallback,isRemoveVideoTracks,screen_constraints,constraints,session);},onerror:function(e,constraintUsed){ // http://goo.gl/hrwF1a
	if(isFirefox){if(e=='PERMISSION_DENIED'){e={message:'',name:'PermissionDeniedError',constraintName:constraintUsed,session:session};}}if(isFirefox&&constraintUsed.video&&constraintUsed.video.mozMediaSource){mediaStreamError={message:Firefox_Screen_Capturing_Warning,name:e.name||'PermissionDeniedError',constraintName:constraintUsed,session:session};connection.onMediaError(mediaStreamError);return;}if(isString(e)){return connection.onMediaError({message:'Unknown Error',name:e,constraintName:constraintUsed,session:session});} // it seems that chrome 35+ throws "DevicesNotFoundError" exception 
	// when any of the requested media is either denied or absent
	if(e.name&&(e.name=='PermissionDeniedError'||e.name=='DevicesNotFoundError')){var mediaStreamError='Either: ';mediaStreamError+='\n Media resolutions are not permitted.';mediaStreamError+='\n Another application is using same media device.';mediaStreamError+='\n Media device is not attached or drivers not installed.';mediaStreamError+='\n You denied access once and it is still denied.';if(e.message&&e.message.length){mediaStreamError+='\n '+e.message;}mediaStreamError={message:mediaStreamError,name:e.name,constraintName:constraintUsed,session:session};connection.onMediaError(mediaStreamError);if(isChrome&&(session.audio||session.video)){ // todo: this snippet fails if user has two or more 
	// microphone/webcam attached.
	DetectRTC.load(function(){ // it is possible to check presence of the microphone before using it!
	if(session.audio&&!DetectRTC.hasMicrophone){warn('It seems that you have no microphone attached to your device/system.');session.audio=session.audio=false;if(!session.video){alert('It seems that you are capturing microphone and there is no device available or access is denied. Reloading...');location.reload();}} // it is possible to check presence of the webcam before using it!
	if(session.video&&!DetectRTC.hasWebcam){warn('It seems that you have no webcam attached to your device/system.');session.video=session.video=false;if(!session.audio){alert('It seems that you are capturing webcam and there is no device available or access is denied. Reloading...');location.reload();}}if(!DetectRTC.hasMicrophone&&!DetectRTC.hasWebcam){alert('It seems that either both microphone/webcam are not available or access is denied. Reloading...');location.reload();}else if(!connection.getUserMediaPromptedOnce){ // make maximum two tries!
	connection.getUserMediaPromptedOnce=true;captureUserMedia(callback,session);}});}}if(e.name&&e.name=='ConstraintNotSatisfiedError'){var mediaStreamError='Either: ';mediaStreamError+='\n You are prompting unknown media resolutions.';mediaStreamError+='\n You are using invalid media constraints.';if(e.message&&e.message.length){mediaStreamError+='\n '+e.message;}mediaStreamError={message:mediaStreamError,name:e.name,constraintName:constraintUsed,session:session};connection.onMediaError(mediaStreamError);}if(session.screen){if(isFirefox){error(Firefox_Screen_Capturing_Warning);}else if(location.protocol!=='https:'){if(!isNodeWebkit&&(location.protocol=='file:'||location.protocol=='http:')){error('You cannot use HTTP or file protocol for screen capturing. You must either use HTTPs or chrome extension page or Node-Webkit page.');}}else {error('Unable to detect actual issue. Maybe "deprecated" screen capturing flag was not set using command line or maybe you clicked "No" button or maybe chrome extension returned invalid "sourceId". Please install chrome-extension: http://bit.ly/webrtc-screen-extension');}}currentUserMediaRequest.mutex=false; // to make sure same stream can be captured again!
	var idInstance=JSON.stringify(constraintUsed);if(currentUserMediaRequest.streams[idInstance]){delete currentUserMediaRequest.streams[idInstance];}},mediaConstraints:connection.mediaConstraints||{}};mediaConfig.constraints=forcedConstraints||constraints;mediaConfig.connection=connection;getUserMedia(mediaConfig);}}function onStreamSuccessCallback(stream,returnBack,idInstance,streamid,forcedConstraints,forcedCallback,isRemoveVideoTracks,screen_constraints,constraints,session){if(!streamid)streamid=getRandomString();connection.onstatechange({userid:'browser',extra:{},name:'usermedia-fetched',reason:'Captured user media using constraints: '+toStr(forcedConstraints)});if(isRemoveVideoTracks){stream=convertToAudioStream(stream);}connection.localStreamids.push(streamid);stream.onended=function(){if(streamedObject.mediaElement&&!streamedObject.mediaElement.parentNode&&document.getElementById(stream.streamid)){streamedObject.mediaElement=document.getElementById(stream.streamid);} // when a stream is stopped; it must be removed from "attachStreams" array
	connection.attachStreams.forEach(function(_stream,index){if(_stream==stream){delete connection.attachStreams[index];connection.attachStreams=swap(connection.attachStreams);}});onStreamEndedHandler(streamedObject,connection);if(connection.streams[streamid]){connection.removeStream(streamid);} // if user clicks "stop" button to close screen sharing
	var _stream=connection.streams[streamid];if(_stream&&_stream.sockets.length){_stream.sockets.forEach(function(socket){socket.send({streamid:_stream.streamid,stopped:true});});}currentUserMediaRequest.mutex=false; // to make sure same stream can be captured again!
	if(currentUserMediaRequest.streams[idInstance]){delete currentUserMediaRequest.streams[idInstance];} // to allow re-capturing of the screen
	DetectRTC.screen.sourceId=null;};if(!isIE){stream.streamid=streamid;stream.isScreen=forcedConstraints==screen_constraints;stream.isVideo=forcedConstraints==constraints&&!!constraints.video;stream.isAudio=forcedConstraints==constraints&&!!constraints.audio&&!constraints.video; // if muted stream is negotiated
	stream.preMuted={audio:stream.getAudioTracks().length&&!stream.getAudioTracks()[0].enabled,video:stream.getVideoTracks().length&&!stream.getVideoTracks()[0].enabled};}var mediaElement=createMediaElement(stream,session);mediaElement.muted=true;var streamedObject={stream:stream,streamid:streamid,mediaElement:mediaElement,blobURL:mediaElement.mozSrcObject?URL.createObjectURL(stream):mediaElement.src,type:'local',userid:connection.userid,extra:connection.extra,session:session,isVideo:!!stream.isVideo,isAudio:!!stream.isAudio,isScreen:!!stream.isScreen,isInitiator:!!connection.isInitiator,rtcMultiConnection:connection};if(isFirstSession){connection.attachStreams.push(stream);}isFirstSession=false;connection.streams[streamid]=connection._getStream(streamedObject);if(!returnBack){connection.onstream(streamedObject);}if(connection.setDefaultEventsForMediaElement){connection.setDefaultEventsForMediaElement(mediaElement,streamid);}if(forcedCallback)forcedCallback(stream,streamedObject);if(connection.onspeaking){initHark({stream:stream,streamedObject:streamedObject,connection:connection});}} // www.RTCMultiConnection.org/docs/captureUserMedia/
	connection.captureUserMedia=captureUserMedia; // www.RTCMultiConnection.org/docs/leave/
	connection.leave=function(userid){if(!rtcMultiSession)return;isFirstSession=true;if(userid){connection.eject(userid);return;}rtcMultiSession.leave();}; // www.RTCMultiConnection.org/docs/eject/
	connection.eject=function(userid){if(!connection.isInitiator)throw 'Only session-initiator can eject a user.';if(!connection.peers[userid])throw 'You ejected invalid user.';connection.peers[userid].sendCustomMessage({ejected:true});}; // www.RTCMultiConnection.org/docs/close/
	connection.close=function(){ // close entire session
	connection.autoCloseEntireSession=true;connection.leave();}; // www.RTCMultiConnection.org/docs/renegotiate/
	connection.renegotiate=function(stream,session){if(connection.numberOfConnectedUsers<=0){ // no connections
	setTimeout(function(){ // try again
	connection.renegotiate(stream,session);},1000);return;}rtcMultiSession.addStream({renegotiate:session||merge({oneway:true},connection.session),stream:stream});};connection.attachExternalStream=function(stream,isScreen){var constraints={};if(stream.getAudioTracks&&stream.getAudioTracks().length){constraints.audio=true;}if(stream.getVideoTracks&&stream.getVideoTracks().length){constraints.video=true;}var screen_constraints={video:{chromeMediaSource:'fake'}};var forcedConstraints=isScreen?screen_constraints:constraints;onStreamSuccessCallback(stream,false,'',null,forcedConstraints,false,false,screen_constraints,constraints,constraints);}; // www.RTCMultiConnection.org/docs/addStream/
	connection.addStream=function(session,socket){ // www.RTCMultiConnection.org/docs/renegotiation/
	if(connection.numberOfConnectedUsers<=0){ // no connections
	setTimeout(function(){ // try again
	connection.addStream(session,socket);},1000);return;} // renegotiate new media stream
	if(session){var isOneWayStreamFromParticipant;if(!connection.isInitiator&&session.oneway){session.oneway=false;isOneWayStreamFromParticipant=true;}captureUserMedia(function(stream){if(isOneWayStreamFromParticipant){session.oneway=true;}addStream(stream);},session);}else addStream();function addStream(stream){rtcMultiSession.addStream({stream:stream,renegotiate:session||connection.session,socket:socket});}}; // www.RTCMultiConnection.org/docs/removeStream/
	connection.removeStream=function(streamid,dontRenegotiate){if(connection.numberOfConnectedUsers<=0){ // no connections
	setTimeout(function(){ // try again
	connection.removeStream(streamid,dontRenegotiate);},1000);return;}if(!streamid)streamid='all';if(!isString(streamid)||streamid.search(/all|audio|video|screen/gi)!=-1){function _detachStream(_stream,config){if(config.local&&_stream.type!='local')return;if(config.remote&&_stream.type!='remote')return; // connection.removeStream({screen:true});
	if(config.screen&&!!_stream.isScreen){connection.detachStreams.push(_stream.streamid);} // connection.removeStream({audio:true});
	if(config.audio&&!!_stream.isAudio){connection.detachStreams.push(_stream.streamid);} // connection.removeStream({video:true});
	if(config.video&&!!_stream.isVideo){connection.detachStreams.push(_stream.streamid);} // connection.removeStream({});
	if(!config.audio&&!config.video&&!config.screen){connection.detachStreams.push(_stream.streamid);}if(connection.detachStreams.indexOf(_stream.streamid)!=-1){log('removing stream',_stream.streamid);onStreamEndedHandler(_stream,connection);if(config.stop){connection.stopMediaStream(_stream.stream);}}}for(var stream in connection.streams){if(connection._skip.indexOf(stream)==-1){_stream=connection.streams[stream];if(streamid=='all')_detachStream(_stream,{audio:true,video:true,screen:true});else if(isString(streamid)){ // connection.removeStream('screen');
	var config={};config[streamid]=true;_detachStream(_stream,config);}else _detachStream(_stream,streamid);}}if(!dontRenegotiate&&connection.detachStreams.length){connection.renegotiate();}return;}var stream=connection.streams[streamid]; // detach pre-attached streams
	if(!stream)return warn('No such stream exists. Stream-id:',streamid); // www.RTCMultiConnection.org/docs/detachStreams/
	connection.detachStreams.push(stream.streamid);log('removing stream',stream.streamid);onStreamEndedHandler(stream,connection); // todo: how to allow "stop" function?
	// connection.stopMediaStream(stream.stream)
	if(!dontRenegotiate){connection.renegotiate();}};connection.switchStream=function(session){if(connection.numberOfConnectedUsers<=0){ // no connections
	setTimeout(function(){ // try again
	connection.switchStream(session);},1000);return;}connection.removeStream('all',true);connection.addStream(session);}; // www.RTCMultiConnection.org/docs/sendCustomMessage/
	connection.sendCustomMessage=function(message){if(!rtcMultiSession||!rtcMultiSession.defaultSocket){return setTimeout(function(){connection.sendCustomMessage(message);},1000);}rtcMultiSession.defaultSocket.send({customMessage:true,message:message});}; // set RTCMultiConnection defaults on constructor invocation
	setDefaults(connection);};function RTCMultiSession(connection,callbackForSignalingReady){var socketObjects={};var sockets=[];var rtcMultiSession=this;var participants={};if(!rtcMultiSession.fileBufferReader&&connection.session.data&&connection.enableFileSharing){initFileBufferReader(connection,function(fbr){rtcMultiSession.fileBufferReader=fbr;});}var textReceiver=new TextReceiver(connection);function onDataChannelMessage(e){if(e.data.checkingPresence&&connection.channels[e.userid]){connection.channels[e.userid].send({presenceDetected:true});return;}if(e.data.presenceDetected&&connection.peers[e.userid]){connection.peers[e.userid].connected=true;return;}if(e.data.type==='text'){textReceiver.receive(e.data,e.userid,e.extra);}else {if(connection.autoTranslateText){e.original=e.data;connection.Translator.TranslateText(e.data,function(translatedText){e.data=translatedText;connection.onmessage(e);});}else connection.onmessage(e);}}function onNewSession(session){if(connection.skipOnNewSession)return;if(!session.session)session.session={};if(!session.extra)session.extra={}; // todo: make sure this works as expected.
	// i.e. "onNewSession" should be fired only for 
	// sessionid that is passed over "connect" method.
	if(connection.sessionid&&session.sessionid!=connection.sessionid)return;if(connection.onNewSession){session.join=function(forceSession){if(!forceSession)return connection.join(session);for(var f in forceSession){session.session[f]=forceSession[f];} // keeping previous state
	var isDontCaptureUserMedia=connection.dontCaptureUserMedia;connection.dontCaptureUserMedia=false;connection.captureUserMedia(function(){connection.dontCaptureUserMedia=true;connection.join(session); // returning back previous state
	connection.dontCaptureUserMedia=isDontCaptureUserMedia;},forceSession);};if(!session.extra)session.extra={};return connection.onNewSession(session);}connection.join(session);}function updateSocketForLocalStreams(socket){for(var i=0;i<connection.localStreamids.length;i++){var streamid=connection.localStreamids[i];if(connection.streams[streamid]){ // using "sockets" array to keep references of all sockets using 
	// this media stream; so we can fire "onStreamEndedHandler" among all users.
	connection.streams[streamid].sockets.push(socket);}}}function newPrivateSocket(_config){var socketConfig={channel:_config.channel,onmessage:socketResponse,onopen:function(_socket){if(_socket)socket=_socket;if(isofferer&&!peer){peerConfig.session=connection.session;if(!peer)peer=new PeerConnection();peer.create('offer',peerConfig);}_config.socketIndex=socket.index=sockets.length;socketObjects[socketConfig.channel]=socket;sockets[_config.socketIndex]=socket;updateSocketForLocalStreams(socket);if(!socket.__push){socket.__push=socket.send;socket.send=function(message){message.userid=message.userid||connection.userid;message.extra=message.extra||connection.extra||{};socket.__push(message);};}}};socketConfig.callback=function(_socket){socket=_socket;socketConfig.onopen();};var socket=connection.openSignalingChannel(socketConfig);if(socket)socketConfig.onopen(socket);var isofferer=_config.isofferer,peer;var peerConfig={onopen:onChannelOpened,onicecandidate:function(candidate){if(!connection.candidates)throw 'ICE candidates are mandatory.';if(!connection.iceProtocols)throw 'At least one must be true; UDP or TCP.';var iceCandidates=connection.candidates;var stun=iceCandidates.stun;var turn=iceCandidates.turn;if(!isNull(iceCandidates.reflexive))stun=iceCandidates.reflexive;if(!isNull(iceCandidates.relay))turn=iceCandidates.relay;if(!iceCandidates.host&&!!candidate.candidate.match(/a=candidate.*typ host/g))return;if(!turn&&!!candidate.candidate.match(/a=candidate.*typ relay/g))return;if(!stun&&!!candidate.candidate.match(/a=candidate.*typ srflx/g))return;var protocol=connection.iceProtocols;if(!protocol.udp&&!!candidate.candidate.match(/a=candidate.* udp/g))return;if(!protocol.tcp&&!!candidate.candidate.match(/a=candidate.* tcp/g))return;if(!window.selfNPObject)window.selfNPObject=candidate;socket&&socket.send({candidate:JSON.stringify({candidate:candidate.candidate,sdpMid:candidate.sdpMid,sdpMLineIndex:candidate.sdpMLineIndex})});},onmessage:function(data){if(!data)return;var abToStr=ab2str(data);if(abToStr.indexOf('"userid":')!=-1){abToStr=JSON.parse(abToStr);onDataChannelMessage(abToStr);}else if(data instanceof ArrayBuffer||data instanceof DataView){if(!connection.enableFileSharing){throw 'It seems that receiving data is either "Blob" or "File" but file sharing is disabled.';}if(!rtcMultiSession.fileBufferReader){var that=this;initFileBufferReader(connection,function(fbr){rtcMultiSession.fileBufferReader=fbr;that.onmessage(data);});return;}var fileBufferReader=rtcMultiSession.fileBufferReader;fileBufferReader.convertToObject(data,function(chunk){if(chunk.maxChunks||chunk.readyForNextChunk){ // if target peer requested next chunk
	if(chunk.readyForNextChunk){fileBufferReader.getNextChunk(chunk.uuid,function(nextChunk,isLastChunk,extra){rtcMultiSession.send(nextChunk);});return;} // if chunk is received
	fileBufferReader.addChunk(chunk,function(promptNextChunk){ // request next chunk
	rtcMultiSession.send(promptNextChunk);});return;}connection.onmessage({data:chunk,userid:_config.userid,extra:_config.extra});});return;}},onaddstream:function(stream,session){session=session||_config.renegotiate||connection.session; // if it is data-only connection; then return.
	if(isData(session))return;if(session.screen&&(session.audio||session.video)){if(!_config.gotAudioOrVideo){ // audio/video are fired earlier than screen
	_config.gotAudioOrVideo=true;session.screen=false;}else { // screen stream is always fired later
	session.audio=false;session.video=false;}}var preMuted={};if(_config.streaminfo){var streaminfo=_config.streaminfo.split('----');var strInfo=JSON.parse(streaminfo[streaminfo.length-1]);if(!isIE){stream.streamid=strInfo.streamid;stream.isScreen=!!strInfo.isScreen;stream.isVideo=!!strInfo.isVideo;stream.isAudio=!!strInfo.isAudio;preMuted=strInfo.preMuted;}streaminfo.pop();_config.streaminfo=streaminfo.join('----');}var mediaElement=createMediaElement(stream,merge({remote:true},session));if(connection.setDefaultEventsForMediaElement){connection.setDefaultEventsForMediaElement(mediaElement,stream.streamid);}if(!isPluginRTC&&!stream.getVideoTracks().length){function eventListener(){setTimeout(function(){mediaElement.muted=false;afterRemoteStreamStartedFlowing({mediaElement:mediaElement,session:session,stream:stream,preMuted:preMuted});},3000);mediaElement.removeEventListener('play',eventListener);}return mediaElement.addEventListener('play',eventListener,false);}waitUntilRemoteStreamStartsFlowing({mediaElement:mediaElement,session:session,stream:stream,preMuted:preMuted});},onremovestream:function(stream){if(stream&&stream.streamid){stream=connection.streams[stream.streamid];if(stream){log('on:stream:ended via on:remove:stream',stream);onStreamEndedHandler(stream,connection);}}else log('on:remove:stream',stream);},onclose:function(e){e.extra=_config.extra;e.userid=_config.userid;connection.onclose(e); // suggested in #71 by "efaj"
	if(connection.channels[e.userid]){delete connection.channels[e.userid];}},onerror:function(e){e.extra=_config.extra;e.userid=_config.userid;connection.onerror(e);},oniceconnectionstatechange:function(event){log('oniceconnectionstatechange',toStr(event));if(peer.connection&&peer.connection.iceConnectionState=='connected'&&peer.connection.iceGatheringState=='complete'&&peer.connection.signalingState=='stable'&&connection.numberOfConnectedUsers==1){connection.onconnected({userid:_config.userid,extra:_config.extra,peer:connection.peers[_config.userid],targetuser:_config.userinfo});}if(!connection.isInitiator&&peer.connection&&peer.connection.iceConnectionState=='connected'&&peer.connection.iceGatheringState=='complete'&&peer.connection.signalingState=='stable'&&connection.numberOfConnectedUsers==1){connection.onstatechange({userid:_config.userid,extra:_config.extra,name:'connected-with-initiator',reason:'ICE connection state seems connected; gathering state is completed; and signaling state is stable.'});}if(connection.peers[_config.userid]&&connection.peers[_config.userid].oniceconnectionstatechange){connection.peers[_config.userid].oniceconnectionstatechange(event);} // if ICE connectivity check is failed; renegotiate or redial
	if(connection.peers[_config.userid]&&connection.peers[_config.userid].peer.connection.iceConnectionState=='failed'){connection.onfailed({userid:_config.userid,extra:_config.extra,peer:connection.peers[_config.userid],targetuser:_config.userinfo});}if(connection.peers[_config.userid]&&connection.peers[_config.userid].peer.connection.iceConnectionState=='disconnected'){!peer.connection.renegotiate&&connection.ondisconnected({userid:_config.userid,extra:_config.extra,peer:connection.peers[_config.userid],targetuser:_config.userinfo});peer.connection.renegotiate=false;}if(!connection.autoReDialOnFailure)return;if(connection.peers[_config.userid]){if(connection.peers[_config.userid].peer.connection.iceConnectionState!='disconnected'){_config.redialing=false;}if(connection.peers[_config.userid].peer.connection.iceConnectionState=='disconnected'&&!_config.redialing){_config.redialing=true;warn('Peer connection is closed.',toStr(connection.peers[_config.userid].peer.connection),'ReDialing..');connection.peers[_config.userid].socket.send({redial:true}); // to make sure all old "remote" streams are also removed!
	connection.streams.remove({remote:true,userid:_config.userid});}}},onsignalingstatechange:function(event){log('onsignalingstatechange',toStr(event));},attachStreams:connection.dontAttachStream?[]:connection.attachStreams,iceServers:connection.iceServers,rtcConfiguration:connection.rtcConfiguration,bandwidth:connection.bandwidth,sdpConstraints:connection.sdpConstraints,optionalArgument:connection.optionalArgument,disableDtlsSrtp:connection.disableDtlsSrtp,dataChannelDict:connection.dataChannelDict,preferSCTP:connection.preferSCTP,onSessionDescription:function(sessionDescription,streaminfo){sendsdp({sdp:sessionDescription,socket:socket,streaminfo:streaminfo});},trickleIce:connection.trickleIce,processSdp:connection.processSdp,sendStreamId:function(stream){socket&&socket.send({streamid:stream.streamid,isScreen:!!stream.isScreen,isAudio:!!stream.isAudio,isVideo:!!stream.isVideo});},rtcMultiConnection:connection};function waitUntilRemoteStreamStartsFlowing(args){ // chrome for android may have some features missing
	if(isMobileDevice||isPluginRTC||isNull(connection.waitUntilRemoteStreamStartsFlowing)||!connection.waitUntilRemoteStreamStartsFlowing){return afterRemoteStreamStartedFlowing(args);}if(!args.numberOfTimes)args.numberOfTimes=0;args.numberOfTimes++;if(!(args.mediaElement.readyState<=HTMLMediaElement.HAVE_CURRENT_DATA||args.mediaElement.paused||args.mediaElement.currentTime<=0)){return afterRemoteStreamStartedFlowing(args);}if(args.numberOfTimes>=60){ // wait 60 seconds while video is delivered!
	return socket.send({failedToReceiveRemoteVideo:true,streamid:args.stream.streamid});}setTimeout(function(){log('Waiting for incoming remote stream to be started flowing: '+args.numberOfTimes+' seconds.');waitUntilRemoteStreamStartsFlowing(args);},900);}function initFakeChannel(){if(!connection.fakeDataChannels||connection.channels[_config.userid])return; // for non-data connections; allow fake data sender!
	if(!connection.session.data){var fakeChannel={send:function(data){socket.send({fakeData:data});},readyState:'open'}; // connection.channels['user-id'].send(data);
	connection.channels[_config.userid]={channel:fakeChannel,send:function(data){this.channel.send(data);}};peerConfig.onopen(fakeChannel);}}function afterRemoteStreamStartedFlowing(args){var mediaElement=args.mediaElement;var session=args.session;var stream=args.stream;stream.onended=function(){if(streamedObject.mediaElement&&!streamedObject.mediaElement.parentNode&&document.getElementById(stream.streamid)){streamedObject.mediaElement=document.getElementById(stream.streamid);}onStreamEndedHandler(streamedObject,connection);};var streamedObject={mediaElement:mediaElement,stream:stream,streamid:stream.streamid,session:session||connection.session,blobURL:isPluginRTC?'':mediaElement.mozSrcObject?URL.createObjectURL(stream):mediaElement.src,type:'remote',extra:_config.extra,userid:_config.userid,isVideo:isPluginRTC?!!session.video:!!stream.isVideo,isAudio:isPluginRTC?!!session.audio&&!session.video:!!stream.isAudio,isScreen:!!stream.isScreen,isInitiator:!!_config.isInitiator,rtcMultiConnection:connection,socket:socket}; // connection.streams['stream-id'].mute({audio:true})
	connection.streams[stream.streamid]=connection._getStream(streamedObject);connection.onstream(streamedObject);if(!isEmpty(args.preMuted)&&(args.preMuted.audio||args.preMuted.video)){var fakeObject=merge({},streamedObject);fakeObject.session=merge(fakeObject.session,args.preMuted);fakeObject.isAudio=!!fakeObject.session.audio&&!fakeObject.session.video;fakeObject.isVideo=!!fakeObject.session.video;fakeObject.isScreen=false;connection.onmute(fakeObject);}log('on:add:stream',streamedObject);onSessionOpened();if(connection.onspeaking){initHark({stream:stream,streamedObject:streamedObject,connection:connection});}}function onChannelOpened(channel){_config.channel=channel; // connection.channels['user-id'].send(data);
	connection.channels[_config.userid]={channel:_config.channel,send:function(data){connection.send(data,this.channel);}};connection.onopen({extra:_config.extra,userid:_config.userid,channel:channel}); // fetch files from file-queue
	for(var q in connection.fileQueue){connection.send(connection.fileQueue[q],channel);}if(isData(connection.session))onSessionOpened();if(connection.partOfScreen&&connection.partOfScreen.sharing){connection.peers[_config.userid].sharePartOfScreen(connection.partOfScreen);}}function updateSocket(){ // todo: need to check following {if-block} MUST not affect "redial" process
	if(socket.userid==_config.userid)return;socket.userid=_config.userid;sockets[_config.socketIndex]=socket;connection.numberOfConnectedUsers++; // connection.peers['user-id'].addStream({audio:true})
	connection.peers[_config.userid]={socket:socket,peer:peer,userid:_config.userid,extra:_config.extra,userinfo:_config.userinfo,addStream:function(session00){ // connection.peers['user-id'].addStream({audio: true, video: true);
	connection.addStream(session00,this.socket);},removeStream:function(streamid){if(!connection.streams[streamid])return warn('No such stream exists. Stream-id:',streamid);this.peer.connection.removeStream(connection.streams[streamid].stream);this.renegotiate();},renegotiate:function(stream,session){ // connection.peers['user-id'].renegotiate();
	connection.renegotiate(stream,session);},changeBandwidth:function(bandwidth){ // connection.peers['user-id'].changeBandwidth();
	if(!bandwidth)throw 'You MUST pass bandwidth object.';if(isString(bandwidth))throw 'Pass object for bandwidth instead of string; e.g. {audio:10, video:20}'; // set bandwidth for self
	this.peer.bandwidth=bandwidth; // ask remote user to synchronize bandwidth
	this.socket.send({changeBandwidth:true,bandwidth:bandwidth});},sendCustomMessage:function(message){ // connection.peers['user-id'].sendCustomMessage();
	this.socket.send({customMessage:true,message:message});},onCustomMessage:function(message){log('Received "private" message from',this.userid,isString(message)?message:toStr(message));},drop:function(dontSendMessage){ // connection.peers['user-id'].drop();
	for(var stream in connection.streams){if(connection._skip.indexOf(stream)==-1){stream=connection.streams[stream];if(stream.userid==connection.userid&&stream.type=='local'){this.peer.connection.removeStream(stream.stream);onStreamEndedHandler(stream,connection);}if(stream.type=='remote'&&stream.userid==this.userid){onStreamEndedHandler(stream,connection);}}}!dontSendMessage&&this.socket.send({drop:true});},hold:function(holdMLine){ // connection.peers['user-id'].hold();
	if(peer.prevCreateType=='answer'){this.socket.send({unhold:true,holdMLine:holdMLine||'both',takeAction:true});return;}this.socket.send({hold:true,holdMLine:holdMLine||'both'});this.peer.hold=true;this.fireHoldUnHoldEvents({kind:holdMLine,isHold:true,userid:connection.userid,remoteUser:this.userid});},unhold:function(holdMLine){ // connection.peers['user-id'].unhold();
	if(peer.prevCreateType=='answer'){this.socket.send({unhold:true,holdMLine:holdMLine||'both',takeAction:true});return;}this.socket.send({unhold:true,holdMLine:holdMLine||'both'});this.peer.hold=false;this.fireHoldUnHoldEvents({kind:holdMLine,isHold:false,userid:connection.userid,remoteUser:this.userid});},fireHoldUnHoldEvents:function(e){ // this method is for inner usages only!
	var isHold=e.isHold;var kind=e.kind;var userid=e.remoteUser||e.userid; // hold means inactive a specific media line!
	// a media line can contain multiple synced sources (ssrc)
	// i.e. a media line can reference multiple tracks!
	// that's why hold will affect all relevant tracks in a specific media line!
	for(var stream in connection.streams){if(connection._skip.indexOf(stream)==-1){stream=connection.streams[stream];if(stream.userid==userid){ // www.RTCMultiConnection.org/docs/onhold/
	if(isHold)connection.onhold(merge({kind:kind},stream)); // www.RTCMultiConnection.org/docs/onunhold/
	if(!isHold)connection.onunhold(merge({kind:kind},stream));}}}},redial:function(){ // connection.peers['user-id'].redial();
	// 1st of all; remove all relevant remote media streams
	for(var stream in connection.streams){if(connection._skip.indexOf(stream)==-1){stream=connection.streams[stream];if(stream.userid==this.userid&&stream.type=='remote'){onStreamEndedHandler(stream,connection);}}}log('ReDialing...');socket.send({recreatePeer:true});peer=new PeerConnection();peer.create('offer',peerConfig);},sharePartOfScreen:function(args){ // www.RTCMultiConnection.org/docs/onpartofscreen/
	var that=this;var lastScreenshot='';function partOfScreenCapturer(){ // if stopped
	if(that.stopPartOfScreenSharing){that.stopPartOfScreenSharing=false;if(connection.onpartofscreenstopped){connection.onpartofscreenstopped();}return;} // if paused
	if(that.pausePartOfScreenSharing){if(connection.onpartofscreenpaused){connection.onpartofscreenpaused();}return setTimeout(partOfScreenCapturer,args.interval||200);}capturePartOfScreen({element:args.element,connection:connection,callback:function(screenshot){if(!connection.channels[that.userid]){throw 'No such data channel exists.';} // don't share repeated content
	if(screenshot!=lastScreenshot){lastScreenshot=screenshot;connection.channels[that.userid].send({screenshot:screenshot,isPartOfScreen:true});} // "once" can be used to share single screenshot
	!args.once&&setTimeout(partOfScreenCapturer,args.interval||200);}});}partOfScreenCapturer();},getConnectionStats:function(callback,interval){if(!callback)throw 'callback is mandatory.';if(!window.getConnectionStats){loadScript(connection.resources.getConnectionStats,invoker);}else invoker();function invoker(){RTCPeerConnection.prototype.getConnectionStats=window.getConnectionStats;peer.connection&&peer.connection.getConnectionStats(callback,interval);}},takeSnapshot:function(callback){takeSnapshot({userid:this.userid,connection:connection,callback:callback});}};}function onSessionOpened(){ // original conferencing infrastructure!
	if(connection.isInitiator&&getLength(participants)&&getLength(participants)<=connection.maxParticipantsAllowed){if(!connection.session.oneway&&!connection.session.broadcast){defaultSocket.send({sessionid:connection.sessionid,newParticipant:_config.userid||socket.channel,userData:{userid:_config.userid||socket.channel,extra:_config.extra}});}} // 1st: renegotiation is supported only on chrome
	// 2nd: must not renegotiate same media multiple times
	// 3rd: todo: make sure that target-user has no such "renegotiated" media.
	if(_config.userinfo.browser=='chrome'&&!_config.renegotiatedOnce){ // this code snippet is added to make sure that "previously-renegotiated" streams are also 
	// renegotiated to this new user
	for(var rSession in connection.renegotiatedSessions){_config.renegotiatedOnce=true;if(connection.renegotiatedSessions[rSession]&&connection.renegotiatedSessions[rSession].stream){connection.peers[_config.userid].renegotiate(connection.renegotiatedSessions[rSession].stream,connection.renegotiatedSessions[rSession].session);}}}}function socketResponse(response){if(isRMSDeleted)return;if(response.userid==connection.userid)return;if(response.sdp){_config.userid=response.userid;_config.extra=response.extra||{};_config.renegotiate=response.renegotiate;_config.streaminfo=response.streaminfo;_config.isInitiator=response.isInitiator;_config.userinfo=response.userinfo;var sdp=JSON.parse(response.sdp);if(sdp.type=='offer'){ // to synchronize SCTP or RTP
	peerConfig.preferSCTP=!!response.preferSCTP;connection.fakeDataChannels=!!response.fakeDataChannels;} // initializing fake channel
	initFakeChannel();sdpInvoker(sdp,response.labels);}if(response.candidate){peer&&peer.addIceCandidate(JSON.parse(response.candidate));}if(response.streamid){if(!rtcMultiSession.streamids){rtcMultiSession.streamids={};}if(!rtcMultiSession.streamids[response.streamid]){rtcMultiSession.streamids[response.streamid]=response.streamid;connection.onstreamid(response);}}if(response.mute||response.unmute){if(response.promptMuteUnmute){if(!connection.privileges.canMuteRemoteStream){connection.onstatechange({userid:response.userid,extra:response.extra,name:'mute-request-denied',reason:response.userid+' tried to mute your stream; however "privileges.canMuteRemoteStream" is "false".'});return;}if(connection.streams[response.streamid]){if(response.mute&&!connection.streams[response.streamid].muted){connection.streams[response.streamid].mute(response.session);}if(response.unmute&&connection.streams[response.streamid].muted){connection.streams[response.streamid].unmute(response.session);}}}else {var streamObject={};if(connection.streams[response.streamid]){streamObject=connection.streams[response.streamid];}var session=response.session;var fakeObject=merge({},streamObject);fakeObject.session=session;fakeObject.isAudio=!!fakeObject.session.audio&&!fakeObject.session.video;fakeObject.isVideo=!!fakeObject.session.video;fakeObject.isScreen=!!fakeObject.session.screen;if(response.mute)connection.onmute(fakeObject||response);if(response.unmute)connection.onunmute(fakeObject||response);}}if(response.isVolumeChanged){log('Volume of stream: '+response.streamid+' has changed to: '+response.volume);if(connection.streams[response.streamid]){var mediaElement=connection.streams[response.streamid].mediaElement;if(mediaElement)mediaElement.volume=response.volume;}} // to stop local stream
	if(response.stopped){if(connection.streams[response.streamid]){onStreamEndedHandler(connection.streams[response.streamid],connection);}} // to stop remote stream
	if(response.promptStreamStop /* && !connection.isInitiator */){if(!connection.privileges.canStopRemoteStream){connection.onstatechange({userid:response.userid,extra:response.extra,name:'stop-request-denied',reason:response.userid+' tried to stop your stream; however "privileges.canStopRemoteStream" is "false".'});return;}warn('Remote stream has been manually stopped!');if(connection.streams[response.streamid]){connection.streams[response.streamid].stop();}}if(response.left){ // firefox is unable to stop remote streams
	// firefox doesn't auto stop streams when peer.close() is called.
	if(isFirefox){var userLeft=response.userid;for(var stream in connection.streams){stream=connection.streams[stream];if(stream.userid==userLeft){connection.stopMediaStream(stream);onStreamEndedHandler(stream,connection);}}}if(peer&&peer.connection){ // todo: verify if-block's 2nd condition
	if(peer.connection.signalingState!='closed'&&peer.connection.iceConnectionState.search(/disconnected|failed/gi)==-1){peer.connection.close();}peer.connection=null;}if(participants[response.userid])delete participants[response.userid];if(response.closeEntireSession){connection.onSessionClosed(response);connection.leave();return;}connection.remove(response.userid);onLeaveHandler({userid:response.userid,extra:response.extra||{},entireSessionClosed:!!response.closeEntireSession},connection);} // keeping session active even if initiator leaves
	if(response.playRoleOfBroadcaster){if(response.extra){ // clone extra-data from initial moderator
	connection.extra=merge(connection.extra,response.extra);}if(response.participants){participants=response.participants; // make sure that if 2nd initiator leaves; control is shifted to 3rd person.
	if(participants[connection.userid]){delete participants[connection.userid];}if(sockets[0]&&sockets[0].userid==response.userid){delete sockets[0];sockets=swap(sockets);}if(socketObjects[response.userid]){delete socketObjects[response.userid];}}setTimeout(connection.playRoleOfInitiator,2000);}if(response.changeBandwidth){if(!connection.peers[response.userid])throw 'No such peer exists.'; // synchronize bandwidth
	connection.peers[response.userid].peer.bandwidth=response.bandwidth; // renegotiate to apply bandwidth
	connection.peers[response.userid].renegotiate();}if(response.customMessage){if(!connection.peers[response.userid])throw 'No such peer exists.';if(response.message.ejected){if(connection.sessionDescriptions[connection.sessionid].userid!=response.userid){throw 'only initiator can eject a user.';} // initiator ejected this user
	connection.leave();connection.onSessionClosed({userid:response.userid,extra:response.extra||_config.extra,isEjected:true});}else connection.peers[response.userid].onCustomMessage(response.message);}if(response.drop){if(!connection.peers[response.userid])throw 'No such peer exists.';connection.peers[response.userid].drop(true);connection.peers[response.userid].renegotiate();connection.ondrop(response.userid);}if(response.hold||response.unhold){if(!connection.peers[response.userid])throw 'No such peer exists.';if(response.takeAction){connection.peers[response.userid][!!response.hold?'hold':'unhold'](response.holdMLine);return;}connection.peers[response.userid].peer.hold=!!response.hold;connection.peers[response.userid].peer.holdMLine=response.holdMLine;socket.send({isRenegotiate:true});connection.peers[response.userid].fireHoldUnHoldEvents({kind:response.holdMLine,isHold:!!response.hold,userid:response.userid});}if(response.isRenegotiate){connection.peers[response.userid].renegotiate(null,connection.peers[response.userid].peer.session);} // fake data channels!
	if(response.fakeData){peerConfig.onmessage(response.fakeData);} // sometimes we don't need to renegotiate e.g. when peers are disconnected
	// or if it is firefox
	if(response.recreatePeer){peer=new PeerConnection();} // remote video failed either out of ICE gathering process or ICE connectivity check-up
	// or IceAgent was unable to locate valid candidates/ports.
	if(response.failedToReceiveRemoteVideo){log('Remote peer hasn\'t received stream: '+response.streamid+'. Renegotiating...');if(connection.peers[response.userid]){connection.peers[response.userid].renegotiate();}}if(response.redial){if(connection.peers[response.userid]){if(connection.peers[response.userid].peer.connection.iceConnectionState!='disconnected'){_config.redialing=false;}if(connection.peers[response.userid].peer.connection.iceConnectionState=='disconnected'&&!_config.redialing){_config.redialing=true;warn('Peer connection is closed.',toStr(connection.peers[response.userid].peer.connection),'ReDialing..');connection.peers[response.userid].redial();}}}}connection.playRoleOfInitiator=function(){connection.dontCaptureUserMedia=true;connection.open();sockets=swap(sockets);connection.dontCaptureUserMedia=false;};connection.askToShareParticipants=function(){defaultSocket&&defaultSocket.send({askToShareParticipants:true});};connection.shareParticipants=function(args){var message={joinUsers:participants,userid:connection.userid,extra:connection.extra};if(args){if(args.dontShareWith)message.dontShareWith=args.dontShareWith;if(args.shareWith)message.shareWith=args.shareWith;}defaultSocket.send(message);};function sdpInvoker(sdp,labels){if(sdp.type=='answer'){peer.setRemoteDescription(sdp);updateSocket();return;}if(!_config.renegotiate&&sdp.type=='offer'){peerConfig.offerDescription=sdp;peerConfig.session=connection.session;if(!peer)peer=new PeerConnection();peer.create('answer',peerConfig);updateSocket();return;}var session=_config.renegotiate; // detach streams
	detachMediaStream(labels,peer.connection);if(session.oneway||isData(session)){createAnswer();delete _config.renegotiate;}else {if(_config.capturing)return;_config.capturing=true;connection.captureUserMedia(function(stream){_config.capturing=false;peer.addStream(stream);connection.renegotiatedSessions[JSON.stringify(_config.renegotiate)]={session:_config.renegotiate,stream:stream};delete _config.renegotiate;createAnswer();},_config.renegotiate);}function createAnswer(){peer.recreateAnswer(sdp,session,function(_sdp,streaminfo){sendsdp({sdp:_sdp,socket:socket,streaminfo:streaminfo});connection.detachStreams=[];});}}}function detachMediaStream(labels,peer){if(!labels)return;for(var i=0;i<labels.length;i++){var label=labels[i];if(connection.streams[label]){peer.removeStream(connection.streams[label].stream);}}}function sendsdp(e){e.socket.send({sdp:JSON.stringify({sdp:e.sdp.sdp,type:e.sdp.type}),renegotiate:!!e.renegotiate?e.renegotiate:false,streaminfo:e.streaminfo||'',labels:e.labels||[],preferSCTP:!!connection.preferSCTP,fakeDataChannels:!!connection.fakeDataChannels,isInitiator:!!connection.isInitiator,userinfo:{browser:isFirefox?'firefox':'chrome'}});} // sharing new user with existing participants
	function onNewParticipant(response){var channel=response.newParticipant;if(!channel||!!participants[channel]||channel==connection.userid)return;var new_channel=connection.token();newPrivateSocket({channel:new_channel,extra:response.userData?response.userData.extra:response.extra,userid:response.userData?response.userData.userid:response.userid});defaultSocket.send({participant:true,targetUser:channel,channel:new_channel});} // if a user leaves
	function clearSession(){connection.numberOfConnectedUsers--;var alertMessage={left:true,extra:connection.extra||{},userid:connection.userid,sessionid:connection.sessionid};if(connection.isInitiator){ // if initiator wants to close entire session
	if(connection.autoCloseEntireSession){alertMessage.closeEntireSession=true;}else if(sockets[0]){ // shift initiation control to another user
	sockets[0].send({playRoleOfBroadcaster:true,userid:connection.userid,extra:connection.extra,participants:participants});}}sockets.forEach(function(socket,i){socket.send(alertMessage);if(socketObjects[socket.channel]){delete socketObjects[socket.channel];}delete sockets[i];});sockets=swap(sockets);connection.refresh();webAudioMediaStreamSources.forEach(function(mediaStreamSource){ // if source is connected; then chrome will crash on unload.
	mediaStreamSource.disconnect();});webAudioMediaStreamSources=[];} // www.RTCMultiConnection.org/docs/remove/
	connection.remove=function(userid){if(rtcMultiSession.requestsFrom&&rtcMultiSession.requestsFrom[userid])delete rtcMultiSession.requestsFrom[userid];if(connection.peers[userid]){if(connection.peers[userid].peer&&connection.peers[userid].peer.connection){if(connection.peers[userid].peer.connection.signalingState!='closed'){connection.peers[userid].peer.connection.close();}connection.peers[userid].peer.connection=null;}delete connection.peers[userid];}if(participants[userid]){delete participants[userid];}for(var stream in connection.streams){stream=connection.streams[stream];if(stream.userid==userid){onStreamEndedHandler(stream,connection);delete connection.streams[stream];}}if(socketObjects[userid]){delete socketObjects[userid];}}; // www.RTCMultiConnection.org/docs/refresh/
	connection.refresh=function(){ // if firebase; remove data from firebase servers
	if(connection.isInitiator&&!!connection.socket&&!!connection.socket.remove){connection.socket.remove();}participants={}; // to stop/remove self streams
	for(var i=0;i<connection.attachStreams.length;i++){connection.stopMediaStream(connection.attachStreams[i]);} // to allow capturing of identical streams
	currentUserMediaRequest={streams:[],mutex:false,queueRequests:[]};rtcMultiSession.isOwnerLeaving=true;connection.isInitiator=false;connection.isAcceptNewSession=true;connection.attachMediaStreams=[];connection.sessionDescription=null;connection.sessionDescriptions={};connection.localStreamids=[];connection.preRecordedMedias={};connection.snapshots={};connection.numberOfConnectedUsers=0;connection.numberOfSessions=0;connection.attachStreams=[];connection.detachStreams=[];connection.fileQueue={};connection.channels={};connection.renegotiatedSessions={};for(var peer in connection.peers){if(peer!=connection.userid){delete connection.peers[peer];}} // to make sure remote streams are also removed!
	for(var stream in connection.streams){if(connection._skip.indexOf(stream)==-1){onStreamEndedHandler(connection.streams[stream],connection);delete connection.streams[stream];}}socketObjects={};sockets=[];participants={};}; // www.RTCMultiConnection.org/docs/reject/
	connection.reject=function(userid){if(!isString(userid))userid=userid.userid;defaultSocket.send({rejectedRequestOf:userid}); // remove relevant data to allow him join again
	connection.remove(userid);};rtcMultiSession.leaveHandler=function(e){if(!connection.leaveOnPageUnload)return;if(isNull(e.keyCode)){return clearSession();}if(e.keyCode==116){clearSession();}};listenEventHandler('beforeunload',rtcMultiSession.leaveHandler);listenEventHandler('keyup',rtcMultiSession.leaveHandler);rtcMultiSession.onLineOffLineHandler=function(){if(!navigator.onLine){rtcMultiSession.isOffLine=true;}else if(rtcMultiSession.isOffLine){rtcMultiSession.isOffLine=!navigator.onLine; // defaultSocket = getDefaultSocketRef();
	// pending tasks should be resumed?
	// sockets should be reconnected?
	// peers should be re-established?
	}};listenEventHandler('load',rtcMultiSession.onLineOffLineHandler);listenEventHandler('online',rtcMultiSession.onLineOffLineHandler);listenEventHandler('offline',rtcMultiSession.onLineOffLineHandler);function onSignalingReady(){if(rtcMultiSession.signalingReady)return;rtcMultiSession.signalingReady=true;setTimeout(callbackForSignalingReady,1000);if(!connection.isInitiator){ // as soon as signaling gateway is connected;
	// user should check existing rooms!
	defaultSocket&&defaultSocket.send({searchingForRooms:true});}}function joinParticipants(joinUsers){for(var user in joinUsers){if(!participants[joinUsers[user]]){onNewParticipant({sessionid:connection.sessionid,newParticipant:joinUsers[user],userid:connection.userid,extra:connection.extra});}}}function getDefaultSocketRef(){return connection.openSignalingChannel({onmessage:function(response){ // RMS == RTCMultiSession
	if(isRMSDeleted)return; // if message is sent by same user
	if(response.userid==connection.userid)return;if(response.sessionid&&response.userid){if(!connection.sessionDescriptions[response.sessionid]){connection.numberOfSessions++;connection.sessionDescriptions[response.sessionid]=response; // fire "onNewSession" only if:
	// 1) "isAcceptNewSession" boolean is true
	// 2) "sessionDescriptions" object isn't having same session i.e. to prevent duplicate invocations
	if(connection.isAcceptNewSession){if(!connection.dontOverrideSession){connection.session=response.session;}onNewSession(response);}}}if(response.newParticipant&&!connection.isAcceptNewSession&&rtcMultiSession.broadcasterid===response.userid){if(response.newParticipant!=connection.userid){onNewParticipant(response);}}if(getLength(participants)<connection.maxParticipantsAllowed&&response.targetUser==connection.userid&&response.participant){if(connection.peers[response.userid]&&!connection.peers[response.userid].peer){delete participants[response.userid];delete connection.peers[response.userid];connection.isAcceptNewSession=true;return acceptRequest(response);}if(!participants[response.userid]){acceptRequest(response);}}if(response.acceptedRequestOf==connection.userid){connection.onstatechange({userid:response.userid,extra:response.extra,name:'request-accepted',reason:response.userid+' accepted your participation request.'});}if(response.rejectedRequestOf==connection.userid){connection.onstatechange({userid:response.userid,extra:response.extra,name:'request-rejected',reason:response.userid+' rejected your participation request.'});}if(response.customMessage){if(response.message.drop){connection.ondrop(response.userid);connection.attachStreams=[]; // "drop" should detach all local streams
	for(var stream in connection.streams){if(connection._skip.indexOf(stream)==-1){stream=connection.streams[stream];if(stream.type=='local'){connection.detachStreams.push(stream.streamid);onStreamEndedHandler(stream,connection);}else onStreamEndedHandler(stream,connection);}}if(response.message.renegotiate){ // renegotiate; so "peer.removeStream" happens.
	connection.renegotiate();}}else if(connection.onCustomMessage){connection.onCustomMessage(response.message);}}if(connection.isInitiator&&response.searchingForRooms){defaultSocket&&defaultSocket.send({sessionDescription:connection.sessionDescription,responseFor:response.userid});}if(response.sessionDescription&&response.responseFor==connection.userid){var sessionDescription=response.sessionDescription;if(!connection.sessionDescriptions[sessionDescription.sessionid]){connection.numberOfSessions++;connection.sessionDescriptions[sessionDescription.sessionid]=sessionDescription;}}if(connection.isInitiator&&response.askToShareParticipants&&defaultSocket){connection.shareParticipants({shareWith:response.userid});} // participants are shared with single user
	if(response.shareWith==connection.userid&&response.dontShareWith!=connection.userid&&response.joinUsers){joinParticipants(response.joinUsers);} // participants are shared with all users
	if(!response.shareWith&&response.joinUsers){if(response.dontShareWith){if(connection.userid!=response.dontShareWith){joinParticipants(response.joinUsers);}}else joinParticipants(response.joinUsers);}if(response.messageFor==connection.userid&&response.presenceState){if(response.presenceState=='checking'){defaultSocket.send({messageFor:response.userid,presenceState:'available',_config:response._config});log('participant asked for availability');}if(response.presenceState=='available'){rtcMultiSession.presenceState='available';connection.onstatechange({userid:'browser',extra:{},name:'room-available',reason:'Initiator is available and room is active.'});joinSession(response._config);}}if(response.donotJoin&&response.messageFor==connection.userid){log(response.userid,'is not joining your room.');} // if initiator disconnects sockets, participants should also disconnect
	if(response.isDisconnectSockets){log('Disconnecting your sockets because initiator also disconnected his sockets.');connection.disconnect();}},callback:function(socket){socket&&this.onopen(socket);},onopen:function(socket){if(socket)defaultSocket=socket;if(onSignalingReady)onSignalingReady();rtcMultiSession.defaultSocket=defaultSocket;if(!defaultSocket.__push){defaultSocket.__push=defaultSocket.send;defaultSocket.send=function(message){message.userid=message.userid||connection.userid;message.extra=message.extra||connection.extra||{};defaultSocket.__push(message);};}}});} // default-socket is a common socket shared among all users in a specific channel;
	// to share participation requests; room descriptions; and other stuff.
	var defaultSocket=getDefaultSocketRef();rtcMultiSession.defaultSocket=defaultSocket;if(defaultSocket&&onSignalingReady)setTimeout(onSignalingReady,2000);if(connection.session.screen){loadScreenFrame();}connection.getExternalIceServers&&loadIceFrame(function(iceServers){connection.iceServers=connection.iceServers.concat(iceServers);});if(connection.log==false)connection.skipLogs();if(connection.onlog){log=warn=error=function(){var log={};var index=0;Array.prototype.slice.call(arguments).forEach(function(argument){log[index++]=toStr(argument);});toStr=function(str){return str;};connection.onlog(log);};}function setDirections(){var userMaxParticipantsAllowed=0; // if user has set a custom max participant setting, remember it
	if(connection.maxParticipantsAllowed!=256){userMaxParticipantsAllowed=connection.maxParticipantsAllowed;}if(connection.direction=='one-way')connection.session.oneway=true;if(connection.direction=='one-to-one')connection.maxParticipantsAllowed=1;if(connection.direction=='one-to-many')connection.session.broadcast=true;if(connection.direction=='many-to-many'){if(!connection.maxParticipantsAllowed||connection.maxParticipantsAllowed==1){connection.maxParticipantsAllowed=256;}} // if user has set a custom max participant setting, set it back
	if(userMaxParticipantsAllowed&&connection.maxParticipantsAllowed!=1){connection.maxParticipantsAllowed=userMaxParticipantsAllowed;}} // open new session
	this.initSession=function(args){rtcMultiSession.isOwnerLeaving=false;setDirections();participants={};rtcMultiSession.isOwnerLeaving=false;if(!isNull(args.transmitRoomOnce)){connection.transmitRoomOnce=args.transmitRoomOnce;}function transmit(){if(defaultSocket&&getLength(participants)<connection.maxParticipantsAllowed&&!rtcMultiSession.isOwnerLeaving){defaultSocket.send(connection.sessionDescription);}if(!connection.transmitRoomOnce&&!rtcMultiSession.isOwnerLeaving)setTimeout(transmit,connection.interval||3000);} // todo: test and fix next line.
	if(!args.dontTransmit /* || connection.transmitRoomOnce */)transmit();};function joinSession(_config,skipOnStateChange){if(rtcMultiSession.donotJoin&&rtcMultiSession.donotJoin==_config.sessionid){return;} // dontOverrideSession allows you force RTCMultiConnection
	// to not override default session for participants;
	// by default, session is always overridden and set to the session coming from initiator!
	if(!connection.dontOverrideSession){connection.session=_config.session||{};} // make sure that inappropriate users shouldn't receive onNewSession event
	rtcMultiSession.broadcasterid=_config.userid;if(_config.sessionid){ // used later to prevent external rooms messages to be used by this user!
	connection.sessionid=_config.sessionid;}connection.isAcceptNewSession=false;var channel=getRandomString();newPrivateSocket({channel:channel,extra:_config.extra||{},userid:_config.userid});var offers={};if(connection.attachStreams.length){var stream=connection.attachStreams[connection.attachStreams.length-1];if(!!stream.getAudioTracks&&stream.getAudioTracks().length){offers.audio=true;}if(stream.getVideoTracks().length){offers.video=true;}}if(!isEmpty(offers)){log(toStr(offers));}else log('Seems data-only connection.');connection.onstatechange({userid:_config.userid,extra:{},name:'connecting-with-initiator',reason:'Checking presence of the initiator; and the room.'});defaultSocket.send({participant:true,channel:channel,targetUser:_config.userid,session:connection.session,offers:{audio:!!offers.audio,video:!!offers.video}});connection.skipOnNewSession=false;invokeMediaCaptured(connection);} // join existing session
	this.joinSession=function(_config){if(!defaultSocket)return setTimeout(function(){warn('Default-Socket is not yet initialized.');rtcMultiSession.joinSession(_config);},1000);_config=_config||{};participants={};rtcMultiSession.presenceState='checking';connection.onstatechange({userid:_config.userid,extra:_config.extra||{},name:'detecting-room-presence',reason:'Checking presence of the room.'});function contactInitiator(){defaultSocket.send({messageFor:_config.userid,presenceState:rtcMultiSession.presenceState,_config:{userid:_config.userid,extra:_config.extra||{},sessionid:_config.sessionid,session:_config.session||false}});}contactInitiator();function checker(){if(rtcMultiSession.presenceState=='checking'){warn('Unable to reach initiator. Trying again...');contactInitiator();setTimeout(function(){if(rtcMultiSession.presenceState=='checking'){connection.onstatechange({userid:_config.userid,extra:_config.extra||{},name:'room-not-available',reason:'Initiator seems absent. Waiting for someone to open the room.'});connection.isAcceptNewSession=true;setTimeout(checker,2000);}},2000);}}setTimeout(checker,3000);};connection.donotJoin=function(sessionid){rtcMultiSession.donotJoin=sessionid;var session=connection.sessionDescriptions[sessionid];if(!session)return;defaultSocket.send({donotJoin:true,messageFor:session.userid,sessionid:sessionid});participants={};connection.isAcceptNewSession=true;connection.sessionid=null;}; // send file/data or text message
	this.send=function(message,_channel){if(!(message instanceof ArrayBuffer||message instanceof DataView)){message=str2ab({extra:connection.extra,userid:connection.userid,data:message});}if(_channel){if(_channel.readyState=='open'){_channel.send(message);}return;}for(var dataChannel in connection.channels){var channel=connection.channels[dataChannel].channel;if(channel.readyState=='open'){channel.send(message);}}}; // leave session
	this.leave=function(){clearSession();}; // renegotiate new stream
	this.addStream=function(e){var session=e.renegotiate;if(!connection.renegotiatedSessions[JSON.stringify(e.renegotiate)]){connection.renegotiatedSessions[JSON.stringify(e.renegotiate)]={session:e.renegotiate,stream:e.stream};}if(e.socket){if(e.socket.userid!=connection.userid){addStream(connection.peers[e.socket.userid]);}}else {for(var peer in connection.peers){if(peer!=connection.userid){addStream(connection.peers[peer]);}}}function addStream(_peer){var socket=_peer.socket;if(!socket){warn(_peer,'doesn\'t has socket.');return;}updateSocketForLocalStreams(socket);if(!_peer||!_peer.peer){throw 'No peer to renegotiate.';}var peer=_peer.peer;if(e.stream){if(!peer.attachStreams){peer.attachStreams=[];}peer.attachStreams.push(e.stream);} // detaching old streams
	detachMediaStream(connection.detachStreams,peer.connection);if(e.stream&&(session.audio||session.video||session.screen)){peer.addStream(e.stream);}peer.recreateOffer(session,function(sdp,streaminfo){sendsdp({sdp:sdp,socket:socket,renegotiate:session,labels:connection.detachStreams,streaminfo:streaminfo});connection.detachStreams=[];});}}; // www.RTCMultiConnection.org/docs/request/
	connection.request=function(userid,extra){connection.captureUserMedia(function(){ // open private socket that will be used to receive offer-sdp
	newPrivateSocket({channel:connection.userid,extra:extra||{},userid:userid}); // ask other user to create offer-sdp
	defaultSocket.send({participant:true,targetUser:userid});});};function acceptRequest(response){if(!rtcMultiSession.requestsFrom)rtcMultiSession.requestsFrom={};if(rtcMultiSession.requestsFrom[response.userid])return;var obj={userid:response.userid,extra:response.extra,channel:response.channel||response.userid,session:response.session||connection.session}; // check how participant is willing to join
	if(response.offers){if(response.offers.audio&&response.offers.video){log('target user has both audio/video streams.');}else if(response.offers.audio&&!response.offers.video){log('target user has only audio stream.');}else if(!response.offers.audio&&response.offers.video){log('target user has only video stream.');}else {log('target user has no stream; it seems one-way streaming or data-only connection.');}var mandatory=connection.sdpConstraints.mandatory;if(isNull(mandatory.OfferToReceiveAudio)){connection.sdpConstraints.mandatory.OfferToReceiveAudio=!!response.offers.audio;}if(isNull(mandatory.OfferToReceiveVideo)){connection.sdpConstraints.mandatory.OfferToReceiveVideo=!!response.offers.video;}log('target user\'s SDP has?',toStr(connection.sdpConstraints.mandatory));}rtcMultiSession.requestsFrom[response.userid]=obj; // www.RTCMultiConnection.org/docs/onRequest/
	if(connection.onRequest&&connection.isInitiator){connection.onRequest(obj);}else _accept(obj);}function _accept(e){if(rtcMultiSession.captureUserMediaOnDemand){rtcMultiSession.captureUserMediaOnDemand=false;connection.captureUserMedia(function(){_accept(e);invokeMediaCaptured(connection);});return;}log('accepting request from',e.userid);participants[e.userid]=e.userid;newPrivateSocket({isofferer:true,userid:e.userid,channel:e.channel,extra:e.extra||{},session:e.session||connection.session});} // www.RTCMultiConnection.org/docs/accept/
	connection.accept=function(e){ // for backward compatibility
	if(arguments.length>1&&isString(arguments[0])){e={};if(arguments[0])e.userid=arguments[0];if(arguments[1])e.extra=arguments[1];if(arguments[2])e.channel=arguments[2];}connection.captureUserMedia(function(){_accept(e);});};var isRMSDeleted=false;this.disconnect=function(){this.isOwnerLeaving=true;if(!connection.keepStreamsOpened){for(var streamid in connection.localStreams){connection.localStreams[streamid].stop();}connection.localStreams={};currentUserMediaRequest={streams:[],mutex:false,queueRequests:[]};}if(connection.isInitiator){defaultSocket.send({isDisconnectSockets:true});}connection.refresh();rtcMultiSession.defaultSocket=defaultSocket=null;isRMSDeleted=true;connection.ondisconnected({userid:connection.userid,extra:connection.extra,peer:connection.peers[connection.userid],isSocketsDisconnected:true}); // if there is any peer still opened; close it.
	connection.close();window.removeEventListener('beforeunload',rtcMultiSession.leaveHandler);window.removeEventListener('keyup',rtcMultiSession.leaveHandler); // it will not work, though :)
	delete this;log('Disconnected your sockets, peers, streams and everything except RTCMultiConnection object.');};}var webAudioMediaStreamSources=[];function convertToAudioStream(mediaStream){if(!mediaStream)throw 'MediaStream is mandatory.';if(mediaStream.getVideoTracks&&!mediaStream.getVideoTracks().length){return mediaStream;}var context=new AudioContext();var mediaStreamSource=context.createMediaStreamSource(mediaStream);var destination=context.createMediaStreamDestination();mediaStreamSource.connect(destination);webAudioMediaStreamSources.push(mediaStreamSource);return destination.stream;}var isOpera=!!window.opera||navigator.userAgent.indexOf(' OPR/')>=0;var isFirefox=typeof window.InstallTrigger!=='undefined';var isSafari=Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor')>0;var isChrome=!!window.chrome&&!isOpera;var isIE=!!document.documentMode;var isPluginRTC=isSafari||isIE;var isMobileDevice=!!navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile/i); // detect node-webkit
	var isNodeWebkit=!!(window.process&&typeof window.process=='object'&&window.process.versions&&window.process.versions['node-webkit']);window.MediaStream=window.MediaStream||window.webkitMediaStream;window.AudioContext=window.AudioContext||window.webkitAudioContext;function getRandomString(){ // suggested by @rvulpescu from #154
	if(window.crypto&&crypto.getRandomValues&&navigator.userAgent.indexOf('Safari')==-1){var a=window.crypto.getRandomValues(new Uint32Array(3)),token='';for(var i=0,l=a.length;i<l;i++){token+=a[i].toString(36);}return token;}else {return (Math.random()*new Date().getTime()).toString(36).replace(/\./g,'');}}var chromeVersion=50;var matchArray=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);if(isChrome&&matchArray&&matchArray[2]){chromeVersion=parseInt(matchArray[2],10);}var firefoxVersion=50;matchArray=navigator.userAgent.match(/Firefox\/(.*)/);if(isFirefox&&matchArray&&matchArray[1]){firefoxVersion=parseInt(matchArray[1],10);}function isData(session){return !session.audio&&!session.video&&!session.screen&&session.data;}function isNull(obj){return typeof obj=='undefined';}function isString(obj){return typeof obj=='string';}function isEmpty(session){var length=0;for(var s in session){length++;}return length==0;} // this method converts array-buffer into string
	function ab2str(buf){var result='';try{result=String.fromCharCode.apply(null,new Uint16Array(buf));}catch(e){}return result;} // this method converts string into array-buffer
	function str2ab(str){if(!isString(str))str=JSON.stringify(str);var buf=new ArrayBuffer(str.length*2); // 2 bytes for each char
	var bufView=new Uint16Array(buf);for(var i=0,strLen=str.length;i<strLen;i++){bufView[i]=str.charCodeAt(i);}return buf;}function swap(arr){var swapped=[],length=arr.length;for(var i=0;i<length;i++)if(arr[i]&&arr[i]!==true)swapped.push(arr[i]);return swapped;}function forEach(obj,callback){for(var item in obj){callback(obj[item],item);}}var console=window.console||{log:function(){},error:function(){},warn:function(){}};function log(){console.log(arguments);}function error(){console.error(arguments);}function warn(){console.warn(arguments);}if(isChrome||isFirefox||isSafari){var log=console.log.bind(console);var error=console.error.bind(console);var warn=console.warn.bind(console);}function toStr(obj){return JSON.stringify(obj,function(key,value){if(value&&value.sdp){log(value.sdp.type,'\t',value.sdp.sdp);return '';}else return value;},'\t');}function getLength(obj){var length=0;for(var o in obj)if(o)length++;return length;} // Get HTMLAudioElement/HTMLVideoElement accordingly
	function createMediaElement(stream,session){var mediaElement=document.createElement(stream.isAudio?'audio':'video');mediaElement.id=stream.streamid;if(isPluginRTC){var body=document.body||document.documentElement;body.insertBefore(mediaElement,body.firstChild);setTimeout(function(){Plugin.attachMediaStream(mediaElement,stream);},1000);return Plugin.attachMediaStream(mediaElement,stream);} // "mozSrcObject" is always preferred over "src"!!
	mediaElement[isFirefox?'mozSrcObject':'src']=isFirefox?stream:(window.URL||window.webkitURL).createObjectURL(stream);mediaElement.controls=true;mediaElement.autoplay=!!session.remote;mediaElement.muted=session.remote?false:true; // http://goo.gl/WZ5nFl
	// Firefox don't yet support onended for any stream (remote/local)
	isFirefox&&mediaElement.addEventListener('ended',function(){stream.onended();},false);mediaElement.play();return mediaElement;}var onStreamEndedHandlerFiredFor={};function onStreamEndedHandler(streamedObject,connection){if(streamedObject.mediaElement&&!streamedObject.mediaElement.parentNode)return;if(onStreamEndedHandlerFiredFor[streamedObject.streamid])return;onStreamEndedHandlerFiredFor[streamedObject.streamid]=streamedObject;connection.onstreamended(streamedObject);}var onLeaveHandlerFiredFor={};function onLeaveHandler(event,connection){if(onLeaveHandlerFiredFor[event.userid])return;onLeaveHandlerFiredFor[event.userid]=event;connection.onleave(event);}function takeSnapshot(args){var userid=args.userid;var connection=args.connection;function _takeSnapshot(video){var canvas=document.createElement('canvas');canvas.width=video.videoWidth||video.clientWidth;canvas.height=video.videoHeight||video.clientHeight;var context=canvas.getContext('2d');context.drawImage(video,0,0,canvas.width,canvas.height);connection.snapshots[userid]=canvas.toDataURL('image/png');args.callback&&args.callback(connection.snapshots[userid]);}if(args.mediaElement)return _takeSnapshot(args.mediaElement);for(var stream in connection.streams){stream=connection.streams[stream];if(stream.userid==userid&&stream.stream&&stream.stream.getVideoTracks&&stream.stream.getVideoTracks().length){_takeSnapshot(stream.mediaElement);continue;}}}function invokeMediaCaptured(connection){ // to let user know that media resource has been captured
	// now, he can share "sessionDescription" using sockets
	if(connection.onMediaCaptured){connection.onMediaCaptured();delete connection.onMediaCaptured;}}function merge(mergein,mergeto){if(!mergein)mergein={};if(!mergeto)return mergein;for(var item in mergeto){mergein[item]=mergeto[item];}return mergein;}function loadScript(src,onload){var script=document.createElement('script');script.src=src;script.onload=function(){log('loaded resource:',src);if(onload)onload();};document.documentElement.appendChild(script);}function capturePartOfScreen(args){var connection=args.connection;var element=args.element;if(!window.html2canvas){return loadScript(connection.resources.html2canvas,function(){capturePartOfScreen(args);});}if(isString(element)){element=document.querySelector(element);if(!element)element=document.getElementById(element);}if(!element)throw 'HTML DOM Element is not accessible!'; // todo: store DOM element somewhere to minimize DOM querying issues
	// html2canvas.js is used to take screenshots
	html2canvas(element,{onrendered:function(canvas){args.callback(canvas.toDataURL());}});}function initFileBufferReader(connection,callback){if(!window.FileBufferReader){loadScript(connection.resources.FileBufferReader,function(){initFileBufferReader(connection,callback);});return;}function _private(chunk){chunk.userid=chunk.extra.userid;return chunk;}var fileBufferReader=new FileBufferReader();fileBufferReader.onProgress=function(chunk){connection.onFileProgress(_private(chunk),chunk.uuid);};fileBufferReader.onBegin=function(file){connection.onFileStart(_private(file));};fileBufferReader.onEnd=function(file){connection.onFileEnd(_private(file));};callback(fileBufferReader);}var screenFrame,loadedScreenFrame;function loadScreenFrame(skip){if(DetectRTC.screen.extensionid!=ReservedExtensionID){return;}if(loadedScreenFrame)return;if(!skip)return loadScreenFrame(true);loadedScreenFrame=true;var iframe=document.createElement('iframe');iframe.onload=function(){iframe.isLoaded=true;log('Screen Capturing frame is loaded.');};iframe.src='https://www.webrtc-experiment.com/getSourceId/';iframe.style.display='none';(document.body||document.documentElement).appendChild(iframe);screenFrame={postMessage:function(){if(!iframe.isLoaded){setTimeout(screenFrame.postMessage,100);return;}iframe.contentWindow.postMessage({captureSourceId:true},'*');}};}var iceFrame,loadedIceFrame;function loadIceFrame(callback,skip){if(loadedIceFrame)return;if(!skip)return loadIceFrame(callback,true);loadedIceFrame=true;var iframe=document.createElement('iframe');iframe.onload=function(){iframe.isLoaded=true;listenEventHandler('message',iFrameLoaderCallback);function iFrameLoaderCallback(event){if(!event.data||!event.data.iceServers)return;callback(event.data.iceServers); // this event listener is no more needed
	window.removeEventListener('message',iFrameLoaderCallback);}iframe.contentWindow.postMessage('get-ice-servers','*');};iframe.src='https://cdn.webrtc-experiment.com/getIceServers/';iframe.style.display='none';(document.body||document.documentElement).appendChild(iframe);}function muteOrUnmute(e){var stream=e.stream,root=e.root,session=e.session||{},enabled=e.enabled;if(!session.audio&&!session.video){if(!isString(session)){session=merge(session,{audio:true,video:true});}else {session={audio:true,video:true};}} // implementation from #68
	if(session.type){if(session.type=='remote'&&root.type!='remote')return;if(session.type=='local'&&root.type!='local')return;}log(enabled?'Muting':'UnMuting','session',toStr(session)); // enable/disable audio/video tracks
	if(root.type=='local'&&session.audio&&!!stream.getAudioTracks){var audioTracks=stream.getAudioTracks()[0];if(audioTracks)audioTracks.enabled=!enabled;}if(root.type=='local'&&(session.video||session.screen)&&!!stream.getVideoTracks){var videoTracks=stream.getVideoTracks()[0];if(videoTracks)videoTracks.enabled=!enabled;}root.sockets.forEach(function(socket){if(root.type=='local'){socket.send({streamid:root.streamid,mute:!!enabled,unmute:!enabled,session:session});}if(root.type=='remote'){socket.send({promptMuteUnmute:true,streamid:root.streamid,mute:!!enabled,unmute:!enabled,session:session});}});if(root.type=='remote')return; // According to issue #135, onmute/onumute must be fired for self
	// "fakeObject" is used because we need to keep session for renegotiated streams;
	// and MUST pass exact session over onStreamEndedHandler/onmute/onhold/etc. events.
	var fakeObject=merge({},root);fakeObject.session=session;fakeObject.isAudio=!!fakeObject.session.audio&&!fakeObject.session.video;fakeObject.isVideo=!!fakeObject.session.video;fakeObject.isScreen=!!fakeObject.session.screen;if(!!enabled){ // if muted stream is negotiated
	stream.preMuted={audio:stream.getAudioTracks().length&&!stream.getAudioTracks()[0].enabled,video:stream.getVideoTracks().length&&!stream.getVideoTracks()[0].enabled};root.rtcMultiConnection.onmute(fakeObject);}if(!enabled){stream.preMuted={};root.rtcMultiConnection.onunmute(fakeObject);}}var Firefox_Screen_Capturing_Warning='Make sure that you are using Firefox Nightly and you enabled: media.getusermedia.screensharing.enabled flag from about:config page. You also need to add your domain in "media.getusermedia.screensharing.allowed_domains" flag. If you are using WinXP then also enable "media.getusermedia.screensharing.allow_on_old_platforms" flag. NEVER forget to use "only" HTTPs for screen capturing!';var SCREEN_COMMON_FAILURE='HTTPs i.e. SSL-based URI is mandatory to use screen capturing.';var ReservedExtensionID='ajhifddimkapgcifgcodmmfdlknahffk'; // if application-developer deployed his own extension on Google App Store
	var useCustomChromeExtensionForScreenCapturing=document.domain.indexOf('webrtc-experiment.com')!=-1;function initHark(args){if(!window.hark){loadScript(args.connection.resources.hark,function(){initHark(args);});return;}var connection=args.connection;var streamedObject=args.streamedObject;var stream=args.stream;var options={};var speechEvents=hark(stream,options);speechEvents.on('speaking',function(){if(connection.onspeaking){connection.onspeaking(streamedObject);}});speechEvents.on('stopped_speaking',function(){if(connection.onsilence){connection.onsilence(streamedObject);}});speechEvents.on('volume_change',function(volume,threshold){if(connection.onvolumechange){connection.onvolumechange(merge({volume:volume,threshold:threshold},streamedObject));}});}attachEventListener=function(video,type,listener,useCapture){video.addEventListener(type,listener,useCapture);};var Plugin=window.PluginRTC||{};window.onPluginRTCInitialized=function(pluginRTCObject){Plugin=pluginRTCObject;MediaStreamTrack=Plugin.MediaStreamTrack;RTCPeerConnection=Plugin.RTCPeerConnection;RTCIceCandidate=Plugin.RTCIceCandidate;RTCSessionDescription=Plugin.RTCSessionDescription;log(isPluginRTC?'Java-Applet':'ActiveX','plugin has been loaded.');};if(!isEmpty(Plugin))window.onPluginRTCInitialized(Plugin); // if IE or Safari
	if(isPluginRTC){loadScript('https://cdn.webrtc-experiment.com/Plugin.EveryWhere.js'); // loadScript('https://cdn.webrtc-experiment.com/Plugin.Temasys.js');
	}var MediaStream=window.MediaStream;if(typeof MediaStream==='undefined'&&typeof webkitMediaStream!=='undefined'){MediaStream=webkitMediaStream;} /*global MediaStream:true */if(typeof MediaStream!=='undefined'&&!('stop' in MediaStream.prototype)){MediaStream.prototype.stop=function(){this.getAudioTracks().forEach(function(track){track.stop();});this.getVideoTracks().forEach(function(track){track.stop();});};}var defaultConstraints={mandatory:{},optional:[]}; /* by @FreCap pull request #41 */var currentUserMediaRequest={streams:[],mutex:false,queueRequests:[]};function getUserMedia(options){if(isPluginRTC){if(!Plugin.getUserMedia){setTimeout(function(){getUserMedia(options);},1000);return;}return Plugin.getUserMedia(options.constraints||{audio:true,video:true},options.onsuccess,options.onerror);}if(currentUserMediaRequest.mutex===true){currentUserMediaRequest.queueRequests.push(options);return;}currentUserMediaRequest.mutex=true;var connection=options.connection; // tools.ietf.org/html/draft-alvestrand-constraints-resolution-00
	var mediaConstraints=options.mediaConstraints||{};var videoConstraints=typeof mediaConstraints.video=='boolean'?mediaConstraints.video:mediaConstraints.video||mediaConstraints;var audioConstraints=typeof mediaConstraints.audio=='boolean'?mediaConstraints.audio:mediaConstraints.audio||defaultConstraints;var n=navigator;var hints=options.constraints||{audio:defaultConstraints,video:defaultConstraints};if(hints.video&&hints.video.mozMediaSource){ // "mozMediaSource" is redundant
	// need to check "mediaSource" instead.
	videoConstraints={};}if(hints.video==true)hints.video=defaultConstraints;if(hints.audio==true)hints.audio=defaultConstraints; // connection.mediaConstraints.audio = false;
	if(typeof audioConstraints=='boolean'&&hints.audio){hints.audio=audioConstraints;} // connection.mediaConstraints.video = false;
	if(typeof videoConstraints=='boolean'&&hints.video){hints.video=videoConstraints;} // connection.mediaConstraints.audio.mandatory = {prop:true};
	var audioMandatoryConstraints=audioConstraints.mandatory;if(!isEmpty(audioMandatoryConstraints)){hints.audio.mandatory=merge(hints.audio.mandatory,audioMandatoryConstraints);} // connection.media.min(320,180);
	// connection.media.max(1920,1080);
	var videoMandatoryConstraints=videoConstraints.mandatory;if(videoMandatoryConstraints){var mandatory={};if(videoMandatoryConstraints.minWidth){mandatory.minWidth=videoMandatoryConstraints.minWidth;}if(videoMandatoryConstraints.minHeight){mandatory.minHeight=videoMandatoryConstraints.minHeight;}if(videoMandatoryConstraints.maxWidth){mandatory.maxWidth=videoMandatoryConstraints.maxWidth;}if(videoMandatoryConstraints.maxHeight){mandatory.maxHeight=videoMandatoryConstraints.maxHeight;}if(videoMandatoryConstraints.minAspectRatio){mandatory.minAspectRatio=videoMandatoryConstraints.minAspectRatio;}if(videoMandatoryConstraints.maxFrameRate){mandatory.maxFrameRate=videoMandatoryConstraints.maxFrameRate;}if(videoMandatoryConstraints.minFrameRate){mandatory.minFrameRate=videoMandatoryConstraints.minFrameRate;}if(mandatory.minWidth&&mandatory.minHeight){ // http://goo.gl/IZVYsj
	var allowed=['1920:1080','1280:720','960:720','640:360','640:480','320:240','320:180'];if(allowed.indexOf(mandatory.minWidth+':'+mandatory.minHeight)==-1||allowed.indexOf(mandatory.maxWidth+':'+mandatory.maxHeight)==-1){error('The min/max width/height constraints you passed "seems" NOT supported.',toStr(mandatory));}if(mandatory.minWidth>mandatory.maxWidth||mandatory.minHeight>mandatory.maxHeight){error('Minimum value must not exceed maximum value.',toStr(mandatory));}if(mandatory.minWidth>=1280&&mandatory.minHeight>=720){warn('Enjoy HD video! min/'+mandatory.minWidth+':'+mandatory.minHeight+', max/'+mandatory.maxWidth+':'+mandatory.maxHeight);}}hints.video.mandatory=merge(hints.video.mandatory,mandatory);}if(videoMandatoryConstraints){hints.video.mandatory=merge(hints.video.mandatory,videoMandatoryConstraints);} // videoConstraints.optional = [{prop:true}];
	if(videoConstraints.optional&&videoConstraints.optional instanceof Array&&videoConstraints.optional.length){hints.video.optional=hints.video.optional?hints.video.optional.concat(videoConstraints.optional):videoConstraints.optional;} // audioConstraints.optional = [{prop:true}];
	if(audioConstraints.optional&&audioConstraints.optional instanceof Array&&audioConstraints.optional.length){hints.audio.optional=hints.audio.optional?hints.audio.optional.concat(audioConstraints.optional):audioConstraints.optional;}if(hints.video.mandatory&&!isEmpty(hints.video.mandatory)&&connection._mediaSources.video){hints.video.optional.forEach(function(video,index){if(video.sourceId==connection._mediaSources.video){delete hints.video.optional[index];}});hints.video.optional=swap(hints.video.optional);hints.video.optional.push({sourceId:connection._mediaSources.video});}if(hints.audio.mandatory&&!isEmpty(hints.audio.mandatory)&&connection._mediaSources.audio){hints.audio.optional.forEach(function(audio,index){if(audio.sourceId==connection._mediaSources.audio){delete hints.audio.optional[index];}});hints.audio.optional=swap(hints.audio.optional);hints.audio.optional.push({sourceId:connection._mediaSources.audio});}if(hints.video&&!hints.video.mozMediaSource&&hints.video.optional&&hints.video.mandatory){if(!hints.video.optional.length&&isEmpty(hints.video.mandatory)){hints.video=true;}}if(isMobileDevice){ // Android fails for some constraints
	// so need to force {audio:true,video:true}
	hints={audio:!!hints.audio,video:!!hints.video};} // connection.mediaConstraints always overrides constraints
	// passed from "captureUserMedia" function.
	// todo: need to verify all possible situations
	log('invoked getUserMedia with constraints:',toStr(hints)); // easy way to match
	var idInstance=JSON.stringify(hints);function streaming(stream,returnBack,streamid){if(!streamid)streamid=getRandomString(); // localStreams object will store stream
	// until it is removed using native-stop method.
	connection.localStreams[streamid]=stream;var video=options.video;if(video){video[isFirefox?'mozSrcObject':'src']=isFirefox?stream:(window.URL||window.webkitURL).createObjectURL(stream);video.play();}options.onsuccess(stream,returnBack,idInstance,streamid);currentUserMediaRequest.streams[idInstance]={stream:stream,streamid:streamid};currentUserMediaRequest.mutex=false;if(currentUserMediaRequest.queueRequests.length)getUserMedia(currentUserMediaRequest.queueRequests.shift());}if(currentUserMediaRequest.streams[idInstance]){streaming(currentUserMediaRequest.streams[idInstance].stream,true,currentUserMediaRequest.streams[idInstance].streamid);}else {n.getMedia=n.webkitGetUserMedia||n.mozGetUserMedia; // http://goo.gl/eETIK4
	n.getMedia(hints,streaming,function(error){options.onerror(error,hints);});}}var RTCSessionDescription=window.RTCSessionDescription||window.mozRTCSessionDescription;var RTCIceCandidate=window.RTCIceCandidate||window.mozRTCIceCandidate;var RTCPeerConnection;if(typeof mozRTCPeerConnection!=='undefined'){RTCPeerConnection=mozRTCPeerConnection;}else if(typeof webkitRTCPeerConnection!=='undefined'){RTCPeerConnection=webkitRTCPeerConnection;}else if(typeof window.RTCPeerConnection!=='undefined'){RTCPeerConnection=window.RTCPeerConnection;}else {console.error('WebRTC 1.0 (RTCPeerConnection) API seems NOT available in this browser.');}function setSdpConstraints(config){var sdpConstraints;var sdpConstraints_mandatory={OfferToReceiveAudio:!!config.OfferToReceiveAudio,OfferToReceiveVideo:!!config.OfferToReceiveVideo};sdpConstraints={mandatory:sdpConstraints_mandatory,optional:[{VoiceActivityDetection:false}]};if(!!navigator.mozGetUserMedia&&firefoxVersion>34){sdpConstraints={OfferToReceiveAudio:!!config.OfferToReceiveAudio,OfferToReceiveVideo:!!config.OfferToReceiveVideo};}return sdpConstraints;}function PeerConnection(){return {create:function(type,options){merge(this,options);var self=this;this.type=type;this.init();this.attachMediaStreams();if(isFirefox&&this.session.data){if(this.session.data&&type=='offer'){this.createDataChannel();}this.getLocalDescription(type);if(this.session.data&&type=='answer'){this.createDataChannel();}}else self.getLocalDescription(type);return this;},getLocalDescription:function(createType){log('(getLocalDescription) peer createType is',createType);if(this.session.inactive&&isNull(this.rtcMultiConnection.waitUntilRemoteStreamStartsFlowing)){ // inactive session returns blank-stream
	this.rtcMultiConnection.waitUntilRemoteStreamStartsFlowing=false;}var self=this;if(createType=='answer'){this.setRemoteDescription(this.offerDescription,createDescription);}else createDescription();function createDescription(){self.connection[createType=='offer'?'createOffer':'createAnswer'](function(sessionDescription){sessionDescription.sdp=self.serializeSdp(sessionDescription.sdp,createType);self.connection.setLocalDescription(sessionDescription);if(self.trickleIce){self.onSessionDescription(sessionDescription,self.streaminfo);}if(sessionDescription.type=='offer'){log('offer sdp',sessionDescription.sdp);}self.prevCreateType=createType;},self.onSdpError,self.constraints);}},serializeSdp:function(sdp,createType){ // it is "connection.processSdp=function(sdp){return sdp;}"
	sdp=this.processSdp(sdp);if(isFirefox)return sdp;if(this.session.inactive&&!this.holdMLine){this.hold=true;if((this.session.screen||this.session.video)&&this.session.audio){this.holdMLine='both';}else if(this.session.screen||this.session.video){this.holdMLine='video';}else if(this.session.audio){this.holdMLine='audio';}}sdp=this.setBandwidth(sdp);if(this.holdMLine=='both'){if(this.hold){this.prevSDP=sdp;sdp=sdp.replace(/a=sendonly|a=recvonly|a=sendrecv/g,'a=inactive');}else if(this.prevSDP){if(!this.session.inactive){ // it means that DTSL key exchange already happened for single or multiple media lines.
	// this block checks, key-exchange must be happened for all media lines.
	sdp=this.prevSDP; // todo: test it: makes sense?
	if(chromeVersion<=35){return sdp;}}}}else if(this.holdMLine=='audio'||this.holdMLine=='video'){sdp=sdp.split('m=');var audio='';var video='';if(sdp[1]&&sdp[1].indexOf('audio')==0){audio='m='+sdp[1];}if(sdp[2]&&sdp[2].indexOf('audio')==0){audio='m='+sdp[2];}if(sdp[1]&&sdp[1].indexOf('video')==0){video='m='+sdp[1];}if(sdp[2]&&sdp[2].indexOf('video')==0){video='m='+sdp[2];}if(this.holdMLine=='audio'){if(this.hold){this.prevSDP=sdp[0]+audio+video;sdp=sdp[0]+audio.replace(/a=sendonly|a=recvonly|a=sendrecv/g,'a=inactive')+video;}else if(this.prevSDP){sdp=this.prevSDP;}}if(this.holdMLine=='video'){if(this.hold){this.prevSDP=sdp[0]+audio+video;sdp=sdp[0]+audio+video.replace(/a=sendonly|a=recvonly|a=sendrecv/g,'a=inactive');}else if(this.prevSDP){sdp=this.prevSDP;}}}if(!this.hold&&this.session.inactive){ // transport.cc&l=852 - http://goo.gl/0FxxqG
	// dtlstransport.h&l=234 - http://goo.gl/7E4sYF
	// http://tools.ietf.org/html/rfc4340
	// From RFC 4145, SDP setup attribute values.
	// http://goo.gl/xETJEp && http://goo.gl/3Wgcau
	if(createType=='offer'){sdp=sdp.replace(/a=setup:passive|a=setup:active|a=setup:holdconn/g,'a=setup:actpass');}else {sdp=sdp.replace(/a=setup:actpass|a=setup:passive|a=setup:holdconn/g,'a=setup:active');} // whilst doing handshake, either media lines were "inactive"
	// or no media lines were present
	sdp=sdp.replace(/a=inactive/g,'a=sendrecv');} // this.session.inactive = false;
	return sdp;},init:function(){this.setConstraints();this.connection=new RTCPeerConnection(this.iceServers,this.optionalArgument);if(this.session.data){log('invoked: createDataChannel');this.createDataChannel();}this.connection.onicecandidate=function(event){if(!event.candidate){if(!self.trickleIce){returnSDP();}return;}if(!self.trickleIce)return;self.onicecandidate(event.candidate);};function returnSDP(){if(self.returnedSDP){self.returnedSDP=false;return;};self.returnedSDP=true;self.onSessionDescription(self.connection.localDescription,self.streaminfo);}this.connection.onaddstream=function(e){log('onaddstream',isPluginRTC?e.stream:toStr(e.stream));self.onaddstream(e.stream,self.session);};this.connection.onremovestream=function(e){self.onremovestream(e.stream);};this.connection.onsignalingstatechange=function(){self.connection&&self.oniceconnectionstatechange({iceConnectionState:self.connection.iceConnectionState,iceGatheringState:self.connection.iceGatheringState,signalingState:self.connection.signalingState});};this.connection.oniceconnectionstatechange=function(){if(!self.connection)return;self.oniceconnectionstatechange({iceConnectionState:self.connection.iceConnectionState,iceGatheringState:self.connection.iceGatheringState,signalingState:self.connection.signalingState});if(self.trickleIce)return;if(self.connection.iceGatheringState=='complete'){log('iceGatheringState',self.connection.iceGatheringState);returnSDP();}};var self=this;},setBandwidth:function(sdp){if(isMobileDevice||isFirefox||!this.bandwidth)return sdp;var bandwidth=this.bandwidth;if(this.session.screen){if(!bandwidth.screen){warn('It seems that you are not using bandwidth for screen. Screen sharing is expected to fail.');}else if(bandwidth.screen<300){warn('It seems that you are using wrong bandwidth value for screen. Screen sharing is expected to fail.');}} // if screen; must use at least 300kbs
	if(bandwidth.screen&&this.session.screen){sdp=sdp.replace(/b=AS([^\r\n]+\r\n)/g,'');sdp=sdp.replace(/a=mid:video\r\n/g,'a=mid:video\r\nb=AS:'+bandwidth.screen+'\r\n');} // remove existing bandwidth lines
	if(bandwidth.audio||bandwidth.video||bandwidth.data){sdp=sdp.replace(/b=AS([^\r\n]+\r\n)/g,'');}if(bandwidth.audio){sdp=sdp.replace(/a=mid:audio\r\n/g,'a=mid:audio\r\nb=AS:'+bandwidth.audio+'\r\n');}if(bandwidth.video){sdp=sdp.replace(/a=mid:video\r\n/g,'a=mid:video\r\nb=AS:'+(this.session.screen?bandwidth.screen:bandwidth.video)+'\r\n');}if(bandwidth.data&&!this.preferSCTP){sdp=sdp.replace(/a=mid:data\r\n/g,'a=mid:data\r\nb=AS:'+bandwidth.data+'\r\n');}return sdp;},setConstraints:function(){var sdpConstraints=setSdpConstraints({OfferToReceiveAudio:!!this.session.audio,OfferToReceiveVideo:!!this.session.video||!!this.session.screen});if(this.sdpConstraints.mandatory){sdpConstraints=setSdpConstraints(this.sdpConstraints.mandatory);}this.constraints=sdpConstraints;if(this.constraints){log('sdp-constraints',toStr(this.constraints));}this.optionalArgument={optional:this.optionalArgument.optional||[],mandatory:this.optionalArgument.mandatory||{}};if(!this.preferSCTP){this.optionalArgument.optional.push({RtpDataChannels:true});}log('optional-argument',toStr(this.optionalArgument));if(!isNull(this.iceServers)){var iceCandidates=this.rtcMultiConnection.candidates;var stun=iceCandidates.stun;var turn=iceCandidates.turn;var host=iceCandidates.host;if(!isNull(iceCandidates.reflexive))stun=iceCandidates.reflexive;if(!isNull(iceCandidates.relay))turn=iceCandidates.relay;if(!host&&!stun&&turn){this.rtcConfiguration.iceTransports='relay';}else if(!host&&!stun&&!turn){this.rtcConfiguration.iceTransports='none';}this.iceServers={iceServers:this.iceServers,iceTransports:this.rtcConfiguration.iceTransports};}else this.iceServers=null;log('rtc-configuration',toStr(this.iceServers));},onSdpError:function(e){var message=toStr(e);if(message&&message.indexOf('RTP/SAVPF Expects at least 4 fields')!=-1){message='It seems that you are trying to interop RTP-datachannels with SCTP. It is not supported!';}error('onSdpError:',message);},onSdpSuccess:function(){log('sdp success');},onMediaError:function(err){error(toStr(err));},setRemoteDescription:function(sessionDescription,onSdpSuccess){if(!sessionDescription)throw 'Remote session description should NOT be NULL.';if(!this.connection)return;log('setting remote description',sessionDescription.type,sessionDescription.sdp);var self=this;this.connection.setRemoteDescription(new RTCSessionDescription(sessionDescription),onSdpSuccess||this.onSdpSuccess,function(error){if(error.search(/STATE_SENTINITIATE|STATE_INPROGRESS/gi)==-1){self.onSdpError(error);}});},addIceCandidate:function(candidate){var self=this;if(isPluginRTC){RTCIceCandidate(candidate,function(iceCandidate){onAddIceCandidate(iceCandidate);});}else onAddIceCandidate(new RTCIceCandidate(candidate));function onAddIceCandidate(iceCandidate){self.connection.addIceCandidate(iceCandidate,function(){log('added:',candidate.sdpMid,candidate.candidate);},function(){error('onIceFailure',arguments,candidate.candidate);});}},createDataChannel:function(channelIdentifier){ // skip 2nd invocation of createDataChannel
	if(this.channels&&this.channels.length)return;var self=this;if(!this.channels)this.channels=[]; // protocol: 'text/chat', preset: true, stream: 16
	// maxRetransmits:0 && ordered:false && outOfOrderAllowed: false
	var dataChannelDict={};if(this.dataChannelDict)dataChannelDict=this.dataChannelDict;if(isChrome&&!this.preferSCTP){dataChannelDict.reliable=false; // Deprecated!
	}log('dataChannelDict',toStr(dataChannelDict));if(this.type=='answer'||isFirefox){this.connection.ondatachannel=function(event){self.setChannelEvents(event.channel);};}if(isChrome&&this.type=='offer'||isFirefox){this.setChannelEvents(this.connection.createDataChannel(channelIdentifier||'channel',dataChannelDict));}},setChannelEvents:function(channel){var self=this;channel.binaryType='arraybuffer';if(this.dataChannelDict.binaryType){channel.binaryType=this.dataChannelDict.binaryType;}channel.onmessage=function(event){self.onmessage(event.data);};var numberOfTimes=0;channel.onopen=function(){channel.push=channel.send;channel.send=function(data){if(self.connection.iceConnectionState=='disconnected'){return;}if(channel.readyState.search(/closing|closed/g)!=-1){return;}if(channel.readyState.search(/connecting|open/g)==-1){return;}if(channel.readyState=='connecting'){numberOfTimes++;return setTimeout(function(){if(numberOfTimes<20){channel.send(data);}else throw 'Number of times exceeded to wait for WebRTC data connection to be opened.';},1000);}try{channel.push(data);}catch(e){numberOfTimes++;warn('Data transmission failed. Re-transmitting..',numberOfTimes,toStr(e));if(numberOfTimes>=20)throw 'Number of times exceeded to resend data packets over WebRTC data channels.';setTimeout(function(){channel.send(data);},100);}};self.onopen(channel);};channel.onerror=function(event){self.onerror(event);};channel.onclose=function(event){self.onclose(event);};this.channels.push(channel);},addStream:function(stream){if(!stream.streamid&&!isIE){stream.streamid=getRandomString();} // todo: maybe need to add isAudio/isVideo/isScreen if missing?
	log('attaching stream:',stream.streamid,isPluginRTC?stream:toStr(stream));this.connection.addStream(stream);this.sendStreamId(stream);this.getStreamInfo();},attachMediaStreams:function(){var streams=this.attachStreams;for(var i=0;i<streams.length;i++){this.addStream(streams[i]);}},getStreamInfo:function(){this.streaminfo='';var streams=this.connection.getLocalStreams();for(var i=0;i<streams.length;i++){if(i==0){this.streaminfo=JSON.stringify({streamid:streams[i].streamid||'',isScreen:!!streams[i].isScreen,isAudio:!!streams[i].isAudio,isVideo:!!streams[i].isVideo,preMuted:streams[i].preMuted||{}});}else {this.streaminfo+='----'+JSON.stringify({streamid:streams[i].streamid||'',isScreen:!!streams[i].isScreen,isAudio:!!streams[i].isAudio,isVideo:!!streams[i].isVideo,preMuted:streams[i].preMuted||{}});}}},recreateOffer:function(renegotiate,callback){log('recreating offer');this.type='offer';this.session=renegotiate; // todo: make sure this doesn't affect renegotiation scenarios
	// this.setConstraints();
	this.onSessionDescription=callback;this.getStreamInfo(); // one can renegotiate data connection in existing audio/video/screen connection!
	if(this.session.data){this.createDataChannel();}this.getLocalDescription('offer');},recreateAnswer:function(sdp,session,callback){ // if(isFirefox) this.create(this.type, this);
	log('recreating answer');this.type='answer';this.session=session; // todo: make sure this doesn't affect renegotiation scenarios
	// this.setConstraints();
	this.onSessionDescription=callback;this.offerDescription=sdp;this.getStreamInfo(); // one can renegotiate data connection in existing audio/video/screen connection!
	if(this.session.data){this.createDataChannel();}this.getLocalDescription('answer');}};}var FileSaver={SaveToDisk:invokeSaveAsDialog};function invokeSaveAsDialog(fileUrl,fileName){ /*
	        if (typeof navigator.msSaveOrOpenBlob !== 'undefined') {
	            return navigator.msSaveOrOpenBlob(file, fileFullName);
	        } else if (typeof navigator.msSaveBlob !== 'undefined') {
	            return navigator.msSaveBlob(file, fileFullName);
	        }
	        */var hyperlink=document.createElement('a');hyperlink.href=fileUrl;hyperlink.target='_blank';hyperlink.download=fileName||fileUrl;if(!!navigator.mozGetUserMedia){hyperlink.onclick=function(){(document.body||document.documentElement).removeChild(hyperlink);};(document.body||document.documentElement).appendChild(hyperlink);}var evt=new MouseEvent('click',{view:window,bubbles:true,cancelable:true});hyperlink.dispatchEvent(evt);if(!navigator.mozGetUserMedia){URL.revokeObjectURL(hyperlink.href);}}var TextSender={send:function(config){var connection=config.connection;if(config.text instanceof ArrayBuffer||config.text instanceof DataView){return config.channel.send(config.text,config._channel);}var channel=config.channel,_channel=config._channel,initialText=config.text,packetSize=connection.chunkSize||1000,textToTransfer='',isobject=false;if(!isString(initialText)){isobject=true;initialText=JSON.stringify(initialText);} // uuid is used to uniquely identify sending instance
	var uuid=getRandomString();var sendingTime=new Date().getTime();sendText(initialText);function sendText(textMessage,text){var data={type:'text',uuid:uuid,sendingTime:sendingTime};if(textMessage){text=textMessage;data.packets=parseInt(text.length/packetSize);}if(text.length>packetSize)data.message=text.slice(0,packetSize);else {data.message=text;data.last=true;data.isobject=isobject;}channel.send(data,_channel);textToTransfer=text.slice(data.message.length);if(textToTransfer.length){setTimeout(function(){sendText(null,textToTransfer);},connection.chunkInterval||100);}}}};function TextReceiver(connection){var content={};function receive(data,userid,extra){ // uuid is used to uniquely identify sending instance
	var uuid=data.uuid;if(!content[uuid])content[uuid]=[];content[uuid].push(data.message);if(data.last){var message=content[uuid].join('');if(data.isobject)message=JSON.parse(message); // latency detection
	var receivingTime=new Date().getTime();var latency=receivingTime-data.sendingTime;var e={data:message,userid:userid,extra:extra,latency:latency};if(message.preRecordedMediaChunk){if(!connection.preRecordedMedias[message.streamerid]){connection.shareMediaFile(null,null,message.streamerid);}connection.preRecordedMedias[message.streamerid].onData(message.chunk);}else if(connection.autoTranslateText){e.original=e.data;connection.Translator.TranslateText(e.data,function(translatedText){e.data=translatedText;connection.onmessage(e);});}else if(message.isPartOfScreen){connection.onpartofscreen(message);}else connection.onmessage(e);delete content[uuid];}}return {receive:receive};} // Last time updated at Sep 25, 2015, 08:32:23
	// Latest file can be found here: https://cdn.webrtc-experiment.com/DetectRTC.js
	// Muaz Khan     - www.MuazKhan.com
	// MIT License   - www.WebRTC-Experiment.com/licence
	// Documentation - github.com/muaz-khan/DetectRTC
	// ____________
	// DetectRTC.js
	// DetectRTC.hasWebcam (has webcam device!)
	// DetectRTC.hasMicrophone (has microphone device!)
	// DetectRTC.hasSpeakers (has speakers!)
	(function(){'use strict';var navigator=window.navigator;if(navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices){ // Firefox 38+ seems having support of enumerateDevices
	// Thanks @xdumaine/enumerateDevices
	navigator.enumerateDevices=function(callback){navigator.mediaDevices.enumerateDevices().then(callback);};}if(typeof navigator!=='undefined'){if(typeof navigator.webkitGetUserMedia!=='undefined'){navigator.getUserMedia=navigator.webkitGetUserMedia;}if(typeof navigator.mozGetUserMedia!=='undefined'){navigator.getUserMedia=navigator.mozGetUserMedia;}}else {navigator={getUserMedia:function(){}};}var isMobileDevice=!!navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile/i);var isEdge=navigator.userAgent.indexOf('Edge')!==-1&&(!!navigator.msSaveOrOpenBlob||!!navigator.msSaveBlob); // this one can also be used:
	// https://www.websocket.org/js/stuff.js (DetectBrowser.js)
	function getBrowserInfo(){var nVer=navigator.appVersion;var nAgt=navigator.userAgent;var browserName=navigator.appName;var fullVersion=''+parseFloat(navigator.appVersion);var majorVersion=parseInt(navigator.appVersion,10);var nameOffset,verOffset,ix; // In Opera, the true version is after 'Opera' or after 'Version'
	if((verOffset=nAgt.indexOf('Opera'))!==-1){browserName='Opera';fullVersion=nAgt.substring(verOffset+6);if((verOffset=nAgt.indexOf('Version'))!==-1){fullVersion=nAgt.substring(verOffset+8);}} // In MSIE, the true version is after 'MSIE' in userAgent
	else if((verOffset=nAgt.indexOf('MSIE'))!==-1){browserName='IE';fullVersion=nAgt.substring(verOffset+5);} // In Chrome, the true version is after 'Chrome'
	else if((verOffset=nAgt.indexOf('Chrome'))!==-1){browserName='Chrome';fullVersion=nAgt.substring(verOffset+7);} // In Safari, the true version is after 'Safari' or after 'Version'
	else if((verOffset=nAgt.indexOf('Safari'))!==-1){browserName='Safari';fullVersion=nAgt.substring(verOffset+7);if((verOffset=nAgt.indexOf('Version'))!==-1){fullVersion=nAgt.substring(verOffset+8);}} // In Firefox, the true version is after 'Firefox'
	else if((verOffset=nAgt.indexOf('Firefox'))!==-1){browserName='Firefox';fullVersion=nAgt.substring(verOffset+8);} // In most other browsers, 'name/version' is at the end of userAgent
	else if((nameOffset=nAgt.lastIndexOf(' ')+1)<(verOffset=nAgt.lastIndexOf('/'))){browserName=nAgt.substring(nameOffset,verOffset);fullVersion=nAgt.substring(verOffset+1);if(browserName.toLowerCase()===browserName.toUpperCase()){browserName=navigator.appName;}}if(isEdge){browserName='Edge'; // fullVersion = navigator.userAgent.split('Edge/')[1];
	fullVersion=parseInt(navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)[2],10);} // trim the fullVersion string at semicolon/space if present
	if((ix=fullVersion.indexOf(';'))!==-1){fullVersion=fullVersion.substring(0,ix);}if((ix=fullVersion.indexOf(' '))!==-1){fullVersion=fullVersion.substring(0,ix);}majorVersion=parseInt(''+fullVersion,10);if(isNaN(majorVersion)){fullVersion=''+parseFloat(navigator.appVersion);majorVersion=parseInt(navigator.appVersion,10);}return {fullVersion:fullVersion,version:majorVersion,name:browserName};}var isMobile={Android:function(){return navigator.userAgent.match(/Android/i);},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i);},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera:function(){return navigator.userAgent.match(/Opera Mini/i);},Windows:function(){return navigator.userAgent.match(/IEMobile/i);},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows();},getOsName:function(){var osName='Unknown OS';if(isMobile.Android()){osName='Android';}if(isMobile.BlackBerry()){osName='BlackBerry';}if(isMobile.iOS()){osName='iOS';}if(isMobile.Opera()){osName='Opera Mini';}if(isMobile.Windows()){osName='Windows';}return osName;}};var osName='Unknown OS';if(isMobile.any()){osName=isMobile.getOsName();}else {if(navigator.appVersion.indexOf('Win')!==-1){osName='Windows';}if(navigator.appVersion.indexOf('Mac')!==-1){osName='MacOS';}if(navigator.appVersion.indexOf('X11')!==-1){osName='UNIX';}if(navigator.appVersion.indexOf('Linux')!==-1){osName='Linux';}}var isCanvasSupportsStreamCapturing=false;var isVideoSupportsStreamCapturing=false;['captureStream','mozCaptureStream','webkitCaptureStream'].forEach(function(item){ // asdf
	if(item in document.createElement('canvas')){isCanvasSupportsStreamCapturing=true;}if(item in document.createElement('video')){isVideoSupportsStreamCapturing=true;}}); // via: https://github.com/diafygi/webrtc-ips
	function DetectLocalIPAddress(callback){getIPs(function(ip){ //local IPs
	if(ip.match(/^(192\.168\.|169\.254\.|10\.|172\.(1[6-9]|2\d|3[01]))/)){callback('Local: '+ip);} //assume the rest are public IPs
	else {callback('Public: '+ip);}});} //get the IP addresses associated with an account
	function getIPs(callback){var ipDuplicates={}; //compatibility for firefox and chrome
	var RTCPeerConnection=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection;var useWebKit=!!window.webkitRTCPeerConnection; // bypass naive webrtc blocking using an iframe
	if(!RTCPeerConnection){var iframe=document.getElementById('iframe');if(!iframe){ //<iframe id="iframe" sandbox="allow-same-origin" style="display: none"></iframe>
	throw 'NOTE: you need to have an iframe in the page right above the script tag.';}var win=iframe.contentWindow;RTCPeerConnection=win.RTCPeerConnection||win.mozRTCPeerConnection||win.webkitRTCPeerConnection;useWebKit=!!win.webkitRTCPeerConnection;} //minimal requirements for data connection
	var mediaConstraints={optional:[{RtpDataChannels:true}]}; //firefox already has a default stun server in about:config
	//    media.peerconnection.default_iceservers =
	//    [{"url": "stun:stun.services.mozilla.com"}]
	var servers; //add same stun server for chrome
	if(useWebKit){servers={iceServers:[{urls:'stun:stun.services.mozilla.com'}]};if(typeof DetectRTC!=='undefined'&&DetectRTC.browser.isFirefox&&DetectRTC.browser.version<=38){servers[0]={url:servers[0].urls};}} //construct a new RTCPeerConnection
	var pc=new RTCPeerConnection(servers,mediaConstraints);function handleCandidate(candidate){ //match just the IP address
	var ipRegex=/([0-9]{1,3}(\.[0-9]{1,3}){3})/;var ipAddress=ipRegex.exec(candidate)[1]; //remove duplicates
	if(ipDuplicates[ipAddress]===undefined){callback(ipAddress);}ipDuplicates[ipAddress]=true;} //listen for candidate events
	pc.onicecandidate=function(ice){ //skip non-candidate events
	if(ice.candidate){handleCandidate(ice.candidate.candidate);}}; //create a bogus data channel
	pc.createDataChannel(''); //create an offer sdp
	pc.createOffer(function(result){ //trigger the stun server request
	pc.setLocalDescription(result,function(){},function(){});},function(){}); //wait for a while to let everything done
	setTimeout(function(){ //read candidate info from local description
	var lines=pc.localDescription.sdp.split('\n');lines.forEach(function(line){if(line.indexOf('a=candidate:')===0){handleCandidate(line);}});},1000);}var MediaDevices=[]; // ---------- Media Devices detection
	var canEnumerate=false; /*global MediaStreamTrack:true */if(typeof MediaStreamTrack!=='undefined'&&'getSources' in MediaStreamTrack){canEnumerate=true;}else if(navigator.mediaDevices&&!!navigator.mediaDevices.enumerateDevices){canEnumerate=true;}var hasMicrophone=canEnumerate;var hasSpeakers=canEnumerate;var hasWebcam=canEnumerate; // http://dev.w3.org/2011/webrtc/editor/getusermedia.html#mediadevices
	// todo: switch to enumerateDevices when landed in canary.
	function checkDeviceSupport(callback){ // This method is useful only for Chrome!
	if(!navigator.enumerateDevices&&window.MediaStreamTrack&&window.MediaStreamTrack.getSources){navigator.enumerateDevices=window.MediaStreamTrack.getSources.bind(window.MediaStreamTrack);}if(!navigator.enumerateDevices&&navigator.enumerateDevices){navigator.enumerateDevices=navigator.enumerateDevices.bind(navigator);}if(!navigator.enumerateDevices){if(callback){callback();}return;}MediaDevices=[];navigator.enumerateDevices(function(devices){devices.forEach(function(_device){var device={};for(var d in _device){device[d]=_device[d];}var skip;MediaDevices.forEach(function(d){if(d.id===device.id){skip=true;}});if(skip){return;} // if it is MediaStreamTrack.getSources
	if(device.kind==='audio'){device.kind='audioinput';}if(device.kind==='video'){device.kind='videoinput';}if(!device.deviceId){device.deviceId=device.id;}if(!device.id){device.id=device.deviceId;}if(!device.label){device.label='Please invoke getUserMedia once.';if(!isHTTPs){device.label='HTTPs is required to get label of this '+device.kind+' device.';}}if(device.kind==='audioinput'||device.kind==='audio'){hasMicrophone=true;}if(device.kind==='audiooutput'){hasSpeakers=true;}if(device.kind==='videoinput'||device.kind==='video'){hasWebcam=true;} // there is no 'videoouput' in the spec.
	MediaDevices.push(device);});if(typeof DetectRTC!=='undefined'){DetectRTC.MediaDevices=MediaDevices;DetectRTC.hasMicrophone=hasMicrophone;DetectRTC.hasSpeakers=hasSpeakers;DetectRTC.hasWebcam=hasWebcam;}if(callback){callback();}});} // check for microphone/camera support!
	checkDeviceSupport();var DetectRTC={}; // ----------
	// DetectRTC.browser.name || DetectRTC.browser.version || DetectRTC.browser.fullVersion
	DetectRTC.browser=getBrowserInfo(); // DetectRTC.isChrome || DetectRTC.isFirefox || DetectRTC.isEdge
	DetectRTC.browser['is'+DetectRTC.browser.name]=true;var isHTTPs=location.protocol==='https:';var isNodeWebkit=!!(window.process&&typeof window.process==='object'&&window.process.versions&&window.process.versions['node-webkit']); // --------- Detect if system supports WebRTC 1.0 or WebRTC 1.1.
	var isWebRTCSupported=false;['webkitRTCPeerConnection','mozRTCPeerConnection','RTCIceGatherer'].forEach(function(item){if(item in window){isWebRTCSupported=true;}});DetectRTC.isWebRTCSupported=isWebRTCSupported; //-------
	DetectRTC.isORTCSupported=typeof RTCIceGatherer!=='undefined'; // --------- Detect if system supports screen capturing API
	var isScreenCapturingSupported=false;if(DetectRTC.browser.isChrome&&DetectRTC.browser.version>=35){isScreenCapturingSupported=true;}else if(DetectRTC.browser.isFirefox&&DetectRTC.browser.version>=34){isScreenCapturingSupported=true;}if(!isHTTPs){isScreenCapturingSupported=false;}DetectRTC.isScreenCapturingSupported=isScreenCapturingSupported; // --------- Detect if WebAudio API are supported
	var webAudio={};['AudioContext','webkitAudioContext','mozAudioContext','msAudioContext'].forEach(function(item){if(webAudio.isSupported&&webAudio.isCreateMediaStreamSourceSupported){return;}if(item in window){webAudio.isSupported=true;if('createMediaStreamSource' in window[item].prototype){webAudio.isCreateMediaStreamSourceSupported=true;}}});DetectRTC.isAudioContextSupported=webAudio.isSupported;DetectRTC.isCreateMediaStreamSourceSupported=webAudio.isCreateMediaStreamSourceSupported; // ---------- Detect if SCTP/RTP channels are supported.
	var isRtpDataChannelsSupported=false;if(DetectRTC.browser.isChrome&&DetectRTC.browser.version>31){isRtpDataChannelsSupported=true;}DetectRTC.isRtpDataChannelsSupported=isRtpDataChannelsSupported;var isSCTPSupportd=false;if(DetectRTC.browser.isFirefox&&DetectRTC.browser.version>28){isSCTPSupportd=true;}else if(DetectRTC.browser.isChrome&&DetectRTC.browser.version>25){isSCTPSupportd=true;}else if(DetectRTC.browser.isOpera&&DetectRTC.browser.version>=11){isSCTPSupportd=true;}DetectRTC.isSctpDataChannelsSupported=isSCTPSupportd; // ---------
	DetectRTC.isMobileDevice=isMobileDevice; // "isMobileDevice" boolean is defined in "getBrowserInfo.js"
	// ------
	DetectRTC.isWebSocketsSupported='WebSocket' in window&&2===window.WebSocket.CLOSING;DetectRTC.isWebSocketsBlocked='Checking';if(DetectRTC.isWebSocketsSupported){var websocket=new WebSocket('wss://echo.websocket.org:443/');websocket.onopen=function(){DetectRTC.isWebSocketsBlocked=false;if(DetectRTC.loadCallback){DetectRTC.loadCallback();}};websocket.onerror=function(){DetectRTC.isWebSocketsBlocked=true;if(DetectRTC.loadCallback){DetectRTC.loadCallback();}};} // ------
	var isGetUserMediaSupported=false;if(navigator.getUserMedia){isGetUserMediaSupported=true;}else if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){isGetUserMediaSupported=true;}if(DetectRTC.browser.isChrome&&DetectRTC.browser.version>=47&&!isHTTPs){DetectRTC.isGetUserMediaSupported='Requires HTTPs';}DetectRTC.isGetUserMediaSupported=isGetUserMediaSupported; // -----------
	DetectRTC.osName=osName; // "osName" is defined in "detectOSName.js"
	// ----------
	DetectRTC.isCanvasSupportsStreamCapturing=isCanvasSupportsStreamCapturing;DetectRTC.isVideoSupportsStreamCapturing=isVideoSupportsStreamCapturing; // ------
	DetectRTC.DetectLocalIPAddress=DetectLocalIPAddress; // -------
	DetectRTC.load=function(callback){this.loadCallback=callback;checkDeviceSupport(callback);};DetectRTC.MediaDevices=MediaDevices;DetectRTC.hasMicrophone=hasMicrophone;DetectRTC.hasSpeakers=hasSpeakers;DetectRTC.hasWebcam=hasWebcam; // ------
	var isSetSinkIdSupported=false;if('setSinkId' in document.createElement('video')){isSetSinkIdSupported=true;}DetectRTC.isSetSinkIdSupported=isSetSinkIdSupported; // -----
	var isRTPSenderReplaceTracksSupported=false;if(DetectRTC.browser.isFirefox /*&& DetectRTC.browser.version > 39*/){ /*global mozRTCPeerConnection:true */if('getSenders' in mozRTCPeerConnection.prototype){isRTPSenderReplaceTracksSupported=true;}}else if(DetectRTC.browser.isChrome){ /*global webkitRTCPeerConnection:true */if('getSenders' in webkitRTCPeerConnection.prototype){isRTPSenderReplaceTracksSupported=true;}}DetectRTC.isRTPSenderReplaceTracksSupported=isRTPSenderReplaceTracksSupported; //------
	var isRemoteStreamProcessingSupported=false;if(DetectRTC.browser.isFirefox&&DetectRTC.browser.version>38){isRemoteStreamProcessingSupported=true;}DetectRTC.isRemoteStreamProcessingSupported=isRemoteStreamProcessingSupported; //-------
	var isApplyConstraintsSupported=false; /*global MediaStreamTrack:true */if(typeof MediaStreamTrack!=='undefined'&&'applyConstraints' in MediaStreamTrack.prototype){isApplyConstraintsSupported=true;}DetectRTC.isApplyConstraintsSupported=isApplyConstraintsSupported; //-------
	var isMultiMonitorScreenCapturingSupported=false;if(DetectRTC.browser.isFirefox&&DetectRTC.browser.version>=43){ // version 43 merely supports platforms for multi-monitors
	// version 44 will support exact multi-monitor selection i.e. you can select any monitor for screen capturing.
	isMultiMonitorScreenCapturingSupported=true;}DetectRTC.isMultiMonitorScreenCapturingSupported=isMultiMonitorScreenCapturingSupported;window.DetectRTC=DetectRTC;})(); // DetectRTC extender
	var screenCallback;DetectRTC.screen={chromeMediaSource:'screen',extensionid:ReservedExtensionID,getSourceId:function(callback){if(!callback)throw '"callback" parameter is mandatory.'; // make sure that chrome extension is installed.
	if(!!DetectRTC.screen.status){onstatus(DetectRTC.screen.status);}else DetectRTC.screen.getChromeExtensionStatus(onstatus);function onstatus(status){if(status=='installed-enabled'){screenCallback=callback;window.postMessage('get-sourceId','*');return;}DetectRTC.screen.chromeMediaSource='screen';callback('No-Response'); // chrome extension isn't available
	}},onMessageCallback:function(data){if(!(isString(data)||!!data.sourceId))return;log('chrome message',data); // "cancel" button is clicked
	if(data=='PermissionDeniedError'){DetectRTC.screen.chromeMediaSource='PermissionDeniedError';if(screenCallback)return screenCallback('PermissionDeniedError');else throw new Error('PermissionDeniedError');} // extension notified his presence
	if(data=='rtcmulticonnection-extension-loaded'){DetectRTC.screen.chromeMediaSource='desktop';if(DetectRTC.screen.onScreenCapturingExtensionAvailable){DetectRTC.screen.onScreenCapturingExtensionAvailable(); // make sure that this event isn't fired multiple times
	DetectRTC.screen.onScreenCapturingExtensionAvailable=null;}} // extension shared temp sourceId
	if(data.sourceId){DetectRTC.screen.sourceId=data.sourceId;if(screenCallback)screenCallback(DetectRTC.screen.sourceId);}},getChromeExtensionStatus:function(extensionid,callback){function _callback(status){DetectRTC.screen.status=status;callback(status);}if(isFirefox)return _callback('not-chrome');if(arguments.length!=2){callback=extensionid;extensionid=this.extensionid;}var image=document.createElement('img');image.src='chrome-extension://'+extensionid+'/icon.png';image.onload=function(){DetectRTC.screen.chromeMediaSource='screen';window.postMessage('are-you-there','*');setTimeout(function(){if(DetectRTC.screen.chromeMediaSource=='screen'){_callback(DetectRTC.screen.chromeMediaSource=='desktop'?'installed-enabled':'installed-disabled' /* if chrome extension isn't permitted for current domain, then it will be installed-disabled all the time even if extension is enabled. */);}else _callback('installed-enabled');},2000);};image.onerror=function(){_callback('not-installed');};}}; // if IE
	if(!window.addEventListener){window.addEventListener=function(el,eventName,eventHandler){if(!el.attachEvent)return;el.attachEvent('on'+eventName,eventHandler);};}function listenEventHandler(eventName,eventHandler){window.removeEventListener(eventName,eventHandler);window.addEventListener(eventName,eventHandler,false);}window.addEventListener('message',function(event){if(event.origin!=window.location.origin){return;}DetectRTC.screen.onMessageCallback(event.data);});function setDefaults(connection){ // www.RTCMultiConnection.org/docs/userid/
	connection.userid=getRandomString(); // www.RTCMultiConnection.org/docs/session/
	connection.session={audio:true,video:true}; // www.RTCMultiConnection.org/docs/maxParticipantsAllowed/
	connection.maxParticipantsAllowed=256; // www.RTCMultiConnection.org/docs/direction/
	// 'many-to-many' / 'one-to-many' / 'one-to-one' / 'one-way'
	connection.direction='many-to-many'; // www.RTCMultiConnection.org/docs/mediaConstraints/
	connection.mediaConstraints={mandatory:{}, // kept for backward compatibility
	optional:[], // kept for backward compatibility
	audio:{mandatory:{},optional:[]},video:{mandatory:{},optional:[]}}; // www.RTCMultiConnection.org/docs/candidates/
	connection.candidates={host:true,stun:true,turn:true};connection.sdpConstraints={}; // as @serhanters proposed in #225
	// it will auto fix "all" renegotiation scenarios
	connection.sdpConstraints.mandatory={OfferToReceiveAudio:true,OfferToReceiveVideo:true};connection.privileges={canStopRemoteStream:false, // user can stop remote streams
	canMuteRemoteStream:false // user can mute remote streams
	};connection.iceProtocols={tcp:true,udp:true}; // www.RTCMultiConnection.org/docs/preferSCTP/
	connection.preferSCTP=isFirefox||chromeVersion>=32?true:false;connection.chunkInterval=isFirefox||chromeVersion>=32?100:500; // 500ms for RTP and 100ms for SCTP
	connection.chunkSize=isFirefox||chromeVersion>=32?13*1000:1000; // 1000 chars for RTP and 13000 chars for SCTP
	// www.RTCMultiConnection.org/docs/fakeDataChannels/
	connection.fakeDataChannels=false;connection.waitUntilRemoteStreamStartsFlowing=null; // NULL == true
	// auto leave on page unload
	connection.leaveOnPageUnload=true; // get ICE-servers from XirSys
	connection.getExternalIceServers=isChrome; // www.RTCMultiConnection.org/docs/UA/
	connection.UA={isFirefox:isFirefox,isChrome:isChrome,isMobileDevice:isMobileDevice,version:isChrome?chromeVersion:firefoxVersion,isNodeWebkit:isNodeWebkit,isSafari:isSafari,isIE:isIE,isOpera:isOpera}; // file queue: to store previous file objects in memory;
	// and stream over newly connected peers
	// www.RTCMultiConnection.org/docs/fileQueue/
	connection.fileQueue={}; // this array is aimed to store all renegotiated streams' session-types
	connection.renegotiatedSessions={}; // www.RTCMultiConnection.org/docs/channels/
	connection.channels={}; // www.RTCMultiConnection.org/docs/extra/
	connection.extra={}; // www.RTCMultiConnection.org/docs/bandwidth/
	connection.bandwidth={screen:300 // 300kbps (dirty workaround)
	}; // www.RTCMultiConnection.org/docs/caniuse/
	connection.caniuse={RTCPeerConnection:DetectRTC.isWebRTCSupported,getUserMedia:!!navigator.webkitGetUserMedia||!!navigator.mozGetUserMedia,AudioContext:DetectRTC.isAudioContextSupported, // there is no way to check whether "getUserMedia" flag is enabled or not!
	ScreenSharing:DetectRTC.isScreenCapturingSupported,RtpDataChannels:DetectRTC.isRtpDataChannelsSupported,SctpDataChannels:DetectRTC.isSctpDataChannelsSupported}; // www.RTCMultiConnection.org/docs/snapshots/
	connection.snapshots={}; // www.WebRTC-Experiment.com/demos/MediaStreamTrack.getSources.html
	connection._mediaSources={}; // www.RTCMultiConnection.org/docs/devices/
	connection.devices={}; // www.RTCMultiConnection.org/docs/language/ (to see list of all supported languages)
	connection.language='en'; // www.RTCMultiConnection.org/docs/autoTranslateText/
	connection.autoTranslateText=false; // please use your own Google Translate API key
	// Google Translate is a paid service.
	connection.googKey='AIzaSyCgB5hmFY74WYB-EoWkhr9cAGr6TiTHrEE';connection.localStreamids=[];connection.localStreams={}; // this object stores pre-recorded media streaming uids
	// multiple pre-recorded media files can be streamed concurrently.
	connection.preRecordedMedias={}; // www.RTCMultiConnection.org/docs/attachStreams/
	connection.attachStreams=[]; // www.RTCMultiConnection.org/docs/detachStreams/
	connection.detachStreams=[];connection.optionalArgument={optional:[{DtlsSrtpKeyAgreement:true},{googImprovedWifiBwe:true},{googScreencastMinBitrate:300}],mandatory:{}};connection.dataChannelDict={}; // www.RTCMultiConnection.org/docs/dontAttachStream/
	connection.dontAttachStream=false; // www.RTCMultiConnection.org/docs/dontCaptureUserMedia/
	connection.dontCaptureUserMedia=false; // this feature added to keep users privacy and 
	// make sure HTTPs pages NEVER auto capture users media
	// isChrome && location.protocol == 'https:'
	connection.preventSSLAutoAllowed=false;connection.autoReDialOnFailure=true;connection.isInitiator=false; // access DetectRTC.js features directly!
	connection.DetectRTC=DetectRTC; // you can falsify it to merge all ICE in SDP and share only SDP!
	// such mechanism is useful for SIP/XMPP and XMLHttpRequest signaling
	// bug: renegotiation fails if "trickleIce" is false
	connection.trickleIce=true; // this object stores list of all sessions in current channel
	connection.sessionDescriptions={}; // this object stores current user's session-description
	// it is set only for initiator
	// it is set as soon as "open" method is invoked.
	connection.sessionDescription=null; // resources used in RTCMultiConnection
	connection.resources={RecordRTC:'https://cdn.webrtc-experiment.com/RecordRTC.js',PreRecordedMediaStreamer:'https://cdn.webrtc-experiment.com/PreRecordedMediaStreamer.js',customGetUserMediaBar:'https://cdn.webrtc-experiment.com/navigator.customGetUserMediaBar.js',html2canvas:'https://cdn.webrtc-experiment.com/screenshot.js',hark:'https://cdn.webrtc-experiment.com/hark.js',firebase:'https://cdn.webrtc-experiment.com/firebase.js',firebaseio:'https://webrtc-experiment.firebaseIO.com/',muted:'https://cdn.webrtc-experiment.com/images/muted.png',getConnectionStats:'https://cdn.webrtc-experiment.com/getConnectionStats.js',FileBufferReader:'https://cdn.webrtc-experiment.com/FileBufferReader.js'}; // www.RTCMultiConnection.org/docs/body/
	connection.body=document.body||document.documentElement; // www.RTCMultiConnection.org/docs/peers/
	connection.peers={}; // www.RTCMultiConnection.org/docs/firebase/
	connection.firebase='chat';connection.numberOfSessions=0;connection.numberOfConnectedUsers=0; // by default, data-connections will always be getting
	// FileBufferReader.js if absent.
	connection.enableFileSharing=true; // www.RTCMultiConnection.org/docs/autoSaveToDisk/
	// to make sure file-saver dialog is not invoked.
	connection.autoSaveToDisk=false;connection.processSdp=function(sdp){ // process sdp here
	return sdp;}; // www.RTCMultiConnection.org/docs/onmessage/
	connection.onmessage=function(e){log('onmessage',toStr(e));}; // www.RTCMultiConnection.org/docs/onopen/
	connection.onopen=function(e){log('Data connection is opened between you and',e.userid);}; // www.RTCMultiConnection.org/docs/onerror/
	connection.onerror=function(e){error(onerror,toStr(e));}; // www.RTCMultiConnection.org/docs/onclose/
	connection.onclose=function(e){warn('onclose',toStr(e)); // todo: should we use "stop" or "remove"?
	// BTW, it is remote user!
	connection.streams.remove({userid:e.userid});};var progressHelper={}; // www.RTCMultiConnection.org/docs/onFileStart/
	connection.onFileStart=function(file){var div=document.createElement('div');div.title=file.name;div.innerHTML='<label>0%</label> <progress></progress>';connection.body.insertBefore(div,connection.body.firstChild);progressHelper[file.uuid]={div:div,progress:div.querySelector('progress'),label:div.querySelector('label')};progressHelper[file.uuid].progress.max=file.maxChunks;}; // www.RTCMultiConnection.org/docs/onFileProgress/
	connection.onFileProgress=function(chunk){var helper=progressHelper[chunk.uuid];if(!helper)return;helper.progress.value=chunk.currentPosition||chunk.maxChunks||helper.progress.max;updateLabel(helper.progress,helper.label);}; // www.RTCMultiConnection.org/docs/onFileEnd/
	connection.onFileEnd=function(file){if(progressHelper[file.uuid])progressHelper[file.uuid].div.innerHTML='<a href="'+file.url+'" target="_blank" download="'+file.name+'">'+file.name+'</a>'; // for backward compatibility
	if(connection.onFileSent||connection.onFileReceived){if(connection.onFileSent)connection.onFileSent(file,file.uuid);if(connection.onFileReceived)connection.onFileReceived(file.name,file);}};function updateLabel(progress,label){if(progress.position==-1)return;var position=+progress.position.toFixed(2).split('.')[1]||100;label.innerHTML=position+'%';} // www.RTCMultiConnection.org/docs/onstream/
	connection.onstream=function(e){connection.body.insertBefore(e.mediaElement,connection.body.firstChild);}; // www.RTCMultiConnection.org/docs/onStreamEndedHandler/
	connection.onstreamended=function(e){log('onStreamEndedHandler:',e);if(!e.mediaElement){return warn('Event.mediaElement is undefined',e);}if(!e.mediaElement.parentNode){e.mediaElement=document.getElementById(e.streamid);if(!e.mediaElement){return warn('Event.mediaElement is undefined',e);}if(!e.mediaElement.parentNode){return warn('Event.mediElement.parentNode is null.',e);}}e.mediaElement.parentNode.removeChild(e.mediaElement);}; // todo: need to write documentation link
	connection.onSessionClosed=function(session){if(session.isEjected){warn(session.userid,'ejected you.');}else warn('Session has been closed.',session);}; // www.RTCMultiConnection.org/docs/onmute/
	connection.onmute=function(e){if(e.isVideo&&e.mediaElement){e.mediaElement.pause();e.mediaElement.setAttribute('poster',e.snapshot||connection.resources.muted);}if(e.isAudio&&e.mediaElement){e.mediaElement.muted=true;}}; // www.RTCMultiConnection.org/docs/onunmute/
	connection.onunmute=function(e){if(e.isVideo&&e.mediaElement){e.mediaElement.play();e.mediaElement.removeAttribute('poster');}if(e.isAudio&&e.mediaElement){e.mediaElement.muted=false;}}; // www.RTCMultiConnection.org/docs/onleave/
	connection.onleave=function(e){log('onleave',toStr(e));};connection.token=getRandomString;connection.peers[connection.userid]={drop:function(){connection.drop();},renegotiate:function(){},addStream:function(){},hold:function(){},unhold:function(){},changeBandwidth:function(){},sharePartOfScreen:function(){}};connection._skip=['stop','mute','unmute','_private','_selectStreams','selectFirst','selectAll','remove']; // www.RTCMultiConnection.org/docs/streams/
	connection.streams={mute:function(session){this._private(session,true);},unmute:function(session){this._private(session,false);},_private:function(session,enabled){if(session&&!isString(session)){for(var stream in this){if(connection._skip.indexOf(stream)==-1){_muteOrUnMute(this[stream],session,enabled);}}function _muteOrUnMute(stream,session,isMute){if(session.local&&stream.type!='local')return;if(session.remote&&stream.type!='remote')return;if(session.isScreen&&!stream.isScreen)return;if(session.isAudio&&!stream.isAudio)return;if(session.isVideo&&!stream.isVideo)return;if(isMute)stream.mute(session);else stream.unmute(session);}return;} // implementation from #68
	for(var stream in this){if(connection._skip.indexOf(stream)==-1){this[stream]._private(session,enabled);}}},stop:function(type){var _stream;for(var stream in this){if(connection._skip.indexOf(stream)==-1){_stream=this[stream];if(!type)_stream.stop();else if(isString(type)){ // connection.streams.stop('screen');
	var config={};config[type]=true;_stopStream(_stream,config);}else _stopStream(_stream,type);}}function _stopStream(_stream,config){ // connection.streams.stop({ remote: true, userid: 'remote-userid' });
	if(config.userid&&_stream.userid!=config.userid)return;if(config.local&&_stream.type!='local')return;if(config.remote&&_stream.type!='remote')return;if(config.screen&&!!_stream.isScreen){_stream.stop();}if(config.audio&&!!_stream.isAudio){_stream.stop();}if(config.video&&!!_stream.isVideo){_stream.stop();} // connection.streams.stop('local');
	if(!config.audio&&!config.video&&!config.screen){_stream.stop();}}},remove:function(type){var _stream;for(var stream in this){if(connection._skip.indexOf(stream)==-1){_stream=this[stream];if(!type)_stopAndRemoveStream(_stream,{local:true,remote:true});else if(isString(type)){ // connection.streams.stop('screen');
	var config={};config[type]=true;_stopAndRemoveStream(_stream,config);}else _stopAndRemoveStream(_stream,type);}}function _stopAndRemoveStream(_stream,config){ // connection.streams.remove({ remote: true, userid: 'remote-userid' });
	if(config.userid&&_stream.userid!=config.userid)return;if(config.local&&_stream.type!='local')return;if(config.remote&&_stream.type!='remote')return;if(config.screen&&!!_stream.isScreen){endStream(_stream);}if(config.audio&&!!_stream.isAudio){endStream(_stream);}if(config.video&&!!_stream.isVideo){endStream(_stream);} // connection.streams.remove('local');
	if(!config.audio&&!config.video&&!config.screen){endStream(_stream);}}function endStream(_stream){onStreamEndedHandler(_stream,connection);delete connection.streams[_stream.streamid];}},selectFirst:function(args){return this._selectStreams(args,false);},selectAll:function(args){return this._selectStreams(args,true);},_selectStreams:function(args,all){if(!args||isString(args)||isEmpty(args))throw 'Invalid arguments.'; // if userid is used then both local/remote shouldn't be auto-set
	if(isNull(args.local)&&isNull(args.remote)&&isNull(args.userid)){args.local=args.remote=true;}if(!args.isAudio&&!args.isVideo&&!args.isScreen){args.isAudio=args.isVideo=args.isScreen=true;}var selectedStreams=[];for(var stream in this){if(connection._skip.indexOf(stream)==-1&&(stream=this[stream])&&(args.local&&stream.type=='local'||args.remote&&stream.type=='remote'||args.userid&&stream.userid==args.userid)){if(args.isVideo&&stream.isVideo){selectedStreams.push(stream);}if(args.isAudio&&stream.isAudio){selectedStreams.push(stream);}if(args.isScreen&&stream.isScreen){selectedStreams.push(stream);}}}return !!all?selectedStreams:selectedStreams[0];}};var iceServers=[];iceServers.push({url:'stun:stun.l.google.com:19302'});iceServers.push({url:'stun:stun.anyfirewall.com:3478'});iceServers.push({url:'turn:turn.bistri.com:80',credential:'homeo',username:'homeo'});iceServers.push({url:'turn:turn.anyfirewall.com:443?transport=tcp',credential:'webrtc',username:'webrtc'});connection.iceServers=iceServers;connection.rtcConfiguration={iceServers:null,iceTransports:'all', // none || relay || all - ref: http://goo.gl/40I39K
	peerIdentity:false}; // www.RTCMultiConnection.org/docs/media/
	connection.media={min:function(width,height){if(!connection.mediaConstraints.video)return;if(!connection.mediaConstraints.video.mandatory){connection.mediaConstraints.video.mandatory={};}connection.mediaConstraints.video.mandatory.minWidth=width;connection.mediaConstraints.video.mandatory.minHeight=height;},max:function(width,height){if(!connection.mediaConstraints.video)return;if(!connection.mediaConstraints.video.mandatory){connection.mediaConstraints.video.mandatory={};}connection.mediaConstraints.video.mandatory.maxWidth=width;connection.mediaConstraints.video.mandatory.maxHeight=height;}};connection._getStream=function(event){var resultingObject=merge({sockets:event.socket?[event.socket]:[]},event);resultingObject.stop=function(){var self=this;self.sockets.forEach(function(socket){if(self.type=='local'){socket.send({streamid:self.streamid,stopped:true});}if(self.type=='remote'){socket.send({promptStreamStop:true,streamid:self.streamid});}});if(self.type=='remote')return;var stream=self.stream;if(stream)self.rtcMultiConnection.stopMediaStream(stream);};resultingObject.mute=function(session){this.muted=true;this._private(session,true);};resultingObject.unmute=function(session){this.muted=false;this._private(session,false);};function muteOrUnmuteLocally(session,isPause,mediaElement){if(!mediaElement)return;var lastPauseState=mediaElement.onpause;var lastPlayState=mediaElement.onplay;mediaElement.onpause=mediaElement.onplay=function(){};if(isPause)mediaElement.pause();else mediaElement.play();mediaElement.onpause=lastPauseState;mediaElement.onplay=lastPlayState;}resultingObject._private=function(session,enabled){if(session&&!isNull(session.sync)&&session.sync==false){muteOrUnmuteLocally(session,enabled,this.mediaElement);return;}muteOrUnmute({root:this,session:session,enabled:enabled,stream:this.stream});};resultingObject.startRecording=function(session){var self=this;if(!session){session={audio:true,video:true};}if(isString(session)){session={audio:session=='audio',video:session=='video'};}if(!window.RecordRTC){return loadScript(self.rtcMultiConnection.resources.RecordRTC,function(){self.startRecording(session);});}log('started recording session',session);self.videoRecorder=self.audioRecorder=null;if(isFirefox){ // firefox supports both audio/video recording in single webm file
	if(self.stream.getAudioTracks().length&&self.stream.getVideoTracks().length){self.videoRecorder=RecordRTC(self.stream,{type:'video'});}else if(session.video){self.videoRecorder=RecordRTC(self.stream,{type:'video'});}else if(session.audio){self.audioRecorder=RecordRTC(self.stream,{type:'audio'});}}else if(isChrome){ // chrome >= 48 supports MediaRecorder API
	// MediaRecorder API can record remote audio+video streams as well!
	if(isMediaRecorderCompatible()&&connection.DetectRTC.browser.version>=50&&self.stream.getAudioTracks().length&&self.stream.getVideoTracks().length){self.videoRecorder=RecordRTC(self.stream,{type:'video'});}else if(isMediaRecorderCompatible()&&connection.DetectRTC.browser.version>=50){if(session.video){self.videoRecorder=RecordRTC(self.stream,{type:'video'});}else if(session.audio){self.audioRecorder=RecordRTC(self.stream,{type:'audio'});}}else { // chrome supports recording in two separate files: WAV and WebM
	if(session.video){self.videoRecorder=RecordRTC(self.stream,{type:'video'});}if(session.audio){self.audioRecorder=RecordRTC(self.stream,{type:'audio'});}}}if(self.audioRecorder){self.audioRecorder.startRecording();}if(self.videoRecorder)self.videoRecorder.startRecording();};resultingObject.stopRecording=function(callback,session){if(!session){session={audio:true,video:true};}if(isString(session)){session={audio:session=='audio',video:session=='video'};}log('stopped recording session',session);var self=this;if(session.audio&&self.audioRecorder){self.audioRecorder.stopRecording(function(){if(session.video&&self.videoRecorder){self.videoRecorder.stopRecording(function(){callback({audio:self.audioRecorder.getBlob(),video:self.videoRecorder.getBlob()});});}else callback({audio:self.audioRecorder.getBlob()});});}else if(session.video&&self.videoRecorder){self.videoRecorder.stopRecording(function(){callback({video:self.videoRecorder.getBlob()});});}};resultingObject.takeSnapshot=function(callback){takeSnapshot({mediaElement:this.mediaElement,userid:this.userid,connection:connection,callback:callback});}; // redundant: kept only for backward compatibility
	resultingObject.streamObject=resultingObject;return resultingObject;}; // new RTCMultiConnection().set({properties}).connect()
	connection.set=function(properties){for(var property in properties){this[property]=properties[property];}return this;}; // www.RTCMultiConnection.org/docs/onMediaError/
	connection.onMediaError=function(event){error('name',event.name);error('constraintName',toStr(event.constraintName));error('message',event.message);error('original session',event.session);}; // www.RTCMultiConnection.org/docs/takeSnapshot/
	connection.takeSnapshot=function(userid,callback){takeSnapshot({userid:userid,connection:connection,callback:callback});};connection.saveToDisk=function(blob,fileName){if(blob.size&&blob.type)FileSaver.SaveToDisk(URL.createObjectURL(blob),fileName||blob.name||blob.type.replace('/','-')+blob.type.split('/')[1]);else FileSaver.SaveToDisk(blob,fileName);}; // www.RTCMultiConnection.org/docs/selectDevices/
	connection.selectDevices=function(device1,device2){if(device1)select(this.devices[device1]);if(device2)select(this.devices[device2]);function select(device){if(!device)return;connection._mediaSources[device.kind]=device.id;}}; // www.RTCMultiConnection.org/docs/getDevices/
	connection.getDevices=function(callback){ // if, not yet fetched.
	if(!DetectRTC.MediaDevices.length){return setTimeout(function(){connection.getDevices(callback);},1000);} // loop over all audio/video input/output devices
	DetectRTC.MediaDevices.forEach(function(device){connection.devices[device.deviceId]=device;});if(callback)callback(connection.devices);};connection.getMediaDevices=connection.enumerateDevices=function(callback){if(!callback)throw 'callback is mandatory.';connection.getDevices(function(){callback(connection.DetectRTC.MediaDevices);});}; // www.RTCMultiConnection.org/docs/onCustomMessage/
	connection.onCustomMessage=function(message){log('Custom message',message);}; // www.RTCMultiConnection.org/docs/ondrop/
	connection.ondrop=function(droppedBy){log('Media connection is dropped by '+droppedBy);}; // www.RTCMultiConnection.org/docs/drop/
	connection.drop=function(config){config=config||{};connection.attachStreams=[]; // "drop" should detach all local streams
	for(var stream in connection.streams){if(connection._skip.indexOf(stream)==-1){stream=connection.streams[stream];if(stream.type=='local'){connection.detachStreams.push(stream.streamid);onStreamEndedHandler(stream,connection);}else onStreamEndedHandler(stream,connection);}} // www.RTCMultiConnection.org/docs/sendCustomMessage/
	connection.sendCustomMessage({drop:true,dontRenegotiate:isNull(config.renegotiate)?true:config.renegotiate});}; // www.RTCMultiConnection.org/docs/Translator/
	connection.Translator={TranslateText:function(text,callback){ // if(location.protocol === 'https:') return callback(text);
	var newScript=document.createElement('script');newScript.type='text/javascript';var sourceText=encodeURIComponent(text); // escape
	var randomNumber='method'+connection.token();window[randomNumber]=function(response){if(response.data&&response.data.translations[0]&&callback){callback(response.data.translations[0].translatedText);}if(response.error&&response.error.message=='Daily Limit Exceeded'){warn('Text translation failed. Error message: "Daily Limit Exceeded."'); // returning original text
	callback(text);}};var source='https://www.googleapis.com/language/translate/v2?key='+connection.googKey+'&target='+(connection.language||'en-US')+'&callback=window.'+randomNumber+'&q='+sourceText;newScript.src=source;document.getElementsByTagName('head')[0].appendChild(newScript);}}; // you can easily override it by setting it NULL!
	connection.setDefaultEventsForMediaElement=function(mediaElement,streamid){mediaElement.onpause=function(){if(connection.streams[streamid]&&!connection.streams[streamid].muted){connection.streams[streamid].mute();}}; // todo: need to make sure that "onplay" EVENT doesn't play self-voice!
	mediaElement.onplay=function(){if(connection.streams[streamid]&&connection.streams[streamid].muted){connection.streams[streamid].unmute();}};var volumeChangeEventFired=false;mediaElement.onvolumechange=function(){if(!volumeChangeEventFired){volumeChangeEventFired=true;connection.streams[streamid]&&setTimeout(function(){var root=connection.streams[streamid];connection.streams[streamid].sockets.forEach(function(socket){socket.send({streamid:root.streamid,isVolumeChanged:true,volume:mediaElement.volume});});volumeChangeEventFired=false;},2000);}};}; // www.RTCMultiConnection.org/docs/onMediaFile/
	connection.onMediaFile=function(e){log('onMediaFile',e);connection.body.appendChild(e.mediaElement);}; // www.RTCMultiConnection.org/docs/shareMediaFile/
	// this method handles pre-recorded media streaming
	connection.shareMediaFile=function(file,video,streamerid){streamerid=streamerid||connection.token();if(!PreRecordedMediaStreamer){loadScript(connection.resources.PreRecordedMediaStreamer,function(){connection.shareMediaFile(file,video,streamerid);});return streamerid;}return PreRecordedMediaStreamer.shareMediaFile({file:file,video:video,streamerid:streamerid,connection:connection});}; // www.RTCMultiConnection.org/docs/onpartofscreen/
	connection.onpartofscreen=function(e){var image=document.createElement('img');image.src=e.screenshot;connection.body.appendChild(image);};connection.skipLogs=function(){log=error=warn=function(){};}; // www.RTCMultiConnection.org/docs/hold/
	connection.hold=function(mLine){for(var peer in connection.peers){connection.peers[peer].hold(mLine);}}; // www.RTCMultiConnection.org/docs/onhold/
	connection.onhold=function(track){log('onhold',track);if(track.kind!='audio'){track.mediaElement.pause();track.mediaElement.setAttribute('poster',track.screenshot||connection.resources.muted);}if(track.kind=='audio'){track.mediaElement.muted=true;}}; // www.RTCMultiConnection.org/docs/unhold/
	connection.unhold=function(mLine){for(var peer in connection.peers){connection.peers[peer].unhold(mLine);}}; // www.RTCMultiConnection.org/docs/onunhold/
	connection.onunhold=function(track){log('onunhold',track);if(track.kind!='audio'){track.mediaElement.play();track.mediaElement.removeAttribute('poster');}if(track.kind!='audio'){track.mediaElement.muted=false;}};connection.sharePartOfScreen=function(args){var lastScreenshot='';function partOfScreenCapturer(){ // if stopped
	if(connection.partOfScreen&&!connection.partOfScreen.sharing){return;}capturePartOfScreen({element:args.element,connection:connection,callback:function(screenshot){ // don't share repeated content
	if(screenshot!=lastScreenshot){lastScreenshot=screenshot;for(var channel in connection.channels){connection.channels[channel].send({screenshot:screenshot,isPartOfScreen:true});}} // "once" can be used to share single screenshot
	!args.once&&setTimeout(partOfScreenCapturer,args.interval||200);}});}partOfScreenCapturer();connection.partOfScreen=merge({sharing:true},args);};connection.pausePartOfScreenSharing=function(){for(var peer in connection.peers){connection.peers[peer].pausePartOfScreenSharing=true;}if(connection.partOfScreen){connection.partOfScreen.sharing=false;}};connection.resumePartOfScreenSharing=function(){for(var peer in connection.peers){connection.peers[peer].pausePartOfScreenSharing=false;}if(connection.partOfScreen){connection.partOfScreen.sharing=true;}};connection.stopPartOfScreenSharing=function(){for(var peer in connection.peers){connection.peers[peer].stopPartOfScreenSharing=true;}if(connection.partOfScreen){connection.partOfScreen.sharing=false;}};connection.takeScreenshot=function(element,callback){if(!element||!callback)throw 'Invalid number of arguments.';if(!window.html2canvas){return loadScript(connection.resources.html2canvas,function(){connection.takeScreenshot(element);});}if(isString(element)){element=document.querySelector(element);if(!element)element=document.getElementById(element);}if(!element)throw 'HTML Element is inaccessible!'; // html2canvas.js is used to take screenshots
	html2canvas(element,{onrendered:function(canvas){callback(canvas.toDataURL());}});}; // this event is fired when RTCMultiConnection detects that chrome extension
	// for screen capturing is installed and available
	connection.onScreenCapturingExtensionAvailable=function(){log('It seems that screen capturing extension is installed and available on your system!');};if(!isPluginRTC&&DetectRTC.screen.onScreenCapturingExtensionAvailable){DetectRTC.screen.onScreenCapturingExtensionAvailable=function(){connection.onScreenCapturingExtensionAvailable();};}connection.changeBandwidth=function(bandwidth){for(var peer in connection.peers){connection.peers[peer].changeBandwidth(bandwidth);}};connection.convertToAudioStream=function(mediaStream){convertToAudioStream(mediaStream);};connection.onstatechange=function(state){log('on:state:change ('+state.userid+'):',state.name+':',state.reason||'');};connection.onfailed=function(event){if(!event.peer.numOfRetries)event.peer.numOfRetries=0;event.peer.numOfRetries++;error('ICE connectivity check is failed. Renegotiating peer connection.');event.peer.numOfRetries<2&&event.peer.renegotiate();if(event.peer.numOfRetries>=2)event.peer.numOfRetries=0;};connection.onconnected=function(event){ // event.peer.addStream || event.peer.getConnectionStats
	log('Peer connection has been established between you and',event.userid);};connection.ondisconnected=function(event){error('Peer connection seems has been disconnected between you and',event.userid);if(isEmpty(connection.channels))return;if(!connection.channels[event.userid])return; // use WebRTC data channels to detect user's presence
	connection.channels[event.userid].send({checkingPresence:true}); // wait 5 seconds, if target peer didn't response, simply disconnect
	setTimeout(function(){ // iceConnectionState == 'disconnected' occurred out of low-bandwidth
	// or internet connectivity issues
	if(connection.peers[event.userid].connected){delete connection.peers[event.userid].connected;return;} // to make sure this user's all remote streams are removed.
	connection.streams.remove({remote:true,userid:event.userid});connection.remove(event.userid);},3000);};connection.onstreamid=function(event){ // event.isScreen || event.isVideo || event.isAudio
	log('got remote streamid',event.streamid,'from',event.userid);};connection.stopMediaStream=function(mediaStream){if(!mediaStream)throw 'MediaStream argument is mandatory.';if(connection.keepStreamsOpened){if(mediaStream.onended)mediaStream.onended();return;} // remove stream from "localStreams" object
	// when native-stop method invoked.
	if(connection.localStreams[mediaStream.streamid]){delete connection.localStreams[mediaStream.streamid];}if(isFirefox){ // Firefox don't yet support onended for any stream (remote/local)
	if(mediaStream.onended)mediaStream.onended();} // Latest firefox does support mediaStream.getAudioTrack but doesn't support stop on MediaStreamTrack
	var checkForMediaStreamTrackStop=Boolean((mediaStream.getAudioTracks||mediaStream.getVideoTracks)&&(mediaStream.getAudioTracks()[0]&&!mediaStream.getAudioTracks()[0].stop||mediaStream.getVideoTracks()[0]&&!mediaStream.getVideoTracks()[0].stop));if(!mediaStream.getAudioTracks||checkForMediaStreamTrackStop){if(mediaStream.stop){mediaStream.stop();}return;}if(mediaStream.getAudioTracks().length&&mediaStream.getAudioTracks()[0].stop){mediaStream.getAudioTracks().forEach(function(track){track.stop();});}if(mediaStream.getVideoTracks().length&&mediaStream.getVideoTracks()[0].stop){mediaStream.getVideoTracks().forEach(function(track){track.stop();});}};connection.changeBandwidth=function(bandwidth){if(!bandwidth||isString(bandwidth)||isEmpty(bandwidth)){throw 'Invalid "bandwidth" arguments.';}forEach(connection.peers,function(peer){peer.peer.bandwidth=bandwidth;});connection.renegotiate();}; // www.RTCMultiConnection.org/docs/openSignalingChannel/
	// http://goo.gl/uvoIcZ
	connection.openSignalingChannel=function(config){ // make sure firebase.js is loaded
	if(!window.Firebase){return loadScript(connection.resources.firebase,function(){connection.openSignalingChannel(config);});}var channel=config.channel||connection.channel;if(connection.firebase){ // for custom firebase instances
	connection.resources.firebaseio=connection.resources.firebaseio.replace('//chat.','//'+connection.firebase+'.');}var firebase=new Firebase(connection.resources.firebaseio+channel);firebase.channel=channel;firebase.on('child_added',function(data){config.onmessage(data.val());});firebase.send=function(data){ // a quick dirty workaround to make sure firebase
	// shouldn't fail for NULL values.
	for(var prop in data){if(isNull(data[prop])||typeof data[prop]=='function'){data[prop]=false;}}this.push(data);};if(!connection.socket)connection.socket=firebase;firebase.onDisconnect().remove();setTimeout(function(){config.callback(firebase);},1);};connection.Plugin=Plugin;}})();

/***/ },
/* 226 */
/***/ function(module, exports) {

	// Version: 3.6.7
	(function () {
	  /*
	  CryptoJS v3.1.2
	  code.google.com/p/crypto-js
	  (c) 2009-2013 by Jeff Mott. All rights reserved.
	  code.google.com/p/crypto-js/wiki/License
	  */
	  var CryptoJS = CryptoJS || function (h, s) {
	    var f = {},
	        g = f.lib = {},
	        q = function () {},
	        m = g.Base = { extend: function (a) {
	        q.prototype = this;var c = new q();a && c.mixIn(a);c.hasOwnProperty("init") || (c.init = function () {
	          c.$super.init.apply(this, arguments);
	        });c.init.prototype = c;c.$super = this;return c;
	      }, create: function () {
	        var a = this.extend();a.init.apply(a, arguments);return a;
	      }, init: function () {}, mixIn: function (a) {
	        for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);a.hasOwnProperty("toString") && (this.toString = a.toString);
	      }, clone: function () {
	        return this.init.prototype.extend(this);
	      } },
	        r = g.WordArray = m.extend({ init: function (a, c) {
	        a = this.words = a || [];this.sigBytes = c != s ? c : 4 * a.length;
	      }, toString: function (a) {
	        return (a || k).stringify(this);
	      }, concat: function (a) {
	        var c = this.words,
	            d = a.words,
	            b = this.sigBytes;a = a.sigBytes;this.clamp();if (b % 4) for (var e = 0; e < a; e++) c[b + e >>> 2] |= (d[e >>> 2] >>> 24 - 8 * (e % 4) & 255) << 24 - 8 * ((b + e) % 4);else if (65535 < d.length) for (e = 0; e < a; e += 4) c[b + e >>> 2] = d[e >>> 2];else c.push.apply(c, d);this.sigBytes += a;return this;
	      }, clamp: function () {
	        var a = this.words,
	            c = this.sigBytes;a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);a.length = h.ceil(c / 4);
	      }, clone: function () {
	        var a = m.clone.call(this);a.words = this.words.slice(0);return a;
	      }, random: function (a) {
	        for (var c = [], d = 0; d < a; d += 4) c.push(4294967296 * h.random() | 0);return new r.init(c, a);
	      } }),
	        l = f.enc = {},
	        k = l.Hex = { stringify: function (a) {
	        var c = a.words;a = a.sigBytes;for (var d = [], b = 0; b < a; b++) {
	          var e = c[b >>> 2] >>> 24 - 8 * (b % 4) & 255;d.push((e >>> 4).toString(16));d.push((e & 15).toString(16));
	        }return d.join("");
	      }, parse: function (a) {
	        for (var c = a.length, d = [], b = 0; b < c; b += 2) d[b >>> 3] |= parseInt(a.substr(b, 2), 16) << 24 - 4 * (b % 8);return new r.init(d, c / 2);
	      } },
	        n = l.Latin1 = { stringify: function (a) {
	        var c = a.words;a = a.sigBytes;for (var d = [], b = 0; b < a; b++) d.push(String.fromCharCode(c[b >>> 2] >>> 24 - 8 * (b % 4) & 255));return d.join("");
	      }, parse: function (a) {
	        for (var c = a.length, d = [], b = 0; b < c; b++) d[b >>> 2] |= (a.charCodeAt(b) & 255) << 24 - 8 * (b % 4);return new r.init(d, c);
	      } },
	        j = l.Utf8 = { stringify: function (a) {
	        try {
	          return decodeURIComponent(escape(n.stringify(a)));
	        } catch (c) {
	          throw Error("Malformed UTF-8 data");
	        }
	      }, parse: function (a) {
	        return n.parse(unescape(encodeURIComponent(a)));
	      } },
	        u = g.BufferedBlockAlgorithm = m.extend({ reset: function () {
	        this._data = new r.init();this._nDataBytes = 0;
	      }, _append: function (a) {
	        "string" == typeof a && (a = j.parse(a));this._data.concat(a);this._nDataBytes += a.sigBytes;
	      }, _process: function (a) {
	        var c = this._data,
	            d = c.words,
	            b = c.sigBytes,
	            e = this.blockSize,
	            f = b / (4 * e),
	            f = a ? h.ceil(f) : h.max((f | 0) - this._minBufferSize, 0);a = f * e;b = h.min(4 * a, b);if (a) {
	          for (var g = 0; g < a; g += e) this._doProcessBlock(d, g);g = d.splice(0, a);c.sigBytes -= b;
	        }return new r.init(g, b);
	      }, clone: function () {
	        var a = m.clone.call(this);
	        a._data = this._data.clone();return a;
	      }, _minBufferSize: 0 });g.Hasher = u.extend({ cfg: m.extend(), init: function (a) {
	        this.cfg = this.cfg.extend(a);this.reset();
	      }, reset: function () {
	        u.reset.call(this);this._doReset();
	      }, update: function (a) {
	        this._append(a);this._process();return this;
	      }, finalize: function (a) {
	        a && this._append(a);return this._doFinalize();
	      }, blockSize: 16, _createHelper: function (a) {
	        return function (c, d) {
	          return new a.init(d).finalize(c);
	        };
	      }, _createHmacHelper: function (a) {
	        return function (c, d) {
	          return new t.HMAC.init(a, d).finalize(c);
	        };
	      } });var t = f.algo = {};return f;
	  }(Math);
	  (function (h) {
	    for (var s = CryptoJS, f = s.lib, g = f.WordArray, q = f.Hasher, f = s.algo, m = [], r = [], l = function (a) {
	      return 4294967296 * (a - (a | 0)) | 0;
	    }, k = 2, n = 0; 64 > n;) {
	      var j;a: {
	        j = k;for (var u = h.sqrt(j), t = 2; t <= u; t++) if (!(j % t)) {
	          j = !1;break a;
	        }j = !0;
	      }j && (8 > n && (m[n] = l(h.pow(k, 0.5))), r[n] = l(h.pow(k, 1 / 3)), n++);k++;
	    }var a = [],
	        f = f.SHA256 = q.extend({ _doReset: function () {
	        this._hash = new g.init(m.slice(0));
	      }, _doProcessBlock: function (c, d) {
	        for (var b = this._hash.words, e = b[0], f = b[1], g = b[2], j = b[3], h = b[4], m = b[5], n = b[6], q = b[7], p = 0; 64 > p; p++) {
	          if (16 > p) a[p] = c[d + p] | 0;else {
	            var k = a[p - 15],
	                l = a[p - 2];a[p] = ((k << 25 | k >>> 7) ^ (k << 14 | k >>> 18) ^ k >>> 3) + a[p - 7] + ((l << 15 | l >>> 17) ^ (l << 13 | l >>> 19) ^ l >>> 10) + a[p - 16];
	          }k = q + ((h << 26 | h >>> 6) ^ (h << 21 | h >>> 11) ^ (h << 7 | h >>> 25)) + (h & m ^ ~h & n) + r[p] + a[p];l = ((e << 30 | e >>> 2) ^ (e << 19 | e >>> 13) ^ (e << 10 | e >>> 22)) + (e & f ^ e & g ^ f & g);q = n;n = m;m = h;h = j + k | 0;j = g;g = f;f = e;e = k + l | 0;
	        }b[0] = b[0] + e | 0;b[1] = b[1] + f | 0;b[2] = b[2] + g | 0;b[3] = b[3] + j | 0;b[4] = b[4] + h | 0;b[5] = b[5] + m | 0;b[6] = b[6] + n | 0;b[7] = b[7] + q | 0;
	      }, _doFinalize: function () {
	        var a = this._data,
	            d = a.words,
	            b = 8 * this._nDataBytes,
	            e = 8 * a.sigBytes;
	        d[e >>> 5] |= 128 << 24 - e % 32;d[(e + 64 >>> 9 << 4) + 14] = h.floor(b / 4294967296);d[(e + 64 >>> 9 << 4) + 15] = b;a.sigBytes = 4 * d.length;this._process();return this._hash;
	      }, clone: function () {
	        var a = q.clone.call(this);a._hash = this._hash.clone();return a;
	      } });s.SHA256 = q._createHelper(f);s.HmacSHA256 = q._createHmacHelper(f);
	  })(Math);
	  (function () {
	    var h = CryptoJS,
	        s = h.enc.Utf8;h.algo.HMAC = h.lib.Base.extend({ init: function (f, g) {
	        f = this._hasher = new f.init();"string" == typeof g && (g = s.parse(g));var h = f.blockSize,
	            m = 4 * h;g.sigBytes > m && (g = f.finalize(g));g.clamp();for (var r = this._oKey = g.clone(), l = this._iKey = g.clone(), k = r.words, n = l.words, j = 0; j < h; j++) k[j] ^= 1549556828, n[j] ^= 909522486;r.sigBytes = l.sigBytes = m;this.reset();
	      }, reset: function () {
	        var f = this._hasher;f.reset();f.update(this._iKey);
	      }, update: function (f) {
	        this._hasher.update(f);return this;
	      }, finalize: function (f) {
	        var g = this._hasher;f = g.finalize(f);g.reset();return g.finalize(this._oKey.clone().concat(f));
	      } });
	  })();
	  /*
	  CryptoJS v3.1.2
	  code.google.com/p/crypto-js
	  (c) 2009-2013 by Jeff Mott. All rights reserved.
	  code.google.com/p/crypto-js/wiki/License
	  */
	  (function () {
	    var h = CryptoJS,
	        j = h.lib.WordArray;h.enc.Base64 = { stringify: function (b) {
	        var e = b.words,
	            f = b.sigBytes,
	            c = this._map;b.clamp();b = [];for (var a = 0; a < f; a += 3) for (var d = (e[a >>> 2] >>> 24 - 8 * (a % 4) & 255) << 16 | (e[a + 1 >>> 2] >>> 24 - 8 * ((a + 1) % 4) & 255) << 8 | e[a + 2 >>> 2] >>> 24 - 8 * ((a + 2) % 4) & 255, g = 0; 4 > g && a + 0.75 * g < f; g++) b.push(c.charAt(d >>> 6 * (3 - g) & 63));if (e = c.charAt(64)) for (; b.length % 4;) b.push(e);return b.join("");
	      }, parse: function (b) {
	        var e = b.length,
	            f = this._map,
	            c = f.charAt(64);c && (c = b.indexOf(c), -1 != c && (e = c));for (var c = [], a = 0, d = 0; d < e; d++) if (d % 4) {
	          var g = f.indexOf(b.charAt(d - 1)) << 2 * (d % 4),
	              h = f.indexOf(b.charAt(d)) >>> 6 - 2 * (d % 4);c[a >>> 2] |= (g | h) << 24 - 8 * (a % 4);a++;
	        }return j.create(c, a);
	      }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
	  })();
	  var v = void 0,
	      y = !0,
	      z = null,
	      A = !1;function C() {
	    return function () {};
	  }
	  window.JSON && window.JSON.stringify || function () {
	    function a() {
	      try {
	        return this.valueOf();
	      } catch (a) {
	        return z;
	      }
	    }function d(a) {
	      c.lastIndex = 0;return c.test(a) ? '"' + a.replace(c, function (a) {
	        var b = q[a];return "string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
	      }) + '"' : '"' + a + '"';
	    }function b(c, q) {
	      var t,
	          r,
	          g,
	          j,
	          h,
	          l = f,
	          e = q[c];e && "object" === typeof e && (e = a.call(e));"function" === typeof m && (e = m.call(q, c, e));switch (typeof e) {case "string":
	          return d(e);case "number":
	          return isFinite(e) ? String(e) : "null";case "boolean":case "null":
	          return String(e);
	        case "object":
	          if (!e) return "null";f += p;h = [];if ("[object Array]" === Object.prototype.toString.apply(e)) {
	            j = e.length;for (t = 0; t < j; t += 1) h[t] = b(t, e) || "null";g = 0 === h.length ? "[]" : f ? "[\n" + f + h.join(",\n" + f) + "\n" + l + "]" : "[" + h.join(",") + "]";f = l;return g;
	          }if (m && "object" === typeof m) {
	            j = m.length;for (t = 0; t < j; t += 1) r = m[t], "string" === typeof r && (g = b(r, e)) && h.push(d(r) + (f ? ": " : ":") + g);
	          } else for (r in e) Object.hasOwnProperty.call(e, r) && (g = b(r, e)) && h.push(d(r) + (f ? ": " : ":") + g);g = 0 === h.length ? "{}" : f ? "{\n" + f + h.join(",\n" + f) + "\n" + l + "}" : "{" + h.join(",") + "}";f = l;return g;}
	    }window.JSON || (window.JSON = {});var c = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
	        f,
	        p,
	        q = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" },
	        m;"function" !== typeof JSON.stringify && (JSON.stringify = function (a, c, d) {
	      var q;p = f = "";if ("number" === typeof d) for (q = 0; q < d; q += 1) p += " ";else "string" === typeof d && (p = d);if ((m = c) && "function" !== typeof c && ("object" !== typeof c || "number" !== typeof c.length)) throw Error("JSON.stringify");return b("", { "": a });
	    });"function" !== typeof JSON.parse && (JSON.parse = function (a) {
	      return eval("(" + a + ")");
	    });
	  }();var ca = 1,
	      fa = A,
	      ga = [],
	      ha = "-pnpres",
	      D = 1E3,
	      ia = "/",
	      ja = "&",
	      ka = /{([\w\-]+)}/g;function la() {
	    return "x" + ++ca + "" + +new Date();
	  }function G() {
	    return +new Date();
	  }var ma,
	      na = Math.floor(20 * Math.random());ma = function (a, d) {
	    return 0 < a.indexOf("pubsub.") && a.replace("pubsub", "ps" + (d ? pa().split("-")[0] : 20 > ++na ? na : na = 1)) || a;
	  };
	  function qa(a, d) {
	    var b = a.join(ia),
	        c = [];if (!d) return b;N(d, function (a, b) {
	      var d = "object" == typeof b ? JSON.stringify(b) : b;"undefined" != typeof b && b != z && 0 < encodeURIComponent(d).length && c.push(a + "=" + encodeURIComponent(d));
	    });return b += "?" + c.join(ja);
	  }function ra(a, d) {
	    function b() {
	      f + d > G() ? (clearTimeout(c), c = setTimeout(b, d)) : (f = G(), a());
	    }var c,
	        f = 0;return b;
	  }function sa(a, d) {
	    var b = [];N(a || [], function (a) {
	      d(a) && b.push(a);
	    });return b;
	  }function ta(a, d) {
	    return a.replace(ka, function (a, c) {
	      return d[c] || a;
	    });
	  }
	  function pa(a) {
	    var d = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
	      var c = 16 * Math.random() | 0;return ("x" == a ? c : c & 3 | 8).toString(16);
	    });a && a(d);return d;
	  }function N(a, d) {
	    if (a && d) if (a && (Array.isArray && Array.isArray(a) || "number" === typeof a.length)) for (var b = 0, c = a.length; b < c;) d.call(a[b], a[b], b++);else for (b in a) a.hasOwnProperty && a.hasOwnProperty(b) && d.call(a[b], b, a[b]);
	  }function ua(a, d) {
	    var b = [];N(a || [], function (a, f) {
	      b.push(d(a, f));
	    });return b;
	  }
	  function va(a, d) {
	    var b = [];N(a, function (a, f) {
	      d ? 0 > a.search("-pnpres") && f.f && b.push(a) : f.f && b.push(a);
	    });return b.sort();
	  }function wa() {
	    setTimeout(function () {
	      fa || (fa = 1, N(ga, function (a) {
	        a();
	      }));
	    }, D);
	  }var O,
	      T = 14,
	      U = 8,
	      xa = A;function ya(a, d) {
	    var b = "",
	        c,
	        f;if (d) {
	      c = a[15];if (16 < c) throw "Decryption error: Maybe bad key";if (16 == c) return "";for (f = 0; f < 16 - c; f++) b += String.fromCharCode(a[f]);
	    } else for (f = 0; 16 > f; f++) b += String.fromCharCode(a[f]);return b;
	  }
	  function za(a, d) {
	    var b = [],
	        c;if (!d) try {
	      a = unescape(encodeURIComponent(a));
	    } catch (f) {
	      throw "Error on UTF-8 encode";
	    }for (c = 0; c < a.length; c++) b[c] = a.charCodeAt(c);return b;
	  }function Aa(a, d) {
	    var b = 12 <= T ? 3 : 2,
	        c = [],
	        f = [],
	        c = [],
	        f = [],
	        p = a.concat(d),
	        q;c[0] = GibberishAES.l.m(p);f = c[0];for (q = 1; q < b; q++) c[q] = GibberishAES.l.m(c[q - 1].concat(p)), f = f.concat(c[q]);c = f.slice(0, 4 * U);f = f.slice(4 * U, 4 * U + 16);return { key: c, i: f };
	  }
	  function Ba(a, d, b) {
	    var d = Ca(d),
	        c = Math.ceil(a.length / 16),
	        f = [],
	        p,
	        q = [];for (p = 0; p < c; p++) {
	      var m = f,
	          u = p,
	          x = a.slice(16 * p, 16 * p + 16),
	          t = [],
	          r = v,
	          r = v;16 > x.length && (r = 16 - x.length, t = [r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r]);for (r = 0; r < x.length; r++) t[r] = x[r];m[u] = t;
	    }0 === a.length % 16 && f.push([16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]);for (p = 0; p < f.length; p++) f[p] = 0 === p ? Da(f[p], b) : Da(f[p], q[p - 1]), q[p] = Ea(f[p], d);return q;
	  }
	  function Fa(a, d, b, c) {
	    var d = Ca(d),
	        f = a.length / 16,
	        p = [],
	        q,
	        m = [],
	        u = "";for (q = 0; q < f; q++) p.push(a.slice(16 * q, 16 * (q + 1)));for (q = p.length - 1; 0 <= q; q--) m[q] = Ga(p[q], d), m[q] = 0 === q ? Da(m[q], b) : Da(m[q], p[q - 1]);for (q = 0; q < f - 1; q++) u += ya(m[q]);var u = u + ya(m[q], y),
	        x;if (c) x = u;else try {
	      x = decodeURIComponent(escape(u));
	    } catch (t) {
	      throw "Bad Key";
	    }return x;
	  }function Ea(a, d) {
	    xa = A;var b = La(a, d, 0),
	        c;for (c = 1; c < T + 1; c++) b = Ma(b), b = Na(b), c < T && (b = Oa(b)), b = La(b, d, c);return b;
	  }
	  function Ga(a, d) {
	    xa = y;var b = La(a, d, T),
	        c;for (c = T - 1; -1 < c; c--) b = Na(b), b = Ma(b), b = La(b, d, c), 0 < c && (b = Oa(b));return b;
	  }function Ma(a) {
	    var d = xa ? Pa : Qa,
	        b = [],
	        c;for (c = 0; 16 > c; c++) b[c] = d[a[c]];return b;
	  }function Na(a) {
	    var d = [],
	        b = xa ? [0, 13, 10, 7, 4, 1, 14, 11, 8, 5, 2, 15, 12, 9, 6, 3] : [0, 5, 10, 15, 4, 9, 14, 3, 8, 13, 2, 7, 12, 1, 6, 11],
	        c;for (c = 0; 16 > c; c++) d[c] = a[b[c]];return d;
	  }
	  function Oa(a) {
	    var d = [],
	        b;if (xa) for (b = 0; 4 > b; b++) d[4 * b] = Ta[a[4 * b]] ^ Ua[a[1 + 4 * b]] ^ Za[a[2 + 4 * b]] ^ $a[a[3 + 4 * b]], d[1 + 4 * b] = $a[a[4 * b]] ^ Ta[a[1 + 4 * b]] ^ Ua[a[2 + 4 * b]] ^ Za[a[3 + 4 * b]], d[2 + 4 * b] = Za[a[4 * b]] ^ $a[a[1 + 4 * b]] ^ Ta[a[2 + 4 * b]] ^ Ua[a[3 + 4 * b]], d[3 + 4 * b] = Ua[a[4 * b]] ^ Za[a[1 + 4 * b]] ^ $a[a[2 + 4 * b]] ^ Ta[a[3 + 4 * b]];else for (b = 0; 4 > b; b++) d[4 * b] = ab[a[4 * b]] ^ bb[a[1 + 4 * b]] ^ a[2 + 4 * b] ^ a[3 + 4 * b], d[1 + 4 * b] = a[4 * b] ^ ab[a[1 + 4 * b]] ^ bb[a[2 + 4 * b]] ^ a[3 + 4 * b], d[2 + 4 * b] = a[4 * b] ^ a[1 + 4 * b] ^ ab[a[2 + 4 * b]] ^ bb[a[3 + 4 * b]], d[3 + 4 * b] = bb[a[4 * b]] ^ a[1 + 4 * b] ^ a[2 + 4 * b] ^ ab[a[3 + 4 * b]];return d;
	  }function La(a, d, b) {
	    var c = [],
	        f;for (f = 0; 16 > f; f++) c[f] = a[f] ^ d[b][f];return c;
	  }function Da(a, d) {
	    var b = [],
	        c;for (c = 0; 16 > c; c++) b[c] = a[c] ^ d[c];return b;
	  }
	  function Ca(a) {
	    var d = [],
	        b = [],
	        c,
	        f,
	        p = [];for (c = 0; c < U; c++) f = [a[4 * c], a[4 * c + 1], a[4 * c + 2], a[4 * c + 3]], d[c] = f;for (c = U; c < 4 * (T + 1); c++) {
	      d[c] = [];for (a = 0; 4 > a; a++) b[a] = d[c - 1][a];if (0 === c % U) {
	        a = b[0];f = v;for (f = 0; 4 > f; f++) b[f] = b[f + 1];b[3] = a;b = cb(b);b[0] ^= db[c / U - 1];
	      } else 6 < U && 4 == c % U && (b = cb(b));for (a = 0; 4 > a; a++) d[c][a] = d[c - U][a] ^ b[a];
	    }for (c = 0; c < T + 1; c++) {
	      p[c] = [];for (b = 0; 4 > b; b++) p[c].push(d[4 * c + b][0], d[4 * c + b][1], d[4 * c + b][2], d[4 * c + b][3]);
	    }return p;
	  }function cb(a) {
	    for (var d = 0; 4 > d; d++) a[d] = Qa[a[d]];return a;
	  }
	  function eb(a, d) {
	    var b = [];for (i = 0; i < a.length; i += d) b[i / d] = parseInt(a.substr(i, d), 16);return b;
	  }function fb(a) {
	    for (var d = [], b = 0; 256 > b; b++) {
	      for (var c = a, f = b, p = v, q = v, p = q = 0; 8 > p; p++) q = 1 == (f & 1) ? q ^ c : q, c = 127 < c ? 283 ^ c << 1 : c << 1, f >>>= 1;d[b] = q;
	    }return d;
	  }
	  var Qa = eb("637c777bf26b6fc53001672bfed7ab76ca82c97dfa5947f0add4a2af9ca472c0b7fd9326363ff7cc34a5e5f171d8311504c723c31896059a071280e2eb27b27509832c1a1b6e5aa0523bd6b329e32f8453d100ed20fcb15b6acbbe394a4c58cfd0efaafb434d338545f9027f503c9fa851a3408f929d38f5bcb6da2110fff3d2cd0c13ec5f974417c4a77e3d645d197360814fdc222a908846eeb814de5e0bdbe0323a0a4906245cc2d3ac629195e479e7c8376d8dd54ea96c56f4ea657aae08ba78252e1ca6b4c6e8dd741f4bbd8b8a703eb5664803f60e613557b986c11d9ee1f8981169d98e949b1e87e9ce5528df8ca1890dbfe6426841992d0fb054bb16", 2),
	      Pa,
	      gb = Qa,
	      hb = [];for (i = 0; i < gb.length; i++) hb[gb[i]] = i;Pa = hb;var db = eb("01020408102040801b366cd8ab4d9a2f5ebc63c697356ad4b37dfaefc591", 2),
	      ab = fb(2),
	      bb = fb(3),
	      $a = fb(9),
	      Ua = fb(11),
	      Za = fb(13),
	      Ta = fb(14),
	      ib,
	      jb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
	      kb = jb.split("");"function" === typeof Array.indexOf && (jb = kb);
	  ib = { encode: function (a) {
	      var d = [],
	          b = "",
	          c;for (c = 0; c < 16 * a.length; c++) d.push(a[Math.floor(c / 16)][c % 16]);for (c = 0; c < d.length; c += 3) b += kb[d[c] >> 2], b += kb[(d[c] & 3) << 4 | d[c + 1] >> 4], b = d[c + 1] !== v ? b + kb[(d[c + 1] & 15) << 2 | d[c + 2] >> 6] : b + "=", b = d[c + 2] !== v ? b + kb[d[c + 2] & 63] : b + "=";a = b.slice(0, 64);for (c = 1; c < Math.ceil(b.length / 64); c++) a += b.slice(64 * c, 64 * c + 64) + (Math.ceil(b.length / 64) == c + 1 ? "" : "\n");return a;
	    }, decode: function (a) {
	      var a = a.replace(/\n/g, ""),
	          d = [],
	          b = [],
	          c = [],
	          f;for (f = 0; f < a.length; f += 4) b[0] = jb.indexOf(a.charAt(f)), b[1] = jb.indexOf(a.charAt(f + 1)), b[2] = jb.indexOf(a.charAt(f + 2)), b[3] = jb.indexOf(a.charAt(f + 3)), c[0] = b[0] << 2 | b[1] >> 4, c[1] = (b[1] & 15) << 4 | b[2] >> 2, c[2] = (b[2] & 3) << 6 | b[3], d.push(c[0], c[1], c[2]);return d = d.slice(0, d.length - d.length % 16);
	    } };
	  O = { size: function (a) {
	      switch (a) {case 128:
	          T = 10;U = 4;break;case 192:
	          T = 12;U = 6;break;case 256:
	          T = 14;U = 8;break;default:
	          throw "Invalid Key Size Specified:" + a;}
	    }, h2a: function (a) {
	      var d = [];a.replace(/(..)/g, function (a) {
	        d.push(parseInt(a, 16));
	      });return d;
	    }, expandKey: Ca, encryptBlock: Ea, decryptBlock: Ga, Decrypt: xa, s2a: za, rawEncrypt: Ba, rawDecrypt: Fa, dec: function (a, d, b) {
	      var a = ib.q(a),
	          c = a.slice(8, 16),
	          c = Aa(za(d, b), c),
	          d = c.key,
	          c = c.i,
	          a = a.slice(16, a.length);return a = Fa(a, d, c, b);
	    }, openSSLKey: Aa, a2h: function (a) {
	      var d = "",
	          b;for (b = 0; b < a.length; b++) d += (16 > a[b] ? "0" : "") + a[b].toString(16);return d;
	    }, enc: function (a, d, b) {
	      var c;c = [];var f;for (f = 0; 8 > f; f++) c = c.concat(Math.floor(256 * Math.random()));f = Aa(za(d, b), c);d = f.key;f = f.i;c = [[83, 97, 108, 116, 101, 100, 95, 95].concat(c)];a = za(a, b);a = Ba(a, d, f);a = c.concat(a);return ib.s(a);
	    }, Hash: { MD5: function (a) {
	        function d(a, b) {
	          var c, d, f, e, g;f = a & 2147483648;e = b & 2147483648;c = a & 1073741824;d = b & 1073741824;g = (a & 1073741823) + (b & 1073741823);return c & d ? g ^ 2147483648 ^ f ^ e : c | d ? g & 1073741824 ? g ^ 3221225472 ^ f ^ e : g ^ 1073741824 ^ f ^ e : g ^ f ^ e;
	        }function b(a, b, c, f, e, g, l) {
	          a = d(a, d(d(b & c | ~b & f, e), l));return d(a << g | a >>> 32 - g, b);
	        }function c(a, b, c, f, e, g, l) {
	          a = d(a, d(d(b & f | c & ~f, e), l));return d(a << g | a >>> 32 - g, b);
	        }function f(a, b, c, f, e, g, l) {
	          a = d(a, d(d(b ^ c ^ f, e), l));return d(a << g | a >>> 32 - g, b);
	        }function p(a, b, c, f, g, e, l) {
	          a = d(a, d(d(c ^ (b | ~f), g), l));return d(a << e | a >>> 32 - e, b);
	        }function q(a) {
	          var b,
	              c,
	              d = [];for (c = 0; 3 >= c; c++) b = a >>> 8 * c & 255, d = d.concat(b);return d;
	        }var m = [],
	            u,
	            x,
	            t,
	            r,
	            g,
	            j,
	            h,
	            l,
	            e = eb("67452301efcdab8998badcfe10325476d76aa478e8c7b756242070dbc1bdceeef57c0faf4787c62aa8304613fd469501698098d88b44f7afffff5bb1895cd7be6b901122fd987193a679438e49b40821f61e2562c040b340265e5a51e9b6c7aad62f105d02441453d8a1e681e7d3fbc821e1cde6c33707d6f4d50d87455a14eda9e3e905fcefa3f8676f02d98d2a4c8afffa39428771f6816d9d6122fde5380ca4beea444bdecfa9f6bb4b60bebfbc70289b7ec6eaa127fad4ef308504881d05d9d4d039e6db99e51fa27cf8c4ac5665f4292244432aff97ab9423a7fc93a039655b59c38f0ccc92ffeff47d85845dd16fa87e4ffe2ce6e0a30143144e0811a1f7537e82bd3af2352ad7d2bbeb86d391", 8),
	            m = a.length;u = m + 8;x = 16 * ((u - u % 64) / 64 + 1);t = [];for (g = r = 0; g < m;) u = (g - g % 4) / 4, r = 8 * (g % 4), t[u] |= a[g] << r, g++;u = (g - g % 4) / 4;t[u] |= 128 << 8 * (g % 4);t[x - 2] = m << 3;t[x - 1] = m >>> 29;m = t;g = e[0];j = e[1];h = e[2];l = e[3];for (a = 0; a < m.length; a += 16) u = g, x = j, t = h, r = l, g = b(g, j, h, l, m[a + 0], 7, e[4]), l = b(l, g, j, h, m[a + 1], 12, e[5]), h = b(h, l, g, j, m[a + 2], 17, e[6]), j = b(j, h, l, g, m[a + 3], 22, e[7]), g = b(g, j, h, l, m[a + 4], 7, e[8]), l = b(l, g, j, h, m[a + 5], 12, e[9]), h = b(h, l, g, j, m[a + 6], 17, e[10]), j = b(j, h, l, g, m[a + 7], 22, e[11]), g = b(g, j, h, l, m[a + 8], 7, e[12]), l = b(l, g, j, h, m[a + 9], 12, e[13]), h = b(h, l, g, j, m[a + 10], 17, e[14]), j = b(j, h, l, g, m[a + 11], 22, e[15]), g = b(g, j, h, l, m[a + 12], 7, e[16]), l = b(l, g, j, h, m[a + 13], 12, e[17]), h = b(h, l, g, j, m[a + 14], 17, e[18]), j = b(j, h, l, g, m[a + 15], 22, e[19]), g = c(g, j, h, l, m[a + 1], 5, e[20]), l = c(l, g, j, h, m[a + 6], 9, e[21]), h = c(h, l, g, j, m[a + 11], 14, e[22]), j = c(j, h, l, g, m[a + 0], 20, e[23]), g = c(g, j, h, l, m[a + 5], 5, e[24]), l = c(l, g, j, h, m[a + 10], 9, e[25]), h = c(h, l, g, j, m[a + 15], 14, e[26]), j = c(j, h, l, g, m[a + 4], 20, e[27]), g = c(g, j, h, l, m[a + 9], 5, e[28]), l = c(l, g, j, h, m[a + 14], 9, e[29]), h = c(h, l, g, j, m[a + 3], 14, e[30]), j = c(j, h, l, g, m[a + 8], 20, e[31]), g = c(g, j, h, l, m[a + 13], 5, e[32]), l = c(l, g, j, h, m[a + 2], 9, e[33]), h = c(h, l, g, j, m[a + 7], 14, e[34]), j = c(j, h, l, g, m[a + 12], 20, e[35]), g = f(g, j, h, l, m[a + 5], 4, e[36]), l = f(l, g, j, h, m[a + 8], 11, e[37]), h = f(h, l, g, j, m[a + 11], 16, e[38]), j = f(j, h, l, g, m[a + 14], 23, e[39]), g = f(g, j, h, l, m[a + 1], 4, e[40]), l = f(l, g, j, h, m[a + 4], 11, e[41]), h = f(h, l, g, j, m[a + 7], 16, e[42]), j = f(j, h, l, g, m[a + 10], 23, e[43]), g = f(g, j, h, l, m[a + 13], 4, e[44]), l = f(l, g, j, h, m[a + 0], 11, e[45]), h = f(h, l, g, j, m[a + 3], 16, e[46]), j = f(j, h, l, g, m[a + 6], 23, e[47]), g = f(g, j, h, l, m[a + 9], 4, e[48]), l = f(l, g, j, h, m[a + 12], 11, e[49]), h = f(h, l, g, j, m[a + 15], 16, e[50]), j = f(j, h, l, g, m[a + 2], 23, e[51]), g = p(g, j, h, l, m[a + 0], 6, e[52]), l = p(l, g, j, h, m[a + 7], 10, e[53]), h = p(h, l, g, j, m[a + 14], 15, e[54]), j = p(j, h, l, g, m[a + 5], 21, e[55]), g = p(g, j, h, l, m[a + 12], 6, e[56]), l = p(l, g, j, h, m[a + 3], 10, e[57]), h = p(h, l, g, j, m[a + 10], 15, e[58]), j = p(j, h, l, g, m[a + 1], 21, e[59]), g = p(g, j, h, l, m[a + 8], 6, e[60]), l = p(l, g, j, h, m[a + 15], 10, e[61]), h = p(h, l, g, j, m[a + 6], 15, e[62]), j = p(j, h, l, g, m[a + 13], 21, e[63]), g = p(g, j, h, l, m[a + 4], 6, e[64]), l = p(l, g, j, h, m[a + 11], 10, e[65]), h = p(h, l, g, j, m[a + 2], 15, e[66]), j = p(j, h, l, g, m[a + 9], 21, e[67]), g = d(g, u), j = d(j, x), h = d(h, t), l = d(l, r);return q(g).concat(q(j), q(h), q(l));
	      } }, Base64: ib };
	  if (!window.PUBNUB) {
	    var lb = function (a, d) {
	      return CryptoJS.HmacSHA256(a, d).toString(CryptoJS.enc.Base64);
	    },
	        mb = function (a) {
	      return document.getElementById(a);
	    },
	        nb = function (a) {
	      console.error(a);
	    },
	        pb = function (a, d) {
	      var b = [];N(a.split(/\s+/), function (a) {
	        N((d || document).getElementsByTagName(a), function (a) {
	          b.push(a);
	        });
	      });return b;
	    },
	        qb = function (a, d, b) {
	      N(a.split(","), function (a) {
	        function f(a) {
	          a || (a = window.event);b(a) || (a.cancelBubble = y, a.preventDefault && a.preventDefault(), a.stopPropagation && a.stopPropagation());
	        }d.addEventListener ? d.addEventListener(a, f, A) : d.attachEvent ? d.attachEvent("on" + a, f) : d["on" + a] = f;
	      });
	    },
	        rb = function () {
	      return pb("head")[0];
	    },
	        V = function (a, d, b) {
	      if (b) a.setAttribute(d, b);else return a && a.getAttribute && a.getAttribute(d);
	    },
	        sb = function (a, d) {
	      for (var b in d) if (d.hasOwnProperty(b)) try {
	        a.style[b] = d[b] + (0 < "|width|height|top|left|".indexOf(b) && "number" == typeof d[b] ? "px" : "");
	      } catch (c) {}
	    },
	        tb = function (a) {
	      return document.createElement(a);
	    },
	        zb = function () {
	      return ub || $() ? 0 : la();
	    },
	        Ab = function (a) {
	      function d(a, b) {
	        H || (H = 1, e.onerror = z, clearTimeout(Ra), a || !b || Sa(b), setTimeout(function () {
	          a && S();var b = mb(aa),
	              c = b && b.parentNode;c && c.removeChild(b);
	        }, D));
	      }if (ub || $()) {
	        a: {
	          var b,
	              c,
	              f = function () {
	            if (!q) {
	              q = 1;clearTimeout(u);try {
	                c = JSON.parse(b.responseText);
	              } catch (a) {
	                return j(1);
	              }p = 1;r(c);
	            }
	          },
	              p = 0,
	              q = 0,
	              m = a.timeout || 1E4,
	              u = setTimeout(function () {
	            j(1, { message: "timeout" });
	          }, m),
	              x = a.b || C(),
	              t = a.data || {},
	              r = a.c || C(),
	              g = !a.h,
	              j = function (a, c) {
	            p || (p = 1, clearTimeout(u), b && (b.onerror = b.onload = z, b.abort && b.abort(), b = z), a && x(c));
	          };try {
	            b = $() || window.XDomainRequest && new XDomainRequest() || new XMLHttpRequest();b.onerror = b.onabort = function () {
	              j(1, b.responseText || { error: "Network Connection Error" });
	            };b.onload = b.onloadend = f;b.onreadystatechange = function () {
	              if (b && 4 == b.readyState) switch (b.status) {case 401:case 402:case 403:
	                  try {
	                    c = JSON.parse(b.responseText), j(1, c);
	                  } catch (a) {
	                    return j(1, b.responseText);
	                  }}
	            };var h = qa(a.url, t);b.open("GET", h, g);g && (b.timeout = m);b.send();
	          } catch (l) {
	            j(0);ub = 0;a = Ab(a);break a;
	          }a = j;
	        }return a;
	      }var e = tb("script"),
	          f = a.a,
	          aa = la(),
	          H = 0,
	          Ra = setTimeout(function () {
	        d(1, { message: "timeout" });
	      }, a.timeout || 1E4),
	          S = a.b || C(),
	          m = a.data || {},
	          Sa = a.c || C();window[f] = function (a) {
	        d(0, a);
	      };a.h || (e[Bb] = Bb);e.onerror = function () {
	        d(1);
	      };e.src = qa(a.url, m);V(e, "id", aa);rb().appendChild(e);return d;
	    },
	        Cb = function () {
	      return !("onLine" in navigator) ? 1 : navigator.onLine;
	    },
	        $ = function () {
	      if (!Db || !Db.get) return 0;var a = { id: $.id++, send: C(), abort: function () {
	          a.id = {};
	        }, open: function (d, b) {
	          $[a.id] = a;Db.get(a.id, b);
	        } };return a;
	    },
	        Bb = "async",
	        ub = -1 == navigator.userAgent.indexOf("MSIE 6");window.console || (window.console = window.console || {});
	    console.log || (console.log = console.error = (window.opera || {}).postError || C());var Eb,
	        Fb = window.localStorage;Eb = { get: function (a) {
	        try {
	          return Fb ? Fb.getItem(a) : -1 == document.cookie.indexOf(a) ? z : ((document.cookie || "").match(RegExp(a + "=([^;]+)")) || [])[1] || z;
	        } catch (d) {}
	      }, set: function (a, d) {
	        try {
	          if (Fb) return Fb.setItem(a, d) && 0;document.cookie = a + "=" + d + "; expires=Thu, 1 Aug 2030 20:00:00 UTC; path=/";
	        } catch (b) {}
	      } };var Gb = { list: {}, unbind: function (a) {
	        Gb.list[a] = [];
	      }, bind: function (a, d) {
	        (Gb.list[a] = Gb.list[a] || []).push(d);
	      },
	      fire: function (a, d) {
	        N(Gb.list[a] || [], function (a) {
	          a(d);
	        });
	      } },
	        Ib = mb("pubnub") || 0,
	        Jb = function (a) {
	      function d() {}function b(a, b) {
	        function c(b) {
	          b && (Va = G() - (b / 1E4 + (G() - d) / 2), a && a(Va));
	        }var d = G();b && c(b) || I.time(c);
	      }function c(a, b) {
	        Ha && Ha(a, b);Ha = z;
	      }function f() {
	        I.time(function (a) {
	          b(C(), a);a || c(1, { error: "Heartbeat failed to connect to Pubnub Servers.Please check your network settings." });setTimeout(f, ob);
	        });
	      }function p() {
	        Nb() || c(1, { error: "Offline. Please check your network settings. " });setTimeout(p, D);
	      }function q(a, b) {
	        "object" == typeof a && a.error && a.message && a.payload ? b({ message: a.message, payload: a.payload }) : b(a);
	      }function m(a, b, c) {
	        if ("object" == typeof a) {
	          if (a.error && a.message && a.payload) {
	            c({ message: a.message, payload: a.payload });return;
	          }if (a.payload) {
	            b(a.payload);return;
	          }
	        }b(a);
	      }function u(a) {
	        var b = 0;N(va(B), function (c) {
	          if (c = B[c]) b++, (a || C())(c);
	        });return b;
	      }function x(a) {
	        if (Ob) {
	          if (!Q.length) return;
	        } else {
	          a && (Q.j = 0);if (Q.j || !Q.length) return;Q.j = 1;
	        }E(Q.shift());
	      }function t() {
	        !Wa && r();
	      }function r() {
	        clearTimeout(W);!J || 500 <= J || 1 > J || !va(B, y).length ? Wa = A : (Wa = y, I.presence_heartbeat({ callback: function () {
	            W = setTimeout(r, J * D);
	          }, error: function (a) {
	            s && s("Presence Heartbeat unable to reach Pubnub servers." + JSON.stringify(a));W = setTimeout(r, J * D);
	          } }));
	      }function g(a, b) {
	        return ba.decrypt(a, b || X) || ba.decrypt(a, X) || a;
	      }function j(a, b, c) {
	        var d = A;if ("number" === typeof a) d = 5 < a || 0 == a ? A : y;else {
	          if ("boolean" === typeof a) return a ? 30 : 0;d = y;
	        }return d ? (c && c("Presence Heartbeat value invalid. Valid range ( x > 5 or x = 0). Current Value : " + (b || 5)), b || 5) : a;
	      }function h(a) {
	        var b = "",
	            c = [];N(a, function (a) {
	          c.push(a);
	        });var d = c.sort(),
	            f;for (f in d) {
	          var e = d[f],
	              b = b + (e + "=" + encodeURIComponent(a[e]));f != d.length - 1 && (b += "&");
	        }return b;
	      }function l(a) {
	        a || (a = {});N(Y, function (b, c) {
	          b in a || (a[b] = c);
	        });return a;
	      }function e(a) {
	        return Jb(a);
	      }function aa(a) {
	        function b(a, c) {
	          var d = (a & 65535) + (c & 65535);return (a >> 16) + (c >> 16) + (d >> 16) << 16 | d & 65535;
	        }function c(a, b) {
	          return a >>> b | a << 32 - b;
	        }var d;d = a.replace(/\r\n/g, "\n");for (var a = "", f = 0; f < d.length; f++) {
	          var e = d.charCodeAt(f);128 > e ? a += String.fromCharCode(e) : (127 < e && 2048 > e ? a += String.fromCharCode(e >> 6 | 192) : (a += String.fromCharCode(e >> 12 | 224), a += String.fromCharCode(e >> 6 & 63 | 128)), a += String.fromCharCode(e & 63 | 128));
	        }f = a;d = [];for (e = 0; e < 8 * f.length; e += 8) d[e >> 5] |= (f.charCodeAt(e / 8) & 255) << 24 - e % 32;var g = 8 * a.length,
	            f = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
	            a = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
	            e = Array(64),
	            l,
	            m,
	            j,
	            h,
	            q,
	            p,
	            r,
	            t,
	            s,
	            w,
	            u;d[g >> 5] |= 128 << 24 - g % 32;d[(g + 64 >> 9 << 4) + 15] = g;for (t = 0; t < d.length; t += 16) {
	          g = a[0];l = a[1];m = a[2];j = a[3];h = a[4];q = a[5];p = a[6];r = a[7];for (s = 0; 64 > s; s++) e[s] = 16 > s ? d[s + t] : b(b(b(c(e[s - 2], 17) ^ c(e[s - 2], 19) ^ e[s - 2] >>> 10, e[s - 7]), c(e[s - 15], 7) ^ c(e[s - 15], 18) ^ e[s - 15] >>> 3), e[s - 16]), w = b(b(b(b(r, c(h, 6) ^ c(h, 11) ^ c(h, 25)), h & q ^ ~h & p), f[s]), e[s]), u = b(c(g, 2) ^ c(g, 13) ^ c(g, 22), g & l ^ g & m ^ l & m), r = p, p = q, q = h, h = b(j, w), j = m, m = l, l = g, g = b(w, u);a[0] = b(g, a[0]);a[1] = b(l, a[1]);a[2] = b(m, a[2]);a[3] = b(j, a[3]);
	          a[4] = b(h, a[4]);a[5] = b(q, a[5]);a[6] = b(p, a[6]);a[7] = b(r, a[7]);
	        }d = "";for (f = 0; f < 4 * a.length; f++) d += "0123456789abcdef".charAt(a[f >> 2] >> 8 * (3 - f % 4) + 4 & 15) + "0123456789abcdef".charAt(a[f >> 2] >> 8 * (3 - f % 4) & 15);return d;
	      }a.jsonp && (ub = 0);var H = a.subscribe_key || "";a.uuid || Eb.get(H + "uuid");var Ra = a.leave_on_unload || 0;a.xdr = Ab;a.db = Eb;a.error = a.error || nb;a._is_online = Cb;a.jsonp_cb = zb;a.hmac_SHA256 = lb;O.size(256);var S = O.s2a("0123456789012345");a.crypto_obj = { encrypt: function (a, b) {
	          if (!b) return a;var c = O.s2a(aa(b).slice(0, 32)),
	              d = O.s2a(JSON.stringify(a)),
	              c = O.rawEncrypt(d, c, S);return O.Base64.encode(c) || a;
	        }, decrypt: function (a, b) {
	          if (!b) return a;var c = O.s2a(aa(b).slice(0, 32));try {
	            var d = O.Base64.decode(a),
	                e = O.rawDecrypt(d, c, S, A);return JSON.parse(e);
	          } catch (f) {}
	        } };a.params = { pnsdk: "PubNub-JS-Web/3.6.7" };var Sa = +a.windowing || 10,
	          Hb = (+a.timeout || 310) * D,
	          ob = (+a.keepalive || 60) * D,
	          Lb = a.noleave || 0,
	          P = a.publish_key || "demo",
	          w = a.subscribe_key || "demo",
	          M = a.auth_key || "",
	          Ia = a.secret_key || "",
	          vb = a.hmac_SHA256,
	          Xa = a.ssl ? "s" : "",
	          oa = "http" + Xa + "://" + (a.origin || "pubsub.pubnub.com"),
	          K = ma(oa),
	          wb = ma(oa),
	          Q = [],
	          Va = 0,
	          xb = 0,
	          yb = 0,
	          Ha = 0,
	          Ja = a.restore || 0,
	          da = 0,
	          Ya = A,
	          B = {},
	          Z = {},
	          W = z,
	          R = j(a.heartbeat || a.pnexpires || 0, a.error),
	          J = a.heartbeat_interval || R - 3,
	          Wa = A,
	          Ob = a.no_wait_for_pending,
	          Pb = a["compatible_3.5"] || A,
	          E = a.xdr,
	          Y = a.params || {},
	          s = a.error || C(),
	          Nb = a._is_online || function () {
	        return 1;
	      },
	          L = a.jsonp_cb || function () {
	        return 0;
	      },
	          ea = a.db || { get: C(), set: C() },
	          X = a.cipher_key,
	          F = a.uuid || ea && ea.get(w + "uuid") || "",
	          ba = a.crypto_obj || { encrypt: function (a) {
	          return a;
	        }, decrypt: function (a) {
	          return a;
	        } },
	          I = { LEAVE: function (a, b, c, d) {
	          var e = { uuid: F, auth: M },
	              f = ma(oa),
	              c = c || C(),
	              g = d || C(),
	              d = L();if (0 < a.indexOf(ha)) return y;if (Pb && (!Xa || "0" == d) || Lb) return A;"0" != d && (e.callback = d);E({ h: b || Xa, timeout: 2E3, a: d, data: l(e), c: function (a) {
	              m(a, c, g);
	            }, b: function (a) {
	              q(a, g);
	            }, url: [f, "v2", "presence", "sub_key", w, "channel", encodeURIComponent(a), "leave"] });return y;
	        }, set_resumed: function (a) {
	          Ya = a;
	        }, get_cipher_key: function () {
	          return X;
	        }, set_cipher_key: function (a) {
	          X = a;
	        }, raw_encrypt: function (a, b) {
	          return ba.encrypt(a, b || X) || a;
	        }, raw_decrypt: function (a, b) {
	          return g(a, b);
	        }, get_heartbeat: function () {
	          return R;
	        }, set_heartbeat: function (a) {
	          R = j(a, J, s);J = 1 <= R - 3 ? R - 3 : 1;d();r();
	        }, get_heartbeat_interval: function () {
	          return J;
	        }, set_heartbeat_interval: function (a) {
	          J = a;r();
	        }, get_version: function () {
	          return "3.6.7";
	        }, getGcmMessageObject: function (a) {
	          return { data: a };
	        }, getApnsMessageObject: function (a) {
	          var b = { aps: { badge: 1, alert: "" } };for (k in a) k[b] = a[k];return b;
	        }, newPnMessage: function () {
	          var a = {};gcm && (a.pn_gcm = gcm);apns && (a.pn_apns = apns);for (k in n) a[k] = n[k];return a;
	        }, _add_param: function (a, b) {
	          Y[a] = b;
	        }, history: function (a, b) {
	          var b = a.callback || b,
	              c = a.count || a.limit || 100,
	              d = a.reverse || "false",
	              e = a.error || C(),
	              f = a.auth_key || M,
	              h = a.cipher_key,
	              m = a.channel,
	              j = a.start,
	              p = a.end,
	              r = a.include_token,
	              t = {},
	              u = L();if (!m) return s("Missing Channel");if (!b) return s("Missing Callback");if (!w) return s("Missing Subscribe Key");t.stringtoken = "true";t.count = c;t.reverse = d;t.auth = f;u && (t.callback = u);j && (t.start = j);p && (t.end = p);r && (t.include_token = "true");E({ a: u, data: l(t), c: function (a) {
	              if ("object" == typeof a && a.error) e({ message: a.message,
	                payload: a.payload });else {
	                for (var c = a[0], d = [], f = 0; f < c.length; f++) {
	                  var l = g(c[f], h);try {
	                    d.push(JSON.parse(l));
	                  } catch (m) {
	                    d.push(l);
	                  }
	                }b([d, a[1], a[2]]);
	              }
	            }, b: function (a) {
	              q(a, e);
	            }, url: [K, "v2", "history", "sub-key", w, "channel", encodeURIComponent(m)] });
	        }, replay: function (a, b) {
	          var b = b || a.callback || C(),
	              c = a.auth_key || M,
	              d = a.source,
	              e = a.destination,
	              f = a.stop,
	              g = a.start,
	              h = a.end,
	              j = a.reverse,
	              q = a.limit,
	              p = L(),
	              r = {};if (!d) return s("Missing Source Channel");if (!e) return s("Missing Destination Channel");if (!P) return s("Missing Publish Key");
	          if (!w) return s("Missing Subscribe Key");"0" != p && (r.callback = p);f && (r.stop = "all");j && (r.reverse = "true");g && (r.start = g);h && (r.end = h);q && (r.count = q);r.auth = c;E({ a: p, c: function (a) {
	              m(a, b, err);
	            }, b: function () {
	              b([0, "Disconnected"]);
	            }, url: [K, "v1", "replay", P, w, d, e], data: l(r) });
	        }, auth: function (a) {
	          M = a;d();
	        }, time: function (a) {
	          var b = L();E({ a: b, data: l({ uuid: F, auth: M }), timeout: 5 * D, url: [K, "time", b], c: function (b) {
	              a(b[0]);
	            }, b: function () {
	              a(0);
	            } });
	        }, publish: function (a, b) {
	          var c = a.message;if (!c) return s("Missing Message");var b = b || a.callback || c.callback || C(),
	              d = a.channel || c.channel,
	              e = a.auth_key || M,
	              f = a.cipher_key,
	              g = a.error || c.error || C(),
	              h = a.post || A,
	              j = "store_in_history" in a ? a.store_in_history : y,
	              p = L(),
	              r = "push";a.prepend && (r = "unshift");if (!d) return s("Missing Channel");if (!P) return s("Missing Publish Key");if (!w) return s("Missing Subscribe Key");c.getPubnubMessage && (c = c.getPubnubMessage());c = JSON.stringify(ba.encrypt(c, f || X) || c);c = [K, "publish", P, w, 0, encodeURIComponent(d), p, encodeURIComponent(c)];Y = { uuid: F, auth: e };j || (Y.store = "0");Q[r]({ a: p, timeout: 5 * D, url: c, data: l(Y), b: function (a) {
	              q(a, g);x(1);
	            }, c: function (a) {
	              m(a, b, g);x(1);
	            }, mode: h ? "POST" : "GET" });x();
	        }, unsubscribe: function (a, b) {
	          var c = a.channel,
	              b = b || a.callback || C(),
	              e = a.error || C();da = 0;c = ua((c.join ? c.join(",") : "" + c).split(","), function (a) {
	            if (B[a]) return a + "," + a + ha;
	          }).join(",");N(c.split(","), function (a) {
	            var c = y;a && (fa && (c = I.LEAVE(a, 0, b, e)), c || b({ action: "leave" }), B[a] = 0, a in Z && delete Z[a]);
	          });d();
	        }, subscribe: function (a, b) {
	          function e(a) {
	            a ? setTimeout(d, D) : (K = ma(oa, 1), wb = ma(oa, 1), setTimeout(function () {
	              I.time(e);
	            }, D));u(function (b) {
	              if (a && b.d) return b.d = 0, b.p(b.name);!a && !b.d && (b.d = 1, b.o(b.name));
	            });
	          }function f() {
	            var a = L(),
	                b = va(B).join(",");if (b) {
	              c();var h = l({ uuid: F, auth: m });2 < JSON.stringify(Z).length && (h.state = JSON.stringify(Z));R && (h.heartbeat = R);t();Ha = E({ timeout: aa, a: a, b: function (a) {
	                  q(a, x);I.time(e);
	                }, data: l(h), url: [wb, "subscribe", w, encodeURIComponent(b), a, da], c: function (a) {
	                  if (!a || "object" == typeof a && "error" in a && a.error) return x(a.error), setTimeout(d, D);J(a[1]);da = !da && Ja && ea.get(w) || a[1];u(function (a) {
	                    a.g || (a.g = 1, a.n(a.name));
	                  });if (Ya && !Ja) da = 0, Ya = A, ea.set(w, 0);else {
	                    Q && (da = 1E4, Q = 0);ea.set(w, a[1]);var b,
	                        c = (2 < a.length ? a[2] : ua(va(B), function (b) {
	                      return ua(Array(a[0].length).join(",").split(","), function () {
	                        return b;
	                      });
	                    }).join(",")).split(",");b = function () {
	                      var a = c.shift() || yb;return [(B[a] || {}).a || xb, a.split(ha)[0]];
	                    };var e = G() - Va - +a[1] / 1E4;N(a[0], function (c) {
	                      var d = b(),
	                          c = g(c, B[d[1]] ? B[d[1]].cipher_key : z);d[0](c, a, d[1], e);
	                    });
	                  }setTimeout(f, Y);
	                } });
	            }
	          }var h = a.channel,
	              b = (b = b || a.callback) || a.message,
	              m = a.auth_key || M,
	              j = a.connect || C(),
	              p = a.reconnect || C(),
	              r = a.disconnect || C(),
	              x = a.error || C(),
	              J = a.idle || C(),
	              H = a.presence || 0,
	              P = a.noheresync || 0,
	              Q = a.backfill || 0,
	              X = a.timetoken || 0,
	              aa = a.timeout || Hb,
	              Y = a.windowing || Sa,
	              S = a.state,
	              W = a.heartbeat || a.pnexpires,
	              ba = a.restore || Ja;Ja = ba;da = X;if (!h) return s("Missing Channel");if (!b) return s("Missing Callback");if (!w) return s("Missing Subscribe Key");(W || 0 === W) && I.set_heartbeat(W);N((h.join ? h.join(",") : "" + h).split(","), function (c) {
	            var d = B[c] || {};B[yb = c] = { name: c, g: d.g,
	              d: d.d, f: 1, a: xb = b, cipher_key: a.cipher_key, n: j, o: r, p: p };S && (Z[c] = c in S ? S[c] : S);H && (I.subscribe({ channel: c + ha, callback: H, restore: ba }), !d.f && !P && I.here_now({ channel: c, callback: function (a) {
	                N("uuids" in a ? a.uuids : [], function (b) {
	                  H({ action: "join", uuid: b, timestamp: Math.floor(G() / 1E3), occupancy: a.occupancy || 1 }, a, c);
	                });
	              } }));
	          });d = function () {
	            c();setTimeout(f, Y);
	          };if (!fa) return ga.push(d);d();
	        }, here_now: function (a, b) {
	          var b = a.callback || b,
	              c = a.error || C(),
	              d = a.auth_key || M,
	              e = a.channel,
	              f = L(),
	              g = a.state,
	              d = { uuid: F, auth: d };if (!("uuids" in a ? a.uuids : 1)) d.disable_uuids = 1;g && (d.state = 1);if (!b) return s("Missing Callback");if (!w) return s("Missing Subscribe Key");g = [K, "v2", "presence", "sub_key", w];e && g.push("channel") && g.push(encodeURIComponent(e));"0" != f && (d.callback = f);E({ a: f, data: l(d), c: function (a) {
	              m(a, b, c);
	            }, b: function (a) {
	              q(a, c);
	            }, url: g });
	        }, where_now: function (a, b) {
	          var b = a.callback || b,
	              c = a.error || C(),
	              d = a.auth_key || M,
	              e = L(),
	              f = a.uuid || F,
	              d = { auth: d };if (!b) return s("Missing Callback");if (!w) return s("Missing Subscribe Key");"0" != e && (d.callback = e);E({ a: e, data: l(d), c: function (a) {
	              m(a, b, c);
	            }, b: function (a) {
	              q(a, c);
	            }, url: [K, "v2", "presence", "sub_key", w, "uuid", encodeURIComponent(f)] });
	        }, state: function (a, b) {
	          var b = a.callback || b || C(),
	              c = a.error || C(),
	              d = a.auth_key || M,
	              e = L(),
	              f = a.state,
	              g = a.uuid || F,
	              h = a.channel,
	              d = l({ auth: d });if (!w) return s("Missing Subscribe Key");if (!g) return s("Missing UUID");if (!h) return s("Missing Channel");"0" != e && (d.callback = e);B[h] && B[h].f && f && (Z[h] = f);d.state = JSON.stringify(f);f = f ? [K, "v2", "presence", "sub-key", w, "channel", encodeURIComponent(h), "uuid", g, "data"] : [K, "v2", "presence", "sub-key", w, "channel", encodeURIComponent(h), "uuid", encodeURIComponent(g)];E({ a: e, data: l(d), c: function (a) {
	              m(a, b, c);
	            }, b: function (a) {
	              q(a, c);
	            }, url: f });
	        }, grant: function (a, b) {
	          var b = a.callback || b,
	              c = a.error || C(),
	              d = a.channel,
	              e = L(),
	              f = a.ttl,
	              g = a.read ? "1" : "0",
	              j = a.write ? "1" : "0",
	              p = a.auth_key;if (!b) return s("Missing Callback");if (!w) return s("Missing Subscribe Key");if (!P) return s("Missing Publish Key");if (!Ia) return s("Missing Secret Key");var r = w + "\n" + P + "\ngrant\n",
	              g = { w: j, r: g, timestamp: Math.floor(new Date().getTime() / 1E3) };"undefined" != d && d != z && 0 < d.length && (g.channel = d);"0" != e && (g.callback = e);if (f || 0 === f) g.ttl = f;p && (g.auth = p);g = l(g);p || delete g.auth;r += h(g);d = vb(r, Ia);d = d.replace(/\+/g, "-");d = d.replace(/\//g, "_");g.signature = d;E({ a: e, data: g, c: function (a) {
	              m(a, b, c);
	            }, b: function (a) {
	              q(a, c);
	            }, url: [K, "v1", "auth", "grant", "sub-key", w] });
	        }, audit: function (a, b) {
	          var b = a.callback || b,
	              c = a.error || C(),
	              d = a.channel,
	              e = a.auth_key,
	              f = L();if (!b) return s("Missing Callback");if (!w) return s("Missing Subscribe Key");if (!P) return s("Missing Publish Key");
	          if (!Ia) return s("Missing Secret Key");var g = w + "\n" + P + "\naudit\n",
	              j = { timestamp: Math.floor(new Date().getTime() / 1E3) };"0" != f && (j.callback = f);"undefined" != d && d != z && 0 < d.length && (j.channel = d);e && (j.auth = e);j = l(j);e || delete j.auth;g += h(j);d = vb(g, Ia);d = d.replace(/\+/g, "-");d = d.replace(/\//g, "_");j.signature = d;E({ a: f, data: j, c: function (a) {
	              m(a, b, c);
	            }, b: function (a) {
	              q(a, c);
	            }, url: [K, "v1", "auth", "audit", "sub-key", w] });
	        }, revoke: function (a, b) {
	          a.read = A;a.write = A;I.grant(a, b);
	        }, set_uuid: function (a) {
	          F = a;d();
	        }, get_uuid: function () {
	          return F;
	        },
	        presence_heartbeat: function (a) {
	          var b = a.callback || C(),
	              c = a.error || C(),
	              a = L(),
	              d = { uuid: F, auth: M };2 < JSON.stringify(Z).length && (d.state = JSON.stringify(Z));0 < R && 320 > R && (d.heartbeat = R);"0" != a && (d.callback = a);var e = E,
	              d = l(d),
	              f = 5 * D,
	              g = K,
	              h = w,
	              j = va(B, y).join(",");e({ a: a, data: d, timeout: f, url: [g, "v2", "presence", "sub-key", h, "channel", encodeURIComponent(j), "heartbeat"], c: function (a) {
	              m(a, b, c);
	            }, b: function (a) {
	              q(a, c);
	            } });
	        }, xdr: E, ready: wa, db: ea, uuid: pa, map: ua, each: N, "each-channel": u, grep: sa, offline: function () {
	          c(1, { message: "Offline. Please check your network settings." });
	        },
	        supplant: ta, now: G, unique: la, updater: ra };F || (F = I.uuid());ea.set(w + "uuid", F);setTimeout(p, D);setTimeout(f, ob);W = setTimeout(t, (J - 3) * D);b();var H = I,
	          Ka;for (Ka in H) H.hasOwnProperty(Ka) && (e[Ka] = H[Ka]);e.css = sb;e.$ = mb;e.create = tb;e.bind = qb;e.head = rb;e.search = pb;e.attr = V;e.events = Gb;e.init = e;e.secure = e;qb("beforeunload", window, function () {
	        if (Ra) e["each-channel"](function (a) {
	          e.LEAVE(a.name, 0);
	        });return y;
	      });if (a.notest) return e;qb("offline", window, e.offline);qb("offline", document, e.offline);return e;
	    };Jb.init = Jb;Jb.secure = Jb;"complete" === document.readyState ? setTimeout(wa, 0) : qb("load", window, function () {
	      setTimeout(wa, 0);
	    });var Kb = Ib || {};PUBNUB = Jb({ notest: 1, publish_key: V(Kb, "pub-key"), subscribe_key: V(Kb, "sub-key"), ssl: !document.location.href.indexOf("https") || "on" == V(Kb, "ssl"), origin: V(Kb, "origin"), uuid: V(Kb, "uuid") });window.jQuery && (window.jQuery.PUBNUB = Jb);"undefined" !== typeof module && (module.exports = PUBNUB) && wa();var Db = mb("pubnubs") || 0;if (Ib) {
	      sb(Ib, { position: "absolute", top: -D });if ("opera" in window || V(Ib, "flash")) Ib.innerHTML = "<object id=pubnubs data=https://pubnub.a.ssl.fastly.net/pubnub.swf><param name=movie value=https://pubnub.a.ssl.fastly.net/pubnub.swf><param name=allowscriptaccess value=always></object>";PUBNUB.rdx = function (a, d) {
	        if (!d) return $[a].onerror();$[a].responseText = unescape(d);$[a].onload();
	      };$.id = D;
	    }
	  }
	  var Mb = PUBNUB.ws = function (a, d) {
	    if (!(this instanceof Mb)) return new Mb(a, d);var b = this,
	        a = b.url = a || "";b.protocol = d || "Sec-WebSocket-Protocol";var c = a.split("/"),
	        c = { ssl: "wss:" === c[0], origin: c[2], publish_key: c[3], subscribe_key: c[4], channel: c[5] };b.CONNECTING = 0;b.OPEN = 1;b.CLOSING = 2;b.CLOSED = 3;b.CLOSE_NORMAL = 1E3;b.CLOSE_GOING_AWAY = 1001;b.CLOSE_PROTOCOL_ERROR = 1002;b.CLOSE_UNSUPPORTED = 1003;b.CLOSE_TOO_LARGE = 1004;b.CLOSE_NO_STATUS = 1005;b.CLOSE_ABNORMAL = 1006;b.onclose = b.onerror = b.onmessage = b.onopen = b.onsend = C();b.binaryType = "";b.extensions = "";b.bufferedAmount = 0;b.trasnmitting = A;b.buffer = [];b.readyState = b.CONNECTING;if (!a) return b.readyState = b.CLOSED, b.onclose({ code: b.CLOSE_ABNORMAL, reason: "Missing URL", wasClean: y }), b;b.e = PUBNUB.init(c);b.e.k = c;b.k = c;b.e.subscribe({ restore: A, channel: c.channel, disconnect: b.onerror, reconnect: b.onopen, error: function () {
	        b.onclose({ code: b.CLOSE_ABNORMAL, reason: "Missing URL", wasClean: A });
	      }, callback: function (a) {
	        b.onmessage({ data: a });
	      }, connect: function () {
	        b.readyState = b.OPEN;b.onopen();
	      } });
	  };
	  Mb.prototype.send = function (a) {
	    var d = this;d.e.publish({ channel: d.e.k.channel, message: a, callback: function (a) {
	        d.onsend({ data: a });
	      } });
	  };
	})();
	(function () {
	  function n(c) {
	    b.each(d, function (a) {
	      if (a in g && c in g[a]) {
	        var e = g[a][c];e.connected && (e.connected = !1, e.socket.user_count--, b.events.fire(a + "leave", e));
	      }
	    });
	  }function l(c, a, e, h, d) {
	    var k = j(a);b.publish({ channel: k.channel, message: { name: c, ns: a, data: e, uuid: m, geo: k.location || [0, 0] }, callback: function (b) {
	        if (b[0]) return (d || function () {})(b);var i = 2 * (h || 500);setTimeout(function () {
	          l(c, a, e, i, d);
	        }, 5500 < i ? 5500 : i);
	      } });
	  }function p(c) {
	    c = c || function () {};navigator && navigator.geolocation && navigator.geolocation.getCurrentPosition(function (b) {
	      socket.location = [b.coords.latitude, b.coords.longitude];c(socket.location);
	    }) || c([0, 0]);
	  }function j(c) {
	    var a = d[c] || (d[c] = { namespace: c, connected: !1, users: g[c] = {}, user_count: 1, get_user_list: function () {
	        return d[c].users;
	      }, get_user_count: function () {
	        return d[c].user_count;
	      }, emit: function (b, a, d) {
	        l(b, c, a, 0, d);
	      }, send: function (b, a) {
	        l("message", c, b, 0, a);
	      }, on: function (a, d) {
	        "string" === typeof a ? b.events.bind(c + a, d) : "object" === typeof a && b.each(a, function (a) {
	          b.events.bind(c + a, d);
	        });
	      }, disconnect: function () {
	        b.unsubscribe({ channel: a.channel });
	      },
	      history: function (a, d) {
	        var g = j(c);a.channel = g.channel;b.history(a, function (a) {
	          var b = [];PUBNUB.each(a[0] || [], function (a) {
	            "message" == a.name && a.ns == c && b.push(a);
	          });a[0] = b;d(a);
	        });
	      }, here_now: function (a) {
	        var d = j(c);b.here_now({ channel: d.channel }, a);
	      } });return a;
	  }var b = PUBNUB,
	      q = 0,
	      m = PUBNUB.db.get("uuid") || b.uuid(function (b) {
	    PUBNUB.db.set("uuid", m = b);
	  }),
	      d = {},
	      g = {},
	      r = window.io = { connected: {}, connect: function (c, a) {
	      function e() {
	        var a = b.map(d, function (a) {
	          return a;
	        });l("ping", i, { nss: a, cuser: s });
	      }var h = (c + "////").split("/"),
	          a = a || {},
	          s = a.user || {},
	          k = "presence" in a ? a.presence : !0,
	          t = h[2],
	          i = (h[3] || "standard") + "-" + a.channel,
	          h = a.channel,
	          f = j(i);f.channel = h;f.password = "GibberishAES" in window && a.password;if (h in r.connected) return f;a.geo && setInterval(p, 15E3) && p();a.uuid = m;a.origin = t;b = r.connected[h] = q ? b : PUBNUB[f.password ? "secure" : "init"](a);q = 1;f.disconnected = 0;b.subscribe({ channel: f.channel, disconnect: function () {
	          f.disconnected || (f.disconnected = 1, b.each(d, function (a) {
	            b.events.fire(a + "disconnect", {});
	          }));
	        }, reconnect: function () {
	          b.disconnected = 0;
	        }, connect: function () {
	          f.disconnected = 0;b.each(d, function (a) {
	            var c = j(a);c.connected || (c.connected = !0, b.events.fire(a + "connect", {}));
	          });e();
	        }, presence: k && function (a) {
	          "leave" === a.action && n(a.uuid);"timeout" === a.action && n(a.uuid);"join" === a.action && e();
	        }, callback: function (a) {
	          f.disconnected && b.each(d, function (a) {
	            b.events.fire(a + "reconnect", {});
	          });f.disconnected = 0;var c = a.data;a.ns in d && c && b.events.fire(a.ns + a.name, c);a.uuid && a.uuid !== m && "ping" === a.name && b.each(c.nss, function (d) {
	            g[d] = g[d] || {};var e = g[d][a.uuid] = g[d][a.uuid] || { geo: a.geo || [0, 0], uuid: a.uuid, last: +new Date(), socket: f, namespace: d, connected: !1, slot: f.user_count++ };e.last = +new Date();e.data = c.cuser;e.connected || (b.events.fire(d + "join", e), e.connected = !0);
	          });
	        } });k && (setInterval(e, 3E4), e());return f;
	    } };
	})();

/***/ }
/******/ ]);