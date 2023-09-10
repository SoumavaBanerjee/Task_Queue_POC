from fastapi import FastAPI
from src.worker.Celery import wait_task, celery
from src.schema.Task import TaskRequestBody
from celery.result import AsyncResult

app = FastAPI()


@app.get("/")
def root():
    return {"message": "hello world"}


@app.post("/create_task")
def create_task(task_delay: TaskRequestBody):
    task = wait_task.apply_async(args=[task_delay.delay])
    return {"task_id": task.id}


@app.get("/check_task/{task_id}/")
async def check_task(task_id: str):
    result = AsyncResult(task_id, app=celery)

    if result.ready():
        return {"status": "completed", "result": result.result}

    progress_info = result.info.get("current", 0)
    total_info = result.info.get("total", 1)
    return {"status": "in_progress", "current": progress_info, "total": total_info}
