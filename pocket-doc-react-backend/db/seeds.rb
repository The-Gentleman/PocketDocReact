phil = User.create(name: "Dr. Phil")

patient_one = Patient.create(name: "Peter", symptoms: "Swelling around hand, increased eyesight, sudden increase in strength", diagnosis: "", home_exercise_plan: "", user_id: phil.id)
patient_two = Patient.create(name: "Thanos", symptoms: "Charisma, inclination towards violence, twisted notion of virtue that manifests itself in killing half of all life.", diagnosis: "", home_exercise_plan: "", user_id: phil.id)
patient_three = Patient.create(name: "Bruce", symptoms: "Violent temper, brilliant scientist." , diagnosis: "", home_exercise_plan: "", user_id: phil.id)
