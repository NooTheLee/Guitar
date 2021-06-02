var member = /** @class */ (function () {
    function member(id, ten, pass, gen, fav) {
        this.id = id;
        this.name = ten;
        this.password = pass;
        this.gender = gen;
        this.favote = fav;
    }
    Object.defineProperty(member.prototype, "id", {
        //id
        get: function () {
            return this._id;
        },
        set: function (v) {
            this._id = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(member.prototype, "name", {
        //name
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(member.prototype, "password", {
        //password
        get: function () {
            return this._password;
        },
        set: function (v) {
            this._password = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(member.prototype, "gender", {
        //gender
        get: function () {
            return this._gender;
        },
        set: function (v) {
            this._gender = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(member.prototype, "favote", {
        //favote
        get: function () {
            return this._favorite;
        },
        set: function (v) {
            this._favorite = v;
        },
        enumerable: false,
        configurable: true
    });
    return member;
}());
var memberList = /** @class */ (function () {
    function memberList() {
        this.lst = [];
    }
    memberList.prototype.AddNew = function (m) {
        this.lst.push(m);
        id += 1;
    };
    memberList.prototype.Check = function (m) {
        for (var i = 0; i < this.lst.length; i++) {
            if (m.name == this.lst[i].name) {
                return false;
            }
        }
        return true;
    };
    memberList.prototype.Delete = function () {
    };
    return memberList;
}());
//DanhSachMember
var mbList = new memberList;
var id = 0;
function check(id, tb, er) {
    var pw = document.getElementById(id).value;
    for (var i = 0; i < pw.length; i++) {
        if (pw[i] == " ") {
            document.getElementById(er).innerHTML = tb + " must not contain spaces";
            return false;
        }
        else {
            document.getElementById(er).innerHTML = '';
            return true;
        }
    }
}
function checkName() {
    return check("email", "User", "er5");
}
function checkPass() {
    return check("psw", "Password", "er6");
}
function checkPassRe() {
    var pw = document.getElementById("psw").value;
    var pwr = document.getElementById("psw-repeat").value;
    if (pw != pwr) {
        document.getElementById("er4").innerHTML = "Incorrect password";
        return false;
    }
    else {
        document.getElementById("er4").innerHTML = '';
        return true;
    }
}
function dk() {
    if (checkName() == false || checkPass() == false || checkPassRe() == false) {
        return false;
    }
    var gender = "";
    var ten = document.getElementById("email").value;
    var pw = document.getElementById("psw").value;
    var pwr = document.getElementById("psw-repeat").value;
    var fav = document.getElementById("Farvorite_Pz").value;
    var n = document.getElementById("frmdk").length;
    var checkbox = "";
    for (var i = 0; i < n; i++) {
        if (document.getElementById("frmdk").elements[i].checked == true && document.getElementById("frmdk").elements[i].type == "radio") {
            gender = document.getElementById("frmdk").elements[i].value;
        }
        if (document.getElementById("frmdk").elements[i].checked == true && document.getElementById("frmdk").elements[i].type == "checkbox") {
            checkbox += document.getElementById("frmdk").elements[i].value;
        }
    }
    ten = ten.trim();
    if (ten == "") {
        document.getElementById("er5").innerHTML = "User name must not contain spaces";
        return false;
    }
    else {
        document.getElementById("er5").innerHTML = "";
    }
    pw = pw.trim();
    if (pw == "") {
        document.getElementById("er6").innerHTML = "Password name must not contain spaces.";
        return false;
    }
    else {
        document.getElementById("er6").innerHTML = "";
    }
    if (gender == "") {
        document.getElementById("er1").innerHTML = "Please select ur gender!";
        return false;
    }
    else {
        document.getElementById("er1").innerHTML = "";
    }
    if (fav == "") {
        document.getElementById("er2").innerHTML = "Please select ur favorite pizza!";
        return false;
    }
    else {
        document.getElementById("er2").innerHTML = "";
    }
    if (checkbox == "") {
        document.getElementById("er3").innerHTML = "Read Terms & Privacy and check the box";
        return false;
    }
    else {
        document.getElementById("er3").innerHTML = "";
    }
    if (gender != "" && fav != "" && checkbox != "") {
        var temp = new member(id, ten, pw, gender, fav);
        if (mbList.Check(temp)) {
            mbList.AddNew(temp);
            alert("Account registration successful! Let sign in");
        }
        else {
            document.getElementById("er5").innerHTML = "This account has already existed";
            return false;
        }
    }
    return true;
}
function login() {
    var user = document.getElementById("userLogin").value;
    var pass = document.getElementById("passLogin").value;
}
console.log(mbList);
