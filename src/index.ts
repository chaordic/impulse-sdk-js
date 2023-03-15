import { default as init } from "@/events/event";
import * as home from "@/events/application/pages/home";
import * as cart from "@/events/application/pages/cart";
export namespace Events {
  export import homeView = home
  export import cartView = cart
}

init();
