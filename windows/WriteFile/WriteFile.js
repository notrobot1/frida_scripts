//var msgbox = Module.getExportByName('kernel32.dll','ReadConsoleA');
var add = Module.findExportByName('kernel32.dll','WriteFile');

//console.log(Instruction.parse(add).toString());

Interceptor.attach(add, {
	onEnter: function(args){
		//console.log(args[1]);
		//console.log(Instruction.parse(args[1]).toString());
		var test = Instruction.parse(args[1]).opStr;
		//console.log(hexdump(args[1], {offset: 0, length: 11, header: false, ansi: true}));
		//console.log(args[1].readByteArray(11));
		
		args[1].writeByteArray([0x6C, 0x6F, 0x6F, 0x6F, 0x6C]);
		//console.log(Memory.allocUtf8String(test));
		//console.log(Memory.allocAnsiString(test));
		
		//Memory.patchCode(args[1], 1, function (code) {
		//	args[1].writeByteArray([0x6C]);
		//});
		

		
		
		//console.log(hexdump(args[1], {offset: 0, length: 11, header: false, ansi: true}));

	},

});
