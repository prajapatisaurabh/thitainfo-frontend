"use strict";(self.webpackChunkthitainfo=self.webpackChunkthitainfo||[]).push([[3047],{595:function(e){function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var i=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"===typeof r&&!r(e))return e;for(var o,u=i.length;-1!==t.code.indexOf(o=n(a,u));)++u;return i[u]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function i(u){for(var c=0;c<u.length&&!(o>=r.length);c++){var s=u[c];if("string"===typeof s||s.content&&"string"===typeof s.content){var l=r[o],p=t.tokenStack[l],f="string"===typeof s?s:s.content,g=n(a,l),k=f.indexOf(g);if(k>-1){++o;var h=f.substring(0,k),m=new e.Token(a,e.tokenize(p,t.grammar),"language-"+a,p),d=f.substring(k+g.length),y=[];h&&y.push.apply(y,i([h])),y.push(m),d&&y.push.apply(y,i([d])),"string"===typeof s?u.splice.apply(u,[c,1].concat(y)):s.content=y}}else s.content&&i(s.content)}return u}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.59c8024c.chunk.js.map