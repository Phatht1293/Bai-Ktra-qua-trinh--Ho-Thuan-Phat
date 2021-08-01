

function checkDate() {


    let s_day=String(document.getElementById('ip_day').value)
    let s_month=String(document.getElementById('ip_month').value)
    let s_year=String(document.getElementById('ip_year').value)
    let strDate = s_day+'/'+s_month+'/'+s_year

    var comp = strDate.split('/')
    var d = parseInt(comp[0], 10)
    var m = parseInt(comp[1], 10)
    var y = parseInt(comp[2], 10)
    var date = new Date(y,m-1,d);
    if (date.getFullYear() == y && date.getMonth() + 1 == m && date.getDate() == d) {
      return true
    }
    return false
}


function check()
{
    checkDate()
    if(checkDate()==true)
    {
        document.getElementById('show_check').innerHTML="Ngay dung!"
    }
    else
    {
        document.getElementById('show_check').innerHTML="Ngay sai!"
    }
}