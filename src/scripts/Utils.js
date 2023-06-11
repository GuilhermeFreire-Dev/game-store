
class Utils {
  getDiscount(currentPrice, lastPrice) {
    if (currentPrice && lastPrice)
      return parseInt((1 - (currentPrice / lastPrice)) * 100);
    return 0;
  }
  
  getMonetaryFormat(value) {
    if (value)
      return value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    return 0;
  }
}

export default Utils;