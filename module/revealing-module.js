// Revealing Module Pattern

const ItemCtrl = (function () {
  // Underscores signify a PRIVATE variable
  let _data = [];

  function add(item) {
    _data.push(item);
    console.log("Item Added...");
  }

  function get(id) {
    return _data.find((item) => {
      return item.id === id;
    });
  }

  // Things added in this return make the methods PUBLIC
  return {
    add: add,
    get: get,
  };
})();

ItemCtrl.add({ id: 1, name: "John" });
ItemCtrl.add({ id: 2, name: "Mark" });
