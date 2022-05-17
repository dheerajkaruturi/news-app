// export interface HttpreqType {
//   author: string;
//   content: string;
//   description: string;
//   publishedAt: string;
//   source: {
//     id: number | string | null;
//     name: string | null;
//   };
//   title: string;
//   url: string;
//   urlToImage: string;
// }

export class HttpResponseType {
  constructor(
    public author: string,
    public content: string,
    public description: string,
    public publishedAt: string,
    public source: {
      id: number | string | null;
      name: string | null;
    },
    public title: string,
    public url: string,
    public urlToImage: string
  ) {}
}
