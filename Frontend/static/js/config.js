// var Reg = /^(?:[\u4e00-\u9fa5]+)(?:·[\u4e00-\u9fa5]+)*$|^[a-zA-Z]+\s?[\.·\-()a-zA-Z]*[a-zA-Z]+$/;
//emoji正则过滤 + 特殊字符过滤
var regStr = /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/ig;
var patrn = /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/im;

function checkinput(display, id, errid, str) {
    console.log("enter")
    if (block(display)) {
        if (str.length != 0) {
            if (patrn.test(str)) {
                $("#" + id).val(str);
                $("#" + errid).text("有特殊符号噢");
                return false;
            }
            if (regStr.test(str)) {
                // var str_ = str.replace(regStr, "");
                $("#" + errid).text("暂不支持emoji噢");
                $("#" + id).val(str);
                return false;
            } 
            else {
                $("#" + errid).text("");
                return true;
            }
        } else {
            $("#" + errid).text("填写完才能提交噢");
            $("#" + id).val(str);
            return false;
        }
    } else {
        return true;
    }
}

function block(display) {
    if ($("#" + display).css("display") != "none") {
        return true;
    } else {
        return false;
    }
}

function getval(str) {
    var string = document.getElementById(str);
    if (string) {
        string = string.value.trim();
        // string = stripscript(string);
        return string;
    } else return '';
}

function typechange(res) {
    var res1;
    if ((typeof res == 'object') && res.constructor == Object) {
        res1 = res;
    } else {
        res1 = eval("(" + res + ")");
    }
    return res1;
}

// function message(id, errid, str) {
//     if (str.length != 0) {
//         $("#" + errid).text("");
//         return true;
//     } else {
//         $("#" + errid).text("填写完才能提交噢");
//         $("#" + id).val(str);
//         return false;
//     }
// }

// function stripscript(s) {
//     var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&mdash;—|{}【】‘；：”“'。，、？]")
//     var rs = "";
//     for (var i = 0; i < s.length; i++) {
//         rs = rs + s.substr(i, 1).replace(pattern, '');
//     }
//     return rs;
// }