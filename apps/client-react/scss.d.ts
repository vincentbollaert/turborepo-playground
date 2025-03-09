/* eslint-disable @typescript-eslint/no-explicit-any */
// TODO: (minor) create types from css module files
declare module "*.scss" {
  const content: any;
  export default content;
}
declare module "*.module.scss" {
  const content: any;
  export default content;
}

// declare module '*.scss' {
//   type ClassNames = {
//     [className: string]: string
//   }
//   const classNames: ClassNames;
//   export = classNames;
// }
