/**
 * The data model that card component accepts
 * @interface CardContent
 */
 export interface CardContent {
  /**
   * Receives icon Element from react-icons library or whatever svg library icons
   */
  Icon: JSX.Element | string,
  /**
   * Card Text 
   */
  text: string,
  /**
   * Color Icon, only if Icon its SVG
   */
  colorIcon?: string,
  /**
   * Anchor tag  redirect to  code in github {used in proyect component}  
   */
  code?: string;
  /**
   * Anchor tag, redirect to production proyect  
   */
  web?: string;
}
/**
 * Layout of card if undefined, default value asigned
 */
export interface Layout {
  height?: number | string;
  width?: number | string;
}