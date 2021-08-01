
window.addEventListener('load',show_staff)

    let s_list=1
    let s_name=document.getElementById('name_str')
    let s_age=document.getElementById('age_str')
    let s_salary=document.getElementById('salary_str')
    let s_position=document.getElementById('position_str')



let staff_list=[
    {list:1,name:"Ho Thuan Phat",age:29,salary:"3000$",position:"full-stack dev"},
    {list:2,name:"Cao Huu Hau",age:25,salary:"5500$",position:"in-tern dev"},
    {list:3,name:"Nguyen Trong Tai",age:35,salary:"9500$",position:"Java senior team lead"},

]

////

function show_staff()
{
    
    for(let i=0;i<staff_list.length;i++)
    {
        document.getElementById('show').innerHTML+="<div id='staff_list'><h4>"+staff_list[i].list+"."+
        staff_list[i].name+"    ||    "+staff_list[i].age+"    ||    "+staff_list[i].salary+"    ||    "
        +staff_list[i].position+"</h4></div>"
    }
}

///

function main_read_staff()
{
    let check1 = document.getElementById('name_str').value
    for(let i=0;i< staff_list.length;i++)
    {
        if(check1==staff_list[i].name)
        {
            read_staff()
        }
    }
}

function read_staff()
{
    let id_checkout=document.getElementById('name_str').value
    for(let i=0;i< staff_list.length;i++)
    {
        if(id_checkout==staff_list[i].name)
        {
            document.getElementById('show').innerHTML=""

            document.getElementById('show').innerHTML+="<div id='staff_list'><h4>"+staff_list[i].list+"."+
            staff_list[i].name+"    ||    "+staff_list[i].age+"    ||    "+staff_list[i].salary+"    ||    "
            +staff_list[i].position+"</h4></div>"

            break;
        }
    
    }
}


///

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
    
    let new_staff={
        'list':staff_list.length+1,
        'name':s_name,
        'age':s_age,
        'salary':s_salary,
        'position':s_position}
    
    
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

          //xóa hết trong 'show' để hiện lại nội dung đã update
          document.getElementById('show').innerHTML=""

          show_staff()
}
///
function del_staff()
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
    
    
    for(let i=0;i<staff_list.length;i++)
    {
        if(new_staff.name==staff_list[i].name)
        {
            staff_list.splice(i,1)
            
        }

    }
       //xóa hết trong 'show' để hiện lại nội dung đã update
       document.getElementById('show').innerHTML=""

       show_staff()

}