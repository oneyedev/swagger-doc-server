# Swagger Doc Server

## Usage

### Install
```sh
npm install
```

### Write Environment Variables
```sh
# .env
PORT=4242
SWAGGER_NAME_0=Sample
SWAGGER_URL_0=https://some.path.com/to/swagger.json
SWAGGER_NAME_1=Sample2
SWAGGER_URL_1=https://other.path.com/to/swagger.json
```

> Support until `SWAGGER_NAME_(0~99)`.

### Run server
```sh
npm start # or 
node server
```
