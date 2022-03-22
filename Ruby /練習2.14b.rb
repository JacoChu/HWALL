def my_select(arr)
    result =[]
    arr.each do |ele|
    yield (ele)
        result << ele if yield (ele)
    end
    result
end

p my_select([1, 2, 3, 4, 5]){ |i| i.odd? }