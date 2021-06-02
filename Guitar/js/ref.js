function form(x)
{
    return x;
}
function dk()
{
    var gender = "";
    var fav = document.getElementById("Farvorite_Pz").value;
    var n = document.getElementById("frmdk").length;
    var checkbox = "";

    for(var i=0;i<n;i++)
    {
        if(document.getElementById("frmdk").elements[i].checked == true && document.getElementById("frmdk").elements[i].type == "radio")
        {
            gender = document.getElementById("frmdk").elements[i].value;
        }
        if(document.getElementById("frmdk").elements[i].checked == true && document.getElementById("frmdk").elements[i].type == "checkbox")
        {
            checkbox += document.getElementById("frmdk").elements[i].value;
        }
    }
    if(gender == "")
    {
        document.getElementById("er1").innerHTML = "Please select ur gender!";
    }
    else
    {
        document.getElementById("er1").innerHTML = "";
    }
    if(fav == "")
    {
        document.getElementById("er2").innerHTML = "Please select ur favorite pizza!";
    }
    else
    {
        document.getElementById("er2").innerHTML = "";
    }
    if(checkbox == "")
    {
        document.getElementById("er3").innerHTML = "Read Terms & Privacy and check the box";
    }
    else
    {
        document.getElementById("er3").innerHTML = "";
    }
    if(gender != "" && fav != "" && checkbox != "")
    {
        form(true);
    }
    else
    {
        form(false);
    }
}