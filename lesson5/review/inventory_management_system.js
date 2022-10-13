// -----------Item Creator ---------------------

// makes sure that all necessary information are present and valid.
// SKU code: This is the unique identifier for a product. It consists of the first 3 letters of the item and the first 2 letters of the category. If the item name consists of two words and the first word consists of two letters only, the next letter is taken from the next word.
  // sku is created, not passed in
// Item name: This is the name of the item. It must consist of a minimum of 5 characters. Spaces are not counted as characters.
// Category: This is the category that the item belongs to. It must consist of a minimum of 5 characters and be only one word.
// Quantity: This is the quantity in stock of an item. This must not be blank. You may assume that a valid number will be provided.

// There's no need to add the ability to validate the uniqueness of the SKU code. Given the current description, it's possible that a duplicate will exist.
// Each required piece of information for an item corresponds to one property.
// If any of the information provided is not valid, the item creator returns an object with a notValid property with a value of true.
// The created item objects should not have any methods/properties on them other than the required information above and those inherited from Object.prototype.

// ---------------Item manager ---------------------

// The item manager is responsible for creating items, updating information about items, deleting items, and querying information about the items.
// create: This method creates a new item. Returns false if creation is not successful.
// update: This method accepts an SKU Code and an object as an argument and updates any of the information on an item. You may assume valid values will be provided.
// delete: This method accepts an SKU Code and deletes the item from the list. You may assume a valid SKU code is provided.
// items: This property contains a list of all the items.
// inStock: This method lists all the items that have a quantity greater than 0.
// itemsInCategory: This method lists all the items for a given category

// You may add methods to the item manager as you deem necessary.

// ----------------- ReportManager ---------------------

// generates reports for a specific item or ALL items. Reports for specific items are generated from report objects created from the report manager. The report manager is responsible for reports for all items.
// init: This method accepts the ItemManager object as an argument and assigns it to the items property.
// createReporter: This method accepts an SKU code as an argument and returns an object.
// The returned object has one method, itemInfo. It logs to the console all the properties of an object as "key:value" pairs (one pair per line). There are no other properties or methods on the returned object (except for properties/methods inherited from Object.prototype).
// reportInStock: Logs to the console the item names of all the items that are in stock as a comma separated values.

let ItemCreator = function(name, category, quantity) {
  const nonSpacesName = name.replace(/\s/g, '')

  // if (!name || !category || !quantity) console.log(`Can't add ${name} because one of the inputs is missing.`)

  function validName() {
    // if (nonSpacesName.length < 5) console.log(`The name: ${name} isn't long enough.`);
    return (name && nonSpacesName.length >= 5);
  }
  function validCategory() {
    // if (category.length < 5) {
    //   console.log(`The category name: ${category} isn't long enough.`)
    // } else if (category.match(/\s/)){
    //   console.log(`The category: ${category} must be one word`);
    // }

    return (category && category.length >=5 && !category.match(/\s/));
  }
  function validQuantity() {
    return (quantity >= 0);
  }

  if (!(validName() && validCategory() && validQuantity())) return { notValid: true};

  this.skuCode = name.slice(0,3).toUpperCase() + category.slice(0, 2).toUpperCase();
  this.itemName = name;
  this.category = category;
  this.quantity = quantity;
}

let ItemManager = {
  // The item manager is responsible for creating items, updating information about items, deleting items, and querying information about the items.
  // You may add methods to the item manager as you deem necessary.
  items: [],
  create(name, category, quantity) {
    const item = new ItemCreator(name, category, quantity);
    if (item.notValid) return false;
    this.items.push(item);
    return item;
  },
  update(sku, obj) {
    const properties = Object.keys(obj);
    const item = this.findItemBySku(sku);
    properties.forEach( key => {
      item[key] = obj[key];
    })
  },
  delete(sku) {
    const index = this.findIndexBySku(sku);
    this.items.splice(index, 1);
    // delete: This method accepts an SKU Code and deletes the item from the list. You may assume a valid SKU code is provided.
  },
  inStock() {
    return this.items.filter( item => item.quantity > 0)
    // inStock: This method lists all the items that have a quantity greater than 0.
  },
  itemsInCategory(category) {
    return this.items.filter( item => item.category === category);
    // itemsInCategory: This method lists all the items for a given category
  },
  findItemBySku(sku) {
    return this.items.filter( item => item.skuCode === sku)[0]
  },
  findIndexBySku(sku) {
    let item = this.findItemBySku(sku);
    return this.items.indexOf(item);
  }
}

let ReportManager = {
  // generates reports for a specific item or ALL items.
  // Reports for specific items are generated from report objects created from the report manager.
  // The report manager is responsible for reports for all items.
  init(itemManager) {
    this.items = itemManager
    // init: This method accepts the ItemManager object as an argument and assigns it to the items property.
  },
  createReporter(sku) {
    return {
      itemInfo() {
        const item = ReportManager.items.findItemBySku(sku);
        const keys = Object.keys(item);
        keys.forEach( key => {
          console.log(`${key}: ${item[key]}`)
        })

        // It logs to the console all the properties of an object as "key:value" pairs (one pair per line).
      }
    }
    // createReporter: This method accepts an SKU code as an argument and returns an object.
    // The returned object has one method, itemInfo. It logs to the console all the properties of an object as "key:value" pairs (one pair per line). There are no other properties or methods on the returned object (except for properties/methods inherited from Object.prototype).
  },
  reportInStock() {
    const inStock = this.items.inStock().map( item => item.itemName).join(',')
    console.log(inStock);
    return inStock;
    // reportInStock: Logs to the console the item names of all the items that are in stock as a comma separated values.
  },

}

ItemManager.create('basket ball', 'sports', 0)       ;           // valid item
ItemManager.create('asd', 'sports', 0)               ;                   // name mimimum 5 characters
ItemManager.create('soccer ball', 'sports', 5)       ;           // valid item
ItemManager.create('football', 'sports')             ;                 // quantity can't be blank
ItemManager.create('football', 'sports', 3)          ;              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);          // category can't be multiple words
ItemManager.create('kitchen pot', 'cooking', 3)      ;          // valid item

// console.log(ItemManager.items);
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
console.log(ItemManager.items);
console.log(ItemManager.inStock());
// returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// logs football,kitchen pot
console.log(ItemManager.itemsInCategory('sports'));
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
console.log(ItemManager.items);
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
