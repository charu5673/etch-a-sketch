let body=document.querySelector("body");
let cont = document.querySelector("#container");
let rb=document.querySelector("#rain");
let pb=document.querySelector("#prog");
let op=1;
let pc=0;
let rre=0;
let rgr=0;
let rbl=0;
n=16;
generate(n);
let rf=false;
let pf=false;
function generate(n)
{
let i,j;
for(i=0;i<n;i++)
    {
        let d=document.createElement("div");
        d.classList.add("outer");
        for(j=0;j<n;j++)
            {
                let di=document.createElement("div");
                di.classList.add("inner");
                di.addEventListener("mouseover", function(e){
                    eventSet(e);
                });
                d.appendChild(di);
            }
            cont.appendChild(d);
    }
}
function change()
{
    let x=parseInt(prompt("Enter new size of grid (nxn)\nMaximum: 100\nMinimum:1"));
    if(x===NaN)
        {
            prompt("INVALID!");
            change();
        }
    else if(x<1)
        x=1;
    else if(x>100)
        x=100;
    n=x;
    reset();
}
function reset()
{
    if(pf)
        pc=0;
    cont.innerHTML="";
    generate(n);
}
function rain()
{
    rf=!rf;
    if(rf)
        rb.textContent="Disable rainbow mode";
    else
    {
    rb.textContent="Enable rainbow mode";
    rre=0;
    rgr=0;
    rbl=0;
    }
}
function prog()
{
    pf=!pf;
    if(pf)
        pb.textContent="Disable progressive mode";
    else
    {
        pc=0;
        op=1;
    pb.textContent="Enable progressive mode";
    }
}
function eventSet(e)
{
                if(rf)
                    {
                        rre=Math.floor(Math.random()*256);
                        rgr=Math.floor(Math.random()*256);
                        rbl=Math.floor(Math.random()*256);
                    }
                if(pf)
                    {
                        if(pc>=10)
                            op=1;
                        else
                        {
                            op=pc/10;
                            pc++;
                        }
                    }
                e.target.style.backgroundColor="rgb("+rre+","+rgr+","+rbl+")";
                e.target.style.opacity=op;
}
body.addEventListener("mouseover",function(e){
    if(e.target.id==="body")
    pc=0;
});