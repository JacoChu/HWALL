class ATM

    def initialize(amount)
        @balance = amount 
    end

    def withdraw(amount)
        @balance = @balance - amount
    end    

    def deposit(amount)
        @balance = @balance + amount
    end

    def balance
        return @balance
    end
  end
  
  atm = ATM.new(10)
  
  atm.withdraw(5)
  puts atm.balance  # 印出 5
  
  atm.deposit(10)
  puts atm.balance  # 印出 15