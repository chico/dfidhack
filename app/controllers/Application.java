package controllers;

import views.html.*;
import play.mvc.Controller;
import play.mvc.Result;

public class Application extends Controller {
  
  public static Result index() {
    return ok(index.render());
  }
  
  public static Result reports() {
    return ok(reports.render());
  }
  
  public static Result feedback() {
    return ok(feedback.render());
  }
  
}