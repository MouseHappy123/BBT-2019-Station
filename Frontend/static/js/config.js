// var Reg = /^(?:[\u4e00-\u9fa5]+)(?:·[\u4e00-\u9fa5]+)*$|^[a-zA-Z]+\s?[\.·\-()a-zA-Z]*[a-zA-Z]+$/;

function checkinput(display, id, errid, str) {
    console.log("enter")
    if (block(display)) {
        if (str.length != 0) {
            // if (!Reg.test(str)) {
            //     $("#" + errid).text("只能包含中文或英文噢");
            //     $("#" + id).val(str);
            //     return false;
            // }
            $("#" + errid).text("");
            return true;
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

function message(id, errid, str) {
    if (str.length != 0) {
        $("#" + errid).text("");
        return true;
    } else {
        $("#" + errid).text("填写完才能提交噢");
        $("#" + id).val(str);
        return false;
    }
}