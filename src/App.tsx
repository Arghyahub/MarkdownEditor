import { useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import './App.css'

function App(): JSX.Element {
  const [Mark, setMark] = useState<string>('') ;
  return (
    <div id="App" className='hi-100'>
      <div id="nav" className='flex-row bor-r'>Markdown Editor</div>
      <div id="options" className='wi-100'>Something</div>

      <div id="code-block" className="flex-0 wi-100 bor-r">
        <textarea className='code-width hi-100' onChange={(e) => setMark(e.target.value)}></textarea>
        <ReactMarkdown className='code-width hi-100 mark-block'>{Mark}</ReactMarkdown>
      </div>

    </div>
  )
}

export default App
