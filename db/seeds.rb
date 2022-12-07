# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "seeding database"
puts "creating bands..."
Band.create(name: "Kendrick Lamar", description: "rapper", image: "https://static.hiphopdx.com/2015/12/Kendrick-Lamar_12-07-2015.jpg")
Band.create(name: "Childish Gambino", description: "funky soul", image: "https://s3.amazonaws.com/media.thecrimson.com/photos/2014/09/23/141323_1298860.jpg")
Band.create(name: "Little Simz", description: "soul", image: "https://media.timeout.com/images/105795896/image.jpg")
Band.create(name: "TOOL", description: "MATH METAL", image: "https://toolshed.down.net/pix/bandblah.gif")
Band.create(name: "PJ Harvey", description: "Grammy-nominated Punk Chanteuse", image: "https://img.cdandlp.com/2015/08/imgL/117637278.jpg")
Band.create(name: "Death Grips", description: "loud homeless rants over synth and hard drums", image: "https://consequence.net/wp-content/uploads/2016/02/screen-shot-2016-02-02-at-5-09-08-pm.png")
puts "creating concerts..."
Concert.create(headline: "Grimefest", subtitle: "a bunch of loud music", image: "", date: "12/17/2022", doors: "7:00 PM", start_time: "9:00 PM", ticket_price: 45)
Concert.create(headline: "Scuzzfest", subtitle: "loud music that would horrify your mom", image: "", date: "12/31/2022", doors: "7:00 PM", start_time: "9:00 PM", ticket_price: 75)
Concert.create(headline: "Heatfest", subtitle: "it's warm in here, plus there's music", image: "", date: "01/06/2023", doors: "5:00 PM", start_time: "7:00 PM", ticket_price: 25)
puts "creating users..."
User.create(first_name: "David", last_name: "Pumpkins", email: "david@pumpkins.com", password: "anyquestions")
puts "creating tickets..."
Ticket.create(user_id: 1, concert_id: 1)
Ticket.create(user_id: 1, concert_id: 2)
puts "creating concert bill acts..."
ConcertBand.create(band_id: 1, concert_id: 1)
ConcertBand.create(band_id: 2, concert_id: 2)
ConcertBand.create(band_id: 3, concert_id: 3)
ConcertBand.create(band_id: 4, concert_id: 1)
ConcertBand.create(band_id: 5, concert_id: 2)
ConcertBand.create(band_id: 6, concert_id: 3)
puts "creating concessions..."
Concession.create(name: "Popcorn", price: 4.99, image: "")
Concession.create(name: "Nachos", price: 6.99, image: "")
Concession.create(name: "Budweiser", price: 4, image: "")
Concession.create(name: "Coke", price: 2, image: "")
Concession.create(name: "Truly Hard Seltzer", price: 6, image: "")
Concession.create(name: "Cookies", price: 2.50, image: "")
