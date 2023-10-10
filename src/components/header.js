import React from 'react'
import './header.css';
import { useState } from 'react';
function Header() {  
  let quotes = ["The purpose of our lives is to be happy" , "“Be yourself; everyone else is already taken”" , "“So many books, so little time.”" , "“A room without books is like a body without a soul.”" , "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”", "“You only live once, but if you do it right, once is enough.”","“Be the change that you wish to see in the world.”" , "“In three words I can sum up everything I've learned about life: it goes on.”" , "“If you tell the truth, you don't have to remember anything.”"      ,] 
  
  



 function getNewQuote(){
    let num = Math.floor(Math.random()*quotes.length)
    console.log(num)
setquote(quotes[num])



  }
  let [quote , setquote] = useState('')
  
  return(
  <>
  <h1 className='heading'> THE QUITATION GENARATOR</h1>

  <div className='textarea'>{quote} </div>
   <button className='button' onClick={getNewQuote}>New one</button>

  </>

);}

export default Header;



