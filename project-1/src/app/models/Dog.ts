export default class Dog {
  id: number;
  title: string;
  headerImg: string;
  srcImg: string;
  description: string;
  visited: boolean;
  lastSeen?: Date;
  liked: boolean;

  constructor(
    title: string = '',
    headerImg: string = '',
    srcImg: string = '',
    description: string = '',
    visited: boolean = false,
    liked: boolean = false
  ) {
    this.id = new Date().getTime();
    this.title = title;
    this.headerImg = headerImg;
    this.srcImg = srcImg;
    this.description = description;
    this.visited = visited;
    this.liked = liked;
  }
}
