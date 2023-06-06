interface Meta {
  id: string;
  title: string;
  date: string;
  tags: string[];
}

interface BLogPost {
  meta: Meta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
}
