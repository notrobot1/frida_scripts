
Java.perform(function () {
  var Activity = Java.use("android.app.Activity");
  var ActivityThread = Java.use("android.app.ActivityThread");
  var Instrumentation = Java.use("android.app.Instrumentation");

  Activity.startActivity.overload('android.content.Intent').implementation = function (intent) {
    console.log("startActivity() intent: " + intent);
    this.startActivity(intent);
  };

  Activity.startActivityForResult.overload('android.content.Intent', 'int').implementation = function (intent, requestCode) {
    console.log("startActivityForResult() intent: " + intent + ", requestCode: " + requestCode);
    this.startActivityForResult(intent, requestCode);
  };

  ActivityThread.performLaunchActivity.overload(
    'android.app.ActivityThread$ActivityClientRecord',
    'android.content.Intent'
  ).implementation = function (activityClientRecord, intent) {
    console.log("performLaunchActivity() intent: " + intent);
    return this.performLaunchActivity(activityClientRecord, intent);
  };

  Instrumentation.callActivityOnCreate.overload('android.app.Activity', 'android.os.Bundle').implementation = function (activity, savedInstanceState) {
    console.log("callActivityOnCreate() activity: " + activity + ", savedInstanceState: " + savedInstanceState);
    return this.callActivityOnCreate(activity, savedInstanceState);
  };

  Instrumentation.callActivityOnResume.overload('android.app.Activity').implementation = function (activity) {
    console.log("callActivityOnResume() activity: " + activity);
    return this.callActivityOnResume(activity);
  };
  
  
  });
