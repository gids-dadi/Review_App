# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

item = Item.create ([
{
 name: "Nigeria Airways",
 image_url: "https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
},

{
 name: "Jumia Nigeria",
 image_url: "https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
},

{
 name: "Nestle Nigeria",
 image_url: "https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
},

{
 name: "Konga Nigeria",
 image_url: "https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
},
])

reviews = Review.create([
  {
    title: "Great airlines",
    description: "I enjoyed the snacks",
    score: 5,
    item: item.first
  },
  {
    title: "Bad airlines",
    description: "Always delayed flight",
    score: 1,
    item: item.first
  },
])