hero = ['Ivan'];
native = ['York', 'Of'];
destination = ['Poltava', 'In'];
rainbow = hero.concat(native).concat(destination);
console.log(`rainbow array: ${rainbow}`);
console.log(`reversed rainbow array: ${rainbow.slice().reverse()}`);
a = rainbow[1];
rainbow[1] = rainbow[2];
rainbow[2] = a;
rainbow.splice(3, 0, "Gave", "Battle")
a = rainbow[rainbow.length - 1];
rainbow[rainbow.length - 1] = rainbow[rainbow.length - 2];
rainbow[rainbow.length - 2] = a;
console.log(`updated: ${rainbow}`);
colors = ['red', 'orange', 'yellow', 'green', 'aqua', 'blue', 'violet'];
resultArr = [];
for (i = 0; i < colors.length; i++) {
    resultArr.push(`<div class="wrapperVertical">
        <p>${rainbow[i]}</p>
        <div class='circle' style='background-color: ${colors[i]}'></div>
        </div>`)
}
document.write(`<div class="wrapperHorizontal">${resultArr.join(" ")}</div>`)



