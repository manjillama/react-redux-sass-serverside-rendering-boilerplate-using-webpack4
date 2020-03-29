/*
* Config to switch between app environment
*/
let API_SERVER;
let WEB_SERVER;
if(process.env.MODE === 'PROD'){
  API_SERVER = 'http://localhost:5000';
  WEB_SERVER = 'http://localhost:3001'
}else{
  API_SERVER = 'http://localhost:5000';
  WEB_SERVER = 'http://localhost:3001';
}
export { API_SERVER, WEB_SERVER };
