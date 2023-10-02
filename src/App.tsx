import { useState , useEffect , useRef } from 'react'
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import 'github-markdown-css/github-markdown.css';
import rehypeRaw from "rehype-raw";

import { BOLD, ITALIC , STRIKE , H1,  OL,  UL,  QUOTE , CODE , LINK , IMAGE , CHECK , TABLE, BREAK } from './functions/Functions';
import './App.css'
import Slider from './components/Slider';

interface refobj {
  current: HTMLTextAreaElement
}

function App(): JSX.Element {
  const textState:refobj = useRef() ;
  const [Mark, setMark] = useState<string>('') ;
  const [scrollSelect, setscrollSelect] = useState<boolean>(false) ;

  useEffect(() => {
    setMark(textState.current.value) ;
  }, [])

  const Copy = () => {
    const val:string = textState.current.value;
    console.log(val) ;
    const input = document.createElement('textarea');
    input.value = val ;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  }

  const markdownRef = useRef(null);

  const scrollToBottom = () => {
    if (markdownRef.current) {
      const scrollContainer = markdownRef.current;
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMark(e.target.value) ;
    if (scrollSelect) {
      scrollToBottom();
    }
  }

  useEffect(()=> {
    if (scrollSelect){
      scrollToBottom();
    }
  },[scrollSelect])

  return (
    <div id="App" className='hi-100'>
      <div id="nav" className='flex-row'>
        Markdown Editor 
        <a href="https://github.com/Arghyahub/MarkdownEditor" className="github-src"><img src="github.png" alt="Github" className='github-icon' /> </a> 
      </div>

      <div id="options" className='wi-100'>
      <button className="btn" onClick={():void => BOLD(textState.current,setMark)}>B <div className="what">Bold</div></button>
      <button className="btn" onClick={() => ITALIC(textState.current,setMark)}><i>I</i> <div className="what">Italic</div></button>
      <button className="btn" onClick={() => H1(textState.current,setMark)}><img className='btn-img' src="./heading.svg" alt="H1" /> <div className="what">Header</div></button>
      <button className="btn" onClick={() => UL(textState.current,setMark)}><img className='btn-img' src="./ulist.svg" alt="UL" /> <div className="what">Unordered List</div></button>
      <button className="btn" onClick={() => OL(textState.current,setMark)}><img className='btn-img' src="./olist.svg" alt="OL" /> <div className="what">Ordered List</div></button>
      <button className="btn" onClick={() => STRIKE(textState.current,setMark)}><s>S</s> <div className="what">Strike</div></button>
      <button className="btn" onClick={() => QUOTE(textState.current,setMark)}><img className='btn-img' src="./quote.svg" alt="Q" /> <div className="what">Quote</div></button>
      <button className="btn" onClick={() => CODE(textState.current,setMark)}>{"</>"} <div className="what">CodeBlock</div></button>
      <button className="btn" onClick={() => LINK(textState.current,setMark)}><img className='btn-img' src="./link.svg" alt="L" /> <div className="what">Links</div></button>
      <button className="btn" onClick={() => IMAGE(textState.current,setMark)}><img className='btn-img' src="./image.svg" alt="I" /> <div className="what">Image</div></button>
      <button className="btn" onClick={() => CHECK(textState.current,setMark)}><img className='btn-img' src="./check.svg" alt="CH" /> <div className="what">Checkbox</div></button>
      <button className="btn" onClick={() => TABLE(textState.current,setMark)}><img className='btn-img' src="./table.svg" alt="T" /> <div className="what">Table</div></button>
      <button className="btn" onClick={() => BREAK(textState.current,setMark)}>\n<div className="what">Newline</div></button>
      </div>

      <div className="wi-100 flex-1 coverbox">

        <div id="code-block" className="wi-100">
          <textarea ref={textState} placeholder='Write Here' className='code-width hi-100 code-text' onChange={handleTextChange}></textarea>
          <div
            ref={markdownRef}
            className="markdown-body code-width hi-100 mark-block"
          >
            <ReactMarkdown
              remarkPlugins={[gfm]}
              rehypePlugins={[rehypeRaw]}
              children={Mark}
            />
          </div>

          <div className="abs top-right flex-row jcen acen floating-optn">
            <Slider scrollSelect={scrollSelect} setscrollSelect={setscrollSelect} />
            <div id='copy-btn' onClick={Copy}><img id='copy-icon' src="copy.png" alt="Copy" /></div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App
