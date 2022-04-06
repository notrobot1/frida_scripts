var moduleData = Process.getModuleByName("func.exe");
//var I00415450 = moduleData.base.add("0x15450"); 
var I0041547a = moduleData.base.add("0x1547a"); 

//Interceptor.attach(I00415450, {
//	onEnter: function(args){	
		//var methodsPtr = ptr(this.context.ebp);
		//var namePtr = Memory.readPointer(methodsPtr);
		//var intadd = namePtr.add("0x8");
		//console.log("\n");
	    //console.log("\n"+args[0].toInt32() +"\n");
		//console.log(args[0] +"\n");
		//console.log(parseInt(methodsPtr));
		//console.log(Memory.readU32(namePtr));
		//console.log(Memory.readU32(intadd));
	 	//console.log(JSON.stringify(this.context))
//	}
//});

const open = new NativeFunction(I00415450, 'int', ['int']); // подключаемся к функции и перечисляем через звапятую типы входных данных
Interceptor.replace(I00415450, new NativeCallback((pathPtr) => {
	//console.log(pathPtr.readInt());
  //const path = pathPtr.NativeFunction();

  const fd = open(133);// вставляем новые данные в функцию. Через запятую 
  return fd; //возвращаем
}, 'int', ['int']));
