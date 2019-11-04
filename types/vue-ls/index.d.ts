
/* vue-ls 的ts定义 */
declare interface VueLs {

  /**
   * 返回name存储中的value 。返回值之前，内部解析JSON中的值。
   * @param name
   * @param def 默认为null，如果未设置，则返回name。
   */
  get(name: any, def?: any): any;

  /**
   * 设置name下的value值。内部将转换value为JSON。
   * @param name
   * @param value
   * @param expire 过期时间,默认为null,单位为毫秒
   */

  set(name: any, value: any, expire?: any);

  /**
   * 将name从存储中删除,成功返回true,否则返回false
   * @param name
   */

  remove(name: any): boolean;

  /**
   * 清空存储
   */

  clear();

  /***
   * 绑定与name关联的值改变时触发的函数
   * @param name name
   * @param callback 要绑定的函数
   */

  on(name: any, callback: any);

  /**
   * 解绑与name关联的值改变时触发的函数
   * @param name name
   * @param callback 要解绑的函数
   */

  off(name: any, callback: any);
}