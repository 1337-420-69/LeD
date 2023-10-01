/*:
 * @target MZ
 * @plugindesc Customize the title screen menu
 * @author ChatGPT
 *
 * @param X Position
 * @type number
 * @min 0
 * @desc The X position of the menu.
 * @default 0
 *
 * @param Y Position
 * @type number
 * @min 0
 * @desc The Y position of the menu.
 * @default 0
 *
 * @param Width
 * @type number
 * @min 0
 * @desc The width of the menu.
 * @default 240
 *
 * @param Height
 * @type number
 * @min 0
 * @desc The height of the menu.
 * @default 200
 *
 * @param Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc The opacity of the menu.
 * @default 255
 *
 * @help
 * This plugin allows you to customize the position, size, and opacity of the title screen menu.
 */

(() => {
    const parameters = PluginManager.parameters('CustomTitleMenuPosition');
    const xPosition = Number(parameters['X Position']);
    const yPosition = Number(parameters['Y Position']);
    const menuWidth = Number(parameters['Width']);
    const menuHeight = Number(parameters['Height']);
    const menuOpacity = Number(parameters['Opacity']);

    const _Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
    Scene_Title.prototype.createCommandWindow = function() {
        _Scene_Title_createCommandWindow.call(this);
        this._commandWindow.x = xPosition;
        this._commandWindow.y = yPosition;
        this._commandWindow.width = menuWidth;
        this._commandWindow.height = menuHeight;
        this._commandWindow.opacity = menuOpacity;
        this._commandWindow.refresh();
    };
})();

