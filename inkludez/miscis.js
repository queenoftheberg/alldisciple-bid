/* J a v a s c r i p t   for  abba site
*/
function emladrex() {
    /* replace dummy text with valid info */
    document.getElementById("clicktext").innerHTML = "Thank you.  You can now click to send/ right-click to copy below";

    document.getElementById("emlbutton").value = "So you really are human.  Nice!  Click / Right-click below";
    document.getElementById("emlbutton").title = "You can now Click on the valid link below to send / right-click to copy";
    document.getElementById("emlbutton").alt = "You can now Click on the valid link below to send / right-click to copy";
    document.getElementById("emlbutton").id = "emlbut";
    document.getElementById("emlwaiter").innerHTML = "Click below: then Wait a moment for mail app to open<br/>or Right-click to copy for web-based email";
    document.getElementById("emlwaiter").id = "emlwait";

    document.getElementById("emladr").href = "mailto:mission@alldisciple.com?subject=Mission Boat online emailer" ;
    document.getElementById("emladr").innerHTML = "mission@alldisciple.com";
    document.getElementById("emladr").title = "Click here to Send / Right-click to Copy";

    document.getElementById("emladrimg").href = "mailto:mission@alldisciple.com?subject=Mission Boat online emailing" ;
    document.getElementById("emladrimg").title = "Click here to send / right-click to copy";
}
