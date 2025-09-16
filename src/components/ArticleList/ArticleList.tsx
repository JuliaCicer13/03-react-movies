import type {Article} from "../../types/article";


interface ArticleProps {
items : Article [];

}
export default function ArticleList ({items}: ArticleProps) {
    return(  <ul>
          {items.map((item) => (
            <li key={item.objectID}>
              <a href={item.url} target='blank'>{item.title}</a>
            </li>
          ))}
        </ul>)
}