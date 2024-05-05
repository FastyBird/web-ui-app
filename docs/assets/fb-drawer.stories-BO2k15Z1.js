import{s as o,v as s,k as L,A as j,z as V,j as q,d as G,f as K,R as E,C as X,w as u,g as U}from"./web-ui-components.es-nLJZCm2K.js";import{n as r}from"./web-ui-constants.es-Bfh99ZXh.js";import{l as g,m as k,n as y}from"./index-Dg9quNvz.js";import{r as e,j as J}from"./vue.esm-bundler-DEpQrfwO.js";const Q={component:o,title:"Components/Feedback/Drawer",excludeStories:/.*Data$/},l={parameters:{docs:{source:{code:`
<template>
    <fb-radio-group v-model="direction">
        <fb-radio value="ltr">left to right</fb-radio>
        <fb-radio value="rtl">right to left</fb-radio>
        <fb-radio value="ttb">top to bottom</fb-radio>
        <fb-radio value="btt">bottom to top</fb-radio>
    </fb-radio-group>

    <fb-button variant="${r.PRIMARY}" class="fb-drawer-story-block__basic-usage-button" @click="drawer1 = true">
        Open drawer
    </fb-button>

    <fb-button variant="${r.PRIMARY}" class="fb-drawer-story-block__basic-usage-button" @click="drawer2 = true">
        Open drawer with footer
    </fb-button>

    <fb-drawer
        v-model="drawer1"
        title="I am the title"
        :direction="direction"
        :before-close="handleClose"
        @leftClick="drawer1 = false"
        @rightClick="drawer1 = false"
    >
        <span>Hi, there!</span>
    </fb-drawer>

    <fb-drawer v-model="drawer2" :direction="direction">
        <template #title>
            set title by slot
        </template>

        <template #default>
            <div>
                <fb-radio v-model="radio1" value="Option 1" size="large"
                >Option 1</fb-radio
                >
                <fb-radio v-model="radio1" value="Option 2" size="large"
                >Option 2</fb-radio
                >
            </div>
        </template>

        <template #footer>
            <fb-button @click="cancelClick">cancel</fb-button>
            <fb-button variant="${r.PRIMARY}" @click="confirmClick">confirm</fb-button>
        </template>
    </fb-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FbMessageBox } from '@fastybird/web-ui-components';

const drawer = ref(false)
const drawer2 = ref(false)
const direction = ref('rtl');
const radio1 = ref('Option 1');

const handleClose = (done: () => void) => {
    FbMessageBox.confirm('Are you sure you want to close this?', {
        onAction: () => {
            done();
        },
    });
}

const cancelClick = () => {
    drawer2.value = false
}

const confirmClick = () => {
    FbMessageBox.confirm(\`Are you confirm to chose \${radio1.value} ?\`, {
        onAction: () => {
            drawer2.value = false;
        },
    });
}
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbDrawer:o,FbButton:s,FbRadio:L,FbRadioGroup:j},setup:()=>{const a=e(!1),t=e(!1),i=e("rtl"),n=e("Option 1");return{drawer1:a,drawer2:t,direction:i,radio1:n,handleClose:v=>{u.confirm("Are you sure you want to close this?",{onAction:()=>{v()}})},cancelClick:()=>{t.value=!1},confirmClick:()=>{u.confirm(`Are you confirm to chose ${n.value} ?`,{onAction:()=>{t.value=!1}})}}},template:`
<div class="fb-drawer-story-block">
    <div class="fb-drawer-story-block__item">
        <fb-radio-group v-model="direction">
            <fb-radio value="ltr">left to right</fb-radio>
            <fb-radio value="rtl">right to left</fb-radio>
            <fb-radio value="ttb">top to bottom</fb-radio>
            <fb-radio value="btt">bottom to top</fb-radio>
        </fb-radio-group>

        <fb-button variant="${r.PRIMARY}" class="fb-drawer-story-block__basic-usage-button" @click="drawer1 = true">
            Open drawer
        </fb-button>

        <fb-button variant="${r.PRIMARY}" class="fb-drawer-story-block__basic-usage-button" @click="drawer2 = true">
            Open drawer with footer
        </fb-button>

        <fb-drawer
            v-model="drawer1"
            title="I am the title"
            :direction="direction"
            :before-close="handleClose"
            @leftClick="drawer1 = false"
            @rightClick="drawer1 = false"
        >
            <span>Hi, there!</span>
        </fb-drawer>

        <fb-drawer v-model="drawer2" :direction="direction">
            <template #title>
                set title by slot
            </template>

            <template #default>
                <div>
                    <fb-radio v-model="radio1" value="Option 1" size="large"
                    >Option 1</fb-radio
                    >
                    <fb-radio v-model="radio1" value="Option 2" size="large"
                    >Option 2</fb-radio
                    >
                </div>
            </template>

            <template #footer>
                <fb-button @click="cancelClick">cancel</fb-button>
                <fb-button variant="${r.PRIMARY}" @click="confirmClick">confirm</fb-button>
            </template>
        </fb-drawer>
    </div>
</div>`})},d={parameters:{docs:{source:{code:`
<template>
    <fb-button @click="drawer = true">
        Open drawer without header
    </fb-button>

    <fb-drawer v-model="drawer" title="I am the title" :show-header="false">
        <span>Hi there!</span>
    </fb-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const drawer = ref(false);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbDrawer:o,FbButton:s},setup:()=>({drawer:e(!1)}),template:`
<div class="fb-drawer-story-block">
    <div class="fb-drawer-story-block__item">
        <fb-button @click="drawer = true">
            Open drawer without header
        </fb-button>

        <fb-drawer v-model="drawer" title="I am the title" :show-header="false">
            <span>Hi there!</span>
        </fb-drawer>
    </div>
</div>`})},c={parameters:{docs:{source:{code:`
<template>
    <fb-button @click="dialog = true">
        Open drawer with form
    </fb-button>

    <fb-drawer
        ref="drawerRef"
        v-model="dialog"
        title="I have a nested form inside!"
        subtitle="With subtitle"
        :before-close="handleClose"
        direction="ltr"
    >
        <template #icon>
            <fas-keyboard />
        </template>

        <fb-form :model="form">
            <fb-form-item label="Name" :labfb-width="formLabelWidth">
                <fb-input v-model="form.name" autocomplete="off" />
            </fb-form-item>

            <fb-form-item label="Area" :labfb-width="formLabelWidth">
                <fb-select
                    v-model="form.region"
                    placeholder="Please select activity area"
                >
                    <fb-option label="Area1" value="shanghai" />
                    <fb-option label="Area2" value="beijing" />
                </fb-select>
            </fb-form-item>
        </fb-form>

        <template #footer>
            <fb-button @click="cancelForm">Cancel</fb-button>

            <fb-button variant="${r.PRIMARY}" :loading="loading" @click="onClick">
                {{ loading ? 'Submitting ...' : 'Submit' }}
            </fb-button>
        </template>
    </fb-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { FbMessageBox } from '@fastybird/web-ui-components';
import { FasKeyboard } from '@fastybird/web-ui-icons';

const formLabelWidth = '80px';

let timer;

const dialog = ref(false);
const loading = ref(false);

const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
});

const drawerRef = ref<InstanceType<typeof FbDrawer>>();

const onClick = () => {
    drawerRef.value!.handleClose();
};

const handleClose = (done) => {
    if (loading.value) {
        return;
    }

    FbMessageBox.confirm('Do you want to submit?', {
        onAction: (action: MessageBoxAction) => {
            if (action === MessageBoxActionTypes.CONFIRM) {
                loading.value = true;

                timer = setTimeout(() => {
                    done();
                    setTimeout(() => {
                        loading.value = false;
                    }, 400);
                }, 2000);
            } else {
                done();
            }
        },
    });
};

const cancelForm = () => {
    loading.value = false;
    dialog.value = false;

    clearTimeout(timer);
};
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbDrawer:o,FbButton:s,FbForm:V,FbFormItem:q,FbInput:G,FbSelect:K,FbOption:E,FasKeyboard:g},setup:()=>{const a="80px";let t;const i=e(!1),n=e(!1),w=J({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),p=e();return{formLabelWidth:a,dialog:i,loading:n,form:w,drawerRef:p,onClick:()=>{p.value.handleClose()},handleClose:h=>{n.value||u.confirm("Do you want to submit?",{onAction:H=>{H===U.CONFIRM?(n.value=!0,t=setTimeout(()=>{h(),setTimeout(()=>{n.value=!1},400)},2e3)):h()}})},cancelForm:()=>{n.value=!1,i.value=!1,clearTimeout(t)},FasKeyboard:g}},template:`
<div class="fb-drawer-story-block">
    <div class="fb-drawer-story-block__item">
        <fb-button @click="dialog = true">
            Open drawer with form
        </fb-button>

        <fb-drawer
            ref="drawerRef"
            v-model="dialog"
            title="I have a nested form inside!"
            subtitle="With subtitle"
            :before-close="handleClose"
            direction="ltr"
        >
            <template #icon>
                <fas-keyboard />
            </template>

            <fb-form :model="form">
                <fb-form-item label="Name" :labfb-width="formLabelWidth">
                    <fb-input v-model="form.name" autocomplete="off" />
                </fb-form-item>

                <fb-form-item label="Area" :labfb-width="formLabelWidth">
                    <fb-select
                        v-model="form.region"
                        placeholder="Please select activity area"
                    >
                        <fb-option label="Area1" value="shanghai" />
                        <fb-option label="Area2" value="beijing" />
                    </fb-select>
                </fb-form-item>
            </fb-form>

            <template #footer>
                <fb-button @click="cancelForm">Cancel</fb-button>

                <fb-button variant="${r.PRIMARY}" :loading="loading" @click="onClick">
                    {{ loading ? 'Submitting ...' : 'Submit' }}
                </fb-button>
            </template>
        </fb-drawer>
    </div>
</div>`})},b={parameters:{docs:{source:{code:`
<template>
    <fb-button @click="visible = true">
        Open drawer with customized header
    </fb-button>

    <fb-drawer v-model="visible" :show-close="false">
        <template #header="{ close, titleId, titleClass }">
            <div class="custom-drawer-header">
                <h4 :class="titleClass" :id="titleId">This is a custom header!</h4>

                <fb-button variant="${r.DANGER}" @click="close">
                    <fb-icon class="fb-icon--left"><fas-circle-xmark /></fb-icon>
                    Close
                </fb-button>
            </div>
        </template>
        This is drawer content.
    </fb-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);
<\/script>

<style scoped>
.custom-drawer-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 16px;
    padding: 10px;
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbDrawer:o,FbButton:s,FbIcon:X,FasCircleXmark:k},setup:()=>({visible:e(!1),FasCircleXmark:k}),template:`
<div class="fb-drawer-story-block">
    <div class="fb-drawer-story-block__item">
        <fb-button @click="visible = true">
            Open drawer with customized header
        </fb-button>

        <fb-drawer v-model="visible" :show-close="false">
            <template #header="{ close, titleId, titleClass }">
                <div class="fb-drawer-story-block__custom-drawer-header">
                    <h4 :class="titleClass" :id="titleId">This is a custom header!</h4>

                    <fb-button variant="${r.DANGER}" @click="close">
                        <fb-icon class="fb-icon--left"><fas-circle-xmark /></fb-icon>
                        Close
                    </fb-button>
                </div>
            </template>
            This is drawer content.
        </fb-drawer>
    </div>
</div>`})},f={parameters:{docs:{source:{code:`
<template>
    <fb-button @click="drawer = true">
        Open nested drawers
    </fb-button>

    <fb-drawer v-model="drawer" title="I'm outer Drawer" size="50%">
        <div>
            <fb-button @click="innerDrawer = true">Click me!</fb-button>

            <fb-drawer
                v-model="innerDrawer"
                title="I'm inner Drawer"
                :append-to-body="true"
                :before-close="handleClose"
            >
                <p>Hi, I'm the inner drawer content</p>
            </fb-drawer>
        </div>
    </fb-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { FbMessageBox } from '@fastybird/web-ui-components';

const drawer = ref(false);
const innerDrawer = ref(false);

const handleClose = (done: () => void) => {
    FbMessageBox.confirm('You still have unsaved data, proceed?', {
        onAction: () => {
            done();
        },
    });
};
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbDrawer:o,FbButton:s},setup:()=>{const a=e(!1),t=e(!1);return{drawer:a,innerDrawer:t,handleClose:n=>{u.confirm("You still have unsaved data, proceed?",{onAction:()=>{n()}})}}},template:`
<div class="fb-drawer-story-block">
    <div class="fb-drawer-story-block__item">
        <fb-button @click="drawer = true">
            Open nested drawers
        </fb-button>

        <fb-drawer v-model="drawer" title="I'm outer Drawer" size="50%">
            <div>
                <fb-button @click="innerDrawer = true">Click me!</fb-button>

                <fb-drawer
                    v-model="innerDrawer"
                    title="I'm inner Drawer"
                    :append-to-body="true"
                    :before-close="handleClose"
                >
                    <p>Hi, I'm the inner drawer content</p>
                </fb-drawer>
            </div>
        </fb-drawer>
    </div>
</div>`})},m={parameters:{docs:{source:{code:`
<template>
    <fb-button @click="drawer = true">
        Open nested drawers
    </fb-button>

    <fb-drawer
        v-model="drawer"
        title="Simple modal header"
        subtitle="With simple subtitle"
        :show-footer="false"
    >
        <template #description>
            Phasellus sapien felis, vulputate a nibh eu, tempor dictum turpis. Pellentesque non ex condimentum, dictum mauris non, ullamcorper nisi.
        </template>

        <template #icon><fas-image /></template>

        <span>Phasellus sapien felis, vulputate a nibh eu, tempor dictum turpis. Pellentesque non ex condimentum, dictum mauris non, ullamcorper nisi.</span>
    </fb-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FbMessageBox } from '@fastybird/web-ui-components';
import { FasImage } from '@fastybird/web-ui-icons';

const drawer = ref(false);
const innerDrawer = ref(false);

const handleClose = (done: () => void) => {
    FbMessageBox.confirm('You still have unsaved data, proceed?', {
        onAction: () => {
            done();
        },
    });
};
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbDrawer:o,FbButton:s,FasImage:y},setup:()=>{const a=e(!1),t=e(!1);return{drawer:a,innerDrawer:t,handleClose:n=>{u.confirm("You still have unsaved data, proceed?",{onAction:()=>{n()}})},FasImage:y}},template:`
<div class="fb-drawer-story-block">
    <div class="fb-drawer-story-block__item">
        <fb-button @click="drawer = true">
            Open nested drawers
        </fb-button>

        <fb-drawer
            v-model="drawer"
            title="Simple modal header"
            subtitle="With simple subtitle"
            :show-footer="false"
        >
            <template #description>
                Phasellus sapien felis, vulputate a nibh eu, tempor dictum turpis. Pellentesque non ex condimentum, dictum mauris non, ullamcorper nisi.
            </template>

            <template #icon><fas-image /></template>

            <span>Phasellus sapien felis, vulputate a nibh eu, tempor dictum turpis. Pellentesque non ex condimentum, dictum mauris non, ullamcorper nisi.</span>
        </fb-drawer>
    </div>
</div>`})};var C,F,I;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-radio-group v-model="direction">
        <fb-radio value="ltr">left to right</fb-radio>
        <fb-radio value="rtl">right to left</fb-radio>
        <fb-radio value="ttb">top to bottom</fb-radio>
        <fb-radio value="btt">bottom to top</fb-radio>
    </fb-radio-group>

    <fb-button variant="\${VariantTypes.PRIMARY}" class="fb-drawer-story-block__basic-usage-button" @click="drawer1 = true">
        Open drawer
    </fb-button>

    <fb-button variant="\${VariantTypes.PRIMARY}" class="fb-drawer-story-block__basic-usage-button" @click="drawer2 = true">
        Open drawer with footer
    </fb-button>

    <fb-drawer
        v-model="drawer1"
        title="I am the title"
        :direction="direction"
        :before-close="handleClose"
        @leftClick="drawer1 = false"
        @rightClick="drawer1 = false"
    >
        <span>Hi, there!</span>
    </fb-drawer>

    <fb-drawer v-model="drawer2" :direction="direction">
        <template #title>
            set title by slot
        </template>

        <template #default>
            <div>
                <fb-radio v-model="radio1" value="Option 1" size="large"
                >Option 1</fb-radio
                >
                <fb-radio v-model="radio1" value="Option 2" size="large"
                >Option 2</fb-radio
                >
            </div>
        </template>

        <template #footer>
            <fb-button @click="cancelClick">cancel</fb-button>
            <fb-button variant="\${VariantTypes.PRIMARY}" @click="confirmClick">confirm</fb-button>
        </template>
    </fb-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FbMessageBox } from '@fastybird/web-ui-components';

