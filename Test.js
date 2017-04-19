'use strict'
var java = require('java');
var path = require('path');
var fs = require("fs");

java.classpath.push("../lib/jagacy3270.jar");
java.classpath.push("../lib/commons-lang3-3.1.jar");
java.classpath.push("../lib/json-simple-1.1.1.jar");
java.classpath.push("../java/Jagacy");

var javaLangSystem = java.import('java.lang.System');
var JagacyException = java.import("com.jagacy.util.JagacyException");
var jagacyException = new JagacyException("JagacyException");
var Session3270 = java.import("com.jagacy.Session3270");
var JagacyObj = java.import("Java/Jagacy");
var session3270 = new Session3270("TEST");
var JagacyProperties = java.newInstanceSync("com.jagacy.util.JagacyProperties", "JagacyProperties");
// var jagacyProperties = new JagacyProperties("JagacyProperties");
/*java.callMethodSync(JagacyProperties,"set","jagacy.host","teague-tammvs1.tamu.edu");
 java.callMethodSync(JagacyProperties,"set","jagacy.port","992");*/
java.callStaticMethodSync('java.lang.System', "setProperty", "jagacy.host","teague-tammvs1.tamu.edu");
java.callStaticMethodSync('java.lang.System', "setProperty", "jagacy.port","992");

//java.setPropertySync('java.lang.System',  "jagacy.host","teague-tammvs1.tamu.edu");


"jagacyPlugin", function(err, properties) {
    if(err) { console.error(err);
        java.callStaticMethodSync('java.lang.System', "setProperty", "window", "true");
        java.callStaticMethodSync('java.lang.System', "setProperty", "jagacy.host", "teague-tammvs1.tamu.edu");
        java.callStaticMethodSync('java.lang.System', "setProperty", "jagacy.port", "992");

        properties.putSync("jagacy.host","teague-tammvs1.tamu.edu");
        properties.putSync("jagacy.port","992");
        properties.putSync("window","true");

    }
    // results from doSomething
}
var Session3270 = java.newInstanceSync("com.jagacy.Session3270","main","teague-tammvs1.tamu.edu",992,"IBM-3279-2",false);
java.callMethodSync(Session3270, "open");
console.log(java.callMethodSync(Session3270,"getCrc32"));
var path = require('path');
var fs = require("fs");

var Session3270 = java.newInstanceSync("com.jagacy.Session3270","Example1","teague-tammvs1.tamu.edu",992);
java.callMethodSync(Session3270, "open");

/*
 var properties = java.newInstanceSync('java.util.Properties');
 properties.putSync("jagacy.host","teague-tammvs1.tamu.edu");
 properties.putSync("jagacy.port","992");
 properties.putSync("window","true");
 var Session3270 = java.newInstanceSync("com.jagacy.Session3270","jagacyPlugin",properties);
 */

//java.callMethodSync(Session3270, "open");



var Session3270 = function() {
    this.name = "Session3270";

}
//java.callMethodSync(JagacyProperties,"set","jagacy.host","teague-tammvs1.tamu.edu");
//java.callMethodSync(JagacyProperties,"set","jagacy.port","992");
//java.callStaticMethodSync('java.lang.System', "setProperty", "jagacy.host","teague-tammvs1.tamu.edu");
Session3270.prototype.print = function() {
    console.log(this.name);
}

var mainObj = new Session();

mainObj.print();
var inheritsFrom = function (child, parent) {
    child.prototype = Object.create(parent.prototype);
};
var Session3270 = function() {
    this.name = "NodeToJava";
    this.surname = "I'm the child";
}

inheritsFrom(NodeToJava, Jagacy);