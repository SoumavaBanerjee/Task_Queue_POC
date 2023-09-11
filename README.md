## Introduction

This POC intends to demonstrate the usage of task queues.

## What does it do ?

- The frontend has a button which sends a post request to server with a `delay` field.

- The backend creates a Celery task which simulates a delay. It waits for `delay` seconds before getting completed.

- The backend exposes two endpoints. One for creating a task, returning the `task_id`. Another to get the status a respective task. A task can either be `in_progress` or be `completed`.

- Frontend uses a technique called `polling` to fetch progress of the active task. A progress bar is rendered for visualization.

- Finally, a done message is shown when the task reaches the `completed` state.

## Tech Stack used

- For the frontend, it uses React along with Axios to make the http requests.

- The backend uses `Fastapi` along with `Celery` as the Task Queue.

- `Redis` is used both as a message broker and the result backend for our current implementation.

- `Flower` is used to monitor the tasks, workers and the whole Task Queue system.
