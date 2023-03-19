Java.perform(function () {
  var layoutInflater = Java.use('android.view.LayoutInflater');
  layoutInflater.inflate.overload('int', 'android.view.ViewGroup', 'boolean').implementation = function (resId, viewGroup, attachToRoot) {
    console.log('[*] Inflate layout: ' + resId);
    return this.inflate(resId, viewGroup, attachToRoot);
  };
});
