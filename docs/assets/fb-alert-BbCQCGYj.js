import{j as e}from"./jsx-runtime-Cwi7KSeA.js";import{u as d}from"./index-BtdslvUy.js";import{M as c,C as s,d as l}from"./index-BwNQZ7yn.js";import{A as o,C as i,B as h,D as x,a,I as j,b as p,T as m,c as u}from"./fb-alert.stories-Df1ifBsh.js";import"./iframe-C6g2oLdd.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DXimoRZY.js";import"./index-Dv1YWgiV.js";import"./index-DrFu-skq.js";import"./chunk-MZXVCX43-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./index-B-T0PRdw.js";import"./web-ui-components.es-nLJZCm2K.js";import"./vue.esm-bundler-DEpQrfwO.js";import"./web-ui-constants.es-Bfh99ZXh.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:o}),`
`,e.jsx(t.h1,{id:"alert",children:"Alert"}),`
`,e.jsx(t.p,{children:"Displays important alert messages."}),`
`,e.jsx(s,{of:i}),`
`,e.jsx(t.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(l,{of:i}),`
`,e.jsx(t.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(s,{withToolbar:!0,of:h}),`
`,e.jsx(t.h2,{id:"theme",children:"Theme"}),`
`,e.jsxs(t.p,{children:["Alert provide two different themes, ",e.jsx(t.code,{children:"light"})," and ",e.jsx(t.code,{children:"dark"}),"."]}),`
`,e.jsxs(t.p,{children:["Set ",e.jsx(t.code,{children:"effect"})," to change theme, default is ",e.jsx(t.code,{children:"light"}),"."]}),`
`,e.jsx(s,{withToolbar:!0,of:x}),`
`,e.jsx(t.h2,{id:"customizable-close-button",children:"Customizable Close Button"}),`
`,e.jsx(t.p,{children:"Customize the close button as texts or other symbols."}),`
`,e.jsxs(t.p,{children:["Alert allows you to configure if it's closable. The close button text and closing callbacks are also customizable. ",e.jsx(t.code,{children:"closable"}),` property decides if the component
can be closed or not. It accepts `,e.jsx(t.code,{children:"boolean"}),", and the default is ",e.jsx(t.code,{children:"false"}),". You can set ",e.jsx(t.code,{children:"close-text"}),` property to replace the default cross symbol as the close button.
Be careful that `,e.jsx(t.code,{children:"close-text"})," must be a string. ",e.jsx(t.code,{children:"close"})," event fires when the component is closed."]}),`
`,e.jsx(s,{withToolbar:!0,of:a}),`
`,e.jsx(t.h2,{id:"with-icon",children:"With Icon"}),`
`,e.jsx(t.p,{children:"Displaying an icon improves readability."}),`
`,e.jsxs(t.p,{children:["Setting the ",e.jsx(t.code,{children:"show-icon"})," property displays an icon that corresponds with the current Alert type."]}),`
`,e.jsx(s,{withToolbar:!0,of:j}),`
`,e.jsx(t.h2,{id:"centered-text",children:"Centered Text"}),`
`,e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"center"})," property to center the text."]}),`
`,e.jsx(s,{withToolbar:!0,of:p}),`
`,e.jsx(t.h2,{id:"with-description",children:"With Description"}),`
`,e.jsx(t.p,{children:"Description includes a message with more detailed information."}),`
`,e.jsxs(t.p,{children:["Besides the required ",e.jsx(t.code,{children:"title"})," slot, you can add a ",e.jsx(t.code,{children:"description"}),` slot to help you describe the alert with more details. Description can only store text string,
and it will word wrap automatically.`]}),`
`,e.jsx(s,{withToolbar:!0,of:m}),`
`,e.jsx(t.h2,{id:"with-icon-and-description",children:"With Icon and Description"}),`
`,e.jsx(t.p,{children:"At last, this is an example with both icon and description."}),`
`,e.jsx(s,{withToolbar:!0,of:u}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{id:"alert-api",children:"Alert API"}),`
`,e.jsxs("div",{style:{marginTop:"30px"},children:[e.jsx(t.h3,{id:"attributes",children:"Attributes"}),e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Name"}),e.jsx(t.th,{children:"Description"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Default"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"variant"}),e.jsx(t.td,{children:"alert variant"}),e.jsxs(t.td,{children:[e.jsx(t.code,{children:"default"})," | ",e.jsx(t.code,{children:"info"})," | ",e.jsx(t.code,{children:"success"})," | ",e.jsx(t.code,{children:"warning"})," | ",e.jsx(t.code,{children:"error"})]}),e.jsx(t.td,{children:e.jsx(t.code,{children:"default"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"effect"}),e.jsx(t.td,{children:"alert theme style"}),e.jsxs(t.td,{children:[e.jsx(t.code,{children:"light"})," | ",e.jsx(t.code,{children:"dark"})]}),e.jsx(t.td,{children:e.jsx(t.code,{children:"light"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"center"}),e.jsx(t.td,{children:"whether content is placed in the center"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{children:"false"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"closable"}),e.jsx(t.td,{children:"whether alert can be dismissed"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{children:"true"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"close-text"}),e.jsx(t.td,{children:"customized close button text"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"—"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"icon"}),e.jsx(t.td,{children:"whether a type icon is displayed"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{children:"false"})]})]})]}),e.jsx(t.h3,{id:"events",children:"Events"}),e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Name"}),e.jsx(t.th,{children:"Description"}),e.jsx(t.th,{children:"Type"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"close"}),e.jsx(t.td,{children:"trigger when alert is closed."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"Function"})})]})})]}),e.jsx(t.h3,{id:"slots",children:"Slots"}),e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Name"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"title"}),e.jsx(t.td,{children:"content of the alert title"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"description"}),e.jsx(t.td,{children:"content of the alert description"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"icon"}),e.jsx(t.td,{children:"slot for inserting custom icon. this slot will override default component icon"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"default"}),e.jsxs(t.td,{children:["slot for inserting custom content. This slot will override ",e.jsx(t.code,{children:"title"})," and ",e.jsx(t.code,{children:"description"})," slots"]})]})]})]})]})]})}function N(n={}){const{wrapper:t}={...d(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{N as default};
