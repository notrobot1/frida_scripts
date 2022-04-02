var moduleData = Process.getModuleByName("a.exe");
var start = moduleData.base.add("0x1528"); //функция переадресованая в фалсе
var jumpto = moduleData.base.add("0x1521"); //функция при выполнении условия
var startI = Instruction.parse(start); //адрес при не прохождении условия
var jumptoI = Instruction.parse(jumpto); //адрес при прохождении условия

console.log("jump" + " " +jumptoI);
console.log("start" + " " +startI);
console.log("---------------");
console.log(startI.opStr);

console.log(Instruction.parse(start)); //инструкция до внедрения
Memory.patchCode(start, startI.size, code => {
			const cw = new X86Writer(code, { pc: start });
			//cw.putNopPadding(1);
			//cw.putNopPadding(1);
			cw.putCallAddress(jumpto); //внедряем call с адресом на функцию
});
console.log(Instruction.parse(start));  //инструкция после внедрения
