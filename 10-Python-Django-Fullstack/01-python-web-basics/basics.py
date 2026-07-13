# Topic: Python Web Basics Refresher
# Notes: Python is renowned for readability and massive ecosystem. 
# For web, Python uses frameworks like Django, Flask, or FastAPI.

# 1. Variables & Data Structures
name = "Shubham"
is_admin = True
technologies = ["Python", "Django", "JavaScript", "React"] # List
user = {"username": "shubham_dev", "role": "FullStack"} # Dictionary (like JSON)

# 2. Functions with Type Hinting (Python 3.5+)
def greet_user(username: str) -> str:
    return f"Hello, {username}! Welcome to Python Web Dev."

# 3. Classes and OOP (Crucial for Django Models/Views)
class Developer:
    def __init__(self, name, level):
        self.name = name
        self.level = level
    
    def get_info(self):
        return f"{self.name} is a {self.level} developer."

dev = Developer("Shubham", "Senior")
print(dev.get_info())

# Note: Python relies on INDENTATION for scoping, not curly braces {}.
