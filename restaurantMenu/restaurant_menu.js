const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

let breakFast = document.getElementById("breakfastMenuItems");
let mainCourse = document.getElementById('maincourseMenuItems');
let dessert = document.getElementById('dessertMenuItems');

const breakfastMenuItemsHTML = breakfastMenu.map((element , ind) =>{ 
    return (`<p>Item ${ind + 1}: ${element}</p>`)
}).join("");

breakFast.innerHTML = breakfastMenuItemsHTML;

let mainCourseItem  = "";

mainCourseMenu.forEach((element , ind)  => {
    mainCourseItem  += `<p>Item ${ind + 1}: ${element}</p>`
});

mainCourse.innerHTML = mainCourseItem ;

for(let i = 0; i < dessertMenu.length; i++){
    let ele = document.createElement("p");
    let de = dessertMenu[i];
    ele.innerHTML = `Item ${i + 1}: ${de}`;
    dessert.appendChild(ele);
}









