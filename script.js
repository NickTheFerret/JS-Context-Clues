var friends = ['Garrett', 'Nick', 'Nathan', 'Brayden', 'Beth']
var places = ['Home', 'Walmart', 'Chick-Fil-A', 'Grocery Store', 'Mall', 'McDonalds', 'Jacks', 'Home Depot', 'Papa Johns', 'Wendys']
var weapons = ['Sword', 'Knife', 'Spear', 'Bow', 'Gun', 'AR-15', 'Pencil', 'Stick', 'Spoon', 'Paper', 'Chair', 'Table', 'Bat', 'Axe', 'Shotgun', 'Pen', 'Dagger', 'Staff', 'Brass knuckles', 'Broom'];

for (var i = 1; i < 101; i++) {
    var h3 = document.createElement("h3");
    h3.textContent = "Accusation: " + i;
    h3.addEventListener("click", captureIndex(i));

    document.body.appendChild(h3);
};

function captureIndex(i) {
    function name() {
        alert("Accusation" + i + ": I accuse " + friends[i % friends.length] + ", with the " + weapons[i % weapons.length] + " in the " + places[i % places.length] + "!")
    };
    return name
};
