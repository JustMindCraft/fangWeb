
import fetch from 'isomorphic-unfetch';

const basicUri= 'http://localhost:8000/api/v1';
    
const defaultAppQuery={
    secret: "fc7417a0-0f14-11e9-a240-69195a03fe0f",
    appId: "5c2d97c213baef6e18d86456",
}

export default function dataProvider(httpMethod, sourceName, query){
    switch (httpMethod) {
        case "GET":
            
            return fetch(`${basicUri}/${sourceName}?${query}&secret=${defaultAppQuery.secret}&_id=${defaultAppQuery.appId}`,{
                method: 'GET'
            });
    
        default:
            return fetch(basicUri);
    }
}