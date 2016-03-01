//Module.c("com.whuang.hsj");
//update to 2013-06-28
com = {};
com.whuang = {};
com.whuang.hsj = {};

com.whuang.hsj.filerBlank22 = true;// whether filter whitespace
com.whuang.hsj.isWhitespace = function(input) {// whether has whitespace
	var whitespace = " \t\n\r";
	for ( var i = 0; i < input.length; i++) {
		var c = input.charAt(i);
		if (whitespace.indexOf(c) >= 0) {
			return true;
		}
	}
	return false;
};
/**
 * whether has value
 * 
 * @param {Object}
 *            input
 */
com.whuang.hsj.isHasValue = function(input) {
	if (typeof input == "number" && input == "0") {
		return true;
	}
	if(!input)
	{
		return false;
	}
	if (input == "" || input == undefined
			|| com.whuang.hsj.isWholeWhitespace(input)) {
		return false;
	}
	return true;
};
com.whuang.hsj.isEmpty = function(input2) {
	if (input2 == null) {
		return true;
	} else {
		if (typeof input2 == 'object') {
			input2 = input2.value;
		}
		return (input2 == "" || input2 == undefined);
	}
};
/**
 * whether array2 contains one3
 * 
 * @param {Array}
 *            array2
 * @param {Object}
 *            one3
 */
com.whuang.hsj.containsHw = function(array2, one3) {
	for ( var i = 0; i < array2.length; i++) {
		var arrOne = array2[i];
		if (com.whuang.hsj.filerBlank22) {
			arrOne = com.whuang.hsj.trim(arrOne);
		}
		if (arrOne == one3) {
			return true;
		}
	}
	return false;
};
com.whuang.hsj.$$one = function(name22) {
	if (com.whuang.hsj.isHasValue(name22)) {
		var names222=document.getElementsByName(name22);
		//alert(names222)
		if(names222){
			return names222[0];
		}else{
			return "";
		}
		
	} else {
		return "";
	}
};
com.whuang.hsj.$$value = function(name22) {
	if (name22 == "" || name22 == undefined) {
		return "";
	}
	if (com.whuang.hsj.isHasValue(name22)) {
		return com.whuang.hsj.$$one(name22).value;
	} else {
		return "";
	}
};
/*******************************************************************************
 * by name
 */
com.whuang.hsj.$$arr = function(name22) {
	return document.getElementsByName(name22);
};
/*******************************************************************************
 * by id
 */
com.whuang.hsj.$$id = function(name22) {
	return document.getElementById(name22);
};
/**
 * get value by given name and index for input type is text
 */
com.whuang.hsj.$$valueByIndex21 = function(name22, index) {
	if (!com.whuang.hsj.isHasValue(name22)) {
		return "";
	}
	var one22 = document.getElementsByName(name22)[index];
	return one22.value;
};
/***
 * [a,b,c]-->"a","b","c"
 */
com.whuang.hsj.string2ArrayQuotation=function(stringObj){
	stringObj=stringObj.replace(/\[([\w, ]*)\]/,"$1");
	var arr=stringObj.split(",");
	var newArray=new Array();
	for(var i=0;i<arr.length;i++){
		var arrOne='"'+com.whuang.hsj.trim(arr[i])+'"';
		newArray.unshift(arrOne);
	}
	// alert(newArray);
	return newArray.reverse();
};
com.whuang.hsj.string2Array = function(stringObj) {
	stringObj = stringObj.replace(/\[([\w, ]*)\]/, "$1");
	if (stringObj.indexOf("[") == 0) {// if has chinese
		stringObj = stringObj.substring(1, stringObj.length - 1);
	}
	var arr = stringObj.split(",");
	var newArray = new Array();
	for ( var i = 0; i < arr.length; i++) {
		var arrOne = com.whuang.hsj.trim(arr[i]);
		newArray.unshift(arrOne);
	}
	// alert(newArray);
	return newArray.reverse();
};
com.whuang.hsj.string2ArrayString = function(stringObj) {
	stringObj = stringObj.replace(/\[([\w, ]*)\]/, "$1");
	// alert(stringObj);
	return stringObj;
};
/**
 * whether is a normal string
 * 
 * @param {Object}
 *            input
 */
com.whuang.hsj.isString = function(input) {
	if (typeof selectObj == 'string') {
		var regx = /^[0-9a-zA-Z]+[\w-.]*[0-9a-zA-Z]*$/i;
		if (regx.test(input)) {
			return true;
		}
	}
	return false;
};
com.whuang.hsj.isWholeNumber = function(input) {
	var regx = /^[0-9]+$/;
	if (regx.test(input)) {
		return true;
	} else {
		return false;
	}
};
/*******************************************************************************
 * input:18:20:05
 */
com.whuang.hsj.isTime = function(input) {
	var regx = /[0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}/;
	if (regx.test(input)) {
		return true;
	} else {
		return false;
	}
};
/*******************************************************************************
 * input:2013-09-15
 */
com.whuang.hsj.isDate = function(input) {
	var regx = /^[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}/;
	if (regx.test(input)) {
		return true;
	} else {
		return false;
	}
};
com.whuang.hsj.isDateTime = function(input) {
	var regx = /^[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}[ T][0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}$/;
	if (regx.test(input)) {
		return true;
	} else {
		return false;
	}
};
/**
 * the times <find> show up in <str>
 */
