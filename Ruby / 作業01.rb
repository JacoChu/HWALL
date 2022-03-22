for i in 1..5 do
  puts "*" * i
end


1.upto(5) do|i|
    puts "*" * i
end

#loop迴圈解法
i = 0
loop do
  puts "*" * i
  i += 1
  break if i > 5 #當大於此條件結束這回合
end


#while迴圈解法
i = 0
while i <=5 
    puts  "*" * i
    i = i + 1
end

#each do
 (1..5).each do |num|
    puts "*" * num
 end


u = 5 
(1..u).each do |x|
    puts " "*(u-x)+"*"*(2*x-1)
end