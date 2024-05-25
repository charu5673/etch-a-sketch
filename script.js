let body=document.querySelector("body");
let cont = document.querySelector("#container");
let rb=document.querySelector("#rain");
let pb=document.querySelector("#prog");
let rre=0;
let rgr=0;
let rbl=0;
n=16;
generate(n);
let rf=false;
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
                di.style.opacity=0;
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
function eventSet(e)
{
                if(rf)
                    {
                        rre=Math.floor(Math.random()*256);
                        rgr=Math.floor(Math.random()*256);
                        rbl=Math.floor(Math.random()*256);
                    }
                e.target.style.backgroundColor="rgb("+rre+","+rgr+","+rbl+")";
                if(e.target.style.opacity<1)
                    e.target.style.opacity=e.target.style.opacity-(-0.1);
}