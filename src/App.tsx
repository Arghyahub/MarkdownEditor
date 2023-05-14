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

  const BOLD = ():void => {
    const textar:HTMLTextAreaElement = textState.current;
    const start:number = textar.selectionStart ;
    const end:number = textar.selectionEnd ;
    const str:string = textar.value ;

    if (start===end){
      const newStr:string = str.slice(0,start) + "**BoldTextHere** " + str.slice(start) ;
      textar.value = newStr ;
      setMark(newStr) ;
      textar.selectionStart = start + 2;
      textar.selectionEnd = start + 14 ;
      textar.focus() ;
      return;
    }

    const newStr:string = str.slice(0,start) + "**" + str.slice(start,end) + "**" + str.slice(end) ;
    textar.value = newStr ;
    setMark(newStr) ;
  }

  const ITALIC = ():void => {
    const textar:HTMLTextAreaElement = textState.current;
    const start:number = textar.selectionStart ;
    const end:number = textar.selectionEnd ;
    const str:string = textar.value ;

    if (start===end){
      const newStr:string = str.slice(0,start) + "*ITALICTextHere* " + str.slice(start) ;
      textar.value = newStr ;
      setMark(newStr) ;
      textar.selectionStart = start + 1;
      textar.selectionEnd = start + 15 ;
      textar.focus() ;
      return;
    }

    const newStr:string = str.slice(0,start) + "*" + str.slice(start,end) + "*" + str.slice(end) ;
    // console.log(newStr) ;
    textar.value = newStr ;
    setMark(newStr) ;
  }

  const STRIKE = ():void => {
    const textar:HTMLTextAreaElement = textState.current;
    const start:number = textar.selectionStart ;
    const end:number = textar.selectionEnd ;
    const str:string = textar.value ;

    if (start===end){
      const newStr:string = str.slice(0,start) + "~~STRIKETextHere~~ " + str.slice(start) ;
      textar.value = newStr ;
      setMark(newStr) ;
      textar.selectionStart = start + 2;
      textar.selectionEnd = start + 16 ;
      textar.focus() ;
      return;
    }

    const newStr:string = str.slice(0,start) + "~~" + str.slice(start,end) + "~~" + str.slice(end) ;
    // console.log(newStr) ;
    textar.value = newStr ;
    setMark(newStr) ;
  }

  const H1 = ():void => {
    const textar:HTMLTextAreaElement = textState.current;
    const start:number = textar.selectionStart ;
    const end:number = textar.selectionEnd ;
    const str:string = textar.value ;

    if (start===end){
      const newStr:string = str.slice(0,start) + "\n# Heading1\n" + str.slice(start) ;
      textar.value = newStr ;
      setMark(newStr) ;
      
      textar.selectionStart = start + 3;
      textar.selectionEnd = start + 11 ;
      textar.focus();
      return;
    }

    const newStr:string = str.slice(0,start) + "\n# " + str.slice(start,end) + "\n" + str.slice(end) ;
    textar.value = newStr ;
    setMark(newStr) ;
    textar.selectionStart = end + 3;
    textar.selectionEnd = end + 3;
    textar.focus();
  }  

  const OL = ():void => {
    const textar:HTMLTextAreaElement = textState.current;
    const start:number = textar.selectionStart ;
    const str:string = textar.value ;

    const newStr = `${str.slice(0,start)}\n\n1. List1 \n2. List2 \n3. List3 \n\n${str.slice(start)}` ;
    textar.value = newStr ;
    setMark(newStr) ;
  }

  const UL = ():void => {
    const textar:HTMLTextAreaElement = textState.current;
    const start:number = textar.selectionStart ;
    const str:string = textar.value ;

    const newStr = `${str.slice(0,start)}\n\n- List1 \n- List2 \n- List3 \n\n${str.slice(start)}` ;
    textar.value = newStr ;
    setMark(newStr) ;
  }

  const QUOTE = ():void => {
    const textar:HTMLTextAreaElement = textState.current;
    const start:number = textar.selectionStart ;
    const end:number = textar.selectionEnd ;
    const str:string = textar.value ;

    if (start===end){
      const newStr:string = str.slice(0,start) + "> QUOTEHere\n\n" + str.slice(start) ;
      textar.value = newStr ;
      setMark(newStr) ;
      textar.selectionStart = start + 2;
      textar.selectionEnd = start + 11 ;
      textar.focus() ;
      return;
    }

    const newStr:string = str.slice(0,start) + "\n> " + str.slice(start,end) + "\n\n" + str.slice(end) ;
    textar.value = newStr ;
    setMark(newStr) ;
  }

  return (
    <div id="App" className='hi-100'>
      <div id="nav" className='flex-row bor-r'>Markdown Editor</div>
      <div id="options" className='wi-100'>
      <button className="btn" onClick={BOLD}>B</button>
      <button className="btn" onClick={ITALIC}>I</button>
      <button className="btn" onClick={H1}>H</button>
      <button className="btn" onClick={UL}>UL</button>
      <button className="btn" onClick={OL}>OL</button>
      <button className="btn" onClick={STRIKE}>S</button>
      <button className="btn" onClick={QUOTE}>Q</button>
      </div>

      <div className="wi-100 flex-1 coverbox">

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

    </div>
  )
}

export default App
