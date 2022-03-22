def bmi_calculator(height, weight)
  w = weight
  h = height / 100.0
  return (w / h**2).round(1)
   
end

puts bmi_calculator(170, 50)
puts bmi_calculator(180, 65)
