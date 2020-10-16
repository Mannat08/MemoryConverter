let type1,type2,num,out;

const gettype = () =>
{
    type1 = document.getElementById("f1").value;
    type2 = document.getElementById("f2").value;
    num = document.getElementById("value").value;
}

const calculate = () =>
{
    console.log(num);
    console.log(type1);
    console.log(type2);
    
    //For Bytes
    if(type1 === "Bytes" && type2 === "Bytes")
    {
      out = num;
    }
    else if(type1 === "Bytes" && type2 =="Gb")
    {
        out = num * 1/1073741824;
    }
    else if(type1 === "Bytes" && type2 === "Bits")
    {
        out = num*8;
    }
   
    //For Gb
    if(type1 === "Gb" && type2 === "Gb")
    {
      out = num;
    }
    else if(type1 === "Gb" && type2 =="Bytes")
    {
        out = num * 1073741824;
    }
    else if(type1 === "Gb" && type2 === "Bits")
    {
        out = num*8589934592;
    }

    //For Bits
    if(type1 === "Bits" && type2 === "Bits")
    {
      out = num;
    }
    else if(type1 === "Bits" && type2 =="Bytes")
    {
        out = num * 1/8;
    }
    else if(type1 === "Bits" && type2 === "Gb")
    {
        out = num * 1/8589934592;
    }
   
   // let out = document.getElementById("value").value;
    document.getElementById("output").innerHTML= out;

    
}

