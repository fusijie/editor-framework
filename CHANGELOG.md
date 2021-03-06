## CHANGELOG

### v0.5.0 (developing)

 - upgrade to Electron v0.36.7
 - remove polymer
 - use shadow dom for panel content
 - disableAutoHideCursor by default for Editor.Window
 - add `Editor.DevTools` in main process
 - add mouse hint for tests
 - change the way of register ipc messages in package's entry point
 - change the field to register main menu item in `package.json` from `menus` to `main-menu`

### v0.4.0

 - upgrade to Electron v0.36.3
 - writing the code in es6 (working in progress)
 - define the entry app through `Editor.App.extend` instead of `global.__app`
 - replace `Editor.name` with `Editor.App.name`
 - replace `Editor.appPath` with `Editor.App.path`
 - replace `Editor.appHome` with `Editor.App.home`
 - replace `Editor.App.initCommander` with `Editor.App.beforeInit`
 - remove `Editor.App.load`, `Editor.App.unload`
 - `Editor.App` no longer accept ipc-message `app:*` register in it
 - support minify editor-framework in final product
 - move `core/` to `lib/main/`
 - move `page/` to `lib/renderer/`
 - move `share/` to `lib/share/`
 - change the unit test working pipeline
 - replace `Editor.registerPackagePath` with `Editor.Package.addPath`
 - replace `Editor.unregisterPackagePath` with `Editor.Package.removePath`
 - replace `Editor._packagePathList` with `Editor.Package.paths`
 - support load dependent packages through `pkgDependencies` in `package.json`
 - add `Editor.init` and `Editor.reset` which can help register environment quickly
 - replace `panel:open` ipc to `panel:run` in renderer process
 - add `panel-ready` function in panel element, it will invoked when panel been totally setup
 - add `Editor.Undo` module
 - support `path` when define a menu template
 - add `Editor.Menu.update` which can update a submenu without change its position
 - add `Editor.Menu.walk` which can walking the menu template tree
 - add `Editor.Menu.register` and add `Editor.Menu.getMenu`, useful when caching a menu template
 - add i18n solution
