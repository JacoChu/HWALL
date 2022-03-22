def is_leap_year?(y)
    if 
        y % 4 == 0 && y % 100 != 0 || y % 400 == 0 
        
        return true
    else 
        return false
 
    end
end
puts is_leap_year?(1600)


