
function create_new_staff()
{
    let s_name=document.getElementById('name_str').value
    let s_age=document.getElementById('age_str').value
    let s_salary=document.getElementById('salary_str').value
    let s_position=document.getElementById('position_str').value
    
    let new_staff={
        'list':staff_list.length+1,
        'name':s_name,
        'age':s_age,
        'salary':s_salary,
        'position':s_position}

    staff_list.push(new_staff)
        //xóa hết trong 'show' để hiện lại nội dung đã update
    document.getElementById('show').innerHTML=""

    show_staff()
}


///

function update_staff()
{
    let s_name=document.getElementById('name_str').value
    let s_age=document.getElementById('age_str').value
    let s_salary=document.getElementById('salary_str').value
    let s_position=document.getElementById('position_str').value
    
    let new_staff={list=staff_list.length+1,name=s_name,age=s_age,salary=s_salary,position=s_position}

    for(let i=0;i<staff_list.length;i++)
    {
        if(new_staff.name==staff_list[i].name)
        {
            staff_list[i].list=new_staff.list
            staff_list[i].name=new_staff.name
            staff_list[i].age=new_staff.age
            staff_list[i].salary=new_staff.salary
            staff_list[i].position=new_staff.position
        }
    }
}