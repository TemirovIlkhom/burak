function filterPositive(arr: number[]): string {
    // Arraydan faqat musbat sonlarni filter qilish
    const positiveNumbers = arr.filter(number => number > 0);
    
    // Musbat sonlarni string ko'rinishga o'zgartirish
    return positiveNumbers.join(", ");
  }
  
  
  const exampleArray = [-10, 20, 30, -40, 50];
  const result = filterPositive(exampleArray);
  console.log(result);  
  