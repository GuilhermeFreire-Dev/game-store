
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

  getFormattedDate(date) {
    if (date) {
      const dateValue = new Date(date);
      const day = dateValue.getDate() + 1;
      const month = dateValue.getMonth() + 1;
      const year = dateValue.getFullYear();
      return day + "/" + (parseInt(month/10) ? month : "0" + month) + "/" + year;
    }
    return null;
  }
}

export default Utils;