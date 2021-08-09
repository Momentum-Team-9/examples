class User:

    def __init__(self, name, email, city, state, is_active=True):
        self.name = name
        self.email = email
        self.city = city
        self.state = state
        self.is_active= is_active

    def location(self):
        return(f"{self.name} lives in {self.city}, {self.state}.")


    def __str__(self):
        return f"<User name={self.name} email={self.email} city={self.city} state={self.state} is_active={self.is_active}>"

    
    def deactivate(self):
        if self.is_active:
            self.is_active = False
            return self.is_active

user1 = User("Joe", "Joe@gmail.com", "New York City", "NY")
# print(user1.location())
print(user1)
print(user1.deactivate())
print(user1)
