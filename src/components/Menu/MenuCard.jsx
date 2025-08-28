import React, { useState } from 'react';

const categories = [
  "Large Bowl",
  "Medium Bowl",
  "Small Bowl",
  "XS Bowl",
  "Specials - Available in 4 sizes",
  "Sides",
  "Sharer Menu",
  "Drinks",
  "Platters",
  "Extras",
  "Street Food",
  "Sweet Treats"
];

const allItems = [
  {
    title: "Build Your Large Bowl",
    price: "£13.95",
    desc: "1300ml Choose to add cutlery",
    category: "Large Bowl",
  },
  {
    title: "Build Your Medium Bowl",
    price: "£11.95",
    desc: "1000ml Choose to add cutlery",
    category: "Medium Bowl",
  },
  {
    title: "Build Your Small Bowl",
    price: "£9.95",
    desc: "750ml Choose to add cutlery.",
    category: "Small Bowl",
  },
  {
    title: "Build Your XS Bowl",
    price: "£7.95",
    desc: "750ml Choose to add cutlery.",
    category: "XS Bowl",
  },
  {
    title: "Burrito Bowl",
    price: "£8.95",
    desc: "Wild rice, black beans, seasoned sweetcorn, tomato salsa, guacamole and spinach.Options to add your choice of protein and dressing. Choose to add cutlery.",
    category: "Specials - Available in 4 sizes",
  },
  {
    title: "Hulk Bowl",
    price: "£7.95",
    desc: "Broccoli, green peppers, courgette, edamame, peas, mangetout, sugar snaps, spinach and rocket. Options to add your choice of protein and dressing. Choose to add cutlery.",
    category: "Specials - Available in 4 sizes",
  },
  {
    title: "Rainbow Bowl",
    price: "£8.95",
    desc: "Mediterranean couscous, chickpea salad, fresh green salad, quinoa superfood salad, red and white cabbage, lettuce, cucumber, tomato, carrot and red onion. Options to add your choice of protein and dressing. Choose to add cutlery.",
    category: "Specials - Available in 4 sizes",
  },
  {
    title: "Buddha Bowl",
    price: "£7.95",
    desc: "Wild rice, lentil dahl and spinach. Options to add your choice of protein and dressing. Choose to add cutlery.",
    category: "Specials - Available in 4 sizes",
  },
  {
    title: "Chicken Curry + Wild Rice",
    price: "£8.95",
    category: "Specials - Available in 4 sizes",
    image: "/ChickenCurry.jpg",
  },
  {
    title: "Beef Chilli + Wild Rice",
    price: "£8.95",
    category: "Specials - Available in 4 sizes",
    image: "/BeefCurry.jpg",
  },
  {
    title: "Plain Steamed Veg Portion",
    price: "£5.50",
    desc: "XS - £5.50, Small - £7.50, Medium - £9.50, Large - £11.50",
    category: "Sides",
    image: "/veg.jpg",
  },
  {
    title: "Basic Salad Portion",
    price: "£5.50",
    desc: "XS - £5.50, Small - £7.50, Medium - £9.50, Large - £11.50",
    category: "Sides",
    image: "/salad.jpg",
  },
  {
    title: "New Potatoes Portion",
    price: "£5.50",
    desc: "XS - £5.50, Small - £7.50, Medium - £9.50, Large - £11.50",
    category: "Sides",
    image: "/potato.jpg",
  },
  {
    title: "Teriyaki Noodles Portion",
    price: "£5.50",
    desc: "XS - £5.50, Small - £7.50, Medium - £9.50, Large - £11.50",
    category: "Sides",
    image: "/salad.jpg",
  },
  {
    title: "Wild Rice Portion",
    price: "£5.50",
    desc: "XS - £5.50, Small - £7.50, Medium - £9.50, Large - £11.50",
    category: "Sides",
    image: "/salad.jpg",
  },

  {
    title: "Triple Cooked Wedges",
    price: "£4.95",
    category: "Sides",
    image: "/salad.jpg",
  },
  {
    title: "Pot of Jalapenos",
    price: "£4.95",
    category: "Sides",
    image: "/salad.jpg",
  },
  {
    title: "Pot of Gherkins",
    price: "£4.95",
    category: "Sides",
    image: "/salad.jpg",
  },
  {
    title: "Pot of Hummus",
    price: "£4.95",
    category: "Sides",
    image: "/salad.jpg",
  },
  {
    title: "Tirokafteri",
    price: "£4.95",
    category: "Sides",
    image: "/salad.jpg",
  },
  {
    title: "Tzatziki",
    price: "£4.95",
    category: "Sides",
    image: "/salad.jpg",
  },
  {
    title: "Teriyaki Noodles- Large",
    price: "£4.95",
    category: "Sharer Menu",
    image: "/salad.jpg",
  },
  {
    title: "Wild Rice- Large",
    price: "£4.95",
    category: "Sharer Menu",
    image: "/salad.jpg",
  },
  {
    title: "New Potatoes - Large",
    price: "£4.95",
    category: "Sharer Menu",
    image: "/salad.jpg",
  },
  {
    title: "Steamed Veg - Large",
    price: "£4.95",
    category: "Sharer Menu",
    image: "/salad.jpg",
  },
  {
    title: "Basic Salad - Large",
    price: "£4.95",
    category: "Sharer Menu",
    image: "/salad.jpg",
  },
  {
    title: "Box of Wedges",
    price: "£4.95",
    category: "Sharer Menu",
    image: "/salad.jpg",
  },
  {
    title: "Halloumi - Large",
    price: "£4.95",
    category: "Sharer Menu",
    image: "/salad.jpg",
  },
  {
    title: "Falafel - Large",
    price: "£4.95",
    category: "Sharer Menu",
    image: "/salad.jpg",
  },
  {
    title: "Salmon Fillet (Single)",
    price: "£4.95",
    category: "Sharer Menu",
    image: "/salad.jpg",
  },
  {
    title: "Chicken - Large",
    price: "£4.95",
    category: "Sharer Menu",
    image: "/salad.jpg",
  },
  {
    title: "Chipotle Dressing",
    price: "£4.95",
    category: "Sharer Menu",
    image: "/salad.jpg",
  },
  {
    title: "Balsamic Dressing",
    price: "£4.95",
    category: "Sharer Menu",
    image: "/salad.jpg",
  },
  {
    title: "Sweet Chilli Dressing",
    price: "£4.95",
    category: "Sharer Menu",
    image: "/salad.jpg",
  },
  {
    title: "French Dressing",
    price: "£4.95",
    category: "Sharer Menu",
    image: "/salad.jpg",
  }, {
    title: "Sriracha Dressing",
    price: "£4.95",
    category: "Sharer Menu",
    image: "/salad.jpg",
  },
  {
    title: "Vegan Mayo Dressing",
    price: "£4.95",
    category: "Sharer Menu",
    image: "/salad.jpg",
  },
  {
    title: "Yoghurt Mint Dressing",
    price: "£4.95",
    category: "Sharer Menu",
    image: "/salad.jpg",
  },
  {
    title: "Peroni 330ml",
    price: "£4.95",
    category: "Drinks",
    image: "/salad.jpg",
  },
  {
    title: "Marstons Pedigree 500ml",
    price: "£4.95",
    category: "Drinks",
    image: "/salad.jpg",
  }, {
    title: "Shipyard 500ml",
    price: "£4.95",
    category: "Drinks",
    image: "/salad.jpg",
  },
  {
    title: "Timothy Taylor Landlord 500ml",
    price: "£4.95",
    category: "Drinks",
    image: "/salad.jpg",
  },
  {
    title: "Magners Cider 500ml",
    price: "£4.95",
    category: "Drinks",
    image: "/salad.jpg",
  },
  {
    title: "Guinness 440ml",
    price: "£4.95",
    category: "Drinks",
    image: "/salad.jpg",
  },
  {
    title: "Prosecco 200ml",
    price: "£4.95",
    category: "Drinks",
    image: "/salad.jpg",
  },
  {
    title: "Prosecco 75cl",
    price: "£4.95",
    category: "Drinks",
    image: "/salad.jpg",
  },
  {
    title: "Pinot Grigio 75cl",
    price: "£4.95",
    category: "Drinks",
    image: "/salad.jpg",
  },
  {
    title: "Sauvignon Blanc 75cl",
    price: "£4.95",
    category: "Drinks",
    image: "/salad.jpg",
  },
  {
    title: "Pinot Blush 75cl",
    price: "£4.95",
    category: "Drinks",
    image: "/salad.jpg",
  },
  {
    title: "Rose Zinfandel 75cl",
    price: "£4.95",
    category: "Drinks",
    image: "/salad.jpg",
  },
  {
    title: "Malbec 75cl",
    price: "£4.95",
    category: "Drinks",
    image: "/salad.jpg",
  },
  {
    title: "Cabernet Sauvignon 75cl",
    price: "£4.95",
    category: "Drinks",
    image: "/salad.jpg",
  },
  {
    title: "Pepsi Max 500ml",
    price: "£4.95",
    category: "Drinks",
    image: "/salad.jpg",
  },
  {
    title: "Liptons Iced Tea 500ml",
    price: "£4.95",
    category: "Drinks",
    image: "/salad.jpg",
  },
  {
    title: "Sparkling Water 500ml",
    price: "£4.95",
    category: "Drinks",
    image: "/salad.jpg",
  },
  {
    title: "Apple Juice 250ml",
    price: "£4.95",
    category: "Drinks",
    image: "/salad.jpg",
  },
  {
    title: "Orange Juice 250ml",
    price: "£4.95",
    category: "Drinks",
    image: "/salad.jpg",
  },
  {
    title: "Fruit Shoots 330ml",
    price: "£4.95",
    category: "Drinks",
    image: "/salad.jpg",
  },
  {
    title: "Peroni 0% 330ml",
    price: "£4.95",
    category: "Drinks",
    image: "/salad.jpg",
  },
  {
    title: "Red Bull (sugar free) 250ml",
    price: "£4.95",
    category: "Drinks",
    image: "/salad.jpg",
  },
  {
    title: "Kombucha - Gingerlicious",
    price: "£4.95",
    category: "Drinks",
    image: "/salad.jpg",
  },
  {
    title: "Kombucha - Strawberry and Basil",
    price: "£4.95",
    category: "Drinks",
    image: "/salad.jpg",
  }, {
    title: "Kombucha - Elderflower Mojito",
    price: "£4.95",
    category: "Drinks",
    image: "/salad.jpg",
  },
  {
    title: "Lemon and Lime - Boxed Water",
    price: "£4.95",
    category: "Drinks",
    image: "/salad.jpg",
  },
  {
    title: "Orange and Peach - Boxed Water",
    price: "£4.95",
    category: "Drinks",
    image: "/salad.jpg",
  },
  {
    title: "Can of ginger and yuzu kombucha",
    price: "£4.95",
    category: "Drinks",
    image: "/salad.jpg",
  },
  {
    title: "Can of blueberry and ginger kombucha",
    price: "£4.95",
    category: "Drinks",
    image: "/salad.jpg",
  },
  {
    title: "Can of apple and elderflower kombucha",
    price: "£4.95",
    category: "Drinks",
    image: "/salad.jpg",
  },
  {
    title: "Can of strawberry and pineapple kombucha",
    price: "£4.95",
    category: "Drinksers",
    image: "/salad.jpg",
  },
  {
    title: "Lipton’s Peach",
    price: "£4.95",
    category: "Drinksers",
    image: "/salad.jpg",
  },
  {
    title: "Chicken Meze Platter",
    price: "£4.95",
    category: "Platters",
    image: "/salad.jpg",
  },
  {
    title: "Falafel Meze Platter (Vegetarian)",
    price: "£4.95",
    category: "Platters",
    image: "/salad.jpg",
  },
  {
    title: "Appetizer Sharer Platter",
    price: "£4.95",
    category: "Extras",
    image: "/salad.jpg",
  },
  {
    title: "Appetizer Sharer Platter (Vegan)",
    price: "£4.95",
    category: "Extras",
    image: "/salad.jpg",
  },
  {
    title: "Pot Of Olives",
    price: "£4.95",
    category: "Extras",
    image: "/salad.jpg",
  },
  {
    title: "Pot Of Jalapenos",
    price: "£4.95",
    category: "Extras",
    image: "/salad.jpg",
  }, {
    title: "Pot Of Gherkins",
    price: "£4.95",
    category: "Extras",
    image: "/salad.jpg",
  },
  {
    title: "Pot Of Hummus",
    price: "£4.95",
    category: "Extras",
    image: "/salad.jpg",
  },
  {
    title: "Grilled Halloumi (3 Strips)",
    price: "£4.95",
    category: "Extras",
    image: "/salad.jpg",
  }, {
    title: "Steamed Chicken Breast (3 Slices)",
    price: "£4.95",
    category: "Extras",
    image: "/salad.jpg",
  },
  {
    title: "Baked Falafel (3 Pieces)",
    price: "£4.95",
    category: "Street Food",
    image: "/salad.jpg",
  },
  {
    title: "Salmon Fillet",
    price: "£4.95",
    category: "Street Food",
    image: "/salad.jpg",
  }, {
    title: "Chicken Gyros",
    price: "£4.95",
    category: "Street Food",
    image: "/salad.jpg",
  },
  {
    title: "Chicken Gyros with extra scoop of fries",
    price: "£4.95",
    category: "Street Food",
    image: "/salad.jpg",
  },
  {
    title: "Halloumi Gyros",
    price: "£4.95",
    category: "Street Food",
    image: "/salad.jpg",
  },
  {
    title: "Halloumi Gyros with extra scoop of fries",
    price: "£4.95",
    category: "Street Food",
    image: "/salad.jpg",
  },
  {
    title: "Buffalo Chicken Wings (3 Wings)",
    price: "£4.95",
    category: "Street Food",
    image: "/salad.jpg",
  },
  {
    title: "Buffalo Chicken Wings (6 Wings)",
    price: "£4.95",
    category: "Street Food",
    image: "/salad.jpg",
  },
  {
    title: "Buffalo Chicken Wings (9 Wings)",
    price: "£4.95",
    category: "Street Food",
    image: "/salad.jpg",
  },
  {
    title: "Buffalo Chicken Wings (15 Wings)",
    price: "£4.95",
    category: "Street Food",
    image: "/salad.jpg",
  },
  {
    title: "BBQ Chicken Wings (3 Wings)",
    price: "£4.95",
    category: "Street Food",
    image: "/salad.jpg",
  },
  {
    title: "BBQ Chicken Wings (6 Wings)",
    price: "£4.95",
    category: "Street Food",
    image: "/salad.jpg",
  },
  {
    title: "BBQ Chicken Wings (9 Wings)",
    price: "£4.95",
    category: "Street Food",
    image: "/salad.jpg",
  },
  {
    title: "BBQ Chicken Wings (15 Wings)",
    price: "£4.95",
    category: "Street Food",
    image: "/salad.jpg",
  },
  {
    title: "2 Jackfruit Bao Buns (vg)",
    price: "£4.95",
    category: "Street Food",
    image: "/salad.jpg",
  },
  {
    title: "2 Hoisin Duck Bao Buns",
    price: "£4.95",
    category: "Extrast Foods",
    image: "/salad.jpg",
  },
  {
    title: "Portion of French Fries",
    price: "£4.95",
    category: "Street Food",
    image: "/salad.jpg",
  },
  {
    title: "Portion of Sweet Potato Fries",
    price: "£4.95",
    category: "Street Food",
    image: "/salad.jpg",
  },
  {
    title: "Mini Vegetable Spring Rolls (5) (Vegan)",
    price: "£4.95",
    category: "Street Food",
    image: "/salad.jpg",
  }, {
    title: "Mini Vegetable Samosas (5) (Vegan)",
    price: "£4.95",
    category: "Street Food",
    image: "/salad.jpg",
  },
  {
    title: "5x Mini Vegetable Gyozas (Vegan)",
    price: "£4.95",
    category: "Street Food",
    image: "/salad.jpg",
  },
  {
    title: "3 x Jalapeno Bites",
    price: "£4.95",
    category: "Street Food",
    image: "/salad.jpg",
  },
  {
    title: "3 x Mozzarella Sticks",
    price: "£4.95",
    category: "Street Food",
    image: "/salad.jpg",
  },
  {
    title: "3 x Onion Bhajees",
    price: "£4.95",
    category: "Street Food",
    image: "/salad.jpg",
  },
  {
    title: "3 x Arancini Balls",
    price: "£4.95",
    category: "Street Food",
    image: "/salad.jpg",
  },
  {
    title: "3 x Mac n Cheese Bites",
    price: "£4.95",
    category: "Street Food",
    image: "/salad.jpg",
  },
  {
    title: "5 x Salt n Pepper Calamari pieces",
    price: "£4.95",
    category: "Street Food",
    image: "/salad.jpg",
  },
  {
    title: "GF Flapjack",
    price: "£4.95",
    category: "Sweet Treats",
    image: "/salad.jpg",
  },
  {
    title: "GF Tiffin Bar",
    price: "£4.95",
    category: "Sweet Treats",
    image: "/salad.jpg",
  },
  {
    title: "GF Rocky Road",
    price: "£4.95",
    category: "Sweet Treats",
    image: "/salad.jpg",
  },

];

