# Crea un Verificador de Palíndromos

Un palíndromo es una palabra o frase que se puede leer de la misma manera hacia adelante y hacia atrás, ignorando la puntuación, el uso de mayúsculas/minúsculas y los espacios.

**Nota**: Deberás eliminar todos los caracteres no alfanuméricos (puntuación, espacios y símbolos) y convertir todo al mismo tipo de mayúscula/minúscula (mayúsculas o minúsculas) para poder verificar si algo es un palíndromo.

**Objetivo**: Construye una aplicación que sea funcionalmente similar a [este verificador de palíndromos](https://palindrome-checker.freecodecamp.rocks).

## Historias de Usuario

1. Debes tener un elemento `input` con el `id="text-input"`.
2. Debes tener un elemento `button` con el `id="check-btn"`.
3. Debes tener un elemento `div`, `span` o `p` con el `id="result"`.

4. Cuando hagas clic en el elemento `#check-btn` sin ingresar un valor en el elemento `#text-input`, debería aparecer una alerta con el texto **"Please input a value"**.
5. Cuando el elemento `#text-input` solo contenga la letra **A** y se haga clic en el elemento `#check-btn`, el elemento `#result` debería contener el texto **"A is a palindrome"**.
6. Cuando el elemento `#text-input` contenga el texto **eye** y se haga clic en el elemento `#check-btn`, el elemento `#result` debería contener el texto **"eye is a palindrome"**.
7. Cuando el elemento `#text-input` contenga el texto **_eye** y se haga clic en el elemento `#check-btn`, el elemento `#result` debería contener el texto **"_eye is a palindrome"**.
8. Cuando el elemento `#text-input` contenga el texto **race car** y se haga clic en el elemento `#check-btn`, el elemento `#result` debería contener el texto **"race car is a palindrome"**.
9. Cuando el elemento `#text-input` contenga el texto **not a palindrome** y se haga clic en el elemento `#check-btn`, el elemento `#result` debería contener el texto **"not a palindrome is not a palindrome"**.
10. Cuando el elemento `#text-input` contenga el texto **A man, a plan, a canal. Panama** y se haga clic en el elemento `#check-btn`, el elemento `#result` debería contener el texto **"A man, a plan, a canal. Panama is a palindrome"**.
11. Cuando el elemento `#text-input` contenga el texto **never odd or even** y se haga clic en el elemento `#check-btn`, el elemento `#result` debería contener el texto **"never odd or even is a palindrome"**.
12. Cuando el elemento `#text-input` contenga el texto **nope** y se haga clic en el elemento `#check-btn`, el elemento `#result` debería contener el texto **"nope is not a palindrome"**.
13. Cuando el elemento `#text-input` contenga el texto **almostomla** y se haga clic en el elemento `#check-btn`, el elemento `#result` debería contener el texto **"almostomla is not a palindrome"**.
14. Cuando el elemento `#text-input` contenga el texto **My age is 0, 0 si ega ym.** y se haga clic en el elemento `#check-btn`, el elemento `#result` debería contener el texto **"My age is 0, 0 si ega ym. is a palindrome"**.
15. Cuando el elemento `#text-input` contenga el texto **1 eye for of 1 eye.** y se haga clic en el elemento `#check-btn`, el elemento `#result` debería contener el texto **"1 eye for of 1 eye. is not a palindrome"**.
16. Cuando el elemento `#text-input` contenga el texto **0_0 (: /-\ :) 0-0** y se haga clic en el elemento `#check-btn`, el elemento `#result` debería contener el texto **"0_0 (: /-\ :) 0-0 is a palindrome"**.
17. Cuando el elemento `#text-input` contenga el texto **five|\_/|four** y se haga clic en el elemento `#check-btn`, el elemento `#result` debería contener el texto **"five|\_/|four is not a palindrome"**.

Cumple con las historias de usuario y pasa todas las pruebas a continuación para completar este proyecto. Dale tu propio estilo personal. ¡Feliz programación!
