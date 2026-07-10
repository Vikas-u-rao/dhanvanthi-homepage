import "react";

declare module "react" {
  interface ImgHTMLAttributes<T> {
    src?: any;
  }
}
