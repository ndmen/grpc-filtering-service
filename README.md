Instructions:

1. Clone the repository.

2. Run the services:
docker-compose up --build

The Consumer service will log the filtered users:
Filtered Users: [
  { "id": 1, "name": "Alice", "age": 25 },
  { "id": 3, "name": "Charlie", "age": 30 }
]