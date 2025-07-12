# CodePrep Problem Admin Service 

    This is an Admin Service to maintain the problems 

## How the Routing is working 
    - /api/v1/problems/ping
        as the route starts with /api
        apiRouter -> v1Router -> problemRouter -> problemController -> service layer
        /api      -> /v1      -> /problems     -> /ping 

## Logs
    Added Logging of Errors in the MongoDB using Winston
