import { default as init } from "@/events/event";
import * as home from "@/events/application/pages/home";
export namespace Events {
  export import homeView = home
}

init();
