const BOLD = (textar:HTMLTextAreaElement , setMark:React.Dispatch<React.SetStateAction<string>>):void => {
  // const textar:HTMLTextAreaElement = textState.current;
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

const ITALIC = (textar:HTMLTextAreaElement , setMark:React.Dispatch<React.SetStateAction<string>>):void => {
  // const textar:HTMLTextAreaElement = textState.current;
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

const STRIKE = (textar:HTMLTextAreaElement , setMark:React.Dispatch<React.SetStateAction<string>>):void => {
  // const textar:HTMLTextAreaElement = textState.current;
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

const H1 = (textar:HTMLTextAreaElement , setMark:React.Dispatch<React.SetStateAction<string>>):void => {
  // const textar:HTMLTextAreaElement = textState.current;
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

const OL = (textar:HTMLTextAreaElement , setMark:React.Dispatch<React.SetStateAction<string>>):void => {
  // const textar:HTMLTextAreaElement = textState.current;
  const start:number = textar.selectionStart ;
  const str:string = textar.value ;

  const newStr = `${str.slice(0,start)}\n\n1. List1 \n2. List2 \n3. List3 \n\n${str.slice(start)}` ;
  textar.value = newStr ;
  setMark(newStr) ;
}

const UL = (textar:HTMLTextAreaElement , setMark:React.Dispatch<React.SetStateAction<string>>):void => {
  // const textar:HTMLTextAreaElement = textState.current;
  const start:number = textar.selectionStart ;
  const str:string = textar.value ;

  const newStr = `${str.slice(0,start)}\n\n- List1 \n- List2 \n- List3 \n\n${str.slice(start)}` ;
  textar.value = newStr ;
  setMark(newStr) ;
}

const QUOTE = (textar:HTMLTextAreaElement , setMark:React.Dispatch<React.SetStateAction<string>>):void => {
  // const textar:HTMLTextAreaElement = textState.current;
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

const CODE = (textar:HTMLTextAreaElement , setMark:React.Dispatch<React.SetStateAction<string>>) => {
  // const textar:HTMLTextAreaElement = textState.current;
  const start:number = textar.selectionStart ;
  const end:number = textar.selectionEnd ;
  const str:string = textar.value ;

  if (start===end){
    const newStr:string = str.slice(0,start) + " ```CODEhere``` " + str.slice(start) ;
    textar.value = newStr ;
    setMark(newStr) ;
    textar.selectionStart = start + 4;
    textar.selectionEnd = start + 12 ;
    textar.focus() ;
    return;
  }

  const newStr:string = str.slice(0,start) + "```" + str.slice(start,end) + "```" + str.slice(end) ;
  textar.value = newStr ;
  setMark(newStr) ;
}

const LINK = (textar:HTMLTextAreaElement , setMark:React.Dispatch<React.SetStateAction<string>>):void => {
  // const textar:HTMLTextAreaElement = textState.current;
  const start:number = textar.selectionStart ;
  const end:number = textar.selectionEnd ;
  const str:string = textar.value ;

  if (start===end){
    const newStr:string = str.slice(0,start) + "[TEXT](https://www.lipsum.com/) " + str.slice(end) ;
    textar.value = newStr ;
    setMark(newStr) ;
    textar.selectionStart = start + 7;
    textar.selectionEnd = start + 30 ;
    textar.focus() ;
    return;
  }

  const newStr:string = str.slice(0,start) + "[" + str.slice(start,end) + "](https://www.lipsum.com/)" + str.slice(end) ;
  textar.value = newStr ;
  setMark(newStr) ;
  textar.selectionStart = end + 3;
  textar.selectionEnd = end + 26 ;
  textar.focus() ;
}

const IMAGE = (textar:HTMLTextAreaElement , setMark:React.Dispatch<React.SetStateAction<string>>):void => {
  // const textar:HTMLTextAreaElement = textState.current;
  const start:number = textar.selectionStart ;
  const end:number = textar.selectionEnd ;
  const str:string = textar.value ;

  if (start===end){
    const newStr:string = str.slice(0,start) + "![Title](https://loremflickr.com/640/360) " + str.slice(end) ;
    textar.value = newStr ;
    setMark(newStr) ;
    textar.selectionStart = start + 9;
    textar.selectionEnd = start + 40 ;
    textar.focus() ;
    return;
  }

  const newStr:string = str.slice(0,start) + "![" + str.slice(start,end) + "](https://loremflickr.com/640/360)" + str.slice(end) ;
  textar.value = newStr ;
  setMark(newStr) ;
  textar.selectionStart = end + 4;
  textar.selectionEnd = end + 35 ;
  textar.focus() ;
}

const CHECK = (textar:HTMLTextAreaElement , setMark:React.Dispatch<React.SetStateAction<string>>):void => {
  // const textar:HTMLTextAreaElement = textState.current;
  const start:number = textar.selectionStart ;
  const str:string = textar.value ;

  const newStr = `${str.slice(0,start)}\n- [x] Task1 \n- [ ] Task2 \n- [ ] Task3 \n\n${str.slice(start)}` ;
  textar.value = newStr ;
  setMark(newStr) ;
}

const TABLE = (textar:HTMLTextAreaElement , setMark:React.Dispatch<React.SetStateAction<string>>):void => {
  // const textar:HTMLTextAreaElement = textState.current;
  const start:number = textar.selectionStart ;
  const str:string = textar.value ;

  const newStr = `${str.slice(0,start)}\n[comment]: <> (The distance between | and | doesn't matters)\n\n| HEAD1 | HEAD2 | HEAD3 |\n|    -  |    -  |    -  |\n| BODY  | BODY  | BODY  |\n|       |       |       |\n\n${str.slice(start)}` ;
  textar.value = newStr ;
  setMark(newStr) ;
}

const BREAK = (textar:HTMLTextAreaElement , setMark:React.Dispatch<React.SetStateAction<string>>):void => {
  // const textar:HTMLTextAreaElement = textState.current;
  const start:number = textar.selectionStart ;
  const str:string = textar.value ;

  const newStr = `${str.slice(0,start)}\n\n<br>\n\n${str.slice(start)}` ;
  textar.value = newStr ;
  setMark(newStr) ;
  textar.selectionEnd = start + 8;
  textar.selectionStart = start + 8;
  textar.focus() 
}

export { BOLD, ITALIC , STRIKE , H1,  OL,  UL,  QUOTE , CODE , LINK , IMAGE , CHECK , TABLE , BREAK };