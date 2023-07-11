function start() 
    with (document){}
let h_1 = String(getElementById('left_1').value);
let h_2 = String(getElementById('left_2').value);
let h_3 = String(getElementById('left_3').value);
let h_4 = String(getElementById('left_4').value);
let h_5 = String(getElementById('left_5').value);
let h_6 = String(getElementById('left_6').value);
let h_7 = String(getElementById('right_1').value);
let h_8 = String(getElementById('right_2').value);
let h_9 = String(getElementById('right_3').value);
let h_10 = String(getElementById('right_4').value);
let h_11 = String(getElementById('right_5').value);
let result = 0
if (h_1 == 'Yerevan'){
    result += 2;
    getElementById('left_1').style.border.Color = 'gold';
}else{
    getElementById('left_1').style.borderColor = 'red'
}
if (h_2 == 'Washington'){
    result += 2;
    getElementById('left_2').style.border.Color = 'gold';
}else{
    getElementById('left_2').style.borderColor = 'red'
}
if (h_3 == 'Ankara'){
    result += 2;
    getElementById('left_3').style.border.Color = 'gold';
}else{
    getElementById('left_3').style.borderColor = 'red'
}
if (h_4 == 'London'){
    result += 2;
    getElementById('left_4').style.border.Color = 'gold';
}else{
    getElementById('left_4').style.borderColor = 'red'
}
if (h_5 == 'Madrid'){
    result += 2;
    getElementById('left_5').style.border.Color = 'gold';
}else{
    getElementById('left_5').style.borderColor = 'red'
}
if (h_6 == 'Kyiv'){
    result += 2;
    getElementById('left_6').style.border.Color = 'gold';
}else{
    getElementById('left_6').style.borderColor = 'red'
}
if (h_7 == 'Paris'){
    result += 2;
    getElementById('right_1').style.border.Color = 'gold';
}else{
    getElementById('right_1').style.borderColor = 'red'
}
if (h_8 == 'Berlin'){
    result += 2;
    getElementById('right_2').style.border.Color = 'gold';
}else{
    getElementById('right_2').style.borderColor = 'red'
}
if (h_9 == 'Mexico'){
    result += 2;
    getElementById('right_3').style.border.Color = 'gold';
}else{
    getElementById('right_3').style.borderColor = 'red'
}
if (h_10 == 'Beijing'){
    result += 2;
    getElementById('right_4').style.border.Color = 'gold';
}else{
    getElementById('right_4').style.borderColor = 'red'
}
if (h_11 == 'Ottawa'){
    result += 2;
    getElementById('right_5').style.border.Color = 'gold';
}else{
    getElementById('right_5').style.borderColor = 'red'
}

(result <= 6){
    vorak = "you didn't pass ):"
    getElementById('score').style.color='red'
    getElementById('Answer').style.color='red'
}
if (result > 6 && result <= 18){
    vorak = " you could do better /: (you passed with a low score)"
    getElementById('score').style.color='gold'
    getElementById('Answer').style.color='gold'
    getElementById('Answer').style.right='449px'
}
if (result>18){
    vorak = " you passed (:"
    getElementById('score').style.color='green'
    getElementById('Answer').style.color='green'
    getElementById('Answer').style.right='362px'
}
getElementById('score').innerHTML=result
getElementById('Answer').innerHTML=vorak


















