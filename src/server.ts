import { http } from "./http";
import './websocket/client';

http.listen(3333,() => console.log("The server is running on port 33333"));
