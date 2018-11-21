import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  state={ elixerCount: 0, maxElixer: 10 }

 render() {
   const opponentElixerBar = []
   const mytElixerBar = []
   for (let i = 0; i < this.state.elixerCount; i += 1) {
     opponentElixerBar.push(
       <div style={{ background: `linear-gradient(to right, rgba(255,0,0,0.6), red)`, width: `calc(100% / 10`, height: 10, borderRadius: 10 }} />
     )
   }
   setTimeout(() => this.setState({elixerCount: this.state.elixerCount < this.state.maxElixer ? this.state.elixerCount += 1 : this.state.elixerCount}), 1000)
   return (
     <div className="App">
       <h1>Cards</h1>
       <div id="Card Section">
         <div style={{ display: 'flex' }}>
           <div style={{ flex: 1 }}>
             <img
               width="100%"
               height="100%"
               src="https://api-assets.clashroyale.com/cards/300/yHGpoEnmUWPGV_hBbhn-Kk-Bs838OjGzWzJJlQpQKQA.png"
             />
           </div>
           <div style={{ flex: 1 }}>
             <img
               width="100%"
               height="100%"
               src="https://api-assets.clashroyale.com/cards/300/Flsoci-Y6y8ZFVi5uRFTmgkPnCmMyMVrU7YmmuPvSBo.png"
             />
           </div>
           <div style={{ flex: 1 }}>
             <img
               width="100%"
               height="100%"
               src="https://api-assets.clashroyale.com/cards/300/Flsoci-Y6y8ZFVi5uRFTmgkPnCmMyMVrU7YmmuPvSBo.png"
             />
           </div>
           <div style={{ flex: 1 }}>
             <img
               width="100%"
               height="100%"
               src="https://api-assets.clashroyale.com/cards/300/Flsoci-Y6y8ZFVi5uRFTmgkPnCmMyMVrU7YmmuPvSBo.png"
             />
           </div>
         </div>
         <div style={{ display: 'flex' }}>
           <div style={{ flex: 1 }}>
             <img
               width="100%"
               height="100%"
               src="https://api-assets.clashroyale.com/cards/300/Flsoci-Y6y8ZFVi5uRFTmgkPnCmMyMVrU7YmmuPvSBo.png"
             />
           </div>
           <div style={{ flex: 1 }}>
             <img
               width="100%"
               height="100%"
               src="https://api-assets.clashroyale.com/cards/300/Flsoci-Y6y8ZFVi5uRFTmgkPnCmMyMVrU7YmmuPvSBo.png"
             />
           </div>
           <div style={{ flex: 1 }}>
             <img
               width="100%"
               height="100%"
               src="https://api-assets.clashroyale.com/cards/300/Flsoci-Y6y8ZFVi5uRFTmgkPnCmMyMVrU7YmmuPvSBo.png"
             />
           </div>
           <div style={{ flex: 1 }}>
             <img
               width="100%"
               height="100%"
               src="https://api-assets.clashroyale.com/cards/300/Flsoci-Y6y8ZFVi5uRFTmgkPnCmMyMVrU7YmmuPvSBo.png"
             />
           </div>
         </div>
       </div>
       <div style={{ display: 'flex', width: 'calc(100% - 12px)', margin: '20px 6px', height: 10, background: 'lightgray' }}>
         {opponentElixerBar}
       </div>
       <div style={{ display: 'flex', width: 'calc(100% - 12px)', margin: '20px 6px', background: 'lightgray' }}>
         <div style={{ background: `linear-gradient(to right, rgba(0,0,255,0.6), blue)`, flex: 1, height: 10, borderRadius: 10 }} />
         <div style={{ background: `linear-gradient(to right, rgba(0,0,255,0.6), blue)`, flex: 1, height: 10, borderRadius: 10 }} />
         <div style={{ background: `linear-gradient(to right, rgba(0,0,255,0.6), blue)`, flex: 1, height: 10, borderRadius: 10 }} />
         <div style={{ background: `linear-gradient(to right, rgba(0,0,255,0.6), blue)`, flex: 1, height: 10, borderRadius: 10 }} />
         <div style={{ background: `linear-gradient(to right, rgba(0,0,255,0.6), blue)`, flex: 1, height: 10, borderRadius: 10 }} />
         <div style={{ background: `linear-gradient(to right, rgba(0,0,255,0.6), blue)`, flex: 1, height: 10, borderRadius: 10 }} />
         <div style={{ background: `linear-gradient(to right, rgba(0,0,255,0.6), blue)`, flex: 1, height: 10, borderRadius: 10 }} />
         <div style={{ background: `linear-gradient(to right, rgba(0,0,255,0.6), blue)`, flex: 1, height: 10, borderRadius: 10 }} />
         <div style={{ background: `linear-gradient(to right, rgba(0,0,255,0.6), blue)`, flex: 1, height: 10, borderRadius: 10 }} />
         <div style={{ background: `linear-gradient(to right, rgba(0,0,255,0.6), blue)`, flex: 1, height: 10, borderRadius: 10 }} />
       </div>
     </div>
   );
 }
}
