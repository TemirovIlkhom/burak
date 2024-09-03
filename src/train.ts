function areParenthesesBalanced(str: string): boolean {
    let balance = 0;

    for (let char of str) {
        if (char === '(') {
            balance++;  // Ochilgan qavs sonini oshiramiz
        } else if (char === ')') {
            balance--;  // Yopilgan qavs sonini kamaytiramiz

            // Agar balans manfiy bo'lsa, qavslar noto'g'ri joylashgan bo'ladi
            if (balance < 0) {
                return false;
            }
        }
    }

    // Agar balans 0 bo'lsa, qavslar balansda; aks holda, balansda emas
    return balance === 0;
}

// Funksiyani test qilamiz
console.log(areParenthesesBalanced("string()ichida(qavslar)soni()balansda")); 
console.log(areParenthesesBalanced("bu misolda((qavslar)balansda emas"));     


// function findDuplicates(arr: number[]): number[] {
//     const elementCount: { [key: number]: number } = {};
//     const duplicates: number[] = [];

//     // Arraydagi har bir elementni sanaymiz
//     arr.forEach((num) => {
//         elementCount[num] = (elementCount[num] || 0) + 1;
//     });

//     // 2 marta qaytarilgan elementlarni yig'amiz
//     for (const key in elementCount) {
//         if (elementCount[key] === 2) {
//             duplicates.push(Number(key));
//         }
//     }

//     return duplicates;
// }

// console.log(findDuplicates([1, 2, 3, 4, 5, 4, 3, 4])); 


function rotateArray(arr: any[], index: number): any[] {
    const partToRotate = arr.slice(index).reverse();
    const remainingPart = arr.slice(0, index);
    return partToRotate.concat(remainingPart);
}

// Misol uchun ishlatish:
const result = rotateArray([1, 2, 3, 4, 5, 6], 3);
console.log("ZN-Task",result);


// function reverseInteger(num: number): number {
//     const reversedString = num.toString().split('').reverse().join('');
//     return parseInt(reversedString, 10);
// }

// const result = reverseInteger(123456789);
// console.log("ZM-TASK",result);


// function stringToKebab(str: string): string {
//     return str
//         .replace(/([a-z])([A-Z])/g, '$1-$2') // Kichik va katta harflar orasiga tire qo'yish
//         .replace(/\s+/g, '-') // Bo'sh joylarni tire bilan almashtirish
//         .toLowerCase(); // Hamma harflarni kichik harfga o'zgartirish
// }

// console.log("ZL-TASK",stringToKebab("I love Kebab")); 


// function printNumbers() {
//     let counter = 1;

//     const intervalId = setInterval(() => {
//         console.log(counter);
//         counter++;

//         if (counter > 5) {
//             clearInterval(intervalId);
//         }
//     }, 1000);
// }

// printNumbers();


// function reduceNestedArray(arr: any[]): number {
//     return arr.reduce((sum, value) => {
//         if (Array.isArray(value)) {
//             return sum + reduceNestedArray(value);
//         }
//         return sum + value;
//     }, 0);
// }

// const result = reduceNestedArray([1, [1, 2, [4]]]);
// console.log("ZJ-TASK",result);


// function delayHelloWorld(message: string): Promise<string> {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(message);
//         }, 3000); // 3 soniya kechikish
//     });
// }

// // Funksiyani chaqirish va natijani olish
// delayHelloWorld("Hello World").then((result) => {
//     console.log(result); 
// });


// function convertToSnakeCase(str: string): string {
//     return str
//         .trim() // String boshidagi va oxiridagi bo'shliqlarni olib tashlaydi
//         .toLowerCase() // Stringni kichik harflarga o'zgartiradi
//         .replace(/\s+/g, '_'); // Bo'shliqlarni "_" bilan almashtiradi
// }

// const result = convertToSnakeCase('name should be a string');
// console.log("Task-ZG:",result); 

// function findDisappearedNumbers(arr: number[]): number[] {
//     const max = Math.max(...arr); // Arraydagi eng katta raqamni topish
//     const result2: number[] = [];

//     for (let i = 1; i <= max; i++) {
//         if (!arr.includes(i)) {
//             result2.push(i); // Tushib qolgan raqamni natija arrayiga qo'shish
//         }
//     }

//     return result2;
// }

// const result2 = findDisappearedNumbers([1, 3, 4, 7]);
// console.log("Task-ZH",2); 

// function capitalizeWords(sentence: string): string {
//     return sentence
//         .split(' ') // gapni so'zlarga bo'lib olamiz
//         .map(word => {
//             if (word.length > 2) { // agar so'z uzunligi 2 harfdan ortiq bo'lsa
//                 return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // birinchi harfni katta qilamiz
//             }
//             return word; // aks holda, so'zni o'zgartirmasdan qoldiramiz
//         })
//         .join(' '); // so'zlarni qaytadan birlashtiramiz
// }

// console.log(capitalizeWords('name should be a string')); 


// function removeDuplicate(str: string): string {
//     // Stringni massivga aylantirib, harflarni Set ichiga joylaymiz
//     const uniqueChars = new Set(str);
    
//     // Setni massivga aylantirib, uni stringga aylantiramiz
//     return [...uniqueChars].join('');
// }

// // Masalan:
// console.log("ZE-TASK:",removeDuplicate('stringg')); 