com.whuang.hsj.sumShowup = function(str, find) {
	var reg = new RegExp(find, "g");
	var c = str.match(reg);
	return (c ? c.length : 0);
};

/**
 * float number : 23.5(valid); 23..5 (invalid)
 */
com.whuang.hsj.isWholeFloatNumber = function(input) {
	var regx = /^[0-9.]+$/;
	if (regx.test(input)) {
		var sumShow = com.whuang.hsj.sumShowup(input, "\\.");
		if (Number(sumShow) < 2) {
			return true;
		}
	}
	return false;
};
/**
 * is whitespace entirely
 * 
 * @param {Object}
 *            inputString
 */
com.whuang.hsj.isWholeWhitespace = function(inputString) {
	if (typeof inputString == "object") {
		return inputString;
	}
	var bootInit = true;
	if (inputString == "" || inputString == undefined) {
		return false;
	}
	for ( var i = 0; i < inputString.length; i++) {
		var c = inputString.charAt(i);
		if (!com.whuang.hsj.isWhitespace(c)) {
			bootInit = false;
			break;
		}
	}
	return bootInit;
};
/**
 * get length of given string byte ,and not char
 * 
 * @param {Object}
 *            input
 */
com.whuang.hsj.lengthStr = function(input) {
	var length2 = 0;
	for ( var i = 0; i < input.length; i++) {
		if (input.charCodeAt(i) > 255) {
			length2 += 2;
		} else {
			length2++;
		}
	}
	return length2;
};
/**
 * select component
 * 
 * @param {Object}
 *            selectObj
 * @param {Object}
 *            value33
 */
com.whuang.hsj.setSelectByValue = function(selectObj, value33) {
	if (selectObj == null || selectObj == undefined) {
		return;
	}
	var options22 = selectObj.options;
	if (options22 == null || options22 == undefined) {
		return;
	}
	for ( var i = 0; i < options22.length; i++) {
		var option33 = options22[i];
		if (option33.value == value33) {
			option33.selected = true;
			// selectObj.selectedIndex=i;
			break;
		}
	}
};
/**
 * select component
 * 
 * @param {Object}
 *            selectObj
 * @param {Object}
 *            value33
 */
com.whuang.hsj.setSelectByLabel = function(selectObj, value33) {
	var options22 = selectObj.options;
	for ( var i = 0; i < options22.length; i++) {
		var option33 = options22[i];
		if (option33.label == value33) {
			option33.selected = true;
			// selectObj.selectedIndex=i;
			break;
		}
	}
};
/**
 * select component
 * 
 * @param {Object}
 *            selectObj
 * @param {Object}
 *            index22
 */
com.whuang.hsj.setSelectByIndex=function(selectObj,index22){
	if(typeof selectObj=='string'){
		selectObj=com.whuang.hsj.$$one(selectObj);
	}
	selectObj.selectedIndex=index22;
};
com.whuang.hsj.setSelectByIndex = function(selectObj){
	if(typeof selectObj=='string'){
		selectObj=com.whuang.hsj.$$one(selectObj);
	}
    return selectObj.selectedIndex ;
};
/**
 * checkbox component
 * 
 * @param {Object}
 *            checkboxObj
 */
com.whuang.hsj.isCheckcheckbox = function(checkboxObj) {
	var boolinit = false;
	if (checkboxObj == undefined) {
		return boolinit;
	}
	if (!('length' in checkboxObj)) {// just only single checkbox .
		return checkboxObj.checked;
	}
	var length = checkboxObj.length;// if is many checkbox ,or checkbox array
	for ( var i = 0; i < length; i++) {
		var checkboxOne = checkboxObj.item(i);
		if (checkboxOne.checked) {
			boolinit = true;
			break;
		}
	}
	return boolinit;
};
/**
 * just only single checkbox
 * 
 * @param {Object}
 *            checkboxObj
 */
com.whuang.hsj.isCheckcheckboxOne = function(checkboxObj) {
	if (checkboxObj == undefined) {
		return false;
	}
	return checkboxObj.checked;
};


com.whuang.hsj.isCheckcheckboxByIndex = function(checkboxObj, index32){
if(!checkboxObj)
{
	return false;
}
	if(checkboxObj==undefined){
		return false;
	}
    var checkboxOne = checkboxObj.item(index32);
    if (checkboxOne.checked) {
        return true;
    }
    return false;
};
/**
 * get sum count of checked checkbox(s)
 * 
 * @param {Object}
 *            checkboxsObj
 */
com.whuang.hsj.getCheckboxCount = function(checkboxsObj) {
	var j = 0;
	var length = checkboxsObj.length;
	for ( var i = 0; i < length; i++) {
		var checkboxOne = checkboxsObj.item(i);
		if (checkboxOne.checked) {
			j++;
		}
	}
	return j;
};
/**
 * 
 * @param {Object}
 *            checkboxsObj
 * @return Array
 */
com.whuang.hsj.getCheckboxValue=function (checkboxsObj){
	if(checkboxsObj==undefined)
	{
		return null;
	}
	var result=new Array();
	var length=checkboxsObj.length;
	for(var i=0;i<length;i++){
		var checkboxOne=checkboxsObj.item(i);
			if(checkboxOne.checked){
				var checkboxValue=checkboxOne.value;
				result.unshift(checkboxValue);
			}
	}
	return result.reverse();// reverse sequence
};
com.whuang.hsj.getCheckboxValueByIndex = function(checkboxsObj, index23) {
	var checkboxOne = checkboxsObj.item(index23);
	return checkboxOne.value;
};
/**
 * 
 * @param {Object}
 *            checkboxsObj
 * @return Array
 */
