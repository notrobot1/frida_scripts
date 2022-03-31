var msgbox = Module.getExportByName('user32.dll','MessageBoxA');
Interceptor.attach(msgbox, {
	onEnter: function(args){
		console.log(args[0]);
		console.log("text: ", args[1].readUtf8String());
		console.log(args[2]);
		console.log(args[3]);
		args[1].writeUtf8String("loool");
	},
	onLeave: function(retval){
		console.log("456");
	}
});
