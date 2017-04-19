'use strict'
var java = require('java');
var path = require('path');
var fs = require("fs");

java.classpath.push("../lib/jagacy3270.jar");
java.classpath.push("../lib/commons-lang3-3.1.jar");
java.classpath.push("../lib/json-simple-1.1.1.jar");
//java.classpath.push("log4j-1.2.16.jar");
//java.classpath.push("rt.jar");

var javaLangSystem = java.import('java.lang.System');
var JagacyException = java.import("com.jagacy.util.JagacyException");
var jagacyException = new JagacyException("JagacyException");
var Session3270 = java.import("com.jagacy.Session3270");
//var session3270 = new Session3270("TEST");


var properties = java.import('java.util.Properties');
var props = new properties();
props.putSync("SESSION_NAME","TEST");
props.putSync("jagacy.host","teague-tammvs1.tamu.edu");
props.putSync("jagacy.port","992");
props.putSync("window", "true");
props.putSync("screenshots", "on");
props.putSync("jagacy.ssl", "false");
props.putSync("emulator.showcerts", "false");
/*

java.callStaticMethodSync('java.lang.System', "setProperty", "window", "true");
java.callStaticMethodSync('java.lang.System', "setProperty", "jagacy.host", "teague-tammvs1.tamu.edu");
java.callStaticMethodSync('java.lang.System', "setProperty", "jagacy.port", "992");
*/
var Session3270 = java.newInstanceSync("com.jagacy.Session3270","test", props);
console.log(Session3270);
java.callMethodSync(Session3270, "open");

//java.callStaticMethodSync('java.lang.System', "setProperty", "jagacy.host","teague-tammvs1.tamu.edu");
//java.callStaticMethodSync('java.lang.System', "setProperty", "jagacy.port","992");






0
//var JagacyProperties = java.newInstanceSync("com.jagacy.util.JagacyProperties","JagacyProperties",props);
//var jagacyProperties = new JagacyProperties("JagacyProperties",props);


0

//java.callMethodSync(JagacyProperties,"set","jagacy.host","teague-tammvs1.tamu.edu");
   //java.callMethodSync(JagacyProperties,"set","jagacy.port","992");
/*try {



        java.callStaticMethodSync('java.lang.System', "setProperty", "jagacy.host", "teague-tammvs1.tamu.edu");
        java.callStaticMethodSync('java.lang.System', "setProperty", "jagacy.port", "992");
       // var Session3270 = java.newInstanceSync("com.jagacy.Session3270", "test", props);
        java.callMethodSync(session3270, "open");
/!* session3270.open(session3270, function (err,data) {
        if (err) {
            return err;
        }
        java.callStaticMethodSync('java.lang.System', "setProperty", "jagacy.host", "teague-tammvs1.tamu.edu");
        java.callStaticMethodSync('java.lang.System', "setProperty", "jagacy.port", "992");
        return data;
    })*!/
    // call session.close(); after 30 seconds

} catch(jagacyException) {
    console.error("Exception occurred while opening session"+jagacyException);
   // console.error(java.callMethodSync("jagacyException"));
}*/
javaLangSystem.out.printlnSync('Hello World');