# Mobile App tech stack

- Using Expo for ease of use w.r.t. development experience. (also developing on ios)

- This means that we can't use bluetooth at all pretty much because you would need to create a local bundler using an apple dev account which is like 100 bucks a year

- Instead, we can opt for wifi communication using fetch requests to a backend server since esp32 can make fetch requests

- Need to make endpoints for both the recipe and also the container status

- For both, need to have POST and GET since we need to modify and also return the state values

- Then, these can be accessed via fetch request

- However, since an external source can't connect to local host, need to forward the port to public address (planning on using ngrok)

- W/ expo we'd be using react native which is relatively straight forward

- Probably going to opt out of authentification and database since it's just another step to set up and would rather have main functionality done

- But, if we do continue with auth/db we can just use Supabase its pretty straight forward
