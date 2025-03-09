// TODO: (minor) create types from css module files
declare module "*.module.scss" {
  const content: any;
  export default content;
}
