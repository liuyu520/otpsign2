// return parameter
var xhr =null;
var ii=0;
var getXHR=null;
var objectXHR=null;
var responseMethod222222222111221;
var browser=navigator.appName;
var isIE=(browser=="Microsoft Internet Explorer");
var createXHR=function() {
	var xhr;
	try {
		xhr =xhr = new XMLHttpRequest();
		return xhr;
	} catch (e) {
		try {
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
			return xhr;
		} catch (ee) {
			xhr = false;
		}
	}
	if (!xhr && typeof XMLHttpRequest != 'undefined') {
		 new ActiveXObject("Msxml2.XMLHTTP");
		return xhr;
	}
};

var onreadystatechangeMethod = function() {
	var copyObj=document.getElementById("copy");
	var obj = objectXHR;//		
	var isExist=(null!=copyObj);
	if (obj.readyState == 0) {
		if(isExist)
		copyObj.innerHTML = "Sending Request...";
	}
	if (obj.readyState == 1) {
		if(isExist)
		copyObj.innerHTML = "Loading Response...";
	}
	if (obj.readyState == 2) {
		if(isExist)
		copyObj.innerHTML = "Response Loaded...";
	}
	if (obj.readyState == 3) {
		if(isExist)
		copyObj.innerHTML = "Response Ready...";
	}
	if (obj.readyState == 4) {
		if (obj.status == 200) {
			//alert("this : "+this);//this direct to window
			if(isExist)
			copyObj.innerHTML = "Response Complete...";
			window.flag = true;
			var response = obj.responseText;
			//resultArray.result=response;
			if (!(responseMethod222222222111221 == null || responseMethod222222222111221 == undefined)) {
				responseMethod222222222111221(response);
				//alert(response+": "+(ii++));
			}
//			this.result.push(response);
			// alert("xmlhw.result:"+xmlhw.result);

		} else if (obj.status == 404) {
			if(null!=copyObj)
			copyObj.innerHTML = "File not found";
		} else {
			if(null!=copyObj)
			copyObj.innerHTML = "There was a problem retrieving the XML.";
		}
	}
};

objectXHR=createXHR();

function XMLHttpHuangWei(url, arges, responseMethod2) {
	//objectXHR=;
	responseMethod222222222111221=responseMethod2;
	objectXHR=createXHR();
	//alert(this.xhr1);
	this.url = url;
	argObject = new Object();
	argObject.arg = arges;
	this.argesArray = argObject;
	this.method = responseMethod222222222111221;
	this.result = new Array();
	getXHR=function(){
		return window.objectXHR;
		//return createXHR();
	};
	

	this.XMLGetMethod = function() {
		getXHR().onreadystatechange = onreadystatechangeMethod;
		var args23="";
		if(this.argesArray.arg!=null&&this.argesArray.arg!=""){
			args23=this.argesArray.arg+"&";
		}
		getXHR().open("GET", this.url + '?' + args23+"timestamp=" + (new Date()).getTime()+"&isIE="+isIE , true);
		getXHR().send(null);
	};
	this.XMLPostMethod = function() {// xmlObj
	// alert("responseMethod:\n"+responseMethod);
	// alert("method:\n"+this.method);
		getXHR().onreadystatechange = onreadystatechangeMethod;
		getXHR().open("POST", this.url, true);
		getXHR().setRequestHeader('Content-type',
				'application/x-www-form-urlencoded');
		getXHR().send(this.argesArray.arg);
		// alert(this.argesArray.arg);
		//		
	};
}
