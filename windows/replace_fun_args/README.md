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
}```
