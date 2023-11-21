#[macro_use] extern crate rocket;
use rocket::tokio::time::{sleep, Duration};
use rocket::serde::{Serialize, json::Json};

#[derive(Serialize)]
#[serde(crate = "rocket::serde")]
struct Message<'a> {
  message: &'a str
}

#[get("/")]
fn index() -> Option<Json<Message<'static>>>{
    Some(Json(Message {
      message: "Hello, world!"
    }))
}

#[get("/delay/<seconds>")]
async fn delay(seconds: u64) -> String {
  sleep(Duration::from_secs(seconds)).await;
  format!("Waited {} seconds", seconds)
}

#[launch]
fn rocket() -> _ {
  rocket::build()
    .mount("/", routes![index])
    .mount("/", routes![delay])
}