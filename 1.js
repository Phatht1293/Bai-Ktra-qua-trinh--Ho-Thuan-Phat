let a = prompt('Hãy nhập vào một chuỗi: ')


function res_str()
{
    let res_a = ""

    for(let i = a.length-1; i>=0;i--)
    {
        res_a += a[i]
    }
    return res_a
}

document.write(res_str(a))
