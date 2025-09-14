const menuData = [
  // STARTERS (1–15)
  {
    id: 1,
    category: "Starter",
    name: "Paneer Tikka",
    type: "VEG",
    description: "Marinated paneer cubes grilled to perfection.",
    image: "https://images.pexels.com/photos/9609835/pexels-photo-9609835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ingredients: [
      { item: "Paneer", quantity: "200g" },
      { item: "Yogurt", quantity: "3 tbsp" },
      { item: "Ginger-Garlic Paste", quantity: "1 tsp" },
      { item: "Spices", quantity: "1 tbsp" }
    ]
  },
  {
    id: 2,
    category: "Starter",
    name: "Chicken Tikka",
    type: "NON-VEG",
    description: "Juicy chicken pieces grilled with Indian spices.",
    image: "https://images.pexels.com/photos/12737801/pexels-photo-12737801.jpeg",
    ingredients: [
      { item: "Chicken", quantity: "250g" },
      { item: "Yogurt", quantity: "4 tbsp" },
      { item: "Lemon Juice", quantity: "1 tbsp" },
      { item: "Spices", quantity: "1.5 tbsp" }
    ]
  },
  {
    id: 3,
    category: "Starter",
    name: "Onion Pakora",
    type: "VEG",
    description: "Crispy fried onion fritters.",
    image: "https://images.pexels.com/photos/33869807/pexels-photo-33869807.jpeg",
    ingredients: [
      { item: "Onion", quantity: "2 medium" },
      { item: "Gram Flour", quantity: "1 cup" },
      { item: "Spices", quantity: "1 tbsp" }
    ]
  },
  {
    id: 4,
    category: "Starter",
    name: "Fish Fry",
    type: "NON-VEG",
    description: "Spicy shallow-fried fish fillet.",
    image: "https://images.pexels.com/photos/4869334/pexels-photo-4869334.jpeg",
    ingredients: [
      { item: "Fish Fillet", quantity: "200g" },
      { item: "Turmeric", quantity: "½ tsp" },
      { item: "Chili Powder", quantity: "1 tsp" },
      { item: "Oil", quantity: "2 tbsp" }
    ]
  },
  {
    id: 5,
    category: "Starter",
    name: "Aloo Tikki",
    type: "VEG",
    description: "Crispy potato patties with spices.",
    image: "https://t3.ftcdn.net/jpg/14/39/08/24/240_F_1439082478_8xzdBMGOt25LJFuZCknrGR2cd8eiaL6i.jpg",
    ingredients: [
      { item: "Potatoes", quantity: "3 medium" },
      { item: "Breadcrumbs", quantity: "½ cup" },
      { item: "Spices", quantity: "1 tbsp" }
    ]
  },
  {
    id: 6,
    category: "Starter",
    name: "Chilli Paneer",
    type: "VEG",
    description: "Cottage cheese tossed with bell peppers and sauces.",
    image: "https://t3.ftcdn.net/jpg/06/38/41/98/240_F_638419895_RQjYloWExz0NRO9A0dFGXsbkYV81tUgz.jpg",
    ingredients: [
      { item: "Paneer", quantity: "200g" },
      { item: "Capsicum", quantity: "1 medium" },
      { item: "Soy Sauce", quantity: "1 tbsp" }
    ]
  },
  {
    id: 7,
    category: "Starter",
    name: "Chilli Chicken",
    type: "NON-VEG",
    description: "Crispy chicken tossed in Indo-Chinese sauce.",
    image: "https://t3.ftcdn.net/jpg/09/43/87/72/240_F_943877268_Q6tjM8uPJWhOaiWqqd8BZj2GSIdYt785.jpg",
    ingredients: [
      { item: "Chicken", quantity: "250g" },
      { item: "Cornflour", quantity: "2 tbsp" },
      { item: "Soy Sauce", quantity: "1 tbsp" }
    ]
  },
  {
    id: 8,
    category: "Starter",
    name: "Baby Corn Manchurian",
    type: "VEG",
    description: "Crispy baby corn in tangy sauce.",
    image: "https://t3.ftcdn.net/jpg/06/28/16/02/240_F_628160257_ovx7WNAvsTw0EuUf0WwkzI1goPALPDv1.jpg",
    ingredients: [
      { item: "Baby Corn", quantity: "150g" },
      { item: "Cornflour", quantity: "2 tbsp" },
      { item: "Soy Sauce", quantity: "1 tbsp" }
    ]
  },
  {
    id: 9,
    category: "Starter",
    name: "Mutton Seekh Kebab",
    type: "NON-VEG",
    description: "Spiced minced mutton skewers.",
    image: "https://t4.ftcdn.net/jpg/16/57/04/61/240_F_1657046168_vmiccGwei9ShxRiTNPtF3147tvyXqYsn.jpg",
    ingredients: [
      { item: "Mutton Mince", quantity: "250g" },
      { item: "Onion", quantity: "1 small" },
      { item: "Ginger-Garlic Paste", quantity: "1 tsp" },
      { item: "Spices", quantity: "1 tbsp" }
    ]
  },
  {
    id: 10,
    category: "Starter",
    name: "Hara Bhara Kebab",
    type: "VEG",
    description: "Spinach and peas patties with spices.",
    image: "https://t3.ftcdn.net/jpg/14/92/40/74/240_F_1492407407_esoXcPwxjfbUWQyO0HyYvSL70LjudDdP.jpg",
    ingredients: [
      { item: "Spinach", quantity: "100g" },
      { item: "Green Peas", quantity: "½ cup" },
      { item: "Potato", quantity: "1 medium" }
    ]
  },
  {
    id: 11,
    category: "Starter",
    name: "Veg Spring Roll",
    type: "VEG",
    description: "Crispy rolls stuffed with mixed veggies.",
    image: "https://t4.ftcdn.net/jpg/08/20/02/85/240_F_820028506_lQ6yBoGhWXcwAF7dpZvkDYR6nn5sujOS.jpg",
    ingredients: [
      { item: "Cabbage", quantity: "½ cup" },
      { item: "Carrot", quantity: "½ cup" },
      { item: "Spring Roll Sheets", quantity: "6 pcs" }
    ]
  },
  {
    id: 12,
    category: "Starter",
    name: "Tandoori Chicken",
    type: "NON-VEG",
    description: "Chicken legs marinated in yogurt and spices.",
    image: "https://t4.ftcdn.net/jpg/07/27/22/13/240_F_727221329_31nHesCjo6CAjkpWlbnnaG97eIekFW5V.jpg",
    ingredients: [
      { item: "Chicken Legs", quantity: "2 pcs" },
      { item: "Yogurt", quantity: "3 tbsp" },
      { item: "Spices", quantity: "2 tbsp" }
    ]
  },
  {
    id: 13,
    category: "Starter",
    name: "Mushroom 65",
    type: "VEG",
    description: "South Indian style crispy fried mushrooms.",
    image: "https://t3.ftcdn.net/jpg/03/09/13/38/240_F_309133823_eCPt0ndl5vS13iFxuLlNg4pEK3vecvB6.jpg",
    ingredients: [
      { item: "Mushrooms", quantity: "200g" },
      { item: "Cornflour", quantity: "2 tbsp" },
      { item: "Spices", quantity: "1 tbsp" }
    ]
  },
  {
    id: 14,
    category: "Starter",
    name: "Prawn Tempura",
    type: "NON-VEG",
    description: "Lightly battered deep-fried prawns.",
    image: "https://t3.ftcdn.net/jpg/06/26/01/54/240_F_626015473_HlmSKhPFGWDruLCW1tE03DGwSVY8jmN3.jpg",
    ingredients: [
      { item: "Prawns", quantity: "200g" },
      { item: "Flour", quantity: "½ cup" },
      { item: "Cornflour", quantity: "2 tbsp" }
    ]
  },
  {
    id: 15,
    category: "Starter",
    name: "Veg Cutlet",
    type: "VEG",
    description: "Mixed vegetable patties crumb-fried.",
    image: "https://t3.ftcdn.net/jpg/10/44/61/64/240_F_1044616427_QnDfHMahvbByaeZOK8EXQaxsJ45r6IbW.jpg",
    ingredients: [
      { item: "Mixed Vegetables", quantity: "1 cup" },
      { item: "Potato", quantity: "1 medium" },
      { item: "Breadcrumbs", quantity: "½ cup" }
    ]
  },

  // MAIN COURSE (16–35) → 20 dishes
  {
    id: 16,
    category: "Main Course",
    name: "Butter Chicken",
    type: "NON-VEG",
    description: "Creamy tomato-based chicken curry.",
    image: "https://t3.ftcdn.net/jpg/16/80/30/58/240_F_1680305831_FZlimhYaWbhL5edaG8OEult4Fp9it3FX.jpg",
    ingredients: [
      { item: "Chicken", quantity: "300g" },
      { item: "Tomatoes", quantity: "4 medium" },
      { item: "Butter", quantity: "2 tbsp" },
      { item: "Cream", quantity: "50ml" }
    ]
  },
  {
    id: 17,
    category: "Main Course",
    name: "Palak Paneer",
    type: "VEG",
    description: "Paneer cubes cooked in spinach gravy.",
    image: "https://t4.ftcdn.net/jpg/12/67/02/73/240_F_1267027308_XGOtbI8WFmwnsswQqVzr5fsQcnaOC0JU.jpg",
    ingredients: [
      { item: "Spinach", quantity: "200g" },
      { item: "Paneer", quantity: "150g" },
      { item: "Onion", quantity: "1 medium" },
      { item: "Spices", quantity: "1 tbsp" }
    ]
  },
  {
    id: 18,
    category: "Main Course",
    name: "Mutton Rogan Josh",
    type: "NON-VEG",
    description: "Kashmiri mutton curry with aromatic spices.",
    image: "https://t3.ftcdn.net/jpg/06/45/88/78/360_F_645887832_8yy68JiJ9oZ54g2syY7vs6d16ZP2h3zJ.jpg",
    ingredients: [
      { item: "Mutton", quantity: "300g" },
      { item: "Onion", quantity: "2 medium" },
      { item: "Yogurt", quantity: "3 tbsp" },
      { item: "Spices", quantity: "2 tbsp" }
    ]
  },
  {
    id: 19,
    category: "Main Course",
    name: "Shahi Paneer",
    type: "VEG",
    description: "Paneer in a rich cashew-based curry.",
    image: "https://t4.ftcdn.net/jpg/08/63/04/67/240_F_863046750_EUu6ZOBftZvlaqPTnnMP0VkmkVFGBvq1.jpg",
    ingredients: [
      { item: "Paneer", quantity: "200g" },
      { item: "Cashews", quantity: "10 pcs" },
      { item: "Cream", quantity: "50ml" },
      { item: "Spices", quantity: "1 tbsp" }
    ]
  },
    {
    id: 20,
    category: "Main Course",
    name: "Chicken Biryani",
    type: "NON-VEG",
    description: "Fragrant rice dish layered with spiced chicken.",
    image: "https://t3.ftcdn.net/jpg/16/59/35/64/240_F_1659356443_0pkwJxsbbi1Mwmcajmbdm4orDWc4wCAo.jpg",
    ingredients: [
      { item: "Chicken", quantity: "300g" },
      { item: "Basmati Rice", quantity: "1.5 cups" },
      { item: "Yogurt", quantity: "½ cup" },
      { item: "Spices", quantity: "2 tbsp" }
    ]
  },
  {
    id: 21,
    category: "Main Course",
    name: "Paneer Butter Masala",
    type: "VEG",
    description: "Paneer cooked in a buttery tomato gravy.",
    image: "https://t4.ftcdn.net/jpg/11/00/22/91/240_F_1100229184_SJln8hbcV4Gjvwhg9ONIdVCPf3GmDtF4.jpg",
    ingredients: [
      { item: "Paneer", quantity: "200g" },
      { item: "Tomatoes", quantity: "3 medium" },
      { item: "Butter", quantity: "2 tbsp" },
      { item: "Cream", quantity: "50ml" }
    ]
  },
  {
    id: 22,
    category: "Main Course",
    name: "Fish Curry",
    type: "NON-VEG",
    description: "Tangy fish curry with coconut milk.",
    image: "https://t3.ftcdn.net/jpg/04/04/48/60/240_F_404486093_uS1dUsE2EirKM8nmq9vdaiTDtARbGbW1.jpg",
    ingredients: [
      { item: "Fish", quantity: "250g" },
      { item: "Coconut Milk", quantity: "1 cup" },
      { item: "Tamarind", quantity: "1 tbsp" },
      { item: "Spices", quantity: "1 tbsp" }
    ]
  },
  {
    id: 23,
    category: "Main Course",
    name: "Chana Masala",
    type: "VEG",
    description: "Spicy chickpea curry from North India.",
    image: "https://t4.ftcdn.net/jpg/06/98/51/07/240_F_698510791_vBj6qSLQaQd6WiGbXKrGHp8MoAx1SsLP.jpg",
    ingredients: [
      { item: "Chickpeas", quantity: "1 cup" },
      { item: "Onion", quantity: "1 large" },
      { item: "Tomato", quantity: "2 medium" },
      { item: "Spices", quantity: "1 tbsp" }
    ]
  },
  {
    id: 24,
    category: "Main Course",
    name: "Prawn Masala",
    type: "NON-VEG",
    description: "Prawns simmered in spicy onion-tomato gravy.",
    image: "https://t4.ftcdn.net/jpg/06/61/65/15/240_F_661651597_AWwpDHWVHBxmbjuIUCFLuw9TainD4Saf.jpg",
    ingredients: [
      { item: "Prawns", quantity: "200g" },
      { item: "Onion", quantity: "1 medium" },
      { item: "Tomato", quantity: "2 medium" },
      { item: "Spices", quantity: "1 tbsp" }
    ]
  },
  {
    id: 25,
    category: "Main Course",
    name: "Dal Tadka",
    type: "VEG",
    description: "Yellow lentils tempered with ghee and spices.",
    image: "https://t3.ftcdn.net/jpg/09/24/69/84/240_F_924698473_L76QchqBtqRNqDHCjp6MrevaIHFKNebt.jpg",
    ingredients: [
      { item: "Toor Dal", quantity: "1 cup" },
      { item: "Onion", quantity: "1 medium" },
      { item: "Tomato", quantity: "1 medium" },
      { item: "Ghee", quantity: "1 tbsp" }
    ]
  },
  {
    id: 26,
    category: "Main Course",
    name: "Mutton Korma",
    type: "NON-VEG",
    description: "Rich Mughlai mutton curry with yogurt and spices.",
    image: "https://t3.ftcdn.net/jpg/14/62/60/76/240_F_1462607622_RuS0lP2xCxyUhEzx9CIEbETbL9ikCvCy.jpg",
    ingredients: [
      { item: "Mutton", quantity: "300g" },
      { item: "Onion", quantity: "2 medium" },
      { item: "Yogurt", quantity: "½ cup" },
      { item: "Spices", quantity: "2 tbsp" }
    ]
  },
  {
    id: 27,
    category: "Main Course",
    name: "Vegetable Korma",
    type: "VEG",
    description: "Mixed vegetables cooked in creamy coconut gravy.",
    image: "https://t4.ftcdn.net/jpg/13/26/12/73/240_F_1326127354_MvexacMbqiGGP2ZxtuDJ3LOANlmAMleV.jpg",
    ingredients: [
      { item: "Mixed Vegetables", quantity: "1 cup" },
      { item: "Coconut Milk", quantity: "1 cup" },
      { item: "Cashews", quantity: "10 pcs" },
      { item: "Spices", quantity: "1 tbsp" }
    ]
  },
  {
    id: 28,
    category: "Main Course",
    name: "Egg Curry",
    type: "NON-VEG",
    description: "Boiled eggs simmered in spicy gravy.",
    image: "https://t4.ftcdn.net/jpg/08/90/44/35/240_F_890443567_GXs1aCxmQu2oe3ohEY6gXVZkJH4afmN4.jpg",
    ingredients: [
      { item: "Boiled Eggs", quantity: "3 pcs" },
      { item: "Onion", quantity: "1 large" },
      { item: "Tomato", quantity: "2 medium" },
      { item: "Spices", quantity: "1 tbsp" }
    ]
  },
  {
    id: 29,
    category: "Main Course",
    name: "Vegetable Biryani",
    type: "VEG",
    description: "Fragrant rice cooked with spices and vegetables.",
    image: "https://t4.ftcdn.net/jpg/13/24/40/25/240_F_1324402503_blOJb5tsALKMSuHuljoIZbdrASKInWY0.jpg",
    ingredients: [
      { item: "Basmati Rice", quantity: "1.5 cups" },
      { item: "Mixed Vegetables", quantity: "1 cup" },
      { item: "Yogurt", quantity: "½ cup" },
      { item: "Spices", quantity: "2 tbsp" }
    ]
  },
  {
    id: 30,
    category: "Main Course",
    name: "Hyderabadi Dum Biryani",
    type: "NON-VEG",
    description: "Classic layered biryani with chicken and spices.",
    image: "https://t3.ftcdn.net/jpg/11/90/56/20/240_F_1190562014_ovNdKtc3XCCEY05x7j3vNnHwLcMe9dg8.jpg",
    ingredients: [
      { item: "Chicken", quantity: "350g" },
      { item: "Basmati Rice", quantity: "2 cups" },
      { item: "Yogurt", quantity: "½ cup" },
      { item: "Spices", quantity: "2 tbsp" }
    ]
  },
  {
    id: 31,
    category: "Main Course",
    name: "Rajma Masala",
    type: "VEG",
    description: "Red kidney beans cooked in spicy onion-tomato gravy.",
    image: "https://t3.ftcdn.net/jpg/06/56/33/60/240_F_656336014_YEE5SRkTh7KfqCz8mTWZSxZvDicPA1x1.jpg",
    ingredients: [
      { item: "Rajma", quantity: "1 cup" },
      { item: "Onion", quantity: "1 medium" },
      { item: "Tomato", quantity: "2 medium" },
      { item: "Spices", quantity: "1 tbsp" }
    ]
  },
  {
    id: 32,
    category: "Main Course",
    name: "Malai Kofta",
    type: "VEG",
    description: "Fried paneer-potato balls in creamy curry.",
    image: "https://t3.ftcdn.net/jpg/16/77/08/26/240_F_1677082645_R5dqlY0C0p9YwtjH2R0VVWZnp4k1D88l.jpg",
    ingredients: [
      { item: "Paneer", quantity: "100g" },
      { item: "Potato", quantity: "1 medium" },
      { item: "Cashews", quantity: "10 pcs" },
      { item: "Cream", quantity: "50ml" }
    ]
  },
  {
    id: 33,
    category: "Main Course",
    name: "Kadai Chicken",
    type: "NON-VEG",
    description: "Chicken cooked with capsicum and kadai spices.",
    image: "https://t4.ftcdn.net/jpg/13/19/64/49/240_F_1319644968_Uf8pfl7SH09mcOnlREQzjaGO0NkPixE3.jpg",
    ingredients: [
      { item: "Chicken", quantity: "300g" },
      { item: "Capsicum", quantity: "1 large" },
      { item: "Onion", quantity: "1 large" },
      { item: "Spices", quantity: "1.5 tbsp" }
    ]
  },
  {
    id: 34,
    category: "Main Course",
    name: "Veg Pulao",
    type: "VEG",
    description: "Rice cooked with vegetables and mild spices.",
    image: "https://t3.ftcdn.net/jpg/06/79/32/20/240_F_679322055_V9VMUiqizXOoMfnPpu8PbZAczItHd1NA.jpg",
    ingredients: [
      { item: "Basmati Rice", quantity: "1.5 cups" },
      { item: "Mixed Vegetables", quantity: "1 cup" },
      { item: "Ghee", quantity: "1 tbsp" }
    ]
  },
  {
    id: 35,
    category: "Main Course",
    name: "Chicken Curry",
    type: "NON-VEG",
    description: "Traditional Indian chicken curry with spices.",
    image: "https://t4.ftcdn.net/jpg/01/95/00/37/240_F_195003766_KpfiFHrRVkXdoSXxpJqYmf1E5oWOlErv.jpg",
    ingredients: [
      { item: "Chicken", quantity: "300g" },
      { item: "Onion", quantity: "2 medium" },
      { item: "Tomato", quantity: "2 medium" },
      { item: "Spices", quantity: "1.5 tbsp" }
    ]
  },

  // DESSERTS (36–50)
  {
    id: 36,
    category: "Dessert",
    name: "Gulab Jamun",
    type: "VEG",
    description: "Soft fried balls soaked in sugar syrup.",
    image: "https://t3.ftcdn.net/jpg/09/33/35/02/240_F_933350291_19S5GlfcAwG3l3lB0Ci7eMA8FXcK4X6d.jpg",
    ingredients: [
      { item: "Khoya", quantity: "200g" },
      { item: "Flour", quantity: "2 tbsp" },
      { item: "Sugar Syrup", quantity: "200ml" },
      { item: "Cardamom", quantity: "½ tsp" }
    ]
  },
  {
    id: 37,
    category: "Dessert",
    name: "Rasgulla",
    type: "VEG",
    description: "Spongy cottage cheese balls in sugar syrup.",
    image: "https://t4.ftcdn.net/jpg/07/03/61/71/240_F_703617197_Ysr0Gd9WRzu5xsshuKaAskzPIJvU3ls7.jpg",
    ingredients: [
      { item: "Chenna", quantity: "200g" },
      { item: "Sugar Syrup", quantity: "250ml" },
      { item: "Cardamom", quantity: "½ tsp" }
    ]
  },
  {
    id: 38,
    category: "Dessert",
    name: "Kheer",
    type: "VEG",
    description: "Creamy rice pudding with nuts.",
    image: "https://t3.ftcdn.net/jpg/13/06/19/18/240_F_1306191824_g30cI1NpqAlx7CiAueFbchCvSUCLXzGW.jpg",
    ingredients: [
      { item: "Rice", quantity: "½ cup" },
      { item: "Milk", quantity: "3 cups" },
      { item: "Sugar", quantity: "½ cup" },
      { item: "Nuts", quantity: "2 tbsp" }
    ]
  },
  {
    id: 39,
    category: "Dessert",
    name: "Jalebi",
    type: "VEG",
    description: "Crispy fried spirals soaked in sugar syrup.",
    image: "https://t4.ftcdn.net/jpg/09/76/94/83/240_F_976948359_rtVBTuf4BroTySr70mvosOlrA5etCO6v.jpg",
    ingredients: [
      { item: "Flour", quantity: "1 cup" },
      { item: "Sugar Syrup", quantity: "200ml" },
      { item: "Saffron", quantity: "a few strands" }
    ]
  },
  {
    id: 40,
    category: "Dessert",
    name: "Mysore Pak",
    type: "VEG",
    description: "Rich gram flour sweet from Karnataka.",
    image: "https://t4.ftcdn.net/jpg/11/19/51/87/240_F_1119518713_0ef6puSUcsYHzYeEPZ6lVayGlu9NUQ9U.jpg",
    ingredients: [
      { item: "Gram Flour", quantity: "1 cup" },
      { item: "Ghee", quantity: "1 cup" },
      { item: "Sugar", quantity: "1 cup" }
    ]
  },
  {
    id: 41,
    category: "Dessert",
    name: "Payasam",
    type: "VEG",
    description: "South Indian style kheer with jaggery.",
    image: "https://t4.ftcdn.net/jpg/07/01/83/17/240_F_701831721_kHXHx2ztrCVm35EC9woxL91BG9VcYD7O.jpg",
    ingredients: [
      { item: "Rice", quantity: "½ cup" },
      { item: "Jaggery", quantity: "½ cup" },
      { item: "Coconut Milk", quantity: "1 cup" }
    ]
  },
  {
    id: 42,
    category: "Dessert",
    name: "Sandesh",
    type: "VEG",
    description: "Bengali sweet made with fresh chenna.",
    image: "https://t3.ftcdn.net/jpg/13/46/61/40/240_F_1346614038_S3XQocMLWwC1mD99gFwfyaQJMAt0rs5W.jpg",
    ingredients: [
      { item: "Chenna", quantity: "200g" },
      { item: "Sugar", quantity: "½ cup" },
      { item: "Cardamom", quantity: "½ tsp" }
    ]
  },
  {
    id: 43,
    category: "Dessert",
    name: "Kulfi",
    type: "VEG",
    description: "Indian frozen milk dessert with nuts.",
    image: "https://t3.ftcdn.net/jpg/08/79/74/48/240_F_879744876_BysmE0YwnaHL4APC8ax5k54wkj0wnYvK.jpg",
    ingredients: [
      { item: "Milk", quantity: "2 cups" },
      { item: "Sugar", quantity: "½ cup" },
      { item: "Nuts", quantity: "2 tbsp" }
    ]
  },
  {
    id: 44,
    category: "Dessert",
    name: "Carrot Halwa",
    type: "VEG",
    description: "Grated carrots cooked with milk and sugar.",
    image: "https://t3.ftcdn.net/jpg/16/42/79/22/240_F_1642792281_PzQXYABMLcCu9e1VJjliFRwDUbcetR9y.jpg",
    ingredients: [
      { item: "Carrot", quantity: "2 cups" },
      { item: "Milk", quantity: "2 cups" },
      { item: "Sugar", quantity: "½ cup" },
      { item: "Ghee", quantity: "2 tbsp" }
    ]
  },
  {
    id: 45,
    category: "Dessert",
    name: "Malpua",
    type: "VEG",
    description: "Fried pancakes soaked in sugar syrup.",
    image: "https://t3.ftcdn.net/jpg/13/91/32/22/240_F_1391322279_VYiTm4tbNGy3wDEvPLETxM2amq13DMn3.jpg",
    ingredients: [
      { item: "Flour", quantity: "1 cup" },
      { item: "Milk", quantity: "1 cup" },
      { item: "Sugar Syrup", quantity: "200ml" }
    ]
  },
  {
    id: 46,
    category: "Dessert",
    name: "Besan Ladoo",
    type: "VEG",
    description: "Sweet balls made with gram flour and ghee.",
    image: "https://t3.ftcdn.net/jpg/15/88/37/62/240_F_1588376239_mQiAC0gBLSzsmg2vqbZ5IpPzrYPU5gNt.jpg",
    ingredients: [
      { item: "Gram Flour", quantity: "1 cup" },
      { item: "Sugar", quantity: "½ cup" },
      { item: "Ghee", quantity: "½ cup" }
    ]
  },
  {
    id: 47,
    category: "Dessert",
    name: "Rava Kesari",
    type: "VEG",
    description: "Semolina pudding with saffron.",
    image: "https://t3.ftcdn.net/jpg/15/28/37/90/240_F_1528379033_Uv8R7syxnXYndVMiDS6doPGM6rKM74cM.jpg",
    ingredients: [
      { item: "Semolina", quantity: "1 cup" },
      { item: "Sugar", quantity: "1 cup" },
      { item: "Ghee", quantity: "2 tbsp" }
    ]
  },
  {
    id: 48,
    category: "Dessert",
    name: "Modak",
    type: "VEG",
    description: "Steamed dumplings filled with coconut and jaggery.",
    image: "https://t4.ftcdn.net/jpg/15/49/61/99/240_F_1549619942_YSxhynrF0fiW3CSg5FQF3JadniePonwt.jpg",
    ingredients: [
      { item: "Rice Flour", quantity: "1 cup" },
      { item: "Coconut", quantity: "½ cup" },
      { item: "Jaggery", quantity: "½ cup" }
    ]
  },
  {
    id: 49,
    category: "Dessert",
    name: "Kaju Katli",
    type: "VEG",
    description: "Cashew nut fudge, a festive sweet.",
    image: "https://t3.ftcdn.net/jpg/14/57/00/48/240_F_1457004878_Ro4HvuPwz6x6czqk95LvOtgBqmHzzroO.jpg",
    ingredients: [
      { item: "Cashews", quantity: "200g" },
      { item: "Sugar", quantity: "½ cup" },
      { item: "Ghee", quantity: "1 tbsp" }
    ]
  },
  {
    id: 50,
    category: "Dessert",
    name: "Rabri",
    type: "VEG",
    description: "Thickened milk dessert flavored with saffron.",
    image: "https://t3.ftcdn.net/jpg/15/53/94/42/240_F_1553944244_h7VNKvMAenbYP76Nuz8h90KJujrAX0et.jpg",
    ingredients: [
      { item: "Milk", quantity: "4 cups" },
      { item: "Sugar", quantity: "½ cup" },
      { item: "Saffron", quantity: "few strands" },
      { item: "Nuts", quantity: "2 tbsp" }
    ]
  },

  // SIDES (51–60)
  {
    id: 51,
    category: "Sides",
    name: "Naan",
    type: "VEG",
    description: "Soft and fluffy Indian flatbread.",
    image: "https://t4.ftcdn.net/jpg/12/89/41/87/240_F_1289418706_0R0EgzEpoGaxGZPt3FNCcHGPcfZqPbRe.jpg",
    ingredients: [
      { item: "Flour", quantity: "200g" },
      { item: "Yogurt", quantity: "2 tbsp" },
      { item: "Baking Powder", quantity: "½ tsp" }
    ]
  },
  {
    id: 52,
    category: "Sides",
    name: "Jeera Rice",
    type: "VEG",
    description: "Basmati rice flavored with cumin.",
    image: "https://t3.ftcdn.net/jpg/12/78/98/68/240_F_1278986842_E0uOi4BWGccC4mBIH9PwPk6jRM1mzIXs.jpg",
    ingredients: [
      { item: "Basmati Rice", quantity: "1 cup" },
      { item: "Cumin Seeds", quantity: "1 tsp" },
      { item: "Ghee", quantity: "1 tbsp" }
    ]
  },
  {
    id: 53,
    category: "Sides",
    name: "Roti",
    type: "VEG",
    description: "Whole wheat Indian flatbread.",
    image: "https://t4.ftcdn.net/jpg/12/26/57/57/240_F_1226575727_XDw2doNGrSMkKinTpHksI2h0DoQZTUQd.jpg",
    ingredients: [
      { item: "Wheat Flour", quantity: "1 cup" },
      { item: "Water", quantity: "½ cup" }
    ]
  },
  {
    id: 54,
    category: "Sides",
    name: "Paratha",
    type: "VEG",
    description: "Layered Indian flatbread with ghee.",
    image: "https://t4.ftcdn.net/jpg/15/54/87/21/240_F_1554872184_KJ7SArspjZfRXFa9U9hqyd45Zlk0da5z.jpg",
    ingredients: [
      { item: "Wheat Flour", quantity: "1 cup" },
      { item: "Ghee", quantity: "2 tbsp" }
    ]
  },
  {
    id: 55,
    category: "Sides",
    name: "Poori",
    type: "VEG",
    description: "Deep-fried puffed Indian bread.",
    image: "https://t3.ftcdn.net/jpg/04/24/10/92/240_F_424109224_qZJP7Z6zmqOspfKziQYioLsdhdRBDwot.jpg",
    ingredients: [
      { item: "Wheat Flour", quantity: "1 cup" },
      { item: "Oil", quantity: "for frying" }
    ]
  },
  {
    id: 56,
    category: "Sides",
    name: "Papad",
    type: "VEG",
    description: "Crispy fried or roasted lentil wafers.",
    image: "https://t4.ftcdn.net/jpg/06/86/94/11/240_F_686941191_N6hzde7EY7KIYQGsFcqgAjlr03gDnAAi.jpg",
    ingredients: [
      { item: "Urad Dal Flour", quantity: "½ cup" },
      { item: "Spices", quantity: "½ tsp" }
    ]
  },
  {
    id: 57,
    category: "Sides",
    name: "Curd Rice",
    type: "VEG",
    description: "South Indian rice mixed with curd.",
    image: "https://t3.ftcdn.net/jpg/13/70/70/44/240_F_1370704424_4ZLCjZNyhytBpLFz9hqyD71jh6tp8hsH.jpg",
    ingredients: [
      { item: "Rice", quantity: "1 cup" },
      { item: "Curd", quantity: "1 cup" },
      { item: "Tempering Spices", quantity: "1 tsp" }
    ]
  },
  {
    id: 58,
    category: "Sides",
    name: "Vegetable Raita",
    type: "VEG",
    description: "Yogurt dip with chopped vegetables.",
    image: "https://t3.ftcdn.net/jpg/14/48/20/62/240_F_1448206273_Qs2krjA6AoCRlS7g0CLrvRdkhBkK7Tce.jpg",
    ingredients: [
      { item: "Yogurt", quantity: "1 cup" },
      { item: "Cucumber", quantity: "½ cup" },
      { item: "Onion", quantity: "¼ cup" }
    ]
  },
  {
    id: 59,
    category: "Sides",
    name: "Masala Papad",
    type: "VEG",
    description: "Fried papad topped with onions, tomato, and spices.",
    image: "https://t4.ftcdn.net/jpg/15/49/98/03/240_F_1549980355_uET6uW0BvqiZNJDuP7ZkZhXZiCA9AvzA.jpg",
    ingredients: [
      { item: "Papad", quantity: "1 pc" },
      { item: "Onion", quantity: "¼ cup" },
      { item: "Tomato", quantity: "¼ cup" },
      { item: "Spices", quantity: "½ tsp" }
    ]
  },
  {
    id: 60,
    category: "Sides",
    name: "Pickle",
    type: "VEG",
    description: "Spicy Indian pickle made with mango and spices.",
    image: "https://t3.ftcdn.net/jpg/14/48/16/94/240_F_1448169409_PI1QuaYARrn6cufXkMrbR2kpVQvXxLsQ.jpg",
    ingredients: [
      { item: "Mango", quantity: "1 cup" },
      { item: "Oil", quantity: "½ cup" },
      { item: "Spices", quantity: "2 tbsp" }
    ]
  }
];

export default menuData;
