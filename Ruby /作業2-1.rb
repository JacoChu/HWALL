#  p (1..100).reduce { |sum, x| sum + x }   印出1到100的總和

#  p [1, 2, 3, 4, 5].map{ |x| x*2 - 1}  #將陣列[1, 2, 3, 4, 5] 印成  [1, 3, 5, 7, 9]

 p [1, 3, 4, 1, 7, nil, 7].compact.sort.uniq  
 # compact可移除字串中的nil. ＃sort可重新排列成[1, 1, 3, 4,  7, 7] ＃uniq可移除重複字串
   