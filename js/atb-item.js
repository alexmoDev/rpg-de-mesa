const $mod = document.querySelectorAll('.ball> input');

function calcMod(value, i) {
    if(value>= 1 && value<= 3) {
        $mod[i].value = '-'+3;
    };

    if(value>= 4 && value<= 5) {
        $mod[i].value = '-'+2;
    };

    if(value>= 6 && value<= 8) {
        $mod[i].value = '-'+1;
    };

    if(value>= 9 && value<= 12) {
        $mod[i].value = '+'+0;
    };

    if(value>= 13 && value<= 15) {
        $mod[i].value = '+'+1;
    };

    if(value>= 16 && value<= 17) {
        $mod[i].value = '+'+2;
    };

    if(value>= 18 && value<= 18) {
        $mod[i].value = '+'+3;
    };
};

function redMod(checked, i) {
    if(checked=== true) {
        $mod[i].value= mSign(i);
    };

    if(checked=== false) {
        $mod[i].value= pSign(i);
    };
};

function mSign(i) {
    if(parseInt($mod[i].value)- 1< 0) {
        return parseInt($mod[i].value)- 1;
    } else {
        return '+'+ (parseInt($mod[i].value)- 1);
    };
}

function pSign(i) {
    if(parseInt($mod[i].value)+ 1< 0) {
        return parseInt($mod[i].value)+ 1;
    } else {
        return '+'+ (parseInt($mod[i].value)+ 1);
    };
}