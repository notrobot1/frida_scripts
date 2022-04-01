<h1>Меняем вывод в консоль</h1>
<p>Файл hello.exe при запуске выводит в консоль `hello from` </p>
<p>Патчим код при помощи frida </p>
<p>frida -f .\hello.exe -l WriteFile.js --no-pause</p>
<p>Выводит на экран lool from </p>
