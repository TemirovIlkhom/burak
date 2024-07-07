// Q - TASC

function hasProperty(obj: object, prop: string): boolean {
    return obj.hasOwnProperty(prop);
}


console.log(hasProperty({name: "BMW", model: "M3"}, "model")); // true qaytadi
console.log(hasProperty({name: "BMW", model: "M3"}, "year"));  // false qaytadi


// function objectToArray(obj: { [key: string]: any }): [string, any][] {
//   return Object.entries(obj);
// }

// const exampleObject = { a: 10, b: 20 };
// const result = objectToArray(exampleObject);

// console.log(result); // [['a', 10], ['b', 20]]




// function calculateSumOfNumbers(arr: any[]): number {
//   return arr.reduce((sum, item) => {
//       if (typeof item === 'number') {
//           return sum + item;
//       }
//       return sum;
//   }, 0);
// }


// const result = calculateSumOfNumbers([10, "10", {son: 10}, true, 35]);
// console.log(result);  




// function palindromCheck(str: string): boolean {
//   // Kiritilgan stringning barcha harflarini kichik harfga o'tkazib ol
//   const normalizedStr = str.toLowerCase();
//   // Kiritilgan stringni orqadan oldinga qarab o'qiydigan stringni yarat
//   const reversedStr = normalizedStr.split('').reverse().join('');
//   // Kiritilgan stringni orqadan o'qib olingan string bilan taqqosla
//   return normalizedStr === reversedStr;
// }

// console.log(palindromCheck("dad")); // true
// console.log(palindromCheck("son")); // false




// function getSquareNumbers(numbers: number[]): { number: number, square: number }[] {
//   return numbers.map(num => {
//       return { number: num, square: num * num };
//   });
// }
// /**
//  numbers nomli array argument sifatida qabul qilinadi.
// map metodi yordamida har bir element ustida quyidagi amallar bajariladi:
// num argumenti sifatida arrayning har bir elementi olinadi.
// Har bir element uchun { number: num, square: num * num } shaklida object hosil qilinadi.
// Natijada yangi hosil bo'lgan objectlardan tashkil topgan array qaytariladi.
// Quyidagi misolda funksiya [1, 2, 3] 
// arrayini qayta ishlaydi va { number: 1, square: 1 }, { number: 2, square: 4 }, va { number: 3, square: 9 } 
// objectlaridan tashkil topgan arrayni qaytaradi.
//  */
// const result = getSquareNumbers([1, 2, 3]);
// console.log(result); 


// function reverseSentence(sentence: string): string {
//   const words = sentence.split(" ");
  
//   const reversedWords = words.map(word => word.split("").reverse().join(""));
  
//   return reversedWords.join(" ");
// }
// console.log(reverseSentence("we like coding!"));


// function count(input: string): number {
//   // Unli harflarni o'z ichiga olgan to'plam
//   const vowels: Set<string> = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
//   let count = 0;

//   // Stringdagi har bir belgini tekshirish
//   for (const char of input) {
//       if (vowels.has(char)) {
//           count++;
//       }
//   }

//   return count;
// }
// console.log(count("Hello World")); 



// function findLongestWord(sentence: string): string {
//     // Jumladagi so'zlarni bo'lish
//     const words = sentence.split(" ");
  
//     // Eng uzun so'zni topish
//     let longestWord = "";
//     for (const word of words) {
//       if (word.length > longestWord.length) {
//         longestWord = word;
//       }
//     }
  
//     return longestWord;
//   }
  
//   // Funksiya sinov
//   console.log(findLongestWord("I come from Uzbekistan")); // "Uzbekistan"





// function majorityElement(number: number[]): number {
//     const countMap = new Map<number, number>();

//     // Raqamlarni va ularning takrorlanishlarini hisoblash
//     for (const num of number) {
//         if (countMap.has(num)) {
//             countMap.set(num, countMap.get(num)! + 1);
//         } else {
//             countMap.set(num, 1);
//         }
//     }

//     // Eng ko'p takrorlangan raqamni aniqlash
//     let majorityElement = number[0];
//     let maxCount = 0;

//     for (const [num, count] of countMap) {
//         if (count > maxCount) {
//             majorityElement = num;
//             maxCount = count;
//         }
//     }

//     return majorityElement;
// }

// // Misol uchun funksiyani chaqirish
// const result = majorityElement([1,2,3,2,5,4,3,2]);
// console.log(result);  // Kutilgan natija: 4













// H2 - TASK:

// function digits(input: string): string {
//   let digits = ""; // Raqamlarni saqlash uchun bo'sh string yaratamiz

//   // Har bir belgini tekshirish uchun for tsiklini ishlatamiz
//   for (let i = 0; i < input.length; i++) {
//       const char = input[i];
//       if (char >= '0' && char <= '9') {
//           digits += char; // Agar belgi raqam bo'lsa, uni digits stringiga qo'shamiz
//       }
//   }

//   return digits; // Faqat raqamlardan iborat stringni qaytaramiz
// }

// console.log(digits("m1fdg4gi15t"));



