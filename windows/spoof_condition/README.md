<p>Программа a.exe проверяет 2 строчки, если они равны на экран выводится `hello` иначе выводится `NO NO NO` </p>

 ```
int ok() {
    cout << "Hello :)." << endl;
    return 0;
}
int neok() {
    cout << "NO NO NO!" << endl;
    return 0;
}

int main(){
    string valid_pass = "qwerty123";
      if ("qwe" == valid_pass) {
        ok();
      }else {
        neok();
      }
    return 0;
}
```
<p> В программе не предусмотренно успешное прохождение функции. </p>
<p>Заускаем наф скрипт ```frida -f .\a.exe -l test1.js --no-pause``` </p>
