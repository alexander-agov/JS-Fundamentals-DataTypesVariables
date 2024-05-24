function gladiator(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
  let expenses = 0;
  if (lostFights / 12 >= 1) {
    expenses = parseInt(lostFights / 2) * helmetPrice + parseInt(lostFights / 3) * swordPrice
      + parseInt(lostFights / 6) * shieldPrice + parseInt(lostFights / 12) * armorPrice;
  } else {
    expenses = parseInt(lostFights / 2) * helmetPrice + parseInt(lostFights / 3) * swordPrice
      + parseInt(lostFights / 6) * shieldPrice
  }
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiator(7,
  2,
  3,
  4,
  5
);
gladiator(23,
  12.50,
  21.50,
  40,
  200
)