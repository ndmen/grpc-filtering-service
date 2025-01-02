NestJS microservices to demonstrate basic GRPC communication.

## Instructions:

### 1. Clone the repository.

### 2. Run the services:
```bash
docker-compose up --build
```

The Consumer service will log the filtered users:
```bash
Filtered Users: [
  { "id": 1, "name": "Alice", "age": 25 },
  { "id": 3, "name": "Charlie", "age": 30 }
]
```

![image](https://i.ibb.co/Mn3Bgvj/Screenshot-2025-01-02-at-20-39-11.png)
