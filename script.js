let cat = {
  name: "Живоглот",
  breed: "Персидская кошка",
  age: 8,
  weight: 4,
  feed: function () {
    this.weight < 8 ? (this.weight += 0.5) : alert("Слишком много!");
  },
  diet: function () {
    this.weight > 5 ? (this.weight -= 0.3) : alert("Слишком мало!");
  },
  showWeight: function () {
    alert("Я вешу " + this.weight);
  },
  toString: function () {
    return (
      "Кот :" +
      this.name +
      "; Порода : " +
      this.breed +
      "; Возраст : " +
      this.age
    );
  },
};

alert(cat);

cat.feed();
cat.feed();
cat.feed();
cat.showWeight();
cat.diet();
cat.showWeight();
