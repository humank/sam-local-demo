# sam-local-demo

Demo usage.

To demonstate how to run lambda locally and APIG proxy integration locally.

## Run Lambda function in locall

```
# Invoking function with event file
$ sam local invoke "Ratings" -e event.json

# Invoking function with event via stdin
$ echo '{"message": "Hey, are you there?" }' | sam local invoke "Ratings"

# For more options
$ sam local invoke --help
```

## Run Lambda proxy integration behind API Gateway

Both sam local invoke and sam local start-api support local debugging of your functions.

To run SAM Local with debugging support enabled, just specify --debug-port or -d on the command line.

```
# Invoke a function locally in debug mode on port 5858
$ sam local invoke -d 5858 <function logical id>

# Start local API Gateway in debug mode on port 5858
$ sam local start-api -d 5858

# Start local API Gateway no debug mode
$ sam local start-api
```
