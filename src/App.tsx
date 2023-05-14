import { useState , useEffect , useRef } from 'react'
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import 'github-markdown-css/github-markdown.css';
import './App.css'

function App(): JSX.Element {
  const textState:any = useRef() ;
  const [Mark, setMark] = useState<string>('') ;
  useEffect(() => {
    setMark(textState.current.value) ;
  }, [])

  const bold = ():void => {
    const textar:HTMLTextAreaElement = textState.current;
    const start:number = textar.selectionStart ;
    const end:number = textar.selectionEnd ;
    const str:string = textar.value ;

    if (start===end){
      const newStr:string = str.slice(0,start) + "**BoldTextHere**" + str.slice(start) ;
      textar.value = newStr ;
      setMark(newStr) ;
      return;
    }

    const newStr:string = str.slice(0,start) + "**" + str.slice(start,end) + "**" + str.slice(end) ;
    // console.log(newStr) ;
    textar.value = newStr ;
    setMark(newStr) ;
  }
  
  return (
    <div id="App" className='hi-100'>
      <div id="nav" className='flex-row bor-r'>Markdown Editor</div>
      <div id="options" className='wi-100'>
      <button className="btn" onClick={bold}>B</button>
      <button className="btn">B</button>
      <button className="btn">B</button>
      <button className="btn">B</button>
      <button className="btn">B</button>
      <button className="btn">B</button>
      </div>

      <div id="code-block" className="wi-100 bor-r">
        <textarea ref={textState} placeholder='Write Here' className='code-width hi-100 code-text' onChange={(e) => setMark(e.target.value)}></textarea>
        <ReactMarkdown
          remarkPlugins={[gfm]} // Enable GitHub Flavored Markdown (GFM) syntax
          className="markdown-body code-width hi-100 mark-block" // Apply GitHub Markdown CSS styles
        >
          {Mark}
        </ReactMarkdown>
      </div>

    </div>
  )
}

export default App
