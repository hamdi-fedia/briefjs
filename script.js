//exercice 1
function inverse (a , b){
    b = b + a
    a = b - a
    b = b - a
    
   return "la valeur de a est: " + a + " est la valeur de b est: " + b
}
console.log("exercice 1 :: " ,inverse (6 , 2))

//exercice 2 

function afficher (){
   Nom = "Fedia"
   Age = 23
   Homme = false
    
   return "le nom est: " + Nom +  " , age est: " + Age + " homme :" + Homme
}
console.log("exercice 2 :: " ,afficher ())

//exercice 3 

function puissance (a){
    a = a * a 
   return "la puissance est: " + a 
}
console.log("exercice 3 :: " ,puissance  (3))

//exercice 3 

function somme (a , b){
   return "la somme " +(a + b)
}
console.log("exercice 3 :: " ,somme(6 , 2))

//exercice 3 

function minutes (m){
    s = m * 60 
   return "minuteToSecond(" + m + ") ➞ " + s 
}
console.log("exercice 3 :: " , minutes (3))

//exercice 4 

function incrementer (i){
    s = i + 1 
   return "increment(" + i + ") ➞ " + s 
}
console.log("exercice 4 :: " , incrementer (3))


//exercice 5 

function surface (b , h){
    s = (b * h  )/2
   return "getSurface(" + b + "," + h + ") ➞ " + s 
}
console.log("exercice 5 :: " , surface (7,3))

//exercice 6

function inverseString(str) {
    return "strReverse(" + str +") ➞ " + str.split("").reverse().join("");
}
console.log("exercice 6 :: " , inverseString("fedia") )

//exercice 7

function maximum( a ,b ,c) {
    if (a > b) {
        max = a
    }else if (b > c) {
        max = b
    }else  {
        max = c
    }
    return "le maximum est " + max
}
console.log("exercice 7 :: " , maximum( 5 ,9 ,1)  )

//exercice 8 
 function tableau(){
 var  tab = [1, 1, 2, 3, 5, 8, 13];
   e = tab[0]

 return "getFirst([1, 1, 2, 3, 5, 8, 13])➞ " + e
 }

 console.log("exercice 8 :: " , tableau())

 //exercice 10 
 function resteDiv(a, b) {
    return "resteDiv(" +a +"," +b+") ➞ " + a % b
  }
  console.log("exercice 10 :: " , resteDiv(5, 2) )

  //exercice 11 

  function sommesup (a , b){
    s =(a + b)
    if (s < 100){
        return "check("+a +", "+ b +") ➞" + true
    }else{
        return "check("+a +", "+ b +") ➞" + false
    }
 }
 console.log("exercice 11 :: " ,sommesup(5 , 20))

//exercice 12

function heurs (h){
    s = h * 3600 
   return "minuteToSecond(" + h + ") ➞ " + s 
}
console.log("exercice 12 :: " , heurs (3))

//exercice 13 

function inferieur (a){
    
    if (a <= 0){
        return "checkNbr("+a +") ➞" + true
    }else{
        return "check("+a +") ➞" + false
    }
 }
 console.log("exercice 13 :: " ,inferieur(-5))

 //exercice 14 

 function egal (a , b){
    if (a == b){
        return "isEqual("+a +", "+ b +") ➞" + true
    }else{
        return "isEqual("+a +", "+ b +") ➞" + false
    }
 }
 console.log("exercice 14 :: " ,egal(20 , 20))

 //exercice 15 

 function div (a){
    if (a % 5 == 0){
        return "isDivisible("+a +") ➞" + true
    }else{
        return "isDivisible("+a +") ➞" + false
    }
 }
 console.log("exercice 15 :: " ,div(21))



//exercice 16

function heursminut (h , m){
    s = (h * 3600) + (m * 60)
   return "hmTos" + h + ", "+ m +") ➞"  + s 
}
console.log("exercice 16 :: " , heursminut (1 ,1))