com.whuang.hsj.getCheckboxIndex = function(checkboxsObj) {
	var result = new Array();
	var length = checkboxsObj.length;
	for ( var i = 0; i < length; i++) {
		var checkboxOne = checkboxsObj.item(i);
		if (checkboxOne.checked) {
			result.unshift(i);
		}
	}
	return result.reverse();// reverse sequence
};
/**
 * get last index checked
 * 
 * @param {Object}
 *            checkboxsObj
 */
com.whuang.hsj.getCheckboxLastIndex = function(checkboxsObj) {
	var resultLastIndex = -1;
	var length = checkboxsObj.length;
	for ( var i = length - 1; i >= 0; i--) {
		var checkboxOne = checkboxsObj.item(i);
		if (checkboxOne.checked) {
			resultLastIndex = i;
			return resultLastIndex;
		}
	}
	return resultLastIndex;
};
/**
 * checkbox component function :Choose the first
 * 
 * @param {Object}
 *            checkboxess sequence22
 * @param {Object}
 *            sequence22
 */
com.whuang.hsj.setCheckboxByLastIndex = function(checkboxess, sequence22) {
	var length = checkboxess.length;
	for ( var i = 0; i < length; i++) {
		var checkboxOne = checkboxess.item(i);
		if (i < sequence22) {
			checkboxOne.checked = true;
		} else {
			checkboxOne.checked = false;
		}
	}
};
/*******************************************************************************
 * cancel select the single checkbox
 */
com.whuang.hsj.deCheckedCheckboxOne = function(checkbox2233) {
	if (typeof checkbox2233 == 'string') {
		checkbox2233 = com.whuang.hsj.$$one(checkbox2233);
	}
	if (checkbox2233.checked) {
		checkbox2233.checked = false;
	}
};
/*******************************************************************************
 * select the single checkbox
 */
com.whuang.hsj.deCheckedCheckboxOne = function(checkbox2233) {
	if (typeof checkbox2233 == 'string') {
		checkbox2233 = com.whuang.hsj.$$one(checkbox2233);
	}
	checkbox2233.checked = true;
};
/**
 * checkbox component
 * 
 * @param {Object}
 *            checkboxess
 * @param {Object}
 *            indexss
 */
com.whuang.hsj.setCheckboxByIndex2 = function(checkboxess, indexss, boolean23) {
	var indexsArr;
	if (typeof indexss == "object") {
		indexsArr = indexss;
	} else {
		indexss = com.whuang.hsj.trim(indexss);

		if (checkboxess == null || !com.whuang.hsj.isHasValue(indexss)) {
			indexsArr = [ -1 ];// indexss is "" or null
		} else {
			if (!(typeof indexss == "number")) {// if input is not a number
				indexss = indexss.replace(/\s+/g, " ");// many blank to one
				// blank
				if (indexss.indexOf(",") >= 0) {// using ","
					indexsArr = indexss.split(",");
				} else {
					indexsArr = indexss.split(" ");// using " "
				}
			} else {
				indexsArr = new Array();
				indexsArr.unshift(indexss);
			}
		}
	}

	var length = checkboxess.length;
	for ( var i = 0; i < length; i++) {
		var checkboxOne = checkboxess.item(i);
		if (com.whuang.hsj.containsHw(indexsArr, i)) {
			checkboxOne.checked = boolean23;
		} else {
			checkboxOne.checked = !boolean23;
		}
	}
};
/*******************************************************************************
 * select checkbox by index(sequeence)
 */
com.whuang.hsj.setCheckboxByIndex = function(checkboxess, indexss) {
	com.whuang.hsj.setCheckboxByIndex2(checkboxess, indexss, true);
};
/*******************************************************************************
 * cancel select checkbox by index(sequeence)
 */
com.whuang.hsj.deSetCheckboxByIndex = function(checkboxess, indexss) {
	com.whuang.hsj.setCheckboxByIndex2(checkboxess, indexss, false);
};

/**
 * checkbox component
 * 
 * @param {Object}
 *            checkboxess
 * @param {String}
 *            value of checkbox
 */
com.whuang.hsj.setCheckboxByValue = function(checkboxess, indexss) {
	var indexsArr;
	if (typeof indexss == "object") {
		indexsArr = indexss;
	} else {
		if (!com.whuang.hsj.isHasValue(indexss)) {
			return;
		}
		indexss = com.whuang.hsj.trim(indexss).replace(/\s+/g, " ");

		if (indexss.indexOf(",") >= 0) {// using ","
			indexsArr = indexss.split(",");
		} else {
			indexsArr = indexss.split(" ");// using " "
		}
	}
	var length = checkboxess.length;
	for ( var i = 0; i < length; i++) {
		var checkboxOne = checkboxess.item(i);
		if (com.whuang.hsj.containsHw(indexsArr, com.whuang.hsj
				.trim(checkboxOne.value))) {
			checkboxOne.checked = true;
		} else {
			checkboxOne.checked = false;
		}
	}
};
/**
 * 1,3,5-->[1,3,5]
 */
