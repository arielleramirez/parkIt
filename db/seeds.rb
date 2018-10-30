# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Vehicle.destroy_all
ParkingSpace.destroy_all

User.create(first_name: 'gabby',last_name:'smith',email:'gabby@aol.com')
User.create(first_name: 'labby',last_name:'pmith',email:'gabby@aol.com')
User.create(first_name: 'sabby',last_name:'tmith',email:'gabby@aol.com')
User.create(first_name: 'habby',last_name:'hmith',email:'gabby@aol.com')
User.create(first_name: 'pabby',last_name:'wmith',email:'gabby@aol.com')

Vehicle.create(user_id:User.first.id,liscense_num:"4598674fdfu987")
Vehicle.create(user_id:User.first.id,liscense_num:"4598674fdfu987")
Vehicle.create(user_id:User.first.id,liscense_num:"4598674fdfu987")
Vehicle.create(user_id:User.first.id,liscense_num:"4598674fdfu987")
Vehicle.create(user_id:User.first.id,liscense_num:"4598674fdfu987")

ParkingSpace.create(user_id:5,vehicle_id:1)
ParkingSpace.create(user_id:3,vehicle_id:2)
ParkingSpace.create(user_id:4,vehicle_id:3)
ParkingSpace.create(user_id:5,vehicle_id:4)
ParkingSpace.create(user_id:5,vehicle_id:1)
