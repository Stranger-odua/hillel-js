const age = +prompt('Пожалуйста, введите Ваш возраст')

if (!isNaN(age) && age >= 0) {
   if (age % 100 >= 5 && age % 100 <= 20) {
      alert(age + ' лет')
   } else {
      if (age % 10 === 1) {
         alert(age + ' год')
      } else if (age % 10 >= 2 && age % 10 <= 4) {
         alert(age + ' года')
      } else {
         alert(age + ' лет')
      }
   }
} else {
   alert('Возраст не может быть отрицательным !')
}















































// if (age % 100 >= 5 && age % 100 <= 20) {
//    console.log(age, 'лет')
//    console.log('остаток: ', age % 100)
// } else {
//    if (age % 10 === 1) {
//       console.log(age, 'год')
//       console.log('остаток: ', age % 10)
//    } else if (age % 10 >= 2 && age % 10 <= 4) {
//       console.log(age, 'года')
//       console.log('остаток: ', age % 10)
//    } else {
//       console.log(age, 'лет')
//       console.log('остаток: ', age % 10)
//    }
// }


// if (age % 10 === 1) {
//    console.log(age, 'год')
//    console.log('остаток: ', age % 10)
// } else if (age % 10 >= 2 && age % 10 <= 4) {
//    console.log(age, 'года')
//    console.log('остаток: ', age % 10)
// } else {
//    console.log(age, 'лет')
//    console.log('остаток: ', age % 10)
// }


// if (age % 10 === 1) {
//    console.log(age, 'год')
//    console.log('остаток: ', age % 10)
// } else if (age % 10 >= 2 && age % 10 <= 4) {
//    console.log(age, 'года')
//    console.log('остаток: ', age % 10)
// } else {
//    console.log(age, 'лет')
//    console.log('остаток: ', age % 10)
// }


// if (age % 11 > 2 && age % 14 < 11) {
//    console.log(age, 'год')
//    console.log('остаток деления на 11: ', age % 11)
//    console.log('остаток деления на 14: ', age % 14)
// } else {
//    console.log('лет')
//    console.log('года')
//    console.log('остаток деления на 11: ', age % 11)
//    console.log('остаток деления на 14: ', age % 14)
// }


// if ((age % 11 > 2) && (age % 11 !== age)) {
//    console.log(age, 'лет')
//    console.log('остаток', age % 11)
// } else {
//    console.log('исключение')
//    // console.log(age, 'года')
//    console.log('остаток', age % 11)
// }
