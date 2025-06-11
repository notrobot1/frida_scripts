 <h1>Меняем текст в MessageBox</h1>
 <p>msg.exe - при запуске всплывает messegebox с текстом hello </p>
 <p>frida -f .\msg.exe -l MessageBoxA.js --no-pause</p>
 <p> После запуска команды выше, всплывает окно с текстом lool </p>

 <p>Если вы используете Frida версии 17.0.0 или выше, используйте скрипт MessageBoxA17.js</p>