com.whuang.hsj.string2ArrayCommon = function(stringObj) {
	if (typeof stringObj == "object") {
		return;
	}
	stringObj = stringObj.replace(/\[([\w, ]*)\]/, "$1");
	var arrOld = stringObj.split(",");
	return arrOld;
};
com.whuang.hsj.javaString2jsString = function(stringObj) {
	stringObj = stringObj.replace(/\[([\w, ]*)\]/, "$1");
	return stringObj;
};
/**
 * [2,5,4]-->[1,4,3]
 */
com.whuang.hsj.intArrayOffset = function(intArray, offset) {
	var newArray = new Array();
	for ( var i = 0; i < intArray.length; i++) {
		var one = String(Number(intArray[i]) - offset);
		newArray.unshift(one);
	}
	return newArray.reverse();
};
com.whuang.hsj.stringOffset = function(stringObj, offset) {
	var oldArray = com.whuang.hsj.string2Array(stringObj);
	return com.whuang.hsj.intArrayOffset(oldArray, offset);
};

com.whuang.hsj.trim = function(str) { //
	if (typeof str == "object") {
		return str;
	}
	if (str == null || str == "" || str == undefined) {
		return str;
	}
	if (typeof str == "number") {
		return str;
	}
	return str.replace(/(^\s*)|(\s*$)/g, "");
};
/**
 * 
 * @param {Object}
 *            str
 */
com.whuang.hsj.ltrim = function(str) { //
	if (typeof str == "object") {
		return str;
	}
	if (str == null || str == "" || str == undefined) {
		return str;
	}
	return str.replace(/(^\s*)/g, "");
};
/**
 * 
 * @param {Object}
 *            str
 */
com.whuang.hsj.rtrim = function(str) { //
	if (typeof str == "object") {
		return str;
	}
	if (str == null || str == "" || str == undefined) {
		return str;
	}
	return str.replace(/(\s*$)/g, "");
};

/**
 * radio component
 * 
 */
com.whuang.hsj.isRadioChecked22 = function(objs) {
	var initBool = false;
	for ( var i = 0; i < objs.length; i++) {
		var oneOption = objs.item(i);
		if (oneOption.checked) {
			initBool = true;
			break;
		}
	}
	return initBool;
};
/**
 * radio component
 * 
 * @param {Object}
 *            objs
 */
com.whuang.hsj.getRadioValue = function(objs) {
	for ( var i = 0; i < objs.length; i++) {
		var oneOption = objs.item(i);
		if (oneOption.checked) {
			return oneOption.value;
			break;
		}
	}
	return null;
};
/**
 * get index of checked radio
 */
com.whuang.hsj.getRadioCheckedIndex = function(objs) {
	for ( var i = 0; i < objs.length; i++) {
		var oneOption = objs.item(i);
		if (oneOption.checked) {
			return i;
			break;
		}
	}
	return -1;
};
/**
 * radio component
 * 
 * @param {Object}
 *            objs
 * @param {Object}
 *            value2
 */
com.whuang.hsj.setCheckedRadioByValue = function(objs, value2) {
	for ( var i = 0; i < objs.length; i++) {
		var oneOption = objs.item(i);
		if (oneOption.value == value2) {
			// oneOption.checked='checked';
			oneOption.checked = true;
			break;
		}
	}
};
/**
 * according index to check
 * 
 * @param {Object}
 *            objs
 * @param {Object}
 *            index2
 */
com.whuang.hsj.setCheckedRadioByIndex = function(objs, index2) {
	var oneOption = objs.item(index2);
	// oneOption.checked='checked';
	oneOption.checked = true;
};

/**
 * decide whether is selected
 * 
 * @param {Object}
 *            selectObj
 */
com.whuang.hsj.isSelectedOption = function(selectObj) {
	var selectedIndex = selectObj.selectedIndex;
	if (selectedIndex >= 1) {
		return true;
	} else {
		return false;
	}
};
/**
 * select component
 */
com.whuang.hsj.getSelectedOptionLabel = function(selectObj) {
	if (typeof selectObj == 'string') {
		selectObj = com.whuang.hsj.$$one(selectObj);
	}
	var selectedIndex = selectObj.selectedIndex;
	if (selectedIndex >= 0) {// omit the first option
		var selectOption = selectObj.options[selectedIndex];
		if ("textContent" in selectOption) {// textContent is specific to
			// Internet explorer and firefox has
			// no this attribute
			return selectOption.textContent;
		} else {
			return selectOption.label;
		}

	} else {
		return "";
	}

};
/*******************************************************************************
 * Get value of select component(drop-down box)
 */
com.whuang.hsj.getSelectedOptionValue = function(selectObj) {
	if (typeof selectObj == 'string') {
		selectObj = com.whuang.hsj.$$one(selectObj);
	}
	var selectedIndex = selectObj.selectedIndex;
	if (selectedIndex >= 0) {// omit the first option
		var selectOption = selectObj.options[selectedIndex];
		return selectOption.value;
	} else {
		return "";
	}

};
/**
 * radio component
 * 
 * @param {Object}
 *            radios22
 */
com.whuang.hsj.getLastRadio = function(radios22) {
	var length = radios22.length;
	return radios22.item(length - 1);
};
/**
 * radio component
 * 
 * @param {Object}
 *            radios22
 */
com.whuang.hsj.getFirstRadio = function(radios22) {
	return radios22.item(0);
};
/**
 * whether checkbox selected index is continual
 * 
 * @param {Object}
 *            checkboxObj
 */
