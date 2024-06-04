function findMaxIndex(arr) {
    if (arr.length === 0) 
        return -1; // Agar array bo'sh bo'lsa, -1 qaytaradi
  
    let maxIndex = 0; // Eng katta elementning indexini saqlash
    let maxValue = arr[0]; // Birinchi elementni eng katta deb faraz qilamiz
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxValue) {
        maxValue = arr[i];
        maxIndex = i;
      }
    }
  
    return maxIndex; // Eng katta elementning birinchi indexini qaytaradi
  }
  
  // Misol uchun:
  const numbers = [10, 58, 2, 58, 99, 3];
  console.log(findMaxIndex(numbers)); // 4, chunki 99 bu eng katta qiymat va u arrayda 4-indexda joylashgan
  