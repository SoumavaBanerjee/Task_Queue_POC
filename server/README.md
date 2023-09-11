## Prerequisites

- Have Docker and Docker compose installed in your system.

## Instructions

- Create a `.env` file and add necessary configurations. You can just copy paste the default stuff inside `.env.example` and things will work.
- from the root of server run `docker compose up`.
- the application should be up and running on http://0.0.0.0:8000/
- Flower is configured to monitor the celery tasks and workers. visit http://0.0.0.0:5555/ to access Flower UI

## Directory Structure

```
./server
├── README.md
├── docker-compose.yml
├── pyproject.toml
├── requirements.txt
└── src
├── **init**.py
├── main.py
├── schema
│ ├── Task.py
│ └── **init**.py
├── utils
│ ├── **init**.py
│ └── env_config.py
└── worker
├── Celery.py
└── **init**.py
```
