// H2 - TASK:

function digits(input: string): string {
  let digits = ""; // Raqamlarni saqlash uchun bo'sh string yaratamiz

  // Har bir belgini tekshirish uchun for tsiklini ishlatamiz
  for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (char >= '0' && char <= '9') {
          digits += char; // Agar belgi raqam bo'lsa, uni digits stringiga qo'shamiz
      }
  }

  return digits; // Faqat raqamlardan iborat stringni qaytaramiz
}

console.log(digits("m1fdg4gi15t"));