com.whuang.hsj.continuationCheckbox = function(checkboxObj) {
	var checkIndexes = com.whuang.hsj.getCheckboxIndex(checkboxObj);
	var lastIndex = com.whuang.hsj.getCheckboxLastIndex(checkboxObj);
	if (lastIndex == -1) {
		return false;
	}
	if (checkIndexes.length == lastIndex + 1) {
		return true;
	} else {
		return false;
	}
};
com.whuang.hsj.isUsername = function(username22) {
	if (username22 == undefined || username22 == null || username22 == "") {
		return false;
	}
	if (com.whuang.hsj.isHasValue(username22) && isString(username22)) {
		return true;
	}
	return false;
};

com.whuang.hsj.isEmail = function(email23) {
	var pattern = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
	var chkFlag = pattern.test(email23);
	if (chkFlag) {
		return true;
	} else {
		return false;
	}
};
com.whuang.hsj.isValidMail = function(sText) {
	var reMail = /^(?:[a-zA-Z0-9]+[_\-\+\.]?)*[a-zA-Z0-9]+@(?:([a-zA-Z0-9]+[_\-]?)*[a-zA-Z0-9]+\.)+([a-zA-Z]{2,})+$/;
	return (reMail.test(sText));
};
/**
 * get indexes of textbox which has the same name
 * 
 * @param {string}
 *            textbox33
 */
com.whuang.hsj.getTextboxIndexArr = function(textbox33) {
	var arr = new Array();
	var textboxes;
	if (typeof textbox33 == "object") {
		textboxes = textbox33;
	} else {
		textboxes = com.whuang.hsj.$$arr(textbox33);
	}
	for ( var i = 0; i < textboxes.length; i++) {
		if (com.whuang.hsj.isHasValue(textboxes[i].value)) {
			arr.unshift(i);
		}
	}
	return arr.reverse();
};
com.whuang.hsj.getTextboxLastIndex = function(textbox33) {
	var textboxes;
	if (typeof textbox33 == "object") {
		textboxes = textbox33;
	} else {
		textboxes = com.whuang.hsj.$$arr(textbox33);
	}
	var ii = 0;
	for ( var i = 0; i < textboxes.length; i++) {
		if (com.whuang.hsj.isHasValue(textboxes[i].value)) {
			ii++;
		}
	}
	return ii;
};
/**
 * decide whether has any textbox with value
 * 
 * @param {string}
 *            textbox33
 */
com.whuang.hsj.isHasValuetextboxes = function(textbox33) {
	var boolini = false;
	var textboxes;
	if (typeof textbox33 == "object") {
		textboxes = textbox33;
	} else {
		textboxes = com.whuang.hsj.$$arr(textbox33);
	}
	for ( var i = 0; i < textboxes.length; i++) {
		if (com.whuang.hsj.isHasValue(textboxes[i].value)) {
			boolini = true;
			break;
		}
	}
	return boolini;
};
/**
 * 
 * @param {name}
 *            checkbox22
 * @param {name}
 *            textbox23
 */
com.whuang.hsj.isValidCheckTextbox = function(checkbox2233, textbox23) {
	var boolini = true;
	var checkbox22;
	if (typeof checkbox2233 == "object") {
		checkbox22 = checkbox2233;
	} else {
		checkbox22 = com.whuang.hsj.$$arr(checkbox2233);
		;
	}
	if (com.whuang.hsj.isHasValueOption(checkbox22, textbox23)) {
		var textboxes = com.whuang.hsj.$$arr(textbox23);
		for ( var i = 0; i < textboxes.length; i++) {
			if (com.whuang.hsj.isHasValue(textboxes[i].value)) {
				var isCheckedByIndex = com.whuang.hsj.isCheckcheckboxByIndex(
						checkbox22, i);
				if (!isCheckedByIndex) {
					boolini = false;
					break;
				}
			}
		}
	} else {
		return false;
	}
	return boolini;

};
/**
 * 
 * @param {Object}
 *            checkbox223
 */
com.whuang.hsj.isHasValueOption = function(checkbox223, textboxName) {
	var indexes;
	var checkboxObj;
	if (typeof checkbox223 == "object") {
		checkboxObj = checkbox223;
	} else {
		/**
		 * get selected indexes of checkbox
		 */
		checkboxObj = com.whuang.hsj.$$arr(checkbox223);
	}
	indexes = com.whuang.hsj.getCheckboxIndex(checkboxObj);
	for ( var i = 0; i < indexes.length; i++) {
		// var optionValue=com.whuang.hsj.$$valueByIndex21("options_value",i);
		// var optionValue=document.getElementsByName("options_value")[i];
		var optionValue = com.whuang.hsj.$$valueByIndex21(textboxName,
				indexes[i]);
		if (!com.whuang.hsj.isHasValue(optionValue)) {
			return false;
		}
	}
	return true;
};

/**
 * disable the component
 * 
 * @param {Object}
 *            objArr
 */
com.whuang.hsj.disAbled = function(objArr) {
	if (!('length' in objArr)) {// just only single checkbox .
		objArr.disabled = "disabled";
		// .disabled=true;
		return;
	}
	for ( var i = 0; i < objArr.length; i++) {
		var objOne = objArr[i];
		objOne.disabled = "disabled";
	}
};

/**
 * enable the component
 * 
 * @param {Object}
 *            objArr
 */
