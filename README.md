# CodePrep Problem Admin Service 

    We will be using 3 types of branches 
        1. Active Development branch 
        2. Deployment Branch
        3. Testing Branch

## How the Routing is working 
    - /api/v1/problems/ping
        as the route starts with /api
        apiRouter -> v1Router -> problemRouter -> problemController -> service layer
        /api      -> /v1      -> /problems     -> /ping 