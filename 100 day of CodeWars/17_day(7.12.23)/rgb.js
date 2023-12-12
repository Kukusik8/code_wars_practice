//translate The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

function rgd(r, g, b) {
  let resR = r.toString(16);
  let resG = g.toString(16);
  let resB = b.toString(16);

  let resRG = resR.concat(resG);

  result = resRG.concat(resB);
  //Чтобы добавить проверку на отрицательные значения можно сделать что то типо этого: перебрать циклом, создать условие если меньше нуля, присвоиить в этом случае 000000

  if (result === "000") {
    result = "000000";
  }

  return result.toUpperCase();
}

console.log(rgd(0, 0, -19));
