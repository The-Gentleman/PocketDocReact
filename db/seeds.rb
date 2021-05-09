phil = User.create(name: "Dr. Phil")

patient_one = Patient.create(name: "Peter", symptoms: "Swelling around hand, increased eyesight, sudden increase in strength", diagnosis: "Spider-Man", home_exercise_plan: "Get in touch with Tony Stark and join the Avengers.", user_id: phil.id)
patient_two = Patient.create(name: "Thanos", symptoms: "Charisma, inclination towards violence, twisted notion of virtue that manifests itself in killing half of all life.", diagnosis: "Total psychopath", home_exercise_plan: "Seek therapy.", user_id: phil.id)
patient_three = Patient.create(name: "Bruce", symptoms: "Violent temper, brilliant scientist." , diagnosis: "You're the hulk.", home_exercise_plan: "Seek anger management and do some yoga.", user_id: phil.id)
