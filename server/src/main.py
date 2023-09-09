from fastapi import FastAPI
from pydantic import BaseModel, Field
from datetime import datetime
from random import randint

app = FastAPI()


class UserIn(BaseModel):
    name: str = Field(
        title="my-username",
        min_length=3,
    )
    password: str = Field(title="secret", min_length=5)


class UserOut(BaseModel):
    id: int = randint(1, 100)
    name: str
    creation_date: datetime = datetime.now()


@app.post("/")
def create_user(user: UserIn) -> UserOut:
    # return user <- would work as well... Try it!
    return UserOut(**user.model_dump())
