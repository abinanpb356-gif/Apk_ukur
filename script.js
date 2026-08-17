let model="";


function pilihModel(x){

model=x;

let area=document.getElementById("inputArea");

let judul=document.getElementById("judul");


judul.innerHTML="Input "+x;


if(x=="panjang"){

area.innerHTML=`
<input id="p" placeholder="Panjang meter">
<input id="l" placeholder="Lebar meter">
`;

}


if(x=="persegi"){

area.innerHTML=`
<input id="s" placeholder="Sisi meter">
`;

}


if(x=="segitiga"){

area.innerHTML=`
<input id="a" placeholder="Alas meter">
<input id="t" placeholder="Tinggi meter">
`;

}


if(x=="trapesium"){

area.innerHTML=`
<input id="a" placeholder="Sisi atas">
<input id="b" placeholder="Sisi bawah">
<input id="t" placeholder="Tinggi">
`;

}


if(x=="lingkaran"){

area.innerHTML=`
<input id="r" placeholder="Jari-jari meter">
`;

}


if(x=="segi5"){

area.innerHTML=`
<input id="sisi" placeholder="Sisi meter">
<input id="apotema" placeholder="Apotema meter">
`;

}


if(x=="jajar"){

area.innerHTML=`
<input id="alas" placeholder="Alas meter">
<input id="tinggi" placeholder="Tinggi meter">
`;

}


if(x=="belah"){

area.innerHTML=`
<input id="d1" placeholder="Diagonal 1 meter">
<input id="d2" placeholder="Diagonal 2 meter">
`;

}


if(x=="layang"){

area.innerHTML=`
<input id="d1" placeholder="Diagonal 1 meter">
<input id="d2" placeholder="Diagonal 2 meter">
`;

}


if(x=="custom"){

area.innerHTML=`

<p>
Masukkan titik batas tanah
</p>

<textarea id="titik"
placeholder="
contoh:
0,0
10,0
12,5
5,10
"></textarea>

`;

}


}




function hitung(){

let luas=0;


if(model=="panjang"){

luas=p.value*l.value;

}


if(model=="persegi"){

luas=s.value*s.value;

}


if(model=="segitiga"){

luas=0.5*a.value*t.value;

}


if(model=="trapesium"){

luas=((Number(a.value)+Number(b.value))/2)*Number(t.value);

}


if(model=="lingkaran"){

luas=Math.PI*r.value*r.value;

}


if(model=="segi5"){

luas=(5*Number(sisi.value)*Number(apotema.value))/2;

}


if(model=="jajar"){

luas=Number(alas.value)*Number(tinggi.value);

}


if(model=="belah"){

luas=(Number(d1.value)*Number(d2.value))/2;

}


if(model=="layang"){

luas=(Number(d1.value)*Number(d2.value))/2;

}



if(model=="custom"){


let data=titik.value.trim()
.split("\n")
.map(x=>x.split(",").map(Number));


luas=polygon(data);


gambarPolygon(data);


}




document.getElementById("hasil").innerHTML=

`
<h2>Luas : ${Number(luas).toFixed(2)} m²</h2>

<p>
${(luas/10000).toFixed(4)} Hektar
</p>

`;

}



function polygon(points){

let area=0;


for(let i=0;i<points.length;i++){

let j=(i+1)%points.length;


area +=
points[i][0]*points[j][1]
-
points[j][0]*points[i][1];

}


return Math.abs(area/2);

}




function gambarPolygon(points){


let c=document.getElementById("gambar");

let ctx=c.getContext("2d");


ctx.clearRect(0,0,400,300);


ctx.beginPath();


points.forEach((p,i)=>{


let x=p[0]*20+50;

let y=p[1]*20+50;


if(i==0)
ctx.moveTo(x,y);
else
ctx.lineTo(x,y);


});


ctx.closePath();

ctx.stroke();


}