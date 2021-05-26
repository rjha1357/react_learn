(this.webpackJsonpreact_crash=this.webpackJsonpreact_crash||[]).push([[0],{61:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n.n(o),r=n(30),a=n.n(r),s=n(12),i=n(20),d=n(8),l=n(9),u=n(11),p=n(10),j=n(2),h=n(1);var b={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},f={color:"#fff",textDecoration:"none"},O=function(){return Object(h.jsxs)("header",{style:b,children:[Object(h.jsx)("h1",{children:"TodoList"}),Object(h.jsx)(s.b,{style:f,to:"/",children:"Home"})," | ",Object(h.jsx)(s.b,{style:f,to:"/about",children:"About"}),"| ",Object(h.jsx)(s.b,{style:f,to:"/contact",children:"Contact"})]})},m=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,c=new Array(o),r=0;r<o;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:t.props.todo.completed?"line-through":"none"}},t}return Object(l.a)(n,[{key:"markComplete",value:function(t){console.log(this.props)}},{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return Object(h.jsx)("div",{style:this.getStyle(),children:Object(h.jsxs)("p",{children:[Object(h.jsx)("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," "," ",n,Object(h.jsx)("button",{onClick:this.props.delTodo.bind(this,e),style:x,children:"x"})]})})}}]),n}(o.Component),x={background:"#ff0000",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"},v=m,g=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return Object(h.jsx)(v,{todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo},e.id)}))}}]),n}(o.Component),y=n(32),k=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,c=new Array(o),r=0;r<o;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={title:""},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t.onChange=function(e){return t.setState(Object(y.a)({},e.target.name,e.target.value.replace(/[^\w\s]/gi,"")))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("form",{onSubmit:this.onSubmit,style:{display:"flex"},children:[Object(h.jsx)("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo ...",value:this.state.title,onChange:this.onChange}),Object(h.jsx)("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}})]})}}]),n}(o.Component);var C=function(){return Object(h.jsxs)(c.a.Fragment,{children:[Object(h.jsx)("h1",{children:"About"}),Object(h.jsx)("p",{children:"This is the TodoList app v1.0.0. It is a part of react crash course"})]})},T=n(14),S=n.n(T),A=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(t){var o;return Object(d.a)(this,n),(o=e.call(this,t)).state={persons:[]},o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;S.a.get("https://wordpress.betadelivery.com/react_CI_learn/index.php/api/Users").then((function(e){var n=e.data;t.setState({persons:n})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){return Object(h.jsx)(c.a.Fragment,{children:Object(h.jsx)("div",{children:0!=Object.keys(this.state.persons).length?this.state.persons.getcontactdata.map((function(t){return Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:t.name}),Object(h.jsx)("li",{children:t.email})]},t.id)})):Object(h.jsx)("p",{})})})}}]),n}(c.a.Component),w=(n(61),function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,c=new Array(o),r=0;r<o;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={todos:[]},t.markComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.delTodo=function(e){S.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(n){return t.setState({todos:Object(i.a)(t.state.todos.filter((function(t){return t.id!==e})))})}))},t.addTodo=function(e){S.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then((function(e){return t.setState({todos:[].concat(Object(i.a)(t.state.todos),[e.data])})}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;S.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return Object(h.jsx)(s.a,{children:Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(O,{}),Object(h.jsx)(j.a,{exact:!0,path:"/",render:function(e){return Object(h.jsxs)(c.a.Fragment,{children:[Object(h.jsx)(k,{addTodo:t.addTodo}),Object(h.jsx)(g,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo})]})}}),Object(h.jsx)(j.a,{path:"/about",component:C}),Object(h.jsx)(j.a,{path:"/contact",component:A})]})})})}}]),n}(o.Component)),F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),o(t),c(t),r(t),a(t)}))};a.a.render(Object(h.jsx)(s.a,{basename:"/react_learn/",children:Object(h.jsx)(w,{})}),document.getElementById("root")),F()}},[[62,1,2]]]);
//# sourceMappingURL=main.5ec16bf5.chunk.js.map