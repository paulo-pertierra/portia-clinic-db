import { AnimationBuilder } from "@ionic/vue";
import { RouteLocationRaw } from "vue-router";

export interface UseIonRouterResult {
  canGoBack: (deep?: number) => boolean;
  push: (
    location: RouteLocationRaw,
    routerAnimation?: AnimationBuilder,
  ) => void;
  replace: (
    location: RouteLocationRaw,
    routerAnimation?: AnimationBuilder,
  ) => void;
  back: (routerAnimation?: AnimationBuilder) => void;
  forward: (routerAnimation?: AnimationBuilder) => void;
  navigate: (
    location: string | Location,
    routerDirection?: "forward" | "back" | "root" | "none",
    routerAction?: "push" | "pop" | "replace",
    routerAnimation?: AnimationBuilder,
  ) => void;
}
