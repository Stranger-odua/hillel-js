function padString(string, reqStringLength, symbol, toStart = false) {

   while (string.length < reqStringLength) {

      if (toStart) {
         string += symbol
      } else {
         string = symbol + string
      }
   }

   return string
}

padString('Jorik', 9, '*', true)