class PatientSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :symptoms, :diagnosis, :home_exercise_plan, :user_id
end
