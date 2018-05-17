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
