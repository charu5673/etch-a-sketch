let cont = document.querySelector("#container");
n=16;
generate(n);
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
                d.appendChild(di);
            }
            cont.appendChild(d);
    }
    cont.addEventListener("mouseover", function(e){
        if(e.target.className=="inner")
            e.target.style.backgroundColor="black";
    });
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