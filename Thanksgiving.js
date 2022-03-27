console.log("i'm running");
const thanksgivingMeal = {
    starter: {
        fruit: "honeydew melon",
        wine: "moscato",
        calories: 180
    },
    entree: {
        meat: "Turkey",
        alt: "Stuffed green peppers",
        vegetables: {
            potatoes: "Creamed mashed potatoes",
            greens: "French beans",
            salad: "Radacchio"
        },
        sides: {
            bread: "garlic bread rolls",
            pasta: "Macaroni and Cheese"
        },
        calories: 450
    },
    dessert: {
        ice_cream: "pumpkin-vanilla",
        cake: "frosted pumpkin pie",
        calories: 300
    },
    total_cost: 25.0,
    senior_discount: .10,
    prettyPrint: function () {
        let menuStr = "Start your meal with " + this.starter.fruit + ", a glass of " + this.starter.wine + ". Help yourself to " + this.entree.meat + " or " + this.entree.alt + ", with " + this.entree.vegetables.salad + ", " + this.entree.vegetables.greens + " and " + this.entree.vegetables.potatoes + ". Have a side! Plenty of " + this.entree.sides.bread + " and " + this.entree.sides.pasta + ". Finish your meal with a sweet-" + this.dessert.ice_cream + " ice-cream, " + this.dessert.cake;

        let meal = document.querySelector(".fullmeal");
        console.log("Got handle");
        meal.innerHTML = menuStr;
        return (menuStr);
    },
    totalPrice(isSenior) {
        let price = document.querySelector(".priceInfo");
        let cost = this.total_cost;
        if (isSenior) {
            console.log("Yes");
            cost -= this.total_cost * this.senior_discount;
            alert("Senior Discount Applied");
            price.textContent = "Seniors get a 10% discount, the total cost for your Thanksgiving meal? Senior: $" + cost;
        } else {
            console.log("No");
            alert("No Senior discount");
            price.innerHTML = "Seniors get a 10% discount, the total cost for your Thanksgiving meal? Adult: $" + cost;
        }
        return;
    },
    totalCalories: function () {
        console.log("totalCalories running");
        return (this.starter.calories + this.entree.calories + this.dessert.calories);
    },
    caloriesFrom: function (indicator) {
        console.log("caloriesFrom running");
        return (indicator.calories);
    }
};
let header = document.querySelector(".greeting");
header.textContent = "Enjoy Your Thanksgiving This Year!";
console.log(thanksgivingMeal.totalCalories());
console.log(thanksgivingMeal.caloriesFrom(thanksgivingMeal.starter));
let start = thanksgivingMeal.caloriesFrom(thanksgivingMeal.starter);
let ent = thanksgivingMeal.caloriesFrom(thanksgivingMeal.entree);
let dest = thanksgivingMeal.caloriesFrom(thanksgivingMeal.dessert);
let calorie = document.querySelector(".calorieInfo");
calorie.textContent = "Worried about calorie? Total damage is " + thanksgivingMeal.totalCalories() + " (starter: " + start + ", entree: " + ent + ", dessert: " + dest + ")"
console.log("OneR");
thanksgivingMeal.prettyPrint();
console.log(thanksgivingMeal.totalPrice(true));
console.log("Done Running");