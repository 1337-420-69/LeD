//=============================================================================
// PluginPattern.js                                                             
//=============================================================================


/*:
*
* @author Plugin Author Name
* @plugindesc The description of my plugin.
*
* @param Example Param 1
* @desc A description of my 1 param which is a string
* @default Example Test 1
*
* @param Example Param 2
* @desc A description of my 2 param which is a string
* @default Example Test 2
*
* @param Example Param 3
* @desc A description of my 3 param which is a string
* @default Example Test 1
* 
* @help
* This is where you put the help information for your plugin.
* 
//=============================================================================
//  Contact Information
//=============================================================================
*
* Contact me via twitter: EISKino, or on the rpg maker forums.
* Username on forums: Kino.
*
* Forum Link:
* Website Link:
* Twitter Link:
* Patreon Link:
*
* Hope this plugin pattern helps, and enjoy!
* --Kino
*/

//Namespace for any code you create; replace this with your own name
const MyNameSpace = MyNameSpace || {};

//Create a new namespace for plugins
MyNameSpace.Plugins = MyNameSpace.Plugins || {};

//Helpers for Utility Functions or for developer uses
MyNameSpace.Helpers = MyNameSpace.Helpers || {};

(function($) {

//=============================================================================
// PluginManager Parameters                                                             
//=============================================================================

  //Registers the Plugin for use 
  var parameters = PluginManager.parameters("PluginPattern");
  //A place that holds all the parameters from your plugin params above
  const PluginPatternParams = {
    ExampleParam1: String(parameters['Example Param 1']),
    ExampleParam1: String(parameters['Example Param 2']),
    ExampleParam3: String(parameters['Example Param 3'])
  };

  $.Plugins.Plugin1 = function($) {
    //This use strict keyword helps you write better code
    //it catches more possible errors in the code.
    'use strict';

    //This is where you write your own code.
    //Write whatever you want for your plugins.

//=============================================================================
// Public API / Exports                                                             
//=============================================================================
    
    //These are functions that you can access through your namespace
    //Example Access: MyNameSpace.Helpers.helper1("Hello World"); //Prints "Hello World" to the console
    $.Helpers.helper1 = function(Text) {
      console.log(text);
    };

    $.Helpers.helper2 = function() {
      console.log(PluginPatternParams.ExampleParam2); //Example Test
    };

  };

  //Run All Plugin Code
  $.Plugins.Plugin1();
})(MyNameSpace);
