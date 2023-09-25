// type Course = {
//             {
//           id:number
//           name: string
//           courseDeatals:{
//               smallTitle
//               bigText
//               buttonText
//               description
//             }
//           }

interface ContentSpan {
  type: "span";
  value: string;
  marks?: string[];
}

interface ContentParagraph {
  type: "paragraph";
  children: ContentSpan[];
}

interface ContentRoot {
  type: "root";
  children: (ContentParagraph | ContentSpan)[];
}

// Define a type for the content field
type Content = ContentRoot;

type HomeQuery = {
  allArticles: [
    {
      title: string;
      excerpt: string;
      publishDate: string;
      id: string;
      slug: string;
      author: {
        name: string;
      };
      coverImage: {
        url: string;
      };
      content: Content; // Use the defined Content type here
    }
  ];
};



type Arg = {
  query: string,
  variables?:{},
  includeDrafts?: boolean
}

type FontQueryType = {
  goggleFont : {
    font: "inter" | "roboto"
  }
}

