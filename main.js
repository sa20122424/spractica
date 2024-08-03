// 1) Ikkita o'zgaruvchi yarating va ularning ichiga son saqlang va bir birini cosole.logda qo'shib chiqaring chiqaring


// 2) let a  = '12' shu 12 sonini data typeni o'zgartirib number qilib chiqaring 
// bering. Yani bu hozir string typeda siz number tyga o'zgartiring


// 3) randomli son yasang va shu randomli sonning juft yoki toq ekanligini aniqlab bering


// 4) promptdan bitta so'z kiriting agar o'sha so'z Mars so'ziga teng bolsa o'sha so'zning
//  o'zi chiqsin agar boshqa so'z bo'lsa Mars It school deb chiqsin


// 5) bitta array yarating va uning ichiga 5 ta so'z kiriting. Keyin For yordamida o'sha arraydagi 
// so'zlar ichidan uzunligi 5 va undan kattalarini bohsqa bir arrayga qo'shib chiqaring



// 6) for orqali birdan 100gacha bolgan sonlarni juft yoki toqqa ajratib chiqaring



let son = 10
let son2 = 20 
console.log(son,son2);

let son_string = '12'
let string =(Number(son_string))
console.log(string);
let random = Math.round(Math.random() * 100)
if (random % 2 == 0 ) {
    console.log("чотное",random);
    
} else {
    console.log("нечотные",random);
}

let Mars = prompt('Soz kiriting')
if (Mars.includes("Mars")) {
    console.log("togri");
    
} else {
    console.log("Mars it School");
}


let ism = ['Ahror', 'Salohiddin', 'Jalol', 'Mirsaid', 'Ruhsora'];
let ism1 = [];


for (let i = 0; i < ism.length; i++) {
  
    if (ism[i].length > 5) {
       
        ism1.push(ism[i]);
       
        ism.splice(i, 1);
       
        i--;
    }
}

console.log(ism);  
console.log(ism1);





let toq = []
let juft = []
for (let i = 0; i < 100; i++ ) {
    if (i % 2 === 0  ) {
        juft.push(i);
        

        
    } else{
        toq.push(i);
    }
}
console.log(juft);
console.log(toq);

























