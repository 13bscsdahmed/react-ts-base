export interface Params {
  [name: string]: any;
}

export enum ResponseTypes {
  arrayBuffer = 'arraybuffer',
  document = 'document',
  json = 'json',
  text = 'text',
  stream= 'stream',
  blob= 'blob'
}