import ReactMarkDown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';

type Props = {
    content : string;
}

export default function MarkdownViewer( {content} : Props)
{
    return <ReactMarkDown 
    className={`prose lg:prose-lg max-w-none`} 
    remarkPlugins={[remarkGfm]}
    components={{
        code(props) {
          const {children, className, ...rest} = props
          const match = /language-(\w+)/.exec(className || '')
          return match ? (
            <SyntaxHighlighter
              {...rest}
              PreTag="div"
              language={match[1]}
              style={materialDark}
              ref={undefined}
            >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          )
        },
        img: (image) =>{
            return (
                <Image 
                className='w-full max-h-60 object-cover'
                src={image.src || ''}
                alt={image.alt || ''}
                width={500}
                height={350}
                />
            )
        }
      }}
    >
        {content}
    </ReactMarkDown>
}