const MenuCard = () => {
  const [selected, setSelected] = useState("Large Bowl");

  const filtered = selected === "All"
    ? allItems
    : allItems.filter((item) => item.category === selected);

  return (
    <section id='menu' className="w-full bg-pink-400 text-white py-16 px-6">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-6xl font-bold mb-5">Our Best & Delicious Menu</h2>
        <p className="text-gray-300 text-md md:text-xl font-semibold mt-2 mb-15">
          Discover the authentic taste of Dhaka’s street food scene
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-4xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 rounded-md font-medium text-sm transition duration-300 ease-in-out ${selected === cat
              ? "bg-gray-300 text-black"
              : "bg-white text-black hover:bg-gray-400 hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {filtered.map((item, i) => (
          <div
            key={i}
            className="bg-[#0e1b0e]/90 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-[#346909] hover:border hover:z-10 hover:shadow-2xl"
          >
            <img src={item.image} alt={item.title} className="w-full h-44 object-cover" />
            <div className="p-4">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <span className="text-green-400 font-semibold">{item.price}</span>
              </div>
              <p className="text-sm text-gray-300 mb-4">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View Full Menu Button
      <div className="mt-12 flex justify-center">
        <button className="bg-[#346909] hover:bg-green-950 text-white px-6 py-2 rounded-md font-semibold text-sm md:text-base transform hover:scale-105 transition duration-300 ease-in-out">
          View Full Menu
        </button>
      </div> */}
    </section>
  );
};

export default MenuCard;
