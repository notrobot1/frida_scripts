Java.perform(function () {
  
  let AppCompatActivity = Java.use("android.widget.TextView");
  AppCompatActivity.findViewById.overload('int').implementation = function(var0) {
   var ret = this.findViewById(var0)
   return ret;
 }

});
