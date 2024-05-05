import{j as e}from"./jsx-runtime-Cwi7KSeA.js";import{u as d}from"./index-BtdslvUy.js";import{M as r,C as t}from"./index-BwNQZ7yn.js";import{M as o,B as c,T as l,C as a,a as h,H as x,G as j}from"./fb-message.stories-CmkA8XjK.js";import"./iframe-C6g2oLdd.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DXimoRZY.js";import"./index-Dv1YWgiV.js";import"./index-DrFu-skq.js";import"./vue.esm-bundler-DEpQrfwO.js";import"./web-ui-components.es-nLJZCm2K.js";import"./web-ui-constants.es-Bfh99ZXh.js";function i(n){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:o}),`
`,e.jsx(s.h1,{id:"message",children:"Message"}),`
`,e.jsx(s.p,{children:"Used to show feedback after an activity. The difference with Notification is that the latter is often used to show a system level passive notification."}),`
`,e.jsx(s.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(s.p,{children:"Displays at the top, and disappears after 3 seconds."}),`
`,e.jsxs(s.p,{children:[`The setup of Message is very similar to notification, so parts of the options won't be explained in detail here. You can check the options table below
combined with notification doc to understand it. FastyBird UI library has registered a `,e.jsx(s.code,{children:"$message"}),` method for invoking. Message can take a string or a VNode as parameter,
and it will be shown as the main body.`]}),`
`,e.jsx(t,{withToolbar:!0,of:c}),`
`,e.jsx(s.h2,{id:"types",children:"Types"}),`
`,e.jsx(s.p,{children:"Used to show the feedback of Success, Warning, Message and Error activities."}),`
`,e.jsxs(s.p,{children:["When you need more customizations, Message component can also take an object as parameter. For example, setting value of ",e.jsx(s.code,{children:"type"}),` can define different types,
and its default is `,e.jsx(s.code,{children:"info"}),`. In such cases the main body is passed in as the value of message. Also, we have registered methods for different types, so you
can directly call it without passing a type like `,e.jsx(s.code,{children:"open4"}),"."]}),`
`,e.jsx(t,{withToolbar:!0,of:l}),`
`,e.jsx(s.h2,{id:"closable",children:"Closable"}),`
`,e.jsx(s.p,{children:"A close button can be added."}),`
`,e.jsxs(s.p,{children:["A default Message cannot be closed manually. If you need a closable message, you can set ",e.jsx(s.code,{children:"show-close"}),` field. Besides, same as notification, message
has a controllable `,e.jsx(s.code,{children:"duration"}),". Default duration is 3000 ms, and it won't disappear when set to 0."]}),`
`,e.jsx(t,{withToolbar:!0,of:a}),`
`,e.jsx(s.h2,{id:"centered-text",children:"Centered Text"}),`
`,e.jsxs(s.p,{children:["Use the ",e.jsx(s.code,{children:"center"})," property to center the text."]}),`
`,e.jsx(t,{withToolbar:!0,of:h}),`
`,e.jsx(s.h2,{id:"use-html-string",children:"Use HTML String"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"message"})," supports HTML string."]}),`
`,e.jsxs(s.p,{children:["Set ",e.jsx(s.code,{children:"dangerouslyUseHTMLString"})," to ",e.jsx(s.code,{children:"true"})," and ",e.jsx(s.code,{children:"message"})," will be treated as an HTML string."]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"WARNING:"}),`
Although `,e.jsx(s.code,{children:"message"})," property supports HTML strings, dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to ",e.jsx(s.a,{href:"https://en.wikipedia.org/wiki/Cross-site_scripting",rel:"nofollow",children:"XSS attacks"}),". So when ",e.jsx(s.code,{children:"dangerouslyUseHTMLString"})," is on, please make sure the content of ",e.jsx(s.code,{children:"message"})," is trusted, and ",e.jsx(s.strong,{children:"never"})," assign ",e.jsx(s.code,{children:"message"})," to user-provided content."]}),`
`]}),`
`,e.jsx(t,{withToolbar:!0,of:x}),`
`,e.jsx(s.h2,{id:"grouping",children:"Grouping"}),`
`,e.jsx(s.p,{children:"Merge messages with the same content."}),`
`,e.jsxs(s.p,{children:["Set ",e.jsx(s.code,{children:"grouping"})," to true and the same content of ",e.jsx(s.code,{children:"message"})," will be merged."]}),`
`,e.jsx(t,{withToolbar:!0,of:j}),`
`,e.jsx(s.h2,{id:"global-method",children:"Global method"}),`
`,e.jsxs(s.p,{children:["FastyBird UI library has added a global method ",e.jsx(s.code,{children:"$message"})," for ",e.jsx(s.code,{children:"app.config.globalProperties"}),". So in a vue instance you can call ",e.jsx(s.code,{children:"Message"})," like what we did in this page."]}),`
`,e.jsx(s.h2,{id:"local-import",children:"Local import"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`import { FbMessage } from "@fastybird/web-ui-library";
`})}),`
`,e.jsxs(s.p,{children:["In this case you should call ",e.jsx(s.code,{children:"FbMessage(options)"}),". We have also registered methods for different types, e.g. ",e.jsx(s.code,{children:"FbMessage.success(options)"}),". You can call ",e.jsx(s.code,{children:"FbMessage.closeAll()"})," to manually close all the instances."]}),`
`,e.jsx(s.h2,{id:"app-context-inheritance",children:"App context inheritance"}),`
`,e.jsxs(s.p,{children:["Message accepts a ",e.jsx(s.code,{children:"context"})," as second parameter of the message constructor which allows you to inject current app's context to message which allows you to inherit all the properties of the app."]}),`
`,e.jsx(s.p,{children:"You can use it like this:"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"TIP:"}),`
If you globally registered FbMessage component, it will automatically inherit your app context.`]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`import { getCurrentInstance } from "vue";
import { FbMessage } from "@fastybird/web-ui-library";

// in your setup method
const { appContext } = getCurrentInstance()!;

FbMessage({}, appContext);
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"message-api",children:"Message API"}),`
`,e.jsxs("div",{style:{marginTop:"30px"},children:[e.jsx(s.h3,{id:"options",children:"Options"}),e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Description"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"message"}),e.jsx(s.td,{children:"message text"}),e.jsxs(s.td,{children:[e.jsx(s.code,{children:"string"})," | ",e.jsx(s.code,{children:"VNode"})," | ",e.jsx(s.code,{children:"() => VNode"})]}),e.jsx(s.td,{children:"—"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"type"}),e.jsx(s.td,{children:"message type"}),e.jsxs(s.td,{children:[e.jsx(s.code,{children:"info"})," | ",e.jsx(s.code,{children:"success"})," | ",e.jsx(s.code,{children:"warning"})," | ",e.jsx(s.code,{children:"error"})]}),e.jsx(s.td,{children:e.jsx(s.code,{children:"info"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"icon"}),e.jsxs(s.td,{children:["custom icon component, overrides ",e.jsx(s.code,{children:"type"})]}),e.jsxs(s.td,{children:[e.jsx(s.code,{children:"string"})," | ",e.jsx(s.code,{children:"Component"})]}),e.jsx(s.td,{children:"—"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"dangerouslyUseHTMLString"}),e.jsxs(s.td,{children:["whether ",e.jsx(s.code,{children:"message"})," is treated as HTML string"]}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"customClass"}),e.jsx(s.td,{children:"custom class name for Message"}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"—"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"duration"}),e.jsx(s.td,{children:"display duration, millisecond. If set to 0, it will not turn off automatically"}),e.jsx(s.td,{children:e.jsx(s.code,{children:"number"})}),e.jsx(s.td,{children:"3000"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"showClose"}),e.jsx(s.td,{children:"whether to show a close button"}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"center"}),e.jsx(s.td,{children:"whether to center the text"}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onClose"}),e.jsx(s.td,{children:"callback function when closed with the message instance as the parameter"}),e.jsx(s.td,{children:e.jsx(s.code,{children:"() => void"})}),e.jsx(s.td,{children:"—"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"offset"}),e.jsx(s.td,{children:"set the distance to the top of viewport"}),e.jsx(s.td,{children:e.jsx(s.code,{children:"number"})}),e.jsx(s.td,{children:"16"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"appendTo"}),e.jsxs(s.td,{children:["set the root element for the message, default to ",e.jsx(s.code,{children:"document.body"})]}),e.jsxs(s.td,{children:[e.jsx(s.code,{children:"string"})," | ",e.jsx(s.code,{children:"HTMLElement"})]}),e.jsx(s.td,{children:"—"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"grouping"}),e.jsx(s.td,{children:"merge messages with the same content, type of VNode message is not supported"}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"repeatNum"}),e.jsxs(s.td,{children:["the number of repetitions, similar to badge, is used as the initial number when used with ",e.jsx(s.code,{children:"grouping"})]}),e.jsx(s.td,{children:e.jsx(s.code,{children:"number"})}),e.jsx(s.td,{children:"1"})]})]})]}),e.jsx(s.h3,{id:"methods",children:"Methods"}),e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Message"})," and ",e.jsx(s.code,{children:"this.$message"})," returns the current Message instance. To manually close the instance, you can call ",e.jsx(s.code,{children:"close"})," on it."]}),e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Description"}),e.jsx(s.th,{children:"Type"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"close"}),e.jsx(s.td,{children:"close the Message"}),e.jsx(s.td,{children:e.jsx(s.code,{children:"() => void"})})]})})]})]})]})}function H(n={}){const{wrapper:s}={...d(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{H as default};
