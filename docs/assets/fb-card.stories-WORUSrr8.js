import{ad as n,ae as a,J as f,O as b,v as W,c as O}from"./web-ui-components.es-nLJZCm2K.js";import{q as H,D as U,E as B}from"./index-Dg9quNvz.js";import{n as e,a as t}from"./web-ui-constants.es-Bfh99ZXh.js";const q=""+new URL("example_01-BMPeM0n5.jpg",import.meta.url).href,j={component:n,title:"Components/Data/Card",argTypes:{header:{type:{name:"string",required:!1},control:{type:"text"},description:"content of the card header",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},default:{type:{name:"string",required:!1},control:{type:"text"},description:"customize default content",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},footer:{type:{name:"string",required:!1},control:{type:"text"},description:"content of the card footer",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},extra:{type:{name:"string",required:!1},control:{type:"text"},description:"content of the extra part of the card header",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},cover:{type:{name:"string",required:!1},control:{type:"text"},description:"content of the card cover used for images",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},variant:{type:{name:"string",required:!1},control:{type:"select"},options:["",e.DEFAULT,e.PRIMARY,e.INFO,e.SUCCESS,e.WARNING,e.DANGER],description:"card variant",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},effect:{type:{name:"string",required:!1},control:{type:"select"},options:["",t.LIGHT,t.DARK],description:"card theme style",table:{type:{summary:"string"},defaultValue:{summary:t.LIGHT}}},headerVariant:{type:{name:"string",required:!1},control:{type:"select"},options:["",e.DEFAULT,e.PRIMARY,e.INFO,e.SUCCESS,e.WARNING,e.DANGER],description:"card header variant",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},bodyVariant:{type:{name:"string",required:!1},control:{type:"select"},options:["",e.DEFAULT,e.PRIMARY,e.INFO,e.SUCCESS,e.WARNING,e.DANGER],description:"card body variant",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},footerVariant:{type:{name:"string",required:!1},control:{type:"select"},options:["",e.DEFAULT,e.PRIMARY,e.INFO,e.SUCCESS,e.WARNING,e.DANGER],description:"card footer variant",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},shadow:{type:{name:"string",required:!1},control:{type:"select"},options:[a.ALWAYS,a.HOVER,a.NEVER],description:"when to show card shadows",table:{type:{summary:"string"},defaultValue:{summary:a.ALWAYS}}},bordered:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"when to show card border",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},loading:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"when to show card loading animation",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}},args:{effect:t.LIGHT,shadow:a.ALWAYS,bordered:!0,loading:!1},excludeStories:/.*Data$/},o={tags:["hideInSidebar"],args:{header:"Card name",default:"Card body content",footer:"Footer content"}},r={parameters:{docs:{source:{code:`
<template>
    <fb-card class="card">
        <template #header>
            <span>Card name</span>
        </template>

        <template #extra>
            <a href="#">More</a>
        </template>

        <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>

        <template #footer>Footer content</template>
    </fb-card>
</template>

<style scoped>
.card {
    max-width: 480px;
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbCard:n},template:`
<div class="fb-card-story-block">
    <fb-card class="fb-card-story-block__item">
        <template #header>
            <span>Card name</span>
        </template>
        <template #extra>
            <a href="#">More</a>
        </template>
        <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
        <template #footer>Footer content</template>
    </fb-card>
</div>`})},s={parameters:{docs:{source:{code:`
<template>
    <fb-card class="card">
        <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
    </fb-card>
</template>

<style scoped>
.card {
    max-width: 480px;
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbCard:n},template:`
<div class="fb-card-story-block">
    <fb-card class="fb-card-story-block__item">
        <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
    </fb-card>
</div>`})},c={parameters:{docs:{source:{code:`
<template>
    <fb-card class="card" :bordered="false">
        <template #header>
            <span>Card name</span>
        </template>

        <template #extra>
            <a href="#">More</a>
        </template>

        <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>

        <template #footer>Footer content</template>
    </fb-card>
</template>

<style scoped>
.card {
    max-width: 480px;
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbCard:n},template:`
<div class="fb-card-story-block">
    <fb-card class="fb-card-story-block__item" :bordered="false" shadow="${a.NEVER}">
        <template #header>
            <span>Card name</span>
        </template>
        <template #extra>
            <a href="#">More</a>
        </template>
        <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
        <template #footer>Footer content</template>
    </fb-card>
</div>`})},l={parameters:{docs:{source:{code:`
<template>
    <fb-card class="card" shadow="${a.ALWAYS}">Always</fb-card>
    <fb-card class="card" shadow="${a.HOVER}">Hover</fb-card>
    <fb-card class="card" shadow="${a.NEVER}">Never</fb-card>
</template>

<style scoped>
.card {
    max-width: 480px;
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbCard:n},template:`
<div class="fb-card-story-block">
    <fb-card class="fb-card-story-block__item" shadow="${a.ALWAYS}">Always</fb-card>
    <fb-card class="fb-card-story-block__item" shadow="${a.HOVER}">Hover</fb-card>
    <fb-card class="fb-card-story-block__item" shadow="${a.NEVER}">Never</fb-card>
</div>`})},p={parameters:{docs:{source:{code:`
<template>
    <fb-row :gutter="20">
        <fb-col :sm="12" :md="8">
            <fb-card class="card" variant="${e.PRIMARY}">
                <template #header>
                    <span>Primary Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="card" variant="default">
                <template #header>
                    <span>Default Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="card" variant="${e.INFO}">
                <template #header>
                    <span>Info Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="card" variant="${e.SUCCESS}">
                <template #header>
                    <span>Success Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="card" variant="${e.WARNING}">
                <template #header>
                    <span>Warning Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="card" variant="${e.DANGER}">
                <template #header>
                    <span>Danger Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>
    </fb-row>
</template>

<style scoped>
.card {
    max-width: 480px;
    margin: 10px 0;
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbCard:n,FbRow:f,FbCol:b},template:`
<div class="fb-card-story-block">
    <fb-row :gutter="20">
        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" variant="${e.PRIMARY}">
                <template #header>
                    <span>Primary Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" variant="default">
                <template #header>
                    <span>Default Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" variant="${e.INFO}">
                <template #header>
                    <span>Info Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" variant="${e.SUCCESS}">
                <template #header>
                    <span>Success Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" variant="${e.WARNING}">
                <template #header>
                    <span>Warning Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" variant="${e.DANGER}">
                <template #header>
                    <span>Danger Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>
    </fb-row>
</div>`})},m={parameters:{docs:{source:{code:`
<template>
    <fb-row :gutter="20">
        <fb-col :sm="12" :md="8">
            <fb-card class="card" variant="${e.PRIMARY}" effect="${t.DARK}">
                <template #header>
                    <span>Primary Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="card" variant="default" effect="${t.DARK}">
                <template #header>
                    <span>Default Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="card" variant="${e.INFO}" effect="${t.DARK}">
                <template #header>
                    <span>Info Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="card" variant="${e.SUCCESS}" effect="${t.DARK}">
                <template #header>
                    <span>Success Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="card" variant="${e.WARNING}" effect="${t.DARK}">
                <template #header>
                    <span>Warning Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="card" variant="${e.DANGER}" effect="${t.DARK}">
                <template #header>
                    <span>Danger Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>
    </fb-row>
</template>

<style scoped>
.card {
    max-width: 480px;
    margin: 10px 0;
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbCard:n,FbRow:f,FbCol:b},template:`
<div class="fb-card-story-block">
    <fb-row :gutter="20">
        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" variant="${e.PRIMARY}" effect="${t.DARK}">
                <template #header>
                    <span>Primary Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" variant="default" effect="${t.DARK}">
                <template #header>
                    <span>Default Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" variant="${e.INFO}" effect="${t.DARK}">
                <template #header>
                    <span>Info Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" variant="${e.SUCCESS}" effect="${t.DARK}">
                <template #header>
                    <span>Success Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" variant="${e.WARNING}" effect="${t.DARK}">
                <template #header>
                    <span>Warning Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" variant="${e.DANGER}" effect="${t.DARK}">
                <template #header>
                    <span>Danger Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>
    </fb-row>
</div>`})},i={parameters:{docs:{source:{code:`
<template>
    <fb-row :gutter="20">
        <fb-col :sm="12" :md="8">
            <fb-card class="card" header-variant="${e.PRIMARY}">
                <template #header>
                    <span>Primary Header Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="card" body-variant="${e.PRIMARY}">
                <template #header>
                    <span>Primary Body Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="card" footer-variant="${e.PRIMARY}">
                <template #header>
                    <span>Primary Footer Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>
    
        <fb-col :sm="12" :md="8">
            <fb-card class="card" header-variant="${e.PRIMARY}" effect="${t.DARK}">
                <template #header>
                    <span>Primary Header Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="card" body-variant="${e.PRIMARY}" effect="${t.DARK}">
                <template #header>
                    <span>Primary Body Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="card" footer-variant="${e.PRIMARY}" effect="${t.DARK}">
                <template #header>
                    <span>Primary Footer Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>
    </fb-row>
</template>

<style scoped>
.card {
    max-width: 480px;
    margin: 10px 0;
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbCard:n,FbRow:f,FbCol:b},template:`
<div class="fb-card-story-block">
    <fb-row :gutter="20">
        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" header-variant="${e.PRIMARY}">
                <template #header>
                    <span>Primary Header Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" body-variant="${e.PRIMARY}">
                <template #header>
                    <span>Primary Body Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" footer-variant="${e.PRIMARY}">
                <template #header>
                    <span>Primary Footer Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" header-variant="${e.PRIMARY}" effect="${t.DARK}">
                <template #header>
                    <span>Primary Header Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" body-variant="${e.PRIMARY}" effect="${t.DARK}">
                <template #header>
                    <span>Primary Body Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" footer-variant="${e.PRIMARY}" effect="${t.DARK}">
                <template #header>
                    <span>Primary Footer Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>
    </fb-row>
</div>`})},d={parameters:{docs:{source:{code:`
<template>
    <fb-card class="card">
        <template #cover>
            <img
                alt="example"
                :src="imageFile"
            />
        </template>

        <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>

        <template #footer>
            <div class="actions">
                <fb-button :icon="FasGear" link class="action" />
                <fb-divider direction="vertical" />
                <fb-button :icon="FasPencil" link class="action" />
                <fb-divider direction="vertical" />
                <fb-button :icon="FasEllipsis" link class="action" />
            </div>
        </template>
    </fb-card>
</template>

<style scoped>
.card {
    max-width: 300px;
}
.actions {
    display: flex;
}
.action {
    flex: 1;
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbCard:n,FbButton:W,FbDivider:O},setup(){return{FasGear:H,FasEllipsis:U,FasPencil:B,imageFile:q}},template:`
<div class="fb-card-story-block">
    <fb-card class="fb-card-story-block__item">
        <template #cover>
            <img
                alt="example"
                :src="imageFile"
            />
        </template>
        <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
        <template #footer>
            <div class="fb-card-story-block__item-actions">
                <fb-button :icon="FasGear" link class="fb-card-story-block__item-actions-button" />
                <fb-divider direction="vertical" />
                <fb-button :icon="FasPencil" link class="fb-card-story-block__item-actions-button" />
                <fb-divider direction="vertical" />
                <fb-button :icon="FasEllipsis" link class="fb-card-story-block__item-actions-button" />
            </div>
        </template>
    </fb-card>
</div>`})};var y,v,u;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ["hideInSidebar"],
  args: {
    header: "Card name",
    default: "Card body content",
    footer: "Footer content"
  }
}`,...(u=(v=o.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var h,k,F;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-card class="card">
        <template #header>
            <span>Card name</span>
        </template>

        <template #extra>
            <a href="#">More</a>
        </template>

        <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>

        <template #footer>Footer content</template>
    </fb-card>
</template>

<style scoped>
.card {
    max-width: 480px;
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbCard
    },
    template: \`
<div class="fb-card-story-block">
    <fb-card class="fb-card-story-block__item">
        <template #header>
            <span>Card name</span>
        </template>
        <template #extra>
            <a href="#">More</a>
        </template>
        <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
        <template #footer>Footer content</template>
    </fb-card>
</div>\`
  })
}`,...(F=(k=r.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var R,V,_;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-card class="card">
        <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
    </fb-card>
</template>

<style scoped>
.card {
    max-width: 480px;
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbCard
    },
    template: \`
<div class="fb-card-story-block">
    <fb-card class="fb-card-story-block__item">
        <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
    </fb-card>
</div>\`
  })
}`,...(_=(V=s.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var A,$,g;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-card class="card" :bordered="false">
        <template #header>
            <span>Card name</span>
        </template>

        <template #extra>
            <a href="#">More</a>
        </template>

        <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>

        <template #footer>Footer content</template>
    </fb-card>
</template>

<style scoped>
.card {
    max-width: 480px;
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbCard
    },
    template: \`
<div class="fb-card-story-block">
    <fb-card class="fb-card-story-block__item" :bordered="false" shadow="\${CardShadowTypes.NEVER}">
        <template #header>
            <span>Card name</span>
        </template>
        <template #extra>
            <a href="#">More</a>
        </template>
        <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
        <template #footer>Footer content</template>
    </fb-card>
</div>\`
  })
}`,...(g=($=c.parameters)==null?void 0:$.docs)==null?void 0:g.source}}};var L,S,I;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-card class="card" shadow="\${CardShadowTypes.ALWAYS}">Always</fb-card>
    <fb-card class="card" shadow="\${CardShadowTypes.HOVER}">Hover</fb-card>
    <fb-card class="card" shadow="\${CardShadowTypes.NEVER}">Never</fb-card>
</template>

<style scoped>
.card {
    max-width: 480px;
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbCard
    },
    template: \`
<div class="fb-card-story-block">
    <fb-card class="fb-card-story-block__item" shadow="\${CardShadowTypes.ALWAYS}">Always</fb-card>
    <fb-card class="fb-card-story-block__item" shadow="\${CardShadowTypes.HOVER}">Hover</fb-card>
    <fb-card class="fb-card-story-block__item" shadow="\${CardShadowTypes.NEVER}">Never</fb-card>
</div>\`
  })
}`,...(I=(S=l.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var w,P,D;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-row :gutter="20">
        <fb-col :sm="12" :md="8">
            <fb-card class="card" variant="\${VariantTypes.PRIMARY}">
                <template #header>
                    <span>Primary Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="card" variant="default">
                <template #header>
                    <span>Default Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="card" variant="\${VariantTypes.INFO}">
                <template #header>
                    <span>Info Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="card" variant="\${VariantTypes.SUCCESS}">
                <template #header>
                    <span>Success Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="card" variant="\${VariantTypes.WARNING}">
                <template #header>
                    <span>Warning Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="card" variant="\${VariantTypes.DANGER}">
                <template #header>
                    <span>Danger Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>
    </fb-row>
</template>

<style scoped>
.card {
    max-width: 480px;
    margin: 10px 0;
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbCard,
      FbRow,
      FbCol
    },
    template: \`
<div class="fb-card-story-block">
    <fb-row :gutter="20">
        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" variant="\${VariantTypes.PRIMARY}">
                <template #header>
                    <span>Primary Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" variant="default">
                <template #header>
                    <span>Default Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" variant="\${VariantTypes.INFO}">
                <template #header>
                    <span>Info Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" variant="\${VariantTypes.SUCCESS}">
                <template #header>
                    <span>Success Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" variant="\${VariantTypes.WARNING}">
                <template #header>
                    <span>Warning Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" variant="\${VariantTypes.DANGER}">
                <template #header>
                    <span>Danger Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>
    </fb-row>
</div>\`
  })
}`,...(D=(P=p.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var C,E,T;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-row :gutter="20">
        <fb-col :sm="12" :md="8">
            <fb-card class="card" variant="\${VariantTypes.PRIMARY}" effect="\${EffectTypes.DARK}">
                <template #header>
                    <span>Primary Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="card" variant="default" effect="\${EffectTypes.DARK}">
                <template #header>
                    <span>Default Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="card" variant="\${VariantTypes.INFO}" effect="\${EffectTypes.DARK}">
                <template #header>
                    <span>Info Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="card" variant="\${VariantTypes.SUCCESS}" effect="\${EffectTypes.DARK}">
                <template #header>
                    <span>Success Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="card" variant="\${VariantTypes.WARNING}" effect="\${EffectTypes.DARK}">
                <template #header>
                    <span>Warning Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="card" variant="\${VariantTypes.DANGER}" effect="\${EffectTypes.DARK}">
                <template #header>
                    <span>Danger Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>
    </fb-row>
</template>

<style scoped>
.card {
    max-width: 480px;
    margin: 10px 0;
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbCard,
      FbRow,
      FbCol
    },
    template: \`
<div class="fb-card-story-block">
    <fb-row :gutter="20">
        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" variant="\${VariantTypes.PRIMARY}" effect="\${EffectTypes.DARK}">
                <template #header>
                    <span>Primary Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" variant="default" effect="\${EffectTypes.DARK}">
                <template #header>
                    <span>Default Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" variant="\${VariantTypes.INFO}" effect="\${EffectTypes.DARK}">
                <template #header>
                    <span>Info Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" variant="\${VariantTypes.SUCCESS}" effect="\${EffectTypes.DARK}">
                <template #header>
                    <span>Success Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" variant="\${VariantTypes.WARNING}" effect="\${EffectTypes.DARK}">
                <template #header>
                    <span>Warning Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" variant="\${VariantTypes.DANGER}" effect="\${EffectTypes.DARK}">
                <template #header>
                    <span>Danger Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>
    </fb-row>
</div>\`
  })
}`,...(T=(E=m.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var x,N,M;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-row :gutter="20">
        <fb-col :sm="12" :md="8">
            <fb-card class="card" header-variant="\${VariantTypes.PRIMARY}">
                <template #header>
                    <span>Primary Header Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="card" body-variant="\${VariantTypes.PRIMARY}">
                <template #header>
                    <span>Primary Body Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="card" footer-variant="\${VariantTypes.PRIMARY}">
                <template #header>
                    <span>Primary Footer Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>
    
        <fb-col :sm="12" :md="8">
            <fb-card class="card" header-variant="\${VariantTypes.PRIMARY}" effect="\${EffectTypes.DARK}">
                <template #header>
                    <span>Primary Header Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="card" body-variant="\${VariantTypes.PRIMARY}" effect="\${EffectTypes.DARK}">
                <template #header>
                    <span>Primary Body Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="card" footer-variant="\${VariantTypes.PRIMARY}" effect="\${EffectTypes.DARK}">
                <template #header>
                    <span>Primary Footer Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>
    </fb-row>
</template>

<style scoped>
.card {
    max-width: 480px;
    margin: 10px 0;
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbCard,
      FbRow,
      FbCol
    },
    template: \`
<div class="fb-card-story-block">
    <fb-row :gutter="20">
        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" header-variant="\${VariantTypes.PRIMARY}">
                <template #header>
                    <span>Primary Header Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" body-variant="\${VariantTypes.PRIMARY}">
                <template #header>
                    <span>Primary Body Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" footer-variant="\${VariantTypes.PRIMARY}">
                <template #header>
                    <span>Primary Footer Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" header-variant="\${VariantTypes.PRIMARY}" effect="\${EffectTypes.DARK}">
                <template #header>
                    <span>Primary Header Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" body-variant="\${VariantTypes.PRIMARY}" effect="\${EffectTypes.DARK}">
                <template #header>
                    <span>Primary Body Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>

        <fb-col :sm="12" :md="8">
            <fb-card class="fb-card-story-block__in-column-item" footer-variant="\${VariantTypes.PRIMARY}" effect="\${EffectTypes.DARK}">
                <template #header>
                    <span>Primary Footer Variant</span>
                </template>
                <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
                <template #footer>Footer content</template>
            </fb-card>
        </fb-col>
    </fb-row>
</div>\`
  })
}`,...(M=(N=i.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var Y,K,G;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-card class="card">
        <template #cover>
            <img
                alt="example"
                :src="imageFile"
            />
        </template>

        <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>

        <template #footer>
            <div class="actions">
                <fb-button :icon="FasGear" link class="action" />
                <fb-divider direction="vertical" />
                <fb-button :icon="FasPencil" link class="action" />
                <fb-divider direction="vertical" />
                <fb-button :icon="FasEllipsis" link class="action" />
            </div>
        </template>
    </fb-card>
</template>

<style scoped>
.card {
    max-width: 300px;
}
.actions {
    display: flex;
}
.action {
    flex: 1;
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbCard,
      FbButton,
      FbDivider
    },
    setup() {
      return {
        FasGear,
        FasEllipsis,
        FasPencil,
        imageFile
      };
    },
    template: \`
<div class="fb-card-story-block">
    <fb-card class="fb-card-story-block__item">
        <template #cover>
            <img
                alt="example"
                :src="imageFile"
            />
        </template>
        <p v-for="o in 4" :key="o">{{ 'List item ' + o }}</p>
        <template #footer>
            <div class="fb-card-story-block__item-actions">
                <fb-button :icon="FasGear" link class="fb-card-story-block__item-actions-button" />
                <fb-divider direction="vertical" />
                <fb-button :icon="FasPencil" link class="fb-card-story-block__item-actions-button" />
                <fb-divider direction="vertical" />
                <fb-button :icon="FasEllipsis" link class="fb-card-story-block__item-actions-button" />
            </div>
        </template>
    </fb-card>
</div>\`
  })
}`,...(G=(K=d.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};const z=["Component","BasicUsage","Simple","NoBorder","Shadow","Variants","VariantsDark","VariantsParts","MoreContent"],Z=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:r,Component:o,MoreContent:d,NoBorder:c,Shadow:l,Simple:s,Variants:p,VariantsDark:m,VariantsParts:i,__namedExportsOrder:z,default:j},Symbol.toStringTag,{value:"Module"}));export{r as B,Z as C,d as M,c as N,s as S,p as V,o as a,l as b,m as c,i as d};
