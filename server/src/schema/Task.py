from pydantic import BaseModel, Field


class TaskRequestBody(BaseModel):
    delay: int | None = Field(
        default=20, title="Fake Delay for the task must be greater than 0", gt=0
    )
