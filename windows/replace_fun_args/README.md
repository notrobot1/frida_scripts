<h1>Меняем аргументы функции</h1>
<p>Программа вызывает функцию, передает в нее число (123), и выводит его в консоль </p>

```
int ok() {
    cout << "Hello :)." << endl;
    return 0;
}
int neok() {
    cout << "NO NO NO!" << endl;
    return 0;
}

int see(int test) {
    cout << test << endl;
    return 0;
}


int main(){
    string valid_pass = "qwerty123";
    see(123);
    
    return 0;
}
```


<p> Запускаем наш скрипт </p>
```
frida -f .\func.exe -l func.js --no-pause 
```
<p>Входные данные изменились</p>

<h2>Поддерживаемые типы: </h2>


   <li> void </li>
    <li>pointer</li>
    <li>int</li>
    <li>uint</li>
    <li>long</li>
   <li>ulong</li>
    <li>char</li>
    <li>uchar</li>
    <li>size_t</li>
    <li>ssize_t</li>
    <li>float</li>
    <li>double</li>
    <li>int8</li>
    <li>uint8</li>
    <li>int16</li>
    <li>uint16</li>
    <li>int32</li>
    <li>uint32</li>
    <li>int64</li>
    <li>uint64</li>
    <li>bool</li>
