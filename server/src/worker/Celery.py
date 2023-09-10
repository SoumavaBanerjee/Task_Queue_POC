import os
import time
from celery import Celery, Task
from src.utils.env_config import env_vars


celery = Celery(
    __name__,
    broker=env_vars.get("REDIS_BROKER_URL"),
    backend=env_vars.get("REDIS_BACKEND_URL"),
)


@celery.task(name="wait_task", bind=True)
def wait_task(self: Task, seconds_to_wait: int):
    for _ in range(seconds_to_wait):
        time.sleep(1)
        self.update_state(
            state="PROGRESS", meta={"current": _, "total": seconds_to_wait}
        )
    return "Done"
