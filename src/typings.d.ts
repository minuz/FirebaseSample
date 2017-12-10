/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface String{
  toPascalCase(): string;
  toCamelCase(): string;
}