



let arr=[1,2,3,4,5,6,7,7,8,8,4,2,5,5,1,7,8,18,10,9,11,11,22,12,31]


function removeDuplicates()
{
    let temp=[]
    arr.sort();
    for(i=0;i<arr.length;i++){
      if(arr[i]==arr[i+1]) 
    {
          continue
    }
      temp[temp.length]=arr[i];
    }
    return temp;
  } 

document.write(removeDuplicates(arr))