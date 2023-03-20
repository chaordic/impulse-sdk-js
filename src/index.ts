import { default as init } from "@/events/event";
import * as pageHome from "@/events/application/pages/home";
import * as pageCart from "@/events/application/pages/cart";
import * as event from "@/events/application/event-constructor";
export namespace impulse {
  export namespace events {
    export import constructor = event.EventConstructor
    export import homeView = pageHome.send
    export import cartView = pageCart.send
    //add more views
  }
  export namespace pages {
    export import home = pageHome.Home    
    export import cart = pageCart.Cart
    //add more class
  }
}

init();