com.whuang.hsj.enAbled = function(objArr) {
	if (!('length' in objArr)) {// just only single checkbox .
		objArr.disabled = false;
		// .disabled=true;
		return;
	}
	for ( var i = 0; i < objArr.length; i++) {
		var objOne = objArr[i];
		objOne.disabled = false;
	}
};

/**
 * O must be upper case
 * 
 * @param objArr :
 *            can be string ,object or {object}
 */
com.whuang.hsj.readonly22 = function(objArr) {
	if (typeof objArr == "string") {// if argument is a string
		objArr = com.whuang.hsj.$$one(objArr);
	}
	if (!('length' in objArr)) {// just only single checkbox (not array).
		objArr.readOnly = "readonly";
		return;
	}
	for ( var i = 0; i < objArr.length; i++) {
		var objOne = objArr[i];
		// objOne.readonly="readonly";//error
		objOne.readOnly = "readonly";// right
	}
};

/**
 * com.whuang.hsj.hide22(document.getElementsByName('options_value'));
 * 
 * @param {Object}
 *            objArr
 */
com.whuang.hsj.hide22 = function(objArr) {
	// alert(typeof objArr);
	for ( var i = 0; i < objArr.length; i++) {
		var objOne = objArr[i];
		objOne.style.display = "none";
	}
};
/**
 * hide the component
 * 
 * @param {Object}
 *            one33
 */
com.whuang.hsj.hideOne = function(one33) {
	one33.style.display = "none";
};
/*******************************************************************************
 * hide component object,and Parameters are variable length
 */
com.whuang.hsj.hideVariable = function() {
	var i, numargs = arguments.length;
	for (i = 0; i < numargs; i++) {
		com.whuang.hsj.hideOne(arguments[i]);
	}
};

/*******************************************************************************
 * show one component
 */
com.whuang.hsj.showOne = function(divObj) {
	divObj.style.display = "block";
};
/*******************************************************************************
 * show component object,and Parameters are variable length
 */
com.whuang.hsj.showVariable = function() {
	var i, numargs = arguments.length;
	for (i = 0; i < numargs; i++) {
		com.whuang.hsj.showOne(arguments[i]);
	}
};
/**
 * show component
 * 
 * @param {Object}
 *            objArr
 */
com.whuang.hsj.show22 = function(objArr) {
	for ( var i = 0; i < objArr.length; i++) {
		var objOne = objArr[i];
		objOne.style.display = "block";
	}
};
/**
 * validate int type textbox
 * 
 * @param Object
 *            textbox22
 * @param string
 *            desc
 */
com.whuang.hsj.checkIntTextbox = function(textbox22, desc) {
	if (!com.whuang.hsj.isHasValue(textbox22.value)) {
		alert(desc + " should not be null.");
		textbox22.focus();
		return false;
	} else {
		if (!com.whuang.hsj.isWholeNumber(textbox22.value)) {
			alert(desc + " invalid,please input again.");
			textbox22.select();
			return false;
		}
	}
	return true;
};

com.whuang.hsj.setTextboxs = function(textboxs22, values) {
	for ( var i = 0; i < textboxs22.length; i++) {
		textboxs22[i].value = values[i];
	}
};
/**
 * 
 * @param {Object}
 *            obj23
 */
com.whuang.hsj.isDisabled = function(obj23) {
	if (obj23.disabled) {
		return true;
	} else {
		return false;
	}
};
/**
 * need to be valied
 */
com.whuang.hsj.isReadOnly = function(obj23) {
	if (obj23.readOnly) {
		return true;
	} else {
		return false;
	}
};
/**
 * 
 * @param {Object}
 *            msg
 */
com.whuang.hsj.confirmDelete = function(msg) {
	if (!com.whuang.hsj.isHasValue(msg)) {
		msg = "Are you sure to delete ?";
	}
	var bl = confirm(msg);
	return bl;
};

/**
 * input22:name of input tag
 */
com.whuang.hsj.isHasValueByName = function(input22) {
	var realName = com.whuang.hsj.$$one(input22);
	var initBool = com.whuang.hsj.isHasValue(realName.value);
	realName = null;// free memory
	return initBool;
};
/**
 * example:input type="checkbox" name="id_selected_1" Determine whether there
 * are multiple checkbox in which one or more checkbox is selected
 * 
 * @param {Object}
 *            prefixStr
 * @param {Object}
 *            countMin
 * @param {Object}
 *            countMax
 */
com.whuang.hsj.isSel4CheckboxbySequence = function(prefixStr, countMin,
		countMax) {
	var initBool = false;
	for ( var ik = countMin; ik <= countMax; ik++) {
		var checkbox227 = com.whuang.hsj.$$arr(prefixStr + ik);
		if (checkbox227 == null || checkbox227 == undefined) {

		} else {
			if (com.whuang.hsj.isCheckcheckbox(checkbox227)) {
				initBool = true;
				checkbox227 = null;// free memory
				break;
			}
		}
	}
	return initBool;
};

com.whuang.hsj.isSelectlAll4CheckboxbySequence = function(prefixStr, countMin,
		countMax) {
	var initBool = true;
	for ( var ik = countMin; ik <= countMax; ik++) {
		var checkbox227 = com.whuang.hsj.$$arr(prefixStr + ik);
		if (checkbox227 == null || checkbox227 == undefined) {

		} else {
			if (!com.whuang.hsj.isCheckcheckbox(checkbox227)) {
				initBool = false;
				checkbox227 = null;// free memory
				break;
			}
		}
	}
	return initBool;
};
/*******************************************************************************
 * select all
 */
