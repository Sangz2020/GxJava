"use strict";
var java = require('java');
var path = require('path');
var fs = require("fs");

java.classpath.push("../lib/jagacy3270.jar");
var Exception = java.import("com.jagacy.util.JagacyException");
var Key = java.import("com.jagacy.Key");

function setupSystemProperties() {
    java.callStaticMethodSync('java.lang.System', "setProperty", "jagacy.host", "teague-tammvs1.tamu.edu");
    java.callStaticMethodSync('java.lang.System', "setProperty", "jagacy.port", "992");
    java.callStaticMethodSync('java.lang.System', "setProperty","emulator.showcert", "false");
    java.callStaticMethodSync('java.lang.System', "setProperty","jagacy.ssl", "true");
    java.callStaticMethodSync('java.lang.System', "setProperty","NodeJava.window", "true");
}
var session = {};
function mainFunction() {
    setupSystemProperties();
    try {
        session = java.newInstanceSync('com.jagacy.Session3270', "NodeJava");
        java.callMethodSync(session, "open");
        //Home Screen

        java.callMethodSync(session, "waitForPosition", 17, 6, "TEXAS A & M UNIVERSITY", 10000);
        java.callMethodSync(session, "waitForChange", 10000);
        java.callMethodSync(session, "writePosition", 23, 1, "PHONBOOK");
        java.callMethodSync(session, "waitForChange", 10000);
        java.callMethodSync(session, "writeKey", Key.ENTER);
        java.callMethodSync(session, "waitForChange", 10000);

        //Phonebook Menu screen
        java.callMethodSync(session, "waitForPosition", 1, 27, "TAMU  System  Directory", 10000);
        java.callMethodSync(session, "writePosition", 11, 33, "F");
        java.callMethodSync(session, "waitForChange", 10000);
        java.callMethodSync(session, "writeKey", Key.ENTER);
        java.callMethodSync(session, "waitForChange", 10000);

        //Phonebook Search Screen
        java.callMethodSync(session, "writePosition", 19, 6, "PRA");
        java.callMethodSync(session, "waitForChange", 10000);
        java.callMethodSync(session, "writeKey", Key.ENTER);
        java.callMethodSync(session, "waitForChange", 10000);
        var results = [];
        for (var row = 5; row <= 16; row++) {
            console.log(java.callMethodSync(session,"readRow",row));
        }
        java.callMethodSync(session, "waitForChange", 10000);
    } catch(Exception) {
        console.error("Exception occurred during session interaction" +Exception);
    }
}
mainFunction();
try {
    java.callMethodSync(session, "close");
} catch(Exception) {
    console.error("Exception occurred during session interaction" +Exception);
}

/*exports.printMsg = function() {
 console.log("This is a message from the demo package");
 }*/
//exports.nodetojagacy = mainFunction();