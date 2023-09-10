import os
from dotenv import load_dotenv


class EnvVariables:
    def __init__(self, env_file=".env"):
        self.env_file = env_file
        self.env_vars = {}
        self.load_env_vars()

    def load_env_vars(self):
        load_dotenv(self.env_file)
        for key, value in os.environ.items():
            self.env_vars[key] = value

    def get(self, key, default=None):
        return self.env_vars.get(key, default)


env_vars = EnvVariables()