com.whuang.hsj.setSel4CheckboxbySequence = function(prefixStr, countMin,
		countMax) {
	for ( var ik = countMin; ik <= countMax; ik++) {
		var checkbox227 = com.whuang.hsj.$$arr(prefixStr + ik);
		if (checkbox227 == null || checkbox227 == undefined) {
		} else {
			if (!com.whuang.hsj.isCheckcheckbox(checkbox227)) {
				com.whuang.hsj.setCheckboxByIndex(checkbox227, 0);
			}
		}
	}
};
/*******************************************************************************
 * cancel select
 */
com.whuang.hsj.deSetSel4CheckboxbySequence = function(prefixStr, countMin,
		countMax) {
	for ( var ik = countMin; ik <= countMax; ik++) {
		var checkbox227 = com.whuang.hsj.$$arr(prefixStr + ik);
		if (checkbox227 == null || checkbox227 == undefined) {
		} else {
			if (com.whuang.hsj.isCheckcheckbox(checkbox227)) {
				com.whuang.hsj.deSetCheckboxByIndex(checkbox227, 0, false);
			}
		}
	}
};

com.whuang.hsj.deSetSel4CheckboxbySequence2 = function(prefixStr, countMax) {
	com.whuang.hsj.deSetSel4CheckboxbySequence(prefixStr, 1, countMax);
};
com.whuang.hsj.setSel4CheckboxbySequence2 = function(prefixStr, countMax) {
	com.whuang.hsj.setSel4CheckboxbySequence(prefixStr, 1, countMax);
};
/**
 * example:input type="checkbox" name="id_selected_1" Determine whether there
 * are multiple checkbox in which one or more checkbox is selected
 * 
 * @param {Object}
 *            prefixStr
 * @param {Object}
 *            countMax function name must use diffrent name !!!
 */
com.whuang.hsj.isSel4CheckboxbySequence2 = function(prefixStr, countMax) {
	return com.whuang.hsj.isSel4CheckboxbySequence(prefixStr, 1, countMax);
};
/**
 * example:input type="checkbox" name="id_selected_1"
 * 
 * @param {Object}
 *            prefix23
 * @param {Object}
 *            countMin
 * @param {Object}
 *            countMax
 */
com.whuang.hsj.getCheckboxArrByPrefix = function(prefix23, countMin, countMax) {
	var arr = new Array();
	for ( var ik = countMin; ik <= countMax; ik++) {
		arr.unshift(com.whuang.hsj.$$arr(prefix23 + ik));
	}
	return arr.reverse();// reverse sequence
};
/**
 * example:input type="checkbox" name="id_selected_1"
 * 
 * @param {Object}
 *            prefix23
 * @param {Object}
 *            countMax
 */
com.whuang.hsj.getCheckboxArrByPrefix2 = function(prefix23, countMax) {
	return com.whuang.hsj.getCheckboxArrByPrefix(prefix23, 1, countMax);
};

/*******************************************************************************
 * batch toggle checkbox
 */
com.whuang.hsj.selectAllcheckbox = function(checkboxobj, prefixStr, sum_int) {
	if (com.whuang.hsj.isCheckcheckboxOne(checkboxobj)) {
		com.whuang.hsj.setSel4CheckboxbySequence2(prefixStr, sum_int);
	} else {
		com.whuang.hsj.deSetSel4CheckboxbySequence2(prefixStr, sum_int);
	}
};
/*******************************************************************************
 * batch toggle checkbox
 */
// com.whuang.hsj.toggleAllCheckboxs=function(checkboxobj,sum_int,prefixion){
// var plicySize=endId- startId+1;//${fn:length(examPolicyes) }
// com.whuang.hsj.selectAllcheckbox(checkboxobj,prefixion,sum_int);
// };
/*******************************************************************************
 * check email
 * 
 */