// function changeNumberInArray(target: number, array: number[], newValue: number): number[] {
//     const index = array.indexOf(target);
//     if (index !== -1) {
//         array[index] = newValue;
//     }
//     return array;
// }

// const result = changeNumberInArray(1, [1, 3, 7, 2], 2);
// console.log(result);


// function celsiusToFahrenheit(celsius: number): number {
//     return (celsius * 9/5) + 32;
// }

// console.log("ZC-TASK:",celsiusToFahrenheit(-10)); 


// function randomBetween(min: number, max: number): number {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log("ZB-TASK:",randomBetween(1, 100)); // return 1 va 100 orasidagi random son


// function sumEvens(numbers: number[]): number {
//     return numbers.reduce((sum, num) => {
//         if (num % 2 === 0) {
//             return sum + num;
//         }
//         return sum;
//     }, 0);
// }

// console.log("Z-TASK:",sumEvens([4, 5, 6, 7, 8]));


// function findIntersection<T>(array1: T[], array2: T[]): T[] {
//     const set1 = new Set(array1);
//     const set2 = new Set(array2);
//     const intersection = Array.from(set1).filter(item => set2.has(item));
//     return intersection;
// }

// // Misol
// const result = findIntersection([1, 2, 3], [3, 2, 0]);
// console.log(result);


// function countOccurrences(obj: Record<string, any>, key: string): number {
//     let count = 0;

//     function recursiveCount(innerObj: Record<string, any>) {
//         for (const k in innerObj) {
//             if (k === key) {
//                 count++;
//             }
//             if (typeof innerObj[k] === 'object' && innerObj[k] !== null) {
//                 recursiveCount(innerObj[k]);
//             }
//         }
//     }

//     recursiveCount(obj);
//     return count;
// }

// // Misol uchun foydalanish:
// const obj = {model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}};
// const occurrences = countOccurrences(obj, 'model');
// console.log("X-TASK",occurrences);


// function chunkArray<T>(array: T[], chunkSize: number): T[][] {
//     const result: T[][] = [];
//     for (let i = 0; i < array.length; i += chunkSize) {
//         result.push(array.slice(i, i + chunkSize));
//     }
//     return result;
// }

// // Misol uchun foydalanish:
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const chunked = chunkArray(arr, 3);
// console.log("W-TASK",chunked);

// function countOdds(num: number): number {
//     let count = 0;

//     // 0 dan num gacha bo'lgan sonlar orasida toq sonlarni hisoblash
//     for (let i = 0; i <= num; i++) {
//         if (i % 2 !== 0) {
//             count++;
//         }
//     }

//     return count;
// }

// // Misol uchun
// console.log("U-TASK:",countOdds(11));



// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//     // Birlashtirilgan array va indexlar uchun boshlang'ich qiymatlarni belgilaymiz
//     const mergedArray: number[] = [];
//     let i = 0;
//     let j = 0;

//     // Ikkala arraydagi elementlarni solishtirib, kichikroq elementni mergedArray ga qo'shamiz
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             mergedArray.push(arr1[i]);
//             i++;
//         } else {
//             mergedArray.push(arr2[j]);
//             j++;
//         }
//     }

//     // Agar arr1 da qolgan elementlar bo'lsa, ularni mergedArray ga qo'shamiz
//     while (i < arr1.length) {
//         mergedArray.push(arr1[i]);
//         i++;
//     }

//     // Agar arr2 da qolgan elementlar bo'lsa, ularni mergedArray ga qo'shamiz
//     while (j < arr2.length) {
//         mergedArray.push(arr2[j]);
//         j++;
//     }

//     return mergedArray;
// }

// // Misol uchun
// const array1 = [0, 3, 4, 31];
// const array2 = [4, 6, 30];
// const result = mergeSortedArrays(array1, array2);
// console.log("T-tack",result); 


// function missingNumber(nums: number[]): number {
//     // Arrayning uzunligini topamiz
//     const n = nums.length;

//     // 0 dan n gacha bo'lgan sonlarning sumasini hisoblaymiz
//     const expectedSum = (n * (n + 1)) / 2;

//     // Arraydagi barcha sonlarning sumasini topamiz
//     const actualSum = nums.reduce((sum, num) => sum + num, 0);

//     // Kutilgan summa va haqiqiy summa orasidagi farq yo'qolgan son bo'ladi
//     return expectedSum - actualSum;
// }

// // Misol uchun
// console.log(missingNumber([3, 0, 1])); // 2
// console.log(missingNumber([0, 1])); // 2
// console.log(missingNumber([9,6,4,2,3,5,7,0,1])); 




//R -TASK

// function calculate(expression: string): number {
//     // "+" belgisi bo'yicha stringni ajratib
//     const parts = expression.split('+');
    
//     // Har bir qismni raqamga aylantiramiz va yig'indisini hisoblaymiz
//     const sum = parts.reduce((ac, part) => ac + parseFloat(part), 0);
    
//     return sum;
// }

// // Misollar
// console.log(calculate("1+3")); // 4
// console.log(calculate("10+20+30")); // 60
// console.log(calculate("4.5+5.5")); 




// Q - TASC

// function hasProperty(obj: object, prop: string): boolean {
//     return obj.hasOwnProperty(prop);
// }


// console.log(hasProperty({name: "BMW", model: "M3"}, "model")); // true qaytadi
// console.log(hasProperty({name: "BMW", model: "M3"}, "year"));  // false qaytadi


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



