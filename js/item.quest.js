Item.Quest = function(color) {
	Item.call(this);
	this._visual.fg = color;
	this._visual.description = Item.Quest.ALL.shift();
}
Item.Quest.extend(Item);

/** These contain an article */
Item.Quest.prototype.a = Item.Quest.prototype.toString;

Item.Quest.NORMAL = [
	"World peace",
	"an AIDS cure",
	"a Billion dollar bill",
	"a Beautiful wife",
	"a Cadillac Escalade",
	"a Hiccup cure",
	"Courage",
	"Happiness"
];

Item.Quest.SILLY = [
	"a 14 inch manhood",
	"a Bitcoin",
	"a Dogecoin",
	"a Lifelong vivid.com membership",
	"the Trident of the Red Rooster",
	"the Amulet of Yendor",
	"the One Ring",
	"a Scroll of chaos resistance",
	"an Amulet of life saving",
	"a Lutefisk"
];

Item.Quest.ALL = [];

(function() {
	var n = this.NORMAL.randomize()
	this.ALL = n.slice(0, 3).concat(n.slice(3).concat(this.SILLY).randomize());
}).call(Item.Quest);
