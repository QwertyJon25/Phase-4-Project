User.destroy_all
UserExercise.destroy_all
Exercise.destroy_all
Equipment.destroy_all

puts "🌱 Seeding data..."

# Seed your database here
puts "Creating users..."
User.create(username: "Mary", password: "password123")
User.create(username: "Jon",  password: "123password")
User.create(username: "Steven", password: "123pass")
User.create(username: "Susan", password: "word123")
User.create(username: "Sheena", password: "pass123word")


puts "Creating equipments..."
Equipment.create(name: "Dumbbell", image: "https://yorkbarbell.com/wp-content/uploads/2018/06/25-2.jpg")

Equipment.create(name: "Yoga Mat", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.walmart.com%2Fip%2FEveryday-Essentials-All-Purpose-1-2-In-High-Density-Foam-Exercise-Yoga-Mat-Anti-Tear-with-Carrying-Strap-Blue%2F275846958&psig=AOvVaw1Rnyr7Qo0rO2FQ-vDGLhEC&ust=1637173071959000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjrmI2_nfQCFQAAAAAdAAAAABAH")

Equipment.create(name: "Foam Block", image: "https://target.scene7.com/is/image/Target/GUEST_d1c0666d-d848-4288-997b-14c4f8e76c82?wid=488&hei=488&fmt=pjpeg")

Equipment.create(name: "Stetching straps", image: "https://www.optp.com/files/image/item/LARGE/440-2_stretch-out-strap-laying.jpg")

Equipment.create(name: "Treadmill", image: "https://m.media-amazon.com/images/I/719uh1Um6aL._AC_SL1500_.jpg")

Equipment.create(name: "Stationary Bike", image: "https://i5.walmartimages.com/asr/165f664b-afda-44de-8c74-d290e242af3d.fbf7cd213869923719f388f40c11f780.jpeg")

Equipment.create(name: "Balance Beam", image: "https://m.media-amazon.com/images/I/61mvUe-SvXL._AC_SL1500_.jpg")

Equipment.create(name: "Medicine Ball", image: "https://i5.walmartimages.com/asr/2c5a5a54-fcd9-46e5-b453-f25015641071_1.8bd797a9bb4b423ff3b703735ed10220.jpeg")

puts "Creating exercises..."
Exercise.create(name: "Jogging", image: "https://static.toiimg.com/photo/72532520.cms", description: "Trotting or running at a slow or leisurely pace. The main intention is to increase physical fitness with less stress on the body than from faster running but more than walking, or to maintain a steady speed for longer periods of time.", category: "Aerobic", equipment_id: Equipment.all.sample.id)

Exercise.create(name: "Bicep Curl", image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/10/Female_Dumbells_1296x728-header-1296x728.jpg?w=1155&h=1528", description: "The biceps curl is a highly recognizable weight-training exercise that works the muscles of the upper arm", category: "Strength", equipment_id: Equipment.all.sample.id)

Exercise.create(name: "Dumbbell Squat", image: "https://media.stack.com/stack-content/uploads/2012/01/10170006/How-To-Dumbbell-Squat.jpg.", description: "The additional weight from a pair of dumbbells increases activation in your posterior chain muscles, like the hamstrings and gluteus maximus. Dumbbell squats also activate the stabilizing muscles around your knees and ankles.", category: "Strength", equipment_id: Equipment.all.sample.id)

Exercise.create(name: "Yoga", image: "https://www.parmarth.org/wp-content/uploads/2015/03/definitions-banner.jpg", description: "Hindu spiritual and ascetic discipline, a part of which, including breath control, simple meditation, and the adoption of specific bodily postures, is widely practiced for health and relaxation.", category: "Flexibility", equipment_id: Equipment.all.sample.id)

Exercise.create(name: "Planking", image: "https://images.livemint.com/img/2021/06/24/1140x641/iStock-1150246541_1624523599761_1624523629472.jpg", description: "Lying in a face down position, palms of the hands are typically touching the sides of the body and the toes are typically touching the ground", category: "Core", equipment_id: Equipment.all.sample.id)

puts "Creating user exercises..."
UserExercise.create(user_id: User.all.sample.id , exercise_id: Exercise.all.sample.id)
UserExercise.create(user_id: User.all.sample.id , exercise_id: Exercise.all.sample.id)
UserExercise.create(user_id: User.all.sample.id , exercise_id: Exercise.all.sample.id)
UserExercise.create(user_id: User.all.sample.id , exercise_id: Exercise.all.sample.id)


puts "✅ Done seeding!" 