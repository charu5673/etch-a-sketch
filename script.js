let cont = document.querySelector("#container");
let i,j;
for(i=0;i<16;i++)
    {
        let d=document.createElement("div");
        d.classList.add("outer");
        for(j=0;j<16;j++)
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