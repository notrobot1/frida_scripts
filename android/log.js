Java.perform(function () {
   var Log = Java.use("android.util.Log");
   Log.d.overload('java.lang.String', 'java.lang.String').implementation = function (a, b) {
       send("Log.d()");
       send(a.toString());
       send(b.toString());
       return this.d.overload('java.lang.String', 'java.lang.String').call(this, a, b);
   };
   Log.v.overload("java.lang.String", "java.lang.String").implementation = function (a, b) {
       send("Log.v()");
       send(a.toString());
       send(b.toString());
       return this.v.overload("java.lang.String", "java.lang.String").call(this, a, b);
   };
   Log.i.overload("java.lang.String", "java.lang.String").implementation = function (a, b) {
       send("Log.i()");
       send(a.toString());
       send(b.toString());
       return this.i.overload("java.lang.String", "java.lang.String").call(this, a, b);
   };
   Log.e.overload("java.lang.String", "java.lang.string").implementation = function (a, b) {
       send("Log.e()");
       send(a.toString());
       send(b.toString());
       return this.e.overload("java.lang.String", "java.lang.String").call(this, a, b);
   };
   Log.w.overload("java.lang.String", "java.lang.String").implementation = function (a, b) {
       send("Log.w()");
       send(a.toString());
       send(b.toString());
       return this.w.overload("java.lang.String", "java.lang.String").call(this, a, b);
   };
});
