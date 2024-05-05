import{a3 as o,r as S}from"./vue.esm-bundler-DEpQrfwO.js";import{v as m,w as s,P as t,g as u,r as g}from"./web-ui-components.es-nLJZCm2K.js";import{n as e}from"./web-ui-constants.es-Bfh99ZXh.js";const N={title:"Components/Feedback/Message box",excludeStories:/.*Data$/},i={parameters:{docs:{source:{code:`
<template>
    <fb-button plain @click="openError">Click to open the error Alert message</fb-button>
    <fb-button plain @click="openInfo">Click to open the info Alert message</fb-button>
</template>

<script lang="ts" setup>
import { FbMessage, FbMessageBox } from '@fastybird/web-ui-library'
import type { MessageBoxAction } from '@fastybird/web-ui-library'

const openError = () => {
    FbMessageBox.alert('This is a alert message', 'With some title', {
        confirmButtonText: 'This is OK',
        type: '${e.ERROR}',
        onAction: (action: MessageBoxAction) => {
            FbMessage({
                type: '${e.INFO}',
                message: \`You clicked: \${action}\`,
            });
        },
    });
};

const openInfo = () => {
    FbMessageBox.alert('This is a info message', 'With some title', {
        confirmButtonText: 'This is OK',
        type: '${e.INFO}',
        onAction: (action: MessageBoxAction) => {
            FbMessage({
                type: '${e.INFO}',
                message: \`You clicked: \${action}\`,
            });
        },
    });
}
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbButton:m},methods:{openError:()=>{s.alert("This is a alert message","With some title",{confirmButtonText:"This is OK",type:e.ERROR,onAction:n=>{t({type:e.INFO,message:`You clicked: ${n}`})}})},openInfo:()=>{s.alert("This is a info message","With some title",{confirmButtonText:"This is OK",type:e.INFO,onAction:n=>{t({type:e.INFO,message:`You clicked: ${n}`})}})}},template:`
<fb-button plain @click="openError">Click to open the error Alert message</fb-button>
<fb-button plain @click="openInfo">Click to open the info Alert message</fb-button>
`})},c={parameters:{docs:{source:{code:`
<template>
    <fb-button plain @click="open">Click to open the Confirmation message</fb-button>
</template>

<script lang="ts" setup>
import { FbMessage, FbMessageBox, MessageBoxActionTypes } from '@fastybird/web-ui-library'
import type { MessageBoxAction } from '@fastybird/web-ui-library'

const open = () => {
    FbMessageBox.confirm(
        'This action will permanently delete data. Continue?',
        'Are you sure?',
        {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: '${e.WARNING}',
            onAction: (action: MessageBoxAction): void => {
                if (action === MessageBoxActionTypes.CONFIRM) {
                    FbMessage({
                        type: '${e.SUCCESS}',
                        message: 'Delete completed',
                    });
                } else {
                    FbMessage({
                        type: '${e.INFO}',
                        message: 'Delete canceled',
                    });
                }
            },
        }
    );
}
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbButton:m},methods:{open:()=>{s.confirm("This action will permanently delete data. Continue?","Are you sure?",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:e.WARNING,onAction:n=>{n===u.CONFIRM?t({type:e.SUCCESS,message:"Delete completed"}):t({type:e.INFO,message:"Delete canceled"})}})}},template:'<fb-button plain @click="open">Click to open the Confirmation message</fb-button>'})},r={parameters:{docs:{source:{code:`
<template>
    <fb-button plain @click="open">Click to open the Confirmation message</fb-button>
</template>

<script lang="ts" setup>
import { FbMessage, FbMessageBox, MessageBoxActionTypes } from '@fastybird/web-ui-library'
import type { MessageBoxAction } from '@fastybird/web-ui-library'

const open = () => {
    FbMessageBox.prompt('Please input your e-mail', 'Tip', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        inputPattern: /[\\w!#$%&'*+/=?^_\`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_\`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?.)+[\\w](?:[\\w-]*[\\w])?/,
        inputErrorMessage: 'Invalid Email',
        onAction: (action: MessageBoxAction, _context, value: string): void => {
            if (action === MessageBoxActionTypes.CONFIRM) {
                FbMessage({
                    type: '${e.SUCCESS}',
                    message: \`Your email is: \${value}\`,
                });
            } else {
                FbMessage({
                    type: '${e.INFO}',
                    message: 'Input canceled',
                });
            }
        },
    });
}
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbButton:m},methods:{open:()=>{s.prompt("Please input your e-mail","Tip",{confirmButtonText:"OK",cancelButtonText:"Cancel",inputPattern:/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,inputErrorMessage:"Invalid Email",onAction:(n,a,b)=>{n===u.CONFIRM?t({type:e.SUCCESS,message:`Your email is: ${b}`}):t({type:e.INFO,message:"Input canceled"})}})}},template:'<fb-button plain @click="open">Click to open the Prompt message</fb-button>'})},l={parameters:{docs:{source:{code:`
<template>
    <fb-button plain @click="openOne">Common VNode</fb-button>
    <fb-button plain @click="openTwo">Dynamic props</fb-button>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue';
import { FbMessage, FbMessageBox, MessageBoxActionTypes, FbSwitch } from '@fastybird/web-ui-library'
import type { MessageBoxAction } from '@fastybird/web-ui-library'

const checked = ref<boolean | string | number>(false);

const openOne = () => {
    FbMessageBox({
        title: 'Message',
        message: h('p', null, [h('span', null, 'Message can be '), h('i', { style: 'color: teal' }, 'VNode')]),
    });
}
const openTwo = () => {
    FbMessageBox({
        title: 'Message',
        // Should pass a function if VNode contains dynamic props
        message: () =>
            h(FbSwitch, {
                modelValue: checked.value,
                'onUpdate:modelValue': (val: boolean | string | number) => {
                    checked.value = val;
                },
            }),
    });
}
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbButton:m,FbSwitch:g},methods:{openOne:()=>{s({title:"Message",message:o("p",null,[o("span",null,"Message can be "),o("i",{style:"color: teal"},"VNode")])})},openTwo:()=>{const n=S(!1);s({title:"Message",message:()=>o(g,{modelValue:n.value,"onUpdate:modelValue":a=>{n.value=a}})})}},template:`
<fb-button plain @click="openOne">Common VNode</fb-button>
<fb-button plain @click="openTwo">Dynamic props</fb-button>
`})},p={parameters:{docs:{source:{code:`
<template>
    <fb-button plain @click="open">Click to open the Confirmation message</fb-button>
</template>

<script lang="ts" setup>
import { FbMessage, FbMessageBox, MessageBoxActionTypes } from '@fastybird/web-ui-library'

const open = () => {
    FbMessageBox.confirm(
        'This action will permanently delete data. Continue?',
        'Are you sure?',
        {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: '${e.WARNING}',
            onAction: (action): void => {
                if (action === MessageBoxActionTypes.CONFIRM) {
                    FbMessage({
                        type: '${e.SUCCESS}',
                        message: 'Delete completed',
                    });
                } else {
                    FbMessage({
                        type: '${e.INFO}',
                        message: 'Delete canceled',
                    });
                }
            },
        }
    );
}
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbButton:m},methods:{open:()=>{s({title:"Message",message:o("p",null,[o("span",null,"Message can be "),o("i",{style:"color: teal"},"VNode")]),showCancelButton:!0,confirmButtonText:"OK",cancelButtonText:"Cancel",beforeClose:(n,a,b)=>{n===u.CONFIRM?(a.confirmButtonRef.value.loading=!0,a.confirmButtonRef.value.text="Loading...",setTimeout(()=>{b(),setTimeout(()=>{a.confirmButtonRef.value.loading=!1},300)},3e3)):b()},onAction:n=>{n===u.CONFIRM?t({type:e.SUCCESS,message:"Delete completed"}):t({type:e.INFO,message:"Delete canceled"})}})}},template:'<fb-button plain @click="open">Click to open the Customized message</fb-button>'})};var d,f,y;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button plain @click="openError">Click to open the error Alert message</fb-button>
    <fb-button plain @click="openInfo">Click to open the info Alert message</fb-button>
</template>

<script lang="ts" setup>
import { FbMessage, FbMessageBox } from '@fastybird/web-ui-library'
import type { MessageBoxAction } from '@fastybird/web-ui-library'

const openError = () => {
    FbMessageBox.alert('This is a alert message', 'With some title', {
        confirmButtonText: 'This is OK',
        type: '\${VariantTypes.ERROR}',
        onAction: (action: MessageBoxAction) => {
            FbMessage({
                type: '\${VariantTypes.INFO}',
                message: \\\`You clicked: \\\${action}\\\`,
            });
        },
    });
};

const openInfo = () => {
    FbMessageBox.alert('This is a info message', 'With some title', {
        confirmButtonText: 'This is OK',
        type: '\${VariantTypes.INFO}',
        onAction: (action: MessageBoxAction) => {
            FbMessage({
                type: '\${VariantTypes.INFO}',
                message: \\\`You clicked: \\\${action}\\\`,
            });
        },
    });
}
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbButton
    },
    methods: {
      openError: () => {
        FbMessageBox.alert("This is a alert message", "With some title", {
          confirmButtonText: "This is OK",
          type: VariantTypes.ERROR,
          onAction: (action: MessageBoxAction) => {
            FbMessage({
              type: VariantTypes.INFO,
              message: \`You clicked: \${action}\`
            });
          }
        });
      },
      openInfo: () => {
        FbMessageBox.alert("This is a info message", "With some title", {
          confirmButtonText: "This is OK",
          type: VariantTypes.INFO,
          onAction: (action: MessageBoxAction) => {
            FbMessage({
              type: VariantTypes.INFO,
              message: \`You clicked: \${action}\`
            });
          }
        });
      }
    },
    template: \`
<fb-button plain @click="openError">Click to open the error Alert message</fb-button>
<fb-button plain @click="openInfo">Click to open the info Alert message</fb-button>
\`
  })
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var M,B,F;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button plain @click="open">Click to open the Confirmation message</fb-button>
</template>

<script lang="ts" setup>
import { FbMessage, FbMessageBox, MessageBoxActionTypes } from '@fastybird/web-ui-library'
import type { MessageBoxAction } from '@fastybird/web-ui-library'

const open = () => {
    FbMessageBox.confirm(
        'This action will permanently delete data. Continue?',
        'Are you sure?',
        {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: '\${VariantTypes.WARNING}',
            onAction: (action: MessageBoxAction): void => {
                if (action === MessageBoxActionTypes.CONFIRM) {
                    FbMessage({
                        type: '\${VariantTypes.SUCCESS}',
                        message: 'Delete completed',
                    });
                } else {
                    FbMessage({
                        type: '\${VariantTypes.INFO}',
                        message: 'Delete canceled',
                    });
                }
            },
        }
    );
}
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbButton
    },
    methods: {
      open: () => {
        FbMessageBox.confirm("This action will permanently delete data. Continue?", "Are you sure?", {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: VariantTypes.WARNING,
          onAction: (action: MessageBoxAction): void => {
            if (action === MessageBoxActionTypes.CONFIRM) {
              FbMessage({
                type: VariantTypes.SUCCESS,
                message: "Delete completed"
              });
            } else {
              FbMessage({
                type: VariantTypes.INFO,
                message: "Delete canceled"
              });
            }
          }
        });
      }
    },
    template: '<fb-button plain @click="open">Click to open the Confirmation message</fb-button>'
  })
}`,...(F=(B=c.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var x,T,h;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button plain @click="open">Click to open the Confirmation message</fb-button>
</template>

<script lang="ts" setup>
import { FbMessage, FbMessageBox, MessageBoxActionTypes } from '@fastybird/web-ui-library'
import type { MessageBoxAction } from '@fastybird/web-ui-library'

const open = () => {
    FbMessageBox.prompt('Please input your e-mail', 'Tip', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        inputPattern: /[\\\\w!#$%&'*+/=?^_\\\`{|}~-]+(?:\\\\.[\\\\w!#$%&'*+/=?^_\\\`{|}~-]+)*@(?:[\\\\w](?:[\\\\w-]*[\\\\w])?.)+[\\\\w](?:[\\\\w-]*[\\\\w])?/,
        inputErrorMessage: 'Invalid Email',
        onAction: (action: MessageBoxAction, _context, value: string): void => {
            if (action === MessageBoxActionTypes.CONFIRM) {
                FbMessage({
                    type: '\${VariantTypes.SUCCESS}',
                    message: \\\`Your email is: \\\${value}\\\`,
                });
            } else {
                FbMessage({
                    type: '\${VariantTypes.INFO}',
                    message: 'Input canceled',
                });
            }
        },
    });
}
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbButton
    },
    methods: {
      open: () => {
        FbMessageBox.prompt("Please input your e-mail", "Tip", {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          inputPattern: /[\\w!#$%&'*+/=?^_\`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_\`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?/,
          inputErrorMessage: "Invalid Email",
          onAction: (action: MessageBoxAction, _context, value: string): void => {
            if (action === MessageBoxActionTypes.CONFIRM) {
              FbMessage({
                type: VariantTypes.SUCCESS,
                message: \`Your email is: \${value}\`
              });
            } else {
              FbMessage({
                type: VariantTypes.INFO,
                message: "Input canceled"
              });
            }
          }
        });
      }
    },
    template: '<fb-button plain @click="open">Click to open the Prompt message</fb-button>'
  })
}`,...(h=(T=r.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var C,A,w;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button plain @click="openOne">Common VNode</fb-button>
    <fb-button plain @click="openTwo">Dynamic props</fb-button>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue';
import { FbMessage, FbMessageBox, MessageBoxActionTypes, FbSwitch } from '@fastybird/web-ui-library'
import type { MessageBoxAction } from '@fastybird/web-ui-library'

const checked = ref<boolean | string | number>(false);

const openOne = () => {
    FbMessageBox({
        title: 'Message',
        message: h('p', null, [h('span', null, 'Message can be '), h('i', { style: 'color: teal' }, 'VNode')]),
    });
}
const openTwo = () => {
    FbMessageBox({
        title: 'Message',
        // Should pass a function if VNode contains dynamic props
        message: () =>
            h(FbSwitch, {
                modelValue: checked.value,
                'onUpdate:modelValue': (val: boolean | string | number) => {
                    checked.value = val;
                },
            }),
    });
}
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbButton,
      FbSwitch
    },
    methods: {
      openOne: () => {
        FbMessageBox({
          title: "Message",
          message: h("p", null, [h("span", null, "Message can be "), h("i", {
            style: "color: teal"
          }, "VNode")])
        });
      },
      openTwo: () => {
        const checked = ref<boolean | string | number>(false);
        FbMessageBox({
          title: "Message",
          // Should pass a function if VNode contains dynamic props
          message: () => h(FbSwitch, {
            modelValue: checked.value,
            "onUpdate:modelValue": (val: boolean | string | number) => {
              checked.value = val;
            }
          })
        });
      }
    },
    template: \`
<fb-button plain @click="openOne">Common VNode</fb-button>
<fb-button plain @click="openTwo">Dynamic props</fb-button>
\`
  })
}`,...(w=(A=l.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var O,I,k;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button plain @click="open">Click to open the Confirmation message</fb-button>
</template>

<script lang="ts" setup>
import { FbMessage, FbMessageBox, MessageBoxActionTypes } from '@fastybird/web-ui-library'

const open = () => {
    FbMessageBox.confirm(
        'This action will permanently delete data. Continue?',
        'Are you sure?',
        {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: '\${VariantTypes.WARNING}',
            onAction: (action): void => {
                if (action === MessageBoxActionTypes.CONFIRM) {
                    FbMessage({
                        type: '\${VariantTypes.SUCCESS}',
                        message: 'Delete completed',
                    });
                } else {
                    FbMessage({
                        type: '\${VariantTypes.INFO}',
                        message: 'Delete canceled',
                    });
                }
            },
        }
    );
}
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbButton
    },
    methods: {
      open: () => {
        FbMessageBox({
          title: "Message",
          message: h("p", null, [h("span", null, "Message can be "), h("i", {
            style: "color: teal"
          }, "VNode")]),
          showCancelButton: true,
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          beforeClose: (action: MessageBoxAction, instance, done) => {
            if (action === MessageBoxActionTypes.CONFIRM) {
              instance.confirmButtonRef.value.loading = true;
              instance.confirmButtonRef.value.text = "Loading...";
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonRef.value.loading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          },
          onAction: (action: MessageBoxAction): void => {
            if (action === MessageBoxActionTypes.CONFIRM) {
              FbMessage({
                type: VariantTypes.SUCCESS,
                message: "Delete completed"
              });
            } else {
              FbMessage({
                type: VariantTypes.INFO,
                message: "Delete canceled"
              });
            }
          }
        });
      }
    },
    template: '<fb-button plain @click="open">Click to open the Customized message</fb-button>'
  })
}`,...(k=(I=p.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};const V=["Alert","Confirm","Prompt","Vnode","Customization"],E=Object.freeze(Object.defineProperty({__proto__:null,Alert:i,Confirm:c,Customization:p,Prompt:r,Vnode:l,__namedExportsOrder:V,default:N},Symbol.toStringTag,{value:"Module"}));export{i as A,c as C,E as M,r as P,p as a};
