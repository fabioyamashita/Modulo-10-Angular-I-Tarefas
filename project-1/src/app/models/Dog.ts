export default class Dog {
  title: string;
  headerImg: string;
  srcImg: string;
  description: string;
  visited: boolean;
  lastSeen?: Date;
  liked: boolean;

  constructor(
    title: string,
    headerImg: string,
    srcImg: string,
    description: string
  ) {
    this.title = title;
    this.headerImg = headerImg;
    this.srcImg = srcImg;
    this.description = description;
    this.visited = false;
    this.liked = false;
  }
}
