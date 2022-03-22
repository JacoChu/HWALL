class Animal
    def eat(food)
        puts "#{food} 好吃欸！"
    end
    def walk(where)
        puts "#{where} 衝啊"
    end
end

class Cat < Animal
end 

class Dog < Animal
end



kitty = Cat.new
kitty.eat"fish"
kitty.walk"公園"