com.whuang.hsj.isEmail = function(email2) {
	if (typeof email2 == 'object') {
		email2 = email2.value;
	}
	var pattern = /\w+([_+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
	return pattern.test(email2);
};
com.whuang.hsj.setBatchInputValue = function(inputName, valueArray) {
	var choic_length = valueArray.length;
	for ( var i = 0; i < choic_length; i++) {
		document.getElementsByName(inputName)[i].value = valueArray[i];
	}
};

function warning_msg(decs) {
	return "<font color=\"red\" >" + decs + "</font>";
}
function right_msg(decs) {
	return "<font color=\"green\" style=\"font-weight:bold\" >" + decs
			+ "</font>";
}

/**
 * check input box:whether is blank
 * 
 * @param sefObj :
 *            object of input box
 * @param property_name:description,such
 *            as "goods name"; is not necessary
 * @returns {Boolean}
 */
com.whuang.hsj.checkName = function(sefObj, property_name) {
	var value = sefObj.value;// value of input box
	var name = sefObj.name;// name of input box
	/*
	 * if (name == "dateTimeBean.time" || name == "dateTimeBean.date") { var
	 * picker = dojo.widget.byId("picker"); // string value value =
	 * picker.getValue(); }
	 */
	if (property_name == undefined) {// the second argument is not
		// given/offered
		property_name = name.replace('.', ' ').replace('_', ' ');// eg.
		// name:goods.alias
	}
	var div2 = document.getElementById(name + "_div");// id of div
	// tag:goods.alias_div
	// alert(div2);
	if (com.whuang.hsj.isEmpty(value)) {
		// sefObj.focus();
		// sefObj.select();

		div2.innerHTML = warning_msg(property_name + " can not be null.");// in
		// common_util.js
		return false;
	} else {
		div2.innerHTML = right_msg("ok");// in common_util.js
		return true;
	}

};
/*******************************************************************************
 * 
 * @param confirm_password:string(not
 *            value,is name)/obj
 * @param passwd2:string(not
 *            value,is name)/obj
 */
com.whuang.hsj.checkConfirmPasswd = function(confirm_password, passwd2) {
	if (typeof confirm_password == 'string') {
		confirm_password = com.whuang.hsj.$$one(confirm_password);
	}
	var password_value = confirm_password.value;// value of input box
	var password_name = confirm_password.name;// name of input box
	var property_name = password_name.replace('.', ' ').replace('_', ' ');// eg.
	// name:goods.alias
	var div2 = document.getElementById(password_name + "_div");// id of div
	if (typeof passwd2 == 'string') {
		passwd2 = com.whuang.hsj.$$one(passwd2);
	}
	if (password_value != passwd2.value) {
		div2.innerHTML = warning_msg(property_name
				+ " do not agree with password.");
		return false;
	} else {
		div2.innerHTML = right_msg(property_name + " is ok.");
		return true;
	}
};

com.whuang.hsj.addButton = function(parent22, onClickMethod) {
	var newInput = document.createElement("input");
	newInput.type = "button";
	buttonTd.appendChild(newInput);
	newInput.onclick = onClickMethod;
	return newInput;
};
com.whuang.hsj.addTextbox = function(parent22, name) {
	var newInput = document.createElement("input");
	newInput.type = "text";
	newInput.name = name;
	buttonTd.appendChild(newInput);
	return newInput;
};
/***
 * convert [request query string] to [json string]
 */
com.whuang.hsj.queryString2JsonStr=function(queryString)
{
	return (com.whuang.hsj.object2jsonStr(com.whuang.hsj.queryString2Object(queryString)));
};

/***
 * convert [request query string] to [js object]
 */
com.whuang.hsj.queryString2Object=function(queryString)
{
	if(queryString==''||queryString==undefined)
	{
		return null;
	}
	var queryArray=queryString.split('&');
	var queryObj=new Object();
	for(var i=0;i<queryArray.length;i++)
	{
		var oneQuery=queryArray[i];
		var oneQueryKeyValue=oneQuery.split('=');
		if(oneQueryKeyValue.length>1)
		{
			queryObj[oneQueryKeyValue[0]]=oneQueryKeyValue[1];
		}
	}
	return queryObj;
};
/***
 * convert js object to json string
 */
com.whuang.hsj.object2jsonStr=function(requestObj)
{
	return JSON.stringify(requestObj);
};

isCheck_checkbox=function (){
	var checkboxs22=document.getElementsByName("hobby");
	var isChecked=com.whuang.hsj.isCheckcheckbox(checkboxs22);
	if(isChecked){
		alert("has checked!"+" ,"+com.whuang.hsj.getCheckboxValue(checkboxs22));
	}
	else{
		alert("not has checked yet"+" ,"+com.whuang.hsj.getCheckboxValue(checkboxs22));
	}
};
function countCheckbox() {
	var checkboxs22 = document.getElementsByName("hobby");
	alert(com.whuang.hsj.getCheckboxCount(checkboxs22));
}

function allCheckboxIndex() {
	var checkboxs22 = document.getElementsByName("hobby");
	alert(com.whuang.hsj.getCheckboxIndex(checkboxs22));
}

function setCheckboxByIndexMethod() {
	var checkboxs22 = document.getElementsByName("hobby");
	var indexeswe = document.forms[3].checkboxIndexs23.value;
	com.whuang.hsj.setCheckboxByIndex(checkboxs22, indexeswe);
}

function setCheckboxByValuesMethod() {
	var checkboxs22 = document.getElementsByName("hobby");
	var indexeswe = document.forms[3].checkboxValues23.value;
	com.whuang.hsj.setCheckboxByValue(checkboxs22, indexeswe);
}

function CheckboxLastIndex() {
	var checkboxs22 = document.getElementsByName("hobby");
	var lastIndex = com.whuang.hsj.continuationCheckbox(checkboxs22);
	alert(lastIndex);
};
/*******************************************************************************
 * Only compatible with IE(Internet Explorer)
 */
function Addme2Favorite() {
	var userAgent = navigator.userAgent.toLowerCase();
	var browser = navigator.appName;
//	var b_version = navigator.appVersion;
//	var version = b_version.split(";");

	isIE9test = userAgent.indexOf("windows nt ") > 0
			&& userAgent.indexOf("trident/5.0") > 0
			&& browser == "Microsoft Internet Explorer";
	if (isIE9test) {

		var kdocTitle = document.title;// title
		if (kdocTitle == null) {
			var t_titles = document.getElementByTagName("title");
			if (t_titles && t_titles.length > 0) {
				kdocTitle = t_titles[0];
			} else {
				kdocTitle = "";
			}
		}
		var currentHref = location.href;
		window.external.AddFavorite(currentHref, kdocTitle);
	}else{//not IE
		alert("browser does not support 'window.external.AddFavorite'.");
	}
}