const drawer = ref(false)
const drawer2 = ref(false)
const direction = ref('rtl');
const radio1 = ref('Option 1');

const handleClose = (done: () => void) => {
    FbMessageBox.confirm('Are you sure you want to close this?', {
        onAction: () => {
            done();
        },
    });
}

const cancelClick = () => {
    drawer2.value = false
}

const confirmClick = () => {
    FbMessageBox.confirm(\\\`Are you confirm to chose \\$\\{radio1.value\\} ?\\\`, {
        onAction: () => {
            drawer2.value = false;
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
      FbDrawer,
      FbButton,
      FbRadio,
      FbRadioGroup
    },
    setup: () => {
      const drawer1 = ref(false);
      const drawer2 = ref(false);
      const direction = ref("rtl");
      const radio1 = ref("Option 1");
      const handleClose = (done: () => void) => {
        FbMessageBox.confirm("Are you sure you want to close this?", {
          onAction: () => {
            done();
          }
        });
      };
      const cancelClick = (): void => {
        drawer2.value = false;
      };
      const confirmClick = (): void => {
        FbMessageBox.confirm(\`Are you confirm to chose \${radio1.value} ?\`, {
          onAction: () => {
            drawer2.value = false;
          }
        });
      };
      return {
        drawer1,
        drawer2,
        direction,
        radio1,
        handleClose,
        cancelClick,
        confirmClick
      };
    },
    template: \`
<div class="fb-drawer-story-block">
    <div class="fb-drawer-story-block__item">
        <fb-radio-group v-model="direction">
            <fb-radio value="ltr">left to right</fb-radio>
            <fb-radio value="rtl">right to left</fb-radio>
            <fb-radio value="ttb">top to bottom</fb-radio>
            <fb-radio value="btt">bottom to top</fb-radio>
        </fb-radio-group>

        <fb-button variant="\${VariantTypes.PRIMARY}" class="fb-drawer-story-block__basic-usage-button" @click="drawer1 = true">
            Open drawer
        </fb-button>

        <fb-button variant="\${VariantTypes.PRIMARY}" class="fb-drawer-story-block__basic-usage-button" @click="drawer2 = true">
            Open drawer with footer
        </fb-button>

        <fb-drawer
            v-model="drawer1"
            title="I am the title"
            :direction="direction"
            :before-close="handleClose"
            @leftClick="drawer1 = false"
            @rightClick="drawer1 = false"
        >
            <span>Hi, there!</span>
        </fb-drawer>

        <fb-drawer v-model="drawer2" :direction="direction">
            <template #title>
                set title by slot
            </template>

            <template #default>
                <div>
                    <fb-radio v-model="radio1" value="Option 1" size="large"
                    >Option 1</fb-radio
                    >
                    <fb-radio v-model="radio1" value="Option 2" size="large"
                    >Option 2</fb-radio
                    >
                </div>
            </template>

            <template #footer>
                <fb-button @click="cancelClick">cancel</fb-button>
                <fb-button variant="\${VariantTypes.PRIMARY}" @click="confirmClick">confirm</fb-button>
            </template>
        </fb-drawer>
    </div>
</div>\`
  })
}`,...(I=(F=l.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var A,R,x;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button @click="drawer = true">
        Open drawer without header
    </fb-button>

    <fb-drawer v-model="drawer" title="I am the title" :show-header="false">
        <span>Hi there!</span>
    </fb-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const drawer = ref(false);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbDrawer,
      FbButton
    },
    setup: () => {
      const drawer = ref(false);
      return {
        drawer
      };
    },
    template: \`
<div class="fb-drawer-story-block">
    <div class="fb-drawer-story-block__item">
        <fb-button @click="drawer = true">
            Open drawer without header
        </fb-button>

        <fb-drawer v-model="drawer" title="I am the title" :show-header="false">
            <span>Hi there!</span>
        </fb-drawer>
    </div>
</div>\`
  })
}`,...(x=(R=d.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var D,O,_;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button @click="dialog = true">
        Open drawer with form
    </fb-button>

    <fb-drawer
        ref="drawerRef"
        v-model="dialog"
        title="I have a nested form inside!"
        subtitle="With subtitle"
        :before-close="handleClose"
        direction="ltr"
    >
        <template #icon>
            <fas-keyboard />
        </template>

        <fb-form :model="form">
            <fb-form-item label="Name" :labfb-width="formLabelWidth">
                <fb-input v-model="form.name" autocomplete="off" />
            </fb-form-item>

            <fb-form-item label="Area" :labfb-width="formLabelWidth">
                <fb-select
                    v-model="form.region"
                    placeholder="Please select activity area"
                >
                    <fb-option label="Area1" value="shanghai" />
                    <fb-option label="Area2" value="beijing" />
                </fb-select>
            </fb-form-item>
        </fb-form>

        <template #footer>
            <fb-button @click="cancelForm">Cancel</fb-button>

            <fb-button variant="\${VariantTypes.PRIMARY}" :loading="loading" @click="onClick">
                {{ loading ? 'Submitting ...' : 'Submit' }}
            </fb-button>
        </template>
    </fb-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { FbMessageBox } from '@fastybird/web-ui-components';
import { FasKeyboard } from '@fastybird/web-ui-icons';

const formLabelWidth = '80px';

let timer;

const dialog = ref(false);
const loading = ref(false);

const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
});

const drawerRef = ref<InstanceType<typeof FbDrawer>>();

const onClick = () => {
    drawerRef.value!.handleClose();
};

const handleClose = (done) => {
    if (loading.value) {
        return;
    }

    FbMessageBox.confirm('Do you want to submit?', {
        onAction: (action: MessageBoxAction) => {
            if (action === MessageBoxActionTypes.CONFIRM) {
                loading.value = true;

                timer = setTimeout(() => {
                    done();
                    setTimeout(() => {
                        loading.value = false;
                    }, 400);
                }, 2000);
            } else {
                done();
            }
        },
    });
};

const cancelForm = () => {
    loading.value = false;
    dialog.value = false;

    clearTimeout(timer);
};
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbDrawer,
      FbButton,
      FbForm,
      FbFormItem,
      FbInput,
      FbSelect,
      FbOption,
      FasKeyboard
    },
    setup: () => {
      const formLabelWidth = "80px";
      let timer;
      const dialog = ref(false);
      const loading = ref(false);
      const form = reactive({
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      });
      const drawerRef = ref<InstanceType<typeof FbDrawer>>();
      const onClick = () => {
        drawerRef.value!.handleClose();
      };
      const handleClose = done => {
        if (loading.value) {
          return;
        }
        FbMessageBox.confirm("Do you want to submit?", {
          onAction: (action: MessageBoxAction) => {
            if (action === MessageBoxActionTypes.CONFIRM) {
              loading.value = true;
              timer = setTimeout(() => {
                done();
                setTimeout(() => {
                  loading.value = false;
                }, 400);
              }, 2000);
            } else {
              done();
            }
          }
        });
      };
      const cancelForm = () => {
        loading.value = false;
        dialog.value = false;
        clearTimeout(timer);
      };
      return {
        formLabelWidth,
        dialog,
        loading,
        form,
        drawerRef,
        onClick,
        handleClose,
        cancelForm,
        FasKeyboard
      };
    },
    template: \`
<div class="fb-drawer-story-block">
    <div class="fb-drawer-story-block__item">
        <fb-button @click="dialog = true">
            Open drawer with form
        </fb-button>

        <fb-drawer
            ref="drawerRef"
            v-model="dialog"
            title="I have a nested form inside!"
            subtitle="With subtitle"
            :before-close="handleClose"
            direction="ltr"
        >
            <template #icon>
                <fas-keyboard />
            </template>

            <fb-form :model="form">
                <fb-form-item label="Name" :labfb-width="formLabelWidth">
                    <fb-input v-model="form.name" autocomplete="off" />
                </fb-form-item>

                <fb-form-item label="Area" :labfb-width="formLabelWidth">
                    <fb-select
                        v-model="form.region"
                        placeholder="Please select activity area"
                    >
                        <fb-option label="Area1" value="shanghai" />
                        <fb-option label="Area2" value="beijing" />
                    </fb-select>
                </fb-form-item>
            </fb-form>

            <template #footer>
                <fb-button @click="cancelForm">Cancel</fb-button>

                <fb-button variant="\${VariantTypes.PRIMARY}" :loading="loading" @click="onClick">
                    {{ loading ? 'Submitting ...' : 'Submit' }}
                </fb-button>
            </template>
        </fb-drawer>
    </div>
</div>\`
  })
}`,...(_=(O=c.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var M,B,T;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button @click="visible = true">
        Open drawer with customized header
    </fb-button>

    <fb-drawer v-model="visible" :show-close="false">
        <template #header="{ close, titleId, titleClass }">
            <div class="custom-drawer-header">
                <h4 :class="titleClass" :id="titleId">This is a custom header!</h4>

                <fb-button variant="\${VariantTypes.DANGER}" @click="close">
                    <fb-icon class="fb-icon--left"><fas-circle-xmark /></fb-icon>
                    Close
                </fb-button>
            </div>
        </template>
        This is drawer content.
    </fb-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);
<\/script>

<style scoped>
.custom-drawer-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 16px;
    padding: 10px;
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbDrawer,
      FbButton,
      FbIcon,
      FasCircleXmark
    },
    setup: () => {
      const visible = ref(false);
      return {
        visible,
        FasCircleXmark
      };
    },
    template: \`
<div class="fb-drawer-story-block">
    <div class="fb-drawer-story-block__item">
        <fb-button @click="visible = true">
            Open drawer with customized header
        </fb-button>

        <fb-drawer v-model="visible" :show-close="false">
            <template #header="{ close, titleId, titleClass }">
                <div class="fb-drawer-story-block__custom-drawer-header">
                    <h4 :class="titleClass" :id="titleId">This is a custom header!</h4>

                    <fb-button variant="\${VariantTypes.DANGER}" @click="close">
                        <fb-icon class="fb-icon--left"><fas-circle-xmark /></fb-icon>
                        Close
                    </fb-button>
                </div>
            </template>
            This is drawer content.
        </fb-drawer>
    </div>
</div>\`
  })
}`,...(T=(B=b.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var P,S,$;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button @click="drawer = true">
        Open nested drawers
    </fb-button>

    <fb-drawer v-model="drawer" title="I'm outer Drawer" size="50%">
        <div>
            <fb-button @click="innerDrawer = true">Click me!</fb-button>

            <fb-drawer
                v-model="innerDrawer"
                title="I'm inner Drawer"
                :append-to-body="true"
                :before-close="handleClose"
            >
                <p>Hi, I'm the inner drawer content</p>
            </fb-drawer>
        </div>
    </fb-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { FbMessageBox } from '@fastybird/web-ui-components';

const drawer = ref(false);
const innerDrawer = ref(false);

const handleClose = (done: () => void) => {
    FbMessageBox.confirm('You still have unsaved data, proceed?', {
        onAction: () => {
            done();
        },
    });
};
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbDrawer,
      FbButton
    },
    setup: () => {
      const drawer = ref(false);
      const innerDrawer = ref(false);
      const handleClose = (done: () => void) => {
        FbMessageBox.confirm("You still have unsaved data, proceed?", {
          onAction: () => {
            done();
          }
        });
      };
      return {
        drawer,
        innerDrawer,
        handleClose
      };
    },
    template: \`
<div class="fb-drawer-story-block">
    <div class="fb-drawer-story-block__item">
        <fb-button @click="drawer = true">
            Open nested drawers
        </fb-button>

        <fb-drawer v-model="drawer" title="I'm outer Drawer" size="50%">
            <div>
                <fb-button @click="innerDrawer = true">Click me!</fb-button>

                <fb-drawer
                    v-model="innerDrawer"
                    title="I'm inner Drawer"
                    :append-to-body="true"
                    :before-close="handleClose"
                >
                    <p>Hi, I'm the inner drawer content</p>
                </fb-drawer>
            </div>
        </fb-drawer>
    </div>
</div>\`
  })
}`,...($=(S=f.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var W,Y,z;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button @click="drawer = true">
        Open nested drawers
    </fb-button>

    <fb-drawer
        v-model="drawer"
        title="Simple modal header"
        subtitle="With simple subtitle"
        :show-footer="false"
    >
        <template #description>
            Phasellus sapien felis, vulputate a nibh eu, tempor dictum turpis. Pellentesque non ex condimentum, dictum mauris non, ullamcorper nisi.
        </template>

        <template #icon><fas-image /></template>

        <span>Phasellus sapien felis, vulputate a nibh eu, tempor dictum turpis. Pellentesque non ex condimentum, dictum mauris non, ullamcorper nisi.</span>
    </fb-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FbMessageBox } from '@fastybird/web-ui-components';
import { FasImage } from '@fastybird/web-ui-icons';

const drawer = ref(false);
const innerDrawer = ref(false);

const handleClose = (done: () => void) => {
    FbMessageBox.confirm('You still have unsaved data, proceed?', {
        onAction: () => {
            done();
        },
    });
};
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbDrawer,
      FbButton,
      FasImage
    },
    setup: () => {
      const drawer = ref(false);
      const innerDrawer = ref(false);
      const handleClose = (done: () => void) => {
        FbMessageBox.confirm("You still have unsaved data, proceed?", {
          onAction: () => {
            done();
          }
        });
      };
      return {
        drawer,
        innerDrawer,
        handleClose,
        FasImage
      };
    },
    template: \`
<div class="fb-drawer-story-block">
    <div class="fb-drawer-story-block__item">
        <fb-button @click="drawer = true">
            Open nested drawers
        </fb-button>

        <fb-drawer
            v-model="drawer"
            title="Simple modal header"
            subtitle="With simple subtitle"
            :show-footer="false"
        >
            <template #description>
                Phasellus sapien felis, vulputate a nibh eu, tempor dictum turpis. Pellentesque non ex condimentum, dictum mauris non, ullamcorper nisi.
            </template>

            <template #icon><fas-image /></template>

            <span>Phasellus sapien felis, vulputate a nibh eu, tempor dictum turpis. Pellentesque non ex condimentum, dictum mauris non, ullamcorper nisi.</span>
        </fb-drawer>
    </div>
</div>\`
  })
}`,...(z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};const Z=["BasicUsage","NoTitle","CustomizedContent","CustomizedHeader","NestedDrawer","WithDescription"],oe=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:l,CustomizedContent:c,CustomizedHeader:b,NestedDrawer:f,NoTitle:d,WithDescription:m,__namedExportsOrder:Z,default:Q},Symbol.toStringTag,{value:"Module"}));export{l as B,c as C,oe as D,d as N,m as W,b as a,f as b};
