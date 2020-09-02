# Javascript-Scope

https://www.w3schools.com/js/js_scope.asp JS Scope
https://developer.mozilla.org/en-US/docs/Glossary/Scope Scope

Scope adalah konsep dalam flow data variabel. ​
Menentukan suatu variabel bisa diakses pada scope tertentu atau tidak.

Analoginya seperti ini:​
Kita semua bisa melihat bintang-bintang dilangit karena bumi bersifat global.​
Namun jika kamu tinggal di Bandung, kamu tidak akan bisa melihat monas yang berada di jakarta. Monas bersifat local yaitu hanya berada di Jakarta.​

1. Blocks​
   Blocks adalah code yang berada didalam curly braces {}.​ Conditional, function, dan looping menggunakan blocks.​

2. Global Scope
   Global scope berarti variabel yang kita buat dapat diakses dimanapun dalam suatu file.​Agar menjadi Global Scope, suatu variabel harus dideklarasikan diluar Blocks.​
   Contoh Global Scope :
   let myName = "Raisha";
   function greeting() {
   return myName;
   }
   console.log(myName); /_Output Raisha_/

3) Local Scope
   Local scope berarti kita mendeklarasikan variabel didalam blocks seperti function, conditional, dan looping.​ Maka variabel hanya bisa diakses didalam blocks saja. Tidak bisa diakses diluar blocks.​
   Contoh Local Scope :
   function greeting() {
   let myName = "Raisha";
   return myName; // Raisha
   }
   console.log(greeting()); /_Output Raisha _/
   console.log(myName); /_Error tidak ada output karena myName tidak dapat ditentukan karena local scope _/
