import { useState , useEffect , useRef } from 'react'
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import 'github-markdown-css/github-markdown.css';
import rehypeRaw from "rehype-raw";

import { BOLD, ITALIC , STRIKE , H1,  OL,  UL,  QUOTE , CODE , LINK , IMAGE , CHECK , TABLE } from './functions/Functions';
import './App.css'

interface refobj {
  current: HTMLTextAreaElement
}

function App(): JSX.Element {
  const textState:refobj = useRef() ;
  const [Mark, setMark] = useState<string>('') ;
  useEffect(() => {
    setMark(textState.current.value) ;
  }, [])


  return (
    <div id="App" className='hi-100'>
      <div id="nav" className='flex-row bor-r'>Markdown Editor</div>
      <div id="options" className='wi-100'>
      <button className="btn" onClick={():void => BOLD(textState.current,setMark)}>B</button>
      <button className="btn" onClick={() => ITALIC(textState.current,setMark)}><i>I</i></button>
      <button className="btn" onClick={() => H1(textState.current,setMark)}><img className='btn-img' src="./heading.svg" alt="H1" /></button>
      <button className="btn" onClick={() => UL(textState.current,setMark)}><img className='btn-img' src="./ulist.svg" alt="UL" /></button>
      <button className="btn" onClick={() => OL(textState.current,setMark)}><img className='btn-img' src="./olist.svg" alt="OL" /></button>
      <button className="btn" onClick={() => STRIKE(textState.current,setMark)}><s>S</s></button>
      <button className="btn" onClick={() => QUOTE(textState.current,setMark)}><img className='btn-img' src="./quote.svg" alt="Q" /></button>
      <button className="btn" onClick={() => CODE(textState.current,setMark)}>{"</>"}</button>
      <button className="btn" onClick={() => LINK(textState.current,setMark)}><img className='btn-img' src="./link.svg" alt="L" /></button>
      <button className="btn" onClick={() => IMAGE(textState.current,setMark)}><img className='btn-img' src="./image.svg" alt="I" /></button>
      <button className="btn" onClick={() => CHECK(textState.current,setMark)}><img className='btn-img' src="./check.svg" alt="CH" /></button>
      <button className="btn" onClick={() => TABLE(textState.current,setMark)}><img className='btn-img' src="./table.svg" alt="T" /></button>
      </div>

      <div className="wi-100 flex-1 coverbox">

        <div id="code-block" className="wi-100 bor-r">
          <textarea ref={textState} placeholder='Write Here' className='code-width hi-100 code-text' onChange={(e) => setMark(e.target.value)}></textarea>
          <ReactMarkdown
            remarkPlugins={[gfm]} // Enable GitHub Flavored Markdown (GFM) syntax
            rehypePlugins={[rehypeRaw]}
            className="markdown-body code-width hi-100 mark-block" // Apply GitHub Markdown CSS styles
            children={Mark}
            />
        </div>

      </div>

    </div>
  )
}

export default App
