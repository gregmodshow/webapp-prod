(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1089:function(e,t,a){"use strict";a.r(t);var n=a(64),r=a(63),i=a(67),s=a(65),l=a(66),o=a(1),c=a.n(o);a(939),a(798);var m=function(e){var t="";return e.data.length>0&&(t=e.data.map(function(e){return c.a.createElement("div",{className:"episode"},c.a.createElement("img",{src:e.thumbnail}),c.a.createElement("div",null,c.a.createElement("h3",null," ",e.title," "),c.a.createElement("p",null,e.description)))})),t},h=a(791),v=a(940),d=a.n(v),u=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={activeItemIndex:0},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props.children.map(function(e){return c.a.createElement("div",{class:"slider_item"}," ",c.a.createElement("a",{href:"#test"},c.a.createElement("img",{src:e.image,alt:"test"})))});return c.a.createElement(d.a,{gutter:12,activePosition:"center",chevronWidth:60,numberOfCards:6,slidesToScroll:2,outsideChevron:!0,showSlither:!0,freeScrolling:!1,firstAndLastGutter:!1,activeItemIndex:this.state.activeItemIndex,requestToChangeActive:function(t){return e.setState({activeItemIndex:t})},rightChevron:">",leftChevron:"<"},t)}}]),t}(c.a.Component),p=a(69),A=a(696),g=a(635),E=a.n(g),V=a(636),z=a(15),f=a(33),w=a(680),b=a(1085),S=a(1079),N=a(1080),R=a(1078),j=a(978),O=a(1081),k=a(1091),y=a(1096),C={preview:a(979)},x=[{image:h.a.image1},{image:h.a.image2},{image:h.a.image3},{image:h.a.image4},{image:h.a.image5},{image:h.a.image6},{image:h.a.image1},{image:h.a.image2},{image:h.a.image3},{image:h.a.image4},{image:h.a.image5},{image:h.a.image6}];var J=a(145),I=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(i.a)(this,Object(s.a)(t).call(this))).state={load:!1,setOpen:!1},e}return Object(l.a)(t,e),Object(r.a)(t,[{key:"changeEpisode",value:function(e){var t=e.target.value,a=function(e,t){if("undefined"!==typeof e){var a=e.items.filter(function(e){return e.id==t});return a[0].episodes.items}return[]}(this.props.show.seasons,t);this.setState({episode:a})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.showid;this.props.fetchShow(e)}},{key:"openModal",value:function(){this.setState({setOpen:!0})}},{key:"closeModal",value:function(){this.setState({setOpen:!1})}},{key:"clickRating",value:function(e){var t={id:J(),tags:"tags1",userId:this.props.user.username,starRating:e,ratingShowId:this.props.show.id},a=this.props.show.starTotalRatings*this.props.show.starAverageRating+e,n=this.props.show.starTotalRatings+1,r=a/n;r=r.toFixed(1);var i={id:this.props.show.id,starTotalRatings:n,starAverageRating:r};this.props.addRating(t),this.props.updateShowRating(i),this.closeModal()}},{key:"render",value:function(){return c.a.createElement("div",{className:"show"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row top"},c.a.createElement("div",{className:"show-content"},c.a.createElement("h1",null," ",this.props.show.title," "),c.a.createElement("p",{className:"meta-data"},c.a.createElement("span",null," ",this.props.show.year," "),c.a.createElement("span",null," ",this.props.show.filmRating," "),c.a.createElement("span",null," ",this.props.show.starTotalRatings," Ratings"),c.a.createElement("a",{href:"#",className:"btn-rate",onClick:this.openModal.bind(this)}," Rate this Show ")),c.a.createElement("p",null,this.props.show.description),c.a.createElement("table",null,c.a.createElement("tr",null,c.a.createElement("td",null," Director "),c.a.createElement("td",null," ",this.props.show.director," ")),c.a.createElement("tr",null,c.a.createElement("td",null," Writer "),c.a.createElement("td",{className:"blue"}," ",this.props.show.writers," ")),c.a.createElement("tr",null,c.a.createElement("td",null," Starring "),c.a.createElement("td",{className:"blue"}," ",this.props.show.starring," ")),c.a.createElement("tr",null,c.a.createElement("td",null," Subtitles "),c.a.createElement("td",null,"  ",this.props.show.subtitle," ")),c.a.createElement("tr",null,c.a.createElement("td",null," Audio Languages "),c.a.createElement("td",null," ",this.props.show.audio," ")))),c.a.createElement("div",{className:"video"}," ",c.a.createElement("img",{src:C.preview})," ")),c.a.createElement("div",{className:"row"},c.a.createElement(k.a,{children:"Share on Facebook",url:"https://modshow.tv"},c.a.createElement(y.a,{size:32,round:!1,className:"fbShare"}),"Share on Facebook")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"buttons"},c.a.createElement("a",{href:"#",className:"btn"}," Play Season 1, Episode 1 "),c.a.createElement("a",{href:"#",className:"btn"}," Play Preview "),c.a.createElement("a",{href:"#",className:"btn"}," + Watchlist "))),c.a.createElement("div",{className:"episodes"},c.a.createElement("select",{onChange:this.changeEpisode.bind(this)},function(e){if("undefined"!==typeof e)var t=e.items.map(function(e){return c.a.createElement("option",{value:e.id}," Season ",e.number)});return t}(this.props.show.seasons)),c.a.createElement(m,{data:this.state.episode})),c.a.createElement("div",{className:"watched"},c.a.createElement("div",{className:"animated fadeIn continue"},c.a.createElement("div",{style:{padding:"2px 10px",margin:"0 auto"}},c.a.createElement("h3",null," Customer Also Watched "),c.a.createElement(u,{children:x}))))),c.a.createElement(b.a,{open:this.state.setOpen,onClose:this.closeModal.bind(this),"aria-labelledby":"form-dialog-title"},c.a.createElement(R.a,{id:"form-dialog-title"},"Rate This Show"),c.a.createElement(S.a,null,c.a.createElement(N.a,null,c.a.createElement("p",null," Please click the stars to rate the show "),c.a.createElement(j.a,{emptySymbol:c.a.createElement(O.a,null,"star_rate"),fullSymbol:c.a.createElement(O.a,null,"star_rate"),initialRating:3,onClick:this.clickRating.bind(this)})))))}}]),t}(o.Component);t.default=Object(p.b)(function(e){return{loading:e.shows.isLoading,show:e.shows.item.data.getShow}},{fetchShow:A.a,addRating:function(e){return function(){var t=Object(V.a)(E.a.mark(function t(a){return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.API.graphql(Object(f.graphqlOperation)(w.a,{input:e})).then(function(e){return a({type:z.d,payload:e})}).catch(function(e){console.log("error",e)});case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},updateShowRating:A.c})(I)},798:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAqCAMAAAAZKoJqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA/FBMVEUAAAB3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV3vzV6wDnn89un1n32+/L////j8taYzmbU6r+KyFL7/frD46aAw0P2+vGz24/s9uOj03YAAAD+c06gAAAAQnRSTlMAAh86TE9FMA8ner703qJXDFTF8pQhzvmPDgaN/uE+FfxsG9qFEtZ1A7tLeewaJPisrj0unCkH8IdI1YgXvElvhM0JBR5lAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAARVJREFUOMud1elSwjAUBeBb64YbUlFQiwurRVRcwGpB9CJERER8/4dxOkWnzdLeeH7e+aadtMkJABdjwVxcWl5Zhfik1tY3MMjmVnpbxYyMhZHsZHel0NxDIbn8vuAODm2UpXDEwWMLFTk5jcBiCdUph2ClinGp/cEzJxaiXf+V55iQxkUAL6+SJDYDeZ0IEW98eGsTpOPLOwJEbAG077lZXypdgAd+9jqQyUcAj58N2dtIQjvQFSVj72NBPkFBJtnH5JMb9yAnlYxNv6JL8wAVkrHZd3ic15DUt7saK6J/JfqXp/9N+g6h7zqNnUw/HRonjn6KNZqB3jYJDfb8v1bUaFq/vV9EJ2tvnRtB45aZP1l1c/0AtMNQKEQ5ok8AAAAASUVORK5CYII="},939:function(e,t,a){e.exports=a.p+"static/media/watched.d560f1e9.png"},979:function(e,t,a){e.exports=a.p+"static/media/video.d60bd405.jpg"}}]);
//# sourceMappingURL=6.35f895ba.chunk.js.map